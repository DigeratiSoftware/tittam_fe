import { apiClient } from "../lib/api-client"

export interface Scheme {
  _id: string
  id: string // Mapped from schemeId for frontend compatibility
  schemeId: string // Custom scheme identifier like SCHEM002
  englishName: string
  tamilName: string
  englishAbbreviation: string
  remark: string
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy?: string
}

export interface CreateSchemeRequest {
  englishName: string
  tamilName: string
  englishAbbreviation: string
  remark: string
}

// Helper function to map API response to frontend Scheme interface
function mapApiSchemeToScheme(apiScheme: any): Scheme {
  return {
    _id: apiScheme._id,
    id: apiScheme.schemeId, // Map schemeId to id for frontend compatibility
    schemeId: apiScheme.schemeId,
    englishName: apiScheme.englishName,
    tamilName: apiScheme.tamilName,
    englishAbbreviation: apiScheme.englishAbbreviation,
    remark: apiScheme.remark,
    createdAt: apiScheme.createdAt,
    updatedAt: apiScheme.updatedAt,
    createdBy: apiScheme.createdBy?.name || apiScheme.createdBy || "Unknown",
    updatedBy: apiScheme.updatedBy?.name || apiScheme.updatedBy,
  }
}

class SchemeService {
  private readonly API_BASE = "/api/v1/schemes"

  async getAllSchemes(): Promise<Scheme[]> {
    try {
      console.log("[v0] Fetching all schemes from API")
      const response = await apiClient.get<any[]>(this.API_BASE)

      if (response.success && response.data) {
        console.log("[v0] Successfully fetched schemes:", response.data)
        return response.data.map(mapApiSchemeToScheme)
      } else {
        console.error("[v0] Failed to fetch schemes:", response.error)
        throw new Error(response.error || "Failed to fetch schemes")
      }
    } catch (error) {
      console.error("[v0] Error in getAllSchemes:", error)
      throw error
    }
  }

  async createScheme(request: CreateSchemeRequest): Promise<Scheme> {
    try {
      console.log("[v0] Creating scheme with data:", request)
      const response = await apiClient.post<any>(this.API_BASE, request)

      if (response.success && response.data) {
        console.log("[v0] Successfully created scheme:", response.data)
        return mapApiSchemeToScheme(response.data)
      } else {
        console.error("[v0] Failed to create scheme:", response.error)
        throw new Error(response.error || "Failed to create scheme")
      }
    } catch (error) {
      console.error("[v0] Error in createScheme:", error)
      throw error
    }
  }

  async getSchemeById(id: string): Promise<Scheme | null> {
    try {
      console.log("[v0] Fetching scheme by ID:", id)
      const response = await apiClient.get<any>(`${this.API_BASE}/${id}`)

      if (response.success && response.data) {
        console.log("[v0] Successfully fetched scheme:", response.data)
        return mapApiSchemeToScheme(response.data)
      } else {
        console.error("[v0] Failed to fetch scheme:", response.error)
        return null
      }
    } catch (error) {
      console.error("[v0] Error in getSchemeById:", error)
      return null
    }
  }

  async updateScheme(id: string, request: CreateSchemeRequest): Promise<Scheme> {
    try {
      console.log("[v0] Updating scheme:", id, "with data:", request)
      const response = await apiClient.put<any>(`${this.API_BASE}/${id}`, request)

      if (response.success && response.data) {
        console.log("[v0] Successfully updated scheme:", response.data)
        return mapApiSchemeToScheme(response.data)
      } else {
        console.error("[v0] Failed to update scheme:", response.error)
        throw new Error(response.error || "Failed to update scheme")
      }
    } catch (error) {
      console.error("[v0] Error in updateScheme:", error)
      throw error
    }
  }

  async deleteScheme(id: string): Promise<void> {
    try {
      console.log("[v0] Deleting scheme:", id)
      const response = await apiClient.delete(`${this.API_BASE}/${id}`)

      if (response.success) {
        console.log("[v0] Successfully deleted scheme:", id)
      } else {
        console.error("[v0] Failed to delete scheme:", response.error)
        throw new Error(response.error || "Failed to delete scheme")
      }
    } catch (error) {
      console.error("[v0] Error in deleteScheme:", error)
      throw error
    }
  }
}

export const schemeService = new SchemeService()
