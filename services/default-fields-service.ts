export interface DefaultField {
  id: string
  englishName: string
  tamilName: string
  englishDescription: string
  tamilDescription: string
  dataType:
    | "dropdown"
    | "byCode"
    | "optionButton"
    | "textbox"
    | "numeric"
    | "datePicker"
    | "searchBox"
    | "vlookup"
    | "subForm"
    | "autoCalculation"
    | "subFormYesNo"
    | "cameraWithGps"
    | "map"
  validation?: string
  isRequired: boolean
  options?: string[]
  groupHeading: string
  displayOrder: number
  category: "default" | "custom"
  componentType: string
}

export interface FieldGroup {
  heading: string
  fields: DefaultField[]
}

export interface SimpleField {
  group: string
  name: string
  type: string
  validation: string
}

class DefaultFieldsService {
  private defaultFields: DefaultField[] = [
    // Scheme Details Group
    {
      id: "zone",
      englishName: "Zone",
      tamilName: "மண்டலம்",
      englishDescription: "Administrative zone selection",
      tamilDescription: "நிர்வாக மண்டல தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M1",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 1,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "districtName",
      englishName: "District Name",
      tamilName: "மாவட்ட பெயர்",
      englishDescription: "District selection",
      tamilDescription: "மாவட்ட தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M2",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 2,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "townPanchayatName",
      englishName: "Town Panchayat Name",
      tamilName: "நகர பஞ்சாயத்து பெயர்",
      englishDescription: "Town panchayat selection",
      tamilDescription: "நகர பஞ்சாயத்து தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M3",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 3,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "schemeName",
      englishName: "Scheme Name",
      tamilName: "திட்ட பெயர்",
      englishDescription: "Scheme selection",
      tamilDescription: "திட்ட தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M4",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 4,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "schemeAbbreviation",
      englishName: "Scheme Abbreviation",
      tamilName: "திட்ட சுருக்கம்",
      englishDescription: "Auto-generated scheme code",
      tamilDescription: "தானாக உருவாக்கப்பட்ட திட்ட குறியீடு",
      dataType: "byCode",
      validation: "By Code",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 5,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "year",
      englishName: "Year",
      tamilName: "ஆண்டு",
      englishDescription: "Implementation year",
      tamilDescription: "செயல்படுத்தும் ஆண்டு",
      dataType: "dropdown",
      validation: "Dropdown from M9",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 6,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "component",
      englishName: "Component",
      tamilName: "கூறு",
      englishDescription: "Component selection",
      tamilDescription: "கூறு தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M7",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 7,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "implementationAgency",
      englishName: "Implementation Agency",
      tamilName: "செயல்படுத்தும் நிறுவனம்",
      englishDescription: "Agency code generation",
      tamilDescription: "நிறுவன குறியீடு உருவாக்கம்",
      dataType: "byCode",
      validation: "By Code",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 8,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "schemeFundingTamil",
      englishName: "Scheme Funding Tamil",
      tamilName: "திட்ட நிதி தமிழ்",
      englishDescription: "Funding source in Tamil",
      tamilDescription: "தமிழில் நிதி ஆதாரம்",
      dataType: "dropdown",
      validation: "Dropdown from M7",
      isRequired: true,
      groupHeading: "Scheme Details",
      displayOrder: 9,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "announcementScheme",
      englishName: "Announcement Scheme",
      tamilName: "அறிவிப்பு திட்டம்",
      englishDescription: "Is this an announcement scheme?",
      tamilDescription: "இது அறிவிப்பு திட்டமா?",
      dataType: "optionButton",
      validation: "Yes/No",
      isRequired: true,
      options: ["Yes", "No"],
      groupHeading: "Scheme Details",
      displayOrder: 10,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "flagshipScheme",
      englishName: "Flagship Scheme",
      tamilName: "முக்கிய திட்டம்",
      englishDescription: "Is this a flagship scheme?",
      tamilDescription: "இது முக்கிய திட்டமா?",
      dataType: "optionButton",
      validation: "Yes/No",
      isRequired: true,
      options: ["Yes", "No"],
      groupHeading: "Scheme Details",
      displayOrder: 11,
      category: "default",
      componentType: "Infrastructure",
    },

    // Work Details Group
    {
      id: "wardNo",
      englishName: "Ward No",
      tamilName: "வார்டு எண்",
      englishDescription: "Ward number selection",
      tamilDescription: "வார்டு எண் தேர்வு",
      dataType: "dropdown",
      validation: "Dropdown from M3",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 12,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "roadTypeEnglish",
      englishName: "Road Type English",
      tamilName: "சாலை வகை ஆங்கிலம்",
      englishDescription: "Type of road in English",
      tamilDescription: "ஆங்கிலத்தில் சாலை வகை",
      dataType: "dropdown",
      validation: "Dropdown",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 13,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "roadTypeTamil",
      englishName: "Road Type Tamil",
      tamilName: "சாலை வகை தமிழ்",
      englishDescription: "Type of road in Tamil",
      tamilDescription: "தமிழில் சாலை வகை",
      dataType: "dropdown",
      validation: "Dropdown",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 14,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "workNameEnglish",
      englishName: "Work Name English",
      tamilName: "வேலை பெயர் ஆங்கிலம்",
      englishDescription: "Name of the work in English",
      tamilDescription: "ஆங்கிலத்தில் வேலையின் பெயர்",
      dataType: "textbox",
      validation: "Minimum length 10, Maximum 700",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 15,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "workNameTamil",
      englishName: "Work Name Tamil",
      tamilName: "வேலை பெயர் தமிழ்",
      englishDescription: "Name of the work in Tamil",
      tamilDescription: "தமிழில் வேலையின் பெயர்",
      dataType: "textbox",
      validation: "Minimum length 10, Maximum 700",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 16,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "noOfRoadsPackage",
      englishName: "No of Roads Package",
      tamilName: "சாலைகள் தொகுப்பு எண்ணிக்கை",
      englishDescription: "Number of roads in package",
      tamilDescription: "தொகுப்பில் உள்ள சாலைகளின் எண்ணிக்கை",
      dataType: "numeric",
      validation: "1 to 100; if >1 then open subform (enter road names, length)",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 17,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "lengthKm",
      englishName: "Length KM",
      tamilName: "நீளம் கி.மீ",
      englishDescription: "Length in kilometers",
      tamilDescription: "கிலோமீட்டரில் நீளம்",
      dataType: "numeric",
      validation: "0 to 90, up to 3 decimal places; sum auto from subform",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 18,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "estimateRupees",
      englishName: "Estimate Rupees",
      tamilName: "மதிப்பீடு ரூபாய்",
      englishDescription: "Estimated cost in rupees",
      tamilDescription: "ரூபாயில் மதிப்பிடப்பட்ட செலவு",
      dataType: "numeric",
      validation: "Min 10000, no max limit",
      isRequired: true,
      groupHeading: "Work Details",
      displayOrder: 19,
      category: "default",
      componentType: "Infrastructure",
    },

    // A.S. Details Group
    {
      id: "administrativeSanctionNo",
      englishName: "Administrative Sanction No",
      tamilName: "நிர்வாக அனுமதி எண்",
      englishDescription: "Administrative sanction number",
      tamilDescription: "நிர்வாக அனுமதி எண்",
      dataType: "textbox",
      validation: "Minimum length 6, Maximum 100",
      isRequired: true,
      groupHeading: "A.S. Details",
      displayOrder: 20,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "administrativeSanctionDate",
      englishName: "Administrative Sanction Date",
      tamilName: "நிர்வாக அனுமதி தேதி",
      englishDescription: "Administrative sanction date",
      tamilDescription: "நிர்வாக அனுமதி தேதி",
      dataType: "datePicker",
      validation: "Future dates not allowed",
      isRequired: true,
      groupHeading: "A.S. Details",
      displayOrder: 21,
      category: "default",
      componentType: "Infrastructure",
    },

    // T.S. Details Group
    {
      id: "technicalSanctionNo",
      englishName: "Technical Sanction No",
      tamilName: "தொழில்நுட்ப அனுமதி எண்",
      englishDescription: "Technical sanction number",
      tamilDescription: "தொழில்நுட்ப அனுமதி எண்",
      dataType: "textbox",
      validation: "Minimum length 6, Maximum 100",
      isRequired: true,
      groupHeading: "T.S. Details",
      displayOrder: 22,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "technicalSanctionDate",
      englishName: "Technical Sanction Date",
      tamilName: "தொழில்நுட்ப அனுமதி தேதி",
      englishDescription: "Technical sanction date",
      tamilDescription: "தொழில்நுட்ப அனுமதி தேதி",
      dataType: "datePicker",
      validation: "Future dates not allowed",
      isRequired: true,
      groupHeading: "T.S. Details",
      displayOrder: 23,
      category: "default",
      componentType: "Infrastructure",
    },

    // Tender Details Group
    {
      id: "tenderDate",
      englishName: "Tender Date",
      tamilName: "டெண்டர் தேதி",
      englishDescription: "Tender submission date",
      tamilDescription: "டெண்டர் சமர்ப்பிப்பு தேதி",
      dataType: "datePicker",
      validation: "Future dates allowed",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 24,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "contractorGstNo",
      englishName: "Contractor GST No",
      tamilName: "ஒப்பந்ததாரர் ஜிஎஸ்டி எண்",
      englishDescription: "Contractor GST number search",
      tamilDescription: "ஒப்பந்ததாரர் ஜிஎஸ்டி எண் தேடல்",
      dataType: "searchBox",
      validation: "Auto show from Contractor module",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 25,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "contractorName",
      englishName: "Contractor Name",
      tamilName: "ஒப்பந்ததாரர் பெயர்",
      englishDescription: "Contractor name lookup",
      tamilDescription: "ஒப்பந்ததாரர் பெயர் தேடல்",
      dataType: "vlookup",
      validation: "Based on GST No",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 26,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "agreementDate",
      englishName: "Agreement Date",
      tamilName: "ஒப்பந்த தேதி",
      englishDescription: "Agreement signing date",
      tamilDescription: "ஒப்பந்த கையெழுத்து தேதி",
      dataType: "datePicker",
      validation: "Future dates not allowed",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 27,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "agreementDurationValue",
      englishName: "Agreement Duration Value",
      tamilName: "ஒப்பந்த கால அளவு மதிப்பு",
      englishDescription: "Duration value for agreement",
      tamilDescription: "ஒப்பந்தத்திற்கான கால அளவு மதிப்பு",
      dataType: "numeric",
      validation: "Min 1, Max 100",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 28,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "agreementDurationUnit",
      englishName: "Agreement Duration Unit",
      tamilName: "ஒப்பந்த கால அளவு அலகு",
      englishDescription: "Duration unit for agreement",
      tamilDescription: "ஒப்பந்தத்திற்கான கால அளவு அலகு",
      dataType: "dropdown",
      validation: "Months, Days, Years",
      isRequired: true,
      options: ["Months", "Days", "Years"],
      groupHeading: "Tender Details",
      displayOrder: 29,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "workOrderDate",
      englishName: "Work Order Date",
      tamilName: "வேலை ஆர்டர் தேதி",
      englishDescription: "Work order issue date",
      tamilDescription: "வேலை ஆர்டர் வழங்கிய தேதி",
      dataType: "datePicker",
      validation: "Future dates not allowed",
      isRequired: true,
      groupHeading: "Tender Details",
      displayOrder: 30,
      category: "default",
      componentType: "Infrastructure",
    },

    // Work Progress Group
    {
      id: "stage",
      englishName: "Stage",
      tamilName: "நிலை",
      englishDescription: "Current work stage",
      tamilDescription: "தற்போதைய வேலை நிலை",
      dataType: "dropdown",
      validation: "Dropdown from M8",
      isRequired: true,
      groupHeading: "Work Progress",
      displayOrder: 31,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "progressPercent",
      englishName: "Progress Percent",
      tamilName: "முன்னேற்ற சதவீதம்",
      englishDescription: "Work progress percentage",
      tamilDescription: "வேலை முன்னேற்ற சதவீதம்",
      dataType: "dropdown",
      validation: "Based on M8",
      isRequired: true,
      groupHeading: "Work Progress",
      displayOrder: 32,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "presentStatus",
      englishName: "Present Status",
      tamilName: "தற்போதைய நிலை",
      englishDescription: "Current status description",
      tamilDescription: "தற்போதைய நிலை விளக்கம்",
      dataType: "textbox",
      validation: "Min length 6, Max length 200",
      isRequired: true,
      groupHeading: "Work Progress",
      displayOrder: 33,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "probableCompletionDate",
      englishName: "Probable Completion Date",
      tamilName: "சாத்தியமான முடிவு தேதி",
      englishDescription: "Expected completion date",
      tamilDescription: "எதிர்பார்க்கப்படும் முடிவு தேதி",
      dataType: "datePicker",
      validation: "Only future dates allowed",
      isRequired: true,
      groupHeading: "Work Progress",
      displayOrder: 34,
      category: "default",
      componentType: "Infrastructure",
    },

    // Fund Details Group
    {
      id: "fundReleasedRupees",
      englishName: "Fund Released Rupees",
      tamilName: "வெளியிடப்பட்ட நிதி ரூபாய்",
      englishDescription: "Fund released amount",
      tamilDescription: "வெளியிடப்பட்ட நிதி தொகை",
      dataType: "subForm",
      validation: "Separate master",
      isRequired: true,
      groupHeading: "Fund Details",
      displayOrder: 35,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "expenditureRupees",
      englishName: "Expenditure Rupees",
      tamilName: "செலவு ரூபாய்",
      englishDescription: "Total expenditure amount",
      tamilDescription: "மொத்த செலவு தொகை",
      dataType: "subForm",
      validation: "Separate master",
      isRequired: true,
      groupHeading: "Fund Details",
      displayOrder: 36,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "balanceOnFundReleased",
      englishName: "Balance On Fund Released",
      tamilName: "வெளியிடப்பட்ட நிதியில் இருப்பு",
      englishDescription: "Balance from released funds",
      tamilDescription: "வெளியிடப்பட்ட நிதியிலிருந்து இருப்பு",
      dataType: "autoCalculation",
      validation: "Col 30 - Col 31",
      isRequired: false,
      groupHeading: "Fund Details",
      displayOrder: 37,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "balanceOnEstimate",
      englishName: "Balance On Estimate",
      tamilName: "மதிப்பீட்டில் இருப்பு",
      englishDescription: "Balance from estimate",
      tamilDescription: "மதிப்பீட்டிலிருந்து இருப்பு",
      dataType: "autoCalculation",
      validation: "Col 14 - Col 31",
      isRequired: false,
      groupHeading: "Fund Details",
      displayOrder: 38,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "expenditurePercent",
      englishName: "Expenditure Percent",
      tamilName: "செலவு சதவீதம்",
      englishDescription: "Expenditure percentage",
      tamilDescription: "செலவு சதவீதம்",
      dataType: "autoCalculation",
      validation: "Col 31 / Col 14 * 100",
      isRequired: false,
      groupHeading: "Fund Details",
      displayOrder: 39,
      category: "default",
      componentType: "Infrastructure",
    },

    // Completion Details Group
    {
      id: "completionReport",
      englishName: "Completion Report",
      tamilName: "முடிவு அறிக்கை",
      englishDescription: "Work completion report",
      tamilDescription: "வேலை முடிவு அறிக்கை",
      dataType: "subFormYesNo",
      validation: "Separate master",
      isRequired: true,
      groupHeading: "Completion Details",
      displayOrder: 40,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "uccrDetails",
      englishName: "UCCR Details",
      tamilName: "யுசிசிஆர் விவரங்கள்",
      englishDescription: "UCCR submission details",
      tamilDescription: "யுசிசிஆர் சமர்ப்பிப்பு விவரங்கள்",
      dataType: "subForm",
      validation: "Separate master",
      isRequired: true,
      groupHeading: "Completion Details",
      displayOrder: 41,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "workPhotosUrl",
      englishName: "Work Photos URL",
      tamilName: "வேலை புகைப்படங்கள் யூஆர்எல்",
      englishDescription: "Work progress photos",
      tamilDescription: "வேலை முன்னேற்ற புகைப்படங்கள்",
      dataType: "cameraWithGps",
      validation: "Up to 4 photos, 15MB each, GPS & date tag",
      isRequired: true,
      groupHeading: "Completion Details",
      displayOrder: 42,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "geoLocation",
      englishName: "Geo Location",
      tamilName: "புவியியல் இடம்",
      englishDescription: "Geographic location coordinates",
      tamilDescription: "புவியியல் இட ஆயத்தொலைவுகள்",
      dataType: "map",
      validation: "Select from map or paste",
      isRequired: true,
      groupHeading: "Completion Details",
      displayOrder: 43,
      category: "default",
      componentType: "Infrastructure",
    },
    {
      id: "pendingReason",
      englishName: "Pending Reason",
      tamilName: "நிலுவை காரணம்",
      englishDescription: "Reason for pending status",
      tamilDescription: "நிலுவை நிலைக்கான காரணம்",
      dataType: "textbox",
      validation: "Min length 6, Max 200",
      isRequired: false,
      groupHeading: "Completion Details",
      displayOrder: 44,
      category: "default",
      componentType: "Infrastructure",
    },

    // Meta Group
    {
      id: "workCreatedBy",
      englishName: "Work Created By",
      tamilName: "வேலையை உருவாக்கியவர்",
      englishDescription: "User who created the work",
      tamilDescription: "வேலையை உருவாக்கிய பயனர்",
      dataType: "textbox",
      validation: "Future reference",
      isRequired: false,
      groupHeading: "Meta",
      displayOrder: 45,
      category: "default",
      componentType: "Infrastructure",
    },
  ]

