import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NurseLogin from "./pages/NurseLogin";
import { HeadNurseLogin, AdminLogin } from "./pages/RoleLogin";
import NurseDashboard from "./pages/NurseDashboard";
import HeadNurseDashboard from "./pages/HeadNurseDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/nurse-login" element={<NurseLogin />} />
          <Route path="/headnurse-login" element={<HeadNurseLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/nurse-dashboard" element={<NurseDashboard />} />
          <Route path="/headnurse-dashboard" element={<HeadNurseDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
