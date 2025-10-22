export interface DriveFolder {
  id: string
  title: string
  description?: string
  createdBy: string
  createdAt: string
  folders: DriveNestedFolder[]
  shareConfig?: {
    allowedFileTypes: string[]
    minFileSize: number
    maxFileSize: number
    accessType: "all" | "roles" | "users"
    allowedRoles?: string[]
    allowedUserIds?: string[]
  }
}

export interface DriveNestedFolder {
  id: string
  name: string
  folderId: string
  parentFolderId?: string
  createdBy: string
  createdAt: string
  folders?: DriveNestedFolder[]
  shareConfig?: {
    allowedFileTypes: string[]
    minFileSize: number
    maxFileSize: number
    accessType: "all" | "roles" | "users"
    allowedRoles?: string[]
    allowedUserIds?: string[]
  }
}

export interface DriveFile {
  id: string
  folderId: string
  nestedFolderId?: string
  fileName: string
  fileType: string
  fileSize: number
  uploadedBy: string
  uploadedByName: string
  uploadedAt: string
  url: string
  zone: string
  district: string
  townPanchayat: string
}

export interface UserFileSummary {
  userId: string
  userName: string
  zone: string
  district: string
  townPanchayat: string
  requestedCount: number
  uploadedCount: number
  pendingCount: number
  files: DriveFile[]
  folderId: string
  folderTitle: string
}

// Mock data
let mockFolders: DriveFolder[] = [
  {
    id: "1",
    title: "Project Documents",
    description: "All project-related documents",
    createdBy: "admin",
    createdAt: "2024-01-15T10:00:00Z",
    folders: [],
  },
  {
    id: "2",
    title: "Media Assets",
    description: "Images, videos, and design files",
    createdBy: "admin",
    createdAt: "2024-01-20T09:00:00Z",
    folders: [],
  },
]

let mockFiles: DriveFile[] = [
  {
    id: "f1",
    folderId: "1",
    nestedFolderId: "nf1",
    fileName: "Service_Agreement_2024.pdf",
    fileType: "pdf",
    fileSize: 2457600,
    uploadedBy: "admin",
    uploadedByName: "Admin User",
    uploadedAt: "2024-01-16T14:30:00Z",
    url: "/placeholder.pdf",
    zone: "North Zone",
    district: "Chennai",
    townPanchayat: "Ambattur",
  },
  {
    id: "f2",
    folderId: "1",
    nestedFolderId: "nf2",
    fileName: "Q1_Report_2024.pdf",
    fileType: "pdf",
    fileSize: 1843200,
    uploadedBy: "user1",
    uploadedByName: "John Doe",
    uploadedAt: "2024-02-01T09:15:00Z",
    url: "/placeholder.pdf",
    zone: "West Zone",
    district: "Coimbatore",
    townPanchayat: "Singanallur",
  },
]

let mockNestedFolders: DriveNestedFolder[] = [
  {
    id: "nf1",
    name: "Reports",
    folderId: "1",
    createdBy: "admin",
    createdAt: "2024-01-15T10:00:00Z",
    shareConfig: {
      allowedFileTypes: ["pdf", "docx"],
      minFileSize: 1,
      maxFileSize: 10,
      accessType: "roles",
      allowedRoles: ["admin", "manager"],
    },
  },
  {
    id: "nf2",
    name: "Q1",
    folderId: "1",
    parentFolderId: "nf1",
    createdBy: "admin",
    createdAt: "2024-01-15T10:30:00Z",
  },
]

export const driveService = {
  // Folder operations
  async getFolders(): Promise<DriveFolder[]> {
    // Build nested structure for folders
    const foldersWithNesting = mockFolders.map((folder) => {
      const nestedFolders = buildNestedFolderStructure(mockNestedFolders.filter((nf) => nf.folderId === folder.id))
      return {
        ...folder,
        folders: nestedFolders,
      }
    })

    return foldersWithNesting
  },

  async createFolder(folder: Omit<DriveFolder, "id" | "createdAt" | "folders">): Promise<DriveFolder> {
    const newFolder: DriveFolder = {
      ...folder,
      id: `folder_${Date.now()}`,
      createdAt: new Date().toISOString(),
      folders: [],
    }
    mockFolders.push(newFolder)
    return newFolder
  },

  async updateFolder(id: string, updates: Partial<DriveFolder>): Promise<DriveFolder> {
    const index = mockFolders.findIndex((f) => f.id === id)
    if (index !== -1) {
      mockFolders[index] = { ...mockFolders[index], ...updates }
      return mockFolders[index]
    }
    throw new Error("Folder not found")
  },

  async deleteFolder(id: string): Promise<void> {
    mockFolders = mockFolders.filter((f) => f.id !== id)
    mockFiles = mockFiles.filter((f) => f.folderId !== id)
  },

  // File operations
  async getFiles(nestedFolderId?: string, userId?: string, userRole?: string): Promise<DriveFile[]> {
    let files = mockFiles

    if (nestedFolderId) {
      files = files.filter((f) => f.nestedFolderId === nestedFolderId)
    }

    if (userId && userRole !== "admin" && userRole !== "manager") {
      files = files.filter((f) => f.uploadedBy === userId)
    }

    return files
  },

  async getAllFilesWithFilters(filters: {
    folderId?: string
    nestedFolderId?: string
    zone?: string
    district?: string
    townPanchayat?: string
  }): Promise<DriveFile[]> {
    let files = mockFiles

    if (filters.folderId) {
      files = files.filter((f) => f.folderId === filters.folderId)
    }
    if (filters.nestedFolderId) {
      files = files.filter((f) => f.nestedFolderId === filters.nestedFolderId)
    }
    if (filters.zone) {
      files = files.filter((f) => f.zone === filters.zone)
    }
    if (filters.district) {
      files = files.filter((f) => f.district === filters.district)
    }
    if (filters.townPanchayat) {
      files = files.filter((f) => f.townPanchayat === filters.townPanchayat)
    }

    return files
  },

  async uploadFile(file: Omit<DriveFile, "id" | "uploadedAt">): Promise<DriveFile> {
    const newFile: DriveFile = {
      ...file,
      id: `file_${Date.now()}`,
      uploadedAt: new Date().toISOString(),
    }
    mockFiles.push(newFile)
    return newFile
  },

  async deleteFile(id: string): Promise<void> {
    mockFiles = mockFiles.filter((f) => f.id !== id)
  },

  async getUserFileCount(nestedFolderId: string, userId: string): Promise<number> {
    return mockFiles.filter((f) => f.nestedFolderId === nestedFolderId && f.uploadedBy === userId).length
  },

  async canUserUpload(
    nestedFolderId: string,
    userId: string,
    userRole: string,
    file: Omit<DriveFile, "id" | "uploadedAt">,
  ): Promise<{ canUpload: boolean; reason?: string }> {
    const shareConfig = this.getEffectiveShareConfig(nestedFolderId, mockNestedFolders, mockFolders)

    if (!shareConfig) {
      return { canUpload: false, reason: "Folder not found or not shared" }
    }

    if (shareConfig.accessType === "roles") {
      if (!shareConfig.allowedRoles?.includes(userRole)) {
        return { canUpload: false, reason: "No access to this folder" }
      }
    } else if (shareConfig.accessType === "users") {
      if (!shareConfig.allowedUserIds?.includes(userId)) {
        return { canUpload: false, reason: "No access to this folder" }
      }
    }

    const fileSizeInMB = file.fileSize / (1024 * 1024)
    if (fileSizeInMB < shareConfig.minFileSize || fileSizeInMB > shareConfig.maxFileSize) {
      return {
        canUpload: false,
        reason: `File size must be between ${shareConfig.minFileSize}MB and ${shareConfig.maxFileSize}MB`,
      }
    }

    return { canUpload: true }
  },

  async getUserFileSummaries(nestedFolderId?: string, userId?: string, userRole?: string): Promise<UserFileSummary[]> {
    let files = mockFiles

    if (nestedFolderId) {
      files = files.filter((f) => f.nestedFolderId === nestedFolderId)
    }

    if (userId && userRole !== "admin" && userRole !== "manager") {
      files = files.filter((f) => f.uploadedBy === userId)
    }

    const userFilesMap = new Map<string, DriveFile[]>()
    files.forEach((file) => {
      const existing = userFilesMap.get(file.uploadedBy) || []
      userFilesMap.set(file.uploadedBy, [...existing, file])
    })

    const summaries: UserFileSummary[] = []

    for (const [uploaderId, userFiles] of userFilesMap.entries()) {
      const firstFile = userFiles[0]
      const folder = mockNestedFolders.find((f) => f.id === firstFile.nestedFolderId)
      const requestedCount = folder?.shareConfig?.maxFileSize || 0
      const uploadedCount = userFiles.length

      summaries.push({
        userId: uploaderId,
        userName: firstFile.uploadedByName,
        zone: firstFile.zone,
        district: firstFile.district,
        townPanchayat: firstFile.townPanchayat,
        requestedCount,
        uploadedCount,
        pendingCount: Math.max(0, requestedCount - uploadedCount),
        files: userFiles,
        folderId: firstFile.nestedFolderId || "",
        folderTitle: folder?.name || "",
      })
    }

    return summaries
  },

  // Bulk download methods
  async bulkDownloadFiles(fileIds: string[]): Promise<{ success: boolean; message: string }> {
    const files = mockFiles.filter((f) => fileIds.includes(f.id))
    console.log(`[v0] Downloading ${files.length} files as ZIP`)

    // Simulate ZIP download
    const fileName = `smart_drive_files_${new Date().toISOString().split("T")[0]}.zip`

    return {
      success: true,
      message: `Downloaded ${files.length} file(s) as ${fileName}`,
    }
  },

  async downloadAllFiles(): Promise<{ success: boolean; message: string }> {
    console.log("[v0] Downloading all files as ZIP")
    return {
      success: true,
      message: `Downloaded ${mockFiles.length} files as all_files.zip`,
    }
  },

  async downloadByFolder(folderId: string): Promise<{ success: boolean; message: string }> {
    const files = mockFiles.filter((f) => f.folderId === folderId)
    const folder = mockFolders.find((f) => f.id === folderId)
    console.log(`[v0] Downloading ${files.length} files from folder ${folder?.title}`)
    return {
      success: true,
      message: `Downloaded ${files.length} files from ${folder?.title} as ${folder?.title.replace(/\s+/g, "_")}.zip`,
    }
  },

  async downloadByZone(zone: string): Promise<{ success: boolean; message: string }> {
    const files = mockFiles.filter((f) => f.zone === zone)
    console.log(`[v0] Downloading ${files.length} files from zone ${zone}`)
    return {
      success: true,
      message: `Downloaded ${files.length} files from ${zone} as ${zone.replace(/\s+/g, "_")}.zip`,
    }
  },

  async downloadByDistrict(district: string): Promise<{ success: boolean; message: string }> {
    const files = mockFiles.filter((f) => f.district === district)
    console.log(`[v0] Downloading ${files.length} files from district ${district}`)
    return {
      success: true,
      message: `Downloaded ${files.length} files from ${district} as ${district.replace(/\s+/g, "_")}.zip`,
    }
  },

  async downloadByTownPanchayat(townPanchayat: string): Promise<{ success: boolean; message: string }> {
    const files = mockFiles.filter((f) => f.townPanchayat === townPanchayat)
    console.log(`[v0] Downloading ${files.length} files from town panchayat ${townPanchayat}`)
    return {
      success: true,
      message: `Downloaded ${files.length} files from ${townPanchayat} as ${townPanchayat.replace(/\s+/g, "_")}.zip`,
    }
  },

  // Nested folder operations
  async createNestedFolder(
    folder: Omit<DriveNestedFolder, "id" | "createdAt" | "folders">,
  ): Promise<DriveNestedFolder> {
    const newFolder: DriveNestedFolder = {
      ...folder,
      id: `nfolder_${Date.now()}`,
      createdAt: new Date().toISOString(),
      folders: [],
    }
    mockNestedFolders.push(newFolder)
    return newFolder
  },

  async updateNestedFolder(id: string, updates: Partial<DriveNestedFolder>): Promise<DriveNestedFolder> {
    const index = mockNestedFolders.findIndex((f) => f.id === id)
    if (index !== -1) {
      mockNestedFolders[index] = { ...mockNestedFolders[index], ...updates }
      return mockNestedFolders[index]
    }
    throw new Error("Nested folder not found")
  },

  async deleteNestedFolder(id: string): Promise<void> {
    mockNestedFolders = mockNestedFolders.filter((f) => f.id !== id)
    mockFiles = mockFiles.filter((f) => f.nestedFolderId !== id)
  },

  // Helper function to get effective share config with inheritance
  getEffectiveShareConfig(
    folderId: string,
    allFolders: DriveNestedFolder[],
    databoxes?: DriveFolder[],
  ): DriveNestedFolder["shareConfig"] | null {
    const folder = allFolders.find((f) => f.id === folderId)
    if (!folder) return null

    // If folder has its own share config, return it
    if (folder.shareConfig) {
      return folder.shareConfig
    }

    // Check parent folder for inherited config
    if (folder.parentFolderId) {
      return this.getEffectiveShareConfig(folder.parentFolderId, allFolders, databoxes)
    }

    // Check if the databox (parent DriveFolder) is shared
    if (databoxes) {
      const databox = databoxes.find((db) => db.id === folder.folderId)
      if (databox?.shareConfig) {
        return databox.shareConfig
      }
    }

    return null
  },

  // Method to check if folder is shared (directly or inherited)
  isFolderShared(
    folderId: string,
    allFolders: DriveNestedFolder[],
    databoxes?: DriveFolder[],
  ): { isShared: boolean; isInherited: boolean; inheritedFrom?: "databox" | "parent" } {
    const folder = allFolders.find((f) => f.id === folderId)
    if (!folder) return { isShared: false, isInherited: false }

    // Check if folder has direct share config
    if (folder.shareConfig) {
      return { isShared: true, isInherited: false }
    }

    // Check if parent folder has share config (inherited from parent)
    if (folder.parentFolderId) {
      const parentShareStatus = this.isFolderShared(folder.parentFolderId, allFolders, databoxes)
      if (parentShareStatus.isShared) {
        return { isShared: true, isInherited: true, inheritedFrom: "parent" }
      }
    }

    // Check if databox is shared (inherited from databox)
    if (databoxes) {
      const databox = databoxes.find((db) => db.id === folder.folderId)
      if (databox?.shareConfig) {
        return { isShared: true, isInherited: true, inheritedFrom: "databox" }
      }
    }

    return { isShared: false, isInherited: false }
  },
}

function buildNestedFolderStructure(folders: DriveNestedFolder[]): DriveNestedFolder[] {
  const rootFolders = folders.filter((f) => !f.parentFolderId)

  const addChildren = (folder: DriveNestedFolder): DriveNestedFolder => {
    const childFolders = folders.filter((f) => f.parentFolderId === folder.id)
    return {
      ...folder,
      folders: childFolders.map(addChildren),
    }
  }

  return rootFolders.map(addChildren)
}
