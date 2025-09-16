import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container px-4 sm:px-6 py-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy">
              Choose Your Plan
            </h1>
            <p className="mt-4 text-lg text-foreground">
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