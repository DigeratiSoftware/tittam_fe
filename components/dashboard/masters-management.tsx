"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoneMaster } from "./zone-master"
import { DistrictMaster } from "./district-master"
import { TownPanchayatMaster } from "./town-panchayat-master"
import { WardMaster } from "./ward-master"

export function MastersManagement() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg">
        <div>
          <h1 className="text-xl font-semibold">Masters Management</h1>
          <p className="text-white/80 text-sm mt-1">
            Manage hierarchical master data for zones, districts, town panchayats, and wards
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <Tabs defaultValue="zones" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#F8F8F8] border border-[#013A65]/20 shadow-sm rounded-lg">
            <TabsTrigger
              value="zones"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
            >
              Zones
            </TabsTrigger>
            <TabsTrigger
              value="districts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
            >
              Districts
            </TabsTrigger>
            <TabsTrigger
              value="town-panchayats"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
            >
              Town Panchayats
            </TabsTrigger>
            <TabsTrigger
              value="wards"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white rounded-md"
            >
              Wards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="zones" className="m-0">
            <ZoneMaster />
          </TabsContent>
          <TabsContent value="districts" className="m-0">
            <DistrictMaster />
          </TabsContent>
          <TabsContent value="town-panchayats" className="m-0">
            <TownPanchayatMaster />
          </TabsContent>
          <TabsContent value="wards" className="m-0">
            <WardMaster />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
