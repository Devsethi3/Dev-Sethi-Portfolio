"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoughNotation } from "react-rough-notation";
import { FaStarOfLife } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    imageSrc: "/Synkron.png",
    title: "Synkron A Real Time, collaborative and private workspace platform",
    githubLink: "https://github.com/Devsethi3/Synkron",
    target: "_blank",
    liveLink: "https://synkron.vercel.app",
  },
  {
    imageSrc: "/form-showcase-3.jpeg",
    title: "Quick Form create custom forms with drag and drop ease",
    githubLink: "https://github.com/Devsethi3/Quick-Form-Builder",
    target: "_blank",
    liveLink: "https://quick-form-one.vercel.app",
  },
  {
    imageSrc: "/b1.png",
    title: "NexChat Messaging App with group chat in real time",
    githubLink: "https://github.com/Devsethi3/NexChat-Messaging-App",
    target: "_blank",
    liveLink: "https://nexchat-one.vercel.app",
  },
  {
    imageSrc: "/novis-showcase.png",
    title: "Novis is a modern workflow tool for Task Management",
    githubLink: "https://github.com/Devsethi3/Novis",
    target: "_blank",
    liveLink: "https://novis-dev.vercel.app",
  },
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Common ScrollTrigger configuration
      const commonScrollTrigger = {
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
      };

      // Animate heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          ...commonScrollTrigger,
          trigger: headingRef.current,
        },
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          ...commonScrollTrigger,
          trigger: descriptionRef.current,
        },
      });

      // Animate button
      gsap.from(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          ...commonScrollTrigger,
          trigger: buttonRef.current,
        },
      });

      // Animate project items
      const projectItems = gsap.utils.toArray<HTMLElement>(".project-item"); // Use type assertion
      projectItems.forEach((item) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            ...commonScrollTrigger,
            trigger: item,
          },
        });
      });

      // Stagger animation for project titles
      gsap.from(".project-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          ...commonScrollTrigger,
          trigger: projectsContainerRef.current,
        },
      });
    }, projectsRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={projectsRef}
      className="min-h-screen w-full py-16 container mx-auto px-4"
    >
      <div className="flex flex-col lg:flex-row w-full items-start lg:gap-10 gap-0">
        <div className="lg:w-1/2 w-full h-full">
          <p className="flex items-center lg:justify-start justify-center text-lg gap-3 mb-6">
            <FaStarOfLife className="text-[#E53E6D]" />
            Projects
          </p>
          <h2
            ref={headingRef}
            className="text-4xl lg:text-left text-center lg:text-5xl font-extrabold mb-4"
          >
            Explore our{" "}
            <RoughNotation type="highlight" show={true} color="#E53E6D">
              Projects
            </RoughNotation>
          </h2>
          <p
            ref={descriptionRef}
            className="text-base lg:text-left text-center md:text-lg lg:text-xl max-w-xl lg:my-8 my-5"
          >
            Step into my digital playground and witness the power of creativity
            showcasing a range of web projects that highlights my expertise in building
            scalable and optimized projects.
          </p>
          <motion.button
            onClick={() => router.push("/work")}
            ref={buttonRef}
            className="bg-[#E53E6D] rounded-lg mt-5 flex items-center lg:justify-start justify-center max-w-2xl lg:mx-0 mx-auto py-3 px-6 font-semibold shadow-lg"
            animate={{
              boxShadow: [
                "0px 0px 20px hsl(340deg 100% 70% / 0.2)",
                "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
                "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
              ],
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Projects
          </motion.button>
          <div
            ref={projectsContainerRef}
            className="flex flex-col gap-10 full my-16"
          >
            {projectData.slice(0, 2).map((project, index) => (
              <div key={index} className="project-item">
                <ProjectItem {...project} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:w-1/2 w-full mt-[-20px] lg:mt-0">
          {projectData.slice(2, 4).map((project, index) => (
            <div key={index} className="project-item">
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
