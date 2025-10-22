"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Download,
  Filter,
  FileBarChart,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Save,
  PlayCircle,
  Trash2,
  GripVertical,
  Plus,
} from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import * as XLSX from "xlsx"
import { meetingService } from "@/services/meeting-service"
import { meetingReportTemplateService, type MeetingReportTemplate } from "@/services/meeting-report-template-service"

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
  meetingDate: string
  schemeType: "Announcement" | "Flagship"
}

interface FilterSet {
  id: string
  reportType: "overall" | "scheme" | "component" | "year"
  viewOptions: string[]
  scheme: string
  component: string
  year: string
  zone: string
  district: string
  townPanchayat: string
  schemeTypeAnnouncement: boolean
  schemeTypeFlagship: boolean
  amountFormat: string
  comparedMeeting: string
}

export default function MeetingReportsPage() {
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
  const [amountFormat, setAmountFormat] = useState("lakhs")
  const [comparedMeeting, setComparedMeeting] = useState("none")
  const [previousMeetings, setPreviousMeetings] = useState<string[]>([])

  const [filterSets, setFilterSets] = useState<FilterSet[]>([])
  const [draggedFilterId, setDraggedFilterId] = useState<string | null>(null)

  const [filteredData, setFilteredData] = useState<MeetingReportData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasGeneratedReport, setHasGeneratedReport] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const [schemes, setSchemes] = useState<string[]>([])
  const [components, setComponents] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])

  const [templates, setTemplates] = useState<MeetingReportTemplate[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<string>("none")

  const [language, setLanguage] = useState<"english" | "tamil">("english")

  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [templateName, setTemplateName] = useState("")
  const [isSavingTemplate, setIsSavingTemplate] = useState(false)

  useEffect(() => {
    loadFilterOptions()
    loadTemplates()
    loadPreviousMeetings()
  }, [])

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
    const options = await meetingService.getFilterOptions()
    setSchemes(options.schemes)
    setComponents(options.components)
    setYears(options.years)
    setZones(options.zones)
  }

  const loadDistricts = async (zone: string) => {
    const districtList = await meetingService.getDistricts(zone)
    setDistricts(districtList)
    setSelectedDistrict("all")
    setTownPanchayats([])
    setSelectedTownPanchayat("all")
  }

  const loadTownPanchayats = async (district: string) => {
    const townPanchayatList = await meetingService.getTownPanchayats(district)
    setTownPanchayats(townPanchayatList)
    setSelectedTownPanchayat("all")
  }

  const loadTemplates = async () => {
    const templateList = await meetingReportTemplateService.getTemplates()
    setTemplates(templateList)
  }

  const loadPreviousMeetings = async () => {
    const meetings = await meetingService.getPreviousMeetings()
    setPreviousMeetings(meetings)
  }

  const handleSaveFilter = () => {
    const newFilterSet: FilterSet = {
      id: Date.now().toString(),
      reportType,
      viewOptions: selectedViewOptions,
      scheme: selectedScheme,
      component: selectedComponent,
      year: selectedYear,
      zone: selectedZone,
      district: selectedDistrict,
      townPanchayat: selectedTownPanchayat,
      schemeTypeAnnouncement,
      schemeTypeFlagship,
      amountFormat,
      comparedMeeting,
    }
    setFilterSets([...filterSets, newFilterSet])
  }

  const handleDeleteFilterSet = (filterId: string) => {
    setFilterSets(filterSets.filter((f) => f.id !== filterId))
  }

  const handleFilterDragStart = (filterId: string) => {
    setDraggedFilterId(filterId)
  }

  const handleFilterDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleFilterDrop = (targetFilterId: string) => {
    if (!draggedFilterId || draggedFilterId === targetFilterId) {
      setDraggedFilterId(null)
      return
    }

    const draggedIndex = filterSets.findIndex((f) => f.id === draggedFilterId)
    const targetIndex = filterSets.findIndex((f) => f.id === targetFilterId)

    const newFilterSets = [...filterSets]
    const [draggedFilter] = newFilterSets.splice(draggedIndex, 1)
    newFilterSets.splice(targetIndex, 0, draggedFilter)

    setFilterSets(newFilterSets)
    setDraggedFilterId(null)
  }

  const handleGenerateReportClick = () => {
    if (filterSets.length === 0) {
      alert("Please save at least one filter configuration before generating a report.")
      return
    }
    setShowSaveDialog(true)
  }

  const handleSaveTemplateAndGenerate = async () => {
    if (!templateName.trim()) {
      alert("Please enter a template name")
      return
    }

    setIsSavingTemplate(true)

    const template: Omit<MeetingReportTemplate, "id" | "createdAt"> = {
      name: templateName,
      reportType: filterSets[0].reportType,
      viewOptions: filterSets[0].viewOptions,
      filters: {
        meetingType: filterSets[0].meetingType,
        year: filterSets[0].year,
        zone: filterSets[0].zone,
        district: filterSets[0].district,
        townPanchayat: filterSets[0].townPanchayat,
        schemeTypeAnnouncement: filterSets[0].schemeTypeAnnouncement,
        schemeTypeFlagship: filterSets[0].schemeTypeFlagship,
        // Add amountFormat and comparedMeeting to the filters object for saving template
        amountFormat: filterSets[0].amountFormat,
        comparedMeeting: filterSets[0].comparedMeeting,
      },
    }

    await meetingReportTemplateService.saveTemplate(template)
    await loadTemplates()
    setIsSavingTemplate(false)
    setShowSaveDialog(false)
    setTemplateName("")

    await generateReport()
  }

  const handleSkipAndGenerate = async () => {
    setShowSaveDialog(false)
    await generateReport()
  }

  const generateReport = async () => {
    setIsLoading(true)
    setHasGeneratedReport(true)

    const primaryFilter = filterSets[0]

    const filters = {
      reportType: primaryFilter.reportType,
      viewType: primaryFilter.viewOptions.join(","),
      scheme: primaryFilter.scheme,
      component: primaryFilter.component,
      year: primaryFilter.year,
      zone: primaryFilter.zone,
      district: primaryFilter.district,
      townPanchayat: primaryFilter.townPanchayat,
      schemeType:
        primaryFilter.schemeTypeAnnouncement && primaryFilter.schemeTypeFlagship
          ? "all"
          : primaryFilter.schemeTypeAnnouncement
            ? "Announcement"
            : "Flagship",
      language,
      announcement: primaryFilter.schemeTypeAnnouncement,
      flagship: primaryFilter.schemeTypeFlagship,
      // Pass amountFormat and comparedMeeting to the generateReport function
      amountFormat: primaryFilter.amountFormat,
      comparedMeeting: primaryFilter.comparedMeeting,
    }

    console.log("[v0] Calling meeting reports service with:", filters)

    try {
      const result = await meetingService.generateMeetingReport(filters)

      if (result.success) {
        console.log("[v0] Meeting service returned", result.count, "records")
        console.log("[v0] Language:", result.language)
        setFilteredData(result.data)
      } else {
        console.error("[v0] Meeting service error:", result.error)
        alert("Failed to generate meeting report. Please try again.")
        setFilteredData([])
      }
    } catch (error) {
      console.error("[v0] Meeting service call failed:", error)
      alert("Failed to generate meeting report. Please try again.")
      setFilteredData([])
    } finally {
      setIsLoading(false)
      setCurrentPage(1)
    }
  }

  const handleLoadTemplate = (template: MeetingReportTemplate) => {
    const newFilterSet: FilterSet = {
      id: Date.now().toString(),
      reportType: template.reportType,
      viewOptions: template.viewOptions,
      scheme: template.filters.scheme || "all",
      component: template.filters.component || "all",
      year: template.filters.year,
      zone: template.filters.zone,
      district: template.filters.district,
      townPanchayat: template.filters.townPanchayat,
      schemeTypeAnnouncement: template.filters.schemeTypeAnnouncement,
      schemeTypeFlagship: template.filters.schemeTypeFlagship,
      amountFormat: template.filters.amountFormat || "lakhs",
      comparedMeeting: template.filters.comparedMeeting || "none",
    }
    setFilterSets([newFilterSet])

    setReportType(template.reportType)
    setSelectedViewOptions(template.viewOptions)
    setSelectedScheme(template.filters.scheme || "all")
    setSelectedComponent(template.filters.component || "all")
    setSelectedYear(template.filters.year)
    setSelectedZone(template.filters.zone)
    setSelectedDistrict(template.filters.district)
    setSelectedTownPanchayat(template.filters.townPanchayat)
    setSchemeTypeAnnouncement(template.filters.schemeTypeAnnouncement)
    setSchemeTypeFlagship(template.filters.schemeTypeFlagship)
    setAmountFormat(template.filters.amountFormat || "lakhs")
    setComparedMeeting(template.filters.comparedMeeting || "none")
  }

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    if (templateId !== "none") {
      const template = templates.find((t) => t.id === templateId)
      if (template) {
        handleLoadTemplate(template)
      }
    }
  }

  const handleDeleteTemplate = async (templateId: string) => {
    if (confirm("Are you sure you want to delete this template?")) {
      await meetingReportTemplateService.deleteTemplate(templateId)
      await loadTemplates()
      if (selectedTemplate === templateId) {
        setSelectedTemplate("none")
      }
    }
  }

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredData.map((item) => ({
        "Meeting Title": item.meetingTitle,
        "Meeting Type": item.meetingType,
        Stage: item.stage,
        Zone: item.zone,
        District: item.district,
        "Town Panchayat": item.townPanchayat,
        "Financial Year": item.financialYear,
        Status: item.status,
        Attendees: item.attendees,
        "Meeting Date": item.meetingDate,
        "Scheme Type": item.schemeType,
      })),
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Meeting Report")

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `Meeting_Report_${new Date().toISOString().split("T")[0]}.xlsx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "scheduled":
        return "default"
      case "completed":
        return "secondary"
      case "cancelled":
        return "destructive"
      case "in progress":
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
          // { value: "meeting", label: "Meeting Wise" },
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

  const getFilterSetDisplayName = (filter: FilterSet) => {
    const parts = []
    parts.push(filter.reportType.charAt(0).toUpperCase() + filter.reportType.slice(1))
    if (filter.zone !== "all") parts.push(filter.zone)
    if (filter.scheme !== "all") parts.push(filter.scheme)
    return parts.join(" - ")
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
          {/* Header */}
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold">Meeting Reports</h1>
                <p className="text-white/80 text-sm mt-1">
                  Generate meeting-specific reports with template management and advanced filtering
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FileBarChart className="h-8 w-8 text-[#F3B335]" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Top Section: Report Filter and Saved Filters side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
              {/* Container 1: Report Filter */}
              <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm">
                <div className="p-4 bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Filter className="h-5 w-5 text-[#013A65]" />
                      <h3 className="text-base font-semibold text-[#013A65]">Report Filters</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-[#013A65] whitespace-nowrap">Saved Templates:</label>
                        <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
                          <SelectTrigger className="h-9 w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                            <SelectValue placeholder="Select template" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            {templates.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-[#013A65] whitespace-nowrap">Compared with:</label>
                        <Select value={comparedMeeting} onValueChange={setComparedMeeting}>
                          <SelectTrigger className="h-9 w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                            <SelectValue placeholder="Select meeting" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            {previousMeetings.map((meeting) => (
                              <SelectItem key={meeting} value={meeting}>
                                {meeting}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center border border-[#EDEEF0] rounded-md overflow-hidden bg-white shadow-sm">
                        <button
                          onClick={() => setLanguage("english")}
                          className={`h-9 w-9 font-bold text-base transition-all duration-200 ${
                            language === "english"
                              ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white"
                              : "bg-white text-[#013A65]/60 hover:bg-[#F8F8F8]"
                          }`}
                          title="English"
                        >
                          E
                        </button>
                        <button
                          onClick={() => setLanguage("tamil")}
                          className={`h-9 w-9 font-bold text-base transition-all duration-200 border-l border-[#EDEEF0] ${
                            language === "tamil"
                              ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white"
                              : "bg-white text-[#013A65]/60 hover:bg-[#F8F8F8]"
                          }`}
                          title="Tamil"
                        >
                          T
                        </button>
                      </div>
                    </div>
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
                          setSelectedViewOptions([])
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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

                    <div className="space-y-2 md:col-span-2 lg:col-span-2">
                      <label className="text-sm font-medium text-[#013A65]">Scheme Type</label>
                      <div className="flex gap-6 h-11 items-center px-3 bg-white rounded-md border border-[#EDEEF0]">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="announcement-scheme"
                            checked={schemeTypeAnnouncement}
                            onCheckedChange={(checked) => setSchemeTypeAnnouncement(checked as boolean)}
                          />
                          <label
                            htmlFor="announcement-scheme"
                            className="text-sm font-medium text-[#013A65] cursor-pointer select-none"
                          >
                            Announcement
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="flagship-scheme"
                            checked={schemeTypeFlagship}
                            onCheckedChange={(checked) => setSchemeTypeFlagship(checked as boolean)}
                          />
                          <label
                            htmlFor="flagship-scheme"
                            className="text-sm font-medium text-[#013A65] cursor-pointer select-none"
                          >
                            Flagship
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#013A65]">Amount in</label>
                      <Select value={amountFormat} onValueChange={setAmountFormat}>
                        <SelectTrigger className="h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lakhs">Lakhs</SelectItem>
                          <SelectItem value="crores">Crores</SelectItem>
                          <SelectItem value="thousands">Thousands</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
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

                  <div className="flex items-center justify-end gap-2">
                    <Button
                      onClick={handleSaveFilter}
                      className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] h-9 px-4 text-sm font-medium shadow-lg"
                    >
                      <Plus className="h-4 w-4 mr-1.5" />
                      Save Filter
                    </Button>
                    <Button
                      onClick={handleGenerateReportClick}
                      disabled={isLoading || filterSets.length === 0}
                      className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white h-9 px-4 text-sm font-medium shadow-lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <PlayCircle className="h-4 w-4 mr-1.5" />
                          Generate Report
                        </>
                      )}
                    </Button>
                    {hasGeneratedReport && filteredData.length > 0 && (
                      <Button
                        onClick={handleExcelDownload}
                        size="sm"
                        className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] h-9 px-4 text-sm font-medium shadow-lg"
                      >
                        <Download className="h-4 w-4 mr-1.5" />
                        Download Excel
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Container 2: Saved Filters */}
              <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-3 h-fit">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="h-4 w-4 text-[#013A65]" />
                  <h3 className="text-sm font-semibold text-[#013A65]">Saved Filters</h3>
                </div>

                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filterSets.length === 0 ? (
                    <div className="text-center py-6 text-[#013A65]/60 text-xs">
                      No filters saved yet. Configure filters and click "Save Filter".
                    </div>
                  ) : (
                    filterSets.map((filter) => (
                      <div
                        key={filter.id}
                        draggable
                        onDragStart={() => handleFilterDragStart(filter.id)}
                        onDragOver={handleFilterDragOver}
                        onDrop={() => handleFilterDrop(filter.id)}
                        className="group bg-[#F8F8F8] border border-[#EDEEF0] rounded-md p-2 hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 transition-all cursor-move"
                      >
                        <div className="flex items-center gap-1.5">
                          <GripVertical className="h-3.5 w-3.5 text-[#013A65]/40 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0 font-medium text-[#013A65] text-xs truncate">
                            {getFilterSetDisplayName(filter)}
                          </div>
                          <button
                            onClick={() => handleDeleteFilterSet(filter.id)}
                            className="flex-shrink-0 p-1 hover:bg-red-50 rounded transition-colors group/delete"
                            title="Delete filter"
                          >
                            <Trash2 className="h-3.5 w-3.5 text-[#013A65]/40 group-hover/delete:text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Section: Table View */}
            {hasGeneratedReport && (
              <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm">
                <div className="h-[600px] overflow-auto">
                  {!hasGeneratedReport ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                        <FileBarChart className="h-8 w-8 text-[#013A65]/60" />
                      </div>
                      <h3 className="text-lg font-medium text-[#013A65] mb-2">Ready to Generate Report</h3>
                      <p className="text-[#013A65]/70 mb-4 max-w-md">
                        Configure your filters, save them, and click "Generate Report" to view the data.
                      </p>
                    </div>
                  ) : isLoading ? (
                    <div className="flex items-center justify-center h-full p-8">
                      <div className="flex items-center gap-2 text-[#013A65]/70">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Generating report data...</span>
                      </div>
                    </div>
                  ) : filteredData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                        <FileBarChart className="h-8 w-8 text-[#013A65]/60" />
                      </div>
                      <h3 className="text-lg font-medium text-[#013A65] mb-2">No report data found</h3>
                      <p className="text-[#013A65]/70 mb-4">
                        No data matches your current filter criteria. Try adjusting the filters.
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <Table className="min-w-full">
                        <TableHeader className="sticky top-0 z-10 bg-[#F3B335]">
                          <TableRow className="hover:bg-[#F3B335]">
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Meeting Title
                            </TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Meeting Type
                            </TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">Stage</TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">Zone</TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">District</TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Town Panchayat
                            </TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Financial Year
                            </TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">Status</TableHead>
                            <TableHead className="text-[#013A65] font-semibold text-right whitespace-nowrap">
                              Attendees
                            </TableHead>
                            {/* Replaced Duration column with Meeting Date and Scheme Type */}
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Meeting Date
                            </TableHead>
                            <TableHead className="text-[#013A65] font-semibold whitespace-nowrap">
                              Scheme Type
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {currentData.map((item) => (
                            <TableRow key={item.id} className="hover:bg-[#F8F8F8]/50">
                              <TableCell className="font-medium text-[#013A65] whitespace-nowrap">
                                {item.meetingTitle}
                              </TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">{item.meetingType}</TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">{item.stage}</TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">{item.zone}</TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">{item.district}</TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">
                                {item.townPanchayat}
                              </TableCell>
                              <TableCell className="text-[#013A65]/80 whitespace-nowrap">
                                {item.financialYear}
                              </TableCell>
                              <TableCell className="whitespace-nowrap">
                                <Badge
                                  variant={getStatusBadgeVariant(item.status)}
                                  className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40"
                                >
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right text-[#013A65] whitespace-nowrap">
                                {item.attendees}
                              </TableCell>
                              <TableCell className="text-[#013A65]/70 whitespace-nowrap">
                                {new Date(item.meetingDate).toLocaleDateString()}
                              </TableCell>
                              <TableCell className="whitespace-nowrap">
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
                        <div className="flex items-center justify-between px-4 py-3 border-t border-[#EDEEF0] bg-[#F8F8F8] sticky bottom-0">
                          <div className="text-sm text-[#013A65]/70">
                            Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of{" "}
                            {filteredData.length} results
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
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Save Report Configuration</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">
                Would you like to save this filter configuration as a template for future use?
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#013A65]">Template Name (Optional)</label>
                <Input
                  placeholder="Enter template name..."
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
            </div>
            <DialogFooter className="flex gap-2 sm:gap-2">
              <Button
                variant="outline"
                onClick={handleSkipAndGenerate}
                disabled={isSavingTemplate}
                className="flex-1 border-[#EDEEF0] hover:bg-[#F8F8F8] bg-transparent"
              >
                Skip & Generate
              </Button>
              <Button
                onClick={handleSaveTemplateAndGenerate}
                disabled={isSavingTemplate || !templateName.trim()}
                className="flex-1 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white"
              >
                {isSavingTemplate ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save & Generate
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
