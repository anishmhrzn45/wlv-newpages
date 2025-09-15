import { Video, Users, Calendar, BarChart3, MessageSquare, Smartphone } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "One-to-One Live Video Shopping Calls",
    description: "Embed video calls directly in your site - no third-party apps or downloads needed."
  },
  {
    icon: BarChart3,
    title: "Virtual Product Demo Software for Retailers",
    description: "Show products live on camera with interactive demonstrations and personalized recommendations."
  },
  {
    icon: Users,
    title: "Guided Selling with Booked Consultations",
    description: "Schedule and manage personalized product consultations that convert browsers into buyers."
  },
  {
    icon: MessageSquare,
    title: "Real-Time Product Support with Web Chat",
    description: "Answer questions instantly to reduce abandoned carts and build customer trust."
  },
  {
    icon: BarChart3,
    title: "Retail Sales Enablement Platform & Reporting",
    description: "Track calls, conversions, and ROI. See which products sell best during live sessions."
  },
  {
    icon: Smartphone,
    title: "Seamless Multi-Device Access",
    description: "Works perfectly on all devices with no downloads. iOS, Android, and desktop compatible."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Features Built for High-Converting Sales
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Everything your sales team needs to turn browsers into buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-medium hover:border-secondary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent-blue/10 text-brand-accent-blue group-hover:bg-brand-accent-blue/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-brand-navy">
                {feature.title}
              </h3>
              <p className="text-foreground">
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