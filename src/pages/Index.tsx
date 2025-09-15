import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import UseCasesSection from "@/components/UseCasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <HowItWorks />
        <UseCasesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
