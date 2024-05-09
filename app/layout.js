import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starbounded",
  description: "Made with Next.JS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Navbar/>
        <body className={inter.className}>{children}</body>
        <Footer/>
      </html>
    </ClerkProvider>
  );
}
