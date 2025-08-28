"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation"; // Import usePathname

export default function ServiceSection() {
  const pathname = usePathname(); 

  return (
    <>
      {/* Render Header only if not on homepage */}
      {pathname !== "/" && <Header />}

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero with Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Software Development
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Turning Your Ideas Into Digital Reality
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              At DreamSkyTech, we provide smart software solutions that automate
              workflows, boost efficiency, and help businesses scale with
              confidence. With a strong focus on innovation, we deliver
              cutting-edge digital products tailored to your unique goals.
            </p>

            <a href="/Contact">
              <button className="mt-6 px-5 sm:px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base">
                Contact Us
              </button>
            </a>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "👨‍💻",
                  title: "Expert Team",
                  desc: "Skilled professionals delivering top-notch solutions.",
                },
                {
                  icon: "🚀",
                  title: "Fast Execution",
                  desc: "Agile and adaptive workflows for faster delivery.",
                },
                {
                  icon: "💡",
                  title: "Innovative Ideas",
                  desc: "Creative solutions that transform businesses digitally.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 shadow-md text-center transform transition duration-300 cursor-default hover:shadow-2xl hover:-translate-y-2 hover:bg-white"
                >
                  <span className="block text-blue-600 font-bold text-3xl sm:text-4xl transition-transform duration-300 hover:scale-125">
                    {feature.icon}
                  </span>
                  <h4 className="mt-3 font-semibold text-base sm:text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className="flex justify-center">
            <video
              src="/meeting.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-lg sm:max-w-xl lg:max-w-3xl h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: Software Development Technologies */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Software Development Technologies We Use
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              At DreamSkyTech, we utilize the latest technologies to deliver
              scalable, secure, and high-performing software solutions. From
              frontend to backend, databases to cloud – our stack covers
              everything you need for success.
            </p>

            {/* Technologies Grid */}
            <div className="mt-16 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
                {[
                  {
                    title: "Databases",
                    desc: "MySQL, PostgreSQL, MongoDB, Firebase – secure and efficient data management.",
                  },
                  {
                    title: "Cloud & DevOps",
                    desc: "AWS, Azure, Docker, CI/CD – ensuring smooth deployment and reliable infrastructure.",
                  },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 text-center"
                  >
                    <h4 className="font-semibold text-lg text-blue-600">{tech.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/bg.jpg"
                alt="DreamSkyTech Team"
                width={700}
                height={600}
                className="shadow-lg rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
                Empowering Businesses With Technology
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                DreamSkyTech has helped companies across industries by building
                scalable software, modern web platforms, and secure digital
                solutions. Trusted by clients for innovation, reliability, and
                growth-focused strategies.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                {[
                  { name: "Software Development", percent: 95 },
                  { name: "Web Development", percent: 88 },
                  { name: "SEO & Digital Marketing", percent: 82 },
                  { name: "Cyber Security", percent: 76 },
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Render Footer only if not on homepage */}
      {pathname !== "/" && <Footer />}
    </>
  );
}