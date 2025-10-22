// Mock API service for report management with hierarchical filtering

interface ReportData {
  id: string
  schemeName: string
  componentName: string
  stage: string
  zone: string
  district: string
  townPanchayat: string
  financialYear: string
  status: string
  amount: number
  beneficiaries: number
  completionDate: string
  schemeType: "Announcement" | "Flagship"
}

interface FilterOptions {
  schemes: string[]
  components: string[]
  years: string[]
  zones: string[]
}

interface ReportFilters {
  reportCategory: "dashboard" | "scheme"
  reportType: "overall" | "scheme" | "component" | "year"
  viewType?: "zone" | "district" | "townpanchayat" | "scheme" | "component" | "year"
  scheme: string
  component: string
  year: string
  zone: string
  district: string
  townPanchayat: string
  schemeType: "all" | "Announcement" | "Flagship"
  schemeWiseView?: "component" | "year" | "both"
  componentWiseView?: "scheme" | "year" | "both"
  yearWiseView?: "scheme" | "component" | "both"
}

// Mock data generator
const mockReportData: ReportData[] = [
  {
    id: "1",
    schemeName: "Rural Development Scheme",
    componentName: "Infrastructure Development",
    stage: "Implementation",
    zone: "North Zone",
    district: "Chennai",
    townPanchayat: "Ambattur",
    financialYear: "2024-25",
    status: "Active",
    amount: 50000000,
    beneficiaries: 1200,
    completionDate: "2024-12-31",
    schemeType: "Flagship",
  },
  {
    id: "2",
    schemeName: "Education Enhancement Program",
    componentName: "School Infrastructure",
    stage: "Planning",
    zone: "South Zone",
    district: "Madurai",
    townPanchayat: "Thiruparankundram",
    financialYear: "2024-25",
    status: "Pending",
    amount: 25000000,
    beneficiaries: 800,
    completionDate: "2025-03-31",
    schemeType: "Announcement",
  },
  {
    id: "3",
    schemeName: "Healthcare Improvement",
    componentName: "Primary Health Centers",
    stage: "Completed",
    zone: "East Zone",
    district: "Cuddalore",
    townPanchayat: "Panruti",
    financialYear: "2023-24",
    status: "Completed",
    amount: 75000000,
    beneficiaries: 2000,
    completionDate: "2024-03-31",
    schemeType: "Flagship",
  },
  {
    id: "4",
    schemeName: "Water Conservation Project",
    componentName: "Rainwater Harvesting",
    stage: "Implementation",
    zone: "West Zone",
    district: "Coimbatore",
    townPanchayat: "Pollachi",
    financialYear: "2024-25",
    status: "Active",
    amount: 30000000,
    beneficiaries: 1500,
    completionDate: "2024-11-30",
    schemeType: "Announcement",
  },
  {
    id: "5",
    schemeName: "Digital India Initiative",
    componentName: "Broadband Connectivity",
    stage: "Planning",
    zone: "Central Zone",
    district: "Trichy",
    townPanchayat: "Srirangam",
    financialYear: "2024-25",
    status: "Approved",
    amount: 100000000,
    beneficiaries: 5000,
    completionDate: "2025-06-30",
    schemeType: "Flagship",
  },
  {
    id: "6",
    schemeName: "Rural Development Scheme",
    componentName: "Road Construction",
    stage: "Implementation",
    zone: "North Zone",
    district: "Vellore",
    townPanchayat: "Katpadi",
    financialYear: "2023-24",
    status: "Active",
    amount: 45000000,
    beneficiaries: 900,
    completionDate: "2024-09-30",
    schemeType: "Flagship",
  },
  {
    id: "7",
    schemeName: "Education Enhancement Program",
    componentName: "Digital Classrooms",
    stage: "Completed",
    zone: "South Zone",
    district: "Madurai",
    townPanchayat: "Melur",
    financialYear: "2022-23",
    status: "Completed",
    amount: 20000000,
    beneficiaries: 600,
    completionDate: "2023-12-31",
    schemeType: "Announcement",
  },
  {
    id: "8",
    schemeName: "Healthcare Improvement",
    componentName: "Mobile Health Units",
    stage: "Planning",
    zone: "East Zone",
    district: "Villupuram",
    townPanchayat: "Tindivanam",
    financialYear: "2024-25",
    status: "Pending",
    amount: 35000000,
    beneficiaries: 1100,
    completionDate: "2025-02-28",
    schemeType: "Flagship",
  },
  {
    id: "9",
    schemeName: "Water Conservation Project",
    componentName: "Check Dams",
    stage: "Implementation",
    zone: "West Zone",
    district: "Erode",
    townPanchayat: "Bhavani",
    financialYear: "2023-24",
    status: "Active",
    amount: 40000000,
    beneficiaries: 1300,
    completionDate: "2024-10-31",
    schemeType: "Announcement",
  },
  {
    id: "10",
    schemeName: "Digital India Initiative",
    componentName: "E-Governance",
    stage: "Completed",
    zone: "Central Zone",
    district: "Thanjavur",
    townPanchayat: "Kumbakonam",
    financialYear: "2022-23",
    status: "Completed",
    amount: 55000000,
    beneficiaries: 2500,
    completionDate: "2023-11-30",
    schemeType: "Flagship",
  },
  {
    id: "11",
    schemeName: "Rural Development Scheme",
    componentName: "Electrification",
    stage: "Planning",
    zone: "North Zone",
    district: "Chennai",
    townPanchayat: "Poonamallee",
    financialYear: "2024-25",
    status: "Approved",
    amount: 60000000,
    beneficiaries: 1800,
    completionDate: "2025-05-31",
    schemeType: "Flagship",
  },
  {
    id: "12",
    schemeName: "Education Enhancement Program",
    componentName: "Teacher Training",
    stage: "Implementation",
    zone: "South Zone",
    district: "Virudhunagar",
    townPanchayat: "Sivakasi",
    financialYear: "2024-25",
    status: "Active",
    amount: 15000000,
    beneficiaries: 400,
    completionDate: "2024-08-31",
    schemeType: "Announcement",
  },
]

