import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "E-Mail",
      value: "mostafa.firouzi@icloud.com",
      href: "mailto:mostafa.firouzi@icloud.com",
      description: "Für direkte Kommunikation"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mostafa-firouzi",
      href: "https://linkedin.com/in/Mostafa-firouzi",
      description: "Professionelles Netzwerk"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mostafa-Firouzi",
      href: "https://github.com/Mostafa-Firouzi",
      description: "Code-Projekte & Portfolio"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Kontakt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lassen Sie uns über Möglichkeiten sprechen. Ich freue mich auf Ihr Feedback 
            und neue Herausforderungen in der Anwendungsentwicklung.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <Card 
              key={item.label}
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-6">
                <a 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center space-y-4 hover:text-primary transition-colors"
                >
                  {/* Icon */}
                  <div className="p-4 rounded-full bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
                    <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <p className="text-foreground font-mono text-sm group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>

                  {/* External Link Indicator */}
                  {item.href.startsWith('http') && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-secondary border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Bereit für den nächsten Schritt?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Ich bin offen für neue Möglichkeiten und freue mich darauf, meine 
                Leidenschaft für die Anwendungsentwicklung in Ihrem Team einzubringen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:mostafa.firouzi@icloud.com'}
                  className="group"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  E-Mail schreiben
                </Button>
                
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/Mostafa-firouzi', '_blank')}
                  className="group"
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  LinkedIn besuchen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Diese Website wurde mit React, TypeScript und Tailwind CSS erstellt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;