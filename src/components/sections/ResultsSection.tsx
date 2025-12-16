import { Phone, TrendingUp, Star, Clock } from "lucide-react";

const results = [
  {
    icon: Phone,
    title: "Plus de demandes qualifiées",
    description: "Des contacts qui ont vraiment besoin de vos services.",
  },
  {
    icon: TrendingUp,
    title: "Meilleure visibilité locale",
    description: "Apparaissez en premier quand vos clients vous cherchent.",
  },
  {
    icon: Star,
    title: "Image premium et confiance",
    description: "Un site professionnel qui rassure et convertit.",
  },
  {
    icon: Clock,
    title: "Un actif digital qui travaille 24/7",
    description: "Votre site génère des contacts même quand vous dormez.",
  },
];

export function ResultsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce que ça change pour vous
          </h2>
          <p className="text-lg text-muted-foreground">
            Des résultats concrets pour votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border shadow-card card-hover text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <result.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {result.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-center">
          <p className="text-primary-foreground text-xl font-display font-semibold">
            🎯 Objectif : transformer votre site en investissement, pas en coût.
          </p>
        </div>
      </div>
    </section>
  );
}
