"use client";

import { useRef } from "react";
import Image from "next/image";

export default function TheVoid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="void"
      className="relative text-white py-20 px-8 overflow-hidden min-h-screen flex flex-col items-center">
      <Image
        src="/no1s/background.jpg"
        alt="Void Background"
        priority
        quality={100}
        fill
        className="object-cover"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center relative z-30 flex-1 flex flex-col justify-center">
        <h2 className="text-large font-orbitron mb-20 relative text-white">
          Coming soon
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </h2>
      </div>
    </section>
  );
}
