import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Pour démarrer votre présence en ligne",
    price: "Sur devis",
    features: [
      "Site vitrine (jusqu'à 5 pages)",
      "Design responsive mobile-first",
      "Base SEO (technique + structure)",
      "Mise en place du tracking",
      "Formation utilisation",
    ],
    recommended: false,
    cta: "Choisir Starter",
  },
  {
    name: "Growth",
    description: "La formule complète pour grandir",
    price: "Sur devis",
    features: [
      "Site vitrine premium (jusqu'à 10 pages)",
      "SEO local + stratégie pages/services",
      "Google Business Profile géré",
      "Optimisation + posts mensuels",
      "1 contenu / mois inclus",
      "Reporting mensuel",
    ],
    recommended: true,
    cta: "Choisir Growth",
  },
  {
    name: "Performance",
    description: "Pour dominer votre marché local",
    price: "Sur devis",
    features: [
      "Site premium + pages SEO ville/service",
      "Stratégie SEO complète",
      "Google Business Profile + contenu",
      "Optimisation continue",
      "Reporting + recommandations",
      "Support prioritaire",
    ],
    recommended: false,
    cta: "Choisir Performance",
  },
];

export function PricingSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos offres
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez la formule adaptée à vos ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 border shadow-card ${
                plan.recommended
                  ? "border-primary scale-105 shadow-xl"
                  : "border-border"
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
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <p className="text-3xl font-display font-bold text-primary">
                  {plan.price}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.recommended ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/contact">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Help CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous ne savez pas quoi choisir ?
          </p>
          <Button variant="secondary" asChild>
            <Link to="/contact">
              On vous conseille en 15 minutes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
