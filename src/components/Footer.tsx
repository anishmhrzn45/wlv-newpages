import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/webliveview-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main CTA Section */}
      <div className="border-b border-white/10">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
              Your Virtual Showroom.{" "}
              <span className="bg-gradient-to-r from-secondary to-brand-pink bg-clip-text text-transparent">
                Ready in Minutes.
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              WebLiveView installs easily on any website — no developers needed. Start converting more visitors into buyers today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-brand-navy">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="WebLiveView - Video Shopping Made Easy" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              The leading live video shopping platform for furniture, kitchen, bathroom, and eCommerce retailers.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-6 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@webliveview.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+353 1 4412618</span>
              </div>
              <div className="flex items-start space-x-2 mt-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <div>Webliveview Ltd</div>
                  <div>13 Upper Baggot Street</div>
                  <div>2nd Floor</div>
                  <div>Dublin 4, D04 W7K5</div>
                  <div>Ireland</div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-white/60">
              <p>© 2024 WebLiveView Ltd. All rights reserved.</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;