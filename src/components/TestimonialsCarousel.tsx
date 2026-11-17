import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rahul Sodhi",
    role: "Vedarma (Herbal & Ayurvedic Products)",
    quote:
      "Been working with Ananya and JANKS MARKETING for 3 years now — that itself says a lot. They handle everything from social media, advertisements, testimonial videos to e-commerce for both India and international markets. Results have been consistently good and sales have grown significantly. What keeps us coming back is how flexible and professional they are. Highly recommend!",
    rating: 5,
    avatar: "images/testimonial-logos/vedarma.jpeg",
  },
  {
    name: "Mr. Sandeep Goyal",
    role: "Kaylite Switches & Accessories",
    quote:
      "Honestly mujhe lagta tha ki social media sirf fashion aur food brands ke liye hota hai. Switches aur accessories ke liye kaun dekhega? But Ananya ne convince kiya aur main ne try kiya. Photoshoot itna accha hua ki khud hamare dealers ne pucha ki yeh photos kahan se li .Social media setup bohot clean aur professional tha. Aur influencer marketing — that actually worked, didn't expect that at all. Inquiries badh gayi aur brand ka ek proper image bana finally. Ananya gets the job done without any drama. Recommended!",
    rating: 5,
    avatar: "/images/testimonial-logos/kaylite.jpeg",
  },
  {
    name: "Ayush Kapoor",
    role: "Silvernut (Premium Dry Fruits)",
    quote:
      "Our product was always good but the presentation online was nowhere close to what it deserved. Ananya and JANKS MARKETING did a really beautiful photoshoot for us and built our complete online presence. The way they showcased our dry fruits, the styling, and the visuals, everything looked so premium. Customers actually started perceiving us as a high-end brand. Sales grew by 60%+ and the brand finally looks the part. Really glad we worked with them.",
    rating: 5,
    avatar: "images/testimonial-logos/silvernut.jpeg",
  },
  {
    name: "Neeraj Gupta",
    role: "Justwin Solutions (Law Firm)",
    quote:
      "Ananya and JANKS MARKETING handled our designing and advertisement and the results were excellent. The creatives looked sharp, professional and perfectly suited for a law firm. Our advertisements reached the right audience and generated genuine inquiries. Very smooth experience throughout. Highly recommend JANKS MARKETING!",
    rating: 5,
    avatar: "images/testimonial-logos/justwin-solutions.jpeg",
  },
  {
    name: "Raghav",
    role: "Boomalo - Clothing Brand",
    quote:
      "Got Ananya's reference through her father and honestly it was a great call. JANKS MARKETING handled our social media, did a really professional video shoot, and built our website from scratch. Everything came out exactly how we imagined — clean, bold and on brand. Sales picked up noticeably and the brand finally has a solid online presence. Really happy with the work.",
    rating: 5,
    avatar: "/images/testimonial-logos/boomalo.jpeg",
  },
  {
    name: "Aarav Giroh",
    role: "LOOM & SOLE (Clothing Brand)",
    quote:
      "Got Ananya's reference through a friend and it worked out really well for us. JANKS MARKETING set up our entire social media from scratch, designed our t-shirt graphics, and delivered some really clean video edits. The brand finally has a proper look and feel to it. Professional, reliable and genuinely good work. Recommended!",
    rating: 5,
    avatar: "/images/testimonial-logos/loom&sole.jpeg",
  },
  {
    name: "Sameer Gupta",
    role: "Sameer Gupta Law & Associates",
    quote:
      "JANKS MARKETING handled our design work and the output was very clean, professional and exactly what a law firm should look like. Ananya understood our requirements perfectly. Highly recommend.",
    rating: 5,
    avatar: "/images/testimonial-logos/gupta-associates.jpeg",
  },
  {
    name: "Varun Kumar",
    role: "BYCADDIE (Women Accessories)",
    quote:
      "Honestly, our e-commerce sales were stagnant and we didn't know where to fix it. Ananya and JANKS MARKETING came in, optimized our entire setup from listings, content, strategy and the results were almost immediate. Sales grew by 60%+ and the whole process was smooth and hassle free. Ananya is professional, proactive aur genuinely invested in your brand's growth. Highly recommend JANKS MARKETING to anyone serious about scaling their e-commerce business!",
    rating: 5,
    // avatar: "JR",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const itemsToShow =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - itemsToShow;

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, maxIndex]);

  const goTo = (dir: "prev" | "next") => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      dir === "next"
        ? prev >= maxIndex
          ? 0
          : prev + 1
        : prev <= 0
          ? maxIndex
          : prev - 1,
    );
  };

  return (
    <AnimatedSection>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-card rounded-2xl p-6 lg:p-7 border border-border h-full flex flex-col">
                  <Quote className="text-primary/20 mb-4" size={28} />
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                    {t.quote}
                  </p>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-16 h-16 border-2 border-gray-10 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-16 h-16 border-2 border-gray-10 bg-primary text-white rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">
                          {t.role.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {t.name}
                      </p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => goTo("prev")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo("next")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsCarousel;
