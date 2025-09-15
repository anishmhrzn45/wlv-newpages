import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-secondary via-brand-pink to-secondary">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Online Sales?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let potential customers click away — turn conversations into conversions today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-white text-brand-navy hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold min-w-[200px]"
            >
              Book Your Free Demo Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-brand-navy rounded-full px-8 py-4 text-lg font-semibold min-w-[200px]"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            No setup fees • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;