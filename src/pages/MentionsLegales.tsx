import { Layout } from "@/components/layout/Layout";
import { Building2, Mail, Phone, Globe, Shield, Cookie, Scale } from "lucide-react";

const MentionsLegales = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mentions Légales
              </h1>
              <p className="text-lg text-muted-foreground">
                Informations légales concernant le site digkal.com
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* 1. Éditeur du site */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Éditeur du site</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Le site digkal.com est édité par :
                </p>
                <ul className="space-y-2 text-foreground">
                  <li><strong>Raison sociale :</strong> Digkal Logiciel</li>
                  <li><strong>Forme juridique :</strong> SAS</li>
                  <li><strong>Siège social :</strong> Alsace, France</li>
                  <li><strong>SIRET :</strong> 98432219800024</li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <strong>Email :</strong> contact@digkal.fr
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <strong>Téléphone :</strong> 06 78 01 57 32
                  </li>
                  <li><strong>Directeur de la publication :</strong> Digkal</li>
                </ul>
              </div>

              {/* 2. Groupe Digkal */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Groupe Digkal</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Digkal Logiciel fait partie du groupe Digkal, spécialisé dans les solutions numériques innovantes :
                </p>
                <ul className="space-y-3 text-foreground">
                  <li>
                    <strong>Groupe Digkal :</strong>{" "}
                    <a href="https://digkal.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      digkal.fr
                    </a>{" "}
                    - Site officiel du groupe
                  </li>
                  <li>
                    <strong>Digkal Logiciel :</strong>{" "}
                    <a href="https://digkal-logiciel.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      digkal-logiciel.fr
                    </a>{" "}
                    - Développement de logiciels sur mesure
                  </li>
                  <li>
                    <strong>Création de sites web :</strong>{" "}
                    <a href="https://digkal-web.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      digkal-web.fr
                    </a>{" "}
                    - Conception et développement de sites internet professionnels
                  </li>
                  <li>
                    <strong>Solutions Intelligence Artificielle :</strong>{" "}
                    <a href="https://digkal-ia.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      digkal-ia.fr
                    </a>{" "}
                    - Solutions d'IA pour entreprises
                  </li>
                </ul>
              </div>

              {/* 3. Hébergement */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. Hébergement</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Le site est hébergé par :
                </p>
                <ul className="space-y-2 text-foreground">
                  <li><strong>Hébergeur :</strong> Digkal</li>
                  <li><strong>Adresse :</strong> Alsace, France</li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <strong>Téléphone :</strong> 06 78 01 57 32
                  </li>
                </ul>
              </div>

              {/* 4. Propriété intellectuelle */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. Propriété intellectuelle</h2>
                </div>
                <p className="text-muted-foreground">
                  L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) sont la propriété exclusive de Digkal Logiciel ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
              </div>

              {/* 5. Limitation de responsabilité */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Limitation de responsabilité</h2>
                </div>
                <p className="text-muted-foreground">
                  Digkal Logiciel s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
              </div>

              {/* 6. Cookies */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Cookies</h2>
                </div>
                <p className="text-muted-foreground">
                  Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Pour plus d'informations, consultez notre politique de confidentialité.
                </p>
              </div>

              {/* 7. Droit applicable */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">7. Droit applicable</h2>
                </div>
                <p className="text-muted-foreground">
                  Tout litige en relation avec l'utilisation du site est soumis au droit français. Les tribunaux français sont seuls compétents.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
