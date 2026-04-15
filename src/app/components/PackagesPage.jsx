"use client";
import Link from "next/link";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// MUI Icons
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PackagesPage() {
  const brandColor = "#359ade";
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

const packages = [
  {
    id: 1,
    title: "Kashmir Tour",
    location: "Kashmir",
    slug: "kashmir",
    image: "/Images/kashmir1.jpg",
    price: "15,999",
    rating: 4.9
  },
  {
    id: 2,
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    slug: "shimla-manali",
    image: "/Images/simla.jpg",
    price: "18,500",
    rating: 4.8
  },
  {
    id: 3,
    title: "Sikkim Darjeeling Tour",
    location: "Sikkim & West Bengal",
    slug: "sikkim",
    image: "/Images/darjeeling2.jpg",
    price: "17,000",
    rating: 4.7
  },
  {
    id: 4,
    title: "Andaman Tour",
    location: "Andaman & Nicobar",
    slug: "andaman",
    image: "/Images/Andaman.jpg",
    price: "29,999",
    rating: 4.9
  },
  {
    id: 5,
    title: "Rajasthan Tour",
    location: "Rajasthan",
    slug: "rajasthan",
    image: "/Images/rajasthan.jpg",
    price: "14,500",
    rating: 4.6
  },
  {
    id: 6,
    title: "Goa Tour",
    location: "Goa",
    slug: "goa",
    image: "/Images/goa.jpg",
    price: "12,000",
    rating: 4.5
  },
  {
    id: 7,
    title: "Golden Triangle Tour",
    location: "Delhi • Agra • Jaipur",
    slug: "golden-triangle",
    image: "/Images/golden.jpg",
    price: "16,999",
    rating: 4.8
  }
];

  useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".package-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true, // 🔥 IMPORTANT → animation ek hi baar chalega
        },
      }
    );
  }, sectionRef);

  return () => {
    ctx.revert();              // cleanup
    ScrollTrigger.getAll().forEach(t => t.kill()); // 🔥 prevent duplicate triggers
  };
}, []);

  return (
    <div ref={sectionRef} className="bg-[#ffffff] py-20 px-4 sm:px-8 lg:px-20 font-semibold text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Centered & Clean */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase"
          >
            Our Featured <span style={{ color: brandColor }}>Packages</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#359ade] rounded-full mb-6" />
          <p className="text-slate-500 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
            Discover handpicked destinations crafted for the ultimate travel experience. 
            From serene mountains to luxury escapes.
          </p>
        </div>

        {/* 🚀 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`} className="block">

            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="package-card flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 sm:h-50 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  priority={index < 3}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                  <StarIcon sx={{ fontSize: 16, color: "#facc15" }} />
                  <span className="text-xs font-bold text-slate-800">{pkg.rating}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-[#359ade] mb-2">
                  <LocationOnIcon sx={{ fontSize: 16 }} />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold">
                    {pkg.location}
                  </span>
                </div>

                <h3 className="text-sm md:text-xl font-bold text-slate-900  leading-tight uppercase tracking-tight  line-clamp-2 min-h-[3rem]">
                  {pkg.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-base font-medium line-clamp-2 leading-relaxed min-h-[3rem]">
                  Experience world-class hospitality and breathtaking views in our premium {pkg.title} package.
                </p>

                {/* Pricing & Button Area */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    {/* <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Starting Price</span> */}
                    <span className="text-2xl font-bold text-slate-900 tracking-tighter">₹{pkg.price}</span>
                  </div>

                  <button 
                    className="group flex items-center gap-2 bg-[#359ade] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-[#2b85c1] active:scale-95 shadow-lg shadow-blue-100/50"
                  >
                    Explore
                    <ArrowForwardIcon 
                      className="group-hover:translate-x-1 transition-transform" 
                      sx={{ fontSize: 18 }} 
                    />
                  </button>
                </div>
              </div>
            </motion.div>
              </Link>

          ))}
        </div>
      </div>
    </div>
  );
}