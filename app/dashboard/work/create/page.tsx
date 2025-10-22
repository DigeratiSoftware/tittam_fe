import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CreateWorkForm } from "@/components/dashboard/create-work-form"

export default function CreateWorkPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <CreateWorkForm />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
