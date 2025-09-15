import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const OriginalVideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-background/50 to-background/30 flex items-center justify-center">
              {/* Video Thumbnail/Placeholder */}
              <div className="relative group cursor-pointer">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 shadow-lg transition-transform group-hover:scale-110 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/20 to-transparent">
                <div className="text-center text-foreground">
                  <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">
                    See WebLiveView in Action
                  </h3>
                  <p className="text-sm opacity-90 drop-shadow">
                    Watch how businesses increase sales with live video chat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-lg text-muted-foreground">
              Watch how businesses are using WebLiveView to increase sales and improve customer experience
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <span className="text-sm text-muted-foreground">
                3 min overview • No sound required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginalVideoSection;