"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram, Building2, Globe, Users, ExternalLink } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

export default function ContactPage() {
  const [lang, setLang] = useState<Language>("sq")
  const t = translations[lang]

  const socialLinks = [
    {
      name: "Facebook",
      description: { sq: "Komunitet & njoftime", en: "Community & announcements" },
      icon: Facebook,
      href: "https://www.facebook.com/albanianskillsofficial/",
      color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
    },
    {
      name: "LinkedIn",
      description: { sq: "Rrjetëzim profesional", en: "Professional networking" },
      icon: Linkedin,
      href: "https://al.linkedin.com/company/albanianskills-national-association-for-skills-competitions-nasc",
      color: "bg-sky-500/10 text-sky-600 hover:bg-sky-500/20",
    },
    {
      name: "YouTube",
      description: { sq: "Video trajnimi", en: "Training videos" },
      icon: Youtube,
      href: "https://www.youtube.com/@albanianskillsofficial2012/videos",
      color: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
    },
    {
      name: "Instagram",
      description: { sq: "Foto & momente", en: "Photos & moments" },
      icon: Instagram,
      href: "https://www.instagram.com/albanianskills/?hl=en",
      color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
    },
  ]

  const partners = [
    { name: { sq: "Institucione arsimore", en: "Educational institutions" }, icon: Building2 },
    { name: { sq: "Biznese dhe industri", en: "Businesses and industry" }, icon: Globe },
    { name: { sq: "Projekte kombëtare dhe ndërkombëtare", en: "National and international projects" }, icon: Users },
    { name: { sq: "Donatorë dhe organizata zhvillimi", en: "Donors and development organizations" }, icon: Building2 },
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
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {lang === "sq" ? "Kontakt" : "Contact"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.contact.title}</h1>
              <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.contact.email}</h3>
                  <a href="mailto:info@albanianskills.org" className="text-muted-foreground hover:text-primary transition-colors">
                    info@albanianskills.org
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.contact.location}</h3>
                  <p className="text-muted-foreground text-sm">
                    Ish Fusha e Aviacionit, Rruga Andrea Kushi,<br />
                    Kompleksi Garden Turdiu, Kulla E, Apt 1/4,<br />
                    Tirana, Albania
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Albanian Skills Link */}
            <div className="mb-16 text-center">
              <a 
                href="https://www.albanianskills.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Globe className="h-5 w-5" />
                {lang === "sq" ? "Vizito faqen Albanian Skills" : "Visit Albanian Skills website"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Social Media */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{t.contact.socialMedia}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${social.color}`}
                  >
                    <social.icon className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-sm opacity-80">{social.description[lang]}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.contact.partnerships}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.contact.partnershipsDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <partner.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{partner.name[lang]}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Accredited Certifications Note */}
            <div className="mt-12 bg-secondary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="font-semibold text-foreground mb-3">
                {lang === "sq" ? "Çertifikime të Akredituara" : "Accredited Certifications"}
              </h3>
              <p className="text-muted-foreground">
                {lang === "sq"
                  ? "Përmes bashkëpunimeve me institucione të tjera që ofrojnë trajnim profesional për mësuesit, do të sigurohen çertifikime të akredituara për pjesëmarrësit në trajnime të veçanta."
                  : "Through partnerships with other institutions that offer professional training for teachers, accredited certifications will be provided for participants in special trainings."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

}
