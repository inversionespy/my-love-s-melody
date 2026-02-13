import { useState } from "react";
import { Music, Heart, ChevronDown, ChevronUp } from "lucide-react";

// Definición de la estructura de la canción
interface Song {
  id: number;
  title: string;
  artist: string;
  message: string;
  audioPath: string; // Ruta al archivo en /public/music/
}

const songs: Song[] = [
  {
    id: 1,
    title: "Caminar de Tu Mano",
    artist: "Río Roma",
    message: "Porque eres perfecta para mí",
    audioPath: "/music/Río Roma - Caminar de Tu Mano (In-House Sessions) ft. Fonseca.mp3",
  },
  {
    id: 2,
    title: "Llegaste Tú",
    artist: "Luis Fonsi",
    message: "Todo de mí ama todo de ti",
    audioPath: "/music/Luis Fonsi - Llegaste Tú (1).mp3",
  },
  {
    id: 3,
    title: "La mujer de mi vida",
    artist: "Ricardo Montaner",
    message: "Eres la mujer de mi vida",
    audioPath: "/music/Ricardo Montaner -  La mujer de mi vida.mp3",
  },
  {
    id: 4,
    title: "Amor Divino",
    artist: "Nico Hernández",
    message: "Amooo sentirme enamorado de ti",
    audioPath: "/music/Amor Divino - Nico Hernández (Vídeo Oficial) (1).mp3",
  },
  {
    id: 5,
    title: "Mi Princesa",
    artist: "Víctor Muñoz",
    message: "Gracias por ser la Princesita de mi Mundo",
    audioPath: "/music/Víctor Muñoz, Oscarcito, Servando, Ronald Borjas, y Yasmil Marrufo - MI PRINCESA (LIVE).mp3",
  },
  {
    id: 6,
    title: "Contigo",
    artist: "Río Roma",
    message: "Contigo quiero todo en esta vida",
    audioPath: "/music/Río Roma - Contigo (Official Video).mp3",
  },
  {
    id: 7,
    title: "Un amor como los de antes",
    artist: "Abraham Mateo",
    message: "Te amooo Bonito",
    audioPath: "/music/Abraham Mateo - Un amor como los de antes (2017) (1).mp3",
  },
  {
    id: 8,
    title: "Ni Un Segundo Ausente",
    artist: "Alejandro El Tigre Navarro",
    message: "Te amooo mi niña Linda, vives en mi mente y en mi corazón",
    audioPath: "/music/Alejandro El Tigre Navarro - Ni Un Segundo Ausente (Video Audio Oficial) (1).mp3",
  },
  {
    id: 9,
    title: "Por toda la vida",
    artist: "Fonseca",
    message: "Tengo un amor que no deja de crecer por ti.",
    audioPath: "/music/Fonseca - Por Toda la Vida (Audio).mp3",
  },
  {
    id: 10,
    title: "Por Eso Te Amo",
    artist: "Río Roma",
    message: "Gracias por darme tanto amor y hacerme tan feliz",
    audioPath: "/music/Río Roma - Por Eso Te Amo (En Vivo).mp3",
  },
  {
    id: 11,
    title: "Te Amo",
    artist: "Alexander Acha",
    message: "Te amo mi niña Linda",
    audioPath: "/music/Alexander Acha - Te Amo (Official Music Video).mp3",
  },
  {
    id: 12,
    title: "Amarte A La Antigua",
    artist: "Pedro Fernández",
    message: "Gracias por ser mi niña Linda, por ser mi amor",
    audioPath: "/music/Pedro Fernández - Amarte A La Antigua.mp3",
  },
  {
    id: 13,
    title: "Por Primera Vez",
    artist: "Camilo, Evaluna Montaner",
    message: "Te amooo",
    audioPath: "/music/Camilo, Evaluna Montaner - Por Primera Vez (Concierto en Casa).mp3",
  },
  {
    id: 14,
    title: "Mi Amor",
    artist: "Grupo Treo",
    message: "Eres la mujer de mi vida",
    audioPath: "/music/Mi Amor - Grupo Treo Official Music Video.mp3",
  }
];

const MusicSection = () => {
  const [expandedSong, setExpandedSong] = useState<number | null>(null);

  const toggleSong = (songId: number) => {
    setExpandedSong(expandedSong === songId ? null : songId);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-love-blush rounded-full">
              <Music className="w-8 h-8 text-love-rose" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Canciones para Ti Mi Niña Linda
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Cada canción me recuerda a ti y a nuestro amor. Escúchalas y piensa en mí.
          </p>
          <div className="flex items-center justify-center gap-2 text-love-rose mt-4">
            <span className="w-16 h-px bg-love-rose/30"></span>
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="w-16 h-px bg-love-rose/30"></span>
          </div>
        </div>

        {/* Lista de canciones */}
        <div className="space-y-4">
          {songs.map((song) => (
            <div
              key={song.id}
              className="group bg-card rounded-xl shadow-soft border border-border hover:border-love-rose/30 transition-all duration-300 hover:shadow-romantic overflow-hidden"
            >
              <button
                onClick={() => toggleSong(song.id)}
                className="w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-romantic rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {song.title}
                    </h3>
                    <p className="text-muted-foreground">{song.artist}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-love-rose italic font-body text-sm md:text-base">
                    "{song.message}"
                  </p>
                  <div className="flex-shrink-0">
                    {expandedSong === song.id ? (
                      <ChevronUp className="w-5 h-5 text-love-rose" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-love-rose" />
                    )}
                  </div>
                </div>
              </button>

              {/* Reproductor expandible */}
              {expandedSong === song.id && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-love-blush/10 p-4 rounded-xl border border-love-rose/10">
                    <audio
                      controls
                      autoPlay
                      className="w-full h-10 accent-love-rose"
                    >
                      <source src={song.audioPath} type="audio/mpeg" />
                      Tu navegador no soporta el elemento de audio.
                    </audio>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer de la sección */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm font-body">
            💕 Haz clic en cualquier canción para escucharla
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;