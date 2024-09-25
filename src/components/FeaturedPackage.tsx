import React, { useEffect, useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaNpm } from "react-icons/fa";
import { CountPlus } from "react-countplus";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

gsap.registerPlugin(ScrollTrigger);

const FeaturedPackage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const [showAnnotations, setShowAnnotations] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            onEnter: () => setShowAnnotations(true),
            onLeaveBack: () => setShowAnnotations(false),
          },
        });

        tl.from(sectionRef.current, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power3.out",
        })
          .from(
            imageRef.current,
            {
              opacity: 0,
              x: -50,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            contentRef.current,
            {
              opacity: 0,
              x: 50,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.6"
          )
          .from(
            titleRef.current,
            {
              opacity: 0,
              y: 20,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.3"
          )
          .from(
            descriptionRef.current,
            {
              opacity: 0,
              y: 20,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .from(
            countRef.current,
            {
              opacity: 0,
              scale: 0.8,
              duration: 0.4,
              ease: "back.out(1.7)",
            },
            "-=0.2"
          );
      }, sectionRef);

      // Refresh ScrollTrigger after a short delay to ensure proper initialization
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        ctx.revert(); // Clean up GSAP animations
        clearTimeout(refreshTimeout);
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-20 p-5 md:p-12 border border-[#ffffff10] bg-[#ffffff14] rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <h2
        ref={titleRef}
        className="text-3xl md:text-5xl font-bold mb-8 text-white relative z-10 text-center md:text-left"
      >
        Featured NPM Package
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div ref={imageRef} className="w-full md:w-1/2 ">
          <div className="bg-white p-4 rounded-2xl z-10 shadow-lg">
            <Image
              src="/react-countplus.png"
              alt="react-countplus demo"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            react-countplus
          </h3>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-white opacity-90 leading-relaxed"
          >
            A flexible and customizable React component for animated number
            counting. <br /> Built with{" "}
            <RoughNotationGroup show={showAnnotations}>
              <RoughNotation
                type="highlight"
                color="#002eab"
                animationDelay={300}
                animationDuration={800}
              >
                React
              </RoughNotation>
              ,{" "}
              <RoughNotation
                type="highlight"
                color="#027135"
                animationDelay={600}
                animationDuration={800}
              >
                TypeScript
              </RoughNotation>
              , and{" "}
              <RoughNotation
                type="highlight"
                color="#b90c31"
                animationDelay={900}
                animationDuration={800}
              >
                Rollup
              </RoughNotation>
            </RoughNotationGroup>{" "}
            for optimal performance and developer experience.
          </p>
          <div className="flex items-center lg:flex-row flex-col gap-8">
            <Link
              href="https://www.npmjs.com/package/react-countplus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-opacity-90 hover:shadow-lg hover:scale-105"
            >
              <FaNpm size={30} />
              View on NPM
            </Link>

            <div ref={countRef} className="flex items-center gap-2">
              <span className="text-xl text-white">Package Size:</span>
              <span className="text-xl font-bold text-white">
                <CountPlus end={12} suffix="kb" duration={5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackage;
