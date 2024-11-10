import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection"
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
