import { MousePointer, Video, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Click",
    subtitle: "Customers tap the video button",
    description: "Customers can instantly start a video call right from your website."
  },
  {
    icon: Video,
    title: "Connect", 
    subtitle: "Start a 1:1 video call with your sales team",
    description: "Your sales experts connect instantly to provide personalized help and demonstrations."
  },
  {
    icon: ShoppingBag,
    title: "Convert",
    subtitle: "Demo products, answer questions, close sales",
    description: "Guide customers through products and close deals with face-to-face trust building."
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
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <step.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                {step.title}
              </h3>
              <p className="text-lg font-medium text-secondary mb-4">
                {step.subtitle}
              </p>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/30 to-transparent transform translate-x-6 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;