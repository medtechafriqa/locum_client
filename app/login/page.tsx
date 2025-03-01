"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent, role: "hospital" | "medic") => {
    e.preventDefault()
    setLoading(true)

    try {
      // Add role hint to email for mock authentication
      const emailWithRole =
        role === "hospital"
          ? email.includes("hospital")
            ? email
            : `${email.split("@")[0]}.hospital@example.com`
          : email.includes("medic")
            ? email
            : `${email.split("@")[0]}.medic@example.com`

      await login(emailWithRole, password)

      toast({
        title: "Login successful",
        description: `Welcome back to MediMatch!`,
      })

      // Redirect based on role
      if (role === "hospital") {
        router.push("/hospital-dashboard")
      } else {
        router.push("/medic-dashboard")
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-10">
      <div className="w-full max-w-md">
        <Tabs defaultValue="hospital" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hospital">Hospital</TabsTrigger>
            <TabsTrigger value="medic">Medical Professional</TabsTrigger>
          </TabsList>

          <TabsContent value="hospital">
            <Card>
              <CardHeader>
                <CardTitle>Hospital Login</CardTitle>
                <CardDescription>Enter your credentials to access your hospital dashboard.</CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "hospital")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospital-email">Email</Label>
                    <Input
                      id="hospital-email"
                      type="email"
                      placeholder="hospital@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hospital-password">Password</Label>
                      <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="hospital-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/register/hospital" className="text-primary hover:underline">
                      Register
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="medic">
            <Card>
              <CardHeader>
                <CardTitle>Medical Professional Login</CardTitle>
                <CardDescription>Enter your credentials to access your professional dashboard.</CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "medic")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="medic-email">Email</Label>
                    <Input
                      id="medic-email"
                      type="email"
                      placeholder="doctor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="medic-password">Password</Label>
                      <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="medic-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/register/medic" className="text-primary hover:underline">
                      Register
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

