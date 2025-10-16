import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                We're here to help. Reach out to learn more about how WebLiveView can transform your business.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;