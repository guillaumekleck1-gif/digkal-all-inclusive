import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Offres from "./pages/Offres";
import Realisations from "./pages/Realisations";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CreationSiteWeb from "./pages/services/CreationSiteWeb";
import SEOReferencement from "./pages/services/SEOReferencement";
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile";
import CreationContenu from "./pages/services/CreationContenu";
import OptimisationContinue from "./pages/services/OptimisationContinue";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/creation-site-web" element={<CreationSiteWeb />} />
          <Route path="/services/seo-referencement" element={<SEOReferencement />} />
          <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
          <Route path="/services/creation-contenu" element={<CreationContenu />} />
          <Route path="/services/optimisation-continue" element={<OptimisationContinue />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
