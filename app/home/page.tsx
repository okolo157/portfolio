"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
});

const HomePage: React.FC = () => {
  const [showImages, setShowImages] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100) {
        setShowImages(true);
      } else {
        setShowImages(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define image source arrays with explicit typing
  const firstImageSet: string[] = [
    "/directing.jpg",
    "/camera2.jpg",
    "/directing2.jpg",
  ];
  const secondImageSet: string[] = ["/editing new.jpg", "/new editing.jpg"];
  const thirdImageSet: string[] = ["/CODE 1.jpg", "/CODE 2.jpg", "/setup.jpg"];

  return (
    <>
      <div className="relative flex flex-col items-center min-h-screen p-2 mt-10">
        <Image src="/bg-dark.jpg" width={300} height={100} alt="background" />

        <h1 className="font-bold lg:text-[100px] text-4xl mt-10 text-center">
          BORN A CREATIVE
        </h1>

        {/* First Image Set */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 m-[100px]">
          {firstImageSet.map((src: string, index: number) => (
            <div
              key={index}
              className={`relative w-[600px] h-[400px] transition-opacity duration-1000 ease-in-out ${
                showImages ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={robotoMono.className}>
        <div className="m-10 p-10 text-center text-white text-lg flex justify-center">
          <p className="w-2/3">
            My journey involves a blend of creativity with technology. I started
            out in filmmaking, where I quickly realized that my true passion lay
            in video editing. There’s something magical about piecing together a
            story through careful cuts and transitions—it felt like crafting a
            masterpiece, and I loved every moment of it.
          </p>
        </div>
      </div>

      {/* Second Image Set */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 m-[100px]">
        {secondImageSet.map((src: string, index: number) => (
          <div
            key={index}
            className={`relative w-[600px] h-[400px] transition-opacity duration-1000 ease-in-out ${
              showImages ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <div className={robotoMono.className}>
        <div className="m-10 p-10 text-center text-white text-lg flex justify-center">
          <p className="w-2/3">
            I coded purely for fun until 2022, when I started taking a deeper
            interest in it. I began exploring ways to apply techniques I had
            learned in media to writing code, which eventually led me to web
            development and specifically a field called &apos;creative
            coding&apos;. Now, I work with React, Next.js, and TypeScript to
            build dynamic, user-friendly applications that bring ideas to life.
          </p>
        </div>
      </div>

      {/* Third Image Set */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 m-[100px]">
        {thirdImageSet.map((src: string, index: number) => (
          <div
            key={index}
            className={`relative w-[200px] h-[400px] transition-opacity duration-1000 ease-in-out ${
              showImages ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
