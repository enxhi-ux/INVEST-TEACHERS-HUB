import { GraduationCap, Building2, Globe, Users } from "lucide-react"

const partners = [
  {
    icon: GraduationCap,
    title: "Institucione Arsimore",
    description: "Shkolla profesionale dhe qendra trajnimi në të gjithë Shqipërinë",
  },
  {
    icon: Building2,
    title: "Biznese dhe Industri",
    description: "Kompani dhe ndërmarrje që mbështesin arsimin profesional",
  },
  {
    icon: Globe,
    title: "Projekte Kombëtare dhe Ndërkombëtare",
    description: "Iniciativa dhe programe zhvillimi në fushën e AFP",
  },
  {
    icon: Users,
    title: "Donatorë dhe Organizata Zhvillimi",
    description: "Partnerë që mbështesin zhvillimin e rrjetit",
  },
]

export function PartnershipsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partneritete</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bashkëpunimi me institucione dhe organizata të ndryshme për të mbështetur zhvillimin e mësuesve AFP
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{partner.title}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
