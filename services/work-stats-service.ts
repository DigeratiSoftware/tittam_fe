export interface WorkStats {
  totalWork: number
  pending: number
  inProgress: number
  completed: number
}

export interface YearlyWorkData {
  year: string
  totalWork: number
  completed: number
}

export interface MonthlyWorkData {
  month: string
  totalWork: number
  completed: number
}

class WorkStatsService {
  // Mock data for work statistics
  async getWorkStats(): Promise<WorkStats> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      totalWork: 156,
      pending: 42,
      inProgress: 38,
      completed: 76,
    }
  }

  // Mock data for yearly work statistics
  async getYearlyWorkData(): Promise<YearlyWorkData[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))

    return [
      { year: "2020", totalWork: 85, completed: 78 },
      { year: "2021", totalWork: 120, completed: 105 },
      { year: "2022", totalWork: 145, completed: 132 },
      { year: "2023", totalWork: 168, completed: 155 },
      { year: "2024", totalWork: 156, completed: 76 },
    ]
  }

  // Mock data for monthly work statistics (current year)
  async getMonthlyWorkData(): Promise<MonthlyWorkData[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))

    return [
      { month: "Jan", totalWork: 12, completed: 8 },
      { month: "Feb", totalWork: 15, completed: 12 },
      { month: "Mar", totalWork: 18, completed: 14 },
      { month: "Apr", totalWork: 14, completed: 10 },
      { month: "May", totalWork: 16, completed: 13 },
      { month: "Jun", totalWork: 13, completed: 9 },
      { month: "Jul", totalWork: 17, completed: 6 },
      { month: "Aug", totalWork: 19, completed: 4 },
      { month: "Sep", totalWork: 16, completed: 0 },
      { month: "Oct", totalWork: 8, completed: 0 },
      { month: "Nov", totalWork: 4, completed: 0 },
      { month: "Dec", totalWork: 4, completed: 0 },
    ]
  }
}

export const workStatsService = new WorkStatsService()
