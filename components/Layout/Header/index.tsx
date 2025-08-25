"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";


import { useTheme } from "next-themes";
import { HeaderItem } from "@/types/menu";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [sticky, setSticky] = useState(false);


  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${sticky ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {headerData.map((link: HeaderItem) => (
              <div key={link.label}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          <div>
            <ThemeToggler />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X" : <div>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span></div>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg transition-all duration-300 ${isOpen ? "opacity-100 min-h-full w-3xl" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {headerData.map((link: HeaderItem) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </nav>
        </div>
      </div>
    </header>

  );
};

export default Header;
