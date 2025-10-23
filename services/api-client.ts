class ApiClient {
  private baseURL: string
  private getAuthToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token")
    }
    return null
  }

  constructor() {
    this.baseURL = "http://13.201.184.160:4000"
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const token = this.getAuthToken()
    const url = `${this.baseURL}${endpoint}`

    const config: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API request failed:", error)
      throw error
    }
  }

  async get(endpoint: string): Promise<any> {
    return this.request(endpoint, { method: "GET" })
  }

  async post(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async put(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  }

  async patch(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    })
  }

  async delete(endpoint: string): Promise<any> {
    return this.request(endpoint, { method: "DELETE" })
  }
}

export const apiClient = new ApiClient()
