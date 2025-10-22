import { apiClient } from "@/lib/api-client"

export interface Zone {
  id: string
  zoneId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

export interface District {
  id: string
  districtId: string
  zoneId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

export interface TownPanchayat {
  id: string
  tpId: string
  districtId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

export interface Ward {
  id: string
  wardId: string
  townPanchayatId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

interface ApiZone {
  _id: string
  zoneId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

interface ApiDistrict {
  _id: string
  districtId: string
  zoneId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

interface ApiTownPanchayat {
  _id: string
  tpId: string
  districtId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

interface ApiWard {
  _id: string
  wardId: string
  townPanchayatId: string
  nameEnglish: string
  nameTamil: string
  remark: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

const mapApiZoneToZone = (apiZone: ApiZone): Zone => ({
  id: apiZone.zoneId,
  zoneId: apiZone.zoneId,
  nameEnglish: apiZone.nameEnglish,
  nameTamil: apiZone.nameTamil,
  remark: apiZone.remark,
  createdBy: apiZone.createdBy,
  updatedBy: apiZone.updatedBy,
  createdAt: apiZone.createdAt,
  updatedAt: apiZone.updatedAt,
})

const mapApiDistrictToDistrict = (apiDistrict: ApiDistrict): District => ({
  id: apiDistrict.districtId,
  districtId: apiDistrict.districtId,
  zoneId: apiDistrict.zoneId,
  nameEnglish: apiDistrict.nameEnglish,
  nameTamil: apiDistrict.nameTamil,
  remark: apiDistrict.remark,
  createdBy: apiDistrict.createdBy,
  updatedBy: apiDistrict.updatedBy,
  createdAt: apiDistrict.createdAt,
  updatedAt: apiDistrict.updatedAt,
})

const mapApiTownPanchayatToTownPanchayat = (apiTp: ApiTownPanchayat): TownPanchayat => ({
  id: apiTp.tpId,
  tpId: apiTp.tpId,
  districtId: apiTp.districtId,
  nameEnglish: apiTp.nameEnglish,
  nameTamil: apiTp.nameTamil,
  remark: apiTp.remark,
  createdBy: apiTp.createdBy,
  updatedBy: apiTp.updatedBy,
  createdAt: apiTp.createdAt,
  updatedAt: apiTp.updatedAt,
})

const mapApiWardToWard = (apiWard: ApiWard): Ward => ({
  id: apiWard.wardId,
  wardId: apiWard.wardId,
  townPanchayatId: apiWard.townPanchayatId,
  nameEnglish: apiWard.nameEnglish,
  nameTamil: apiWard.nameTamil,
  remark: apiWard.remark,
  createdBy: apiWard.createdBy,
  updatedBy: apiWard.updatedBy,
  createdAt: apiWard.createdAt,
  updatedAt: apiWard.updatedAt,
})

export class MastersService {
  static async getAllZones(): Promise<Zone[]> {
    try {
      const response = await apiClient.get<any>("/api/v1/zones")
      console.log("[v0] Zones API response:", response)

      let zonesArray: ApiZone[]
      if (Array.isArray(response)) {
        zonesArray = response
      } else if (response.data && Array.isArray(response.data)) {
        zonesArray = response.data
      } else if (response.zones && Array.isArray(response.zones)) {
        zonesArray = response.zones
      } else {
        console.error("[v0] Unexpected zones response structure:", response)
        throw new Error("Invalid response structure from zones API")
      }

      return zonesArray.map(mapApiZoneToZone)
    } catch (error) {
      console.error("[v0] Failed to fetch zones:", error)
      throw error
    }
  }

  static async createZone(zone: Omit<Zone, "id" | "zoneId" | "createdAt" | "updatedAt">): Promise<Zone> {
    try {
      const response = await apiClient.post<ApiZone>("/api/v1/zones", zone)
      return mapApiZoneToZone(response)
    } catch (error) {
      console.error("[v0] Failed to create zone:", error)
      throw error
    }
  }

  static async updateZone(zoneId: string, zone: Partial<Zone>): Promise<Zone> {
    try {
      const response = await apiClient.put<ApiZone>(`/api/v1/zones/${zoneId}`, zone)
      return mapApiZoneToZone(response)
    } catch (error) {
      console.error("[v0] Failed to update zone:", error)
      throw error
    }
  }

