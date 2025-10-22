import ProtectedRoute from "@/components/auth/protected-route"
import DashboardLayout from "@/components/layout/dashboard-layout"
import ComponentsManagement from "@/components/dashboard/components-management"

export default function ComponentsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <ComponentsManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
