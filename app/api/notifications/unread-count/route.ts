import { type NextRequest, NextResponse } from "next/server"

// GET - Get unread notification count
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id") || "user1"
    const userRole = request.headers.get("x-user-role") || "admin"

    console.log("[v0] GET /api/notifications/unread-count - userId:", userId)

    // In real app, query database for unread count
    // For mock, return random count
    const count = Math.floor(Math.random() * 5)

    return NextResponse.json({ count })
  } catch (error) {
    console.error("[v0] Error getting unread count:", error)
    return NextResponse.json({ error: "Failed to get unread count" }, { status: 500 })
  }
}
