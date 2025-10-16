import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/webliveview-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="WebLiveView - Video Shopping Made Easy" 
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/product" className="text-sm lg:text-base font-medium text-brand-gray hover:text-brand-navy transition-colors duration-200">
            Product
          </Link>
          <a href="#features" className="text-sm lg:text-base font-medium text-brand-gray hover:text-brand-navy transition-colors duration-200">
            Features
          </a>
          <Link to="/about" className="text-sm lg:text-base font-medium text-brand-gray hover:text-brand-navy transition-colors duration-200">
            About
          </Link>
          <Link to="/pricing" className="text-sm lg:text-base font-medium text-brand-gray hover:text-brand-navy transition-colors duration-200">
            Pricing
          </Link>
          <Link to="/contact" className="text-sm lg:text-base font-medium text-brand-gray hover:text-brand-navy transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-4 lg:px-6">
            <Link to="/signup">Start Free Trial</Link>
          </Button>
          <Button asChild variant="outline" className="bg-primary text-white hover:bg-primary/90 border-primary rounded-full px-4 lg:px-6">
            <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
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
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-fade-in">
          <div className="container py-5 sm:py-6 space-y-5 sm:space-y-6">
            <nav className="flex flex-col space-y-4 sm:space-y-5">
              <Link 
                to="/product" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation hover:text-brand-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <a 
                href="#features" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation hover:text-brand-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <Link 
                to="/about" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation hover:text-brand-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation hover:text-brand-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="text-base font-medium text-brand-gray py-2 touch-manipulation hover:text-brand-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-3 sm:pt-4">
              <Button asChild className="w-full h-12 touch-manipulation bg-secondary hover:bg-secondary/90 text-white rounded-full">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="w-full h-12 touch-manipulation bg-primary text-white hover:bg-primary/90 border-primary rounded-full">
                <a href="https://calendly.com/barry-mc-kenna/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;