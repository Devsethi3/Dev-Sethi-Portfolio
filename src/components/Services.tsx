"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {
  FaStarOfLife,
  FaLaptopCode,
  FaPencilRuler,
  FaLightbulb,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Branding",
    description:
      "Let's craft a brand identity that speaks to soul and connects with your customers on a deeper level.",
    imgSrc: "/Preview.png",
    icon: <FaLightbulb />,
  },
  {
    title: "Design",
    description:
      "I'll design websites that are not just visually appealing but also user-friendly and engaging.",
    imgSrc: "/Synkron.png",
    icon: <FaPencilRuler />,
  },
  {
    title: "Development",
    description:
      "I'll build websites that are not only fast and reliable but also future-proof. Using latest technologies like Next.js and React",
    imgSrc: "/development.png",
    icon: <FaLaptopCode />,
  },
];

const Services = () => {
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const service = serviceRef.current;
    if (!service) return;

    ScrollTrigger.create({
      trigger: service,
      start: "top 90%",
      onEnter: () => setShow(true),
      onLeaveBack: () => setShow(false),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const services = serviceRef.current;
    if (!services) return;

    const imageContainers = services.querySelectorAll(".image-container");

    // Create matchMedia to handle responsiveness for different devices
    const mm = gsap.matchMedia();

    // Function to animate each card individually
    const animateCard = (card: HTMLElement) => {
      // Specify card type as HTMLElement
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.1,
          ease: "power3.in",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          },
        }
      );
    };

    // Animate each card on mount
    imageContainers.forEach((card) => {
      animateCard(card as HTMLElement); // Cast card to HTMLElement
    });

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.revert(); // clean up matchMedia
    };
  }, []);

  return (
    <div
      ref={serviceRef}
      className="container relative min-h-screen w-full pb-16 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-10">
        <p className="flex items-center justify-center text-lg gap-3">
          <FaStarOfLife className="text-[#E53E6D]" />
          Services
        </p>
        <h2 className="text-3xl lg:text-5xl font-extrabold mt-5 mb-4 text-white">
          <RoughNotationGroup show={show}>
            <RoughNotation type="highlight" show={show} color="#E53E6D">
              Developer
            </RoughNotation>
            &nbsp; & &nbsp;
            <RoughNotation type="highlight" show={show} color="#E53E6D">
              Designer
            </RoughNotation>
            &nbsp;
            <span>for your needs</span>
          </RoughNotationGroup>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-xl flex items-center gap-8 justify-center flex-col border border-[#ffffff38] bg-[#030106] image-container transform transition-transform duration-700"
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="object-cover w-[300px] h-[200px] rounded-xl shadow-lg"
            />
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl text-white flex items-center justify-center gap-3">
                {service.icon} {service.title}
              </h2>
              <p className="text-lg text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
