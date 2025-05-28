import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar Gupta",
  description: "Software Engineer specializing in building scalable applications, modern user interfaces, and robust backend systems. Passionate about solving real-world problems with clean, efficient code.",
  keywords: [
    "Ankit Kumar Gupta",
    "Ankit Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Web Development",
    "Programming",
    "Tech Enthusiast",
  ],
  openGraph: {
    title: "Ankit Kumar Gupta",
    description: "Software Engineer specializing in building scalable applications, modern user interfaces, and robust backend systems. Passionate about solving real-world problems with clean, efficient code.",
    url: "https://ankitkumar.me",
    siteName: "Ankit Kumar Gupta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}