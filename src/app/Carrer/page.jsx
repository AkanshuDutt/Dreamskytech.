"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Added usePathname
import {
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export default function CareerPage() {
  const pathname = usePathname(); // Get current route
  const isHome = pathname === "/"; // Check if on homepage

  // Technologies Used
  const technologies = [
    // Programming Languages
    { name: "JavaScript", icon: FaJs, description: "Dynamic scripting language for web development." },
    { name: "TypeScript", icon: SiTypescript, description: "Typed superset of JavaScript for safer code." },
    { name: "Java", icon: FaJava, description: "Versatile, object-oriented programming language." },
    { name: "C", icon: SiC, description: "Procedural programming language for system software." },
    { name: "C++", icon: SiCplusplus, description: "Object-oriented programming for performance-critical apps." },
    { name: "Python", icon: FaPython, description: "High-level programming language for diverse applications." },
    // Frontend
    { name: "React.js", icon: FaReact, description: "Library for building interactive web interfaces." },
    { name: "Next.js", icon: SiNextdotjs, description: "React framework for SSR and SEO-friendly apps." },
    { name: "Tailwind CSS", icon: SiTailwindcss, description: "Utility-first CSS framework for fast UI development." },
    // Backend
    { name: "Node.js", icon: FaNodeJs, description: "JavaScript runtime for scalable server-side apps." },
    { name: "Express.js", icon: SiExpress, description: "Minimal Node.js framework for APIs and servers." },
    // Databases
    { name: "MongoDB", icon: SiMongodb, description: "NoSQL database for JSON-like document storage." },
    { name: "MySQL", icon: SiMysql, description: "Relational database management system." },
    // Cloud & DevOps
    { name: "AWS", icon: FaAws, description: "Cloud platform for hosting, storage, and services." },
    { name: "Git", icon: FaGitAlt, description: "Version control system for source code management." },
  ];

  return (
    <>
      {/* Show Header only if not on Home page */}
      {!isHome && <Header />}

      <div className="min-h-screen bg-gray-50">
        {/* Technologies Used Section - Shown on both / and /careers */}
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {technologies.map((tech, i) => {
                const Icon = tech.icon; // Dynamic icon component
                return (
                  <div key={i} className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                    <Icon className="text-3xl sm:text-4xl md:text-5xl text-blue-600 mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Other Sections - Only on /careers */}
        {!isHome && (
          <>
            {/* Why Work With Us Section */}
            <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Why Work With DreamSkyTech?
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
                  At DreamSkyTech, we believe in empowering our employees with a
                  supportive work environment, cutting-edge projects, and opportunities
                  for growth. Join us to make an impact and grow your career.
                </p>
                <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: "🌟", title: "Innovative Culture", desc: "Work on groundbreaking projects with the latest technologies." },
                    { icon: "🤝", title: "Collaborative Team", desc: "Join a diverse, inclusive team that values your input." },
                    { icon: "📈", title: "Career Growth", desc: "Access training, mentorship, and clear career paths." },
                    { icon: "⚖️", title: "Work-Life Balance", desc: "Flexible hours and wellness programs to support you." },
                  ].map((benefit, i) => (
                    <div key={i} className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl block text-blue-600">{benefit.icon}</span>
                      <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
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

            {/* FAQ Section */}
            <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-xl sm:max-w-2xl mx-auto">
                  Got questions about working at DreamSkyTech? We’ve got answers.
                </p>
                <div className="mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6">
                  {[
                    { question: "What is the hiring process like?", answer: "Our hiring process includes an initial application review, technical or role-specific assessments, interviews, and a final offer." },
                    { question: "Do you offer remote work opportunities?", answer: "Yes, many of our roles are remote or hybrid. Check the job description for specifics." },
                    { question: "What benefits do employees receive?", answer: "We offer competitive salaries, health insurance, flexible hours, professional development, and a supportive work environment." },
                    { question: "How can I prepare for an interview?", answer: "Research our company, review the job description, and be ready to showcase your skills and passion for the role." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white shadow-md rounded-xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Show Footer only if not on Home page */}
      {!isHome && <Footer />}
    </>
  );
}