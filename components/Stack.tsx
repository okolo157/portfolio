"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Stack() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-black min-h-[50vh] justify-center flex flex-col items-end gap-2 sm:gap-3 md:gap-4 pt-6 sm:p-8 md:p-10">
        <p className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pr-4 sm:pr-6 md:pr-8 lg:pr-10">
          MERN STACK
        </p>
        <p className="text-black pl-2 bg-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:mr-6 md:mr-8 lg:mr-10">
          `CREATIVE` DEVELOPER...
        </p>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pr-4 sm:pr-6 md:pr-8 lg:pr-10">
          I EXPRESS THROUGH {"<CODE />"}
        </p>
        <button
          onClick={() => router.push("/work")}
          className="border p-3 hover:bg-white text-sm mt-2 hover:text-black transition-colors ease-in-out mr-4 sm:mr-6 md:mr-8 lg:mr-10"
        >
          CHECK OUT MY STUFF
        </button>
      </div>
    </div>
  );
}
