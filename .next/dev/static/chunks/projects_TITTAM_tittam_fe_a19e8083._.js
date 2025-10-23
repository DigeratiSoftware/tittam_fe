(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
            localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
        }
    }
    static getAccessToken() {
        if ("TURBOPACK compile-time truthy", 1) {
            return localStorage.getItem(this.ACCESS_TOKEN_KEY);
        }
        //TURBOPACK unreachable
        ;
    }
    static getRefreshToken() {
        if ("TURBOPACK compile-time truthy", 1) {
            return localStorage.getItem(this.REFRESH_TOKEN_KEY);
        }
        //TURBOPACK unreachable
        ;
    }
    static setUser(user) {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        }
    }
    static getUser() {
        if ("TURBOPACK compile-time truthy", 1) {
            const userData = localStorage.getItem(this.USER_KEY);
            return userData ? JSON.parse(userData) : null;
        }
        //TURBOPACK unreachable
        ;
    }
    static clearAll() {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem(this.ACCESS_TOKEN_KEY);
            localStorage.removeItem(this.REFRESH_TOKEN_KEY);
            localStorage.removeItem(this.USER_KEY);
        }
    }
    static hasTokens() {
        return !!(this.getAccessToken() && this.getRefreshToken());
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/tittam_fe/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-client] (ecmascript)");
;
class ApiClient {
    baseUrl;
    constructor(baseUrl = "http://13.201.184.160:4000"){
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
                const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].getAccessToken();
                const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].getRefreshToken();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/tittam_fe/services/auth-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-client] (ecmascript)");
;
;
class AuthService {
    BASE_ENDPOINT = "/api/v1/users";
    async login(credentials) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${this.BASE_ENDPOINT}/login`, credentials);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].setTokens(response.data.accessToken, response.data.refreshToken);
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].setUser(user);
            return {
                user,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            };
        }
        throw new Error(response.error || "Login failed");
    }
    async logout() {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].clearAll();
    }
    async getCurrentUser() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].getUser();
    }
    isAuthenticated() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].hasTokens();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/tittam_fe/hooks/use-auth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/services/auth-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/lib/token-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const checkAuth = {
                "AuthProvider.useEffect.checkAuth": async ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$lib$2f$token$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenStorage"].hasTokens()) {
                            const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].getCurrentUser();
                            setUser(userData);
                        }
                    } catch (error) {
                        setUser(null);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.checkAuth"];
            checkAuth();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (username, password)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].login({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logout();
        setUser(null);
    };
    const value = {
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/tittam_fe/hooks/use-auth.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$tittam_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/projects/TITTAM/tittam_fe/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=projects_TITTAM_tittam_fe_a19e8083._.js.map