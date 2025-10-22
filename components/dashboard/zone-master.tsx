"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Search, Loader2 } from "lucide-react"
import { MastersService, type Zone } from "@/services/masters-service"
import { CreateZoneDialog } from "./create-zone-dialog"
import { EditZoneDialog } from "./edit-zone-dialog"

export function ZoneMaster() {
  const [zones, setZones] = useState<Zone[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingZone, setEditingZone] = useState<Zone | null>(null)

  useEffect(() => {
    loadZones()
  }, [])

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

  const handleCreateZone = async (zoneData: Omit<Zone, "id" | "createdAt">) => {
    try {
      await MastersService.createZone(zoneData)
      await loadZones()
      setIsCreateDialogOpen(false)
    } catch (error) {
      console.error("Failed to create zone:", error)
    }
  }

  const handleEditZone = async (id: string, zoneData: Partial<Zone>) => {
    try {
      await MastersService.updateZone(id, zoneData)
      await loadZones()
      setEditingZone(null)
    } catch (error) {
      console.error("Failed to update zone:", error)
    }
  }

  const filteredZones = zones.filter(
    (zone) =>
      zone.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      zone.nameTamil.includes(searchTerm) ||
      zone.remark.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/60 h-4 w-4" />
              <Input
                placeholder="Search zones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9 bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
              />
            </div>
          </div>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium shadow-md hover:shadow-lg transition-all duration-200 h-9"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Zone
          </Button>
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
        ) : filteredZones.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-[#013A65]/60" />
            </div>
            <h3 className="text-lg font-medium text-[#013A65] mb-2">No zones found</h3>
            <p className="text-[#013A65]/70 mb-4">
              {searchTerm ? "No zones match your search criteria." : "Get started by creating your first zone."}
            </p>
            {!searchTerm && (
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Zone
              </Button>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">English Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Tamil Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Remark</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Created At</TableHead>
                <TableHead className="text-[#013A65] font-semibold w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredZones.map((zone) => (
                <TableRow key={zone.id} className="hover:bg-[#F8F8F8]/50">
                  <TableCell className="font-medium text-[#013A65]">{zone.nameEnglish}</TableCell>
                  <TableCell className="text-[#013A65]/80">{zone.nameTamil}</TableCell>
                  <TableCell className="text-[#013A65]/70 max-w-xs truncate" title={zone.remark}>
                    {zone.remark}
                  </TableCell>
                  <TableCell className="text-[#013A65]/70">{zone.createdBy}</TableCell>
                  <TableCell className="text-[#013A65]/70">{zone.createdAt}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingZone(zone)}
                      className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Dialogs */}
      <CreateZoneDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} onSubmit={handleCreateZone} />

      {editingZone && (
        <EditZoneDialog
          open={!!editingZone}
          onOpenChange={(open) => !open && setEditingZone(null)}
          zone={editingZone}
          onSubmit={(data) => handleEditZone(editingZone.id, data)}
        />
      )}
    </div>
  )
}
