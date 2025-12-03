import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioVisualizer from "./AudioVisualizer";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Title */}
        <div className="mb-8 animate-float">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">DEEP FUNKY</span>
          </h1>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary neon-text-cyan">
            RADIO
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Premium Electronic Music • Afro House • Deep House • Melodic Techno
        </p>

        {/* Audio Visualizer */}
        <div className="mb-12">
          <AudioVisualizer 
            isPlaying={isPlaying} 
            barCount={20} 
            className="h-24 justify-center"
          />
        </div>

        {/* Play Button */}
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="play"
            size="icon-xl"
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10" />
            ) : (
              <Play className="w-10 h-10 ml-1" />
            )}
          </Button>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm font-medium">
              {isPlaying ? "NOW STREAMING LIVE" : "TAP TO PLAY"}
            </span>
          </div>
        </div>

        {/* Now Playing Info */}
        {isPlaying && (
          <div className="mt-12 glass rounded-2xl p-6 max-w-md mx-auto animate-scale-pulse">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Now Playing</p>
            <p className="text-lg font-semibold text-foreground">Afro Feeling</p>
            <p className="text-sm text-primary">DJ Deep Funky</p>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
