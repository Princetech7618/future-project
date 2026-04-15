"use client";
import React from "react";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  { name: "Rahul Sharma", role: "Freelancer", img: "/Images/team.jpg", text: "Ghumakkar Masti made my honeymoon in Bali unforgettable! The personalized itineraries were perfect, and the support team helped me every step of the way." },
  { name: "Anjali Gupta", role: "Travel Blogger", img: "/Images/team3.jpg", text: "The entire trip was hassle-free and memorable. I've never seen such attention to detail in travel planning. I'll definitely book again for my next adventure!" },
  { name: "Vikram Singh", role: "Entrepreneur", img: "/Images/team2.jpg", text: "Top-notch service! From the finest hotels to seamless transportation, they handled everything. It was truly a premium experience from start to finish." },
  { name: "Sneha Kapoor", role: "Photographer", img: "/Images/Team1.jpg", text: "Amazing support before, during, and after the journey. They were always just a message away. Highly recommend Ghumakkar Masti to everyone!" }
];

const Testimonials = () => {
  const brandColor = "#359ade";
const AutoCounter = ({ value = 1 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.floor(latest);
    return String(num).padStart(2, "0"); // 👈 yahi magic hai
  });

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-[#fcfdfe] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ color: brandColor }} className="font-bold tracking-[0.3em] text-xs uppercase">TESTIMONIALS</motion.span> */}
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-semibold text-[#07294d] mt-2">What Our <span style={{ color: brandColor }}>Guests Say</span></motion.h2>
        <p className="text-slate-500 font-semibold max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">Our dedicated support team is always just a call away, ready to assist you whenever you need help—before, during, or after your journey.</p>
      </div>

      {/* Grid Layout - Fixed on Desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="perspective-1000">
            
            <div className="group relative bg-white p-8 rounded-xl border border-slate-100 h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:rotate-x-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(53,154,222,0.25)]">
                
                     {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 pb-5">
                <div className="relative">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 p-0.5" style={{ borderColor: brandColor }} />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center" style={{ backgroundColor: brandColor }}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#07294d] text-sm">{item.name}</h4>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.role}</p>
                </div>
              </div>
              {/* Quote Icon Background */}
             <div className="absolute top-6 right-8 opacity-[0.05] group-hover:opacity-[0.30] transition-opacity text-5xl font-bold" style={{ color: brandColor }}>
  <AutoCounter value={index+1} />
</div>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 18, color: i < 4 ? brandColor : "#e2e8f0" }} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-8 italic">
                  "{item.text}"
                </p>
              </div>

       

            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-6 { transform: rotateX(6deg) translateY(-10px); }
      `}</style>
    </section>
  );
};

export default Testimonials;