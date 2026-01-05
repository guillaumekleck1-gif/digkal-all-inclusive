import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoDigkal from "@/assets/logo-digkal-web.jpg";

const navLinks = [
  { label: "Accueil", href: "/" },
  { 
    label: "Services", 
    href: "#",
    submenu: [
      { label: "Création de site web", href: "/services/creation-site-web" },
      { label: "SEO & Référencement", href: "/services/seo-referencement" },
      { label: "Google Business Profile", href: "/services/google-business-profile" },
      { label: "Création de contenu", href: "/services/creation-contenu" },
      { label: "Optimisation continue", href: "/services/optimisation-continue" },
    ]
  },
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
          <Link to="/" className="flex items-center">
            <img src={logoDigkal} alt="Digkal Web - Création de sites web et SEO" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          to={sublink.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                            location.pathname === sublink.href
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
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
                link.submenu ? (
                  <div key={link.label} className="space-y-2">
                    <span className="text-base font-medium text-foreground py-2">{link.label}</span>
                    <div className="pl-4 space-y-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          to={sublink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-sm py-1 transition-colors ${
                            location.pathname === sublink.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )
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
