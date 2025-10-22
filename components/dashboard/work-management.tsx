"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Briefcase, Eye, Edit, Trash2, Search, Clock, PlayCircle, CheckCircle, Loader2 } from "lucide-react"
import { workService, type Work } from "@/services/work-service"
import { fieldService } from "@/services/field-service"
import { useAuth } from "@/hooks/use-auth"
import type { Field } from "@/services/field-service"
import Link from "next/link"

export function WorkManagement() {
  const { user } = useAuth()
  const [works, setWorks] = useState<Work[]>([])
  const [filteredWorks, setFilteredWorks] = useState<Work[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [schemeFilter, setSchemeFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [viewWorkDialog, setViewWorkDialog] = useState(false)
  const [editWorkDialog, setEditWorkDialog] = useState(false)
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [workFields, setWorkFields] = useState<Field[]>([])
  const [editFormData, setEditFormData] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    loadWorks()
  }, [])

  useEffect(() => {
    let filtered = works

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (work) =>
          work.schemeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          work.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          work.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
          Object.values(work.fieldData).some((value) => String(value).toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((work) => work.status === statusFilter)
    }

    // Apply scheme filter
    if (schemeFilter !== "all") {
      filtered = filtered.filter((work) => work.schemeId === schemeFilter)
    }

    setFilteredWorks(filtered)
  }, [searchTerm, statusFilter, schemeFilter, works])

  const loadWorks = async () => {
    try {
      setIsLoading(true)
      const data = await workService.getWorks()
      setWorks(data)
      setFilteredWorks(data)
    } catch (error) {
      console.error("Failed to load works:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const viewWorkDetails = async (work: Work) => {
    try {
      setSelectedWork(work)
      const allFields = await fieldService.getAllFields()
      const componentFields = allFields.filter((field) => field.componentId === work.componentId)
      setWorkFields(componentFields)
      setViewWorkDialog(true)
    } catch (error) {
      console.error("Failed to load work details:", error)
      alert("Failed to load work details. Please try again.")
    }
  }

  const deleteWork = async (workId: string) => {
    if (confirm("Are you sure you want to delete this work entry?")) {
      try {
        await workService.deleteWork(workId)
        await loadWorks()
      } catch (error) {
        console.error("Failed to delete work:", error)
        alert("Failed to delete work. Please try again.")
      }
    }
  }

  const updateWorkStatus = async (workId: string, newStatus: "pending" | "in_progress" | "completed") => {
    try {
      await workService.updateWorkStatus(workId, newStatus)
      await loadWorks()
    } catch (error) {
      console.error("Failed to update work status:", error)
      alert("Failed to update work status. Please try again.")
    }
  }

  const editWork = async (work: Work) => {
    try {
      setSelectedWork(work)
      const allFields = await fieldService.getAllFields()
      const componentFields = allFields.filter((field) => field.componentId === work.componentId)
      setWorkFields(componentFields)
      setEditFormData(work.fieldData)
      setEditWorkDialog(true)
    } catch (error) {
      console.error("Failed to load work for editing:", error)
      alert("Failed to load work details. Please try again.")
    }
  }

  const saveWorkEdit = async () => {
    if (!selectedWork) return

    try {
      await workService.updateWork(selectedWork.id, {
        fieldData: editFormData,
        updatedAt: new Date().toISOString(),
      })
      setEditWorkDialog(false)
      await loadWorks()
      alert("Work updated successfully!")
    } catch (error) {
      console.error("Failed to update work:", error)
      alert("Failed to update work. Please try again.")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return { variant: "secondary" as const, icon: Clock, color: "text-yellow-600" }
      case "in_progress":
        return { variant: "default" as const, icon: PlayCircle, color: "text-blue-600" }
      case "completed":
        return { variant: "default" as const, icon: CheckCircle, color: "text-green-600" }
      default:
        return { variant: "secondary" as const, icon: Clock, color: "text-gray-600" }
    }
  }

  const uniqueSchemes = Array.from(new Set(works.map((work) => work.schemeId))).map((schemeId) => {
    const work = works.find((w) => w.schemeId === schemeId)
    return { id: schemeId, name: work?.schemeName || schemeId }
  })

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Work Management</h1>
            <p className="text-white/80 text-sm mt-1">
              View existing work entries and create new ones by selecting schemes and components
            </p>
          </div>
          <Link href="/dashboard/work/create">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-1.5" />
              Create Work
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
        <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/60 h-4 w-4" />
                <Input
                  placeholder="Search works..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 h-9 bg-white">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={schemeFilter} onValueChange={setSchemeFilter}>
                <SelectTrigger className="w-48 h-9 bg-white">
                  <SelectValue placeholder="All Schemes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schemes</SelectItem>
                  {uniqueSchemes.map((scheme) => (
                    <SelectItem key={scheme.id} value={scheme.id}>
                      {scheme.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {/* Content */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center gap-2 text-[#013A65]/70">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading works...</span>
              </div>
            </div>
          ) : filteredWorks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-[#013A65]/60" />
              </div>
              <h3 className="text-lg font-medium text-[#013A65] mb-2">No work entries found</h3>
              <p className="text-[#013A65]/70 mb-4">
                {searchTerm || statusFilter !== "all" || schemeFilter !== "all"
                  ? "No work entries match your search criteria."
                  : "Get started by creating your first work entry."}
              </p>
              {!searchTerm && statusFilter === "all" && schemeFilter === "all" && (
                <Link href="/dashboard/work/create">
                  <Button className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Work
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                  <TableHead className="text-[#013A65] font-semibold">Scheme Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Component Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Work Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Created Date</TableHead>
                  <TableHead className="text-[#013A65] font-semibold w-32">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorks.map((work) => {
                  const statusInfo = getStatusBadge(work.status || "pending")
                  const StatusIcon = statusInfo.icon
                  return (
                    <TableRow key={work.id} className="hover:bg-[#F8F8F8]/50">
                      <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={work.schemeName}>
                        {work.schemeName}
                      </TableCell>
                      <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={work.componentName}>
                        {work.componentName}
                      </TableCell>
                      <TableCell className="text-[#013A65]/80 max-w-xs truncate">
                        {work.fieldData?.workName || `Work-${work.id.slice(0, 8)}`}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={work.status || "pending"}
                          onValueChange={(value) => updateWorkStatus(work.id, value as any)}
                        >
                          <SelectTrigger className="w-32 h-8 bg-white">
                            <div className="flex items-center gap-2">
                              <StatusIcon className={`h-3 w-3 ${statusInfo.color}`} />
                              <SelectValue />
                            </div>
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="pending">
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-yellow-600" />
                                Pending
                              </div>
                            </SelectItem>
                            <SelectItem value="in_progress">
                              <div className="flex items-center gap-2">
                                <PlayCircle className="h-3 w-3 text-blue-600" />
                                In Progress
                              </div>
                            </SelectItem>
                            <SelectItem value="completed">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                Completed
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <span className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] px-2 py-1 rounded text-xs font-medium">
                          {work.createdBy}
                        </span>
                      </TableCell>
                      <TableCell className="text-[#013A65]/70">
                        {new Date(work.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                            onClick={() => viewWorkDetails(work)}
                            title="View Details"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                            onClick={() => editWork(work)}
                            title="Edit Work"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-red-50 hover:border-red-200 text-red-500 bg-transparent"
                            onClick={() => deleteWork(work.id)}
                            title="Delete Work"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      <Dialog open={viewWorkDialog} onOpenChange={setViewWorkDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#013A65]">
              <Eye className="h-5 w-5 text-[#013A65]" />
              Work Details
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">
              Complete details for {selectedWork?.schemeName} - {selectedWork?.componentName}
            </DialogDescription>
          </DialogHeader>

          {selectedWork && (
            <div className="space-y-6">
              {/* Work Summary */}
              <Card className="border-[#EDEEF0] bg-white">
                <CardHeader className="bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] border-b border-[#EDEEF0]">
                  <CardTitle className="text-base font-semibold text-[#013A65]">Work Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-[#013A65]/70">Scheme Name</Label>
                      <p className="text-sm text-[#013A65] font-medium">{selectedWork.schemeName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#013A65]/70">Component Name</Label>
                      <p className="text-sm text-[#013A65] font-medium">{selectedWork.componentName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#013A65]/70">Created By</Label>
                      <span className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] px-2 py-1 rounded text-xs font-medium">
                        {selectedWork.createdBy}
                      </span>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#013A65]/70">Created Date</Label>
                      <p className="text-sm text-[#013A65]">{new Date(selectedWork.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dynamic Field Data */}
              <Card className="border-[#EDEEF0] bg-white">
                <CardHeader className="bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] border-b border-[#EDEEF0]">
                  <CardTitle className="text-base font-semibold text-[#013A65]">Field Data</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workFields.map((field) => {
                      const value = selectedWork.fieldData?.[field.id] || "Not provided"
                      return (
                        <div key={field.id} className="space-y-2">
                          <Label className="text-sm font-medium text-[#013A65]/70">
                            {field.englishName}
                            <span className="text-xs text-[#013A65]/50 ml-1">({field.tamilName})</span>
                          </Label>
                          <div className="p-2 bg-[#F8F8F8] rounded border border-[#EDEEF0]">
                            <p className="text-sm text-[#013A65]">
                              {field.dataType === "attachment" && value !== "Not provided"
                                ? `${value.length} file(s) uploaded`
                                : value}
                            </p>
                          </div>
                          {field.englishDescription && (
                            <p className="text-xs text-[#013A65]/50">{field.englishDescription}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={editWorkDialog} onOpenChange={setEditWorkDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#013A65]">
              <Edit className="h-5 w-5 text-[#013A65]" />
              Edit Work
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">
              Edit details for {selectedWork?.schemeName} - {selectedWork?.componentName}
            </DialogDescription>
          </DialogHeader>

          {selectedWork && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label className="block text-sm font-medium text-[#013A65]">
                      {field.englishName}
                      {field.isRequired && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {field.dataType === "text" && (
                      <Input
                        value={editFormData[field.id] || ""}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, [field.id]: e.target.value }))}
                        className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                      />
                    )}
                    {field.dataType === "number" && (
                      <Input
                        type="number"
                        value={editFormData[field.id] || ""}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, [field.id]: e.target.value }))}
                        className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                      />
                    )}
                    {field.dataType === "date" && (
                      <Input
                        type="date"
                        value={editFormData[field.id] || ""}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, [field.id]: e.target.value }))}
                        className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setEditWorkDialog(false)}
                  className="border-[#EDEEF0] hover:bg-[#F8F8F8]"
                >
                  Cancel
                </Button>
                <Button
                  onClick={saveWorkEdit}
                  className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
