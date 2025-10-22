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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, LinkIcon } from "lucide-react"
import {
  MeetingManagementService,
  type CreateMeetingData,
  type MeetingAttachment,
  type MeetingAccessPermission,
} from "@/services/meeting-management-service"

interface CreateMeetingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export function CreateMeetingDialog({ open, onOpenChange, onSuccess }: CreateMeetingDialogProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [meetingUrl, setMeetingUrl] = useState("")
  const [attachments, setAttachments] = useState<MeetingAttachment[]>([])
  const [accessType, setAccessType] = useState<"all" | "specific">("all")
  const [filterLevel, setFilterLevel] = useState<"zone" | "district" | "townpanchayat">("zone")
  const [zone, setZone] = useState("")
  const [district, setDistrict] = useState("")
  const [townPanchayat, setTownPanchayat] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const zones = MeetingManagementService.getZones()
  const districts = zone ? MeetingManagementService.getDistricts(zone) : []
  const townPanchayats = district ? MeetingManagementService.getTownPanchayats(district) : []

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newAttachments: MeetingAttachment[] = Array.from(files).map((file) => ({
        id: `att-${Date.now()}-${Math.random()}`,
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
        url: URL.createObjectURL(file),
      }))
      setAttachments([...attachments, ...newAttachments])
    }
  }

  const removeAttachment = (id: string) => {
    setAttachments(attachments.filter((att) => att.id !== id))
  }

  const handleSubmit = async () => {
    if (!name || !description || !date || !time) {
      return
    }

    setSubmitting(true)

    const accessPermission: MeetingAccessPermission = {
      type: accessType,
      ...(accessType === "specific" && {
        filterLevel,
        zone: zone || undefined,
        district: district || undefined,
        townPanchayat: townPanchayat || undefined,
      }),
    }

    const data: CreateMeetingData = {
      name,
      description,
      date,
      time,
      meetingUrl: meetingUrl || undefined,
      attachments,
      accessPermission,
    }

    await MeetingManagementService.createMeeting(data)
    setSubmitting(false)
    resetForm()
    onOpenChange(false)
    onSuccess()
  }

  const resetForm = () => {
    setName("")
    setDescription("")
    setDate("")
    setTime("")
    setMeetingUrl("")
    setAttachments([])
    setAccessType("all")
    setFilterLevel("zone")
    setZone("")
    setDistrict("")
    setTownPanchayat("")
  }

  const handleZoneChange = (value: string) => {
    setZone(value)
    setDistrict("")
    setTownPanchayat("")
  }

  const handleDistrictChange = (value: string) => {
    setDistrict(value)
    setTownPanchayat("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#013A65]">Create New Meeting</DialogTitle>
          <DialogDescription>Add meeting details, attachments, and configure access permissions</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Meeting Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Meeting Name *</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter meeting name" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter meeting description"
              rows={3}
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Meeting Date *</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Meeting Time *</Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>

          {/* Meeting URL */}
          <div className="space-y-2">
            <Label htmlFor="url">Meeting URL</Label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="url"
                value={meetingUrl}
                onChange={(e) => setMeetingUrl(e.target.value)}
                placeholder="https://meet.google.com/..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Attachments */}
          <div className="space-y-2">
            <Label>Attachments</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input type="file" multiple onChange={handleFileUpload} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
              </label>
            </div>

            {attachments.length > 0 && (
              <div className="space-y-2 mt-3">
                {attachments.map((att) => (
                  <div key={att.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{att.name}</p>
                      <p className="text-xs text-gray-500">{att.size}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => removeAttachment(att.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Access Permissions */}
          <div className="space-y-3 border-t pt-4">
            <Label>Access Permissions</Label>

            <div className="flex items-center gap-4">
              <Label htmlFor="access-type" className="min-w-[120px]">
                Who can access:
              </Label>
              <Select value={accessType} onValueChange={(v: any) => setAccessType(v)}>
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="specific">Specific Users</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {accessType === "specific" && (
              <>
                <div className="flex items-center gap-4">
                  <Label htmlFor="filter-level" className="min-w-[120px]">
                    Filter by:
                  </Label>
                  <Select value={filterLevel} onValueChange={(v: any) => setFilterLevel(v)}>
                    <SelectTrigger className="flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zone">Zone</SelectItem>
                      <SelectItem value="district">District</SelectItem>
                      <SelectItem value="townpanchayat">Town Panchayat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Zone */}
                  <div className="space-y-2">
                    <Label htmlFor="zone">Zone</Label>
                    <Select
                      value={zone}
                      onValueChange={handleZoneChange}
                      disabled={filterLevel === "zone" ? false : false}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select zone" />
                      </SelectTrigger>
                      <SelectContent>
                        {zones.map((z) => (
                          <SelectItem key={z} value={z}>
                            {z}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* District */}
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select
                      value={district}
                      onValueChange={handleDistrictChange}
                      disabled={filterLevel === "zone" || !zone}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Town Panchayat */}
                  <div className="space-y-2">
                    <Label htmlFor="townpanchayat">Town Panchayat</Label>
                    <Select
                      value={townPanchayat}
                      onValueChange={setTownPanchayat}
                      disabled={filterLevel === "zone" || filterLevel === "district" || !district}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select TP" />
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
                </div>
              </>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!name || !description || !date || !time || submitting}
            className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white"
          >
            {submitting ? "Creating..." : "Create Meeting"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
