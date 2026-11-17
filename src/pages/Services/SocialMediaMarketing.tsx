import React from "react";
import Banner from "@/components/Services/SocialMediaMarketing/Banner";
import EliteOperations from "@/components/Services/SocialMediaMarketing/EliteOperations";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OurPhilosophy from "@/components/Services/SocialMediaMarketing/OurPhilosophy";

const SocialMediaMarketing = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <section className="">
        <EliteOperations />
      </section>
        <OurPhilosophy />

      <section>
        <section className="pb-10 lg:py-28">
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
                    Ready to Scale?
                  </h2>
                  <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                    Book a free discovery call today and let's create a social
                    media strategy that drives real results for your business.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-10 h-14 text-base bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Link to="/contact">
                      Get Started Today
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
