import { Calendar, MapPin, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const calendarEvents = [
  { month: "Janar", event: "Takim hapës i rrjetit (online)", type: "online", date: "22 Janar" },
  { month: "Shkurt", event: "Trajnim: Metodologji moderne të mësimdhënies VET", type: "online", date: "TBD" },
  { month: "Mars", event: "Workshop fizik rajonal: Mësimdhënie e bazuar në kompetenca", type: "fizik", date: "TBD" },
  { month: "Prill", event: "Trajnim: Digjitalizimi në arsimin profesional", type: "online", date: "TBD" },
  { month: "Maj", event: "Workshop sektorial + Vizitë studimore në biznes", type: "fizik", date: "TBD" },
  { month: "Qershor", event: "Trajnim: Vlerësimi praktik i nxënësve VET", type: "hibrid", date: "TBD" },
  { month: "Korrik", event: "Trajnim: Green Skills dhe profesione të gjelbra", type: "online", date: "TBD" },
  { month: "Gusht", event: "Pushime - Vetë-mësim online", type: "online", date: "—" },
  { month: "Shtator", event: "Workshop: Integrimi i green skills në kurrikula VET", type: "fizik", date: "TBD" },
  { month: "Tetor", event: "Trajnim: Bashkëpunimi VET – industri – treg pune", type: "hibrid", date: "TBD" },
  { month: "Nëntor", event: "Konferenca Vjetore e Rrjetit VET", type: "fizik", date: "TBD" },
  { month: "Dhjetor", event: "Vlerësim vjetor dhe planifikimi 2027", type: "online", date: "TBD" },
]

const typeConfig = {
  online: { label: "Online", icon: Video, variant: "secondary" as const },
  fizik: { label: "Fizik", icon: MapPin, variant: "default" as const },
  hibrid: { label: "Hibrid", icon: Calendar, variant: "outline" as const },
}

export function CalendarSection() {
  return (
    <section id="kalendari" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kalendari Vjetor 2026</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aktivitetet e planifikuara për vitin 2026, duke kombinuar formate online, fizike dhe hibride
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calendarEvents.map((event, index) => {
            const config = typeConfig[event.type as keyof typeof typeConfig]
            const Icon = config.icon
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary">{event.month}</span>
                  <Badge variant={config.variant} className="text-xs">
                    <Icon className="w-3 h-3 mr-1" />
                    {config.label}
                  </Badge>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{event.event}</p>
                <p className="text-xs text-muted-foreground mt-2">{event.date}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Takim i përgjithshëm: 1 herë / 3 muaj</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-muted-foreground">Takime tematike: 1 herë / muaj</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Trajnime: 1-2 herë / muaj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
