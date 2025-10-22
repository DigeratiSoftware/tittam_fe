import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { SchemeManagement } from "@/components/dashboard/scheme-management"

export default function SchemesPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <SchemeManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
