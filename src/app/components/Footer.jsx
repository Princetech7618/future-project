"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PremiumFooter = () => {


  const tours = [
  { name: "Kashmir Tour", slug: "kashmir" },
  { name: "Shimla Manali Tour", slug: "shimla-manali" },
  { name: "Sikkim Darjeeling Tour", slug: "sikkim" },
  { name: "Andaman Tour", slug: "andaman" },
  { name: "Rajasthan Tour", slug: "rajasthan" },
  { name: "Goa Tour", slug: "goa" },
  { name: "Golden Triangle Tour", slug: "golden-triangle" }
];


const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Terms & Condition", path: "/terms-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" }
];


const socialLinks = [
  { icon: FacebookIcon, url: "https://facebook.com/yourpage" },
  { icon: InstagramIcon, url: "https://instagram.com/yourprofile" },
  { icon: LinkedInIcon, url: "https://linkedin.com/in/yourprofile" }
];
  const brandColor = "#359ade";
  const deepNavy = "#111827";

  return (
    <footer className="text-white relative overflow-hidden " style={{ backgroundColor: deepNavy }}>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: brandColor }} />

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 pt-4 pb-2 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="space-y-5">
     <Image 
              src="/Images/logo.png" 
              alt="Ghumakkar Masti Logo" 
              width={120} 
              height={40}
              className="h-16 w-auto"
            />
                        <p className="text-slate-400 text-sm leading-relaxed">
              A trusted travel companion based in Delhi, crafting seamless holiday memories across India.
            </p>
         <div className="flex gap-3">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <Link
        key={i}
        href={item.url}
        target="_blank"   // 🔥 open in new tab
        rel="noopener noreferrer"
         aria-label="social link"
        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#359ade] hover:border-[#359ade] transition-all"
      >
        <Icon sx={{ fontSize: 18 }} />
      </Link>
    );
  })}
</div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-1 rounded-full bg-[#359ade]" />
            </h4>
          <ul className="space-y-3">
  {links.map((item) => (
    <li key={item.path} className="group">
      <Link
        href={item.path}   // 🔥 real routing
        className="text-slate-400 text-sm flex items-center group-hover:text-white group-hover:translate-x-2 transition-all"
      >
        <ArrowRightAltIcon className="mr-2 opacity-0 group-hover:opacity-100 text-[#359ade]" />
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Destinations
              <span className="absolute -bottom-2 left-0 w-8 h-1 rounded-full bg-[#359ade]" />
            </h4>
           <ul className="space-y-3">
  {tours.map((item) => (
    <li key={item.slug} className="group">
      <Link 
        href={`/packages/${item.slug}`}   // 🔥 dynamic route
        className="text-slate-400 text-sm flex items-center group-hover:text-white group-hover:translate-x-2 transition-all"
      >
        <ArrowRightAltIcon className="mr-2 opacity-0 group-hover:opacity-100 text-[#359ade]" />
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Contact */}
         <div className="space-y-6">
  <div>
    <h4 className="text-lg font-bold mb-6 relative inline-block">
      Contact Us
      <span className="absolute -bottom-2 left-0 w-8 h-1 rounded-full bg-[#359ade]" />
    </h4>

    {/* Contact */}
    <div className="space-y-4">

      {/* Email */}
      <motion.a 
        href="mailto:booking@ghumakkarmasti.in"
        whileHover={{ y: -3 }}
        className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-all hover:border-[#359ade]"
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: brandColor }}>
          <EmailIcon className="text-white" sx={{ fontSize: 18 }} />
        </div>
        <p className="text-xs break-all">booking@ghumakkarmasti.in</p>
      </motion.a>

      {/* Phone */}
      <motion.a 
        href="tel:+919821235561"
        whileHover={{ y: -3 }}
        className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-all hover:border-[#359ade]"
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: brandColor }}>
          <PhoneInTalkIcon className="text-white" sx={{ fontSize: 18 }} />
        </div>
        <p className="text-xs">+91 9821235561</p>
      </motion.a>

       {/* <p className="text-slate-400 text-xs mb-4">Get travel updates & offers.</p> */}
       <h2>Join the Adventure

</h2>
              <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 mt-5">
                <input type="email" placeholder="Your email" className="bg-transparent outline-none px-3 text-sm w-full" />
                <button className=" cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold bg-[#359ade] hover:bg-[#2f89c7] transition-all">
                  subscribe
                </button>
              </div>

    </div>
  </div>
</div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} GHUMAKKAR MASTI. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[10px] text-white uppercase  tracking-widest">
            Designed & Developed by
            <Link href="https://kanakdrishtiinfotech.in" target="_blank" className="ml-2 text-[#359ade] hover:text-white transition">
              Kanak Drishti Infotech Pvt. Ltd.
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default PremiumFooter;