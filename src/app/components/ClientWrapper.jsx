"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import EnquiryModal from "./EnquiryModal";

export default function ClientWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar onQuickEnquiryClick={() => setIsOpen(true)} />
      {children}
      {isOpen && <EnquiryModal onClose={() => setIsOpen(false)} />}
    </>
  );
}