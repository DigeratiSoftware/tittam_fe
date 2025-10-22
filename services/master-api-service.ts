export interface MasterApiService {
  getZones(): Promise<any[]>
  getDistricts(zoneId?: string): Promise<any[]>
  getTownPanchayats(districtId?: string): Promise<any[]>
  getWards(townPanchayatId?: string): Promise<any[]>
  getAgencies(): Promise<any[]>
  getRoadTypesEnglish(): Promise<any[]>
  getRoadTypesTamil(): Promise<any[]>
  getDurationUnits(): Promise<any[]>
  getStages(): Promise<any[]>
  getContractors(): Promise<any[]>
  getContractorNames(gstNo?: string): Promise<any[]>
}

import { TokenStorage } from "../lib/token-storage"

class MasterApiServiceImpl implements MasterApiService {
  private baseUrl = "http://127.0.0.1:4000"

  private async makeRequest(endpoint: string): Promise<any[]> {
    try {
      console.log(`[v0] Making master API request to: ${this.baseUrl}${endpoint}`)

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      }

      const accessToken = TokenStorage.getAccessToken()
      const refreshToken = TokenStorage.getRefreshToken()

      if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`
      }
      if (refreshToken) {
        headers["x-refresh-token"] = refreshToken
      }

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers,
      })

      console.log(`[v0] Master API response status: ${response.status}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log(`[v0] Master API response data:`, data)

      let result: any[] = []
      if (Array.isArray(data)) {
        result = data
      } else if (data.success && Array.isArray(data.data)) {
        result = data.data
      } else if (data.data && Array.isArray(data.data)) {
        result = data.data
      } else {
        result = []
      }

      console.log(`[v0] Processed master API result:`, result)
      return result
    } catch (error) {
      console.error(`[v0] Failed to fetch ${endpoint}:`, error)
      return []
    }
  }

  async getZones(): Promise<any[]> {
    console.log("[v0] Fetching zones from master API")
    return this.makeRequest("/api/v1/zones")
  }

  async getDistricts(zoneId?: string): Promise<any[]> {
    console.log(`[v0] Fetching districts from master API, zoneId: ${zoneId}`)
    const endpoint = zoneId ? `/api/v1/districts/zone/${zoneId}` : "/api/v1/districts";
    return this.makeRequest(endpoint)
  }

  async getTownPanchayats(districtId?: string): Promise<any[]> {
    console.log(`[v0] Fetching town panchayats from master API, districtId: ${districtId}`)
  const endpoint = districtId 
  ? `/api/v1/town-panchayats/district/${districtId}` 
  : "/api/v1/town-panchayats";
      return this.makeRequest(endpoint)
  }

  async getWards(townPanchayatId?: string): Promise<any[]> {
    console.log(`[v0] Fetching wards from master API, townPanchayatId: ${townPanchayatId}`)
const endpoint = townPanchayatId 
  ? `/api/v1/wards/townPanchayat/${townPanchayatId}` 
  : "/api/v1/wards";
      return this.makeRequest(endpoint)
  }

  async getAgencies(): Promise<any[]> {
    return this.makeRequest("/api/lov/agencies")
  }

  async getRoadTypesEnglish(): Promise<any[]> {
    return this.makeRequest("/api/lov/roadTypesEnglish")
  }

  async getRoadTypesTamil(): Promise<any[]> {
    return this.makeRequest("/api/lov/roadTypesTamil")
  }

  async getDurationUnits(): Promise<any[]> {
    return this.makeRequest("/api/lov/durationUnits")
  }

  async getStages(): Promise<any[]> {
    return this.makeRequest("/api/lov/stages")
  }

  async getContractors(): Promise<any[]> {
    return this.makeRequest("/api/lov/contractors")
  }

  async getContractorNames(gstNo?: string): Promise<any[]> {
    const endpoint = gstNo ? `/api/lov/contractorNames?gstNo=${gstNo}` : "/api/lov/contractorNames"
    return this.makeRequest(endpoint)
  }
}

export const masterApiService = new MasterApiServiceImpl()
