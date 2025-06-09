"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, BookOpen, TrendingUp, Clock } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function StudentDashboard() {
  const [attendanceData] = useState([
    { subject: "Computer Science 101", attended: 28, total: 32, percentage: 87.5 },
    { subject: "Data Structures", attended: 25, total: 30, percentage: 83.3 },
    { subject: "Algorithms", attended: 22, total: 28, percentage: 78.6 },
    { subject: "Database Systems", attended: 30, total: 32, percentage: 93.8 },
  ])

  const [upcomingClasses] = useState([
    { id: 1, name: "Computer Science 101", time: "09:00 AM", room: "Room 204", date: "Today" },
    { id: 2, name: "Algorithms", time: "02:00 PM", room: "Room 204", date: "Today" },
    { id: 3, name: "Database Systems", time: "10:00 AM", room: "Room 105", date: "Tomorrow" },
  ])

  const overallAttendance = attendanceData.reduce((acc, curr) => acc + curr.percentage, 0) / attendanceData.length

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <Badge variant={overallAttendance >= 75 ? "default" : "destructive"} className="text-lg px-3 py-1">
            {overallAttendance.toFixed(1)}% Overall
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.length}</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Attended 16 classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Subject</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93.8%</div>
              <p className="text-xs text-muted-foreground">Database Systems</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Class</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2:30</div>
              <p className="text-xs text-muted-foreground">Hours remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Your attendance record for each subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {attendanceData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{subject.subject}</h3>
                    <div className="text-right">
                      <span className="font-medium">{subject.percentage.toFixed(1)}%</span>
                      <p className="text-sm text-muted-foreground">
                        {subject.attended}/{subject.total} classes
                      </p>
                    </div>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your next scheduled classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{classItem.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {classItem.time} • {classItem.room}
                    </p>
                  </div>
                  <Badge variant="outline">{classItem.date}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
