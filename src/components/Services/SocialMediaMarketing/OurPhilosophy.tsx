import { DraftingCompass } from "lucide-react";
import React from "react";

const OurPhilosophy = () => {
  // const pillars = [
  //   {
  //     title: "Human Connection",
  //     body: "Beyond the profile, we seek the pulse. True digital authority is built on the vulnerability and authenticity that machines cannot replicate.",
  //   },
  //   {
  //     title: "Algorithmic Empathy",
  //     body: "We don't just game the system; we understand its intent. We align brand narratives with the evolving patterns of human curiosity.",
  //   },
  //   {
  //     title: "Brand Resonance",
  //     body: "Impact isn't measured in clicks, but in the echoes of your message across the cultural landscape. We craft stories that stay.",
  //   },
  // ];

  const pillars = [
    {
      title: "Logo & Brand Identity",
      body: "Your logo is the face of your business. We design clean, memorable logos along with complete brand guidelines that communicate your identity before you say a word.",
    },
    {
      title: "Visual Language & Assets",
      body: "We craft cohesive brand systems including color palettes, typography, and brand voice, along with essential assets like business cards and media kits.",
    },
    {
      title: "Packaging & Brand Experience",
      body: "We design professional product packaging that stands out on shelves and shines in unboxing experiences—because great branding goes beyond the screen.",
    },
  ];

  {
    /* <DraftingCompass size={160} className="md:hidden" /> */
  }
  {
    /* <DraftingCompass size={250} className="hidden md:block" /> */
  }

  return (
    <section className="relative bg-white mt-10 min-h-[560px] px-6 sm:px-10 md:px-16 py-16 md:py-20 overflow-hidden font-[Georgia,serif]">
      {/* Compass icon — top right watermark */}
      {/* <div className="absolute top-8 right-6 md:right-12 opacity-[0.07] pointer-events-none select-none">
      <img src="/images/logo-white.png"/>
      </div> */}

      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <img
          src="/images/logo-white.png"
          alt="watermark"
          className="w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[32rem] h-auto object-contain"
        />
      </div>

      {/* Eyebrow */}
      <p className="text-center text-[11px] font-bold tracking-[0.25em] text-[#0b1d3a] uppercase mb-4">
        Our Philosophy
      </p>

      {/* Main heading */}
      <h2
        className="text-center text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0b1d3a] leading-tight mb-10 md:mb-16"
        style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.5px" }}
      >
        Build a Brand People Remember.
      </h2>

      {/* Three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[960px] mx-auto mb-12 md:mb-16">
        {pillars.map((pillar, i) => (
          <div key={i}>
            {/* Dash accent */}
            <div className="w-8 h-[2px] bg-[#0b1d3a] mb-5" />
            <h3
              className="text-[16px] md:text-[17px] font-bold text-[#0b1d3a] mb-3"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-[14px] text-[#444] leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="text-center max-w-[540px] mx-auto px-4 sm:px-0">
        <p
          className="text-[15px] md:text-[16px] italic text-[#0b1d3a] leading-relaxed"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          "Strategy is the bridge between current perception and future
          authority. We don't build platforms; we build presence."
        </p>
      </div>
    </section>
  );
};

export default OurPhilosophy;
