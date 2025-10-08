import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const useCases = [
  {
    title: "Furniture Retailers",
    icon: ShoppingBag,
    buyerPersona: ["Showroom Manager", "Store Owner", "Sales Consultant"],
    goalsChallenges: "Customers need to see textures and finishes before buying—static photos aren't enough.",
    howTheyUse: "One-to-one live shopping calls, fabric walkthroughs, co-browsing and real-time Q&A.",
    results: "+35–60% higher conversion rates · +25% higher order values · Fewer returns",
    ctaLabel: "Book a Demo for Furniture Retailers",
    ctaLink: "/book-demo?vertical=furniture"
  },
  {
    title: "Kitchen & Bathroom Brands",
    icon: Home,
    buyerPersona: ["Kitchen Designer", "Showroom Director", "Brand Manager"],
    goalsChallenges: "Complex purchases need trust and visual confirmation before a customer commits.",
    howTheyUse: "Live design consultations, product tours, and interactive Q&A from the showroom.",
    results: "+40% faster buying decisions · +30% more consultations booked · Higher premium order close rates",
    ctaLabel: "Book a Demo for Kitchen & Bathroom Brands",
    ctaLink: "/book-demo?vertical=kitchen-bath"
  },
  {
    title: "Ecommerce Teams",
    icon: ShoppingBag,
    buyerPersona: ["eCommerce Manager", "Digital Sales Lead", "Head of CX"],
    goalsChallenges: "Reduce cart abandonment and increase conversions with real human guidance.",
    howTheyUse: "Instant video chat from product pages, guided recommendations, and live upselling.",
    results: "+20–40% conversion uplift · 2–3× longer session times · 25% fewer support tickets",
    ctaLabel: "Book a Demo for Ecommerce Teams",
    ctaLink: "/book-demo?vertical=ecommerce"
  },
  {
    title: "Sales Teams & B2B Lead Generation",
    icon: Briefcase,
    buyerPersona: ["Sales Director", "Account Executive", "Marketing Manager"],
    goalsChallenges: "Qualify leads faster and host visual demos without endless scheduling.",
    howTheyUse: "Add 'Talk to Sales' video widgets, deliver product walkthroughs, and track call metrics.",
    results: "50% shorter sales cycles · +35% more lead-to-meeting conversions · Improved close rates",
    ctaLabel: "Book a Demo for Sales Teams",
    ctaLink: "/book-demo?vertical=sales"
  }
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-light/30 to-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-brand-navy md:text-5xl lg:text-6xl mb-6">
                See How Retailers Use WebLiveView to Sell Smarter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                From furniture showrooms to ecommerce teams, retailers use WebLiveView to turn browsers into buyers through real-time video calls, guided selling, and interactive product demos.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {useCases.map((useCase, index) => (
                <div key={index} className="group">
                  <div className="rounded-2xl border bg-card p-8 h-full transition-all hover:shadow-medium hover:border-secondary/20 flex flex-col">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                        <useCase.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-card-foreground mb-2">
                          {useCase.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {useCase.buyerPersona.map((persona, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                              {persona}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-6 flex-grow">
                      <div>
                        <h3 className="text-sm font-semibold text-card-foreground mb-2">Goals & Challenges</h3>
                        <p className="text-sm text-muted-foreground">{useCase.goalsChallenges}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-card-foreground mb-2">How They Use WebLiveView</h3>
                        <p className="text-sm text-muted-foreground">{useCase.howTheyUse}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-card-foreground mb-2">Results</h3>
                        <p className="text-sm font-semibold text-secondary">{useCase.results}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full">
                      <Link to={useCase.ctaLink}>
                        {useCase.ctaLabel}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                  Ready to See It in Action?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Empower your teams to sell smarter — not harder. WebLiveView transforms your website into a live retail experience where human connection meets digital convenience.
                </p>
                <Button asChild size="lg">
                  <Link to="/book-demo">
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
