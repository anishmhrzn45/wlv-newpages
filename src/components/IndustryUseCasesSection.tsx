import kitchenDemo from "@/assets/kitchen-demo.png";
import furnitureDemo from "@/assets/furniture-demo.png";
import electronicsDemo from "@/assets/electronics-demo.png";

const industryUseCases = [
  {
    image: kitchenDemo,
    title: "Kitchen Retailers",
    description: "Give design advice online — guide kitchen buyers through choices via one-to-one live video."
  },
  {
    image: furnitureDemo,
    title: "Furniture Retailers", 
    description: "Help customers feel comfort and quality from anywhere — answer questions in real time with live video."
  },
  {
    image: electronicsDemo,
    title: "Electrical & Appliances",
    description: "Show the picture-quality, answer sizing questions, and convert on the spot with live demos."
  }
];

const IndustryUseCasesSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Industry Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading retailers across industries use WebLiveView to deliver personalized shopping experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryUseCases.map((useCase, index) => (
            <div key={index} className="bg-card rounded-lg shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300">
              <div className="aspect-video w-full">
                <img 
                  src={useCase.image} 
                  alt={`${useCase.title} live video demo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCasesSection;