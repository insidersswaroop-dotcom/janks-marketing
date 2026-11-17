import React from "react";
import Banner from "@/components/Services/ProductModelling/Banner";
import CoreDisciplines from "@/components/Services/ProductModelling/CoreDisciples";
import PhysicsOfLight from "@/components/Services/ProductModelling/PhysicsOfLight";
import ProcessToPerfection from "@/components/Services/ProductModelling/ProcessToPerfection";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductModelling = () => {
  return (
    <div>
      <Banner />
      <CoreDisciplines />
      <PhysicsOfLight />
      <ProcessToPerfection />
      <section className="pb-10 lg:py-28 bg-muted/50">
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
                  Ready to Engineer Your <br /> Visual Identity?
                </h2>
                <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                  
                  From CAD data to editorial masterpiece, we provide the ultimate visual advantage for discerning brands.
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
    </div>
  );
};

export default ProductModelling;
