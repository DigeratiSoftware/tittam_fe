export interface Contractor {
  id: string
  name: string
  email: string
  phone: string
  address: string
  gstNumber: string
  panNumber: string
  specialization: string
  experience: number
  status: "active" | "inactive"
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface CreateContractorData {
  name: string
  email: string
  phone: string
  address: string
  gstNumber: string
  panNumber: string
  specialization: string
  experience: number
  status: "active" | "inactive"
  createdBy: string
}

export interface UpdateContractorData {
  name?: string
  email?: string
  phone?: string
  address?: string
  gstNumber?: string
  panNumber?: string
  specialization?: string
  experience?: number
  status?: "active" | "inactive"
}

class ContractorService {
  private storageKey = "contractors"

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  private getContractorsFromStorage(): Contractor[] {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem(this.storageKey)
    return stored ? JSON.parse(stored) : this.getMockContractors()
  }

  private saveContractorsToStorage(contractors: Contractor[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem(this.storageKey, JSON.stringify(contractors))
  }

  private getMockContractors(): Contractor[] {
    return [
      {
        id: "contractor-1",
        name: "ABC Construction Ltd",
        email: "contact@abcconstruction.com",
        phone: "+91 9876543210",
        address: "123 Industrial Area, Chennai, Tamil Nadu 600001",
        gstNumber: "33AABCA1234C1Z5",
        panNumber: "AABCA1234C",
        specialization: "Road Construction",
        experience: 15,
        status: "active",
        createdBy: "Admin",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z",
      },
      {
        id: "contractor-2",
        name: "XYZ Infrastructure Pvt Ltd",
        email: "info@xyzinfra.com",
        phone: "+91 9876543211",
        address: "456 Business Park, Coimbatore, Tamil Nadu 641001",
        gstNumber: "33XYZIN5678D2A6",
        panNumber: "XYZIN5678D",
        specialization: "Bridge Construction",
        experience: 12,
        status: "active",
        createdBy: "Admin",
        createdAt: "2024-01-16T14:20:00Z",
        updatedAt: "2024-01-16T14:20:00Z",
      },
      {
        id: "contractor-3",
        name: "PQR Engineering Works",
        email: "pqr@engineering.com",
        phone: "+91 9876543212",
        address: "789 Tech City, Madurai, Tamil Nadu 625001",
        gstNumber: "33PQREN9012E3B7",
        panNumber: "PQREN9012E",
        specialization: "Water Supply Systems",
        experience: 8,
        status: "inactive",
        createdBy: "Admin",
        createdAt: "2024-01-17T09:15:00Z",
        updatedAt: "2024-01-17T09:15:00Z",
      },
      {
        id: "contractor-4",
        name: "DEF Builders & Contractors",
        email: "def@builders.com",
        phone: "+91 9876543213",
        address: "321 Construction Hub, Salem, Tamil Nadu 636001",
        gstNumber: "33DEFBU3456F4C8",
        panNumber: "DEFBU3456F",
        specialization: "Building Construction",
        experience: 20,
        status: "active",
        createdBy: "Admin",
        createdAt: "2024-01-18T16:45:00Z",
        updatedAt: "2024-01-18T16:45:00Z",
      },
      {
        id: "contractor-5",
        name: "GHI Electrical Solutions",
        email: "ghi@electrical.com",
        phone: "+91 9876543214",
        address: "654 Power Street, Trichy, Tamil Nadu 620001",
        gstNumber: "33GHIEL7890G5D9",
        panNumber: "GHIEL7890G",
        specialization: "Electrical Works",
        experience: 10,
        status: "active",
        createdBy: "Admin",
        createdAt: "2024-01-19T11:30:00Z",
        updatedAt: "2024-01-19T11:30:00Z",
      },
    ]
  }

  async getContractors(): Promise<Contractor[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return this.getContractorsFromStorage()
  }

  async getContractor(id: string): Promise<Contractor | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const contractors = this.getContractorsFromStorage()
    return contractors.find((contractor) => contractor.id === id) || null
  }

  async createContractor(data: CreateContractorData): Promise<Contractor> {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const contractors = this.getContractorsFromStorage()
    const newContractor: Contractor = {
      id: this.generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    contractors.push(newContractor)
    this.saveContractorsToStorage(contractors)

    return newContractor
  }

  async updateContractor(id: string, data: UpdateContractorData): Promise<Contractor | null> {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const contractors = this.getContractorsFromStorage()
    const index = contractors.findIndex((contractor) => contractor.id === id)

    if (index === -1) return null

    contractors[index] = {
      ...contractors[index],
      ...data,
      updatedAt: new Date().toISOString(),
    }

    this.saveContractorsToStorage(contractors)
    return contractors[index]
  }

  async deleteContractor(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const contractors = this.getContractorsFromStorage()
    const filteredContractors = contractors.filter((contractor) => contractor.id !== id)

    if (filteredContractors.length === contractors.length) return false

    this.saveContractorsToStorage(filteredContractors)
    return true
  }
}

export const contractorService = new ContractorService()
