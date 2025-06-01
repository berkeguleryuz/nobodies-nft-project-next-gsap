"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { RiDiscordFill, RiTwitterXLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed bg-[#C0C0C0] rounded inset-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/no1s/logo.jpg"}
                alt="logo"
                className="w-10 h-10"
                width={40}
                height={40}
              />
            </Link>
          </div>

          <div className="flex h-full items-center">
            <div className="flex gap-4">
              <Link
                href={"https://x.com/No1s_NFT"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-all duration-300">
                <RiTwitterXLine size={24} />
              </Link>
              <div
                onClick={() => toast.success("Discord Coming Soon")}
                className="hover:opacity-50 transition-all duration-300 cursor-pointer">
                <RiDiscordFill size={24} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
