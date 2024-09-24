"use client";

import { FC } from "react";
import {
  FaStarOfLife,
  FaUserGraduate,
  FaPencilRuler,
  FaLightbulb,
} from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const TextSlider: FC = () => {
  const texts = [
    <span key="3" className="flex items-center gap-2">
      <TbDeviceDesktopAnalytics className="inline-block mr-2" />
      SEO Optimization
    </span>,
    <span key="2" className="flex items-center gap-2">
      <FaLightbulb className="inline-block mr-2" />
      Personal Brand
    </span>,
    <span key="1" className="flex items-center gap-2">
      <FaPencilRuler className="inline-block mr-2" />
      Design Maven
    </span>,
    <span key="4" className="flex items-center gap-2">
      <FaStarOfLife className="inline-block mr-2" />
      Performace
    </span>,
    <span key="8" className="flex items-center gap-2">
      <FaUserGraduate className="inline-block mr-2" />
      Continuous Learner
    </span>,
  ];

  return (
    <div>
      <div className="overflow-hidden relative h-[25vh]">
        <div className="w-full absolute z-[10] bottom-[20%] bg-[#E53E6D] rotate-3 py-4 lg:py-6 sliding-text">
          <div className="sliding-wrapper">
            {[...texts, ...texts].map((text, index) => (
              <span
                key={index}
                className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .sliding-text {
          overflow: hidden;
        }

        .sliding-wrapper {
          display: inline-flex;
          white-space: nowrap;
          animation: slide 30s linear infinite;
        }

        .sliding-span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default TextSlider;
