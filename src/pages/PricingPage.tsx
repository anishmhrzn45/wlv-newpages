import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <div className="container px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy">
              Choose Your Plan
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground">
              Start your free trial today. No credit card required.
            </p>
          </div>
        </div>
        <PricingSection />
        <FAQ />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;