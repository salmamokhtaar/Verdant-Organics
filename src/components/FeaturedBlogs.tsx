"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import f4 from "../assets/img/f4.png";
import f5 from "../assets/img/f5.png";
import f6 from "../assets/img/f6.png";
import useAOS from "../hooks/useAOS";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: StaticImageData;
  date: string;
  author: string;
};

export default function FeaturedBlogs() {
  // Initialize AOS animations
  useAOS();

  // Featured blog posts data
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Benefits of Eating Organic Food",
      excerpt:
        "Discover why organic food is not just a trend but a healthier choice for you and the environment.",
      image: f4,
      date: "June 15, 2023",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Seasonal Vegetables and Their Benefits",
      excerpt:
        "Learn about the best seasonal vegetables and how to incorporate them into your diet for maximum health benefits.",
      image: f5,
      date: "July 22, 2023",
      author: "Michael Brown",
    },
    {
      id: 3,
      title: "How to Start Your Own Organic Garden",
      excerpt:
        "A step-by-step guide to creating your own organic garden at home, even if you have limited space.",
      image: f6,
      date: "August 10, 2023",
      author: "Emily Davis",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            From Our Blog
          </h2>
          <Link
            href="/blog"
            className="text-[#80B600] font-medium hover:text-[#6a9900] transition-colors flex items-center group"
          >
            View All Posts
            <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#80B600] text-white text-xs px-2 py-1 rounded">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-[#80B600] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#80B600] font-medium hover:text-[#6a9900] transition-colors group"
                >
                  Read More
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
