"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { ContractorManagement } from "@/components/dashboard/contractor-management"

export default function ContractorsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <ContractorManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
