"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { useRouter } from "next/navigation";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
});

const About: React.FC = () => {
  const [showImages, setShowImages] = useState<boolean>(false);

  const router = useRouter();

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

  const firstImageSet: string[] = [
    "/directing.jpg",
    "/newnw.png",
    "/audio.jpg",
    "/directing2.jpg",
    "/camera2.jpg",
  ];
  const thirdImageSet: string[] = ["/newnew.jpg", "/tobams.png", "/third.jpg"];

  return (
    <>
      <div className="relative flex flex-col items-center min-h-screen p-2 mt-10 ">
        <Image src="/bg-dark.jpg" width={300} height={100} alt="background" />

        <h1 className="font-bold lg:text-[100px] text-4xl mt-10 text-center">
          BORN A CREATIVE
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-[100px] ">
          {firstImageSet.map((src: string, index: number) => (
            <div
              key={index}
              className={`relative transition-opacity duration-1000 ease-in-out ${
                showImages ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={200}
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

      <div className="bg-slate-100 text-black flex flex-col gap-10 my-10 py-10">
        <h1 className=" font-bold lg:text-[100px] text-4xl text-center">
          TRANSITIONING
        </h1>

        <div className={robotoMono.className}>
          <div className="text-center text-lg flex justify-center">
            <p className="w-2/3">
              I coded purely for fun until 2022, when I started taking a deeper
              interest in it. I began exploring ways to apply techniques I had
              learned in media to writing code, which eventually led me to a
              field called &apos;creative coding&apos;. Now, I work with React,
              Next.js, and TypeScript to build dynamic, creative and very
              user-friendly applications.
            </p>
          </div>
        </div>

        {/* Third Image Set */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
          {thirdImageSet.map((src: string, index: number) => (
            <div
              key={index}
              className={`relative transition-opacity duration-1000 ease-in-out flex flex-col${
                showImages ? "opacity-100" : "opacity-0"
              }`}
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
        <button
          onClick={() => router.push("/work")}
          className="border border-black p-3 hover:bg-white text-sm mt-2 hover:text-black transition-colors ease-in-out w-1/3 lg:w-1/4 self-center"
        >
          CHECK OUT MORE STUFF
        </button>
      </div>
    </>
  );
};

export default About;
