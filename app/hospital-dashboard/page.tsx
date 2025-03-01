"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HospitalStats } from "@/components/hospital-stats"
import { RecentApplications } from "@/components/recent-applications"
import { UpcomingShifts } from "@/components/upcoming-shifts"
import { JobPostingsList } from "@/components/job-postings-list"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

export default function HospitalDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== "hospital")) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Hospital Dashboard" text="Manage your hospital profile, job postings, and applicants.">
        <Link href="/post-job">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </Link>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <HospitalStats />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jobs">Job Postings</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="shifts">Upcoming Shifts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Review and manage recent applications to your job postings.</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentApplications />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Shifts</CardTitle>
                <CardDescription>View your upcoming scheduled shifts.</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingShifts />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Job Postings</CardTitle>
              <CardDescription>Manage your current job postings.</CardDescription>
            </CardHeader>
            <CardContent>
              <JobPostingsList limit={5} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>All Job Postings</CardTitle>
                <CardDescription>Manage all your job postings.</CardDescription>
              </div>
              <Link href="/post-job">
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Job
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <JobPostingsList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>Review and manage all applications to your job postings.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentApplications extended />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shifts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Upcoming Shifts</CardTitle>
              <CardDescription>View and manage all upcoming scheduled shifts.</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingShifts extended />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

