import { CheckCircle, ShoppingCart, Sofa, BarChart3, Handshake, Video } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "See It. Ask It. Buy It.",
    description: "Turn Browsers Into Buyers",
    detail: "Capture conversions when customers are in buying mode."
  },
  {
    icon: CheckCircle,
    title: "Right Choice, First Time.",
    description: "Cut Returns & Refunds",
    detail: "Help shoppers choose right the first time."
  },
  {
    icon: Sofa,
    title: "Big Purchases Made Simple.",
    description: "Sell Big-Ticket Items With Confidence",
    detail: "Furniture & kitchens showcased via live demos."
  },
  {
    icon: BarChart3,
    title: "Smarter Teams, Bigger Sales.",
    description: "Supercharge Your Sales Team",
    detail: "Equip staff with guided selling & reporting tools."
  },
  {
    icon: Handshake,
    title: "Trust That Brings Them Back.",
    description: "Build Loyalty That Lasts",
    detail: "Human connections that create repeat customers."
  }
];

const stats = [
  { number: "3x", label: "Higher conversion rates" },
  { number: "70%", label: "Of shoppers more confident after live demo" },
  { number: "30%", label: "More deals closed by sales teams" }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Why Choose WebLiveView
          </h2>
          <p className="mt-4 text-lg text-foreground max-w-3xl mx-auto">
            WebLiveView bridges the gap between online convenience and in-store expertise, 
            delivering higher sales, happier customers, and measurable growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-medium text-brand-accent-blue group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {benefit.title}
              </h3>
              <h4 className="text-base font-semibold text-secondary mb-2">
                {benefit.description}
              </h4>
              <p className="text-sm text-foreground">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-large">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              Proven Results
            </h3>
            <p className="text-foreground">
              See the impact WebLiveView makes for retailers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;