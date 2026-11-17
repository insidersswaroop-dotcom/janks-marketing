import AnimatedSection from '@/components/AnimatedSection'
import CommerceOptimization from '@/components/Services/WebsiteDevelopment/CommerceOptimization'
import CoreCompetencies from '@/components/Services/WebsiteDevelopment/CoreCompetencies'
import DataListSection from '@/components/Services/WebsiteDevelopment/DataList'
import DomainsSection from '@/components/Services/WebsiteDevelopment/DomainsSection'
import HeroBanner from '@/components/Services/WebsiteDevelopment/HeroSection'
import Methodology from '@/components/Services/WebsiteDevelopment/Methodology'
import TheSilentAdvantage from '@/components/Services/WebsiteDevelopment/TheSilentAdvantage'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const WebsiteAndCustomSoftwareDevelopment = () => {
  return (
    <div>
       <HeroBanner/>
       <CoreCompetencies/>
       <DomainsSection/>
       <DataListSection/>
       <CommerceOptimization/>
       <Methodology/>
       <TheSilentAdvantage/>
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
                  Transform your ideas into scalable, high-performance websites
                  and custom software solutions tailored to your business goals.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 h-14 text-base bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
