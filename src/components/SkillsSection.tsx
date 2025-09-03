import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Server, Monitor } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Web-Technologien",
      icon: Code,
      skills: ["HTML5", "CSS3", "Java"],
      color: "text-primary",
    },
    {
      title: "Entwicklungs- & Arbeitsumgebung",
      icon: Globe,
      skills: ["GitHub", "VS Code", "IT-Englisch"],
      color: "text-accent",
    },
    {
      title: "Grundlagen der IT",
      icon: Monitor,
      skills: ["Betriebssysteme", "Netzwerktechnik", "Wirtschaftslehre"],
      color: "text-secondary-foreground",
    },
    {
      title: "Daten & Programmierung",
      icon: Server,
      skills: ["Datenbanken", "Programmierung", "Grundlegende Algorithmen"],
      color: "text-muted-foreground",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meine{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Kenntnisse
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technische Fähigkeiten und Kompetenzen, die ich während meiner
            Umschulung und durch praktische Erfahrung entwickelt habe
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="p-4 rounded-full bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
                    <category.icon
                      className={`h-8 w-8 ${category.color} group-hover:text-primary transition-colors`}
                    />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/40 transition-colors text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-secondary border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Aktueller Fokus
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ich befinde mich derzeit in einer zweijährigen Umschulung zum
                Fachinformatiker für Anwendungsentwicklung. Dabei vertiefe ich
                meine Kenntnisse in der Softwareentwicklung und lerne moderne
                Entwicklungsmethoden und -werkzeuge kennen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
