import { Check } from "lucide-react";

const CommerceOptimization = () => {
  return (
    <section className="py-20 bg-mute/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT GRID (Upgraded Cards) */}
        <div className="grid grid-cols-2 gap-4">
          
          {[
            {
              title: "SHOPIFY",
              desc: "Enterprise setup & custom liquid dev.",
            },
            {
              title: "WOOCOMMERCE",
              desc: "Highly scalable WordPress commerce.",
            },
            {
              title: "MARKETPLACE",
              desc: "Multi-vendor platform architecture.",
            },
            {
              title: "CONVERSION",
              desc: "Advanced CRO & A/B testing logic.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs font-semibold text-primary mb-2 tracking-wide">
                  {item.title}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-primary/10 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-tight">
            Commerce Optimization
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
            We don’t just build stores; we build transactional engines. From
            custom payment gateway integrations to high-frequency marketplace
            architectures, our commerce solutions are engineered for
            zero-latency growth.
          </p>

          {/* Bullet List (Enhanced) */}
          <div className="space-y-4">
            {[
              "GLOBAL PAYMENT GATEWAY INTEGRATION",
              "CUSTOM INVENTORY SYNC ENGINES",
              "ENTERPRISE-GRADE SECURITY PROTOCOLS",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                  <Check className="text-white" size={14} />
                </div>

                <p className="text-sm font-medium text-gray-700 tracking-wide group-hover:text-gray-900 transition">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Optional subtle divider line */}
          <div className="mt-8 w-16 h-[2px] bg-primary/30" />
        </div>

      </div>
    </section>
  );
};

export default CommerceOptimization;