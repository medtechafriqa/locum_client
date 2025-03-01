import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your medical staffing?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of hospitals and medical professionals already using our platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register/hospital">
                <Button size="lg" className="w-full sm:w-auto">
                  Register as Hospital
                </Button>
              </Link>
              <Link href="/register/medic">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Register as Medical Professional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

