"use client"

import { useState, useEffect } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Plus, FolderPlus, Edit, Trash2, ChevronDown, ChevronRight, Folder } from "lucide-react"
import { driveService, type DriveFolder, type DriveNestedFolder } from "@/services/drive-service"
import { CreateFolderDialog } from "@/components/drive/create-folder-dialog"
import { CreateNestedFolderDialog } from "@/components/drive/create-nested-folder-dialog"
import { CreateSubfolderDialog } from "@/components/drive/create-subfolder-dialog"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

export default function DriveManagePage() {
  const { user } = useAuth()
  const [folders, setFolders] = useState<DriveFolder[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedDataboxes, setExpandedDataboxes] = useState<Set<string>>(new Set())
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())
  const [createDataboxOpen, setCreateDataboxOpen] = useState(false)
  const [createFolderOpen, setCreateFolderOpen] = useState(false)
  const [createSubfolderOpen, setCreateSubfolderOpen] = useState(false)
  const [selectedDatabox, setSelectedDatabox] = useState<DriveFolder | null>(null)
  const [selectedParentFolder, setSelectedParentFolder] = useState<DriveNestedFolder | null>(null)
  const [editingDatabox, setEditingDatabox] = useState<DriveFolder | null>(null)
  const [editingFolder, setEditingFolder] = useState<DriveNestedFolder | null>(null)

  useEffect(() => {
    loadFolders()
  }, [])

  const loadFolders = async () => {
    setLoading(true)
    try {
      const data = await driveService.getFolders()
      setFolders(data)
    } catch (error) {
      console.error("Failed to load folders:", error)
    } finally {
      setLoading(false)
    }
  }

  const toggleDatabox = (databoxId: string) => {
    const newExpanded = new Set(expandedDataboxes)
    if (newExpanded.has(databoxId)) {
      newExpanded.delete(databoxId)
    } else {
      newExpanded.add(databoxId)
    }
    setExpandedDataboxes(newExpanded)
  }

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const handleDeleteFolder = async (folderId: string) => {
    if (!confirm("Are you sure you want to delete this folder and all its contents?")) return
    try {
      await driveService.deleteFolder(folderId)
      await loadFolders()
    } catch (error) {
      console.error("Failed to delete folder:", error)
    }
  }

  const handleDeleteNestedFolder = async (folderId: string) => {
    if (!confirm("Are you sure you want to delete this folder and all its contents?")) return
    try {
      await driveService.deleteNestedFolder(folderId)
      await loadFolders()
    } catch (error) {
      console.error("Failed to delete folder:", error)
    }
  }

  const openCreateFolder = (databox: DriveFolder, parentFolder?: DriveNestedFolder) => {
    setSelectedDatabox(databox)
    setSelectedParentFolder(parentFolder || null)
    setEditingFolder(null)
    setCreateFolderOpen(true)
  }

  const openEditFolder = (databox: DriveFolder, folder: DriveNestedFolder) => {
    setSelectedDatabox(databox)
    setEditingFolder(folder)
    setCreateFolderOpen(true)
  }

  const handleToggleShare = async (databox: DriveFolder, folder: DriveNestedFolder) => {
    if (folder.shareConfig) {
      if (!confirm("Are you sure you want to unshare this folder? This will remove all sharing permissions.")) return
      try {
        await driveService.updateNestedFolder(folder.id, { shareConfig: undefined })
        await loadFolders()
      } catch (error) {
        console.error("Failed to unshare folder:", error)
      }
    } else {
      openShareFolder(databox, folder)
    }
  }

  const openShareFolder = (databox: DriveFolder, folder: DriveNestedFolder) => {
    setSelectedDatabox(databox)
    setEditingFolder(folder)
    setCreateSubfolderOpen(true)
  }

  const handleToggleDataboxShare = async (databox: DriveFolder) => {
    if (databox.shareConfig) {
      if (
        !confirm(
          "Are you sure you want to unshare this databox? This will remove sharing from all folders and subfolders within it.",
        )
      )
        return
      try {
        await driveService.updateFolder(databox.id, { shareConfig: undefined })
        await loadFolders()
      } catch (error) {
        console.error("Failed to unshare databox:", error)
      }
    } else {
      openShareDatabox(databox)
    }
  }

  const openShareDatabox = (databox: DriveFolder) => {
    setSelectedDatabox(databox)
    setEditingFolder(null)
    setCreateSubfolderOpen(true)
  }

  const renderFolder = (databox: DriveFolder, folder: DriveNestedFolder, depth = 0) => {
    const hasChildren = folder.folders && folder.folders.length > 0
    const isExpanded = expandedFolders.has(folder.id)

    const allFolders = getAllNestedFolders(databox.folders)
    const shareStatus = driveService.isFolderShared(folder.id, allFolders, [databox])
    const isShared = shareStatus.isShared
    const isInherited = shareStatus.isInherited
    const inheritedFrom = shareStatus.inheritedFrom

    return (
      <div key={folder.id} style={{ marginLeft: `${depth * 24}px` }}>
        <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              {hasChildren && (
                <button
                  onClick={() => toggleFolder(folder.id)}
                  className="text-[#013A65] hover:bg-[#013A65]/10 p-1 rounded"
                >
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
              )}
              <Folder className="h-4 w-4 text-[#013A65]" />
              <div className="flex-1">
                <h4 className="font-semibold text-[#013A65]">{folder.name}</h4>
                {isShared && (
                  <span className={cn("text-xs font-medium", isInherited ? "text-blue-600" : "text-green-600")}>
                    ●{" "}
                    {isInherited
                      ? `Shared (Inherited from ${inheritedFrom === "databox" ? "Databox" : "Parent"})`
                      : "Shared"}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => openCreateFolder(databox, folder)}
                className="text-green-600 border-green-600/20 hover:bg-green-600/10"
              >
                <FolderPlus className="h-3 w-3 mr-1" />
                Folder
              </Button>
              {!isInherited && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleToggleShare(databox, folder)}
                  className={
                    isShared
                      ? "text-red-600 border-red-600/20 hover:bg-red-600/10"
                      : "text-[#F3B335] border-[#F3B335]/20 hover:bg-[#F3B335]/10"
                  }
                >
                  {isShared ? "Unshare" : "Share"}
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={() => openEditFolder(databox, folder)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDeleteNestedFolder(folder.id)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        </div>

        {isExpanded && hasChildren && (
          <div className="ml-6 space-y-2">
            {folder.folders?.map((childFolder) => renderFolder(databox, childFolder, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  const getAllNestedFolders = (folders: DriveNestedFolder[]): DriveNestedFolder[] => {
    const result: DriveNestedFolder[] = []
    const traverse = (folderList: DriveNestedFolder[]) => {
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

  return (
    <ProtectedRoute allowedRoles={["admin", "manager"]}>
      <DashboardLayout>
        <div className="flex flex-col h-full">
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Databox Management</h1>
                <p className="text-white/80">Create and manage databox, shares, and access permissions</p>
              </div>
              <Button
                onClick={() => {
                  setEditingDatabox(null)
                  setCreateDataboxOpen(true)
                }}
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Databox
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">Loading databox...</div>
            ) : folders.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <FolderPlus className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No databox yet. Create your first databox to get started.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {folders.map((databox) => (
                  <div key={databox.id} className="bg-white border-l-4 border-[#F3B335] rounded-lg shadow-sm">
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <button
                          onClick={() => toggleDatabox(databox.id)}
                          className="text-[#013A65] hover:bg-[#013A65]/10 p-1 rounded"
                        >
                          {expandedDataboxes.has(databox.id) ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </button>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#013A65] text-lg">{databox.title}</h3>
                          {databox.description && (
                            <p className="text-sm text-muted-foreground">{databox.description}</p>
                          )}
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs text-muted-foreground">
                              {databox.folders?.length || 0} folder{databox.folders?.length !== 1 ? "s" : ""}
                            </p>
                            {databox.shareConfig && (
                              <span className="text-xs font-medium text-green-600">● Shared</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openCreateFolder(databox)}
                          className="text-green-600 border-green-600/20 hover:bg-green-600/10"
                        >
                          <FolderPlus className="h-4 w-4 mr-1" />
                          Add Folder
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleDataboxShare(databox)}
                          className={
                            databox.shareConfig
                              ? "text-red-600 border-red-600/20 hover:bg-red-600/10"
                              : "text-[#F3B335] border-[#F3B335]/20 hover:bg-[#F3B335]/10"
                          }
                        >
                          {databox.shareConfig ? "Unshare" : "Share"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setEditingDatabox(databox)
                            setCreateDataboxOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteFolder(databox.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>

                    {expandedDataboxes.has(databox.id) && databox.folders?.length > 0 && (
                      <div className="border-t bg-gray-50 p-4">
                        <div className="space-y-3">
                          {databox.folders?.map((folder) => renderFolder(databox, folder, 0))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <CreateFolderDialog
          open={createDataboxOpen}
          onOpenChange={setCreateDataboxOpen}
          onSuccess={loadFolders}
          editingFolder={editingDatabox}
        />
        <CreateNestedFolderDialog
          open={createFolderOpen}
          onOpenChange={setCreateFolderOpen}
          onSuccess={loadFolders}
          databox={selectedDatabox}
          parentFolder={selectedParentFolder}
          editingFolder={editingFolder}
        />
        <CreateSubfolderDialog
          open={createSubfolderOpen}
          onOpenChange={setCreateSubfolderOpen}
          onSuccess={loadFolders}
          folder={selectedDatabox}
          parentFolder={editingFolder}
        />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
