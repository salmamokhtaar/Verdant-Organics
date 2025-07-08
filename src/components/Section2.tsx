"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import f4 from "../assets/img/f4.png";
import f5 from "../assets/img/f5.png";
import f6 from "../assets/img/f6.png";
import useAOS from "../hooks/useAOS";

export default function Section2() {
  useAOS();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Large card - Orange Juice */}
          <div className="bg-[#EFF5E9] rounded-lg p-6" data-aos="fade-right">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                <p className="text-[#80B600] font-bold mb-2">Special Offer</p>
                <h3 className="text-2xl font-bold mb-3">
                  Green Lemon Orange Juice
                </h3>
                <p className="text-gray-600 mb-4">
                  BEST ORANGE FLAVOR YOU NEVER MISS
                </p>
                <Link
                  href="/shop"
                  className="bg-[#80B600] text-white font-bold py-2 px-6 rounded-md hover:bg-[#6a9900]"
                >
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={f4}
                  alt="Green Lemon Orange Juice"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Small cards - Stacked */}
          <div className="space-y-6" data-aos="fade-left">
            
            {/* Almond card */}
            <div className="bg-[#EFF5E9] rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 mr-4">
                  <Image
                    src={f5}
                    alt="Almond Seeds"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-[#80B600] font-bold text-sm mb-1">Limited Time</p>
                  <h3 className="text-lg font-bold mb-1">
                    Up to 15% off Fresh Almond Seed
                  </h3>
                  <p className="text-[#80B600] font-bold">From $69.99</p>
                </div>
              </div>
            </div>

            {/* Mango card */}
            <div className="bg-[#EFF5E9] rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-[#80B600] font-bold text-sm mb-1">Special Deal</p>
                  <h3 className="text-lg font-bold mb-3">
                    Up to 50% off Fresh Mango Drinks
                  </h3>
                  <Link
                    href="/shop"
                    className="bg-[#80B600] text-white font-bold py-2 px-4 rounded-md hover:bg-[#6a9900] text-sm"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="w-20 h-20 ml-4">
                  <Image
                    src={f6}
                    alt="Mango Drinks"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}