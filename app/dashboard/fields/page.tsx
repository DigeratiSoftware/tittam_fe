import ProtectedRoute from "@/components/auth/protected-route"
import DashboardLayout from "@/components/layout/dashboard-layout"
import FieldsManagement from "@/components/dashboard/fields-management"

export default function FieldsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <FieldsManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
