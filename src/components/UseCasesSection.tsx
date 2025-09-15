import { Sofa, ChefHat, Bath } from "lucide-react";

const useCases = [
  {
    icon: Sofa,
    title: "Furniture Retailers",
    description: "Show fabrics, finishes, and product details live on camera",
    benefits: ["Display fabric textures up close", "Show wood finishes and craftsmanship", "Help with room layout and sizing"],
    stats: "One sofa = €2,500 ROI"
  },
  {
    icon: ChefHat, 
    title: "Kitchen & Bathroom Retailers",
    description: "Guide customers through design options remotely",
    benefits: ["Walk through material choices", "Explain layout possibilities", "Coordinate design elements"],
    stats: "One kitchen = €12,000 ROI"
  },
  {
    icon: Bath,
    title: "Ecommerce Brands",
    description: "Bring your best sales reps online to recover abandoned carts and boost AOV",
    benefits: ["Live product demonstrations", "Recover abandoned carts", "Increase average order value"],
    stats: "One bathroom = €7,000 ROI"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Tailored for Kitchen, Bathroom & Furniture Sales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Purpose-built for high-value retail sales that need personal touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="rounded-2xl border bg-card p-8 h-full transition-all hover:shadow-medium hover:border-secondary/20">
                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                  <useCase.icon className="h-6 w-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-secondary">
                    {useCase.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Real ROI, Not Just Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">+30%</div>
                <div className="text-sm text-muted-foreground">Lift in online conversion rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Fewer abandoned carts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">Higher</div>
                <div className="text-sm text-muted-foreground">AOV through live upselling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;