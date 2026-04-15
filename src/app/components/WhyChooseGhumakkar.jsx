"use client";
import React from "react";
import { motion } from "framer-motion";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BedIcon from "@mui/icons-material/Bed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const features = [
  { title: "Positive Feedbacks", desc: "Our travelers' love is our greatest trophy. 100% satisfaction guaranteed.", icon: <VolunteerActivismIcon className="text-2xl" />, gradient: "from-[#359ade] to-[#359ade]", shadowColor: "hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]", lineColor: "bg-[#359ade]" },
  { title: "Unbeatable Experience", desc: "We craft stories. Every itinerary is a masterpiece designed for your soul.", icon: <AutoAwesomeIcon className="text-2xl" />, gradient: "from-[#359ade] to-[#359ade]", shadowColor: "hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]", lineColor: "bg-[#359ade]" },
  { title: "Finest Hotels", desc: "Experience royalty. We partner with elite stays for your ultimate comfort.", icon: <BedIcon className="text-2xl" />, gradient: "from-[#359ade] to-[#359ade]", shadowColor: "hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]", lineColor: "bg-[#359ade]" },
  { title: "24X7 Concierge", desc: "You are never alone. Our elite team is always awake to guide your journey.", icon: <SupportAgentIcon className="text-2xl" />, gradient: "from-[#359ade] to-[#359ade]", shadowColor: "hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]", lineColor: "bg-[#359ade]" }
];

const WhyChoosePremium = () => {
    const brandColor = "#359ade";

  return (
    <section className="py-4 md:py-5 px-4 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-500 font-bold tracking-widest text-xs uppercase">THE DIFFERENCE</motion.span> */}
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-semibold text-black mt-2">Why <span className="text-[#359ade]">Ghumakkar Masti?</span></motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="perspective-1000">
            <div className={`group relative p-10 md:p-4 h-[320px] bg-white rounded-xl border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-x-6 flex flex-col justify-between ${item.shadowColor}`}>
              <div className="flex justify-between items-start">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>{item.icon}</div>
  <div className="absolute top-6 right-8 opacity-[0.05] group-hover:opacity-[0.30] transition-opacity text-5xl font-bold" style={{ color: brandColor }}>
  0{index+1} 
</div>              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#07294d] mb-2">{item.title}</h3>
                <p className="text-slate-500 font-semibold text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className={`w-10 h-1 rounded-full ${item.lineColor} transition-all duration-500 group-hover:w-16`} />
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx global>{`.perspective-1000 { perspective: 1000px; } .hover\:rotate-x-6:hover { transform: rotateX(6deg) translateY(-8px); }`}</style>
    </section>
  );
};

export default WhyChoosePremium;