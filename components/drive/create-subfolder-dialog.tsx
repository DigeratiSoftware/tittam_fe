"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { driveService, type DriveFolder, type DriveSubfolder, type DriveNestedFolder } from "@/services/drive-service"
import { useAuth } from "@/hooks/use-auth"
import { ChevronDown } from "lucide-react"

interface CreateSubfolderDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  folder: DriveFolder | null
  parentFolder?: DriveNestedFolder | null
  parentShare?: DriveSubfolder | null
  editingSubfolder?: DriveSubfolder | null
}

const FILE_TYPE_OPTIONS = [
  { value: "pdf", label: "PDF (.pdf)" },
  { value: "doc", label: "Word (.doc, .docx)" },
  { value: "xls", label: "Excel (.xls, .xlsx)" },
  { value: "ppt", label: "PowerPoint (.ppt, .pptx)" },
  { value: "txt", label: "Text (.txt)" },
  { value: "jpg", label: "JPEG (.jpg, .jpeg)" },
  { value: "png", label: "PNG (.png)" },
  { value: "gif", label: "GIF (.gif)" },
  { value: "mp4", label: "Video (.mp4, .avi, .mov)" },
  { value: "mp3", label: "Audio (.mp3, .wav)" },
  { value: "zip", label: "Archive (.zip, .rar)" },
]

const ZONES = ["Zone 1", "Zone 2", "Zone 3", "Zone 4"]
const DISTRICTS: Record<string, string[]> = {
  "Zone 1": ["District 1A", "District 1B", "District 1C"],
  "Zone 2": ["District 2A", "District 2B"],
  "Zone 3": ["District 3A", "District 3B", "District 3C"],
  "Zone 4": ["District 4A", "District 4B"],
}
const TOWN_PANCHAYATS: Record<string, string[]> = {
  "District 1A": ["TP 1A1", "TP 1A2", "TP 1A3"],
  "District 1B": ["TP 1B1", "TP 1B2"],
  "District 1C": ["TP 1C1", "TP 1C2", "TP 1C3"],
  "District 2A": ["TP 2A1", "TP 2A2"],
  "District 2B": ["TP 2B1", "TP 2B2", "TP 2B3"],
  "District 3A": ["TP 3A1", "TP 3A2"],
  "District 3B": ["TP 3B1", "TP 3B2"],
  "District 3C": ["TP 3C1", "TP 3C2", "TP 3C3"],
  "District 4A": ["TP 4A1", "TP 4A2"],
  "District 4B": ["TP 4B1", "TP 4B2", "TP 4B3"],
}

