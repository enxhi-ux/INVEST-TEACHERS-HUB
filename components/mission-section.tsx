import { Target, Eye, Heart } from "lucide-react"

export function MissionSection() {
  return (
    <section id="misioni" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Misioni dhe Vizioni</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Krijojmë hapësirë bashkëpunimi të hapur, praktike dhe të orientuar drejt nevojave reale të mësuesve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Qëllimi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Të krijojë një bashkësi aktive dhe bashkëpunuese mësuesish të arsimit dhe formimit profesional (AFP),
              fillimisht në Shqipëri dhe gradualisht edhe në vendet e Ballkanit Perëndimor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Vizioni</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mësuesit të ndajnë përvojat, mendimet dhe praktikat e tyre, të mësojnë nga njëri-tjetri dhe të mbështesin
              zhvillimin e përbashkët profesional në një mjedis bashkëpunues.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Vlerat</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rrjeti funksionon në mënyrë vullnetare dhe bazohet në angazhimin personal të mësuesve për të kontribuar
              dhe për të marrë pjesë në aktivitetet e tij në mënyrë të hapur dhe praktike.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-center text-foreground">
            <strong>Albanian Skills</strong> mbështet mësuesit e angazhuar në rrjet duke ofruar mundësi për pjesëmarrje
            në trajnime, workshop-e, evente dhe aktivitete rrjetëzimi.
          </p>
        </div>
      </div>
    </section>
  )
}
