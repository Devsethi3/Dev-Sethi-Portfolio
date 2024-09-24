import Image from "next/image";
import { motion } from "framer-motion";

const NavLogo = () => {
  return (
    <div>
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/profile.jpg"
          width={45}
          height={45}
          alt="Dev Sethi"
          className="rounded-lg shadow-md"
          loading="lazy"
        />
        <div className="flex flex-col text-white">
          <h4 className="text-xl font-bold">Dev Sethi</h4>
          <span className="text-sm opacity-75 -mt-1">Developer & Designer</span>
        </div>
      </motion.div>
    </div>
  );
};

export default NavLogo;
