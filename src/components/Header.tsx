import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/webliveview-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="WebLiveView - Video Shopping Made Easy" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">
            Product
          </Link>
          <a href="#features" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">
            Features
          </a>
          <Link to="/pricing" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-6">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-6 space-y-6">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/product" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <a 
                href="#features" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <Link 
                to="/pricing" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-4">
              <Button className="w-full h-12 touch-manipulation bg-secondary hover:bg-secondary/90 text-white rounded-full">
                Start Free Trial
              </Button>
              <Button variant="outline" className="w-full h-12 touch-manipulation border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;