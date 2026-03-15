import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, TrendingUp, Zap, ArrowRight, BrainCircuit } from "lucide-react";

const advantages = [
  {
    icon: Bot,
    title: "Présence dans les IA",
    description: "Votre entreprise citée et recommandée par ChatGPT, Gemini, Perplexity et les autres assistants IA."
  },
  {
    icon: TrendingUp,
    title: "Trafic qualifié nouvelle génération",
    description: "Les utilisateurs d'IA ont une intention d'achat forte — être recommandé, c'est convertir."
  },
  {
    icon: Sparkles,
    title: "Avantage concurrentiel",
    description: "Vos concurrents n'y sont pas encore. Prenez une longueur d'avance dès maintenant."
  },
  {
    icon: Zap,
    title: "Stratégie sur-mesure",
    description: "Nous adaptons votre contenu, votre structure et vos données pour plaire aux algorithmes IA."
  }
];

export function LLMSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-digkal-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-digkal relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <BrainCircuit className="w-4 h-4" />
            Nouveau : Référencement IA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Le référencement dans les <span className="text-primary">intelligences artificielles</span>, c'est maintenant.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Demain, vos clients ne chercheront plus sur Google — ils demanderont à une IA. 
            ChatGPT, Gemini, Perplexity… ces outils recommandent déjà des entreprises. 
            <strong className="text-foreground"> Est-ce que la vôtre en fait partie ?</strong>
          </p>
        </div>

        {/* Stats banner */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 mb-16 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">40%</p>
              <p className="text-muted-foreground text-sm">des recherches passeront par l'IA d'ici 2026</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">3x</p>
              <p className="text-muted-foreground text-sm">plus de conversions via les recommandations IA</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">-5%</p>
              <p className="text-muted-foreground text-sm">seulement des PME sont déjà positionnées</p>
            </div>
          </div>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 border border-border shadow-card card-hover flex gap-6"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Rejoignez la révolution du référencement IA avant vos concurrents.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Préparer mon référencement IA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
