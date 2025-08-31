import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Über <span className="bg-gradient-primary bg-clip-text text-transparent">mich</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mein Weg in die IT-Welt und meine Motivation für die Anwendungsentwicklung
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info */}
          <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Person</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Motivierter Quereinsteiger mit Leidenschaft für Technologie und 
                  kontinuierliches Lernen. Ich bringe frische Perspektiven und 
                  hohe Lernbereitschaft mit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ausbildung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aktuell in einer einjährigen Umschulung zum Fachinformatiker 
                  für Anwendungsentwicklung. Fokus auf moderne 
                  Programmiersprachen und Entwicklungsmethoden.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ziele</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ich möchte als Fachinformatiker innovative Lösungen entwickeln 
                  und meine technischen Fähigkeiten in einem dynamischen 
                  Entwicklungsteam einsetzen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Description */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-card/20 backdrop-blur-sm border-border/30">
            <CardContent className="p-10">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Als Quereinsteiger in die IT-Welt bringe ich eine einzigartige Kombination aus 
                  frischer Motivation und bereits vorhandenen technischen Grundkenntnissen mit. 
                  Meine Umschulung zum Fachinformatiker für Anwendungsentwicklung ermöglicht es mir, 
                  strukturiert und praxisorientiert die notwendigen Fähigkeiten zu erwerben.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Besonders begeistert mich die Vielfältigkeit der Anwendungsentwicklung – von der 
                  Problemanalyse über das Design bis hin zur Implementierung und Tests. 
                  Ich schätze es, komplexe Aufgaben in elegante, benutzerfreundliche Lösungen zu verwandeln.
                </p>
                <p className="text-lg leading-relaxed">
                  Meine mehrsprachigen Fähigkeiten und mein technisches Verständnis für verschiedene 
                  Betriebssysteme machen mich zu einem vielseitigen Teamplayer, der sich schnell in 
                  neue Umgebungen einarbeiten kann.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;