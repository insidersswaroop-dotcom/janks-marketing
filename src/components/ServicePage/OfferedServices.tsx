import React from "react";
import {
  Megaphone,
  ShoppingCart,
  Camera,
  Users,
  Video,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";
import { link } from "fs";

const services = [
  {
    link: "/services/social-media-marketing",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=900&q=80",
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "We craft data-driven social media strategies that build your brand and drive real engagement. Every post, story, and campaign is designed with one goal — growth.",
    benefits: [
      "More reach & visibility",
      "Higher engagement",
      "Consistent brand voice",
      "Real measurable results",
    ],
    deliverables: [
      "Monthly content calendar",
      "Designed posts & reels",
      "Caption & hashtag strategy",
      "Monthly performance report",
    ],
    idealFor:
      "Businesses looking to build a strong online presence and turn followers into loyal customers.",
  },
  {
    link: "/services/ecommerce-management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    icon: ShoppingCart,
    title: "Ecommerce Management",
    description:
      "We handle everything your online store needs — from listings to conversions. Our team ensures your store is always optimized to sell more, every single day.",
    benefits: [
      "Higher conversion rate",
      "Smooth store operations",
      "India & global market ready",
      "Sales-focused strategy",
    ],
    deliverables: [
      "Product listing & optimization",
      "Store setup & management",
      "Ad campaign management",
      "Sales performance tracking",
    ],
    idealFor:
      "Brands selling online who want a fully managed, high-converting store without the hassle.",
  },
  {
    link: "/services/product-modelling",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    icon: Camera,
    title: "Product Shoots & Modeling",
    description:
      "We create stunning visuals that make your product impossible to scroll past. Professional photography and modeling that tells your brand's story beautifully.",
    benefits: [
      "Premium quality visuals",
      "Boosts product credibility",
      "Ready for ads & listings",
      "On-brand aesthetics",
    ],
    deliverables: [
      "Studio / outdoor shoot",
      "Edited product photos",
      "Model shoots if required",
      "Images in all formats & sizes",
    ],
    idealFor:
      "Brands that want premium, scroll-stopping content for their website, ads, and social media.",
  },
  {
    link: "/services/influencer-marketing",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    icon: Users,
    title: "Influencer Marketing",
    description:
      "We connect your brand with the right influencers who genuinely influence buying decisions. No vanity metrics — just real reach and real sales.",
    benefits: [
      "Access to trusted creators",
      "Wider audience reach",
      "Builds brand credibility",
      "Performance-driven campaigns",
    ],
    deliverables: [
      "Influencer sourcing & outreach",
      "Campaign strategy & briefs",
      "Content review & approval",
      "Post-campaign analytics report",
    ],
    idealFor:
      "Brands looking to build trust, expand reach, and drive sales through authentic voices.",
  },
  {
    link: "https://images.unsplash.com/photo-1587614382346-acb1c6c3b1f3?auto=format&fit=crop&w=900&q=80",
    image: "/images/services/ugc-videos.jpg",
    icon: Video,
    title: "Real Testimonial / UGC Videos",
    description:
      "Nothing sells better than real people sharing real experiences. We produce authentic customer videos that build instant trust and drive conversions.",
    benefits: [
      "Builds instant trust",
      "Boosts ad performance",
      "100% authentic content",
      "High conversion potential",
    ],
    deliverables: [
      "Customer/creator video shoots",
      "Edited UGC-style videos",
      "Subtitled & formatted versions",
      "Ready-to-use for ads & reels",
    ],
    idealFor:
      "Brands that want powerful social proof to boost ad performance and customer confidence.",
  },
  {
    link: "/services/website-and-softwaredevelopment",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    icon: Code,
    title: "Website & Custom Software Development",
    description:
      "We design and develop high-performance websites and custom software tailored to your business needs. From sleek landing pages to complex platforms, we build solutions that scale.",
    benefits: [
      "Fully customized solutions",
      "High-performance & scalable",
      "SEO-friendly structure",
      "Modern UI/UX design",
    ],
    deliverables: [
      "Website design & development",
      "Custom web applications",
      "Admin dashboards",
      "Ongoing support & maintenance",
    ],
    idealFor:
      "Businesses looking to establish a strong digital presence or build custom tools to streamline operations and scale efficiently.",
  },
];




const OfferedServices = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {services.map((service, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 items-stretch shadow-2xl rounded-lg bg-[#dbf5fa]"
            >
              {/* IMAGE */}
              <div className={`${isReverse ? "md:order-2" : ""} h-full`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover ${isReverse ? "rounded-r-lg" : "rounded-l-lg"}`}
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* BENEFITS */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Benefits</h3>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    {service.benefits.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* DELIVERABLES */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">What You Get</h3>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    {service.deliverables.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* IDEAL FOR */}
                <div className="bg-[#c9f0f8] border-l-4 border-black px-5 py-4 mt-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Ideal For:
                    </span>{" "}
                    {service.idealFor}
                  </p>
                </div>

                {/* LEARN MORE */}
                <div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black mt-2 group"
                  >
                    Learn More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfferedServices;
