"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { schemeService, type Scheme } from "@/services/scheme-service"
import { componentService, type Component } from "@/services/component-service"
import { templateService } from "@/services/template-service"
import { masterApiService } from "@/services/master-api-service"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, MapPin, ArrowLeft, Camera, Upload, X } from "lucide-react"

interface DynamicField {
  _id: string
  fieldId: string
  group: string
  name: string
  dataType: string
  isRequired: boolean
  validation: any
  options: string[]
  lov?: {
    api: string
    dependentOn: string | null
  }
  order: number
  id?: string
  isDefault?: boolean
  componentId?: string | null
  category?: string
  createdBy?: string
  createdAt?: string
  isSubForm?: boolean
}

export function CreateWorkForm() {
  const { user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [components, setComponents] = useState<Component[]>([])
  const [fields, setFields] = useState<DynamicField[]>([])
  const [selectedScheme, setSelectedScheme] = useState<string>("")
  const [selectedComponent, setSelectedComponent] = useState<string>("")
  const [formData, setFormData] = useState<{ [key: string]: any }>({})
  const [loading, setLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
  const [dropdownOptions, setDropdownOptions] = useState<{ [key: string]: any[] }>({})
  const [geolocationData, setGeolocationData] = useState<{ [key: string]: { lat: number; lng: number } }>({})
  const [cameraData, setCameraData] = useState<{ [key: string]: { file: File | null; preview: string | null } }>({})
  const [showCamera, setShowCamera] = useState<{ [key: string]: boolean }>({})
  const [videoReady, setVideoReady] = useState<Record<string, boolean>>({})
  const [showCameraModal, setShowCameraModal] = useState(false)
  const [currentCameraField, setCurrentCameraField] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    if (!authLoading && user) {
      loadSchemes()
      loadComponents()
    }
  }, [authLoading, user])

  useEffect(() => {
    if (selectedComponent) {
      loadFields(selectedComponent)
      setFormData({})
      setDropdownOptions({})
    }
  }, [selectedComponent])

  const loadSchemes = async () => {
    try {
      console.log("[v0] Loading schemes using scheme service")
      const schemesData = await schemeService.getAllSchemes()
      setSchemes(schemesData)
      console.log("[v0] Loaded schemes:", schemesData.length)
    } catch (error) {
      console.error("Failed to load schemes:", error)
      setSchemes([])
    }
  }

  const loadComponents = async () => {
    try {
      console.log("[v0] Loading components using component service")
      const componentsData = await componentService.getAllComponents()
      setComponents(componentsData)
      console.log("[v0] Loaded components:", componentsData.length)
    } catch (error) {
      console.error("Failed to load components:", error)
      setComponents([])
    }
  }

  const loadFields = async (componentId: string) => {
    try {
      console.log("[v0] Loading fields for component:", componentId)
      const response = await templateService.getFieldsByComponent(componentId)

      console.log("[v0] Raw API response:", JSON.stringify(response, null, 2))

      let fieldsData: DynamicField[] = []
      if (Array.isArray(response)) {
        console.log("[v0] Response is direct array, mapping fields...")
        fieldsData = response.map((field, index) => {
          console.log(`[v0] Field ${index}: ${field.name}, options:`, field.options)
          return {
            ...field,
            fieldId: field.id || field._id || field.fieldId,
            _id: field.id || field._id,
            options: field.options || [],
          }
        })
      } else if (response && response.success && Array.isArray(response.data)) {
        console.log("[v0] Response has nested data array, mapping fields...")
        fieldsData = response.data.map((field, index) => {
          console.log(`[v0] Field ${index}: ${field.name}, options:`, field.options)
          return {
            ...field,
            fieldId: field.id || field._id || field.fieldId,
            _id: field.id || field._id,
            options: field.options || [],
          }
        })
      }

      console.log("[v0] Fields after mapping:")
      fieldsData.forEach((field, index) => {
        if (field.dataType === "dropdown") {
          console.log(`[v0] Dropdown field ${field.name}:`, {
            hasLOV: !!field.lov,
            lovAPI: field.lov?.api,
            hasOptions: !!(field.options && Array.isArray(field.options) && field.options.length > 0),
            optionsLength: field.options?.length || 0,
            sampleOptions: field.options?.slice(0, 2),
          })
        }
      })

      fieldsData.sort((a, b) => a.order - b.order)
      setFields(fieldsData)

      console.log(
        "[v0] Fields with LOV configurations:",
        fieldsData.filter((f) => f.lov).map((f) => ({ name: f.name, lov: f.lov })),
      )

      console.log(
        "[v0] Fields with static options:",
        fieldsData
          .filter((f) => f.options && Array.isArray(f.options) && f.options.length > 0)
          .map((f) => ({
            name: f.name,
            optionsCount: f.options?.length || 0,
            sampleOptions: f.options?.slice(0, 2),
          })),
      )

      loadDropdownOptions(fieldsData)

      console.log("[v0] Loaded fields:", fieldsData.length)
    } catch (error) {
      console.error("Failed to load fields:", error)
      setFields([])
    }
  }

  const loadDropdownOptions = async (fieldsData: DynamicField[]) => {
    const options: { [key: string]: any[] } = {}

    console.log(`[v0] Starting loadDropdownOptions with ${fieldsData.length} fields`)

    for (const field of fieldsData) {
      console.log(
        `[v0] Processing field: ${field.name}, dataType: ${field.dataType}, hasLOV: ${!!field.lov}, LOV API: ${field.lov?.api || "none"}, hasStaticOptions: ${!!(field.options && Array.isArray(field.options) && field.options.length > 0)}, optionsLength: ${field.options?.length || 0}`,
      )

      if (field.options && Array.isArray(field.options) && field.options.length > 0) {
        console.log(`[v0] Using static options for field: ${field.name}, options:`, field.options)
        options[field.fieldId] = field.options.map((opt: any, index: number) => {
          if (typeof opt === "object" && (opt.englishName || opt.tamilName || opt.nameEnglish || opt.nameTamil)) {
            return {
              ...opt,
              id: opt.id || opt.englishName || opt.nameEnglish || `option-${index}`,
              value: opt.englishName || opt.nameEnglish || opt.value || `option-${index}`,
              nameEnglish: opt.englishName || opt.nameEnglish || opt.value || `option-${index}`,
              nameTamil: opt.tamilName || opt.nameTamil || "",
              englishName: opt.englishName || opt.nameEnglish || opt.value || `option-${index}`,
              tamilName: opt.tamilName || opt.nameTamil || "",
            }
          } else if (typeof opt === "string") {
            return {
              nameEnglish: opt,
              nameTamil: "",
              englishName: opt,
              tamilName: "",
              id: opt,
              value: opt,
            }
          } else {
            return {
              nameEnglish: String(opt),
              nameTamil: "",
              englishName: String(opt),
              tamilName: "",
              id: String(opt),
              value: String(opt),
            }
          }
        })
        console.log(
          `[v0] Mapped ${options[field.fieldId].length} static options for ${field.name}:`,
          options[field.fieldId],
        )
      } else if (field.lov && field.lov.api && field.dataType === "dropdown") {
        const isGeographicField =
          field.name.toLowerCase().includes("zone") ||
          field.name.toLowerCase().includes("district") ||
          field.name.toLowerCase().includes("town") ||
          field.name.toLowerCase().includes("panchayat") ||
          field.name.toLowerCase().includes("ward")

        if (isGeographicField) {
          try {
            let data: any[] = []

            console.log(`[v0] Loading dropdown options for field: ${field.name}, API: ${field.lov.api}`)

            if (field.lov.api.includes("zones") || field.name.toLowerCase().includes("zone")) {
              console.log(`[v0] Calling zones API for field: ${field.name}`)
              data = await masterApiService.getZones()
            } else if (field.lov.api.includes("districts") || field.name.toLowerCase().includes("district")) {
              if (!field.lov.dependentOn) {
                console.log(`[v0] Calling districts API for field: ${field.name}`)
                data = await masterApiService.getDistricts()
              }
            } else if (
              field.lov.api.includes("townPanchayats") ||
              field.name.toLowerCase().includes("town") ||
              field.name.toLowerCase().includes("panchayat")
            ) {
              if (!field.lov.dependentOn) {
                console.log(`[v0] Calling town panchayats API for field: ${field.name}`)
                data = await masterApiService.getTownPanchayats()
              }
            } else if (field.lov.api.includes("wards") || field.name.toLowerCase().includes("ward")) {
              if (!field.lov.dependentOn) {
                console.log(`[v0] Calling wards API for field: ${field.name}`)
                data = await masterApiService.getWards()
              }
            }

            console.log(`[v0] Loaded ${data.length} options for ${field.name}:`, data.slice(0, 3))
            options[field.fieldId] = data
          } catch (error) {
            console.error(`[v0] Failed to load options for ${field.name}:`, error)
            options[field.fieldId] = []
          }
        } else {
          console.warn(
            `[v0] Non-geographic dropdown field ${field.name} has LOV API ${field.lov.api} but no static options - using empty array`,
          )
          options[field.fieldId] = []
        }
      } else if (field.dataType === "dropdown") {
        console.log(`[v0] Dropdown field ${field.name} has no LOV configuration or static options`)
        options[field.fieldId] = []
      }
    }

    console.log(
      `[v0] All dropdown options loaded:`,
      Object.keys(options).map((key) => ({ fieldId: key, optionsCount: options[key].length })),
    )
    setDropdownOptions(options)
  }

  const loadDependentOptions = async (parentFieldName: string, parentValue: string) => {
    if (!parentValue || (typeof parentValue === "string" && parentValue.trim() === "") || parentValue === "") {
      console.log(`[v0] Parent value is empty, skipping dependent options load`)
      return
    }

    const dependentFields = fields.filter((f) => f.lov?.dependentOn === parentFieldName)
    console.log(`[v0] Loading dependent options for parent: ${parentFieldName}, value: ${parentValue}`)
    console.log(
      `[v0] Found ${dependentFields.length} dependent fields:`,
      dependentFields.map((f) => f.name),
    )

    for (const field of dependentFields) {
      try {
        let data: any[] = []

        switch (field.lov?.api) {
          case "/api/lov/districts":
          case "/api/v1/districts":
            console.log(`[v0] Loading districts for zone: ${parentValue}`)
            data = await masterApiService.getDistricts(parentValue)
            break
          case "/api/lov/town-panchayats":
          case "/api/v1/town-panchayats":
            console.log(`[v0] Loading town panchayats for district: ${parentValue}`)
            data = await masterApiService.getTownPanchayats(parentValue)
            break
          case "/api/lov/wards":
          case "/api/v1/wards":
            console.log(`[v0] Loading wards for town panchayat: ${parentValue}`)
            data = await masterApiService.getWards(parentValue)
            break
          case "/api/lov/contractorNames":
            console.log(`[v0] Loading contractor names for GST: ${parentValue}`)
            data = await masterApiService.getContractorNames(parentValue)
            break
          default:
            console.warn(`[v0] No dependent loading logic for API: ${field.lov?.api}`)
            if (field.name.toLowerCase().includes("district")) {
              console.log(`[v0] Inferring districts API call for field: ${field.name}`)
              data = await masterApiService.getDistricts(parentValue)
            } else if (field.name.toLowerCase().includes("town") || field.name.toLowerCase().includes("panchayat")) {
              console.log(`[v0] Inferring town panchayats API call for field: ${field.name}`)
              data = await masterApiService.getTownPanchayats(parentValue)
            } else if (field.name.toLowerCase().includes("ward")) {
              console.log(`[v0] Inferring wards API call for field: ${field.name}`)
              data = await masterApiService.getWards(parentValue)
            }
        }

        console.log(`[v0] Loaded ${data.length} dependent options for ${field.name}:`, data)
        setDropdownOptions((prev) => ({
          ...prev,
          [field.fieldId]: data,
        }))

        setFormData((prev) => {
          const newData = { ...prev }
          delete newData[field.fieldId]

          return newData
        })
      } catch (error) {
        console.error(`[v0] Failed to load dependent options for ${field.name}:`, error)
        setDropdownOptions((prev) => ({
          ...prev,
          [field.fieldId]: [],
        }))
      }
    }
  }

  const handleFieldChange = async (fieldId: string, value: any) => {
    console.log(`[v0] Field changed: ${fieldId} = ${value}`)

    setFormData((prev) => {
      const newData = { ...prev, [fieldId]: value }

      const field = fields.find((f) => f.fieldId === fieldId)
      if (field) {
        console.log(`[v0] Field found: ${field.name}, checking for dependents`)

        // Check if this field change affects any calculation fields
        const calculationFields = fields.filter((f) => f.dataType === "calculation")
        calculationFields.forEach((calcField) => {
          const calculatedValue = performCalculation(calcField, newData)
          if (calculatedValue !== null && calculatedValue !== undefined) {
            console.log(`[v0] Calculated value for ${calcField.name}: ${calculatedValue}`)
            newData[calcField.fieldId] = calculatedValue
          }
        })

        // Handle English-Tamil field mapping
        if (field.name.toLowerCase().includes("english") && field.name.toLowerCase().includes("type")) {
          const tamilFieldName = field.name.replace(/english/i, "Tamil").replace(/English/i, "Tamil")
          const tamilField = fields.find((f) => f.name === tamilFieldName)

          if (tamilField) {
            const fieldOptions = dropdownOptions[fieldId] || []
            const selectedOption = fieldOptions.find((opt: any) => {
              const optionValue = opt.englishName || opt.nameEnglish || opt.name || opt.value || opt.id || String(opt)
              return String(optionValue) === String(value)
            })

            if (selectedOption && (selectedOption.tamilName || selectedOption.nameTamil)) {
              const tamilValue = selectedOption.tamilName || selectedOption.nameTamil
              console.log(`[v0] Auto-mapping Tamil value for ${tamilField.name}: ${tamilValue}`)
              newData[tamilField.fieldId] = tamilValue
            }
          }
        }

        const dependentFields = fields.filter((f) => f.lov?.dependentOn === field.name)
        console.log(`[v0] Found ${dependentFields.length} dependent fields to clear`)

        dependentFields.forEach((depField) => {
          console.log(`[v0] Clearing dependent field: ${depField.name}`)
          delete newData[depField.fieldId]

          setDropdownOptions((prevOptions) => ({
            ...prevOptions,
            [depField.fieldId]: [],
          }))
        })

        const hasValue = value !== null && value !== undefined && value !== ""
        const isNonEmptyString = typeof value === "string" && value.trim() !== ""
        const isNonEmptyValue = typeof value !== "string" && value !== ""

        if (hasValue && (isNonEmptyString || isNonEmptyValue)) {
          const fieldOptions = dropdownOptions[fieldId] || []
          const selectedOption = fieldOptions.find((opt: any) => {
            const optionValue =
              opt.zoneId ||
              opt.districtId ||
              opt.tpId ||
              opt.townPanchayatId ||
              opt.wardId ||
              opt.id ||
              opt.value ||
              opt._id
            return String(optionValue) === String(value)
          })

          let dependentValue = value
          if (selectedOption) {
            if (field.name.toLowerCase().includes("zone")) {
              dependentValue = selectedOption.zoneId || value
            } else if (field.name.toLowerCase().includes("district")) {
              dependentValue = selectedOption.districtId || value
            } else if (field.name.toLowerCase().includes("town") || field.name.toLowerCase().includes("panchayat")) {
              dependentValue = selectedOption.tpId || selectedOption.townPanchayatId || value
            }

            console.log(
              `[v0] Extracted dependent value for ${field.name}: ${dependentValue} (from option:`,
              selectedOption,
              ")",
            )
          }

          if (selectedOption) {
            const dependentFieldIds = dependentFields.map((f) => f.fieldId)
            setFormData((prev) => ({
              ...prev,
              ...dependentFieldIds.reduce((acc, id) => ({ ...acc, [id]: null }), {}),
            }))
          }

          dependentFields.forEach((depField) => {
            loadDependentOptions(field.name, dependentValue)
          })
        }
      }

      return newData
    })
  }

  const validateField = (field: DynamicField, value: any): string | null => {
    const isEmpty =
      !value || (typeof value === "string" && value.trim() === "") || (typeof value !== "string" && value === "")

    if (field.isRequired && isEmpty) {
      return `${field.name} is required`
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors: { [key: string]: string } = {}
    fields.forEach((field) => {
      const error = validateField(field, formData[field.fieldId])
      if (error) {
        errors[field.fieldId] = error
      }
    })

    setValidationErrors(errors)

    if (Object.keys(errors).length > 0) {
      console.log("[v0] Form validation failed:", errors)
      return
    }

    setLoading(true)
    try {
      console.log("[v0] Submitting work form:", formData)

      const selectedSchemeData = schemes.find((s) => s.schemeId === selectedScheme)
      const selectedComponentData = components.find((c) => c.componentId === selectedComponent)

      if (!selectedSchemeData || !selectedComponentData) {
        throw new Error("Selected scheme or component not found")
      }

      const workData = {
        schemeId: selectedScheme,
        schemeName: selectedSchemeData.englishName,
        componentId: selectedComponent,
        componentName: selectedComponentData.englishName,
        fieldData: formData,
        createdBy: user?.email || "Unknown User",
        createdAt: new Date().toISOString(),
      }

      // Import work service dynamically to avoid SSR issues
      const { workService } = await import("@/services/work-service")
      const createdWork = await workService.createWork(workData)

      console.log("[v0] Work created successfully:", createdWork)
      alert("Work created successfully!")
      router.push("/dashboard/work")
    } catch (error) {
      console.error("Failed to create work:", error)
      alert("Failed to create work. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const generateFinancialYearOptions = () => {
    const currentYear = new Date().getFullYear()
    const options = []
    for (let i = currentYear - 4; i <= currentYear; i++) {
      options.push({
        value: `${i}-${i + 1}`,
        label: `${i}-${i + 1}`,
      })
    }
    return options
  }

  const getCurrentLocation = (fieldId: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setGeolocationData((prev) => ({
            ...prev,
            [fieldId]: { lat: latitude, lng: longitude },
          }))
          handleFieldChange(fieldId, `${latitude},${longitude}`)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to get current location. Please enter coordinates manually.")
        },
      )
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  const performCalculation = (calcField: DynamicField, formData: { [key: string]: any }): number | null => {
    try {
      console.log(`[v0] Performing calculation for field: ${calcField.name}`)

      // Handle specific fund calculation cases based on field name
      const fieldName = calcField.name.toLowerCase()

      if (fieldName.includes("balance on fund released")) {
        // Balance on Fund Released = Fund Released - Expenditure
        const fundReleased = getFieldValueByName("Fund Released", formData)
        const expenditure = getFieldValueByName("Expenditure", formData)

        if (fundReleased !== null && expenditure !== null) {
          const result = fundReleased - expenditure
          console.log(`[v0] Balance on Fund Released: ${fundReleased} - ${expenditure} = ${result}`)
          return result
        }
      } else if (fieldName.includes("balance expenditure on fund released")) {
        // Balance Expenditure on fund released = Fund Released - Expenditure
        const fundReleased = getFieldValueByName("Fund Released", formData)
        const expenditure = getFieldValueByName("Expenditure", formData)

        if (fundReleased !== null && expenditure !== null) {
          const result = fundReleased - expenditure
          console.log(`[v0] Balance Expenditure on fund released: ${fundReleased} - ${expenditure} = ${result}`)
          return result
        }
      } else if (fieldName.includes("balance expenditure on estimate")) {
        // Balance Expenditure on estimate = Estimate - Expenditure
        const estimate = getFieldValueByName("Estimate in Rupees", formData)
        const expenditure = getFieldValueByName("Expenditure", formData)

        if (estimate !== null && expenditure !== null) {
          const result = estimate - expenditure
          console.log(`[v0] Balance Expenditure on estimate: ${estimate} - ${expenditure} = ${result}`)
          return result
        }
      }

      // Generic calculation logic using validation object if available
      if (
        calcField.validation &&
        calcField.validation.field1 &&
        calcField.validation.field2 &&
        calcField.validation.operator
      ) {
        const field1Value = getFieldValueByName(calcField.validation.field1, formData)
        const field2Value = getFieldValueByName(calcField.validation.field2, formData)
        const operator = calcField.validation.operator

        if (field1Value !== null && field2Value !== null) {
          let result: number
          switch (operator) {
            case "+":
            case "add":
              result = field1Value + field2Value
              break
            case "-":
            case "subtract":
              result = field1Value - field2Value
              break
            case "*":
            case "multiply":
              result = field1Value * field2Value
              break
            case "/":
            case "divide":
              result = field2Value !== 0 ? field1Value / field2Value : 0
              break
            default:
              console.warn(`[v0] Unknown operator: ${operator}`)
              return null
          }

          console.log(`[v0] Generic calculation: ${field1Value} ${operator} ${field2Value} = ${result}`)
          return result
        }
      }

      return null
    } catch (error) {
      console.error(`[v0] Error in calculation for ${calcField.name}:`, error)
      return null
    }
  }

  const getFieldValueByName = (fieldName: string, formData: { [key: string]: any }): number | null => {
    const field = fields.find((f) => f.name === fieldName)
    if (!field) {
      console.log(`[v0] Field not found: ${fieldName}`)
      return null
    }

    const value = formData[field.fieldId]
    const numValue = Number.parseFloat(value)

    if (isNaN(numValue)) {
      console.log(`[v0] Invalid number value for ${fieldName}: ${value}`)
      return null
    }

    return numValue
  }

  const startCamera = async (fieldId: string) => {
    try {
      console.log("[v0] Starting camera for field:", fieldId)
      setCurrentCameraField(fieldId)
      setShowCameraModal(true)

      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera not supported in this browser")
      }

      console.log("[v0] Requesting camera access...")
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Use back camera on mobile
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })

      console.log("[v0] Camera access granted, stream:", stream)
      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        console.log("[v0] Video element set with stream")

        const video = videoRef.current

        const handleVideoReady = () => {
          console.log("[v0] Video ready, dimensions:", video.videoWidth, "x", video.videoHeight)
          setVideoReady((prev) => ({ ...prev, [fieldId]: true }))
        }

        // Listen for multiple events to ensure video is ready
        video.addEventListener("loadedmetadata", handleVideoReady)
        video.addEventListener("canplay", handleVideoReady)

        // Also check if video is already ready
        if (video.readyState >= 2) {
          handleVideoReady()
        }
      }

      console.log("[v0] Camera modal opened for field:", fieldId)
    } catch (error) {
      console.error("[v0] Error accessing camera:", error)
      setShowCameraModal(false)
      setCurrentCameraField(null)

      let errorMessage = "Unable to access camera. "
      if (error instanceof Error) {
        if (error.name === "NotAllowedError") {
          errorMessage += "Camera permission denied. Please allow camera access and try again."
        } else if (error.name === "NotFoundError") {
          errorMessage += "No camera found on this device."
        } else if (error.name === "NotSupportedError") {
          errorMessage += "Camera not supported in this browser."
        } else {
          errorMessage += error.message
        }
      }

      alert(errorMessage + " Please use file upload instead.")
    }
  }

  const stopCamera = (fieldId: string) => {
    console.log("[v0] Stopping camera for field:", fieldId)
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        console.log("[v0] Stopping track:", track.kind, track.label)
        track.stop()
      })
      streamRef.current = null
    }
    setShowCameraModal(false)
    setCurrentCameraField(null)
    setVideoReady((prev) => ({ ...prev, [fieldId]: false }))
  }

  const capturePhoto = (fieldId: string) => {
    console.log("[v0] Capturing photo for field:", fieldId)

    if (!videoRef.current || !canvasRef.current) {
      console.error("[v0] Video or canvas ref not available")
      alert("Camera not ready. Please try again.")
      return
    }

    const canvas = canvasRef.current
    const video = videoRef.current
    const context = canvas.getContext("2d")

    if (!context) {
      console.error("[v0] Canvas context not available")
      alert("Unable to capture photo. Please try again.")
      return
    }

    if (video.videoWidth === 0 || video.videoHeight === 0 || video.readyState < 2) {
      console.error(
        "[v0] Video not ready, dimensions:",
        video.videoWidth,
        "x",
        video.videoHeight,
        "readyState:",
        video.readyState,
      )
      alert("Camera is still loading. Please wait a moment and try again.")
      return
    }

    console.log("[v0] Video dimensions:", video.videoWidth, "x", video.videoHeight)

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    console.log("[v0] Image drawn to canvas")

    canvas.toBlob(
      (blob) => {
        if (blob) {
          console.log("[v0] Photo captured, blob size:", blob.size)
          const file = new File([blob], `photo-${Date.now()}.jpg`, { type: "image/jpeg" })
          const preview = canvas.toDataURL("image/jpeg", 0.8)

          setCameraData((prev) => ({
            ...prev,
            [fieldId]: { file, preview },
          }))

          handleFieldChange(fieldId, file)
          stopCamera(fieldId)
          console.log("[v0] Photo saved and camera stopped")
        } else {
          console.error("[v0] Failed to create blob from canvas")
          alert("Failed to capture photo. Please try again.")
        }
      },
      "image/jpeg",
      0.8,
    )
  }

  const handleFileUpload = (fieldId: string, file: File | null) => {
    if (file) {
      const preview = URL.createObjectURL(file)
      setCameraData((prev) => ({
        ...prev,
        [fieldId]: { file, preview },
      }))
      handleFieldChange(fieldId, file)
    }
  }

  const clearCameraData = (fieldId: string) => {
    const data = cameraData[fieldId]
    if (data?.preview) {
      URL.revokeObjectURL(data.preview)
    }
    setCameraData((prev) => {
      const newData = { ...prev }
      delete newData[fieldId]
      return newData
    })
    handleFieldChange(fieldId, null)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#013A65] via-[#0056A3] to-[#013A65] rounded-lg py-3 px-6 text-white shadow-lg border border-[#F3B335]/20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-white">Create Work</h1>
            <p className="text-white/90 text-sm mt-1">
              Create a new work entry with dynamic fields based on selected scheme and component
            </p>
          </div>
          <Button
            onClick={() => router.push("/dashboard/work")}
            size="sm"
            className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Back to Work List
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#F3B335]/20 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[#013A65]">
              Select Scheme <span className="text-red-500">*</span>
            </label>
            <Select value={selectedScheme} onValueChange={setSelectedScheme}>
              <SelectTrigger className="h-12 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white text-base w-full">
                <SelectValue placeholder="Choose a scheme..." />
              </SelectTrigger>
              <SelectContent>
                {schemes.map((scheme) => (
                  <SelectItem key={scheme.id} value={scheme.schemeId}>
                    {scheme.englishName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-[#013A65]">
              Select Component <span className="text-red-500">*</span>
            </label>
            <Select value={selectedComponent} onValueChange={setSelectedComponent}>
              <SelectTrigger className="h-12 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white text-base w-full">
                <SelectValue placeholder="Choose a component..." />
              </SelectTrigger>
              <SelectContent>
                {components.map((component) => (
                  <SelectItem key={component.id} value={component.componentId}>
                    {component.englishName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {fields.length > 0 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(
            fields.reduce((groups: { [key: string]: DynamicField[] }, field) => {
              const group = field.group || "General"
              if (!groups[group]) groups[group] = []
              groups[group].push(field)
              return groups
            }, {}),
          ).map(([groupName, groupFields]) => (
            <div
              key={groupName}
              className="flex flex-col h-full bg-white rounded-lg border border-[#F3B335]/20 shadow-sm overflow-hidden"
            >
              <div className="flex-shrink-0 p-4 border-b border-[#F3B335]/20">
                <div className="bg-[#F3B335] rounded-lg p-2 w-full">
                  <h3 className="text-lg font-semibold text-[#013A65]">{groupName}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {groupFields.map((field) => (
                    <div key={field.fieldId} className="space-y-2">
                      <label className="block text-sm font-medium text-[#013A65]">
                        {field.name}
                        {field.isRequired && <span className="text-red-500 ml-1">*</span>}
                      </label>

                      {field.dataType === "dropdown" && (
                        <Select
                          value={formData[field.fieldId] || ""}
                          onValueChange={(value) => handleFieldChange(field.fieldId, value)}
                        >
                          <SelectTrigger className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white w-full">
                            <SelectValue placeholder={`Select ${field.name}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {(dropdownOptions[field.fieldId] || []).map((option: any, index: number) => {
                              const optionValue =
                                option.zoneId ||
                                option.districtId ||
                                option.tpId ||
                                option.townPanchayatId ||
                                option.wardId ||
                                option.id ||
                                option.value ||
                                option._id ||
                                option
                              const optionLabel =
                                option.englishName ||
                                option.nameEnglish ||
                                option.name ||
                                option.label ||
                                option.value ||
                                String(option)

                              return (
                                <SelectItem key={`${optionValue}-${index}`} value={String(optionValue)}>
                                  {String(optionLabel)}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      )}

                      {field.dataType === "text" && (
                        <Input
                          type="text"
                          value={formData[field.fieldId] || ""}
                          onChange={(e) => handleFieldChange(field.fieldId, e.target.value)}
                          className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white w-full"
                          required={field.isRequired}
                          placeholder={`Enter ${field.name}`}
                        />
                      )}

                      {field.dataType === "number" && (
                        <Input
                          type="number"
                          value={formData[field.fieldId] || ""}
                          onChange={(e) => handleFieldChange(field.fieldId, e.target.value)}
                          className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white w-full"
                          required={field.isRequired}
                          placeholder={`Enter ${field.name}`}
                        />
                      )}

                      {field.dataType === "date" && (
                        <Input
                          type="date"
                          value={formData[field.fieldId] || ""}
                          onChange={(e) => handleFieldChange(field.fieldId, e.target.value)}
                          className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white w-full"
                          required={field.isRequired}
                        />
                      )}

                      {field.dataType === "financialYearPicker" && (
                        <Select
                          value={formData[field.fieldId] || ""}
                          onValueChange={(value) => handleFieldChange(field.fieldId, value)}
                        >
                          <SelectTrigger className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white w-full">
                            <SelectValue placeholder="Select Financial Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {generateFinancialYearOptions().map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}

                      {field.dataType === "boolean" && (
                        <div className="flex items-center space-x-3 p-3 border border-[#EDEEF0] rounded-lg bg-[#F8F8F8]">
                          <Checkbox
                            checked={formData[field.fieldId] || false}
                            onCheckedChange={(checked) => handleFieldChange(field.fieldId, checked)}
                            className="border-[#EDEEF0] data-[state=checked]:bg-[#013A65] data-[state=checked]:border-[#013A65]"
                          />
                          <span className="text-sm text-[#013A65]">Yes / Enabled</span>
                        </div>
                      )}

                      {field.dataType === "textarea" && (
                        <textarea
                          value={formData[field.fieldId] || ""}
                          onChange={(e) => handleFieldChange(field.fieldId, e.target.value)}
                          className="min-h-[80px] w-full px-3 py-2 border border-[#EDEEF0] rounded-lg focus:border-[#013A65] focus:ring-[#013A65]/20 focus:outline-none bg-white resize-vertical"
                          required={field.isRequired}
                          placeholder={`Enter ${field.name}`}
                          rows={3}
                        />
                      )}

                      {field.dataType === "file" && (
                        <div className="space-y-2">
                          <Input
                            type="file"
                            onChange={(e) => handleFieldChange(field.fieldId, e.target.files?.[0])}
                            className="h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#F3B335]/10 file:text-[#013A65] hover:file:bg-[#F3B335]/20"
                            required={field.isRequired}
                          />
                          <p className="text-xs text-[#013A65]/60">
                            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max: 10MB)
                          </p>
                        </div>
                      )}

                      {field.dataType === "geoLocation" && (
                        <div className="space-y-3">
                          <div className="flex space-x-2">
                            <Input
                              type="text"
                              value={formData[field.fieldId] || ""}
                              onChange={(e) => handleFieldChange(field.fieldId, e.target.value)}
                              className="flex-1 h-10 border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20 bg-white"
                              placeholder="Latitude, Longitude (e.g., 12.9716, 77.5946)"
                              required={field.isRequired}
                            />
                            <Button
                              type="button"
                              onClick={() => getCurrentLocation(field.fieldId)}
                              size="sm"
                              className="bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-10 px-3 text-sm font-medium flex-shrink-0"
                            >
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                          {geolocationData[field.fieldId] && (
                            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                              <p className="text-sm text-green-800">
                                <strong>Current Location:</strong> {geolocationData[field.fieldId].lat.toFixed(6)},{" "}
                                {geolocationData[field.fieldId].lng.toFixed(6)}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {field.dataType === "calculation" && (
                        <Input
                          type="text"
                          value={
                            formData[field.fieldId] !== undefined
                              ? typeof formData[field.fieldId] === "number"
                                ? formData[field.fieldId].toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  })
                                : formData[field.fieldId]
                              : "Calculated automatically"
                          }
                          className="h-10 border-[#EDEEF0] bg-[#F8F8F8] text-[#013A65] font-medium"
                          readOnly
                          placeholder="This field is calculated automatically"
                        />
                      )}

                      {field.dataType === "camera" && (
                        <div className="space-y-3">
                          {!cameraData[field.fieldId] && (
                            <div className="flex space-x-2">
                              <Button
                                type="button"
                                onClick={() => startCamera(field.fieldId)}
                                className="flex-1 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-10 px-3 text-sm font-medium"
                              >
                                <Camera className="h-4 w-4 mr-2" />
                                Take Photo
                              </Button>
                              <div className="flex-1">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleFileUpload(field.fieldId, e.target.files?.[0] || null)}
                                  className="hidden"
                                  id={`file-${field.fieldId}`}
                                />
                                <label
                                  htmlFor={`file-${field.fieldId}`}
                                  className="flex items-center justify-center w-full h-10 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-3 text-sm font-medium rounded-lg cursor-pointer"
                                >
                                  <Upload className="h-4 w-4 mr-2" />
                                  Upload File
                                </label>
                              </div>
                            </div>
                          )}

                          {cameraData[field.fieldId] && (
                            <div className="space-y-3">
                              <div className="relative">
                                <img
                                  src={cameraData[field.fieldId].preview || ""}
                                  alt="Captured photo"
                                  className="w-full h-48 object-cover rounded-lg border border-[#EDEEF0]"
                                />
                                <Button
                                  type="button"
                                  onClick={() => clearCameraData(field.fieldId)}
                                  size="sm"
                                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white border-0 shadow-lg h-8 w-8 p-0"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex space-x-2">
                                <Button
                                  type="button"
                                  onClick={() => {
                                    clearCameraData(field.fieldId)
                                    startCamera(field.fieldId)
                                  }}
                                  className="flex-1 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-10 px-3 text-sm font-medium"
                                >
                                  <Camera className="h-4 w-4 mr-2" />
                                  Retake
                                </Button>
                                <div className="flex-1">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      clearCameraData(field.fieldId)
                                      handleFileUpload(field.fieldId, e.target.files?.[0] || null)
                                    }}
                                    className="hidden"
                                    id={`replace-file-${field.fieldId}`}
                                  />
                                  <label
                                    htmlFor={`replace-file-${field.fieldId}`}
                                    className="flex items-center justify-center w-full h-10 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-3 text-sm font-medium rounded-lg cursor-pointer"
                                  >
                                    <Upload className="h-4 w-4 mr-2" />
                                    Replace
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {validationErrors[field.fieldId] && (
                        <p className="text-red-500 text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {validationErrors[field.fieldId]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              onClick={() => router.push("/dashboard/work")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || !selectedScheme || !selectedComponent}
              className="bg-[#013A65] hover:bg-[#013A65]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Creating Work...
                </>
              ) : (
                "Create Work"
              )}
            </Button>
          </div>
        </form>
      )}

      {showCameraModal && currentCameraField && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Take Photo</h3>
              <Button
                type="button"
                onClick={() => stopCamera(currentCameraField)}
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-0 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative bg-black rounded-lg overflow-hidden">
                <video ref={videoRef} autoPlay playsInline className="w-full h-80 object-cover" />
                <canvas ref={canvasRef} className="hidden" />
                {!videoReady[currentCameraField] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-white text-lg">Loading camera...</div>
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  onClick={() => capturePhoto(currentCameraField)}
                  disabled={!videoReady[currentCameraField]}
                  className="flex-1 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-4 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Capture Photo
                </Button>
                <Button
                  type="button"
                  onClick={() => stopCamera(currentCameraField)}
                  className="bg-gray-500 hover:bg-gray-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-4 text-base font-medium"
                >
                  <X className="h-5 w-5 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {authLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-[#013A65] mx-auto" />
            <span className="mt-4 block text-[#013A65]/70">Loading form...</span>
          </div>
        </div>
      )}

      {selectedComponent && fields.length === 0 && !authLoading && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <div className="text-yellow-600 text-4xl mb-4">📋</div>
          <h3 className="text-lg font-medium text-yellow-800 mb-2">No Fields Available</h3>
          <p className="text-yellow-700">
            No fields found for the selected component. Please choose a different component or contact your
            administrator.
          </p>
        </div>
      )}
    </div>
  )
}
