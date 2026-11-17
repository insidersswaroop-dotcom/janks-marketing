import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Award, Heart, Lightbulb, Rocket, Target, Users } from "lucide-react";

const timeline = [
  { year: "2024", title: "The Beginning", description: "Started as a freelance social media strategist, working with local businesses to build their online presence." },
  { year: "2024", title: "First Major Client", description: "Landed our first six-figure brand partnership and grew their Instagram by 800% in 8 months." },
  { year: "2025", title: "Agency Founded", description: "Officially launched Janks Marketing Agency, bringing together a team of content creators, strategists, and ad specialists." },
  { year: "2025", title: "Reached 15 Clients Milestone", description: "Reached 15 active clients across e-commerce, SaaS, coaching, and lifestyle brands." },
  { year: "2026", title: "30+ Brands & Growing", description: "Continuing to scale with a global client base and a team of 20+ digital marketing experts." },
];

const values = [
  { icon: Target, title: "Results-Driven", description: "Every strategy is built around measurable outcomes. We don't chase vanity metrics, we drive real business growth." },
  { icon: Heart, title: "Client-First", description: "Your success is our success. We treat every brand as our own, providing dedicated support and genuine partnership." },
  { icon: Lightbulb, title: "Innovation", description: "Social media evolves daily. We stay ahead of trends and algorithm changes so your brand is always at the forefront." },
  { icon: Users, title: "Collaboration", description: "We work with you, not just for you. Transparent communication and shared goals drive our process." },
];

const achievements = [
  { number: "30+", label: "Brands Served" },
  { number: "20M+", label: "Content Impressions" },
  { number: "50M+", label: "Audience Reach" },
  { number: "92%", label: "Client Retention" },
];

const About = () => {
  return (
    <>
      <style>{`
        html, body { overflow-x: hidden !important; max-width: 100% !important; }
      `}</style>

      <main className="pt-12 w-full overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="py-20 lg:py-28 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: text */}
              <AnimatedSection direction="left">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-primary/5 text-primary">
                  About Janks Marketing
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                  Building Brands That <span className="text-primary">Stand Out</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Janks Marketing Agency was born from a simple belief: every brand deserves a powerful online presence. We're a team of strategists, creators, and growth experts passionate about helping businesses and personal brands thrive in the digital world.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  What started as a one-person freelance operation has grown into a full-service social media and e-commerce agency serving over 30+ brands across. From building high-converting online stores to crafting scroll-stopping content, everything we do is designed to drive real sales and sustainable growth. Our data-driven approach and creative excellence have helped clients generate millions in revenue through strategic social media management and smart e-commerce solutions.
                </p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </AnimatedSection>

              {/* Right: founder image card */}
              <AnimatedSection direction="right">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                  <div
                    className="w-full rounded-3xl aspect-[4/5] flex items-end p-6 sm:p-8 overflow-hidden relative bg-primary"
                    style={{
                      backgroundImage: `url('/images/IMG_4130.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "59% center",
                    }}
                  >
                    <div className="absolute inset-0  z-10 rounded-3xl" />
                    <div className="relative z-20">
                      <Award className="text-white mb-3" size={28} />
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-1">
                        Ananya Goyal
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-20 lg:py-28 bg-muted/50 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shrink-0">
                    <Rocket className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower brands with the strategies, content, and expertise needed to build authentic online communities, generate sustainable growth, and turn social media into their most powerful revenue channel.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shrink-0">
                    <Lightbulb className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted social media partner for ambitious brands worldwide known for delivering exceptional results, creative innovation, and genuine client partnerships that drive lasting impact.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="py-16 lg:py-20 bg-primary overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((a, i) => (
                <AnimatedSection key={a.label} delay={i * 0.1} className="text-center">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2 break-words">
                    {a.number}
                  </div>
                  <p className="text-primary-foreground/60 text-xs sm:text-sm">{a.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 lg:py-28 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Our Values"
              title="What Drives Everything We Do"
              description="Our core values shape every strategy we build, every piece of content we create, and every relationship we nurture."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="flex gap-4 sm:gap-5 bg-card rounded-2xl p-6 sm:p-7 shadow-card border border-border/50 h-full">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <v.icon className="text-primary" size={22} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 lg:py-28 bg-muted/50 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Our Journey"
              title="From Freelance to Full-Service Agency"
            />
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="flex gap-4 sm:gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-[10px] sm:text-xs">
                        {item.year}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8 min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-28 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-accent/10 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
                    Let's Build Something Amazing Together
                  </h2>
                  <p className="text-primary-foreground/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                    Ready to take your brand to the next level? Let's start with a conversation.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-300 hover:-translate-y-0.5"
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

      </main>
    </>
  );
};

export default About;