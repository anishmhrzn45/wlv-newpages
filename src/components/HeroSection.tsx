import { Play } from "lucide-react";
import productScreens from "@/assets/webliveview-product-screens.png";
import webLiveViewLogo from "@/assets/webliveview-logo.png";

const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <img 
                src={webLiveViewLogo} 
                alt="WebLiveView Logo"
                className="w-[300px] h-[80px] sm:w-[400px] sm:h-[107px] md:w-[500px] md:h-[133px] lg:w-[600px] lg:h-[160px] object-contain mx-auto lg:mx-0"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
              Your Sales Team, On-Demand
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-foreground max-w-2xl mx-auto lg:mx-0">
              Bring the in-store experience online with live video shopping, guided selling, and real-time product support — all inside one simple app.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <button className="btn-primary w-full sm:w-auto min-w-[200px] touch-manipulation">
                Book a Live Demo
              </button>
              <a href="https://www.youtube.com/watch?v=EiaEVoGldGg" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto min-w-[200px] touch-manipulation inline-flex items-center justify-center">
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </a>
            </div>
          </div>

          {/* Product Screens */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none flex justify-center">
              <img 
                src={productScreens} 
                alt="WebLiveView product showing 3 iPhone screens for Login, Live Call, and Dashboard features"
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;