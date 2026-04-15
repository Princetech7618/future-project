"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutSection = () => {
  const brandColor = "#359ade";

  const packages = [
    "Kashmir & Ladakh",
    "North East & Sikkim",
    "Kerala & South India",
    "Religious & Cultural Tours"
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Creative Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background Decorative Box */}
            <div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-xl opacity-20 z-0"
              style={{ backgroundColor: brandColor }}
            />
            
            <div className="relative z-10 group">
              <Image
                src="/Images/left.jpg"
                alt="Luxury Holiday"
                width={600}
                height={500}
                className="rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(53,154,222,0.2)] transition-all duration-500 object-cover"
              />
              
              {/* Floating Stats Card - Premium Touch */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden sm:block"
              >
                <h4 className="text-3xl font-black" style={{ color: brandColor }}>100+</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Successful Trips</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: High-End Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6">
              {/* Badge */}
              {/* <span 
                className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-2"
                style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
              >
                Our Legacy
              </span> */}

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#07294d] leading-tight">
                Ghumakkar <span style={{ color: brandColor }}>Masti</span>
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-base md:text-lg font-semibold leading-relaxed text-justify">
                A leading Holiday Deal provider in Delhi, we don't just sell packages; we curate 
                <span className="text-[#07294d]"> world-class experiences</span>. From the 
                snow-capped peaks of Kashmir to the serene backwaters of Kerala, 
                our journeys are tailored to your soul.
              </p>

              {/* Custom Package List - 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {packages.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon style={{ color: brandColor, fontSize: 20 }} />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Line */}
              <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
                <button 
                  className="px-8 py-4 rounded-xl cursor-pointer text-white font-semibold text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95 shadow-[#359ade]/30"
                  style={{ backgroundColor: brandColor }}
                >
                  Explore Packages
                </button>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-semibold text-[#359ade] uppercase tracking-widest leading-tight">
                    Trusted by <br/>
                    <span className="text-[#07294d]">Thousands of Travelers</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;