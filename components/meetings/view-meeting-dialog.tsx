"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, LinkIcon, Paperclip, Users } from "lucide-react"
import type { Meeting } from "@/services/meeting-management-service"

interface ViewMeetingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  meeting: Meeting
}

export function ViewMeetingDialog({ open, onOpenChange, meeting }: ViewMeetingDialogProps) {
  const getStatusBadge = (status: Meeting["status"]) => {
    const statusConfig = {
      scheduled: { label: "Scheduled", className: "bg-blue-500" },
      completed: { label: "Completed", className: "bg-green-500" },
      cancelled: { label: "Cancelled", className: "bg-red-500" },
    }
    const config = statusConfig[status]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const getAccessInfo = () => {
    const { accessPermission } = meeting
    if (accessPermission.type === "all") {
      return "All Users"
    }
    const parts = []
    if (accessPermission.zone) parts.push(accessPermission.zone)
    if (accessPermission.district) parts.push(accessPermission.district)
    if (accessPermission.townPanchayat) parts.push(accessPermission.townPanchayat)
    return parts.join(" / ")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl">{meeting.name}</DialogTitle>
              <DialogDescription className="mt-2">{meeting.description}</DialogDescription>
            </div>
            {getStatusBadge(meeting.status)}
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Date */}
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Meeting Date</p>
              <p className="text-base">
                {new Date(meeting.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Meeting URL */}
          {meeting.meetingUrl && (
            <div className="flex items-center gap-3">
              <LinkIcon className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Meeting Link</p>
                <a
                  href={meeting.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {meeting.meetingUrl}
                </a>
              </div>
            </div>
          )}

          {/* Access Permissions */}
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Access Permissions</p>
              <p className="text-base">{getAccessInfo()}</p>
            </div>
          </div>

          {/* Attachments */}
          {meeting.attachments.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Paperclip className="h-5 w-5 text-gray-500" />
                <p className="text-sm font-medium text-gray-500">Attachments ({meeting.attachments.length})</p>
              </div>
              <div className="space-y-2 pl-7">
                {meeting.attachments.map((att) => (
                  <div key={att.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">{att.name}</p>
                      <p className="text-xs text-gray-500">{att.size}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="border-t pt-4 space-y-2 text-sm text-gray-500">
            <p>
              <span className="font-medium">Created by:</span> {meeting.createdBy}
            </p>
            <p>
              <span className="font-medium">Created at:</span> {new Date(meeting.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Last updated:</span> {new Date(meeting.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
