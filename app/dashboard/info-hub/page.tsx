"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileSpreadsheet } from "lucide-react"
import { infoHubService, type TownPanchayatInfo } from "@/services/info-hub-service"

export default function InfoHubPage() {
  const [zone, setZone] = useState("all")
  const [district, setDistrict] = useState("all")
  const [townPanchayat, setTownPanchayat] = useState("all")
  const [zones, setZones] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [townPanchayats, setTownPanchayats] = useState<string[]>([])
  const [data, setData] = useState<TownPanchayatInfo[]>([])
  const [loading, setLoading] = useState(false)

  // Load zones on mount
  useEffect(() => {
    loadZones()
    loadData()
  }, [])

  // Load districts when zone changes
  useEffect(() => {
    loadDistricts()
    setDistrict("all")
    setTownPanchayat("all")
  }, [zone])

  // Load town panchayats when district changes
  useEffect(() => {
    loadTownPanchayats()
    setTownPanchayat("all")
  }, [district])

  // Load data when filters change
  useEffect(() => {
    loadData()
  }, [zone, district, townPanchayat])

  const loadZones = async () => {
    const zonesData = await infoHubService.getZones()
    setZones(zonesData)
  }

  const loadDistricts = async () => {
    const districtsData = await infoHubService.getDistricts(zone)
    setDistricts(districtsData)
  }

  const loadTownPanchayats = async () => {
    const townPanchayatsData = await infoHubService.getTownPanchayats(district)
    setTownPanchayats(townPanchayatsData)
  }

  const loadData = async () => {
    setLoading(true)
    const result = await infoHubService.getTownPanchayatInfo({
      zone,
      district,
      townPanchayat,
    })
    setData(result)
    setLoading(false)
  }

  const handleExportExcel = () => {
    console.log("[v0] Exporting to Excel...")
    // Mock export functionality
  }

  const handleExportPDF = () => {
    console.log("[v0] Exporting to PDF...")
    // Mock export functionality
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-IN")
  }

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white py-3 px-6 rounded-lg shadow-lg mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">Info Hub</h1>
                <p className="text-white/80 text-sm mt-1">
                  View comprehensive town panchayat information and statistics
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleExportExcel}
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold"
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export Excel
                </Button>
                <Button
                  onClick={handleExportPDF}
                  className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm mb-6">
            <div className="bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0] p-4 rounded-t-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full">
                  <Select value={zone} onValueChange={setZone}>
                    <SelectTrigger className="w-full bg-white border-[#EDEEF0]">
                      <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Zones</SelectItem>
                      {zones.map((z) => (
                        <SelectItem key={z} value={z}>
                          {z}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger className="w-full bg-white border-[#EDEEF0]">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Districts</SelectItem>
                      {districts.map((d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Select value={townPanchayat} onValueChange={setTownPanchayat}>
                    <SelectTrigger className="w-full bg-white border-[#EDEEF0]">
                      <SelectValue placeholder="Select Town Panchayat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Town Panchayats</SelectItem>
                      {townPanchayats.map((tp) => (
                        <SelectItem key={tp} value={tp}>
                          {tp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden">
            <div className="overflow-auto h-full">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                    <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">District</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Total Population</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Present Population</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Total Area (Sq mt)</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Assembly</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">Parliament</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">No of Wards</TableHead>
                    <TableHead className="text-[#013A65] font-semibold">No of Streets</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : data.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                        No data found
                      </TableCell>
                    </TableRow>
                  ) : (
                    data.map((item) => (
                      <TableRow key={item.id} className="hover:bg-[#F8F8F8]/50 border-b border-[#EDEEF0]">
                        <TableCell className="font-medium">{item.zone}</TableCell>
                        <TableCell>{item.district}</TableCell>
                        <TableCell className="font-medium text-[#013A65]">{item.townPanchayat}</TableCell>
                        <TableCell>{formatNumber(item.totalPopulation)}</TableCell>
                        <TableCell>{formatNumber(item.presentPopulation)}</TableCell>
                        <TableCell>{formatNumber(item.totalAreaSqMt)}</TableCell>
                        <TableCell>{item.assembly}</TableCell>
                        <TableCell>{item.parliament}</TableCell>
                        <TableCell>{item.noOfWards}</TableCell>
                        <TableCell>{item.noOfStreets}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
