"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import type { Zone } from "@/services/masters-service"

interface CreateZoneDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: Omit<Zone, "id" | "createdAt">) => Promise<void>
}

export function CreateZoneDialog({ open, onOpenChange, onSubmit }: CreateZoneDialogProps) {
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
      await onSubmit(formData)
      setFormData({
        nameEnglish: "",
        nameTamil: "",
        remark: "",
        createdBy: "Admin User",
      })
    } catch (error) {
      console.error("Failed to create zone:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3B335]/10 to-[#013A65]/10 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Create New Zone
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nameEnglish" className="text-sm font-medium text-[#013A65]">
                  Zone Name (English) *
                </Label>
                <Input
                  id="nameEnglish"
                  value={formData.nameEnglish}
                  onChange={(e) => setFormData({ ...formData, nameEnglish: e.target.value })}
                  className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nameTamil" className="text-sm font-medium text-[#013A65]">
                  Zone Name (Tamil) *
                </Label>
                <Input
                  id="nameTamil"
                  value={formData.nameTamil}
                  onChange={(e) => setFormData({ ...formData, nameTamil: e.target.value })}
                  className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
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
                className="min-h-20 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
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
                "Create Zone"
              )}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
