import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with live video shopping",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "3 video chat hours per month",
        "Unlimited live chat sessions", 
        "Up to 2 sales people",
        "Basic performance reporting",
        "Web & mobile access",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      description: "Give your team the tools to engage, book, and convert at scale",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "20 video chat hours per month",
        "Unlimited live chat sessions",
        "Up to 5 sales people", 
        "Advanced analytics & reporting",
        "Calendar integrations",
        "Team performance insights",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Scale",
      description: "Enterprise-grade solution for large sales teams and multiple locations",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        "Unlimited video chat hours",
        "Unlimited users & locations",
        "Advanced CRM integrations",
        "Custom onboarding & training",
        "Dedicated account manager",
        "White-label options",
        "Advanced security & compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 bg-brand-light/30">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">
            Simple, Flexible Pricing for Every Team
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground">
            Start free. No credit card required. Plans from just €49/month.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors touch-manipulation ${
                isYearly ? 'bg-secondary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-secondary shadow-large lg:scale-105' : 'border-border'} h-full flex flex-col`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2 flex-shrink-0">
                <CardTitle className="text-lg sm:text-xl text-brand-navy leading-tight">{plan.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center flex-grow">
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-brand-navy">
                    €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isYearly && (
                    <div className="text-sm text-secondary mt-1">
                      Billed annually
                    </div>
                  )}
                </div>

                <ul className="space-y-3 text-left text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-shrink-0">
                {plan.cta === "Contact Sales" ? (
                  <Button 
                    asChild
                    className={`w-full h-12 touch-manipulation ${plan.popular ? 'bg-secondary hover:bg-secondary/90 text-white' : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'} rounded-full`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                ) : (
                  <Button 
                    asChild
                    className={`w-full h-12 touch-manipulation ${plan.popular ? 'bg-secondary hover:bg-secondary/90 text-white' : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'} rounded-full`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <Link to="/signup">
                      {plan.cta}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm text-foreground px-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;