import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import PhotoCard from "@/components/Photocard";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <div className="mb-8">
            <PhotoCard />
          </div>
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mostafa Firouzi
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Fachinformatiker für Anwendungsentwicklung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Umschulung zur Anwendungsentwicklung mit Leidenschaft für moderne Technologien 
              und sauberen Code
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Kontakt aufnehmen
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('skills')}
            >
              Kenntnisse ansehen
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/Mostafa-Firouzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/Mostafa-firouzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:mostafa.firouzi@icloud.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;