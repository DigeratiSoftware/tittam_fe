import { toast } from "@/hooks/use-toast"

export interface MeetingAttachment {
  id: string
  name: string
  size: string
  type: string
  url: string
}

export interface MeetingAccessPermission {
  type: "all" | "specific"
  filterLevel?: "zone" | "district" | "townpanchayat"
  zone?: string
  district?: string
  townPanchayat?: string
}

export interface Meeting {
  id: string
  name: string
  description: string
  date: string
  time: string
  status: "scheduled" | "completed" | "cancelled"
  meetingUrl?: string
  attachments: MeetingAttachment[]
  accessPermission: MeetingAccessPermission
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface CreateMeetingData {
  name: string
  description: string
  date: string
  time: string
  meetingUrl?: string
  attachments: MeetingAttachment[]
  accessPermission: MeetingAccessPermission
}

// Mock data
const mockMeetings: Meeting[] = [
  {
    id: "1",
    name: "Q1 Planning Meeting",
    description: "Quarterly planning and budget review for all schemes",
    date: "2024-03-15",
    time: "10:00",
    status: "completed",
    meetingUrl: "https://meet.google.com/abc-defg-hij",
    attachments: [
      {
        id: "att1",
        name: "Q1_Budget_Report.pdf",
        size: "2.5 MB",
        type: "application/pdf",
        url: "/attachments/q1-budget.pdf",
      },
      {
        id: "att2",
        name: "Planning_Presentation.pptx",
        size: "5.1 MB",
        type: "application/vnd.ms-powerpoint",
        url: "/attachments/planning.pptx",
      },
    ],
    accessPermission: {
      type: "all",
    },
    createdBy: "Admin User",
    createdAt: "2024-02-20T10:00:00Z",
    updatedAt: "2024-03-15T16:30:00Z",
  },
  {
    id: "2",
    name: "Zone A Infrastructure Review",
    description: "Review of infrastructure projects in Zone A districts",
    date: "2024-03-20",
    time: "14:30",
    status: "scheduled",
    meetingUrl: "https://zoom.us/j/123456789",
    attachments: [
      {
        id: "att3",
        name: "Infrastructure_Status.xlsx",
        size: "1.8 MB",
        type: "application/vnd.ms-excel",
        url: "/attachments/infra-status.xlsx",
      },
    ],
    accessPermission: {
      type: "specific",
      filterLevel: "zone",
      zone: "Zone A",
    },
    createdBy: "Zone Coordinator",
    createdAt: "2024-03-01T09:00:00Z",
    updatedAt: "2024-03-10T14:20:00Z",
  },
  {
    id: "3",
    name: "District 1 Scheme Implementation",
    description: "Discussion on scheme implementation progress in District 1",
    date: "2024-03-25",
    time: "11:00",
    status: "scheduled",
    meetingUrl: "https://meet.google.com/xyz-abcd-efg",
    attachments: [],
    accessPermission: {
      type: "specific",
      filterLevel: "district",
      zone: "Zone A",
      district: "District 1",
    },
    createdBy: "District Officer",
    createdAt: "2024-03-05T11:30:00Z",
    updatedAt: "2024-03-05T11:30:00Z",
  },
  {
    id: "4",
    name: "Town Panchayat 1 Community Meeting",
    description: "Community engagement meeting for local development projects",
    date: "2024-03-28",
    time: "09:30",
    status: "scheduled",
    meetingUrl: "https://teams.microsoft.com/l/meetup-join/abc123",
    attachments: [
      {
        id: "att4",
        name: "Community_Feedback.docx",
        size: "850 KB",
        type: "application/msword",
        url: "/attachments/feedback.docx",
      },
    ],
    accessPermission: {
      type: "specific",
      filterLevel: "townpanchayat",
      zone: "Zone A",
      district: "District 1",
      townPanchayat: "Town Panchayat 1",
    },
    createdBy: "Panchayat Secretary",
    createdAt: "2024-03-08T08:00:00Z",
    updatedAt: "2024-03-12T10:15:00Z",
  },
  {
    id: "5",
    name: "Annual Review Meeting",
    description: "Annual performance review and future planning",
    date: "2024-02-28",
    time: "15:00",
    status: "completed",
    meetingUrl: "https://meet.google.com/annual-review-2024",
    attachments: [
      {
        id: "att5",
        name: "Annual_Report_2023.pdf",
        size: "8.2 MB",
        type: "application/pdf",
        url: "/attachments/annual-report.pdf",
      },
      {
        id: "att6",
        name: "Performance_Metrics.xlsx",
        size: "3.4 MB",
        type: "application/vnd.ms-excel",
        url: "/attachments/metrics.xlsx",
      },
    ],
    accessPermission: {
      type: "all",
    },
    createdBy: "Admin User",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-02-28T17:00:00Z",
  },
]

const meetings = [...mockMeetings]

export class MeetingManagementService {
  // Get all meetings
  static async getAllMeetings(): Promise<Meeting[]> {
    return [...meetings]
  }

