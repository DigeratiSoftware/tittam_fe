"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, File, X } from "lucide-react"
import type { DriveFile } from "@/services/drive-service"

interface UserFilesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userName: string
  files: DriveFile[]
}

export function UserFilesModal({ open, onOpenChange, userName, files }: UserFilesModalProps) {
  const safeFiles = files || []

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB"
    return (bytes / (1024 * 1024)).toFixed(2) + " MB"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#013A65]">Files Uploaded by {userName}</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {safeFiles.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <File className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No files uploaded yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {safeFiles.map((file) => (
                <div
                  key={file.id}
                  className="bg-white border-l-4 border-[#F3B335] rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <File className="h-5 w-5 text-[#013A65] flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-[#013A65] mb-1 break-words">{file.fileName}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <span className="px-2 py-0.5 bg-[#F3B335]/20 text-[#013A65] rounded text-xs font-medium">
                              {file.fileType.toUpperCase()}
                            </span>
                          </span>
                          <span>{formatFileSize(file.fileSize)}</span>
                          <span>{formatDate(file.uploadedAt)}</span>
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <p>
                            {file.zone} • {file.district} • {file.townPanchayat}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(file.url, "_blank")}
                      className="text-[#013A65] border-[#013A65]/20 hover:bg-[#013A65]/10 flex-shrink-0"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
