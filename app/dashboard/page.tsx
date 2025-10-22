"use client"

import { useEffect, useState } from "react"
import ProtectedRoute from "@/components/auth/protected-route"
import DashboardLayout from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Clock, Play, CheckCircle } from "lucide-react"
import {
  workStatsService,
  type WorkStats,
  type YearlyWorkData,
  type MonthlyWorkData,
} from "@/services/work-stats-service"
import WorkCharts from "@/components/dashboard/work-charts"

export default function DashboardPage() {
  const [stats, setStats] = useState<WorkStats>({
    totalWork: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  })
  const [yearlyData, setYearlyData] = useState<YearlyWorkData[]>([])
  const [monthlyData, setMonthlyData] = useState<MonthlyWorkData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [workStats, yearlyWork, monthlyWork] = await Promise.all([
          workStatsService.getWorkStats(),
          workStatsService.getYearlyWorkData(),
          workStatsService.getMonthlyWorkData(),
        ])

        setStats(workStats)
        setYearlyData(yearlyWork)
        setMonthlyData(monthlyWork)
      } catch (error) {
        console.error("Failed to load dashboard data:", error)
        // Keep default values on error
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Total Work</CardTitle>
                <Briefcase className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{loading ? "..." : stats.totalWork}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-yellow-800">Pending</CardTitle>
                <Clock className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-900">{loading ? "..." : stats.pending}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">In Progress</CardTitle>
                <Play className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-900">{loading ? "..." : stats.inProgress}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">{loading ? "..." : stats.completed}</div>
              </CardContent>
            </Card>
          </div>

          <WorkCharts yearlyData={yearlyData} monthlyData={monthlyData} loading={loading} />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