  private simpleFields: SimpleField[] = [
    {
      group: "Scheme Details",
      name: "zone",
      type: "dropdown",
      validation: "Dropdown from M1",
    },
    {
      group: "Scheme Details",
      name: "districtName",
      type: "dropdown",
      validation: "Dropdown from M2",
    },
    {
      group: "Scheme Details",
      name: "townPanchayatName",
      type: "dropdown",
      validation: "Dropdown from M3",
    },
    {
      group: "Scheme Details",
      name: "schemeName",
      type: "dropdown",
      validation: "Dropdown from M4",
    },
    {
      group: "Scheme Details",
      name: "schemeAbbreviation",
      type: "byCode",
      validation: "By Code",
    },
    {
      group: "Scheme Details",
      name: "year",
      type: "dropdown",
      validation: "Dropdown from M9",
    },
    {
      group: "Scheme Details",
      name: "component",
      type: "dropdown",
      validation: "Dropdown from M7",
    },
    {
      group: "Scheme Details",
      name: "implementationAgency",
      type: "byCode",
      validation: "By Code",
    },
    {
      group: "Scheme Details",
      name: "schemeFundingTamil",
      type: "dropdown",
      validation: "Dropdown from M7",
    },
    {
      group: "Scheme Details",
      name: "announcementScheme",
      type: "optionButton",
      validation: "Yes/No",
    },
    {
      group: "Scheme Details",
      name: "flagshipScheme",
      type: "optionButton",
      validation: "Yes/No",
    },
    {
      group: "Work Details",
      name: "wardNo",
      type: "dropdown",
      validation: "Dropdown from M3",
    },
    {
      group: "Work Details",
      name: "roadTypeEnglish",
      type: "dropdown",
      validation: "Dropdown",
    },
    {
      group: "Work Details",
      name: "roadTypeTamil",
      type: "dropdown",
      validation: "Dropdown",
    },
    {
      group: "Work Details",
      name: "workNameEnglish",
      type: "textbox",
      validation: "Minimum length 10, Maximum 700",
    },
    {
      group: "Work Details",
      name: "workNameTamil",
      type: "textbox",
      validation: "Minimum length 10, Maximum 700",
    },
    {
      group: "Work Details",
      name: "noOfRoadsPackage",
      type: "numeric",
      validation: "1 to 100; if >1 then open subform (enter road names, length)",
    },
    {
      group: "Work Details",
      name: "lengthKm",
      type: "numeric",
      validation: "0 to 90, up to 3 decimal places; sum auto from subform",
    },
    {
      group: "Work Details",
      name: "estimateRupees",
      type: "numeric",
      validation: "Min 10000, no max limit",
    },
    {
      group: "A.S. Details",
      name: "administrativeSanctionNo",
      type: "textbox",
      validation: "Minimum length 6, Maximum 100",
    },
    {
      group: "A.S. Details",
      name: "administrativeSanctionDate",
      type: "datePicker",
      validation: "Future dates not allowed",
    },
    {
      group: "T.S. Details",
      name: "technicalSanctionNo",
      type: "textbox",
      validation: "Minimum length 6, Maximum 100",
    },
    {
      group: "T.S. Details",
      name: "technicalSanctionDate",
      type: "datePicker",
      validation: "Future dates not allowed",
    },
    {
      group: "Tender Details",
      name: "tenderDate",
      type: "datePicker",
      validation: "Future dates allowed",
    },
    {
      group: "Tender Details",
      name: "contractorGstNo",
      type: "searchBox",
      validation: "Auto show from Contractor module",
    },
    {
      group: "Tender Details",
      name: "contractorName",
      type: "vlookup",
      validation: "Based on GST No",
    },
    {
      group: "Tender Details",
      name: "agreementDate",
      type: "datePicker",
      validation: "Future dates not allowed",
    },
    {
      group: "Tender Details",
      name: "agreementDurationValue",
      type: "numeric",
      validation: "Min 1, Max 100",
    },
    {
      group: "Tender Details",
      name: "agreementDurationUnit",
      type: "dropdown",
      validation: "Months, Days, Years",
    },
    {
      group: "Tender Details",
      name: "workOrderDate",
      type: "datePicker",
      validation: "Future dates not allowed",
    },
    {
      group: "Work Progress",
      name: "stage",
      type: "dropdown",
      validation: "Dropdown from M8",
    },
    {
      group: "Work Progress",
      name: "progressPercent",
      type: "dropdown",
      validation: "Based on M8",
    },
    {
      group: "Work Progress",
      name: "presentStatus",
      type: "textbox",
      validation: "Min length 6, Max length 200",
    },
    {
      group: "Work Progress",
      name: "probableCompletionDate",
      type: "datePicker",
      validation: "Only future dates allowed",
    },
    {
      group: "Fund Details",
      name: "fundReleasedRupees",
      type: "subForm",
      validation: "Separate master",
    },
    {
      group: "Fund Details",
      name: "expenditureRupees",
      type: "subForm",
      validation: "Separate master",
    },
    {
      group: "Fund Details",
      name: "balanceOnFundReleased",
      type: "autoCalculation",
      validation: "Col 30 - Col 31",
    },
    {
      group: "Fund Details",
      name: "balanceOnEstimate",
      type: "autoCalculation",
      validation: "Col 14 - Col 31",
    },
    {
      group: "Fund Details",
      name: "expenditurePercent",
      type: "autoCalculation",
      validation: "Col 31 / Col 14 * 100",
    },
    {
      group: "Completion Details",
      name: "completionReport",
      type: "subFormYesNo",
      validation: "Separate master",
    },
    {
      group: "Completion Details",
      name: "uccrDetails",
      type: "subForm",
      validation: "Separate master",
    },
    {
      group: "Completion Details",
      name: "workPhotosUrl",
      type: "cameraWithGps",
      validation: "Up to 4 photos, 15MB each, GPS & date tag",
    },
    {
      group: "Completion Details",
      name: "geoLocation",
      type: "map",
      validation: "Select from map or paste",
    },
    {
      group: "Completion Details",
      name: "pendingReason",
      type: "textbox",
      validation: "Min length 6, Max 200",
    },
    {
      group: "Meta",
      name: "workCreatedBy",
      type: "textbox",
      validation: "Future reference",
    },
  ]

