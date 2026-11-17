import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasMega: true },
  { name: "Contact", path: "/contact" },
];

const megaMenu = [
  {
    category: "Social & Influencer",
    items: [
      {
        icon: "✦",
        title: "Social Media Marketing",
        desc: "Data-driven roadmaps for organic dominance.",
        link: "services/social-media-marketing",
      },
      {
        icon: "🎬",
        title: "Influencer Marketing & Content Creation",
        desc: "Authentic storytelling through elite creators.",
        link: "services/influencer-marketing",
      },
    ],
  },
  {
    category: "Commerce & Growth",
    items: [
      {
        icon: "🛍️",
        title: "Ecommerce Management",
        desc: "Scaling revenue through optimized operations.",
        link: "services/e-commerce-management",
      },
      // {
      //   icon: "📈",
      //   title: "Growth Strategy",
      //   desc: "Multi-channel funnels built for expansion.",
      // },
    ],
  },
  {
    category: "Design & CGI",
    items: [
      {
        icon: "🎨",
        title: "Product Modelling",
        desc: "Hyper-realistic assets that convert viewers.",
        link: "services/product-modelling",
      },
      // {
      //   icon: "✳️",
      //   title: "Visual Identity",
      //   desc: "Defining the aesthetic of future category leaders.",
      // },
    ],
  },
  {
    category: "Engineering",
    items: [
      {
        icon: "🖥️",
        title: "Website & Custom Software Development",
        desc: "Award-winning layouts and interaction design.",
        link: "/services/website-development",
      },
      // {
      //   icon: "⚙️",
      //   title: "Custom Software",
      //   desc: "Bespoke technical solutions for complex needs.",
      //   link: "/services/custom-software-development",

      // },
      // {
      //   icon: "📱",
      //   title: "App Development",
      //   desc: "Native mobile experiences designed for scale.",
      //   link: "/services/app-development",
      // },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
  }, [location]);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">S</span>
            </div> */}
            <span className="font-display text-xl font-bold text-foreground">
              <img
                src="/images/logo.png"
                className="h-10 lg:h-12 w-auto py-1"
                alt="logo"
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="flex flex-col gap-0">
            <div
              className="hidden lg:flex items-center gap-1 py-2.5"
              ref={megaRef}
            >
              {navLinks.map((link) =>
                link.hasMega ? (
                  <button
                    key={link.path}
                    onClick={() => setMegaOpen(!megaOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path || megaOpen
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-[#f5f5f3] border-b border-border shadow-xl"
                  >
                    <div className="container mx-auto px-8 py-8">
                      <div className="grid grid-cols-5 gap-8">
                        {/* Service Columns */}
                        {megaMenu.map((group) => (
                          <div
                            key={group.category}
                            className="flex flex-col gap-5"
                          >
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                              {group.category}
                            </p>
                            {group.items.map((item) => (
                              <Link
                                to={item?.link}
                                key={item.title}
                                className="flex items-start gap-3 group"
                              >
                                <span className="text-lg mt-0.5">
                                  {item.icon}
                                </span>
                                <div>
                                  <p className="text-sm font-bold text-[#0f1f3d] group-hover:text-primary transition-colors">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}

                        {/* Promo Card */}
                        <div className="bg-[#0f1f3d] rounded-2xl p-6 flex flex-col gap-4 justify-between">
                          <span className="text-[10px] uppercase tracking-widest bg-blue-800 text-blue-300 px-3 py-1 rounded-full w-fit">
                            Our Services
                          </span>
                          <div>
                            <h3 className="text-white font-bold text-lg leading-snug mb-2">
                              End-to-end solutions for every stage of growth.
                            </h3>
                            <p className="text-blue-300 text-xs leading-relaxed">
                              From strategy to execution, we deliver work that
                              moves businesses forward.
                            </p>
                          </div>
                          <Link
                            to="/services"
                            className="flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all"
                          >
                            Expolre Services
                            <ArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-[10px] text-center text-primary">
              𝐇𝐚𝐫𝐞 𝐤𝐫𝐢𝐬𝐡𝐧𝐚!
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link> */}
            <Button
              asChild
              variant="hero"
              size="lg"
              className="rounded-full px-6"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Regular Links */}
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Services — Left to Right Grid */}
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-4 px-4 py-4">
                            {megaMenu.map((group) => (
                              <div
                                key={group.category}
                                className="flex flex-col gap-3"
                              >
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                                  {group.category}
                                </p>
                                {group.items.map((item) => (
                                  <Link
                                    to={item?.link}
                                    key={item.title}
                                    className="flex items-start gap-2 group"
                                  >
                                    <span className="text-base mt-0.5">
                                      {item.icon}
                                    </span>
                                    <div>
                                      <p className="text-xs font-bold text-[#0f1f3d] group-hover:text-primary transition-colors">
                                        {item.title}
                                      </p>
                                      <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}

              {/* Mobile CTA */}
              <div className="pt-3 flex flex-col gap-2">
                {/* <Link
                  to="/login"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  Login
                </Link> */}
                <Button asChild variant="hero" className="w-full rounded-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
