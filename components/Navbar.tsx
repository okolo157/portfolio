"use client";

import Link from "next/link";
import { useRouter } from "next/compat/router";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    if (router) {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }

    return () => {
      if (router) {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      }
    };
  }, [router]);

  return (
    <nav className="flex justify-center md:justify-between py-5 gap-4 sm:gap-6 md:gap-14 px-4 sm:px-8 md:px-14 bg-black text-white">
      <div className="flex flex-col justify-center w-1/3">
        <Link
          href="/"
          className="flex justify-around hover:opacity-60 ease-in-out cursor-pointer"
        >
          <p className="text-sm sm:text-base cursor-pointer">
            {loading ? "Loading..." : "VICTOR"}
          </p>
          <p className="text-sm sm:text-base">•</p>
        </Link>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
      <div className="flex flex-col justify-center w-1/3">
        <Link
          href="/work"
          className="flex justify-around hover:opacity-60 ease-in-out cursor-pointer"
        >
          <p className="text-sm sm:text-base cursor-pointer">
            {loading ? "Loading..." : "WORK"}
          </p>
          <p className="text-sm sm:text-base">•</p>
        </Link>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
      <div className="flex flex-col justify-center w-1/3">
        <Link
          href="/contact"
          className="flex justify-around hover:opacity-60 ease-in-out cursor-pointer"
        >
          <p className="text-sm sm:text-base cursor-pointer">
            {loading ? "Loading..." : "HMU"}
          </p>
          <p className="text-sm sm:text-base">•</p>
        </Link>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
    </nav>
  );
}
