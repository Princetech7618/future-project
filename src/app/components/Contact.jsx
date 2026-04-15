"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef } from "react";

// MUI Icons
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// Social Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup important
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const socialLinks = [
    { icon: <InstagramIcon />, color: "#359ade" },
    { icon: <FacebookIcon />, color: "#359ade" },
    { icon: <LinkedInIcon />, color: "#359ade" },
    { icon: <YouTubeIcon />, color: "#359ade" },
  ];

  return (
   <div ref={containerRef} className="bg-white min-h-screen font-semibold">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 md:py-12">

        {/* TOP SECTION (LEFT + RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

          {/* LEFT - CONTACT DETAILS */}
            <div className="contact-card bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col h-full">

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 md:mb-8 uppercase tracking-tight">
              Contact <span className="text-[#359ade]">Details</span>
            </h2>

            {/* DETAILS */}
     <div className="space-y-6 md:space-y-8">

  {/* Phone */}
  <a href="tel:+919876543210" className="block">
    <div className="flex items-start gap-3 sm:gap-4 hover:bg-slate-100 p-3 rounded-xl transition-all cursor-pointer">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#359ade]">
        <PhoneInTalkIcon fontSize="small" />
      </div>
      <div>
        <p className="text-[11px] uppercase text-slate-600 tracking-widest">Call Us</p>
        <p className="text-base sm:text-sm text-slate-800">+91 98765 43210</p>
      </div>
    </div>
  </a>

  {/* Email */}
  <a href="mailto:info@ghumakkarmasti.com" className="block">
    <div className="flex items-start gap-3 sm:gap-4 hover:bg-slate-100 p-3 rounded-xl transition-all cursor-pointer">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#359ade]">
        <MailOutlineIcon fontSize="small" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase text-slate-600 tracking-widest">Email Us</p>
        <p className="text-base sm:text-sm text-slate-800 break-words">
          info@ghumakkarmasti.com
        </p>
      </div>
    </div>
  </a>

  {/* Location */}
  <a 
    href="https://www.google.com/maps?q=A-88,+Sector+4,+Noida,+UP+201301" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="flex items-start gap-3 sm:gap-4 hover:bg-slate-100 p-3 rounded-xl transition-all cursor-pointer">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#359ade]">
        <LocationOnIcon fontSize="small" />
      </div>
      <div>
        <p className="text-[11px] uppercase text-slate-600 tracking-widest">Visit Us</p>
        <p className="text-base sm:text-sm text-slate-800">
          A-88, Sector 4, Noida, UP 201301
        </p>
      </div>
    </div>
  </a>

</div>
              {/* 3. Quick Support Card (Space Filler) */}
            <div className="flex items-center mt-8 md:mt-10 gap-4 p-4 bg-[#359ade]/10 rounded-2xl border border-[#359ade]/20">
              <SupportAgentIcon className="text-[#359ade]" />
              <p className="text-[11px] font-bold text-slate-700 leading-tight">
                24/7 Priority Support available for <br/>
                <span className="text-[#359ade] uppercase">Booked Travelers</span>
              </p>
            </div>


            {/* SOCIAL (AUTO BOTTOM ALIGN) */}
            <div className="mt-auto pt-6 sm:pt-8 ">
              <p className="text-[11px] uppercase text-slate-600 tracking-[0.2em] mb-4">
                Follow our journey
              </p>

              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 border border-slate-100 hover:text-white transition-all duration-300"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = social.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>


          {/* RIGHT - FORM */}
          <div className="contact-card bg-white p-5 sm:p-6 md:p-10 rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">

            <div className="mb-8 md:mb-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 uppercase">
                Send a <span className="text-[#359ade]">Message</span>
              </h2>
              <p className="text-slate-400 text-sm mt-2 italic">
                "Your adventure starts with a single message."
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="w-full p-3 sm:p-4 rounded-xl bg-slate-50 outline-none" required />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="w-full p-3 sm:p-4 rounded-xl bg-slate-50 outline-none" required />
              </div>

              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full p-3 sm:p-4 rounded-xl bg-slate-50 outline-none" required />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full p-3 sm:p-4 rounded-xl bg-slate-50 outline-none" required />

              <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Type Message..." className="w-full p-3 sm:p-4 rounded-xl bg-slate-50 outline-none resize-none" required />

              <motion.button type="submit" whileTap={{ scale: 0.98 }} className="w-full cursor-pointer hover:bg-[#2f89c7] bg-[#359ade] text-white py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                Send Message <SendIcon sx={{ fontSize: 18 }} />
              </motion.button>

            </form>
          </div>
        </div>

        {/* BOTTOM - FULL WIDTH MAP */}
        <div className="contact-card mt-8 md:mt-10 rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] shadow-xl border-2 sm:border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4682464010!2d77.3235!3d28.586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45bf66f7d5d%3A0x67a30386266e75a7!2sSector%204%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

      </section>
    </div>
  );
}