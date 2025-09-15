import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhoUsesSection from "@/components/WhoUsesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <BenefitsSection />
        <WhoUsesSection />
        <WhyChooseSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;