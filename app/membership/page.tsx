"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  UserPlus, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Heart,
  DoorOpen
} from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

export default function MembershipPage() {
  const [lang, setLang] = useState<Language>("sq")
  const t = translations[lang]

  const memberTypes = [
    {
      icon: GraduationCap,
      title: { sq: "Mësues AFP", en: "VET Teachers" },
      description: {
        sq: "Mësues të arsimit dhe formimit profesional në shkolla publike dhe private",
        en: "Vocational education and training teachers in public and private schools",
      },
    },
    {
      icon: Briefcase,
      title: { sq: "Trajnues Profesionalë", en: "Professional Trainers" },
      description: {
        sq: "Trajnues që ofrojnë kurse dhe programe të formimit profesional",
        en: "Trainers who offer professional training courses and programs",
      },
    },
    {
      icon: Building2,
      title: { sq: "Ekspertë të Industrisë", en: "Industry Experts" },
      description: {
        sq: "Profesionistë nga industria që kontribuojnë në formimin profesional",
        en: "Industry professionals who contribute to vocational training",
      },
    },
    {
      icon: Users,
      title: { sq: "Drejtues Institucionesh AFP", en: "VET Institution Directors" },
      description: {
        sq: "Drejtorë dhe administratorë të institucioneve të arsimit profesional",
        en: "Directors and administrators of vocational education institutions",
      },
    },
  ]

  const benefits = lang === "sq" ? [
    "Pjesëmarrje në trajnime dhe workshop-e profesionale",
    "Qasje në materialet dhe burimet e rrjetit",
    "Mundësi rrjetëzimi me kolegë dhe industrinë",
    "Mbështetje nga Albanian Skills",
    "Zhvillim i vazhdueshëm profesional",
    "Pjesë e një komuniteti aktiv dhe bashkëpunues",
  ] : [
    "Participation in professional trainings and workshops",
    "Access to network materials and resources",
    "Networking opportunities with colleagues and industry",
    "Support from Albanian Skills",
    "Continuous professional development",
    "Part of an active and collaborative community",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLanguageChange={setLang} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <UserPlus className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Antarsimi" : "Membership"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.membership.title}</h1>
              <p className="text-lg text-muted-foreground">{t.membership.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Free & Voluntary Notice */}
        <section className="py-6 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3">
              <Heart className="h-5 w-5 text-secondary" />
              <p className="text-secondary font-medium">
                {lang === "sq"
                  ? "Antarsimi është falas dhe vullnetar - pa asnjë pagesë"
                  : "Membership is free and voluntary - no fees required"}
              </p>
            </div>
          </div>
        </section>

        {/* Who Can Join */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.membership.whoCanJoin}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.membership.whoCanJoinDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {memberTypes.map((type, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{type.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{type.description[lang]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Activities & Certificates */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <DoorOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.membership.openActivities}</h3>
                  <p className="text-muted-foreground">{t.membership.openActivitiesDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.membership.certificates}</h3>
                  <p className="text-muted-foreground">{t.membership.certificatesDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t.membership.accredited}</h3>
                  <p className="text-muted-foreground">{t.membership.accreditedDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t.membership.benefits}</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.membership.readyToJoin}</h3>
                <p className="text-muted-foreground mb-6">{t.membership.readyToJoinDesc}</p>
                <Link href="/apply">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                    {t.nav.apply}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
