import { UserCheck, GraduationCap, Factory, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const participants = [
  { icon: GraduationCap, title: "Mësues AFP", description: "Mësues të arsimit dhe formimit profesional" },
  { icon: UserCheck, title: "Trajnues Profesionalë", description: "Specialistë të trajnimit në industri" },
  { icon: Factory, title: "Ekspertë të Industrisë", description: "Profesionistë me përvojë praktike" },
  { icon: Building, title: "Drejtues Institucionesh", description: "Drejtues të shkollave AFP" },
]

export function ParticipationSection() {
  return (
    <section id="pjesemarrja" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kush Mund të Marrë Pjesë?</h2>
            <p className="text-muted-foreground mb-8">
              Rrjeti është i hapur për të gjithë profesionistët e arsimit dhe formimit profesional që dëshirojnë të
              kontribuojnë në zhvillimin e komunitetit.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {participants.map((participant, index) => {
                const Icon = participant.icon
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">{participant.title}</h4>
                      <p className="text-sm text-muted-foreground">{participant.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Apliko për të qenë pjesë e rrjetit
            </Button>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Angazhimi i Rekomanduar</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  60%
                </span>
                <p className="text-foreground">Pjesëmarrje në aktivitetet vjetore</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5">
                <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                  1+
                </span>
                <p className="text-foreground">Kontribut në aktivitet, trajnim ose prezantim</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5">
                <span className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  ✓
                </span>
                <p className="text-foreground">Feedback pas çdo aktiviteti</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
              Ky angazhim nuk ka karakter detyrues, por synon të forcojë ndjenjën e përkatësisë dhe bashkëpunimin
              profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
