"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  CyberOrb,
  CyberHex,
  CyberPulse,
  DataStream,
  CyberFrame,
} from "@/components/SVGElements";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(logoRef.current, {
      scale: 0,
      rotation: 30,
      opacity: 0,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    })
      .from(
        titleRef.current,
        {
          y: 150,
          opacity: 0,
          duration: 1.8,
          ease: "power4.out",
        },
        "-=1",
      )
      .from(
        subtitleRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.8",
      );

    gsap.to(logoRef.current, {
      y: -15,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(heroRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-reset relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
      <div className="absolute inset-0 z-0" />

      <div className="absolute inset-0 opacity-30 block">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 image-container">
          <Image
            src="/no1s/photo.jpg"
            alt="Background Entity 1"
            fill
            className="object-cover filter grayscale opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center text-black opacity-50">
            <CyberFrame size={320} />
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 image-container">
          <Image
            src="/no1s/photo1.jpg"
            alt="Background Entity 2"
            fill
            className="object-cover filter grayscale opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center text-black opacity-40">
            <CyberHex size={240} />
          </div>
        </div>

        <div className="absolute top-1/4 left-8 w-16 h-16 lg:w-20 lg:h-20 opacity-40">
          <Image
            src="/no1s/vector-item.svg"
            alt="Vector Element"
            fill
            className="object-contain"
          />
          <div className="absolute -inset-4 text-black opacity-30">
            <CyberPulse size={60} />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-8 w-16 h-16 lg:w-20 lg:h-20 opacity-50">
          <Image
            src="/no1s/vector-item.svg"
            alt="Vector Element"
            fill
            className="object-contain"
          />
          <div className="absolute -inset-4 text-black opacity-30">
            <CyberOrb size={60} />
          </div>
        </div>
      </div>

      <div className="relative z-20 text-center">
        <div ref={logoRef} className="mb-12 relative">
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/no1s/logo.jpg"
              alt="Nobodies Logo"
              fill
              className="object-cover rounded-full shadow-2xl border-4 border-black/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"/>

            <div className="absolute inset-0 text-black opacity-30">
              <CyberFrame size={200} />
            </div>
          </div>

          <div className="absolute -top-12 -left-12 text-black opacity-40">
            <div className="relative">
              <CyberPulse size={80} />
              <div className="absolute inset-0 flex items-center justify-center">
                <DataStream size={30} />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-16 text-black opacity-40">
            <CyberHex size={70} />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-7xl sm:text-7xl lg:text-massive font-iceland mb-6 sm:mb-8 tracking-wider px-4 text-black">
          NOBODIES
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto leading-tight font-orbitron px-4 text-dark-gray-force"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}>
          a whisper in static. ⚫ shapes without edges, names without mouths.
          the void hums. do you?
        </p>

        {/* Additional visual elements */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-black opacity-60">
            <CyberOrb size={40} />
          </div>
          <div className="text-black opacity-60">
            <CyberHex size={40} />
          </div>
          <div className="text-black opacity-60">
            <CyberOrb size={40} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-pulse"/>
        </div>
      </div>
    </section>
  );
}