  static async getDistrictsByZone(zoneId: string): Promise<District[]> {
    try {
      const response = await apiClient.get<any>(`/api/v1/districts/zone/${zoneId}`)
      console.log("[v0] Districts API response:", response)

      let districtsArray: ApiDistrict[]
      if (Array.isArray(response)) {
        districtsArray = response
      } else if (response.data && Array.isArray(response.data)) {
        districtsArray = response.data
      } else if (response.districts && Array.isArray(response.districts)) {
        districtsArray = response.districts
      } else {
        console.error("[v0] Unexpected districts response structure:", response)
        throw new Error("Invalid response structure from districts API")
      }

      return districtsArray.map(mapApiDistrictToDistrict)
    } catch (error) {
      console.error("[v0] Failed to fetch districts:", error)
      throw error
    }
  }

  static async createDistrict(
    district: Omit<District, "id" | "districtId" | "createdAt" | "updatedAt">,
  ): Promise<District> {
    try {
      const response = await apiClient.post<ApiDistrict>("/api/v1/districts", district)
      return mapApiDistrictToDistrict(response)
    } catch (error) {
      console.error("[v0] Failed to create district:", error)
      throw error
    }
  }

  static async updateDistrict(districtId: string, district: Partial<District>): Promise<District> {
    try {
      const response = await apiClient.put<ApiDistrict>(`/api/v1/districts/${districtId}`, district)
      return mapApiDistrictToDistrict(response)
    } catch (error) {
      console.error("[v0] Failed to update district:", error)
      throw error
    }
  }

  static async getTownPanchayatsByDistrict(districtId: string): Promise<TownPanchayat[]> {
    try {
      const response = await apiClient.get<any>(`/api/v1/town-panchayats/district/${districtId}`)
      console.log("[v0] Town Panchayats API response:", response)

      let townPanchayatsArray: ApiTownPanchayat[]
      if (Array.isArray(response)) {
        townPanchayatsArray = response
      } else if (response.data && Array.isArray(response.data)) {
        townPanchayatsArray = response.data
      } else if (response.townPanchayats && Array.isArray(response.townPanchayats)) {
        townPanchayatsArray = response.townPanchayats
      } else {
        console.error("[v0] Unexpected town panchayats response structure:", response)
        throw new Error("Invalid response structure from town panchayats API")
      }

      return townPanchayatsArray.map(mapApiTownPanchayatToTownPanchayat)
    } catch (error) {
      console.error("[v0] Failed to fetch town panchayats:", error)
      throw error
    }
  }

  static async createTownPanchayat(
    townPanchayat: Omit<TownPanchayat, "id" | "tpId" | "createdAt" | "updatedAt">,
  ): Promise<TownPanchayat> {
    try {
      const response = await apiClient.post<ApiTownPanchayat>("/api/v1/town-panchayats", townPanchayat)
      return mapApiTownPanchayatToTownPanchayat(response)
    } catch (error) {
      console.error("[v0] Failed to create town panchayat:", error)
      throw error
    }
  }

  static async updateTownPanchayat(tpId: string, townPanchayat: Partial<TownPanchayat>): Promise<TownPanchayat> {
    try {
      const response = await apiClient.put<ApiTownPanchayat>(`/api/v1/town-panchayats/${tpId}`, townPanchayat)
      return mapApiTownPanchayatToTownPanchayat(response)
    } catch (error) {
      console.error("[v0] Failed to update town panchayat:", error)
      throw error
    }
  }

  static async getWardsByTownPanchayat(townPanchayatId: string): Promise<Ward[]> {
    try {
      const response = await apiClient.get<any>(`/api/v1/wards/townPanchayat/${townPanchayatId}`)
      console.log("[v0] Wards API response:", response)

      let wardsArray: ApiWard[]
      if (Array.isArray(response)) {
        wardsArray = response
      } else if (response.data && Array.isArray(response.data)) {
        wardsArray = response.data
      } else if (response.wards && Array.isArray(response.wards)) {
        wardsArray = response.wards
      } else {
        console.error("[v0] Unexpected wards response structure:", response)
        throw new Error("Invalid response structure from wards API")
      }

      return wardsArray.map(mapApiWardToWard)
    } catch (error) {
      console.error("[v0] Failed to fetch wards:", error)
      throw error
    }
  }

  static async createWard(ward: Omit<Ward, "id" | "wardId" | "createdAt" | "updatedAt">): Promise<Ward> {
    try {
      const response = await apiClient.post<ApiWard>("/api/v1/wards", ward)
      return mapApiWardToWard(response)
    } catch (error) {
      console.error("[v0] Failed to create ward:", error)
      throw error
    }
  }

  static async updateWard(wardId: string, ward: Partial<Ward>): Promise<Ward> {
    try {
      const response = await apiClient.put<ApiWard>(`/api/v1/wards/${wardId}`, ward)
      return mapApiWardToWard(response)
    } catch (error) {
      console.error("[v0] Failed to update ward:", error)
      throw error
    }
  }
}
