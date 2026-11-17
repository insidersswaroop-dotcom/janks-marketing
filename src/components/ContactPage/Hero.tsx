import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="min-h-screen bg-mute flex items-start px-6 md:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Let's Turn Your <br /> Ideas into Reality
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            Have a project in mind? Whether it's a website, custom software, or
            a complete digital solution — we're ready to help you build,
            scale, and succeed.
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            {/* <Link
              to="#contact"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all"
            >
              Book a Call <ArrowRight size={16} />
            </Link> */}
            <Link
              to="/services"
              className="px-6 py-3 bg-foreground/10 text-foreground rounded-lg font-semibold hover:bg-foreground/20 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* RIGHT VISUALS */}
        {/* Mobile: flat row layout. md+: absolute-positioned collage */}
        <div className="relative flex justify-center">

          {/* ── MOBILE LAYOUT (flat, no overlap) ── */}
          <div className="flex md:hidden w-full gap-3">
            {/* Left column: stat card + main image */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="bg-accent text-accent-foreground rounded-2xl p-4">
                <p className="text-xs mb-1">Clients Connected</p>
                <p className="text-2xl font-bold">500+</p>
              </div>
              <div className="rounded-2xl overflow-hidden h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Client Communication"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column: bottom image + two stat badges */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="rounded-2xl overflow-hidden h-[140px]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-foreground text-background px-4 py-3 rounded-xl">
                <p className="text-xs">Response Rate</p>
                <p className="text-xl font-bold">98%</p>
              </div>
              <div className="bg-foreground text-background px-4 py-3 rounded-xl">
                <p className="text-xs">Projects</p>
                <p className="text-xl font-bold">120+</p>
              </div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (original absolute collage) ── */}
          <div className="hidden md:block relative w-full h-[420px]">
            {/* Top Card */}
            <div className="absolute top-0 left-10 bg-accent text-accent-foreground rounded-2xl p-6 w-[220px] shadow-xl z-10">
              <p className="text-sm mb-2">Clients Connected</p>
              <p className="text-3xl font-bold">500+</p>
            </div>

            {/* Main Image */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                alt="Client Communication"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 right-0 w-[260px] h-[180px] rounded-2xl overflow-hidden shadow-xl z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute right-[-20px] top-24 bg-foreground text-background px-4 py-3 rounded-xl shadow-lg z-30">
              <p className="text-xs">Response Rate</p>
              <p className="text-xl font-bold">98%</p>
            </div>
            <div className="absolute right-[-10px] bottom-24 bg-foreground text-background px-4 py-3 rounded-xl shadow-lg z-30">
              <p className="text-xs">Projects</p>
              <p className="text-xl font-bold">120+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;