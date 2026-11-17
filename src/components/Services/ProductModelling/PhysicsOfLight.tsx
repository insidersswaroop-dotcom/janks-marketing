import React from "react";

const PhysicsOfLight = () => {
  return (
    <section className="min-h-screen bg-primary flex items-center px-6 md:px-16 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
            Product Excellence
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Crafting Visual <br /> Luxury.
          </h2>

          {/* Paragraphs */}
          <p className="text-sm text-blue-200/80 leading-relaxed max-w-md">
            Every product tells a story — and we make sure it’s seen in its finest form.
            From the brilliance of diamonds to the smooth finish of skincare, we capture
            textures, reflections, and details with absolute precision.
          </p>

          <p className="text-sm text-blue-200/80 leading-relaxed max-w-md">
            Using advanced lighting setups and post-production techniques, we create
            visuals that elevate your brand — whether it's jewellery, fashion, food,
            or luxury products.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-0 mt-4">
            <div className="pr-8 border-r border-blue-700">
              <p className="text-2xl font-extrabold text-white">4K+</p>
              <p className="text-xs uppercase tracking-widest text-amber-300 mt-1">
                Ultra Detail
              </p>
            </div>
            <div className="pl-8">
              <p className="text-2xl font-extrabold text-white">Studio</p>
              <p className="text-xs uppercase tracking-widest text-amber-300 mt-1">
                Precision Lighting
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* Jewellery */}
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=90"
              alt="Jewellery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Watch */}
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=90"
              alt="Luxury Watch"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Food */}
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=90"
              alt="Food Photography"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Skincare */}
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=90"
              alt="Skincare Product"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhysicsOfLight;