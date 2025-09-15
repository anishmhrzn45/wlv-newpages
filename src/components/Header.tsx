import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/webliveview-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="WebLiveView - Video Shopping Made Easy" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="secondary" size="sm">
            Start Free Trial
          </Button>
          <Button size="sm">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a href="#product" className="text-sm font-medium text-foreground/80">
                Product
              </a>
              <a href="#features" className="text-sm font-medium text-foreground/80">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground/80">
                Pricing
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground/80">
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="secondary" size="sm">
                Start Free Trial
              </Button>
              <Button size="sm">
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