"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Navbar from "./Navbar";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/portfolio-bg.jpg')] bg-cover bg-center opacity-70"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      ></motion.div>

      <Navbar />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Content Section */}
      <div className="flex container mx-auto px-4 min-h-screen w-full flex-col items-start justify-end relative lg:pt-0 pt-[-40px] z-10 pb-16 sm:pb-24">
        <motion.h2
          className="text-3xl relative sm:text-3xl md:text-6xl font-extrabold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello There, I&apos;m
          <span className="absolute lg:w-[30%] w-[25%] lg:h-1 h-0.5 bg-white transform top-[50%] left-[120%] -translate-x-1/2 -translate-y-1/2 sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"></span>
        </motion.h2>
        <div className="hidden lg:block">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dev Prasad Sethi
          </motion.h1>
          <motion.h3
            className="text-3xl sm:text-3xl md:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onAnimationComplete={() => setShow(true)} // Set show to true after the animation completes
          >
            <RoughNotationGroup show={show}>
              <span>an</span>
              &nbsp;
              <RoughNotation type="box" show={show}>
                Developer
              </RoughNotation>
              &nbsp; & &nbsp;
              <RoughNotation type="box" show={show}>
                Designer
              </RoughNotation>
              &nbsp;
              <span>from India</span>
            </RoughNotationGroup>
          </motion.h3>
        </div>
        <div className="lg:hidden block">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dev Sethi
          </motion.h1>
          <motion.h3
            className="text-3xl sm:text-3xl md:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            an Web Developer & Designer from India
          </motion.h3>
        </div>
        <motion.p
          className="text-base sm:text-xl font-medium text-white mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am a versatile designer & developer based in the India, dedicated to
          crafting innovative and visually appealing experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-start lg:flex-row flex-col gap-10 w-full"
        >
          <button
            onClick={() => router.push("/contact")}
            className="border-b-2 border-gray-300 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-2.5 text-xl font-semibold transition-all duration-300 group"
          >
            Contact Me
            <MdArrowOutward
              size={23}
              className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" // Moves the icon upwards when hovering over the button
            />
          </button>
          <button
            onClick={() => router.push("/work")}
            className="border-b-2 border-gray-300 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-2.5 text-xl font-semibold transition-all duration-300 group"
          >
            Browse Portfolio
            <MdArrowOutward
              size={23}
              className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" // Moves the icon upwards when hovering over the button
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
