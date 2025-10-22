import type { Metadata } from "next"
import ProtectedRoute from "@/components/auth/protected-route"
import DashboardLayout from "@/components/layout/dashboard-layout"
import UserManagement from "@/components/dashboard/user-management"

export const metadata: Metadata = {
  title: "User Management",
  description: "Manage users and their roles",
}

export default function UsersPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <UserManagement />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
