import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GenresSection from "@/components/GenresSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="genres">
          <GenresSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
