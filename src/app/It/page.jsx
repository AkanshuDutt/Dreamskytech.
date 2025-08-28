"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ITConsultancy() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              IT Consultancy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Transforming Your Business With Technology
            </h2>
            <p className="text-gray-600 mt-4">
              At DreamSkyTech, we provide expert IT consultancy services to
              help businesses streamline operations, adopt modern technologies,
              and achieve growth. From digital transformation to cloud
              strategies, we guide you every step of the way.
            </p>

            <a href="/Contact">
              <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-md">
                Contact Us
              </button>
            </a>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Expert Consultants",
                  desc: "Experienced professionals guiding your IT strategy.",
                },
                {
                  icon: "⚡",
                  title: "Efficient Solutions",
                  desc: "Optimized processes for faster, smarter results.",
                },
                {
                  icon: "🌐",
                  title: "Digital Transformation",
                  desc: "Helping businesses adapt to modern tech seamlessly.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 shadow-md text-center transform transition duration-300 cursor-default hover:shadow-2xl hover:-translate-y-2 hover:bg-white"
                >
                  <span className="block text-blue-600 font-bold text-4xl cursor-default transition-transform duration-300 hover:scale-125">
                    {feature.icon}
                  </span>
                  <h4 className="mt-3 font-semibold text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className="flex justify-center">
            <video
              src="/it1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-3xl h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our IT Consultancy Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of IT services to empower your business. Our
              expert team ensures reliable, scalable, and secure technology solutions.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "IT Strategy",
                  desc: "Comprehensive IT roadmaps to align technology with your business goals.",
                },
                {
                  title: "Cloud Solutions",
                  desc: "AWS, Azure, Google Cloud – scalable, secure, and cost-effective cloud strategies.",
                },
                {
                  title: "Cybersecurity",
                  desc: "Protect your business with audits, risk assessment, and advanced security solutions.",
                },
                {
                  title: "Data Analytics",
                  desc: "Business intelligence, reporting, and predictive analytics for smarter decisions.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
                >
                  <h4 className="font-semibold text-lg text-blue-600">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/it4.jpg"
                alt="DreamSkyTech Team"
                width={900}
                height={990}
                className="shadow-lg rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Driving Business Growth With Technology
              </h2>
              <p className="text-gray-600 mt-4">
                Our IT consultancy services help businesses optimize operations,
                adopt new technologies, and achieve measurable results. We focus
                on innovation, efficiency, and long-term success.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                {[
                  { name: "IT Strategy", percent: 95 },
                  { name: "Cloud Solutions", percent: 90 },
                  { name: "Cybersecurity", percent: 85 },
                  { name: "Data Analytics", percent: 80 },
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
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

      <Footer />
    </>
  );
}
