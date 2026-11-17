import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="min-h-screen bg-[#f5f5f3] flex items-center px-6 overflow-hidden mt-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center w-full py-12 md:py-0">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-[36px] sm:text-[46px] md:text-[56px] font-bold text-[#1f2a44] leading-[1.2] mb-5">
            We Handle Your Social Media. <br/> You Handle Your Business.
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#666] mb-8 max-w-[500px] mx-auto md:mx-0">
           From eye-catching visuals to a full content strategy, we do everything it takes to make your brand impossible to ignore online. One team, every platform, zero stress on your end.
          </p>

          <Link to={`/contact`}>
          <button className="px-6 py-3 bg-[#0b1d3a] text-white border-none rounded-md cursor-pointer">
            Get Started
          </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Tilted Container */}
          <div className="relative w-full max-w-[380px] aspect-[380/500] rounded-[20px] overflow-hidden rotate-6 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">

            {/* BASE IMAGE */}
            <img
              src="/images/services/influencer-marketing.jpg"
              alt="hero"
              className="w-full h-full object-cover"
            />

            {/* GLITCH LAYER 1 */}
            <img
              src="/images/hero.jpg"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover opacity-40 mix-blend-screen translate-x-1 -translate-y-1"
            />

            {/* GLITCH LAYER 2 */}
            <img
              src="/images/hero.jpg"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-overlay -translate-x-1 translate-y-1"
            />

            {/* COLOR OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent" />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-10 left-[4%] bg-white/80 backdrop-blur-[10px] px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] font-semibold text-[#1f2a44]">
            +342%
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;