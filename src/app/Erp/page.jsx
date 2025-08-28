"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Database,
  Settings,
  Globe,
  Star,
  Play,
  Download,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ERPSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [playingVideo, setPlayingVideo] = useState(false);

  const features = [
    {
      icon: <Database className="text-blue-600" size={24} />,
      title: "Centralized Data Management",
      description: "All your business data in one secure, accessible location",
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "User Management",
      description: "Role-based access control with advanced user permissions",
    },
    {
      icon: <BarChart3 className="text-purple-600" size={24} />,
      title: "Real-time Analytics",
      description: "Comprehensive reporting and business intelligence tools",
    },
    {
      icon: <Settings className="text-orange-600" size={24} />,
      title: "Process Automation",
      description: "Streamline workflows and reduce manual tasks",
    },
    {
      icon: <Shield className="text-red-600" size={24} />,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption and backups",
    },
    {
      icon: <Globe className="text-indigo-600" size={24} />,
      title: "Multi-location Support",
      description: "Manage multiple branches and locations seamlessly",
    },
  ];

  const modules = [
    { name: "Financial Management", description: "Complete accounting & finance" },
    { name: "Human Resources", description: "Employee management & payroll" },
    { name: "Inventory Management", description: "Stock control & warehouse" },
    { name: "Sales & CRM", description: "Customer relationship management" },
    { name: "Purchase Management", description: "Vendor & procurement handling" },
    { name: "Project Management", description: "Task tracking & resource planning" },
    { name: "Manufacturing", description: "Production planning & control" },
    { name: "Quality Control", description: "Quality assurance & compliance" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
    //   company: "ABC Manufacturing Ltd",
      rating: 5,
      text: "Dream Sky Tech's ERP solution transformed our business operations. Highly recommended!",
    },
    {
      name: "Priya Sharma",
    //   company: "XYZ Retail Chain",
      rating: 5,
      text: "Excellent support and customization. Our efficiency increased by 40%.",
    },
    {
      name: "Amit Patel",
    //   company: "PQR Services Pvt Ltd",
      rating: 5,
      text: "Best investment we made for our company. ROI achieved within 6 months.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
      users: "Up to 10 users",
      features: ["Basic modules", "Email support", "Data backup", "Mobile app"],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹35,000",
      period: "/month",
      users: "Up to 50 users",
      features: ["All modules", "Priority support", "Custom reports", "API access", "Training included"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      users: "Unlimited users",
      features: ["Full customization", "24/7 support", "On-premise option", "Dedicated manager", "SLA guarantee"],
      popular: false,
    },
  ];

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Enterprise <span className="text-blue-300">ERP</span> Solutions
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-light">
                  Streamline your business operations with our comprehensive ERP system
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Transform your business with our cutting-edge ERP solution designed for Indian businesses. 
                  Manage everything from inventory to finances in one powerful platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  View More
                </button> */}
              <a href="/Contact">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Contact Us
                </button>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  {/* <CheckCircle size={20} className="text-green-400" /> */}
                  {/* <span>30-day free trial</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/erp.jpg"
                  alt="ERP Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
                {/* <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  ✓ Live Demo
                </div> */}
              </div>
              <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-cyan-500 rounded-2xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our ERP Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ERP system is designed specifically for Indian businesses, with features that address 
              your unique challenges and compliance requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive ERP Modules
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our ERP system includes all essential modules to manage your entire business 
                operations from a single platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{module.name}</h4>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/erp2.jpg"
                alt="ERP Modules"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">See Our ERP in Action</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100">
            Watch how our ERP solution can transform your business operations and boost productivity.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
              src="/erp.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-lg sm:max-w-xl lg:max-w-3xl h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover"
            />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button
                  onClick={() => setPlayingVideo(true)}
                  className="bg-white text-blue-900 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                >
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses that have transformed with our ERP
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



     
    </div>
    <Footer/>
    </>
  );
};

export default ERPSolutionsPage;