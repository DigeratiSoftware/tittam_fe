"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Plus, GripVertical, Edit, Trash2, Lock, Unlock, Eye, Table, Sheet } from "lucide-react"
import { smartSheetService, type SmartSheet } from "@/services/smart-sheet-service"
import { CreateSheetDialog } from "@/components/smart-sheets/create-sheet-dialog"
import { UpdateTrackingDialog } from "@/components/smart-sheets/update-tracking-dialog"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SmartSheetsPage() {
  const [sheets, setSheets] = useState<SmartSheet[]>([])
  const [loading, setLoading] = useState(true)
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editingSheet, setEditingSheet] = useState<SmartSheet | null>(null)
  const [trackingDialogOpen, setTrackingDialogOpen] = useState(false)
  const [selectedSheetId, setSelectedSheetId] = useState<string>("")
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"table" | "sheet">("table")
  const [selectedSection, setSelectedSection] = useState<string>("") // Selected section for sheet view
  const [sections, setSections] = useState<string[]>([]) // Available sections
  const [activeSheetTab, setActiveSheetTab] = useState<string>("") // Active sheet tab in sheet view
  const { toast } = useToast()

  const setSelectedSheetForView = (id: string) => {
    setActiveSheetTab(id)
  }

  useEffect(() => {
    loadSheets()
    loadSections() // Load sections
  }, [])

  const loadSheets = async () => {
    try {
      setLoading(true)
      const data = await smartSheetService.getSmartSheets()
      setSheets(data)
      if (data.length > 0 && !activeSheetTab) {
        setSelectedSheetForView(data[0].id)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load smart sheets",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const loadSections = async () => {
    try {
      const sectionData = await smartSheetService.getSections()
      setSections(sectionData)
      if (sectionData.length > 0 && !selectedSection) {
        setSelectedSection(sectionData[0])
      }
    } catch (error) {
      console.error("Failed to load sections", error)
    }
  }

  const loadSheetsBySection = async (sectionName: string) => {
    try {
      const data = await smartSheetService.getSheetsBySection(sectionName)
      if (data.length > 0 && !activeSheetTab) {
        setActiveSheetTab(data[0].id)
      }
      return data
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load sheets for section",
        variant: "destructive",
      })
      return []
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this sheet?")) return

    try {
      await smartSheetService.deleteSmartSheet(id)
      toast({ title: "Success", description: "Sheet deleted successfully" })
      loadSheets()
      loadSections() // Reload sections after deleting sheet
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete sheet",
        variant: "destructive",
      })
    }
  }

  const handleFreeze = async (id: string, isFrozen: boolean) => {
    try {
      if (isFrozen) {
        await smartSheetService.unfreezeSheet(id)
        toast({ title: "Success", description: "Sheet unfrozen successfully" })
      } else {
        await smartSheetService.freezeSheet(id)
        toast({ title: "Success", description: "Sheet frozen successfully" })
      }
      loadSheets()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update sheet",
        variant: "destructive",
      })
    }
  }

  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return

    const newSheets = [...sheets]
    const draggedSheet = newSheets[draggedIndex]
    newSheets.splice(draggedIndex, 1)
    newSheets.splice(index, 0, draggedSheet)

    setSheets(newSheets)
    setDraggedIndex(index)
  }

  const handleDragEnd = async () => {
    if (draggedIndex === null) return

    try {
      const sheetIds = sheets.map((s) => s.id)
      await smartSheetService.reorderSheets(sheetIds)
      toast({ title: "Success", description: "Sheet order updated" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reorder sheets",
        variant: "destructive",
      })
      loadSheets()
    } finally {
      setDraggedIndex(null)
    }
  }

  const handleViewTracking = (sheetId: string) => {
    setSelectedSheetId(sheetId)
    setTrackingDialogOpen(true)
  }

  const selectedSheetForView = sheets.find((s) => s.id === activeSheetTab)

  const renderTableView = () => (
    <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm">
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading sheets...</div>
      ) : sheets.length === 0 ? (
        <div className="p-8 text-center text-gray-500">No sheets created yet. Click "Create Sheet" to get started.</div>
      ) : (
        <div className="divide-y divide-[#EDEEF0]">
          {sheets.map((sheet, index) => (
            <div
              key={sheet.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className="p-4 hover:bg-[#F8F8F8]/50 transition-colors cursor-move"
            >
              <div className="flex items-start gap-4">
                <GripVertical className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#013A65] mb-1">{sheet.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{sheet.description}</p>

                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-[#013A65]/10 text-[#013A65] rounded">
                          {sheet.type === "scheme" ? "Scheme" : "General"}
                        </span>
                        {sheet.type === "scheme" && (
                          <>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">{sheet.scheme}</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">{sheet.component}</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">{sheet.year}</span>
                          </>
                        )}
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {sheet.fields.length} fields
                        </span>
                        {sheet.isShared && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Shared</span>
                        )}
                        {sheet.isFrozen && <span className="px-2 py-1 bg-red-100 text-red-700 rounded">Frozen</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {sheet.isShared && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewTracking(sheet.id)}
                          className="text-[#013A65] hover:text-[#013A65] hover:bg-[#013A65]/10"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleFreeze(sheet.id, sheet.isFrozen)}
                        className="text-[#013A65] hover:text-[#013A65] hover:bg-[#013A65]/10"
                      >
                        {sheet.isFrozen ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setEditingSheet(sheet)
                          setCreateDialogOpen(true)
                        }}
                        disabled={sheet.isFrozen}
                        className="text-[#013A65] hover:text-[#013A65] hover:bg-[#013A65]/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(sheet.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderSheetView = () => {
    const sectionSheets = sheets.filter((s) => s.sectionName === selectedSection)
    const activeSheet = sectionSheets.find((s) => s.id === activeSheetTab) || sectionSheets[0]

    if (!selectedSection || sections.length === 0) {
      return (
        <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-8 text-center text-gray-500">
          No sections available. Create sheets with section names to view them here.
        </div>
      )
    }

    if (!activeSheet) {
      return (
        <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-8 text-center text-gray-500">
          No sheets in this section. Create sheets for this section to view them here.
        </div>
      )
    }

    return (
      <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
        {/* Sheet Tabs */}
        <div className="border-b border-[#EDEEF0] bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 overflow-x-auto">
          {sectionSheets.map((sheet) => (
            <button
              key={sheet.id}
              onClick={() => setActiveSheetTab(sheet.id)}
              className={`px-4 py-2 rounded-t-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeSheetTab === sheet.id
                  ? "bg-white text-[#013A65] border-t-2 border-[#F3B335]"
                  : "text-gray-600 hover:bg-white/50"
              }`}
            >
              {sheet.name}
            </button>
          ))}
        </div>

        {/* Sheet Info */}
        <div className="p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
          <h3 className="text-lg font-semibold text-[#013A65]">{activeSheet.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{activeSheet.description}</p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            {activeSheet.type === "scheme" && (
              <>
                <span className="px-2 py-1 bg-white text-gray-700 rounded border border-[#EDEEF0]">
                  {activeSheet.schemeName}
                </span>
                <span className="px-2 py-1 bg-white text-gray-700 rounded border border-[#EDEEF0]">
                  {activeSheet.componentName}
                </span>
                <span className="px-2 py-1 bg-white text-gray-700 rounded border border-[#EDEEF0]">
                  {activeSheet.year}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Spreadsheet Grid */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F3B335]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#013A65] border-r border-[#F3B335]/20 w-16">
                  #
                </th>
                {activeSheet.fields.map((field) => (
                  <th
                    key={field.id}
                    className="px-4 py-3 text-left text-sm font-semibold text-[#013A65] border-r border-[#F3B335]/20 min-w-[150px]"
                  >
                    <div>
                      <div>{field.name}</div>
                      <div className="text-xs font-normal text-[#013A65]/70 mt-0.5">
                        {field.source === "work"
                          ? "Work Field"
                          : field.source === "infohub"
                            ? "Info Hub"
                            : `Custom (${field.dataType})`}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Sample rows - in real implementation, this would come from actual data */}
              {[1, 2, 3, 4, 5].map((rowNum) => (
                <tr key={rowNum} className="border-b border-[#EDEEF0] hover:bg-[#F8F8F8]/50">
                  <td className="px-4 py-3 text-sm text-gray-600 border-r border-[#EDEEF0] font-medium">{rowNum}</td>
                  {activeSheet.fields.map((field) => (
                    <td key={field.id} className="px-4 py-3 text-sm text-gray-700 border-r border-[#EDEEF0]">
                      <input
                        type={field.dataType === "number" ? "number" : field.dataType === "date" ? "date" : "text"}
                        className="w-full px-2 py-1 border border-transparent hover:border-[#EDEEF0] focus:border-[#013A65] focus:outline-none rounded"
                        placeholder={`Enter ${field.name.toLowerCase()}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Row Button */}
        <div className="p-4 border-t border-[#EDEEF0] bg-[#F8F8F8]">
          <Button
            variant="outline"
            size="sm"
            className="text-[#013A65] border-[#013A65] hover:bg-[#013A65] hover:text-white bg-transparent"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Row
          </Button>
        </div>
      </div>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Smart Sheet Management</h1>
              <p className="text-white/80 mt-1">Create and manage smart sheets for data collection</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <Button
                  variant={viewMode === "table" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  className={
                    viewMode === "table" ? "bg-white text-[#013A65] hover:bg-white/90" : "text-white hover:bg-white/10"
                  }
                >
                  <Table className="h-4 w-4 mr-2" />
                  Table View
                </Button>
                <Button
                  variant={viewMode === "sheet" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("sheet")}
                  className={
                    viewMode === "sheet" ? "bg-white text-[#013A65] hover:bg-white/90" : "text-white hover:bg-white/10"
                  }
                >
                  <Sheet className="h-4 w-4 mr-2" />
                  Sheet View
                </Button>
              </div>

              <Button
                onClick={() => {
                  setEditingSheet(null)
                  setCreateDialogOpen(true)
                }}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Sheet
              </Button>
            </div>
          </div>

          {viewMode === "sheet" && sections.length > 0 && (
            <div className="mt-4 flex items-center gap-3">
              <label className="text-white font-medium">Select Section:</label>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="w-[300px] bg-white text-[#013A65]">
                  <SelectValue placeholder="Select a section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {viewMode === "table" ? renderTableView() : renderSheetView()}
      </div>

      <CreateSheetDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        sheet={editingSheet}
        onSuccess={() => {
          loadSheets()
          loadSections() // Reload sections after creating/updating sheet
        }}
      />

      <UpdateTrackingDialog open={trackingDialogOpen} onOpenChange={setTrackingDialogOpen} sheetId={selectedSheetId} />
    </DashboardLayout>
  )
}
