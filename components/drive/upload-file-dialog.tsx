"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { driveService, type DriveSubfolder } from "@/services/drive-service"
import { useAuth } from "@/hooks/use-auth"
import { Upload, FileText, X } from "lucide-react"

interface UploadFileDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  subfolder: DriveSubfolder | null
}

export function UploadFileDialog({ open, onOpenChange, onSuccess, subfolder }: UploadFileDialogProps) {
  const { user } = useAuth()
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: boolean }>({})

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    // Validate each file
    const validFiles: File[] = []
    let errorMsg = ""

    for (const file of files) {
      const extension = file.name.split(".").pop()?.toLowerCase() || ""
      const sizeInMB = file.size / (1024 * 1024)

      if (subfolder && !subfolder.allowedFileTypes.includes(extension)) {
        errorMsg = `File ${file.name} has invalid type. Allowed: ${subfolder.allowedFileTypes.join(", ")}`
        break
      }

      if (subfolder && sizeInMB > subfolder.maxFileSize) {
        errorMsg = `File ${file.name} exceeds max size of ${subfolder.maxFileSize} MB`
        break
      }

      validFiles.push(file)
    }

    if (errorMsg) {
      setError(errorMsg)
      return
    }

    setSelectedFiles((prev) => [...prev, ...validFiles])
    setError("")
  }

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFiles.length === 0 || !subfolder || !user) return

    setError("")
    setLoading(true)
    setUploadProgress({})

    try {
      const { canUpload, reason } = await driveService.canUserUpload(subfolder.id, user.id, user.role)
      if (!canUpload) {
        setError(reason || "Cannot upload files")
        setLoading(false)
        return
      }

      // Upload each file
      for (const file of selectedFiles) {
        const extension = file.name.split(".").pop()?.toLowerCase() || ""
        const sizeInMB = file.size / (1024 * 1024)

        setUploadProgress((prev) => ({ ...prev, [file.name]: true }))

        await driveService.uploadFile({
          subfolderId: subfolder.id,
          folderId: subfolder.folderId,
          fileName: file.name,
          fileType: extension,
          fileSize: file.size,
          uploadedBy: user.id,
          uploadedByName: user.name,
          url: "/placeholder.svg?height=400&width=600",
          zone: "",
          district: "",
          townPanchayat: "",
        })
      }

      onSuccess()
      onOpenChange(false)
      setSelectedFiles([])
      setUploadProgress({})
    } catch (error) {
      console.error("Failed to upload files:", error)
      setError("Failed to upload files. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#013A65]">Upload Files</DialogTitle>
          <p className="text-sm text-muted-foreground">Upload to {subfolder?.title}</p>
        </DialogHeader>

        {subfolder && (
          <div className="text-xs text-muted-foreground bg-muted/30 px-3 py-2 rounded border">
            <span className="font-medium text-[#013A65]">Requirements:</span>{" "}
            {subfolder.allowedFileTypes.join(", ").toUpperCase()} • Max {subfolder.maxFileSize}MB • Up to{" "}
            {subfolder.maxFilesPerUser} files
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-2.5 bg-destructive/10 border border-destructive/20 text-destructive rounded text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="fileInput" className="text-sm font-medium text-[#013A65]">
              Select Files <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              accept={subfolder?.allowedFileTypes.map((type) => `.${type}`).join(",")}
              multiple
              className="cursor-pointer h-10 text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[#F3B335] file:text-[#013A65] hover:file:bg-[#F3B335]/90"
            />
          </div>

          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#013A65]">Selected Files ({selectedFiles.length})</Label>
              <div className="space-y-1.5 max-h-[250px] overflow-y-auto border rounded p-2 bg-muted/20">
                {selectedFiles.map((file, index) => {
                  const extension = file.name.split(".").pop()?.toLowerCase() || ""
                  const isUploading = uploadProgress[file.name]

                  return (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center gap-2 p-2 bg-white border rounded hover:border-[#F3B335]/50 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-[#013A65] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#013A65] truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB • {extension.toUpperCase()}
                        </p>
                      </div>
                      {isUploading ? (
                        <span className="text-xs text-[#F3B335] font-medium">Uploading...</span>
                      ) : (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFile(index)}
                          disabled={loading}
                          className="h-7 w-7 p-0 hover:bg-destructive/10 hover:text-destructive"
                        >
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-3 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onOpenChange(false)
                setSelectedFiles([])
                setError("")
              }}
              disabled={loading}
              className="min-w-[90px] h-9"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || selectedFiles.length === 0}
              className="min-w-[110px] h-9 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white"
            >
              {loading ? (
                `Uploading ${Object.keys(uploadProgress).length}/${selectedFiles.length}...`
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload {selectedFiles.length}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
