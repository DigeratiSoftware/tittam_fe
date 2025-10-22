"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { notificationService, type CreateNotificationRequest } from "@/services/notification-service"
import { userService, type User } from "@/services/user-service"
import { Checkbox } from "@/components/ui/checkbox"

interface CreateNotificationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export function CreateNotificationDialog({ open, onOpenChange, onSuccess }: CreateNotificationDialogProps) {
  const [message, setMessage] = useState("")
  const [url, setUrl] = useState("")
  const [targetType, setTargetType] = useState<"all" | "users" | "role">("all")
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([])
  const [selectedRole, setSelectedRole] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)

  const roles = ["super_admin", "admin", "user", "viewer"]

  useEffect(() => {
    if (open && targetType === "users") {
      loadUsers()
    }
  }, [open, targetType])

  const loadUsers = async () => {
    try {
      setIsLoadingUsers(true)
      const data = await userService.getUsers()
      setUsers(data.filter((u) => u.isActive))
    } catch (error) {
      console.error("[v0] Error loading users:", error)
    } finally {
      setIsLoadingUsers(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) {
      alert("Please enter a message")
      return
    }

    if (targetType === "users" && selectedUserIds.length === 0) {
      alert("Please select at least one user")
      return
    }

    if (targetType === "role" && !selectedRole) {
      alert("Please select a role")
      return
    }

    try {
      setIsLoading(true)

      const data: CreateNotificationRequest = {
        message: message.trim(),
        url: url.trim() || undefined,
        targetType,
        targetUserIds: targetType === "users" ? selectedUserIds : undefined,
        targetRole: targetType === "role" ? selectedRole : undefined,
      }

      console.log("[v0] Creating notification:", data)

      await notificationService.createNotification(data)

      // Reset form
      setMessage("")
      setUrl("")
      setTargetType("all")
      setSelectedUserIds([])
      setSelectedRole("")

      onSuccess()
      onOpenChange(false)
    } catch (error) {
      console.error("[v0] Error creating notification:", error)
      alert("Failed to create notification")
    } finally {
      setIsLoading(false)
    }
  }

  const handleUserToggle = (userId: string) => {
    setSelectedUserIds((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#013A65]">Create Notification</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter notification message..."
              rows={4}
              required
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL (Optional)</Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/page"
            />
            <p className="text-xs text-gray-500">Add a link for users to navigate to when clicking the notification</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetType">
              Send To <span className="text-red-500">*</span>
            </Label>
            <Select value={targetType} onValueChange={(value: any) => setTargetType(value)}>
              <SelectTrigger id="targetType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="users">Specific Users</SelectItem>
                <SelectItem value="role">By Role</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {targetType === "users" && (
            <div className="space-y-2">
              <Label>
                Select Users <span className="text-red-500">*</span>
              </Label>
              {isLoadingUsers ? (
                <div className="text-sm text-gray-500 py-4">Loading users...</div>
              ) : (
                <div className="border rounded-lg p-4 max-h-60 overflow-y-auto space-y-2">
                  {users.length === 0 ? (
                    <p className="text-sm text-gray-500">No active users found</p>
                  ) : (
                    users.map((user) => (
                      <div key={user.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`user-${user.id}`}
                          checked={selectedUserIds.includes(user.id)}
                          onCheckedChange={() => handleUserToggle(user.id)}
                        />
                        <label
                          htmlFor={`user-${user.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                        >
                          {user.name} ({user.email}) - {user.role}
                        </label>
                      </div>
                    ))
                  )}
                </div>
              )}
              {selectedUserIds.length > 0 && (
                <p className="text-xs text-gray-600">{selectedUserIds.length} user(s) selected</p>
              )}
            </div>
          )}

          {targetType === "role" && (
            <div className="space-y-2">
              <Label htmlFor="role">
                Select Role <span className="text-red-500">*</span>
              </Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role.replace("_", " ").toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white"
            >
              {isLoading ? "Creating..." : "Create Notification"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
