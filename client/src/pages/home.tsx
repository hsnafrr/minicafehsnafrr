import Navigation from "@/components/navigation.tsx";
import HeroSection from "@/components/hero-section.tsx";
import MenuSection from "@/components/menu-section.tsx";
import AboutSection from "@/components/about-section.tsx";
import Footer from "@/components/footer.tsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
