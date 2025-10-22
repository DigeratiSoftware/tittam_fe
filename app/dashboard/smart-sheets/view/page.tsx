"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { smartSheetService, type SmartSheet } from "@/services/smart-sheet-service"
import { FileSpreadsheet } from "lucide-react"

export default function ViewSheetsPage() {
  const [sections, setSections] = useState<string[]>([])
  const [selectedSection, setSelectedSection] = useState("")
  const [sheets, setSheets] = useState<SmartSheet[]>([])
  const [activeSheetId, setActiveSheetId] = useState("")

  useEffect(() => {
    loadSections()
  }, [])

  useEffect(() => {
    if (selectedSection) {
      loadSheets()
    }
  }, [selectedSection])

  const loadSections = async () => {
    const sectionsData = await smartSheetService.getSections()
    setSections(sectionsData)
    if (sectionsData.length > 0) {
      setSelectedSection(sectionsData[0])
    }
  }

  const loadSheets = async () => {
    const sheetsData = await smartSheetService.getSheetsBySection(selectedSection)
    setSheets(sheetsData)
    if (sheetsData.length > 0) {
      setActiveSheetId(sheetsData[0].id)
    }
  }

  const activeSheet = sheets.find((s) => s.id === activeSheetId)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg shadow-lg py-3 px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-white">View Sheets</h1>
              <p className="text-white/80 text-sm mt-1">View and manage shared smart sheets</p>
            </div>
            <div className="w-64">
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {sheets.length > 0 ? (
          <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm">
            <Tabs value={activeSheetId} onValueChange={setActiveSheetId}>
              <div className="border-b border-[#EDEEF0] bg-[#F8F8F8] px-4">
                <TabsList className="bg-transparent">
                  {sheets.map((sheet) => (
                    <TabsTrigger
                      key={sheet.id}
                      value={sheet.id}
                      className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-[#F3B335]"
                    >
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      {sheet.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {sheets.map((sheet) => (
                <TabsContent key={sheet.id} value={sheet.id} className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#013A65]">{sheet.name}</h3>
                    {sheet.scheme && (
                      <p className="text-sm text-gray-500">
                        {sheet.scheme} - {sheet.component} ({sheet.year})
                      </p>
                    )}
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#F3B335] hover:bg-[#F3B335]">
                          <TableHead className="text-[#013A65] font-semibold">S.No</TableHead>
                          {sheet.fields.map((field) => (
                            <TableHead key={field.id} className="text-[#013A65] font-semibold">
                              {field.name}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3, 4, 5].map((row) => (
                          <TableRow key={row} className="hover:bg-[#F8F8F8]/50">
                            <TableCell>{row}</TableCell>
                            {sheet.fields.map((field) => (
                              <TableCell key={field.id}>
                                <input
                                  type={
                                    field.dataType === "number" ? "number" : field.dataType === "date" ? "date" : "text"
                                  }
                                  className="w-full px-2 py-1 border border-[#EDEEF0] rounded focus:outline-none focus:border-[#F3B335]"
                                  placeholder={`Enter ${field.name.toLowerCase()}`}
                                />
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65]">
                      Save Sheet
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-12 text-center">
            <FileSpreadsheet className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No sheets found in this section</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
