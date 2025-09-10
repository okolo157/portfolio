import React, { useEffect, useState, useRef } from "react";
import About from "@/components/About";
import Intro from "@/components/IntroScreen";
import Stack from "@/components/Stack";
import Transitioning from "@/components/Transitioning";
import App from "@/components/App"; // 👈 import your lottie

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
            setStackVisible(entry.isIntersecting || scrollDirection === "down");
          }
          if (entry.target === aboutRef.current) {
            setAboutVisible(entry.isIntersecting || scrollDirection === "down");
          }
          if (entry.target === transRef.current) {
            setStackVisible(entry.isIntersecting || scrollDirection === "down");
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

    <div className="fixed bottom-0 left-0 z-[9999] pointer-events-none">
      <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]">
    <App />
  </div>
</div>

    </div>
  );
}
