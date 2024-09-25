"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaStarOfLife } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import TechStackMarquee from "@/components/TechStackMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded
    if (typeof window !== "undefined") {
      // Create a context for GSAP animations
      const ctx = gsap.context(() => {
        // Header animation
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });

        // About Me section animation
        gsap.from(aboutMeRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: aboutMeRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });

        // Expertise section animation
        gsap.from(expertiseRef.current?.children || [], {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      }, aboutRef); // Scope the context to the aboutRef

      // Cleanup function
      return () => ctx.revert();
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      ref={aboutRef}
      className="w-full relative min-h-screen container lg:pt-24 pt-12 mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col gap-8"
      >
        <Image
          src="/b5.svg"
          width={400}
          height={400}
          className="absolute top-0 right-0 hidden lg:block"
          alt="code"
        />
        <div className="flex items-center justify-center lg:justify-start lg:gap-4 gap-1 border px-6 py-2.5 rounded-lg lg:w-fit w-full border-[#ffffff10] bg-[#ffffff14]">
          <Image
            src="/hello.svg"
            alt="hello"
            width={50}
            height={50}
            className="border p-2 rounded-full border-[#ffffff10] bg-[#ffffff14]"
          />
          <p className="text-xl text-center lg:text-left font-semibold">
            Hello, Explore My Portfolio
          </p>
        </div>

        <motion.h2
          className="xl:text-6xl lg:text-5xl text-4xl font-extrabold lg:hidden text-center block "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onAnimationComplete={() => setShow(true)}
        >
          I&apos;m Dev Prasad Sethi
        </motion.h2>

        <motion.h2
          className="xl:text-6xl lg:block hidden lg:text-5xl text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onAnimationComplete={() => setShow(true)}
        >
          I&apos;m &nbsp;
          <RoughNotation type="highlight" show={show} color="#E53E6D">
            Dev Prasad Sethi
          </RoughNotation>
        </motion.h2>

        <motion.h2
          className="xl:text-5xl text-4xl lg:text-left lg:mt-0 mt-[-10px] text-center font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I Specialize in <br className="md:hidden block" /> &nbsp;
          <span className="border border-[#ffffff10] bg-[#ffffff14] text-[#E53E6D] py-2 px-4 rounded-lg inline-block">
            <ReactTyped
              strings={["Coding", "Designing", "Developing", "Templating"]}
              typeSpeed={100}
              backSpeed={80} // Speed of
              loop // Infinite loop
              loopCount={Infinity} // Set loop count to infinite
              showCursor // Show blinking cursor
              cursorChar="|" // Customize cursor character if needed
            />
          </span>
        </motion.h2>

        <motion.div
          ref={aboutMeRef}
          className="flex w-full border-[#ffffff10] bg-[#ffffff14] p-6 flex-col gap-6 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <div className="flex items-center lg:gap-4 gap-2">
              <Link href="https://twitter.com/DevSethi45" target="_blank">
                <FaXTwitter
                  size={40}
                  className="border p-2 lg:opacity-80 opacity-100 lg:hover:opacity-100 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/dev-prasad-sethi-162789326"
                target="_blank"
              >
                <FaLinkedin
                  size={40}
                  className="border p-2 lg:opacity-80 opacity-100 lg:hover:opacity-100 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
              </Link>
              <Link href="https://github.com/Devsethi3" target="_blank">
                <FaGithub
                  size={40}
                  className="border p-2 lg:opacity-80 opacity-100 lg:hover:opacity-100 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
              </Link>
            </div>
          </div>
          <p className="lg:text-xl md:text-lg text-base opacity-80">
            I am a Full Stack Next.js Developer based in India, dedicated to
            creating high-performance, SEO-optimized web applications. With a
            proven track record of success, I take pride in my ability to
            harness the latest features of Next.js to deliver innovative
            solutions that not only meet but often exceed client expectations.
            
          </p>
          <p className="lg:text-xl md:text-lg text-base opacity-80">
            My passion for technology drives me to stay ahead of industry
            trends, ensuring that I provide exceptional results tailored to each
            project. I thrive on challenges and enjoy collaborating with clients
            to bring their visions to life through effective and efficient web
            development. Let&apos;s connect and explore how I can help elevate your
            digital presence!
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={expertiseRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative min-h-[80vh] mt-16 w-full"
      >
        <Image
          src="/brain.svg"
          alt="brain"
          width={100}
          height={100}
          className="absolute left-20 top-0 -z-10 opacity-50"
        />
        <h3 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl">
          I spent almost a year deep in the Next.js ocean.{" "}
        </h3>
        <h4 className="flex lg:text-2xl text-xl mt-12 mb-5 items-center font-semibold gap-3">
          <FaStarOfLife size={20} className="text-[#E53E6D]" />
          Showcasing My Expertise
        </h4>{" "}
        <p className="mt-6 text-xl">
          - Created an npm package called{" "}
          <Link
            href="https://www.npmjs.com/package/react-countplus"
            target="_blank"
            className="inline"
          >
            <span className="text-[#E53E6D] underline cursor-pointer">
              react-countplus
            </span>{" "}
          </Link>
          for easy and customizable number counting animations in React
          applications.
        </p>
        <p className="mt-6 text-xl">
          - Developed several amazing{" "}
          <span
            onClick={() => router.push("/work")}
            className="text-[#E53E6D] underline cursor-pointer"
          >
            projects
          </span>{" "}
          with unique ideas and designs using the latest tech stack, including
          Next.js, React, TypeScript, and Tailwind CSS.
        </p>
        <div className="relative lg:w-1/2 w-full mx-auto h-36 my-10">
          <Image
            src="/performance.png"
            alt="performance"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h4 className="flex lg:text-2xl text-xl mt-12 mb-5 items-center font-semibold gap-3">
          <FaStarOfLife size={20} className="text-[#E53E6D]" />
          Build and deploy a complex app
        </h4>{" "}
        <p className="mt-6 text-xl">
          - Implemented responsive designs that improved mobile user engagement
          by 42%, significantly reducing bounce rates
        </p>
        <p className="mt-6 text-xl">
          - Optimized database queries cutting API response times by 45% and
          enhancing overall system efficiency
        </p>
        <p className="mt-6 text-xl">
          - Currently Building a integrated custom React components
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <TechStackMarquee />
      </motion.div>
    </div>
  );
};

export default AboutPage;
