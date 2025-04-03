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
      <div className="flex flex-col bg-black justify-center text-xl sm:text-2xl md:text-3xl p-4 sm:p-6 md:p-10 items-center gap-4 sm:gap-5 md:gap-7 max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 text-white">
          <p>*</p>
          <p className="text-base sm:text-lg md:text-xl">Victor Okolo</p>
          <p>*</p>
        </div>
        <div className="flex justify-center text-xs sm:text-sm md:text-base gap-2 sm:gap-3 md:gap-4 max-w-full px-1">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/okolo157"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors ease-in-out p-2 sm:p-3 m-1"
          >
            Github
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/victorokolo11"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors ease-in-out p-2 sm:p-3 m-1"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/2349110591628"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors ease-in-out p-2 sm:p-3 m-1"
          >
            Whatsapp
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://flowcv.com/resume/ilbnbmi60q"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors ease-in-out p-2 sm:p-3 m-1"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
