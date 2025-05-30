"use client";

import Image from "next/image";
import Link from "next/link";

export default function BridgeSection() {
  return (
    <section
      className="relative pt-32 px-8 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="bridge-bg absolute inset-0 opacity-20">
        <div className="absolute inset-0 "/>
      </div>

      <Image 
        src="/no1s/photo4.jpg"
        alt="Bridge Section"
        fill
        className="object-cover opacity-20"
      />

      <div
        className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="bridge-item text-huge font-orbitron relative text-black-force">
          Join the Circle
          <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-black opacity-40"/>
        </h2>

        <p className="bridge-item text-2xl italic max-w-5xl mx-auto leading-relaxed text-dark-gray-force">
          Bridge your funds to N1CHAIN and become part of the collective. Step
          into the network where nobodies become everything.
        </p>

        <div className="bridge-item">
          <Link
            href="https://soneium.org/en/bridges/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber mt-12 px-12 py-6 text-large inline-block">
            Bridge Now
          </Link>
        </div>
        <p className="bridge-item text-small mt-12 opacity-60 italic font-rajdhani text-dark-gray-force">
          Connect. Transform. Transcend.
        </p>
      </div>
    </section>
  );
}
