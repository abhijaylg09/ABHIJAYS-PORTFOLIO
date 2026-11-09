import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhijay L G | Software Developer & AI Solutions Engineer",
  description:
    "Portfolio of Abhijay L G — Computer Science graduate specialized in high-performance real-time systems, multimodal AI, concurrency in Java 21, and scalable full-stack web applications.",
  keywords: [
    "Abhijay L G",
    "Software Developer",
    "AI Developer",
    "Python",
    "Java 21",
    "Next.js",
    "React",
    "OpenCV",
    "ONNX Runtime",
    "FastAPI",
    "Full-Stack Engineer",
  ],
  authors: [{ name: "Abhijay L G" }],
  creator: "Abhijay L G",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijays-portfolio.vercel.app",
    title: "Abhijay L G | Software Developer & AI Solutions Engineer",
    description:
      "High-Performance Real-Time Systems, Multimodal AI Desktop Assistant (N.E.X.U.S), and InterviewForge.",
    siteName: "Abhijay L G Portfolio",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#090d16] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
