import React from "react";

const BrandSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f3ef]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 py-4 ">
              Elevating Personal Brands to Global Standards.
            </h2>

            {/* underline */}
            {/* <div className="w-full flex flex-row h-[3px] bg-primary rounded-full mt-2" /> */}
            <div className="w-32 h-2 bg-red-500 mt-4" />    
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our Full-Spectrum Social Management is designed for CEOs,
              Founders, and Creative Leaders who demand an online presence that
              matches their professional stature. We navigate the complexities
              of digital narrative so you can focus on building your empire.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We specialize in LinkedIn, X (Twitter), and curated Instagram
              profiles, creating a cohesive ecosystem of authority that attracts
              high-value opportunities and fosters genuine community engagement.
            </p>

            {/* Bottom Info */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
                  Primary Goal
                </p>
                <p className="text-foreground font-medium">Market Authority</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
                  Ideal For
                </p>
                <p className="text-foreground font-medium">
                  Executive Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
