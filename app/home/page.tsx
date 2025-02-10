"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google"; // Import the correct font

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
  //   weight: "700",
});

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [allImagesInView, setAllImagesInView] = useState(false);

  // Use useMemo to memoize the images array
  const images = useMemo(
    () => [
      { rotation: "-rotate-3", src: "/directing1.jpg", triggerOffset: 50 },
      { rotation: "rotate-2", src: "/directing2.jpg", triggerOffset: 200 },
      { rotation: "-rotate-6", src: "/directing3.jpg", triggerOffset: 400 },
      { rotation: "rotate-3", src: "/camera2.jpg", triggerOffset: 600 },
      { rotation: "rotate-2", src: "/audio.jpg", triggerOffset: 800 },
      { rotation: "rotate-3", src: "/directing1.jpg", triggerOffset: 1000 },
      { rotation: "-rotate-2", src: "/directing2.jpg", triggerOffset: 1100 },
      { rotation: "rotate-6", src: "/directing3.jpg", triggerOffset: 1200 },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lastImageTriggerOffset = images[images.length - 1].triggerOffset;
    if (scrollY > lastImageTriggerOffset) {
      setAllImagesInView(true);
    } else {
      setAllImagesInView(false);
    }
  }, [scrollY, images]);

  return (
    <>
      <div className="relative flex items-center flex-col min-h-[200vh] p-2 mt-10">
        {/* Fixed Centered Text */}
        {/* <div className="fixed -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[200px] text-white py-4 px-6 shadow-lg rounded-lg">
          *
        </div> */}

        {/* Background Image */}
        <Image src="/bg-dark.jpg" width={300} height={100} alt="background" />

        <h1 className="font-bold lg:text-[100px] text-4xl mt-10">
          THIS IS MY STORY
        </h1>

        {/* Rotated images with overlay text */}
        <div
          className={`${
            allImagesInView ? "relative" : "fixed"
          } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-full flex justify-center`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute ${image.rotation} max-w-[500px] ${
                ["directing1.jpg", "directing2.jpg", "directing3.jpg"].includes(
                  image.src
                )
                  ? "w-auto h-[600px]"
                  : "w-[400px] h-[400px]"
              } shadow-xl transition-all duration-700
              ${
                scrollY > image.triggerOffset
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-20"
              }
            `}
              style={{ zIndex: scrollY > image.triggerOffset ? index + 1 : 0 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-white font-bold lg:text-[100px] text-4xl m-10 z-40">
        BORN A CREATIVE
      </div>

      <div className={robotoMono.className}>
        <div className="m-10 p-10 text-center text-white text-lg flex justify-center">
          <p className="w-2/3 ">
            Hey there! I’m Victor, and my journey is all about blending
            creativity with technology. I started out in filmmaking, where I
            quickly realized that my true passion lay in video editing. There’s
            something magical about piecing together a story through careful
            cuts and transitions. it felt like crafting a masterpiece, and I
            loved every moment of it. This passion for storytelling eventually
            led me to web development, where I now work with React, Next.js, and
            TypeScript to create dynamic, user-friendly applications that bring
            ideas to life. Lately, I’ve been diving into the exciting world of
            Artificial Intelligence (AI) and Machine Learning (ML). With a solid
            foundation in software engineering, I’ve become really curious about
            deep learning frameworks like TensorFlow and PyTorch. I’m
            particularly interested in building smart systems that can analyze
            data efficiently, especially in areas like natural language
            processing (NLP) and computer vision. I’m on the lookout for
            opportunities that let me work on model training and optimization,
            as well as real-world AI applications like predictive analytics. I
            truly believe that AI has the potential to make mobile and web
            experiences smarter and more intuitive. I’m always eager to learn
            and grow, and I can’t wait to contribute to meaningful projects that
            leverage these technologies to create impactful solutions. The road
            ahead may be challenging, but that’s what makes it all the more
            exciting! 💪🏼
          </p>
        </div>
      </div>
    </>
  );
}
