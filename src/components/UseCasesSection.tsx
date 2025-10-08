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
    results: "+15–25% higher conversion rates · +25% higher order values · Fewer returns",
    ctaLabel: "Book a Demo for Furniture Retailers",
    ctaLink: "https://calendly.com/barry-mc-kenna/new-meeting"
  },
  {
    title: "Kitchen & Bathroom Brands",
    icon: Home,
    buyerPersona: ["Kitchen Designer", "Showroom Director", "Brand Manager"],
    goalsChallenges: "Complex purchases need trust and visual confirmation before a customer commits.",
    howTheyUse: "Live design consultations, product tours, and interactive Q&A from the showroom.",
    results: "+40% faster buying decisions · +30% more consultations booked · Higher premium order close rates",
    ctaLabel: "Book a Demo for Kitchen & Bathroom Brands",
    ctaLink: "https://calendly.com/barry-mc-kenna/new-meeting"
  },
  {
    title: "Ecommerce Teams",
    icon: ShoppingBag,
    buyerPersona: ["eCommerce Manager", "Digital Sales Lead", "Head of CX"],
    goalsChallenges: "Reduce cart abandonment and increase conversions with real human guidance.",
    howTheyUse: "Instant video chat from product pages, guided recommendations, and live upselling.",
    results: "+10–30% conversion uplift · 2–3× longer session times · 25% fewer support tickets",
    ctaLabel: "Book a Demo for Ecommerce Teams",
    ctaLink: "https://calendly.com/barry-mc-kenna/new-meeting"
  },
  {
    title: "Sales Teams & B2B Lead Generation",
    icon: Briefcase,
    buyerPersona: ["Sales Director", "Account Executive", "Marketing Manager"],
    goalsChallenges: "Qualify leads faster and host visual demos without endless scheduling.",
    howTheyUse: "Add 'Talk to Sales' video widgets, deliver product walkthroughs, and track call metrics.",
    results: "50% shorter sales cycles · +35% more lead-to-meeting conversions · Improved close rates",
    ctaLabel: "Book a Demo for Sales Teams",
    ctaLink: "https://calendly.com/barry-mc-kenna/new-meeting"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl mb-4">
            See How Retailers Use WebLiveView to Sell Smarter
          </h2>
          <p className="text-lg text-muted-foreground">
            From furniture showrooms to ecommerce teams, retailers use WebLiveView to turn browsers into buyers through real-time video calls, guided selling, and interactive product demos.
          </p>
        </div>

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
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {useCase.title}
                    </h3>
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
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Goals & Challenges</h4>
                    <p className="text-sm text-muted-foreground">{useCase.goalsChallenges}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">How They Use WebLiveView</h4>
                    <p className="text-sm text-muted-foreground">{useCase.howTheyUse}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Results</h4>
                    <p className="text-sm font-semibold text-secondary">{useCase.results}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button asChild className="w-full">
                  <a href={useCase.ctaLink} target="_blank" rel="noopener noreferrer">
                    {useCase.ctaLabel}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              Ready to See It in Action?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Empower your teams to sell smarter — not harder. WebLiveView transforms your website into a live retail experience where human connection meets digital convenience.
            </p>
            <Button asChild size="lg">
              <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;