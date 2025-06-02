import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import GitHubCalendar from "@/components/GithubCalendar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "200",
});

export default function Page() {
  const projects = [
    {
      title: "ONEPOWER X",
      image: "/onepower.png",
      technologies:
        "NextJS, PHP, Digital Ocean, Paystack, BILL PAYMENT VAS (CORALPAY, BUYPOWER, VTPASS etc), MySQL",
      link: "https://onepower.ng",
      description: "A lightning fast bill payment web-app.",
    },
    {
      title: "RECREATE AI [🚧WIP] ",
      image: "/screenshot1.webp",
      technologies:
        "MongoDB, Express, React, NodeJS, Mongoose, Gemini, StyledComponents, Render",
      link: "https://recreate-ai.onrender.com",
      description:
        "An AI web app that converts UI designs into code from a screenshot/mockup.",
    },
    {
      title: "TOBAMS BLOG",
      image: "/tobams.webp",
      technologies: "Next.js, TypeScript, Tailwind, Cypress, Vercel",
      link: "https://blogging-app-virid.vercel.app",
      description:
        "Frontend for a blog that fetches articles via JS fetch with filtering and pagination.",
    },
    {
      title: "METRICS VISUALIZER",
      image: "/metrics.webp",
      technologies:
        "Next.js, TypeScript, Tailwind, Nextauth, Prisma, MySQL, Recharts, Vercel",
      link: "https://agusto-finance-three.vercel.app",
      description:
        "A fully auth-enabled website transforming CSV datasets into graphs.",
    },
    {
      title: "SCISSOR",
      image: "/scissor.webp",
      technologies: "React, TypeScript, Tailwind, NodeJS, Redis, Render",
      link: "https://scissor-app-03ep.onrender.com/",
      description: "A URL shortener with Redis caching.",
    },
    {
      title: "SICKLE AID API",
      image: "/sickle.webp",
      technologies:
        "NodeJS, Express, JWT, MongoDB, Mongoose, NodeMailer, Render",
      description: "An API for a React Native app called 'Sickle-Aid'.",
    },
    {
      title: "GAWC",
      image: "/gawc.webp",
      technologies: "WordPress, Elementor, Hostinger",
      link: "https://goldenacewelfareclub.com/",
      description: "A landing page for a social welfare club.",
    },
    {
      title: "NZIMI CLEAN",
      image: "/nzimi.webp",
      technologies: "HTML, CSS, JS, Tidio, Jotform, Hostinger",
      link: "https://nzimiclean.de",
      description: "A website for a Dutch cleaning company.",
    },
    {
      title: "PORTFOLIO",
      image: "/portfolio.webp",
      technologies: "React, SCSS, StyledComponents, GSAP, Netlify",
      link: "https://tinyurl.com/victor-okolo",
      description:
        "My previous portfolio website, featuring CSS preprocessing and GSAP animations.",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col gap-16 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.title}
                className=" object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 flex flex-col gap-3 text-center md:text-left">
              {project.link ? (
                <Link
                  href={project.link}
                  className="font-bold text-2xl md:text-3xl text-blue-400 hover:text-blue-300 transition-colors ease-in-out"
                >
                  {project.title}
                </Link>
              ) : (
                <h3 className="font-bold text-2xl md:text-3xl">
                  {project.title}
                </h3>
              )}
              <p className="text-gray-300">{project.description}</p>
              <p className={`text-sm text-gray-400 ${robotoMono.className}`}>
                {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Stats Section */}
      <div className="flex flex-col gap-6 items-center w-full">
        <hr className="border-white w-4/5" />
        <p className="font-bold text-lg">GitHub Stats</p>
        <GitHubCalendar username="okolo157" />
      </div>
    </div>
  );
}
