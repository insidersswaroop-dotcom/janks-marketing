
import { ShieldCheck, Clock, Network } from "lucide-react";

const benefits = [
  {
    title: "Verified Authority",
    desc: "We position you as the definitive voice in your niche through curated insights.",
    icon: ShieldCheck,
  },
  {
    title: "Time Sovereignty",
    desc: "Reclaim 20+ hours a month while your social presence grows on autopilot.",
    icon: Clock,
  },
  {
    title: "Strategic Networking",
    desc: "Active outbound engagement that builds bridges with other industry titans.",
    icon: Network,
  },
];
export default function EliteBenefits() {
  return (
    <section className="bg-[#f5f5f3] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a44] mb-8 leading-snug">
            Elite Benefits for High-Performance Brands
          </h2>

          <div className="space-y-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return(
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0b1d3a] rounded-md">
                  <Icon width={18} height={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f2a44]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-5">

          {/* IMAGE 1 */}
          <div className="relative h-[180px] rounded-xl overflow-hidden">
            <img
              src="/images/services/team-discussion.jpg"
              alt="team"
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="relative h-[180px] rounded-xl overflow-hidden">
            <img
              src="/images/services/moment-discussion.jpg"
              alt="data"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              Data-Led Decisions
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="relative h-[200px] rounded-xl overflow-hidden col-span-1">
            <img
              src="/images/services/creative-brainstorming.jpg"
              alt="collaboration"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              Collaborative Excellence
            </div>
          </div>

          {/* IMAGE 4 */}
          <div className="relative h-[200px] rounded-xl overflow-hidden col-span-1">
            <img
              src="https://res.cloudinary.com/dvbvuq6pl/image/upload/q_auto/f_auto/v1775837665/2150063163_zxbba8.jpg"
              alt="growth"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}