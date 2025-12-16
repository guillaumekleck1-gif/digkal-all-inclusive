import { MessageSquare, PenTool, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Diagnostic express (15 min)",
    description: "On échange sur votre projet, vos objectifs et vos besoins. Gratuit et sans engagement.",
    result: "Vous savez exactement ce dont vous avez besoin.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Maquette + validation",
    description: "On conçoit votre site et vous validez chaque étape avant d'aller plus loin.",
    result: "Un site qui vous ressemble vraiment.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Mise en ligne + SEO",
    description: "Votre site est en ligne, optimisé pour les moteurs de recherche dès le premier jour.",
    result: "Vous êtes visible immédiatement.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Suivi mensuel + amélioration",
    description: "On surveille vos performances et on optimise en continu pour de meilleurs résultats.",
    result: "Votre visibilité s'améliore chaque mois.",
  },
];

export function ProcessSection() {
  return (
    <section id="comment-ca-marche" className="section-padding bg-muted/30">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Un processus simple et transparent en 4 étapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-3xl p-8 border border-border shadow-card h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted/50">{step.number}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary">
                    → {step.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
