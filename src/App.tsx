import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesIndex from "./pages/ServicesIndex.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import AnalyticsAudit from "./pages/AnalyticsAudit.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Resource from "./pages/Resource.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/analytics-audit" element={<AnalyticsAudit />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resource kind="index" />} />
          <Route path="/resources/blog" element={<Resource kind="blog" />} />
          <Route path="/resources/guides" element={<Resource kind="guides" />} />
          <Route path="/resources/checklists" element={<Resource kind="checklists" />} />
          <Route path="/privacy-policy" element={<Resource kind="privacy" />} />
          <Route path="/terms" element={<Resource kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
