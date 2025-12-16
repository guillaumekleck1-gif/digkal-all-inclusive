import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Offres", href: "/offres" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-digkal-dark text-primary-foreground py-2 text-sm">
        <div className="container-digkal flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-digkal-accent" />
              <span>Réponse en 24h</span>
            </div>
            <a href="tel:0678015732" className="hidden sm:flex items-center gap-2 hover:text-digkal-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>06 78 01 57 32</span>
            </a>
            <a href="mailto:contact@digkal.fr" className="hidden md:flex items-center gap-2 hover:text-digkal-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@digkal.fr</span>
            </a>
          </div>
          <div className="text-digkal-accent font-medium">
            Devis gratuit • Sans engagement
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-digkal flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <span className="font-display font-bold text-2xl text-foreground">Digkal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/realisations">Voir les réalisations</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container-digkal py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/realisations" onClick={() => setMobileMenuOpen(false)}>Voir les réalisations</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Demander un devis</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
