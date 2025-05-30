"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import HorizontalScrollSection from "@/components/sections/HorizontalScrollSection";
import BridgeSection from "@/components/sections/BridgeSection";
import VoidSection from "@/components/sections/VoidSection";
import FooterSection from "@/components/sections/FooterSection";
import FluidCursor from "@/components/Cursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="noise-bg relative">
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <HorizontalScrollSection />
        <BridgeSection />
        <VoidSection />
        <FooterSection />
      </div>
      <FluidCursor />
    </main>
  );
}
