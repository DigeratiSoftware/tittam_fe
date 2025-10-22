export interface SmartSheetField {
  id: string
  name: string
  dataType: "text" | "number" | "date" | "dropdown" | "boolean"
  source?: "work" | "infohub" | "custom"
  options?: string[] // For dropdown type
  required: boolean
  order: number
}

export interface SmartSheet {
  id: string
  name: string
  description: string
  type: "scheme" | "general"
  scheme?: string
  component?: string
  year?: string
  schemeName?: string // Derived from scheme selection
  componentName?: string // Derived from component selection
  fields: SmartSheetField[]
  isShared: boolean
  isFrozen: boolean
  createdBy: string
  createdAt: string
  sharedWith: string[] // User IDs
  order: number
  sectionName?: string // Section name for grouping sheets
}

export interface SheetDataEntry {
  id: string
  sheetId: string
  data: Record<string, any> // Field ID -> Value
  submittedBy: string
  submittedAt: string
  status: "draft" | "submitted"
}

export interface SheetUpdateTracking {
  sheetId: string
  sheetName: string
  totalShared: number
  updated: Array<{ userId: string; userName: string; updatedAt: string }>
  notUpdated: Array<{ userId: string; userName: string }>
}

export interface SheetTemplate {
  id: string
  name: string
  description: string
  type: "scheme" | "general"
  sheets: Array<{
    name: string
    fields: SmartSheetField[]
    scheme?: string
    component?: string
    year?: string
  }>
  createdBy: string
  createdAt: string
}

// Mock data for work fields
const mockWorkFields: SmartSheetField[] = [
  { id: "work_1", name: "Work Name", dataType: "text", source: "work", required: true, order: 1 },
  { id: "work_2", name: "Work Code", dataType: "text", source: "work", required: true, order: 2 },
  { id: "work_3", name: "Estimate Amount", dataType: "number", source: "work", required: true, order: 3 },
  { id: "work_4", name: "Contractor Name", dataType: "text", source: "work", required: false, order: 4 },
  { id: "work_5", name: "Start Date", dataType: "date", source: "work", required: false, order: 5 },
  { id: "work_6", name: "Completion Date", dataType: "date", source: "work", required: false, order: 6 },
  {
    id: "work_7",
    name: "Status",
    dataType: "dropdown",
    source: "work",
    options: ["Not Started", "In Progress", "Completed"],
    required: true,
    order: 7,
  },
]

// Mock data for info hub fields
const mockInfoHubFields: SmartSheetField[] = [
  { id: "info_1", name: "Zone", dataType: "text", source: "infohub", required: true, order: 1 },
  { id: "info_2", name: "District", dataType: "text", source: "infohub", required: true, order: 2 },
  { id: "info_3", name: "Town Panchayat", dataType: "text", source: "infohub", required: true, order: 3 },
  { id: "info_4", name: "Total Population", dataType: "number", source: "infohub", required: false, order: 4 },
  { id: "info_5", name: "Total Area (Sq mt)", dataType: "number", source: "infohub", required: false, order: 5 },
  { id: "info_6", name: "No of Wards", dataType: "number", source: "infohub", required: false, order: 6 },
  { id: "info_7", name: "Assembly", dataType: "text", source: "infohub", required: false, order: 7 },
]

// Mock smart sheets
let mockSmartSheets: SmartSheet[] = [
  {
    id: "1",
    name: "Road Construction Progress",
    description: "Track progress of road construction works",
    type: "scheme",
    scheme: "Road Development",
    component: "Rural Roads",
    year: "2024",
    schemeName: "Road Development",
    componentName: "Rural Roads",
    fields: [mockWorkFields[0], mockWorkFields[2], mockWorkFields[6], mockInfoHubFields[0], mockInfoHubFields[1]],
    isShared: true,
    isFrozen: false,
    createdBy: "admin",
    createdAt: "2024-01-15",
    sharedWith: ["user1", "user2", "user3"],
    order: 1,
    sectionName: "Infrastructure Projects",
  },
  {
    id: "2",
    name: "Water Supply Survey",
    description: "General survey for water supply projects",
    type: "general",
    fields: [
      { id: "custom_1", name: "Survey Location", dataType: "text", source: "custom", required: true, order: 1 },
      {
        id: "custom_2",
        name: "Water Source Available",
        dataType: "boolean",
        source: "custom",
        required: true,
        order: 2,
      },
      {
        id: "custom_3",
        name: "Distance from Main Line (m)",
        dataType: "number",
        source: "custom",
        required: false,
        order: 3,
      },
    ],
    isShared: true,
    isFrozen: true,
    createdBy: "admin",
    createdAt: "2024-01-10",
    sharedWith: ["user1", "user2"],
    order: 2,
    sectionName: "Survey Forms",
  },
]

