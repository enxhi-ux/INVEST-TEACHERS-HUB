"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Bell, MessageSquare, User, Calendar, Quote } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

export default function BlogPage() {
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
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Blog" : "Blog"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.blog.title}</h1>
              <p className="text-lg text-muted-foreground">{t.blog.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="news" className="gap-2">
                  <Bell className="h-4 w-4" />
                  {t.blog.news}
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {t.blog.testimonials}
                </TabsTrigger>
              </TabsList>

              {/* News Tab */}
              <TabsContent value="news">
                <div className="text-center py-16 bg-muted/30 rounded-2xl">
                  <Bell className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {lang === "sq" ? "Njoftime së shpejti" : "Announcements coming soon"}
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {t.blog.comingSoon}
                  </p>
                </div>

                {/* Example of how news cards would look */}
                <div className="mt-12 hidden">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>15 Janar 2026</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Titulli i njoftimit</h3>
                        <p className="text-sm text-muted-foreground">
                          Përshkrimi i shkurtër i njoftimit do të shfaqet këtu...
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Testimonials Tab */}
              <TabsContent value="testimonials">
                <div className="text-center py-16 bg-muted/30 rounded-2xl">
                  <Quote className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {lang === "sq" ? "Testimoniale së shpejti" : "Testimonials coming soon"}
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {lang === "sq"
                      ? "Përvojat dhe mendimet e mësuesve do të ndahen këtu (anonim ose me emër)"
                      : "Teacher experiences and thoughts will be shared here (anonymous or named)"}
                  </p>
                </div>

                {/* Example of how testimonial cards would look */}
                <div className="mt-12 hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-primary/5 border-none">
                      <CardContent className="p-8">
                        <Quote className="h-8 w-8 text-primary/30 mb-4" />
                        <p className="text-foreground italic mb-6">
                          "Citati i testimonialit do të shfaqet këtu..."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Emri (ose Anonim)</p>
                            <p className="text-sm text-muted-foreground">Mësues AFP</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Info about testimonials */}
            <div className="mt-16 bg-secondary/10 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-semibold text-foreground mb-3">
                {lang === "sq" ? "Dëshironi të ndani përvojën tuaj?" : "Want to share your experience?"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {lang === "sq"
                  ? "Testimonialët mund të postohen anonim ose me emër, sipas dëshirës tuaj. Na kontaktoni për të ndarë përvojën tuaj me rrjetin."
                  : "Testimonials can be posted anonymously or with your name, as you prefer. Contact us to share your experience with the network."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
