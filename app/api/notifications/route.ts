import { type NextRequest, NextResponse } from "next/server"

// Mock data store
const notifications: any[] = [
  {
    id: "1",
    message: "Welcome to the Scheme Management System!",
    url: "/dashboard",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin",
    createdByName: "System Admin",
    targetType: "all",
    readBy: [],
  },
  {
    id: "2",
    message: "New scheme approval workflow has been updated",
    url: "/dashboard/work",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin",
    createdByName: "System Admin",
    targetType: "role",
    targetRole: "admin",
    readBy: [],
  },
  {
    id: "3",
    message: "Monthly report submission deadline is approaching",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin",
    createdByName: "System Admin",
    targetType: "all",
    readBy: [],
  },
]

// Helper function to check if user can see notification
function canUserSeeNotification(notification: any, userId: string, userRole: string): boolean {
  if (notification.targetType === "all") return true
  if (notification.targetType === "role" && notification.targetRole === userRole) return true
  if (notification.targetType === "users" && notification.targetUserIds?.includes(userId)) return true
  return false
}

// GET - Get user's notifications
export async function GET(request: NextRequest) {
  try {
    // Mock user from auth - in real app, get from JWT token
    const userId = request.headers.get("x-user-id") || "user1"
    const userRole = request.headers.get("x-user-role") || "admin"

    console.log("[v0] GET /api/notifications - userId:", userId, "role:", userRole)

    // Filter notifications based on permissions
    const userNotifications = notifications
      .filter((n) => canUserSeeNotification(n, userId, userRole))
      .map((n) => ({
        ...n,
        isRead: n.readBy?.includes(userId) || false,
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    console.log("[v0] Returning", userNotifications.length, "notifications")

    return NextResponse.json(userNotifications)
  } catch (error) {
    console.error("[v0] Error fetching notifications:", error)
    return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 })
  }
}

// POST - Create new notification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userId = request.headers.get("x-user-id") || "admin"
    const userName = request.headers.get("x-user-name") || "Admin User"

    console.log("[v0] POST /api/notifications - body:", body)

    const newNotification = {
      id: String(notifications.length + 1),
      message: body.message,
      url: body.url,
      createdAt: new Date().toISOString(),
      createdBy: userId,
      createdByName: userName,
      targetType: body.targetType,
      targetUserIds: body.targetUserIds,
      targetRole: body.targetRole,
      readBy: [],
    }

    notifications.push(newNotification)

    console.log("[v0] Created notification:", newNotification.id)

    return NextResponse.json(newNotification)
  } catch (error) {
    console.error("[v0] Error creating notification:", error)
    return NextResponse.json({ error: "Failed to create notification" }, { status: 500 })
  }
}
