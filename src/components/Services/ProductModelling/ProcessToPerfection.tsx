import React from "react";

const steps = [
  {
    number: "01",
    title: "Concept & Planning",
    description:
      "We understand your brand vision, product positioning, and audience to plan the perfect shoot concept.",
    active: false,
  },
  {
    number: "02",
    title: "Setup & Styling",
    description:
      "From lighting and props to model coordination, every detail is styled to match your brand identity.",
    active: false,
  },
  {
    number: "03",
    title: "Shoot Execution",
    description:
      "Using high-end equipment and expert direction, we capture visuals that feel premium and impactful.",
    active: false,
  },
  {
    number: "04",
    title: "Editing & Delivery",
    description:
      "Professional retouching and color grading ensure your final images are ready for campaigns and social media.",
    active: true,
  },
];

const ProcessToPerfection = () => {
  return (
    <section className="min-h-screen bg-muted px-6 md:px-16 py-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-16">

        {/* Header */}
        <div className="text-center max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mb-4">
            Process to Perfection
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            A seamless workflow designed to deliver stunning visuals that elevate your brand presence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-start">
          {steps.map((step, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={step.number}
                className={`group relative rounded-2xl p-6 flex flex-col gap-4 shadow-sm transition-all duration-300 hover:shadow-lg
                  ${isOdd ? "mt-10 pb-16" : "pb-6"}
                  ${
                    step.active
                      ? "bg-[#0f1f3d] text-white"
                      : "bg-white text-[#0f1f3d]"
                  }`}
              >
                {/* Step Number */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${
                      step.active
                        ? "bg-amber-400 text-black"
                        : "bg-[#f4f4f2] text-[#0f1f3d] group-hover:bg-primary group-hover:text-white"
                    }`}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold">
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    step.active
                      ? "text-blue-200/80"
                      : "text-gray-500"
                  }`}
                >
                  {step.description}
                </p>

                {/* Subtle Hover Glow */}
                {!step.active && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessToPerfection;