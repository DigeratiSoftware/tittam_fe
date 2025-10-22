"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Trash2, User, Calendar, Plus, Database } from "lucide-react"
import { subComponentService, type SubComponent } from "@/services/sub-component-service"
import { componentService, type Component } from "@/services/component-service"
import { CreateSubComponentDialog } from "./create-sub-component-dialog"
import { EditSubComponentDialog } from "./edit-sub-component-dialog"

export function SubComponentManagement() {
  const [subComponents, setSubComponents] = useState<SubComponent[]>([])
  const [components, setComponents] = useState<Component[]>([])
  const [selectedComponentId, setSelectedComponentId] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [subComponentsLoading, setSubComponentsLoading] = useState(false)
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editingSubComponent, setEditingSubComponent] = useState<SubComponent | null>(null)

  useEffect(() => {
    loadComponents()
  }, [])

  useEffect(() => {
    if (selectedComponentId) {
      loadSubComponents()
    } else {
      setSubComponents([])
    }
  }, [selectedComponentId])

  const loadComponents = async () => {
    try {
      const data = await componentService.getAllComponents()
      setComponents(data)
    } catch (error) {
      console.error("Failed to load components:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadSubComponents = async () => {
    if (!selectedComponentId) return

    try {
      setSubComponentsLoading(true)
      const data = await subComponentService.getSubComponentsByComponent(selectedComponentId)
      setSubComponents(data)
    } catch (error) {
      console.error("Failed to load sub components:", error)
    } finally {
      setSubComponentsLoading(false)
    }
  }

  const handleCreateSubComponent = async (subComponentData: any) => {
    try {
      const selectedComponent = components.find((c) => c.id === selectedComponentId)
      await subComponentService.createSubComponent({
        ...subComponentData,
        componentId: selectedComponentId,
        componentName: selectedComponent?.englishName || "",
      })
      loadSubComponents()
      setCreateDialogOpen(false)
    } catch (error) {
      console.error("Failed to create sub component:", error)
    }
  }

  const handleEditSubComponent = async (subComponentData: any) => {
    if (!editingSubComponent) return

    try {
      await subComponentService.updateSubComponent(editingSubComponent.id, subComponentData)
      loadSubComponents()
      setEditDialogOpen(false)
      setEditingSubComponent(null)
    } catch (error) {
      console.error("Failed to update sub component:", error)
    }
  }

  const handleDeleteSubComponent = async (id: string) => {
    if (confirm("Are you sure you want to delete this sub component?")) {
      try {
        await subComponentService.deleteSubComponent(id)
        loadSubComponents()
      } catch (error) {
        console.error("Failed to delete sub component:", error)
      }
    }
  }

  const openEditDialog = (subComponent: SubComponent) => {
    setEditingSubComponent(subComponent)
    setEditDialogOpen(true)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg mb-6">
        <div>
          <h1 className="text-xl font-semibold">Sub Component Management</h1>
          <p className="text-white/80 text-sm mt-1">Manage sub components for your selected component</p>
        </div>
      </div>

      <div className="flex-shrink-0 mb-6">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-4">
            <div>
              <label className="block text-sm font-medium text-[#013A65] mb-2">Select Component</label>
              <Select value={selectedComponentId} onValueChange={setSelectedComponentId}>
                <SelectTrigger className="h-9 w-72">
                  <SelectValue placeholder="Choose a component" />
                </SelectTrigger>
                <SelectContent className="border border-[#EDEEF0]">
                  {components.map((component) => (
                    <SelectItem key={component.id} value={component.id} className="hover:bg-[#F8F8F8]">
                      {component.englishName} / {component.tamilName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedComponentId && (
            <div>
              <Button
                onClick={() => setCreateDialogOpen(true)}
                size="sm"
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Sub Component
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-auto">
        {selectedComponentId ? (
          <div>
            {subComponentsLoading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="animate-pulse border-0 shadow-lg bg-[#F8F8F8]">
                    <CardContent className="p-4">
                      <div className="h-4 bg-[#EDEEF0] rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-[#EDEEF0] rounded w-1/2"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : subComponents.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {subComponents.map((subComponent) => (
                  <Card
                    key={subComponent.id}
                    className="group border-0 shadow-lg bg-[#F8F8F8] transition-shadow duration-200 hover:shadow-xl"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-lg font-semibold text-[#013A65] truncate">{subComponent.englishName}</h3>
                          <p className="font-medium text-[#013A65]/70 text-sm truncate">{subComponent.tamilName}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(subComponent)}
                            className="text-[#013A65] hover:text-[#013A65]/80 hover:bg-[#F3B335]/20 h-7 w-7 p-0"
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteSubComponent(subComponent.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 h-7 w-7 p-0"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#EDEEF0]">
                        <div className="flex items-center gap-2 text-xs text-[#013A65]/60">
                          <Calendar className="h-3 w-3 text-[#F3B335]" />
                          <span>{subComponent.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#013A65]/60">
                          <User className="h-3 w-3 text-[#013A65]" />
                          <span>{subComponent.createdBy}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12 border-0 shadow-xl bg-[#F8F8F8]">
                <CardContent>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#F3B335]/20 to-[#013A65]/20 rounded-xl flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-[#013A65]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#013A65]">No sub components found</h3>
                  <p className="text-sm text-[#013A65]/70 mb-4 max-w-md mx-auto">
                    No sub components found for the selected component. Create your first sub component to get started.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card className="text-center py-12 border-0 shadow-xl bg-[#F8F8F8]">
            <CardContent>
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#F3B335]/20 to-[#013A65]/20 rounded-xl flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-[#013A65]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#013A65]">No sub components found</h3>
              <p className="text-sm text-[#013A65]/70 mb-4 max-w-md mx-auto">
                Select component to view and manage sub components.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Dialogs */}
      <CreateSubComponentDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSubmit={handleCreateSubComponent}
      />

      {editingSubComponent && (
        <EditSubComponentDialog
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          onSubmit={handleEditSubComponent}
          subComponent={editingSubComponent}
        />
      )}
    </div>
  )
}
