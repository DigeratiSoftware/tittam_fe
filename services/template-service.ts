import { apiClient } from "@/lib/api-client"

export interface TemplateField {
  id: string
  group: string
  name: string
  dataType:
    | "text"
    | "number"
    | "date"
    | "dropdown"
    | "boolean"
    | "file"
    | "dateRange"
    | "textarea"
    | "geoLocation"
    | "calculation"
  isRequired: boolean
  options?:
    | Array<{
        englishName?: string
        tamilName?: string
        nameEnglish?: string
        nameTamil?: string
        id?: string
        value?: string
      }>
    | string[]
  validation?: {
    type?: string
    min?: number
    max?: number
    range?: string
    field1?: string
    field2?: string
    operator?: string
    dateAllowed?: "future" | "past" | "both"
  }
  isDefault: boolean
  order: number
  componentId?: string
  category?: string
  createdBy?: string
  isSubForm?: boolean
  lov?: {
    api: string
    dependentOn: string | null
  }
}

export interface NumberField {
  id: string
  name: string
  dataType: "number"
}

export interface Template {
  id: string
  schemeId: string
  componentId: string
  subComponentId: string
  fields: TemplateField[]
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
}

interface ApiFieldResponse {
  _id: string
  group: string
  name: string
  dataType: string
  isRequired: boolean
  options?:
    | Array<{
        englishName?: string
        tamilName?: string
        nameEnglish?: string
        nameTamil?: string
        id?: string
        value?: string
      }>
    | string[]
  validation?: {
    type?: string
    min?: number
    max?: number
    range?: string
    field1?: string
    field2?: string
    operator?: string
    dateAllowed?: "future" | "past" | "both"
  }
  isDefault: boolean
  order: number
  type?: string
  componentId?: string | null
  category?: string
  createdBy?: string
  createdAt?: string
  isSubForm?: boolean
  subFields?: any[]
  lov?: {
    api: string
    dependentOn: string | null
  }
}

class TemplateService {
  private mapApiResponseToTemplateField(apiField: ApiFieldResponse): TemplateField {
    return {
      id: apiField._id,
      group: apiField.group,
      name: apiField.name,
      dataType: apiField.dataType as TemplateField["dataType"],
      isRequired: apiField.isRequired,
      options: apiField.options || [],
      validation: apiField.validation,
      isDefault: apiField.isDefault,
      order: apiField.order,
      componentId: apiField.componentId || undefined,
      category: apiField.category,
      createdBy: apiField.createdBy,
      isSubForm: apiField.isSubForm || false,
      lov: apiField.lov,
    }
  }

  async getFieldsByComponent(componentId: string): Promise<TemplateField[]> {
    try {
      const response = await apiClient.get<any>(`/api/v1/fields/component/${componentId}`)
      console.log(`[v0] API response for component ${componentId}:`, response)

      let fieldsArray: ApiFieldResponse[] = []

      if (Array.isArray(response)) {
        fieldsArray = response
      } else if (response && Array.isArray(response.data)) {
        fieldsArray = response.data
      } else if (response && response.success && Array.isArray(response.data)) {
        fieldsArray = response.data
      } else if (response && response.data && response.data.success && Array.isArray(response.data.data)) {
        // Handle double-wrapped response: {success: true, data: {success: true, data: [...]}}
        fieldsArray = response.data.data
      }

      console.log(`[v0] Extracted fields array:`, fieldsArray)

      const mappedFields = fieldsArray.map((field) => {
        const mappedField = this.mapApiResponseToTemplateField(field)
        if (field.dataType === "dropdown" && field.options) {
          console.log(`[v0] Field ${field.name} options from API:`, field.options)
          console.log(`[v0] Field ${field.name} mapped options:`, mappedField.options)
        }
        return mappedField
      })

      return mappedFields
    } catch (error) {
      console.error("Failed to fetch fields by component:", error)
      return []
    }
  }

  async createField(fieldData: Omit<TemplateField, "id">): Promise<TemplateField> {
    try {
      const response = await apiClient.post<TemplateField>("/api/v1/fields", fieldData)
      return response
    } catch (error) {
      console.error("Failed to create field:", error)
      throw error
    }
  }

  async updateField(templateId: string, fieldId: string, updates: Partial<TemplateField>): Promise<TemplateField> {
    try {
      const response = await apiClient.patch<TemplateField>(`/api/v1/fields/${fieldId}`, updates)
      return response
    } catch (error) {
      console.error("Failed to update field:", error)
      throw error
    }
  }

  async deleteField(templateId: string, fieldId: string): Promise<boolean> {
    try {
      await apiClient.delete(`/api/v1/fields/${fieldId}`)
      return true
    } catch (error) {
      console.error("Failed to delete field:", error)
      return false
    }
  }

  async getNumberFields(): Promise<NumberField[]> {
    try {
      const response = await apiClient.get<any>("/api/v1/fields/number-fields")
      console.log(`[v0] Number fields API response:`, response)

      let fieldsArray: any[] = []

      if (Array.isArray(response)) {
        fieldsArray = response
      } else if (response && Array.isArray(response.data)) {
        fieldsArray = response.data
      } else if (response && response.success && Array.isArray(response.data)) {
        fieldsArray = response.data
      } else if (response && response.data && response.data.success && Array.isArray(response.data.data)) {
        // Handle double-wrapped response: {success: true, data: {success: true, data: [...]}}
        fieldsArray = response.data.data
      }

      console.log(`[v0] Extracted number fields array:`, fieldsArray)

      return fieldsArray.map((field) => ({
        id: field.name, // Use name as id for mapping as requested by user
        name: field.name,
        dataType: "number" as const,
      }))
    } catch (error) {
      console.error("Failed to fetch number fields:", error)
      return []
    }
  }
}

export const templateService = new TemplateService()
