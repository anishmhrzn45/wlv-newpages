import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light/50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl mb-4">
              Loved by Leading Retailers
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers are saying about their results with WebLiveView.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft border">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "Customers love the one-to-one video service — especially for larger pieces like wardrobes and sofas where size and fabric matter. It's taken the guesswork out of online shopping. We're getting fewer returns and happier reviews."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                LK
              </div>
              <div>
                <div className="font-semibold text-foreground">Laura Keane</div>
                <div className="text-muted-foreground">Head of eCommerce, Urban Living</div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-soft border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Our showroom staff now take calls from the website during quiet times, giving 
                online customers the same service as those walking in. WebLiveView was easy to 
                train and rolled out fast. It's like adding an extra store without the overhead."
              </p>
              <div className="text-sm">
                <div className="font-medium text-foreground">Kevin Byrne</div>
                <div className="text-muted-foreground">Retail Director, Oak & Elm Furniture</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "WebLiveView helped us turn more browsers into buyers. Our team can now 
                walk customers through sofas, paint and dining sets in real-time — just like in our 
                store. Since adding video shopping, conversion rates have jumped by 22% and it's 
                become one of our highest-performing sales channels."
              </p>
              <div className="text-sm">
                <div className="font-medium text-foreground">John Murphy</div>
                <div className="text-muted-foreground">Sales Manager, Comfort Interiors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;