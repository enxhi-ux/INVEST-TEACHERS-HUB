"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { type Language, translations } from "@/components/language-switcher"
import {
  GraduationCap,
  Target,
  Compass,
  Calendar,
  UserPlus,
  Phone,
  ArrowRight,
  Heart,
  ImageIcon,
  FileText,
} from "lucide-react"

export default function HomePage() {
  const [lang, setLang] = useState<Language>("sq")
  const t = translations[lang]

  const navigationCards = [
    {
      title: t.nav.about,
      description: lang === "sq" ? "Misioni, vizioni dhe njësia koordinuese e rrjetit" : "Mission, vision and coordinating unit of the network",
      href: "/about",
      icon: GraduationCap,
    },
    {
      title: t.nav.objectives,
      description: lang === "sq" ? "Qëllimet kryesore për zhvillimin e rrjetit" : "Main goals for network development",
      href: "/objectives",
      icon: Target,
    },
    {
      title: t.nav.directions,
      description: lang === "sq" ? "Fushat e arsimit profesional (në formim)" : "VET fields (currently forming)",
      href: "/directions",
      icon: Compass,
    },
    {
      title: t.nav.calendar,
      description: lang === "sq" ? "Aktivitetet e planifikuara (shtohen gradualisht)" : "Planned activities (added gradually)",
      href: "/calendar",
      icon: Calendar,
    },
    {
      title: t.nav.membership,
      description: lang === "sq" ? "Kush mund të marrë pjesë dhe si të angazhoheni" : "Who can participate and how to get involved",
      href: "/membership",
      icon: UserPlus,
    },
    {
      title: t.nav.gallery,
      description: lang === "sq" ? "Albume fotosh nga aktivitetet" : "Photo albums from activities",
      href: "/gallery",
      icon: ImageIcon,
    },
    {
      title: t.nav.blog,
      description: lang === "sq" ? "Njoftime dhe testimoniale" : "Announcements and testimonials",
      href: "/blog",
      icon: FileText,
    },
    {
      title: t.nav.contact,
      description: lang === "sq" ? "Partneritete dhe informacion kontakti" : "Partnerships and contact information",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLanguageChange={setLang} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#e8f4f8] via-[#f0f7f9] to-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d7377] rounded-full mb-10">
                <GraduationCap className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white">{t.home.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                {t.home.title}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto text-pretty">
                {t.home.description}
              </p>

              {/* Voluntary Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d7377]/10 border border-[#0d7377]/20 rounded-full mb-10">
                <Heart className="h-5 w-5 text-[#0d7377]" />
                <span className="text-sm font-medium text-[#0d7377]">{t.home.voluntary} - {t.home.voluntaryDesc}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/membership">
                  <Button size="lg" className="bg-[#0d7377] hover:bg-[#0a5f62] text-white gap-2 px-8 h-12 text-base">
                    {t.home.applyBtn}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-2 border-border hover:bg-muted px-8 h-12 text-base">
                    {t.home.learnMore}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              {[
                { value: "5", label: t.home.stats.directions },
                { value: "12+", label: t.home.stats.activities },
                { value: "100+", label: t.home.stats.teachers },
                { value: "2026", label: t.home.stats.year, highlight: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-6 text-center border border-border shadow-sm">
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.highlight ? 'text-[#0d7377]' : 'text-foreground'}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.home.explore}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.home.exploreDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <Footer lang={lang} />
    </div>
  )
}
