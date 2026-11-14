"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { TextureLoader, type Mesh } from "three";

const pointer = { x: 0, y: 0 };

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const readAccent = () => getComputedStyle(document.documentElement).getPropertyValue("--ring").trim() || "#D7B79C";

// The portrait fades out at its sides and bottom, so the canvas behind it showed the rings
// through the suit. This invisible cut-out of the portrait sits in front of the rings and
// writes only depth, hiding every part of a ring that passes behind the body.
const OCCLUDER_Z = 4; // in front of the rings, whose radius is at most 3.5
const occluderVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
// Same fades as .hero-portrait's CSS mask: 14% at each side, the bottom 20%.
const occluderFragment = /* glsl */ `
  uniform sampler2D map;
  varying vec2 vUv;
  void main() {
    float side = clamp(vUv.x / 0.14, 0.0, 1.0) * clamp((1.0 - vUv.x) / 0.14, 0.0, 1.0);
    float bottom = clamp(vUv.y / 0.2, 0.0, 1.0);
    if (texture2D(map, vUv).a * side * bottom < 0.02) discard;
    gl_FragColor = vec4(0.0);
  }
`;

function PortraitOccluder() {
  const plane = useRef<Mesh>(null);
  const map = useLoader(TextureLoader, "/me.png");

  useFrame(({ camera, gl }) => {
    const mesh = plane.current;
    const img = gl.domElement.closest(".hero-figure")?.querySelector(".hero-portrait");
    if (!mesh || !img) return;
    const box = gl.domElement.getBoundingClientRect();
    const pic = img.getBoundingClientRect();
    if (!box.height) return;
    const fov = "fov" in camera ? (camera.fov as number) : 30;
    const perPx = (2 * (camera.position.z - OCCLUDER_Z) * Math.tan((fov * Math.PI) / 360)) / box.height;
    mesh.position.set(
      (pic.left + pic.width / 2 - (box.left + box.width / 2)) * perPx,
      (box.top + box.height / 2 - (pic.top + pic.height / 2)) * perPx,
      OCCLUDER_Z,
    );
    mesh.scale.set(pic.width * perPx, pic.height * perPx, 1);
  });

  return (
    <mesh ref={plane} renderOrder={-1}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={{ map: { value: map } }}
        vertexShader={occluderVertex}
        fragmentShader={occluderFragment}
        colorWrite={false}
      />
    </mesh>
  );
}

function Rings({ still }: { still: boolean }) {
  const outer = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);
  const accent = useSyncExternalStore(subscribeTheme, readAccent, () => "#D7B79C");

  useFrame(({ clock }) => {
    const t = still ? 0 : clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.x = 1.25 + Math.sin(t * 0.4) * 0.08 + pointer.y * 0.3;
      outer.current.rotation.y = t * 0.25 + pointer.x * 0.5;
    }
    if (inner.current) {
      inner.current.rotation.x = 1.1 - pointer.y * 0.2;
      inner.current.rotation.y = -t * 0.18;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 6]} intensity={1.6} color="#fff1e0" />
      <directionalLight position={[-6, -2, -3]} intensity={0.8} />
      <Suspense fallback={null}>
        <PortraitOccluder />
      </Suspense>
      <mesh ref={outer}>
        <torusGeometry args={[3.1, 0.075, 32, 200]} />
        <meshStandardMaterial color={accent} metalness={0.85} roughness={0.32} />
      </mesh>
      <mesh ref={inner}>
        <torusGeometry args={[3.5, 0.03, 16, 200]} />
        <meshStandardMaterial color={accent} metalness={0.85} roughness={0.32} />
      </mesh>
    </>
  );
}

export default function HeroRings() {
  const box = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);
  const still = useSyncExternalStore(
    (cb) => {
      const mq = matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.x = e.clientX / innerWidth - 0.5;
      pointer.y = e.clientY / innerHeight - 0.5;
    };
    addEventListener("pointermove", move, { passive: true });
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    if (box.current) io.observe(box.current);
    return () => {
      removeEventListener("pointermove", move);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={box} className="hero-rings" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 30 }}
        dpr={[1, 2]}
        frameloop={!onScreen ? "never" : still ? "demand" : "always"}
        gl={{ antialias: true, alpha: true }}
      >
        <Rings still={still} />
      </Canvas>
    </div>
  );
}
