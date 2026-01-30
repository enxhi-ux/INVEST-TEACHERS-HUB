"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Compass, Monitor, Building2, Plane, Briefcase, Heart, Clock, Plus } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

const directions = [
  {
    id: "it",
    icon: Monitor,
    title: { sq: "IT & Digjitalizim", en: "IT & Digitalization" },
    description: {
      sq: "Teknologjia e informacionit, programimi, rrjetet kompjuterike, siguria kibernetike dhe shërbimet digjitale.",
      en: "Information technology, programming, computer networks, cybersecurity and digital services.",
    },
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "construction",
    icon: Building2,
    title: { sq: "Ndërtim & Energji", en: "Construction & Energy" },
    description: {
      sq: "Ndërtim, instalime elektrike, hidraulike, energji e rinovueshme dhe efiçenca energjetike.",
      en: "Construction, electrical installations, plumbing, renewable energy and energy efficiency.",
    },
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "tourism",
    icon: Plane,
    title: { sq: "Turizëm & Mikpritje", en: "Tourism & Hospitality" },
    description: {
      sq: "Hoteleri, gastronomi, turizëm, udhërrëfyes turistik dhe menaxhim i mikpritjes.",
      en: "Hospitality, gastronomy, tourism, tour guiding and hospitality management.",
    },
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: "business",
    icon: Briefcase,
    title: { sq: "Biznes & Shërbime", en: "Business & Services" },
    description: {
      sq: "Administrim biznesi, kontabilitet, marketing, shitje dhe shërbime administrative.",
      en: "Business administration, accounting, marketing, sales and administrative services.",
    },
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "health",
    icon: Heart,
    title: { sq: "Shëndet & Kujdes Social", en: "Health & Social Care" },
    description: {
      sq: "Kujdes shëndetësor, asistencë mjekësore, kujdes social dhe shërbime për të moshuarit.",
      en: "Healthcare, medical assistance, social care and elderly care services.",
    },
    color: "bg-rose-500/10 text-rose-600",
  },
]

export default function DirectionsPage() {
  const [lang, setLang] = useState<Language>("sq")
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLanguageChange={setLang} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Compass className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Drejtimet" : "Directions"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.directions.title}</h1>
              <p className="text-lg text-muted-foreground">{t.directions.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Forming Notice */}
        <section className="py-8 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-secondary" />
              <p className="text-secondary font-medium">
                {t.directions.forming}: {t.directions.formingDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Directions Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directions.map((direction) => (
                <Card key={direction.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className={`h-14 w-14 rounded-xl ${direction.color} flex items-center justify-center mb-6`}>
                      <direction.icon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{direction.title[lang]}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {t.directions.forming}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{direction.description[lang]}</p>
                  </CardContent>
                </Card>
              ))}

              {/* More Directions Coming */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="h-14 w-14 rounded-xl bg-muted flex items-center justify-center mb-6">
                    <Plus className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    {lang === "sq" ? "Drejtime të Tjera" : "Other Directions"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "sq"
                      ? "Drejtime të tjera do të shtohen gradualisht bazuar në nevojat dhe interesin e mësuesve."
                      : "Other directions will be added gradually based on teachers' needs and interests."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {lang === "sq" ? "Si Funksionojnë Grupet Tematike?" : "How Do Thematic Groups Work?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Formimi" : "Formation"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Grupet po formohen gradualisht bazuar në interesin e mësuesve"
                    : "Groups are being gradually formed based on teacher interest"}
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Koordinimi" : "Coordination"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Çdo grup do të ketë një koordinator tematik vullnetar"
                    : "Each group will have a volunteer thematic coordinator"}
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Aktivitete" : "Activities"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Diskutime, workshop-e dhe trajnime specifike për çdo fushë"
                    : "Discussions, workshops and specific trainings for each field"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
