import { Home, ShoppingCart, Shield } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Skip the Showroom",
    description: "No more weekend trips — let your customers explore products face-to-face from home."
  },
  {
    icon: ShoppingCart,
    title: "Sell Smarter", 
    description: "Use video calls to answer questions, reduce returns, and close more high-value orders."
  },
  {
    icon: Shield,
    title: "Increase Trust",
    description: "Build confidence and reduce friction with live, human interaction — no app downloads needed."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white text-brand-navy">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose WebLiveView?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 text-left">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-start">
                <div className="w-14 h-14 mb-5 bg-brand-light/20 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-brand-navy">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <p className="text-lg font-medium text-brand-navy pt-6">
          Fewer abandoned carts. Faster sales. Happier customers.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;