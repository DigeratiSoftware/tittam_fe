export interface MapLocation {
  id: string
  name: string
  type: "zone" | "district" | "townpanchayat"
  coordinates: { lat: number; lng: number }
  zone: string
  district: string
  townPanchayat: string
  totalWorks: number
  tenderStage: number
  notStarted: number
  physicallyCompleted: number
  fullyCompleted: number
  completedPercentage: number
  estimate: number
  expenditure: number
  balance: number
  expenditurePercentage: number
  workDetails: WorkDetail[]
}

export interface WorkDetail {
  id: string
  name: string
  scheme: string
  component: string
  stage: string
  estimate: number
  expenditure: number
}

export interface UserLocation {
  id: string
  name: string
  role: string
  zone: string
  district: string
  townPanchayat: string
  coordinates: { lat: number; lng: number }
  lastActive: string
  status: "active" | "inactive"
}

export interface SmartViewFilters {
  zone: string
  district: string
  townPanchayat: string
  scheme: string
  component: string
  year: string
  stage: string
}

export interface AggregatedStatistics {
  zone: string
  district: string
  townPanchayat: string
  totalWorks: number
  tenderStage: number
  notStarted: number
  physicallyCompleted: number
  fullyCompleted: number
  completedPercentage: number
  estimate: number
  expenditure: number
  balance: number
  expenditurePercentage: number
}

class SmartViewService {
  private mockLocations: MapLocation[] = [
    {
      id: "loc1",
      name: "Tiruvallur - Zone 1",
      type: "zone",
      coordinates: { lat: 13.1167, lng: 79.9167 },
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Tiruvallur",
      totalWorks: 52,
      tenderStage: 6,
      notStarted: 9,
      physicallyCompleted: 24,
      fullyCompleted: 13,
      completedPercentage: 71.2,
      estimate: 18500000,
      expenditure: 13200000,
      balance: 5300000,
      expenditurePercentage: 71.4,
      workDetails: [
        {
          id: "w1",
          name: "Road Construction - Tiruvallur Main Road",
          scheme: "PMGSY",
          component: "Roads",
          stage: "Physically Completed",
          estimate: 3200000,
          expenditure: 2900000,
        },
        {
          id: "w2",
          name: "Water Supply - Tiruvallur Phase 1",
          scheme: "Jal Jeevan Mission",
          component: "Water Supply",
          stage: "In Progress",
          estimate: 2500000,
          expenditure: 1800000,
        },
      ],
    },
    {
      id: "loc2",
      name: "Poonamallee - Zone 2",
      type: "district",
      coordinates: { lat: 13.0475, lng: 80.0953 },
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Poonamallee",
      totalWorks: 45,
      tenderStage: 5,
      notStarted: 7,
      physicallyCompleted: 21,
      fullyCompleted: 12,
      completedPercentage: 73.3,
      estimate: 16000000,
      expenditure: 11800000,
      balance: 4200000,
      expenditurePercentage: 73.8,
      workDetails: [
        {
          id: "w3",
          name: "School Building - Poonamallee",
          scheme: "Samagra Shiksha",
          component: "Education",
          stage: "Fully Completed",
          estimate: 3500000,
          expenditure: 3450000,
        },
      ],
    },
    {
      id: "loc3",
      name: "Avadi - Zone 3",
      type: "townpanchayat",
      coordinates: { lat: 13.1147, lng: 80.1018 },
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Avadi",
      totalWorks: 38,
      tenderStage: 4,
      notStarted: 6,
      physicallyCompleted: 18,
      fullyCompleted: 10,
      completedPercentage: 73.7,
      estimate: 14000000,
      expenditure: 10300000,
      balance: 3700000,
      expenditurePercentage: 73.6,
      workDetails: [],
    },
    {
      id: "loc4",
      name: "Vellore - Zone 4",
      type: "zone",
      coordinates: { lat: 12.9165, lng: 79.1325 },
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Vellore City",
      totalWorks: 58,
      tenderStage: 7,
      notStarted: 11,
      physicallyCompleted: 26,
      fullyCompleted: 14,
      completedPercentage: 69.0,
      estimate: 21000000,
      expenditure: 14500000,
      balance: 6500000,
      expenditurePercentage: 69.0,
      workDetails: [
        {
          id: "w4",
          name: "Highway Development - Vellore",
          scheme: "PMGSY",
          component: "Roads",
          stage: "In Progress",
          estimate: 5000000,
          expenditure: 3500000,
        },
      ],
    },
    {
      id: "loc5",
      name: "Katpadi - Zone 5",
      type: "district",
      coordinates: { lat: 12.9698, lng: 79.1452 },
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Katpadi",
      totalWorks: 42,
      tenderStage: 5,
      notStarted: 8,
      physicallyCompleted: 19,
      fullyCompleted: 10,
      completedPercentage: 69.0,
      estimate: 15500000,
      expenditure: 10700000,
      balance: 4800000,
      expenditurePercentage: 69.0,
      workDetails: [],
    },
    {
      id: "loc6",
      name: "Arcot - Zone 6",
      type: "townpanchayat",
      coordinates: { lat: 12.9059, lng: 79.3191 },
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Arcot",
      totalWorks: 35,
      tenderStage: 3,
      notStarted: 5,
      physicallyCompleted: 17,
      fullyCompleted: 10,
      completedPercentage: 77.1,
      estimate: 12000000,
      expenditure: 9300000,
      balance: 2700000,
      expenditurePercentage: 77.5,
      workDetails: [],
    },
    {
      id: "loc7",
      name: "Ponneri - Zone 7",
      type: "townpanchayat",
      coordinates: { lat: 13.3333, lng: 80.1833 },
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Ponneri",
      totalWorks: 31,
      tenderStage: 3,
      notStarted: 5,
      physicallyCompleted: 15,
      fullyCompleted: 8,
      completedPercentage: 74.2,
      estimate: 11000000,
      expenditure: 8200000,
      balance: 2800000,
      expenditurePercentage: 74.5,
      workDetails: [],
    },
    {
      id: "loc8",
      name: "Ranipet - Zone 8",
      type: "townpanchayat",
      coordinates: { lat: 12.9249, lng: 79.3331 },
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Ranipet",
      totalWorks: 40,
      tenderStage: 4,
      notStarted: 7,
      physicallyCompleted: 19,
      fullyCompleted: 10,
      completedPercentage: 72.5,
      estimate: 14500000,
      expenditure: 10500000,
      balance: 4000000,
      expenditurePercentage: 72.4,
      workDetails: [],
    },
  ]

