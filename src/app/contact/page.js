"use client";

// import Image from "next/image";
// import { useState } from "react";
import ContactPage from "../components/Contact";
import Hero from "../components/Hero";
export default function Contact() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Contact form submitted:", formData);
  //   // Handle form submission here
  //   alert("Thank you for contacting us! We will get back to you soon.");
  //   // Reset form
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };

  return (
    <div className="py-8">
      {/* Contact Hero Section */}
       <Hero 
   title="                                   Get In Touch With Ghumakkar Masti"
   subtitle=" Have Question or ready to book? We're here to help you plan the
            perfect journey-reach out anytime!"
     showSearch={false}
imagesrc ="/contact1.jpg"
   />

      {/* Contact Information Section */}
   
   <ContactPage />
    </div>
  );
}
