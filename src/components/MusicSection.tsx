import { useState } from "react";
import { Music, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Song {
  id: number;
  title: string;
  artist: string;
  message: string;
  spotifyEmbedId: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    message: "Porque eres perfecta para mí",
    spotifyEmbedId: "0tgVpDi06FyKpA1z0VMD4v",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    message: "Todo de mí ama todo de ti",
    spotifyEmbedId: "3U4isOIWM3VvDubwSI3y7a",
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    message: "Te amaré hasta los 70 años y más",
    spotifyEmbedId: "34gCuhDGsG4bRPIf9bb02f",
  },
  {
    id: 4,
    title: "A Thousand Years",
    artist: "Christina Perri",
    message: "Te he amado por mil años",
    spotifyEmbedId: "6lanRgr6wXibZr8KgzXxBl",
  },
  {
    id: 5,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    message: "No puedo evitar enamorarme de ti",
    spotifyEmbedId: "44AyOl4qVkzS48vBsbNXaC",
  },
];

const MusicSection = () => {
  const [expandedSong, setExpandedSong] = useState<number | null>(null);

  const toggleSong = (songId: number) => {
    setExpandedSong(expandedSong === songId ? null : songId);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-love-blush rounded-full">
              <Music className="w-8 h-8 text-love-rose" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Canciones para Ti, Siria
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
                    <Music className="w-6 h-6 text-primary-foreground" />
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

              {expandedSong === song.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="rounded-xl overflow-hidden">
                    <iframe
                      src={`https://open.spotify.com/embed/track/${song.spotifyEmbedId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm font-body">
            💕 Haz clic en cualquier canción para reproducirla
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
