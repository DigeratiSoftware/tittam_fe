import { TokenStorage } from "./token-storage"

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl = "http://13.201.184.160:4000") {
    this.baseUrl = baseUrl
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`

      console.log("[v0] Making API request to:", url)

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
      }

      // Add authorization headers if tokens exist and it's not a login request
      if (!endpoint.includes("/login")) {
        const accessToken = TokenStorage.getAccessToken()
        const refreshToken = TokenStorage.getRefreshToken()

        if (accessToken) {
          headers["Authorization"] = `Bearer ${accessToken}`
        }
        if (refreshToken) {
          headers["x-refresh-token"] = refreshToken
        }
      }

      const config: RequestInit = {
        headers,
        ...options,
      }

      console.log("[v0] Request config:", { url, method: config.method, headers })

      const response = await fetch(url, config)

      console.log("[v0] Response status:", response.status, response.statusText)

      const data = await response.json()

      if (!response.ok) {
        console.log("[v0] API error response:", data)
        return {
          success: false,
          error: data.message || `HTTP error! status: ${response.status}`,
        }
      }

      console.log("[v0] API success response:", data)
      return {
        success: true,
        data,
      }
    } catch (error) {
      console.error("[v0] API request failed:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"

      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes("fetch")) {
        return {
          success: false,
          error: `Network error: Unable to connect to API server at ${this.baseUrl}. Please ensure the API server is running.`,
        }
      }

      return {
        success: false,
        error: errorMessage,
      }
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" })
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" })
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    })
  }
}

export const apiClient = new ApiClient()
