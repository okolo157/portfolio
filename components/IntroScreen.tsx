import React from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ikoyi-bridge.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={`${robotoMono.className} relative z-10`}>
        <h1 className="text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pl-2 sm:pl-4">
          VICTOR
        </h1>
      </div>
    </div>
  );
}
