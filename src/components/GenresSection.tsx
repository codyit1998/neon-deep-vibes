import GenreCard from "./GenreCard";

const genres = [
  {
    title: "Afro House",
    description: "Rhythmic percussion meets deep basslines. African-inspired grooves that move your soul.",
    icon: "🌍",
    color: "cyan" as const,
  },
  {
    title: "Deep House",
    description: "Smooth, soulful vibes with rich harmonies and hypnotic rhythms for late-night sessions.",
    icon: "🌊",
    color: "violet" as const,
  },
  {
    title: "Melodic House",
    description: "Emotional journeys through lush melodies and driving beats that touch the heart.",
    icon: "🎹",
    color: "pink" as const,
  },
  {
    title: "Techno",
    description: "Raw, powerful energy. Industrial sounds and relentless beats for the underground.",
    icon: "⚡",
    color: "cyan" as const,
  },
  {
    title: "Electronic",
    description: "Cutting-edge sounds pushing boundaries. Future-forward production at its finest.",
    icon: "🔮",
    color: "violet" as const,
  },
  {
    title: "Live Sets",
    description: "Exclusive DJ mixes and live performances from the world's best selectors.",
    icon: "🎧",
    color: "pink" as const,
  },
];

const GenresSection = () => {
  return (
    <section className="relative py-24 px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-violet/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">OUR </span>
            <span className="gradient-text">SOUNDS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curated selections across the finest electronic music genres. 
            24/7 streaming of premium underground sounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre, index) => (
            <GenreCard
              key={genre.title}
              {...genre}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenresSection;
