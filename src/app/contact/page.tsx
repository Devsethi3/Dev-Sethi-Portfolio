"use client";
import Image from "next/image";
import { FC, useState, useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import { LuLoader2 } from "react-icons/lu";
import toast from "react-hot-toast";

const ContactPage: FC = () => {
  const [show, setShow] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a delay to show RoughNotation after animation
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const email = form.user_email.value;
    const message = form.user_message.value;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      toast.error("Message cannot be empty.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          toast.success("Message Sent Succesfully!", {
            style: {
              border: "1px solid #50C878", // Emerald color border
              padding: "12px 16px",
              color: "#155724", // Dark green text for success message
            },
            iconTheme: {
              primary: "#50C878", // Emerald color for the icon
              secondary: "#F0FFF4", // Light green background for the icon
            },
          });
          setLoading(false);
          formRef.current?.reset(); // Reset form fields
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("Failed to send email:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen">
      <div className="container text-center mt-36 mb-14 flex flex-col gap-4">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="lg:text-5xl text-4xl font-extrabold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let&apos;s work &nbsp;
            <RoughNotation
              type="highlight"
              show={show}
              color="#E53E6D"
              animationDuration={800}
            >
              Together
            </RoughNotation>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Ready to connect and collaborate, drop me a line and let&apos;s turn
          ideas into reality!
        </motion.p>
      </div>

      <div className="w-full container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Column - Profile Card */}
        <div className="flex flex-col gap-10">
          <motion.div
            className="p-8 rounded-lg border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg shadow-lg flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <div className="flex border bg-[#ffffff0c] w-fit border-[#ffffff0e] rounded-full items-center mt-2 space-x-2 px-4 py-1">
                  <span className="bg-green-500 w-2.5 animate-pulse h-2.5 rounded-full"></span>
                  <p className="text-xs">Available To Work</p>
                </div>
                <h2 className="lg:text-2xl text-xl font-semibold mt-2">
                  Dev Prasad Sethi
                </h2>
                <p className="text-sm">Developer & Designer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="space-y-4"
          >
            <Link
              href="https://github.com/Devsethi3"
              target="_blank"
              className="flex items-center justify-between border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg p-4 rounded-lg group"
            >
              <div className="flex items-center gap-4">
                <FaGithub
                  size={40}
                  className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
                <span className="font-bold text-xl opacity-75 hover:opacity-100 transition-all group-hover:underline">
                  GitHub
                </span>
              </div>
              <MdArrowOutward
                size={30}
                className="transform transition-all opacity-75 group-hover:opacity-100 duration-300 group-hover:rotate-0 rotate-45" // Moves the icon upwards when hovering over the button
              />
            </Link>
            <Link
              href="mailto:work.devsethi@gmail.com"
              className="flex items-center justify-between border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg p-4 rounded-lg group"
            >
              <div className="flex items-center gap-4">
                <BiLogoGmail
                  size={40}
                  className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
                <span className="font-bold text-xl opacity-75 hover:opacity-100 transition-all group-hover:underline">
                  G-Mail
                </span>
              </div>
              <MdArrowOutward
                size={30}
                className="transform transition-all opacity-75 group-hover:opacity-100 duration-300 group-hover:rotate-0 rotate-45" // Moves the icon upwards when hovering over the button
              />
            </Link>
            <Link
              href="https://linkedin.com/in/dev-prasad-sethi-162789326"
              target="_blank"
              className="flex items-center justify-between border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg p-4 rounded-lg group"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin
                  size={40}
                  className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
                <span className="font-bold text-xl opacity-75 hover:opacity-100 transition-all group-hover:underline">
                  Linkedin
                </span>
              </div>
              <MdArrowOutward
                size={30}
                className="transform transition-all opacity-75 group-hover:opacity-100 duration-300 group-hover:rotate-0 rotate-45" // Moves the icon upwards when hovering over the button
              />
            </Link>
            <Link
              href="https://twitter.com/DevSethi45"
              target="_blank"
              className="flex items-center justify-between border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg p-4 rounded-lg group"
            >
              <div className="flex items-center gap-4">
                <FaXTwitter
                  size={40}
                  className="border p-2 rounded-lg border-[#ffffff10] bg-[#ffffff14]"
                />
                <span className="font-bold text-xl opacity-75 hover:opacity-100 transition-all group-hover:underline">
                  Twitter
                </span>
              </div>
              <MdArrowOutward
                size={30}
                className="transform transition-all opacity-75 group-hover:opacity-100 duration-300 group-hover:rotate-0 rotate-45" // Moves the icon upwards when hovering over the button
              />
            </Link>
          </motion.div>
        </div>
        {/* Right Column - Contact Form */}
        <motion.div
          id="contact-form"
          className="p-8 mb-10 lg:mb-0 rounded-lg border border-[#ffffff10] bg-[#ffffff14] backdrop-blur-lg shadow-lg space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-white">
            I&apos;m Here for Your Questions
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className="w-full p-3 bg-[#ffffff0a] rounded-lg border border-[#ffffff10] focus:outline-none focus:border-[#E53E6D] focus:ring-1 focus:ring-[#E53E6D] transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-3 bg-[#ffffff0a] rounded-lg border border-[#ffffff10] focus:outline-none focus:border-[#E53E6D] focus:ring-1 focus:ring-[#E53E6D] transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="user_message"
                rows={4}
                className="w-full p-3 bg-[#ffffff0a] rounded-lg border border-[#ffffff10] focus:outline-none focus:border-[#E53E6D] focus:ring-1 focus:ring-[#E53E6D] transition-colors resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full flex items-center disabled:pointer-events-none disabled:opacity-50 justify-center gap-2 bg-[#E53E6D] hover:bg-[#c62e5a] font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E6D] focus:ring-opacity-50 transition-colors"
            >
              {loading ? (
                <>
                  Sending <LuLoader2 className="animate-spin h-4 w-4 ml-3" />
                </>
              ) : (
                <>
                  Send a Message
                  <GrSend />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
