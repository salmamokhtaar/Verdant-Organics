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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        </div>

        {/* Product List */}
        <div className="space-y-6">
          
          {/* Product 1 */}
          <div 
            className="flex items-center bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
            data-aos="fade-right"
          >
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mr-6">
              <Image
                src={f4}
                alt="Green Lemon Orange Juice"
                width={80}
                height={80}
              />
            </div>
            
            <div className="flex-1">
              <span className="text-[#80B600] text-sm font-semibold">Special Offer</span>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Green Lemon Orange Juice</h3>
              <p className="text-gray-600 text-sm">Best orange flavor you never miss</p>
            </div>
            
            <div className="text-right mr-6">
              <div className="text-2xl font-bold text-[#80B600]">$24.99</div>
              <div className="text-gray-400 line-through text-sm">$34.99</div>
            </div>
            
            <Link
              href="/shop"
              className="bg-[#80B600] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6a9900] transition-colors duration-300"
            >
              Add to Cart
            </Link>
          </div>

          {/* Product 2 */}
          <div 
            className="flex items-center bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
            data-aos="fade-left"
          >
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mr-6">
              <Image
                src={f5}
                alt="Fresh Almond Seeds"
                width={80}
                height={80}
              />
            </div>
            
            <div className="flex-1">
              <span className="text-orange-500 text-sm font-semibold">Limited Time</span>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Fresh Almond Seeds</h3>
              <p className="text-gray-600 text-sm">Up to 15% off premium quality</p>
            </div>
            
            <div className="text-right mr-6">
              <div className="text-2xl font-bold text-[#80B600]">$69.99</div>
            </div>
            
            <Link
              href="/shop"
              className="bg-[#80B600] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6a9900] transition-colors duration-300"
            >
              Add to Cart
            </Link>
          </div>

          {/* Product 3 */}
          <div 
            className="flex items-center bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
            data-aos="fade-right"
          >
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mr-6">
              <Image
                src={f6}
                alt="Fresh Mango Drinks"
                width={80}
                height={80}
              />
            </div>
            
            <div className="flex-1">
              <span className="text-red-500 text-sm font-semibold">Special Deal</span>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Fresh Mango Drinks</h3>
              <p className="text-gray-600 text-sm">Up to 50% off tropical flavor</p>
            </div>
            
            <div className="text-right mr-6">
              <div className="text-2xl font-bold text-[#80B600]">$19.99</div>
              <div className="text-gray-400 line-through text-sm">$39.99</div>
            </div>
            
            <Link
              href="/shop"
              className="bg-[#80B600] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6a9900] transition-colors duration-300"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}