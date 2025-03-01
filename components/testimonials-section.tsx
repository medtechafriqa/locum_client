import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Emergency Physician",
      content:
        "This platform has transformed how I find locum shifts. The AI matching is incredibly accurate, and I've found opportunities that perfectly match my skills and availability.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "HR Director, Memorial Hospital",
      content:
        "We've reduced our staffing gaps by 70% since using this platform. The verification system gives us confidence in the qualifications of every professional we hire.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Dr. James Wilson",
      role: "Anesthesiologist",
      content:
        "The one-click application feature saves me so much time. I can focus on patient care instead of paperwork, and the shift management tools are intuitive and helpful.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Lisa Rodriguez",
      role: "Staffing Manager, City Medical Center",
      content:
        "The automated matching algorithm has been a game-changer for our hospital. We find qualified professionals quickly, and the communication tools make coordination seamless.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the hospitals and medical professionals who use our platform every day.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

