import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container px-4 sm:px-6 py-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-foreground">
              Ready to transform your sales process? We're here to help.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;