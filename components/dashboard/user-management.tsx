"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Edit, Search } from "lucide-react"
import { toast } from "sonner"
import { userService, type User } from "@/services/user-service"
import CreateUserDialog from "./create-user-dialog"
import EditUserDialog from "./edit-user-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    loadUsers()
  }, [])

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredUsers(filtered)
  }, [searchTerm, users])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const data = await userService.getUsers()
      setUsers(data)
      setFilteredUsers(data)
    } catch (error) {
      toast.error("Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  const handleCreateUser = async (userData: Omit<User, "id" | "createdAt">) => {
    try {
      await userService.createUser(userData)
      toast.success("User created successfully")
      loadUsers()
      setIsCreateDialogOpen(false)
    } catch (error) {
      toast.error("Failed to create user")
    }
  }

  const handleEditUser = async (userId: string, password: string) => {
    try {
      await userService.updatePassword(userId, { newPassword: password })
      toast.success("User password updated successfully")
      loadUsers()
    } catch (error) {
      console.error(error)
      toast.error("Failed to update user password")
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      await userService.deleteUser(userId)
      toast.success("User deleted successfully")
      loadUsers()
    } catch (error) {
      toast.error("Failed to delete user")
    }
  }

  const handleToggleStatus = async (userId: string, currentStatus: boolean) => {
    try {
      if (currentStatus) {
        await userService.deactivateUser(userId)
        toast.success("User deactivated successfully")
      } else {
        await userService.activateUser(userId)
        toast.success("User activated successfully")
      }
      loadUsers()
    } catch (error) {
      toast.error("Failed to update user status")
    }
  }

  const openEditDialog = (user: User) => {
    setSelectedUser(user)
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">User Management</h1>
            <p className="text-white/80 text-sm mt-1">Manage users and their roles</p>
          </div>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            size="sm"
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create User
          </Button>
        </div>
      </div>

      <div className="bg-[#EDEEF0]/30 p-4 rounded-lg">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#013A65]/50 h-4 w-4" />
          <Input
            placeholder="Search users..."
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
              <TableHead className="text-[#013A65] font-semibold">Name</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Email</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Phone</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Role</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
              <TableHead className="text-[#013A65] font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
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
                </TableRow>
              ))
            ) : filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <div className="text-[#013A65]/60">
                    {searchTerm ? "No users found matching your search." : "No users found."}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-[#F8F8F8]/50">
                  <TableCell className="font-medium text-[#013A65]">{user.name}</TableCell>
                  <TableCell className="text-[#013A65]/70">{user.email}</TableCell>
                  <TableCell className="text-[#013A65]/70">{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#F3B335]/20 text-[#013A65] border-[#F3B335]/30">
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleToggleStatus(user.id, user.isActive)}
                      className="h-8 px-3 hover:bg-transparent"
                    >
                      <Badge
                        variant={user.isActive ? "default" : "secondary"}
                        className={`text-xs cursor-pointer transition-all duration-200 ${
                          user.isActive
                            ? "bg-green-500 text-white hover:bg-green-600 shadow-sm"
                            : "bg-red-500 text-white hover:bg-red-600 shadow-sm"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditDialog(user)}
                        className="text-[#013A65] hover:text-[#013A65]/80 hover:bg-[#F3B335]/20 h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="border-0 shadow-2xl bg-[#F8F8F8] backdrop-blur-sm">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-lg font-semibold text-[#013A65]">
                              Delete User
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-sm text-[#013A65]/70 leading-relaxed">
                              Are you sure you want to delete "{user.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-[#EDEEF0] hover:bg-[#EDEEF0]/50 h-9 px-4 text-sm text-[#013A65]">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteUser(user.id)}
                              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg h-9 px-4 text-sm"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <CreateUserDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateUser={handleCreateUser}
      />

      <EditUserDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onEditUser={handleEditUser}
        user={selectedUser}
      />
    </div>
  )
}
