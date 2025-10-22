import type { Field } from "@/services/field-service"

export interface ValidationResult {
  isValid: boolean
  errors: { [fieldId: string]: string }
}

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  fromDate?: string
  toDate?: string
  minFiles?: number
  maxFiles?: number
  allowedFileTypes?: string[]
}

class ValidationEngine {
  /**
   * Validates a single field value against its validation rules
   */
  validateField(field: Field, value: any): string | null {
    if (!field.validationRules) return null

    const rules = field.validationRules

    // Required validation
    if (rules.required && this.isEmpty(value)) {
      return `${field.englishName} is required`
    }

    // Skip other validations if value is empty and not required
    if (this.isEmpty(value)) return null

    // Type-specific validations
    switch (field.dataType) {
      case "text":
        return this.validateText(field, value, rules)
      case "number":
        return this.validateNumber(field, value, rules)
      case "date":
        return this.validateDate(field, value, rules)
      case "textarea":
        return this.validateText(field, value, rules)
      case "attachment":
        return this.validateAttachment(field, value, rules)
      default:
        return this.validateText(field, value, rules)
    }
  }

  /**
   * Validates multiple fields at once
   */
  validateFields(fields: Field[], formData: { [key: string]: any }): ValidationResult {
    const errors: { [fieldId: string]: string } = {}

    fields.forEach((field) => {
      const value = formData[field.id]
      const error = this.validateField(field, value)
      if (error) {
        errors[field.id] = error
      }
    })

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    }
  }

  /**
   * Validates text fields
   */
  private validateText(field: Field, value: string, rules: ValidationRule): string | null {
    if (typeof value !== "string") {
      return `${field.englishName} must be text`
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${field.englishName} must be at least ${rules.minLength} characters`
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${field.englishName} must not exceed ${rules.maxLength} characters`
    }

    return null
  }

  /**
   * Validates number fields
   */
  private validateNumber(field: Field, value: any, rules: ValidationRule): string | null {
    const numValue = Number.parseFloat(value)

    if (isNaN(numValue)) {
      return `${field.englishName} must be a valid number`
    }

    if (rules.min !== undefined && numValue < rules.min) {
      return `${field.englishName} must be at least ${rules.min}`
    }

    if (rules.max !== undefined && numValue > rules.max) {
      return `${field.englishName} must not exceed ${rules.max}`
    }

    return null
  }

  /**
   * Validates date fields
   */
  private validateDate(field: Field, value: string, rules: ValidationRule): string | null {
    const dateValue = new Date(value)

    if (isNaN(dateValue.getTime())) {
      return `${field.englishName} must be a valid date`
    }

    if (rules.fromDate) {
      const fromDate = new Date(rules.fromDate)
      if (dateValue < fromDate) {
        return `${field.englishName} must be after ${this.formatDate(fromDate)}`
      }
    }

    if (rules.toDate) {
      const toDate = new Date(rules.toDate)
      if (dateValue > toDate) {
        return `${field.englishName} must be before ${this.formatDate(toDate)}`
      }
    }

    return null
  }

  /**
   * Validates attachment fields
   */
  private validateAttachment(field: Field, value: FileList | File[] | null, rules: ValidationRule): string | null {
    const fileCount = value ? (value instanceof FileList ? value.length : value.length) : 0

    if (rules.minFiles && fileCount < rules.minFiles) {
      return `${field.englishName} requires at least ${rules.minFiles} file(s)`
    }

    if (rules.maxFiles && fileCount > rules.maxFiles) {
      return `${field.englishName} cannot exceed ${rules.maxFiles} file(s)`
    }

    // Validate file types if specified
    if (rules.allowedFileTypes && value) {
      const files = value instanceof FileList ? Array.from(value) : value
      const invalidFiles = files.filter((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase()
        return !rules.allowedFileTypes?.includes(fileExtension || "")
      })

      if (invalidFiles.length > 0) {
        return `${field.englishName} only accepts files of type: ${rules.allowedFileTypes.join(", ")}`
      }
    }

    return null
  }

  /**
   * Checks if a value is empty
   */
  private isEmpty(value: any): boolean {
    if (value === null || value === undefined) return true
    if (typeof value === "string") return value.trim() === ""
    if (Array.isArray(value)) return value.length === 0
    if (value instanceof FileList) return value.length === 0
    return false
  }

  /**
   * Formats date for display in error messages
   */
  private formatDate(date: Date): string {
    return date.toLocaleDateString()
  }

  /**
   * Creates validation rules for different field types
   */
  createValidationRules(dataType: string, options: Partial<ValidationRule> = {}): ValidationRule {
    const baseRules: ValidationRule = {
      required: options.required || false,
    }

    switch (dataType) {
      case "text":
      case "textarea":
        return {
          ...baseRules,
          minLength: options.minLength,
          maxLength: options.maxLength,
        }

      case "number":
        return {
          ...baseRules,
          min: options.min,
          max: options.max,
        }

      case "date":
        return {
          ...baseRules,
          fromDate: options.fromDate,
          toDate: options.toDate,
        }

      case "attachment":
        return {
          ...baseRules,
          minFiles: options.minFiles,
          maxFiles: options.maxFiles,
          allowedFileTypes: options.allowedFileTypes,
        }

      default:
        return baseRules
    }
  }

  /**
   * Validates form data against a schema
   */
  validateSchema(schema: { [fieldId: string]: ValidationRule }, formData: { [key: string]: any }): ValidationResult {
    const errors: { [fieldId: string]: string } = {}

    Object.entries(schema).forEach(([fieldId, rules]) => {
      const value = formData[fieldId]

      // Create a mock field for validation
      const mockField: Field = {
        id: fieldId,
        englishName: fieldId,
        tamilName: fieldId,
        dataType: "text", // Default, should be specified in schema
        validationRules: rules,
        componentId: "",
        englishDescription: "",
        tamilDescription: "",
        createdBy: "",
        createdAt: "",
      }

      const error = this.validateField(mockField, value)
      if (error) {
        errors[fieldId] = error
      }
    })

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    }
  }
}

export const validationEngine = new ValidationEngine()
