import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  RefreshCw, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Reporting mensuel",
    description: "Rapport détaillé sur vos performances : trafic, positions, conversions, recommandations."
  },
  {
    icon: RefreshCw,
    title: "Mises à jour régulières",
    description: "Actualisation de vos contenus, corrections techniques et optimisations continues."
  },
  {
    icon: TrendingUp,
    title: "Amélioration SEO",
    description: "Optimisations basées sur les données réelles de votre site et l'évolution de Google."
  },
  {
    icon: Shield,
    title: "Maintenance technique",
    description: "Mises à jour de sécurité, sauvegardes, surveillance et corrections de bugs."
  },
  {
    icon: Zap,
    title: "Optimisation vitesse",
    description: "Amélioration continue des performances pour un site toujours plus rapide."
  },
  {
    icon: MessageSquare,
    title: "Support prioritaire",
    description: "Réponse rapide à vos demandes et assistance dédiée pour vos questions."
  }
];

const benefits = [
  "Site toujours à jour et sécurisé",
  "Positions Google maintenues et améliorées",
  "Corrections rapides en cas de problème",
  "Recommandations d'amélioration régulières",
  "Interlocuteur dédié disponible",
  "Tranquillité d'esprit totale"
];

export default function OptimisationContinue() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Optimisation continue
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Votre site <span className="text-primary">s'améliore chaque mois</span> sans effort de votre part
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Maintenance, mises à jour, optimisations SEO et suivi des performances. 
              Nous gérons tout pour que votre site reste performant et visible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Découvrir l'offre</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/offres">Voir les packs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Pourquoi l'optimisation continue ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Un site web n'est jamais "terminé". Google évolue, vos concurrents aussi. 
                Sans maintenance et optimisation régulières, votre site perd en efficacité.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Notre service d'optimisation continue vous garantit un site toujours performant, 
                sécurisé et bien positionné sur Google.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Ce que vous évitez
              </h3>
              <ul className="space-y-4">
                {[
                  "Site piraté par manque de mises à jour",
                  "Perte de positions Google",
                  "Site lent qui fait fuir les visiteurs",
                  "Bugs non corrigés",
                  "Contenus obsolètes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-destructive rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ce qui est inclus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet pour un site toujours au top de sa forme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Cycle Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Le cycle mensuel
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { week: "Semaine 1", title: "Analyse", desc: "Analyse des performances du mois précédent" },
              { week: "Semaine 2", title: "Optimisation", desc: "Mise en œuvre des améliorations identifiées" },
              { week: "Semaine 3", title: "Contenu", desc: "Mise à jour ou création de nouveaux contenus" },
              { week: "Semaine 4", title: "Rapport", desc: "Envoi du rapport mensuel et recommandations" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold">{item.week.split(" ")[1]}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{item.week}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Confiez-nous la gestion de votre site
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Concentrez-vous sur votre métier, nous nous occupons de votre visibilité en ligne.
            </p>
            <Button asChild variant="white" size="lg">
              <Link to="/contact">
                Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
