import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import webLiveViewLogo from "@/assets/webliveview-logo.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-brand-light/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={webLiveViewLogo} 
                alt="WebLiveView Logo"
                className="w-[300px] h-[80px] md:w-[350px] md:h-[93px] lg:w-[400px] lg:h-[106px] object-contain"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
              Turn Browsers Into{" "}
              <span className="bg-gradient-to-r from-secondary to-brand-pink bg-clip-text text-transparent">
                Buyers
              </span>{" "}
              with Live Video Shopping
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              WebLiveView helps kitchen, bathroom, furniture, and eCommerce brands boost online sales by bringing the 
              showroom experience directly to the customer — through live video consultations and guided product demos.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <Play className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Live video shopping demonstration showing sales expert helping customer remotely"
                className="rounded-2xl shadow-large w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-navy/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;