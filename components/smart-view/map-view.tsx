"use client"

import type { MapLocation, UserLocation } from "@/services/smart-view-service"
import { useEffect, useRef, useState } from "react"

interface MapViewProps {
  locations: MapLocation[]
  users: UserLocation[]
  nearestLocations: MapLocation[]
  onLocationClick: (location: MapLocation) => void
  selectedLocation: MapLocation | null
}

export function MapView({ locations, users, nearestLocations, onLocationClick, selectedLocation }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null)
  const [hoveredUser, setHoveredUser] = useState<UserLocation | null>(null)
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if Leaflet is already loaded
    if ((window as any).L) {
      setIsLeafletLoaded(true)
      setIsLoading(false)
      return
    }

    // Check if scripts are already being loaded
    const existingScript = document.querySelector('script[src*="leaflet"]')
    if (existingScript) {
      // Wait for existing script to load
      existingScript.addEventListener("load", () => {
        setIsLeafletLoaded(true)
        setIsLoading(false)
      })
      return
    }

    // Load Leaflet CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)

    // Load Leaflet JS
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.async = true
    script.onload = () => {
      console.log("[v0] Leaflet loaded successfully")
      setIsLeafletLoaded(true)
      setIsLoading(false)
    }
    script.onerror = () => {
      console.error("[v0] Failed to load Leaflet")
      setIsLoading(false)
    }

    document.head.appendChild(script)

    return () => {
      // Don't remove scripts on unmount to allow reuse on navigation
    }
  }, [])

  useEffect(() => {
    if (!isLeafletLoaded || !mapRef.current || mapInstanceRef.current) return

    const L = (window as any).L
    if (!L) {
      console.error("[v0] Leaflet not available")
      return
    }

    try {
      console.log("[v0] Initializing map")
      // Initialize map centered on Karnataka, India
      const map = L.map(mapRef.current).setView([15.3173, 75.7139], 7)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      mapInstanceRef.current = map

      // Ensure map renders correctly
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
          console.log("[v0] Map initialized and sized")
        }
      }, 100)
    } catch (error) {
      console.error("[v0] Error initializing map:", error)
    }

    return () => {
      if (mapInstanceRef.current) {
        console.log("[v0] Cleaning up map instance")
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [isLeafletLoaded])

  useEffect(() => {
    if (!mapInstanceRef.current || !isLeafletLoaded) return

    const L = (window as any).L
    if (!L) return

    try {
      console.log("[v0] Adding markers to map")
      // Clear existing markers
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []

      const createIcon = (color: string, size = 25) => {
        const L = (window as any).L
        if (!L) return null

        return L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              width: ${size}px;
              height: ${size}px;
              background-color: ${color};
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              ${
                color === "#F3B335"
                  ? `<div style="
                  width: ${size + 10}px;
                  height: ${size + 10}px;
                  border: 2px solid #F3B335;
                  border-radius: 50%;
                  position: absolute;
                  animation: pulse 1.5s infinite;
                "></div>`
                  : ""
              }
            </div>
            <style>
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.5; }
                100% { transform: scale(1.5); opacity: 0; }
              }
            </style>
          `,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        })
      }

      // Add location markers
      locations.forEach((location) => {
        const isSelected = selectedLocation?.id === location.id
        const icon = createIcon(isSelected ? "#F3B335" : "#013A65", isSelected ? 30 : 25)

        const marker = L.marker([location.coordinates.lat, location.coordinates.lng], { icon })
          .addTo(mapInstanceRef.current)
          .on("click", () => onLocationClick(location))
          .on("mouseover", () => setHoveredLocation(location))
          .on("mouseout", () => setHoveredLocation(null))

        const popupContent = `
          <div style="min-width: 200px;">
            <h4 style="font-weight: 600; color: #013A65; margin-bottom: 8px;">${location.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Zone:</strong> ${location.zone}</p>
              <p><strong>District:</strong> ${location.district}</p>
              <p><strong>Town Panchayat:</strong> ${location.townPanchayat}</p>
              <p><strong>Total Works:</strong> ${location.totalWorks}</p>
              <p><strong>Completed:</strong> ${location.completedPercentage}%</p>
            </div>
          </div>
        `
        marker.bindPopup(popupContent)

        markersRef.current.push(marker)
      })

      // Add nearest location markers (green)
      nearestLocations.forEach((location) => {
        const icon = createIcon("#10B981", 20)
        const marker = L.marker([location.coordinates.lat, location.coordinates.lng], { icon }).addTo(
          mapInstanceRef.current,
        )

        const popupContent = `
          <div style="min-width: 180px;">
            <h4 style="font-weight: 600; color: #10B981; margin-bottom: 8px;">Nearest: ${location.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Town Panchayat:</strong> ${location.townPanchayat}</p>
              <p><strong>Total Works:</strong> ${location.totalWorks}</p>
            </div>
          </div>
        `
        marker.bindPopup(popupContent)

        markersRef.current.push(marker)
      })

      // Add user markers
      users.forEach((user) => {
        const icon = createIcon(user.status === "active" ? "#10B981" : "#6B7280", 18)
        const marker = L.marker([user.coordinates.lat, user.coordinates.lng], { icon })
          .addTo(mapInstanceRef.current)
          .on("mouseover", () => setHoveredUser(user))
          .on("mouseout", () => setHoveredUser(null))

        const popupContent = `
          <div style="min-width: 180px;">
            <h4 style="font-weight: 600; color: #013A65; margin-bottom: 8px;">${user.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Role:</strong> ${user.role}</p>
              <p><strong>Location:</strong> ${user.townPanchayat}</p>
              <p><strong>Last Active:</strong> ${user.lastActive}</p>
              <p><strong>Status:</strong> <span style="
                display: inline-block;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 11px;
                background-color: ${user.status === "active" ? "#D1FAE5" : "#F3F4F6"};
                color: ${user.status === "active" ? "#065F46" : "#374151"};
              ">${user.status}</span></p>
            </div>
          </div>
        `
        marker.bindPopup(popupContent)

        markersRef.current.push(marker)
      })

      // Fit bounds to show all markers
      if (markersRef.current.length > 0) {
        const group = L.featureGroup(markersRef.current)
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
      }

      console.log("[v0] Markers added successfully")
    } catch (error) {
      console.error("[v0] Error adding markers:", error)
    }
  }, [locations, users, nearestLocations, selectedLocation, onLocationClick, isLeafletLoaded])

  if (isLoading) {
    return (
      <div className="relative h-[600px] w-full">
        <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#013A65] border-r-transparent mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[600px] w-full">
      {isLeafletLoaded && <div ref={mapRef} className="w-full h-full rounded-lg" />}

      {/* Hover tooltip for locations */}
      {hoveredLocation && (
        <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg border border-[#EDEEF0] max-w-xs z-[1000]">
          <h4 className="font-semibold text-[#013A65] mb-2">{hoveredLocation.name}</h4>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              <span className="font-medium">Zone:</span> {hoveredLocation.zone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">District:</span> {hoveredLocation.district}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Total Works:</span> {hoveredLocation.totalWorks}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Completed:</span> {hoveredLocation.completedPercentage}%
            </p>
            {hoveredLocation.workDetails.length > 0 && (
              <div className="mt-2 pt-2 border-t border-gray-200">
                <p className="font-medium text-[#013A65] mb-1">Recent Works:</p>
                {hoveredLocation.workDetails.slice(0, 2).map((work) => (
                  <p key={work.id} className="text-xs text-gray-600">
                    • {work.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hover tooltip for users */}
      {hoveredUser && (
        <div className="absolute top-16 left-4 bg-white p-4 rounded-lg shadow-lg border border-[#EDEEF0] max-w-xs z-[1000]">
          <h4 className="font-semibold text-[#013A65] mb-2">{hoveredUser.name}</h4>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              <span className="font-medium">Role:</span> {hoveredUser.role}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {hoveredUser.townPanchayat}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Last Active:</span> {hoveredUser.lastActive}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs ${
                  hoveredUser.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                }`}
              >
                {hoveredUser.status}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#013A65] border-2 border-white shadow"></div>
          <span className="text-gray-600">Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#F3B335] border-2 border-white shadow"></div>
          <span className="text-gray-600">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#10B981] border-2 border-white shadow"></div>
          <span className="text-gray-600">Nearest TP / Active Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#6B7280] border-2 border-white shadow"></div>
          <span className="text-gray-600">Inactive Users</span>
        </div>
      </div>
    </div>
  )
}
