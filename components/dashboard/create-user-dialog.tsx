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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Loader2 } from "lucide-react"
import type { User } from "@/services/user-service"

interface CreateUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateUser: (userData: Omit<User, "id" | "createdAt">) => void
}

const roles = [
  { value: "super_admin", label: "Super Admin" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
]

export default function CreateUserDialog({ open, onOpenChange, onCreateUser }: CreateUserDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    isActive: true,
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.role) {
      return
    }

    setLoading(true)
    try {
      await onCreateUser(formData)
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        isActive: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-lg max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3B335]/10 to-[#013A65]/10 rounded-lg"></div>
        <div className="relative">
          <DialogHeader className="pb-6 border-b border-[#EDEEF0]">
            <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-[#013A65] to-[#F3B335] bg-clip-text text-transparent">
              Create New User
            </DialogTitle>
            <DialogDescription className="text-sm text-[#013A65]/70 leading-relaxed">
              Add a new user to the system with their details and role.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-[#013A65]">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter name"
                  className="h-12 text-sm bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-[#013A65]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  className="h-12 text-sm bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-[#013A65]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className="h-12 text-sm bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-[#013A65]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Enter password"
                  className="h-12 text-sm bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-[#013A65]">
                  Role
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="w-full h-12 text-sm bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EDEEF0]">
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value} className="text-sm hover:bg-[#F8F8F8]">
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status" className="text-sm font-medium text-[#013A65]">
                  Status
                </Label>
                <div className="flex items-center h-12">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="status"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => handleInputChange("isActive", checked)}
                    />
                    <Label htmlFor="status" className="text-sm font-medium text-[#013A65]">
                      {formData.isActive ? "Active" : "Inactive"}
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <DialogFooter className="pt-6 border-t border-[#EDEEF0]">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-12 px-6 text-sm border-[#EDEEF0] hover:bg-[#EDEEF0]/50 text-[#013A65]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={
                loading || !formData.name || !formData.email || !formData.phone || !formData.password || !formData.role
              }
              className="h-12 px-6 text-sm bg-gradient-to-r from-[#013A65] to-[#F3B335] hover:from-[#013A65]/90 hover:to-[#F3B335]/90 text-white border-0 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create User"
              )}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
