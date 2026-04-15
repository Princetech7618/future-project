"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// MUI
import { IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const packages = [
  {
    id: 1,
    title: "Kashmir Tour",
    location: "Kashmir",
    slug: "kashmir",
    img: "/Images/kashmir1.jpg"
  },
  {
    id: 2,
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    slug: "shimla-manali",
    img: "/Images/simla.jpg"
  },
  {
    id: 3,
    title: "Sikkim Darjeeling Tour",
    location: "Sikkim & West Bengal",
    slug: "sikkim",
    img: "/Images/darjeeling2.jpg"
  },
  {
    id: 4,
    title: "Andaman Tour",
    location: "Andaman & Nicobar",
    slug: "andaman",
    img: "/Images/Andaman.jpg"
  },
  {
    id: 5,
    title: "Rajasthan Tour",
    location: "Rajasthan",
    slug: "rajasthan",
    img: "/Images/rajasthan.jpg"
  },
  {
    id: 6,
    title: "Goa Tour",
    location: "Goa",
    slug: "goa",
    img: "/Images/goa.jpg"
  },
  {
    id: 7,
    title: "Golden Triangle Tour",
    location: "Delhi • Agra • Jaipur",
    slug: "golden-triangle",
    img: "/Images/golden.jpg"
  }
];

// 🔥 Infinite scroll ke liye duplicate
const loopPackages = [...packages, ...packages];

const PopularTourPackages = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* ✅ HEADER (CENTER + RIGHT BUTTON) */}
        <div className="relative mb-12">

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography className="text-[#359ade] font-bold tracking-[0.2em]">
                DREAM DESTINATIONS
              </Typography>

              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mt-1">
                Popular Tour Packages
              </h2>
            </motion.div>
          </div>

          <Link
            href="/all-packages"
            className="hidden md:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2"
          >
            <span className="text-sm font-semibold text-[#359ade]">
              Explore Now
            </span>

            <IconButton className="bg-white shadow-md hover:bg-blue-50 text-[#359ade]">
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </div>

        {/* ✅ AUTO SCROLL */}
        <div className="overflow-hidden relative">
          <div className="flex gap-3 sm:gap-4 animate-scroll w-max">

            {loopPackages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="flex-none w-[240px] sm:w-[280px] md:w-[320px]"
              >
                <Link href={`/packages/${pkg.slug}`} className="block group">

                  <div className="relative bg-white rounded-[1rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">

                    {/* 🎈 BALLOON EFFECT */}
                    <div className="absolute inset-0 pointer-events-none z-30">
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#46b2fa] rounded-full opacity-40" />
                    </div>

                    {/* IMAGE */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <Image
                        src={pkg.img}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border">
                        <LocationOnIcon sx={{ fontSize: 14 }} className="text-[#359ade]" />
                        <span className="text-[10px] font-bold text-slate-700 uppercase">
                          {pkg.location}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-12 pb-6 px-4 text-center">
                      <h3 className="text-lg sm:text-xl font-medium text-slate-800 group-hover:text-[#359ade] transition">
                        {pkg.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 mt-2 mb-4">
                        Luxury stay & curated sightseeing.
                      </p>

                      <div className="flex justify-center">
                        <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#359ade] group-hover:text-white transition">
                          <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTourPackages;
