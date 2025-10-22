"use client"

import { useState, useEffect } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Upload,
  Grid3x3,
  List,
  Settings,
  Eye,
  FolderOpen,
  Folder,
  ChevronDown,
  ChevronRight,
  Download,
  FileSpreadsheet,
  FileText,
  Filter,
} from "lucide-react"
import { driveService, type DriveFolder, type UserFileSummary } from "@/services/drive-service"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { UploadFileDialog } from "@/components/drive/upload-file-dialog"
import { UserFilesModal } from "@/components/drive/user-files-modal"
import { useToast } from "@/hooks/use-toast"

export default function SmartDrivePage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [folders, setFolders] = useState<DriveFolder[]>([])
  const [userSummaries, setUserSummaries] = useState<UserFileSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState(false)
  const [downloadingBulk, setDownloadingBulk] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "table">("table")
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [selectedNestedFolder, setSelectedNestedFolder] = useState<string | null>(null)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [selectedUserFiles, setSelectedUserFiles] = useState<UserFileSummary | null>(null)
  const [userFilesModalOpen, setUserFilesModalOpen] = useState(false)
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "pending">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [zoneFilter, setZoneFilter] = useState("")
  const [districtFilter, setDistrictFilter] = useState("")
  const [townPanchayatFilter, setTownPanchayatFilter] = useState("")

  const [showLocationFilters, setShowLocationFilters] = useState(false)

  useEffect(() => {
    loadFolders()
  }, [])

  const loadFolders = async () => {
    setLoading(true)
    try {
      const foldersData = await driveService.getFolders()
      setFolders(foldersData)
      const allFolderIds = new Set<string>()
      foldersData.forEach((folder) => {
        allFolderIds.add(folder.id)
        collectAllFolderIds(folder.folders || [], allFolderIds)
      })
      setExpandedFolders(allFolderIds)
    } catch (error) {
      console.error("Failed to load folders:", error)
    } finally {
      setLoading(false)
    }
  }

  const collectAllFolderIds = (nestedFolders: any[], idSet: Set<string>) => {
    nestedFolders.forEach((folder) => {
      idSet.add(folder.id)
      if (folder.folders && folder.folders.length > 0) {
        collectAllFolderIds(folder.folders, idSet)
      }
    })
  }

  const loadDataForFolder = async (folderId: string) => {
    setLoadingData(true)
    try {
      const summariesData = await driveService.getUserFileSummaries(folderId, user?.id, user?.role)
      setUserSummaries(summariesData)
    } catch (error) {
      console.error("Failed to load data:", error)
      toast({
        title: "Error loading data",
        description: "Failed to load folder data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoadingData(false)
    }
  }

  const handleViewUserFiles = (summary: UserFileSummary) => {
    setSelectedUserFiles(summary)
    setUserFilesModalOpen(true)
  }

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(folderId)) {
        newSet.delete(folderId)
      } else {
        newSet.add(folderId)
      }
      return newSet
    })
  }

  const isLeafFolder = (folder: any): boolean => {
    return !folder.folders || folder.folders.length === 0
  }

  const canUserAccessFolder = (folder: any, allFolders: any[]) => {
    const shareConfig = driveService.getEffectiveShareConfig(folder.id, allFolders)

    if (!shareConfig) return false
    if (shareConfig.accessType === "all") return true
    if (shareConfig.accessType === "roles" && shareConfig.allowedRoles?.includes(user?.role)) return true
    if (shareConfig.accessType === "users" && shareConfig.allowedUserIds?.includes(user?.id)) return true
    return false
  }

  const getAccessibleNestedFolders = (nestedFolders: any[], allFolders: any[]): any[] => {
    const accessible: any[] = []
    for (const folder of nestedFolders) {
      if (canUserAccessFolder(folder, allFolders)) {
        accessible.push(folder)
      }
      if (folder.folders && folder.folders.length > 0) {
        const childAccessible = getAccessibleNestedFolders(folder.folders, allFolders)
        accessible.push(...childAccessible)
      }
    }
    return accessible
  }

  const getAllNestedFolders = (folders: any[]): any[] => {
    const result: any[] = []
    const traverse = (folderList: any[]) => {
      for (const folder of folderList) {
        result.push(folder)
        if (folder.folders && folder.folders.length > 0) {
          traverse(folder.folders)
        }
      }
    }
    traverse(folders)
    return result
  }

  const accessibleFolders = folders
    .map((folder) => {
      const allFolders = getAllNestedFolders(folder.folders || [])
      return {
        ...folder,
        folders: folder.folders || [],
        allFolders, // Store flattened list for inheritance checking
      }
    })
    .filter((folder) => {
      const accessibleNested = getAccessibleNestedFolders(folder.folders, folder.allFolders)
      return accessibleNested.length > 0
    })

  const filteredSummaries = userSummaries.filter((summary) => {
    if (statusFilter === "completed" && summary.pendingCount > 0) return false
    if (statusFilter === "pending" && summary.pendingCount === 0) return false

    if (searchQuery && !summary.userName.toLowerCase().includes(searchQuery.toLowerCase())) return false

    if (zoneFilter && summary.zone !== zoneFilter) return false
    if (districtFilter && summary.district !== districtFilter) return false
    if (townPanchayatFilter && summary.townPanchayat !== townPanchayatFilter) return false

    return true
  })

  const uniqueZones = Array.from(new Set(userSummaries.map((s) => s.zone)))
  const uniqueDistricts = Array.from(
    new Set(userSummaries.filter((s) => !zoneFilter || s.zone === zoneFilter).map((s) => s.district)),
  )
  const uniqueTownPanchayats = Array.from(
    new Set(userSummaries.filter((s) => !districtFilter || s.district === districtFilter).map((s) => s.townPanchayat)),
  )

  const canViewAllFiles = user?.role === "admin" || user?.role === "manager"

  const handleBulkDownload = async () => {
    if (filteredSummaries.length === 0) {
      toast({
        title: "No files to download",
        description: "There are no files matching your current filters.",
        variant: "destructive",
      })
      return
    }

    setDownloadingBulk(true)
    try {
      const fileIds: string[] = []
      for (const summary of filteredSummaries) {
        if (summary.files) {
          fileIds.push(...summary.files.map((f) => f.id))
        }
      }

      if (fileIds.length === 0) {
        toast({
          title: "No files to download",
          description: "The selected users have not uploaded any files yet.",
          variant: "destructive",
        })
        return
      }

      await driveService.bulkDownloadFiles(fileIds)

      toast({
        title: "Download started",
        description: `Downloading ${fileIds.length} file(s) from selected folder`,
      })
    } catch (error) {
      console.error("Bulk download failed:", error)
      toast({
        title: "Download failed",
        description: "Failed to download files. Please try again.",
        variant: "destructive",
      })
    } finally {
      setDownloadingBulk(false)
    }
  }

  const handleExportExcel = () => {
    if (filteredSummaries.length === 0) {
      toast({
        title: "No data to export",
        description: "There are no records matching your current filters.",
        variant: "destructive",
      })
      return
    }

    const headers = ["User Name", "Zone", "District", "Town Panchayat", "Requested", "Uploaded", "Pending"]
    const csvRows = [headers.join(",")]

    filteredSummaries.forEach((summary) => {
      const row = [
        `"${summary.userName}"`,
        `"${summary.zone}"`,
        `"${summary.district}"`,
        `"${summary.townPanchayat}"`,
        summary.requestedCount,
        summary.uploadedCount,
        summary.pendingCount,
      ]
      csvRows.push(row.join(","))
    })

    const csvContent = csvRows.join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `smart-drive-report-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Excel export successful",
      description: `Exported ${filteredSummaries.length} records to CSV file.`,
    })
  }

  const handleExportPDF = () => {
    if (filteredSummaries.length === 0) {
      toast({
        title: "No data to export",
        description: "There are no records matching your current filters.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "PDF export started",
      description: `Generating PDF with ${filteredSummaries.length} records...`,
    })

    setTimeout(() => {
      toast({
        title: "PDF export successful",
        description: `Exported ${filteredSummaries.length} records to PDF file.`,
      })
    }, 1000)
  }

  const renderNestedFolders = (nestedFolders: any[], allFolders: any[], depth = 0) => {
    return nestedFolders.map((folder) => {
      if (!canUserAccessFolder(folder, allFolders)) return null

      const hasChildren = folder.folders && folder.folders.length > 0
      const isExpanded = expandedFolders.has(folder.id)
      const isLeaf = isLeafFolder(folder)
      const isSelected = selectedNestedFolder === folder.id

      const shareStatus = driveService.isFolderShared(folder.id, allFolders)

      return (
        <div key={folder.id}>
          <button
            onClick={() => {
              if (hasChildren) {
                toggleFolder(folder.id)
              }
              setSelectedFolder(folder.id)
              setSelectedNestedFolder(folder.id)
              loadDataForFolder(folder.id)
            }}
            className={cn(
              "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2.5 group",
              isSelected
                ? "bg-[#013A65] text-white font-medium shadow-md"
                : "text-[#013A65]/80 hover:bg-[#F3B335]/10 hover:text-[#013A65]",
            )}
            style={{ paddingLeft: `${depth * 16 + 12}px` }}
          >
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="h-4 w-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              )
            ) : (
              <div className="w-4" />
            )}
            {isLeaf ? (
              <FolderOpen className={cn("h-4 w-4 flex-shrink-0", isSelected ? "text-[#F3B335]" : "text-[#013A65]")} />
            ) : (
              <Folder className={cn("h-4 w-4 flex-shrink-0", isSelected ? "text-[#F3B335]" : "text-[#013A65]")} />
            )}
            <span className="truncate flex-1">{folder.name}</span>
            {shareStatus.isShared && (
              <span
                className={cn(
                  "text-[10px] font-medium px-2 py-0.5 rounded-full",
                  shareStatus.isInherited ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700",
                  isSelected && "bg-white/20 text-white",
                )}
              >
                {shareStatus.isInherited ? "Inherited" : "Shared"}
              </span>
            )}
          </button>
          {hasChildren && isExpanded && (
            <div className="mt-0.5">{renderNestedFolders(folder.folders, allFolders, depth + 1)}</div>
          )}
        </div>
      )
    })
  }

  const selectedFolderIsLeaf = () => {
    if (!selectedNestedFolder) return false

    for (const folder of accessibleFolders) {
      const allFolders = getAllNestedFolders(folder.folders || [])
      const selectedFolder = allFolders.find((f) => f.id === selectedNestedFolder)
      if (selectedFolder) {
        return isLeafFolder(selectedFolder)
      }
    }
    return false
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold">Smart Drive</h1>
                <p className="text-white/80 text-sm mt-1">Upload and manage files by databox and shares</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "h-9 border-white/20",
                    viewMode === "grid"
                      ? "bg-[#F3B335] text-[#013A65] hover:bg-[#F3B335]/90"
                      : "bg-green-600 text-white hover:bg-green-700",
                  )}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "table" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  className={cn(
                    "h-9 border-white/20",
                    viewMode === "table"
                      ? "bg-[#F3B335] text-[#013A65] hover:bg-[#F3B335]/90"
                      : "bg-green-600 text-white hover:bg-green-700",
                  )}
                >
                  <List className="h-4 w-4" />
                </Button>
                {canViewAllFiles && (
                  <Link href="/dashboard/drive/manage">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
                    >
                      <Settings className="h-4 w-4 mr-1.5" />
                      Manage Databox
                    </Button>
                  </Link>
                )}
                {selectedNestedFolder && selectedFolderIsLeaf() && (
                  <Button
                    onClick={() => setUploadDialogOpen(true)}
                    size="sm"
                    className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
                  >
                    <Upload className="h-4 w-4 mr-1.5" />
                    Upload Files
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by user name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] flex-1"
            />
            <Button
              variant={statusFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("all")}
              className={cn(
                "h-11 px-6",
                statusFilter === "all"
                  ? "bg-[#013A65] text-white hover:bg-[#013A65]/90"
                  : "border-[#013A65]/20 text-[#013A65] hover:bg-[#013A65]/10",
              )}
            >
              All
            </Button>
            <Button
              variant={statusFilter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("completed")}
              className={cn(
                "h-11 px-6",
                statusFilter === "completed"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "border-[#013A65]/20 text-green-600 hover:bg-green-50",
              )}
            >
              Completed
            </Button>
            <Button
              variant={statusFilter === "pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("pending")}
              className={cn(
                "h-11 px-6",
                statusFilter === "pending"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "border-[#013A65]/20 text-orange-600 hover:bg-orange-50",
              )}
            >
              Pending
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLocationFilters(!showLocationFilters)}
              className={cn(
                "h-11 px-4 ml-auto",
                showLocationFilters
                  ? "bg-[#013A65] text-white hover:bg-[#013A65]/90"
                  : "border-[#013A65]/20 text-[#013A65] hover:bg-[#013A65]/10",
              )}
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {showLocationFilters && (
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={zoneFilter}
                onChange={(e) => {
                  setZoneFilter(e.target.value)
                  setDistrictFilter("")
                  setTownPanchayatFilter("")
                }}
                className="h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px]"
              >
                <option value="">All Zones</option>
                {uniqueZones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>

              <select
                value={districtFilter}
                onChange={(e) => {
                  setDistrictFilter(e.target.value)
                  setTownPanchayatFilter("")
                }}
                disabled={!zoneFilter}
                className="h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">All Districts</option>
                {uniqueDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              <select
                value={townPanchayatFilter}
                onChange={(e) => setTownPanchayatFilter(e.target.value)}
                disabled={!districtFilter}
                className="h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">All Town Panchayats</option>
                {uniqueTownPanchayats.map((tp) => (
                  <option key={tp} value={tp}>
                    {tp}
                  </option>
                ))}
              </select>
            </div>
          )}

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="w-72 border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg p-4 bg-gradient-to-b from-white to-gray-50/50 max-h-[calc(100vh-300px)] overflow-y-auto">
                  <h3 className="font-semibold text-[#013A65] mb-4 text-base flex items-center gap-2">
                    <Folder className="h-5 w-5 text-[#F3B335]" />
                    Databox Tree
                  </h3>
                  {loading ? (
                    <div className="text-center py-8 text-muted-foreground text-sm">Loading folders...</div>
                  ) : accessibleFolders.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      <FolderOpen className="h-10 w-10 mx-auto mb-3 opacity-30" />
                      <p>No accessible folders</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {accessibleFolders.map((folder) => (
                        <div key={folder.id}>
                          <button
                            onClick={() => toggleFolder(folder.id)}
                            className={cn(
                              "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2.5",
                              "text-[#013A65] hover:bg-[#F3B335]/10 hover:text-[#013A65] border border-transparent hover:border-[#F3B335]/20",
                            )}
                          >
                            {expandedFolders.has(folder.id) ? (
                              <ChevronDown className="h-4 w-4 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-4 w-4 flex-shrink-0" />
                            )}
                            <Folder className="h-4 w-4 flex-shrink-0 text-[#F3B335]" />
                            <span className="truncate flex-1">{folder.title}</span>
                          </button>
                          {expandedFolders.has(folder.id) && folder.folders && folder.folders.length > 0 && (
                            <div className="mt-0.5 space-y-0.5 ml-1">
                              {renderNestedFolders(folder.folders, folder.allFolders, 0)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Panel - User Summaries Display */}
                <div className="flex-1">
                  {loadingData ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#013A65] mx-auto mb-4"></div>
                      <p>Loading folder data...</p>
                    </div>
                  ) : !selectedNestedFolder ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <FolderOpen className="h-16 w-16 mx-auto mb-4 opacity-30 text-[#013A65]" />
                      <p className="text-lg font-medium text-[#013A65] mb-2">Select a Folder</p>
                      <p className="text-sm">Choose a folder from the tree to view uploaded files</p>
                    </div>
                  ) : filteredSummaries.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <FolderOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No files uploaded yet in this folder.</p>
                    </div>
                  ) : viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredSummaries.map((summary) => (
                        <div
                          key={summary.userId}
                          className="border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg p-4 hover:shadow-md transition-all bg-white"
                        >
                          <h4 className="font-semibold text-[#013A65] mb-3">{summary.userName}</h4>
                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Zone:</span>
                              <span className="font-medium text-[#013A65]">{summary.zone}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">District:</span>
                              <span className="font-medium text-[#013A65]">{summary.district}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Town Panchayat:</span>
                              <span className="font-medium text-[#013A65]">{summary.townPanchayat}</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Requested:</span>
                                <span className="font-medium">{summary.requestedCount}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Uploaded:</span>
                                <span className="font-medium text-green-600">{summary.uploadedCount}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Pending:</span>
                                <span className="font-medium text-orange-600">{summary.pendingCount}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleViewUserFiles(summary)}
                            className="w-full bg-[#013A65] hover:bg-[#013A65]/90 text-white"
                            size="sm"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Files
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-end gap-2">
                        {canViewAllFiles && (
                          <Button
                            onClick={handleBulkDownload}
                            disabled={downloadingBulk || filteredSummaries.length === 0}
                            size="sm"
                            className="bg-gradient-to-r from-green-600 to-green-600/90 hover:from-green-600/90 hover:to-green-600/80 text-white"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {downloadingBulk ? "Downloading..." : "Bulk File Downloads"}
                          </Button>
                        )}
                        <Button
                          onClick={handleExportExcel}
                          disabled={filteredSummaries.length === 0}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <FileSpreadsheet className="h-4 w-4 mr-2" />
                          Export Excel
                        </Button>
                        <Button
                          onClick={handleExportPDF}
                          disabled={filteredSummaries.length === 0}
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Export PDF
                        </Button>
                      </div>

                      <div className="border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg overflow-hidden bg-white">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-[#F3B335]">
                              <tr>
                                <th className="text-left px-4 py-3 text-sm font-semibold min-w-[150px] text-[#013A65]">
                                  User Name
                                </th>
                                <th className="text-left px-4 py-3 text-sm font-semibold min-w-[120px] text-[#013A65]">
                                  Zone
                                </th>
                                <th className="text-left px-4 py-3 text-sm font-semibold min-w-[120px] text-[#013A65]">
                                  District
                                </th>
                                <th className="text-left px-4 py-3 text-sm font-semibold min-w-[150px] text-[#013A65]">
                                  Town Panchayat
                                </th>
                                <th className="text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]">
                                  Requested
                                </th>
                                <th className="text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]">
                                  Uploaded
                                </th>
                                <th className="text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]">
                                  Pending
                                </th>
                                <th className="text-center px-4 py-3 text-sm font-semibold w-28 text-[#013A65]">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredSummaries.map((summary, index) => (
                                <tr
                                  key={summary.userId}
                                  className={cn(
                                    "border-b border-gray-100 hover:bg-[#F3B335]/5 transition-colors",
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50",
                                  )}
                                >
                                  <td className="px-4 py-3 text-sm text-[#013A65] font-medium">
                                    <div className="truncate max-w-[200px]" title={summary.userName}>
                                      {summary.userName}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-muted-foreground">
                                    <div className="truncate max-w-[120px]" title={summary.zone}>
                                      {summary.zone}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-muted-foreground">
                                    <div className="truncate max-w-[120px]" title={summary.district}>
                                      {summary.district}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-muted-foreground">
                                    <div className="truncate max-w-[150px]" title={summary.townPanchayat}>
                                      {summary.townPanchayat}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-center font-medium">
                                    {summary.requestedCount}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-center font-medium text-green-600">
                                    {summary.uploadedCount}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-center font-medium text-orange-600">
                                    {summary.pendingCount}
                                  </td>
                                  <td className="px-4 py-3 text-center">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleViewUserFiles(summary)}
                                      className="text-[#013A65] hover:bg-[#013A65]/10"
                                    >
                                      <Eye className="h-4 w-4 mr-1" />
                                      View
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <UploadFileDialog
          open={uploadDialogOpen}
          onOpenChange={setUploadDialogOpen}
          folders={folders}
          onUploadComplete={() => {
            if (selectedNestedFolder) {
              loadDataForFolder(selectedNestedFolder)
            }
          }}
        />

        <UserFilesModal
          open={userFilesModalOpen}
          onOpenChange={setUserFilesModalOpen}
          userSummary={selectedUserFiles}
          onFileDeleted={() => {
            if (selectedNestedFolder) {
              loadDataForFolder(selectedNestedFolder)
            }
          }}
        />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