// Mock templates
let mockTemplates: SheetTemplate[] = [
  {
    id: "1",
    name: "Road Project Template",
    description: "Standard template for road construction projects",
    type: "scheme",
    sheets: [
      {
        name: "Project Overview",
        fields: [mockWorkFields[0], mockWorkFields[1], mockWorkFields[2]],
        scheme: "Road Development",
        component: "Rural Roads",
        year: "2024",
      },
      {
        name: "Location Details",
        fields: [mockInfoHubFields[0], mockInfoHubFields[1], mockInfoHubFields[2]],
        scheme: "Road Development",
        component: "Rural Roads",
        year: "2024",
      },
    ],
    createdBy: "admin",
    createdAt: "2024-01-01",
  },
]

// Mock sheet data entries
const mockSheetDataEntries: SheetDataEntry[] = [
  {
    id: "1",
    sheetId: "1",
    data: {
      work_1: "NH Road Construction",
      work_2: "Completed",
      info_1: "North Chennai",
      info_2: "Tiruvallur",
    },
    submittedBy: "user1",
    submittedAt: "2024-01-20",
    status: "submitted",
  },
]

class SmartSheetService {
  // Get all smart sheets
  async getSmartSheets(): Promise<SmartSheet[]> {
    return [...mockSmartSheets].sort((a, b) => a.order - b.order)
  }

  // Get shared sheets (only shared and not frozen for data entry)
  async getSharedSheets(userId: string): Promise<SmartSheet[]> {
    return mockSmartSheets.filter(
      (sheet) => sheet.isShared && (sheet.sharedWith.includes(userId) || sheet.createdBy === userId),
    )
  }

  // Get available work fields based on scheme/component/year
  async getWorkFields(scheme: string, component: string, year: string): Promise<SmartSheetField[]> {
    // In real implementation, this would filter based on scheme/component/year
    return [...mockWorkFields]
  }

  // Get available info hub fields
  async getInfoHubFields(): Promise<SmartSheetField[]> {
    return [...mockInfoHubFields]
  }

  // Create a new smart sheet
  async createSmartSheet(sheet: Omit<SmartSheet, "id" | "createdAt" | "order">): Promise<SmartSheet> {
    const newSheet: SmartSheet = {
      ...sheet,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
      order: mockSmartSheets.length + 1,
    }
    mockSmartSheets.push(newSheet)
    return newSheet
  }

  // Update smart sheet
  async updateSmartSheet(id: string, updates: Partial<SmartSheet>): Promise<SmartSheet> {
    const index = mockSmartSheets.findIndex((s) => s.id === id)
    if (index === -1) throw new Error("Sheet not found")

    mockSmartSheets[index] = { ...mockSmartSheets[index], ...updates }
    return mockSmartSheets[index]
  }

  // Delete smart sheet
  async deleteSmartSheet(id: string): Promise<void> {
    mockSmartSheets = mockSmartSheets.filter((s) => s.id !== id)
  }

  // Reorder sheets (drag and drop)
  async reorderSheets(sheetIds: string[]): Promise<void> {
    const reordered = sheetIds
      .map((id, index) => {
        const sheet = mockSmartSheets.find((s) => s.id === id)
        if (sheet) {
          return { ...sheet, order: index + 1 }
        }
        return null
      })
      .filter(Boolean) as SmartSheet[]

    mockSmartSheets = reordered
  }

