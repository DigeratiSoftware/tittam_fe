"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Pencil, Trash2, Calendar, Eye } from "lucide-react"
import { MeetingManagementService, type Meeting } from "@/services/meeting-management-service"
import { CreateMeetingDialog } from "@/components/meetings/create-meeting-dialog"
import { EditMeetingDialog } from "@/components/meetings/edit-meeting-dialog"
import { ViewMeetingDialog } from "@/components/meetings/view-meeting-dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"

export default function MeetingManagementPage() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [loading, setLoading] = useState(true)
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)

  useEffect(() => {
    loadMeetings()
  }, [])

  const loadMeetings = async () => {
    setLoading(true)
    const data = await MeetingManagementService.getAllMeetings()
    setMeetings(data)
    setLoading(false)
  }

  const handleView = (meeting: Meeting) => {
    setSelectedMeeting(meeting)
    setViewDialogOpen(true)
  }

  const handleEdit = (meeting: Meeting) => {
    setSelectedMeeting(meeting)
    setEditDialogOpen(true)
  }

  const handleDelete = (meeting: Meeting) => {
    setSelectedMeeting(meeting)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (selectedMeeting) {
      await MeetingManagementService.deleteMeeting(selectedMeeting.id)
      setDeleteDialogOpen(false)
      setSelectedMeeting(null)
      loadMeetings()
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const getStatusBadge = (status: Meeting["status"]) => {
    const statusConfig = {
      scheduled: { label: "Scheduled", className: "bg-blue-500 text-white" },
      completed: { label: "Completed", className: "bg-green-500 text-white" },
      cancelled: { label: "Cancelled", className: "bg-red-500 text-white" },
    }
    const config = statusConfig[status]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Meeting Management</h1>
              <p className="text-white/80 text-sm mt-1">Create, manage, and track all your meetings</p>
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
              onClick={() => setCreateDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-1.5" />
              Create Meeting
            </Button>
          </div>
        </div>

        <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
          <div className="flex-1 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex items-center gap-2 text-[#013A65]/70">
                  <span>Loading meetings...</span>
                </div>
              </div>
            ) : meetings.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <Calendar className="h-12 w-12 text-[#013A65]/60 mb-4" />
                <h3 className="text-lg font-medium text-[#013A65] mb-2">No meetings yet</h3>
                <p className="text-sm text-[#013A65]/70 mb-4">Create your first meeting to get started</p>
                <Button
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
                  onClick={() => setCreateDialogOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Meeting
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                    <TableHead className="text-[#013A65] font-semibold">Meeting Name</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Description</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Date & Time</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
                    <TableHead className="text-[#013A65] font-semibold w-32">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {meetings.map((meeting) => (
                    <TableRow key={meeting.id} className="hover:bg-[#F8F8F8]/50">
                      <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={meeting.name}>
                        {meeting.name}
                      </TableCell>
                      <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={meeting.description}>
                        {meeting.description}
                      </TableCell>
                      <TableCell className="text-[#013A65]/80">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(meeting.date)}</span>
                          <span className="text-[#013A65]/60">•</span>
                          <span>{formatTime(meeting.time)}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(meeting.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                            onClick={() => handleView(meeting)}
                            title="View Details"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                            onClick={() => handleEdit(meeting)}
                            title="Edit Meeting"
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-red-50 hover:border-red-200 text-red-500 bg-transparent"
                            onClick={() => handleDelete(meeting)}
                            title="Delete Meeting"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CreateMeetingDialog open={createDialogOpen} onOpenChange={setCreateDialogOpen} onSuccess={loadMeetings} />

      {selectedMeeting && (
        <>
          <EditMeetingDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            meeting={selectedMeeting}
            onSuccess={loadMeetings}
          />

          <ViewMeetingDialog open={viewDialogOpen} onOpenChange={setViewDialogOpen} meeting={selectedMeeting} />
        </>
      )}

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Meeting</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{selectedMeeting?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  )
}
