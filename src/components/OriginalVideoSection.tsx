import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const OriginalVideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch WebLiveView in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              See how kitchen retailers are selling more online — no showrooms required.
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              dangerouslySetInnerHTML={{
                __html: '<wistia-player media-id="qnl49c0ilh" aspect="1.7777777777777777" class="w-full"></wistia-player>'
              }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="free-trial" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              55 seconds • Real customer demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginalVideoSection;