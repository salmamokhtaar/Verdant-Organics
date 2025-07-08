"use client";

import React, { useState, useEffect } from "react";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiBroccoli } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkClasses = (href: string) =>
    pathname === href
      ? "text-[#80B600] font-bold relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#80B600]"
      : "text-gray-700 hover:text-[#80B600] transition-colors relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#80B600] after:transition-all hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-[#F7F4EB] py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <GiBroccoli className="text-3xl text-[#80B600] transition-transform duration-300 group-hover:scale-110" />
            <h1 className="ml-1 text-xl font-bold md:text-2xl text-[#80B600]">Verdant</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={linkClasses(link.path)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <button className="h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-[#f8f8f8] hover:text-[#80B600] transition-all duration-300 transform hover:scale-105">
              <IoSearch className="text-gray-700 hover:text-[#80B600] transition-colors" />
            </button>
            <button className="h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-[#f8f8f8] hover:text-[#80B600] transition-all duration-300 transform hover:scale-105">
              <LuUser className="text-gray-700 hover:text-[#80B600] transition-colors" />
            </button>
            <button className="h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-[#f8f8f8] hover:text-[#80B600] transition-all duration-300 transform hover:scale-105 relative">
              <MdOutlineShoppingCart className="text-gray-700 hover:text-[#80B600] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#80B600] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-[#f8f8f8] transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <HiX className="text-gray-700" />
              ) : (
                <HiMenu className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white rounded-md shadow-md p-4">
            <ul className="flex flex-col gap-4 font-medium">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={link.path}
                    className={
                      pathname === link.path
                        ? "text-[#80B600] font-bold block py-3 px-2"
                        : "text-gray-700 hover:text-[#80B600] hover:bg-gray-50 transition-colors block py-3 px-2 rounded"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
