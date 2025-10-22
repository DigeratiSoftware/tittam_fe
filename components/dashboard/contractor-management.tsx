"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Users, Eye, Edit, Trash2, Search, Loader2 } from "lucide-react"
import { contractorService, type Contractor } from "@/services/contractor-service"
import { useAuth } from "@/hooks/use-auth"

export function ContractorManagement() {
  const { user } = useAuth()
  const [contractors, setContractors] = useState<Contractor[]>([])
  const [filteredContractors, setFilteredContractors] = useState<Contractor[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [viewContractorDialog, setViewContractorDialog] = useState(false)
  const [editContractorDialog, setEditContractorDialog] = useState(false)
  const [createContractorDialog, setCreateContractorDialog] = useState(false)
  const [selectedContractor, setSelectedContractor] = useState<Contractor | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
    panNumber: "",
    specialization: "",
    experience: "",
    status: "active" as "active" | "inactive",
  })

  useEffect(() => {
    loadContractors()
  }, [])

  useEffect(() => {
    let filtered = contractors

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (contractor) =>
          contractor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contractor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contractor.phone.includes(searchTerm) ||
          contractor.specialization.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((contractor) => contractor.status === statusFilter)
    }

    setFilteredContractors(filtered)
  }, [searchTerm, statusFilter, contractors])

  const loadContractors = async () => {
    try {
      setIsLoading(true)
      const data = await contractorService.getContractors()
      setContractors(data)
      setFilteredContractors(data)
    } catch (error) {
      console.error("Failed to load contractors:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const viewContractorDetails = (contractor: Contractor) => {
    setSelectedContractor(contractor)
    setViewContractorDialog(true)
  }

  const editContractor = (contractor: Contractor) => {
    setSelectedContractor(contractor)
    setFormData({
      name: contractor.name,
      email: contractor.email,
      phone: contractor.phone,
      address: contractor.address,
      gstNumber: contractor.gstNumber,
      panNumber: contractor.panNumber,
      specialization: contractor.specialization,
      experience: contractor.experience.toString(),
      status: contractor.status,
    })
    setEditContractorDialog(true)
  }

  const deleteContractor = async (contractorId: string) => {
    if (confirm("Are you sure you want to delete this contractor?")) {
      try {
        await contractorService.deleteContractor(contractorId)
        await loadContractors()
      } catch (error) {
        console.error("Failed to delete contractor:", error)
        alert("Failed to delete contractor. Please try again.")
      }
    }
  }

  const handleCreateContractor = async () => {
    try {
      await contractorService.createContractor({
        ...formData,
        experience: Number.parseInt(formData.experience) || 0,
        createdBy: user?.name || "Admin",
      })
      setCreateContractorDialog(false)
      resetForm()
      await loadContractors()
      alert("Contractor created successfully!")
    } catch (error) {
      console.error("Failed to create contractor:", error)
      alert("Failed to create contractor. Please try again.")
    }
  }

  const handleUpdateContractor = async () => {
    if (!selectedContractor) return

    try {
      await contractorService.updateContractor(selectedContractor.id, {
        ...formData,
        experience: Number.parseInt(formData.experience) || 0,
      })
      setEditContractorDialog(false)
      await loadContractors()
      alert("Contractor updated successfully!")
    } catch (error) {
      console.error("Failed to update contractor:", error)
      alert("Failed to update contractor. Please try again.")
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      gstNumber: "",
      panNumber: "",
      specialization: "",
      experience: "",
      status: "active",
    })
  }

  const openCreateDialog = () => {
    resetForm()
    setCreateContractorDialog(true)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Contractor Management</h1>
            <p className="text-white/80 text-sm mt-1">
              Manage contractor details, view profiles, and track contractor information
            </p>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
            onClick={openCreateDialog}
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Contractor
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
                  placeholder="Search contractors..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center gap-2 text-[#013A65]/70">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading contractors...</span>
              </div>
            </div>
          ) : filteredContractors.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-[#013A65]/60" />
              </div>
              <h3 className="text-lg font-medium text-[#013A65] mb-2">No contractors found</h3>
              <p className="text-[#013A65]/70 mb-4">
                {searchTerm || statusFilter !== "all"
                  ? "No contractors match your search criteria."
                  : "Get started by adding your first contractor."}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-medium"
                  onClick={openCreateDialog}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contractor
                </Button>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                  <TableHead className="text-[#013A65] font-semibold">Name</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Email</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Phone</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Specialization</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Experience</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
                  <TableHead className="text-[#013A65] font-semibold">Created Date</TableHead>
                  <TableHead className="text-[#013A65] font-semibold w-32">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContractors.map((contractor) => (
                  <TableRow key={contractor.id} className="hover:bg-[#F8F8F8]/50">
                    <TableCell className="font-medium text-[#013A65] max-w-xs truncate" title={contractor.name}>
                      {contractor.name}
                    </TableCell>
                    <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={contractor.email}>
                      {contractor.email}
                    </TableCell>
                    <TableCell className="text-[#013A65]/80">{contractor.phone}</TableCell>
                    <TableCell className="text-[#013A65]/80 max-w-xs truncate" title={contractor.specialization}>
                      {contractor.specialization}
                    </TableCell>
                    <TableCell className="text-[#013A65]/80">{contractor.experience} years</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          contractor.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {contractor.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-[#013A65]/70">
                      {new Date(contractor.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                          onClick={() => viewContractorDetails(contractor)}
                          title="View Details"
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 bg-transparent"
                          onClick={() => editContractor(contractor)}
                          title="Edit Contractor"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 border-[#EDEEF0] hover:bg-red-50 hover:border-red-200 text-red-500 bg-transparent"
                          onClick={() => deleteContractor(contractor.id)}
                          title="Delete Contractor"
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
      </div>

      {/* View Contractor Dialog */}
      <Dialog open={viewContractorDialog} onOpenChange={setViewContractorDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#013A65]">
              <Eye className="h-5 w-5 text-[#013A65]" />
              Contractor Details
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">
              Complete details for {selectedContractor?.name}
            </DialogDescription>
          </DialogHeader>

          {selectedContractor && (
            <Card className="border-[#EDEEF0] bg-white">
              <CardHeader className="bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] border-b border-[#EDEEF0]">
                <CardTitle className="text-base font-semibold text-[#013A65]">Contractor Information</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Name</Label>
                    <p className="text-sm text-[#013A65] font-medium">{selectedContractor.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Email</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Phone</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.phone}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Status</Label>
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        selectedContractor.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedContractor.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <Label className="text-sm font-medium text-[#013A65]/70">Address</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.address}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">GST Number</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.gstNumber}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">PAN Number</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.panNumber}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Specialization</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.specialization}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Experience</Label>
                    <p className="text-sm text-[#013A65]">{selectedContractor.experience} years</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Created By</Label>
                    <span className="bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] px-2 py-1 rounded text-xs font-medium">
                      {selectedContractor.createdBy}
                    </span>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#013A65]/70">Created Date</Label>
                    <p className="text-sm text-[#013A65]">{new Date(selectedContractor.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>

      {/* Create/Edit Contractor Dialog */}
      <Dialog
        open={createContractorDialog || editContractorDialog}
        onOpenChange={(open) => {
          if (!open) {
            setCreateContractorDialog(false)
            setEditContractorDialog(false)
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#013A65]">
              {createContractorDialog ? <Plus className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
              {createContractorDialog ? "Add New Contractor" : "Edit Contractor"}
            </DialogTitle>
            <DialogDescription className="text-[#013A65]/70">
              {createContractorDialog
                ? "Enter contractor details to add them to the system"
                : "Update contractor information"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter contractor name"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Email *</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Phone *</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: "active" | "inactive") => setFormData((prev) => ({ ...prev, status: value }))}
                >
                  <SelectTrigger className="h-10 bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label className="text-sm font-medium text-[#013A65]">Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">GST Number</Label>
                <Input
                  value={formData.gstNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, gstNumber: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter GST number"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">PAN Number</Label>
                <Input
                  value={formData.panNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, panNumber: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter PAN number"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Specialization</Label>
                <Input
                  value={formData.specialization}
                  onChange={(e) => setFormData((prev) => ({ ...prev, specialization: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter specialization"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#013A65]">Experience (Years)</Label>
                <Input
                  type="number"
                  value={formData.experience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                  className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                  placeholder="Enter years of experience"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setCreateContractorDialog(false)
                  setEditContractorDialog(false)
                }}
                className="border-[#EDEEF0] hover:bg-[#F8F8F8]"
              >
                Cancel
              </Button>
              <Button
                onClick={createContractorDialog ? handleCreateContractor : handleUpdateContractor}
                className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65] text-white"
              >
                {createContractorDialog ? "Create Contractor" : "Update Contractor"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
