import { Heart } from "lucide-react";
import couplePhoto from "@/assets/couple-photo.jpg";

const CouplePhotoSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Nosotros
          </h2>
          <div className="flex items-center justify-center gap-2 text-love-rose">
            <span className="w-16 h-px bg-love-rose/30"></span>
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="w-16 h-px bg-love-rose/30"></span>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-romantic rounded-3xl opacity-20 blur-xl"></div>
          
          <div className="relative bg-card p-4 rounded-2xl shadow-romantic border border-love-rose/20">
            <div className="overflow-hidden rounded-xl">
              <img
                src={couplePhoto}
                alt="Nosotros juntos"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Caption */}
            <div className="text-center mt-6 pb-2">
              <p className="text-xl font-display text-foreground mb-2">
                Siria & Yo
              </p>
              <p className="text-love-rose italic font-body">
                "Juntos por siempre" 💕
              </p>
            </div>
          </div>

          {/* Floating hearts decoration */}
          <div className="absolute -top-6 -left-6">
            <Heart className="w-8 h-8 text-love-rose/40 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Heart className="w-6 h-6 text-love-rose/30 animate-pulse" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouplePhotoSection;
