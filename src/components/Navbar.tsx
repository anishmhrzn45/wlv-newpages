import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/webliveview-logo-new.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navigationLinks = [
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    <nav 
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-200"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="WebLiveView" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-brand-navy font-medium hover:text-brand-pink transition-colors duration-200 flex items-center text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            {user ? (
              <div className="flex items-center gap-3 lg:gap-4">
                <span className="text-xs lg:text-sm text-brand-navy truncate max-w-[120px] lg:max-w-[200px]">
                  {user.email}
                </span>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLogout}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="rounded-full border-2 border-[#b4b7f0] text-[#b4b7f0] hover:bg-[#b4b7f0] hover:text-white transition-all duration-200"
                >
                  Login
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white"
                >
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
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
            className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in"
          >
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-brand-navy font-medium py-2.5 px-4 hover:text-brand-pink hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4 space-y-3">
                {user ? (
                  <>
                    <div className="py-2 text-sm text-brand-navy border-t truncate">
                      {user.email}
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2 touch-manipulation"
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-full border-2 border-[#b4b7f0] text-[#b4b7f0] hover:bg-[#b4b7f0] hover:text-white touch-manipulation"
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </Button>
                    <Button 
                      asChild
                      size="lg"
                      className="w-full rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white touch-manipulation"
                    >
                      <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        Start Free Trial
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;