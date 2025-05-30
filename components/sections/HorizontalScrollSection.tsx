"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CyberGrid, CyberOrb, CyberGlitch } from "@/components/SVGElements";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".scroll-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          end: () => "+=" + window.innerWidth * 3,
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          pinSpacing: true,
          id: "horizontal-scroll",
        },
      });
      panels.forEach((panel) => {
        const panelElement = panel as HTMLElement;
        const title = panelElement.querySelector(".panel-title");
        const infoCard = panelElement.querySelector(".info-card");

        gsap.from(title, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelElement,
            start: "left 80%",
            end: "left 20%",
            scrub: true,
            containerAnimation: gsap.getById("horizontal-scroll"),
          },
        });

        gsap.from(infoCard, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelElement,
            start: "left 70%",
            end: "left 30%",
            scrub: true,
            containerAnimation: gsap.getById("horizontal-scroll"),
          },
        });

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
        className="flex w-[300vw] h-full"
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
                <div className="absolute inset-0"/>

                <div className="absolute inset-0 text-black opacity-20">
                  <CyberGrid size={320} />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small font-orbitron">ENTITY_001</span>
                    <div className="absolute top-1 right-1 text-black opacity-30">
                      <CyberGlitch size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating vector element with SVG integration */}
              <div className="panel-image absolute top-1/4 right-1/4 w-24 h-24 opacity-60">
                <Image
                  src="/no1s/vector-item.svg"
                  alt="Vector Element"
                  fill
                  className="object-contain"
                />
                {/* SVG frame around vector */}
                <div className="absolute inset-0 text-black opacity-40">
                  <CyberOrb size={96} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
                REMEMBERED
              </h3>

              <div className="info-card cyber-card p-8 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"/>
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-12 h-12 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-medium leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-small text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-2 rounded-full"
                      style={{ width: "47%" }}/>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-small text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-panel w-screen h-screen relative flex items-center justify-center">
          <div className="absolute inset-0"/>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full flex items-center justify-center">
              <div className="panel-image image-container w-80 h-96 relative">
                <Image
                  src="/no1s/photo1.jpg"
                  alt="Forgotten Entity"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0"/>

                <div className="absolute inset-0 text-black opacity-20">
                  <CyberGrid size={320} />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small font-orbitron">ENTITY_001</span>
                    <div className="absolute top-1 right-1 text-black opacity-30">
                      <CyberGlitch size={20} />
                    </div>
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
                <div className="absolute inset-0 text-black opacity-40">
                  <CyberOrb size={96} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
                REMEMBERED
              </h3>

              <div className="info-card cyber-card p-8 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"/>
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-12 h-12 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-medium leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-small text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-2 rounded-full"
                      style={{ width: "47%" }}/>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-small text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-panel w-screen h-screen relative flex items-center justify-center">
          <div className="absolute inset-0"/>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full flex items-center justify-center">
              <div className="panel-image image-container w-80 h-96 relative">
                <Image
                  src="/no1s/photo3.jpg"
                  alt="Forgotten Entity"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0"/>

                <div className="absolute inset-0 text-black opacity-20">
                  <CyberGrid size={320} />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="cyber-card p-3 relative">
                    <span className="text-small font-orbitron">ENTITY_001</span>
                    <div className="absolute top-1 right-1 text-black opacity-30">
                      <CyberGlitch size={20} />
                    </div>
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
                <div className="absolute inset-0 text-black opacity-40">
                  <CyberOrb size={96} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="panel-title text-huge font-orbitron text-gradient-cyber">
                REMEMBERED
              </h3>

              <div className="info-card cyber-card p-8 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"/>
                    <span className="text-small font-orbitron uppercase tracking-wider text-black-force">
                      STATUS: AWAKENING
                    </span>
                  </div>
                  <div className="w-12 h-12 image-container">
                    <Image
                      src="/no1s/logo.jpg"
                      alt="Status Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                <p className="text-medium leading-relaxed text-dark-gray-force">
                  Emerging from the void with purpose, these entities begin to
                  form coherent patterns. Memory fragments coalesce into
                  something resembling identity.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      COHERENCE
                    </span>
                    <span className="text-small text-black-force">47%</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-black to-gray-500 h-2 rounded-full"
                      style={{ width: "47%" }}/>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-small font-orbitron text-black-force">
                      IDENTITY STRENGTH
                    </span>
                    <span className="text-small text-black-force">FORMING</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}/>
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
