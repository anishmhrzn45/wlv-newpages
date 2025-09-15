import { CheckCircle } from "lucide-react";

const benefits = [
  "Bridge the gap between online browsing and in-store experience",
  "Reduce abandoned carts by addressing concerns in real-time",
  "Build trust through face-to-face product demonstrations", 
  "Increase average order value with personalized recommendations",
  "Convert more browsers into buyers with expert guidance",
  "Provide exceptional customer service that builds loyalty"
];

const WhyWebLiveView = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-light/50 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl mb-6">
              Why Choose WebLiveView?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Online shopping for furniture, kitchens, and bathrooms is challenging. Customers need to see, 
              touch, and understand products before making significant purchases. WebLiveView brings the 
              showroom experience directly to their screen.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
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