import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import HeroBanner from "@/components/Services/InfluencerMarketing/Banner";
import CoreServices from "@/components/Services/InfluencerMarketing/CoreServices";
import TestimonialVideos from "@/components/Services/InfluencerMarketing/TestimonialsVideos";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const InfluencerMarketing = () => {
  return (
    <section>
      <HeroBanner />
      <CoreServices />
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeading
            tag="Our Work"
            title="Real Stories - Real Results"
            // title="Product Showcase & Real Testimonials"
            description="We create authentic, real testimonial videos for your product that turn customer trust into ad results."
          />
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-8">
          <TestimonialVideos />
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-3xl p-10 sm:p-14 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>
              <div className="relative z-10">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Ready to build something powerful?
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                 Join the elite circle of brands that leverage human-centric marketing to dominate their niche.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 h-14 text-base bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/contact">
                    Book Your Free Call
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </section>
  );
};

export default InfluencerMarketing;
