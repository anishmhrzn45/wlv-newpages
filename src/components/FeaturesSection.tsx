import featuresImage from "@/assets/webliveview-features.png";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Everything your sales team needs — in one app
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            From first login to live customer calls, WebLiveView keeps your team connected and in control.
          </p>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={featuresImage} 
            alt="WebLiveView product features section showing 3 iPhone screens for Login, Live Call, and Dashboard, each with descriptive text"
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;