"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SiPowerpages } from "react-icons/si";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      <div className="mb-6">
        <SiPowerpages size={150} className="text-primary mx-auto" />
      </div>
      <h1 className="text-5xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button
        className="px-6 py-3 rounded-md text-white bg-[#E53E6D] bg-primary hover:bg-primary-dark transition duration-300"
        onClick={handleGoHome}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
