"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Calendar, Hash, Type, List, ToggleLeft, Upload, MapPin, Search } from "lucide-react"
import { templateService, type Template, type TemplateField } from "@/services/template-service"
import { schemeService } from "@/services/scheme-service"
import { componentService } from "@/services/component-service"
import { CreateTemplateFieldDialog } from "./create-template-field-dialog"
import { EditTemplateFieldDialog } from "./edit-template-field-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TemplateManagement() {
  const [schemes, setSchemes] = useState<any[]>([])
  const [components, setComponents] = useState<any[]>([])
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>("")
  const [selectedComponentId, setSelectedComponentId] = useState<string>("")
  const [template, setTemplate] = useState<Template | null>(null)
  const [filteredFields, setFilteredFields] = useState<TemplateField[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [createFieldOpen, setCreateFieldOpen] = useState(false)
  const [editFieldOpen, setEditFieldOpen] = useState(false)
  const [selectedField, setSelectedField] = useState<TemplateField | null>(null)

  useEffect(() => {
    loadSchemes()
  }, [])

  useEffect(() => {
    if (selectedSchemeId) {
      loadComponents()
    } else {
      setComponents([])
      setSelectedComponentId("")
    }
  }, [selectedSchemeId])

  useEffect(() => {
    if (selectedSchemeId && selectedComponentId) {
      loadTemplate()
    } else {
      setTemplate(null)
    }
  }, [selectedSchemeId, selectedComponentId])

  useEffect(() => {
    if (template) {
      const filtered = template.fields.filter(
        (field) =>
          field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          field.dataType.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredFields(filtered.sort((a, b) => a.order - b.order))
    } else {
      setFilteredFields([])
    }
  }, [searchTerm, template])

  const loadSchemes = async () => {
    try {
      const data = await schemeService.getAllSchemes()
      setSchemes(data)
    } catch (error) {
      console.error("Failed to load schemes:", error)
    }
  }

  const loadComponents = async () => {
    try {
      const data = await componentService.getAllComponents()
      setComponents(data)
    } catch (error) {
      console.error("Failed to load components:", error)
    }
  }

  const loadTemplate = async () => {
    setLoading(true)
    try {
      console.log("[v0] Loading template for component ID:", selectedComponentId)
      const fieldsData = await templateService.getFieldsByComponent(selectedComponentId)
      console.log("[v0] API response for component", selectedComponentId, ":", fieldsData)

      // Create a template structure from the API response
      const templateData: Template = {
        id: `template-${selectedSchemeId}-${selectedComponentId}`,
        schemeId: selectedSchemeId,
        componentId: selectedComponentId,
        subComponentId: "default",
        fields: fieldsData,
        createdAt: new Date().toISOString().split("T")[0],
        createdBy: "API",
        updatedAt: new Date().toISOString().split("T")[0],
        updatedBy: "API",
      }

      setTemplate(templateData)
      console.log("[v0] Template created with", fieldsData.length, "fields")
    } catch (error) {
      console.error("Failed to load template:", error)
      setTemplate(null)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateField = async (fieldData: Omit<TemplateField, "id">) => {
    if (!template) return
    try {
      const fieldDataWithComponent = {
        ...fieldData,
        componentId: selectedComponentId,
      }
      console.log("[v0] Creating field with componentId:", selectedComponentId)
      await templateService.createField(fieldDataWithComponent)
      await loadTemplate()
      setCreateFieldOpen(false)
    } catch (error) {
      console.error("Failed to create field:", error)
    }
  }

  const handleEditField = async (fieldId: string, updates: Partial<TemplateField>) => {
    if (!template) return
    try {
      await templateService.updateField(template.id, fieldId, updates)
      await loadTemplate()
      setEditFieldOpen(false)
      setSelectedField(null)
    } catch (error) {
      console.error("Failed to update field:", error)
    }
  }

  const handleDeleteField = async (fieldId: string) => {
    if (!template) return
    try {
      await templateService.deleteField(template.id, fieldId)
      await loadTemplate()
    } catch (error) {
      console.error("Failed to delete field:", error)
    }
  }

  const getFieldIcon = (dataType: string) => {
    switch (dataType) {
      case "text":
        return <Type className="h-4 w-4" />
      case "number":
        return <Hash className="h-4 w-4" />
      case "date":
        return <Calendar className="h-4 w-4" />
      case "dateRange":
        return <Calendar className="h-4 w-4" />
      case "dropdown":
        return <List className="h-4 w-4" />
      case "boolean":
        return <ToggleLeft className="h-4 w-4" />
      case "file":
        return <Upload className="h-4 w-4" />
      case "textarea":
        return <FileText className="h-4 w-4" />
      case "geoLocation":
        return <MapPin className="h-4 w-4" />
      default:
        return <Type className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Template Management</h1>
            <p className="text-white/80 text-sm mt-1">Manage work templates and field configurations</p>
          </div>
          {template && (
            <Button
              onClick={() => setCreateFieldOpen(true)}
              size="sm"
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Field
            </Button>
          )}
        </div>
      </div>
      <div className="bg-[#EDEEF0]/30 p-4 rounded-lg">
        <div className="flex items-end justify-between mb-4">
          <div className="flex items-end">
            <div className="mr-4">
              <label className="block text-sm font-medium text-[#013A65] mb-2">Select Scheme</label>
              <Select value={selectedSchemeId} onValueChange={setSelectedSchemeId}>
                <SelectTrigger className="h-9 w-72">
                  <SelectValue placeholder="Choose a scheme" />
                </SelectTrigger>
                <SelectContent className="border border-[#EDEEF0]">
                  {schemes.map((scheme) => (
                    <SelectItem key={scheme.id} value={scheme.id} className="hover:bg-[#F8F8F8]">
                      {scheme.englishAbbreviation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#013A65] mb-2">Select Component</label>
              <Select value={selectedComponentId} onValueChange={setSelectedComponentId} disabled={!selectedSchemeId}>
                <SelectTrigger className="h-9 w-72">
                  <SelectValue placeholder="Choose a component" />
                </SelectTrigger>
                <SelectContent className="border border-[#EDEEF0]">
                  {components.map((component) => (
                    <SelectItem key={component.id} value={component.id} className="hover:bg-[#F8F8F8]">
                      {component.englishName} / {component.tamilName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      {template && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/50 h-4 w-4" />
          <Input
            placeholder="Search template fields..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-[#EDEEF0] focus:border-[#F3B335] focus:ring-[#F3B335]/20 h-10"
          />
        </div>
      )}
      {loading ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">Group Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Field Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Data Type</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Required</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Default</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Options</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Validation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : template ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">Group Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Field Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Data Type</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Required</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Default</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Options</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Validation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFields.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="text-[#013A65]/60">
                      {searchTerm ? "No fields found matching your search." : "No template fields found."}
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredFields.map((field) => (
                  <TableRow key={field.id} className="hover:bg-[#F8F8F8]/50">
                    <TableCell>
                      <Badge variant="outline" className="bg-[#013A65]/10 text-[#013A65] border-[#013A65]/20">
                        {field.group}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gradient-to-r from-[#F3B335]/20 to-[#013A65]/20 rounded-md flex-shrink-0">
                          {getFieldIcon(field.dataType)}
                        </div>
                        <span className="font-medium text-[#013A65]">{field.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-[#F3B335]/20 text-[#013A65] border-[#F3B335]/30">
                        {field.dataType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {field.isRequired ? (
                        <Badge variant="destructive" className="text-xs">
                          Required
                        </Badge>
                      ) : (
                        <span className="text-[#013A65]/60">No</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {field.isDefault ? (
                        <Badge variant="secondary" className="text-xs bg-[#013A65]/20 text-[#013A65]">
                          Default
                        </Badge>
                      ) : (
                        <span className="text-[#013A65]/60">No</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {field.options && field.options.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {field.options.slice(0, 2).map((option, index) => {
                            const optionLabel =
                              typeof option === "string"
                                ? option
                                : option.englishName ||
                                  option.nameEnglish ||
                                  option.label ||
                                  option.value ||
                                  String(option)

                            return (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs bg-[#F3B335]/10 text-[#013A65] border-[#F3B335]/20"
                              >
                                {optionLabel}
                              </Badge>
                            )
                          })}
                          {field.options.length > 2 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-[#F3B335]/10 text-[#013A65] border-[#F3B335]/20"
                            >
                              +{field.options.length - 2}
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <span className="text-[#013A65]/60">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {field.validation ? (
                        <div className="text-xs text-[#013A65]/70">
                          {field.validation.min !== undefined && <span>Min: {field.validation.min}</span>}
                          {field.validation.min !== undefined && field.validation.max !== undefined && <span> | </span>}
                          {field.validation.max !== undefined && <span>Max: {field.validation.max}</span>}
                        </div>
                      ) : (
                        <span className="text-[#013A65]/60">None</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      ) : selectedSchemeId && selectedComponentId ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-[#013A65]/70">No template found. Creating default template...</div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#F3B335]/20 to-[#013A65]/20 rounded-xl flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-[#013A65]" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#013A65]">No templates found</h3>
          <p className="text-sm text-[#013A65]/70 mb-4 max-w-md mx-auto">
            Select scheme and component to view and manage template fields.
          </p>
        </div>
      )}
      <CreateTemplateFieldDialog
        open={createFieldOpen}
        onOpenChange={setCreateFieldOpen}
        onSubmit={handleCreateField}
      />
      {selectedField && (
        <EditTemplateFieldDialog
          open={editFieldOpen}
          onOpenChange={setEditFieldOpen}
          field={selectedField}
          onSubmit={(updates) => handleEditField(selectedField.id, updates)}
        />
      )}
    </div>
  )
}
