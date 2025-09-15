import { Video, Users, Calendar, BarChart3, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Video Calls",
    description: "Connect customers with product experts through HD video calls directly on your website."
  },
  {
    icon: Users,
    title: "Guided Product Demos",
    description: "Walk customers through products virtually, highlighting features and answering questions in real-time."
  },
  {
    icon: Calendar,
    title: "CRM & Calendar Sync",
    description: "Integrate with your existing CRM and calendar systems for seamless appointment scheduling."
  },
  {
    icon: MessageSquare,
    title: "Real-Time Support",
    description: "Provide instant support during the shopping journey with live chat and video assistance."
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    description: "Track engagement metrics, conversion rates, and ROI from your video shopping sessions."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guaranteed for all your customer interactions."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Everything You Need to Sell More Online
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed specifically for furniture, kitchen, bathroom, and eCommerce retailers.
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