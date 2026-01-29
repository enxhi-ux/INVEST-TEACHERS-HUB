import { Monitor, Building, UtensilsCrossed, Briefcase, Heart } from "lucide-react"

const groups = [
  {
    icon: Monitor,
    title: "IT & Digjitalizim",
    description: "Teknologjia, mjetet digjitale dhe zgjidhjet inovative në mësimdhënie",
    color: "primary",
  },
  {
    icon: Building,
    title: "Ndërtim & Energji",
    description: "Praktika profesionale, siguria, teknologjitë dhe energjia e qëndrueshme",
    color: "secondary",
  },
  {
    icon: UtensilsCrossed,
    title: "Turizëm & Mikpritje",
    description: "Shërbimi ndaj klientit, praktikat reale dhe përgatitja për tregun e punës",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "Biznes & Shërbime",
    description: "Aftësi sipërmarrëse, shërbime dhe menaxhim praktik",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Shëndet & Kujdes Social",
    description: "Praktika profesionale, etikë dhe kujdes i orientuar drejt njeriut",
    color: "secondary",
  },
]

const colorClasses = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
}

export function ThematicGroupsSection() {
  return (
    <section id="grupet" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Grupet Tematike</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grupet krijojnë hapësira ku mësuesit e së njëjtës fushë mund të ndajnë përvoja, ide dhe praktika konkrete
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => {
            const Icon = group.icon
            const colors = colorClasses[group.color as keyof typeof colorClasses]
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{group.title}</h3>
                <p className="text-muted-foreground">{group.description}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Çdo mësues mund të jetë pjesë e një ose më shumë grupeve, sipas interesit dhe fushës së tij profesionale.
        </p>
      </div>
    </section>
  )
}
