import React from "react";
import {
  LayoutTemplate,
  ShoppingCart,
  Code,
  Cloud,
  FileText,
  RefreshCcw,
} from "lucide-react";

const services = [
  {
    icon: <LayoutTemplate size={20} />,
    title: "Business Websites",
    desc: "Corporate platforms that project authority and convert visitors into long-term partners.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=90",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "Ecommerce",
    desc: "High-performance storefronts engineered for transactional scale and seamless experience.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=90",
  },
  {
    icon: <Code size={20} />,
    title: "Custom Web Apps",
    desc: "Bespoke applications built with modern frameworks to solve complex business problems.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=90",
  },
  {
    icon: <Cloud size={20} />,
    title: "SaaS Platforms",
    desc: "End-to-end architecture for scalable software products from MVP to global scale.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=90",
  },
  {
    icon: <FileText size={20} />,
    title: "CMS",
    desc: "Custom content management systems that empower teams without compromising structure.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&q=90",
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "Website Redesign",
    desc: "Transform outdated digital assets into modern, high-performing experiences.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=90",
  },
];

const CoreCompetencies = () => {
  return (
    <section className="w-full bg-muted py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Core Competencies
          </h2>
          <p className="text-gray-500 mt-2 max-w-md text-sm">
            We design, build and scale digital products that perform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-end text-white">

                {/* Icon */}
                <div className="mb-4 w-fit p-2 rounded-lg bg-white/20 backdrop-blur-md">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Line */}
                <div className="mt-4 w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;