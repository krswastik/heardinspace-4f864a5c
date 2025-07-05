
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Archive from "./pages/Archive";
import SpaceFacts from "./pages/SpaceFacts";
import MissionGuides from "./pages/MissionGuides";
import EducationalResources from "./pages/EducationalResources";
import TeacherPortal from "./pages/TeacherPortal";
import Community from "./pages/Community";
import Newsletter from "./pages/Newsletter";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/space-facts" element={<SpaceFacts />} />
          <Route path="/mission-guides" element={<MissionGuides />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/teacher-portal" element={<TeacherPortal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
