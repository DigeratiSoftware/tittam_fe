"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Filter, FileBarChart, Loader2 } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import * as XLSX from "xlsx"
import { reportService } from "@/services/report-service"

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

export default function ReportsPage() {
  // Main report type selection
  const [reportCategory, setReportCategory] = useState<"dashboard" | "scheme">("dashboard")
  const [reportType, setReportType] = useState<"overall" | "scheme" | "component" | "year">("overall")

  // View type for overall reports
  const [viewType, setViewType] = useState<"zone" | "district" | "townpanchayat" | "scheme" | "component" | "year">(
    "zone",
  )

  // Filter options
  const [selectedScheme, setSelectedScheme] = useState("all")
  const [selectedComponent, setSelectedComponent] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedZone, setSelectedZone] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState("all")
  const [selectedTownPanchayat, setSelectedTownPanchayat] = useState("all")
  const [selectedSchemeType, setSelectedSchemeType] = useState<"all" | "Announcement" | "Flagship">("all")

  // Secondary filters for specific report types
  const [schemeWiseView, setSchemeWiseView] = useState<"component" | "year" | "both">("both")
  const [componentWiseView, setComponentWiseView] = useState<"scheme" | "year" | "both">("both")
  const [yearWiseView, setYearWiseView] = useState<"scheme" | "component" | "both">("both")

  // Data and UI state
  const [filteredData, setFilteredData] = useState<ReportData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showData, setShowData] = useState(false)

  // Dynamic filter options from API
  const [schemes, setSchemes] = useState<string[]>([])
  const [components, setComponents] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])

  // View options state for column visibility
  const [viewOptions, setViewOptions] = useState({
    schemeName: true,
    componentName: true,
    stage: true,
    zone: true,
    district: true,
    townPanchayat: true,
    financialYear: true,
    status: true,
    amount: true,
    beneficiaries: true,
    completionDate: true,
    schemeType: true,
  })

  // Load initial filter options
  useEffect(() => {
    loadFilterOptions()
  }, [])

  // Load dependent filter options based on selections
  useEffect(() => {
    if (selectedZone !== "all") {
      loadDistricts(selectedZone)
    }
  }, [selectedZone])

  useEffect(() => {
    if (selectedDistrict !== "all") {
      loadTownPanchayats(selectedDistrict)
    }
  }, [selectedDistrict])

  const loadFilterOptions = async () => {
    const options = await reportService.getFilterOptions()
    setSchemes(options.schemes)
    setComponents(options.components)
    setYears(options.years)
    setZones(options.zones)
  }

  const loadDistricts = async (zone: string) => {
    const districtList = await reportService.getDistricts(zone)
    setDistricts(districtList)
    setSelectedDistrict("all")
    setTownPanchayats([])
    setSelectedTownPanchayat("all")
  }

  const loadTownPanchayats = async (district: string) => {
    const townPanchayatList = await reportService.getTownPanchayats(district)
    setTownPanchayats(townPanchayatList)
    setSelectedTownPanchayat("all")
  }

  const handleGenerateReport = async () => {
    setIsLoading(true)
    setShowData(true)

    const selectedViewOptions = Object.entries(viewOptions)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => key)

    const filters = {
      reportType,
      viewType: reportType === "overall" ? viewType : undefined,
      scheme: selectedScheme,
      component: selectedComponent,
      year: selectedYear,
      zone: selectedZone,
      district: selectedDistrict,
      townPanchayat: selectedTownPanchayat,
      schemeType: selectedSchemeType,
      schemeWiseView: reportType === "scheme" ? schemeWiseView : undefined,
      componentWiseView: reportType === "component" ? componentWiseView : undefined,
      yearWiseView: reportType === "year" ? yearWiseView : undefined,
      viewOptions: selectedViewOptions, // Send as array
    }

    console.log("[v0] Calling dashboard reports service with filters:", filters)

    try {
      const result = await reportService.generateDashboardReport(filters)

      if (result.success) {
        console.log("[v0] Dashboard service returned", result.count, "records")
        setFilteredData(result.data)
      } else {
        console.error("[v0] Dashboard service error:", result.error)
        alert("Failed to generate report. Please try again.")
        setFilteredData([])
      }
    } catch (error) {
      console.error("[v0] Dashboard service call failed:", error)
      alert("Failed to generate report. Please try again.")
      setFilteredData([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredData.map((item) => ({
        "Scheme Name": item.schemeName,
        Component: item.componentName,
        Stage: item.stage,
        Zone: item.zone,
        District: item.district,
        "Town Panchayat": item.townPanchayat,
        "Financial Year": item.financialYear,
        Status: item.status,
        "Amount (₹)": item.amount,
        Beneficiaries: item.beneficiaries,
        "Completion Date": item.completionDate,
        "Scheme Type": item.schemeType,
      })),
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report Data")

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `Report_${reportCategory}_${reportType}_${new Date().toISOString().split("T")[0]}.xlsx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "default"
      case "completed":
        return "secondary"
      case "pending":
        return "destructive"
      case "approved":
        return "outline"
      default:
        return "secondary"
    }
  }

  // Determine which filters to show based on report type
  const shouldShowSchemeFilter = () => {
    if (reportType === "overall") return viewType === "scheme" || viewType === "component" || viewType === "year"
    if (reportType === "component") return componentWiseView === "scheme" || componentWiseView === "both"
    if (reportType === "year") return yearWiseView === "scheme" || yearWiseView === "both"
    return false
  }

  const shouldShowComponentFilter = () => {
    if (reportType === "overall") return viewType === "component" || viewType === "year"
    if (reportType === "scheme") return schemeWiseView === "component" || schemeWiseView === "both"
    if (reportType === "year") return yearWiseView === "component" || yearWiseView === "both"
    return false
  }

  const shouldShowYearFilter = () => {
    if (reportType === "overall") return viewType === "year"
    if (reportType === "scheme") return schemeWiseView === "year" || schemeWiseView === "both"
    if (reportType === "component") return componentWiseView === "year" || componentWiseView === "both"
    return false
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold">Report Management</h1>
                <p className="text-white/80 text-sm mt-1">
                  Generate comprehensive dashboard and scheme reports with advanced hierarchical filtering
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FileBarChart className="h-8 w-8 text-[#F3B335]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
            <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-[#013A65]" />
                  <h3 className="text-base font-semibold text-[#013A65]">Report Filters</h3>
                </div>
                {showData && filteredData.length > 0 && (
                  <Button
                    onClick={handleExcelDownload}
                    size="sm"
                    className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-1.5" />
                    Download Excel
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#013A65]">Report Category</label>
                  <Select
                    value={reportCategory}
                    onValueChange={(value: "dashboard" | "scheme") => {
                      setReportCategory(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dashboard">Dashboard Reports</SelectItem>
                      <SelectItem value="scheme">Scheme Reports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#013A65]">Report Type</label>
                  <Select
                    value={reportType}
                    onValueChange={(value: "overall" | "scheme" | "component" | "year") => {
                      setReportType(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overall">Overall Wise</SelectItem>
                      <SelectItem value="scheme">Scheme Wise</SelectItem>
                      <SelectItem value="component">Component Wise</SelectItem>
                      <SelectItem value="year">Year Wise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {reportType === "overall" && (
                <div className="mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                  <label className="text-sm font-semibold text-[#013A65] mb-2 block">View By</label>
                  <Select
                    value={viewType}
                    onValueChange={(value: any) => {
                      setViewType(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full md:w-1/2 min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zone">Zone Wise</SelectItem>
                      <SelectItem value="district">District Wise</SelectItem>
                      <SelectItem value="townpanchayat">Town Panchayat Wise</SelectItem>
                      <SelectItem value="scheme">Scheme Wise</SelectItem>
                      <SelectItem value="component">Component Wise</SelectItem>
                      <SelectItem value="year">Year Wise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {reportType === "scheme" && (
                <div className="mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                  <label className="text-sm font-semibold text-[#013A65] mb-2 block">Additional View Options</label>
                  <Select
                    value={schemeWiseView}
                    onValueChange={(value: any) => {
                      setSchemeWiseView(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full md:w-1/2 min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="component">Component Wise</SelectItem>
                      <SelectItem value="year">Year Wise</SelectItem>
                      <SelectItem value="both">Component & Year Wise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {reportType === "component" && (
                <div className="mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                  <label className="text-sm font-semibold text-[#013A65] mb-2 block">Additional View Options</label>
                  <Select
                    value={componentWiseView}
                    onValueChange={(value: any) => {
                      setComponentWiseView(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full md:w-1/2 min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheme">Scheme Wise</SelectItem>
                      <SelectItem value="year">Year Wise</SelectItem>
                      <SelectItem value="both">Scheme & Year Wise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {reportType === "year" && (
                <div className="mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                  <label className="text-sm font-semibold text-[#013A65] mb-2 block">Additional View Options</label>
                  <Select
                    value={yearWiseView}
                    onValueChange={(value: any) => {
                      setYearWiseView(value)
                      setShowData(false)
                    }}
                  >
                    <SelectTrigger className="h-11 w-full md:w-1/2 min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheme">Scheme Wise</SelectItem>
                      <SelectItem value="component">Component Wise</SelectItem>
                      <SelectItem value="both">Scheme & Component Wise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="mb-4 p-4 bg-white rounded-lg border border-[#EDEEF0]">
                <label className="text-sm font-semibold text-[#013A65] mb-3 block">View Options</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="schemeName"
                      checked={viewOptions.schemeName}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, schemeName: checked as boolean }))
                      }
                    />
                    <label htmlFor="schemeName" className="text-sm text-[#013A65] cursor-pointer">
                      Scheme Name
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="componentName"
                      checked={viewOptions.componentName}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, componentName: checked as boolean }))
                      }
                    />
                    <label htmlFor="componentName" className="text-sm text-[#013A65] cursor-pointer">
                      Component
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="stage"
                      checked={viewOptions.stage}
                      onCheckedChange={(checked) => setViewOptions((prev) => ({ ...prev, stage: checked as boolean }))}
                    />
                    <label htmlFor="stage" className="text-sm text-[#013A65] cursor-pointer">
                      Stage
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="zone"
                      checked={viewOptions.zone}
                      onCheckedChange={(checked) => setViewOptions((prev) => ({ ...prev, zone: checked as boolean }))}
                    />
                    <label htmlFor="zone" className="text-sm text-[#013A65] cursor-pointer">
                      Zone
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="district"
                      checked={viewOptions.district}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, district: checked as boolean }))
                      }
                    />
                    <label htmlFor="district" className="text-sm text-[#013A65] cursor-pointer">
                      District
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="townPanchayat"
                      checked={viewOptions.townPanchayat}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, townPanchayat: checked as boolean }))
                      }
                    />
                    <label htmlFor="townPanchayat" className="text-sm text-[#013A65] cursor-pointer">
                      Town Panchayat
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="financialYear"
                      checked={viewOptions.financialYear}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, financialYear: checked as boolean }))
                      }
                    />
                    <label htmlFor="financialYear" className="text-sm text-[#013A65] cursor-pointer">
                      Financial Year
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="status"
                      checked={viewOptions.status}
                      onCheckedChange={(checked) => setViewOptions((prev) => ({ ...prev, status: checked as boolean }))}
                    />
                    <label htmlFor="status" className="text-sm text-[#013A65] cursor-pointer">
                      Status
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="amount"
                      checked={viewOptions.amount}
                      onCheckedChange={(checked) => setViewOptions((prev) => ({ ...prev, amount: checked as boolean }))}
                    />
                    <label htmlFor="amount" className="text-sm text-[#013A65] cursor-pointer">
                      Amount
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="beneficiaries"
                      checked={viewOptions.beneficiaries}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, beneficiaries: checked as boolean }))
                      }
                    />
                    <label htmlFor="beneficiaries" className="text-sm text-[#013A65] cursor-pointer">
                      Beneficiaries
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="completionDate"
                      checked={viewOptions.completionDate}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, completionDate: checked as boolean }))
                      }
                    />
                    <label htmlFor="completionDate" className="text-sm text-[#013A65] cursor-pointer">
                      Completion Date
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="schemeType"
                      checked={viewOptions.schemeType}
                      onCheckedChange={(checked) =>
                        setViewOptions((prev) => ({ ...prev, schemeType: checked as boolean }))
                      }
                    />
                    <label htmlFor="schemeType" className="text-sm text-[#013A65] cursor-pointer">
                      Scheme Type
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Zone filter - always show */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Zone</label>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue placeholder="All zones" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All zones</SelectItem>
                      {zones.map((zone) => (
                        <SelectItem key={zone} value={zone}>
                          {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* District filter - show when zone is selected */}
                {selectedZone !== "all" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#013A65]">District</label>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                      <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="All districts" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All districts</SelectItem>
                        {districts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Town Panchayat filter - show when district is selected */}
                {selectedDistrict !== "all" && townPanchayats.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#013A65]">Town Panchayat</label>
                    <Select value={selectedTownPanchayat} onValueChange={setSelectedTownPanchayat}>
                      <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="All town panchayats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All town panchayats</SelectItem>
                        {townPanchayats.map((tp) => (
                          <SelectItem key={tp} value={tp}>
                            {tp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Scheme filter - conditional based on report type */}
                {shouldShowSchemeFilter() && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#013A65]">Scheme</label>
                    <Select value={selectedScheme} onValueChange={setSelectedScheme}>
                      <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="All schemes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All schemes</SelectItem>
                        {schemes.map((scheme) => (
                          <SelectItem key={scheme} value={scheme}>
                            {scheme}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Component filter - conditional based on report type */}
                {shouldShowComponentFilter() && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#013A65]">Component</label>
                    <Select value={selectedComponent} onValueChange={setSelectedComponent}>
                      <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="All components" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All components</SelectItem>
                        {components.map((component) => (
                          <SelectItem key={component} value={component}>
                            {component}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Year filter - conditional based on report type */}
                {shouldShowYearFilter() && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#013A65]">Financial Year</label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="All years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All years</SelectItem>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Scheme Type filter - always show */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Scheme Type</label>
                  <Select value={selectedSchemeType} onValueChange={(value: any) => setSelectedSchemeType(value)}>
                    <SelectTrigger className="h-11 w-full min-w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="Announcement">Announcement</SelectItem>
                      <SelectItem value="Flagship">Flagship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleGenerateReport}
                  className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-6 text-sm font-medium"
                >
                  Generate Report
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {!showData ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                    <FileBarChart className="h-8 w-8 text-[#013A65]/60" />
                  </div>
                  <h3 className="text-lg font-medium text-[#013A65] mb-2">Select filters and generate report</h3>
                  <p className="text-[#013A65]/70 mb-4">
                    Choose your report category, type, and filter criteria, then click "Generate Report" to view the
                    data.
                  </p>
                </div>
              ) : isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="flex items-center gap-2 text-[#013A65]/70">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating report...</span>
                  </div>
                </div>
              ) : filteredData.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                    <FileBarChart className="h-8 w-8 text-[#013A65]/60" />
                  </div>
                  <h3 className="text-lg font-medium text-[#013A65] mb-2">No report data found</h3>
                  <p className="text-[#013A65]/70 mb-4">
                    No data matches your current filter criteria. Try adjusting the filters.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                      {viewOptions.schemeName && (
                        <TableHead className="text-[#013A65] font-semibold">Scheme Name</TableHead>
                      )}
                      {viewOptions.componentName && (
                        <TableHead className="text-[#013A65] font-semibold">Component</TableHead>
                      )}
                      {viewOptions.stage && <TableHead className="text-[#013A65] font-semibold">Stage</TableHead>}
                      {viewOptions.zone && <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>}
                      {viewOptions.district && <TableHead className="text-[#013A65] font-semibold">District</TableHead>}
                      {viewOptions.townPanchayat && (
                        <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                      )}
                      {viewOptions.financialYear && (
                        <TableHead className="text-[#013A65] font-semibold">Financial Year</TableHead>
                      )}
                      {viewOptions.status && <TableHead className="text-[#013A65] font-semibold">Status</TableHead>}
                      {viewOptions.amount && (
                        <TableHead className="text-[#013A65] font-semibold text-right">Amount</TableHead>
                      )}
                      {viewOptions.beneficiaries && (
                        <TableHead className="text-[#013A65] font-semibold text-right">Beneficiaries</TableHead>
                      )}
                      {viewOptions.completionDate && (
                        <TableHead className="text-[#013A65] font-semibold">Completion Date</TableHead>
                      )}
                      {viewOptions.schemeType && (
                        <TableHead className="text-[#013A65] font-semibold">Scheme Type</TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-[#F8F8F8]/50">
                        {viewOptions.schemeName && (
                          <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={item.schemeName}>
                            {item.schemeName}
                          </TableCell>
                        )}
                        {viewOptions.componentName && (
                          <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={item.componentName}>
                            {item.componentName}
                          </TableCell>
                        )}
                        {viewOptions.stage && <TableCell className="text-[#013A65]/80">{item.stage}</TableCell>}
                        {viewOptions.zone && <TableCell className="text-[#013A65]/80">{item.zone}</TableCell>}
                        {viewOptions.district && <TableCell className="text-[#013A65]/80">{item.district}</TableCell>}
                        {viewOptions.townPanchayat && (
                          <TableCell className="text-[#013A65]/80">{item.townPanchayat}</TableCell>
                        )}
                        {viewOptions.financialYear && (
                          <TableCell className="text-[#013A65]/80">{item.financialYear}</TableCell>
                        )}
                        {viewOptions.status && (
                          <TableCell>
                            <Badge
                              variant={getStatusBadgeVariant(item.status)}
                              className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40"
                            >
                              {item.status}
                            </Badge>
                          </TableCell>
                        )}
                        {viewOptions.amount && (
                          <TableCell className="text-right font-mono text-[#013A65]">
                            {formatCurrency(item.amount)}
                          </TableCell>
                        )}
                        {viewOptions.beneficiaries && (
                          <TableCell className="text-right text-[#013A65]">
                            {item.beneficiaries.toLocaleString()}
                          </TableCell>
                        )}
                        {viewOptions.completionDate && (
                          <TableCell className="text-[#013A65]/70">
                            {new Date(item.completionDate).toLocaleDateString()}
                          </TableCell>
                        )}
                        {viewOptions.schemeType && (
                          <TableCell>
                            <Badge
                              className={
                                item.schemeType === "Flagship"
                                  ? "bg-gradient-to-r from-[#013A65]/20 to-[#013A65]/30 text-[#013A65] border-[#013A65]/40"
                                  : "bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40"
                              }
                            >
                              {item.schemeType}
                            </Badge>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
