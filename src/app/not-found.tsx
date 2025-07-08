import Link from 'next/link'
import { GiBroccoli } from 'react-icons/gi'
import { FaHome, FaShoppingCart, FaLeaf } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F4EB] to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 Text */}
            <h1 className="text-[150px] md:text-[200px] font-bold text-[#80B600] opacity-20 leading-none">
              404
            </h1>
            
            {/* Broccoli Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <GiBroccoli className="text-6xl md:text-8xl text-[#80B600] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Looks like this page got lost in our organic garden! 🌱
          </p>
          <p className="text-gray-500">
            The page you&rsquo;re looking for might have been moved, deleted, or doesn&rsquo;t exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-[#80B600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6a9900] transition-colors duration-300 flex items-center justify-center"
          >
            <FaHome className="mr-2" />
            Go Home
          </Link>
          
          <Link
            href="/shop"
            className="bg-white text-[#80B600] border-2 border-[#80B600] px-8 py-3 rounded-lg font-semibold hover:bg-[#80B600] hover:text-white transition-colors duration-300 flex items-center justify-center"
          >
            <FaShoppingCart className="mr-2" />
            Shop Now
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">Or try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-[#80B600] hover:text-[#6a9900] font-medium transition-colors duration-300"
            >
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-[#80B600] hover:text-[#6a9900] font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/blog"
              className="text-[#80B600] hover:text-[#6a9900] font-medium transition-colors duration-300"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-center mb-3">
            <FaLeaf className="text-[#80B600] mr-2" />
            <span className="font-semibold text-gray-800">Did you know?</span>
          </div>
          <p className="text-gray-600 text-sm">
            While you&rsquo;re here, broccoli is packed with vitamin C - more than oranges! 
            Check out our fresh organic produce in the shop.
          </p>
        </div>
      </div>
    </div>
  )
}