import {
  Truck,
  GraduationCap,
  BarChart3,
  Users,
  Home,
  ClipboardList,
  Boxes,
  Receipt,
} from "lucide-react";

const items = [
  {
    title: "Healthcare ERP",
    icon: ClipboardList,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Manufacturing & Supply Chain",
    icon: Boxes,
    mdSpan: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Inventory MGMT",
    icon: Boxes,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Billing & Accounting Systems",
    icon: Receipt,
    mdSpan: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HRMS & Payroll",
    icon: Users,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate CRM",
    icon: Home,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Education LMS",
    icon: GraduationCap,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Logistics & Fleet MGMT",
    icon: Truck,
    mdSpan: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lead MGMT CRM",
    icon: BarChart3,
    mdSpan: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

const DomainsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-primary font-semibold mb-3">
            INDUSTRY SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Built for Real-World Industries
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[200px]">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  relative rounded-2xl overflow-hidden group
                  h-[200px] md:h-auto
                  col-span-1 ${item.mdSpan}
                `}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                    <Icon className="text-white" size={18} />
                  </div>
                  <p className="text-sm font-semibold text-white uppercase tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;