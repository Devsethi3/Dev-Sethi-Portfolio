import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import ProjectsButton from "./ProjectsButton";
import Link from "next/link";

interface ProjectItemProps {
  imageSrc: string;
  title: string;
  githubLink: string;
  liveLink: string;
  target?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imageSrc,
  title,
  githubLink,
  liveLink,
  target,
}) => {

  return (
    <div className="project-item">
      <Link href={githubLink} target={target}>
        <div className="relative h-[40vh] lg:h-[80vh] project-image cursor-pointer overflow-hidden group rounded-xl">
          <Image
            src={imageSrc}
            fill
            alt={title}
            className="object-cover group-hover:scale-110 transition-all duration-500 rounded-xl"
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <ProjectsButton />
            <motion.div
              className="absolute bottom-0 hidden md:block right-0 z-10 w-[150px] h-[120px] bg-black rounded-tl-xl group-hover:opacity-100"
              whileHover={{ opacity: 1 }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <MdArrowOutward size={80} className="text-gray-200" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Link>
      <h3 className="project-title lg:text-3xl md:text-2xl text-[1.35rem] text-xl font-extrabold mt-6">
        {title}
      </h3>
      <div className="flex items-start lg:flex-row flex-col lg:gap-10 gap-7 w-full mt-4">
        <Link
          href={githubLink}
          target={target}
          className="border-b-2 border-gray-300 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-2.5 lg:text-xl text-lg font-semibold transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <FaGithub />
            GitHub
          </div>
          <MdArrowOutward
            size={23}
            className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
        <Link
          href={liveLink}
          target={target}
          className="border-b-2 border-gray-300 hover:border-white w-full lg:w-fit justify-between flex items-center gap-2 pb-2.5 lg:text-xl text-lg font-semibold transition-all duration-300 group"
        >
          Visit Live Website
          <MdArrowOutward
            size={23}
            className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
