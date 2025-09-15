import { Video, Users, Route, Smartphone, Calendar, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Video Chat",
    description: "Connect face-to-face with customers anywhere in the world. High-quality video calls that work seamlessly across all devices."
  },
  {
    icon: Route,
    title: "Smart Call Routing",
    description: "Automatically route incoming shopper calls to the right product expert, brand specialist, or team member — based on availability, category, or location."
  },
  {
    icon: Users,
    title: "Personal Shopping",
    description: "Provide personalized guidance and recommendations as customers browse your products, just like in-store assistance."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized", 
    description: "Perfect experience on any device. Your customers can join calls instantly from their phone, tablet, or computer."
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Integrated calendar booking system lets customers schedule calls at their convenience. Automated reminders included."
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track your conversion rates, call duration, and customer satisfaction to optimize your sales process."
  }
];

const OriginalFeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to Sell Better
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to help you connect with customers and close more deals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginalFeaturesSection;