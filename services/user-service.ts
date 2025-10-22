import { apiClient } from "../lib/api-client"

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: string
  isActive: boolean
  createdAt: string
  fullName?: string
  userId: string
}

export interface CreateUserRequest {
  name: string
  email: string
  password: string
  role: string
  phone?: string
  isActive?: boolean
}

export interface UpdatePasswordRequest {
  newPassword: string
}

const BASE_ENDPOINT = "/api/v1/users"

class UserService {
  // ---------------- GET ALL USERS ----------------
  async getUsers(): Promise<User[]> {
    const response = await apiClient.get<any[]>(`${BASE_ENDPOINT}`)
    if (response.success && response.data) {
      return response.data.map((user) => this.mapApiUserToUser(user))
    }
    throw new Error(response.error || "Failed to fetch users")
  }

  // ---------------- CREATE ----------------
  async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await apiClient.post<any>(`${BASE_ENDPOINT}/register`, userData)
    if (response.success && response.data) {
      return this.mapApiUserToUser(response.data)
    }
    throw new Error(response.error || "Failed to create user")
  }

  // ---------------- DELETE ----------------
  async deleteUser(userId: string): Promise<void> {
    const response = await apiClient.delete(`${BASE_ENDPOINT}/${userId}`)
    if (!response.success) throw new Error(response.error || "Failed to delete user")
  }

  // ---------------- ACTIVATE ----------------
  async activateUser(userId: string): Promise<void> {
    const response = await apiClient.patch(`${BASE_ENDPOINT}/${userId}/activate`)
    if (!response.success) throw new Error(response.error || "Failed to activate user")
  }

  // ---------------- DEACTIVATE ----------------
  async deactivateUser(userId: string): Promise<void> {
    const response = await apiClient.patch(`${BASE_ENDPOINT}/${userId}/deactivate`)
    if (!response.success) throw new Error(response.error || "Failed to deactivate user")
  }

  // ---------------- UPDATE PASSWORD ----------------
  async updatePassword(userId: string, payload: UpdatePasswordRequest): Promise<void> {
    const response = await apiClient.patch(`${BASE_ENDPOINT}/${userId}/password`, payload)
    if (!response.success) throw new Error(response.error || "Failed to update password")
  }

  // ---------------- STATS ----------------
  async getUserStats(): Promise<{
    totalUsers: number
    activeUsers: number
    inactiveUsers: number
  }> {
    try {
      const users = await this.getUsers()
      const activeUsers = users.filter((u) => u.isActive).length
      const inactiveUsers = users.length - activeUsers

      return {
        totalUsers: users.length,
        activeUsers,
        inactiveUsers,
      }
    } catch (error) {
      return {
        totalUsers: 0,
        activeUsers: 0,
        inactiveUsers: 0,
      }
    }
  }

  private mapApiUserToUser(apiUser: any): User {
    return {
      id: apiUser._id, // Map MongoDB _id to frontend id
      name: apiUser.name,
      email: apiUser.email,
      phone: apiUser.phone,
      role: apiUser.role,
      isActive: apiUser.isActive,
      createdAt: apiUser.createdAt,
      fullName: apiUser.fullName,
      userId: apiUser.userId,
    }
  }
}

export const userService = new UserService()
