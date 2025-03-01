import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connecting Hospitals with Medical Professionals
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our platform streamlines the process of finding and booking qualified medical locums, ensuring hospitals
                are staffed and professionals find the right opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register/hospital">
                <Button size="lg" className="w-full sm:w-auto">
                  For Hospitals
                </Button>
              </Link>
              <Link href="/register/medic">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  For Medical Professionals
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Medical professionals"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/placeholder.svg?height=550&width=800"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

