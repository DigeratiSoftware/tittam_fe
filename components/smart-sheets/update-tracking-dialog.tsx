"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { smartSheetService, type SheetUpdateTracking } from "@/services/smart-sheet-service"
import { CheckCircle2, XCircle } from "lucide-react"

interface UpdateTrackingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sheetId: string
}

export function UpdateTrackingDialog({ open, onOpenChange, sheetId }: UpdateTrackingDialogProps) {
  const [tracking, setTracking] = useState<SheetUpdateTracking | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open && sheetId) {
      loadTracking()
    }
  }, [open, sheetId])

  const loadTracking = async () => {
    try {
      setLoading(true)
      const data = await smartSheetService.getUpdateTracking(sheetId)
      setTracking(data)
    } catch (error) {
      console.error("Failed to load tracking data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#013A65]">Update Tracking</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading tracking data...</div>
        ) : tracking ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[#013A65] mb-2">{tracking.sheetName}</h3>
              <p className="text-sm text-gray-600">Total Shared: {tracking.totalShared} users</p>
            </div>

            {/* Updated Users */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-600">Updated ({tracking.updated.length})</h4>
              </div>
              {tracking.updated.length === 0 ? (
                <p className="text-sm text-gray-500 ml-7">No users have updated yet</p>
              ) : (
                <div className="space-y-2 ml-7">
                  {tracking.updated.map((user) => (
                    <div key={user.userId} className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <span className="text-sm font-medium">{user.userName}</span>
                      <span className="text-xs text-gray-500">{new Date(user.updatedAt).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Not Updated Users */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-600">Not Updated ({tracking.notUpdated.length})</h4>
              </div>
              {tracking.notUpdated.length === 0 ? (
                <p className="text-sm text-gray-500 ml-7">All users have updated</p>
              ) : (
                <div className="space-y-2 ml-7">
                  {tracking.notUpdated.map((user) => (
                    <div key={user.userId} className="flex items-center p-2 bg-red-50 rounded">
                      <span className="text-sm font-medium">{user.userName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
