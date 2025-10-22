module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenStorage",
    ()=>TokenStorage
]);
class TokenStorage {
    static ACCESS_TOKEN_KEY = "access_token";
    static REFRESH_TOKEN_KEY = "refresh_token";
    static USER_KEY = "user_data";
    static setTokens(accessToken, refreshToken) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static getAccessToken() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    }
    static getRefreshToken() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    }
    static setUser(user) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static getUser() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    }
    static clearAll() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static hasTokens() {
        return !!(this.getAccessToken() && this.getRefreshToken());
    }
}
}),
"[project]/projects/TITTAM/tittam_fe/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-ssr] (ecmascript)");
;
class ApiClient {
    baseUrl;
    constructor(baseUrl = "http://127.0.0.1:4000"){
        this.baseUrl = baseUrl;
    }
    async request(endpoint, options = {}) {
        try {
            const url = `${this.baseUrl}${endpoint}`;
            console.log("[v0] Making API request to:", url);
            const headers = {
                "Content-Type": "application/json",
                ...options.headers
            };
            // Add authorization headers if tokens exist and it's not a login request
            if (!endpoint.includes("/login")) {
                const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].getAccessToken();
                const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].getRefreshToken();
                if (accessToken) {
                    headers["Authorization"] = `Bearer ${accessToken}`;
                }
                if (refreshToken) {
                    headers["x-refresh-token"] = refreshToken;
                }
            }
            const config = {
                headers,
                ...options
            };
            console.log("[v0] Request config:", {
                url,
                method: config.method,
                headers
            });
            const response = await fetch(url, config);
            console.log("[v0] Response status:", response.status, response.statusText);
            const data = await response.json();
            if (!response.ok) {
                console.log("[v0] API error response:", data);
                return {
                    success: false,
                    error: data.message || `HTTP error! status: ${response.status}`
                };
            }
            console.log("[v0] API success response:", data);
            return {
                success: true,
                data
            };
        } catch (error) {
            console.error("[v0] API request failed:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            // Check if it's a network error
            if (error instanceof TypeError && error.message.includes("fetch")) {
                return {
                    success: false,
                    error: `Network error: Unable to connect to API server at ${this.baseUrl}. Please ensure the API server is running.`
                };
            }
            return {
                success: false,
                error: errorMessage
            };
        }
    }
    async get(endpoint) {
        return this.request(endpoint, {
            method: "GET"
        });
    }
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: "POST",
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: "PUT",
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async delete(endpoint) {
        return this.request(endpoint, {
            method: "DELETE"
        });
    }
    async patch(endpoint, data) {
        return this.request(endpoint, {
            method: "PATCH",
            body: data ? JSON.stringify(data) : undefined
        });
    }
}
const apiClient = new ApiClient();
}),
"[project]/projects/TITTAM/tittam_fe/services/auth-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/api-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-ssr] (ecmascript)");
;
;
class AuthService {
    BASE_ENDPOINT = "/api/v1/users";
    async login(credentials) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${this.BASE_ENDPOINT}/login`, credentials);
        if (response.success && response.data) {
            // Map API user object to frontend User interface
            const apiUser = response.data.user;
            const user = {
                id: apiUser._id,
                username: apiUser.email,
                email: apiUser.email,
                role: apiUser.role,
                name: apiUser.name,
                phone: apiUser.phone,
                isActive: apiUser.isActive,
                userId: apiUser.userId,
                currentLoginAt: apiUser.currentLoginAt,
                lastLoginAt: apiUser.lastLoginAt
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].setTokens(response.data.accessToken, response.data.refreshToken);
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].setUser(user);
            return {
                user,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            };
        }
        throw new Error(response.error || "Login failed");
    }
    async logout() {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].clearAll();
    }
    async getCurrentUser() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].getUser();
    }
    isAuthenticated() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].hasTokens();
    }
    // Role helpers
    isSuperAdmin(user) {
        return user.role === "super_admin";
    }
    isAdmin(user) {
        return user.role === "admin" || user.role === "super_admin";
    }
}
const authService = new AuthService();
}),
"[project]/projects/TITTAM/tittam_fe/hooks/use-auth.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/services/auth-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenStorage"].hasTokens()) {
                    const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getCurrentUser();
                    setUser(userData);
                }
            } catch (error) {
                setUser(null);
            } finally{
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);
    const login = async (username, password)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].login({
                username,
                password
            });
            setUser(result.user);
            return true;
        } catch (error) {
            console.error("[v0] Login error:", error);
            return false;
        }
    };
    const logout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
        setUser(null);
    };
    const value = {
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/tittam_fe/hooks/use-auth.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__80177316._.js.map