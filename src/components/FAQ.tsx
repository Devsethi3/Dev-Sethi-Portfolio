"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "@/lib/faqData";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const FAQ: React.FC = () => {
  const faqRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const faq = faqRef.current;
    if (!faq) return;

    ScrollTrigger.create({
      trigger: faq,
      start: "top 90%",
      onEnter: () => setShow(true),
      onLeaveBack: () => setShow(false),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      ref={faqRef}
      className="relative min-h-screen w-full lg:pt-10 pt-0 pb-8 flex flex-col items-center container justify-center"
    >
      <div className="text-center lg:mb-12 mb-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 mb-4">
          Frequently Asked &nbsp;
          <RoughNotation type="highlight" show={show} color="#E53E6D">
            Questions
          </RoughNotation>
        </h2>
        <p className="text-lg lg:text-xl text-gray-300">
          If your question isn&apos;t addressed here, feel free to reach out.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:gap-12 gap-24 w-full">
        <div className="w-full border border-[#ffffff3c] lg:w-1/3 min-h-[60vh] rounded-lg p-8 shadow-lg relative lg:sticky top-16 flex flex-col justify-center items-center">
          <Image src="/faq-1.svg" alt="ask-question" width={200} height={200} />
          <h3 className="text-2xl font-bold mb-4">Ask a Question</h3>
          <p className="text-gray-300 text-center">
            Here&apos;s what some of my satisfied clients have to say about my work
          </p>
          <motion.button
            onClick={() => router.push("/contact")}
            className="bg-[#E53E6D] rounded-lg mt-5 flex items-center py-3 px-4 font-semibold shadow-lg"
            animate={{
              boxShadow: [
                "0px 0px 20px hsl(340deg 100% 70% / 0.2)",
                "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
                "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
              ],
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ask a Question
          </motion.button>
        </div>

        <div className="w-full lg:w-2/3 space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#ffffff3c] rounded-md shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => handleToggle(index)}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <h4 className="lg:text-xl text-lg font-semibold">
                  {faq.question}
                </h4>
                <motion.div transition={{ duration: 0.3 }}>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-lg text-gray-300 ml-3" />
                  ) : (
                    <FaChevronDown className="text-lg text-gray-300 ml-3" />
                  )}
                </motion.div>
              </motion.div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={{
                      expanded: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="p-4 lg:text-xl text-lg text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
