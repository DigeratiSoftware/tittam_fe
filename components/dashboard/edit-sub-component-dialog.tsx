"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import type { SubComponent } from "@/services/sub-component-service"

interface EditSubComponentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: any) => void
  subComponent: SubComponent
}

export function EditSubComponentDialog({ open, onOpenChange, onSubmit, subComponent }: EditSubComponentDialogProps) {
  const [formData, setFormData] = useState({
    englishName: "",
    tamilName: "",
    remark: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (subComponent) {
      setFormData({
        englishName: subComponent.englishName,
        tamilName: subComponent.tamilName,
        remark: subComponent.remark,
      })
    }
  }, [subComponent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSubmit(formData)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-teal-50/30 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Update Sub Component
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Update the sub component details with English and Tamil information
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* English Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="englishName" className="text-sm font-semibold text-slate-700">
                    Sub Component Name in English *
                  </Label>
                  <Input
                    id="englishName"
                    value={formData.englishName}
                    onChange={(e) => handleChange("englishName", e.target.value)}
                    placeholder="Enter English sub component name"
                    className="h-12 border-slate-300 focus:border-green-500 focus:ring-green-500/20"
                    required
                  />
                </div>
              </div>

              {/* Tamil Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tamilName" className="text-sm font-semibold text-slate-700">
                    Sub Component Name in Tamil *
                  </Label>
                  <Input
                    id="tamilName"
                    value={formData.tamilName}
                    onChange={(e) => handleChange("tamilName", e.target.value)}
                    placeholder="Enter Tamil sub component name"
                    className="h-12 border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="remark" className="text-sm font-semibold text-slate-700">
                Remark
              </Label>
              <Textarea
                id="remark"
                value={formData.remark}
                onChange={(e) => handleChange("remark", e.target.value)}
                placeholder="Enter remark"
                rows={3}
                className="border-slate-300 focus:border-green-500 focus:ring-green-500/20 resize-none"
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
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white border-0 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Sub Component"
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
