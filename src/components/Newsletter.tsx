"use client";

import React, { useState } from "react";
import {
  IoMailOutline,
  IoCheckmarkCircle,
  IoWarning,
} from "react-icons/io5";
import useAOS from "../hooks/useAOS";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Initialize AOS animations
  useAOS();

  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitted(true);

    // Here you'd send the email to your backend
    console.log("Subscribing email:", email);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from-[#80B600] to-[#6a9900] py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <div className="mb-8 md:mb-0 text-center md:text-left md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white text-opacity-90 md:text-lg">
              Get the latest updates on new products, special offers, and
              seasonal tips delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <div className="relative mb-4 sm:mb-0 sm:mr-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoMailOutline className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-white text-gray-900 pl-10 pr-4 py-3 rounded-md w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white ${
                    error ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Your email address"
                  disabled={isSubmitted}
                />
                {error && (
                  <div className="absolute -bottom-6 left-0 text-white text-sm flex items-center">
                    <IoWarning className="mr-1" />
                    {error}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className={`bg-white text-[#80B600] font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isSubmitted
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100"
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <IoCheckmarkCircle className="mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            <p className="text-white text-sm mt-4 opacity-80 flex items-center justify-center sm:justify-start">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
