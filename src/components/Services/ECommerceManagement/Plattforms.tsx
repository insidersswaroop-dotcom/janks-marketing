import React from "react";

const platforms = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Flipkart",
    logo: "https://cdn.worldvectorlogo.com/logos/flipkart.svg",
  },
  {
    name: "Meesho",
    logo: "https://brandlogos.net/wp-content/uploads/2025/09/meesho_icon-logo_brandlogos.net_hja1u-768x768.png",
  },
  {
    name: "Tata 1mg",
    logo: "https://www.1mg.com/images/tata_1mg_logo.svg",
  },
  {
    name: "Healthmug",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/89/ed/b7/89edb7cc-1f75-2443-7215-d17b31802e44/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/1200x630wa.png",
  },
  {
    name: "Coupang",
    logo: "	https://www.aboutcoupang.com/wp-content/themes/aboutcp/assets/images/logo.svg",
  },
  {
    name: "Shopee",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg",
  },
  {
    name: "eBay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
  },
];

const Plattfroms = () => {
  return (
    <section className="w-full bg-mute py-16 md:py-10 lg:mt-10 lg:mb-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          We Launch Your Brand Across Leading Marketplaces
        </h2>
        <p className="text-muted-foreground mt-3">
          Reach millions of customers globally with seamless onboarding
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full pt-10">
        <div className="flex w-max animate-scroll gap-12 px-6">
          {/* Duplicate for infinite scroll */}
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] h-20  rounded-2xl p-4"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                height={512}
                // width={512}
                className="max-h-10 object-contain  transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Plattfroms;