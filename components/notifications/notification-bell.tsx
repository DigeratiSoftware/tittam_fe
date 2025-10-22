"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { notificationService, type Notification } from "@/services/notification-service"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function NotificationBell() {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      loadNotifications()
      loadUnreadCount()
    }
  }, [user])

  const loadNotifications = async () => {
    try {
      setIsLoading(true)
      const data = await notificationService.getUserNotifications()
      setNotifications(data)
    } catch (error) {
      console.error("[v0] Error loading notifications:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadUnreadCount = async () => {
    try {
      const count = await notificationService.getUnreadCount()
      setUnreadCount(count)
    } catch (error) {
      console.error("[v0] Error loading unread count:", error)
    }
  }

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await notificationService.markAsRead(notificationId)
      setNotifications((prev) => prev.map((n) => (n.id === notificationId ? { ...n, isRead: true } : n)))
      setUnreadCount((prev) => Math.max(0, prev - 1))
    } catch (error) {
      console.error("[v0] Error marking as read:", error)
    }
  }

  const handleMarkAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead()
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
      setUnreadCount(0)
    } catch (error) {
      console.error("[v0] Error marking all as read:", error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-9 w-9 p-0 hover:bg-[#F3B335]/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bell className="h-5 w-5 text-[#013A65]" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-[#013A65]">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={handleMarkAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center text-sm text-gray-500">Loading notifications...</div>
          ) : notifications.length === 0 ? (
            <div className="p-8 text-center text-sm text-gray-500">No notifications yet</div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 hover:bg-gray-50 transition-colors cursor-pointer",
                    !notification.isRead && "bg-blue-50/50",
                  )}
                  onClick={() => {
                    if (!notification.isRead) {
                      handleMarkAsRead(notification.id)
                    }
                    if (notification.url) {
                      setIsOpen(false)
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                        notification.isRead ? "bg-gray-300" : "bg-blue-500",
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-sm", !notification.isRead && "font-medium text-[#013A65]")}>
                        {notification.message}
                      </p>
                      {notification.url && (
                        <Link
                          href={notification.url}
                          className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                          onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(false)
                          }}
                        >
                          View details →
                        </Link>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-500">{formatDate(notification.createdAt)}</p>
                        <span className="text-xs text-gray-400">•</span>
                        <p className="text-xs text-gray-500">by {notification.createdByName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {user?.role === "admin" && (
          <div className="p-3 border-t bg-gray-50">
            <Link href="/dashboard/notifications" onClick={() => setIsOpen(false)}>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Manage Notifications
              </Button>
            </Link>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
