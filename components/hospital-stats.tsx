import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Calendar, Star } from "lucide-react"

export function HospitalStats() {
  const stats = [
    {
      title: "Total Applications",
      value: "42",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      description: "This month",
    },
    {
      title: "Active Jobs",
      value: "8",
      icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
      description: "Currently posted",
    },
    {
      title: "Upcoming Shifts",
      value: "12",
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
      description: "Next 7 days",
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: <Star className="h-4 w-4 text-muted-foreground" />,
      description: "From 24 reviews",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

