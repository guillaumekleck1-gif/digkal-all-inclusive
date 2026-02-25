import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Search, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création du site web",
    description: "Design professionnel, pages optimisées, mobile-first, vitesse, sécurité et tracking intégré.",
    color: "primary",
    link: "https://www.digkal-site-web.fr",
    external: true,
  },
  {
    icon: Search,
    title: "SEO & visibilité",
    description: "Optimisation SEO, stratégie mots-clés, structure du site, maillage interne et performance.",
    color: "accent",
    link: "/services/seo-referencement",
  },
  {
    icon: MapPin,
    title: "Page Google & contenu",
    description: "Optimisation Google Business Profile, publications, photos, FAQ, gestion des avis et contenus.",
    color: "primary",
    link: "/services/google-business-profile",
  },
];

export function FormulaSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une formule simple : site + référencement,{" "}
            <span className="text-primary">sans prise de tête.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce dont vous avez besoin pour être visible en ligne, dans un seul package.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const CardWrapper = service.external
              ? ({ children, className }: { children: React.ReactNode; className: string }) => (
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
                )
              : ({ children, className }: { children: React.ReactNode; className: string }) => (
                  <Link to={service.link} className={className}>{children}</Link>
                );
            return (
              <CardWrapper
                key={index}
                className="group bg-card rounded-3xl p-8 border border-border shadow-card card-hover block"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "accent" 
                    ? "bg-digkal-accent/10" 
                    : "bg-primary/10"
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === "accent" 
                      ? "text-digkal-accent" 
                      : "text-primary"
                  }`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Je veux la formule Digkal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
