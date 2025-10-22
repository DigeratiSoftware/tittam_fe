export interface SubComponent {
  id: string
  englishName: string
  tamilName: string
  componentId: string
  componentName: string
  remark: string
  createdAt: string
  createdBy: string
}

class SubComponentService {
  private subComponents: SubComponent[] = [
    // Infrastructure Components (componentId: "1")
    {
      id: "1",
      englishName: "Water Supply Network",
      tamilName: "நீர் வழங்கல் வலையமைப்பு",
      componentId: "1",
      componentName: "Water Infrastructure",
      remark: "Primary water distribution system for residential areas",
      createdAt: "2024-01-15",
      createdBy: "Admin User",
    },
    {
      id: "2",
      englishName: "Sewage Treatment Plant",
      tamilName: "கழிவுநீர் சுத்திகரிப்பு நிலையம்",
      componentId: "1",
      componentName: "Water Infrastructure",
      remark: "Centralized sewage processing facility",
      createdAt: "2024-01-16",
      createdBy: "Admin User",
    },
    {
      id: "3",
      englishName: "Storm Water Drainage",
      tamilName: "மழைநீர் வடிகால்",
      componentId: "1",
      componentName: "Water Infrastructure",
      remark: "Flood prevention and water management",
      createdAt: "2024-01-17",
      createdBy: "Super Admin",
    },
    // Transportation Components (componentId: "2")
    {
      id: "4",
      englishName: "Road Construction",
      tamilName: "சாலை கட்டுமானம்",
      componentId: "2",
      componentName: "Transportation",
      remark: "New road development projects",
      createdAt: "2024-01-18",
      createdBy: "Admin User",
    },
    {
      id: "5",
      englishName: "Traffic Signal System",
      tamilName: "போக்குவரத்து சமிக்ஞை அமைப்பு",
      componentId: "2",
      componentName: "Transportation",
      remark: "Automated traffic management system",
      createdAt: "2024-01-19",
      createdBy: "Super Admin",
    },
    {
      id: "6",
      englishName: "Bus Stop Infrastructure",
      tamilName: "பேருந்து நிறுத்த உள்கட்டமைப்பு",
      componentId: "2",
      componentName: "Transportation",
      remark: "Public transportation facilities",
      createdAt: "2024-01-20",
      createdBy: "Admin User",
    },
    // Education Components (componentId: "3")
    {
      id: "7",
      englishName: "School Building Construction",
      tamilName: "பள்ளி கட்டிட கட்டுமானம்",
      componentId: "3",
      componentName: "Education",
      remark: "New educational facility development",
      createdAt: "2024-01-21",
      createdBy: "Super Admin",
    },
    {
      id: "8",
      englishName: "Digital Learning Equipment",
      tamilName: "டிஜிட்டல் கற்றல் உபகரணங்கள்",
      componentId: "3",
      componentName: "Education",
      remark: "Modern educational technology setup",
      createdAt: "2024-01-22",
      createdBy: "Admin User",
    },
  ]

  async getAllSubComponents(): Promise<SubComponent[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...this.subComponents]), 500)
    })
  }

  async getSubComponentsByComponent(componentId: string): Promise<SubComponent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.subComponents.filter((sc) => sc.componentId === componentId)
        resolve(filtered)
      }, 500)
    })
  }

  async createSubComponent(subComponent: Omit<SubComponent, "id" | "createdAt" | "createdBy">): Promise<SubComponent> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newSubComponent: SubComponent = {
          ...subComponent,
          id: Date.now().toString(),
          createdAt: new Date().toISOString().split("T")[0],
          createdBy: "Current User",
        }
        this.subComponents.push(newSubComponent)
        resolve(newSubComponent)
      }, 500)
    })
  }

  async updateSubComponent(id: string, updates: Partial<SubComponent>): Promise<SubComponent> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.subComponents.findIndex((sc) => sc.id === id)
        if (index === -1) {
          reject(new Error("Sub component not found"))
          return
        }
        this.subComponents[index] = { ...this.subComponents[index], ...updates }
        resolve(this.subComponents[index])
      }, 500)
    })
  }

  async deleteSubComponent(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.subComponents.findIndex((sc) => sc.id === id)
        if (index === -1) {
          reject(new Error("Sub component not found"))
          return
        }
        this.subComponents.splice(index, 1)
        resolve()
      }, 500)
    })
  }
}

export const subComponentService = new SubComponentService()
