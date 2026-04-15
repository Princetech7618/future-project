"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// MUI Components & Icons
import { Button, Box, Typography, Tooltip } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";
import MapIcon from "@mui/icons-material/Map";

const ExploreDestinations = () => {
  // Parallax Scroll Effect for the Image
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section className="relative py-24 lg:py-40 bg-[#fdfdff] overflow-hidden">
      
      {/* Background "Cloud" Gradients - Soft & Premium */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#359ade] rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Animated Image Portfolio */}
          <motion.div 
            style={{ scale, rotate }}
            className="md:w-1/2 relative group"
          >
            {/* The Main Image Frame */}
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white z-20">
  
  <div className="w-full h-[300px] lg:h-[450px] overflow-hidden rounded-[2.5rem]">
    <Image
      src="/Images/maldives.jpg"
      alt="Maldives Destination"
      width={600}
      height={700}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
  </div>

  {/* Tag */}
  <motion.div 
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    className="absolute top-8 left-8 bg-white/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/50 flex items-center gap-2 shadow-sm"
  >
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
      Live: Tropical Bliss
    </span>
  </motion.div>

</div>


            {/* Back-Shadow Glow */}
            <div className="absolute inset-0 bg-[#359ade]-400/20 blur-[80px] -z-10 scale-90 translate-y-10" />
          </motion.div>

          {/* Right Side: Content Area */}
          <div className="md:w-1/2 space-y-8 relative">
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <Box className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-[#359ade]-500" />
                <Typography variant="overline" className="text-[#359ade]-600 font-bold tracking-[0.3em]">
                  Dream Escapes
                </Typography>
              </Box> */}

              <h3 className="text-4xl lg:text-5xl font-semibold text-black leading-[1.1] mb-4">
                Explore Our <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#359ade] via-[#359ade] to-[#359ade]">
                  Destinations  
                </span>
              </h3>

              <h4 className="text-xl font-semibold text-slate-700 mb-6 italic border-l-4 border-l-[#359ade] pl-4">
                Custom Packages for Every Journey
              </h4>

              <p className="text-slate-600 leading-relaxed text-lg font-medium max-w-lg mb-8">
                Whether you're looking for adventure in the Himalayas, peace in
                Kerala's backwaters, or the vibrant culture of Rajasthan, we offer
                customizable travel experiences.
              </p>

              {/* Icon Group Feature */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-2">
                   <TravelExploreIcon className="text-[#359ade]" />
                   <span className="text-sm font-bold text-slate-700">Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                   <ExploreIcon className="text-[#359ade]" />
                   <span className="text-sm font-bold text-slate-700">Full Freedom</span>
                </div>
              </div>

              {/* Ultra Premium Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
      <Link
      href="/packages"
      className="bg-[#359ade] cursor-pointer text-white py-4 px-10 rounded-full text-[1rem] font-medium shadow-[0_10px_25px_rgba(53,154,222,0.4)] hover:bg-[#359ade] inline-flex items-center gap-2">
  Explore More →
</Link>
              </motion.div>
            </motion.div>

        
          </div>
        </div>
      </div>
    </section>
  );
};



export default ExploreDestinations;