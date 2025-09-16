import Header from "@/components/Header";
import OriginalHeroSection from "@/components/OriginalHeroSection";
import OriginalVideoSection from "@/components/OriginalVideoSection";
import OriginalFeaturesSection from "@/components/OriginalFeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IndustryUseCasesSection from "@/components/IndustryUseCasesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <OriginalHeroSection />
        <OriginalVideoSection />
        <OriginalFeaturesSection />
        <HowItWorks />
        <IndustryUseCasesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
