import { Radio, Headphones, Music, Globe } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "24/7 Live Stream",
    description: "Non-stop premium electronic music, carefully curated for the true connoisseur.",
  },
  {
    icon: Headphones,
    title: "Hi-Fi Quality",
    description: "Crystal clear 320kbps audio streaming for the ultimate listening experience.",
  },
  {
    icon: Music,
    title: "Exclusive Sets",
    description: "Original mixes and live recordings from underground artists worldwide.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join thousands of music lovers from around the world tuning in daily.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-card/50 to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">FEEL THE </span>
              <span className="text-secondary neon-text-violet">GROOVE</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Deep Funky Radio is more than just a radio station – it's a movement. 
              We bring you the deepest, funkiest electronic sounds from around the globe, 
              24 hours a day, 7 days a week.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the sun-kissed beaches of Ibiza to the underground clubs of Berlin, 
              our DJs curate the finest selection of Afro house, deep house, melodic techno, 
              and everything in between.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-hover rounded-xl p-5 group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:text-neon-cyan transition-colors" />
                <h3 className="font-display text-sm font-semibold mb-1 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