  private mockUsers: UserLocation[] = [
    {
      id: "u1",
      name: "Rajesh Kumar",
      role: "Field Engineer",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Tiruvallur",
      coordinates: { lat: 13.1167, lng: 79.9167 },
      lastActive: "2025-01-10 14:30",
      status: "active",
    },
    {
      id: "u2",
      name: "Priya Sharma",
      role: "Site Supervisor",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Poonamallee",
      coordinates: { lat: 13.0475, lng: 80.0953 },
      lastActive: "2025-01-10 14:25",
      status: "active",
    },
    {
      id: "u3",
      name: "Amit Patel",
      role: "Project Manager",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Vellore City",
      coordinates: { lat: 12.9165, lng: 79.1325 },
      lastActive: "2025-01-10 13:45",
      status: "inactive",
    },
    {
      id: "u4",
      name: "Sneha Reddy",
      role: "Quality Inspector",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Katpadi",
      coordinates: { lat: 12.9698, lng: 79.1452 },
      lastActive: "2025-01-10 14:28",
      status: "active",
    },
    {
      id: "u5",
      name: "Karthik Murugan",
      role: "Civil Engineer",
      zone: "North Chennai",
      district: "Tiruvallur",
      townPanchayat: "Avadi",
      coordinates: { lat: 13.1147, lng: 80.1018 },
      lastActive: "2025-01-10 14:32",
      status: "active",
    },
    {
      id: "u6",
      name: "Lakshmi Devi",
      role: "Site Inspector",
      zone: "Vellore",
      district: "Vellore",
      townPanchayat: "Arcot",
      coordinates: { lat: 12.9059, lng: 79.3191 },
      lastActive: "2025-01-10 14:15",
      status: "active",
    },
  ]

  async getMapLocations(filters: SmartViewFilters): Promise<MapLocation[]> {
    console.log("[v0] Fetching map locations with filters:", filters)

    let filtered = [...this.mockLocations]

    if (filters.zone && filters.zone !== "all") {
      filtered = filtered.filter((loc) => loc.zone === filters.zone)
    }
    if (filters.district && filters.district !== "all") {
      filtered = filtered.filter((loc) => loc.district === filters.district)
    }
    if (filters.townPanchayat && filters.townPanchayat !== "all") {
      filtered = filtered.filter((loc) => loc.townPanchayat === filters.townPanchayat)
    }

    return filtered
  }

  async getUserLocations(filters: SmartViewFilters): Promise<UserLocation[]> {
    console.log("[v0] Fetching user locations with filters:", filters)

    let filtered = [...this.mockUsers]

    if (filters.zone && filters.zone !== "all") {
      filtered = filtered.filter((user) => user.zone === filters.zone)
    }
    if (filters.district && filters.district !== "all") {
      filtered = filtered.filter((user) => user.district === filters.district)
    }
    if (filters.townPanchayat && filters.townPanchayat !== "all") {
      filtered = filtered.filter((user) => user.townPanchayat === filters.townPanchayat)
    }

    return filtered
  }

