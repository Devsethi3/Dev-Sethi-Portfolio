"use client";

import React from "react";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";

const AboutPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative">
        <Navbar />

        <div>{children}</div>
        <FAQ />
        <CallToAction />
      </div>
    </div>
  );
};

export default AboutPageLayout;
