import React from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
});

export default function Intro() {
  return (
    <div
      className="min-h-screen flex  items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ikoyi-bridge.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={`${robotoMono.className} relative z-10`}>
        <h1 className="text-black text-9xl font-[1000px] pl-4">VICTOR</h1>
      </div>
    </div>
  );
}
