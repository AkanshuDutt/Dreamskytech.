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
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Target,
  PieChart,
  Zap,
  HeartHandshake,
  Smartphone,
  Star,
  Play,
  Download,
  UserPlus,
  DollarSign,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CRMSoftwarePage = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [playingVideo, setPlayingVideo] = useState(false);

  const crmFeatures = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Contact Management",
      description: "Complete 360° customer profiles with interaction history and preferences",
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Lead Tracking",
      description: "Capture, qualify and nurture leads through automated workflows",
    },
    {
      icon: <BarChart3 className="text-purple-600" size={24} />,
      title: "Sales Pipeline",
      description: "Visual sales pipeline with deal tracking and forecasting",
    },
    {
      icon: <MessageSquare className="text-orange-600" size={24} />,
      title: "Communication Hub",
      description: "Unified inbox for emails, calls, SMS and social media interactions",
    },
    {
      icon: <Calendar className="text-red-600" size={24} />,
      title: "Task & Calendar",
      description: "Schedule meetings, set reminders and manage follow-ups automatically",
    },
    {
      icon: <PieChart className="text-indigo-600" size={24} />,
      title: "Advanced Analytics",
      description: "Real-time reports and insights to optimize your sales performance",
    },
  ];

  const salesFeatures = [
    { name: "Lead Scoring & Qualification", description: "AI-powered lead prioritization" },
    { name: "Deal Management", description: "Track opportunities through sales stages" },
    { name: "Quote & Proposal Generation", description: "Professional quotes in minutes" },
    { name: "Sales Forecasting", description: "Predictive analytics for revenue planning" },
    { name: "Territory Management", description: "Assign and manage sales territories" },
    { name: "Commission Tracking", description: "Automated commission calculations" },
  ];

  const marketingFeatures = [
    { name: "Email Campaigns", description: "Automated marketing sequences" },
    { name: "Social Media Integration", description: "Manage all social platforms" },
    { name: "Landing Page Builder", description: "Create high-converting pages" },
    { name: "Marketing Automation", description: "Nurture leads automatically" },
    { name: "Event Management", description: "Organize and track events" },
    { name: "ROI Tracking", description: "Measure campaign effectiveness" },
  ];

  const serviceFeatures = [
    { name: "Ticket Management", description: "Streamlined support workflow" },
    { name: "Knowledge Base", description: "Self-service customer portal" },
    { name: "SLA Management", description: "Service level agreement tracking" },
    { name: "Customer Satisfaction", description: "CSAT and NPS surveys" },
    { name: "Multi-channel Support", description: "Email, chat, phone integration" },
    { name: "Asset Management", description: "Track customer assets and contracts" },
  ];

  const testimonials = [
    {
      name: "Neha Gupta",
      rating: 5,
      text: "Our sales increased by 60% after implementing Dream Sky CRM. The automation features are game-changing!",
      image: "/testimonial1.jpg",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      text: "Best CRM for small businesses. Easy to use and excellent customer support from Dream Sky team.",
      image: "/testimonial2.jpg",
    },
    {
      name: "Anita Sharma",
      rating: 5,
      text: "Customer service improved dramatically. We can now respond to queries 3x faster than before.",
      image: "/testimonial3.jpg",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: "Increase Sales by 40%",
      description: "Streamlined processes and better lead management boost revenue",
    },
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: "Save 10+ Hours Weekly",
      description: "Automation reduces manual tasks and administrative work",
    },
    {
      icon: <HeartHandshake className="text-purple-500" size={32} />,
      title: "Improve Customer Satisfaction",
      description: "Better service delivery and personalized experiences",
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Faster Response Times",
      description: "Respond to leads and customers 3x faster than competitors",
    },
  ];

  const integrations = [
    "Gmail", "Outlook", "WhatsApp", "Facebook", "Instagram", "LinkedIn", 
    "Google Analytics", "Mailchimp", "Razorpay", "PayU", "Zoho", "QuickBooks"
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-600 to-blue-100 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                     <span className="text-purple-300">CRM</span> Software
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-100 font-light">
                    Transform your customer relationships into lasting partnerships
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Manage leads, close deals faster, and build stronger customer relationships with our 
                    AI-powered CRM designed specifically for Indian businesses.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center">
                
                    View More
                  </button> */}
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center">
                    Contact Us
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {/* <div className="flex items-center space-x-2"> */}
                    {/* <CheckCircle size={20} className="text-green-400" /> */}
                    {/* <span>14-day free trial</span> */}
                  {/* </div> */}
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>No credit card needed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Indian data centers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Hindi support</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/crm.jpg"
                    alt="CRM Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                    priority={true}
                  />
                </div>
                <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-cyan-900 to-transparent rounded-2xl transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Businesses Choose Our CRM
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful CRM Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage customer relationships, boost sales, and grow your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
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

        {/* Tabbed Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete Business Solution
              </h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive modules designed for every department
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center mb-12">
              <button
                onClick={() => setActiveTab("sales")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "sales"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Sales Management Features"
                aria-pressed={activeTab === "sales"}
              >
                Sales Management
              </button>
              {/* <button
                onClick={() => setActiveTab("marketing")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "marketing"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Marketing Automation Features"
                aria-pressed={activeTab === "marketing"}
              >
                Marketing Automation
              </button> */}
              {/* <button
                onClick={() => setActiveTab("service")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "service"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Customer Service Features"
                aria-pressed={activeTab === "service"}
              >
                Customer Service
              </button> */}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTab === "sales" && "Supercharge Your Sales Process"}
                  {activeTab === "marketing" && "Automate Your Marketing Campaigns"}
                  {activeTab === "service" && "Deliver Exceptional Customer Service"}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {activeTab === "sales" && "Close more deals faster with our intelligent sales tools and pipeline management."}
                  {activeTab === "marketing" && "Create, execute, and track marketing campaigns that convert leads into customers."}
                  {activeTab === "service" && "Provide world-class customer support with our comprehensive service tools."}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTab === "sales" && salesFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                  {activeTab === "marketing" && marketingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                  {activeTab === "service" && serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src={activeTab === "sales" ? "/sales.jpg" : activeTab === "marketing" ? "/marketing.jpg" : "/service.jpg"}
                  alt={`${activeTab} dashboard`}
                  width={600}
                  height={500}
                  className="rounded-xl shadow-2xl w-full h-auto"
                  onError={(e) => (e.currentTarget.src = "/crm-fallback.jpg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how businesses are transforming with our CRM solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CRMSoftwarePage;