"use client";

import { ReactLenis, useLenis } from "lenis/react";

import HeroSection from "@/components/HeroSection";
import TextSlider from "@/components/TextSlider";
import Services from "@/components/Services";
import BentoGrid from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import TextEffect from "@/components/TextEffect";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {

  return (
    <>
      <ReactLenis root>
        <HeroSection />
        <TextSlider />
        <Services />
        <TextEffect />
        <BentoGrid />
        <Projects />
        <FAQ />
        <CallToAction />
      </ReactLenis>
    </>
  );
};

export default HomePage;
