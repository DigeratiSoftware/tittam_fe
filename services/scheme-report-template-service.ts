export interface ReportTemplate {
  id: string
  name: string
  reportType: "overall" | "scheme" | "component" | "year"
  viewOptions: string[]
  filters: {
    scheme: string
    component: string
    year: string
    zone: string
    district: string
    townPanchayat: string
    schemeTypeAnnouncement: boolean
    schemeTypeFlagship: boolean
  }
  createdAt: string
}

class SchemeReportTemplateService {
  private templates: ReportTemplate[] = [
    {
      id: "1",
      name: "North Zone Flagship Schemes",
      reportType: "overall",
      viewOptions: ["zone", "scheme"],
      filters: {
        scheme: "all",
        component: "all",
        year: "all",
        zone: "North Zone",
        district: "all",
        townPanchayat: "all",
        schemeTypeAnnouncement: false,
        schemeTypeFlagship: true,
      },
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      name: "2023-24 Component Analysis",
      reportType: "component",
      viewOptions: ["year"],
      filters: {
        scheme: "all",
        component: "all",
        year: "2023-24",
        zone: "all",
        district: "all",
        townPanchayat: "all",
        schemeTypeAnnouncement: true,
        schemeTypeFlagship: true,
      },
      createdAt: "2024-01-20T14:45:00Z",
    },
  ]

  async getTemplates(): Promise<ReportTemplate[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...this.templates]
  }

  async saveTemplate(template: Omit<ReportTemplate, "id" | "createdAt">): Promise<ReportTemplate> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newTemplate: ReportTemplate = {
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

    const reordered: ReportTemplate[] = []
    orderedIds.forEach((id) => {
      const template = this.templates.find((t) => t.id === id)
      if (template) {
        reordered.push(template)
      }
    })

    this.templates = reordered
  }
}

export const schemeReportTemplateService = new SchemeReportTemplateService()
