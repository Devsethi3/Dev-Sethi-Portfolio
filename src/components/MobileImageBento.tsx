import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const MobileImageBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Change the transform to horizontal (x-axis) instead of vertical (y-axis)
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -120]); // First slider
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 120]); // Second slider

  // Unique images for each slider
  const images1 = [
    "/light-theme.png",
    "/b1.svg",
    "/novis-showcase.png",
    "/demo-project.webp",
    "/showcase-grid-2.png",
  ];

  const images2 = [
    "/Preview.png",
    "/Synkron.png",
    "/showcase-grid-3.png",
    "/showcase-grid-2.png",
    "/Synkron.png",
  ];

  // type to MotionValue<number>
  const ImageRow: React.FC<{
    xOffset: MotionValue<number>;
    images: string[];
  }> = ({ xOffset, images }) => (
    <motion.div className="flex gap-4" style={{ x: xOffset }}>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={150}
          height={150}
          alt={`Portfolio image ${index + 1}`}
          className="rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ))}
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-6 p-4 overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-6">
        {/* First image row for horizontal sliding */}
        <div className="relative flex-1">
          <ImageRow xOffset={x1} images={images1} />
        </div>
        {/* Second image row for horizontal sliding with offset */}
        <div className="relative flex-1 ml-[-200px]">
          <ImageRow xOffset={x2} images={images2} />
        </div>
      </div>
    </div>
  );
};

export default MobileImageBento;