  async getDefaultFieldsByComponent(componentType: string, category = "default"): Promise<FieldGroup[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const filteredFields = this.defaultFields.filter(
      (field) => field.componentType === componentType && field.category === category,
    )

    // Group fields by heading
    const groupedFields = filteredFields.reduce((groups: Record<string, DefaultField[]>, field) => {
      if (!groups[field.groupHeading]) {
        groups[field.groupHeading] = []
      }
      groups[field.groupHeading].push(field)
      return groups
    }, {})

    // Convert to FieldGroup array and sort fields within each group
    return Object.entries(groupedFields).map(([heading, fields]) => ({
      heading,
      fields: fields.sort((a, b) => a.displayOrder - b.displayOrder),
    }))
  }

  async addCustomField(field: Omit<DefaultField, "id" | "category">): Promise<DefaultField> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))

    const newField: DefaultField = {
      ...field,
      id: `custom_${Date.now()}`,
      category: "custom",
    }

    this.defaultFields.push(newField)
    return newField
  }

  validateField(field: DefaultField, value: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (field.isRequired && (!value || value.toString().trim() === "")) {
      errors.push(`${field.englishName} is required`)
    }

    if (field.validation && value) {
      const rules = field.validation.split("|")

      for (const rule of rules) {
        if (rule === "required") continue // Already checked above

        if (rule.startsWith("min:")) {
          const minValue = Number.parseInt(rule.split(":")[1])
          if (field.dataType === "string" && value.toString().length < minValue) {
            errors.push(`${field.englishName} must be at least ${minValue} characters`)
          } else if (field.dataType === "number" && Number.parseFloat(value) < minValue) {
            errors.push(`${field.englishName} must be at least ${minValue}`)
          }
        }

        if (rule.startsWith("max:")) {
          const maxValue = Number.parseInt(rule.split(":")[1])
          if (field.dataType === "string" && value.toString().length > maxValue) {
            errors.push(`${field.englishName} must not exceed ${maxValue} characters`)
          } else if (field.dataType === "number" && Number.parseFloat(value) > maxValue) {
            errors.push(`${field.englishName} must not exceed ${maxValue}`)
          }
        }

        if (rule === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.push(`${field.englishName} must be a valid email address`)
        }

        if (rule === "numeric" && isNaN(Number.parseFloat(value))) {
          errors.push(`${field.englishName} must be a number`)
        }

        if (rule === "date" && isNaN(Date.parse(value))) {
          errors.push(`${field.englishName} must be a valid date`)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  async getSimpleFieldsByComponent(componentType: string): Promise<SimpleField[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return all fields for Infrastructure component type
    if (componentType === "Infrastructure") {
      return this.simpleFields
    }

    return []
  }
}

export const defaultFieldsService = new DefaultFieldsService()
