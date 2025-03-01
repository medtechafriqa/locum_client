"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MedicStats } from "@/components/medic-stats"
import { MedicApplications } from "@/components/medic-applications"
import { MedicUpcomingShifts } from "@/components/medic-upcoming-shifts"
import { RecommendedJobs } from "@/components/recommended-jobs"
import Link from "next/link"
import { Search } from "lucide-react"

export default function MedicDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== "medic")) {
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
      <DashboardHeader
        heading="Medical Professional Dashboard"
        text="Manage your profile, applications, and upcoming shifts."
      >
        <Link href="/find-jobs">
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Find Jobs
          </Button>
        </Link>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MedicStats />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="shifts">Upcoming Shifts</TabsTrigger>
          <TabsTrigger value="recommendations">Recommended Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Track the status of your recent job applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <MedicApplications />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Shifts</CardTitle>
                <CardDescription>View your upcoming scheduled shifts.</CardDescription>
              </CardHeader>
              <CardContent>
                <MedicUpcomingShifts />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Jobs</CardTitle>
              <CardDescription>Jobs that match your skills and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecommendedJobs limit={5} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>Track all your job applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <MedicApplications extended />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shifts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Upcoming Shifts</CardTitle>
              <CardDescription>View and manage all your upcoming shifts.</CardDescription>
            </CardHeader>
            <CardContent>
              <MedicUpcomingShifts extended />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Recommended Jobs</CardTitle>
              <CardDescription>Browse all jobs that match your profile.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecommendedJobs />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

