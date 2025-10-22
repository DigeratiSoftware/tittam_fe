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
import type { User } from "@/services/user-service"

interface EditUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onEditUser: (userId: string, password: string) => void
  user: User | null
}

export default function EditUserDialog({ open, onOpenChange, onEditUser, user }: EditUserDialogProps) {
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      setPassword("")
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!password || !user) {
      return
    }

    setLoading(true)
    try {
      await onEditUser(user.id, password)
      setPassword("")
      onOpenChange(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3B335]/10 to-[#013A65]/10 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Edit User Password
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">Update the password for {user?.name}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-sm font-semibold text-[#013A65]">
                New Password
              </Label>
              <Input
                id="new-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="h-12 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                required
              />
            </div>
          </form>

          <DialogFooter className="pt-6 border-t border-[#EDEEF0]">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-[#EDEEF0] hover:bg-[#EDEEF0]/50 text-[#013A65]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading || !password}
              className="bg-gradient-to-r from-[#013A65] to-[#F3B335] hover:from-[#013A65]/90 hover:to-[#F3B335]/90 text-white border-0 shadow-lg"
            >
              {loading ? "Updating..." : "Update Password"}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
