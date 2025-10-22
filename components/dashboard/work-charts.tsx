"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { YearlyWorkData, MonthlyWorkData } from "@/services/work-stats-service"

interface WorkChartsProps {
  yearlyData: YearlyWorkData[]
  monthlyData: MonthlyWorkData[]
  loading: boolean
}

export default function WorkCharts({ yearlyData, monthlyData, loading }: WorkChartsProps) {
  const [yearFrom, setYearFrom] = useState("2020")
  const [yearTo, setYearTo] = useState("2024")
  const [monthFrom, setMonthFrom] = useState("Jan")
  const [monthTo, setMonthTo] = useState("Dec")

  const filteredYearlyData = yearlyData.filter((item) => {
    const year = Number.parseInt(item.year)
    const fromYear = Number.parseInt(yearFrom)
    const toYear = Number.parseInt(yearTo)
    return year >= fromYear && year <= toYear
  })

  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const filteredMonthlyData = monthlyData.filter((item) => {
    const monthIndex = monthOrder.indexOf(item.month)
    const fromIndex = monthOrder.indexOf(monthFrom)
    const toIndex = monthOrder.indexOf(monthTo)
    return monthIndex >= fromIndex && monthIndex <= toIndex
  })

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-white to-[#F3B335]/5 border-[#F3B335]/20">
          <CardHeader>
            <CardTitle>Year-wise Work Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center">
              <div className="text-gray-500">Loading chart...</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-white to-[#F3B335]/5 border-[#F3B335]/20">
          <CardHeader>
            <CardTitle>Month-wise Work Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center">
              <div className="text-gray-500">Loading chart...</div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Year-wise Chart */}
      <Card className="bg-gradient-to-br from-white to-[#F3B335]/5 border-[#F3B335]/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#013A65]">Year-wise Work Progress</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#013A65]">From:</span>
              <Select value={yearFrom} onValueChange={setYearFrom}>
                <SelectTrigger className="w-20 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-[#013A65]">To:</span>
              <Select value={yearTo} onValueChange={setYearTo}>
                <SelectTrigger className="w-20 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={filteredYearlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3B335/20" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalWork" fill="#F3B335" name="Total Work" />
              <Bar dataKey="completed" fill="#013A65" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Month-wise Chart */}
      <Card className="bg-gradient-to-br from-white to-[#F3B335]/5 border-[#F3B335]/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#013A65]">Month-wise Work Progress</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#013A65]">From:</span>
              <Select value={monthFrom} onValueChange={setMonthFrom}>
                <SelectTrigger className="w-16 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Jan">Jan</SelectItem>
                  <SelectItem value="Feb">Feb</SelectItem>
                  <SelectItem value="Mar">Mar</SelectItem>
                  <SelectItem value="Apr">Apr</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="Jun">Jun</SelectItem>
                  <SelectItem value="Jul">Jul</SelectItem>
                  <SelectItem value="Aug">Aug</SelectItem>
                  <SelectItem value="Sep">Sep</SelectItem>
                  <SelectItem value="Oct">Oct</SelectItem>
                  <SelectItem value="Nov">Nov</SelectItem>
                  <SelectItem value="Dec">Dec</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-[#013A65]">To:</span>
              <Select value={monthTo} onValueChange={setMonthTo}>
                <SelectTrigger className="w-16 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Jan">Jan</SelectItem>
                  <SelectItem value="Feb">Feb</SelectItem>
                  <SelectItem value="Mar">Mar</SelectItem>
                  <SelectItem value="Apr">Apr</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="Jun">Jun</SelectItem>
                  <SelectItem value="Jul">Jul</SelectItem>
                  <SelectItem value="Aug">Aug</SelectItem>
                  <SelectItem value="Sep">Sep</SelectItem>
                  <SelectItem value="Oct">Oct</SelectItem>
                  <SelectItem value="Nov">Nov</SelectItem>
                  <SelectItem value="Dec">Dec</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={filteredMonthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3B335/20" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalWork" fill="#F3B335" name="Total Work" />
              <Bar dataKey="completed" fill="#013A65" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
