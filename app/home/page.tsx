"use client";
import React, { useEffect, useState, useRef } from "react";

import About from "@/components/About";
import Intro from "@/components/IntroScreen";
import Stack from "@/components/Stack";
import Transitioning from "@/components/Transitioning";

export default function Homepage() {
  const [stackVisible, setStackVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const transRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const scrollDirection =
          window.scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = window.scrollY;

        entries.forEach((entry) => {
          if (entry.target === stackRef.current) {
            if (entry.isIntersecting || scrollDirection === "down") {
              setStackVisible(true);
            } else {
              setStackVisible(false);
            }
          }
          if (entry.target === aboutRef.current) {
            if (entry.isIntersecting || scrollDirection === "down") {
              setAboutVisible(true);
            } else {
              setAboutVisible(false);
            }
          }
          if (entry.target === transRef.current) {
            if (entry.isIntersecting || scrollDirection === "down") {
              setStackVisible(true);
            } else {
              setStackVisible(false);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (stackRef.current) observer.observe(stackRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (transRef.current) observer.observe(transRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black">
      <div className="relative">
        <Intro />
        <div
          ref={stackRef}
          className={`transition-opacity duration-500 ease-in-out ${
            stackVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Stack />
        </div>
        <div
          ref={aboutRef}
          className={`transition-opacity duration-500 ease-in-out ${
            aboutVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <About />
        </div>
        <div
          ref={transRef}
          className={`transition-opacity duration-500 ease-in-out ${
            aboutVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Transitioning />
        </div>
      </div>
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none mix-blend-difference">
        <div className="font-bold text-[100px]">*</div>
      </div>
    </div>
  );
}
