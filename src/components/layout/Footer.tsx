import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoDigkal from "@/assets/logo-digkal-web.jpg";

export function Footer() {
  return (
    <footer className="bg-digkal-dark text-primary-foreground">
      <div className="container-digkal py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logoDigkal} alt="Digkal Web - Création de sites web et SEO" className="h-14 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Création de sites web et référencement SEO. Nous gérons tout pour vous apporter des clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-digkal-accent transition-colors">Accueil</Link></li>
              <li><Link to="/offres" className="text-primary-foreground/70 hover:text-digkal-accent transition-colors">Nos offres</Link></li>
              <li><Link to="/realisations" className="text-primary-foreground/70 hover:text-digkal-accent transition-colors">Réalisations</Link></li>
              <li><Link to="/a-propos" className="text-primary-foreground/70 hover:text-digkal-accent transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-digkal-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-primary-foreground/70">Création de site web</span></li>
              <li><span className="text-primary-foreground/70">SEO & Référencement</span></li>
              <li><span className="text-primary-foreground/70">Google Business Profile</span></li>
              <li><span className="text-primary-foreground/70">Création de contenu</span></li>
              <li><span className="text-primary-foreground/70">Optimisation continue</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0678015732" className="flex items-center gap-3 text-primary-foreground/70 hover:text-digkal-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  06 78 01 57 32
                </a>
              </li>
              <li>
                <a href="mailto:contact@digkal.fr" className="flex items-center gap-3 text-primary-foreground/70 hover:text-digkal-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  contact@digkal.fr
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5" />
                  France
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Digkal. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="text-primary-foreground/50 hover:text-digkal-accent text-sm transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="text-primary-foreground/50 hover:text-digkal-accent text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
