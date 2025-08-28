"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X, ChevronDown, Phone, Mail, Search, User } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaClock,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,



} from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // New products dropdown
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setIsServicesOpen(false);
      }
      if (!e.target.closest(".products-dropdown")) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Detect scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Enhanced Topbar */}
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm border-b border-b-blue-200 gap-2 md:gap-0 transition-all duration-300 bg-gray-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-1 md:space-y-0 items-start md:items-center">
          <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
            <FaMapMarkerAlt className="text-sm sm:text-base text-blue-600" />
            <span>A-43, Noida Sector 63, Uttar Pradesh, 201301</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-green-600">
            <FaClock className="text-sm sm:text-base text-green-600" />
            <span>Office Hours 10:00 am to 06:00 pm</span>
          </div>
          {/* Added direct contact info */}
          <div className="flex items-center space-x-1 hover:text-red-600">
            <Phone className="text-sm sm:text-base text-red-600" />
            <a href="tel:+918750610304" className="hover:underline">
              +91 8750610304
            </a>
          </div>
          <div className="flex items-center space-x-1 hover:text-purple-600">
            <Mail className="text-sm sm:text-base text-purple-600" />
            <a href="mailto:info@dreamskytech.com" className="hover:underline">
              info@dreamskytech.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 mt-2 md:mt-0">
          <span className="hidden lg:block text-xs sm:text-sm font-medium">
            Follow Us:
          </span>
          {/* Enhanced social media section */}
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/8750610304"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.linkedin.com/company/dreamskytech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.facebook.com/dreamskyairwayspvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition-colors"
              title="Facebook"
            >
              <FaFacebookF className="text-sm sm:text-base" />
            </a>
           
            
            <a
              href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              title="YouTube"
            >
              <FaYoutube className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
              title="Instagram"
            >
              <FaInstagram className="text-sm sm:text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Navbar */}
      <header
        className={`sticky top-0 z-50 w-full shadow-lg bg-gradient-to-r from-[#000080] to-[#0000CD] text-white transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl md:text-xl font-bold">
               <div className="flex items-center gap-2">
                <Image
                  src="/Dream_sky_tech.jpg" 
                  alt="Dream Sky Tech Logo"
                  width={50}
                  height={20}
                  priority 
                   className="rounded-full object-cover"
                />
                <span className="text-xl font-semibold text-white-200">DreamSkyTech</span>
              </div>
               
            </div>
           
          </div>

          {/* Enhanced Desktop Menu */}
          <nav className="hidden md:flex gap-4 lg:gap-6 font-medium text-sm md:text-base items-center">
            <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-blue-200 transition-colors duration-200"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl border border-gray-200 p-2 transition-all duration-300 z-50">
                  <Link
                    href="/Service"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">Software Development</div>
                    <div className="text-xs text-gray-500">Custom software solutions</div>
                  </Link>
                  <Link
                    href="/Analytical"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">Analytics Solutions</div>
                    <div className="text-xs text-gray-500">Data insights & reporting</div>
                  </Link>
                  <Link
                    href="/Web"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">Web Development</div>
                    <div className="text-xs text-gray-500">Modern web solutions</div>
                  </Link>
                  <Link
                    href="/It"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">IT Solutions</div>
                    <div className="text-xs text-gray-500">Complete IT support</div>
                  </Link>
                  <Link
                    href="/Cyber"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">Cyber Security</div>
                    <div className="text-xs text-gray-500">Protect your business</div>
                  </Link>
                </div>
              )}
            </div>

            {/* New Products Dropdown */}
            <div className="relative products-dropdown">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center hover:text-blue-200 transition-colors duration-200"
              >
                Products <ChevronDown size={16} className="ml-1" />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl border border-gray-200 p-2 transition-all duration-300 z-50">
                  <Link
                    href="/Erp"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">ERP Solutions</div>
                    <div className="text-xs text-gray-500">Business management system</div>
                  </Link>
                  <Link
                    href="/Crm"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">CRM Software</div>
                    <div className="text-xs text-gray-500">Customer relationship management</div>
                  </Link>
                  <Link
                    href="/Mobile"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    <div className="font-semibold">Mobile Apps</div>
                    <div className="text-xs text-gray-500">iOS & Android applications</div>
                  </Link>
                  <Link
                    href="/products/cloud"
                    className="block px-4 py-3 hover:bg-blue-50 rounded-md text-sm font-medium border-l-4 border-transparent hover:border-blue-500 transition-all duration-200"
                  >
                    {/* <div className="font-semibold">Cloud Solutions</div> */}
                    {/* <div className="text-xs text-gray-500">Scalable cloud infrastructure</div> */}
                  </Link>
                </div>
              )}
            </div>

            {/* New menu items */}
           
            <Link href="/Carrer" className="hover:text-blue-200 transition-colors duration-200">
              Careers
            </Link>
          
            <Link
              href="/Contact"
              className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileOpen && (
          <div
            className={`md:hidden bg-gradient-to-b from-[#000080] to-[#0000CD] text-white px-4 py-3 space-y-2 animate-slideDown transition-all duration-300 border-t border-blue-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
          >
            <Link href="/home" className="block hover:text-blue-200 text-sm py-2 border-b border-blue-400 border-opacity-30">
              Home
            </Link>
            <Link href="/about" className="block hover:text-blue-200 text-sm py-2 border-b border-blue-400 border-opacity-30">
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-blue-400 border-opacity-30">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center w-full justify-between py-2 hover:text-blue-200 text-sm"
              >
                Services <ChevronDown size={16} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 space-y-1 pb-2">
                  <Link href="/Service" className="block hover:text-blue-200 text-sm py-1">
                    Software Development
                  </Link>
                  <Link href="/Analytical" className="block hover:text-blue-200 text-sm py-1">
                    Analytics Solutions
                  </Link>
                  <Link href="/Web" className="block hover:text-blue-200 text-sm py-1">
                    Web Development
                  </Link>
                  <Link href="/It" className="block hover:text-blue-200 text-sm py-1">
                    IT Solutions
                  </Link>
                  <Link href="/Cyber" className="block hover:text-blue-200 text-sm py-1">
                    Cyber Security
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div className="border-b border-blue-400 border-opacity-30">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center w-full justify-between py-2 hover:text-blue-200 text-sm"
              >
                Products <ChevronDown size={16} />
              </button>
              {isProductsOpen && (
                <div className="ml-4 space-y-1 pb-2">
                  <Link href="/products/erp" className="block hover:text-blue-200 text-sm py-1">
                    ERP Solutions
                  </Link>
                  <Link href="/products/crm" className="block hover:text-blue-200 text-sm py-1">
                    CRM Software
                  </Link>
                  <Link href="/products/mobile-apps" className="block hover:text-blue-200 text-sm py-1">
                    Mobile Apps
                  </Link>
                  <Link href="/products/cloud" className="block hover:text-blue-200 text-sm py-1">
                    Cloud Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="block hover:text-blue-200 text-sm py-2 border-b border-blue-400 border-opacity-30">
              Portfolio
            </Link>
            <Link href="/careers" className="block hover:text-blue-200 text-sm py-2 border-b border-blue-400 border-opacity-30">
              Careers
            </Link>
            <Link href="/contact" className="block hover:text-blue-200 text-sm py-2 border-b border-blue-400 border-opacity-30">
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href="/get-quote"
                className="block w-full text-center bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;