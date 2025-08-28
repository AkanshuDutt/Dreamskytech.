
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  CheckCircle,
  Smartphone,
  Zap,
  Clock,
  HeartHandshake,
  Users,
  Target,
  MessageSquare,
  Calendar,
  PieChart,
  Star,
  Download,
  UserPlus,
} from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppPage = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  const appFeatures = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "User Management",
      description: "Manage user profiles with personalized settings and preferences",
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Task Tracking",
      description: "Organize tasks, set priorities, and track progress on the go",
    },
    {
      icon: <MessageSquare className="text-orange-600" size={24} />,
      title: "Social Integration",
      description: "Connect with friends and colleagues via integrated chat",
    },
    {
      icon: <Calendar className="text-red-600" size={24} />,
      title: "Event Scheduler",
      description: "Schedule events and get reminders directly in the app",
    },
    {
      icon: <PieChart className="text-indigo-600" size={24} />,
      title: "Analytics Dashboard",
      description: "Track usage and performance with real-time insights",
    },
    {
      icon: <Zap className="text-purple-600" size={24} />,
      title: "Instant Notifications",
      description: "Stay updated with push notifications for tasks and messages",
    },
  ];

  const tasksFeatures = [
    { name: "Task Creation", description: "Create and categorize tasks easily" },
    { name: "Priority Settings", description: "Set high, medium, or low priorities" },
    { name: "Progress Tracking", description: "Monitor task completion in real-time" },
    { name: "Reminders", description: "Get timely alerts for deadlines" },
    { name: "Collaboration", description: "Share tasks with team members" },
  ];

  const socialFeatures = [
    { name: "Chat Integration", description: "Seamless messaging with contacts" },
    { name: "Group Chats", description: "Create groups for team communication" },
    { name: "Media Sharing", description: "Share photos and videos instantly" },
    { name: "Status Updates", description: "Post and view updates from friends" },
    { name: "Privacy Controls", description: "Manage who sees your content" },
  ];

  const analyticsFeatures = [
    { name: "Usage Reports", description: "View app usage statistics" },
    { name: "Performance Metrics", description: "Track productivity trends" },
    { name: "Goal Tracking", description: "Set and monitor personal goals" },
    { name: "Custom Dashboards", description: "Create personalized data views" },
    { name: "Export Data", description: "Download reports for offline use" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "DreamApp has transformed how I manage my daily tasks. It's so intuitive and fast!",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "The social features make staying connected with my team effortless. Highly recommend!",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      name: "Sneha Patel",
      rating: 5,
      text: "The analytics dashboard helps me stay on top of my goals. Best app for productivity!",
    //   image: "https://images.unsplash.com/photo-1487412729047-9bfffe9289e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: "Save Time Daily",
      description: "Streamline tasks and communication in one app",
    },
    {
      icon: <HeartHandshake className="text-purple-500" size={32} />,
      title: "Stay Connected",
      description: "Build stronger relationships with integrated social tools",
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Boost Productivity",
      description: "Track and optimize your performance with analytics",
    },
    {
      icon: <Smartphone className="text-green-500" size={32} />,
      title: "Access Anywhere",
      description: "Use the app seamlessly on iOS and Android",
    },
  ];

  return (
    <>
      <Head>
        <title>DreamApp - Best Productivity App for Indian Users</title>
        <meta
          name="description"
          content="DreamApp is the ultimate mobile app for Indian users to manage tasks, connect with others, and track productivity. Download now for iOS and Android."
        />
        <meta name="keywords" content="mobile app, productivity, task management, social app, Indian users" />
      </Head>
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
                    Mobile Apps Development
                  </h1>
                  <p className="text-xl md:text-2xl text-purple-100 font-light">
                    Your all-in-one productivity companion
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Manage tasks, connect with friends, and track your progress with Mobile Apps development, designed for Indian users.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <a
            
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center"
                  >
            
                    View More
                  </a> */}
                  <a
                    href="/Contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
                  >
                    {/* <FaApple size={20} className="mr-2" /> */}
                    Contact Us
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Free to download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Works offline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Indian language support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Secure data storage</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 
                      
       <Image
                        src="/mob1.jpg"
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
                Why Choose Application
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
                Powerful App Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to stay productive, connected, and informed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                Explore DreamApp
              </h2>
              <p className="text-xl text-gray-600">
                Discover how DreamApp simplifies your daily tasks
              </p>
            </div>

            <div className="flex flex-wrap justify-center mb-12">
              <button
                onClick={() => setActiveTab("tasks")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "tasks"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Task Management Features"
                aria-pressed={activeTab === "tasks"}
              >
                Task Management
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "social"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Social Integration Features"
                aria-pressed={activeTab === "social"}
              >
                Social Integration
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-8 py-3 mx-2 my-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "analytics"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="View Analytics Features"
                aria-pressed={activeTab === "analytics"}
              >
                Analytics
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTab === "tasks" && "Master Your Tasks"}
                  {activeTab === "social" && "Stay Connected"}
                  {activeTab === "analytics" && "Track Your Progress"}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {activeTab === "tasks" && "Organize your day with intuitive task management tools."}
                  {activeTab === "social" && "Connect with friends and colleagues seamlessly."}
                  {activeTab === "analytics" && "Gain insights to optimize your productivity."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTab === "tasks" &&
                    tasksFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                        <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  {activeTab === "social" &&
                    socialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-green-50 transition-colors">
                        <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  {activeTab === "analytics" &&
                    analyticsFeatures.map((feature, index) => (
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
                                    src="/mobile.jpg"
                                    alt="Mobile Dashboard"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full h-auto"
                                    priority={true}
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
                What Users Say
              </h2>
              <p className="text-xl text-gray-600">
                Hear from users who love DreamApp
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

export default MobileAppPage;
