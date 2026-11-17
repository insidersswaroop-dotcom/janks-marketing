"use client";

import React from "react";
import { Camera, Video, User } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product Shoots",
    icon: <Camera className="w-5 h-5" />,
    description:
      "Your product deserves to be seen in its best light — literally. We create clean, consistent and high-converting visuals for e-commerce, catalogues and campaigns.",
    features: [
      "E-commerce & catalogue photography",
      "Lifestyle & styled product shoots",
      "360° product photography",
      "Post-production & retouching",
    ],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    title: "Modeling / Reel Shoots",
    icon: <Video className="w-5 h-5" />,
    description:
      "We create story-driven visuals with models that capture emotion, movement and brand identity. Perfect for modern social media and campaign storytelling.",
    features: [
      "Fashion & lifestyle shoots",
      "Brand campaign content",
      "Instagram & reels production",
      "Behind-the-scenes footage",
    ],
    image:
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=800&q=80",
  },
  {
    title: "Professional Shoots",
    icon: <User className="w-5 h-5" />,
    description:
      "From corporate headshots to personal branding, we craft visuals that communicate confidence, credibility and personality.",
    features: [
      "Corporate headshots & team portraits",
      "Executive branding photography",
      "LinkedIn & profile imagery",
      "Studio & on-location sessions",
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

const CoreDisciplines = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Our Creative Services
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            We craft premium visual experiences that elevate your brand — from product storytelling to professional identity.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                {/* ICON + TITLE */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* DESC */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CoreDisciplines;