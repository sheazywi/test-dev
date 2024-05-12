import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const navLists = [
  {
    id:1,
    link: "/",
    name: "Home",
  }, 
  {
    id:2,
    link: "/about",
    name: "About",
  }, 
  {
    id:3,
    link: "/blog",
    name: "Blog",
  }, 
  {
    id:4,
    link: "/projects",
    name: "Projects",
  }];

export const team = [
  {
    id: 1,
    name: "Pier-Olivier Boulianne",
    image: "pboulianne.png",
    description: "Pier-Olivier Boulianne is a French software engineer and founder of Starbounded.",
    position: "CEO",
  },
  {
    id: 2,
    name: "Xavier McKoy",
    image: "xmckoy.png",
    description: "Xavier McKoy is a French software engineer and marketing manager of Starbounded.",
    position: "Marketing Manager",
  },
  {
    id: 3,
    name: "Renaud Metlej",
    image: "rmetlej.png",
    description: "Renaud Metlej is a French software engineer and project manager of Starbounded.",
    position: "Project Manager",
  }

]

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
            <div className={inter.className}>{children}</div>
          </main>
        <Footer />
      </body>
    </html>
  );
}
