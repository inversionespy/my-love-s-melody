import { Heart, Sparkles } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 bg-love-cream/50 relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10">
        <Sparkles className="w-24 h-24 text-love-gold" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Sparkles className="w-32 h-32 text-love-gold" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Mi Carta de Amor
          </h2>
          <div className="flex items-center justify-center gap-2 text-love-rose">
            <span className="w-16 h-px bg-love-rose/30"></span>
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="w-16 h-px bg-love-rose/30"></span>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-romantic border border-love-rose/10 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Heart className="w-8 h-8 text-love-rose animate-pulse-soft" fill="currentColor" />
          </div>

          <div className="font-body text-lg md:text-xl leading-relaxed text-foreground space-y-6">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:text-love-rose first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Gracias por ser la Princesita de mi mundo, desde el día que llegaste a mi vida, todo cambió para bien.
              No imaginas lo feliz que me haces, tu presencia llena mi corazón
              de una felicidad que nunca pensé que existiera.
            </p>

            <p>
              Cada momento contigo es un tesoro que guardo en lo más profundo de mi ser.
              Tu risa, tus ojos, tu forma de ser... todo en ti me enamora más cada día.
            </p>

            <p>
              Gracias por hacerme la persona más feliz del mundo. Gracias por amarme
              como lo haces, por estar a mi lado en cada paso, por ser mi compañera,
              mi confidente y mi todo.
            </p>

            <p className="italic text-love-rose text-center pt-4">
              Te amo hoy, mañana y siempre.
              <br />
              Con todo mi corazón. Eres mi Princesita Linda, La Chiquitica de mi Vida, Mi Consentida, Mi Debilidad, Mi Todo❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
