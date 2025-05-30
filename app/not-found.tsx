"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function NotFound() {
  useEffect(() => {
    gsap.fromTo(
      ".glitch-text",
      {
        opacity: 0,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      },
    );

    gsap.fromTo(
      ".error-message",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".return-button",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
      },
    );

    gsap.to(".particle", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-180, 180)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 2,
        from: "random",
      },
    });
  }, []);

  return (
    <div className="noise-bg py-24 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-black opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="glitch-text text-massive font-orbitron mb-4 relative">
            <span className="relative inline-block">
              4
              <span className="absolute inset-0 animate-pulse opacity-50">
                4
              </span>
            </span>
            <span className="glitch-text relative inline-block mx-4">
              0
              <span className="absolute inset-0 text-red-500 opacity-30 animate-ping">
                0
              </span>
            </span>
            <span className="glitch-text relative inline-block">
              4
              <span className="absolute inset-0 animate-pulse opacity-50">
                4
              </span>
            </span>
          </h1>
        </div>

        <div className="error-message mb-12 space-y-4">
          <h2 className="text-huge font-orbitron text-black mb-6">
            VOID DETECTED
          </h2>
          <p className="text-medium font-rajdhani text-gray-800 max-w-2xl mx-auto">
            You&apos;ve ventured into the digital void where this page once
            existed.
            <br />
            Like the nobodies we celebrate, it has transcended its original
            form.
          </p>
          <p className="text-small font-rajdhani text-gray-600 italic">
            &ldquo;In the space between what was and what could be, we find
            infinite possibility.&rdquo;
          </p>
        </div>

        <div className="return-button flex justify-center">
          <Link
            href="/"
            className="btn relative inline-flex items-center justify-center px-8 py-4 font-orbitron font-semibold text-black border-2 border-black transition-all duration-300 hover:bg-black hover:text-white group">
            <div id="container-stars">
              <div id="stars" />
            </div>
            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
            <span className="relative z-10 flex items-center">
              <svg
                className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              RETURN
            </span>
          </Link>
        </div>

        <div className="mt-16 text-small font-rajdhani text-gray-500">
          <p>
            Lost in the digital realm? Every nobody finds their way eventually.
          </p>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-black opacity-20"/>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-black opacity-20"/>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-black opacity-20"/>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-black opacity-20"/>
    </div>
  );
}
