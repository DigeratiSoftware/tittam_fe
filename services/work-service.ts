export interface Work {
  id: string
  schemeId: string
  schemeName: string
  componentId: string
  componentName: string
  fieldData: { [key: string]: any }
  status: "pending" | "in_progress" | "completed"
  createdBy: string
  createdAt: string
  updatedAt?: string
}

class WorkService {
  private readonly STORAGE_KEY = "works"

  private getStoredWorks(): Work[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  private saveWorks(works: Work[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(works))
  }

  async createWork(workData: Omit<Work, "id">): Promise<Work> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const work: Work = {
      id: Date.now().toString(),
      status: "pending", // Default status for new work
      ...workData,
    }

    const works = this.getStoredWorks()
    works.push(work)
    this.saveWorks(works)

    return work
  }

  async getWorks(): Promise<Work[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return this.getStoredWorks()
  }

  async getWorkById(id: string): Promise<Work | null> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200))

    const works = this.getStoredWorks()
    return works.find((work) => work.id === id) || null
  }

  async getWorksByScheme(schemeId: string): Promise<Work[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const works = this.getStoredWorks()
    return works.filter((work) => work.schemeId === schemeId)
  }

  async getWorksByComponent(componentId: string): Promise<Work[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const works = this.getStoredWorks()
    return works.filter((work) => work.componentId === componentId)
  }

  async updateWork(id: string, updates: Partial<Work>): Promise<Work> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const works = this.getStoredWorks()
    const index = works.findIndex((work) => work.id === id)

    if (index === -1) {
      throw new Error("Work not found")
    }

    works[index] = {
      ...works[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    this.saveWorks(works)

    return works[index]
  }

  async deleteWork(id: string): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const works = this.getStoredWorks()
    const filteredWorks = works.filter((work) => work.id !== id)
    this.saveWorks(filteredWorks)
  }

  async deleteWorksByScheme(schemeId: string): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 400))

    const works = this.getStoredWorks()
    const filteredWorks = works.filter((work) => work.schemeId !== schemeId)
    this.saveWorks(filteredWorks)
  }

  async deleteWorksByComponent(componentId: string): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 400))

    const works = this.getStoredWorks()
    const filteredWorks = works.filter((work) => work.componentId !== componentId)
    this.saveWorks(filteredWorks)
  }

  async searchWorks(searchTerm: string): Promise<Work[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const works = this.getStoredWorks()
    const lowercaseSearch = searchTerm.toLowerCase()

    return works.filter(
      (work) =>
        work.schemeName.toLowerCase().includes(lowercaseSearch) ||
        work.componentName.toLowerCase().includes(lowercaseSearch) ||
        work.createdBy.toLowerCase().includes(lowercaseSearch) ||
        Object.values(work.fieldData).some((value) => String(value).toLowerCase().includes(lowercaseSearch)),
    )
  }

  async getWorkStats(): Promise<{
    total: number
    pending: number
    inProgress: number
    completed: number
    byScheme: { [schemeName: string]: number }
    byComponent: { [componentName: string]: number }
    byCreator: { [createdBy: string]: number }
  }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200))

    const works = this.getStoredWorks()

    const stats = {
      total: works.length,
      pending: 0,
      inProgress: 0,
      completed: 0,
      byScheme: {} as { [schemeName: string]: number },
      byComponent: {} as { [componentName: string]: number },
      byCreator: {} as { [createdBy: string]: number },
    }

    works.forEach((work) => {
      // Count by status
      switch (work.status) {
        case "pending":
          stats.pending++
          break
        case "in_progress":
          stats.inProgress++
          break
        case "completed":
          stats.completed++
          break
      }

      // Count by scheme
      stats.byScheme[work.schemeName] = (stats.byScheme[work.schemeName] || 0) + 1

      // Count by component
      stats.byComponent[work.componentName] = (stats.byComponent[work.componentName] || 0) + 1

      // Count by creator
      stats.byCreator[work.createdBy] = (stats.byCreator[work.createdBy] || 0) + 1
    })

    return stats
  }

  async updateWorkStatus(id: string, status: "pending" | "in_progress" | "completed"): Promise<Work> {
    return this.updateWork(id, { status })
  }
}

export const workService = new WorkService()
