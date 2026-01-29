"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ImageIcon, Calendar, FolderOpen } from "lucide-react"
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

export default function GalleryPage() {
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
                <ImageIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Galeria" : "Gallery"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.gallery.title}</h1>
              <p className="text-lg text-muted-foreground">{t.gallery.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Monthly Albums */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {lang === "sq" ? "Albumet sipas Muajve - 2026" : "Albums by Month - 2026"}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {months.map((month, index) => (
                <Card 
                  key={index} 
                  className="group hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
                      <FolderOpen className="h-12 w-12 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-semibold text-foreground">{month[lang]} 2026</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {lang === "sq" ? "0 foto" : "0 photos"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            <div className="mt-16 text-center py-16 bg-muted/30 rounded-2xl">
              <ImageIcon className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {lang === "sq" ? "Galeria në Përgatitje" : "Gallery in Preparation"}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                {t.gallery.comingSoon}
              </p>
              <p className="text-sm text-muted-foreground">
                {lang === "sq"
                  ? "Fotot do të organizohen sipas muajve dhe aktiviteteve përkatëse"
                  : "Photos will be organized by months and respective activities"}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
