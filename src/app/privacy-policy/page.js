"use client";

import React from 'react';
import { ShieldCheck, Eye, Lock, HardDrive, Bell, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Link from 'next/link';
const PrivacyPolicy = () => {
  const sections = [
    { id: 'intro', title: '1. Introduction', icon: <Eye size={20} /> },
    { id: 'property', title: '2. Data Rights', icon: <ShieldCheck size={20} /> },
    { id: 'restrictions', title: '3. Restrictions', icon: <Lock size={20} /> },
    { id: 'liability', title: '4. Limitation of Liability', icon: <HardDrive size={20} /> },
    { id: 'changes', title: '5. Policy Updates', icon: <Bell size={20} /> },
    { id: 'contact', title: '6. Contact Us', icon: <MessageCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden py-8">
      {/* Hero Component */}
      <Hero 
        title="Privacy Policy"
        subtitle="How Ghumakkar Masti protects and manages your personal data"
        showSearch={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

          
       

          {/* Main Content Area */}
          <main className=" bg-white border border-slate-100 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl shadow-slate-200/50">
            
            <section id="intro" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[0].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Introduction</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Welcome to our website. Your privacy is critically important to us. By accessing and using 
                this site, you accept this Privacy Policy in full. We are committed to protecting any 
                personally identifiable information you may provide us through the Website.
              </p>
            </section>

            <section id="property" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[1].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Intellectual Property Rights</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Unless otherwise stated, we own the intellectual property rights for all material on this website. 
                All intellectual property rights are reserved. You may view and print pages from the website for 
                your own personal use subject to restrictions set in these terms and conditions.
              </p>
            </section>

            <section id="restrictions" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[2].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Restrictions</h2>
              </div>
              <p className="text-slate-600 mb-5 text-sm md:text-base font-medium">In accordance with your privacy, you are specifically restricted from:</p>
              <ul className="space-y-4">
                {[
                  'Publishing website material in any other media', 
                  'Selling, sublicensing, or commercializing website content', 
                  'Using this website in a way that is damaging or unlawful'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                    <span className="mt-2 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: '#359ade' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="liability" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[3].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Limitation of Liability</h2>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-300 p-6 md:p-8 rounded-r-2xl">
                <p className="text-slate-700 italic leading-relaxed text-sm md:text-base">
                  "We will not be held liable for any damages arising from your use of this website, 
                  including indirect or consequential damages, regarding the handling of non-sensitive 
                  public data browsing."
                </p>
              </div>
            </section>

            <section id="changes" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[4].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Changes to Privacy Policy</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We reserve the right to modify these terms at any time. We encourage visitors to frequently 
                check this page for any changes. Continued use of this website after any change in this 
                Privacy Policy will constitute your acceptance of such change.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[#359ade] shadow-sm">{sections[5].icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Contact Us</h2>
              </div>
              <div className="p-6 md:p-10 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: '#359ade' }}>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Data Privacy Concerns?</h3>
                  <p className="opacity-90 text-sm md:text-base max-w-sm">Contact our privacy officer if you have questions about how we handle your information.</p>
                </div>
                <Link
                href='/contact'
                className="w-full cursor-pointer md:w-auto px-10 py-4 bg-white text-[#359ade] font-bold rounded-2xl hover:bg-slate-50 transition-all active:scale-95 whitespace-nowrap shadow-xl shadow-black/10">
                  Contact Support
                </Link>
              </div>
            </section>

          </main>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-slate-100 py-2 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-600">Ghumakkar Masti</span>. Secure Data Handling.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;