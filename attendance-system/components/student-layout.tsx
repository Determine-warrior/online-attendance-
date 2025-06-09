"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, Calendar, BarChart3, BookOpen, Settings, Menu, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface StudentLayoutProps {
  children: React.ReactNode
}

export function StudentLayout({ children }: StudentLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "My Courses", href: "/student/courses", icon: BookOpen },
    { name: "Schedule", href: "/student/schedule", icon: Calendar },
    { name: "Attendance Report", href: "/student/attendance", icon: BarChart3 },
    { name: "Settings", href: "/student/settings", icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-purple-600">AttendanceMS</h2>
        <p className="text-sm text-muted-foreground">Student Portal</p>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <Button variant="outline" onClick={handleLogout} className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
