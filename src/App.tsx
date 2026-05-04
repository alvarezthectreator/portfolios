import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DemoOne from "./components/ui/demo";
import { Header } from "./components/ui/header-1";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <DemoOne />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
