"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AdminLayout } from "@/components/admin-layout"
import { Search, Plus, Edit, Trash2, Download } from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      rollNo: "CS001",
      email: "alice@student.edu",
      department: "Computer Science",
      year: "2nd Year",
      attendance: 87.5,
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      rollNo: "CS002",
      email: "bob@student.edu",
      department: "Computer Science",
      year: "3rd Year",
      attendance: 92.3,
      status: "Active",
    },
    {
      id: 3,
      name: "Charlie Brown",
      rollNo: "CS003",
      email: "charlie@student.edu",
      department: "Computer Science",
      year: "1st Year",
      attendance: 78.9,
      status: "Active",
    },
    {
      id: 4,
      name: "Diana Prince",
      rollNo: "CS004",
      email: "diana@student.edu",
      department: "Computer Science",
      year: "4th Year",
      attendance: 95.2,
      status: "Active",
    },
    {
      id: 5,
      name: "Edward Norton",
      rollNo: "CS005",
      email: "edward@student.edu",
      department: "Computer Science",
      year: "2nd Year",
      attendance: 68.7,
      status: "Warning",
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Student Management</h1>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Link href="/admin/students/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>Manage student records and information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{student.rollNo}</TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{student.year}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`font-medium ${student.attendance >= 75 ? "text-green-600" : "text-red-600"}`}
                          >
                            {student.attendance}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={student.status === "Active" ? "default" : "destructive"}>
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
