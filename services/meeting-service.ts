interface MeetingReportData {
  id: string
  meetingTitle: string
  meetingType: string
  stage: string
  zone: string
  district: string
  townPanchayat: string
  financialYear: string
  status: string
  attendees: number
  duration: number
  meetingDate: string
  schemeType: "Announcement" | "Flagship"
}

interface MeetingFilterOptions {
  schemes: string[]
  components: string[]
  years: string[]
  zones: string[]
}

const zoneDistrictMap: Record<string, string[]> = {
  "North Zone": ["Chennai", "Vellore", "Tiruvallur"],
  "South Zone": ["Madurai", "Virudhunagar", "Theni"],
  "East Zone": ["Cuddalore", "Villupuram", "Nagapattinam"],
  "West Zone": ["Coimbatore", "Erode", "Tiruppur"],
  "Central Zone": ["Trichy", "Thanjavur", "Karur"],
}

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

class MeetingService {
  async getFilterOptions(): Promise<MeetingFilterOptions> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const schemes = ["MGNREGA", "PMAY", "Swachh Bharat Mission", "Smart Cities Mission", "AMRUT"]
    const components = [
      "Infrastructure Development",
      "Capacity Building",
      "Community Engagement",
      "Monitoring & Evaluation",
      "Financial Management",
    ]
    const years = ["2022-23", "2023-24", "2024-25", "2025-26"]
    const zones = Object.keys(zoneDistrictMap)

    return { schemes, components, years, zones }
  }

  async getDistricts(zone: string): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return zoneDistrictMap[zone] || []
  }

  async getTownPanchayats(district: string): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return districtTownPanchayatMap[district] || []
  }

  async generateMeetingReport(filters: {
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
    announcement: boolean
    flagship: boolean
  }): Promise<any> {
    try {
      const response = await fetch("/api/reports/meeting", {
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
      console.error("Meeting report API call failed:", error)
      throw error
    }
  }

  async getPreviousMeetings(): Promise<string[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    return [
      "Q1 2024 Review Meeting",
      "Q2 2024 Planning Session",
      "Q3 2024 Status Update",
      "Q4 2024 Stakeholder Meeting",
      "Annual Review 2023-24",
      "Mid-Year Review 2024-25",
    ]
  }
}

export const meetingService = new MeetingService()
