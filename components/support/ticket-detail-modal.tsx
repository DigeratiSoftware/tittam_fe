"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ticketService, type Ticket, type TicketStatus } from "@/services/ticket-service"
import { ExternalLink, Loader2, MessageSquare, User } from "lucide-react"
import { format } from "date-fns"

interface TicketDetailModalProps {
  ticket: Ticket | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onTicketUpdated: () => void
  isAdmin: boolean
}

export function TicketDetailModal({ ticket, open, onOpenChange, onTicketUpdated, isAdmin }: TicketDetailModalProps) {
  const [status, setStatus] = useState<TicketStatus>(ticket?.status || "open")
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState("")
  const [addingComment, setAddingComment] = useState(false)

  useEffect(() => {
    if (ticket) {
      setStatus(ticket.status)
    }
  }, [ticket])

  const handleStatusUpdate = async () => {
    if (!ticket || status === ticket.status) return

    try {
      setLoading(true)
      await ticketService.updateTicketStatus(ticket.id, { status })
      onTicketUpdated()
      onOpenChange(false)
    } catch (error) {
      console.error("Failed to update ticket status:", error)
      alert("Failed to update ticket status. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleAddComment = async () => {
    if (!ticket || !comment.trim()) return

    try {
      setAddingComment(true)
      await ticketService.addComment(ticket.id, "1", "Current User", comment)
      setComment("")
      onTicketUpdated()
    } catch (error) {
      console.error("Failed to add comment:", error)
      alert("Failed to add comment. Please try again.")
    } finally {
      setAddingComment(false)
    }
  }

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case "open":
        return "bg-blue-500 text-white"
      case "in-progress":
        return "bg-yellow-500 text-white"
      case "resolved":
        return "bg-green-500 text-white"
      case "closed":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusLabel = (status: TicketStatus) => {
    switch (status) {
      case "in-progress":
        return "In Progress"
      default:
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }

  if (!ticket) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold text-[#013A65] mb-2">{ticket.subject}</DialogTitle>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{ticket.createdByName}</span>
                </div>
                <span>•</span>
                <span>{format(new Date(ticket.createdAt), "MMM dd, yyyy 'at' HH:mm")}</span>
              </div>
            </div>
            <Badge className={getStatusColor(ticket.status)}>{getStatusLabel(ticket.status)}</Badge>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-6 py-4">
          {/* Description */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#013A65]">Description</Label>
            <p className="text-sm text-muted-foreground leading-relaxed">{ticket.description}</p>
          </div>

          {/* Reference URL */}
          {ticket.url && (
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-[#013A65]">Reference Link</Label>
              <a
                href={ticket.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#F3B335] hover:text-[#F3B335]/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="underline">{ticket.url}</span>
              </a>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#013A65]" />
              <Label className="text-sm font-semibold text-[#013A65]">Comments ({ticket.comments?.length || 0})</Label>
            </div>

            {/* Comments List */}
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">
              {ticket.comments && ticket.comments.length > 0 ? (
                ticket.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white border-l-4 border-[#F3B335] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#013A65] to-[#013A65]/80 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {comment.userName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-[#013A65]">{comment.userName}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(comment.createdAt), "MMM dd, HH:mm")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  No comments yet. Be the first to comment!
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <Textarea
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px] resize-none bg-white border-gray-200 focus:border-[#F3B335] focus:ring-[#F3B335]"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleAddComment}
                  disabled={addingComment || !comment.trim()}
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold shadow-md"
                >
                  {addingComment ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Posting...
                    </>
                  ) : (
                    "Post Comment"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {isAdmin && (
            <div className="bg-gradient-to-r from-[#013A65]/5 to-[#013A65]/10 rounded-lg p-4 space-y-3 border border-[#013A65]/20">
              <Label className="text-sm font-semibold text-[#013A65] flex items-center gap-2">Admin Actions</Label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Label className="text-xs text-muted-foreground mb-2 block">Update Ticket Status</Label>
                  <Select value={status} onValueChange={(value) => setStatus(value as TicketStatus)}>
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleStatusUpdate}
                  disabled={loading || status === ticket.status}
                  className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 shadow-md mt-6"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update Status"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4 flex justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="min-w-[100px]">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
