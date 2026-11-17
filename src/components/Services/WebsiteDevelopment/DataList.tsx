import React from "react";

const DataListSection = () => {
  const items = [
    "Healthcare",
    "Dental",
    "ECommerce",
    "Cosmetics",
    "Astrology",
    "Real Estate",
    "Education",
    "Restaurants",
    "Travel",
    "Finance",
    "Startups",
  ];

  return (
    <section className="py-28 bg-muted relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Industries We Serve
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            We build scalable digital solutions across diverse industries,
            helping businesses grow faster with technology.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-full bg-white border border-border text-xs sm:text-sm font-medium text-foreground tracking-wide 
              shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
            >
              {item}
            </div>
          ))}
        </div>

      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default DataListSection;