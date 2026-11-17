import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery" },
  { number: "02", title: "UI/UX" },
  { number: "03", title: "Development" },
  { number: "04", title: "QA" },
  { number: "05", title: "Launch" },
  { number: "06", title: "Scale" },
];

const Methodology = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-foreground mb-16">
          The Methodology
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-border" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-xs font-semibold text-foreground">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center gap-4">
                  <span className="text-sm tracking-widest text-primary uppercase font-medium">
                    {step.title}
                  </span>

                  {/* subtle divider line */}
                  <div className="hidden sm:block w-10 h-[1px] bg-border" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;