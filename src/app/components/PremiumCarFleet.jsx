"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// MUI Icons
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LuggageIcon from "@mui/icons-material/Luggage";
import EastIcon from "@mui/icons-material/East";

const CompactFleet = () => {
  const brandColor = "#359ade";

const fleet = [
  {
    slug: "luxury-fleet",
    title: "Luxury Fleet",
    desc: "Premium sedans for elegant city tours.",
    image: "/Images/luxerycars.jpg",
    seats: "4 Seats",
  },
  {
    slug: "suv-muv",
    title: "SUV/MUV",
    desc: "Rugged builds for mountain expeditions.",
    image: "/Images/suv.jpg",
    seats: "6-7 Seats",
  },
  {
    slug: "van-fleet",
    title: "Van Fleet",
    desc: "Comfortable travel for large groups.",
    image: "/Images/traveler2.jpg",
    seats: "12-16 Seats",
  },
];

  // Animation Variants for Staggered Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="bg-white py-20 px-6 font-semibold">
      <div className="max-w-6xl mx-auto">
        
        {/* 🔥 Header with Reveal Animation */}
        <div className="mb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            {/* Animated Side Bar */}
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-0 w-[4px] rounded-full bg-[#359ade]"
            />

            <div className="pl-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-[#07294d] uppercase tracking-tight mb-3">
                Our <span className="text-[#359ade]">Premium Fleet</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto font-semibold">
                Reliable transportation tailored for every journey and budget.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🚀 Grid with Staggered Reveal */}
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          
          {fleet.map((car, index) => (
              <Link key={index} href={`/cars/${car.slug}`} className="block">

            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer bg-slate-50 rounded-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(53,154,222,0.15)] hover:bg-white"
            >
              {/* Image Container with Smooth Zoom */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute top-3 left-3"
                >
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-[#07294d] shadow-sm">
                    Verified Fleet
                  </span>
                </motion.div>
              </div>

              {/* Compact Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#07294d] mb-2 group-hover:text-[#359ade] transition-colors">
                  {car.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2 font-semibold">
                  {car.desc}
                </p>

                {/* Specs Strip with Icon Pop Animation */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 cursor-pointer">
                    <AirlineSeatReclineNormalIcon sx={{ fontSize: 25, color: brandColor }} />
                    <span className="text-[14px] text-slate-700 font-semibold">{car.seats}</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1.5 cursor-pointer">
                    <LuggageIcon sx={{ fontSize: 25, color: brandColor }} />
                    <span className="text-[14px] text-slate-700 font-semibold">Luggage</span>
                  </motion.div>
                </div>

                {/* Link Arrow with Rotating Effect */}
                {/* <Link href={`/car/${item.slug}`} className="mt-6 flex justify-end cursor-pointer"> */}
                <div className="flex justify-end">
                     <motion.div 
                     whileHover={{ rotate: -45, scale: 1.1 }}
                     className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#359ade] group-hover:border-[#359ade] transition-all cursor-pointer shadow-sm"
                   >
                      <EastIcon className="text-slate-400 group-hover:text-white text-sm" />
                   </motion.div>
                </div>
              </div>
            </motion.div>
                            </Link>

          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CompactFleet;