import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Search, MapPin, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-digkal-light to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-digkal-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-digkal relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Site web livré en 72h
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Un site qui vous apporte des clients.{" "}
              <span className="text-primary">Nous gérons aussi votre référencement.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Digkal conçoit votre site web et pilote votre visibilité : SEO, page Google, contenus et optimisations. Vous n'avez rien à gérer.
            </p>

            {/* Benefits */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Création du site en 72h + mise en ligne</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-digkal-accent/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-digkal-accent" />
                </div>
                <span className="text-foreground font-medium">SEO local + Google Business Profile géré</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Contenu, optimisation, suivi et amélioration continue</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Obtenir un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="#comment-ca-marche">
                  Voir comment ça marche
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-digkal-accent/20 rounded-3xl blur-2xl transform scale-95" />
              <img
                src={heroMockup}
                alt="Dashboard SEO et site web Digkal"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-xl p-4 animate-fade-in stagger-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Performance</p>
                  <p className="font-bold text-foreground">+85%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4 animate-fade-in stagger-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sites livrés</p>
                  <p className="font-bold text-foreground">+50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
