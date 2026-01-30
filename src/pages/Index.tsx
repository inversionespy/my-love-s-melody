import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import MusicSection from "@/components/MusicSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingHearts />
      <HeroSection />
      <LoveLetterSection />
      <MusicSection />
      <FooterSection />
    </div>
  );
};

export default Index;
