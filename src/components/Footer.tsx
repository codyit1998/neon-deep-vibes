import { Instagram, Twitter, Youtube, Music2 } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "SoundCloud" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold gradient-text">
              DEEP FUNKY RADIO
            </h3>
            <AudioVisualizer isPlaying={true} barCount={8} className="h-4 mt-2" />
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-8 max-w-md">
            Your 24/7 destination for premium electronic music. 
            Tune in, turn up, and let the groove take over.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground/60">
            <p>© 2024 Deep Funky Radio. All rights reserved.</p>
            <p className="mt-1">Made with 🎵 for music lovers everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
