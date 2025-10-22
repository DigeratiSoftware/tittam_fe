import { apiClient } from "../lib/api-client"

export interface Component {
  id: string
  componentId: string // Added componentId field for API mapping
  englishName: string
  tamilName: string
  componentType: string
  componentTypeEnglish: string // Added componentTypeEnglish field for display
  remark: string
  createdDate: string
  createdBy: string
  fieldsCount?: number
}

export interface CreateComponentRequest {
  englishName: string
  tamilName: string
  componentType: string
  remark: string
}

interface ApiComponent {
  _id: string
  componentId: string
  englishName: string
  tamilName: string
  componentType?: string // Made optional since API doesn't always provide this
  componentTypeEnglish: string // Added componentTypeEnglish field from API response
  componentTypeTamil?: string // Added optional Tamil component type
  remark: string
  createdAt: string
  createdBy: string
  updatedAt: string
}

export const COMPONENT_TYPES = ["Infrastructure", "Individual"]

function getComponentTypeEnglish(componentType: string): string {
  const typeMapping: Record<string, string> = {
    Infrastructure: "Infrastructure",
    Individual: "Individual",
    infrastructure: "Infrastructure",
    individual: "Individual",
  }
  return typeMapping[componentType] || componentType
}

function mapApiComponentToComponent(apiComponent: ApiComponent): Component {
  return {
    id: apiComponent.componentId, // Use componentId instead of _id for mapping
    componentId: apiComponent.componentId,
    englishName: apiComponent.englishName,
    tamilName: apiComponent.tamilName,
    componentType: apiComponent.componentTypeEnglish, // Use componentTypeEnglish from API as componentType
    componentTypeEnglish: apiComponent.componentTypeEnglish, // Keep original field for reference
    remark: apiComponent.remark,
    createdDate: new Date(apiComponent.createdAt).toISOString().split("T")[0],
    createdBy: apiComponent.createdBy,
    fieldsCount: 0, // Default value as not provided by API
  }
}

class ComponentService {
  async getAllComponents(): Promise<Component[]> {
    try {
      console.log("[v0] Fetching components from API...")
      const response = await apiClient.get<{ success: boolean; data: ApiComponent[] }>("/api/v1/components")

      if (response.success && response.data) {
        console.log("[v0] Components fetched successfully:", response.data.length)
        return response.data.map(mapApiComponentToComponent)
      }

      console.log("[v0] API response unsuccessful, returning empty array")
      return []
    } catch (error) {
      console.error("[v0] Error fetching components:", error)
      return []
    }
  }

  async createComponent(request: CreateComponentRequest): Promise<Component> {
    try {
      console.log("[v0] Creating component:", request)
      const response = await apiClient.post<{ success: boolean; data: ApiComponent }>("/api/v1/components", request)

      if (response.success && response.data) {
        console.log("[v0] Component created successfully:", response.data.componentId)
        return mapApiComponentToComponent(response.data)
      }

      throw new Error("Failed to create component")
    } catch (error) {
      console.error("[v0] Error creating component:", error)
      throw error
    }
  }

  async getComponentById(componentId: string): Promise<Component | null> {
    try {
      console.log("[v0] Fetching component by ID:", componentId)
      const response = await apiClient.get<{ success: boolean; data: ApiComponent }>(
        `/api/v1/components/${componentId}`,
      )

      if (response.success && response.data) {
        console.log("[v0] Component fetched successfully:", response.data.componentId)
        return mapApiComponentToComponent(response.data)
      }

      return null
    } catch (error) {
      console.error("[v0] Error fetching component:", error)
      return null
    }
  }

  async updateComponent(componentId: string, request: CreateComponentRequest): Promise<Component> {
    try {
      console.log("[v0] Updating component:", componentId, request)
      const response = await apiClient.put<{ success: boolean; data: ApiComponent }>(
        `/api/v1/components/${componentId}`,
        request,
      )

      if (response.success && response.data) {
        console.log("[v0] Component updated successfully:", response.data.componentId)
        return mapApiComponentToComponent(response.data)
      }

      throw new Error("Failed to update component")
    } catch (error) {
      console.error("[v0] Error updating component:", error)
      throw error
    }
  }

  async deleteComponent(componentId: string): Promise<void> {
    try {
      console.log("[v0] Deleting component:", componentId)
      const response = await apiClient.delete<{ success: boolean }>(`/api/v1/components/${componentId}`)

      if (response.success) {
        console.log("[v0] Component deleted successfully:", componentId)
        return
      }

      throw new Error("Failed to delete component")
    } catch (error) {
      console.error("[v0] Error deleting component:", error)
      throw error
    }
  }
}

export const componentService = new ComponentService()
