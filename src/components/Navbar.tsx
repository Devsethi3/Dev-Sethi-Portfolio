import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaLinkedin, FaUser, FaHome, FaGithub } from "react-icons/fa";
import { RiSuitcaseFill } from "react-icons/ri";
import { BiLogoGmail, BiSolidZap } from "react-icons/bi";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import NavLogo from "./NavLogo";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface SocialLink {
  icon: IconType;
  href: string;
}
const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/dev-prasad-sethi-162789326",
  },
  { icon: BiLogoGmail, href: "mailto:work.devsethi@gmail.com" },
  { icon: FaGithub, href: "https://github.com/Devsethi3" },
  { icon: FaXTwitter, href: "https://twitter.com/DevSethi45" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  // Handle scroll events to show/hide navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Menu items configuration
  const menuItems = [
    { icon: <FaHome />, title: "Home", href: "/" },
    { title: "About", href: "/about", icon: <FaUser /> },
    { title: "Work", href: "/work", icon: <RiSuitcaseFill /> },
    { title: "Contact", href: "/contact", icon: <BiSolidZap /> },
  ];

  // Enhanced animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Enhanced animation variants for individual menu items
  const menuItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // New animation variant for social media icons
  const socialIconVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <motion.div
        className="fixed top-3 z-20 w-full navbar"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className="container border border-[#ffffff06] bg-[#ffffff08] flex justify-between items-center backdrop-blur-xl py-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo Section */}
          <NavLogo />

          {/* Hamburger Menu for Mobile */}
          <motion.div
            className="cursor-pointer text-3xl md:hidden text-white"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMenuAlt4 />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-white">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Link
                  className="text-lg font-semibold flex items-center gap-2 transition-all"
                  href={item.href}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-full bg-black text-white bg-opacity-90 backdrop-blur-lg p-6 z-30"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-8 right-5 p-2 bg-white rounded-lg text-black shadow-lg"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <MdClose size={24} />
              </motion.button>

              {/* Mobile Profile Section */}
              <div className="pt-20 mb-8">
                <NavLogo />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mb-12">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={menuItemVariants}
                    className="block mb-6 text-2xl font-medium"
                  >
                    <Link href={item.href} className="flex items-center gap-5">
                      {item.icon}
                      {item.title}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  onClick={() => router.push("/contact")}
                  className="bg-[#E53E6D] rounded-lg w-full mt-8 flex items-center justify-center py-3 px-4 font-semibold shadow-lg"
                  animate={{
                    boxShadow: [
                      "0px 0px 20px hsl(340deg 100% 70% / 0.2)",
                      "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
                      "0px 0px 30px hsl(340deg 100% 70% / 0.3)",
                    ],
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Ask a Question
                </motion.button>
              </nav>

              {/* Social Media Links */}
              <motion.div
                className="flex justify-between items-center space-x-4 border-t border-[#ffffff1e] pt-5 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1, color: "#E53E6D" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon
                        size={40}
                        className="border p-2 rounded-lg border-[#ffffff06] bg-[#ffffff08]"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
