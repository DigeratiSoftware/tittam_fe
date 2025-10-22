import { type NextRequest, NextResponse } from "next/server"

// DELETE - Delete notification
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const notificationId = params.id
    const userRole = request.headers.get("x-user-role") || "user"

    console.log("[v0] DELETE /api/notifications/:id - id:", notificationId, "role:", userRole)

    // Check if user is admin
    if (userRole !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // In real app, delete from database
    // For mock, we'll just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting notification:", error)
    return NextResponse.json({ error: "Failed to delete notification" }, { status: 500 })
  }
}
