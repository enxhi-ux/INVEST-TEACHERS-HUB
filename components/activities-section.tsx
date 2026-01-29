import { GraduationCap, Laptop, Users, Building2 } from "lucide-react"

const activityTypes = [
  {
    icon: GraduationCap,
    title: "Trajnime Informale në Shkolla",
    items: [
      "Workshop-e të vogla mes mësuesish për tema konkrete",
      "Demonstrime praktike dhe ndarje metodash që funksionojnë në klasë",
      "Vëzhgim kolegial i orëve mësimore me diskutim dhe reflektim",
      "Sesione mentorimi informal mes kolegësh",
    ],
  },
  {
    icon: Laptop,
    title: "Trajnime Informale Online",
    items: [
      "Webinarë të shkurtër me tema praktike",
      "Takime online për ndarjen e praktikave të mira",
      "Diskutime profesionale dhe forume virtuale",
      "Peer-learning dhe komunitete praktike online",
    ],
  },
  {
    icon: Users,
    title: "Formate Mbështetëse",
    items: [
      "Shkëmbim materialesh mësimore dhe plane orësh",
      "Analiza rastesh nga përvoja reale e mësuesve",
      "Reflektim i përbashkët mbi praktikat",
      "Aktivitete të fokusuara në aftësi praktike",
    ],
  },
  {
    icon: Building2,
    title: "Aktivitete Plotësuese",
    items: [
      "Vizita studimore në biznese dhe kompani",
      "Aktivitete rrjetëzimi me industrinë",
      "Demonstrime praktike",
      "Konkurse profesionale",
    ],
  },
]

export function ActivitiesSection() {
  return (
    <section id="aktivitetet" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Format e Aktiviteteve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aktivitetet fokusohen tek mësimi praktik, ndarja e përvojave dhe mësimi nga njëri-tjetri
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activityTypes.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{activity.title}</h3>
                </div>
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
