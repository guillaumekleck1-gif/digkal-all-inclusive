import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import dynamixImage from "@/assets/portfolio/dynamix-ingenierie.png";
import msCreationImage from "@/assets/portfolio/ms-creation.png";
import naturalPaysageImage from "@/assets/portfolio/natural-paysage.png";
import sopremaImage from "@/assets/portfolio/soprema.png";

const categories = ["Tous", "Artisans", "Restaurants", "PME", "Grands Comptes"];

const projects = [
  {
    id: 1,
    name: "Im Buerehoft",
    category: "Restaurants",
    image: "https://static.wixstatic.com/media/32e815_5129c76e828f42d7865a2071875de869~mv2.jpg/v1/fill/w_1920,h_756,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32e815_5129c76e828f42d7865a2071875de869~mv2.jpg",
    result: "+25% réservations",
    description: "Site vitrine + réservation en ligne + carte cadeau",
  },
  {
    id: 2,
    name: "D'Sign Toiture",
    category: "Artisans",
    image: "https://static.wixstatic.com/media/32e815_a8ff28c8e2f049b9a8793749ac1c9cb3~mv2.png/v1/fill/w_1920,h_807,al_c,q_90,enc_avif,quality_auto/32e815_a8ff28c8e2f049b9a8793749ac1c9cb3~mv2.png",
    result: "+30% demandes devis",
    description: "Site vitrine artisan couvreur + SEO local",
  },
  {
    id: 3,
    name: "Dynamix Ingénierie",
    category: "PME",
    image: dynamixImage,
    result: "+10% demandes",
    description: "Site vitrine bureau d'études structure + SEO B2B",
  },
  {
    id: 4,
    name: "MS Création",
    category: "Artisans",
    image: msCreationImage,
    result: "+35% demandes",
    description: "Site vitrine artisan plombier + rénovation",
  },
  {
    id: 5,
    name: "Natural Paysage",
    category: "PME",
    image: naturalPaysageImage,
    result: "+45% demandes",
    description: "Site vitrine paysagiste + SEO local",
  },
  {
    id: 6,
    name: "Soprema",
    category: "Grands Comptes",
    image: sopremaImage,
    result: "Animation livrée",
    description: "Animation motion design corporate",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-background">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Réalisations
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez quelques-uns de nos projets récents.
          </p>
        </div>

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
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card card-hover"
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/realisations">
              Voir tout le portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
