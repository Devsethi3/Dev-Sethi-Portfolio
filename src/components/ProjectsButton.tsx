import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ProjectsButtonProps {
  href?: string | null;
}

const ProjectsButton: React.FC<ProjectsButtonProps> = ({ href }) => {
  const router = useRouter();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={() => router.push(`${href}`)}
        className="bg-white text-black flex items-center gap-3 py-3 px-6 rounded-xl shadow-lg overflow-hidden relative z-10"
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
        }}
      >
        <motion.span
          className="text-lg font-semibold flex items-center gap-2 relative z-10"
          variants={{
            initial: { x: 0 },
          }}
        >
          View Project
          <FiArrowRight size={24} className="text-black" />
        </motion.span>

        {/* <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#f8cad7] to-[#E53E6D] z-0"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        /> */}
      </motion.button>
    </motion.div>
  );
};

export default ProjectsButton;
