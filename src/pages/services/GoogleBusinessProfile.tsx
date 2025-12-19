import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Star, 
  Image, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Création & optimisation",
    description: "Création ou reprise de votre fiche Google Business Profile avec toutes les informations optimisées."
  },
  {
    icon: Image,
    title: "Photos professionnelles",
    description: "Ajout et optimisation de photos de qualité pour mettre en valeur votre activité."
  },
  {
    icon: MessageSquare,
    title: "Gestion des avis",
    description: "Stratégie de collecte d'avis et réponses professionnelles à tous les commentaires."
  },
  {
    icon: Calendar,
    title: "Publications régulières",
    description: "Posts Google réguliers pour maintenir votre fiche active et visible."
  },
  {
    icon: Star,
    title: "FAQ optimisées",
    description: "Questions-réponses stratégiques pour anticiper les demandes de vos clients."
  },
  {
    icon: TrendingUp,
    title: "Suivi des performances",
    description: "Analyse des statistiques : vues, clics, appels, itinéraires demandés."
  }
];

const benefits = [
  "Apparaître dans le pack local Google (les 3 premiers résultats)",
  "Augmenter les appels et demandes de contact",
  "Renforcer la confiance avec les avis clients",
  "Être visible sur Google Maps",
  "Attirer des clients de votre zone géographique",
  "Améliorer votre image de marque locale"
];

export default function GoogleBusinessProfile() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Google Business Profile
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Dominez la recherche locale avec votre <span className="text-primary">fiche Google</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Optimisez votre présence sur Google Maps et le pack local pour attirer 
              les clients de votre zone géographique directement vers vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Optimiser ma fiche Google</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/realisations">Voir nos résultats</Link>
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
                Pourquoi Google Business Profile est essentiel ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                46% des recherches Google ont une intention locale. Votre fiche Google Business 
                est souvent le premier contact avec vos futurs clients.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <p className="text-6xl font-display font-bold text-primary mb-4">46%</p>
                <p className="text-xl text-foreground font-semibold mb-2">des recherches Google</p>
                <p className="text-muted-foreground">ont une intention locale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Notre service Google Business Profile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gestion complète de votre fiche pour maximiser votre visibilité locale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              Boostez votre visibilité locale
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Laissez-nous optimiser votre fiche Google et attirez plus de clients locaux.
            </p>
            <Button asChild variant="white" size="lg">
              <Link to="/contact">
                Demander un audit gratuit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
