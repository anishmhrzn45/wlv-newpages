import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy text-center mb-6">
              About WebLiveView
            </h1>
          </div>
        </section>

        {/* From Showroom to Screen */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              From Showroom to Screen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground mb-4">
                Online shopping is fast — but often impersonal.
                Shoppers click, scroll, and leave because no one is there to guide them.
              </p>
              <p className="text-lg text-foreground mb-4">
                Our founder, Barry McKenna, saw this firsthand while working with retailers in Dublin. Again and again, one frustration came up:
                <span className="block italic mt-2">"We can't bring the showroom experience to the screen."</span>
              </p>
              <p className="text-lg text-foreground">
                So Barry built WebLiveView — a platform that blends years of retail and software experience to solve that problem once and for all.
              </p>
            </div>
          </div>
        </section>

        {/* Bringing Back the Human Touch */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Bringing Back the Human Touch
            </h2>
            <p className="text-lg text-foreground mb-6">
              Our mission is simple: make online shopping feel as personal as walking into a store.
            </p>
            <p className="text-lg text-foreground mb-4">
              With WebLiveView, your sales team can:
            </p>
            <ul className="space-y-3 text-lg text-foreground ml-6">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Meet customers face-to-face</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Show products live, not just in photos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Answer questions instantly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Help buyers choose with confidence</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What Drives Us */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              What Drives Us
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">People First</h3>
                <p className="text-lg text-foreground">Real conversations build real trust.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Confidence Matters</h3>
                <p className="text-lg text-foreground">Seeing live beats guessing every time.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Innovation with Purpose</h3>
                <p className="text-lg text-foreground">Tools should make selling easier, not harder.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Growing Together</h3>
                <p className="text-lg text-foreground">When you win, we win.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Retailers Choose WebLiveView */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Why Retailers Choose WebLiveView
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Built by Retailers, for Retailers</h3>
                <p className="text-lg text-foreground">We've been on the shop floor. We know the pressure.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Backed by Experience</h3>
                <p className="text-lg text-foreground">7 years of development, trusted by eCommerce brands.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Solving Real Problems</h3>
                <p className="text-lg text-foreground">From abandoned carts to hesitant buyers, we fix the gaps in online selling.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Proven Across Sectors</h3>
                <p className="text-lg text-foreground">Used in furniture, electrical, pharmacy, and motor retail.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              What's Next
            </h2>
            <p className="text-lg text-foreground mb-4">
              We're just getting started.
            </p>
            <p className="text-lg text-foreground mb-4">
              Our roadmap includes smarter tools, deeper analytics, and new ways for sales teams to connect — so every online interaction feels human again.
            </p>
            <p className="text-lg text-foreground mb-4">
              Because shopping shouldn't feel like guesswork.
              <span className="block mt-2 font-semibold">It should feel personal.</span>
            </p>
            <p className="text-lg text-foreground italic mt-6">
              — The WebLiveView Team
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
          <div className="container px-4 sm:px-6 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Virtual Showroom. Ready in Minutes.
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Start converting more visitors into buyers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="free-trial"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="book-demo"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <a href="https://calendly.com/info-7ip2/webliveview-demo" target="_blank" rel="noopener noreferrer">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
