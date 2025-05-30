import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="relative pt-4 px-4 text-center border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-medium text-white">
          © 2025 Nobodies. All rights reserved.
        </p>
        <p className="text-3xl -mt-2 italic text-black">
          From nothing. 
        </p>
        <p className="mt-4">Built with ❤️ by <Link target="_blank" href="https://www.clodron.com" className="text-black font-bold">Clodron</Link></p>
      </div>
    </footer>
  );
}
