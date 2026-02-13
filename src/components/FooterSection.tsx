import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-love-blush/50 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Heart
            className="w-12 h-12 text-love-rose animate-heart-beat"
            fill="currentColor"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
          Te Amo Infinitamente, Mi Niña Linda
        </h2>

        <p className="text-lg text-muted-foreground font-body italic mb-8">
          Sabes amooo sentirme enamorado de ti cada día.
          <br />
          Gracias por existir en mi vida.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Heart className="w-4 h-4 text-love-rose" fill="currentColor" />
          <Heart className="w-5 h-5 text-love-rose animate-pulse" fill="currentColor" />
          <Heart className="w-4 h-4 text-love-rose" fill="currentColor" />
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Hecho con todo el amor para la Princesita de mi Vida ❤️
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
