import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolCrest from "@/assets/school-crest.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Our History", path: "/about#history" },
      { label: "Vision & Mission", path: "/about#vision" },
      { label: "Leadership", path: "/about#leadership" },
    ],
  },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 123 456 7890
            </a>
            <a href="mailto:info@motherindiapatran.edu" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@motherindiapatran.edu
            </a>
          </div>
          <p className="text-primary-foreground/70">Affiliated to CBSE | School Code: 123456</p>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-lg" : "bg-background"
        }`}
      >
        <div className="container flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img src={schoolCrest} alt="Mother India Convent School Crest" className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0" />
            <div>
              <h1 className="font-display text-base sm:text-xl font-bold text-navy leading-tight">
                Mother India Convent School
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-label tracking-wider">
                EXCELLENCE IN EDUCATION
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    location.pathname === item.path
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-xl py-2 min-w-[200px] animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="crimson" size="sm" className="ml-4" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="xl:hidden fixed inset-x-0 top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] bg-background z-50 animate-fade-in overflow-y-auto">
            <div className="container py-6 sm:py-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className={`block py-2.5 sm:py-3 text-base sm:text-lg font-medium border-b border-border ${
                      location.pathname === item.path ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block py-2 pl-4 text-muted-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Button variant="crimson" className="mt-4 w-full" asChild>
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <a href="tel:+911234567890" className="flex items-center gap-2 mt-4 text-sm sm:text-base text-muted-foreground">
                <Phone className="w-4 h-4" /> +91 123 456 7890
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
