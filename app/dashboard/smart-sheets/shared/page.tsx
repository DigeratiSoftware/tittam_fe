"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { smartSheetService, type SmartSheet } from "@/services/smart-sheet-service"
import { SheetDataEntryForm } from "@/components/smart-sheets/sheet-data-entry-form"
import { useToast } from "@/hooks/use-toast"

export default function SharedSheetsPage() {
  const [sheets, setSheets] = useState<SmartSheet[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<string>("")
  const { toast } = useToast()

  useEffect(() => {
    loadSharedSheets()
  }, [])

  const loadSharedSheets = async () => {
    try {
      setLoading(true)
      // In real app, get actual user ID
      const data = await smartSheetService.getSharedSheets("user1")
      setSheets(data)
      if (data.length > 0 && !activeTab) {
        setActiveTab(data[0].id)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load shared sheets",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (sheetId: string, data: Record<string, any>) => {
    try {
      await smartSheetService.submitSheetData({
        sheetId,
        data,
        submittedBy: "user1", // In real app, get actual user ID
        status: "submitted",
      })
      toast({ title: "Success", description: "Sheet data submitted successfully" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit sheet data",
        variant: "destructive",
      })
    }
  }

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Shared Sheets</h1>
              <p className="text-white/80 mt-1">Fill in the shared sheets and submit your data</p>
            </div>
          </div>
        </div>

        {/* Sheets Tabs */}
        {loading ? (
          <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-8 text-center text-gray-500">
            Loading shared sheets...
          </div>
        ) : sheets.length === 0 ? (
          <div className="bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-8 text-center text-gray-500">
            No shared sheets available
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="bg-white border border-[#EDEEF0] p-1">
              {sheets.map((sheet) => (
                <TabsTrigger
                  key={sheet.id}
                  value={sheet.id}
                  className="data-[state=active]:bg-[#013A65] data-[state=active]:text-white"
                >
                  {sheet.name}
                  {sheet.isFrozen && <span className="ml-2 text-xs">(Frozen)</span>}
                </TabsTrigger>
              ))}
            </TabsList>

            {sheets.map((sheet) => (
              <TabsContent key={sheet.id} value={sheet.id}>
                <SheetDataEntryForm sheet={sheet} onSubmit={(data) => handleSubmit(sheet.id, data)} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  )
}
