import { MousePointer, Video, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Tap",
    description: "Customers tap the video button right on your website."
  },
  {
    icon: Video,
    title: "Talk",
    description: "They connect instantly with your sales expert for personal advice."
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description: "Customers browse, ask questions, and buy with confidence."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            It's like FaceTime — but built for selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Large Step Number */}
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-bold text-brand-navy">
                  {index + 1}
                </span>
              </div>
              
              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <step.icon className="h-8 w-8" />
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-foreground font-medium leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;