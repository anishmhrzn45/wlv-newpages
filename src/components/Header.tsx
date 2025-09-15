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
          <Button variant="free-trial" size="lg">
            Start Free Trial
          </Button>
          <Button variant="book-demo" size="lg">
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
              <a 
                href="#product" 
                className="text-base font-medium text-foreground/80 py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </a>
              <a 
                href="#features" 
                className="text-base font-medium text-foreground/80 py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-base font-medium text-foreground/80 py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium text-foreground/80 py-2 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="free-trial" size="xl" className="w-full h-12 touch-manipulation">
                Start Free Trial
              </Button>
              <Button variant="book-demo" size="xl" className="w-full h-12 touch-manipulation">
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