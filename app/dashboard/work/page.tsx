"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { WorkManagement } from "@/components/dashboard/work-management"
import { initializeMockWorkData } from "@/services/mock-work-data"
import { useEffect } from "react"

export default function WorkPage() {
  useEffect(() => {
    initializeMockWorkData()
  }, [])

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <WorkManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
