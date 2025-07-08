"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import useAOS from "../hooks/useAOS";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Initialize AOS animations
  useAOS();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Saara Ali",
      role: "Health Enthusiast",
      quote:
        "I&rsquo;ve been ordering from Broccoli Organics for over a year now, and the quality of their produce is consistently excellent. Everything is always fresh and tastes amazing!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Shafie Hassan",
      role: "Chef",
      quote:
        "As a professional chef, I&rsquo;m very particular about the ingredients I use. Broccoli Organics provides the freshest organic produce that makes all my dishes stand out.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Halima Nur",
      role: "Mother of Two",
      quote:
        "Finding organic food that my kids actually enjoy eating was a challenge until I discovered Broccoli Organics. Their fruits are sweet, and the vegetables are so fresh!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // Handle navigation
  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMobile, activeIndex, nextTestimonial]);

  return (
    <div className="bg-[#F7F4EB] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&rsquo;t just take our word for it - hear from our satisfied customers
            about their experience with our organic products.
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="relative">
            <div
              className="transition-all duration-500 ease-in-out"
              data-aos="fade-up"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg relative mx-auto max-w-md">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#80B600] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md">
                  <FaQuoteLeft className="text-xl" />
                </div>

                <div className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#80B600]">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <p className="text-gray-600 mb-6 italic">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-[#80B600] font-medium">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-[#80B600] w-6"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#80B600] hover:bg-[#80B600] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#80B600] hover:bg-[#80B600] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -top-5 left-8 bg-[#80B600] w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md">
                  <FaQuoteLeft />
                </div>

                <div className="flex items-center mb-4 pt-4">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full border-2 border-[#80B600]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-[#80B600] text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
