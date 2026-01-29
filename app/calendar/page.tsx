"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Info, Video } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

const months = [
  { sq: "Janar", en: "January" },
  { sq: "Shkurt", en: "February" },
  { sq: "Mars", en: "March" },
  { sq: "Prill", en: "April" },
  { sq: "Maj", en: "May" },
  { sq: "Qershor", en: "June" },
  { sq: "Korrik", en: "July" },
  { sq: "Gusht", en: "August" },
  { sq: "Shtator", en: "September" },
  { sq: "Tetor", en: "October" },
  { sq: "Nëntor", en: "November" },
  { sq: "Dhjetor", en: "December" },
]

export default function CalendarPage() {
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
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Kalendari 2026" : "Calendar 2026"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.calendar.title}</h1>
              <p className="text-lg text-muted-foreground">{t.calendar.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Info Notice */}
        <section className="py-8 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4">
              <Info className="h-6 w-6 text-secondary shrink-0" />
              <div className="text-center">
                <p className="text-secondary font-medium">
                  {lang === "sq"
                    ? "Aktivitetet do të shtohen gradualisht gjatë vitit 2026"
                    : "Activities will be added gradually throughout 2026"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {lang === "sq"
                    ? "Ndiqni këtë faqe për përditësimet më të fundit"
                    : "Follow this page for the latest updates"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Calendar View */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Monthly Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {months.map((month, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{month[lang]}</h3>
                      <Badge variant="outline" className="text-xs">
                        2026
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {lang === "sq" ? "Aktivitete së shpejti..." : "Activities coming soon..."}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            <div className="mt-16 text-center py-12 bg-muted/30 rounded-2xl">
              <Calendar className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {lang === "sq" ? "Kalendari në Përgatitje" : "Calendar in Preparation"}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {t.calendar.comingSoon}
              </p>
            </div>
          </div>
        </section>

        {/* Activity Types Info */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              {lang === "sq" ? "Llojet e Aktiviteteve" : "Activity Types"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Trajnime Online" : "Online Trainings"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Sesione virtuale për zhvillim profesional"
                    : "Virtual sessions for professional development"}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Workshop-e Fizike" : "Physical Workshops"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Aktivitete praktike në vende të ndryshme"
                    : "Practical activities in various locations"}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Evente Rrjetëzimi" : "Networking Events"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "Mundësi për tu njohur me kolegë"
                    : "Opportunities to meet colleagues"}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="h-10 w-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5 text-rose-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "sq" ? "Takime Mujore" : "Monthly Meetings"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "sq"
                    ? "E mërkurë e tretë e çdo muaji"
                    : "Third Wednesday of each month"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {lang === "sq" ? "Çertifikata Pjesëmarrje" : "Participation Certificates"}
              </h3>
              <p className="text-muted-foreground">
                {lang === "sq"
                  ? "Në fund të çdo aktiviteti, pjesëmarrësit marrin çertifikatë pjesëmarrje. Përmes bashkëpunimeve me institucione të tjera, do të sigurohen edhe çertifikime të akredituara për trajnimet profesionale."
                  : "At the end of each activity, participants receive a participation certificate. Through partnerships with other institutions, accredited certifications will also be provided for professional trainings."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
