"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import Swal from "sweetalert2";
import AboutPage from "../about/page";
import CareerPage from "../Carrer/page";
import ServicesSection from "../Service/page";  
import WebDevelopment from "../Web/page";  

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
     setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          subject: "",
          message: "",
        });
         Swal.fire("Success!", "Form submitted successfully!", "success");
  }; 

  return (
    <>
      <Header />
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/landingPageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-12 gap-10">
          {/* Left Content */}
          <div className="text-white max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Welcome to{" "}
              <span className="text-blue-400">Dream Sky Tech</span>
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-200">
              We provide world-class technology solutions for your business
              growth. Let’s build something amazing together 🚀
            </p>
            <button className="px-6 py-3 rounded-lg bg-[#000080] text-white font-semibold shadow-md hover:opacity-90 transition">
              Learn More
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Schedule Your Appointment
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              We are here to help you 24/7 with experts
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="^[0-9]{10}$"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              
              {/* Subject Selector */}
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                required
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#000080] text-white font-semibold 
               shadow-md hover:opacity-90 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <AboutPage />
      <CareerPage/>
      <ServicesSection />
      <WebDevelopment/>
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Team Says
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            Hear from our employees about their experiences at DreamSkyTech.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                name: "Ravi Choudhary",
                role: "Manager",
                quote: "Leading at DreamSkyTech means empowering teams, driving innovation, and ensuring every project delivers real value to our clients.",
                image: "/ravi.jpg",
              },
              {
                name: "Suman Srivas",
                role: "Human Resources",
                quote: "At DreamSkyTech, our people are our greatest asset. We focus on nurturing talent, fostering growth, and creating an inclusive workplace where innovation thrives.",
                image: "/suman.jpg",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 object-cover" />
                <p className="text-sm sm:text-base text-gray-600 italic">"{testimonial.quote}"</p>
                <h4 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;