  // Share sheet
  async shareSheet(id: string, userIds: string[]): Promise<SmartSheet> {
    return this.updateSmartSheet(id, { isShared: true, sharedWith: userIds })
  }

  // Freeze sheet (admin only)
  async freezeSheet(id: string): Promise<SmartSheet> {
    return this.updateSmartSheet(id, { isFrozen: true })
  }

  // Unfreeze sheet (admin only)
  async unfreezeSheet(id: string): Promise<SmartSheet> {
    return this.updateSmartSheet(id, { isFrozen: false })
  }

  // Submit sheet data
  async submitSheetData(entry: Omit<SheetDataEntry, "id" | "submittedAt">): Promise<SheetDataEntry> {
    const newEntry: SheetDataEntry = {
      ...entry,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    }
    mockSheetDataEntries.push(newEntry)
    return newEntry
  }

  // Get sheet data entries
  async getSheetDataEntries(sheetId: string): Promise<SheetDataEntry[]> {
    return mockSheetDataEntries.filter((e) => e.sheetId === sheetId)
  }

  // Get update tracking (admin only)
  async getUpdateTracking(sheetId: string): Promise<SheetUpdateTracking> {
    const sheet = mockSmartSheets.find((s) => s.id === sheetId)
    if (!sheet) throw new Error("Sheet not found")

    const entries = mockSheetDataEntries.filter((e) => e.sheetId === sheetId && e.status === "submitted")
    const updatedUserIds = new Set(entries.map((e) => e.submittedBy))

    const updated = Array.from(updatedUserIds).map((userId) => ({
      userId,
      userName: `User ${userId}`,
      updatedAt: entries.find((e) => e.submittedBy === userId)?.submittedAt || "",
    }))

    const notUpdated = sheet.sharedWith
      .filter((userId) => !updatedUserIds.has(userId))
      .map((userId) => ({
        userId,
        userName: `User ${userId}`,
      }))

    return {
      sheetId: sheet.id,
      sheetName: sheet.name,
      totalShared: sheet.sharedWith.length,
      updated,
      notUpdated,
    }
  }

  // Get schemes for dropdown
  async getSchemes(): Promise<string[]> {
    return ["Road Development", "Water Supply", "Sanitation", "Housing"]
  }

  // Get components for dropdown
  async getComponents(scheme: string): Promise<string[]> {
    const components: Record<string, string[]> = {
      "Road Development": ["Rural Roads", "Urban Roads", "Highways"],
      "Water Supply": ["Pipeline", "Storage Tank", "Treatment Plant"],
      Sanitation: ["Drainage", "Sewage Treatment", "Solid Waste"],
      Housing: ["Individual Housing", "Apartment Complex", "Slum Rehabilitation"],
    }
    return components[scheme] || []
  }

  // Get years for dropdown
  async getYears(): Promise<string[]> {
    const currentYear = new Date().getFullYear()
    return Array.from({ length: 5 }, (_, i) => (currentYear - i).toString())
  }

  async getSections(): Promise<string[]> {
    const sections = new Set(mockSmartSheets.filter((s) => s.sectionName).map((s) => s.sectionName!))
    return Array.from(sections)
  }

  async getSheetsBySection(sectionName: string): Promise<SmartSheet[]> {
    return mockSmartSheets.filter((s) => s.sectionName === sectionName).sort((a, b) => a.order - b.order)
  }

  // Template management methods
  async getTemplates(): Promise<SheetTemplate[]> {
    return [...mockTemplates]
  }

  async createTemplate(template: Omit<SheetTemplate, "id" | "createdAt">): Promise<SheetTemplate> {
    const newTemplate: SheetTemplate = {
      ...template,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
    }
    mockTemplates.push(newTemplate)
    return newTemplate
  }

  async loadTemplate(templateId: string): Promise<SheetTemplate> {
    const template = mockTemplates.find((t) => t.id === templateId)
    if (!template) throw new Error("Template not found")
    return template
  }

  async deleteTemplate(id: string): Promise<void> {
    mockTemplates = mockTemplates.filter((t) => t.id !== id)
  }
}

export const smartSheetService = new SmartSheetService()