  // Get meeting by ID
  static async getMeetingById(id: string): Promise<Meeting | null> {
    const meeting = meetings.find((m) => m.id === id)
    return meeting || null
  }

  // Create new meeting
  static async createMeeting(data: CreateMeetingData): Promise<Meeting> {
    const newMeeting: Meeting = {
      id: `meeting-${Date.now()}`,
      ...data,
      status: "scheduled",
      createdBy: "Current User",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    meetings.unshift(newMeeting)
    toast({
      title: "Meeting Created",
      description: `${data.name} has been created successfully.`,
    })
    return newMeeting
  }

  // Update meeting
  static async updateMeeting(id: string, data: Partial<CreateMeetingData>): Promise<Meeting | null> {
    const index = meetings.findIndex((m) => m.id === id)
    if (index !== -1) {
      meetings[index] = {
        ...meetings[index],
        ...data,
        updatedAt: new Date().toISOString(),
      }
      toast({
        title: "Meeting Updated",
        description: "Meeting has been updated successfully.",
      })
      return meetings[index]
    }
    return null
  }

  // Delete meeting
  static async deleteMeeting(id: string): Promise<boolean> {
    const index = meetings.findIndex((m) => m.id === id)
    if (index !== -1) {
      meetings.splice(index, 1)
      toast({
        title: "Meeting Deleted",
        description: "Meeting has been deleted successfully.",
      })
      return true
    }
    return false
  }

  // Get location options
  static getZones(): string[] {
    return ["Zone A", "Zone B", "Zone C"]
  }

  static getDistricts(zone: string): string[] {
    const districtMap: Record<string, string[]> = {
      "Zone A": ["District 1", "District 2", "District 3"],
      "Zone B": ["District 4", "District 5", "District 6"],
      "Zone C": ["District 7", "District 8", "District 9"],
    }
    return districtMap[zone] || []
  }

  static getTownPanchayats(district: string): string[] {
    const townPanchayatMap: Record<string, string[]> = {
      "District 1": ["Town Panchayat 1", "Town Panchayat 2", "Town Panchayat 3"],
      "District 2": ["Town Panchayat 4", "Town Panchayat 5", "Town Panchayat 6"],
      "District 3": ["Town Panchayat 7", "Town Panchayat 8", "Town Panchayat 9"],
      "District 4": ["Town Panchayat 10", "Town Panchayat 11", "Town Panchayat 12"],
      "District 5": ["Town Panchayat 13", "Town Panchayat 14", "Town Panchayat 15"],
      "District 6": ["Town Panchayat 16", "Town Panchayat 17", "Town Panchayat 18"],
      "District 7": ["Town Panchayat 19", "Town Panchayat 20", "Town Panchayat 21"],
      "District 8": ["Town Panchayat 22", "Town Panchayat 23", "Town Panchayat 24"],
      "District 9": ["Town Panchayat 25", "Town Panchayat 26", "Town Panchayat 27"],
    }
    return townPanchayatMap[district] || []
  }
}
