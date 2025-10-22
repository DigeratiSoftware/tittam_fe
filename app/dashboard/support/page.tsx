"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ticketService, type Ticket, type TicketStatus } from "@/services/ticket-service"
import { CreateTicketDialog } from "@/components/support/create-ticket-dialog"
import { TicketDetailModal } from "@/components/support/ticket-detail-modal"
import { Plus, ExternalLink, Trash2, Clock, User, Calendar } from "lucide-react"
import { format } from "date-fns"

export default function SupportTicketsPage() {
  const { user } = useAuth()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
  })

  useEffect(() => {
    loadTickets()
    loadStats()
  }, [])

  const loadTickets = async () => {
    try {
      setLoading(true)
      const data = await ticketService.getAllTickets()
      setTickets(data)
    } catch (error) {
      console.error("Failed to load tickets:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const data = await ticketService.getTicketStats()
      setStats(data)
    } catch (error) {
      console.error("Failed to load stats:", error)
    }
  }

  const handleDeleteTicket = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ticket?")) return

    try {
      await ticketService.deleteTicket(id)
      await loadTickets()
      await loadStats()
      if (selectedTicket?.id === id) {
        setSelectedTicket(null)
        setIsDetailModalOpen(false)
      }
    } catch (error) {
      console.error("Failed to delete ticket:", error)
    }
  }

  const handleTicketCreated = async () => {
    await loadTickets()
    await loadStats()
  }

  const handleTicketUpdated = async () => {
    await loadTickets()
    await loadStats()
  }

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket)
    setIsDetailModalOpen(true)
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

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg shadow-lg py-3 px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-white">Support Tickets</h1>
                <p className="text-white/80 text-sm mt-1">Create and manage support tickets</p>
              </div>
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Ticket
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white border-l-4 border-[#013A65] rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold text-[#013A65]">{stats.total}</p>
            </div>
            <div className="bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Open</p>
              <p className="text-2xl font-bold text-blue-500">{stats.open}</p>
            </div>
            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold text-yellow-500">{stats.inProgress}</p>
            </div>
            <div className="bg-white border-l-4 border-green-500 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Resolved</p>
              <p className="text-2xl font-bold text-green-500">{stats.resolved}</p>
            </div>
            <div className="bg-white border-l-4 border-gray-500 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Closed</p>
              <p className="text-2xl font-bold text-gray-500">{stats.closed}</p>
            </div>
          </div>

          {/* Tickets List */}
          <div className="space-y-4">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading tickets...</p>
              </div>
            ) : tickets.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-border">
                <p className="text-muted-foreground">No tickets found</p>
              </div>
            ) : (
              tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white border-l-4 border-[#F3B335] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleTicketClick(ticket)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[#013A65] truncate">{ticket.subject}</h3>
                        <Badge className={getStatusColor(ticket.status)}>{getStatusLabel(ticket.status)}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{ticket.description}</p>
                      {ticket.url && (
                        <a
                          href={ticket.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#F3B335] hover:text-[#F3B335]/80 mb-3"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-3 w-3" />
                          View Reference
                        </a>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{ticket.createdByName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(ticket.createdAt), "MMM dd, yyyy")}</span>
                        </div>
                        {ticket.assignedToName && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Assigned to {ticket.assignedToName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {user?.role === "admin" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteTicket(ticket.id)
                        }}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <TicketDetailModal
            ticket={selectedTicket}
            open={isDetailModalOpen}
            onOpenChange={setIsDetailModalOpen}
            onTicketUpdated={handleTicketUpdated}
            isAdmin={user?.role === "admin"}
          />

          <CreateTicketDialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
            onTicketCreated={handleTicketCreated}
            userId={user?.id || ""}
            userName={user?.name || ""}
          />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
