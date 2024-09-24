import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Palette } from "lucide-react";
import Image from "next/image";
import TwitterPosts from "./TwitterPost";
import ImageBento from "./ImageBento";
import MobileImageBento from "./MobileImageBento";
import { useRouter } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

const BentoGrid: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 sm:p-6">
      <div className="grid h-full w-full max-w-7xl grid-cols-2 md:grid-cols-5 grid-rows-[repeat(10,minmax(0,1fr))] md:grid-rows-4 gap-4">
        <motion.div
          className="col-span-2 md:col-span-3 row-span-2 border border-[#ffffff38] relative rounded-lg shadow-lg flex flex-col justify-center p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-20 lg:top-36 left-40 right-0 bottom-0 z-0">
            <Image
              src="/showcase-grid-2.png"
              fill
              alt="Project Showcase"
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white">
              A Showcase of Scalability{" "}
            </h1>
            <p className="text-sm lg:block hidden sm:text-base mb-4 sm:mb-6 text-gray-200">
              Step into my digital playground and witness the power of
              creativity and technology. My portfolio showcases a range of web
              projects that highlight my expertise in crafting scalable,
              user-friendly, and visually stunning solutions.
            </p>
            <p className="text-sm lg:hidden block sm:text-base mb-4 sm:mb-6 text-gray-200">
              Step into my digital playground and witness the power of
              creativity and technology.
            </p>
          </div>
          <motion.button
            onClick={() => router.push("/work")}
            className="px-4 sm:px-6 z-10 py-2 sm:py-3 rounded-lg border border-[#ffffff38] bg-[#030106] transition-colors flex items-center justify-center text-sm sm:text-base"
          >
            View Projects <ArrowRight className="ml-2" size={18} />
          </motion.button>
        </motion.div>
        <motion.div
          className="col-span-2 rounded-lg border border-[#ffffff38] p-3 bg-[#030106] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/portfolio-bg.jpg"
            alt="Latest Project"
            className="w-full h-[100px] object-cover shadow-lg rounded-lg"
          />
        </motion.div>
        <motion.div
          className="col-span-1 rounded-lg border border-[#ffffff38] bg-[#030106] p-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Zap size={24} className="mb-2" />
          <span className="text-sm font-semibold text-center">
            High Performance
          </span>
        </motion.div>
        <motion.div
          className="col-span-1 rounded-lg border border-[#ffffff38] bg-[#030106] p-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Code size={24} className="mb-2" />
          <span className="text-sm font-semibold text-center">Clean Code</span>
        </motion.div>
        <motion.div
          className="col-span-2 md:col-span-3 overflow-hidden bg-[url(/grid.svg)] bg-cover bg-center row-span-2 rounded-lg border border-[#ffffff38] bg-[#030106]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="block lg:hidden">
            <MobileImageBento />
          </div>

          <div className="hidden lg:block">
            <ImageBento />
          </div>
        </motion.div>
        <motion.div
          className="col-span-2 row-span-2 relative overflow-hidden rounded-lg border border-[#ffffff38] bg-[#030106] px-6 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TwitterPosts />
        </motion.div>
        <motion.div
          className="col-span-1 rounded-lg border border-[#ffffff38] bg-[#030106] p-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <IoDocumentTextOutline size={24} className="mb-2" />
          <span className="text-sm sm:text-base font-bold text-center">
            Detailed Documentation{" "}
          </span>
        </motion.div>
        <motion.div
          className="col-span-1 rounded-lg border border-[#ffffff38] bg-[#030106] p-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Palette size={24} className="mb-2" />
          <span className="text-sm sm:text-base font-bold text-center">
            User-Centered Design
          </span>
        </motion.div>

        <motion.div
          className="col-span-2 md:col-span-3 rounded-lg border border-[#ffffff38] bg-[#030106] p-4 flex flex-col sm:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-xl font-bold text-center lg:text-left mb-2 sm:mb-0">
            ✌️ Let&apos;s work together! Send me a message!
          </span>
          <motion.button
            onClick={() => router.push("/contact")}
            className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#ffffff38] bg-[#030106] transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;
