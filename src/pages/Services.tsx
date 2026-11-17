import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import OfferedServices from "../components/ServicePage/OfferedServices";
import BrandSection from "@/components/HomePage/BrandSection";
import EliteBenefits from "../components/ServicePage/EliteBenefits";

const packages = [
  {
    name: "Starter",
    // price: "$1,500",
    // period: "/month",
    description:
      "Perfect for small businesses just getting started with social media.",
    features: [
      "2 platforms managed",
      "12 posts per month",
      "6+ Reels (Testimonials/UGC/AI Videos)",
      "Monthly analytics report",
      "Monthly strategy calls",
    ],
    popular: false,
  },
  {
    name: "Growth",
    // price: "$3,500",
    // period: "/month",
    description:
      "Ideal for growing brands ready to scale their social media presence.",
    features: [
      "4 platforms managed",
      "24 posts per month",
      "10+ Reels (Testimonials/UGC/AI Videos/Influencers)",
      "Advanced content strategy",
      "Community management",
      "Paid ads management",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    // price: "Custom",
    period: "",
    description:
      "Full-service solution for established brands with complex needs.",
    features: [
      "All platforms managed",
      "20+ Reels (Testimonials/UGC/AI Videos/Influencers)",
      "Dedicated account's team",
      "Custom strategy & reporting",
      "Influencer partnerships",
      "Advanced content strategy",
      "Community management",
      "Paid ads management",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    popular: false,
  },
];

const Services = () => {
  const generateId = (text) => text.toLowerCase().replace(/\s+/g, "-");
  return (
    <main className="">
      {/* Hero */}
      <section className="min-h-screen bg-muted flex items-center px-6 md:px-16 pt-20 pb-10 lg:pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <span className="mb-6 px-4 py-1.5 rounded-full bg-accent/30 text-accent/00 text-xs font-semibold uppercase tracking-widest">
              Social Media & E-Commerce Solutions
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Scale Your Brand <br /> Beyond Limits
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
              From organic growth strategies to high-converting paid campaigns,
              we help brands dominate social media and e-commerce with
              data-driven execution and real business results.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-all"
              >
                Get Started <ArrowRight size={16} />
              </Link>

              {/* <Link
                to="/book-a-call"
                className="px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-all"
              >
                Book a Call
              </Link> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Image Card */}
            <div className="relative w-[100vh] max-w-md h-[75vh] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dvbvuq6pl/image/upload/q_auto/f_auto/v1775838011/service-banner_q10tyt.jpg"
                alt="Social Media Marketing"
                className="w-full h-full object-cover object-center aspect-auto"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md rounded-xl px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">
                  Growth Driven
                </p>
                <p className="text-2xl font-extrabold">High ROI Campaigns</p>
                <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                  <span>↗</span> Scalable Results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <BrandSection />

      {/* Services Detail */}
      <OfferedServices />

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Pricing"
            title="Transparent Pricing, No Surprises"
            description="Choose the package that fits your goals. All plans include strategy, content creation, and reporting."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-7 h-full flex flex-col ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground shadow-lg scale-105 relative"
                      : "bg-card shadow-card border border-border/50"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground px-4 py-1 rounded-lg">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display text-4xl font-bold">
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm ${pkg.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}
                    >
                      {pkg.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-6 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          className={`mt-0.5 shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`}
                          size={14}
                        />
                        <span
                          className={
                            pkg.popular
                              ? "text-primary-foreground/90"
                              : "text-foreground/80"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.popular ? "accent" : "outline"}
                    size="lg"
                    className="rounded-full w-full"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <EliteBenefits />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Plan Is Right for You?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Book a free call with our team and we'll create a custom strategy
              and quote based on your specific goals.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-base"
            >
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
