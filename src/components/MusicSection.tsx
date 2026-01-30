import { useState } from "react";
import { Music, Play, Pause, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Song {
  id: number;
  title: string;
  artist: string;
  message: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    message: "Porque eres perfecta para mí",
    spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    youtubeUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    message: "Todo de mí ama todo de ti",
    spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    youtubeUrl: "https://www.youtube.com/watch?v=450p7goxZqg",
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    message: "Te amaré hasta los 70 años y más",
    spotifyUrl: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f",
    youtubeUrl: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  },
  {
    id: 4,
    title: "A Thousand Years",
    artist: "Christina Perri",
    message: "Te he amado por mil años",
    spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl",
    youtubeUrl: "https://www.youtube.com/watch?v=rtOvBOTyX00",
  },
  {
    id: 5,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    message: "No puedo evitar enamorarme de ti",
    spotifyUrl: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC",
    youtubeUrl: "https://www.youtube.com/watch?v=vGJTaP6anOU",
  },
];

const MusicSection = () => {
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);

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
            Canciones que Te Dedico
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
              className="group bg-card rounded-xl p-6 shadow-soft border border-border hover:border-love-rose/30 transition-all duration-300 hover:shadow-romantic"
              onMouseEnter={() => setHoveredSong(song.id)}
              onMouseLeave={() => setHoveredSong(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                  <p className="text-love-rose italic font-body text-sm md:text-base">
                    "{song.message}"
                  </p>
                  <div className="flex gap-2">
                    {song.spotifyUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-love-rose/30 text-love-rose hover:bg-love-rose hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(song.spotifyUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Spotify
                      </Button>
                    )}
                    {song.youtubeUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-love-rose/30 text-love-rose hover:bg-love-rose hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(song.youtubeUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        YouTube
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
