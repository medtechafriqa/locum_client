"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { FileUploader } from "@/components/file-uploader"

export default function HospitalRegistration() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Registration submitted",
      description: "Your hospital registration has been submitted for verification.",
    })

    setLoading(false)
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8 space-y-4 text-center">
        <h1 className="text-3xl font-bold">Hospital Registration</h1>
        <p className="text-muted-foreground">
          Create an account for your hospital to post jobs and find qualified medical professionals.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hospital Information</CardTitle>
          <CardDescription>Please provide your hospital details for registration.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic" disabled={step !== 1}>
                  Basic Info
                </TabsTrigger>
                <TabsTrigger value="contact" disabled={step !== 2}>
                  Contact Details
                </TabsTrigger>
                <TabsTrigger value="verification" disabled={step !== 3}>
                  Verification
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <Input id="hospitalName" placeholder="Enter hospital name" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="hospitalType">Hospital Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hospital type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public Hospital</SelectItem>
                        <SelectItem value="private">Private Hospital</SelectItem>
                        <SelectItem value="clinic">Clinic</SelectItem>
                        <SelectItem value="speciality">Specialty Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Hospital Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of your hospital"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full">
                  Continue to Contact Details
                </Button>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Street address" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" placeholder="State/Province" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zipCode">Zip/Postal Code</Label>
                      <Input id="zipCode" placeholder="Zip/Postal Code" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Phone number" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Email address" required />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="w-full">
                    Continue to Verification
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="verification" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="licenseNumber">Hospital License Number</Label>
                    <Input id="licenseNumber" placeholder="License number" required />
                  </div>

                  <div className="grid gap-2">
                    <Label>Upload Business License</Label>
                    <FileUploader
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={5}
                      label="Drag and drop your business license or click to browse"
                    />
                    <p className="text-xs text-muted-foreground">Accepted file types: PDF, JPG, PNG. Max size: 5MB</p>
                  </div>

                  <div className="grid gap-2">
                    <Label>Upload Tax ID Document</Label>
                    <FileUploader
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={5}
                      label="Drag and drop your tax ID document or click to browse"
                    />
                    <p className="text-xs text-muted-foreground">Accepted file types: PDF, JPG, PNG. Max size: 5MB</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-full">
                    Back
                  </Button>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Submitting..." : "Complete Registration"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            By registering, you agree to our{" "}
            <a href="/terms" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

