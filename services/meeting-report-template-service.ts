export interface MeetingReportTemplate {
  id: string
  name: string
  reportType: "overall" | "scheme" | "component" | "year"
  viewOptions: string[]
  filters: {
    scheme?: string
    component?: string
    year: string
    zone: string
    district: string
    townPanchayat: string
    schemeTypeAnnouncement: boolean
    schemeTypeFlagship: boolean
    amountFormat?: string
    comparedMeeting?: string
  }
  createdAt: string
}

class MeetingReportTemplateService {
  private templates: MeetingReportTemplate[] = [
    {
      id: "1",
      name: "North Zone Announcement Meetings",
      reportType: "overall",
      viewOptions: ["zone", "scheme"],
      filters: {
        scheme: "all",
        component: "all",
        year: "all",
        zone: "North Zone",
        district: "all",
        townPanchayat: "all",
        schemeTypeAnnouncement: true,
        schemeTypeFlagship: false,
        amountFormat: "lakhs",
        comparedMeeting: "none",
      },
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      name: "2023-24 Infrastructure Meetings",
      reportType: "component",
      viewOptions: ["year"],
      filters: {
        scheme: "MGNREGA",
        component: "Infrastructure Development",
        year: "2023-24",
        zone: "all",
        district: "all",
        townPanchayat: "all",
        schemeTypeAnnouncement: true,
        schemeTypeFlagship: true,
        amountFormat: "crores",
        comparedMeeting: "none",
      },
      createdAt: "2024-01-20T14:45:00Z",
    },
  ]

  async getTemplates(): Promise<MeetingReportTemplate[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...this.templates]
  }

  async saveTemplate(template: Omit<MeetingReportTemplate, "id" | "createdAt">): Promise<MeetingReportTemplate> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newTemplate: MeetingReportTemplate = {
      ...template,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    this.templates.unshift(newTemplate)
    return newTemplate
  }

  async deleteTemplate(templateId: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    this.templates = this.templates.filter((t) => t.id !== templateId)
  }

  async reorderTemplates(orderedIds: string[]): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const reordered: MeetingReportTemplate[] = []
    orderedIds.forEach((id) => {
      const template = this.templates.find((t) => t.id === id)
      if (template) {
        reordered.push(template)
      }
    })

    this.templates = reordered
  }
}

export const meetingReportTemplateService = new MeetingReportTemplateService()
