"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TeacherLayout } from "@/components/teacher-layout"
import { Search, Save, Users } from "lucide-react"

export default function MarkAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [attendance, setAttendance] = useState<Record<string, boolean>>({})

  const classes = [
    { id: "cs101", name: "Computer Science 101", time: "09:00 AM", room: "Room 204" },
    { id: "ds201", name: "Data Structures", time: "11:00 AM", room: "Room 301" },
    { id: "algo301", name: "Algorithms", time: "02:00 PM", room: "Room 204" },
  ]

  const students = [
    { id: "1", name: "Alice Johnson", rollNo: "CS001", email: "alice@student.edu" },
    { id: "2", name: "Bob Smith", rollNo: "CS002", email: "bob@student.edu" },
    { id: "3", name: "Charlie Brown", rollNo: "CS003", email: "charlie@student.edu" },
    { id: "4", name: "Diana Prince", rollNo: "CS004", email: "diana@student.edu" },
    { id: "5", name: "Edward Norton", rollNo: "CS005", email: "edward@student.edu" },
    { id: "6", name: "Fiona Green", rollNo: "CS006", email: "fiona@student.edu" },
    { id: "7", name: "George Wilson", rollNo: "CS007", email: "george@student.edu" },
    { id: "8", name: "Hannah Davis", rollNo: "CS008", email: "hannah@student.edu" },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAttendanceChange = (studentId: string, present: boolean) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: present,
    }))
  }

  const handleMarkAll = (present: boolean) => {
    const newAttendance: Record<string, boolean> = {}
    filteredStudents.forEach((student) => {
      newAttendance[student.id] = present
    })
    setAttendance(newAttendance)
  }

  const handleSaveAttendance = () => {
    // In a real app, this would save to the database
    const presentCount = Object.values(attendance).filter(Boolean).length
    const totalCount = Object.keys(attendance).length
    alert(`Attendance saved! ${presentCount}/${totalCount} students present`)
  }

  const presentCount = Object.values(attendance).filter(Boolean).length
  const totalStudents = filteredStudents.length

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mark Attendance</h1>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-lg px-3 py-1">
              <Users className="h-4 w-4 mr-1" />
              {presentCount}/{totalStudents}
            </Badge>
            <Button onClick={handleSaveAttendance} disabled={!selectedClass}>
              <Save className="h-4 w-4 mr-2" />
              Save Attendance
            </Button>
          </div>
        </div>

        {/* Class Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Class</CardTitle>
            <CardDescription>Choose the class for which you want to mark attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls.id} value={cls.id}>
                    {cls.name} - {cls.time} ({cls.room})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {selectedClass && (
          <Card>
            <CardHeader>
              <CardTitle>Student Attendance</CardTitle>
              <CardDescription>Mark attendance for each student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search and Bulk Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="search">Search Students</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search by name or roll number..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleMarkAll(true)}>
                    Mark All Present
                  </Button>
                  <Button variant="outline" onClick={() => handleMarkAll(false)}>
                    Mark All Absent
                  </Button>
                </div>
              </div>

              {/* Student List */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={student.id}
                        checked={attendance[student.id] || false}
                        onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                      />
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.rollNo} • {student.email}
                        </p>
                      </div>
                    </div>
                    <Badge variant={attendance[student.id] ? "default" : "secondary"}>
                      {attendance[student.id] ? "Present" : "Absent"}
                    </Badge>
                  </div>
                ))}
              </div>

              {filteredStudents.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No students found matching your search.</div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </TeacherLayout>
  )
}
