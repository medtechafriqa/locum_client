import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, MapPin, Calendar, Clock, DollarSign, Star } from "lucide-react"
import Link from "next/link"

interface RecommendedJobsProps {
  limit?: number
}

export function RecommendedJobs({ limit }: RecommendedJobsProps) {
  const jobs = [
    {
      id: "job-1",
      title: "Emergency Physician - Weekend Shifts",
      hospital: {
        name: "Memorial Hospital",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
      },
      location: "New York, NY",
      dates: "Jun 24-25, 2023",
      hours: "12-hour shifts",
      rate: "$200/hr",
      matchScore: 95,
    },
    {
      id: "job-2",
      title: "Anesthesiologist - Surgical Department",
      hospital: {
        name: "City Medical Center",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.6,
      },
      location: "Boston, MA",
      dates: "Jun 26-30, 2023",
      hours: "8-hour shifts",
      rate: "$220/hr",
      matchScore: 92,
    },
    {
      id: "job-3",
      title: "Pediatrician - Urgent Care",
      hospital: {
        name: "Children's Hospital",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
      },
      location: "Chicago, IL",
      dates: "Jul 1-5, 2023",
      hours: "8-hour shifts",
      rate: "$180/hr",
      matchScore: 90,
    },
    {
      id: "job-4",
      title: "Cardiologist - Consultation",
      hospital: {
        name: "Heart Institute",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
      },
      location: "Los Angeles, CA",
      dates: "Jul 10-14, 2023",
      hours: "8-hour shifts",
      rate: "$250/hr",
      matchScore: 88,
    },
    {
      id: "job-5",
      title: "Neurologist - Outpatient Clinic",
      hospital: {
        name: "Neuroscience Center",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.5,
      },
      location: "Seattle, WA",
      dates: "Jul 17-21, 2023",
      hours: "8-hour shifts",
      rate: "$230/hr",
      matchScore: 85,
    },
    {
      id: "job-6",
      title: "General Practitioner - Primary Care",
      hospital: {
        name: "Community Health Center",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.4,
      },
      location: "Denver, CO",
      dates: "Jul 24-28, 2023",
      hours: "8-hour shifts",
      rate: "$170/hr",
      matchScore: 82,
    },
    {
      id: "job-7",
      title: "Psychiatrist - Mental Health Department",
      hospital: {
        name: "Behavioral Health Institute",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.6,
      },
      location: "Atlanta, GA",
      dates: "Aug 1-5, 2023",
      hours: "8-hour shifts",
      rate: "$210/hr",
      matchScore: 80,
    },
  ]

  const displayJobs = limit ? jobs.slice(0, limit) : jobs

  const getMatchScoreBadge = (score: number) => {
    let variant = "outline"
    if (score >= 90) variant = "success"
    else if (score >= 80) variant = "secondary"

    return (
      <Badge variant={variant as any} className="ml-auto">
        {score}% Match
      </Badge>
    )
  }

  return (
    <div className="space-y-4">
      {displayJobs.map((job) => (
        <div key={job.id} className="rounded-md border p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={job.hospital.avatar} alt={job.hospital.name} />
                <AvatarFallback>{job.hospital.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{job.title}</h3>
                  {getMatchScoreBadge(job.matchScore)}
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Building className="h-3 w-3" />
                    <span>{job.hospital.name}</span>
                    <div className="flex items-center ml-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="ml-0.5">{job.hospital.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{job.dates}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{job.hours}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <DollarSign className="h-3 w-3" />
                    <span>{job.rate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Link href={`/jobs/${job.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href={`/apply/${job.id}`}>
              <Button size="sm">Apply Now</Button>
            </Link>
          </div>
        </div>
      ))}

      {limit && jobs.length > limit && (
        <div className="text-center">
          <Link href="/find-jobs">
            <Button variant="link">View all recommended jobs</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

