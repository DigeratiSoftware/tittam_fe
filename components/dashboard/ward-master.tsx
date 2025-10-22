"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Search, Loader2 } from "lucide-react"
import { MastersService, type Zone, type District, type TownPanchayat, type Ward } from "@/services/masters-service"
import { CreateWardDialog } from "./create-ward-dialog"
import { EditWardDialog } from "./edit-ward-dialog"

export function WardMaster() {
  const [zones, setZones] = useState<Zone[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [townPanchayats, setTownPanchayats] = useState<TownPanchayat[]>([])
  const [wards, setWards] = useState<Ward[]>([])
  const [selectedZoneId, setSelectedZoneId] = useState<string>("")
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("")
  const [selectedTownPanchayatId, setSelectedTownPanchayatId] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [districtsLoading, setDistrictsLoading] = useState(false)
  const [townPanchayatsLoading, setTownPanchayatsLoading] = useState(false)
  const [wardsLoading, setWardsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingWard, setEditingWard] = useState<Ward | null>(null)

  useEffect(() => {
    loadZones()
  }, [])

  useEffect(() => {
    if (selectedZoneId) {
      loadDistricts(selectedZoneId)
      setSelectedDistrictId("")
      setSelectedTownPanchayatId("")
      setTownPanchayats([])
      setWards([])
    } else {
      setDistricts([])
      setSelectedDistrictId("")
      setSelectedTownPanchayatId("")
      setTownPanchayats([])
      setWards([])
    }
  }, [selectedZoneId])

  useEffect(() => {
    if (selectedDistrictId) {
      loadTownPanchayats(selectedDistrictId)
      setSelectedTownPanchayatId("")
      setWards([])
    } else {
      setTownPanchayats([])
      setSelectedTownPanchayatId("")
      setWards([])
    }
  }, [selectedDistrictId])

  useEffect(() => {
    if (selectedTownPanchayatId) {
      loadWards(selectedTownPanchayatId)
    } else {
      setWards([])
    }
  }, [selectedTownPanchayatId])

  const loadZones = async () => {
    try {
      setLoading(true)
      const data = await MastersService.getAllZones()
      setZones(data)
    } catch (error) {
      console.error("Failed to load zones:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadDistricts = async (zoneId: string) => {
    try {
      setDistrictsLoading(true)
      const data = await MastersService.getDistrictsByZone(zoneId)
      setDistricts(data)
    } catch (error) {
      console.error("Failed to load districts:", error)
    } finally {
      setDistrictsLoading(false)
    }
  }

  const loadTownPanchayats = async (districtId: string) => {
    try {
      setTownPanchayatsLoading(true)
      const data = await MastersService.getTownPanchayatsByDistrict(districtId)
      setTownPanchayats(data)
    } catch (error) {
      console.error("Failed to load town panchayats:", error)
    } finally {
      setTownPanchayatsLoading(false)
    }
  }

  const loadWards = async (townPanchayatId: string) => {
    try {
      setWardsLoading(true)
      const data = await MastersService.getWardsByTownPanchayat(townPanchayatId)
      setWards(data)
    } catch (error) {
      console.error("Failed to load wards:", error)
    } finally {
      setWardsLoading(false)
    }
  }

  const handleCreateWard = async (wardData: Omit<Ward, "id" | "createdAt">) => {
    try {
      await MastersService.createWard(wardData)
      if (selectedTownPanchayatId) {
        await loadWards(selectedTownPanchayatId)
      }
      setIsCreateDialogOpen(false)
    } catch (error) {
      console.error("Failed to create ward:", error)
    }
  }

  const handleEditWard = async (id: string, wardData: Partial<Ward>) => {
    try {
      await MastersService.updateWard(id, wardData)
      if (selectedTownPanchayatId) {
        await loadWards(selectedTownPanchayatId)
      }
      setEditingWard(null)
    } catch (error) {
      console.error("Failed to update ward:", error)
    }
  }

  const filteredWards = wards.filter(
    (ward) =>
      ward.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ward.nameTamil.includes(searchTerm) ||
      ward.remark.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedZone = zones.find((zone) => zone.id === selectedZoneId)
  const selectedDistrict = districts.find((district) => district.id === selectedDistrictId)
  const selectedTownPanchayat = townPanchayats.find((tp) => tp.id === selectedTownPanchayatId)

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
              <Select value={selectedZoneId} onValueChange={setSelectedZoneId}>
                <SelectTrigger className="w-56 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                  <SelectValue placeholder="Select Zone" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {zones.map((zone) => (
                    <SelectItem key={zone.id} value={zone.id}>
                      {zone.nameEnglish} / {zone.nameTamil}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDistrictId} onValueChange={setSelectedDistrictId} disabled={!selectedZoneId}>
                <SelectTrigger className="w-56 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {districts.map((district) => (
                    <SelectItem key={district.id} value={district.id}>
                      {district.nameEnglish} / {district.nameTamil}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedTownPanchayatId}
                onValueChange={setSelectedTownPanchayatId}
                disabled={!selectedDistrictId}
              >
                <SelectTrigger className="w-56 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                  <SelectValue placeholder="Select Town Panchayat" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {townPanchayats.map((tp) => (
                    <SelectItem key={tp.id} value={tp.id}>
                      {tp.nameEnglish} / {tp.nameTamil}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedTownPanchayatId && (
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/60 h-4 w-4" />
                  <Input
                    placeholder="Search wards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  />
                </div>
              )}
            </div>
          </div>

          {selectedTownPanchayatId && (
            <Button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium shadow-md hover:shadow-lg transition-all duration-200 h-9"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Ward
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center gap-2 text-[#013A65]/70">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading zones...</span>
            </div>
          </div>
        ) : !selectedZoneId ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No zone selected</h3>
            <p className="text-[#013A65]/70">
              Please select zone, district, and town panchayat to view and manage wards.
            </p>
          </div>
        ) : !selectedDistrictId ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No district selected</h3>
            <p className="text-[#013A65]/70">Please select district and town panchayat to view and manage wards.</p>
          </div>
        ) : !selectedTownPanchayatId ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No town panchayat selected</h3>
            <p className="text-[#013A65]/70">Please select a town panchayat to view and manage wards.</p>
          </div>
        ) : wardsLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center gap-2 text-[#013A65]/70">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading wards...</span>
            </div>
          </div>
        ) : filteredWards.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No wards found</h3>
            <p className="text-[#013A65]/70 mb-4">
              {searchTerm
                ? "No wards match your search criteria."
                : `No wards found for ${selectedTownPanchayat?.nameEnglish}. Create the first ward.`}
            </p>
            {!searchTerm && (
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Ward
              </Button>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">English Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Tamil Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                <TableHead className="text-[#013A65] font-semibold">District</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Remark</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created At</TableHead>
                <TableHead className="text-[#013A65] font-semibold w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWards.map((ward) => {
                const townPanchayat = townPanchayats.find((tp) => tp.id === ward.townPanchayatId)
                const district = districts.find((d) => d.id === townPanchayat?.districtId)
                const zone = zones.find((z) => z.id === district?.zoneId)
                return (
                  <TableRow key={ward.id} className="hover:bg-[#F8F8F8]/50">
                    <TableCell className="font-medium text-[#013A65]">{ward.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/80">{ward.nameTamil}</TableCell>
                    <TableCell className="text-[#013A65]/70">{townPanchayat?.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/70">{district?.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/70">{zone?.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/70 max-w-xs truncate" title={ward.remark}>
                      {ward.remark}
                    </TableCell>
                    <TableCell className="text-[#013A65]/70">{ward.createdBy}</TableCell>
                    <TableCell className="text-[#013A65]/70">{ward.createdAt}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingWard(ward)}
                        className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Dialogs */}
      {selectedTownPanchayatId && (
        <CreateWardDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          townPanchayatId={selectedTownPanchayatId}
          townPanchayatName={selectedTownPanchayat?.nameEnglish || ""}
          districtName={selectedDistrict?.nameEnglish || ""}
          zoneName={selectedZone?.nameEnglish || ""}
          onSubmit={handleCreateWard}
        />
      )}

      {editingWard && (
        <EditWardDialog
          open={!!editingWard}
          onOpenChange={(open) => !open && setEditingWard(null)}
          ward={editingWard}
          townPanchayatName={townPanchayats.find((tp) => tp.id === editingWard.townPanchayatId)?.nameEnglish || ""}
          districtName={
            districts.find(
              (d) => d.id === townPanchayats.find((tp) => tp.id === editingWard.townPanchayatId)?.districtId,
            )?.nameEnglish || ""
          }
          zoneName={
            zones.find(
              (z) =>
                z.id ===
                districts.find(
                  (d) => d.id === townPanchayats.find((tp) => tp.id === editingWard.townPanchayatId)?.districtId,
                )?.zoneId,
            )?.nameEnglish || ""
          }
          onSubmit={(data) => handleEditWard(editingWard.id, data)}
        />
      )}
    </div>
  )
}
