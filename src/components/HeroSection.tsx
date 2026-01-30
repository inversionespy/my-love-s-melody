import { Heart } from "lucide-react";
import romanticBg from "@/assets/romantic-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url(${romanticBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <Heart 
            className="w-16 h-16 text-love-rose animate-heart-beat" 
            fill="currentColor"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-foreground mb-6 leading-tight">
          Para Ti,
          <br />
          <span className="text-gradient-romantic italic">Siria Tovar</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-body italic max-w-2xl mx-auto mb-8">
          Cada día a tu lado es un regalo que atesoro con todo mi corazón
        </p>
        
        <div className="flex items-center justify-center gap-2 text-love-rose">
          <span className="w-12 h-px bg-love-rose/50"></span>
          <Heart className="w-4 h-4" fill="currentColor" />
          <span className="w-12 h-px bg-love-rose/50"></span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-love-rose/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-love-rose/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
