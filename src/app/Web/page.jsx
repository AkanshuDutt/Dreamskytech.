"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function WebDevelopment() {
  const pathname = usePathname();

  // Define routes where Header and Footer should NOT be shown
  const excludeHeaderFooterRoutes = ["/", "/web-development"]; // Add homepage and web-development page

  const showHeaderFooter = !excludeHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Web Development Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Building Modern & Scalable Websites
            </h2>
            <p className="text-gray-600 mt-4">
              At <span className="font-semibold">DreamSkyTech</span>, we
              specialize in creating professional, responsive, and
              user-friendly websites that help businesses build a strong online
              presence. From simple business websites to complex enterprise
              solutions, we ensure your digital identity stands out.
            </p>
            <a href="/Contact">
              <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Video */}
          <div className="flex justify-center">
            <video
              src="/web.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-3xl h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: What We Offer */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Web Development Covers
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We combine design, technology, and strategy to deliver websites
              that are visually appealing, technically robust, and optimized for
              performance.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">🌐 Frontend Development</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive and responsive UI using modern frameworks like
                  React, Next.js, and Tailwind CSS.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">⚙️ Backend Development</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Secure and scalable server-side solutions with Node.js,
                  Express, and database integration.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">📱 Responsive Design</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Mobile-first design approach ensuring seamless user experience
                  across all devices.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">⚡ Performance Optimization</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Fast-loading websites with clean code, caching, and SEO best
                  practices.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">🔒 Security</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Implementation of SSL, authentication, and data protection to
                  keep your site safe.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg">🚀 SEO & Digital Presence</h4>
                <p className="text-sm text-gray-500 mt-2">
                  SEO-friendly websites that rank higher and bring more
                  customers to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div className="flex justify-center">
              <Image
                src="/web1.jpg"
                alt="DreamSkyTech Web Development Team"
                width={900}
                height={800}
                className="shadow-lg rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Creating Future-Ready Web Solutions
              </h2>
              <p className="text-gray-600 mt-4">
                From startups to enterprises, DreamSkyTech has helped companies
                establish a strong digital presence with intuitive websites,
                custom web apps, and eCommerce solutions that scale with your
                business growth.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Responsive Web Design</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[94%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Custom Web Applications</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[89%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>eCommerce Development</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Maintenance & Support</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showHeaderFooter && <Footer />}
    </>
  );
}