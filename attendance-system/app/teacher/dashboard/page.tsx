"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { TeacherLayout } from "@/components/teacher-layout"

export default function TeacherDashboard() {
  const [todayClasses] = useState([
    { id: 1, name: "Computer Science 101", time: "09:00 AM", students: 45, room: "Room 204", status: "upcoming" },
    { id: 2, name: "Data Structures", time: "11:00 AM", students: 38, room: "Room 301", status: "completed" },
    { id: 3, name: "Algorithms", time: "02:00 PM", students: 42, room: "Room 204", status: "upcoming" },
    { id: 4, name: "Database Systems", time: "04:00 PM", students: 35, room: "Room 105", status: "upcoming" },
  ])

  const [stats] = useState({
    totalClasses: 6,
    totalStudents: 180,
    todayAttendance: 89.2,
    pendingTasks: 3,
  })

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <Link href="/teacher/attendance/mark">
            <Button>Mark Attendance</Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Classes</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalClasses}</div>
              <p className="text-xs text-muted-foreground">Active this semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">Across all classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayAttendance}%</div>
              <p className="text-xs text-muted-foreground">Average across classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingTasks}</div>
              <p className="text-xs text-muted-foreground">Attendance to mark</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayClasses.map((classItem) => (
                <div key={classItem.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-medium">{classItem.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {classItem.time} • {classItem.room} • {classItem.students} students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={classItem.status === "completed" ? "default" : "secondary"}>
                      {classItem.status === "completed" ? "Completed" : "Upcoming"}
                    </Badge>
                    {classItem.status === "upcoming" && (
                      <Link href={`/teacher/attendance/mark?class=${classItem.id}`}>
                        <Button size="sm">Mark Attendance</Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TeacherLayout>
  )
}
