import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/janksmarketing?igsh=MWJpdXV1NGY1MnpqeA==",
  },
  {
    Icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/janksmarketing/",
  },
  {
    Icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/share/1Bd1sCrZxZ/",
  },
];


const pageLinks = [
  { name: "Social Media Marketing", path: "/social-media-marketing" },
  { name: "E-commerce Management", path: "/e-commerce-management" },
  { name: "Product Modelling", path: "/product-modelling" },
  { name: "Influencer Marketing/UGC Videos", path: "/influencer-marketing" },
  { name: "Website & Custom Software Development", path: "/website-development" },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold">
                <img src="/images/logo-pure-white.png" height={100} width={150} className="my-2.5" alt="Janks Marketing Logo" />
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Results-driven social media management that helps brands grow
              their online presence, generate leads, and increase revenue.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => {
                const { Icon } = link;
                return (
                  <a
                    key={i}
                    href={link?.url}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Book a Call", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent text-sm flex items-center gap-1 transition-colors duration-300 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Services
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((service,index) => (
                <li key={index}>
                  <Link
                    to={`/services${service.path}`}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {service?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  info@janksmarketing.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  +91-9315879401
                </span>
                <span className="text-primary-foreground/70 text-sm">
                  +91-9217139402
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  A3/237, Rohini Sec-7, New Delhi-110085
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Janks Marketing Agency. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
