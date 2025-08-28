"use client";
import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#000080] mb-6 text-center">
          Privacy Policy - DreamSkyTech
        </h1>

        {/* Introduction */}
        <p className="mb-4">
          At <span className="font-semibold  text-[#000080] ">DreamSkyTech</span>, we respect your privacy
          and are committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data.
        </p>

        {/* Information Collection */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal information such as name, email, and contact details.</li>
          <li>Information you provide when using our services or contacting support.</li>
          <li>Data collected automatically through website usage (cookies, analytics).</li>
        </ul>

        {/* How We Use */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and improve our services.</li>
          <li>To communicate with you regarding updates, promotions, or support.</li>
          <li>To ensure security and prevent unauthorized access.</li>
        </ul>

        {/* Data Sharing */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          3. Data Sharing
        </h2>
        <p className="mb-4">
          We do not sell or trade your personal information. We may share data with
          trusted third-party service providers to operate our business efficiently,
          always under strict confidentiality agreements.
        </p>

        {/* Security */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          4. Data Security
        </h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect
          your data from unauthorized access, alteration, or disclosure.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          5. Contact Us
        </h2>
        <p>If you have any questions about our Privacy Policy, please reach out:</p>
        <p className="mt-2">
          📧 Email:{" "}
          <a
            href="mailto:info@dreamskytech.com"
            className=" text-[#000080]  underline"
          >
            info@dreamskytech.com
          </a>
        </p>
        <p>📞 Phone: 8750610304</p>

        {/* Footer */}
        {/* <p className="mt-6 text-sm  text-[#000080]  text-center">
          © {new Date().getFullYear()} DreamSkyTech. All Rights Reserved.
        </p> */}
      </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
