import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const CouplePhotoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // IMPORTANTE: rutas desde public (con / al inicio)
  const photos = [
    { src: "/photos/IMG-20230609-WA0095.jpg", caption: "Recuerdos que alegran el alma" },
    { src: "/photos/IMG-20230613-WA0152.jpg", caption: "Cada instante contigo es único" },
    { src: "/photos/IMG_20210123_173942.jpg", caption: "Te amooo inmenso mi Niña Linda" },
    { src: "/photos/IMG_20210123_174253.jpg", caption: "Momentos inolvidables" },
    { src: "/photos/IMG_20210123_174256.jpg", caption: "Tu sonrisa ilumina mi vida" },
    { src: "/photos/IMG_20210123_174406.jpg", caption: "Juntos es mi lugar favorito" },
    { src: "/photos/IMG_20210516_170139.jpg", caption: "Yo amooo sentirme enamorado de ti" },
    { src: "/photos/IMG_20210516_171441.jpg", caption: "Mi amor bonito" },
    { src: "/photos/IMG_20210523_122614.jpg", caption: "Solo tú y yo" },
    { src: "/photos/IMG_20210523_122659.jpg", caption: "Felicidad pura" },
    { src: "/photos/IMG_20210523_122956.jpg", caption: "Te amo inmensamente" },
    { src: "/photos/IMG_20210606_122159.jpg", caption: "Mi persona favorita" },
    { src: "/photos/IMG_20210606_124854.jpg", caption: "Siempre juntos" },
    { src: "/photos/IMG_20210606_153418.jpg", caption: "Eres mi todo" },
    { src: "/photos/IMG_20210606_153507.jpg", caption: "Deseo tenerte cerquita mio" },
    { src: "/photos/IMG_20210627_183624-COLLAGE.jpg", caption: "Coleccionando momentos" },
    { src: "/photos/IMG_20210711_180707.jpg", caption: "Gracias por tanto" },
    { src: "/photos/IMG_20210713_180737.jpg", caption: "Mi compañera de vida" },
    { src: "/photos/IMG_20210718_175825.jpg", caption: "Risas y amor" },
    { src: "/photos/IMG_20210815_170347.jpg", caption: "La dueña de mi corazón" },
    { src: "/photos/IMG_20210815_181919.jpg", caption: "Amor del bueno" },
    { src: "/photos/IMG_20211008_185521.jpg", caption: "Eres magia" },
    { src: "/photos/IMG_20211008_231356.jpg", caption: "Contigo todo es mejor" },
    { src: "/photos/IMG_20211028_154516.jpg", caption: "Mi regalo más lindo" },
    { src: "/photos/IMG_20211030_211047.jpg", caption: "Te elijo cada día" },
    { src: "/photos/IMG_20211030_213843.jpg", caption: "Eres la Consetida de mi Vida" },
    { src: "/photos/IMG_20211114_151750.jpg", caption: "Eres la dueña de mi corazón" },
    { src: "/photos/IMG_20211114_154317.jpg", caption: "Tú y yo" },
    { src: "/photos/IMG_20211120_121814.jpg", caption: "Eres mi sol" },
    { src: "/photos/IMG_20211223_201604.jpg", caption: "Te amooo Chiquita mia" },
    { src: "/photos/IMG_20220116_181118.jpg", caption: "Empezando el año juntos" },
    { src: "/photos/IMG_20220118_173035.jpg", caption: "Te adoro" },
    { src: "/photos/IMG_20230109_183810.jpg", caption: "Te amooo" },
    { src: "/photos/IMG_20230109_184502.jpg", caption: "Siempre a tu lado" },
    { src: "/photos/IMG_20230109_205645.jpg", caption: "Mis momentos perfectos siempre seran juntico a ti" },
    { src: "/photos/IMG_20230109_205944.jpg", caption: "Mi lugar feliz" },
    { src: "/photos/IMG_20230114_220812.jpg", caption: "Gracias por ser la Princesita mia" },
    { src: "/photos/IMG_20230121_172805.jpg", caption: "Amor infinito" },
    { src: "/photos/IMG_20230121_172936.jpg", caption: "Te amooo" },
    { src: "/photos/IMG_20230121_180208.jpg", caption: "Momentos únicos" },
    { src: "/photos/IMG_20230126_200940.jpg", caption: "Eres mi inspiración" },
    { src: "/photos/IMG_20230129_180104.jpg", caption: "Te amo mucho" },
    { src: "/photos/IMG_20230129_180617.jpg", caption: "Siempre tan bonita" },
    { src: "/photos/IMG_20230203_171124.jpg", caption: "Amor incondicional" },
    { src: "/photos/IMG_20230316_181010.jpg", caption: "Mi compañera perfecta" },
    { src: "/photos/IMG_20230316_181314.jpg", caption: "Juntos es mejor" },
    { src: "/photos/IMG_20230316_181454.jpg", caption: "Eres especial" },
    { src: "/photos/IMG_20230331_170203.jpg", caption: "Te super adorooo mi Niña Linda" },
    { src: "/photos/IMG_20230401_202303.jpg", caption: "Mi apoyo incondicional" },
    { src: "/photos/IMG_20230401_202445.jpg", caption: "Eres mi Consentida" },
    { src: "/photos/IMG_20230401_202753.jpg", caption: "Simplemente te amo" },
    { src: "/photos/IMG_20230415_092514.jpg", caption: "Me haces feliz Chiquitica mia" },
    { src: "/photos/IMG_20230415_092546.jpg", caption: "Eres la Princesita de mi Mundo" },
    { src: "/photos/IMG_20230610_171829.jpg", caption: "Tardes perfectas" },
    { src: "/photos/IMG_20230610_172037.jpg", caption: "Tu mirada me encanta" },
    { src: "/photos/IMG_20230610_172145.jpg", caption: "Siempre conectados" },
    { src: "/photos/IMG_20230610_172157.jpg", caption: "Eres maravillosa" },
    { src: "/photos/IMG_20230610_173101.jpg", caption: "Mi amor bonito" },
    { src: "/photos/IMG_20230610_173109.jpg", caption: "Te amo" },
    { src: "/photos/IMG_20230701_213331.jpg", caption: "Noches especiales" },
    { src: "/photos/IMG_20230701_213431.jpg", caption: "Brillamos juntos" },
    { src: "/photos/IMG_20230717_193701.jpg", caption: "Eres mi paz" },
    { src: "/photos/IMG_20230730_203453.jpg", caption: "Contigo lo tengo todo" },
    { src: "/photos/IMG_20230730_203647.jpg", caption: "Amor sincero" },
    { src: "/photos/IMG_20230730_203713.jpg", caption: "Eres única" },
    { src: "/photos/IMG_20230730_203908.jpg", caption: "Me haces feliz" },
    { src: "/photos/IMG_20231008_212211.jpg", caption: "Amooo nuestro amor, es bonito" },
    { src: "/photos/IMG_20231021_205834.jpg", caption: "Eres mi vida" },
    { src: "/photos/IMG_20231104_221310.jpg", caption: "Te adoro mi amor" },
    { src: "/photos/IMG_20231104_221546.jpg", caption: "Te amooo, eres la bonita mia" },
    { src: "/photos/IMG_20231104_221602.jpg", caption: "Eres mi reina" },
    { src: "/photos/IMG_20231104_222049.jpg", caption: "Mi todo" },
    { src: "/photos/IMG_20231111_210337-COLLAGE.jpg", caption: "Momentos maravillosos" },
    { src: "/photos/IMG_20231111_210350.jpg", caption: "Eres mi alegría" },
    { src: "/photos/IMG_20231111_210644.jpg", caption: "Te amo cada día más" },
    { src: "/photos/IMG_20231111_210701.jpg", caption: "Eres mi sueño hecho realidad" },
    { src: "/photos/IMG_20231111_211144.jpg", caption: "Amor del alma" },
    { src: "/photos/IMG_20231111_211159.jpg", caption: "Contigo hasta el fin" },
    { src: "/photos/IMG_20231216_204159.jpg", caption: "Te amooo mamasita mia" },
    { src: "/photos/IMG_20231216_204419.jpg", caption: "Eres todita mia" },
    { src: "/photos/IMG_20231222_175109.jpg", caption: "Mi corazon te ama bonito" },
    { src: "/photos/IMG_20240113_201718.jpg", caption: "Espero tenerte pronto a mi lado y darte muchos besitos" },
    { src: "/photos/IMG_20240113_202239.jpg", caption: "Amooo nuestro amor" },
    { src: "/photos/IMG_20240113_202516.jpg", caption: "Te amo" },
    { src: "/photos/IMG_20240127_204737.jpg", caption: "Amooo verme juntico a ti" },
    { src: "/photos/IMG_20240127_204746.jpg", caption: "Mis momentos felices siempre seran juntico a ti" },
    { src: "/photos/IMG_20240204_143330.jpg", caption: "Te amooo" },
    { src: "/photos/IMG_20240204_143339.jpg", caption: "Gracias por darme tanto amor" },
    { src: "/photos/IMG_20240204_143349.jpg", caption: "Eres la mujer con la cual me vizualizo en mi futuro" },
    { src: "/photos/IMG_20240413_204138.jpg", caption: "Contigo todo es bonito" },
    { src: "/photos/IMG_20240413_204313.jpg", caption: "Amooo verme juntico a ti" },
    { src: "/photos/IMG_20240413_205048.jpg", caption: "Mi amor bonito eres tu" },
    { src: "/photos/IMG_20240421_184347.jpg", caption: "Te amo mi vida" },
    { src: "/photos/IMG_20240804_105822.jpg", caption: "Amooo todos nuestros momentos" },
    { src: "/photos/IMG_20240804_105832.jpg", caption: "Luz de mi vida" },
    { src: "/photos/IMG_20240804_105927.jpg", caption: "Eres preciosa" },
    { src: "/photos/IMG_20240824_201616.jpg", caption: "Me haces Feliz" },
    { src: "/photos/IMG_20240824_201843.jpg", caption: "Te amooo mi Pequeñita Linda" },
    { src: "/photos/IMG_20240824_202144.jpg", caption: "Siempre a tu lado" },
    { src: "/photos/IMG_20240901_204214.jpg", caption: "Quiero todo junto a ti" },
    { src: "/photos/IMG_20240901_204546.jpg", caption: "Eres mi todo" },
    { src: "/photos/IMG_20241009_185842.jpg", caption: "Eres mi amor bonito" },
    { src: "/photos/IMG_20241009_194238.jpg", caption: "Te extraño mi Princesita Linda" },
    { src: "/photos/IMG_20241009_194300.jpg", caption: "Amooo tenerte en mi Vida" },
    { src: "/photos/IMG_20241009_194345.jpg", caption: "Eres mi Pensamiento mas bonito cada dia" },
    { src: "/photos/IMG_20241009_194617.jpg", caption: "Eres la Consentida de mi Mundo" },
    { src: "/photos/IMG_20241009_194630.jpg", caption: "Te admiro" },
    { src: "/photos/IMG_20241009_194642.jpg", caption: "Eres increíble" },
    { src: "/photos/IMG_20241009_194643.jpg", caption: "Quiero apapacharte mi Vida" },
    { src: "/photos/IMG_20241009_210003.jpg", caption: "Mi Mujer Perfecta eres tu" },
    { src: "/photos/IMG_20250208_184007.jpg", caption: "Futuro juntos" },
    { src: "/photos/IMG_20250208_184124.jpg", caption: "Te amooo bonito" },
    { src: "/photos/IMG_20250208_184335.jpg", caption: "Amooo esos besos" },
    { src: "/photos/IMG_20250208_184342.jpg", caption: "Mi amor de verdad" },
    { src: "/photos/IMG_20250208_184348.jpg", caption: "Eres mi Princesita Linda" },
    { src: "/photos/IMG_20250208_184531.jpg", caption: "Te amo" },
    { src: "/photos/IMG_20250607_183654.jpg", caption: "Momentos Perfectos" },
    { src: "/photos/IMG_20250607_183704.jpg", caption: "Seguimos sumando" },
    { src: "/photos/IMG_20250607_183728.jpg", caption: "Historia sin fin" },
    { src: "/photos/IMG_20250607_183735.jpg", caption: "Gracias por regalarme tanta felicidad" },
    { src: "/photos/IMG_20250607_183748.jpg", caption: "Amor eterno" },
    { src: "/photos/IMG_20250607_184327.jpg", caption: "Siempre tú y yo" },
  ];

  // Slider automático
  useEffect(() => {
    if (!photos.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white via-rose-50 to-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-rose-400 text-sm mb-4 max-w-2xl mx-auto leading-relaxed">
            Amooo Nuestra Historia, Amooo Nuestras Foticos,
            hay tanta historia ahí... Te amooo Pequeñita Mía 💖
          </p>

          <h2 className="text-5xl md:text-6xl font-display font-medium text-slate-800">
            Nosotros
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
            <span className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          </div>
        </div>

        {/* Galería */}
        <div className="relative max-w-2xl mx-auto">

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

            {/* IMÁGENES */}
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.caption}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out
                ${index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                  }`}
              />
            ))}

            {/* Overlay oscuro suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 w-full p-8 text-center backdrop-blur-md bg-white/10">
              <p className="text-white text-2xl md:text-3xl font-light tracking-wide">
                {photos[currentIndex].caption}
              </p>
            </div>

          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-4 mt-10">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full
                ${i === currentIndex
                    ? "w-10 h-1.5 bg-rose-400"
                    : "w-4 h-1.5 bg-rose-200 hover:bg-rose-300"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CouplePhotoSection;
