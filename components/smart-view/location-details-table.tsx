"use client"

import type { MapLocation } from "@/services/smart-view-service"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface LocationDetailsTableProps {
  locations: MapLocation[]
}

export function LocationDetailsTable({ locations }: LocationDetailsTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="border-[#EDEEF0] shadow-sm">
      <CardHeader className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white">
        <CardTitle className="text-lg">Nearest Town Panchayat Details</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                <TableHead className="text-[#013A65] font-semibold">District</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Total Works</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Completed</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Estimate</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Expenditure</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations.map((location) => (
                <TableRow key={location.id} className="hover:bg-[#F8F8F8]/50">
                  <TableCell className="font-medium">{location.townPanchayat}</TableCell>
                  <TableCell>{location.district}</TableCell>
                  <TableCell>{location.totalWorks}</TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium">
                      {location.completedPercentage}%
                    </span>
                  </TableCell>
                  <TableCell>{formatCurrency(location.estimate)}</TableCell>
                  <TableCell>{formatCurrency(location.expenditure)}</TableCell>
                  <TableCell>{formatCurrency(location.balance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
