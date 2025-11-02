import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: " Architecture | Portfolio & Design Projects",

  description:
    "ReyPro Architecture showcases a professional portfolio of architectural and interior design projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className=" w-full bg-gray-50 text-gray-900 overflow-x-hidden">
        <Navbar />

        <main className="min-h-screen md:mt-[50px] container mx-auto  md:py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
