import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Your Virtual Showroom. <span className="text-secondary">Ready in Minutes.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Start converting more visitors into buyers today with live video shopping that works.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center pt-2">
                <Button asChild variant="free-trial" size="lg" className="h-12">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button asChild variant="book-demo" size="lg" className="h-12">
                  <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                    Book Demo
                  </a>
                </Button>
              </div>
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