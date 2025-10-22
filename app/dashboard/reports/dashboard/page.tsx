"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, FileBarChart, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
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

export default function DashboardReportsPage() {
  const [reportType, setReportType] = useState<"overall" | "scheme" | "component" | "year">("overall")
  const [selectedViewOptions, setSelectedViewOptions] = useState<string[]>(["zone"])
  const [selectedScheme, setSelectedScheme] = useState("all")
  const [selectedComponent, setSelectedComponent] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedZone, setSelectedZone] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState("all")
  const [selectedTownPanchayat, setSelectedTownPanchayat] = useState("all")
  const [schemeTypeAnnouncement, setSchemeTypeAnnouncement] = useState(true)
  const [schemeTypeFlagship, setSchemeTypeFlagship] = useState(true)

  const [filteredData, setFilteredData] = useState<ReportData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const [schemes, setSchemes] = useState<string[]>([])
  const [components, setComponents] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])

  useEffect(() => {
    loadFilterOptions()
    loadReportData()
  }, [])

  useEffect(() => {
    loadReportData()
    setCurrentPage(1)
  }, [
    reportType,
    selectedViewOptions,
    selectedScheme,
    selectedComponent,
    selectedYear,
    selectedZone,
    selectedDistrict,
    selectedTownPanchayat,
    schemeTypeAnnouncement,
    schemeTypeFlagship,
  ])

  useEffect(() => {
    if (selectedZone !== "all") {
      loadDistricts(selectedZone)
    } else {
      setDistricts([])
      setSelectedDistrict("all")
      setTownPanchayats([])
      setSelectedTownPanchayat("all")
    }
  }, [selectedZone])

  useEffect(() => {
    if (selectedDistrict !== "all") {
      loadTownPanchayats(selectedDistrict)
    } else {
      setTownPanchayats([])
      setSelectedTownPanchayat("all")
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

  const loadReportData = async () => {
    setIsLoading(true)

    let selectedSchemeType: "all" | "Announcement" | "Flagship" = "all"
    if (schemeTypeAnnouncement && !schemeTypeFlagship) {
      selectedSchemeType = "Announcement"
    } else if (!schemeTypeAnnouncement && schemeTypeFlagship) {
      selectedSchemeType = "Flagship"
    }

    const filters = {
      reportCategory: "dashboard" as const,
      reportType,
      viewType: reportType === "overall" ? "zone" : undefined,
      scheme: selectedScheme,
      component: selectedComponent,
      year: selectedYear,
      zone: selectedZone,
      district: selectedDistrict,
      townPanchayat: selectedTownPanchayat,
      schemeType: selectedSchemeType,
      schemeWiseView: reportType === "scheme" ? "both" : undefined,
      componentWiseView: reportType === "component" ? "both" : undefined,
      yearWiseView: reportType === "year" ? "both" : undefined,
    }

    const data = await reportService.generateReport(filters)
    setFilteredData(data)
    setIsLoading(false)
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dashboard Report")

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `Dashboard_Report_${reportType}_${new Date().toISOString().split("T")[0]}.xlsx`
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

  const toggleViewOption = (option: string) => {
    setSelectedViewOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option)
      } else {
        return [...prev, option]
      }
    })
  }

  const getViewOptions = () => {
    switch (reportType) {
      case "overall":
        return [
          { value: "zone", label: "Zone Wise" },
          { value: "district", label: "District Wise" },
          { value: "townpanchayat", label: "Town Panchayat Wise" },
          { value: "scheme", label: "Scheme Wise" },
          { value: "component", label: "Component Wise" },
          { value: "year", label: "Year Wise" },
        ]
      case "scheme":
        return [
          { value: "component", label: "Component Wise" },
          { value: "year", label: "Year Wise" },
        ]
      case "component":
        return [
          { value: "scheme", label: "Scheme Wise" },
          { value: "year", label: "Year Wise" },
        ]
      case "year":
        return [
          { value: "scheme", label: "Scheme Wise" },
          { value: "component", label: "Component Wise" },
        ]
      default:
        return []
    }
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold">Dashboard Reports</h1>
                <p className="text-white/80 text-sm mt-1">
                  Generate comprehensive dashboard reports with advanced hierarchical filtering
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
                {filteredData.length > 0 && (
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

              <div className="mb-4">
                <label className="text-sm font-semibold text-[#013A65] mb-2 block">Report Type</label>
                <Tabs
                  value={reportType}
                  onValueChange={(value: string) => {
                    setReportType(value as "overall" | "scheme" | "component" | "year")
                    if (value === "overall") {
                      setSelectedViewOptions(["zone"])
                    } else {
                      setSelectedViewOptions(["both"])
                    }
                  }}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-4 h-11 bg-white border border-[#EDEEF0]">
                    <TabsTrigger
                      value="overall"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white"
                    >
                      Overall Wise
                    </TabsTrigger>
                    <TabsTrigger
                      value="scheme"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white"
                    >
                      Scheme Wise
                    </TabsTrigger>
                    <TabsTrigger
                      value="component"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white"
                    >
                      Component Wise
                    </TabsTrigger>
                    <TabsTrigger
                      value="year"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white"
                    >
                      Year Wise
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Zone</label>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">District</label>
                  <Select
                    value={selectedDistrict}
                    onValueChange={setSelectedDistrict}
                    disabled={selectedZone === "all"}
                  >
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Town Panchayat</label>
                  <Select
                    value={selectedTownPanchayat}
                    onValueChange={setSelectedTownPanchayat}
                    disabled={selectedDistrict === "all"}
                  >
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Scheme</label>
                  <Select value={selectedScheme} onValueChange={setSelectedScheme}>
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Component</label>
                  <Select value={selectedComponent} onValueChange={setSelectedComponent}>
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#013A65]">Financial Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-[#013A65]">Scheme Type</label>
                  <div className="flex gap-6 h-11 items-center px-3 bg-white rounded-md border border-[#EDEEF0]">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="announcement"
                        checked={schemeTypeAnnouncement}
                        onCheckedChange={(checked) => setSchemeTypeAnnouncement(checked as boolean)}
                      />
                      <label
                        htmlFor="announcement"
                        className="text-sm font-medium text-[#013A65] cursor-pointer select-none"
                      >
                        Announcement
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="flagship"
                        checked={schemeTypeFlagship}
                        onCheckedChange={(checked) => setSchemeTypeFlagship(checked as boolean)}
                      />
                      <label
                        htmlFor="flagship"
                        className="text-sm font-medium text-[#013A65] cursor-pointer select-none"
                      >
                        Flagship
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#013A65]">View Options</label>
                <div className="flex flex-wrap gap-2 p-3 bg-white rounded-lg border border-[#EDEEF0]">
                  {getViewOptions().map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleViewOption(option.value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        selectedViewOptions.includes(option.value)
                          ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white shadow-md"
                          : "bg-white border border-[#EDEEF0] text-[#013A65] hover:bg-[#F8F8F8]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="flex items-center gap-2 text-[#013A65]/70">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Loading report data...</span>
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
                <>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                        <TableHead className="text-[#013A65] font-semibold">Scheme Name</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Component</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Stage</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">District</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Financial Year</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
                        <TableHead className="text-[#013A65] font-semibold text-right">Amount</TableHead>
                        <TableHead className="text-[#013A65] font-semibold text-right">Beneficiaries</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Completion Date</TableHead>
                        <TableHead className="text-[#013A65] font-semibold">Scheme Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentData.map((item) => (
                        <TableRow key={item.id} className="hover:bg-[#F8F8F8]/50">
                          <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={item.schemeName}>
                            {item.schemeName}
                          </TableCell>
                          <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={item.componentName}>
                            {item.componentName}
                          </TableCell>
                          <TableCell className="text-[#013A65]/80">{item.stage}</TableCell>
                          <TableCell className="text-[#013A65]/80">{item.zone}</TableCell>
                          <TableCell className="text-[#013A65]/80">{item.district}</TableCell>
                          <TableCell className="text-[#013A65]/80">{item.townPanchayat}</TableCell>
                          <TableCell className="text-[#013A65]/80">{item.financialYear}</TableCell>
                          <TableCell>
                            <Badge
                              variant={getStatusBadgeVariant(item.status)}
                              className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40"
                            >
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono text-[#013A65]">
                            {formatCurrency(item.amount)}
                          </TableCell>
                          <TableCell className="text-right text-[#013A65]">
                            {item.beneficiaries.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-[#013A65]/70">
                            {new Date(item.completionDate).toLocaleDateString()}
                          </TableCell>
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
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-[#EDEEF0] bg-[#F8F8F8]">
                      <div className="text-sm text-[#013A65]/70">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
                        results
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={goToPreviousPage}
                          disabled={currentPage === 1}
                          className="h-8 px-3 bg-white border-[#EDEEF0] hover:bg-[#F3B335]/10 disabled:opacity-50"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                        <div className="text-sm text-[#013A65] font-medium px-3">
                          Page {currentPage} of {totalPages}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={goToNextPage}
                          disabled={currentPage === totalPages}
                          className="h-8 px-3 bg-white border-[#EDEEF0] hover:bg-[#F3B335]/10 disabled:opacity-50"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
