"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, User, Shield, Calendar, UserCircle } from "lucide-react"
import type { Notification } from "@/services/notification-service"

interface NotificationDetailModalProps {
  notification: Notification | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NotificationDetailModal({ notification, open, onOpenChange }: NotificationDetailModalProps) {
  if (!notification) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getTargetIcon = (targetType: string) => {
    switch (targetType) {
      case "all":
        return <Users className="h-5 w-5 text-primary" />
      case "users":
        return <User className="h-5 w-5 text-primary" />
      case "role":
        return <Shield className="h-5 w-5 text-primary" />
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Notification Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Message Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Message</h3>
            <p className="text-base text-card-foreground leading-relaxed bg-muted/50 p-4 rounded-lg border border-border">
              {notification.message}
            </p>
          </div>

          {/* URL Section */}
          {notification.url && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Link</h3>
              <a
                href={notification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:underline bg-muted/50 px-4 py-3 rounded-lg border border-border transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="break-all">{notification.url}</span>
              </a>
            </div>
          )}

          {/* Target Audience Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Target Audience</h3>
            <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg border border-border">
              {getTargetIcon(notification.targetType)}
              <span className="text-card-foreground font-medium">{getTargetLabel(notification)}</span>
            </div>
          </div>

          {/* Metadata Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Created By</h3>
              <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg border border-border">
                <UserCircle className="h-4 w-4 text-primary" />
                <span className="text-card-foreground">{notification.createdByName}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Created At</h3>
              <div className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg border border-border">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-card-foreground text-sm">{formatDate(notification.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-border">
          <Button onClick={() => onOpenChange(false)} variant="outline" className="border-border">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
