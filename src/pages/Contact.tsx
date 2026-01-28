import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const objectives = [
  "Créer un nouveau site",
  "Refondre mon site existant",
  "Améliorer mon SEO",
  "Optimiser ma page Google",
  "Autre",
];

const CALENDAR_BOOKING_URL = "https://calendar.app.google/pZ7zrYiisDhupTgw7";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    objective: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenCalendar = () => {
    const url = CALENDAR_BOOKING_URL;

    // 1) Try opening a new tab (best UX on the published site)
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (opened) return;

    // 2) Fallback for preview environments that block popups: navigate the top window
    try {
      window.top?.location.assign(url);
    } catch {
      window.location.assign(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-to-n8n', {
        body: {
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          website: formData.website,
          objective: formData.objective,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les 24h.",
      });
      
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        website: "",
        objective: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-digkal-light to-background section-padding">
        <div className="container-digkal text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et nous vous recontacterons sous 24h.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-digkal">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                  Demander un devis gratuit
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nom de votre entreprise"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 XX XX XX XX"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <Label htmlFor="website">Site actuel (optionnel)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://www.monsite.fr"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2 mt-6">
                  <Label>Votre objectif *</Label>
                  <div className="flex flex-wrap gap-3">
                    {objectives.map((objective) => (
                      <button
                        key={objective}
                        type="button"
                        onClick={() => setFormData({ ...formData, objective })}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.objective === objective
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {objective}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement votre projet..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="hero" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    <Send className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" type="button" asChild>
                    <a href="tel:0678015732">
                      <Phone className="w-5 h-5" />
                      Être rappelé
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  * Champs obligatoires • Sans engagement • Devis gratuit
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Response time */}
              <div className="bg-primary/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-lg">Réponse en 24h</p>
                    <p className="text-muted-foreground text-sm">Garanti</p>
                  </div>
                </div>
                <p className="text-foreground">
                  Nous nous engageons à vous recontacter dans les 24 heures suivant votre demande.
                </p>
              </div>

              {/* Contact info */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
                <h3 className="font-display font-bold text-foreground text-lg mb-6">Contact direct</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:0678015732" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      06 78 01 57 32
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@digkal.fr" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      contact@digkal.fr
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 text-foreground">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      France
                    </div>
                  </li>
                </ul>
              </div>

              {/* Calendar */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">Réserver un créneau</h3>
                <p className="text-muted-foreground mb-6">
                  Préférez planifier un appel ? Choisissez un créneau qui vous convient.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={handleOpenCalendar}
                >
                  <Calendar className="w-5 h-5" />
                  Voir les disponibilités
                </Button>
              </div>

              {/* Trust badges */}
              <div className="space-y-3">
                {["Devis gratuit sous 24h", "Sans engagement", "Accompagnement personnalisé"].map((badge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
