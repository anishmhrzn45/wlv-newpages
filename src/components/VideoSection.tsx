import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light/50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              See WebLiveView in Action
            </h2>
            <p className="text-lg text-foreground">
              Watch how retailers boost conversions with live video shopping
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-large">
            <div className="aspect-video w-full">
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<wistia-player media-id="ob1oqmqgye" aspect="1.7777777777777777" class="w-full h-full" style="display: block; width: 100%; height: 100%;"></wistia-player>'
                }}
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="free-trial" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                Book a Demo
              </Button>
            </div>
            <p className="text-sm text-foreground mt-4">
              1 minute • Product overview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;