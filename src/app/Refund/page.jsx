"use client";
import React from "react";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const Refund = () => {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#000080] mb-6 text-center">
          Refund Policy - DreamSkyTech
        </h1>

        {/* Intro */}
        <p className="mb-4">
          At <span className="font-semibold  text-[#000080] ">DreamSkyTech</span>, we value our customers
          and aim to provide the best services and products. If you are not fully
          satisfied, this Refund Policy explains your rights and options.
        </p>

        {/* Eligibility */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          1. Eligibility for Refund
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Refund requests must be made within <b>7 days</b> of purchase.</li>
          <li>The service/product must not be extensively used.</li>
          <li>Proof of purchase (invoice/receipt) is required.</li>
        </ul>

        {/* Non-refundable */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          2. Non-Refundable Items
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Customized or on-demand solutions once delivered.</li>
          <li>Subscription fees once the service has started.</li>
          <li>Downloaded or accessed digital products.</li>
        </ul>

        {/* Process */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          3. Refund Process
        </h2>
        <p className="mb-4">
          To request a refund, contact our support team at{" "}
          <a
            href="mailto:info@dreamskytech.com"
            className="text-blue-500 underline"
          >
            info@dreamskytech.com
          </a>{" "}
          with your order details. Once approved, refunds will be credited to
          your original payment method within <b>7-10 business days</b>.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold  text-[#000080]  mt-6 mb-2">
          4. Contact Us
        </h2>
        <p>If you have any questions, feel free to reach us:</p>
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

export default Refund;
