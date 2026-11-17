import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80",
];

const stats = [
  { label: "satisfied rate", value: "90%" },
  { label: "successful projects", value: "100+" },
  { label: "clients served", value: "30+" },
];

const partners = [
  "UrbaNest", "Mountana", "FactFix", "Log Trans", "Excels", "MeetHub",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-muted overflow-hidden px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 lg:py-0">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1f3d] leading-[1.08] tracking-tight mb-6"
          >
            Elevate Your <br />
            Presence, <br />
            Amplify Your Impact
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-500 leading-relaxed mb-10 max-w-sm"
          >
            Strategic social media management for business owners, coaches, and
            creators who demand authority.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Button
              asChild
              className="rounded-lg px-6 py-3 bg-[#0f1f3d] text-white text-sm font-semibold hover:bg-[#1a3260] transition-all h-auto"
            >
              <Link to="/contact">Book a Call</Link>
            </Button>
            <Link
              to={`/services`}
            >
            <button className="flex items-center gap-2 text-sm font-semibold text-[#0f1f3d] hover:opacity-70 transition-all">
              <span className="w-8 h-8 rounded-full border border-[#0f1f3d]/30 flex items-center justify-center">
                <ArrowUpRight size={14} />
              </span>
              Learn more
            </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4 items-start"
        >

          {/* Top Left — Social Proof Card */}
          <div className="bg-[#0f1f3d] rounded-2xl p-5 flex flex-col gap-3">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#0f1f3d]"
                />
              ))}
            </div>
            <p className="text-3xl font-black text-white">20K+</p>
            <p className="text-xs text-white/50 leading-relaxed">
              More than 2,000 people has joined us
            </p>
            {/* Growth tag */}
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 mt-1">
              <ArrowRight size={14} className="text-green-400 -rotate-45" />
              <span className="text-xs text-white/60">Successful growth</span>
            </div>
          </div>

          {/* Top Right — Influencer Image */}
          <div className="rounded-2xl overflow-hidden h-52 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&q=80"
              alt="Social Media Influencer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left — Product/Web Image */}
          <div className="rounded-2xl overflow-hidden h-44 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80"
              alt="Product Modelling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right — Team Image */}
          <div className="rounded-2xl overflow-hidden h-44 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stats — right side */}
          <div className="absolute -right-4 top-0 bottom-0 flex flex-col justify-around gap-3 pointer-events-none">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0f1f3d] rounded-xl px-4 py-3 shadow-xl min-w-[110px]"
              >
                <p className="text-[10px] text-white/40 uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                <p className="text-xl font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;