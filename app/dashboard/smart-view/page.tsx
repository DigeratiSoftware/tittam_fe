"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MapPin, Users, RefreshCw } from "lucide-react"
import {
  smartViewService,
  type MapLocation,
  type UserLocation,
  type SmartViewFilters,
  type AggregatedStatistics,
} from "@/services/smart-view-service"
import { MapView } from "@/components/smart-view/map-view"
import { SummaryCards } from "@/components/smart-view/summary-cards"
import { LocationDetailsTable } from "@/components/smart-view/location-details-table"
import { UserTrackingTable } from "@/components/smart-view/user-tracking-table"
import { toast } from "@/hooks/use-toast"

export default function SmartViewPage() {
  const [filters, setFilters] = useState<SmartViewFilters>({
    zone: "all",
    district: "all",
    townPanchayat: "all",
    scheme: "all",
    component: "all",
    year: "all",
    stage: "all",
  })

  const [locations, setLocations] = useState<MapLocation[]>([])
  const [users, setUsers] = useState<UserLocation[]>([])
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [showNearestTP, setShowNearestTP] = useState(false)
  const [nearestLocations, setNearestLocations] = useState<MapLocation[]>([])
  const [showUserTracking, setShowUserTracking] = useState(false)
  const [loading, setLoading] = useState(false)

  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])
  const [statistics, setStatistics] = useState<AggregatedStatistics | null>(null)

  useEffect(() => {
    setZones(smartViewService.getZones())
    setDistricts(smartViewService.getDistricts(filters.zone))
    setTownPanchayats(smartViewService.getTownPanchayats(filters.district))
  }, [filters.zone, filters.district])

  useEffect(() => {
    loadData()
  }, [filters])

  const loadData = async () => {
    setLoading(true)
    try {
      const [locationsData, usersData, statsData] = await Promise.all([
        smartViewService.getMapLocations(filters),
        smartViewService.getUserLocations(filters),
        smartViewService.getAggregatedStatistics(filters),
      ])
      setLocations(locationsData)
      setUsers(usersData)
      setStatistics(statsData)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load smart view data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleZoneChange = (value: string) => {
    setFilters({ ...filters, zone: value, district: "all", townPanchayat: "all" })
  }

  const handleDistrictChange = (value: string) => {
    setFilters({ ...filters, district: value, townPanchayat: "all" })
  }

  const handleLocationClick = async (location: MapLocation) => {
    setSelectedLocation(location)
    if (showNearestTP) {
      const nearest = await smartViewService.getNearestTownPanchayats(location.id)
      setNearestLocations(nearest)
    }
  }

  const handleViewNearestTP = async () => {
    setShowNearestTP(!showNearestTP)
    if (!showNearestTP && selectedLocation) {
      const nearest = await smartViewService.getNearestTownPanchayats(selectedLocation.id)
      setNearestLocations(nearest)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Smart View</h1>
              <p className="text-white/80 text-sm mt-1">Interactive map view with location tracking and analytics</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowUserTracking(!showUserTracking)}
                size="sm"
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
              >
                <Users className="h-4 w-4 mr-1.5" />
                {showUserTracking ? "Hide" : "Show"} User Tracking
              </Button>
              <Button
                onClick={handleViewNearestTP}
                size="sm"
                className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
              >
                <MapPin className="h-4 w-4 mr-1.5" />
                {showNearestTP ? "Hide" : "Show"} Nearest TP
              </Button>
              <Button
                onClick={loadData}
                disabled={loading}
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 h-9 px-4 text-sm font-medium"
              >
                <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
          <div className="relative z-10 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]">
            <div className="grid grid-cols-7 gap-3">
              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Zone</Label>
                <Select value={filters.zone} onValueChange={handleZoneChange}>
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {zones.map((zone) => (
                      <SelectItem key={zone} value={zone}>
                        {zone === "all" ? "All Zones" : zone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">District</Label>
                <Select value={filters.district} onValueChange={handleDistrictChange}>
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district === "all" ? "All Districts" : district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Town Panchayat</Label>
                <Select
                  value={filters.townPanchayat}
                  onValueChange={(value) => setFilters({ ...filters, townPanchayat: value })}
                >
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {townPanchayats.map((tp) => (
                      <SelectItem key={tp} value={tp}>
                        {tp === "all" ? "All Town Panchayats" : tp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Scheme</Label>
                <Select value={filters.scheme} onValueChange={(value) => setFilters({ ...filters, scheme: value })}>
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {smartViewService.getSchemes().map((scheme) => (
                      <SelectItem key={scheme} value={scheme}>
                        {scheme === "all" ? "All Schemes" : scheme}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Component</Label>
                <Select
                  value={filters.component}
                  onValueChange={(value) => setFilters({ ...filters, component: value })}
                >
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {smartViewService.getComponents().map((component) => (
                      <SelectItem key={component} value={component}>
                        {component === "all" ? "All Components" : component}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Year</Label>
                <Select value={filters.year} onValueChange={(value) => setFilters({ ...filters, year: value })}>
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {smartViewService.getYears().map((year) => (
                      <SelectItem key={year} value={year}>
                        {year === "all" ? "All Years" : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label className="text-sm font-medium text-[#013A65] mb-1.5 block">Stage</Label>
                <Select value={filters.stage} onValueChange={(value) => setFilters({ ...filters, stage: value })}>
                  <SelectTrigger className="h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {smartViewService.getStages().map((stage) => (
                      <SelectItem key={stage} value={stage}>
                        {stage === "all" ? "All Stages" : stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="relative z-0 bg-[#F8F8F8]">
            {/* Map View */}
            <div className="p-4">
              <MapView
                locations={locations}
                users={showUserTracking ? users : []}
                nearestLocations={showNearestTP ? nearestLocations : []}
                onLocationClick={handleLocationClick}
                selectedLocation={selectedLocation}
              />
            </div>

            {/* Summary Cards */}
            {statistics && (
              <div className="bg-white border-t border-[#EDEEF0] p-4">
                <SummaryCards statistics={statistics} />
              </div>
            )}

            {/* Location Details Table */}
            {selectedLocation && showNearestTP && nearestLocations.length > 0 && (
              <div className="p-4">
                <LocationDetailsTable locations={nearestLocations} />
              </div>
            )}

            {/* User Tracking Table */}
            {showUserTracking && users.length > 0 && (
              <div className="p-4">
                <UserTrackingTable users={users} />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
