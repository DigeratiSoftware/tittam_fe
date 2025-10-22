export class TokenStorage {
  private static readonly ACCESS_TOKEN_KEY = "access_token"
  private static readonly REFRESH_TOKEN_KEY = "refresh_token"
  private static readonly USER_KEY = "user_data"

  static setTokens(accessToken: string, refreshToken: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken)
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken)
    }
  }

  static getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.ACCESS_TOKEN_KEY)
    }
    return null
  }

  static getRefreshToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.REFRESH_TOKEN_KEY)
    }
    return null
  }

  static setUser(user: any): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))
    }
  }

  static getUser(): any | null {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem(this.USER_KEY)
      return userData ? JSON.parse(userData) : null
    }
    return null
  }

  static clearAll(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.ACCESS_TOKEN_KEY)
      localStorage.removeItem(this.REFRESH_TOKEN_KEY)
      localStorage.removeItem(this.USER_KEY)
    }
  }

  static hasTokens(): boolean {
    return !!(this.getAccessToken() && this.getRefreshToken())
  }
}
