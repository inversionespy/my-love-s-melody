import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import CouplePhotoSection from "@/components/CouplePhotoSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import MusicSection from "@/components/MusicSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingHearts />
      <HeroSection />
      <CouplePhotoSection />
      <LoveLetterSection />
      <MusicSection />
      <FooterSection />
    </div>
  );
};

export default Index;
