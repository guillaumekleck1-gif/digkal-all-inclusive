import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  FileText,
  Link2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Audit SEO complet",
    description: "Analyse approfondie de votre site pour identifier les axes d'amélioration et opportunités."
  },
  {
    icon: Target,
    title: "Stratégie mots-clés",
    description: "Recherche et sélection des mots-clés pertinents pour votre activité et votre zone géographique."
  },
  {
    icon: FileText,
    title: "Optimisation on-page",
    description: "Optimisation des balises, contenus, images et structure pour un meilleur référencement."
  },
  {
    icon: Link2,
    title: "Maillage interne",
    description: "Architecture de liens internes optimisée pour guider Google et vos visiteurs."
  },
  {
    icon: BarChart3,
    title: "Suivi des positions",
    description: "Monitoring régulier de vos positions sur les mots-clés stratégiques."
  },
  {
    icon: TrendingUp,
    title: "Reporting mensuel",
    description: "Rapports clairs sur l'évolution de votre visibilité et les actions réalisées."
  }
];

const results = [
  { value: "+85%", label: "Visibilité moyenne" },
  { value: "Top 3", label: "Positions Google" },
  { value: "+150%", label: "Trafic organique" },
  { value: "+60%", label: "Demandes qualifiées" }
];

export default function SEOReferencement() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              SEO & Référencement
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Apparaissez en <span className="text-primary">première page Google</span> pour vos clients locaux
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Une stratégie SEO sur-mesure pour augmenter votre visibilité, 
              attirer plus de visiteurs qualifiés et générer des demandes de devis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Audit SEO gratuit</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/realisations">Voir nos résultats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-primary">
        <div className="container-digkal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {result.value}
                </p>
                <p className="text-white/80">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Notre méthode SEO éprouvée
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche complète et transparente pour améliorer durablement votre référencement naturel.
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comment ça fonctionne ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse de votre site et de la concurrence" },
              { step: "02", title: "Stratégie", desc: "Définition des mots-clés et du plan d'action" },
              { step: "03", title: "Optimisation", desc: "Mise en œuvre des recommandations SEO" },
              { step: "04", title: "Suivi", desc: "Monitoring et ajustements continus" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
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
              Prêt à dominer Google ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Obtenez un audit SEO gratuit de votre site et découvrez comment améliorer votre visibilité.
            </p>
            <Button asChild variant="white" size="lg">
              <Link to="/contact">
                Demander mon audit gratuit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
