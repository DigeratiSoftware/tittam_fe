import { type NextRequest, NextResponse } from "next/server"

// Mock data generator for dashboard reports
function generateMockReportData(filters: any): any[] {
  const mockData = []
  const schemes = ["Rural Development Scheme", "Urban Infrastructure", "Education Enhancement", "Healthcare Initiative"]
  const components = ["Phase 1", "Phase 2", "Infrastructure", "Training"]
  const stages = ["Planning", "Execution", "Completion", "Review"]
  const zones = ["North Zone", "South Zone", "East Zone", "West Zone"]
  const districts = ["District A", "District B", "District C"]
  const townPanchayats = ["TP-001", "TP-002", "TP-003"]
  const years = ["2023-24", "2024-25", "2025-26"]
  const statuses = ["Active", "Completed", "Pending", "Approved"]
  const schemeTypes = ["Announcement", "Flagship"]

  // Generate 20-50 records based on filters
  const recordCount = Math.floor(Math.random() * 30) + 20

  for (let i = 0; i < recordCount; i++) {
    const schemeType = schemeTypes[Math.floor(Math.random() * schemeTypes.length)]

    // Apply filters
    if (filters.schemeType !== "all" && filters.schemeType !== schemeType) continue

    const record = {
      id: `report-${Date.now()}-${i}`,
      schemeName: schemes[Math.floor(Math.random() * schemes.length)],
      componentName: components[Math.floor(Math.random() * components.length)],
      stage: stages[Math.floor(Math.random() * stages.length)],
      zone: zones[Math.floor(Math.random() * zones.length)],
      district: districts[Math.floor(Math.random() * districts.length)],
      townPanchayat: townPanchayats[Math.floor(Math.random() * townPanchayats.length)],
      financialYear: years[Math.floor(Math.random() * years.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      amount: Math.floor(Math.random() * 10000000) + 100000,
      beneficiaries: Math.floor(Math.random() * 5000) + 100,
      completionDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      schemeType: schemeType as "Announcement" | "Flagship",
    }

    // Apply additional filters
    if (filters.zone !== "all" && record.zone !== filters.zone) continue
    if (filters.district !== "all" && record.district !== filters.district) continue
    if (filters.townPanchayat !== "all" && record.townPanchayat !== filters.townPanchayat) continue
    if (filters.scheme !== "all" && record.schemeName !== filters.scheme) continue
    if (filters.component !== "all" && record.componentName !== filters.component) continue
    if (filters.year !== "all" && record.financialYear !== filters.year) continue

    mockData.push(record)
  }

  console.log("[v0] Dashboard API: Generated", mockData.length, "records for filters:", filters)
  return mockData
}

export async function POST(request: NextRequest) {
  try {
    const filters = await request.json()

    console.log("[v0] Dashboard API: Received filters:", filters)
    console.log("[v0] Dashboard API: View options array:", filters.viewOptions)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    const data = generateMockReportData(filters)

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      filters,
      viewOptions: filters.viewOptions, // Include viewOptions in response
    })
  } catch (error) {
    console.error("[v0] Dashboard API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate report" }, { status: 500 })
  }
}
