"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "@/lib/projectData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
import FeaturedPackage from "@/components/FeaturedPackage";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  images: string[];
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [mainImage, setMainImage] = useState<string>(project.images[0]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up the animation for the card
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });
    }, cardRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={cardRef}
      className="border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg rounded-xl overflow-hidden p-6"
    >
      <div className="relative h-48 md:h-64 lg:h-72">
        <Image
          className="rounded-lg w-full h-full object-cover"
          fill
          src={mainImage}
          alt={project.title}
        />
      </div>
      <div className="py-4 md:py-6 space-y-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
          {project.title}
        </h2>
        <p className="text-gray-200 text-base lg:text-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap w-full items-center gap-3 mb-4">
          {project.images.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} thumbnail ${index + 1}`}
              className={`h-14 lg:w-[4.5rem] w-[3.85rem] md:h-16 md:w-[5.2rem] object-cover rounded-lg cursor-pointer transition-opacity duration-300 ${
                img === mainImage
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-60"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="flex items-start lg:flex-row flex-col lg:gap-10 gap-6 w-full">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-gray-300 mt-6 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-1.5 text-lg font-semibold transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <FaGithub />
              GitHub
            </div>
            <MdArrowOutward
              size={20}
              className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-gray-300 mt-6 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-1.5 text-lg font-semibold transition-all duration-300 group"
          >
            Visit Live Website
            <MdArrowOutward
              size={20}
              className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-24 lg:pb-20 pb-14 lg:mt-20 mt-5">
        <div className="text-center lg:mb-16 mb-8">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="lg:text-5xl text-4xl font-extrabold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              My Creative &nbsp;
              <RoughNotation
                type="highlight"
                show={show}
                color="#E53E6D"
                animationDuration={800}
              >
                Portfolio
              </RoughNotation>
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:text-xl text-lg lg:max-w-xl max-w-[20rem] opacity-70 mt-3 mx-auto"
          >
            Explore a showcase of my diverse projects and creations
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <FeaturedPackage />

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Coming Soon</h2>
          <p className="text-xl opacity-80 mb-8 text-white">
            I&apos;m currently building a comprehensive React component library.
            Stay tuned for updates!
          </p>
          <div className="space-y-6">
            <p className="text-lg text-white">
              Interested in collaborating or learning more? Let&apos;s connect!
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://github.com/Devsethi3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/dev-prasad-sethi-162789326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

// Remain all the styles and ui same
// Optimize the code for scroll animation of gsap, it perfectly works in developement but after deployement user have refresh the page to see the elements and scroll animations in this Projects page component
