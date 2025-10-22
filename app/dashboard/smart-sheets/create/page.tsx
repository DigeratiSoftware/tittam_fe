"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Plus, X, Save, Upload, ChevronUp, ChevronDown, FileText, Layers } from "lucide-react"
import { smartSheetService, type SmartSheetField, type SmartSheet } from "@/services/smart-sheet-service"
import { infoHubService } from "@/services/info-hub-service"
import { fieldService } from "@/services/field-service"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function CreateSmartSheetPage() {
  const [activeTab, setActiveTab] = useState<"scheme" | "general">("scheme")
  const { toast } = useToast()

  const [scheme, setScheme] = useState("")
  const [component, setComponent] = useState("")
  const [year, setYear] = useState("")
  const [zone, setZone] = useState("")
  const [district, setDistrict] = useState("")
  const [townPanchayat, setTownPanchayat] = useState("")

  const [schemes, setSchemes] = useState<string[]>([])
  const [components, setComponents] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  // Added state arrays for General tab filters
  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])

  const [workFields, setWorkFields] = useState<SmartSheetField[]>([])
  const [infoHubFields, setInfoHubFields] = useState<SmartSheetField[]>([])
  // Added state for custom fields available in General tab
  const [customFields, setCustomFields] = useState<SmartSheetField[]>([])
  const [workFieldsOpen, setWorkFieldsOpen] = useState(false)
  const [infoHubFieldsOpen, setInfoHubFieldsOpen] = useState(false)
  // Added state for custom fields popover visibility
  const [customFieldsOpen, setCustomFieldsOpen] = useState(false)

  const [selectedFields, setSelectedFields] = useState<SmartSheetField[]>([])

  const [showCustomFieldDialog, setShowCustomFieldDialog] = useState(false)
  const [customFieldName, setCustomFieldName] = useState("")
  const [customFieldType, setCustomFieldType] = useState<"text" | "number" | "date" | "dropdown" | "boolean">("text")

  const [createdSheets, setCreatedSheets] = useState<SmartSheet[]>([])

  const [showSheetNameDialog, setShowSheetNameDialog] = useState(false)
  const [sheetName, setSheetName] = useState("")

  const [templates, setTemplates] = useState<any[]>([])
  const [showLoadTemplateDialog, setShowLoadTemplateDialog] = useState(false)

  const [showShareDialog, setShowShareDialog] = useState(false)
  const [templateName, setTemplateName] = useState("")
  const [templateDescription, setTemplateDescription] = useState("")
  const [sectionName, setSectionName] = useState("")

  useEffect(() => {
    loadInitialData()
  }, [])

  useEffect(() => {
    if (scheme && component && year && activeTab === "scheme") {
      loadFields()
    }
  }, [scheme, component, year, activeTab])

  useEffect(() => {
    if (zone && district && townPanchayat && activeTab === "general") {
      loadGeneralFields()
    }
  }, [zone, district, townPanchayat, activeTab])

  useEffect(() => {
    if (scheme) {
      loadComponents()
    }
  }, [scheme])

  useEffect(() => {
    if (zone) {
      loadDistricts()
    }
  }, [zone])

  useEffect(() => {
    if (district) {
      loadTownPanchayats()
    }
  }, [district])

  const loadInitialData = async () => {
    const [schemesData, yearsData, templatesData, zonesData] = await Promise.all([
      smartSheetService.getSchemes(),
      smartSheetService.getYears(),
      smartSheetService.getTemplates(),
      infoHubService.getZones(),
    ])
    setSchemes(schemesData)
    setYears(yearsData)
    setTemplates(templatesData)
    setZones(zonesData)
  }

  const loadComponents = async () => {
    const componentsData = await smartSheetService.getComponents(scheme)
    setComponents(componentsData)
    setComponent("")
  }

  const loadDistricts = async () => {
    const districtsData = await infoHubService.getDistricts(zone)
    setDistricts(districtsData)
    setDistrict("")
    setTownPanchayat("")
  }

  const loadTownPanchayats = async () => {
    const townPanchayatsData = await infoHubService.getTownPanchayats(district)
    setTownPanchayats(townPanchayatsData)
    setTownPanchayat("")
  }

  const loadFields = async () => {
    const [work, infoHub] = await Promise.all([
      smartSheetService.getWorkFields(scheme, component, year),
      smartSheetService.getInfoHubFields(),
    ])
    setWorkFields(work)
    setInfoHubFields(infoHub)
  }

  const loadGeneralFields = async () => {
    const infoHub = await smartSheetService.getInfoHubFields()
    setInfoHubFields(infoHub)
    const fieldsData = await fieldService.getAllFields()
    const customFieldsData: SmartSheetField[] = fieldsData.map((field) => ({
      id: `custom_${field.id}`,
      name: field.englishName,
      dataType: field.dataType === "string" ? "text" : field.dataType === "phone" ? "text" : (field.dataType as any),
      source: "custom",
      required: field.isRequired,
      order: 0,
    }))
    setCustomFields(customFieldsData)
  }

  const handleToggleWorkField = (field: SmartSheetField) => {
    const exists = selectedFields.some((f) => f.id === field.id)
    if (exists) {
      setSelectedFields(selectedFields.filter((f) => f.id !== field.id))
    } else {
      setSelectedFields([...selectedFields, { ...field, order: selectedFields.length + 1 }])
    }
  }

  const handleToggleInfoHubField = (field: SmartSheetField) => {
    const exists = selectedFields.some((f) => f.id === field.id)
    if (exists) {
      setSelectedFields(selectedFields.filter((f) => f.id !== field.id))
    } else {
      setSelectedFields([...selectedFields, { ...field, order: selectedFields.length + 1 }])
    }
  }

  const handleToggleCustomField = (field: SmartSheetField) => {
    const exists = selectedFields.some((f) => f.id === field.id)
    if (exists) {
      setSelectedFields(selectedFields.filter((f) => f.id !== field.id))
    } else {
      setSelectedFields([...selectedFields, { ...field, order: selectedFields.length + 1 }])
    }
  }

  const handleRemoveField = (fieldId: string) => {
    setSelectedFields(selectedFields.filter((f) => f.id !== fieldId))
  }

  const handleMoveFieldUp = (index: number) => {
    if (index === 0) return
    const newFields = [...selectedFields]
    ;[newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]]
    setSelectedFields(newFields.map((f, i) => ({ ...f, order: i + 1 })))
  }

  const handleMoveFieldDown = (index: number) => {
    if (index === selectedFields.length - 1) return
    const newFields = [...selectedFields]
    ;[newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]]
    setSelectedFields(newFields.map((f, i) => ({ ...f, order: i + 1 })))
  }

  const handleAddCustomField = () => {
    if (!customFieldName) {
      toast({ title: "Error", description: "Please enter field name", variant: "destructive" })
      return
    }

    const newField: SmartSheetField = {
      id: `custom_${Date.now()}`,
      name: customFieldName,
      dataType: customFieldType,
      source: "custom",
      required: false,
      order: selectedFields.length + 1,
    }

    setSelectedFields([...selectedFields, newField])
    setCustomFields([...customFields, newField])
    setCustomFieldName("")
    setCustomFieldType("text")
    setShowCustomFieldDialog(false)
    toast({ title: "Success", description: "Custom field added" })
  }

  const handleAddSheetClick = () => {
    if (selectedFields.length === 0) {
      toast({ title: "Error", description: "Please add at least one field", variant: "destructive" })
      return
    }
    setShowSheetNameDialog(true)
  }

  const handleCreateSheet = () => {
    if (!sheetName) {
      toast({ title: "Error", description: "Please enter sheet name", variant: "destructive" })
      return
    }

    const newSheet: SmartSheet = {
      id: `sheet_${Date.now()}`,
      name: sheetName,
      description: "",
      type: activeTab,
      scheme: activeTab === "scheme" ? scheme : undefined,
      component: activeTab === "scheme" ? component : undefined,
      year: activeTab === "scheme" ? year : undefined,
      schemeName: activeTab === "scheme" ? scheme : undefined,
      componentName: activeTab === "scheme" ? component : undefined,
      zone: activeTab === "general" ? zone : undefined,
      district: activeTab === "general" ? district : undefined,
      townPanchayat: activeTab === "general" ? townPanchayat : undefined,
      fields: selectedFields,
      isShared: false,
      isFrozen: false,
      createdBy: "admin",
      createdAt: new Date().toISOString().split("T")[0],
      sharedWith: [],
      order: createdSheets.length + 1,
    }

    setCreatedSheets([...createdSheets, newSheet])
    setSheetName("")
    setSelectedFields([])
    setShowSheetNameDialog(false)
    toast({ title: "Success", description: "Sheet created successfully" })
  }

  const handleMoveSheetUp = (index: number) => {
    if (index === 0) return
    const newSheets = [...createdSheets]
    ;[newSheets[index - 1], newSheets[index]] = [newSheets[index], newSheets[index - 1]]
    setCreatedSheets(newSheets.map((s, i) => ({ ...s, order: i + 1 })))
  }

  const handleMoveSheetDown = (index: number) => {
    if (index === createdSheets.length - 1) return
    const newSheets = [...createdSheets]
    ;[newSheets[index], newSheets[index + 1]] = [newSheets[index + 1], newSheets[index]]
    setCreatedSheets(newSheets.map((s, i) => ({ ...s, order: i + 1 })))
  }

  const handleDeleteSheet = (sheetId: string) => {
    setCreatedSheets(createdSheets.filter((s) => s.id !== sheetId))
    toast({ title: "Success", description: "Sheet deleted" })
  }

  const handleLoadTemplate = async (templateId: string) => {
    const template = await smartSheetService.loadTemplate(templateId)
    const loadedSheets = template.sheets.map((s, i) => ({
      id: `sheet_${Date.now()}_${i}`,
      name: s.name,
      description: "",
      type: template.type,
      scheme: s.scheme,
      component: s.component,
      year: s.year,
      schemeName: s.scheme,
      componentName: s.component,
      fields: s.fields,
      isShared: false,
      isFrozen: false,
      createdBy: "admin",
      createdAt: new Date().toISOString().split("T")[0],
      sharedWith: [],
      order: i + 1,
    }))

    setCreatedSheets(loadedSheets)
    setActiveTab(template.type)
    setShowLoadTemplateDialog(false)
    toast({ title: "Success", description: "Template loaded successfully" })
  }

  const handleShareClick = () => {
    setShowShareDialog(true)
  }

  const handleShare = async () => {
    if (!templateName) {
      toast({ title: "Error", description: "Please enter template name", variant: "destructive" })
      return
    }

    if (!sectionName) {
      toast({ title: "Error", description: "Please enter section name", variant: "destructive" })
      return
    }

    // Save template
    await smartSheetService.createTemplate({
      name: templateName,
      description: templateDescription,
      type: activeTab,
      sheets: createdSheets.map((s) => ({
        name: s.name,
        fields: s.fields,
        scheme: s.scheme,
        component: s.component,
        year: s.year,
      })),
      createdBy: "admin",
    })

    // Share sheets
    for (const sheet of createdSheets) {
      await smartSheetService.createSmartSheet({
        ...sheet,
        sectionName,
        isShared: true,
      })
    }

    setShowShareDialog(false)
    setTemplateName("")
    setTemplateDescription("")
    setSectionName("")
    setCreatedSheets([])
    toast({ title: "Success", description: "Template saved and shared successfully" })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Create Smart Sheet</h1>
              <p className="text-white/80 text-sm mt-1">
                Build custom sheets with fields from work, info hub, or create your own
              </p>
            </div>
            <Button
              onClick={() => setShowLoadTemplateDialog(true)}
              size="sm"
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
            >
              <Upload className="h-4 w-4 mr-1.5" />
              Load Template
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "scheme" | "general")} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-[#F8F8F8] border border-[#013A65]/20 shadow-sm rounded-lg">
              <TabsTrigger
                value="scheme"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
              >
                Scheme
              </TabsTrigger>
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
              >
                General
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scheme" className="m-0 space-y-6">
              <div className="p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">Scheme</Label>
                    <Select value={scheme} onValueChange={setScheme}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select scheme" />
                      </SelectTrigger>
                      <SelectContent>
                        {schemes.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">Component</Label>
                    <Select value={component} onValueChange={setComponent} disabled={!scheme}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select component" />
                      </SelectTrigger>
                      <SelectContent>
                        {components.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">Year</Label>
                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {scheme && component && year && (
                <div className="grid grid-cols-3 gap-6">
                  {/* Available Fields */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">Available Fields</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-[#013A65]">Work Fields</Label>
                        <Popover open={workFieldsOpen} onOpenChange={setWorkFieldsOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between h-9 bg-white border-[#EDEEF0] hover:bg-[#F8F8F8]"
                            >
                              <span className="text-sm">
                                {selectedFields.filter((f) => workFields.some((wf) => wf.id === f.id)).length > 0
                                  ? `${selectedFields.filter((f) => workFields.some((wf) => wf.id === f.id)).length} selected`
                                  : "Select work fields"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <div className="max-h-64 overflow-y-auto p-2">
                              {workFields.map((field) => (
                                <div
                                  key={field.id}
                                  className="flex items-center space-x-2 p-2 hover:bg-[#F8F8F8] rounded cursor-pointer"
                                  onClick={() => handleToggleWorkField(field)}
                                >
                                  <Checkbox
                                    checked={selectedFields.some((f) => f.id === field.id)}
                                    onCheckedChange={() => handleToggleWorkField(field)}
                                  />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{field.name}</p>
                                    <p className="text-xs text-muted-foreground">{field.dataType}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-[#013A65]">Info Hub Fields</Label>
                        <Popover open={infoHubFieldsOpen} onOpenChange={setInfoHubFieldsOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between h-9 bg-white border-[#EDEEF0] hover:bg-[#F8F8F8]"
                            >
                              <span className="text-sm">
                                {selectedFields.filter((f) => infoHubFields.some((ihf) => ihf.id === f.id)).length > 0
                                  ? `${selectedFields.filter((f) => infoHubFields.some((ihf) => ihf.id === f.id)).length} selected`
                                  : "Select info hub fields"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <div className="max-h-64 overflow-y-auto p-2">
                              {infoHubFields.map((field) => (
                                <div
                                  key={field.id}
                                  className="flex items-center space-x-2 p-2 hover:bg-[#F8F8F8] rounded cursor-pointer"
                                  onClick={() => handleToggleInfoHubField(field)}
                                >
                                  <Checkbox
                                    checked={selectedFields.some((f) => f.id === field.id)}
                                    onCheckedChange={() => handleToggleInfoHubField(field)}
                                  />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{field.name}</p>
                                    <p className="text-xs text-muted-foreground">{field.dataType}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>

                      <Button
                        onClick={() => setShowCustomFieldDialog(true)}
                        variant="outline"
                        className="w-full border-[#EDEEF0] hover:bg-[#F8F8F8]"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Custom Field
                      </Button>
                    </div>
                  </Card>

                  {/* Selected Fields */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">
                      Selected Fields ({selectedFields.length})
                    </h3>
                    <div className="flex-1 space-y-2 max-h-[500px] overflow-y-auto mb-4">
                      {selectedFields.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                          <FileText className="h-12 w-12 text-[#013A65]/20 mb-3" />
                          <p className="text-sm text-[#013A65]/60">No fields selected</p>
                          <p className="text-xs text-[#013A65]/40 mt-1">Select fields from available fields</p>
                        </div>
                      ) : (
                        selectedFields.map((field, index) => (
                          <div
                            key={field.id}
                            className="flex items-center justify-between p-3 bg-[#F8F8F8] rounded-lg border border-[#EDEEF0]"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="flex flex-col gap-0.5">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveFieldUp(index)}
                                  disabled={index === 0}
                                >
                                  <ChevronUp className="h-3 w-3 text-[#013A65]" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveFieldDown(index)}
                                  disabled={index === selectedFields.length - 1}
                                >
                                  <ChevronDown className="h-3 w-3 text-[#013A65]" />
                                </Button>
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm text-[#013A65]">{field.name}</p>
                                <p className="text-xs text-[#013A65]/60">
                                  {field.dataType} • {field.source}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveField(field.id)}
                              className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                    <Button
                      onClick={handleAddSheetClick}
                      disabled={selectedFields.length === 0}
                      className="w-full bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] h-9"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Sheet
                    </Button>
                  </Card>

                  {/* Created Sheets */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">
                      Created Sheets ({createdSheets.length})
                    </h3>
                    <div className="flex-1 space-y-2 max-h-[500px] overflow-y-auto mb-4">
                      {createdSheets.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                          <Layers className="h-12 w-12 text-[#013A65]/20 mb-3" />
                          <p className="text-sm text-[#013A65]/60">No sheet created</p>
                          <p className="text-xs text-[#013A65]/40 mt-1">Add fields and create your first sheet</p>
                        </div>
                      ) : (
                        createdSheets.map((sheet, index) => (
                          <div
                            key={sheet.id}
                            className="flex items-center justify-between p-3 bg-[#F8F8F8] rounded-lg border border-[#EDEEF0]"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="flex flex-col gap-0.5">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveSheetUp(index)}
                                  disabled={index === 0}
                                >
                                  <ChevronUp className="h-3 w-3 text-[#013A65]" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveSheetDown(index)}
                                  disabled={index === createdSheets.length - 1}
                                >
                                  <ChevronDown className="h-3 w-3 text-[#013A65]" />
                                </Button>
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm text-[#013A65]">{sheet.name}</p>
                                <p className="text-xs text-[#013A65]/60">
                                  {sheet.fields.length} fields • {sheet.type}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteSheet(sheet.id)}
                              className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                    <Button
                      onClick={handleShareClick}
                      disabled={createdSheets.length === 0}
                      className="w-full bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] h-9"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="general" className="m-0 space-y-6">
              <div className="p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">Zone</Label>
                    <Select value={zone} onValueChange={setZone}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select zone" />
                      </SelectTrigger>
                      <SelectContent>
                        {zones.map((z) => (
                          <SelectItem key={z} value={z}>
                            {z}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">District</Label>
                    <Select value={district} onValueChange={setDistrict} disabled={!zone}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]">Town Panchayat</Label>
                    <Select value={townPanchayat} onValueChange={setTownPanchayat} disabled={!district}>
                      <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                        <SelectValue placeholder="Select town panchayat" />
                      </SelectTrigger>
                      <SelectContent>
                        {townPanchayats.map((tp) => (
                          <SelectItem key={tp} value={tp}>
                            {tp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {zone && district && townPanchayat && (
                <div className="grid grid-cols-3 gap-6">
                  {/* Available Fields */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">Available Fields</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-[#013A65]">Info Hub Fields</Label>
                        <Popover open={infoHubFieldsOpen} onOpenChange={setInfoHubFieldsOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between h-9 bg-white border-[#EDEEF0] hover:bg-[#F8F8F8]"
                            >
                              <span className="text-sm">
                                {selectedFields.filter((f) => infoHubFields.some((ihf) => ihf.id === f.id)).length > 0
                                  ? `${selectedFields.filter((f) => infoHubFields.some((ihf) => ihf.id === f.id)).length} selected`
                                  : "Select info hub fields"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <div className="max-h-64 overflow-y-auto p-2">
                              {infoHubFields.map((field) => (
                                <div
                                  key={field.id}
                                  className="flex items-center space-x-2 p-2 hover:bg-[#F8F8F8] rounded cursor-pointer"
                                  onClick={() => handleToggleInfoHubField(field)}
                                >
                                  <Checkbox
                                    checked={selectedFields.some((f) => f.id === field.id)}
                                    onCheckedChange={() => handleToggleInfoHubField(field)}
                                  />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{field.name}</p>
                                    <p className="text-xs text-muted-foreground">{field.dataType}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-[#013A65]">Custom Fields</Label>
                        <Popover open={customFieldsOpen} onOpenChange={setCustomFieldsOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between h-9 bg-white border-[#EDEEF0] hover:bg-[#F8F8F8]"
                            >
                              <span className="text-sm">
                                {selectedFields.filter((f) => customFields.some((cf) => cf.id === f.id)).length > 0
                                  ? `${selectedFields.filter((f) => customFields.some((cf) => cf.id === f.id)).length} selected`
                                  : "Select custom fields"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <div className="max-h-64 overflow-y-auto p-2">
                              {customFields.length === 0 ? (
                                <div className="p-4 text-center text-sm text-[#013A65]/60">
                                  No custom fields yet. Create one below.
                                </div>
                              ) : (
                                customFields.map((field) => (
                                  <div
                                    key={field.id}
                                    className="flex items-center space-x-2 p-2 hover:bg-[#F8F8F8] rounded cursor-pointer"
                                    onClick={() => handleToggleCustomField(field)}
                                  >
                                    <Checkbox
                                      checked={selectedFields.some((f) => f.id === field.id)}
                                      onCheckedChange={() => handleToggleCustomField(field)}
                                    />
                                    <div className="flex-1">
                                      <p className="text-sm font-medium">{field.name}</p>
                                      <p className="text-xs text-muted-foreground">{field.dataType}</p>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>

                      <Button
                        onClick={() => setShowCustomFieldDialog(true)}
                        variant="outline"
                        className="w-full border-[#EDEEF0] hover:bg-[#F8F8F8]"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Custom Field
                      </Button>
                    </div>
                  </Card>

                  {/* Selected Fields - Same as Scheme tab */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">
                      Selected Fields ({selectedFields.length})
                    </h3>
                    <div className="flex-1 space-y-2 max-h-[500px] overflow-y-auto mb-4">
                      {selectedFields.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                          <FileText className="h-12 w-12 text-[#013A65]/20 mb-3" />
                          <p className="text-sm text-[#013A65]/60">No fields selected</p>
                          <p className="text-xs text-[#013A65]/40 mt-1">Select fields from available fields</p>
                        </div>
                      ) : (
                        selectedFields.map((field, index) => (
                          <div
                            key={field.id}
                            className="flex items-center justify-between p-3 bg-[#F8F8F8] rounded-lg border border-[#EDEEF0]"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="flex flex-col gap-0.5">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveFieldUp(index)}
                                  disabled={index === 0}
                                >
                                  <ChevronUp className="h-3 w-3 text-[#013A65]" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveFieldDown(index)}
                                  disabled={index === selectedFields.length - 1}
                                >
                                  <ChevronDown className="h-3 w-3 text-[#013A65]" />
                                </Button>
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm text-[#013A65]">{field.name}</p>
                                <p className="text-xs text-[#013A65]/60">
                                  {field.dataType} • {field.source}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveField(field.id)}
                              className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                    <Button
                      onClick={handleAddSheetClick}
                      disabled={selectedFields.length === 0}
                      className="w-full bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] h-9"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Sheet
                    </Button>
                  </Card>

                  {/* Created Sheets - Same as Scheme tab */}
                  <Card className="p-6 bg-white border-[#EDEEF0] shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold text-[#013A65] mb-4">
                      Created Sheets ({createdSheets.length})
                    </h3>
                    <div className="flex-1 space-y-2 max-h-[500px] overflow-y-auto mb-4">
                      {createdSheets.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                          <Layers className="h-12 w-12 text-[#013A65]/20 mb-3" />
                          <p className="text-sm text-[#013A65]/60">No sheet created</p>
                          <p className="text-xs text-[#013A65]/40 mt-1">Add fields and create your first sheet</p>
                        </div>
                      ) : (
                        createdSheets.map((sheet, index) => (
                          <div
                            key={sheet.id}
                            className="flex items-center justify-between p-3 bg-[#F8F8F8] rounded-lg border border-[#EDEEF0]"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="flex flex-col gap-0.5">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveSheetUp(index)}
                                  disabled={index === 0}
                                >
                                  <ChevronUp className="h-3 w-3 text-[#013A65]" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 hover:bg-[#013A65]/10"
                                  onClick={() => handleMoveSheetDown(index)}
                                  disabled={index === createdSheets.length - 1}
                                >
                                  <ChevronDown className="h-3 w-3 text-[#013A65]" />
                                </Button>
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm text-[#013A65]">{sheet.name}</p>
                                <p className="text-xs text-[#013A65]/60">
                                  {sheet.fields.length} fields • {sheet.type}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteSheet(sheet.id)}
                              className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                    <Button
                      onClick={handleShareClick}
                      disabled={createdSheets.length === 0}
                      className="w-full bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] h-9"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <Dialog open={showSheetNameDialog} onOpenChange={setShowSheetNameDialog}>
          <DialogContent className="border-0 shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Create Sheet</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">Enter a name for your sheet</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-[#013A65]">Sheet Name</Label>
                <Input
                  value={sheetName}
                  onChange={(e) => setSheetName(e.target.value)}
                  placeholder="Enter sheet name"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowSheetNameDialog(false)} className="border-[#EDEEF0]">
                Cancel
              </Button>
              <Button
                onClick={handleCreateSheet}
                className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white"
              >
                Create Sheet
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent className="border-0 shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Share Template</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">
                Save your sheets as a template and share them
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-[#013A65]">Template Name</Label>
                <Input
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div>
                <Label className="text-[#013A65]">Description (Optional)</Label>
                <Textarea
                  value={templateDescription}
                  onChange={(e) => setTemplateDescription(e.target.value)}
                  placeholder="Enter description"
                  className="border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div>
                <Label className="text-[#013A65]">Section Name</Label>
                <Input
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                  placeholder="e.g., Infrastructure Projects, Survey Forms"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div className="text-sm text-[#013A65]/60 bg-[#F8F8F8] p-3 rounded-lg border border-[#EDEEF0]">
                {createdSheets.length} sheet(s) will be saved and shared under this section
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowShareDialog(false)} className="border-[#EDEEF0]">
                Cancel
              </Button>
              <Button onClick={handleShare} className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white">
                <Save className="h-4 w-4 mr-2" />
                Share
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Custom Field Dialog */}
        <Dialog open={showCustomFieldDialog} onOpenChange={setShowCustomFieldDialog}>
          <DialogContent className="border-0 shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Add Custom Field</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">
                Create a new custom field for your sheet
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-[#013A65]">Field Name</Label>
                <Input
                  value={customFieldName}
                  onChange={(e) => setCustomFieldName(e.target.value)}
                  placeholder="Enter field name"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div>
                <Label className="text-[#013A65]">Data Type</Label>
                <Select value={customFieldType} onValueChange={(v: any) => setCustomFieldType(v)}>
                  <SelectTrigger className="h-9 border-[#EDEEF0]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="dropdown">Dropdown</SelectItem>
                    <SelectItem value="boolean">Yes/No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCustomFieldDialog(false)} className="border-[#EDEEF0]">
                Cancel
              </Button>
              <Button
                onClick={handleAddCustomField}
                className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white"
              >
                Add Field
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Load Template Dialog */}
        <Dialog open={showLoadTemplateDialog} onOpenChange={setShowLoadTemplateDialog}>
          <DialogContent className="border-0 shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Load Template</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">Select a template to load</DialogDescription>
            </DialogHeader>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="p-4 border border-[#EDEEF0] rounded-lg cursor-pointer hover:bg-[#F8F8F8] transition-colors"
                  onClick={() => handleLoadTemplate(template.id)}
                >
                  <p className="font-medium text-[#013A65]">{template.name}</p>
                  <p className="text-sm text-[#013A65]/70">{template.description}</p>
                  <p className="text-xs text-[#013A65]/50 mt-1">
                    {template.sheets.length} sheets • {template.type}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowLoadTemplateDialog(false)} className="border-[#EDEEF0]">
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Save & Share Dialog (now used for sharing) */}
        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent className="border-0 shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[#013A65]">Share Template</DialogTitle>
              <DialogDescription className="text-[#013A65]/70">
                Save your sheets as a template and share them with a section name
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-[#013A65]">Template Name</Label>
                <Input
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div>
                <Label className="text-[#013A65]">Description (Optional)</Label>
                <Textarea
                  value={templateDescription}
                  onChange={(e) => setTemplateDescription(e.target.value)}
                  placeholder="Enter description"
                  className="border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div>
                <Label className="text-[#013A65]">Section Name</Label>
                <Input
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                  placeholder="e.g., Infrastructure Projects, Survey Forms"
                  className="h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                />
              </div>
              <div className="text-sm text-[#013A65]/60 bg-[#F8F8F8] p-3 rounded-lg border border-[#EDEEF0]">
                {createdSheets.length} sheet(s) will be saved and shared under this section
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowShareDialog(false)} className="border-[#EDEEF0]">
                Cancel
              </Button>
              <Button onClick={handleShare} className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white">
                <Save className="h-4 w-4 mr-2" />
                Share
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