export function CreateSubfolderDialog({
  open,
  onOpenChange,
  onSuccess,
  folder,
  parentFolder,
  parentShare,
  editingSubfolder,
}: CreateSubfolderDialogProps) {
  const { user } = useAuth()
  const [allowedFileTypes, setAllowedFileTypes] = useState<string[]>([])
  const [minFileSize, setMinFileSize] = useState("1")
  const [maxFileSize, setMaxFileSize] = useState("10")
  const [accessType, setAccessType] = useState<"all" | "location">("all")
  const [locationLevel, setLocationLevel] = useState<"zone" | "district" | "townpanchayat">("zone")
  const [selectedZone, setSelectedZone] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedTownPanchayat, setSelectedTownPanchayat] = useState("")
  const [fileTypeDropdownOpen, setFileTypeDropdownOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (folder?.shareConfig && !parentFolder) {
      // Editing Databox share config
      setAllowedFileTypes(folder.shareConfig.allowedFileTypes)
      setMinFileSize(folder.shareConfig.minFileSize?.toString() || "1")
      setMaxFileSize(folder.shareConfig.maxFileSize.toString())
      setAccessType(folder.shareConfig.accessType === "all" ? "all" : "location")
    } else if (parentFolder?.shareConfig) {
      // Editing folder share config
      setAllowedFileTypes(parentFolder.shareConfig.allowedFileTypes)
      setMinFileSize(parentFolder.shareConfig.minFileSize?.toString() || "1")
      setMaxFileSize(parentFolder.shareConfig.maxFileSize.toString())
      setAccessType(parentFolder.shareConfig.accessType === "all" ? "all" : "location")
    } else if (editingSubfolder) {
      setAllowedFileTypes(editingSubfolder.allowedFileTypes)
      setMinFileSize(editingSubfolder.minFileSize?.toString() || "1")
      setMaxFileSize(editingSubfolder.maxFileSize.toString())
      setAccessType(editingSubfolder.accessType === "all" ? "all" : "location")
    } else {
      setAllowedFileTypes([])
      setMinFileSize("1")
      setMaxFileSize("10")
      setAccessType("all")
      setLocationLevel("zone")
      setSelectedZone("")
      setSelectedDistrict("")
      setSelectedTownPanchayat("")
    }
  }, [editingSubfolder, parentFolder, folder, open])

  const toggleFileType = (type: string) => {
    setAllowedFileTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const handleZoneChange = (zone: string) => {
    setSelectedZone(zone)
    setSelectedDistrict("")
    setSelectedTownPanchayat("")
  }

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district)
    setSelectedTownPanchayat("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!folder || !user || allowedFileTypes.length === 0) return

    setLoading(true)
    try {
      const shareConfig = {
        allowedFileTypes,
        minFileSize: Number.parseInt(minFileSize),
        maxFileSize: Number.parseInt(maxFileSize),
        accessType,
        // Store location filters if location-based access
        ...(accessType === "location" && {
          locationLevel,
          zone: selectedZone || undefined,
          district: selectedDistrict || undefined,
          townPanchayat: selectedTownPanchayat || undefined,
        }),
      }

      if (!parentFolder && folder) {
        // Creating/updating share config for a Databox
        await driveService.updateFolder(folder.id, { shareConfig })
      } else if (parentFolder && !parentFolder.shareConfig) {
        // Creating share config for a folder
        await driveService.updateNestedFolder(parentFolder.id, { shareConfig })
      } else {
        // Creating or updating a subfolder
        const subfolderData = {
          folderId: folder.id,
          parentSubfolderId: parentShare?.id,
          ...shareConfig,
          createdBy: user.id,
        }

        if (editingSubfolder) {
          await driveService.updateSubfolder(editingSubfolder.id, subfolderData)
        } else {
          await driveService.createSubfolder(subfolderData)
        }
      }

      onSuccess()
      onOpenChange(false)
    } catch (error) {
      console.error("Failed to save share:", error)
    } finally {
      setLoading(false)
    }
  }

  const getDialogTitle = () => {
    if (!parentFolder && folder) {
      return `Share Databox: ${folder.title}`
    }
    if (parentFolder && !parentFolder.shareConfig) {
      return `Share Folder: ${parentFolder.name}`
    }
    return editingSubfolder ? "Edit Share" : "Create New Share"
  }

  const getDialogDescription = () => {
    if (!parentFolder && folder) {
      return "Configure sharing settings for this databox. All folders and subfolders will inherit these settings."
    }
    if (parentFolder && !parentFolder.shareConfig) {
      return "Configure sharing settings for this folder. All subfolders will inherit these settings."
    }
    return (
      <>
        Creating share in: <span className="font-medium text-foreground">{folder?.title}</span>
        {parentShare && <span className="text-[#F3B335]"> → Nested under Share</span>}
      </>
    )
  }

  const availableDistricts = selectedZone ? DISTRICTS[selectedZone] || [] : []
  const availableTownPanchayats = selectedDistrict ? TOWN_PANCHAYATS[selectedDistrict] || [] : []

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#013A65] text-xl">{getDialogTitle()}</DialogTitle>
          {folder && <p className="text-sm text-muted-foreground mt-1">{getDialogDescription()}</p>}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Allowed File Types <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setFileTypeDropdownOpen(!fileTypeDropdownOpen)}
                className="w-full h-11 px-3 py-2 text-left border rounded-md bg-background hover:bg-muted/50 transition-colors flex items-center justify-between"
              >
                <span className="text-sm">
                  {allowedFileTypes.length === 0
                    ? "Select file types..."
                    : `${allowedFileTypes.length} file type(s) selected`}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              {fileTypeDropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-background border rounded-md shadow-lg max-h-64 overflow-y-auto">
                  <div className="p-2 space-y-1">
                    {FILE_TYPE_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 p-2 hover:bg-muted rounded cursor-pointer"
                        onClick={() => toggleFileType(option.value)}
                      >
                        <Checkbox checked={allowedFileTypes.includes(option.value)} />
                        <label className="text-sm cursor-pointer flex-1">{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {allowedFileTypes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {allowedFileTypes.map((type) => {
                  const option = FILE_TYPE_OPTIONS.find((o) => o.value === type)
                  return (
                    <span
                      key={type}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-[#F3B335]/10 text-[#013A65] rounded text-xs font-medium"
                    >
                      {option?.label}
                      <button type="button" onClick={() => toggleFileType(type)} className="hover:text-red-600 ml-1">
                        ×
                      </button>
                    </span>
                  )
                })}
              </div>
            )}
          </div>

          {/* File Size Limits */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minFileSize" className="text-sm font-medium">
                Min File Size (MB) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="minFileSize"
                type="number"
                min="0.1"
                max="1000"
                step="0.1"
                value={minFileSize}
                onChange={(e) => setMinFileSize(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxFileSize" className="text-sm font-medium">
                Max File Size (MB) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="maxFileSize"
                type="number"
                min="1"
                max="1000"
                value={maxFileSize}
                onChange={(e) => setMaxFileSize(e.target.value)}
                required
                className="h-11"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#013A65]">Access Permissions</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accessType" className="text-sm font-medium">
                  Who Can Access <span className="text-red-500">*</span>
                </Label>
                <Select value={accessType} onValueChange={(value: any) => setAccessType(value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="location">Specific Users (by Location)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {accessType === "location" && (
                <div className="space-y-2">
                  <Label htmlFor="locationLevel" className="text-sm font-medium">
                    Filter By <span className="text-red-500">*</span>
                  </Label>
                  <Select value={locationLevel} onValueChange={(value: any) => setLocationLevel(value)}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zone">Zone</SelectItem>
                      <SelectItem value="district">District</SelectItem>
                      <SelectItem value="townpanchayat">Town Panchayat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {accessType === "location" && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border">
                <div className="grid grid-cols-3 gap-4">
                  {/* Zone Dropdown - Always shown for location-based access */}
                  <div className="space-y-2">
                    <Label htmlFor="zone" className="text-sm font-medium">
                      Zone <span className="text-red-500">*</span>
                    </Label>
                    <Select value={selectedZone} onValueChange={handleZoneChange}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {ZONES.map((zone) => (
                          <SelectItem key={zone} value={zone}>
                            {zone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* District Dropdown - Shown for district and townpanchayat levels */}
                  <div className="space-y-2">
                    <Label htmlFor="district" className="text-sm font-medium">
                      District{" "}
                      {(locationLevel === "district" || locationLevel === "townpanchayat") && (
                        <span className="text-red-500">*</span>
                      )}
                    </Label>
                    <Select
                      value={selectedDistrict}
                      onValueChange={handleDistrictChange}
                      disabled={!selectedZone || locationLevel === "zone"}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder={selectedZone ? "Select..." : "Zone first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDistricts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Town Panchayat Dropdown - Shown only for townpanchayat level */}
                  <div className="space-y-2">
                    <Label htmlFor="townpanchayat" className="text-sm font-medium">
                      Town Panchayat {locationLevel === "townpanchayat" && <span className="text-red-500">*</span>}
                    </Label>
                    <Select
                      value={selectedTownPanchayat}
                      onValueChange={setSelectedTownPanchayat}
                      disabled={!selectedDistrict || locationLevel !== "townpanchayat"}
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder={selectedDistrict ? "Select..." : "District first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTownPanchayats.map((tp) => (
                          <SelectItem key={tp} value={tp}>
                            {tp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/20 p-3 rounded border border-blue-200 dark:border-blue-800">
                  <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">Access will be granted to:</p>
                  <p className="text-blue-800 dark:text-blue-200">
                    {locationLevel === "zone" && selectedZone && `All users in ${selectedZone}`}
                    {locationLevel === "district" &&
                      selectedZone &&
                      selectedDistrict &&
                      `All users in ${selectedDistrict}, ${selectedZone}`}
                    {locationLevel === "townpanchayat" &&
                      selectedZone &&
                      selectedDistrict &&
                      selectedTownPanchayat &&
                      `All users in ${selectedTownPanchayat}, ${selectedDistrict}, ${selectedZone}`}
                    {!selectedZone && "Please select location filters"}
                  </p>
                </div>
              </div>
            )}
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
              disabled={
                loading ||
                allowedFileTypes.length === 0 ||
                (accessType === "location" && !selectedZone) ||
                (accessType === "location" &&
                  (locationLevel === "district" || locationLevel === "townpanchayat") &&
                  !selectedDistrict) ||
                (accessType === "location" && locationLevel === "townpanchayat" && !selectedTownPanchayat)
              }
              className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white h-10 px-6"
            >
              {loading
                ? "Saving..."
                : !parentFolder && folder
                  ? "Share Databox"
                  : parentFolder && !parentFolder.shareConfig
                    ? "Share Folder"
                    : editingSubfolder
                      ? "Update Share"
                      : "Create Share"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
