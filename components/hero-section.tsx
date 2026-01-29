import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Rrjeti i Mësuesve AFP - Shqipëri 2026
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            INVEST Teachers Hub
            <span className="block text-primary">Albania</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Bashkësi aktive dhe bashkëpunuese mësuesish të arsimit dhe formimit profesional, ku ndajmë përvojat, mësojmë
            nga njëri-tjetri dhe mbështesim zhvillimin e përbashkët profesional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a href="#pjesemarrja">
                Bëhu Pjesë e Rrjetit
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#misioni">Mëso më Shumë</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-xl bg-card border border-border">
              <Users className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">5+</span>
              <span className="text-sm text-muted-foreground">Grupe Tematike</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card border border-border">
              <BookOpen className="w-8 h-8 text-secondary mb-2" />
              <span className="text-2xl font-bold text-foreground">12+</span>
              <span className="text-sm text-muted-foreground">Aktivitete/Vit</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card border border-border">
              <Globe className="w-8 h-8 text-accent mb-2" />
              <span className="text-2xl font-bold text-foreground">Online</span>
              <span className="text-sm text-muted-foreground">& Fizike</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
