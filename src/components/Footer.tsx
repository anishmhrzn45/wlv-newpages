import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/webliveview-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main CTA Section */}
      <div className="border-b border-white/10">
        <div className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Your Virtual Showroom.{" "}
              <span className="bg-gradient-to-r from-secondary to-brand-pink bg-clip-text text-transparent">
                Ready in Minutes.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto">
              WebLiveView installs easily on any website — no developers needed. Start converting more visitors into buyers today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button size="xl" variant="free-trial" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation">
                Start Free Trial
              </Button>
              <Button size="xl" variant="book-demo" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-8 sm:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="WebLiveView - Video Shopping Made Easy" 
                  className="w-[180px] sm:w-[200px] h-auto object-contain"
                />
              </div>
              
              {/* Contact Information */}
              <div className="flex-1">
                <p className="text-white/70 mb-4 max-w-md text-sm sm:text-base">
                  The leading live video shopping platform for furniture, kitchen, bathroom, and eCommerce retailers.
                </p>
                
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="break-all">info@webliveview.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
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
              </div>
            </div>
            
            <div className="text-sm text-white/60">
              <p>© 2025 WebLiveView Ltd. All rights reserved.</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors touch-manipulation py-1 block">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors touch-manipulation py-1 block">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors touch-manipulation py-1 block">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors touch-manipulation py-1 block">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors touch-manipulation py-1 block">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors touch-manipulation py-1 block">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors touch-manipulation py-1 block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors touch-manipulation py-1 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;