"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import PackagesPage from '../components/PackagesPage';
import Hero from '../components/Hero';
export default function Packages() {
    const brandColor = "#359ade";
  const darkNavy = "#07294d";


  return (
   <div className='py-8'>
      {/* Packages Hero Section */}
    <Hero 
  title={
    <>
      Explore Our <br />
      <span style={{ color: brandColor }}>World-Class</span> Packages
    </>
  } 
    subtitle="                   Escape the ordinary with curated itineraries designed by experts for the modern traveler."
     showSearch={false}
imagesrc ="/Images/couple.jpg"
   />


      {/* Packages Grid Section */}


     <PackagesPage />


   </div>
  );
}
