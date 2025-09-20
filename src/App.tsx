import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Programme from "./pages/Programme";
import FaithNexus from "./pages/FaithNexus";
import Footer from "@/components/Footer";
import Register from "./pages/Register";
import PartnershipPage from "./pages/Partnership";
import CorporatePartnershipPage from "./pages/partnership/CorporatePartnershipPage";
import ChurchPartnershipPage from "./pages/partnership/ChurchPartnershipPage";
import TechnicalPartnershipPage from "./pages/partnership/TechnicalPartnershipPage";
import VisaPage from "./pages/hospitality/VisaPage";
import FlightsPage from "./pages/hospitality/FlightsPage";
import AccommodationPage from "./pages/hospitality/AccommodationPage";
import { Navigation } from "@/components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/faith-nexus" element={<FaithNexus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/partnership/corporate" element={<CorporatePartnershipPage />} />
          <Route path="/partnership/church" element={<ChurchPartnershipPage />} />
          <Route path="/partnership/technical" element={<TechnicalPartnershipPage />} />
          <Route path="/hospitality/visa" element={<VisaPage />} />
          <Route path="/hospitality/flights" element={<FlightsPage />} />
          <Route path="/hospitality/accommodation" element={<AccommodationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
