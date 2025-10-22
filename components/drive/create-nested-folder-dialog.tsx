"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { driveService, type DriveFolder, type DriveNestedFolder } from "@/services/drive-service"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

interface CreateNestedFolderDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  databox: DriveFolder | null
  parentFolder?: DriveNestedFolder | null
  editingFolder?: DriveNestedFolder | null
}

export function CreateNestedFolderDialog({
  open,
  onOpenChange,
  onSuccess,
  databox,
  parentFolder,
  editingFolder,
}: CreateNestedFolderDialogProps) {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    if (editingFolder) {
      setName(editingFolder.name)
    } else {
      setName("")
    }
  }, [editingFolder, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!databox || !user) return

    setLoading(true)
    try {
      if (editingFolder) {
        await driveService.updateNestedFolder(editingFolder.id, { name })
        toast({
          title: "Success",
          description: "Folder updated successfully",
        })
      } else {
        await driveService.createNestedFolder({
          name,
          folderId: databox.id,
          parentFolderId: parentFolder?.id,
          createdBy: user.id,
        })
        toast({
          title: "Success",
          description: "Folder created successfully",
        })
      }
      onSuccess()
      onOpenChange(false)
      setName("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save folder",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#013A65] text-xl">
            {editingFolder ? "Edit Folder" : "Create New Folder"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-[#013A65] font-medium">
              Folder Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter folder name"
              required
              className="mt-1.5 h-11 border-[#013A65]/20 focus:border-[#013A65]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white"
            >
              {loading ? "Saving..." : editingFolder ? "Update Folder" : "Create Folder"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
