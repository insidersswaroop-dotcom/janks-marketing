import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Health & Wellness",
    img: "https://supplysix.com/cdn/shop/articles/Simple_and_Natural_Health_and_Fitness_Tips_for_Beginners_and_Seniors_c253d0c6-c753-4353-a1f3-00f7a10d20ff.png?v=1739357052",
  },
  {
    name: "Beauty & Personal Care",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fashion & Apparel",
    img: "https://www.voguefashioninstitute.com/wp-content/uploads/2024/02/asian-tailor-woman-working-clothes-tailoring-atelier_74952-2106.jpg",
  },
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Home & Kitchen",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Baby & Kids",
    img: "https://www.firstthingsfirst.org/wp-content/uploads/2017/12/Baby-Child-Care-1-1.jpg",
  },
  {
    name: "Sports & Fitness",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Food & Beverages",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pharma & OTC",
    img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-29922,resizemode-75,msid-116379614/industry/healthcare/biotech/pharmaceuticals/pharma-lobby-govt-meet-to-discuss-otc-drug-regulation.jpg",
  },
];

const ImageCard = ({ item }) => (
  <div className="relative h-40 overflow-hidden rounded-2xl group">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
      <p className="text-white text-sm font-semibold">{item.name}</p>
    </div>
  </div>
);

export default function IndustriesSection() {
  return (
    <section className="min-h-screen bg-muted py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">
            Industries We Power
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
            From fast-moving consumer goods to regulated sectors — we help brands scale across multiple high-demand categories.
          </p>
        </div>

        {/* Top Row (FIXED GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

          {/* Card 1 */}
          <div className="rounded-2xl p-7 bg-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Diverse Category Expertise
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              We’ve worked across multiple high-growth industries, adapting strategies based on customer behavior and platform dynamics.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {industries.slice(0, 4).map((item, i) => (
                <ImageCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-4 bg-gray-200">
            <div className="grid grid-cols-2 gap-3">
              {industries.slice(4, 8).map((item, i) => (
                <ImageCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Card 3 */}
          <div className="rounded-2xl p-7 bg-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Compliance & Trust
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We ensure adherence to industry standards like FSSAI and pharma guidelines, helping you scale safely and sustainably.
            </p>
          </div>

          {/* Card 4 (RESPONSIVE FIXED) */}
          <div className="rounded-2xl p-6 bg-blue-100 flex flex-col gap-6">
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Built for Every Category
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Whether it's fashion, electronics, or nutraceuticals — our approach is tailored to maximize visibility, conversions, and retention.
              </p>
              {/* <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a3a6b] hover:gap-3 transition-all">
                Explore Categories <ArrowRight size={15} />
              </button> */}
            </div>

            {/* FIX: responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {industries.slice(7).map((item, i) => (
                <ImageCard key={i} item={item} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}