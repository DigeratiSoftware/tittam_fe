(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/TITTAM/Tittam_FE/services/component-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPONENT_TYPES",
    ()=>COMPONENT_TYPES,
    "componentService",
    ()=>componentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/api-client.ts [app-client] (ecmascript)");
;
const COMPONENT_TYPES = [
    "Infrastructure",
    "Individual"
];
function getComponentTypeEnglish(componentType) {
    const typeMapping = {
        Infrastructure: "Infrastructure",
        Individual: "Individual",
        infrastructure: "Infrastructure",
        individual: "Individual"
    };
    return typeMapping[componentType] || componentType;
}
function mapApiComponentToComponent(apiComponent) {
    return {
        id: apiComponent.componentId,
        componentId: apiComponent.componentId,
        englishName: apiComponent.englishName,
        tamilName: apiComponent.tamilName,
        componentType: apiComponent.componentTypeEnglish,
        componentTypeEnglish: apiComponent.componentTypeEnglish,
        remark: apiComponent.remark,
        createdDate: new Date(apiComponent.createdAt).toISOString().split("T")[0],
        createdBy: apiComponent.createdBy,
        fieldsCount: 0
    };
}
class ComponentService {
    async getAllComponents() {
        try {
            console.log("[v0] Fetching components from API...");
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/v1/components");
            if (response.success && response.data) {
                console.log("[v0] Components fetched successfully:", response.data.length);
                return response.data.map(mapApiComponentToComponent);
            }
            console.log("[v0] API response unsuccessful, returning empty array");
            return [];
        } catch (error) {
            console.error("[v0] Error fetching components:", error);
            return [];
        }
    }
    async createComponent(request) {
        try {
            console.log("[v0] Creating component:", request);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/v1/components", request);
            if (response.success && response.data) {
                console.log("[v0] Component created successfully:", response.data.componentId);
                return mapApiComponentToComponent(response.data);
            }
            throw new Error("Failed to create component");
        } catch (error) {
            console.error("[v0] Error creating component:", error);
            throw error;
        }
    }
    async getComponentById(componentId) {
        try {
            console.log("[v0] Fetching component by ID:", componentId);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1/components/${componentId}`);
            if (response.success && response.data) {
                console.log("[v0] Component fetched successfully:", response.data.componentId);
                return mapApiComponentToComponent(response.data);
            }
            return null;
        } catch (error) {
            console.error("[v0] Error fetching component:", error);
            return null;
        }
    }
    async updateComponent(componentId, request) {
        try {
            console.log("[v0] Updating component:", componentId, request);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/v1/components/${componentId}`, request);
            if (response.success && response.data) {
                console.log("[v0] Component updated successfully:", response.data.componentId);
                return mapApiComponentToComponent(response.data);
            }
            throw new Error("Failed to update component");
        } catch (error) {
            console.error("[v0] Error updating component:", error);
            throw error;
        }
    }
    async deleteComponent(componentId) {
        try {
            console.log("[v0] Deleting component:", componentId);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/v1/components/${componentId}`);
            if (response.success) {
                console.log("[v0] Component deleted successfully:", componentId);
                return;
            }
            throw new Error("Failed to delete component");
        } catch (error) {
            console.error("[v0] Error deleting component:", error);
            throw error;
        }
    }
}
const componentService = new ComponentService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_TITTAM_Tittam_FE_services_component-service_ts_eeaa9134._.js.map