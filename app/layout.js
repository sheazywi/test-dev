import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const navLists = [
  {
    id:1,
    link: "/",
    name: "Home",
  }, 
  {
    id:2,
    link: "#",
    name: "Blog",
  }, 
  {
    id:3,
    link: "#",
    name: "Projects",
  }];

export const metadata = {
  title: "Starbounded",
  description: "Made with Next.JS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth bg-black">
      <body>
        <Navbar />
          <main>
            <div className={inter.className}>
              {children}
              <Toaster />
            </div>
          </main>
        <Footer />
      </body>
    </html>
  );
}

require('dotenv').config();