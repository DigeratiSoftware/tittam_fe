"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, ExternalLink, Users, User, Shield } from "lucide-react"
import { notificationService, type Notification } from "@/services/notification-service"
import { useAuth } from "@/hooks/use-auth"
import { CreateNotificationDialog } from "@/components/notifications/create-notification-dialog"
import { NotificationDetailModal } from "@/components/notifications/notification-detail-modal"

export default function NotificationsPage() {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  useEffect(() => {
    loadNotifications()
  }, [])

  const loadNotifications = async () => {
    try {
      setIsLoading(true)
      const data = await notificationService.getAllNotifications()
      setNotifications(data)
    } catch (error) {
      console.error("[v0] Error loading notifications:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this notification?")) return

    try {
      await notificationService.deleteNotification(id)
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    } catch (error) {
      console.error("[v0] Error deleting notification:", error)
      alert("Failed to delete notification")
    }
  }

  const handleViewDetails = (notification: Notification) => {
    setSelectedNotification(notification)
    setIsDetailModalOpen(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const getTargetIcon = (targetType: string) => {
    switch (targetType) {
      case "all":
        return <Users className="h-4 w-4" />
      case "users":
        return <User className="h-4 w-4" />
      case "role":
        return <Shield className="h-4 w-4" />
      default:
        return null
    }
  }

  const getTargetLabel = (notification: Notification) => {
    switch (notification.targetType) {
      case "all":
        return "All Users"
      case "users":
        return `${notification.targetUserIds?.length || 0} Selected Users`
      case "role":
        return `Role: ${notification.targetRole}`
      default:
        return "Unknown"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Notification Management</h1>
              <p className="text-white/80 text-sm mt-1">Create and manage system notifications for users</p>
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
              onClick={() => setIsCreateDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-1.5" />
              Create Notification
            </Button>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-primary">All Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">Loading notifications...</div>
            ) : notifications.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg font-medium mb-2">No notifications yet</p>
                <p className="text-sm">Create your first notification to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleViewDetails(notification)}
                    className="border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg p-4 hover:shadow-md hover:border-[#F3B335]/50 transition-all cursor-pointer bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-1">{notification.message}</p>

                            {notification.url && (
                              <a
                                href={notification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-sm text-primary hover:underline inline-flex items-center gap-1 mb-2 font-medium"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {notification.url}
                              </a>
                            )}

                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2">
                              <div className="flex items-center gap-1.5">
                                {getTargetIcon(notification.targetType)}
                                <span>{getTargetLabel(notification)}</span>
                              </div>
                              <span className="text-muted-foreground/40">•</span>
                              <span>Created by {notification.createdByName}</span>
                              <span className="text-muted-foreground/40">•</span>
                              <span>{formatDate(notification.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(notification.id)
                        }}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <CreateNotificationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onSuccess={loadNotifications}
      />

      <NotificationDetailModal
        notification={selectedNotification}
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
      />
    </DashboardLayout>
  )
}
