"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".scroll-panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 2,
          end: () =>
            "+=" + (containerRef.current?.offsetWidth || window.innerWidth * 3),
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          pinSpacing: true,
          id: "main-horizontal-scroll",
        },
      });

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const title = sectionElement.querySelector(".panel-title");

        if (title) {
          gsap.from(title, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionElement,
              start: "left 70%",
              end: "left 30%",
              scrub: 0.5,
              containerAnimation: gsap.getById("main-horizontal-scroll"),
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden z-20"
      style={{
        position: "relative",
        zIndex: 20,
        height: "100vh",
        overflow: "hidden",
      }}>
      <div
        ref={containerRef}
        className="flex w-[300vw] h-full horizontal-scroll-container"
        id="horizontal-scroll"
        style={{
          transform: "translate3d(0, 0, 0)",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          zIndex: 10,
        }}>
        <div className="scroll-panel w-screen h-screen relative flex items-center justify-center">
          <div className="absolute inset-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full flex items-center justify-center">
              <div className="panel-image image-container w-80 h-96 relative">
                <Image
                  src="/no1s/photo3.jpg"
                  alt="Forgotten Entity"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small font-orbitron">ENTITY_001</span>
                  </div>
                </div>
              </div>

              <div className="panel-image absolute top-1/4 right-1/4 w-24 h-24 opacity-60">
                <Image
                  src="/no1s/vector-item.svg"
                  alt="Vector Element"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
                The 1/1 Hall
              </h3>

              <div className="info-card cyber-card p-8 space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" />
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-10 h-10 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-xs text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-1.5 rounded-full"
                      style={{ width: "47%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-xs text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-black h-1.5 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-panel w-screen h-screen relative flex items-center justify-center">
          <div className="absolute inset-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full flex items-center justify-center">
              <div className="panel-image image-container w-80 h-96 relative">
                <Image
                  src="/no1s/photo5.jpg"
                  alt="Forgotten Entity"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small text-white/50! font-orbitron">ENTITY_002</span>
                  </div>
                </div>
              </div>

              <div className="panel-image absolute top-1/4 right-1/4 w-24 h-24 opacity-60">
                <Image
                  src="/no1s/vector-item.svg"
                  alt="Vector Element"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
              The 1/1 Hall
              </h3>

              <div className="info-card cyber-card p-8 space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" />
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-10 h-10 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-xs text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-1.5 rounded-full"
                      style={{ width: "47%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-xs text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-black h-1.5 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-panel w-screen h-screen relative flex items-center justify-center">
          <div className="absolute inset-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full flex items-center justify-center">
              <div className="panel-image image-container w-80 h-96 relative">
                <Image
                  src="/no1s/photo2.jpg"
                  alt="Forgotten Entity"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small font-orbitron">ENTITY_003</span>
                  </div>
                </div>
              </div>

              <div className="panel-image absolute top-1/4 right-1/4 w-24 h-24 opacity-60">
                <Image
                  src="/no1s/vector-item.svg"
                  alt="Vector Element"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
              The 1/1 Hall
              </h3>

              <div className="info-card cyber-card p-8 space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" />
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-10 h-10 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-xs text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-1.5 rounded-full"
                      style={{ width: "47%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-xs text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5">
                    <div
                      className="bg-black h-1.5 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
