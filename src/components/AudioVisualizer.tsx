import { cn } from "@/lib/utils";

interface AudioVisualizerProps {
  className?: string;
  isPlaying?: boolean;
  barCount?: number;
  variant?: "cyan" | "violet" | "pink" | "gradient";
}

const AudioVisualizer = ({ 
  className, 
  isPlaying = true, 
  barCount = 10,
  variant = "gradient"
}: AudioVisualizerProps) => {
  const getBarColor = (index: number) => {
    switch (variant) {
      case "cyan":
        return "bg-neon-cyan";
      case "violet":
        return "bg-neon-violet";
      case "pink":
        return "bg-neon-pink";
      case "gradient":
      default:
        const colors = ["bg-neon-cyan", "bg-neon-violet", "bg-neon-pink"];
        return colors[index % colors.length];
    }
  };

  const getBarGlow = (index: number) => {
    switch (variant) {
      case "cyan":
        return "shadow-[0_0_10px_hsl(var(--neon-cyan))]";
      case "violet":
        return "shadow-[0_0_10px_hsl(var(--neon-violet))]";
      case "pink":
        return "shadow-[0_0_10px_hsl(var(--neon-pink))]";
      case "gradient":
      default:
        const glows = [
          "shadow-[0_0_10px_hsl(var(--neon-cyan))]",
          "shadow-[0_0_10px_hsl(var(--neon-violet))]",
          "shadow-[0_0_10px_hsl(var(--neon-pink))]"
        ];
        return glows[index % glows.length];
    }
  };

  return (
    <div className={cn("flex items-end justify-center gap-1 h-16", className)}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1.5 rounded-full transition-all duration-150",
            getBarColor(i),
            getBarGlow(i),
            isPlaying ? "audio-bar" : "h-1"
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isPlaying ? undefined : "4px"
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
