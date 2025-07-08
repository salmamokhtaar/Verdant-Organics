"use client";

import React from "react";
import { GiBroccoli } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f4eb] text-gray-700 py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and name */}
        <div className="flex items-center">
          <GiBroccoli className="text-3xl text-[#80B600]" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Verdant</span>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="hover:text-[#80B600] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-[#80B600] hover:text-[#6a9900] transition-colors text-lg"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Verdant. All rights reserved.
      </div>
    </footer>
  );
}
