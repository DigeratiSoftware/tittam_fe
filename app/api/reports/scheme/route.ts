import { type NextRequest, NextResponse } from "next/server"

// Mock data generator for scheme reports
function generateMockSchemeReportData(filters: any): any[] {
  const mockData = []
  const schemes = ["Flagship Development Program", "Announcement Scheme 2024", "Rural Upliftment", "Urban Renewal"]
  const components = ["Component A", "Component B", "Component C", "Component D"]
  const stages = ["Initial", "Mid-term", "Final", "Post-completion"]
  const zones = ["North Zone", "South Zone", "East Zone", "West Zone", "Central Zone"]
  const districts = ["District 1", "District 2", "District 3", "District 4"]
  const townPanchayats = ["TP-A", "TP-B", "TP-C", "TP-D", "TP-E"]
  const years = ["2022-23", "2023-24", "2024-25", "2025-26"]
  const statuses = ["Active", "Completed", "Pending", "Approved", "Under Review"]

  // Generate 30-80 records based on filters
  const recordCount = Math.floor(Math.random() * 50) + 30

  for (let i = 0; i < recordCount; i++) {
    // Determine scheme type based on filters
    let schemeType: "Announcement" | "Flagship"
    if (filters.schemeTypeAnnouncement && !filters.schemeTypeFlagship) {
      schemeType = "Announcement"
    } else if (!filters.schemeTypeAnnouncement && filters.schemeTypeFlagship) {
      schemeType = "Flagship"
    } else {
      schemeType = Math.random() > 0.5 ? "Announcement" : "Flagship"
    }

    const record = {
      id: `scheme-report-${Date.now()}-${i}`,
      schemeName: schemes[Math.floor(Math.random() * schemes.length)],
      componentName: components[Math.floor(Math.random() * components.length)],
      stage: stages[Math.floor(Math.random() * stages.length)],
      zone: zones[Math.floor(Math.random() * zones.length)],
      district: districts[Math.floor(Math.random() * districts.length)],
      townPanchayat: townPanchayats[Math.floor(Math.random() * townPanchayats.length)],
      financialYear: years[Math.floor(Math.random() * years.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      amount: Math.floor(Math.random() * 50000000) + 500000,
      beneficiaries: Math.floor(Math.random() * 10000) + 500,
      completionDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      schemeType,
    }

    // Apply filters
    if (filters.zone !== "all" && record.zone !== filters.zone) continue
    if (filters.district !== "all" && record.district !== filters.district) continue
    if (filters.townPanchayat !== "all" && record.townPanchayat !== filters.townPanchayat) continue
    if (filters.scheme !== "all" && record.schemeName !== filters.scheme) continue
    if (filters.component !== "all" && record.componentName !== filters.component) continue
    if (filters.year !== "all" && record.financialYear !== filters.year) continue

    mockData.push(record)
  }

  console.log("[v0] Scheme API: Generated", mockData.length, "records for filters:", filters)
  return mockData
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { filters, language, currencyFormat } = body

    console.log("[v0] Scheme API: Received request with filters:", filters)
    console.log("[v0] Scheme API: Language:", language, "Currency Format:", currencyFormat)

    const data = generateMockSchemeReportData(filters)

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      filters,
      language,
      currencyFormat,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] Scheme API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate scheme report" }, { status: 500 })
  }
}
