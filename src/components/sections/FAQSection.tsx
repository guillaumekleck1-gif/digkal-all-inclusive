import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment créer un site web professionnel ?",
    answer: "Pour créer un site web professionnel, il faut une stratégie claire, un design adapté à votre métier et une optimisation SEO. Chez Digkal, nous prenons tout en charge : de la conception à la mise en ligne en 72h. Vous n'avez qu'à nous fournir vos contenus, nous gérons le reste.",
  },
  {
    question: "Combien coûte la création de site web ?",
    answer: "Nos formules de création de site web démarrent à 45€/mois, tout compris : hébergement, maintenance, SSL et support. Pas de frais cachés. Vous payez un abonnement mensuel sans engagement long terme. Un site professionnel accessible à tous les budgets.",
  },
  {
    question: "Quels sont les meilleurs outils pour créer un site internet ?",
    answer: "Il existe de nombreux outils (WordPress, Wix, etc.) mais le plus important est d'avoir un site optimisé SEO et performant. Nous utilisons les technologies les plus adaptées à votre projet et gérons tout pour vous, sans que vous ayez besoin de connaissances techniques.",
  },
  {
    question: "Comment choisir une agence de création de site web ?",
    answer: "Choisissez une agence qui comprend vos objectifs, propose un accompagnement SEO et reste disponible après la livraison. Digkal vous accompagne de A à Z : création, référencement, Google Business Profile et optimisation continue.",
  },
  {
    question: "Combien de temps pour mettre en ligne mon site ?",
    answer: "Chez Digkal, votre site web est livré en 72 heures. Nous travaillons rapidement sans sacrifier la qualité. Une création de site web rapide et professionnelle pour vous permettre d'être visible rapidement.",
  },
  {
    question: "Est-ce que vous gérez la page Google Business Profile ?",
    answer: "Oui, avec nos formules Growth et Performance, nous optimisons votre fiche Google Business Profile : photos, informations, posts réguliers, gestion des avis et FAQ. C'est essentiel pour votre visibilité locale à Paris, Toulouse, Bordeaux et partout en France.",
  },
  {
    question: "Comment fonctionne le référencement SEO ?",
    answer: "Le SEO (référencement naturel) consiste à optimiser votre site pour qu'il apparaisse en haut des résultats Google. Nous travaillons sur la technique, le contenu et la popularité de votre site de manière continue pour attirer plus de clients.",
  },
  {
    question: "Y a-t-il un engagement sur la durée ?",
    answer: "Pour la création de site web, pas d'engagement après livraison. Pour l'accompagnement SEO mensuel, nous recommandons 6 mois minimum pour des résultats significatifs, mais nous restons flexibles selon vos besoins.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-digkal max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions fréquentes sur la création de site web
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir sur la création de site web professionnel et le référencement SEO.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
