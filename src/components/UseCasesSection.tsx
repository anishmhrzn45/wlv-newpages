import { Sofa, ChefHat, Bath } from "lucide-react";

const useCases = [
  {
    icon: Sofa,
    title: "Furniture Stores",
    description: "Help customers visualize furniture in their space with live consultations",
    benefits: ["Show fabric textures and wood finishes", "Demonstrate assembly and care", "Suggest complementary pieces"],
    stats: "Average order: $2,400"
  },
  {
    icon: ChefHat, 
    title: "Kitchen & Bath Showrooms",
    description: "Guide customers through complex renovation decisions with expert advice",
    benefits: ["Walk through design options", "Explain technical specifications", "Coordinate with contractors"],
    stats: "Average project: $15,000"
  },
  {
    icon: Bath,
    title: "eCommerce Retailers",
    description: "Reduce returns and increase customer confidence in online purchases",
    benefits: ["Product demonstrations", "Size and fit guidance", "Real-time Q&A support"],
    stats: "25% reduction in returns"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Built for Your Industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized features designed for furniture, kitchen, bathroom, and eCommerce retailers.
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
              Real ROI from Real Customers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">+45%</div>
                <div className="text-sm text-muted-foreground">Kitchen sales conversion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">$890K</div>
                <div className="text-sm text-muted-foreground">Additional revenue in 6 months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">15%</div>
                <div className="text-sm text-muted-foreground">Increase in average order value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;