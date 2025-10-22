"use client"

import type React from "react"

import { useState } from "react"
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
import { schemeService, type CreateSchemeRequest } from "@/services/scheme-service"
import { useAuth } from "@/hooks/use-auth"

interface CreateSchemeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSchemeCreated: () => void
}

export default function CreateSchemeDialog({ open, onOpenChange, onSchemeCreated }: CreateSchemeDialogProps) {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<CreateSchemeRequest>({
    englishName: "",
    tamilName: "",
    englishAbbreviation: "",
    remark: "",
    createdBy: user?.name || "Super Admin",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await schemeService.createScheme(formData)
      onSchemeCreated()
      setFormData({
        englishName: "",
        tamilName: "",
        englishAbbreviation: "",
        remark: "",
        createdBy: user?.name || "Super Admin",
      })
    } catch (error) {
      console.error("Failed to create scheme:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof CreateSchemeRequest, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3B335]/10 to-[#013A65]/10 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Create New Scheme
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">
              Add a new scheme with English and Tamil names and remarks
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="englishName" className="text-sm font-semibold text-[#013A65]">
                    Scheme Name in English *
                  </Label>
                  <Input
                    id="englishName"
                    value={formData.englishName}
                    onChange={(e) => handleInputChange("englishName", e.target.value)}
                    placeholder="Enter english scheme name"
                    className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="englishAbbreviation" className="text-sm font-semibold text-[#013A65]">
                    Abbreviation *
                  </Label>
                  <Input
                    id="englishAbbreviation"
                    value={formData.englishAbbreviation}
                    onChange={(e) => handleInputChange("englishAbbreviation", e.target.value)}
                    placeholder="Enter english abbreviation"
                    className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                    required
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tamilName" className="text-sm font-semibold text-[#013A65]">
                    Scheme Name in Tamil *
                  </Label>
                  <Input
                    id="tamilName"
                    value={formData.tamilName}
                    onChange={(e) => handleInputChange("tamilName", e.target.value)}
                    placeholder="Enter tamil scheme name"
                    className="h-12 bg-white border-[#EDEEF0] focus:border-[#F3B335] focus:ring-[#F3B335]/20"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="remark" className="text-sm font-semibold text-[#013A65]">
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

            <DialogFooter className="pt-6 border-t border-[#EDEEF0]">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
                className="border-[#EDEEF0] hover:bg-[#EDEEF0]/50 text-[#013A65]"
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
                    Creating...
                  </>
                ) : (
                  "Create Scheme"
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
