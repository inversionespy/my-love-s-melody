import { Heart } from "lucide-react";
import romanticBg from "@/assets/romantic-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 scale-105 animate-[slowZoom_35s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `url(${romanticBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-0" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/3 animate-float" />
        <div className="absolute w-1 h-1 bg-rose-200 rounded-full top-2/3 left-1/4 animate-float delay-2000" />
        <div className="absolute w-2 h-2 bg-rose-300 rounded-full top-1/2 right-1/3 animate-float delay-4000" />
      </div>

      {/* Letter Card */}
      <div className="relative z-10 max-w-3xl w-full text-center">

        {/* heart */}
        <div className="flex justify-center mb-8">
          <Heart
            className="w-16 h-16 text-rose-400 animate-heart-beat drop-shadow-[0_0_20px_rgba(255,100,120,0.6)]"
            fill="currentColor"
          />
        </div>

        {/* title */}
        <p className="uppercase tracking-[0.4em] text-rose-200/80 text-sm md:text-base mb-4">
          Para Ti
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight">
          Siria Tovar
        </h1>

        <p className="text-rose-200/90 text-lg md:text-2xl mt-4 font-light">
          la mujer de mi vida
        </p>

        {/* divider */}
        <div className="flex items-center justify-center gap-4 my-10">
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          <Heart className="w-4 h-4 text-rose-300" fill="currentColor" />
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
        </div>

        {/* message */}
        <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed max-w-xl mx-auto">
          Te amooo super bonito mi Niña Linda,
          eres mi Princesita Hermosa la Consentida de mi Mundo 💖
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
