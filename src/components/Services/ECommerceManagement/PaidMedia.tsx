import React from "react";
import { BarChart3, Globe, Search } from "lucide-react";
import { Link } from "react-router-dom";

const PaidMediaSection = () => {
  return (
    <section className="w-full bg-[#0b2a5b] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative rounded-2xl p-2 bg-[#1c3b73]">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Ad strategy"
                className="w-full h-[350px] md:h-[420px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">
          <p className="text-sm tracking-widest text-blue-300 mb-3">
            GROWTH ADVERTISING
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why Sell on Ecommerce Marketplaces?
          </h2>

          <p className="text-blue-100 mb-8 max-w-lg">
            The world is shopping online — and your products need to be where
            your customers are. Ecommerce marketplaces give your brand access to
            millions of ready-to-buy shoppers every single day, without the cost
            of building your own store from scratch.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-1 gap-6 mb-8">
            <div className="flex gap-3 items-center">
              <BarChart3 className="text-blue-300 w-5 h-5 mt-1" />
              <div>
                {/* <h4 className="font-semibold">Meta Ads Alpha</h4> */}
                <p className="text-sm text-blue-200">
                  India's ecommerce market is projected to reach $350 billion by
                  2030
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Search className="text-blue-300 w-5 h-5 mt-1" />
              <div>
                {/* <h4 className="font-semibold">Google Search/Pmax</h4> */}
                <p className="text-sm text-blue-200">
                  Over 500 million online shoppers active in India alone
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Globe className="text-blue-300 w-5 h-5 mt-1" />
              <div>
                {/* <h4 className="font-semibold">Google Search/Pmax</h4> */}
                <p className="text-sm text-blue-200">
                  Global ecommerce sales cross $6 trillion annually
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link to="/contact">
            <button className="bg-white text-[#0b2a5b] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Request Ad Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaidMediaSection;