// Zone to District mapping
const zoneDistrictMap: Record<string, string[]> = {
  "North Zone": ["Chennai", "Vellore", "Tiruvallur"],
  "South Zone": ["Madurai", "Virudhunagar", "Theni"],
  "East Zone": ["Cuddalore", "Villupuram", "Nagapattinam"],
  "West Zone": ["Coimbatore", "Erode", "Tiruppur"],
  "Central Zone": ["Trichy", "Thanjavur", "Karur"],
}

// District to Town Panchayat mapping
const districtTownPanchayatMap: Record<string, string[]> = {
  Chennai: ["Ambattur", "Poonamallee", "Avadi"],
  Vellore: ["Katpadi", "Arcot", "Gudiyatham"],
  Madurai: ["Thiruparankundram", "Melur", "Usilampatti"],
  Virudhunagar: ["Sivakasi", "Rajapalayam", "Srivilliputhur"],
  Cuddalore: ["Panruti", "Chidambaram", "Virudhachalam"],
  Villupuram: ["Tindivanam", "Gingee", "Vanur"],
  Coimbatore: ["Pollachi", "Mettupalayam", "Valparai"],
  Erode: ["Bhavani", "Gobichettipalayam", "Sathyamangalam"],
  Trichy: ["Srirangam", "Lalgudi", "Manapparai"],
  Thanjavur: ["Kumbakonam", "Pattukkottai", "Papanasam"],
}

class ReportService {
  // Get initial filter options
  async getFilterOptions(): Promise<FilterOptions> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const schemes = Array.from(new Set(mockReportData.map((item) => item.schemeName)))
    const components = Array.from(new Set(mockReportData.map((item) => item.componentName)))
    const years = Array.from(new Set(mockReportData.map((item) => item.financialYear)))
    const zones = Object.keys(zoneDistrictMap)

    return { schemes, components, years, zones }
  }

  // Get districts based on zone
  async getDistricts(zone: string): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return zoneDistrictMap[zone] || []
  }

  // Get town panchayats based on district
  async getTownPanchayats(district: string): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return districtTownPanchayatMap[district] || []
  }

  // Generate report based on filters
  async generateReport(filters: ReportFilters): Promise<ReportData[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    let filtered = [...mockReportData]

    // Apply zone filter
    if (filters.zone !== "all") {
      filtered = filtered.filter((item) => item.zone === filters.zone)
    }

    // Apply district filter
    if (filters.district !== "all") {
      filtered = filtered.filter((item) => item.district === filters.district)
    }

    // Apply town panchayat filter
    if (filters.townPanchayat !== "all") {
      filtered = filtered.filter((item) => item.townPanchayat === filters.townPanchayat)
    }

    // Apply scheme filter
    if (filters.scheme !== "all") {
      filtered = filtered.filter((item) => item.schemeName === filters.scheme)
    }

    // Apply component filter
    if (filters.component !== "all") {
      filtered = filtered.filter((item) => item.componentName === filters.component)
    }

    // Apply year filter
    if (filters.year !== "all") {
      filtered = filtered.filter((item) => item.financialYear === filters.year)
    }

    // Apply scheme type filter
    if (filters.schemeType !== "all") {
      filtered = filtered.filter((item) => item.schemeType === filters.schemeType)
    }

    return filtered
  }

  async generateDashboardReport(filters: {
    reportType: string
    viewType?: string
    scheme: string
    component: string
    year: string
    zone: string
    district: string
    townPanchayat: string
    schemeType: string
    schemeWiseView?: string
    componentWiseView?: string
    yearWiseView?: string
  }): Promise<any> {
    try {
      const response = await fetch("/api/reports/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Dashboard report API call failed:", error)
      throw error
    }
  }

  async generateSchemeReport(filters: {
    reportType: string
    viewType?: string
    scheme: string
    component: string
    year: string
    zone: string
    district: string
    townPanchayat: string
    schemeType: string
    language: string
    currencyFormat: string
    announcement: boolean
    flagship: boolean
  }): Promise<any> {
    try {
      const response = await fetch("/api/reports/scheme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Scheme report API call failed:", error)
      throw error
    }
  }
}

export const reportService = new ReportService()
