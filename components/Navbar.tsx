"use client";

import Link from "next/link";
import { useRouter } from "next/compat/router";
import React, { useState, useEffect, useRef } from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  loading?: boolean;
};

const NavLink = ({ href, children, loading }: NavLinkProps) => (
  <Link
    href={href}
    className="flex justify-around hover:opacity-60 ease-in-out transition-opacity cursor-pointer"
  >
    <p className="text-sm sm:text-base cursor-pointer">
      {loading ? "Loading..." : children}
    </p>
    <p className="text-sm sm:text-base">•</p>
  </Link>
);

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-center md:justify-between py-5 gap-4 sm:gap-6 md:gap-14 px-4 sm:px-8 md:px-14 bg-black text-white">
      {/* Left - VICTOR */}
      <div className="flex flex-col justify-center w-1/3">
        <NavLink href="/" loading={loading}>
          VICTOR
        </NavLink>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>

      {/* Middle - WORK dropdown */}
      <div className="flex flex-col justify-center w-1/3">
        <div
          className="flex justify-around cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div ref={dropdownRef} className="relative">
            <button
              className="text-sm sm:text-base cursor-pointer hover:opacity-60 transition-opacity"
              aria-expanded={showDropdown}
              aria-haspopup="true"
            >
              {loading ? "Loading..." : "WORK"}
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 bg-black text-white p-4 rounded shadow-lg min-w-[150px] z-20">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/work"
                    className="block hover:opacity-60 transition-opacity"
                    onClick={() => setShowDropdown(false)}
                  >
                    Tech
                  </Link>
                  <Link
                    href="/design"
                    className="block hover:opacity-60 transition-opacity"
                    onClick={() => setShowDropdown(false)}
                  >
                    Design / 3D
                  </Link>
                </div>
              </div>
            )}
          </div>
          <p className="text-sm sm:text-base">•</p>
        </div>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>

      {/* Right - HMU */}
      <div className="flex flex-col justify-center w-1/3">
        <NavLink href="/contact" loading={loading}>
          HMU
        </NavLink>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
    </nav>
  );
}
