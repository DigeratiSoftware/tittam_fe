export type TicketStatus = "open" | "in-progress" | "resolved" | "closed"

export interface Comment {
  id: string
  ticketId: string
  userId: string
  userName: string
  comment: string
  createdAt: string
}

export interface Ticket {
  id: string
  subject: string
  description: string
  url?: string
  status: TicketStatus
  createdBy: string
  createdByName: string
  createdAt: string
  updatedAt: string
  assignedTo?: string
  assignedToName?: string
  comments?: Comment[]
}

export interface CreateTicketData {
  subject: string
  description: string
  url?: string
}

export interface UpdateTicketStatusData {
  status: TicketStatus
  assignedTo?: string
}

// Mock data for tickets
let mockTickets: Ticket[] = [
  {
    id: "1",
    subject: "Unable to access dashboard",
    description:
      "I am getting a 403 error when trying to access the main dashboard. This started happening after the latest update.",
    url: "https://example.com/dashboard",
    status: "in-progress",
    createdBy: "1",
    createdByName: "John Doe",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    assignedTo: "2",
    assignedToName: "Admin User",
  },
  {
    id: "2",
    subject: "Report generation is slow",
    description:
      "When generating reports with large datasets, the system takes more than 5 minutes to complete. Can this be optimized?",
    status: "open",
    createdBy: "3",
    createdByName: "Jane Smith",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    subject: "Feature request: Export to PDF",
    description: "It would be great to have an option to export reports directly to PDF format instead of just Excel.",
    url: "https://example.com/reports",
    status: "open",
    createdBy: "1",
    createdByName: "John Doe",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    subject: "Password reset not working",
    description: "The password reset email is not being received. I have checked spam folder as well.",
    status: "resolved",
    createdBy: "4",
    createdByName: "Bob Johnson",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    assignedTo: "2",
    assignedToName: "Admin User",
  },
  {
    id: "5",
    subject: "Mobile app crashes on login",
    description: "The mobile application crashes immediately after entering credentials on iOS devices.",
    status: "closed",
    createdBy: "3",
    createdByName: "Jane Smith",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    assignedTo: "2",
    assignedToName: "Admin User",
  },
]

// Mock comments data
const mockComments: Comment[] = [
  {
    id: "1",
    ticketId: "1",
    userId: "2",
    userName: "Admin User",
    comment: "I'm looking into this issue. It seems to be related to recent permission changes.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    ticketId: "1",
    userId: "1",
    userName: "John Doe",
    comment: "Thank you for the quick response. Please let me know if you need any additional information.",
    createdAt: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString(),
  },
]

class TicketService {
  // Get all tickets
  async getAllTickets(): Promise<Ticket[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...mockTickets]
      .map((ticket) => ({
        ...ticket,
        comments: mockComments.filter((c) => c.ticketId === ticket.id),
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }

  // Get tickets by user
  async getUserTickets(userId: string): Promise<Ticket[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockTickets
      .filter((ticket) => ticket.createdBy === userId)
      .map((ticket) => ({
        ...ticket,
        comments: mockComments.filter((c) => c.ticketId === ticket.id),
      }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }

  // Get ticket by ID
  async getTicketById(id: string): Promise<Ticket | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const ticket = mockTickets.find((ticket) => ticket.id === id)
    if (ticket) {
      return {
        ...ticket,
        comments: mockComments.filter((c) => c.ticketId === ticket.id),
      }
    }
    return null
  }

  // Create new ticket
  async createTicket(data: CreateTicketData, userId: string, userName: string): Promise<Ticket> {
    await new Promise((resolve) => setTimeout(resolve, 400))

    const newTicket: Ticket = {
      id: String(mockTickets.length + 1),
      subject: data.subject,
      description: data.description,
      url: data.url,
      status: "open",
      createdBy: userId,
      createdByName: userName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    mockTickets.push(newTicket)
    return newTicket
  }

  // Update ticket status
  async updateTicketStatus(id: string, data: UpdateTicketStatusData, assignedToName?: string): Promise<Ticket> {
    await new Promise((resolve) => setTimeout(resolve, 400))

    const ticketIndex = mockTickets.findIndex((ticket) => ticket.id === id)
    if (ticketIndex === -1) {
      throw new Error("Ticket not found")
    }

    mockTickets[ticketIndex] = {
      ...mockTickets[ticketIndex],
      status: data.status,
      assignedTo: data.assignedTo,
      assignedToName: assignedToName,
      updatedAt: new Date().toISOString(),
    }

    return mockTickets[ticketIndex]
  }

  // Delete ticket
  async deleteTicket(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    mockTickets = mockTickets.filter((ticket) => ticket.id !== id)
  }

  // Get ticket statistics
  async getTicketStats(): Promise<{
    total: number
    open: number
    inProgress: number
    resolved: number
    closed: number
  }> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    return {
      total: mockTickets.length,
      open: mockTickets.filter((t) => t.status === "open").length,
      inProgress: mockTickets.filter((t) => t.status === "in-progress").length,
      resolved: mockTickets.filter((t) => t.status === "resolved").length,
      closed: mockTickets.filter((t) => t.status === "closed").length,
    }
  }

  // Add comment to ticket
  async addComment(ticketId: string, userId: string, userName: string, comment: string): Promise<Comment> {
    await new Promise((resolve) => setTimeout(resolve, 400))

    const newComment: Comment = {
      id: String(mockComments.length + 1),
      ticketId,
      userId,
      userName,
      comment,
      createdAt: new Date().toISOString(),
    }

    mockComments.push(newComment)

    // Update ticket's updatedAt timestamp
    const ticketIndex = mockTickets.findIndex((t) => t.id === ticketId)
    if (ticketIndex !== -1) {
      mockTickets[ticketIndex].updatedAt = new Date().toISOString()
    }

    return newComment
  }
}

export const ticketService = new TicketService()
