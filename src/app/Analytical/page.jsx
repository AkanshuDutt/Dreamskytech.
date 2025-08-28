"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AnalyticsSolutions() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Analytics Solutions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Unlock Insights. Drive Smarter Decisions.
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              At DreamSkyTech, our analytics solutions transform raw data into
              meaningful insights. We empower businesses with predictive analytics,
              dashboards, and AI-driven reporting that improve decision-making,
              efficiency, and growth.
            </p>
            <a href="/Contact">
              <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Contact Us
              </button>
            </a>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Data Visualization",
                  desc: "Interactive dashboards & reports for real-time decisions.",
                },
                {
                  icon: "🤖",
                  title: "AI & Predictive Models",
                  desc: "Forecast trends with advanced machine learning insights.",
                },
                {
                  icon: "🔒",
                  title: "Secure Data",
                  desc: "End-to-end security for data-driven solutions.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 shadow-md text-center transform transition duration-300 cursor-default hover:shadow-2xl hover:-translate-y-2 hover:bg-white"
                >
                  <span className="block text-blue-600 font-bold text-3xl sm:text-4xl transition-transform duration-300 hover:scale-125">
                    {feature.icon}
                  </span>
                  <h4 className="mt-3 font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image / Video */}
          <div className="flex justify-center">
            <video
              src="/analytics.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-xl md:max-w-3xl h-56 sm:h-72 md:h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: Our Analytics Stack */}
        <section className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
              Analytics Technologies We Use
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
              We integrate cutting-edge analytics tools and technologies to provide
              businesses with accurate and scalable solutions.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Power BI",
                "Tableau",
                "Python (Pandas, NumPy)",
                "Machine Learning",
                "Google Analytics",
                "BigQuery",
                "AWS / Azure Data",
                "ETL Pipelines",
              ].map((tech, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 bg-gray-50 shadow rounded-lg text-sm sm:text-base"
                >
                  <h4 className="font-semibold">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/data.jpg"
                alt="Analytics Solutions DreamSkyTech"
                width={900}
                height={800}
                className="shadow-lg rounded-xl w-full max-w-md sm:max-w-lg md:max-w-xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
                Transforming Data into Business Growth
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                From startups to enterprises, we provide data-driven strategies
                that fuel success. Our analytics team ensures clarity, accuracy,
                and performance in every project.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                {[
                  { title: "Business Intelligence", percent: 95 },
                  { title: "Data Visualization", percent: 90 },
                  { title: "Predictive Analytics", percent: 85 },
                  { title: "Data Engineering", percent: 80 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span>{item.title}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.percent}%` }}
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
