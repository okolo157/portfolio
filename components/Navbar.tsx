import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center md:justify-between py-5 gap-4 sm:gap-6 md:gap-14 px-4 sm:px-8 md:px-14">
      <div className="flex flex-col justify-center w-1/3">
        <div className="flex justify-around hover:opacity-60 ease-in-out">
          <Link href="/home" className="text-sm sm:text-base">
            VICTOR
          </Link>
          <p className="text-sm sm:text-base">•</p>
        </div>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
      <div className="flex flex-col justify-center w-1/3">
        <div className="flex justify-around hover:opacity-60 ease-in-out">
          <Link href="/home" className="text-sm sm:text-base">
            WORK
          </Link>
          <p className="text-sm sm:text-base">•</p>
        </div>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
      <div className="flex flex-col justify-center w-1/3">
        <div className="flex justify-around hover:opacity-60 ease-in-out">
          <Link href="/home" className="text-sm sm:text-base">
            HMU
          </Link>
          <p className="text-sm sm:text-base">•</p>
        </div>
        <hr className="my-2 text-white w-32 sm:w-44 md:w-56 mx-auto self-center border" />
      </div>
    </nav>
  );
}
