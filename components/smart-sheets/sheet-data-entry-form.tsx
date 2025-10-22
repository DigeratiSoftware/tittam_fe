"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { SmartSheet } from "@/services/smart-sheet-service"
import { Save } from "lucide-react"

interface SheetDataEntryFormProps {
  sheet: SmartSheet
  onSubmit: (data: Record<string, any>) => void
}

export function SheetDataEntryForm({ sheet, onSubmit }: SheetDataEntryFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})

  useEffect(() => {
    // Initialize form data with empty values
    const initialData: Record<string, any> = {}
    sheet.fields.forEach((field) => {
      initialData[field.id] = field.dataType === "boolean" ? false : ""
    })
    setFormData(initialData)
  }, [sheet])

  const handleChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
  }

  const handleSubmit = () => {
    // Validate required fields
    const missingFields = sheet.fields.filter((field) => field.required && !formData[field.id]).map((f) => f.name)

    if (missingFields.length > 0) {
      alert(`Please fill in required fields: ${missingFields.join(", ")}`)
      return
    }

    onSubmit(formData)
  }

  return (
    <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#013A65] mb-2">{sheet.name}</h2>
        <p className="text-sm text-gray-600">{sheet.description}</p>
        {sheet.type === "scheme" && (
          <div className="flex gap-2 mt-2 text-sm">
            <span className="px-2 py-1 bg-gray-100 rounded">{sheet.scheme}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{sheet.component}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{sheet.year}</span>
          </div>
        )}
      </div>

      {sheet.isFrozen ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 font-medium">This sheet is frozen and cannot be edited</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {sheet.fields.map((field) => (
              <div key={field.id}>
                <Label>
                  {field.name}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>

                {field.dataType === "text" && (
                  <Input
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={`Enter ${field.name.toLowerCase()}`}
                  />
                )}

                {field.dataType === "number" && (
                  <Input
                    type="number"
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    placeholder={`Enter ${field.name.toLowerCase()}`}
                  />
                )}

                {field.dataType === "date" && (
                  <Input
                    type="date"
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                  />
                )}

                {field.dataType === "dropdown" && field.options && (
                  <Select value={formData[field.id] || ""} onValueChange={(v) => handleChange(field.id, v)}>
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${field.name.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {field.dataType === "boolean" && (
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      checked={formData[field.id] || false}
                      onCheckedChange={(checked) => handleChange(field.id, checked)}
                    />
                    <span className="text-sm">Yes</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80"
            >
              <Save className="h-4 w-4 mr-2" />
              Submit Sheet
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
