"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Database, ChevronDown, ChevronRight } from "lucide-react"
import { schemeService, type Scheme } from "@/services/scheme-service"
import { componentService, type Component } from "@/services/component-service"
import { fieldService, type Field } from "@/services/field-service"
import {
  defaultFieldsService,
  type DefaultField,
  type FieldGroup,
  type SimpleField,
} from "@/services/default-fields-service"
import CreateFieldDialog from "./create-field-dialog"
import EditFieldDialog from "./edit-field-dialog"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function FieldsManagement() {
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [components, setComponents] = useState<Component[]>([])
  const [fields, setFields] = useState<Field[]>([])
  const [defaultFieldGroups, setDefaultFieldGroups] = useState<FieldGroup[]>([])
  const [simpleFields, setSimpleFields] = useState<SimpleField[]>([])
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>("")
  const [selectedComponentId, setSelectedComponentId] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingDefaults, setIsLoadingDefaults] = useState(false)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [fieldToEdit, setFieldToEdit] = useState<Field | null>(null)
  const [fieldToDelete, setFieldToDelete] = useState<string | null>(null)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  const { toast } = useToast()

  const loadSchemes = async () => {
    try {
      const data = await schemeService.getAllSchemes()
      setSchemes(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load schemes",
        variant: "destructive",
      })
    }
  }

  const loadComponents = async (schemeId: string) => {
    try {
      const data = await componentService.getComponentsByScheme(schemeId)
      setComponents(data)
      setSelectedComponentId("")
      setFields([])
      setDefaultFieldGroups([])
      setSimpleFields([])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load components",
        variant: "destructive",
      })
    }
  }

  const loadFields = async (componentId: string) => {
    try {
      setIsLoading(true)
      const data = await fieldService.getFieldsByComponent(componentId)
      setFields(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load fields",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const loadDefaultFields = async (componentType: string) => {
    try {
      setIsLoadingDefaults(true)
      const fieldGroups = await defaultFieldsService.getDefaultFieldsByComponent(componentType, "default")
      setDefaultFieldGroups(fieldGroups)
      setExpandedGroups(new Set(fieldGroups.map((group) => group.heading)))

      // Load simple fields for table display
      const simpleFieldsData = await defaultFieldsService.getSimpleFieldsByComponent(componentType)
      console.log("[v0] Loaded simple fields:", simpleFieldsData)
      console.log("[v0] Simple fields count:", simpleFieldsData.length)
      setSimpleFields(simpleFieldsData)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load default fields",
        variant: "destructive",
      })
    } finally {
      setIsLoadingDefaults(false)
    }
  }

  const toggleGroup = (groupHeading: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupHeading)) {
      newExpanded.delete(groupHeading)
    } else {
      newExpanded.add(groupHeading)
    }
    setExpandedGroups(newExpanded)
  }

  const addDefaultFieldToTemplate = async (defaultField: DefaultField) => {
    try {
      const newField: Omit<Field, "id" | "createdDate" | "createdBy"> = {
        englishName: defaultField.englishName,
        tamilName: defaultField.tamilName,
        englishDescription: defaultField.englishDescription,
        tamilDescription: defaultField.tamilDescription,
        dataType: defaultField.dataType,
        validation: defaultField.validation || "",
        isRequired: defaultField.isRequired,
        componentId: selectedComponentId,
      }

      await fieldService.createField(newField)
      loadFields(selectedComponentId)
      toast({
        title: "Success",
        description: `${defaultField.englishName} added to template`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add field to template",
        variant: "destructive",
      })
    }
  }

  const handleFieldCreated = () => {
    loadFields(selectedComponentId)
    setIsCreateDialogOpen(false)
    toast({
      title: "Success",
      description: "Field created successfully",
    })
  }

  const handleFieldUpdated = () => {
    loadFields(selectedComponentId)
    setIsEditDialogOpen(false)
    setFieldToEdit(null)
    toast({
      title: "Success",
      description: "Field updated successfully",
    })
  }

  const handleEditField = (field: Field) => {
    setFieldToEdit(field)
    setIsEditDialogOpen(true)
  }

  const handleDeleteField = async (fieldId: string) => {
    try {
      await fieldService.deleteField(fieldId)
      loadFields(selectedComponentId)
      toast({
        title: "Success",
        description: "Field deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete field",
        variant: "destructive",
      })
    }
    setFieldToDelete(null)
  }

  useEffect(() => {
    loadSchemes()
  }, [])

  useEffect(() => {
    if (selectedSchemeId) {
      loadComponents(selectedSchemeId)
    } else {
      setComponents([])
      setSelectedComponentId("")
      setFields([])
      setDefaultFieldGroups([])
      setSimpleFields([])
    }
  }, [selectedSchemeId])

  useEffect(() => {
    if (selectedComponentId) {
      loadFields(selectedComponentId)
      const selectedComponent = components.find((c) => c.id === selectedComponentId)
      if (selectedComponent?.componentType) {
        loadDefaultFields(selectedComponent.componentType)
      }
    } else {
      setFields([])
      setDefaultFieldGroups([])
      setSimpleFields([])
    }
  }, [selectedComponentId])

  const selectedScheme = schemes.find((scheme) => scheme.id === selectedSchemeId)
  const selectedComponent = components.find((component) => component.id === selectedComponentId)

  const getDataTypeColor = (dataType: string) => {
    const colors: Record<string, string> = {
      string: "bg-blue-100 text-blue-800",
      number: "bg-green-100 text-green-800",
      email: "bg-purple-100 text-purple-800",
      phone: "bg-orange-100 text-orange-800",
      date: "bg-pink-100 text-pink-800",
      boolean: "bg-gray-100 text-gray-800",
      textarea: "bg-indigo-100 text-indigo-800",
      attachment: "bg-teal-100 text-teal-800",
      select: "bg-yellow-100 text-yellow-800",
    }
    return colors[dataType] || "bg-gray-100 text-gray-800"
  }

  const renderFieldsTable = () => {
    console.log("[v0] Rendering table with simpleFields:", simpleFields)
    console.log("[v0] Table will show", simpleFields.length, "rows")

    if (simpleFields.length === 0) {
      return (
        <Card className="text-center py-16 border-0 shadow-xl bg-white/95 backdrop-blur-sm">
          <CardContent>
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">No fields found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Select a component to view available fields</p>
          </CardContent>
        </Card>
      )
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F3B335] text-[#013A65]">
              <th className="text-left p-3 font-semibold text-sm border-b border-[#F3B335]/30">Group</th>
              <th className="text-left p-3 font-semibold text-sm border-b border-[#F3B335]/30">Field Name</th>
              <th className="text-left p-3 font-semibold text-sm border-b border-[#F3B335]/30">Type</th>
              <th className="text-left p-3 font-semibold text-sm border-b border-[#F3B335]/30">Validations</th>
            </tr>
          </thead>
          <tbody>
            {simpleFields.map((field, index) => {
              console.log("[v0] Rendering field:", field)
              return (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors border-b border-slate-200/50">
                  <td className="p-3 text-sm text-slate-700 font-medium">{field.group}</td>
                  <td className="p-3 text-sm text-slate-800 font-medium">{field.name}</td>
                  <td className="p-3">
                    <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">{field.type}</Badge>
                  </td>
                  <td className="p-3 text-sm text-blue-600 font-mono max-w-xs">
                    <div className="truncate" title={field.validation}>
                      {field.validation}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#F3B335] rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Template Management</h1>
            <p className="text-blue-100 text-sm mt-1">
              Manage default fields and create custom templates based on component types
            </p>
          </div>
        </div>
      </div>

      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            <div className="p-1.5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <Database className="h-4 w-4 text-blue-600" />
            </div>
            Select Scheme & Component
          </CardTitle>
          <CardDescription className="text-sm">Choose a scheme and component to manage its fields</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Scheme</label>
              <Select value={selectedSchemeId} onValueChange={setSelectedSchemeId}>
                <SelectTrigger className="h-9 w-full min-w-0 bg-white">
                  <SelectValue placeholder="Select a scheme" />
                </SelectTrigger>
                <SelectContent>
                  {schemes.map((scheme) => (
                    <SelectItem key={scheme.id} value={scheme.id}>
                      <div className="flex flex-col py-1 min-w-0">
                        <span className="font-medium truncate text-sm">{scheme.englishName}</span>
                        <span className="text-xs text-muted-foreground truncate">{scheme.tamilName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Component</label>
              <Select
                value={selectedComponentId}
                onValueChange={setSelectedComponentId}
                disabled={!selectedSchemeId || components.length === 0}
              >
                <SelectTrigger className="h-9 w-full min-w-0 bg-white">
                  <SelectValue placeholder="Select a component" />
                </SelectTrigger>
                <SelectContent>
                  {components.map((component) => (
                    <SelectItem key={component.id} value={component.id}>
                      <div className="flex flex-col py-1 min-w-0">
                        <span className="font-medium truncate text-sm">{component.englishName}</span>
                        <span className="text-xs text-muted-foreground truncate">{component.tamilName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedScheme && selectedComponent && (
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-xl border border-blue-200/50 backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-base text-slate-800">{selectedScheme.englishName}</h3>
                    <p className="text-purple-600 font-medium text-sm">{selectedScheme.tamilName}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 font-medium text-xs">
                    {selectedScheme.englishAbbreviation}
                  </Badge>
                </div>
                <div className="border-t border-blue-200/50 pt-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm text-slate-800">{selectedComponent.englishName}</p>
                      <p className="text-xs text-purple-600 font-medium">{selectedComponent.tamilName}</p>
                    </div>
                    <Badge variant="outline" className="px-3 py-1 bg-white/80 backdrop-blur-sm border-blue-200 text-xs">
                      {fields.length} fields
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedComponentId && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-slate-800">Default Fields</h2>
              <Badge variant="outline" className="px-3 py-1 bg-white/80 backdrop-blur-sm border-[#F3B335] text-xs">
                {defaultFieldGroups.reduce((total, group) => total + group.fields.length, 0)} fields
              </Badge>
            </div>

            {isLoadingDefaults ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-3/4"></div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : defaultFieldGroups.length === 0 ? (
              <Card className="text-center py-8 border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#013A65]/10 to-[#F3B335]/10 rounded-xl flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-[#013A65]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-800">No default fields available</h3>
                  <p className="text-muted-foreground text-sm">Select a component to view available default fields</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {defaultFieldGroups.map((group) => (
                  <Collapsible
                    key={group.heading}
                    open={expandedGroups.has(group.heading)}
                    onOpenChange={() => toggleGroup(group.heading)}
                  >
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="pb-3 cursor-pointer hover:bg-[#F3B335]/5 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {expandedGroups.has(group.heading) ? (
                                <ChevronDown className="h-4 w-4 text-[#013A65]" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-[#013A65]" />
                              )}
                              <CardTitle className="text-base font-medium text-[#013A65]">{group.heading}</CardTitle>
                            </div>
                            <Badge className="bg-[#F3B335]/20 text-[#013A65] border-[#F3B335]/30 text-xs">
                              {group.fields.length} fields
                            </Badge>
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0 space-y-2">
                          {group.fields.map((field) => (
                            <div
                              key={field.id}
                              className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-200/50 hover:bg-slate-100/80 transition-colors"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-sm text-slate-800 truncate">{field.englishName}</h4>
                                  <Badge className={`${getDataTypeColor(field.dataType)} text-xs px-2 py-0.5`}>
                                    {field.dataType}
                                  </Badge>
                                  {field.isRequired && (
                                    <Badge className="bg-red-100 text-red-700 text-xs px-2 py-0.5">Required</Badge>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600 truncate">{field.tamilName}</p>
                                {field.validation && (
                                  <p className="text-xs text-blue-600 font-mono mt-1">{field.validation}</p>
                                )}
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                className="ml-3 h-8 px-3 text-xs bg-[#013A65] text-white border-[#013A65] hover:bg-[#013A65]/90"
                                onClick={() => addDefaultFieldToTemplate(field)}
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add
                              </Button>
                            </div>
                          ))}
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-slate-800">Template Fields</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="px-3 py-1 bg-white/80 backdrop-blur-sm border-[#F3B335] text-xs">
                  {simpleFields.length} fields
                </Badge>
                {selectedComponentId && (
                  <Button
                    onClick={() => setIsCreateDialogOpen(true)}
                    size="sm"
                    className="bg-gradient-to-r from-[#013A65] to-[#F3B335] hover:from-[#013A65]/90 hover:to-[#F3B335]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-8 px-3 text-xs"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Custom Field
                  </Button>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse bg-slate-200 h-16 rounded-lg"></div>
                ))}
              </div>
            ) : (
              renderFieldsTable()
            )}
          </div>
        </div>
      )}

      <CreateFieldDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onFieldCreated={handleFieldCreated}
        componentId={selectedComponentId}
        componentName={selectedComponent?.englishName || ""}
      />

      <EditFieldDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onFieldUpdated={handleFieldUpdated}
        field={fieldToEdit}
      />

      <AlertDialog open={!!fieldToDelete} onOpenChange={() => setFieldToDelete(null)}>
        <AlertDialogContent className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-slate-800">Delete Field</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 leading-relaxed">
              Are you sure you want to delete this field? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate-300 hover:bg-slate-50">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => fieldToDelete && handleDeleteField(fieldToDelete)}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
