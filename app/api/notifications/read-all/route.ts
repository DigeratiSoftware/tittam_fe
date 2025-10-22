import { type NextRequest, NextResponse } from "next/server"

// PATCH - Mark all notifications as read
export async function PATCH(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id") || "user1"

    console.log("[v0] PATCH /api/notifications/read-all - userId:", userId)

    // In real app, update database
    // For mock, we'll just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error marking all as read:", error)
    return NextResponse.json({ error: "Failed to mark all as read" }, { status: 500 })
  }
}
