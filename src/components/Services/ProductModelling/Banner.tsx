import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-mute flex items-center px-6 md:px-16 pt-20 pb-10 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <span className="mb-6 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest">
            Product Modelling & Visual Artistry
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f1f3d] leading-tight mb-6">
            Make Every Detail Impossible to Ignore
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500 max-w-sm mb-10 leading-relaxed">
            Where Your Brand Meets Its Best Frame. <br/> From
            product to people, we shoot what sells, inspires, and lasts.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            {/* <button className="px-6 py-3 bg-[#0f1f3d] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3260] transition-colors">
              View Showcase
            </button> */}
            <Link to={`/contact`}>
            <button className="px-6 py-3 border border-gray-400  bg-[#0f1f3d] text-white text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Project
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Image Card */}
          <div className="relative w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80"
              alt="Precision Watch"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0f1f3d]/80 backdrop-blur-md rounded-xl px-5 py-4 text-white">
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-1">
                Visual Fidelity
              </p>
              <p className="text-2xl font-extrabold">8K Ultra-HD</p>
              <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                <span>↗</span> +100% Detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
