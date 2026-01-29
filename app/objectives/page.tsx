"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, CheckCircle, TrendingUp, Users, Lightbulb, BookOpen } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

const objectives = [
  {
    icon: TrendingUp,
    title: { sq: "Zhvillim Profesional", en: "Professional Development" },
    description: {
      sq: "Të mbështesë zhvillimin profesional të mësuesve AFP përmes trajnimeve informale, fleksibël dhe të bazuara në praktikën reale të mësimdhënies.",
      en: "To support the professional development of VET teachers through informal, flexible trainings based on real teaching practice.",
    },
  },
  {
    icon: BookOpen,
    title: { sq: "Hapësira Mësimi", en: "Learning Spaces" },
    description: {
      sq: "Të ofrojë hapësira mësimi dhe shkëmbimi vetëm për mësuesit AFP, të zhvilluara në shkollat e tyre ose online, pa karakter formal apo certifikues.",
      en: "To offer learning and sharing spaces for VET teachers only, developed in their schools or online, without formal or certifying character.",
    },
  },
  {
    icon: CheckCircle,
    title: { sq: "Cilësi në Mësimdhënie", en: "Teaching Quality" },
    description: {
      sq: "Të kontribojë në cilësinë e mësimdhënies dhe mësimnxënies duke nxitur ndarjen e përvojave dhe mësimin nga kolegët.",
      en: "To contribute to teaching and learning quality by encouraging experience sharing and peer learning.",
    },
  },
  {
    icon: Lightbulb,
    title: { sq: "Inovacion", en: "Innovation" },
    description: {
      sq: "Të inkurajojë përdorimin e metodave të reja, digjitalizimin dhe qasje inovative në mësimdhënie.",
      en: "To encourage the use of new methods, digitalization and innovative approaches in teaching.",
    },
  },
  {
    icon: Users,
    title: { sq: "Komunitet Aktiv", en: "Active Community" },
    description: {
      sq: "Të krijojë një komunitet aktiv bashkëpunimi, ku mësuesit ndihen të përfshirë, të dëgjuar dhe të mbështetur profesionalisht.",
      en: "To create an active collaborative community where teachers feel included, heard and professionally supported.",
    },
  },
  {
    icon: Target,
    title: { sq: "Zhvillim i Vazhdueshëm", en: "Continuous Development" },
    description: {
      sq: "Të nxisë zhvillimin e vazhdueshëm profesional përmes peer-learning, mentorimit informal dhe reflektimit mbi praktikën.",
      en: "To promote continuous professional development through peer-learning, informal mentoring and practice reflection.",
    },
  },
]

export default function ObjectivesPage() {
  const [lang, setLang] = useState<Language>("sq")

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLanguageChange={setLang} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Objektivat 2026" : "Objectives 2026"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {lang === "sq" ? "Objektivat Kryesore" : "Main Objectives"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {lang === "sq"
                  ? "Qëllimet strategjike të rrjetit INVEST Teachers Hub për vitin 2026 dhe më tej."
                  : "Strategic goals of the INVEST Teachers Hub network for 2026 and beyond."}
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                        <objective.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{objective.title[lang]}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{objective.description[lang]}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {lang === "sq" ? "Fokusi ynë për 2026" : "Our Focus for 2026"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {lang === "sq"
                  ? "Gjatë vitit 2026, rrjeti INVEST Teachers Hub do të fokusohet në krijimin e një komuniteti të fortë dhe aktiv mësuesish AFP, duke ofruar mundësi të shumta për zhvillim profesional, shkëmbim përvojash dhe bashkëpunim të ngushtë me industrinë dhe partnerët tanë."
                  : "During 2026, the INVEST Teachers Hub network will focus on creating a strong and active community of VET teachers, offering numerous opportunities for professional development, experience sharing and close collaboration with industry and our partners."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
