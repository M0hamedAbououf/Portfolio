"use client";

import dynamic from "next/dynamic";

// Three.js stays out of the first load; the portrait shows immediately and the rings join after.
const HeroRings = dynamic(() => import("./HeroRings"), { ssr: false });

export function HeroArt() {
  return <HeroRings />;
}
