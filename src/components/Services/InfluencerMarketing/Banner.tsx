import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "+142%", label: "Avg. Engagement Rate" },
  { value: "3.8x", label: "Creator ROI" },
];

const creatorAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80",
];

export default function HeroBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-mute py-5">
      {/* Ambient blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none bg-[radial-gradient(circle,#3b6fd4_0%,transparent_70%)] blur-[60px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none bg-[radial-gradient(circle,#5e9bff_0%,transparent_70%)] blur-[80px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div
            className={`flex-1 transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 bg-primary text-accent">
                Influencer &amp; UGC Mastery
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 ">
              Real People. Real Stories.
              <br />
              <span className="/50">Real Results.</span>
            </h1>

            {/* Body */}
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-md /40">
              In a world where trust is everything, nothing converts like a real
              person telling a real story.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to={"/contact"}>
                <button className="px-7 py-3.5 rounded-full font-semibold text-sm bg-primary text-white">
                  Start Your Campaign
                </button>
              </Link>
              {/* <button className="px-7 py-3.5 rounded-full font-semibold text-sm bg-transparent border border-primary /70 hover:bg-white/5 transition-all duration-200">
                View Our Work
              </button> */}
            </div>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex flex-col px-5 py-3 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="text-2xl font-bold ">{s.value}</span>
                  <span className="text-xs mt-0.5 /40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Monitor card */}
              <div className="relative rounded-3xl p-[18px] bg-[#0f2044] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1776103037/1165354_Woman_Home_1920x1080_1_kw9ilo.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />

                  {/* Live badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-white/70">
                      Live Campaign Active
                    </span>
                  </div>
                </div>

                {/* Avatars row */}
                <div className="flex items-center justify-between mt-4 px-1">
                  <div className="flex -space-x-2">
                    {creatorAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="creator"
                        className="w-8 h-8 rounded-full object-cover border-2 border-[#0f2044]"
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-white/10 border-2 border-[#0f2044] text-white/60">
                      +9
                    </div>
                  </div>
                  <span className="text-xs text-white/30">
                    12 creators matched
                  </span>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-4 px-5 py-3 rounded-2xl bg-[#112240] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <p className="text-2xl font-black text-white">+142%</p>
                <p className="text-xs mt-0.5 text-white/40">
                  Avg. Engagement Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
