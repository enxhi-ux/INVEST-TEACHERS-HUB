"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Eye, Heart, Users, UserCheck, Lightbulb, Calendar } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.about.title}</h1>
              <p className="text-lg text-muted-foreground">{t.about.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {lang === "sq" ? "Qëllimi ynë" : "Our Purpose"}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t.about.mission}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{t.about.missionDesc}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {lang === "sq"
                    ? "Mësuesit ndajnë përvojat, mendimet dhe praktikat e tyre, mësojnë nga njëri-tjetri dhe mbështesin zhvillimin e përbashkët profesional."
                    : "Teachers share their experiences, thoughts and practices, learn from each other and support joint professional development."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {lang === "sq"
                    ? "Rrjeti funksionon në mënyrë vullnetare dhe pa pagesë, bazohet në angazhimin personal të mësuesve për të kontribuar dhe për të marrë pjesë në aktivitetet e tij."
                    : "The network operates voluntarily and free of charge, based on teachers' personal commitment to contribute and participate in its activities."}
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/teachers-professional-development-meeting-educatio.jpg"
                  alt="INVEST Teachers Meeting"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.about.vision}</h3>
                  <p className="text-muted-foreground">{t.about.visionDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.about.values}</h3>
                  <p className="text-muted-foreground">{t.about.valuesDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.about.support}</h3>
                  <p className="text-muted-foreground">{t.about.supportDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coordinating Unit */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.about.coordUnit}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.about.coordUnitDesc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.about.coordinator}</h3>
                  <p className="text-sm text-muted-foreground">{t.about.coordinatorDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.about.supportGroup}</h3>
                  <p className="text-sm text-muted-foreground">{t.about.supportGroupDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.about.thematicCoords}</h3>
                  <p className="text-sm text-muted-foreground">{t.about.thematicCoordsDesc}</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Meeting Info */}
            <div className="bg-primary/5 rounded-2xl p-6 flex items-center justify-center gap-4 max-w-2xl mx-auto">
              <Calendar className="h-8 w-8 text-primary" />
              <p className="text-foreground font-medium">{t.about.monthlyMeeting}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