  async getNearestTownPanchayats(locationId: string): Promise<MapLocation[]> {
    console.log("[v0] Fetching nearest town panchayats for:", locationId)

    // Return mock nearby locations
    return this.mockLocations.filter((loc) => loc.type === "townpanchayat").slice(0, 3)
  }

  getZones(): string[] {
    return ["all", "North Chennai", "Vellore"]
  }

  getDistricts(zone: string): string[] {
    if (!zone || zone === "all") {
      return ["all", "Tiruvallur", "Vellore"]
    }
    // Filter districts by zone
    const districts = this.mockLocations.filter((loc) => loc.zone === zone).map((loc) => loc.district)
    return ["all", ...Array.from(new Set(districts))]
  }

  getTownPanchayats(district: string): string[] {
    if (!district || district === "all") {
      return ["all", "Tiruvallur", "Poonamallee", "Avadi", "Ponneri", "Vellore City", "Katpadi", "Arcot", "Ranipet"]
    }
    // Filter town panchayats by district
    const townPanchayats = this.mockLocations.filter((loc) => loc.district === district).map((loc) => loc.townPanchayat)
    return ["all", ...Array.from(new Set(townPanchayats))]
  }

  getSchemes(): string[] {
    return ["all", "PMGSY", "Jal Jeevan Mission", "Samagra Shiksha", "MGNREGA", "Smart Cities"]
  }

  getComponents(): string[] {
    return ["all", "Roads", "Water Supply", "Education", "Health", "Sanitation"]
  }

  getYears(): string[] {
    return ["all", "2024-25", "2023-24", "2022-23", "2021-22"]
  }

  getStages(): string[] {
    return ["all", "Tender Stage", "Not Started", "In Progress", "Physically Completed", "Fully Completed"]
  }

  async getAggregatedStatistics(filters: SmartViewFilters): Promise<AggregatedStatistics> {
    console.log("[v0] Calculating aggregated statistics with filters:", filters)

    const locations = await this.getMapLocations(filters)

    if (locations.length === 0) {
      return {
        zone: filters.zone === "all" ? "All Zones" : filters.zone,
        district: filters.district === "all" ? "All Districts" : filters.district,
        townPanchayat: filters.townPanchayat === "all" ? "All Town Panchayats" : filters.townPanchayat,
        totalWorks: 0,
        tenderStage: 0,
        notStarted: 0,
        physicallyCompleted: 0,
        fullyCompleted: 0,
        completedPercentage: 0,
        estimate: 0,
        expenditure: 0,
        balance: 0,
        expenditurePercentage: 0,
      }
    }

    const totals = locations.reduce(
      (acc, loc) => ({
        totalWorks: acc.totalWorks + loc.totalWorks,
        tenderStage: acc.tenderStage + loc.tenderStage,
        notStarted: acc.notStarted + loc.notStarted,
        physicallyCompleted: acc.physicallyCompleted + loc.physicallyCompleted,
        fullyCompleted: acc.fullyCompleted + loc.fullyCompleted,
        estimate: acc.estimate + loc.estimate,
        expenditure: acc.expenditure + loc.expenditure,
      }),
      {
        totalWorks: 0,
        tenderStage: 0,
        notStarted: 0,
        physicallyCompleted: 0,
        fullyCompleted: 0,
        estimate: 0,
        expenditure: 0,
      },
    )

    const balance = totals.estimate - totals.expenditure
    const completedPercentage =
      totals.totalWorks > 0 ? Math.round(((totals.fullyCompleted / totals.totalWorks) * 100 * 10) / 10) : 0
    const expenditurePercentage =
      totals.estimate > 0 ? Math.round(((totals.expenditure / totals.estimate) * 100 * 10) / 10) : 0

    return {
      zone: filters.zone === "all" ? "All Zones" : filters.zone,
      district: filters.district === "all" ? "All Districts" : filters.district,
      townPanchayat: filters.townPanchayat === "all" ? "All Town Panchayats" : filters.townPanchayat,
      totalWorks: totals.totalWorks,
      tenderStage: totals.tenderStage,
      notStarted: totals.notStarted,
      physicallyCompleted: totals.physicallyCompleted,
      fullyCompleted: totals.fullyCompleted,
      completedPercentage,
      estimate: totals.estimate,
      expenditure: totals.expenditure,
      balance,
      expenditurePercentage,
    }
  }
}

export const smartViewService = new SmartViewService()
