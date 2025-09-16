import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/webliveview-logo-new.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="WebLiveView" 
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-brand-navy font-medium hover:text-brand-pink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-brand-pink text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 hover:opacity-90 transition-all duration-200"
            >
              <a href="/book-demo">Book a Demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-brand-navy" />
            ) : (
              <Menu size={24} className="text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-brand-navy font-medium py-2 px-4 hover:text-brand-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  asChild
                  className="w-full bg-brand-pink text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  <a href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;