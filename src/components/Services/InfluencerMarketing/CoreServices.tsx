// import React from "react";

// const campaignImages = [
//   "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
//   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
//   "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
// ];

// const CoreServices = () => {
//   return (
//     <section className="min-h-screen bg-[#f0f0ec] flex items-center px-6 md:px-16 py-0">
//       <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
//         {/* Top Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Card 1 — Strategic Network */}
//           <div className="bg-white rounded-3xl p-8 flex flex-col gap-5 shadow-sm">
//             {/* Icon */}
//             <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
//               ✦
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-extrabold text-[#0f1f3d]">
//               What We Create
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-500 leading-relaxed">
//               We transform your product into a story worth watching, through
//               real voices, real experiences and real emotion that your audience
//               can't ignore.
//             </p>

//             {/* Stat Pills */}
//             <div className="grid grid-cols-2 gap-3 mt-2">
//               {[
//                 { value: "Top 1%", label: "Creator Vetting" },
//                 { value: "Global", label: "Market Access" },
//               ].map((stat) => (
//                 <div
//                   key={stat.label}
//                   className="flex flex-col gap-0.5 bg-[#f5f5f3] rounded-xl px-4 py-3"
//                 >
//                   <span className="text-sm font-extrabold text-[#0f1f3d]">
//                     {stat.value}
//                   </span>
//                   <span className="text-xs text-gray-400">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Card 2 — Cinematic UGC */}
//           <div className="bg-[#0f1f3d] rounded-3xl p-8 flex flex-col gap-5 shadow-sm">
//             {/* Icon */}
//             <div className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center text-blue-300 text-xl">
//               🎬
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-extrabold text-white">
//               Cinematic UGC Production
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-blue-300/70 leading-relaxed">
//               High-fidelity 'authentic' video content that converts at 3x the
//               rate of traditional studio ads.
//             </p>

//             {/* Spacer */}
//             <div className="flex-1" />

//             {/* Feature List */}
//             <ul className="flex flex-col gap-3">
//               {[
//                 "4K Vertical Mastery",
//                 "Direct-Response Scripting",
//                 "Native Platform Editing",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-center gap-3 text-sm text-white"
//                 >
//                   <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Row — Campaign Management */}
//         <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
//           {/* Left Text */}
//           <div className="flex-1 flex flex-col gap-4">
//             {/* Icon */}
//             <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
//               ⚙️
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-extrabold text-[#0f1f3d]">
//               Campaign Management
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
//               End-to-end white-glove service. From legal contracts and product
//               fulfillment to creative direction and performance reporting. You
//               own the growth; we handle the grind.
//             </p>

//             {/* CTA */}
//             <button className="flex items-center gap-2 text-sm font-semibold text-[#1a3d8f] hover:gap-3 transition-all duration-200 w-fit mt-1">
//               Explore Our Process →
//             </button>
//           </div>

//           {/* Right Images */}
//           <div className="flex gap-3 w-full md:w-auto">
//             {campaignImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl overflow-hidden flex-1 md:w-36 h-32 md:h-40 shrink-0"
//               >
//                 <img
//                   src={src}
//                   alt={`Campaign ${i + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreServices;

import React from "react";

const creationItems = [
  {
    title: "Unboxing Videos",
    desc: "First impressions that instantly grab attention and spark curiosity.",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Customer Testimonials",
    desc: "Honest reviews that build confidence and eliminate buyer hesitation.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Before & After",
    desc: "Visual proof that showcases your product's real-world impact.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  },
];

const campaignImages = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
];

const audienceItems = [
  {
    title: "E-Commerce Brands",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80",
  },
  {
    title: "New Product Launches",
    img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=200&q=80",
  },
  {
    title: "Scaling Businesses",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80",
  },
  {
    title: "Service Based Companies",
    img: "https://res.cloudinary.com/dvbvuq6pl/image/upload/q_auto/f_auto/v1776102450/campaign-creators-gMsnXqILjp4-unsplash_urcotd.jpg",
  },
];

const CoreServices = () => {
  return (
    <section className="min-h-screen bg-mute flex items-center px-6 md:px-16 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 — What We Create */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-5 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              🎥
            </div>

            <h3 className="text-xl font-extrabold text-[#0f1f3d]">
              What We Create
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              We transform your product into a story worth watching — through
              real voices, real experiences and real emotion that your audience
              can't ignore.
            </p>

            {/* Image + Content List */}
            <div className="flex flex-col gap-4 mt-2">
              {creationItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-[#f5f5f3] rounded-xl p-3"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f1f3d]">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Who We Work With */}
          <div className="bg-[#0f1f3d] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            {/* Header */}
            <div className="flex flex-col gap-3">
              {/* <div className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center text-blue-300 text-xl">
                
              </div> */}

              <h3 className="text-xl font-extrabold text-white">
                🤝 &nbsp; Who We Work With
              </h3>

              <p className="text-sm text-white leading-relaxed ">
                We partner with ambitious product based brands, ready to grow
                through the power of authentic content.
              </p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceItems.map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-2xl overflow-hidden h-40 group"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/80 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row — Brand Positioning */}
        <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
          {/* Left Text */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              ⭐
            </div>

            <h3 className="text-xl font-extrabold text-[#0f1f3d]">
              Content That Feels Real — And Converts
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              We create scroll-stopping UGC and testimonial content that feels
              native, authentic, and built to perform. Every piece is designed
              to build trust and drive action.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              No stiff scripts — just real stories guided with strategy, clean
              edits, and platform-ready delivery.
            </p>

            {/* <button className="flex items-center gap-2 text-sm font-semibold text-[#1a3d8f] hover:gap-3 transition-all duration-200 w-fit mt-1">
              Explore Our Process →
            </button> */}
          </div>

          {/* Right Images */}
          <div className="flex gap-3 w-full md:w-auto">
            {campaignImages.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden flex-1 md:w-36 h-32 md:h-40 shrink-0"
              >
                <img
                  src={src}
                  alt={`Campaign ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
