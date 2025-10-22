import { type NextRequest, NextResponse } from "next/server"

// GET - Mark notification as read
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const notificationId = params.id
    const userId = request.headers.get("x-user-id") || "user1"

    console.log("[v0] PATCH /api/notifications/:id/read - id:", notificationId, "userId:", userId)

    // In real app, update database
    // For mock, we'll just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error marking notification as read:", error)
    return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 })
  }
}
