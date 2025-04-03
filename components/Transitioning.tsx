import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
});

export default function Transitioning() {
  const router = useRouter();
  const secondImageSet: string[] = [
    "/newnew.webp",
    "/tobams.webp",
    "/third.webp",
  ];
  return (
    <div className="bg-white text-black flex flex-col gap-10 my-10 py-10">
      <h1 className=" font-bold lg:text-[100px] text-4xl text-center">
        TRANSITIONING
      </h1>

      <div className={robotoMono.className}>
        <div className="text-center text-lg flex justify-center">
          <p className="w-2/3">
            I coded purely for fun until 2022, when I started taking a deeper
            interest in it. I began exploring ways to apply techniques I had
            learned in media to writing code, which eventually led me to a field
            called &apos;creative coding&apos;. Now, I work with React, Next.js,
            and TypeScript to build dynamic, creative and very user-friendly
            applications.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        {secondImageSet.map((src: string, index: number) => (
          <div
            key={index}
            className="relative transition-opacity duration-1000 ease-in-out flex flex-col"
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
        className="border border-black p-4 hover:bg-black hover:text-white text-sm mt-10 transition-all ease-in-out w-2/3 lg:w-1/4 self-center  shadow-lg hover:shadow-xl text-center"
      >
        CHECK OUT MORE STUFF
      </button>
    </div>
  );
}
