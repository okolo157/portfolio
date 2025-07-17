import React from "react";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <div className={robotoMono.className}>
      <footer className="bg-black text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10 flex flex-col items-center gap-6">
          {/* Name Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-lg sm:text-xl md:text-2xl">
            <span>*</span>
            <span>Victor Okolo</span>
            <span>*</span>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-center px-2">
            {[
              { label: "Github", href: "https://github.com/okolo157" },
              { label: "LinkedIn", href: "https://linkedin.com/in/victorokolo11" },
              { label: "Whatsapp", href: "https://wa.me/2349044848699" },
              { label: "Resume", href: "https://flowcv.com/resume/ilbnbmi60q" },
              { label: "Rate Card", href: "https://okolo157.github.io/rate-card/" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="border border-white px-3 py-1.5 hover:bg-white hover:text-black transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
