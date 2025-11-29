import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Covenant = lazy(() => import("./pages/Covenant"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Programme = lazy(() => import("./pages/Programme"));
const FaithNexus = lazy(() => import("./pages/FaithNexus"));
const Register = lazy(() => import("./pages/Register"));
const PartnershipPage = lazy(() => import("./pages/Partnership"));
const FAQPage = lazy(() => import("./pages/FAQPage")); // Re-enabled
const CorporatePartnershipPage = lazy(() => import("./pages/partnership/CorporatePartnershipPage"));
const ChurchPartnershipPage = lazy(() => import("./pages/partnership/ChurchPartnershipPage"));
const TechnicalPartnershipPage = lazy(() => import("./pages/partnership/TechnicalPartnershipPage"));
const VisaPage = lazy(() => import("./pages/hospitality/VisaPage"));
const FlightsPage = lazy(() => import("./pages/hospitality/FlightsPage"));
const AccommodationPage = lazy(() => import("./pages/hospitality/AccommodationPage"));

// Loading component for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/covenant" element={<Covenant />} />
            <Route path="/faith-nexus" element={<FaithNexus />} />
            <Route path="/register" element={<Register />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/partnership/corporate" element={<CorporatePartnershipPage />} />
            <Route path="/partnership/church" element={<ChurchPartnershipPage />} />
            <Route path="/partnership/technical" element={<TechnicalPartnershipPage />} />
            <Route path="/hospitality/visa" element={<VisaPage />} />
            <Route path="/hospitality/flights" element={<FlightsPage />} />
            <Route path="/hospitality/accommodation" element={<AccommodationPage />} />
            <Route path="/faqs" element={<FAQPage />} /> {/* Re-enabled */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
