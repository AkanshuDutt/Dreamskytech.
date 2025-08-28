"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CyberSecurity() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Cybersecurity
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Protecting Your Digital Assets
            </h2>
            <p className="text-gray-600 mt-4">
              At DreamSkyTech, we provide comprehensive cybersecurity services
              to safeguard your business from threats. From risk assessment to
              advanced threat mitigation, we ensure your data and systems remain
              secure.
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
                  icon: "🛡️",
                  title: "Risk Assessment",
                  desc: "Identify vulnerabilities before they impact your business.",
                },
                {
                  icon: "🔒",
                  title: "Threat Mitigation",
                  desc: "Advanced security solutions to prevent cyber attacks.",
                },
                {
                  icon: "🌐",
                  title: "Network Security",
                  desc: "Protect your network infrastructure from breaches and hacks.",
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
              src="/cyber.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-3xl h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Core Cybersecurity Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Cybersecurity Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end cybersecurity solutions to protect your
              business, data, and digital infrastructure from evolving threats.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Security Audits",
                  desc: "Comprehensive system and network audits to identify risks.",
                },
                {
                  title: "Penetration Testing",
                  desc: "Simulated cyber attacks to test and strengthen your defenses.",
                },
                {
                  title: "Endpoint Protection",
                  desc: "Safeguard all devices connected to your network from threats.",
                },
                {
                  title: "Incident Response",
                  desc: "Rapid action to contain and remediate security breaches.",
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

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/cyber.jpg"
                alt="Cybersecurity Team"
                width={900}
                height={800}
                className="shadow-lg rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Protecting Businesses From Modern Cyber Threats
              </h2>
              <p className="text-gray-600 mt-4">
                DreamSkyTech delivers trusted cybersecurity services that help
                businesses defend against cyber attacks, ensure compliance, and
                secure sensitive data.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                {[
                  { name: "Security Audits", percent: 95 },
                  { name: "Penetration Testing", percent: 90 },
                  { name: "Incident Response", percent: 85 },
                  { name: "Endpoint Protection", percent: 80 },
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
