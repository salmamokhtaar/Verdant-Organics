"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import food from "../assets/img/f2.png";
import useAOS from "../hooks/useAOS";

export default function Hero() {
  // Initialize AOS animations when component mounts
  useAOS();

  return (
    <div className="bg-[#F7F4EB] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center">
          {/* Left text */}
          <div
            className="text-center md:text-left md:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-[#80B600] font-bold mb-4 tracking-wider uppercase text-sm">
              100% Genuine Organic Products
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tasty & Healthy <br className="hidden md:block" />
              <span className="text-[#80B600]">Organic Food</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Discover the freshest organic produce, sustainably grown and
              delivered straight to your door. Nourish your body with nature&rsquo;s
              best.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#80B600] text-white font-bold py-3 px-8 rounded-md hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>

          {/* Right image */}
          <div
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image
              src={food}
              alt="Delicious organic food"
              className="max-w-full md:max-w-lg transform transition-transform duration-700 hover:scale-105 drop-shadow-xl"
              priority
              // Provide fallback width/height if not auto-detected
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
