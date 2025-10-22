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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, FileText, Hash, Calendar, Type, Paperclip, X } from "lucide-react"
import { fieldService, type Field } from "@/services/field-service"
import { useToast } from "@/hooks/use-toast"

interface EditFieldDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onFieldUpdated: () => void
  field: Field | null
}

const DATA_TYPES = [
  { value: "string", label: "Text (String)", icon: Type },
  { value: "number", label: "Number", icon: Hash },
  { value: "email", label: "Email", icon: Type },
  { value: "phone", label: "Phone Number", icon: Type },
  { value: "date", label: "Date", icon: Calendar },
  { value: "boolean", label: "Boolean (Yes/No)", icon: Type },
  { value: "textarea", label: "Long Text (Textarea)", icon: FileText },
  { value: "attachment", label: "File Attachment", icon: Paperclip },
]

const FILE_TYPES = [
  { value: "pdf", label: "PDF Documents (.pdf)" },
  { value: "doc", label: "Word Documents (.doc, .docx)" },
  { value: "xls", label: "Excel Files (.xls, .xlsx)" },
  { value: "ppt", label: "PowerPoint (.ppt, .pptx)" },
  { value: "jpg", label: "JPEG Images (.jpg, .jpeg)" },
  { value: "png", label: "PNG Images (.png)" },
  { value: "gif", label: "GIF Images (.gif)" },
  { value: "txt", label: "Text Files (.txt)" },
  { value: "zip", label: "ZIP Archives (.zip)" },
  { value: "mp4", label: "MP4 Videos (.mp4)" },
  { value: "mp3", label: "MP3 Audio (.mp3)" },
  { value: "csv", label: "CSV Files (.csv)" },
]

export default function EditFieldDialog({ open, onOpenChange, onFieldUpdated, field }: EditFieldDialogProps) {
  const [formData, setFormData] = useState({
    englishName: "",
    tamilName: "",
    englishDescription: "",
    tamilDescription: "",
    dataType: "",
    validation: "",
    isRequired: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    if (field) {
      setFormData({
        englishName: field.englishName,
        tamilName: field.tamilName,
        englishDescription: field.englishDescription,
        tamilDescription: field.tamilDescription,
        dataType: field.dataType,
        validation: field.validation || "",
        isRequired: field.isRequired,
      })

      if (field.dataType === "attachment" && field.validation) {
        const fileTypesMatch = field.validation.match(/allowedTypes:([^,]+)/)
        if (fileTypesMatch) {
          setSelectedFileTypes(fileTypesMatch[1].split(","))
        }
      }
    }
  }, [field])

  const handleFileTypeSelect = (fileType: string) => {
    if (!selectedFileTypes.includes(fileType)) {
      setSelectedFileTypes([...selectedFileTypes, fileType])
    }
  }

  const removeFileType = (fileType: string) => {
    setSelectedFileTypes(selectedFileTypes.filter((type) => type !== fileType))
  }

  const generateValidationString = () => {
    if (formData.dataType === "attachment" && selectedFileTypes.length > 0) {
      return `allowedTypes:${selectedFileTypes.join(",")}`
    }
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!field) return

    setIsLoading(true)
    try {
      const validationString = generateValidationString()
      await fieldService.updateField(field.id, {
        ...formData,
        validation: validationString || formData.validation || undefined,
      })
      onFieldUpdated()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update field",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderValidationFields = () => {
    if (formData.dataType === "attachment") {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium text-slate-700 dark:text-slate-300">Allowed File Types *</Label>
            <Select onValueChange={handleFileTypeSelect}>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select allowed file types" />
              </SelectTrigger>
              <SelectContent>
                {FILE_TYPES.filter((type) => !selectedFileTypes.includes(type.value)).map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <span className="text-sm">{type.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedFileTypes.length > 0 && (
            <div className="space-y-2">
              <Label className="text-xs font-medium text-slate-700 dark:text-slate-300">Selected File Types</Label>
              <div className="flex flex-wrap gap-2">
                {selectedFileTypes.map((fileType) => {
                  const fileTypeData = FILE_TYPES.find((type) => type.value === fileType)
                  return (
                    <div
                      key={fileType}
                      className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md text-xs"
                    >
                      <span>{fileTypeData?.label}</span>
                      <button
                        type="button"
                        onClick={() => removeFileType(fileType)}
                        className="hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-2xl backdrop-blur-sm">
        <DialogHeader className="pb-4 border-b border-slate-200/50 dark:border-slate-700/50">
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Edit Field
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 dark:text-slate-400">
            Update field information and validation rules
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* English Fields */}
            <div className="space-y-4 p-4 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 rounded-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                English Details
              </h3>

              <div className="space-y-1.5">
                <Label htmlFor="englishName" className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Field Name *
                </Label>
                <Input
                  id="englishName"
                  value={formData.englishName}
                  onChange={(e) => handleInputChange("englishName", e.target.value)}
                  className="h-8 text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="englishDescription" className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Description *
                </Label>
                <Textarea
                  id="englishDescription"
                  value={formData.englishDescription}
                  onChange={(e) => handleInputChange("englishDescription", e.target.value)}
                  rows={3}
                  className="resize-none text-sm"
                  required
                />
              </div>
            </div>

            {/* Tamil Fields */}
            <div className="space-y-4 p-4 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 rounded-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Tamil Details
              </h3>

              <div className="space-y-1.5">
                <Label htmlFor="tamilName" className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Field Name *
                </Label>
                <Input
                  id="tamilName"
                  value={formData.tamilName}
                  onChange={(e) => handleInputChange("tamilName", e.target.value)}
                  className="h-8 text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="tamilDescription" className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Description *
                </Label>
                <Textarea
                  id="tamilDescription"
                  value={formData.tamilDescription}
                  onChange={(e) => handleInputChange("tamilDescription", e.target.value)}
                  rows={3}
                  className="resize-none text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Field Configuration */}
          <div className="space-y-4 p-4 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 rounded-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              Field Configuration
            </h3>

            <div className="space-y-1.5">
              <Label htmlFor="dataType" className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Data Type *
              </Label>
              <Select
                value={formData.dataType}
                onValueChange={(value) => {
                  handleInputChange("dataType", value)
                  setSelectedFileTypes([])
                }}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select data type" />
                </SelectTrigger>
                <SelectContent>
                  {DATA_TYPES.map((type) => {
                    const IconComponent = type.icon
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-3 w-3" />
                          <span className="text-sm">{type.label}</span>
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            {renderValidationFields()}

            <div className="flex items-center space-x-2 p-3 bg-white/60 dark:bg-slate-800/60 rounded-md border border-slate-200/50 dark:border-slate-700/50">
              <Checkbox
                id="isRequired"
                checked={formData.isRequired}
                onCheckedChange={(checked) => handleInputChange("isRequired", !!checked)}
              />
              <Label
                htmlFor="isRequired"
                className="text-xs font-medium cursor-pointer text-slate-700 dark:text-slate-300"
              >
                This field is required
              </Label>
            </div>
          </div>

          <DialogFooter className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
              size="sm"
              className="text-sm"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} size="sm" className="text-sm">
              {isLoading ? (
                <>
                  <Loader2 className="mr-1.5 h-3 w-3 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Field"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
