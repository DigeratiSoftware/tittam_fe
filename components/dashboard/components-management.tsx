"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit } from "lucide-react"
import { componentService, type Component } from "@/services/component-service"
import CreateComponentDialog from "./create-component-dialog"
import EditComponentDialog from "./edit-component-dialog"
import { useToast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComponentsManagement() {
  const [components, setComponents] = useState<Component[]>([])
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [componentToEdit, setComponentToEdit] = useState<Component | null>(null)
  const { toast } = useToast()

  const loadComponents = async () => {
    try {
      setIsLoading(true)
      const data = await componentService.getAllComponents()
      setComponents(data)
      setFilteredComponents(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load components",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadComponents()
  }, [])

  useEffect(() => {
    const filtered = components.filter(
      (component) =>
        component.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.tamilName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.componentType?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredComponents(filtered)
  }, [searchTerm, components])

  const handleComponentCreated = () => {
    loadComponents()
    setIsCreateDialogOpen(false)
    toast({
      title: "Success",
      description: "Component created successfully",
    })
  }

  const handleComponentUpdated = () => {
    loadComponents()
    setIsEditDialogOpen(false)
    setComponentToEdit(null)
    toast({
      title: "Success",
      description: "Component updated successfully",
    })
  }

  const handleEditComponent = (component: Component) => {
    setComponentToEdit(component)
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Components Management</h1>
            <p className="text-white/80 text-sm mt-1">Manage all components with Tamil and English names</p>
          </div>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            size="sm"
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Component
          </Button>
        </div>
      </div>

      <div className="bg-[#EDEEF0]/30 p-4 rounded-lg">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/50 h-4 w-4" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-[#EDEEF0] focus:border-[#F3B335] focus:ring-[#F3B335]/20 h-9"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
              <TableHead className="text-[#013A65] font-semibold">English Name</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Tamil Name</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Component Type</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Remark</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Updated By</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 bg-[#EDEEF0] rounded animate-pulse"></div>
                  </TableCell>
                </TableRow>
              ))
            ) : filteredComponents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <div className="text-[#013A65]/60">
                    {searchTerm ? "No components found matching your search." : "No components found."}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredComponents.map((component) => (
                <TableRow key={component.id} className="hover:bg-[#F8F8F8]/50">
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="truncate max-w-[200px] cursor-help text-[#013A65] font-medium">
                            {component.englishName}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{component.englishName}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="truncate max-w-[200px] cursor-help text-[#013A65]/70">
                            {component.tamilName}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{component.tamilName}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#F3B335]/20 text-[#013A65] border-[#F3B335]/30">
                      {component.componentType || "NA"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="truncate max-w-[150px] cursor-help text-[#013A65]/70">
                            {component.remark || "No remark"}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{component.remark || "No remark"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-[#013A65]/70">{component.createdBy}</TableCell>
                  <TableCell className="text-[#013A65]/70">{component.updatedBy || component.createdBy}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#013A65] hover:text-[#013A65]/80 hover:bg-[#F3B335]/20 h-8 w-8 p-0"
                      onClick={() => handleEditComponent(component)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <CreateComponentDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onComponentCreated={handleComponentCreated}
      />

      <EditComponentDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onComponentUpdated={handleComponentUpdated}
        component={componentToEdit}
      />
    </div>
  )
}
