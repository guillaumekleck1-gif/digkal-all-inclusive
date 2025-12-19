import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  PenTool, 
  Image, 
  Video, 
  Share2,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const contentTypes = [
  {
    icon: FileText,
    title: "Pages de services",
    description: "Contenus optimisés SEO pour présenter vos services et convertir vos visiteurs."
  },
  {
    icon: PenTool,
    title: "Articles de blog",
    description: "Articles stratégiques pour positionner votre site sur des mots-clés recherchés."
  },
  {
    icon: Image,
    title: "Visuels optimisés",
    description: "Images et infographies qui renforcent votre message et améliorent l'engagement."
  },
  {
    icon: Share2,
    title: "Posts réseaux sociaux",
    description: "Publications pour Google Business Profile et vos réseaux sociaux."
  },
  {
    icon: Video,
    title: "Descriptions produits",
    description: "Textes persuasifs pour vos fiches produits ou services."
  },
  {
    icon: Target,
    title: "Landing pages",
    description: "Pages d'atterrissage optimisées pour vos campagnes et votre SEO local."
  }
];

const process = [
  { 
    step: "01", 
    title: "Stratégie éditoriale", 
    desc: "Définition des thématiques et mots-clés à cibler" 
  },
  { 
    step: "02", 
    title: "Rédaction", 
    desc: "Création de contenus originaux et optimisés SEO" 
  },
  { 
    step: "03", 
    title: "Validation", 
    desc: "Relecture et validation avec vous avant publication" 
  },
  { 
    step: "04", 
    title: "Publication", 
    desc: "Mise en ligne et suivi des performances" 
  }
];

export default function CreationContenu() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-digkal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Création de contenu
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Des contenus qui <span className="text-primary">attirent et convertissent</span> vos clients
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Contenus optimisés pour le référencement et pensés pour convertir. 
              Nous créons les textes qui positionnent votre site et convainquent vos visiteurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Pourquoi le contenu est roi ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Google privilégie les sites qui offrent du contenu de qualité, pertinent et régulièrement mis à jour. 
                Un bon contenu vous permet de :
              </p>
              <ul className="space-y-4">
                {[
                  "Améliorer votre positionnement sur Google",
                  "Attirer des visiteurs qualifiés",
                  "Démontrer votre expertise",
                  "Convertir vos visiteurs en clients",
                  "Renforcer votre image de marque"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              <blockquote className="text-xl text-foreground italic mb-6">
                "Le contenu est la raison pour laquelle les gens visitent votre site. 
                C'est ce qui les convainc de devenir clients."
              </blockquote>
              <p className="text-primary font-semibold">— L'équipe Digkal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container-digkal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Les contenus que nous créons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tous nos contenus sont optimisés pour le référencement et rédigés pour convertir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
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
              Notre processus de création
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
              Besoin de contenus pour votre site ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discutons de votre stratégie de contenu et de vos objectifs.
            </p>
            <Button asChild variant="white" size="lg">
              <Link to="/contact">
                Parlons de votre projet <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
