import { cn } from "@/lib/utils";
import React from "react";

interface GenreCardProps {
  title: string;
  description: string;
  icon: string;
  color: "cyan" | "violet" | "pink";
  className?: string;
  style?: React.CSSProperties;
}

const GenreCard = ({ title, description, icon, color, className, style }: GenreCardProps) => {
  const colorClasses = {
    cyan: {
      border: "hover:border-neon-cyan/50",
      glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]",
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
    },
    violet: {
      border: "hover:border-neon-violet/50",
      glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-violet)/0.3)]",
      text: "text-neon-violet",
      bg: "bg-neon-violet/10",
    },
    pink: {
      border: "hover:border-neon-pink/50",
      glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)]",
      text: "text-neon-pink",
      bg: "bg-neon-pink/10",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={cn(
        "group glass rounded-2xl p-6 transition-all duration-500 cursor-pointer",
        colors.border,
        colors.glow,
        className
      )}
      style={style}
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", colors.bg)}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className={cn("font-display text-xl font-semibold mb-2", colors.text)}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GenreCard;
