import { CheckCircle } from "lucide-react";

const benefits = [
  "No more showroom-only sales",
  "No back-and-forth emails", 
  "No apps or downloads",
  "Just instant, face-to-face video support — right on your website",
  "More trust, faster decisions, and higher conversion rates"
];

const WhyWebLiveView = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-light/50 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl mb-6">
              Why Retailers Choose WebLiveView
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Customers want personal help — without showroom visits or long waits.
            </p>
            
            <div className="space-y-3 pl-0">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white shadow-soft">
              <div className="text-3xl font-bold text-brand-navy mb-2">+30%</div>
              <div className="text-sm text-muted-foreground">Average Conversion Increase</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-soft">
              <div className="text-3xl font-bold text-brand-navy mb-2">20%</div>
              <div className="text-sm text-muted-foreground">Fewer Abandoned Carts</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-soft">
              <div className="text-3xl font-bold text-brand-navy mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-soft">
              <div className="text-3xl font-bold text-brand-navy mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Faster Purchase Decisions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebLiveView;