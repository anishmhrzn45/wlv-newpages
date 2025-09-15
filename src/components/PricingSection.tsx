import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Sales Super Stars",
      description: "Built for Super Sale Stars - Perfect for small teams with big ambition",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "3 video chat hours",
        "Unlimited live chat sessions", 
        "Unlimited users",
        "1–2 sales people",
        "2 hours video per month",
        "Unlimited webchat",
        "Basic performance reporting",
        "Web & iOS access",
        "Your logo, your brand"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      description: "For growing sales teams",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "Unlimited video calls",
        "Advanced CRM integration", 
        "Priority support",
        "HD video quality",
        "Advanced analytics",
        "Custom branding",
        "Screen sharing",
        "Recording capabilities"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Scale",
      description: "Full analytics and integrations",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security features",
        "Multi-location support",
        "API access",
        "Training & onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-brand-light/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
            Simple, Flexible Pricing for Every Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. No credit card required. Plans from just €49/month.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-secondary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-secondary shadow-large scale-105' : 'border-border'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl text-brand-navy">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-navy">
                    €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isYearly && (
                    <div className="text-sm text-secondary mt-1">
                      Billed annually
                    </div>
                  )}
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;