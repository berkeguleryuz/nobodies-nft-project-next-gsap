"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CyberHex } from "@/components/SVGElements";
import StarButton from "@/components/reusable/StarButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-title",
          start: "top 80%",
        },
      });

      gsap.from(".story-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".story-cards",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-0 flex items-center min-h-screen justify-center bg-neutral-900 text-white px-4">
      <div className="max-w-6xl mx-auto mt-24">
        <div className="story-title text-center mb-16">
          <h2 className="text-large text-white font-bold mb-4 font-orbitron">
            NOBODIES
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-700">
              <Image
                src="/no1s/photo.jpg"
                alt="The Anomaly"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="story-cards space-y-12">
            <div className="story-card min-h-96 p-6 py-14 bg-gray-800 rounded-xl border border-gray-700 hover:border-sky-500/30 hover:bg-gray-750 transition-colors duration-200">
              <div className="flex items-start gap-4">
                <CyberHex
                  size={24}
                  className="text-sky-400 mt-1 flex-shrink-0"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-3 font-iceland">
                    NOBODIES is a collection of 2,424 digital shadows born from
                    the void - faceless, nameless, but pulsing with untold
                    potential.
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-raleway">
                    In a world obsessed with identity, we embrace the power of
                    the unseen, where each NFT becomes a vessel for collective
                    stories waiting to unfold.
                  </p>
                  <p>The forgotten are rising; </p>
                  <p>will you stand among them when the void calls? ⚫️</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 mb-12 bg-neutral-950 rounded-xl p-16">
          <h3 className="text-large font-bold text-white mb-3 font-orbitron">
            STORY
          </h3>
          <p className="text-neutral-200 text-3xl font-iceland max-w-4xl mx-auto">
            They were always there—unseen, unremembered, slipping through the
            cracks of the world. Until one day, the shadows began to whisper
            back. Nobodies are the forgotten, the blank slates, the ones who
            exist between the lines. Now, they&apos;re stepping into the light.
            Not as heroes. Not as villains. As something else.
          </p>
          <p className=" mt-16 text-orange-400 text-large font-iceland max-w-2xl mx-auto">
            Your key waits. Will you turn it?
          </p>
          <Link
            href="/the-void"
            className="flex items-center justify-center mt-8">
            <StarButton />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              img: "/no1s/photo7.jpg",
            },
            {
              img: "/no1s/photo6.jpg",
            },
            {
              img: "/no1s/photo3.jpg",
            },
            {
              img: "/no1s/photo1.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400/80 hover:shadow-lg hover:shadow-orange-400/20 hover:bg-gray-700/50 transition-all duration-300 group">
              <div className="w-full h-48 bg-gray-800 relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.img}
                  width={300}
                  height={200}
                  className={`w-full h-full transition-all duration-300 ${
                    item.img.includes("vector") || item.img.includes("logo")
                      ? "object-contain p-6 opacity-70 group-hover:opacity-100"
                      : "object-cover group-hover:brightness-110"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
