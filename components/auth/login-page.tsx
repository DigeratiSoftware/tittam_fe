"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login, user } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(credentials.username, credentials.password)
      if (success) {
        router.push("/dashboard")
      } else {
        setError("Invalid credentials. Please try again.")
      }
    } catch (err) {
      console.error("[v0] Login error:", err)
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen relative flex items-end justify-center pb-32"
      style={{
        backgroundImage: "url(/images/login-bg.png)",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="relative z-10 w-full max-w-sm mx-4 mr-8 bg-white/30 backdrop-blur-xl border-2 border-[#F3B335] shadow-2xl">
        <CardContent className="pt-0 pb-0 px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[#013A65] font-semibold text-sm">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                required
                disabled={isLoading}
                className="focus:border-[#F3B335] focus:ring-2 focus:ring-[#F3B335] bg-white h-10 text-base shadow-lg"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#013A65] font-semibold text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                required
                disabled={isLoading}
                className="focus:border-[#F3B335] focus:ring-2 focus:ring-[#F3B335] bg-white h-10 text-base shadow-lg"
              />
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="shadow-lg">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335] text-[#013A65] font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-[#013A65] hover:text-[#F3B335] font-bold transition-colors px-4 py-1 rounded-md hover:bg-white/20"
                onClick={() => {
                  alert("Please contact administrator to reset your password")
                }}
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
