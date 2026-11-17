import { useEffect, useRef, useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467861/Video4_deb1v0.mp4",
    brand: "Bloom Skincare",
    likes: "2,847",
    caption: "Glow from within ✨ New serum drop this Friday",
  },
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467859/Video2_l0di8b.mp4",
    brand: "FitLife App",
    likes: "4,123",
    caption:
      "Your body can stand almost anything. It's your mind you have to convince 💪",
  },
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467855/Video3_shzpfd.mp4",
    brand: "Scale Academy",
    likes: "1,956",
    caption: "7 proven strategies for business growth in 2025 📈",
  },
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467836/Video5_xyqar7.mp4",
    brand: "Brew & Co.",
    likes: "3,412",
    caption: "Good mornings start here ☕ New seasonal blend available now",
  },
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467821/Video8_jwwlhj.mp4",
    brand: "TechFlow",
    likes: "5,201",
    caption: "Launching something big. Stay tuned 🚀",
  },
  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467810/Video9_wk0imm.mp4",
    brand: "Luxe Interiors",
    likes: "2,108",
    caption: "Minimalism is the ultimate sophistication ✦",
  },

  {
    video:
      "https://res.cloudinary.com/dvbvuq6pl/video/upload/q_auto/f_auto/v1775467804/Video1_xlubxu.mp4",
    brand: "Luxe Interiors",
    likes: "2,108",
    caption: "Minimalism is the ultimate sophistication ✦",
  },
];

const TestimonialVideos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.5;

    const animate = () => {
      if (!isDragging && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <AnimatedSection>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...posts, ...posts].map((post, i) => (
          <div
            key={`${post.brand}-${i}`}
            className="flex-shrink-0 w-[280px] sm:w-[300px]"
          >
            <div className="bg-card rounded-xl border border-border overflow-hidden group">
              {/* Header */}
              <div className="flex items-center gap-2 px-3 ">
                {/* <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-[10px] font-bold">
                    {post.brand.charAt(0)}
                  </span>
                </div> */}
                <span className="text-xs font-semibold text-foreground">
                  {/* {post.brand} */}
                </span>
              </div>

              {/* Video */}
              <div className="aspect-square overflow-hidden">
                <video
                  src={post.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload nofullscreen noremoteplayback"
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Actions */}
              <div className="px-3 py-2.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Heart
                      size={18}
                      className="text-foreground hover:text-red-500 transition-colors cursor-pointer"
                    />
                    <MessageCircle
                      size={18}
                      className="text-foreground cursor-pointer"
                    />
                    <Send
                      size={18}
                      className="text-foreground cursor-pointer"
                    />
                  </div>
                  <Bookmark
                    size={18}
                    className="text-foreground cursor-pointer"
                  />
                </div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  {post.likes} likes
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  <span className="font-semibold text-foreground">
                    {/* {post.brand.toLowerCase().replace(/\s+/g, "")}{" "} */}
                  </span>
                  {/* {post.caption} */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TestimonialVideos;
