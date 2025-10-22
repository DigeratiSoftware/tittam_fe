"use client"

import type { UserLocation } from "@/services/smart-view-service"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface UserTrackingTableProps {
  users: UserLocation[]
}

export function UserTrackingTable({ users }: UserTrackingTableProps) {
  return (
    <Card className="border-[#EDEEF0] shadow-sm">
      <CardHeader className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white">
        <CardTitle className="text-lg">User Location Tracking</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                <TableHead className="text-[#013A65] font-semibold">Name</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Role</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Zone</TableHead>
                <TableHead className="text-[#013A65] font-semibold">District</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Town Panchayat</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Last Active</TableHead>
                <TableHead className="text-[#013A65] font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-[#F8F8F8]/50">
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.zone}</TableCell>
                  <TableCell>{user.district}</TableCell>
                  <TableCell>{user.townPanchayat}</TableCell>
                  <TableCell className="text-sm text-gray-600">{user.lastActive}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "active" ? "default" : "secondary"}
                      className={
                        user.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
