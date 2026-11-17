import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="w-full relative py-20 my-5 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_50%)]" /> */}

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Strategic Digital Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building Scalable <br />
            Websites & Custom <br />
            Software.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-lg">
            We design and develop high-performance digital products tailored for
            modern businesses. From websites to complex software systems, we
            deliver solutions that scale with your growth.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to={`/contact`}>
              <button className="px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl opacity-60" />

          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Software development workspace"
              className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Glass Card Overlay */}
          <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-xl px-4 py-3 rounded-xl shadow-lg border border-white/40">
            <p className="text-xs text-gray-500">High Performance</p>
            <p className="text-sm font-semibold text-gray-900">
              Scalable & Secure Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;