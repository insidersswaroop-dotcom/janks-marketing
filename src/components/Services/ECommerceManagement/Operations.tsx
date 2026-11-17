import React from "react";
import { Box, ChartSpline, CircleDollarSign, List, MonitorCheck, Store } from "lucide-react";

const OperationsLogistics = () => {
  const services = [
    { text: "Platform Onboarding & Account Setup", icon: MonitorCheck },
    { text: " Product Catalog & Listing Management", icon: List },
    { text: "Pricing & Inventory Management", icon: CircleDollarSign },
    { text: "Marketplace Advertising & Promotions", icon: Store },
    { text: "Order & Returns Management", icon: Box },
    { text: "Performance Reporting & Growth Strategy", icon: ChartSpline },
  ];

  return (
    <section className="bg-muted/50 px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT CONTENT (UNCHANGED) */}
        <div>
          <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#0b1d3a] mb-4 leading-tight">
            What We Do ?
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed mb-8 max-w-[420px]">
            We don't just get you listed. We build your entire ecommerce
            presence from the ground up and manage it so it keeps growing.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div className="flex gap-4 items-center" key={index}>
                  <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4 text-[#0b1d3a]" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0b1d3a] mb-1">
                      {service.text}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — UPDATED IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* Product Shoot */}
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=90"
              alt="Product Shoot Jewellery"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Editing / Laptop Work */}
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=90"
              alt="Editing Work"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Studio / Camera Setup */}
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=90"
              alt="Studio Setup"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Team / Discussion */}
          <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=90"
              alt="Team Discussion"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationsLogistics;