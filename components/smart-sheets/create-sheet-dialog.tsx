"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { smartSheetService, type SmartSheet, type SmartSheetField } from "@/services/smart-sheet-service"
import { useToast } from "@/hooks/use-toast"
import { Plus, X, GripVertical } from "lucide-react"

interface CreateSheetDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sheet?: SmartSheet | null
  onSuccess: () => void
}

export function CreateSheetDialog({ open, onOpenChange, sheet, onSuccess }: CreateSheetDialogProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState<"scheme" | "general">("scheme")
  const [scheme, setScheme] = useState("")
  const [component, setComponent] = useState("")
  const [year, setYear] = useState("")
  const [sectionName, setSectionName] = useState("") // Added section name
  const [selectedFields, setSelectedFields] = useState<SmartSheetField[]>([])
  const [availableWorkFields, setAvailableWorkFields] = useState<SmartSheetField[]>([])
  const [availableInfoHubFields, setAvailableInfoHubFields] = useState<SmartSheetField[]>([])
  const [schemes, setSchemes] = useState<string[]>([])
  const [components, setComponents] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [showCustomField, setShowCustomField] = useState(false)
  const [customFieldName, setCustomFieldName] = useState("")
  const [customFieldType, setCustomFieldType] = useState<"text" | "number" | "date" | "dropdown" | "boolean">("text")
  const [sharedWith, setSharedWith] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    if (open) {
      loadDropdownData()
      if (sheet) {
        setName(sheet.name)
        setDescription(sheet.description)
        setType(sheet.type)
        setScheme(sheet.scheme || "")
        setComponent(sheet.component || "")
        setYear(sheet.year || "")
        setSectionName(sheet.sectionName || "") // Load section name
        setSelectedFields(sheet.fields)
        setSharedWith(sheet.sharedWith)
      } else {
        resetForm()
      }
    }
  }, [open, sheet])

  useEffect(() => {
    if (type === "scheme" && scheme && component && year) {
      loadFields()
    }
  }, [type, scheme, component, year])

  useEffect(() => {
    if (scheme) {
      loadComponents()
    }
  }, [scheme])

  const loadDropdownData = async () => {
    const [schemesData, yearsData, infoHubFields] = await Promise.all([
      smartSheetService.getSchemes(),
      smartSheetService.getYears(),
      smartSheetService.getInfoHubFields(),
    ])
    setSchemes(schemesData)
    setYears(yearsData)
    setAvailableInfoHubFields(infoHubFields)
  }

  const loadComponents = async () => {
    const componentsData = await smartSheetService.getComponents(scheme)
    setComponents(componentsData)
  }

  const loadFields = async () => {
    const workFields = await smartSheetService.getWorkFields(scheme, component, year)
    setAvailableWorkFields(workFields)
  }

  const resetForm = () => {
    setName("")
    setDescription("")
    setType("scheme")
    setScheme("")
    setComponent("")
    setYear("")
    setSectionName("") // Reset section name
    setSelectedFields([])
    setSharedWith([])
    setShowCustomField(false)
    setCustomFieldName("")
    setCustomFieldType("text")
  }

  const handleAddField = (field: SmartSheetField) => {
    if (selectedFields.find((f) => f.id === field.id)) {
      toast({ title: "Info", description: "Field already added" })
      return
    }
    setSelectedFields([...selectedFields, { ...field, order: selectedFields.length + 1 }])
  }

  const handleRemoveField = (fieldId: string) => {
    setSelectedFields(selectedFields.filter((f) => f.id !== fieldId))
  }

  const handleAddCustomField = () => {
    if (!customFieldName.trim()) {
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
    setCustomFieldName("")
    setCustomFieldType("text")
    setShowCustomField(false)
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast({ title: "Error", description: "Please enter sheet name", variant: "destructive" })
      return
    }

    if (type === "scheme" && (!scheme || !component || !year)) {
      toast({ title: "Error", description: "Please select scheme, component, and year", variant: "destructive" })
      return
    }

    if (selectedFields.length === 0) {
      toast({ title: "Error", description: "Please add at least one field", variant: "destructive" })
      return
    }

    if (!sectionName.trim()) {
      toast({ title: "Error", description: "Please enter section name", variant: "destructive" })
      return
    }

    try {
      const sheetData = {
        name,
        description,
        type,
        scheme: type === "scheme" ? scheme : undefined,
        component: type === "scheme" ? component : undefined,
        year: type === "scheme" ? year : undefined,
        schemeName: type === "scheme" ? scheme : undefined, // Store scheme name
        componentName: type === "scheme" ? component : undefined, // Store component name
        fields: selectedFields,
        isShared: false,
        isFrozen: false,
        createdBy: "admin",
        sharedWith,
        sectionName, // Include section name
      }

      if (sheet) {
        await smartSheetService.updateSmartSheet(sheet.id, sheetData)
        toast({ title: "Success", description: "Sheet updated successfully" })
      } else {
        await smartSheetService.createSmartSheet(sheetData)
        toast({ title: "Success", description: "Sheet created successfully" })
      }

      onSuccess()
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save sheet",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#013A65]">{sheet ? "Edit Sheet" : "Create New Sheet"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Sheet Name *</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter sheet name" />
            </div>
            <div>
              <Label>Type *</Label>
              <Select value={type} onValueChange={(v: "scheme" | "general") => setType(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheme">Scheme</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter sheet description"
              rows={2}
            />
          </div>

          <div>
            <Label>Section Name *</Label>
            <Input
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              placeholder="Enter section name (e.g., Infrastructure Projects, Survey Forms)"
            />
            <p className="text-xs text-gray-500 mt-1">Sheets with the same section name will be grouped together</p>
          </div>

          {/* Scheme Type Fields */}
          {type === "scheme" && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Scheme *</Label>
                <Select value={scheme} onValueChange={setScheme}>
                  <SelectTrigger>
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
                <Label>Component *</Label>
                <Select value={component} onValueChange={setComponent} disabled={!scheme}>
                  <SelectTrigger>
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
                <Label>Year *</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger>
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
          )}

          {/* Field Selection */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-[#013A65] mb-3">Add Fields</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Work Fields */}
              {type === "scheme" && availableWorkFields.length > 0 && (
                <div>
                  <Label className="mb-2 block">Work Fields</Label>
                  <div className="border rounded-lg p-3 max-h-40 overflow-y-auto space-y-2">
                    {availableWorkFields.map((field) => (
                      <div
                        key={field.id}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => handleAddField(field)}
                      >
                        <span className="text-sm">{field.name}</span>
                        <Plus className="h-4 w-4 text-[#F3B335]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info Hub Fields */}
              <div>
                <Label className="mb-2 block">Info Hub Fields</Label>
                <div className="border rounded-lg p-3 max-h-40 overflow-y-auto space-y-2">
                  {availableInfoHubFields.map((field) => (
                    <div
                      key={field.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={() => handleAddField(field)}
                    >
                      <span className="text-sm">{field.name}</span>
                      <Plus className="h-4 w-4 text-[#F3B335]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Field */}
            {!showCustomField ? (
              <Button variant="outline" onClick={() => setShowCustomField(true)} className="w-full border-dashed">
                <Plus className="h-4 w-4 mr-2" />
                Add Custom Field
              </Button>
            ) : (
              <div className="border rounded-lg p-3 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Field name"
                    value={customFieldName}
                    onChange={(e) => setCustomFieldName(e.target.value)}
                  />
                  <Select value={customFieldType} onValueChange={(v: any) => setCustomFieldType(v)}>
                    <SelectTrigger>
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
                <div className="flex gap-2">
                  <Button
                    onClick={handleAddCustomField}
                    size="sm"
                    className="bg-[#F3B335] hover:bg-[#F3B335]/90 text-[#013A65]"
                  >
                    Add Field
                  </Button>
                  <Button onClick={() => setShowCustomField(false)} size="sm" variant="outline">
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Selected Fields */}
          {selectedFields.length > 0 && (
            <div className="border-t pt-4">
              <h3 className="font-semibold text-[#013A65] mb-3">Selected Fields ({selectedFields.length})</h3>
              <div className="space-y-2">
                {selectedFields.map((field) => (
                  <div key={field.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <GripVertical className="h-4 w-4 text-gray-400" />
                    <div className="flex-1">
                      <div className="font-medium">{field.name}</div>
                      <div className="text-xs text-gray-500">
                        {field.dataType} • {field.source}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveField(field.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80"
            >
              {sheet ? "Update Sheet" : "Add Sheet"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
