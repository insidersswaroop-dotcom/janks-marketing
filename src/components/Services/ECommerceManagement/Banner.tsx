import React from "react";
import {Link} from "react-router-dom";

const ECommerceBanner = () => {
  return (
    <section className="min-h-screen bg-mute flex items-center px-6 md:px-12 lg:px-20 overflow-hidden mt-8">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-20 md:py-0">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">

          {/* Pill badge */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0b1d3a] inline-block" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#0b1d3a] uppercase">
              Commerce Architecture
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[48px] sm:text-[56px] lg:text-[68px] font-extrabold leading-[1.05] text-[#0b1d3a] mb-6">
            Sell Everywhere
            <br />
            <span className="text-[#6b8cff]">Grow Anywhere</span>
            {/* {" "}Commerce. */}
          </h1>

          {/* Subtext */}
          <p className="text-[16px] sm:text-[17px] text-[#555] leading-relaxed max-w-[420px] mb-10">
          We help your brand list, manage, and scale across top ecommerce marketplaces both in India and globally. Whether it's Meesho, Amazon, Flipkart, Tata 1mg, or Healthmug locally, or Coupang, Shopee, eBay, and Amazon Global internationally, we handle everything from product listings and catalog management to ads and order fulfillment, so you can focus on building your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="px-7 py-3.5 bg-[#0b1d3a] text-white text-[15px] font-semibold rounded-xl hover:bg-[#162e58] transition-colors duration-200 shadow-md">
                Scale Your Brand
              </button>
            </Link>
            {/* <button className="px-7 py-3.5 bg-white text-[#0b1d3a] text-[15px] font-semibold rounded-xl border border-gray-200 hover:border-gray-400 transition-colors duration-200 shadow-sm">
              View Methodology
            </button> */}
          </div>
        </div>

        {/* RIGHT — Dashboard mockup */}
        <div className="relative flex justify-center md:justify-end">

          {/* Tilted dashboard card */}
          <div className="relative w-full max-w-[480px] bg-[#111827] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.25)] rotate-3 overflow-hidden">

            {/* Dashboard header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-white text-[15px] font-medium tracking-wide">Analytics</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Dashboard body */}
            <div className="grid grid-cols-[1fr_1.4fr] gap-0">

              {/* Left sidebar list */}
              <div className="px-4 py-5 border-r border-white/10 space-y-2">
                {[
                  { label: "Subscriptions", active: false },
                  { label: "Overview", active: false },
                  { label: "Dap", active: true },
                  { label: "Acquisitions", active: false },
                  { label: "1G AirMax", active: false },
                  { label: "1D Base", active: false },
                  { label: "1K Groups", active: false },
                  { label: "Cashflows", active: false },
                  { label: "GL-Lines", active: false },
                  { label: "Cashpennies", active: false },
                  { label: "Octave", active: false },
                  { label: "Clonotic", active: false },
                  { label: "Bi-Analytics", active: false },
                  { label: "CentusList-Interprise", active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`text-[10px] px-2 py-1 rounded-md truncate ${
                      item.active
                        ? "bg-[#22d3ee]/20 text-[#22d3ee] font-semibold"
                        : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Right chart area */}
              <div className="px-4 py-5 relative flex flex-col justify-between">
                {/* Tab row */}
                <div className="flex gap-3 text-[10px] text-white/40 mb-4 justify-end">
                  <span>Issues</span>
                  <span>Combinations</span>
                  <span>Default</span>
                </div>

                {/* Arc chart mock */}
                <div className="flex items-center justify-center my-4">
                  <svg viewBox="0 0 140 100" className="w-full max-w-[160px]">
                    {/* Background arc */}
                    <path
                      d="M 20 90 A 50 50 0 0 1 120 90"
                      fill="none"
                      stroke="#ffffff10"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Foreground arc — cyan */}
                    <path
                      d="M 70 90 A 50 50 0 0 1 120 90"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Center text */}
                    <text x="70" y="72" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
                      +142%
                    </text>
                    <text x="70" y="84" textAnchor="middle" fill="#ffffff50" fontSize="7">
                      MoM Growth
                    </text>
                  </svg>
                </div>

                {/* Bottom axis labels */}
                <div className="flex justify-between text-[9px] text-white/30 mt-2">
                  <span>Lapsed</span>
                  <span>Passive</span>
                  <span>Calcinate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating growth badge */}
          <div className="absolute -bottom-4 left-4 md:left-0 bg-white rounded-2xl px-5 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.15)] -rotate-1">
            <div className="flex items-center gap-2 mb-0.5">
              <svg className="w-4 h-4 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21 6.75" />
              </svg>
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#888] uppercase">
                Growth Velocity
              </span>
            </div>
            <p className="text-[22px] font-extrabold text-[#0b1d3a] leading-tight">
              +142% MoM
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ECommerceBanner;