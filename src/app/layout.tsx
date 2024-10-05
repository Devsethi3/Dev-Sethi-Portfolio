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
  keywords: "Full-Stack Developer, Web Designer, Dev Prasad Sethi, Web Development, User Experience, Innovative Web Solutions, React, Next.js",
  authors: [{ name: "Dev Prasad Sethi" }],
  openGraph: {
    title: "Dev Prasad Sethi | Full-Stack Developer & Designer",
    description: "Skilled full-stack developer creating innovative web solutions.",
    url: "https://dev-sethi.vercel.app",
    siteName: "Dev Prasad Sethi Portfolio",
    images: [
      {
        url: "/favicon.svg", 
        width: 1200,
        height: 630,
        alt: "Dev Prasad Sethi Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    site: "@Devsethi@45",
    creator: "@Devsethi45",
    title: "Dev Prasad Sethi | Full-Stack Developer & Designer",
    description:
      "Explore the portfolio of Dev Prasad Sethi, a skilled full-stack developer specializing in innovative web solutions.",
    images: ["/profile.jpg"], 
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dev Prasad Sethi" />
        
        {/* Open Graph Meta Tags */}
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description}
        />
        <meta name="twitter:site" content={metadata.twitter?.site} />
        <meta name="twitter:creator" content={metadata.twitter?.creator} />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

      </head>
      <body
        className={`
        ${font.className}
        antialiased
      `}
      >
        {/* ARIA landmarks */}
        <ToasterProvider />
        <main>{children}</main>
      </body>
    </html>
  );
}
