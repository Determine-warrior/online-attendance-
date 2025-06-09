import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Smart Attendance Management</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your educational institution's attendance tracking with our comprehensive management system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle>Student Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">View attendance records and academic progress</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-green-600" />
              <CardTitle>Teacher Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Mark attendance and manage classes efficiently</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="h-12 w-12 mx-auto text-purple-600" />
              <CardTitle>Class Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Organize courses, schedules, and student enrollment</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-12 w-12 mx-auto text-orange-600" />
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Generate reports and track attendance trends</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-x-4">
          <Link href="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
