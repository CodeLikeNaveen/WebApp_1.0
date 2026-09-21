'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(
      theme === 'dark' ||
      (theme === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
    setMounted(true);
  }, [])

  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "");
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
