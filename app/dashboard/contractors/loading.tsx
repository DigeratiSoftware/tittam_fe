import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex items-center gap-2 text-[#013A65]/70">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Loading contractors...</span>
      </div>
    </div>
  )
}
