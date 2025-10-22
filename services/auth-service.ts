import { apiClient } from "../lib/api-client"
import { TokenStorage } from "../lib/token-storage"

// Frontend User Interface
export interface User {
  id: string
  username: string
  role: string
  name: string
  email: string
  phone?: string
  isActive: boolean
  userId: string
  currentLoginAt?: string
  lastLoginAt?: string | null
}

// API response interface
interface LoginResponse {
  success: boolean
  user: {
    _id: string
    name: string
    email: string
    phone?: string
    role: string
    isActive: boolean
    createdBy?: string
    loginStatus?: boolean
    createdAt?: string
    updatedAt?: string
    userId: string
    currentLoginAt?: string
    lastLoginAt: string | null
  }
  accessToken: string
  refreshToken: string
  currentLoginAt: string
  lastLoginAt: string | null
}

// Login credentials
export interface LoginCredentials {
  username: string
  password: string
}

class AuthService {
  private readonly BASE_ENDPOINT = "/api/v1/users"

  async login(credentials: LoginCredentials): Promise<{ user: User; accessToken: string; refreshToken: string }> {
    const response = await apiClient.post<LoginResponse>(`${this.BASE_ENDPOINT}/login`, credentials)

    if (response.success && response.data) {
      // Map API user object to frontend User interface
      const apiUser = response.data.user
      const user: User = {
        id: apiUser._id,
        username: apiUser.email,
        email: apiUser.email,
        role: apiUser.role,
        name: apiUser.name,
        phone: apiUser.phone,
        isActive: apiUser.isActive,
        userId: apiUser.userId,
        currentLoginAt: apiUser.currentLoginAt,
        lastLoginAt: apiUser.lastLoginAt,
      }

      TokenStorage.setTokens(response.data.accessToken, response.data.refreshToken)
      TokenStorage.setUser(user)

      return {
        user,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      }
    }

    throw new Error(response.error || "Login failed")
  }

  async logout(): Promise<void> {
    TokenStorage.clearAll()
  }

  async getCurrentUser(): Promise<User | null> {
    return TokenStorage.getUser()
  }

  isAuthenticated(): boolean {
    return TokenStorage.hasTokens()
  }

  // Role helpers
  isSuperAdmin(user: User): boolean {
    return user.role === "super_admin"
  }

  isAdmin(user: User): boolean {
    return user.role === "admin" || user.role === "super_admin"
  }
}

export const authService = new AuthService()
