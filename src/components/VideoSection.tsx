import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light/50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy/5 to-secondary/5 shadow-large">
            <div className="aspect-video bg-gradient-to-br from-brand-navy/10 to-secondary/10 flex items-center justify-center">
              {/* Video Thumbnail/Placeholder */}
              <div className="relative group cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-medium transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-brand-navy ml-1" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-navy/20 to-transparent">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">
                    See WebLiveView in Action
                  </h3>
                  <p className="text-sm opacity-90 drop-shadow">
                    Watch how retailers boost conversions with live video shopping
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-lg text-muted-foreground">
              Watch how retailers use WebLiveView to convert online shoppers.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <span className="text-sm text-muted-foreground">
                2 min overview • No sound required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;