"use client";

import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />

      <div>{children}</div>
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default ContactLayout;
