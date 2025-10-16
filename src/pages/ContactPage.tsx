import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

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
                Your Virtual Showroom. <span className="text-secondary">Ready in Minutes.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10">
                Start converting more visitors into buyers today with live video shopping that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12 sm:h-14 w-full sm:w-auto">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 h-12 sm:h-14 w-full sm:w-auto">
                  <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="bg-background border-b py-6 sm:py-8">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <p className="text-center text-muted-foreground mb-6">
                The leading live video shopping platform for furniture, kitchen, bathroom, and eCommerce retailers.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">info@webliveview.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">+353 1 4412618</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">13 Upper Baggot Street, 2nd Floor, Dublin 4, D04 W7K5, Ireland</span>
                </div>
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