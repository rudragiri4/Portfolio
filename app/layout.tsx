import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Developer Portfolio",
  description: "A stunning minimalist developer portfolio with Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans overflow-x-hidden`}>
        <CursorFollower />
        {/* Beautiful Light Background Elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#FAFAFA]">
          <div className="absolute inset-0 grid-background opacity-20" />
          
          {/* Soft Mesh Gradient Blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-pink-200/40 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <Navbar />
        <main className="flex flex-col items-center w-full px-4 sm:px-6 pt-32 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
