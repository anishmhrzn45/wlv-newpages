import { Video, Users, Calendar, BarChart3, MessageSquare, Smartphone } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Video from Your Website",
    description: "Embed video calls directly in your site - no third-party apps or downloads needed."
  },
  {
    icon: Users,
    title: "Guided Product Demos",
    description: "Show products live on camera with interactive demonstrations and personalized recommendations."
  },
  {
    icon: Calendar,
    title: "CRM + Calendar Sync",
    description: "Seamlessly integrate with your existing systems for streamlined sales operations."
  },
  {
    icon: MessageSquare,
    title: "Real-Time Support",
    description: "Answer questions instantly to reduce abandoned carts and build customer trust."
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    description: "Track calls, conversions, and ROI. See which products sell best during live sessions."
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop Ready",
    description: "Works perfectly on all devices with no downloads. iOS, Android, and desktop compatible."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Key Features for High-Touch Selling
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything your sales team needs to sell from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-medium hover:border-secondary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
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

export default FeaturesSection;