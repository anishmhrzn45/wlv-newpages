import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-foreground">
      {/* Main CTA Section */}
      <div className="border-b border-border">
        <div className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-brand-navy">
              Your Virtual Showroom.{" "}
              <span className="text-secondary">
                Ready in Minutes.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Start converting more visitors into buyers today with live video shopping that works.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation bg-secondary hover:bg-secondary/90 text-white rounded-full">
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild size="xl" variant="book-demo" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 touch-manipulation rounded-full">
                <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-8 sm:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="sm:col-span-2">
            <div className="mb-6">
              <p className="text-muted-foreground mb-4 max-w-md text-sm sm:text-base">
                The leading live video shopping platform for furniture, kitchen, bathroom, and eCommerce retailers.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
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
                
                {/* Social Media Icons */}
                <div className="flex items-center space-x-4 mt-4 sm:justify-start justify-center sm:ml-6">
                  <a 
                    href="https://www.linkedin.com/company/9435525/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-navy hover:text-brand-pink transition-colors duration-200"
                    aria-label="Follow WebLiveView on LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/webliveview" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-navy hover:text-brand-pink transition-colors duration-200"
                    aria-label="Follow WebLiveView on Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
                
                {/* App Store Badges */}
                <div className="mt-6 flex flex-wrap gap-4 items-center sm:justify-start justify-center sm:ml-6">
                  <a 
                    href="https://play.google.com/store/apps/details?id=your.app.id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      className="h-10 hover:opacity-90 transition-opacity duration-200"
                      loading="lazy"
                    />
                  </a>
                  <a 
                    href="https://apps.apple.com/app/id000000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                  >
                    <img 
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                      alt="Download on the App Store" 
                      className="h-10 hover:opacity-90 transition-opacity duration-200"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>© 2025 WebLiveView Ltd. All rights reserved.</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-brand-navy">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">Pricing</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base text-brand-navy">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">About</a></li>
              <li><a href="#contact" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-brand-navy transition-colors touch-manipulation py-1 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;