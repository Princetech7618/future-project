"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// MUI Icons
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const WhyChooseUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-2 lg:py-10 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Brand Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-100 uppercase tracking-tighter absolute left-0 right-0 top-10 opacity-40 select-none -z-10"
          >
            Ghumakkar Masti
          </motion.h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#07294d] relative z-10">
            Excellence in Every Journey
          </h2>
          <div className="w-20 h-1.5 bg-[#359ade] mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <motion.h3 variants={itemVariants} className="text-[#359ade] font-bold tracking-widest uppercase text-sm">
                Why Choose Us
              </motion.h3>
              <motion.h4 variants={itemVariants} className="text-2xl md:text-4xl font-extrabold text-[#07294d] leading-tight">
                Trusted by Thousands of <br /> 
                <span className="text-[#359ade] underline decoration-[#6fc5ff] decoration-4">Happy Explorers</span>
              </motion.h4>
              <motion.p variants={itemVariants} className="text-slate-600 leading-relaxed text-lg font-medium">
                We are a trusted name in the travel industry with years of
                experience in planning and executing memorable trips. Our dedicated 
                team ensures personalized service, 24/7 support, and unforgettable 
                travel experiences.
              </motion.p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <VerifiedUserIcon className="text-[#359ade]" />
                <div>
                  <h5 className="font-bold text-[#07294d]">Reliability</h5>
                  <p className="text-sm text-slate-500 font-medium">Transparent & secure bookings every time.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <SupportAgentIcon className="text-[#359ade]" />
                <div>
                  <h5 className="font-bold text-[#07294d]">24/7 Support</h5>
                  <p className="text-sm text-slate-500 font-medium">We are with you at every step of your tour.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA / Summary Tag */}
            {/* <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
               <AutoAwesomeIcon className="text-blue-400 text-sm" />
               <span className="text-blue-700 font-bold text-sm">Crafting Memories Since 2015</span>
            </motion.div> */}
          </motion.div>

          {/* Right Image Section (The Premium Look) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-slate-100 rounded-2xl -z-10 translate-x-4 translate-y-4 hidden md:block" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/Images/leftGoogle.jpeg"
                alt="Why Choose Us"
                width={700}
                height={500}
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/50 hidden sm:block">
                 <div className="flex items-center gap-6">
                    <div>
                        <p className="text-3xl font-black text-[#359ade]">10k+</p>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Happy Clients</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200" />
                    <div>
                        <p className="text-3xl font-black text-[#359ade]">99%</p>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Satisfaction</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Floating Element */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;