"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// MUI Icons
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const AboutPageContent = () => {
  const brandColor = "#359ade";
  const darkNavy = "#07294d";

  const stats = [
    { icon: <GroupsIcon />, count: "5000+", label: "Happy Travelers" },
    { icon: <PublicIcon />, count: "50+", label: "Destinations" },
    { icon: <AutoGraphIcon />, count: "100%", label: "Satisfaction" },
    { icon: <VerifiedUserIcon />, count: "10+", label: "Years Experience" },
  ];

  const coreValues = [
    { title: "Personalized Service", desc: "No two travelers are alike. We customize every detail to match your rhythm.", icon: <LoyaltyIcon /> },
    { title: "Expert Guidance", desc: "Our team knows the hidden gems that aren't on Google Maps.", icon: <FlightTakeoffIcon /> },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section for About */}
      <section className="relative py-4 px-6 lg:px-20 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
      
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold text-[#07294d] leading-tight"
          >
            Redefining the <span style={{ color: brandColor }}>Art of Travel</span>
          </motion.h1>
          <p className="text-slate-500 font-semibold text-lg max-w-2xl mx-auto">
            Ghumakkar Masti isn't just a travel agency; it's a bridge to your most cherished memories.
          </p>
        </div>
      </section>

      {/* 2. The Main Story Section */}
      <section className="py-4 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Creative Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <Image src="/Images/left.jpg" width={300} height={400} alt="Travel" className="rounded-3xl shadow-xl mt-12 hover:-translate-y-2 transition-transform duration-500" />
              <Image src="/Images/team.jpg" width={300} height={400} alt="Exp" className="rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-500" />
            </div>
            {/* Overlay Brand Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50">
               <div className="w-16 h-1 bg-[#359ade] rounded-full mx-auto mb-2" />
               <p className="text-[10px] font-semibold text-[#07294d] uppercase tracking-widest text-center">Ghumakkar Masti</p>
            </div>
          </motion.div>

          {/* Detailed Content */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-[#07294d]">Leading Holiday Deal Provider <br/><span style={{ color: brandColor }}>in Delhi, India</span></h2>
            
            <div className="space-y-4 text-slate-600 font-medium text-justify leading-relaxed">
              <p>
                Based in the heart of Delhi, <strong>Ghumakkar Masti</strong> has emerged as a trusted name for travelers seeking more than just a hotel booking. We specialize in comprehensive tour management, from the spiritual serenity of <strong>Chardham Yatra</strong> to the adrenaline of <strong>Leh-Ladakh</strong> expeditions.
              </p>
              <p>
                Our expertise spans across India—Kashmir, North East, Kerala, and the Andaman Islands. We believe that a trip is successful only when the traveler returns with a smile. That’s why our packages are 100% customizable, ensuring your journey reflects your personality.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 hover:border-[#359ade]/30 transition-all bg-slate-200/100">
                  <div className="mb-3" style={{ color: brandColor }}>{val.icon}</div>
                  <h4 className="text-sm font-semibold text-[#07294d] mb-1">{val.title}</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Counter Section (Premium Look) */}
  <section className="py-16 px-6 lg:px-20 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {stats.map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="bg-white/5 backdrop-blur-lg border-l-3 border-[#359ade]/40 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-[#359ade] hover:shadow-[0_15px_40px_rgba(53,154,222,0.3)] transition-all duration-300"
      >

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#359ade]/20 text-[#359ade]">
            {React.cloneElement(stat.icon, { sx: { fontSize: 30 } })}
          </div>
        </div>

        {/* Count */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#359ade]">
          {stat.count}
        </h3>

        {/* Label */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-2">
          {stat.label}
        </p>

      </motion.div>
    ))}

  </div>
</section>

     
    </div>
  );
};

export default AboutPageContent;