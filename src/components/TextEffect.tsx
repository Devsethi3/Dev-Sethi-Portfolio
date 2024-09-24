"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    // Split text into words and characters
    const words = textElement.innerText.split(" ");
    textElement.innerHTML = words
      .map(
        (word) =>
          `<span class="word">${word
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("")}</span>`
      )
      .join(" ");

    const chars = textElement.querySelectorAll(".char");
    const wordSpans = textElement.querySelectorAll(".word");

    gsap.set(chars, { perspective: 400 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 20%",
        scrub: 2,
        markers: false,
      },
    });

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });

    // Parallax effect on words
    wordSpans.forEach((word, i) => {
      gsap.to(word, {
        y: (i + 1) * 10,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // RoughNotation highlight trigger
    ScrollTrigger.create({
      trigger: container,
      start: "top 90%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-[40px] w-full container relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="relative z-10">
        <h2
          ref={textRef}
          className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center lg:text-left font-extrabold leading-tight dark:text-white text-black mix-blend-difference"
        >
          &quot;In the intricate tapestry of creation, design and development are
          threads woven together, each enhancing the other&apos;s vibrancy and
          efficacy&quot;
        </h2>
      </div>
    </div>
  );
};

export default TextEffect;
