import { Sofa, ChefHat, ShoppingCart } from "lucide-react";

const users = [
  {
    icon: Sofa,
    title: "Furniture Retailers",
    description: "Demo sofas, show materials, and answer questions live from your showroom team."
  },
  {
    icon: ChefHat,
    title: "Kitchen & Bathroom Brands", 
    description: "Help customers design their dream spaces without stepping foot in store."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Sales Teams",
    description: "Recover carts, assist in real time, and boost revenue with guided selling tools."
  }
];

const WhoUsesSection = () => {
  return (
    <section className="py-16 px-6 bg-brand-light/30 text-brand-navy">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Who Uses WebLiveView?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 pt-10 text-left">
          {users.map((user, index) => {
            const IconComponent = user.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft flex flex-col items-start">
                <div className="w-14 h-14 mb-5 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-brand-navy">{user.title}</h3>
                <p className="text-muted-foreground text-sm">{user.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoUsesSection;