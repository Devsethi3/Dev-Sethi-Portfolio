"use client";

import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const CallToAction = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 relative rounded-xl mt-20 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[url(/call-to-action.svg)] bg-cover bg-center"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-500 opacity-80"></div> */}

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Have a dream project?
            </h2>
            <p className="lg:mx-auto max-w-[700px] lg:text-2xl text-lg mx-4">
              Let&apos;s transform your vision into stunning reality. Reach out today
              and start the journey to a remarkable brand presence.
            </p>
            <Link
              className="inline-flex lg:py-4 py-2.5 lg:text-xl items-center justify-center rounded-lg border border-rose-300 bg-rose-100 px-8 text-base font-medium text-rose-900 shadow transition-colors hover:bg-rose-200 hover:text-rose-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-400"
              href="/contact"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>
      <footer className="lg:my-10 my-7 flex flex-col lg:flex-row lg:gap-0 gap-5 items-center justify-between">
        <p>&copy; 2024 Dev Sethi. All rights reserved.</p>
        <div className="flex items-center gap-7">
          <Link
            href="https://linkedin.com/in/dev-prasad-sethi-162789326"
            target="_blank"
            className="transition-all hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
          >
            <FaLinkedin
              size={40}
              className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
            />
          </Link>
          <Link
            href="mailto:work.devsethi@gmail.com"
            className="transition-all hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
          >
            <BiLogoGmail
              size={40}
              className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
            />
          </Link>
          <Link
            href="https://github.com/Devsethi3"
            target="_blank"
            className="transition-all hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
          >
            <FaGithub
              size={40}
              className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
            />
          </Link>
          <Link
            href="https://twitter.com/DevSethi45"
            target="_blank"
            className="transition-all hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
          >
            <FaXTwitter
              size={40}
              className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CallToAction;

//
