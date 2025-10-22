"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Search, Loader2 } from "lucide-react"
import { MastersService, type Zone, type District } from "@/services/masters-service"
import { CreateDistrictDialog } from "./create-district-dialog"
import { EditDistrictDialog } from "./edit-district-dialog"

export function DistrictMaster() {
  const [zones, setZones] = useState<Zone[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [selectedZoneId, setSelectedZoneId] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [districtsLoading, setDistrictsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingDistrict, setEditingDistrict] = useState<District | null>(null)

  useEffect(() => {
    loadZones()
  }, [])

  useEffect(() => {
    if (selectedZoneId) {
      loadDistricts(selectedZoneId)
    } else {
      setDistricts([])
    }
  }, [selectedZoneId])

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

  const handleCreateDistrict = async (districtData: Omit<District, "id" | "createdAt">) => {
    try {
      await MastersService.createDistrict(districtData)
      if (selectedZoneId) {
        await loadDistricts(selectedZoneId)
      }
      setIsCreateDialogOpen(false)
    } catch (error) {
      console.error("Failed to create district:", error)
    }
  }

  const handleEditDistrict = async (id: string, districtData: Partial<District>) => {
    try {
      await MastersService.updateDistrict(id, districtData)
      if (selectedZoneId) {
        await loadDistricts(selectedZoneId)
      }
      setEditingDistrict(null)
    } catch (error) {
      console.error("Failed to update district:", error)
    }
  }

  const filteredDistricts = districts.filter(
    (district) =>
      district.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      district.nameTamil.includes(searchTerm) ||
      district.remark.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedZone = zones.find((zone) => zone.id === selectedZoneId)

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-4">
              <Select value={selectedZoneId} onValueChange={setSelectedZoneId}>
                <SelectTrigger className="w-72 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
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

              {selectedZoneId && (
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/60 h-4 w-4" />
                  <Input
                    placeholder="Search districts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                  />
                </div>
              )}
            </div>
          </div>

          {selectedZoneId && (
            <Button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium shadow-md hover:shadow-lg transition-all duration-200 h-9"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create District
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
            <p className="text-[#013A65]/70">Please select a zone to view and manage districts.</p>
          </div>
        ) : districtsLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center gap-2 text-[#013A65]/70">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading districts...</span>
            </div>
          </div>
        ) : filteredDistricts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No districts found</h3>
            <p className="text-[#013A65]/70 mb-4">
              {searchTerm
                ? "No districts match your search criteria."
                : `No districts found for ${selectedZone?.nameEnglish}. Create the first district.`}
            </p>
            {!searchTerm && (
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create District
              </Button>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">English Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Tamil Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Remark</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created At</TableHead>
                <TableHead className="text-[#013A65] font-semibold w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDistricts.map((district) => {
                const zone = zones.find((z) => z.id === district.zoneId)
                return (
                  <TableRow key={district.id} className="hover:bg-[#F8F8F8]/50">
                    <TableCell className="font-medium text-[#013A65]">{district.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/80">{district.nameTamil}</TableCell>
                    <TableCell className="text-[#013A65]/70">{zone?.nameEnglish}</TableCell>
                    <TableCell className="text-[#013A65]/70 max-w-xs truncate" title={district.remark}>
                      {district.remark}
                    </TableCell>
                    <TableCell className="text-[#013A65]/70">{district.createdBy}</TableCell>
                    <TableCell className="text-[#013A65]/70">{district.createdAt}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingDistrict(district)}
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
      {selectedZoneId && (
        <CreateDistrictDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          zoneId={selectedZoneId}
          zoneName={selectedZone?.nameEnglish || ""}
          onSubmit={handleCreateDistrict}
        />
      )}

      {editingDistrict && (
        <EditDistrictDialog
          open={!!editingDistrict}
          onOpenChange={(open) => !open && setEditingDistrict(null)}
          district={editingDistrict}
          zoneName={zones.find((z) => z.id === editingDistrict.zoneId)?.nameEnglish || ""}
          onSubmit={(data) => handleEditDistrict(editingDistrict.id, data)}
        />
      )}
    </div>
  )
}
