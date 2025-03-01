import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, Calendar, Star } from "lucide-react"

export function MedicStats() {
  const stats = [
    {
      title: "Applications",
      value: "8",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
      description: "Active applications",
    },
    {
      title: "Shifts Completed",
      value: "24",
      icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
      description: "Last 3 months",
    },
    {
      title: "Upcoming Shifts",
      value: "5",
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
      description: "Next 30 days",
    },
    {
      title: "Average Rating",
      value: "4.9",
      icon: <Star className="h-4 w-4 text-muted-foreground" />,
      description: "From 18 reviews",
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

