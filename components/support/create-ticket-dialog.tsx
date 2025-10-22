"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ticketService, type CreateTicketData } from "@/services/ticket-service"
import { Loader2 } from "lucide-react"

interface CreateTicketDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTicketCreated: () => void
  userId: string
  userName: string
}

export function CreateTicketDialog({ open, onOpenChange, onTicketCreated, userId, userName }: CreateTicketDialogProps) {
  const [formData, setFormData] = useState<CreateTicketData>({
    subject: "",
    description: "",
    url: "",
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<CreateTicketData>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    const newErrors: Partial<CreateTicketData> = {}
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setLoading(true)
      await ticketService.createTicket(
        {
          subject: formData.subject.trim(),
          description: formData.description.trim(),
          url: formData.url?.trim() || undefined,
        },
        userId,
        userName,
      )

      // Reset form
      setFormData({
        subject: "",
        description: "",
        url: "",
      })
      setErrors({})
      onOpenChange(false)
      onTicketCreated()
    } catch (error) {
      console.error("Failed to create ticket:", error)
      alert("Failed to create ticket. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof CreateTicketData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#013A65]">Create Support Ticket</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-[#013A65]">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Brief description of the issue"
              className={errors.subject ? "border-red-500" : ""}
              disabled={loading}
            />
            {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-[#013A65]">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Provide detailed information about the issue..."
              rows={6}
              className={errors.description ? "border-red-500" : ""}
              disabled={loading}
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="url" className="text-sm font-medium text-[#013A65]">
              Reference URL (Optional)
            </Label>
            <Input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => handleChange("url", e.target.value)}
              placeholder="https://example.com/page"
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground">Add a link to help us understand the issue better</p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Ticket"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
