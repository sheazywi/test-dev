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

export const metadata = {
  title: "Starbounded",
  description: "Made with Next.JS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
          <main>
            <body className={inter.className}>{children}</body>
          </main>
        <Footer />
      </body>
    </html>
  );
}
