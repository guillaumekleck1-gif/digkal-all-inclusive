import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Shield, 
  Palette, 
  Code,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design sur-mesure",
    description: "Un design unique qui reflète votre identité de marque et séduit vos visiteurs dès le premier regard."
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et ordinateur."
  },
  {
    icon: Zap,
    title: "Performance optimale",
    description: "Temps de chargement ultra-rapide pour une expérience utilisateur fluide et un meilleur référencement."
  },
  {
    icon: Shield,
    title: "Sécurité renforcée",
    description: "Certificat SSL, sauvegardes régulières et protection contre les menaces en ligne."
  },
  {
    icon: Code,
    title: "Code propre",
    description: "Un développement aux standards du web pour une maintenance facile et une évolutivité garantie."
  },
  {
    icon: Monitor,
    title: "Interface intuitive",
    description: "Une navigation claire et ergonomique pour guider vos visiteurs vers l'action."
  }
];

const benefits = [
  "Site vitrine professionnel clé en main",
  "Optimisé pour le référencement naturel",
  "Formulaire de contact intégré",
  "Intégration Google Analytics",
  "Formation à la prise en main",
  "Support technique inclus"
];

export default function CreationSiteWeb() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Création de site web
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Un site web professionnel qui <span className="text-primary">convertit vos visiteurs</span> en clients
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Nous concevons des sites vitrines modernes, rapides et optimisés pour le référencement. 
              Votre présence en ligne devient un véritable levier de croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ce que comprend votre site web
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque site est conçu avec les meilleures pratiques du web pour garantir performance et résultats.
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Tout est inclus dans notre prestation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Pas de mauvaises surprises. Nous gérons l'intégralité de votre projet, 
                de la conception à la mise en ligne.
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
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Prêt à lancer votre projet ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Discutons de vos besoins lors d'un appel de 15 minutes. C'est gratuit et sans engagement.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  Réserver un appel <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-digkal text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Lancez votre site web dès aujourd'hui
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui nous font confiance pour leur présence en ligne.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Obtenir un devis gratuit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
