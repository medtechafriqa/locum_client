import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash, Copy, Eye, Users } from "lucide-react"
import Link from "next/link"

interface JobPostingsListProps {
  limit?: number
}

export function JobPostingsList({ limit }: JobPostingsListProps) {
  const jobs = [
    {
      id: "job-1",
      title: "Emergency Physician - Weekend Shifts",
      specialty: "Emergency Medicine",
      location: "Emergency Department",
      rate: "$200/hr",
      date: "2023-06-10",
      status: "active",
      applications: 12,
    },
    {
      id: "job-2",
      title: "Anesthesiologist - Surgical Department",
      specialty: "Anesthesiology",
      location: "Surgical Wing",
      rate: "$220/hr",
      date: "2023-06-08",
      status: "active",
      applications: 8,
    },
    {
      id: "job-3",
      title: "Pediatrician - Urgent Care",
      specialty: "Pediatrics",
      location: "Pediatric Wing",
      rate: "$180/hr",
      date: "2023-06-05",
      status: "active",
      applications: 5,
    },
    {
      id: "job-4",
      title: "Cardiologist - Consultation",
      specialty: "Cardiology",
      location: "Cardiology Department",
      rate: "$250/hr",
      date: "2023-06-01",
      status: "filled",
      applications: 10,
    },
    {
      id: "job-5",
      title: "Neurologist - Outpatient Clinic",
      specialty: "Neurology",
      location: "Neurology Department",
      rate: "$230/hr",
      date: "2023-05-28",
      status: "expired",
      applications: 3,
    },
    {
      id: "job-6",
      title: "General Practitioner - Primary Care",
      specialty: "Family Medicine",
      location: "Primary Care Clinic",
      rate: "$170/hr",
      date: "2023-05-25",
      status: "draft",
      applications: 0,
    },
    {
      id: "job-7",
      title: "Psychiatrist - Mental Health Department",
      specialty: "Psychiatry",
      location: "Mental Health Wing",
      rate: "$210/hr",
      date: "2023-05-20",
      status: "active",
      applications: 6,
    },
  ]

  const displayJobs = limit ? jobs.slice(0, limit) : jobs

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="success">Active</Badge>
      case "filled":
        return <Badge variant="secondary">Filled</Badge>
      case "expired":
        return <Badge variant="destructive">Expired</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-6 gap-4 p-4 font-medium">
          <div className="col-span-2">Job Title</div>
          <div className="hidden md:block">Rate</div>
          <div className="hidden md:block">Applications</div>
          <div>Status</div>
          <div className="text-right">Actions</div>
        </div>
        {displayJobs.map((job) => (
          <div key={job.id} className="grid grid-cols-6 gap-4 border-t p-4">
            <div className="col-span-2">
              <div className="font-medium">{job.title}</div>
              <div className="text-sm text-muted-foreground">{job.specialty}</div>
            </div>
            <div className="hidden md:block">{job.rate}</div>
            <div className="hidden md:block">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{job.applications}</span>
              </div>
            </div>
            <div>{getStatusBadge(job.status)}</div>
            <div className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={`/jobs/${job.id}`} className="flex w-full items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/edit-job/${job.id}`} className="flex w-full items-center">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center">
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <div className="flex items-center">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>

      {limit && jobs.length > limit && (
        <div className="text-center">
          <Link href="/jobs">
            <Button variant="link">View all job postings</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

