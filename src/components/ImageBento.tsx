import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const ImageBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Unique images for each slider
  const images1 = [
    "/light-theme.png",
    "/b1.svg",
    "/Preview.png",
    "/demo-project.webp",
    "/showcase-grid-2.png",
  ];

  const images2 = [
    "/novis-showcase.png",
    "/Synkron.png",
    "/showcase-grid-3.png",
    "/showcase-grid-2.png",
    "/Synkron.png",
  ];

  // Update type to MotionValue<number>
  const ImageColumn: React.FC<{
    yOffset: MotionValue<number>;
    images: string[];
  }> = ({ yOffset, images }) => (
    <motion.div className="flex flex-col gap-4" style={{ y: yOffset }}>
      {images.map((src, index) => (
        <div key={index} className="relative w-[150px] h-[100px]">
          <Image
            src={src}
            fill
            alt={`Portfolio image ${index + 1}`}
            className="rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className="relative max-h-[280px] flex flex-col md:flex-row gap-6 p-4 overflow-hidden"
    >
      <div className="w-1/2 flex gap-6 mb-6 md:mb-0">
        <div className="relative">
          <ImageColumn yOffset={y1} images={images1} />
        </div>
        <div className="relative mt-[-200px]">
          <ImageColumn yOffset={y2} images={images2} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
            Beyond the Code: My Coding Journey{" "}
          </h2>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 text-gray-200 leading-relaxed">
            Throughout my career, I&apos;ve tackled complex web development
            challenges with a creative and solution-oriented mindset. My
            portfolio features projects that showcase my ability to transform
            client visions into tangible results.
            {/* Whether it's optimizing website performance, enhancing user experience, or implementing cutting-edge technologies, I'm committed to delivering exceptional outcomes. */}
          </p>

          {/* Uncomment if you decide to use the button */}
          {/* <motion.button className="px-4 sm:px-6 z-10 py-2 sm:py-3 rounded-lg border border-[#ffffff38] bg-[#030106] transition-colors flex items-center justify-center text-sm sm:text-base">
            View Projects <ArrowRight className="ml-2" size={18} />
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageBento;
