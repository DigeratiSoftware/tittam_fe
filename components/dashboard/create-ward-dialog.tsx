"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import type { Ward } from "@/services/masters-service"

interface CreateWardDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  townPanchayatId: string
  townPanchayatName: string
  districtName: string
  zoneName: string
  onSubmit: (data: Omit<Ward, "id" | "createdAt">) => Promise<void>
}

export function CreateWardDialog({
  open,
  onOpenChange,
  townPanchayatId,
  townPanchayatName,
  districtName,
  zoneName,
  onSubmit,
}: CreateWardDialogProps) {
  const [formData, setFormData] = useState({
    nameEnglish: "",
    nameTamil: "",
    remark: "",
    createdBy: "Admin User",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nameEnglish.trim() || !formData.nameTamil.trim()) return

    try {
      setLoading(true)
      await onSubmit({
        ...formData,
        townPanchayatId,
      })
      setFormData({
        nameEnglish: "",
        nameTamil: "",
        remark: "",
        createdBy: "Admin User",
      })
    } catch (error) {
      console.error("Failed to create ward:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md bg-gradient-to-br from-white via-[#F8F8F8] to-[#EDEEF0] border-[#013A65]/20"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="pb-4 border-b border-[#EDEEF0]">
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
            Create New Ward
          </DialogTitle>
          <div className="text-sm text-[#013A65]/70 mt-1 space-y-1">
            <p>Zone: {zoneName}</p>
            <p>District: {districtName}</p>
            <p>Town Panchayat: {townPanchayatName}</p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nameEnglish" className="text-sm font-medium text-[#013A65]">
                Ward Name (English) *
              </Label>
              <Input
                id="nameEnglish"
                value={formData.nameEnglish}
                onChange={(e) => setFormData({ ...formData, nameEnglish: e.target.value })}
                className="h-12 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nameTamil" className="text-sm font-medium text-[#013A65]">
                Ward Name (Tamil) *
              </Label>
              <Input
                id="nameTamil"
                value={formData.nameTamil}
                onChange={(e) => setFormData({ ...formData, nameTamil: e.target.value })}
                className="h-12 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remark" className="text-sm font-medium text-[#013A65]">
              Remark
            </Label>
            <Textarea
              id="remark"
              value={formData.remark}
              onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
              className="min-h-20 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
              placeholder="Enter any additional remarks..."
            />
          </div>
        </form>

        <DialogFooter className="pt-4 border-t border-[#EDEEF0]">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
            className="border-[#EDEEF0] hover:bg-[#F8F8F8]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || !formData.nameEnglish.trim() || !formData.nameTamil.trim()}
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Ward"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
