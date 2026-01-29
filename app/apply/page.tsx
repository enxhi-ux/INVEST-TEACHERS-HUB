"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { UserPlus, CheckCircle, Send, Loader2, Shield } from "lucide-react"
import { type Language, translations } from "@/components/language-switcher"

const institutions = [
  "Shkolla e Mesme Profesionale Teknike (Tiranë)",
  "Shkolla e Mesme Profesionale Ndërtim (Tiranë)",
  "Shkolla e Mesme Profesionale Hoteleri-Turizëm (Tiranë)",
  "Shkolla e Mesme Profesionale Ekonomike (Tiranë)",
  "Shkolla e Mesme Profesionale (Durrës)",
  "Shkolla e Mesme Profesionale (Vlorë)",
  "Shkolla e Mesme Profesionale (Shkodër)",
  "Shkolla e Mesme Profesionale (Elbasan)",
  "Shkolla e Mesme Profesionale (Korçë)",
  "Shkolla e Mesme Profesionale (Fier)",
  "Shkolla e Mesme Profesionale (Berat)",
  "Shkolla e Mesme Profesionale (Gjirokastër)",
  "Shkolla e Mesme Profesionale (Kukës)",
  "Shkolla e Mesme Profesionale (Lezhë)",
  "Qendër Formimi Profesional (VTC)",
  "Institucion Privat AFP",
  "Tjetër",
]

const directions = [
  { id: "it", label: { sq: "IT & Digjitalizim", en: "IT & Digitalization" } },
  { id: "construction", label: { sq: "Ndërtim & Energji", en: "Construction & Energy" } },
  { id: "tourism", label: { sq: "Turizëm & Mikpritje", en: "Tourism & Hospitality" } },
  { id: "business", label: { sq: "Biznes & Shërbime", en: "Business & Services" } },
  { id: "health", label: { sq: "Shëndet & Kujdes Social", en: "Health & Social Care" } },
]

const experienceRanges = [
  { value: "1-5", label: { sq: "1-5 vite", en: "1-5 years" } },
  { value: "6-10", label: { sq: "6-10 vite", en: "6-10 years" } },
  { value: "11-15", label: { sq: "11-15 vite", en: "11-15 years" } },
  { value: "16-20", label: { sq: "16-20 vite", en: "16-20 years" } },
  { value: "20+", label: { sq: "Mbi 20 vite", en: "Over 20 years" } },
]

const cities = [
  "Tiranë", "Durrës", "Vlorë", "Shkodër", "Elbasan",
  "Korçë", "Fier", "Berat", "Gjirokastër", "Kukës",
  "Lezhë", "Dibër", "Kavajë", "Pogradec", "Lushnjë",
]

