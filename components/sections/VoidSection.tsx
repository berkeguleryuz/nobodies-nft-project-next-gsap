"use client";

import { useRef } from "react";
import Image from "next/image";


export default function VoidSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="void"
      className="relative bg-neutral-950 text-white py-20 px-8 overflow-hidden min-h-screen flex flex-col items-center">


      <div className="void-bg absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 opacity-20">
            <Image
              src="/no1s/vector-item.svg"
              alt="Void Element"
              fill
              className="object-contain animate-pulse"
            />
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-15">
            <Image
              src="/no1s/vector-item.svg"
              alt="Void Element"
              fill
              className="object-contain animate-spin"
              style={{ animationDuration: "25s" }}
            />
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-center">
        <h2 className="text-large font-orbitron mb-20 relative text-white">
          The Void Chamber
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"/>
        </h2>

        <div className="space-y-12">
          <p className="text-3xl font-orbitron font-bold text-white">
            Silence gathers here.
          </p>

          <p className="text-xl font-rajdhani text-white">
            A hollow space, waiting to be filled.
          </p>

          <p className="text-base font-rajdhani text-white">
            You are early. Too early.
          </p>

          <p className="text-base italic font-rajdhani opacity-60 text-white">
            Return when the shadows align.
          </p>
        </div>

        <div className="mt-24 relative">
          <div ref={symbolRef} className="relative w-48 h-48 mx-auto">
            <div className="void-glow absolute inset-0 bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full"/>

            <div className="image-container w-full h-full">
              <Image
                src="/no1s/vector-item.svg"
                alt="Void Symbol"
                fill
                className="object-contain opacity-60 filter drop-shadow-2xl animate-spin"
                style={{ animationDuration: "25s" }}
              />
            </div>

            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s" }}>
              <div className="absolute top-0 left-1/2 w-4 h-4 transform -translate-x-1/2 animate-ping">
                <div className="w-full h-full bg-white rounded-full opacity-40"/>
              </div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 transform -translate-x-1/2 animate-pulse">
                <div className="w-full h-full bg-white rounded-full opacity-30"/>
              </div>
              <div className="absolute left-0 top-1/2 w-2 h-2 transform -translate-y-1/2 animate-bounce">
                <div className="w-full h-full bg-white rounded-full opacity-25"/>
              </div>
              <div className="absolute right-0 top-1/2 w-2 h-2 transform -translate-y-1/2 animate-pulse">
                <div className="w-full h-full bg-white rounded-full opacity-25"/>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 void-text">
          <p className="text-5xl opacity-50 italic font-rajdhani text-white">
            The void sees you. Do you see the void?
          </p>
        </div>
      </div>
    </section>
  );
}
