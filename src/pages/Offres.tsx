import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star, Phone, MessageSquare } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Pour démarrer votre présence en ligne",
    price: "Sur devis",
    features: [
      { text: "Site vitrine jusqu'à 5 pages", included: true },
      { text: "Design responsive mobile-first", included: true },
      { text: "Base SEO technique + structure", included: true },
      { text: "Mise en place du tracking", included: true },
      { text: "Formation utilisation", included: true },
      { text: "Google Business Profile", included: false },
      { text: "Contenu mensuel", included: false },
      { text: "Suivi SEO mensuel", included: false },
    ],
    recommended: false,
  },
  {
    name: "Growth",
    description: "La formule complète pour grandir",
    price: "Sur devis",
    features: [
      { text: "Site vitrine jusqu'à 10 pages", included: true },
      { text: "Design premium responsive", included: true },
      { text: "SEO local + stratégie complète", included: true },
      { text: "Google Business Profile optimisé", included: true },
      { text: "1 contenu / mois inclus", included: true },
      { text: "Posts Google mensuels", included: true },
      { text: "Reporting mensuel", included: true },
      { text: "Support prioritaire", included: false },
    ],
    recommended: true,
  },
  {
    name: "Performance",
    description: "Pour dominer votre marché local",
    price: "Sur devis",
    features: [
      { text: "Site premium illimité", included: true },
      { text: "Pages SEO ville/service", included: true },
      { text: "Stratégie SEO complète", included: true },
      { text: "Google Business Profile + contenu", included: true },
      { text: "Contenus illimités", included: true },
      { text: "Optimisation continue", included: true },
      { text: "Reporting + recommandations", included: true },
      { text: "Support prioritaire", included: true },
    ],
    recommended: false,
  },
];

const Offres = () => {
  return (
    <Layout>
      {/* Banner */}
      <div className="bg-primary text-primary-foreground py-3 text-center">
        <p className="text-lg font-semibold">
          🎉 Votre site web à partir de <span className="text-2xl font-bold">45€/mois</span>
        </p>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-digkal-light to-background section-padding">
        <div className="container-digkal text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nos offres
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des formules adaptées à chaque besoin. Choisissez celle qui correspond à vos ambitions.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 border shadow-card ${
                  plan.recommended ? "border-primary scale-105 shadow-xl" : "border-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Recommandé
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <p className="text-3xl font-display font-bold text-primary">{plan.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        feature.included ? "bg-primary/10" : "bg-muted"
                      }`}>
                        <Check className={`w-3 h-3 ${feature.included ? "text-primary" : "text-muted-foreground/50"}`} />
                      </div>
                      <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.recommended ? "hero" : "outline"} className="w-full" asChild>
                  <Link to="/contact">
                    Choisir {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-muted/30">
        <div className="container-digkal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Comparatif détaillé
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border shadow-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-display text-foreground">Fonctionnalités</th>
                  <th className="p-6 text-center font-display text-foreground">Starter</th>
                  <th className="p-6 text-center font-display text-primary bg-primary/5">Growth</th>
                  <th className="p-6 text-center font-display text-foreground">Performance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nombre de pages", "5", "10", "Illimité"],
                  ["Design responsive", "✓", "✓", "✓"],
                  ["SEO technique", "Base", "Avancé", "Premium"],
                  ["Google Business Profile", "—", "✓", "✓"],
                  ["Contenu mensuel", "—", "1/mois", "Illimité"],
                  ["Reporting", "—", "Mensuel", "Hebdo"],
                  ["Support", "Email", "Prioritaire", "Dédié"],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-6 text-foreground font-medium">{row[0]}</td>
                    <td className="p-6 text-center text-muted-foreground">{row[1]}</td>
                    <td className="p-6 text-center text-foreground bg-primary/5 font-medium">{row[2]}</td>
                    <td className="p-6 text-center text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-digkal-dark text-primary-foreground">
        <div className="container-digkal text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet en 15 minutes pour trouver la formule idéale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                <MessageSquare className="w-5 h-5" />
                Demander un devis
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-digkal-dark" asChild>
              <a href="tel:0678015732">
                <Phone className="w-5 h-5" />
                Être rappelé
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Offres;
