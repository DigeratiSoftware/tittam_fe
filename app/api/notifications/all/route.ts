import { type NextRequest, NextResponse } from "next/server"

// Import mock data from parent route
// In real app, this would query the database
const notifications: any[] = []

// GET - Get all notifications (admin only)
export async function GET(request: NextRequest) {
  try {
    const userRole = request.headers.get("x-user-role") || "user"

    console.log("[v0] GET /api/notifications/all - role:", userRole)

    // Check if user is admin
    if (userRole !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Return all notifications sorted by date
    const allNotifications = notifications.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    console.log("[v0] Returning", allNotifications.length, "notifications")

    return NextResponse.json(allNotifications)
  } catch (error) {
    console.error("[v0] Error fetching all notifications:", error)
    return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 })
  }
}
