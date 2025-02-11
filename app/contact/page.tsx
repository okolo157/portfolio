"use client";

import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center min-h-screen p-10 overflow-hidden bg-gray-100">
      {/* Animated Scrolling Text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden">
        <div className="whitespace-nowrap text-8xl font-bold text-black opacity-20 animate-marquee">
          HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU
          &nbsp;
        </div>
      </div>

      <div className="relative z-10 mb-10 md:mb-0 md:mr-10">
        <Image src="/vic.jpg" alt="my image" width={400} height={200} />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <form className="space-y-4 bg-white p-10 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="block mx-auto px-4 py-2 border border-black text-black hover:bg-slate-100 ease-in-out transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
