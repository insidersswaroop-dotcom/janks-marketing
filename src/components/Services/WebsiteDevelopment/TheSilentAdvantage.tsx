import {
  DraftingCompass,
  Globe,
  HeadphonesIcon,
  Truck,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Truck,
    text: "Optimized agile workflows that eliminate bloat and accelerate time to market.",
  },
  {
    icon: DraftingCompass,
    text: "Future proof engineering designed to handle millions of requests without friction.",
  },
  {
    icon: Globe,
    text: "Core web vitals optimized out of the box for maximum search visibility.",
  },
  {
    icon: HeadphonesIcon,
    text: "White glove technical partnership that treats your business as our own.",
  },
];

const TheSilentAdvantage = () => {
  return (
    <section className="bg-mute py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">
            Why Choose Us
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            The Silent Advantage
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Our reputation is built on the quiet precision of our work. We
            prioritize results over noise, delivering software that remains
            stable as you scale.
          </p>

          {/* subtle divider */}
          <div className="w-16 h-[2px] bg-primary/30 mt-4" />
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="text-primary w-5 h-5" />
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TheSilentAdvantage;