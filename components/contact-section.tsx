import { Facebook, Linkedin, MessageCircle, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Facebook, label: "Facebook Group", description: "Komunitet & njoftime", href: "#" },
  { icon: Linkedin, label: "LinkedIn", description: "Rrjetëzim profesional", href: "#" },
  { icon: MessageCircle, label: "WhatsApp / Telegram", description: "Komunikim i shpejtë", href: "#" },
  { icon: Youtube, label: "YouTube", description: "Video trajnimi", href: "#" },
]

export function ContactSection() {
  return (
    <section id="kontakti" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Na Kontaktoni</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lidhu me ne përmes kanaleve të ndryshme të komunikimit
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{social.label}</h4>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="max-w-xl mx-auto text-center p-8 rounded-2xl bg-card border border-border">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Dëshironi më shumë informacion?</h3>
          <p className="text-muted-foreground mb-6">
            Na shkruani për çdo pyetje rreth rrjetit INVEST Teachers Hub Albania
          </p>
          <Button size="lg" asChild>
            <a href="mailto:info@albanianskills.al">Na Shkruani</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
