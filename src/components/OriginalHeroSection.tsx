import { Button } from "@/components/ui/button";
import { Play, CreditCard, Calendar, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import webLiveViewLogo from "@/assets/webliveview-logo.png";

const OriginalHeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/50 to-background">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <img 
                src={webLiveViewLogo} 
                alt="WebLiveView Logo"
                className="w-[250px] h-[67px] sm:w-[300px] sm:h-[80px] md:w-[350px] md:h-[93px] lg:w-[400px] lg:h-[106px] object-contain mx-auto lg:mx-0"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Transform Your Website Into a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Live Showroom
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Connect with customers through live video, share your screen, and close deals in real-time. Perfect for high-value sales that need a personal touch.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Button size="xl" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation">
                Start Free Trial
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation">
                <Play className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-start justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <div className="absolute inset-0 w-full h-0.5 bg-muted-foreground rotate-45 top-1/2 -translate-y-1/2"></div>
                </div>
                <span className="text-sm sm:text-base font-medium text-muted-foreground">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm sm:text-base font-medium text-muted-foreground">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm sm:text-base font-medium text-muted-foreground">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Live video shopping demonstration showing sales expert helping customer remotely"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-background/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginalHeroSection;