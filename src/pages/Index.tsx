import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import InstagramCarousel from "@/components/InstagramCarousel";
import {
  TrendingUp,
  Users,
  BarChart3,
  Eye,
  Target,
  Sparkles,
  ArrowRight,
  Megaphone,
  PenTool,
  LineChart,
  Zap,
  CheckCircle2,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import BrandSection from "@/components/HomePage/BrandSection";
import HeroSection from "@/components/HomePage/Hero";

const stats = [
  { value: "50M+", label: "Social Reach Generated", icon: Eye },
  { value: "30+", label: "Brands Transformed", icon: Users },
  { value: "340%", label: "Avg. Engagement Growth", icon: TrendingUp },
  { value: "20M+", label: "Content Impressions", icon: BarChart3 },
];

const services = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "End-to-end management of your social presence across all major platforms with data-driven strategies.",
  },
  {
    icon: PenTool,
    title: "Content Strategy & Planning",
    description:
      "Custom content calendars, brand voice development, and creative direction that resonates with your audience.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Your one-stop e-commerce partner for India and beyond helping businesses sell smarter, locally and globally.",
  },
  {
    icon: Sparkles,
    title: "Personal Branding",
    description:
      "Position yourself as a thought leader with cohesive branding, storytelling, and authority-building content.",
  },
  {
    icon: Target,
    title: "Paid Ads Management",
    description:
      "High-ROI ad campaigns on Meta, TikTok, and LinkedIn with continuous optimization and transparent reporting.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description:
      "Comprehensive performance tracking, competitor analysis, and actionable insights delivered monthly.",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description:
      "Deep-dive into your brand, audience, and goals to build a tailored roadmap for your business.",
  },
  {
    step: "02",
    title: "Content",
    description:
      "We create scroll-stopping content that aligns with your brand voice and objectives.",
  },
  {
    step: "03",
    title: "Growth",
    description:
      "Execute proven growth strategies to expand reach and build an engaged community.",
  },
  {
    step: "04",
    title: "Analytics",
    description:
      "Track performance, optimize campaigns, and report on ROI with full transparency.",
  },
];

const whyUs = [
  "Data-driven strategies, not guesswork",
  "Dedicated account manager for every client",
  "Transparent reporting and communication",
  "Proven results across 20+ industries",
  "Custom strategies, no cookie-cutter plans",
  "Flexible month-to-month contracts",
];

const caseStudies = [
  { brand: "", metric: "500%", label: "Follower Growth", period: "6 months" },
  { brand: "", metric: "120+", label: "Qualified Leads", period: "Q1 2025" },
  { brand: "", metric: "450%", label: "Engagement Rate", period: "4 months" },
];

const Index = () => {
  return (
    <main className="">
      {/* Hero */}
      <HeroSection />

      <BrandSection/>

      {/* Social Proof / Stats */}
      <section className="py-10 lg:py-20 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 0.1}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 mb-4">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Results"
            title="Real Growth. Real Numbers."
            description="We let the results speak for themselves. Here's what our clients have achieved."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.brand} delay={i * 0.1}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-all duration-300">
                  {/* <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">{cs.brand}</p> */}
                  <div className="font-display text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                    {cs.metric}
                  </div>
                  <p className="text-primary-foreground/80 font-medium mb-1">
                    {cs.label}
                  </p>
                  <p className="text-primary-foreground/50 text-sm">
                    in {cs.period}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Process"
            title="A Proven Framework for Brand Growth"
            description="Our 4-step methodology has been refined across 200+ client projects to deliver consistent, measurable results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12}>
                <div className="relative bg-card rounded-2xl p-7 shadow-card border border-border/50 h-full">
                  <span className="text-6xl font-display font-bold text-primary/5 absolute top-4 right-6">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-5">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from the brands we've helped grow."
          />
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Banner */}
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
                  Ready to Grow Your Brand?
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
                    Contact Us Now
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
