export interface Notification {
  id: string
  message: string
  url?: string
  createdAt: string
  createdBy: string
  createdByName: string
  targetType: "all" | "users" | "role"
  targetUserIds?: string[]
  targetRole?: string
  isRead?: boolean
}

export interface CreateNotificationRequest {
  message: string
  url?: string
  targetType: "all" | "users" | "role"
  targetUserIds?: string[]
  targetRole?: string
}

// Mock data storage
const mockNotifications: Notification[] = [
  {
    id: "1",
    message: "System maintenance scheduled for tomorrow at 2 AM",
    url: "https://example.com/maintenance",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin1",
    createdByName: "Admin User",
    targetType: "all",
    isRead: false,
  },
  {
    id: "2",
    message: "New scheme template available for review",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin1",
    createdByName: "Admin User",
    targetType: "role",
    targetRole: "admin",
    isRead: false,
  },
  {
    id: "3",
    message: "Monthly report submission deadline is approaching",
    url: "https://example.com/reports",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    createdBy: "admin1",
    createdByName: "Admin User",
    targetType: "all",
    isRead: true,
  },
]

class NotificationService {
  // Helper to simulate async operations
  private async delay(ms = 300): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Helper to get current user from localStorage
  private getCurrentUser() {
    if (typeof window === "undefined") return null
    const userStr = localStorage.getItem("user")
    return userStr ? JSON.parse(userStr) : null
  }

  // ---------------- GET USER NOTIFICATIONS ----------------
  async getUserNotifications(): Promise<Notification[]> {
    await this.delay()
    const currentUser = this.getCurrentUser()
    if (!currentUser) return []

    // Filter notifications based on target type
    return mockNotifications.filter((notification) => {
      if (notification.targetType === "all") return true
      if (notification.targetType === "role" && notification.targetRole === currentUser.role) return true
      if (notification.targetType === "users" && notification.targetUserIds?.includes(currentUser.id)) return true
      return false
    })
  }

  // ---------------- GET ALL NOTIFICATIONS (ADMIN) ----------------
  async getAllNotifications(): Promise<Notification[]> {
    await this.delay()
    return [...mockNotifications]
  }

  // ---------------- CREATE NOTIFICATION ----------------
  async createNotification(data: CreateNotificationRequest): Promise<Notification> {
    await this.delay()
    const currentUser = this.getCurrentUser()

    const newNotification: Notification = {
      id: Date.now().toString(),
      message: data.message,
      url: data.url,
      createdAt: new Date().toISOString(),
      createdBy: currentUser?.id || "unknown",
      createdByName: currentUser?.name || "Unknown User",
      targetType: data.targetType,
      targetUserIds: data.targetUserIds,
      targetRole: data.targetRole,
      isRead: false,
    }

    mockNotifications.unshift(newNotification)
    return newNotification
  }

  // ---------------- MARK AS READ ----------------
  async markAsRead(notificationId: string): Promise<void> {
    await this.delay()
    const notification = mockNotifications.find((n) => n.id === notificationId)
    if (notification) {
      notification.isRead = true
    }
  }

  // ---------------- MARK ALL AS READ ----------------
  async markAllAsRead(): Promise<void> {
    await this.delay()
    const currentUser = this.getCurrentUser()
    if (!currentUser) return

    mockNotifications.forEach((notification) => {
      // Only mark as read if user can see it
      if (notification.targetType === "all") {
        notification.isRead = true
      } else if (notification.targetType === "role" && notification.targetRole === currentUser.role) {
        notification.isRead = true
      } else if (notification.targetType === "users" && notification.targetUserIds?.includes(currentUser.id)) {
        notification.isRead = true
      }
    })
  }

  // ---------------- DELETE NOTIFICATION ----------------
  async deleteNotification(notificationId: string): Promise<void> {
    await this.delay()
    const index = mockNotifications.findIndex((n) => n.id === notificationId)
    if (index !== -1) {
      mockNotifications.splice(index, 1)
    }
  }

  // ---------------- GET UNREAD COUNT ----------------
  async getUnreadCount(): Promise<number> {
    await this.delay()
    const currentUser = this.getCurrentUser()
    if (!currentUser) return 0

    return mockNotifications.filter((notification) => {
      if (notification.isRead) return false
      if (notification.targetType === "all") return true
      if (notification.targetType === "role" && notification.targetRole === currentUser.role) return true
      if (notification.targetType === "users" && notification.targetUserIds?.includes(currentUser.id)) return true
      return false
    }).length
  }
}

export const notificationService = new NotificationService()
