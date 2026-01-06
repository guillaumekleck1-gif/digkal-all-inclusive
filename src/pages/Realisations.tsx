import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TrendingUp, ArrowRight, ExternalLink } from "lucide-react";

const categories = ["Tous", "Artisans", "Restaurants", "PME", "Immobilier"];

const projects = [
  {
    id: 1,
    name: "Im Buerehoft",
    category: "Restaurants",
    image: "https://static.wixstatic.com/media/32e815_5129c76e828f42d7865a2071875de869~mv2.jpg/v1/fill/w_1920,h_756,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32e815_5129c76e828f42d7865a2071875de869~mv2.jpg",
    result: "+25% réservations",
    description: "Site vitrine + système de réservation en ligne + carte cadeau",
    context: "Restaurant alsacien traditionnel proposant tartes flambées, spécialités locales et événements.",
    objective: "Digitaliser les réservations et augmenter la visibilité du restaurant en Alsace.",
    work: "Création du site avec menu digital, système de réservation intégré, carte cadeau en ligne et optimisation Google Business Profile.",
    url: "https://www.buerehoft.fr",
  },
  {
    id: 2,
    name: "D'Sign Toiture",
    category: "Artisans",
    image: "https://static.wixstatic.com/media/32e815_a8ff28c8e2f049b9a8793749ac1c9cb3~mv2.png/v1/fill/w_1920,h_807,al_c,q_90,enc_avif,quality_auto/32e815_a8ff28c8e2f049b9a8793749ac1c9cb3~mv2.png",
    result: "+30% demandes devis",
    description: "Site vitrine artisan couvreur + SEO local Bas-Rhin",
    context: "Entreprise artisanale spécialisée en couverture, zinguerie et isolation dans le Bas-Rhin.",
    objective: "Développer la visibilité locale et générer des demandes de devis qualifiées.",
    work: "Création d'un site vitrine professionnel, présentation des services (couverture, isolation, zinguerie), optimisation SEO locale et Google Business Profile.",
    url: "https://www.dsigntoiture.fr",
  },
  {
    id: 3,
    name: "Dynamix Ingénierie",
    category: "PME",
    image: "https://static.wixstatic.com/media/32e815_7c1f3d8c9e2c4e8a9f3b5d7e1c4a2b8f~mv2.png/v1/fill/w_1920,h_900,al_c,q_90,enc_avif,quality_auto/dynamix-hero.png",
    result: "+40% demandes",
    description: "Site vitrine bureau d'études structure + SEO B2B",
    context: "Bureau d'études spécialisé en conception et dimensionnement de structures béton, métal et bois.",
    objective: "Développer la visibilité auprès des architectes, maîtres d'œuvre et entreprises du BTP.",
    work: "Création d'un site vitrine professionnel présentant les expertises (conception, diagnostic, assistance technique), optimisation SEO B2B et formulaire de demande d'étude.",
    url: "https://dynamix-ingenierie.fr",
  },
  {
    id: 4,
    name: "Menuiserie Dupont",
    category: "Artisans",
    image: "/placeholder.svg",
    result: "+120% trafic",
    description: "Site vitrine complet avec SEO local optimisé",
    context: "Menuiserie traditionnelle cherchant à développer sa clientèle locale.",
    objective: "Augmenter la visibilité en ligne et générer des demandes de devis qualifiées.",
    work: "Création d'un site vitrine moderne, optimisation SEO locale, Google Business Profile.",
  },
  {
    id: 5,
    name: "Immo Paris 15",
    category: "Immobilier",
    image: "/placeholder.svg",
    result: "+200% leads",
    description: "Site premium + pages SEO quartiers",
    context: "Agence immobilière locale cherchant à dominer son secteur.",
    objective: "Générer des leads qualifiés sur les recherches immobilières locales.",
    work: "Site premium, pages SEO par quartier, intégration CRM.",
  },
  {
    id: 6,
    name: "Plombier Express",
    category: "Artisans",
    image: "/placeholder.svg",
    result: "+150% appels",
    description: "Site urgence + SEO local + Google Ads",
    context: "Plombier souhaitant capter les urgences dans sa zone.",
    objective: "Apparaître en premier pour les recherches urgentes.",
    work: "Site optimisé vitesse, SEO urgence, landing pages par service.",
  },
  {
    id: 7,
    name: "Tech Solutions",
    category: "PME",
    image: "/placeholder.svg",
    result: "+95% visibilité",
    description: "Site corporate + blog SEO + inbound",
    context: "ESN souhaitant développer sa notoriété et générer des leads B2B.",
    objective: "Positionner l'entreprise comme expert et générer des contacts qualifiés.",
    work: "Site corporate, blog avec stratégie de contenu, landing pages.",
  },
  {
    id: 8,
    name: "Bistrot du Coin",
    category: "Restaurants",
    image: "/placeholder.svg",
    result: "+75% clients",
    description: "Site + click & collect + fidélisation",
    context: "Bistrot de quartier cherchant à fidéliser sa clientèle.",
    objective: "Développer la commande en ligne et la fidélisation.",
    work: "Site avec click & collect, programme fidélité, newsletter.",
  },
];

type Project = {
  id: number;
  name: string;
  category: string;
  image: string;
  result: string;
  description: string;
  context: string;
  objective: string;
  work: string;
  url?: string;
};

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-digkal-light to-background section-padding">
        <div className="container-digkal text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nos réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à développer leur visibilité en ligne.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-foreground">{project.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-4 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Voir le projet <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="aspect-video bg-muted">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-medium text-green-600 bg-green-500/10 px-3 py-1 rounded-full">
                  {selectedProject.result}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{selectedProject.name}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contexte</h3>
                  <p className="text-muted-foreground">{selectedProject.context}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Objectif</h3>
                  <p className="text-muted-foreground">{selectedProject.objective}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Travail réalisé</h3>
                  <p className="text-muted-foreground">{selectedProject.work}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                {selectedProject.url && (
                  <Button variant="hero" asChild>
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                <Button variant={selectedProject.url ? "outline" : "hero"} asChild>
                  <Link to="/contact">
                    Créer mon site
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-digkal-dark text-primary-foreground">
        <div className="container-digkal text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Votre projet pourrait être le prochain
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discutons de vos objectifs et créons ensemble votre succès en ligne.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Démarrer mon projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Realisations;
