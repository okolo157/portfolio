import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "200",
});

export default function Page() {
  const projects = [
    {
      title: "[WIP] RECREATE AI WEB APP",
      image: "/screenshot1.jpg",
      technologies:
        "MongoDB, Express, React, NodeJS, GeminiAPI, StyledComponents",
      link: "https://recreate-ai/onrender.com",
    },
    {
      title: "[WIP] SECOND PROJECT",
      image: "/screenshot1.jpg",
      technologies: "Next.js, TypeScript, Tailwind, Firebase, OpenAI API",
      link: "http://github.com",
    },
    {
      title: "[WIP] SECOND PROJECT",
      image: "/screenshot1.jpg",
      technologies: "Next.js, TypeScript, Tailwind, Firebase, OpenAI API",
      link: "http://github.com",
    },
    {
      title: "[WIP] SECOND PROJECT",
      image: "/screenshot1.jpg",
      technologies: "Next.js, TypeScript, Tailwind, Firebase, OpenAI API",
      link: "http://github.com",
    },
    {
      title: "[WIP] SECOND PROJECT",
      image: "/screenshot1.jpg",
      technologies: "Next.js, TypeScript, Tailwind, Firebase, OpenAI API",
      link: "http://github.com",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col gap-16 p-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <Image
            src={project.image}
            width={500}
            height={300}
            alt={project.title}
          />
          <div className="text-center md:text-left flex flex-col gap-4">
            {project.link && (
              <Link
                href={project.link}
                className="font-bold text-3xl hover:text-blue-300 transition-colors ease-in-out"
              >
                {project.title}
              </Link>
            )}
            <p className={robotoMono.className}>{project.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
