// Mock field service
export interface Field {
  id: string
  componentId: string
  englishName: string
  englishDescription: string
  tamilName: string
  tamilDescription: string
  dataType: string
  validation?: string
  isRequired: boolean
  createdDate: string
  createdBy: string
}

export interface CreateFieldRequest {
  componentId: string
  englishName: string
  englishDescription: string
  tamilName: string
  tamilDescription: string
  dataType: string
  validation?: string
  isRequired: boolean
  createdBy: string
}

class FieldService {
  private readonly STORAGE_KEY = "fields_data"

  private getStoredFields(): Field[] {
    if (typeof window === "undefined") return []

    const stored = localStorage.getItem(this.STORAGE_KEY)
    if (!stored) {
      // Initialize with sample data
      const sampleFields: Field[] = [
        {
          id: "1",
          componentId: "1", // Ration Card Application
          englishName: "Full Name",
          englishDescription: "Complete name of the applicant as per official documents",
          tamilName: "முழு பெயர்",
          tamilDescription: "அதிகாரப்பூர்வ ஆவணங்களின்படி விண்ணப்பதாரரின் முழு பெயர்",
          dataType: "string",
          validation: "min:3, max:100, required",
          isRequired: true,
          createdDate: "2024-01-16",
          createdBy: "Super Admin",
        },
        {
          id: "2",
          componentId: "1", // Ration Card Application
          englishName: "Aadhaar Number",
          englishDescription: "12-digit unique identification number issued by UIDAI",
          tamilName: "ஆதார் எண்",
          tamilDescription: "UIDAI வழங்கிய 12 இலக்க தனிப்பட்ட அடையாள எண்",
          dataType: "string",
          validation: "length:12, numeric, required",
          isRequired: true,
          createdDate: "2024-01-16",
          createdBy: "Super Admin",
        },
        {
          id: "3",
          componentId: "1", // Ration Card Application
          englishName: "Mobile Number",
          englishDescription: "Active mobile number for communication",
          tamilName: "மொபைல் எண்",
          tamilDescription: "தொடர்புக்கான செயலில் உள்ள மொபைல் எண்",
          dataType: "phone",
          validation: "length:10, required",
          isRequired: true,
          createdDate: "2024-01-16",
          createdBy: "Super Admin",
        },
        {
          id: "4",
          componentId: "2", // Beneficiary Management
          englishName: "Family Income",
          englishDescription: "Annual family income in rupees",
          tamilName: "குடும்ப வருமானம்",
          tamilDescription: "ரூபாயில் ஆண்டு குடும்ப வருமானம்",
          dataType: "number",
          validation: "min:0, max:1000000",
          isRequired: true,
          createdDate: "2024-01-17",
          createdBy: "Super Admin",
        },
        {
          id: "5",
          componentId: "3", // Job Card Registration
          englishName: "Date of Birth",
          englishDescription: "Date of birth of the worker",
          tamilName: "பிறந்த தேதி",
          tamilDescription: "தொழிலாளியின் பிறந்த தேதி",
          dataType: "date",
          validation: "required, age:18-65",
          isRequired: true,
          createdDate: "2024-01-18",
          createdBy: "Super Admin",
        },
      ]
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sampleFields))
      return sampleFields
    }

    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  }

  private saveFields(fields: Field[]): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(fields))
    }
  }

  async getAllFields(): Promise<Field[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return this.getStoredFields()
  }

  async getFieldsByComponent(componentId: string): Promise<Field[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    const fields = this.getStoredFields()
    return fields.filter((field) => field.componentId === componentId)
  }

  async createField(request: CreateFieldRequest): Promise<Field> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const fields = this.getStoredFields()
    const newField: Field = {
      id: Date.now().toString(),
      ...request,
      createdDate: new Date().toISOString().split("T")[0],
    }

    fields.push(newField)
    this.saveFields(fields)

    // Update component fields count
    const { componentService } = await import("./component-service")
    const componentFields = fields.filter((f) => f.componentId === request.componentId)
    await componentService.updateFieldsCount(request.componentId, componentFields.length)

    return newField
  }

  async getFieldById(id: string): Promise<Field | null> {
    const fields = this.getStoredFields()
    return fields.find((field) => field.id === id) || null
  }

  async updateField(id: string, request: CreateFieldRequest): Promise<Field> {
    const fields = this.getStoredFields()
    const index = fields.findIndex((field) => field.id === id)

    if (index === -1) {
      throw new Error("Field not found")
    }

    fields[index] = {
      ...fields[index],
      ...request,
    }

    this.saveFields(fields)
    return fields[index]
  }

  async deleteField(id: string): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const fields = this.getStoredFields()
    const fieldToDelete = fields.find((f) => f.id === id)
    const filteredFields = fields.filter((field) => field.id !== id)
    this.saveFields(filteredFields)

    // Update component fields count
    if (fieldToDelete) {
      const { componentService } = await import("./component-service")
      const componentFields = filteredFields.filter((f) => f.componentId === fieldToDelete.componentId)
      await componentService.updateFieldsCount(fieldToDelete.componentId, componentFields.length)
    }
  }
}

export const fieldService = new FieldService()
