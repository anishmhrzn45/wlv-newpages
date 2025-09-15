import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today and start converting more customers with live video shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-navy">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business and how we can help..."
                    rows={5}
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-semibold text-brand-navy mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">info@webliveview.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">+353 1 4412618</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div className="text-foreground">
                      <div>Webliveview Ltd</div>
                      <div>13 Upper Baggot Street</div>
                      <div>2nd Floor</div>
                      <div>Dublin 4, D04 W7K5</div>
                      <div>Ireland</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20">
                  <h4 className="font-semibold text-brand-navy mb-2">Start Your Free Trial</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    No credit card required. Get started in less than 5 minutes.
                  </p>
                  <Button variant="free-trial" size="lg" className="w-full">Start Free Trial</Button>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                  <h4 className="font-semibold text-brand-navy mb-2">Book a Personal Demo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    See WebLiveView in action with a personalized demonstration.
                  </p>
                  <Button variant="book-demo" size="lg" className="w-full">Book Demo</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;