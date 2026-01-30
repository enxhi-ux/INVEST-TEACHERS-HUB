import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Youtube, Instagram, Mail, MapPin, ExternalLink } from "lucide-react"
import { type Language, translations } from "./language-switcher"

interface FooterProps {
  lang: Language
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang]

  const navigation = {
    main: [
      { name: t.nav.about, href: "/about" },
      { name: t.nav.objectives, href: "/objectives" },
      { name: t.nav.directions, href: "/directions" },
      { name: t.nav.calendar, href: "/calendar" },
      { name: t.nav.membership, href: "/membership" },
      { name: t.nav.gallery, href: "/gallery" },
      { name: t.nav.blog, href: "/blog" },
      { name: t.nav.contact, href: "/contact" },
    ],
    social: [
      { name: "Facebook", href: "https://www.facebook.com/albanianskillsofficial/", icon: Facebook },
      { name: "LinkedIn", href: "https://al.linkedin.com/company/albanianskills-national-association-for-skills-competitions-nasc", icon: Linkedin },
      { name: "YouTube", href: "https://www.youtube.com/@albanianskillsofficial2012/videos", icon: Youtube },
      { name: "Instagram", href: "https://www.instagram.com/albanianskills/?hl=en", icon: Instagram },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="INVEST Teachers Hub Logo"
                width={180}
                height={48}
                className="h-12 w-auto bg-background rounded-lg p-1"
              />
            </Link>
            <p className="text-sm opacity-80 max-w-md mb-4">{t.footer.description}</p>
            <a 
              href="https://www.albanianskills.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              www.albanianskills.org
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="flex gap-4 mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@albanianskills.org" className="hover:opacity-100 transition-opacity">
                  info@albanianskills.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Ish Fusha e Aviacionit, Rruga Andrea Kushi, Kompleksi Garden Turdiu, Kulla E, Apt 1/4, Tirana, Albania
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60">{t.footer.copyright}</p>
            <p className="text-sm opacity-60">{t.footer.supportedBy}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
