"use client"

import type { AggregatedStatistics } from "@/services/smart-view-service"
import {
  MapPin,
  Briefcase,
  Clock,
  PlayCircle,
  CheckCircle,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Percent,
} from "lucide-react"

interface SummaryCardsProps {
  statistics: AggregatedStatistics
}

export function SummaryCards({ statistics }: SummaryCardsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const cards = [
    {
      label: "Zone",
      value: statistics.zone,
      icon: MapPin,
      color: "text-[#013A65]",
      bgColor: "bg-[#013A65]/10",
    },
    {
      label: "District",
      value: statistics.district,
      icon: MapPin,
      color: "text-[#013A65]",
      bgColor: "bg-[#013A65]/10",
    },
    {
      label: "Town Panchayat",
      value: statistics.townPanchayat,
      icon: MapPin,
      color: "text-[#013A65]",
      bgColor: "bg-[#013A65]/10",
    },
    {
      label: "Total Works",
      value: statistics.totalWorks.toString(),
      icon: Briefcase,
      color: "text-[#F3B335]",
      bgColor: "bg-[#F3B335]/10",
    },
    {
      label: "Tender Stage",
      value: statistics.tenderStage.toString(),
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      label: "Not Started",
      value: statistics.notStarted.toString(),
      icon: PlayCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      label: "Physically Completed",
      value: statistics.physicallyCompleted.toString(),
      icon: CheckCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      label: "Fully Completed",
      value: statistics.fullyCompleted.toString(),
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Completed %",
      value: `${statistics.completedPercentage}%`,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Estimate",
      value: formatCurrency(statistics.estimate),
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Expenditure",
      value: formatCurrency(statistics.expenditure),
      icon: DollarSign,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      label: "Balance",
      value: formatCurrency(statistics.balance),
      icon: DollarSign,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
    {
      label: "Expenditure %",
      value: `${statistics.expenditurePercentage}%`,
      icon: Percent,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-13 gap-3">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div
            key={index}
            className="bg-white border border-[#EDEEF0] rounded-lg p-3 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <Icon className={`w-4 h-4 ${card.color}`} />
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-1">{card.label}</p>
            <p className="text-base font-bold text-[#013A65] truncate" title={card.value}>
              {card.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}
