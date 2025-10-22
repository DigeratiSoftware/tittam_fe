import { type NextRequest, NextResponse } from "next/server"

function generateMockMeetingReportData(filters: any): any[] {
  const mockData = []
  const meetingTitles = [
    "Quarterly Review",
    "Project Planning",
    "Status Update",
    "Stakeholder Briefing",
    "Training Workshop",
  ]
  const meetingTypes = [
    "Review Meeting",
    "Planning Session",
    "Status Update",
    "Stakeholder Meeting",
    "Training Session",
  ]
  const stages = ["Scheduled", "In Progress", "Completed", "Cancelled"]
  const zones = ["North Zone", "South Zone", "East Zone", "West Zone", "Central Zone"]
  const districts = ["District 1", "District 2", "District 3", "District 4"]
  const townPanchayats = ["TP-A", "TP-B", "TP-C", "TP-D", "TP-E"]
  const years = ["2022-23", "2023-24", "2024-25", "2025-26"]
  const statuses = ["Scheduled", "Completed", "Cancelled", "In Progress"]
  const schemeTypes: ("Announcement" | "Flagship")[] = ["Announcement", "Flagship"]

  const recordCount = Math.floor(Math.random() * 50) + 30

  for (let i = 0; i < recordCount; i++) {
    let schemeType: "Announcement" | "Flagship"
    if (filters?.announcement && !filters?.flagship) {
      schemeType = "Announcement"
    } else if (!filters?.announcement && filters?.flagship) {
      schemeType = "Flagship"
    } else {
      schemeType = schemeTypes[Math.floor(Math.random() * schemeTypes.length)]
    }

    const record = {
      id: `meeting-report-${Date.now()}-${i}`,
      meetingTitle: meetingTitles[Math.floor(Math.random() * meetingTitles.length)],
      meetingType: meetingTypes[Math.floor(Math.random() * meetingTypes.length)],
      stage: stages[Math.floor(Math.random() * stages.length)],
      zone: zones[Math.floor(Math.random() * zones.length)],
      district: districts[Math.floor(Math.random() * districts.length)],
      townPanchayat: townPanchayats[Math.floor(Math.random() * townPanchayats.length)],
      financialYear: years[Math.floor(Math.random() * years.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      attendees: Math.floor(Math.random() * 100) + 10,
      meetingDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      schemeType,
    }

    if (filters?.zone !== "all" && record.zone !== filters?.zone) continue
    if (filters?.district !== "all" && record.district !== filters?.district) continue
    if (filters?.townPanchayat !== "all" && record.townPanchayat !== filters?.townPanchayat) continue
    if (filters?.year !== "all" && record.financialYear !== filters?.year) continue

    mockData.push(record)
  }

  console.log("[v0] Meeting API: Generated", mockData.length, "records for filters:", filters)
  return mockData
}

export async function POST(request: NextRequest) {
  try {
    const filters = await request.json()
    const language = filters.language || "english"

    console.log("[v0] Meeting API: Received request with filters:", filters)
    console.log("[v0] Meeting API: Language:", language)

    const data = generateMockMeetingReportData(filters)

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      filters,
      language,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] Meeting API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate meeting report" }, { status: 500 })
  }
}
