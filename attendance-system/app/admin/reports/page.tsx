"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AdminLayout } from "@/components/admin-layout"
import { BarChart3, Download, Calendar, TrendingUp, Users } from "lucide-react"

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("this-month")
  const [selectedClass, setSelectedClass] = useState("all")

  const attendanceStats = [
    { class: "Computer Science 101", students: 45, avgAttendance: 87.5, trend: "+2.3%" },
    { class: "Data Structures", students: 38, avgAttendance: 83.2, trend: "-1.2%" },
    { class: "Algorithms", students: 42, avgAttendance: 78.9, trend: "+0.8%" },
    { class: "Database Systems", students: 35, avgAttendance: 91.4, trend: "+3.1%" },
    { class: "Software Engineering", students: 30, avgAttendance: 85.7, trend: "+1.5%" },
  ]

  const lowAttendanceStudents = [
    { name: "Edward Norton", rollNo: "CS005", class: "Computer Science 101", attendance: 68.7 },
    { name: "Charlie Brown", rollNo: "CS003", class: "Algorithms", attendance: 72.1 },
    { name: "George Wilson", rollNo: "CS007", class: "Data Structures", attendance: 74.3 },
  ]

  const monthlyTrends = [
    { month: "September", attendance: 89.2 },
    { month: "October", attendance: 87.8 },
    { month: "November", attendance: 85.4 },
    { month: "December", attendance: 88.1 },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <div className="flex space-x-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-semester">This Semester</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86.2%</div>
              <p className="text-xs text-muted-foreground">+1.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Sessions this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Below 75% attendance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Performing Class</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91.4%</div>
              <p className="text-xs text-muted-foreground">Database Systems</p>
            </CardContent>
          </Card>
        </div>

        {/* Class-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Class-wise Attendance Statistics</CardTitle>
            <CardDescription>Attendance performance across all classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{stat.class}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{stat.avgAttendance}%</span>
                        <Badge variant={stat.trend.startsWith("+") ? "default" : "secondary"}>{stat.trend}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>{stat.students} students enrolled</span>
                    </div>
                    <Progress value={stat.avgAttendance} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Low Attendance Students */}
          <Card>
            <CardHeader>
              <CardTitle>Students Requiring Attention</CardTitle>
              <CardDescription>Students with attendance below 75%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowAttendanceStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.rollNo} • {student.class}
                      </p>
                    </div>
                    <Badge variant="destructive">{student.attendance}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Attendance Trends</CardTitle>
              <CardDescription>Attendance patterns over the semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{trend.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32">
                        <Progress value={trend.attendance} className="h-2" />
                      </div>
                      <span className="font-medium w-12 text-right">{trend.attendance}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
