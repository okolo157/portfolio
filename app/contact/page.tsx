"use client"

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const SERVICE_ID = "service_vkwosh5";
  const TEMPLATE_ID = "template_052jnsd";
  const PUBLIC_KEY = "WdDMD9QO3XkEHNHUP";

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error("Something went wrong! Please try again.");
      } else {
        console.error("An unknown error occurred.");
        toast.error("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center min-h-screen p-10 overflow-hidden bg-gray-100 text-black">
      <ToastContainer position="top-right" autoClose={3000} />

      {imageLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-60 backdrop-blur-sm animate-fade">
          <div className="w-40 h-40 bg-gray-400 rounded-lg animate-pulse"></div>
        </div>
      )}

      <div className="absolute top-1/3 left-0 w-full overflow-hidden">
        <div className="whitespace-nowrap text-8xl font-bold text-black opacity-20 animate-marquee">
          HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU &nbsp; HMU
          &nbsp;
        </div>
      </div>

      <div className="relative z-10 mb-10 md:mb-0 md:mr-10">
        <Image
          src="/porsche.webp"
          alt="my image"
          width={400}
          height={200}
          onLoadingComplete={() => setImageLoading(false)}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <form
          onSubmit={handleOnSubmit}
          className="space-y-4 bg-white p-10 w-full"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
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
              name="from_email"
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
            className="block mx-auto px-4 py-2 border border-black text-black hover:bg-slate-100 ease-in-out transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
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

        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade {
          animation: fade 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}