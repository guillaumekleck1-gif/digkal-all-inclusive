import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Search, MapPin, ArrowRight, Zap, Shield } from "lucide-react";
import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

export function HeroSection() {
  useEffect(() => {
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Spline 3D Full Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/ij33TZxleDK1xQaV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="container-digkal relative z-20 py-24 md:py-32 lg:py-40 flex items-center" style={{ minHeight: '100vh' }}>
        <div className="max-w-2xl space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm border border-primary/20 text-primary px-5 py-3 rounded-full text-base font-semibold">
            <Zap className="w-5 h-5" />
            Votre site web dès 45€/mois
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
            Création de site web professionnel.{" "}
            <span className="text-primary">Un site qui vous apporte des clients.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Digkal conçoit votre site internet et pilote votre visibilité : SEO, Google Business Profile, contenus et optimisations. Vous n'avez rien à gérer.
          </p>

          {/* Benefits */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">Création du site en 72h + mise en ligne</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Search className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">SEO local + Google Business Profile géré</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 backdrop-blur-sm border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">Contenu, optimisation, suivi et amélioration continue</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
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

          {/* Floating stats */}
          <div className="flex gap-4 pt-4">
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl px-5 py-3 animate-fade-in stagger-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Performance</p>
                  <p className="font-bold text-foreground text-sm">+85%</p>
                </div>
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl px-5 py-3 animate-fade-in stagger-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sites livrés</p>
                  <p className="font-bold text-foreground text-sm">+50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

