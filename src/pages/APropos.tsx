import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Efficacité",
    description: "Des résultats concrets et mesurables, pas de promesses en l'air.",
  },
  {
    icon: Lightbulb,
    title: "Clarté",
    description: "On vous explique tout simplement, sans jargon technique inutile.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    description: "Chaque action est orientée vers l'amélioration de vos résultats.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un interlocuteur dédié, disponible et à l'écoute de vos besoins.",
  },
];

const process = [
  "Analyse approfondie de votre marché et vos concurrents",
  "Conception de votre identité digitale unique",
  "Développement technique optimisé et performant",
  "Optimisation SEO et visibilité locale",
  "Suivi et amélioration continue",
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-digkal-light to-background section-padding">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                On s'occupe de <span className="text-primary">tout</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Digkal est une agence web spécialisée dans la création de sites et le référencement SEO. 
                Notre mission : vous rendre visible en ligne sans que vous ayez à vous en soucier.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Parler à un expert
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-digkal-accent/10 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-foreground font-bold text-5xl">D</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">Équipe Digkal</p>
                  <p className="text-muted-foreground">Experts web & SEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Notre mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transformer votre présence en ligne en un véritable atout commercial. 
              Nous créons des sites web qui convertissent et mettons en place des stratégies SEO 
              qui vous apportent des clients qualifiés, mois après mois.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-digkal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 border border-border shadow-card text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre approche
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Une méthodologie éprouvée pour des résultats garantis. 
                Chaque projet est unique, mais notre rigueur reste constante.
              </p>
              <ul className="space-y-4">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">Notre engagement</h3>
              <p className="text-xl leading-relaxed opacity-90 mb-6">
                "Votre succès est notre priorité. Nous ne sommes satisfaits que lorsque 
                vous obtenez les résultats que vous méritez."
              </p>
              <p className="font-semibold">— L'équipe Digkal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Nous trouver
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border shadow-card" style={{ height: "450px" }}>
            <iframe
              src="https://storage.googleapis.com/maps-solutions-4fws7l1aug/locator-plus/yo4w/locator-plus.html"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Localisation Digkal"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-digkal-dark text-primary-foreground">
        <div className="container-digkal text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Prêt à travailler ensemble ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et voyons comment nous pouvons vous aider.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Parler à un expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
