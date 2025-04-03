"use client";

import React from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
});

const About: React.FC = () => {
  const firstImageSet: string[] = ["/newnw.webp", "/directing2.webp"];

  return (
    <>
      <div className="relative flex flex-col items-center min-h-screen p-2 mt-10 bg-black text-white">
        <Image src="/bg-dark.webp" width={300} height={100} alt="background" />

        <h1 className="absolute top-40 font-bold lg:text-[100px] text-4xl mt-10 text-center">
          BORN A CREATIVE
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-[80px] ">
          {firstImageSet.map((src: string, index: number) => (
            <div
              key={index}
              className="relative transition-opacity duration-1000 ease-in-out"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={robotoMono.className}>
        <div className="relative py-10 flex justify-center items-center  text-center text-white text-lg">
          <p className="hidden lg:block absolute left-10 m-10 text-gray-400 font-bold text-4xl">
            *
          </p>

          <p className="w-2/3">
            My journey involves a blend of creativity with technology. I started
            out in filmmaking, where I quickly realized that my true passion lay
            in video editing. There’s something magical about piecing together a
            story through careful cuts and transitions. It felt like crafting a
            masterpiece, and I loved every moment of it.
          </p>

          <p className="hidden lg:block absolute right-10 m-10 font-bold text-gray-400 text-4xl">
            *
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
