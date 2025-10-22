export interface TownPanchayatInfo {
  id: string
  zone: string
  district: string
  townPanchayat: string
  totalPopulation: number
  presentPopulation: number
  totalAreaSqMt: number
  assembly: string
  parliament: string
  noOfWards: number
  noOfStreets: number
}

export interface InfoHubFilters {
  zone: string
  district: string
  townPanchayat: string
}

class InfoHubService {
  private mockData: TownPanchayatInfo[] = [
    {
      id: "1",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Tiruvallur",
      totalPopulation: 85000,
      presentPopulation: 92000,
      totalAreaSqMt: 42500000,
      assembly: "Tiruvallur",
      parliament: "Tiruvallur",
      noOfWards: 33,
      noOfStreets: 145,
    },
    {
      id: "2",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Poonamallee",
      totalPopulation: 65000,
      presentPopulation: 71000,
      totalAreaSqMt: 28500000,
      assembly: "Poonamallee",
      parliament: "Sriperumbudur",
      noOfWards: 27,
      noOfStreets: 98,
    },
    {
      id: "3",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Avadi",
      totalPopulation: 125000,
      presentPopulation: 138000,
      totalAreaSqMt: 58000000,
      assembly: "Avadi",
      parliament: "Tiruvallur",
      noOfWards: 42,
      noOfStreets: 215,
    },
    {
      id: "4",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Ponneri",
      totalPopulation: 45000,
      presentPopulation: 48500,
      totalAreaSqMt: 32000000,
      assembly: "Ponneri",
      parliament: "Tiruvallur",
      noOfWards: 21,
      noOfStreets: 87,
    },
    {
      id: "5",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Vellore City",
      totalPopulation: 185000,
      presentPopulation: 205000,
      totalAreaSqMt: 87500000,
      assembly: "Vellore",
      parliament: "Vellore",
      noOfWards: 60,
      noOfStreets: 342,
    },
    {
      id: "6",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Katpadi",
      totalPopulation: 95000,
      presentPopulation: 102000,
      totalAreaSqMt: 45000000,
      assembly: "Katpadi",
      parliament: "Vellore",
      noOfWards: 36,
      noOfStreets: 178,
    },
    {
      id: "7",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Arcot",
      totalPopulation: 58000,
      presentPopulation: 62500,
      totalAreaSqMt: 35000000,
      assembly: "Arcot",
      parliament: "Arakkonam",
      noOfWards: 24,
      noOfStreets: 112,
    },
    {
      id: "8",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Ranipet",
      totalPopulation: 72000,
      presentPopulation: 78000,
      totalAreaSqMt: 38500000,
      assembly: "Ranipet",
      parliament: "Arakkonam",
      noOfWards: 30,
      noOfStreets: 145,
    },
  ]

  async getTownPanchayatInfo(filters: InfoHubFilters): Promise<TownPanchayatInfo[]> {
    return new Promise((resolve) => {
      let filteredData = [...this.mockData]

      if (filters.zone && filters.zone !== "all") {
        filteredData = filteredData.filter((item) => item.zone === filters.zone)
      }

      if (filters.district && filters.district !== "all") {
        filteredData = filteredData.filter((item) => item.district === filters.district)
      }

      if (filters.townPanchayat && filters.townPanchayat !== "all") {
        filteredData = filteredData.filter((item) => item.townPanchayat === filters.townPanchayat)
      }

      resolve(filteredData)
    })
  }

  async getZones(): Promise<string[]> {
    return new Promise((resolve) => {
      const zones = [...new Set(this.mockData.map((item) => item.zone))]
      resolve(zones)
    })
  }

  async getDistricts(zone?: string): Promise<string[]> {
    return new Promise((resolve) => {
      let data = this.mockData
      if (zone && zone !== "all") {
        data = data.filter((item) => item.zone === zone)
      }
      const districts = [...new Set(data.map((item) => item.district))]
      resolve(districts)
    })
  }

  async getTownPanchayats(district?: string): Promise<string[]> {
    return new Promise((resolve) => {
      let data = this.mockData
      if (district && district !== "all") {
        data = data.filter((item) => item.district === district)
      }
      const townPanchayats = [...new Set(data.map((item) => item.townPanchayat))]
      resolve(townPanchayats)
    })
  }
}

export const infoHubService = new InfoHubService()
