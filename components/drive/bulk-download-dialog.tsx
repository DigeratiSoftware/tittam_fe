"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Loader2 } from "lucide-react"
import { driveService, type DriveFolder } from "@/services/drive-service"
import { useToast } from "@/hooks/use-toast"

interface BulkDownloadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  folders: DriveFolder[]
  zones: string[]
  districts: string[]
  townPanchayats: string[]
}

export function BulkDownloadDialog({
  open,
  onOpenChange,
  folders,
  zones,
  districts,
  townPanchayats,
}: BulkDownloadDialogProps) {
  const { toast } = useToast()
  const [downloadType, setDownloadType] = useState<"all" | "folder" | "zone" | "district" | "townPanchayat">("all")
  const [selectedFolder, setSelectedFolder] = useState<string>("")
  const [selectedZone, setSelectedZone] = useState<string>("")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("")
  const [selectedTownPanchayat, setSelectedTownPanchayat] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    setLoading(true)
    try {
      let result

      switch (downloadType) {
        case "all":
          result = await driveService.downloadAllFiles()
          break
        case "folder":
          if (!selectedFolder) {
            toast({
              title: "Error",
              description: "Please select a databox",
              variant: "destructive",
            })
            setLoading(false)
            return
          }
          result = await driveService.downloadByFolder(selectedFolder)
          break
        case "zone":
          if (!selectedZone) {
            toast({
              title: "Error",
              description: "Please select a zone",
              variant: "destructive",
            })
            setLoading(false)
            return
          }
          result = await driveService.downloadByZone(selectedZone)
          break
        case "district":
          if (!selectedDistrict) {
            toast({
              title: "Error",
              description: "Please select a district",
              variant: "destructive",
            })
            setLoading(false)
            return
          }
          result = await driveService.downloadByDistrict(selectedDistrict)
          break
        case "townPanchayat":
          if (!selectedTownPanchayat) {
            toast({
              title: "Error",
              description: "Please select a town panchayat",
              variant: "destructive",
            })
            setLoading(false)
            return
          }
          result = await driveService.downloadByTownPanchayat(selectedTownPanchayat)
          break
      }

      if (result.success) {
        toast({
          title: "Download Started",
          description: result.message,
        })
        onOpenChange(false)
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download files. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#013A65]">Bulk Download Files</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="downloadType" className="text-sm font-medium text-[#013A65]">
              Download Type
            </Label>
            <Select value={downloadType} onValueChange={(value: any) => setDownloadType(value)}>
              <SelectTrigger id="downloadType" className="h-10 border-[#013A65]/20 focus:border-[#013A65]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Files</SelectItem>
                <SelectItem value="folder">By Databox</SelectItem>
                <SelectItem value="zone">By Zone</SelectItem>
                <SelectItem value="district">By District</SelectItem>
                <SelectItem value="townPanchayat">By Town Panchayat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {downloadType === "folder" && (
            <div className="space-y-2">
              <Label htmlFor="folder" className="text-sm font-medium text-[#013A65]">
                Select Databox
              </Label>
              <Select value={selectedFolder} onValueChange={setSelectedFolder}>
                <SelectTrigger id="folder" className="h-10 border-[#013A65]/20 focus:border-[#013A65]">
                  <SelectValue placeholder="Choose a databox" />
                </SelectTrigger>
                <SelectContent>
                  {folders.map((folder) => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {downloadType === "zone" && (
            <div className="space-y-2">
              <Label htmlFor="zone" className="text-sm font-medium text-[#013A65]">
                Select Zone
              </Label>
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger id="zone" className="h-10 border-[#013A65]/20 focus:border-[#013A65]">
                  <SelectValue placeholder="Choose a zone" />
                </SelectTrigger>
                <SelectContent>
                  {zones.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {downloadType === "district" && (
            <div className="space-y-2">
              <Label htmlFor="district" className="text-sm font-medium text-[#013A65]">
                Select District
              </Label>
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger id="district" className="h-10 border-[#013A65]/20 focus:border-[#013A65]">
                  <SelectValue placeholder="Choose a district" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {downloadType === "townPanchayat" && (
            <div className="space-y-2">
              <Label htmlFor="townPanchayat" className="text-sm font-medium text-[#013A65]">
                Select Town Panchayat
              </Label>
              <Select value={selectedTownPanchayat} onValueChange={setSelectedTownPanchayat}>
                <SelectTrigger id="townPanchayat" className="h-10 border-[#013A65]/20 focus:border-[#013A65]">
                  <SelectValue placeholder="Choose a town panchayat" />
                </SelectTrigger>
                <SelectContent>
                  {townPanchayats.map((tp) => (
                    <SelectItem key={tp} value={tp}>
                      {tp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleDownload}
            disabled={loading}
            className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
