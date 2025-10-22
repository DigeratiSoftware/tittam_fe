"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { driveService, type DriveFolder } from "@/services/drive-service"
import { useAuth } from "@/hooks/use-auth"

interface CreateFolderDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  editingFolder?: DriveFolder | null
}

export function CreateFolderDialog({ open, onOpenChange, onSuccess, editingFolder }: CreateFolderDialogProps) {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (editingFolder) {
      setTitle(editingFolder.title)
      setDescription(editingFolder.description || "")
    } else {
      setTitle("")
      setDescription("")
    }
  }, [editingFolder, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !user) return

    setLoading(true)
    try {
      if (editingFolder) {
        await driveService.updateFolder(editingFolder.id, { title, description })
      } else {
        await driveService.createFolder({
          title,
          description,
          createdBy: user.id,
        })
      }
      onSuccess()
      onOpenChange(false)
      setTitle("")
      setDescription("")
    } catch (error) {
      console.error("Failed to save folder:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-[#013A65] text-xl">
            {editingFolder ? "Edit Databox" : "Create New Databox"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Databox Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Project Documents"
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of this databox"
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Provide a clear description to help users understand the databox's purpose
            </p>
          </div>

          <DialogFooter className="gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="h-10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || !title.trim()}
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white h-10 px-6"
            >
              {loading ? "Saving..." : editingFolder ? "Update Databox" : "Create Databox"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
