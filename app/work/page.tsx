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
      title: "RECREATE AI [🚧WIP] ",
      image: "/screenshot1.webp",
      technologies:
        "MongoDB, Express, React, NodeJS, Mongoose, Gemini, StyledComponents, Render",
      link: "https://recreate-ai.onrender.com",
      description:
        "An AI web app that can be used to convert UI into code from just a screenshot/mockup.",
    },
    {
      title: "TOBAMS BLOG",
      image: "/tobams.webp",
      technologies: "Next.js, TypeScript, Tailwind, Cypress, Vercel",
      link: "https://blogging-app-virid.vercel.app",
      description:
        "Frontend for a website that fetches blog articles using JS fetch from a publicly avalable endpoint. Includes filtering and pagination techniques.",
    },
    {
      title: "METRICS VISUALIZER",
      image: "/metrics.webp",
      technologies:
        "Next.js, TypeScript, Tailwind, Nextauth, Prisma, MySQL, Recharts, Vercel",
      link: "https://agusto-finance-three.vercel.app",
      description:
        "A fully auth enabled website with the ability transform smaller CSV dasets into a comprehensive graph.",
    },
    {
      title: "SCISSOR",
      image: "/scissor.webp",
      technologies: "React, Typescript, Tailwind, NodeJS, Redis, Render",
      link: "https://scissor-app-03ep.onrender.com/",
      description: "A url shortner with included caching using Redis",
    },
    {
      title: "SICKLE AID API  ",
      image: "/sickle.webp",
      technologies:
        "NodeJS, Express, JWT, MongoDB, Mongoose, NodeMailer, Render",
      link: "https://scissor-app-03ep.onrender.com/",
      description: "An API for a react native application called 'sickle-aid'",
    },
    {
      title: "GAWC",
      image: "/gawc.webp",
      technologies: "Wordpress, Elementor, Hostinger",
      link: "https://goldenacewelfareclub.com/",
      description: "A landing page for a social welfare club.",
    },
    {
      title: "NZIMI CLEAN",
      image: "/nzimi.webp",
      technologies: "Html, CSS, JS, Tidio, Jotform, Hostinger",
      link: "https://nzimiclean.de",
      description: "A website for a dutch cleaning company",
    },

    {
      title: "PORTFOLIO",
      image: "/portfolio.webp",
      technologies: "React, SCSS, StyledComponents, gsap, Netlify",
      link: "https://tinyurl.com/victor-okolo",
      description:
        "My previous portfolio website, makes use of css preprocessing tools and techniques and animations using GSAP.",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col gap-16 p-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-center  bg-black text-white"
        >
          <Image
            src={project.image}
            width={500}
            height={300}
            alt={project.title}
          />
          <div className="text-center md:text-left flex flex-col gap-4 w-full md:w-1/2 p-4">
            {project.link && (
              <Link
                href={project.link}
                className="font-bold text-3xl hover:text-blue-300 transition-colors ease-in-out"
              >
                {project.title}
              </Link>
            )}
            <p className="w-full md:w-2/3">{project.description}</p>
            <p className={robotoMono.className}>{project.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
