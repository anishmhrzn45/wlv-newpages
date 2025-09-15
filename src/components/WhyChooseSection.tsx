const benefits = [
  {
    title: "Skip the Showroom",
    description: "No more driving to demo furniture or kitchens — shoppers connect instantly online."
  },
  {
    title: "Sell Smarter", 
    description: "Live video calls help your sales team close more high-ticket purchases faster."
  },
  {
    title: "Increase Trust",
    description: "Face-to-face interactions turn browsers into buyers — no apps or downloads needed."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-brand-navy">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose WebLiveView?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left text-muted-foreground pt-6">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-brand-navy">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium text-brand-navy pt-6">
          Fewer abandoned carts. Faster sales. Happier shoppers.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSection;