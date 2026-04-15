"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar({ onQuickEnquiryClick }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpenDropdown(null);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const sidebarClasses = isSidebarOpen
    ? "scale-100 opacity-100 translate-y-0"
    : "scale-95 opacity-0 -translate-y-4 pointer-events-none";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50 mt-4 rounded-full mx-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between p-4 h-20">
            {/* Logo */}
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-black hover:text-[#2f89c7]">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-[#2f89c7]">
                About
              </Link>

              {/* Packages */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("packages")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/packages"
                  className="flex items-center gap-1 cursor-pointer text-black  hover:text-[#2f89c7]"
                >
                  Packages
                  <ChevronDown
                    size={16}
                    className={`${openDropdown === "packages" ? "rotate-180" : ""}`}
                  />
                </Link>
                {openDropdown === "packages" && (
                  <div className="absolute top-8 left-0 bg-white text-black shadow-xl rounded-xl py-2 w-64">
                    <Link
                      href="/packages/kashmir"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Kashmir Tour
                    </Link>
                    <Link
                      href="/packages/shimla-manali"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Shimla Manali Tour
                    </Link>
                    <Link
                      href="/packages/sikkim"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Sikkim Darjeeling Tour
                    </Link>
                    <Link
                      href="/packages/andaman"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Andaman Tour
                    </Link>
                    <Link
                      href="/packages/rajasthan"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Rajasthan Tour
                    </Link>
                    <Link
                      href="/packages/Goa"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Goa Tour
                    </Link>
                    <Link
                      href="/packages/golden-trianlge"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Golden Triangle Tour
                    </Link>
                  </div>
                )}
              </div>

              {/* Cars */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("cars")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/cars"
                  className="flex items-center gap-1 cursor-pointer text-black"
                >
                  Cars
                  <ChevronDown
                    size={16}
                    className={`${openDropdown === "cars" ? "rotate-180" : ""}`}
                  />
                </Link>

                {openDropdown === "cars" && (
                  <div className="absolute top-8 left-0 bg-white text-black shadow-xl rounded-xl py-2 w-64">
                    <Link
                      href="/cars/luxury"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Luxury Cars Fleet
                    </Link>
                    <Link
                      href="/cars/muv-suv"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      MUV / SUV Cars Fleet
                    </Link>
                    <Link
                      href="/cars/sedan"
                      className="block px-5 py-3 whitespace-nowrap hover:bg-gray-100 hover:text-[#2f89c7]"
                    >
                      Sedan Cars Fleet
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-black hover:text-[#2f89c7]">
                Contact
              </Link>
            </div>

            {/* Button */}
            <button
              onClick={onQuickEnquiryClick}
              className="hidden lg:block cursor-pointer bg-[#359ade] text-white px-4 py-2 rounded-xl hover:bg-[#2f89c7]"
            >
              Quick Enquiry
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-black text-xl"
            >
              {isSidebarOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-in-out"
            onClick={closeSidebar}
          />

          {/* Centered Sidebar */}
          <div
            className={`fixed mt-20 inset-0 flex items-center justify-center p-4 lg:hidden z-50 transition-all duration-300 ease-in-out ${sidebarClasses}`}
          >
            <div
              className="bg-white shadow-2xl rounded-3xl w-full max-w-md mx-4 p-6 max-h-[78vh]  overflow-y-auto no-scrollbar transform"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col text-black">
                <Link
                  href="/"
                  onClick={closeSidebar}
                  className="px-5 py-3  font-semibold"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeSidebar}
                  className="px-5 py-3  font-semibold"
                >
                  About
                </Link>

                {/* Packages */}

                <div
                  onClick={() => toggleDropdown("packages")}
                  className="flex justify-between items-center px-5 py-3  cursor-pointer font-semibold"
                >
                  Packages
                  <ChevronDown
                    size={16}
                    className={`${openDropdown === "packages" ? "rotate-180" : ""}`}
                  />
                </div>

                {openDropdown === "packages" && (
                  <div className="bg-gray-50">
                    {/* 🔥 VIEW ALL */}
                    <Link
                      href="/packages"
                      className="block px-6 py-3 font-semibold text-[#359ade]"
                      onClick={closeSidebar}
                    >
                      View All Packages →
                    </Link>
                    <Link
                      href="/packages/kashmir"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Kashmir Tour
                    </Link>
                    <Link
                      href="/packages/shimla-manali"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Shimla Manali Tour
                    </Link>
                    <Link
                      href="/packages/sikkim"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Sikkim Darjeeling Tour
                    </Link>
                    <Link
                      href="/packages/andaman"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Andaman Tour
                    </Link>
                    <Link
                      href="/packages/rajasthan"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Rajasthan Tour
                    </Link>
                    <Link
                      href="/packages/goa"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Goa Tour
                    </Link>
                    <Link
                      href="/packages/golden-triangle"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Golden Triangle Tour
                    </Link>
                  </div>
                )}

                {/* Cars */}

                <div
                  onClick={() => toggleDropdown("cars")}
                  className="flex justify-between items-center px-5 py-3  cursor-pointer font-semibold"
                >
                  Cars
                  <ChevronDown
                    size={16}
                    className={`${openDropdown === "cars" ? "rotate-180" : ""}`}
                  />
                </div>

                {openDropdown === "cars" && (
                  <div className="bg-gray-50">
                    <Link
                      href="/cars"
                      className="block px-6 py-3 font-semibold text-[#359ade]"
                      onClick={closeSidebar}
                    >
                      View All Cars →
                    </Link>
                    <Link
                      href="/cars/luxury"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Luxury Cars Fleet
                    </Link>
                    <Link
                      href="/cars/muv-suv"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      MUV / SUV Cars Fleet
                    </Link>
                    <Link
                      href="/cars/sedan"
                      className="block px-6 py-3  hover:bg-gray-100"
                      onClick={closeSidebar}
                    >
                      Sedan Cars Fleet
                    </Link>
                  </div>
                )}

                <Link
                  href="/contact"
                  onClick={closeSidebar}
                  className="px-5 py-3  font-semibold"
                >
                  Contact
                </Link>

                <button
                  onClick={() => {
                    onQuickEnquiryClick();
                    closeSidebar();
                  }}
                  className="mt-4 cursor-pointer bg-[#359ade] text-white py-3 rounded-xl hover:bg-[#2f89c7] transition-colors font-semibold"
                >
                  Quick Enquiry
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
