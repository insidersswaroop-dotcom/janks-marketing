import { ChartAreaIcon } from "lucide-react";
import React from "react";

const EliteOperations = () => {
  return (
    <section className="bg-[#f5f5f3] px-5 font-sans pt-8">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f2a44] mb-2.5">
          A Complete Social Media Solution Under One Roof
        </h2>
        <p className="text-[#777] mb-8">
          We don't just post content, we build brands. Whether you're starting
          from scratch or scaling up, we provide everything your business needs
          to show up professionally, consistently, and powerfully across every
          platform.
        </p>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 mb-5">
          {/* LEFT CARD */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="mb-2.5 text-[#1f2a44] font-semibold">
                Graphic & Visual Design
              </h3>
              <p className="text-sm text-[#666] mb-5">
                First impressions happen in milliseconds. Our professional
                graphic designers create stunning visuals that reflect your
                brand's personality and make people pause. From social media
                posts and story templates to promotional banners and ads every
                pixel is crafted with purpose.
              </p>

              {/* IMAGE ROW */}
              {/* <div className="flex gap-3 flex-wrap">
                {[
                  "/images/services/followers&growtth.jpg",
                  "/images/services/influencer-marketing.jpg",
                  "/images/services/influencer-marketing.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="content"
                    className="w-[200px] h-[140px] rounded-[10px] object-cover flex-shrink-0"
                  />
                ))}
              </div> */}
            </div>
            <div className="bg-primary text-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="mb-2.5  font-semibold">We design for</h3>
              <p className="text-sm text-slate-300">
                <ol className="list-disc list-inside mb-2.5">
                  <li>Instagram, Facebook, LinkedIn & Twitter/X posts.</li>
                  <li>Story and Reel cover designs.</li>
                  <li>Ad creatives and promotional graphics.</li>
                  <li>Branded templates you can reuse.</li>
                </ol>
              </p>

              {/* IMAGE ROW */}
              {/* <div className="flex gap-3 flex-wrap">
                {[
                  "/images/services/followers&growtth.jpg",
                  "/images/services/influencer-marketing.jpg",
                  "/images/services/influencer-marketing.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="content"
                    className="w-[200px] h-[140px] rounded-[10px] object-cover flex-shrink-0"
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white  text-white rounded-2xl p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <img src="/images/services/followers&growtth.jpg" className="h-[290px] w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteOperations;
