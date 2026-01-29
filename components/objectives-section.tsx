import { CheckCircle } from "lucide-react"

const objectives = [
  "Të mbështesë zhvillimin profesional të mësuesve AFP përmes trajnimeve informale, fleksibël dhe të bazuara në praktikën reale të mësimdhënies.",
  "Të ofrojë hapësira mësimi dhe shkëmbimi vetëm për mësuesit AFP, të zhvilluara në shkollat e tyre ose online.",
  "Të kontribojë në cilësinë e mësimdhënies dhe mësimnxënies duke nxitur ndarjen e përvojave dhe mësimin nga kolegët.",
  "Të inkurajojë përdorimin e metodave të reja, digjitalizimin dhe qasje inovative në mësimdhënie.",
  "Të krijojë një komunitet aktiv bashkëpunimi, ku mësuesit ndihen të përfshirë, të dëgjuar dhe të mbështetur profesionalisht.",
  "Të nxisë zhvillimin e vazhdueshëm profesional përmes peer-learning, mentorimit informal dhe reflektimit mbi praktikën.",
]

export function ObjectivesSection() {
  return (
    <section id="objektivat" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Objektivat Kryesore 2026</h2>
            <p className="text-muted-foreground mb-8">
              Rrjeti synon të arrijë këto objektiva gjatë vitit 2026 për të mbështetur zhvillimin profesional të
              mësuesve AFP në Shqipëri.
            </p>

            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
              <img
                src="/teachers-professional-development-meeting-educatio.jpg"
                alt="Mësuesit në takim profesional"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card border border-border shadow-lg">
              <p className="text-3xl font-bold text-primary">2026</p>
              <p className="text-sm text-muted-foreground">Viti i Aktiviteteve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
