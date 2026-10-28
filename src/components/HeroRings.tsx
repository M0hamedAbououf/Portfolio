"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Mesh } from "three";

const pointer = { x: 0, y: 0 };

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const readAccent = () => getComputedStyle(document.documentElement).getPropertyValue("--ring").trim() || "#D7B79C";

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
