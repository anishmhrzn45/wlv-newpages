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
              "WebLiveView transformed our kitchen showroom business. We've seen a 35% increase in 
              conversions and our customers love being able to get expert advice from home. The 
              video quality is excellent and the integration was seamless."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                SM
              </div>
              <div>
                <div className="font-semibold text-foreground">Sarah Mitchell</div>
                <div className="text-muted-foreground">Sales Manager, Premier Kitchen Design</div>
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
                "Our furniture sales increased by 28% after implementing WebLiveView. 
                Customers can now see our craftsmanship up close."
              </p>
              <div className="text-sm">
                <div className="font-medium text-foreground">Mike Chen</div>
                <div className="text-muted-foreground">Owner, Artisan Furniture Co.</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "The return rate on our bathroom fixtures dropped by 40% since we started 
                using WebLiveView for product demonstrations."
              </p>
              <div className="text-sm">
                <div className="font-medium text-foreground">Lisa Rodriguez</div>
                <div className="text-muted-foreground">eCommerce Director, Bath Innovations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;