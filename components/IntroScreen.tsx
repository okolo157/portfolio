"use client";

import React, { useState, useEffect, useRef } from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  const [bgImage, setBgImage] = useState("");
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBgImage("url('/ikoyi-bridge.jpg')");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = introRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={introRef}
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: bgImage,
        backgroundAttachment: "fixed",
      }}
    >
      <div className={`${robotoMono.className} relative z-10`}>
        <h1 className="text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pl-2 sm:pl-4">
          VICTOR
        </h1>
      </div>
    </div>
  );
}
