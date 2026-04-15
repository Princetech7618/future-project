"use client";
import React from "react";
import { motion } from "framer-motion";

// MUI Icons
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarsIcon from "@mui/icons-material/Stars";

const TrustedPartners = () => {
  const brandColor = "#359ade";

  // Note: Replace these placeholder strings with actual partner logo paths if available
  const partners = [
    { name: "Incredible India", category: "Govt. Authorized" },
    { name: "Kashmir Tourism", category: "Official Partner" },
    { name: "IATO Member", category: "Travel Association" },
    { name: "Kerala Tourism", category: "Authorized Dealer" },
    { name: "Ladakh Council", category: "Regd. Partner" },
    { name: "Sikkim Tourism", category: "Verified Agency" },
  ];

  return (
    <section className="py-4 bg-slate-50 overflow-hidden font-semibold">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <HandshakeIcon sx={{ color: brandColor, fontSize: 40 }} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#07294d]">
            Our Trusted <span style={{ color: brandColor }}>Partners</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm italic">
            "Recognized by government tourism boards and international travel associations."
          </p>
        </div>

        {/* Partners Grid / Infinite Scroll Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            className="group cursor-pointer p-6 bg-white/5 backdrop-blur-lg rounded-2xl border-l-3 border-[#359ade]/40 shadow-sm  hover:border-[#359ade] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(53,154,222,0.3)] transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3"
            >
              {/* Logo Placeholder - You can replace this with <Image /> */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-[#359ade]/10 transition-colors">
                <VerifiedIcon style={{ color: brandColor, fontSize: 24 }} className="opacity-40 group-hover:opacity-100" />
              </div>
              
              <div>
                <h4 className="text-[#07294d] text-sm font-semibold whitespace-nowrap">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TrustedPartners;