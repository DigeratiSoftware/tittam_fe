(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedRoute",
    ()=>ProtectedRoute,
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProtectedRoute({ children }) {
    _s();
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
            if (!isLoading && !isAuthenticated) {
                router.push("/");
            }
        }
    }["ProtectedRoute.useEffect"], [
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ProtectedRoute, "mEH+GTDGNx6l1kiic8iucxoBZHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout,
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        roles: [
            "super_admin",
            "admin",
            "user"
        ]
    },
    {
        title: "Schemes",
        href: "/dashboard/schemes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Components",
        href: "/dashboard/components",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Templates",
        href: "/dashboard/templates",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Masters",
        href: "/dashboard/masters",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Work Management",
        href: "/dashboard/work",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        roles: [
            "super_admin",
            "admin"
        ],
        subItems: [
            {
                title: "Dashboard Reports",
                href: "/dashboard/reports/dashboard"
            },
            {
                title: "Scheme Reports",
                href: "/dashboard/reports/scheme"
            },
            {
                title: "Meeting Reports",
                href: "/dashboard/reports/meeting"
            }
        ]
    },
    {
        title: "Meeting Management",
        href: "/dashboard/meetings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Data Box",
        href: "/dashboard/drive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
        roles: [
            "super_admin",
            "admin",
            "manager",
            "user"
        ]
    },
    {
        title: "Smart View",
        href: "/dashboard/smart-view",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Smart Sheets",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        roles: [
            "super_admin",
            "admin"
        ],
        subItems: [
            {
                title: "Create Sheet",
                href: "/dashboard/smart-sheets/create"
            },
            {
                title: "View Sheets",
                href: "/dashboard/smart-sheets/view"
            }
        ]
    },
    {
        title: "Info Hub",
        href: "/dashboard/info-hub",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Contractors",
        href: "/dashboard/contractors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Support Tickets",
        href: "/dashboard/support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        roles: [
            "super_admin",
            "admin",
            "user"
        ]
    }
];
;
function DashboardLayout({ children }) {
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMenus, setExpandedMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    const filteredItems = sidebarItems.filter((item)=>item.roles.includes(user?.role || ""));
    const toggleMenu = (title)=>{
        setExpandedMenus((prev)=>prev.includes(title) ? prev.filter((item)=>item !== title) : [
                ...prev,
                title
            ]);
    };
    const renderMenuItem = (item, collapsed)=>{
        const Icon = item.icon;
        const isActive = item.href ? pathname === item.href : item.subItems?.some((sub)=>pathname === sub.href);
        const isExpanded = expandedMenus.includes(item.title);
        if (item.subItems) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!collapsed && toggleMenu(item.title),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md", collapsed ? "justify-center" : "justify-between", isActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg" : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30"),
                        title: collapsed ? item.title : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-4 w-4 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    !collapsed && item.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isExpanded ? "transform rotate-180" : "")
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    !collapsed && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-4 mt-1 space-y-1",
                        children: item.subItems.map((subItem)=>{
                            const isSubActive = pathname === subItem.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: subItem.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200", isSubActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-md" : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-sm"),
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: subItem.title
                            }, subItem.href, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 207,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                ]
            }, item.title, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md", collapsed ? "justify-center" : "", isActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg transform scale-[1.02]" : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30"),
            onClick: ()=>setIsMobileMenuOpen(false),
            title: collapsed ? item.title : undefined,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-4 w-4 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                !collapsed && item.title
            ]
        }, item.href, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    };
    const SidebarContent = ({ collapsed = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col h-full bg-gradient-to-b from-[#013A65] via-[#012A4D] to-[#013A65] border-r border-[#F3B335]/20 shadow-lg transition-all duration-300", collapsed ? "w-16" : "w-56"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 flex justify-center items-center py-3 border-b border-[#F3B335]/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png",
                                alt: "TWP Logo",
                                width: collapsed ? 32 : 40,
                                height: collapsed ? 32 : 40,
                                className: "object-contain flex-shrink-0",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-lg font-black tracking-wide",
                                children: "THITTAM"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 265,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                    lineNumber: 255,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    },
                    className: "jsx-e9fbbad3ec9935f1" + " " + "flex-1 p-3 space-y-1 bg-gradient-to-b from-[#012A4D] to-[#013A65] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "e9fbbad3ec9935f1",
                            children: "nav.jsx-e9fbbad3ec9935f1::-webkit-scrollbar{display:none}"
                        }, void 0, false, void 0, this),
                        filteredItems.map((item)=>renderMenuItem(item, collapsed))
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                    lineNumber: 269,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 p-3 border-t border-[#F3B335]/20 bg-gradient-to-r from-[#012A4D] to-[#013A65]",
                    children: !collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-[#013A65]",
                                            children: user?.name?.charAt(0) || "A"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium truncate text-white",
                                                children: user?.name
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/70",
                                                children: user?.role
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "w-full h-8 text-sm bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm",
                                onClick: handleLogout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-[#013A65]",
                                    children: user?.name?.charAt(0) || "A"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "w-8 h-8 p-0 bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm",
                                onClick: handleLogout,
                                title: "Logout",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                    lineNumber: 284,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
            lineNumber: 249,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full bg-gradient-to-br from-[#013A65] via-[#012A4D] to-[#013A65] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:flex-col md:flex-shrink-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "absolute top-4 -right-3 z-10 h-6 w-6 p-0 bg-white shadow-lg border-[#F3B335]/20 hover:bg-[#F3B335]/10",
                        onClick: ()=>setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {
                        collapsed: isDesktopSidebarCollapsed
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: isMobileMenuOpen,
                onOpenChange: setIsMobileMenuOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "md:hidden fixed top-4 left-4 z-50 h-8 w-8 bg-white/95 backdrop-blur-sm shadow-lg border-[#F3B335]/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                        side: "left",
                        className: "p-0 w-56",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto bg-[#F8F8F8]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s(DashboardLayout, "ZuzoDnZf6h577c1EuHmQKfWgNuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/services/drive-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "driveService",
    ()=>driveService
]);
// Mock data
let mockFolders = [
    {
        id: "1",
        title: "Project Documents",
        description: "All project-related documents",
        createdBy: "admin",
        createdAt: "2024-01-15T10:00:00Z",
        folders: []
    },
    {
        id: "2",
        title: "Media Assets",
        description: "Images, videos, and design files",
        createdBy: "admin",
        createdAt: "2024-01-20T09:00:00Z",
        folders: []
    }
];
let mockFiles = [
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
        townPanchayat: "Ambattur"
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
        townPanchayat: "Singanallur"
    }
];
let mockNestedFolders = [
    {
        id: "nf1",
        name: "Reports",
        folderId: "1",
        createdBy: "admin",
        createdAt: "2024-01-15T10:00:00Z",
        shareConfig: {
            allowedFileTypes: [
                "pdf",
                "docx"
            ],
            minFileSize: 1,
            maxFileSize: 10,
            accessType: "roles",
            allowedRoles: [
                "admin",
                "manager"
            ]
        }
    },
    {
        id: "nf2",
        name: "Q1",
        folderId: "1",
        parentFolderId: "nf1",
        createdBy: "admin",
        createdAt: "2024-01-15T10:30:00Z"
    }
];
const driveService = {
    // Folder operations
    async getFolders () {
        // Build nested structure for folders
        const foldersWithNesting = mockFolders.map((folder)=>{
            const nestedFolders = buildNestedFolderStructure(mockNestedFolders.filter((nf)=>nf.folderId === folder.id));
            return {
                ...folder,
                folders: nestedFolders
            };
        });
        return foldersWithNesting;
    },
    async createFolder (folder) {
        const newFolder = {
            ...folder,
            id: `folder_${Date.now()}`,
            createdAt: new Date().toISOString(),
            folders: []
        };
        mockFolders.push(newFolder);
        return newFolder;
    },
    async updateFolder (id, updates) {
        const index = mockFolders.findIndex((f)=>f.id === id);
        if (index !== -1) {
            mockFolders[index] = {
                ...mockFolders[index],
                ...updates
            };
            return mockFolders[index];
        }
        throw new Error("Folder not found");
    },
    async deleteFolder (id) {
        mockFolders = mockFolders.filter((f)=>f.id !== id);
        mockFiles = mockFiles.filter((f)=>f.folderId !== id);
    },
    // File operations
    async getFiles (nestedFolderId, userId, userRole) {
        let files = mockFiles;
        if (nestedFolderId) {
            files = files.filter((f)=>f.nestedFolderId === nestedFolderId);
        }
        if (userId && userRole !== "admin" && userRole !== "manager") {
            files = files.filter((f)=>f.uploadedBy === userId);
        }
        return files;
    },
    async getAllFilesWithFilters (filters) {
        let files = mockFiles;
        if (filters.folderId) {
            files = files.filter((f)=>f.folderId === filters.folderId);
        }
        if (filters.nestedFolderId) {
            files = files.filter((f)=>f.nestedFolderId === filters.nestedFolderId);
        }
        if (filters.zone) {
            files = files.filter((f)=>f.zone === filters.zone);
        }
        if (filters.district) {
            files = files.filter((f)=>f.district === filters.district);
        }
        if (filters.townPanchayat) {
            files = files.filter((f)=>f.townPanchayat === filters.townPanchayat);
        }
        return files;
    },
    async uploadFile (file) {
        const newFile = {
            ...file,
            id: `file_${Date.now()}`,
            uploadedAt: new Date().toISOString()
        };
        mockFiles.push(newFile);
        return newFile;
    },
    async deleteFile (id) {
        mockFiles = mockFiles.filter((f)=>f.id !== id);
    },
    async getUserFileCount (nestedFolderId, userId) {
        return mockFiles.filter((f)=>f.nestedFolderId === nestedFolderId && f.uploadedBy === userId).length;
    },
    async canUserUpload (nestedFolderId, userId, userRole, file) {
        const shareConfig = this.getEffectiveShareConfig(nestedFolderId, mockNestedFolders, mockFolders);
        if (!shareConfig) {
            return {
                canUpload: false,
                reason: "Folder not found or not shared"
            };
        }
        if (shareConfig.accessType === "roles") {
            if (!shareConfig.allowedRoles?.includes(userRole)) {
                return {
                    canUpload: false,
                    reason: "No access to this folder"
                };
            }
        } else if (shareConfig.accessType === "users") {
            if (!shareConfig.allowedUserIds?.includes(userId)) {
                return {
                    canUpload: false,
                    reason: "No access to this folder"
                };
            }
        }
        const fileSizeInMB = file.fileSize / (1024 * 1024);
        if (fileSizeInMB < shareConfig.minFileSize || fileSizeInMB > shareConfig.maxFileSize) {
            return {
                canUpload: false,
                reason: `File size must be between ${shareConfig.minFileSize}MB and ${shareConfig.maxFileSize}MB`
            };
        }
        return {
            canUpload: true
        };
    },
    async getUserFileSummaries (nestedFolderId, userId, userRole) {
        let files = mockFiles;
        if (nestedFolderId) {
            files = files.filter((f)=>f.nestedFolderId === nestedFolderId);
        }
        if (userId && userRole !== "admin" && userRole !== "manager") {
            files = files.filter((f)=>f.uploadedBy === userId);
        }
        const userFilesMap = new Map();
        files.forEach((file)=>{
            const existing = userFilesMap.get(file.uploadedBy) || [];
            userFilesMap.set(file.uploadedBy, [
                ...existing,
                file
            ]);
        });
        const summaries = [];
        for (const [uploaderId, userFiles] of userFilesMap.entries()){
            const firstFile = userFiles[0];
            const folder = mockNestedFolders.find((f)=>f.id === firstFile.nestedFolderId);
            const requestedCount = folder?.shareConfig?.maxFileSize || 0;
            const uploadedCount = userFiles.length;
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
                folderTitle: folder?.name || ""
            });
        }
        return summaries;
    },
    // Bulk download methods
    async bulkDownloadFiles (fileIds) {
        const files = mockFiles.filter((f)=>fileIds.includes(f.id));
        console.log(`[v0] Downloading ${files.length} files as ZIP`);
        // Simulate ZIP download
        const fileName = `smart_drive_files_${new Date().toISOString().split("T")[0]}.zip`;
        return {
            success: true,
            message: `Downloaded ${files.length} file(s) as ${fileName}`
        };
    },
    async downloadAllFiles () {
        console.log("[v0] Downloading all files as ZIP");
        return {
            success: true,
            message: `Downloaded ${mockFiles.length} files as all_files.zip`
        };
    },
    async downloadByFolder (folderId) {
        const files = mockFiles.filter((f)=>f.folderId === folderId);
        const folder = mockFolders.find((f)=>f.id === folderId);
        console.log(`[v0] Downloading ${files.length} files from folder ${folder?.title}`);
        return {
            success: true,
            message: `Downloaded ${files.length} files from ${folder?.title} as ${folder?.title.replace(/\s+/g, "_")}.zip`
        };
    },
    async downloadByZone (zone) {
        const files = mockFiles.filter((f)=>f.zone === zone);
        console.log(`[v0] Downloading ${files.length} files from zone ${zone}`);
        return {
            success: true,
            message: `Downloaded ${files.length} files from ${zone} as ${zone.replace(/\s+/g, "_")}.zip`
        };
    },
    async downloadByDistrict (district) {
        const files = mockFiles.filter((f)=>f.district === district);
        console.log(`[v0] Downloading ${files.length} files from district ${district}`);
        return {
            success: true,
            message: `Downloaded ${files.length} files from ${district} as ${district.replace(/\s+/g, "_")}.zip`
        };
    },
    async downloadByTownPanchayat (townPanchayat) {
        const files = mockFiles.filter((f)=>f.townPanchayat === townPanchayat);
        console.log(`[v0] Downloading ${files.length} files from town panchayat ${townPanchayat}`);
        return {
            success: true,
            message: `Downloaded ${files.length} files from ${townPanchayat} as ${townPanchayat.replace(/\s+/g, "_")}.zip`
        };
    },
    // Nested folder operations
    async createNestedFolder (folder) {
        const newFolder = {
            ...folder,
            id: `nfolder_${Date.now()}`,
            createdAt: new Date().toISOString(),
            folders: []
        };
        mockNestedFolders.push(newFolder);
        return newFolder;
    },
    async updateNestedFolder (id, updates) {
        const index = mockNestedFolders.findIndex((f)=>f.id === id);
        if (index !== -1) {
            mockNestedFolders[index] = {
                ...mockNestedFolders[index],
                ...updates
            };
            return mockNestedFolders[index];
        }
        throw new Error("Nested folder not found");
    },
    async deleteNestedFolder (id) {
        mockNestedFolders = mockNestedFolders.filter((f)=>f.id !== id);
        mockFiles = mockFiles.filter((f)=>f.nestedFolderId !== id);
    },
    // Helper function to get effective share config with inheritance
    getEffectiveShareConfig (folderId, allFolders, databoxes) {
        const folder = allFolders.find((f)=>f.id === folderId);
        if (!folder) return null;
        // If folder has its own share config, return it
        if (folder.shareConfig) {
            return folder.shareConfig;
        }
        // Check parent folder for inherited config
        if (folder.parentFolderId) {
            return this.getEffectiveShareConfig(folder.parentFolderId, allFolders, databoxes);
        }
        // Check if the databox (parent DriveFolder) is shared
        if (databoxes) {
            const databox = databoxes.find((db)=>db.id === folder.folderId);
            if (databox?.shareConfig) {
                return databox.shareConfig;
            }
        }
        return null;
    },
    // Method to check if folder is shared (directly or inherited)
    isFolderShared (folderId, allFolders, databoxes) {
        const folder = allFolders.find((f)=>f.id === folderId);
        if (!folder) return {
            isShared: false,
            isInherited: false
        };
        // Check if folder has direct share config
        if (folder.shareConfig) {
            return {
                isShared: true,
                isInherited: false
            };
        }
        // Check if parent folder has share config (inherited from parent)
        if (folder.parentFolderId) {
            const parentShareStatus = this.isFolderShared(folder.parentFolderId, allFolders, databoxes);
            if (parentShareStatus.isShared) {
                return {
                    isShared: true,
                    isInherited: true,
                    inheritedFrom: "parent"
                };
            }
        }
        // Check if databox is shared (inherited from databox)
        if (databoxes) {
            const databox = databoxes.find((db)=>db.id === folder.folderId);
            if (databox?.shareConfig) {
                return {
                    isShared: true,
                    isInherited: true,
                    inheritedFrom: "databox"
                };
            }
        }
        return {
            isShared: false,
            isInherited: false
        };
    }
};
function buildNestedFolderStructure(folders) {
    const rootFolders = folders.filter((f)=>!f.parentFolderId);
    const addChildren = (folder)=>{
        const childFolders = folders.filter((f)=>f.parentFolderId === folder.id);
        return {
            ...folder,
            folders: childFolders.map(addChildren)
        };
    };
    return rootFolders.map(addChildren);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadFileDialog",
    ()=>UploadFileDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/services/drive-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function UploadFileDialog({ open, onOpenChange, onSuccess, subfolder }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleFileChange = (e)=>{
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;
        // Validate each file
        const validFiles = [];
        let errorMsg = "";
        for (const file of files){
            const extension = file.name.split(".").pop()?.toLowerCase() || "";
            const sizeInMB = file.size / (1024 * 1024);
            if (subfolder && !subfolder.allowedFileTypes.includes(extension)) {
                errorMsg = `File ${file.name} has invalid type. Allowed: ${subfolder.allowedFileTypes.join(", ")}`;
                break;
            }
            if (subfolder && sizeInMB > subfolder.maxFileSize) {
                errorMsg = `File ${file.name} exceeds max size of ${subfolder.maxFileSize} MB`;
                break;
            }
            validFiles.push(file);
        }
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        setSelectedFiles((prev)=>[
                ...prev,
                ...validFiles
            ]);
        setError("");
    };
    const handleRemoveFile = (index)=>{
        setSelectedFiles((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (selectedFiles.length === 0 || !subfolder || !user) return;
        setError("");
        setLoading(true);
        setUploadProgress({});
        try {
            const { canUpload, reason } = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].canUserUpload(subfolder.id, user.id, user.role);
            if (!canUpload) {
                setError(reason || "Cannot upload files");
                setLoading(false);
                return;
            }
            // Upload each file
            for (const file of selectedFiles){
                const extension = file.name.split(".").pop()?.toLowerCase() || "";
                const sizeInMB = file.size / (1024 * 1024);
                setUploadProgress((prev)=>({
                        ...prev,
                        [file.name]: true
                    }));
                await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].uploadFile({
                    subfolderId: subfolder.id,
                    folderId: subfolder.folderId,
                    fileName: file.name,
                    fileType: extension,
                    fileSize: file.size,
                    uploadedBy: user.id,
                    uploadedByName: user.name,
                    url: "/placeholder.svg?height=400&width=600",
                    zone: "",
                    district: "",
                    townPanchayat: ""
                });
            }
            onSuccess();
            onOpenChange(false);
            setSelectedFiles([]);
            setUploadProgress({});
        } catch (error) {
            console.error("Failed to upload files:", error);
            setError("Failed to upload files. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[550px] max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-xl font-semibold text-[#013A65]",
                            children: "Upload Files"
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "Upload to ",
                                subfolder?.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                subfolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-muted-foreground bg-muted/30 px-3 py-2 rounded border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-[#013A65]",
                            children: "Requirements:"
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        " ",
                        subfolder.allowedFileTypes.join(", ").toUpperCase(),
                        " • Max ",
                        subfolder.maxFileSize,
                        "MB • Up to",
                        " ",
                        subfolder.maxFilesPerUser,
                        " files"
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2.5 bg-destructive/10 border border-destructive/20 text-destructive rounded text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "fileInput",
                                    className: "text-sm font-medium text-[#013A65]",
                                    children: [
                                        "Select Files ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                            lineNumber: 141,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "fileInput",
                                    type: "file",
                                    onChange: handleFileChange,
                                    accept: subfolder?.allowedFileTypes.map((type)=>`.${type}`).join(","),
                                    multiple: true,
                                    className: "cursor-pointer h-10 text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[#F3B335] file:text-[#013A65] hover:file:bg-[#F3B335]/90"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm font-medium text-[#013A65]",
                                    children: [
                                        "Selected Files (",
                                        selectedFiles.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 max-h-[250px] overflow-y-auto border rounded p-2 bg-muted/20",
                                    children: selectedFiles.map((file, index)=>{
                                        const extension = file.name.split(".").pop()?.toLowerCase() || "";
                                        const isUploading = uploadProgress[file.name];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 p-2 bg-white border rounded hover:border-[#F3B335]/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4 text-[#013A65] flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-[#013A65] truncate",
                                                            children: file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                (file.size / (1024 * 1024)).toFixed(2),
                                                                " MB • ",
                                                                extension.toUpperCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this),
                                                isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[#F3B335] font-medium",
                                                    children: "Uploading..."
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>handleRemoveFile(index),
                                                    disabled: loading,
                                                    className: "h-7 w-7 p-0 hover:bg-destructive/10 hover:text-destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, `${file.name}-${index}`, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>{
                                        onOpenChange(false);
                                        setSelectedFiles([]);
                                        setError("");
                                    },
                                    disabled: loading,
                                    className: "min-w-[90px] h-9",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: loading || selectedFiles.length === 0,
                                    className: "min-w-[110px] h-9 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white",
                                    children: loading ? `Uploading ${Object.keys(uploadProgress).length}/${selectedFiles.length}...` : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            "Upload ",
                                            selectedFiles.length
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(UploadFileDialog, "g5dP36s4gwgC86Y9rReg5DyE7jE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = UploadFileDialog;
var _c;
__turbopack_context__.k.register(_c, "UploadFileDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFilesModal",
    ()=>UserFilesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
function UserFilesModal({ open, onOpenChange, userName, files }) {
    const safeFiles = files || [];
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl max-h-[80vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-xl font-bold text-[#013A65]",
                        children: [
                            "Files Uploaded by ",
                            userName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: safeFiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                className: "h-12 w-12 mx-auto mb-4 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No files uploaded yet"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: safeFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border-l-4 border-[#F3B335] rounded-lg p-4 hover:shadow-md transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                    className: "h-5 w-5 text-[#013A65] flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium text-[#013A65] mb-1 break-words",
                                                            children: file.fileName
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-0.5 bg-[#F3B335]/20 text-[#013A65] rounded text-xs font-medium",
                                                                        children: file.fileType.toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                                        lineNumber: 61,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                                    lineNumber: 60,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: formatFileSize(file.fileSize)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: formatDate(file.uploadedAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 text-xs text-muted-foreground",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    file.zone,
                                                                    " • ",
                                                                    file.district,
                                                                    " • ",
                                                                    file.townPanchayat
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>window.open(file.url, "_blank"),
                                            className: "text-[#013A65] border-[#013A65]/20 hover:bg-[#013A65]/10 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 23
                                                }, this),
                                                "Download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 19
                                }, this)
                            }, file.id, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end pt-4 border-t",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>onOpenChange(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            "Close"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = UserFilesModal;
var _c;
__turbopack_context__.k.register(_c, "UserFilesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartDrivePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$auth$2f$protected$2d$route$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/services/drive-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$drive$2f$upload$2d$file$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/drive/upload-file-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$drive$2f$user$2d$files$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/drive/user-files-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function SmartDrivePage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [folders, setFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userSummaries, setUserSummaries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingData, setLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadingBulk, setDownloadingBulk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("table");
    const [selectedFolder, setSelectedFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedNestedFolder, setSelectedNestedFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadDialogOpen, setUploadDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUserFiles, setSelectedUserFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userFilesModalOpen, setUserFilesModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedFolders, setExpandedFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [zoneFilter, setZoneFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [districtFilter, setDistrictFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [townPanchayatFilter, setTownPanchayatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showLocationFilters, setShowLocationFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartDrivePage.useEffect": ()=>{
            loadFolders();
        }
    }["SmartDrivePage.useEffect"], []);
    const loadFolders = async ()=>{
        setLoading(true);
        try {
            const foldersData = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].getFolders();
            setFolders(foldersData);
            const allFolderIds = new Set();
            foldersData.forEach((folder)=>{
                allFolderIds.add(folder.id);
                collectAllFolderIds(folder.folders || [], allFolderIds);
            });
            setExpandedFolders(allFolderIds);
        } catch (error) {
            console.error("Failed to load folders:", error);
        } finally{
            setLoading(false);
        }
    };
    const collectAllFolderIds = (nestedFolders, idSet)=>{
        nestedFolders.forEach((folder)=>{
            idSet.add(folder.id);
            if (folder.folders && folder.folders.length > 0) {
                collectAllFolderIds(folder.folders, idSet);
            }
        });
    };
    const loadDataForFolder = async (folderId)=>{
        setLoadingData(true);
        try {
            const summariesData = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].getUserFileSummaries(folderId, user?.id, user?.role);
            setUserSummaries(summariesData);
        } catch (error) {
            console.error("Failed to load data:", error);
            toast({
                title: "Error loading data",
                description: "Failed to load folder data. Please try again.",
                variant: "destructive"
            });
        } finally{
            setLoadingData(false);
        }
    };
    const handleViewUserFiles = (summary)=>{
        setSelectedUserFiles(summary);
        setUserFilesModalOpen(true);
    };
    const toggleFolder = (folderId)=>{
        setExpandedFolders((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(folderId)) {
                newSet.delete(folderId);
            } else {
                newSet.add(folderId);
            }
            return newSet;
        });
    };
    const isLeafFolder = (folder)=>{
        return !folder.folders || folder.folders.length === 0;
    };
    const canUserAccessFolder = (folder, allFolders)=>{
        const shareConfig = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].getEffectiveShareConfig(folder.id, allFolders);
        if (!shareConfig) return false;
        if (shareConfig.accessType === "all") return true;
        if (shareConfig.accessType === "roles" && shareConfig.allowedRoles?.includes(user?.role)) return true;
        if (shareConfig.accessType === "users" && shareConfig.allowedUserIds?.includes(user?.id)) return true;
        return false;
    };
    const getAccessibleNestedFolders = (nestedFolders, allFolders)=>{
        const accessible = [];
        for (const folder of nestedFolders){
            if (canUserAccessFolder(folder, allFolders)) {
                accessible.push(folder);
            }
            if (folder.folders && folder.folders.length > 0) {
                const childAccessible = getAccessibleNestedFolders(folder.folders, allFolders);
                accessible.push(...childAccessible);
            }
        }
        return accessible;
    };
    const getAllNestedFolders = (folders)=>{
        const result = [];
        const traverse = (folderList)=>{
            for (const folder of folderList){
                result.push(folder);
                if (folder.folders && folder.folders.length > 0) {
                    traverse(folder.folders);
                }
            }
        };
        traverse(folders);
        return result;
    };
    const accessibleFolders = folders.map((folder)=>{
        const allFolders = getAllNestedFolders(folder.folders || []);
        return {
            ...folder,
            folders: folder.folders || [],
            allFolders
        };
    }).filter((folder)=>{
        const accessibleNested = getAccessibleNestedFolders(folder.folders, folder.allFolders);
        return accessibleNested.length > 0;
    });
    const filteredSummaries = userSummaries.filter((summary)=>{
        if (statusFilter === "completed" && summary.pendingCount > 0) return false;
        if (statusFilter === "pending" && summary.pendingCount === 0) return false;
        if (searchQuery && !summary.userName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        if (zoneFilter && summary.zone !== zoneFilter) return false;
        if (districtFilter && summary.district !== districtFilter) return false;
        if (townPanchayatFilter && summary.townPanchayat !== townPanchayatFilter) return false;
        return true;
    });
    const uniqueZones = Array.from(new Set(userSummaries.map((s)=>s.zone)));
    const uniqueDistricts = Array.from(new Set(userSummaries.filter((s)=>!zoneFilter || s.zone === zoneFilter).map((s)=>s.district)));
    const uniqueTownPanchayats = Array.from(new Set(userSummaries.filter((s)=>!districtFilter || s.district === districtFilter).map((s)=>s.townPanchayat)));
    const canViewAllFiles = user?.role === "admin" || user?.role === "manager";
    const handleBulkDownload = async ()=>{
        if (filteredSummaries.length === 0) {
            toast({
                title: "No files to download",
                description: "There are no files matching your current filters.",
                variant: "destructive"
            });
            return;
        }
        setDownloadingBulk(true);
        try {
            const fileIds = [];
            for (const summary of filteredSummaries){
                if (summary.files) {
                    fileIds.push(...summary.files.map((f)=>f.id));
                }
            }
            if (fileIds.length === 0) {
                toast({
                    title: "No files to download",
                    description: "The selected users have not uploaded any files yet.",
                    variant: "destructive"
                });
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].bulkDownloadFiles(fileIds);
            toast({
                title: "Download started",
                description: `Downloading ${fileIds.length} file(s) from selected folder`
            });
        } catch (error) {
            console.error("Bulk download failed:", error);
            toast({
                title: "Download failed",
                description: "Failed to download files. Please try again.",
                variant: "destructive"
            });
        } finally{
            setDownloadingBulk(false);
        }
    };
    const handleExportExcel = ()=>{
        if (filteredSummaries.length === 0) {
            toast({
                title: "No data to export",
                description: "There are no records matching your current filters.",
                variant: "destructive"
            });
            return;
        }
        const headers = [
            "User Name",
            "Zone",
            "District",
            "Town Panchayat",
            "Requested",
            "Uploaded",
            "Pending"
        ];
        const csvRows = [
            headers.join(",")
        ];
        filteredSummaries.forEach((summary)=>{
            const row = [
                `"${summary.userName}"`,
                `"${summary.zone}"`,
                `"${summary.district}"`,
                `"${summary.townPanchayat}"`,
                summary.requestedCount,
                summary.uploadedCount,
                summary.pendingCount
            ];
            csvRows.push(row.join(","));
        });
        const csvContent = csvRows.join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `smart-drive-report-${new Date().toISOString().split("T")[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({
            title: "Excel export successful",
            description: `Exported ${filteredSummaries.length} records to CSV file.`
        });
    };
    const handleExportPDF = ()=>{
        if (filteredSummaries.length === 0) {
            toast({
                title: "No data to export",
                description: "There are no records matching your current filters.",
                variant: "destructive"
            });
            return;
        }
        toast({
            title: "PDF export started",
            description: `Generating PDF with ${filteredSummaries.length} records...`
        });
        setTimeout(()=>{
            toast({
                title: "PDF export successful",
                description: `Exported ${filteredSummaries.length} records to PDF file.`
            });
        }, 1000);
    };
    const renderNestedFolders = (nestedFolders, allFolders, depth = 0)=>{
        return nestedFolders.map((folder)=>{
            if (!canUserAccessFolder(folder, allFolders)) return null;
            const hasChildren = folder.folders && folder.folders.length > 0;
            const isExpanded = expandedFolders.has(folder.id);
            const isLeaf = isLeafFolder(folder);
            const isSelected = selectedNestedFolder === folder.id;
            const shareStatus = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$drive$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["driveService"].isFolderShared(folder.id, allFolders);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (hasChildren) {
                                toggleFolder(folder.id);
                            }
                            setSelectedFolder(folder.id);
                            setSelectedNestedFolder(folder.id);
                            loadDataForFolder(folder.id);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2.5 group", isSelected ? "bg-[#013A65] text-white font-medium shadow-md" : "text-[#013A65]/80 hover:bg-[#F3B335]/10 hover:text-[#013A65]"),
                        style: {
                            paddingLeft: `${depth * 16 + 12}px`
                        },
                        children: [
                            hasChildren ? isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-4 w-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 343,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 345,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this),
                            isLeaf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 flex-shrink-0", isSelected ? "text-[#F3B335]" : "text-[#013A65]")
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 flex-shrink-0", isSelected ? "text-[#F3B335]" : "text-[#013A65]")
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 353,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate flex-1",
                                children: folder.name
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            shareStatus.isShared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium px-2 py-0.5 rounded-full", shareStatus.isInherited ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700", isSelected && "bg-white/20 text-white"),
                                children: shareStatus.isInherited ? "Inherited" : "Shared"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this),
                    hasChildren && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5",
                        children: renderNestedFolders(folder.folders, allFolders, depth + 1)
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                        lineNumber: 369,
                        columnNumber: 13
                    }, this)
                ]
            }, folder.id, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                lineNumber: 323,
                columnNumber: 9
            }, this);
        });
    };
    const selectedFolderIsLeaf = ()=>{
        if (!selectedNestedFolder) return false;
        for (const folder of accessibleFolders){
            const allFolders = getAllNestedFolders(folder.folders || []);
            const selectedFolder = allFolders.find((f)=>f.id === selectedNestedFolder);
            if (selectedFolder) {
                return isLeafFolder(selectedFolder);
            }
        }
        return false;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$auth$2f$protected$2d$route$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-semibold",
                                                children: "Smart Drive"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm mt-1",
                                                children: "Upload and manage files by databox and shares"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: viewMode === "grid" ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>setViewMode("grid"),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 border-white/20", viewMode === "grid" ? "bg-[#F3B335] text-[#013A65] hover:bg-[#F3B335]/90" : "bg-green-600 text-white hover:bg-green-700"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: viewMode === "table" ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>setViewMode("table"),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 border-white/20", viewMode === "table" ? "bg-[#F3B335] text-[#013A65] hover:bg-[#F3B335]/90" : "bg-green-600 text-white hover:bg-green-700"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            canViewAllFiles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboard/drive/manage",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "h-4 w-4 mr-1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Manage Databox"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            selectedNestedFolder && selectedFolderIsLeaf() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>setUploadDialogOpen(true),
                                                size: "sm",
                                                className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4 mr-1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Upload Files"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by user name...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: statusFilter === "all" ? "default" : "outline",
                                    size: "sm",
                                    onClick: ()=>setStatusFilter("all"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 px-6", statusFilter === "all" ? "bg-[#013A65] text-white hover:bg-[#013A65]/90" : "border-[#013A65]/20 text-[#013A65] hover:bg-[#013A65]/10"),
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: statusFilter === "completed" ? "default" : "outline",
                                    size: "sm",
                                    onClick: ()=>setStatusFilter("completed"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 px-6", statusFilter === "completed" ? "bg-green-600 text-white hover:bg-green-700" : "border-[#013A65]/20 text-green-600 hover:bg-green-50"),
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: statusFilter === "pending" ? "default" : "outline",
                                    size: "sm",
                                    onClick: ()=>setStatusFilter("pending"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 px-6", statusFilter === "pending" ? "bg-orange-600 text-white hover:bg-orange-700" : "border-[#013A65]/20 text-orange-600 hover:bg-orange-50"),
                                    children: "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setShowLocationFilters(!showLocationFilters),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 px-4 ml-auto", showLocationFilters ? "bg-[#013A65] text-white hover:bg-[#013A65]/90" : "border-[#013A65]/20 text-[#013A65] hover:bg-[#013A65]/10"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        showLocationFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: zoneFilter,
                                    onChange: (e)=>{
                                        setZoneFilter(e.target.value);
                                        setDistrictFilter("");
                                        setTownPanchayatFilter("");
                                    },
                                    className: "h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Zones"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        uniqueZones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: zone,
                                                children: zone
                                            }, zone, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: districtFilter,
                                    onChange: (e)=>{
                                        setDistrictFilter(e.target.value);
                                        setTownPanchayatFilter("");
                                    },
                                    disabled: !zoneFilter,
                                    className: "h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Districts"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this),
                                        uniqueDistricts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: district,
                                                children: district
                                            }, district, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: townPanchayatFilter,
                                    onChange: (e)=>setTownPanchayatFilter(e.target.value),
                                    disabled: !districtFilter,
                                    className: "h-11 px-4 border border-[#013A65]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013A65]/20 focus:border-[#013A65] text-sm min-w-[280px] disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Town Panchayats"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this),
                                        uniqueTownPanchayats.map((tp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: tp,
                                                children: tp
                                            }, tp, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                            lineNumber: 514,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border bg-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-72 border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg p-4 bg-gradient-to-b from-white to-gray-50/50 max-h-[calc(100vh-300px)] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-[#013A65] mb-4 text-base flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                            className: "h-5 w-5 text-[#F3B335]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Databox Tree"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-muted-foreground text-sm",
                                                    children: "Loading folders..."
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 21
                                                }, this) : accessibleFolders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-muted-foreground text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                            className: "h-10 w-10 mx-auto mb-3 opacity-30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "No accessible folders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: accessibleFolders.map((folder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>toggleFolder(folder.id),
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2.5", "text-[#013A65] hover:bg-[#F3B335]/10 hover:text-[#013A65] border border-transparent hover:border-[#F3B335]/20"),
                                                                    children: [
                                                                        expandedFolders.has(folder.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "h-4 w-4 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                            lineNumber: 592,
                                                                            columnNumber: 31
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "h-4 w-4 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                            className: "h-4 w-4 flex-shrink-0 text-[#F3B335]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate flex-1",
                                                                            children: folder.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                            lineNumber: 597,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 27
                                                                }, this),
                                                                expandedFolders.has(folder.id) && folder.folders && folder.folders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-0.5 space-y-0.5 ml-1",
                                                                    children: renderNestedFolders(folder.folders, folder.allFolders, 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, folder.id, true, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: loadingData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#013A65] mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Loading folder data..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 613,
                                                columnNumber: 21
                                            }, this) : !selectedNestedFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                        className: "h-16 w-16 mx-auto mb-4 opacity-30 text-[#013A65]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium text-[#013A65] mb-2",
                                                        children: "Select a Folder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: "Choose a folder from the tree to view uploaded files"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 21
                                            }, this) : filteredSummaries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                        className: "h-12 w-12 mx-auto mb-4 opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "No files uploaded yet in this folder."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 21
                                            }, this) : viewMode === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                                children: filteredSummaries.map((summary)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg p-4 hover:shadow-md transition-all bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-[#013A65] mb-3",
                                                                children: summary.userName
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 text-sm mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground",
                                                                                children: "Zone:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-[#013A65]",
                                                                                children: summary.zone
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 639,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground",
                                                                                children: "District:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 642,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-[#013A65]",
                                                                                children: summary.district
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 643,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 641,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground",
                                                                                children: "Town Panchayat:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 646,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-[#013A65]",
                                                                                children: summary.townPanchayat
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 645,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t pt-2 mt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground",
                                                                                        children: "Requested:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 651,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: summary.requestedCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 652,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 650,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground",
                                                                                        children: "Uploaded:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 655,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-green-600",
                                                                                        children: summary.uploadedCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 656,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 654,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground",
                                                                                        children: "Pending:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 659,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-orange-600",
                                                                                        children: summary.pendingCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 660,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 658,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>handleViewUserFiles(summary),
                                                                className: "w-full bg-[#013A65] hover:bg-[#013A65]/90 text-white",
                                                                size: "sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "h-4 w-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "View Files"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, summary.userId, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-end gap-2",
                                                        children: [
                                                            canViewAllFiles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleBulkDownload,
                                                                disabled: downloadingBulk || filteredSummaries.length === 0,
                                                                size: "sm",
                                                                className: "bg-gradient-to-r from-green-600 to-green-600/90 hover:from-green-600/90 hover:to-green-600/80 text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "h-4 w-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    downloadingBulk ? "Downloading..." : "Bulk File Downloads"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleExportExcel,
                                                                disabled: filteredSummaries.length === 0,
                                                                size: "sm",
                                                                className: "bg-green-600 hover:bg-green-700 text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                                        className: "h-4 w-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Export Excel"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleExportPDF,
                                                                disabled: filteredSummaries.length === 0,
                                                                size: "sm",
                                                                className: "bg-red-600 hover:bg-red-700 text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        className: "h-4 w-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 704,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Export PDF"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-l-4 border-[#F3B335] border-t border-r border-b border-border rounded-lg overflow-hidden bg-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "overflow-x-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                className: "w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                        className: "bg-[#F3B335]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left px-4 py-3 text-sm font-semibold min-w-[150px] text-[#013A65]",
                                                                                    children: "User Name"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 714,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left px-4 py-3 text-sm font-semibold min-w-[120px] text-[#013A65]",
                                                                                    children: "Zone"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 717,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left px-4 py-3 text-sm font-semibold min-w-[120px] text-[#013A65]",
                                                                                    children: "District"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 720,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left px-4 py-3 text-sm font-semibold min-w-[150px] text-[#013A65]",
                                                                                    children: "Town Panchayat"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 723,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]",
                                                                                    children: "Requested"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 726,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]",
                                                                                    children: "Uploaded"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 729,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-center px-4 py-3 text-sm font-semibold w-24 text-[#013A65]",
                                                                                    children: "Pending"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 732,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-center px-4 py-3 text-sm font-semibold w-28 text-[#013A65]",
                                                                                    children: "Actions"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                    lineNumber: 735,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                            lineNumber: 713,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 712,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                        children: filteredSummaries.map((summary, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-gray-100 hover:bg-[#F3B335]/5 transition-colors", index % 2 === 0 ? "bg-white" : "bg-gray-50/50"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-[#013A65] font-medium",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "truncate max-w-[200px]",
                                                                                            title: summary.userName,
                                                                                            children: summary.userName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                            lineNumber: 750,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 749,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-muted-foreground",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "truncate max-w-[120px]",
                                                                                            title: summary.zone,
                                                                                            children: summary.zone
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                            lineNumber: 755,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 754,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-muted-foreground",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "truncate max-w-[120px]",
                                                                                            title: summary.district,
                                                                                            children: summary.district
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                            lineNumber: 760,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 759,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-muted-foreground",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "truncate max-w-[150px]",
                                                                                            title: summary.townPanchayat,
                                                                                            children: summary.townPanchayat
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                            lineNumber: 765,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 764,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-center font-medium",
                                                                                        children: summary.requestedCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 769,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-center font-medium text-green-600",
                                                                                        children: summary.uploadedCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 772,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-center font-medium text-orange-600",
                                                                                        children: summary.pendingCount
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 775,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "ghost",
                                                                                            size: "sm",
                                                                                            onClick: ()=>handleViewUserFiles(summary),
                                                                                            className: "text-[#013A65] hover:bg-[#013A65]/10",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                                    className: "h-4 w-4 mr-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                                    lineNumber: 785,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                "View"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                            lineNumber: 779,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                        lineNumber: 778,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, summary.userId, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                                lineNumber: 742,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                        lineNumber: 740,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$drive$2f$upload$2d$file$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadFileDialog"], {
                    open: uploadDialogOpen,
                    onOpenChange: setUploadDialogOpen,
                    folders: folders,
                    onUploadComplete: ()=>{
                        if (selectedNestedFolder) {
                            loadDataForFolder(selectedNestedFolder);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                    lineNumber: 803,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$drive$2f$user$2d$files$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserFilesModal"], {
                    open: userFilesModalOpen,
                    onOpenChange: setUserFilesModalOpen,
                    userSummary: selectedUserFiles,
                    onFileDeleted: ()=>{
                        if (selectedNestedFolder) {
                            loadDataForFolder(selectedNestedFolder);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
                    lineNumber: 814,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/drive/page.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
_s(SmartDrivePage, "0ArjebTMklk/INxmfMxQ0GXFx7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = SmartDrivePage;
var _c;
__turbopack_context__.k.register(_c, "SmartDrivePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_TITTAM_Tittam_FE_60906562._.js.map