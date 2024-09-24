import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/lib/ToastProvider";

const font = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dev Prasad Sethi | Full-Stack Developer & Designer",
  description:
    "Explore the portfolio of Dev Prasad Sethi, a skilled full-stack developer specializing in creating innovative web solutions and captivating user experiences. Let's turn your ideas into reality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body
        className={`
        ${font.className}
          antialiased`}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
