"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X, Loader2 } from "lucide-react"
import type { TemplateField } from "@/services/template-service"

interface EditTemplateFieldDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  field: TemplateField
  onSubmit: (updates: Partial<TemplateField>) => void
}

const dataTypeOptions = [
  { value: "text", label: "Text" },
  { value: "number", label: "Number" },
  { value: "date", label: "Date" },
  { value: "dateRange", label: "Date Range" },
  { value: "dropdown", label: "Dropdown" },
  { value: "boolean", label: "Yes/No" },
  { value: "file", label: "File Upload" },
  { value: "textarea", label: "Text Area" },
  { value: "geoLocation", label: "Geo Location" },
]

export function EditTemplateFieldDialog({ open, onOpenChange, field, onSubmit }: EditTemplateFieldDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    dataType: "" as TemplateField["dataType"],
    isRequired: false,
    options: [] as string[],
    validation: {
      min: undefined as number | undefined,
      max: undefined as number | undefined,
    },
  })
  const [newOption, setNewOption] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (field) {
      setFormData({
        name: field.name,
        dataType: field.dataType,
        isRequired: field.isRequired,
        options: field.options || [],
        validation: field.validation || { min: undefined, max: undefined },
      })
    }
  }, [field])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.dataType) return

    setLoading(true)
    try {
      const updates: Partial<TemplateField> = {
        name: formData.name,
        dataType: formData.dataType,
        isRequired: formData.isRequired,
        ...(formData.options.length > 0 && { options: formData.options }),
        ...((formData.validation.min !== undefined || formData.validation.max !== undefined) && {
          validation: {
            ...(formData.validation.min !== undefined && { min: formData.validation.min }),
            ...(formData.validation.max !== undefined && { max: formData.validation.max }),
          },
        }),
      }

      await onSubmit(updates)
    } catch (error) {
      console.error("Failed to update field:", error)
    } finally {
      setLoading(false)
    }
  }

  const addOption = () => {
    if (newOption.trim() && !formData.options.includes(newOption.trim())) {
      setFormData((prev) => ({
        ...prev,
        options: [...prev.options, newOption.trim()],
      }))
      setNewOption("")
    }
  }

  const removeOption = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }))
  }

  const needsOptions = formData.dataType === "dropdown"
  const needsValidation =
    formData.dataType === "number" || formData.dataType === "text" || formData.dataType === "textarea"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#013A65]/5 to-[#F3B335]/5 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Edit Field
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Update field properties and validation rules
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Field Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                  Field Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter field name"
                  className="h-12 bg-white border-slate-300 focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                  disabled={field.isDefault}
                />
              </div>

              {/* Data Type */}
              <div className="space-y-2">
                <Label htmlFor="dataType" className="text-sm font-semibold text-slate-700">
                  Data Type *
                </Label>
                <Select
                  value={formData.dataType}
                  onValueChange={(value: TemplateField["dataType"]) =>
                    setFormData((prev) => ({ ...prev, dataType: value, options: [] }))
                  }
                  disabled={field.isDefault}
                >
                  <SelectTrigger className="h-12 w-full min-h-[48px] bg-white border-slate-300 focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {dataTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Required Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="required"
                checked={formData.isRequired}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isRequired: checked as boolean }))}
                disabled={field.isDefault}
              />
              <Label htmlFor="required" className="text-sm font-semibold text-slate-700">
                Required field
              </Label>
            </div>

            {/* Options for Dropdown */}
            {needsOptions && (
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Label className="text-sm font-semibold text-slate-700">Dropdown Options</Label>
                <div className="flex gap-2">
                  <Input
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Add option"
                    className="flex-1 h-10 bg-white border-slate-300 focus:border-[#013A65]"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addOption())}
                  />
                  <Button
                    type="button"
                    onClick={addOption}
                    className="bg-[#013A65] hover:bg-[#013A65]/90 text-white h-10"
                  >
                    Add
                  </Button>
                </div>
                {formData.options.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.options.map((option, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {option}
                        <X className="h-3 w-3 cursor-pointer hover:text-red-600" onClick={() => removeOption(index)} />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Validation for Number/Text */}
            {needsValidation && (
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Label className="text-sm font-semibold text-slate-700">Validation Rules</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min" className="text-xs text-slate-600">
                      {formData.dataType === "number" ? "Minimum Value" : "Minimum Length"}
                    </Label>
                    <Input
                      id="min"
                      type="number"
                      value={formData.validation.min || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          validation: { ...prev.validation, min: e.target.value ? Number(e.target.value) : undefined },
                        }))
                      }
                      placeholder="Min"
                      className="h-10 bg-white border-slate-300 focus:border-[#013A65]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max" className="text-xs text-slate-600">
                      {formData.dataType === "number" ? "Maximum Value" : "Maximum Length"}
                    </Label>
                    <Input
                      id="max"
                      type="number"
                      value={formData.validation.max || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          validation: { ...prev.validation, max: e.target.value ? Number(e.target.value) : undefined },
                        }))
                      }
                      placeholder="Max"
                      className="h-10 bg-white border-slate-300 focus:border-[#013A65]"
                    />
                  </div>
                </div>
              </div>
            )}

            {field.isDefault && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">This is a default field. Some properties cannot be modified.</p>
              </div>
            )}

            <DialogFooter className="pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
                className="border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !formData.name || !formData.dataType}
                className="bg-gradient-to-r from-[#013A65] to-[#F3B335] hover:from-[#013A65]/90 hover:to-[#F3B335]/90 text-white border-0 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Field"
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