export default function ApplyPage() {
  const [lang, setLang] = useState<Language>("sq")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDirections, setSelectedDirections] = useState<string[]>([])
  const [contribution, setContribution] = useState<string>("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const t = translations[lang]

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const role = formData.get("role") as string
    const institution = formData.get("institution") as string
    const city = formData.get("city") as string

    if (!firstName || firstName.length < 2) {
      newErrors.firstName = t.validation.firstNameRequired
    }
    if (!lastName || lastName.length < 2) {
      newErrors.lastName = t.validation.lastNameRequired
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.validation.emailInvalid
    }
    if (!phone || phone.length < 9) {
      newErrors.phone = t.validation.phoneInvalid
    }
    if (!role) {
      newErrors.role = t.validation.roleRequired
    }
    if (!institution) {
      newErrors.institution = t.validation.institutionRequired
    }
    if (!city) {
      newErrors.city = t.validation.cityRequired
    }
    if (selectedDirections.length === 0) {
      newErrors.directions = t.validation.directionsRequired
    }
    if (!contribution) {
      newErrors.contribution = t.validation.contributionRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission - in WordPress this would go to a PHP endpoint or REST API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const toggleDirection = (directionId: string) => {
    setSelectedDirections((prev) =>
      prev.includes(directionId) ? prev.filter((id) => id !== directionId) : [...prev, directionId]
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header lang={lang} onLanguageChange={setLang} />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">{t.apply.successTitle}</h1>
            <p className="text-muted-foreground mb-8">{t.apply.successMsg}</p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="bg-transparent">
              {t.apply.anotherApplication}
            </Button>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    )
  }

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
                <span className="text-sm font-medium text-primary">{lang === "sq" ? "Aplikim" : "Application"}</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.apply.title}</h1>
              <p className="text-lg text-muted-foreground">{t.apply.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle>{t.apply.formTitle}</CardTitle>
                <CardDescription>{t.apply.formDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">{t.apply.personalInfo}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.apply.firstName} *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder={lang === "sq" ? "Emri juaj" : "Your first name"}
                          className={errors.firstName ? "border-destructive" : ""}
                        />
                        {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.apply.lastName} *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder={lang === "sq" ? "Mbiemri juaj" : "Your last name"}
                          className={errors.lastName ? "border-destructive" : ""}
                        />
                        {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.apply.emailLabel} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="email@shembull.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.apply.phoneLabel} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+355 69 XXX XXXX"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">{t.apply.professionalInfo}</h3>
                    <div className="space-y-2">
                      <Label htmlFor="role">{t.apply.role} *</Label>
                      <Select name="role">
                        <SelectTrigger className={errors.role ? "border-destructive" : ""}>
                          <SelectValue placeholder={lang === "sq" ? "Zgjidhni rolin tuaj" : "Select your role"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teacher">{lang === "sq" ? "Mësues AFP" : "VET Teacher"}</SelectItem>
                          <SelectItem value="trainer">{lang === "sq" ? "Trajnues Profesional" : "Professional Trainer"}</SelectItem>
                          <SelectItem value="expert">{lang === "sq" ? "Ekspert Industrie" : "Industry Expert"}</SelectItem>
                          <SelectItem value="director">{lang === "sq" ? "Drejtues Institucioni AFP" : "VET Institution Director"}</SelectItem>
                          <SelectItem value="other">{lang === "sq" ? "Tjetër" : "Other"}</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">{t.apply.institution} *</Label>
                      <Select name="institution">
                        <SelectTrigger className={errors.institution ? "border-destructive" : ""}>
                          <SelectValue placeholder={lang === "sq" ? "Zgjidhni institucionin" : "Select institution"} />
                        </SelectTrigger>
                        <SelectContent>
                          {institutions.map((inst) => (
                            <SelectItem key={inst} value={inst}>
                              {inst}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.institution && <p className="text-sm text-destructive">{errors.institution}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">{t.apply.city} *</Label>
                        <Select name="city">
                          <SelectTrigger className={errors.city ? "border-destructive" : ""}>
                            <SelectValue placeholder={lang === "sq" ? "Zgjidhni qytetin" : "Select city"} />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city.toLowerCase()}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">{t.apply.experience}</Label>
                        <Select name="experience">
                          <SelectTrigger>
                            <SelectValue placeholder={lang === "sq" ? "Zgjidhni" : "Select"} />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label[lang]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contribution Type */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">{t.apply.contribution} *</h3>
                    <RadioGroup value={contribution} onValueChange={setContribution} className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="member" id="member" />
                        <Label htmlFor="member" className="cursor-pointer font-normal flex-1">
                          {t.apply.contributionMember}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="coordinator" id="coordinator" />
                        <Label htmlFor="coordinator" className="cursor-pointer font-normal flex-1">
                          {t.apply.contributionCoord}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="trainer" id="trainer-role" />
                        <Label htmlFor="trainer-role" className="cursor-pointer font-normal flex-1">
                          {t.apply.contributionTrainer}
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.contribution && <p className="text-sm text-destructive">{errors.contribution}</p>}
                  </div>

                  {/* Directions */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">{t.apply.directions} *</h3>
                    <p className="text-sm text-muted-foreground">{t.apply.directionsDesc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {directions.map((direction) => (
                        <button
                          type="button"
                          key={direction.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors text-left ${
                            selectedDirections.includes(direction.id)
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => toggleDirection(direction.id)}
                        >
                          <Checkbox
                            id={direction.id}
                            checked={selectedDirections.includes(direction.id)}
                            onCheckedChange={() => toggleDirection(direction.id)}
                          />
                          <Label htmlFor={direction.id} className="cursor-pointer font-normal">
                            {direction.label[lang]}
                          </Label>
                        </button>
                      ))}
                    </div>
                    {errors.directions && <p className="text-sm text-destructive">{errors.directions}</p>}
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation">{t.apply.motivation}</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      placeholder={lang === "sq" ? "Shkruani shkurtimisht motivimin tuaj..." : "Briefly describe your motivation..."}
                      rows={4}
                    />
                  </div>

                  {/* Consent & Data Rights */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                      <Checkbox id="consent" name="consent" required />
                      <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
                        {t.apply.consent} *
                      </Label>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{t.apply.dataRights}</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        {t.apply.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t.apply.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
