import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import BookACall from "./pages/BookACall.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import SocialMediaMarketing from "./pages/Services/SocialMediaMarketing.tsx";
import ECommerceManagement from "./pages/Services/ECommerceManagement.tsx";
import ProductModelling from "./pages/Services/ProductModelling.tsx";
import InfluencerMarketing from "./pages/Services/InfluencerMarketing.tsx";
import { WebsiteAndCustomSoftwareDevelopment } from "./pages/Services/WebsiteAndCustomSoftwareDevelopment.tsx";
import ScrollToTop from "./components/Common/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/book-a-call" element={<BookACall />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/e-commerce-management" element={<ECommerceManagement />} />
          <Route path="/services/product-modelling" element={<ProductModelling />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/website-development" element={<WebsiteAndCustomSoftwareDevelopment />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
