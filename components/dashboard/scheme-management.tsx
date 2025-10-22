"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Trash2, Edit, Search, Loader2 } from "lucide-react"
import { schemeService, type Scheme } from "@/services/scheme-service"
import CreateSchemeDialog from "./create-scheme-dialog"
import EditSchemeDialog from "./edit-scheme-dialog"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export { SchemeManagement }

export default function SchemeManagement() {
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [schemeToEdit, setSchemeToEdit] = useState<Scheme | null>(null)
  const [schemeToDelete, setSchemeToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  const loadSchemes = async () => {
    try {
      setIsLoading(true)
      const data = await schemeService.getAllSchemes()
      setSchemes(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load schemes",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadSchemes()
  }, [])

  const handleSchemeCreated = () => {
    loadSchemes()
    setIsCreateDialogOpen(false)
    toast({
      title: "Success",
      description: "Scheme created successfully",
    })
  }

  const handleSchemeUpdated = () => {
    loadSchemes()
    setIsEditDialogOpen(false)
    setSchemeToEdit(null)
    toast({
      title: "Success",
      description: "Scheme updated successfully",
    })
  }

  const handleEditScheme = (scheme: Scheme) => {
    setSchemeToEdit(scheme)
    setIsEditDialogOpen(true)
  }

  const handleDeleteScheme = async (schemeId: string) => {
    try {
      await schemeService.deleteScheme(schemeId)
      loadSchemes()
      toast({
        title: "Success",
        description: "Scheme deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete scheme",
        variant: "destructive",
      })
    }
    setSchemeToDelete(null)
  }

  const filteredSchemes = schemes.filter(
    (scheme) =>
      scheme.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.tamilName.includes(searchTerm) ||
      scheme.englishAbbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (scheme.funding && scheme.funding.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Scheme Management</h1>
            <p className="text-white/80 text-sm mt-1">Manage schemes and their configurations</p>
          </div>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            size="sm"
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Create Scheme
          </Button>
        </div>
      </div>

      <div className="flex flex-col h-full bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
        <div className="flex-shrink-0 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/60 h-4 w-4" />
                <Input
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-9 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {/* Content */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center gap-2 text-[#013A65]/70">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading schemes...</span>
              </div>
            </div>
          ) : filteredSchemes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-[#013A65]/60" />
              </div>
              <h3 className="text-lg font-medium text-[#013A65] mb-2">No schemes found</h3>
              <p className="text-[#013A65]/70 mb-4">
                {searchTerm ? "No schemes match your search criteria." : "Get started by creating your first scheme."}
              </p>
              {!searchTerm && (
                <Button
                  onClick={() => setIsCreateDialogOpen(true)}
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Scheme
                </Button>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                  <TableHead className="text-[#013A65] font-semibold">Abbreviation</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">English Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Tamil Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Remark</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Created By</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Updated By</TableHead>
                  <TableHead className="text-[#013A65] font-semibold w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSchemes.map((scheme) => (
                  <TableRow key={scheme.id} className="hover:bg-[#F8F8F8]/50">
                    <TableCell>
                      <span className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] px-2 py-1 rounded text-xs font-medium">
                        {scheme.englishAbbreviation}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={scheme.englishName}>
                      {scheme.englishName}
                    </TableCell>
                    <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={scheme.tamilName}>
                      {scheme.tamilName}
                    </TableCell>
                    <TableCell className="text-[#013A65]/70 max-w-xs truncate" title={scheme.funding || "No remark"}>
                      {scheme.funding || "No remark"}
                    </TableCell>
                    <TableCell className="text-[#013A65]/70">{scheme.createdBy}</TableCell>
                    <TableCell className="text-[#013A65]/70">{scheme.createdBy}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditScheme(scheme)}
                          className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSchemeToDelete(scheme.id)}
                          className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-red-50 hover:border-red-200 text-red-500"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        {/* Dialogs */}
        <CreateSchemeDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSchemeCreated={handleSchemeCreated}
        />

        <EditSchemeDialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          onSchemeUpdated={handleSchemeUpdated}
          scheme={schemeToEdit}
        />

        <AlertDialog open={!!schemeToDelete} onOpenChange={() => setSchemeToDelete(null)}>
          <AlertDialogContent className="border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg font-semibold text-[#013A65]">Delete Scheme</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-[#013A65]/70 leading-relaxed">
                Are you sure you want to delete this scheme? This action cannot be undone and will also delete all
                associated components and fields.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="border-[#EDEEF0] hover:bg-[#EDEEF0]/50 h-9 px-4 text-sm text-[#013A65]">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => schemeToDelete && handleDeleteScheme(schemeToDelete)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
