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
import { Loader2 } from "lucide-react"
import { componentService, type Component } from "@/services/component-service"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

interface EditComponentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onComponentUpdated: () => void
  component: Component | null
}

export default function EditComponentDialog({
  open,
  onOpenChange,
  onComponentUpdated,
  component,
}: EditComponentDialogProps) {
  const [formData, setFormData] = useState({
    englishName: "",
    englishDescription: "",
    tamilName: "",
    tamilDescription: "",
    componentType: "",
    remark: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const componentTypeOptions = [
    { value: "Infrastructure", label: "Infrastructure" },
    { value: "Individual", label: "Individual" },
  ]

  useEffect(() => {
    if (component) {
      setFormData({
        englishName: component.englishName,
        englishDescription: component.englishDescription,
        tamilName: component.tamilName,
        tamilDescription: component.tamilDescription,
        componentType: component.componentType || "",
        remark: component.remark || "",
      })
    }
  }, [component])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!component) return

    setIsLoading(true)
    try {
      await componentService.updateComponent(component.id, formData)
      onComponentUpdated()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update component",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#013A65]/10 to-[#F3B335]/10 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Update Component
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Update the component details with English and Tamil information
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* English Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="englishName" className="text-sm font-semibold text-slate-700">
                    Component Name in English *
                  </Label>
                  <Input
                    id="englishName"
                    value={formData.englishName}
                    onChange={(e) => handleInputChange("englishName", e.target.value)}
                    placeholder="Enter English component name"
                    className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                    required
                  />
                </div>
              </div>

              {/* Tamil Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tamilName" className="text-sm font-semibold text-slate-700">
                    Component Name in Tamil *
                  </Label>
                  <Input
                    id="tamilName"
                    value={formData.tamilName}
                    onChange={(e) => handleInputChange("tamilName", e.target.value)}
                    placeholder="Enter Tamil component name"
                    className="h-12 bg-white border-[#EDEEF0] focus:border-[#F3B335] focus:ring-[#F3B335]/20"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Component Type Field */}
            <div className="space-y-2">
              <Label htmlFor="componentType" className="text-sm font-semibold text-slate-700">
                Component Type *
              </Label>
              <Select
                value={formData.componentType}
                onValueChange={(value) => handleInputChange("componentType", value)}
              >
                <SelectTrigger className="w-full h-12 min-h-[48px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                  <SelectValue placeholder="Select component type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {componentTypeOptions.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Remark Field */}
            <div className="space-y-2">
              <Label htmlFor="remark" className="text-sm font-semibold text-slate-700">
                Remark
              </Label>
              <Textarea
                id="remark"
                value={formData.remark}
                onChange={(e) => handleInputChange("remark", e.target.value)}
                placeholder="Enter remark"
                rows={3}
                className="bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 resize-none"
              />
            </div>

            <DialogFooter className="pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
                className="border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-[#013A65] to-[#F3B335] hover:from-[#013A65]/90 hover:to-[#F3B335]/90 text-white border-0 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Component"
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
