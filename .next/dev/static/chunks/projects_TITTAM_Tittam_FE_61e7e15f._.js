(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/services/smart-view-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smartViewService",
    ()=>smartViewService
]);
class SmartViewService {
    mockLocations = [
        {
            id: "loc1",
            name: "Tiruvallur - Zone 1",
            type: "zone",
            coordinates: {
                lat: 13.1167,
                lng: 79.9167
            },
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Tiruvallur",
            totalWorks: 52,
            tenderStage: 6,
            notStarted: 9,
            physicallyCompleted: 24,
            fullyCompleted: 13,
            completedPercentage: 71.2,
            estimate: 18500000,
            expenditure: 13200000,
            balance: 5300000,
            expenditurePercentage: 71.4,
            workDetails: [
                {
                    id: "w1",
                    name: "Road Construction - Tiruvallur Main Road",
                    scheme: "PMGSY",
                    component: "Roads",
                    stage: "Physically Completed",
                    estimate: 3200000,
                    expenditure: 2900000
                },
                {
                    id: "w2",
                    name: "Water Supply - Tiruvallur Phase 1",
                    scheme: "Jal Jeevan Mission",
                    component: "Water Supply",
                    stage: "In Progress",
                    estimate: 2500000,
                    expenditure: 1800000
                }
            ]
        },
        {
            id: "loc2",
            name: "Poonamallee - Zone 2",
            type: "district",
            coordinates: {
                lat: 13.0475,
                lng: 80.0953
            },
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Poonamallee",
            totalWorks: 45,
            tenderStage: 5,
            notStarted: 7,
            physicallyCompleted: 21,
            fullyCompleted: 12,
            completedPercentage: 73.3,
            estimate: 16000000,
            expenditure: 11800000,
            balance: 4200000,
            expenditurePercentage: 73.8,
            workDetails: [
                {
                    id: "w3",
                    name: "School Building - Poonamallee",
                    scheme: "Samagra Shiksha",
                    component: "Education",
                    stage: "Fully Completed",
                    estimate: 3500000,
                    expenditure: 3450000
                }
            ]
        },
        {
            id: "loc3",
            name: "Avadi - Zone 3",
            type: "townpanchayat",
            coordinates: {
                lat: 13.1147,
                lng: 80.1018
            },
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Avadi",
            totalWorks: 38,
            tenderStage: 4,
            notStarted: 6,
            physicallyCompleted: 18,
            fullyCompleted: 10,
            completedPercentage: 73.7,
            estimate: 14000000,
            expenditure: 10300000,
            balance: 3700000,
            expenditurePercentage: 73.6,
            workDetails: []
        },
        {
            id: "loc4",
            name: "Vellore - Zone 4",
            type: "zone",
            coordinates: {
                lat: 12.9165,
                lng: 79.1325
            },
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Vellore City",
            totalWorks: 58,
            tenderStage: 7,
            notStarted: 11,
            physicallyCompleted: 26,
            fullyCompleted: 14,
            completedPercentage: 69.0,
            estimate: 21000000,
            expenditure: 14500000,
            balance: 6500000,
            expenditurePercentage: 69.0,
            workDetails: [
                {
                    id: "w4",
                    name: "Highway Development - Vellore",
                    scheme: "PMGSY",
                    component: "Roads",
                    stage: "In Progress",
                    estimate: 5000000,
                    expenditure: 3500000
                }
            ]
        },
        {
            id: "loc5",
            name: "Katpadi - Zone 5",
            type: "district",
            coordinates: {
                lat: 12.9698,
                lng: 79.1452
            },
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Katpadi",
            totalWorks: 42,
            tenderStage: 5,
            notStarted: 8,
            physicallyCompleted: 19,
            fullyCompleted: 10,
            completedPercentage: 69.0,
            estimate: 15500000,
            expenditure: 10700000,
            balance: 4800000,
            expenditurePercentage: 69.0,
            workDetails: []
        },
        {
            id: "loc6",
            name: "Arcot - Zone 6",
            type: "townpanchayat",
            coordinates: {
                lat: 12.9059,
                lng: 79.3191
            },
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Arcot",
            totalWorks: 35,
            tenderStage: 3,
            notStarted: 5,
            physicallyCompleted: 17,
            fullyCompleted: 10,
            completedPercentage: 77.1,
            estimate: 12000000,
            expenditure: 9300000,
            balance: 2700000,
            expenditurePercentage: 77.5,
            workDetails: []
        },
        {
            id: "loc7",
            name: "Ponneri - Zone 7",
            type: "townpanchayat",
            coordinates: {
                lat: 13.3333,
                lng: 80.1833
            },
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Ponneri",
            totalWorks: 31,
            tenderStage: 3,
            notStarted: 5,
            physicallyCompleted: 15,
            fullyCompleted: 8,
            completedPercentage: 74.2,
            estimate: 11000000,
            expenditure: 8200000,
            balance: 2800000,
            expenditurePercentage: 74.5,
            workDetails: []
        },
        {
            id: "loc8",
            name: "Ranipet - Zone 8",
            type: "townpanchayat",
            coordinates: {
                lat: 12.9249,
                lng: 79.3331
            },
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Ranipet",
            totalWorks: 40,
            tenderStage: 4,
            notStarted: 7,
            physicallyCompleted: 19,
            fullyCompleted: 10,
            completedPercentage: 72.5,
            estimate: 14500000,
            expenditure: 10500000,
            balance: 4000000,
            expenditurePercentage: 72.4,
            workDetails: []
        }
    ];
    mockUsers = [
        {
            id: "u1",
            name: "Rajesh Kumar",
            role: "Field Engineer",
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Tiruvallur",
            coordinates: {
                lat: 13.1167,
                lng: 79.9167
            },
            lastActive: "2025-01-10 14:30",
            status: "active"
        },
        {
            id: "u2",
            name: "Priya Sharma",
            role: "Site Supervisor",
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Poonamallee",
            coordinates: {
                lat: 13.0475,
                lng: 80.0953
            },
            lastActive: "2025-01-10 14:25",
            status: "active"
        },
        {
            id: "u3",
            name: "Amit Patel",
            role: "Project Manager",
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Vellore City",
            coordinates: {
                lat: 12.9165,
                lng: 79.1325
            },
            lastActive: "2025-01-10 13:45",
            status: "inactive"
        },
        {
            id: "u4",
            name: "Sneha Reddy",
            role: "Quality Inspector",
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Katpadi",
            coordinates: {
                lat: 12.9698,
                lng: 79.1452
            },
            lastActive: "2025-01-10 14:28",
            status: "active"
        },
        {
            id: "u5",
            name: "Karthik Murugan",
            role: "Civil Engineer",
            zone: "North Chennai",
            district: "Tiruvallur",
            townPanchayat: "Avadi",
            coordinates: {
                lat: 13.1147,
                lng: 80.1018
            },
            lastActive: "2025-01-10 14:32",
            status: "active"
        },
        {
            id: "u6",
            name: "Lakshmi Devi",
            role: "Site Inspector",
            zone: "Vellore",
            district: "Vellore",
            townPanchayat: "Arcot",
            coordinates: {
                lat: 12.9059,
                lng: 79.3191
            },
            lastActive: "2025-01-10 14:15",
            status: "active"
        }
    ];
    async getMapLocations(filters) {
        console.log("[v0] Fetching map locations with filters:", filters);
        let filtered = [
            ...this.mockLocations
        ];
        if (filters.zone && filters.zone !== "all") {
            filtered = filtered.filter((loc)=>loc.zone === filters.zone);
        }
        if (filters.district && filters.district !== "all") {
            filtered = filtered.filter((loc)=>loc.district === filters.district);
        }
        if (filters.townPanchayat && filters.townPanchayat !== "all") {
            filtered = filtered.filter((loc)=>loc.townPanchayat === filters.townPanchayat);
        }
        return filtered;
    }
    async getUserLocations(filters) {
        console.log("[v0] Fetching user locations with filters:", filters);
        let filtered = [
            ...this.mockUsers
        ];
        if (filters.zone && filters.zone !== "all") {
            filtered = filtered.filter((user)=>user.zone === filters.zone);
        }
        if (filters.district && filters.district !== "all") {
            filtered = filtered.filter((user)=>user.district === filters.district);
        }
        if (filters.townPanchayat && filters.townPanchayat !== "all") {
            filtered = filtered.filter((user)=>user.townPanchayat === filters.townPanchayat);
        }
        return filtered;
    }
    async getNearestTownPanchayats(locationId) {
        console.log("[v0] Fetching nearest town panchayats for:", locationId);
        // Return mock nearby locations
        return this.mockLocations.filter((loc)=>loc.type === "townpanchayat").slice(0, 3);
    }
    getZones() {
        return [
            "all",
            "North Chennai",
            "Vellore"
        ];
    }
    getDistricts(zone) {
        if (!zone || zone === "all") {
            return [
                "all",
                "Tiruvallur",
                "Vellore"
            ];
        }
        // Filter districts by zone
        const districts = this.mockLocations.filter((loc)=>loc.zone === zone).map((loc)=>loc.district);
        return [
            "all",
            ...Array.from(new Set(districts))
        ];
    }
    getTownPanchayats(district) {
        if (!district || district === "all") {
            return [
                "all",
                "Tiruvallur",
                "Poonamallee",
                "Avadi",
                "Ponneri",
                "Vellore City",
                "Katpadi",
                "Arcot",
                "Ranipet"
            ];
        }
        // Filter town panchayats by district
        const townPanchayats = this.mockLocations.filter((loc)=>loc.district === district).map((loc)=>loc.townPanchayat);
        return [
            "all",
            ...Array.from(new Set(townPanchayats))
        ];
    }
    getSchemes() {
        return [
            "all",
            "PMGSY",
            "Jal Jeevan Mission",
            "Samagra Shiksha",
            "MGNREGA",
            "Smart Cities"
        ];
    }
    getComponents() {
        return [
            "all",
            "Roads",
            "Water Supply",
            "Education",
            "Health",
            "Sanitation"
        ];
    }
    getYears() {
        return [
            "all",
            "2024-25",
            "2023-24",
            "2022-23",
            "2021-22"
        ];
    }
    getStages() {
        return [
            "all",
            "Tender Stage",
            "Not Started",
            "In Progress",
            "Physically Completed",
            "Fully Completed"
        ];
    }
    async getAggregatedStatistics(filters) {
        console.log("[v0] Calculating aggregated statistics with filters:", filters);
        const locations = await this.getMapLocations(filters);
        if (locations.length === 0) {
            return {
                zone: filters.zone === "all" ? "All Zones" : filters.zone,
                district: filters.district === "all" ? "All Districts" : filters.district,
                townPanchayat: filters.townPanchayat === "all" ? "All Town Panchayats" : filters.townPanchayat,
                totalWorks: 0,
                tenderStage: 0,
                notStarted: 0,
                physicallyCompleted: 0,
                fullyCompleted: 0,
                completedPercentage: 0,
                estimate: 0,
                expenditure: 0,
                balance: 0,
                expenditurePercentage: 0
            };
        }
        const totals = locations.reduce((acc, loc)=>({
                totalWorks: acc.totalWorks + loc.totalWorks,
                tenderStage: acc.tenderStage + loc.tenderStage,
                notStarted: acc.notStarted + loc.notStarted,
                physicallyCompleted: acc.physicallyCompleted + loc.physicallyCompleted,
                fullyCompleted: acc.fullyCompleted + loc.fullyCompleted,
                estimate: acc.estimate + loc.estimate,
                expenditure: acc.expenditure + loc.expenditure
            }), {
            totalWorks: 0,
            tenderStage: 0,
            notStarted: 0,
            physicallyCompleted: 0,
            fullyCompleted: 0,
            estimate: 0,
            expenditure: 0
        });
        const balance = totals.estimate - totals.expenditure;
        const completedPercentage = totals.totalWorks > 0 ? Math.round(totals.fullyCompleted / totals.totalWorks * 100 * 10 / 10) : 0;
        const expenditurePercentage = totals.estimate > 0 ? Math.round(totals.expenditure / totals.estimate * 100 * 10 / 10) : 0;
        return {
            zone: filters.zone === "all" ? "All Zones" : filters.zone,
            district: filters.district === "all" ? "All Districts" : filters.district,
            townPanchayat: filters.townPanchayat === "all" ? "All Town Panchayats" : filters.townPanchayat,
            totalWorks: totals.totalWorks,
            tenderStage: totals.tenderStage,
            notStarted: totals.notStarted,
            physicallyCompleted: totals.physicallyCompleted,
            fullyCompleted: totals.fullyCompleted,
            completedPercentage,
            estimate: totals.estimate,
            expenditure: totals.expenditure,
            balance,
            expenditurePercentage
        };
    }
}
const smartViewService = new SmartViewService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapView",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MapView({ locations, users, nearestLocations, onLocationClick, selectedLocation }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [hoveredLocation, setHoveredLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredUser, setHoveredUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLeafletLoaded, setIsLeafletLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            // Check if Leaflet is already loaded
            if (window.L) {
                setIsLeafletLoaded(true);
                setIsLoading(false);
                return;
            }
            // Check if scripts are already being loaded
            const existingScript = document.querySelector('script[src*="leaflet"]');
            if (existingScript) {
                // Wait for existing script to load
                existingScript.addEventListener("load", {
                    "MapView.useEffect": ()=>{
                        setIsLeafletLoaded(true);
                        setIsLoading(false);
                    }
                }["MapView.useEffect"]);
                return;
            }
            // Load Leaflet CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            document.head.appendChild(link);
            // Load Leaflet JS
            const script = document.createElement("script");
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            script.async = true;
            script.onload = ({
                "MapView.useEffect": ()=>{
                    console.log("[v0] Leaflet loaded successfully");
                    setIsLeafletLoaded(true);
                    setIsLoading(false);
                }
            })["MapView.useEffect"];
            script.onerror = ({
                "MapView.useEffect": ()=>{
                    console.error("[v0] Failed to load Leaflet");
                    setIsLoading(false);
                }
            })["MapView.useEffect"];
            document.head.appendChild(script);
            return ({
                "MapView.useEffect": ()=>{
                // Don't remove scripts on unmount to allow reuse on navigation
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!isLeafletLoaded || !mapRef.current || mapInstanceRef.current) return;
            const L = window.L;
            if (!L) {
                console.error("[v0] Leaflet not available");
                return;
            }
            try {
                console.log("[v0] Initializing map");
                // Initialize map centered on Karnataka, India
                const map = L.map(mapRef.current).setView([
                    15.3173,
                    75.7139
                ], 7);
                // Add OpenStreetMap tiles
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19
                }).addTo(map);
                mapInstanceRef.current = map;
                // Ensure map renders correctly
                setTimeout({
                    "MapView.useEffect": ()=>{
                        if (mapInstanceRef.current) {
                            mapInstanceRef.current.invalidateSize();
                            console.log("[v0] Map initialized and sized");
                        }
                    }
                }["MapView.useEffect"], 100);
            } catch (error) {
                console.error("[v0] Error initializing map:", error);
            }
            return ({
                "MapView.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        console.log("[v0] Cleaning up map instance");
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], [
        isLeafletLoaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!mapInstanceRef.current || !isLeafletLoaded) return;
            const L = window.L;
            if (!L) return;
            try {
                console.log("[v0] Adding markers to map");
                // Clear existing markers
                markersRef.current.forEach({
                    "MapView.useEffect": (marker)=>marker.remove()
                }["MapView.useEffect"]);
                markersRef.current = [];
                const createIcon = {
                    "MapView.useEffect.createIcon": (color, size = 25)=>{
                        const L = window.L;
                        if (!L) return null;
                        return L.divIcon({
                            className: "custom-marker",
                            html: `
            <div style="
              width: ${size}px;
              height: ${size}px;
              background-color: ${color};
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              ${color === "#F3B335" ? `<div style="
                  width: ${size + 10}px;
                  height: ${size + 10}px;
                  border: 2px solid #F3B335;
                  border-radius: 50%;
                  position: absolute;
                  animation: pulse 1.5s infinite;
                "></div>` : ""}
            </div>
            <style>
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.5; }
                100% { transform: scale(1.5); opacity: 0; }
              }
            </style>
          `,
                            iconSize: [
                                size,
                                size
                            ],
                            iconAnchor: [
                                size / 2,
                                size / 2
                            ]
                        });
                    }
                }["MapView.useEffect.createIcon"];
                // Add location markers
                locations.forEach({
                    "MapView.useEffect": (location)=>{
                        const isSelected = selectedLocation?.id === location.id;
                        const icon = createIcon(isSelected ? "#F3B335" : "#013A65", isSelected ? 30 : 25);
                        const marker = L.marker([
                            location.coordinates.lat,
                            location.coordinates.lng
                        ], {
                            icon
                        }).addTo(mapInstanceRef.current).on("click", {
                            "MapView.useEffect.marker": ()=>onLocationClick(location)
                        }["MapView.useEffect.marker"]).on("mouseover", {
                            "MapView.useEffect.marker": ()=>setHoveredLocation(location)
                        }["MapView.useEffect.marker"]).on("mouseout", {
                            "MapView.useEffect.marker": ()=>setHoveredLocation(null)
                        }["MapView.useEffect.marker"]);
                        const popupContent = `
          <div style="min-width: 200px;">
            <h4 style="font-weight: 600; color: #013A65; margin-bottom: 8px;">${location.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Zone:</strong> ${location.zone}</p>
              <p><strong>District:</strong> ${location.district}</p>
              <p><strong>Town Panchayat:</strong> ${location.townPanchayat}</p>
              <p><strong>Total Works:</strong> ${location.totalWorks}</p>
              <p><strong>Completed:</strong> ${location.completedPercentage}%</p>
            </div>
          </div>
        `;
                        marker.bindPopup(popupContent);
                        markersRef.current.push(marker);
                    }
                }["MapView.useEffect"]);
                // Add nearest location markers (green)
                nearestLocations.forEach({
                    "MapView.useEffect": (location)=>{
                        const icon = createIcon("#10B981", 20);
                        const marker = L.marker([
                            location.coordinates.lat,
                            location.coordinates.lng
                        ], {
                            icon
                        }).addTo(mapInstanceRef.current);
                        const popupContent = `
          <div style="min-width: 180px;">
            <h4 style="font-weight: 600; color: #10B981; margin-bottom: 8px;">Nearest: ${location.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Town Panchayat:</strong> ${location.townPanchayat}</p>
              <p><strong>Total Works:</strong> ${location.totalWorks}</p>
            </div>
          </div>
        `;
                        marker.bindPopup(popupContent);
                        markersRef.current.push(marker);
                    }
                }["MapView.useEffect"]);
                // Add user markers
                users.forEach({
                    "MapView.useEffect": (user)=>{
                        const icon = createIcon(user.status === "active" ? "#10B981" : "#6B7280", 18);
                        const marker = L.marker([
                            user.coordinates.lat,
                            user.coordinates.lng
                        ], {
                            icon
                        }).addTo(mapInstanceRef.current).on("mouseover", {
                            "MapView.useEffect.marker": ()=>setHoveredUser(user)
                        }["MapView.useEffect.marker"]).on("mouseout", {
                            "MapView.useEffect.marker": ()=>setHoveredUser(null)
                        }["MapView.useEffect.marker"]);
                        const popupContent = `
          <div style="min-width: 180px;">
            <h4 style="font-weight: 600; color: #013A65; margin-bottom: 8px;">${user.name}</h4>
            <div style="font-size: 13px; color: #666;">
              <p><strong>Role:</strong> ${user.role}</p>
              <p><strong>Location:</strong> ${user.townPanchayat}</p>
              <p><strong>Last Active:</strong> ${user.lastActive}</p>
              <p><strong>Status:</strong> <span style="
                display: inline-block;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 11px;
                background-color: ${user.status === "active" ? "#D1FAE5" : "#F3F4F6"};
                color: ${user.status === "active" ? "#065F46" : "#374151"};
              ">${user.status}</span></p>
            </div>
          </div>
        `;
                        marker.bindPopup(popupContent);
                        markersRef.current.push(marker);
                    }
                }["MapView.useEffect"]);
                // Fit bounds to show all markers
                if (markersRef.current.length > 0) {
                    const group = L.featureGroup(markersRef.current);
                    mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
                }
                console.log("[v0] Markers added successfully");
            } catch (error) {
                console.error("[v0] Error adding markers:", error);
            }
        }
    }["MapView.useEffect"], [
        locations,
        users,
        nearestLocations,
        selectedLocation,
        onLocationClick,
        isLeafletLoaded
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[600px] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full rounded-lg bg-gray-100 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#013A65] border-r-transparent mb-4"
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Loading map..."
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                    lineNumber: 263,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[600px] w-full",
        children: [
            isLeafletLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "w-full h-full rounded-lg"
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                lineNumber: 274,
                columnNumber: 27
            }, this),
            hoveredLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg border border-[#EDEEF0] max-w-xs z-[1000]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-[#013A65] mb-2",
                        children: hoveredLocation.name
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Zone:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredLocation.zone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "District:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredLocation.district
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Total Works:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredLocation.totalWorks
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Completed:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredLocation.completedPercentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            hoveredLocation.workDetails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 pt-2 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-[#013A65] mb-1",
                                        children: "Recent Works:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this),
                                    hoveredLocation.workDetails.slice(0, 2).map((work)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600",
                                            children: [
                                                "• ",
                                                work.name
                                            ]
                                        }, work.id, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            hoveredUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 left-4 bg-white p-4 rounded-lg shadow-lg border border-[#EDEEF0] max-w-xs z-[1000]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-[#013A65] mb-2",
                        children: hoveredUser.name
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Role:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredUser.role
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredUser.townPanchayat
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Last Active:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredUser.lastActive
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block px-2 py-0.5 rounded text-xs ${hoveredUser.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                                        children: hoveredUser.status
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-6 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full bg-[#013A65] border-2 border-white shadow"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Locations"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full bg-[#F3B335] border-2 border-white shadow"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Selected"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full bg-[#10B981] border-2 border-white shadow"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Nearest TP / Active Users"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full bg-[#6B7280] border-2 border-white shadow"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Inactive Users"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(MapView, "qSNv9mozXvW8ZMM4J62TaB/d6ew=");
_c = MapView;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SummaryCards",
    ()=>SummaryCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
"use client";
;
;
function SummaryCards({ statistics }) {
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount);
    };
    const cards = [
        {
            label: "Zone",
            value: statistics.zone,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            color: "text-[#013A65]",
            bgColor: "bg-[#013A65]/10"
        },
        {
            label: "District",
            value: statistics.district,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            color: "text-[#013A65]",
            bgColor: "bg-[#013A65]/10"
        },
        {
            label: "Town Panchayat",
            value: statistics.townPanchayat,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            color: "text-[#013A65]",
            bgColor: "bg-[#013A65]/10"
        },
        {
            label: "Total Works",
            value: statistics.totalWorks.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            color: "text-[#F3B335]",
            bgColor: "bg-[#F3B335]/10"
        },
        {
            label: "Tender Stage",
            value: statistics.tenderStage.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            label: "Not Started",
            value: statistics.notStarted.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"],
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            label: "Physically Completed",
            value: statistics.physicallyCompleted.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: "text-yellow-600",
            bgColor: "bg-yellow-50"
        },
        {
            label: "Fully Completed",
            value: statistics.fullyCompleted.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            label: "Completed %",
            value: `${statistics.completedPercentage}%`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            label: "Estimate",
            value: formatCurrency(statistics.estimate),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            label: "Expenditure",
            value: formatCurrency(statistics.expenditure),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        },
        {
            label: "Balance",
            value: formatCurrency(statistics.balance),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            color: "text-gray-600",
            bgColor: "bg-gray-50"
        },
        {
            label: "Expenditure %",
            value: `${statistics.expenditurePercentage}%`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"],
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-13 gap-3",
        children: cards.map((card, index)=>{
            const Icon = card.icon;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-[#EDEEF0] rounded-lg p-3 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-2 rounded-lg ${card.bgColor}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `w-4 h-4 ${card.color}`
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 mb-1",
                        children: card.label
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-bold text-[#013A65] truncate",
                        title: card.value,
                        children: card.value
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
                lineNumber: 128,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c = SummaryCards;
var _c;
__turbopack_context__.k.register(_c, "SummaryCards");
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
"[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationDetailsTable",
    ()=>LocationDetailsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function LocationDetailsTable({ locations }) {
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-[#EDEEF0] shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg",
                    children: "Nearest Town Panchayat Details"
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "bg-[#F3B335] hover:bg-[#F3B335]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Town Panchayat"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "District"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Total Works"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Estimate"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Expenditure"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: locations.map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: "hover:bg-[#F8F8F8]/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium",
                                                children: location.townPanchayat
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: location.district
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: location.totalWorks
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium",
                                                    children: [
                                                        location.completedPercentage,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: formatCurrency(location.estimate)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: formatCurrency(location.expenditure)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: formatCurrency(location.balance)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, location.id, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = LocationDetailsTable;
var _c;
__turbopack_context__.k.register(_c, "LocationDetailsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserTrackingTable",
    ()=>UserTrackingTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function UserTrackingTable({ users }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-[#EDEEF0] shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg",
                    children: "User Location Tracking"
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "bg-[#F3B335] hover:bg-[#F3B335]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Zone"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "District"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Town Panchayat"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Last Active"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-[#013A65] font-semibold",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: "hover:bg-[#F8F8F8]/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium",
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: user.role
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: user.zone
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: user.district
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: user.townPanchayat
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-sm text-gray-600",
                                                children: user.lastActive
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: user.status === "active" ? "default" : "secondary",
                                                    className: user.status === "active" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-gray-100 text-gray-800 hover:bg-gray-100",
                                                    children: user.status
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = UserTrackingTable;
var _c;
__turbopack_context__.k.register(_c, "UserTrackingTable");
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
"[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartViewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/services/smart-view-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/smart-view/map-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$summary$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/smart-view/summary-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$location$2d$details$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/smart-view/location-details-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$user$2d$tracking$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/smart-view/user-tracking-table.tsx [app-client] (ecmascript)");
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
function SmartViewPage() {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        zone: "all",
        district: "all",
        townPanchayat: "all",
        scheme: "all",
        component: "all",
        year: "all",
        stage: "all"
    });
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showNearestTP, setShowNearestTP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nearestLocations, setNearestLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showUserTracking, setShowUserTracking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zones, setZones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [townPanchayats, setTownPanchayats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statistics, setStatistics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartViewPage.useEffect": ()=>{
            setZones(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getZones());
            setDistricts(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getDistricts(filters.zone));
            setTownPanchayats(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getTownPanchayats(filters.district));
        }
    }["SmartViewPage.useEffect"], [
        filters.zone,
        filters.district
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartViewPage.useEffect": ()=>{
            loadData();
        }
    }["SmartViewPage.useEffect"], [
        filters
    ]);
    const loadData = async ()=>{
        setLoading(true);
        try {
            const [locationsData, usersData, statsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getMapLocations(filters),
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getUserLocations(filters),
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getAggregatedStatistics(filters)
            ]);
            setLocations(locationsData);
            setUsers(usersData);
            setStatistics(statsData);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to load smart view data",
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleZoneChange = (value)=>{
        setFilters({
            ...filters,
            zone: value,
            district: "all",
            townPanchayat: "all"
        });
    };
    const handleDistrictChange = (value)=>{
        setFilters({
            ...filters,
            district: value,
            townPanchayat: "all"
        });
    };
    const handleLocationClick = async (location)=>{
        setSelectedLocation(location);
        if (showNearestTP) {
            const nearest = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getNearestTownPanchayats(location.id);
            setNearestLocations(nearest);
        }
    };
    const handleViewNearestTP = async ()=>{
        setShowNearestTP(!showNearestTP);
        if (!showNearestTP && selectedLocation) {
            const nearest = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getNearestTownPanchayats(selectedLocation.id);
            setNearestLocations(nearest);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: "Smart View"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 text-sm mt-1",
                                        children: "Interactive map view with location tracking and analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowUserTracking(!showUserTracking),
                                        size: "sm",
                                        className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4 mr-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            showUserTracking ? "Hide" : "Show",
                                            " User Tracking"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleViewNearestTP,
                                        size: "sm",
                                        className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-9 px-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-4 w-4 mr-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            showNearestTP ? "Hide" : "Show",
                                            " Nearest TP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: loadData,
                                        disabled: loading,
                                        size: "sm",
                                        className: "bg-white/10 hover:bg-white/20 text-white border border-white/20 h-9 px-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: `h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg border border-[#EDEEF0] shadow-sm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 p-4 border-b border-[#EDEEF0] bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Zone"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.zone,
                                                onValueChange: handleZoneChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: zone,
                                                                children: zone === "all" ? "All Zones" : zone
                                                            }, zone, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "District"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.district,
                                                onValueChange: handleDistrictChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: districts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: district,
                                                                children: district === "all" ? "All Districts" : district
                                                            }, district, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Town Panchayat"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.townPanchayat,
                                                onValueChange: (value)=>setFilters({
                                                        ...filters,
                                                        townPanchayat: value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: townPanchayats.map((tp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: tp,
                                                                children: tp === "all" ? "All Town Panchayats" : tp
                                                            }, tp, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Scheme"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.scheme,
                                                onValueChange: (value)=>setFilters({
                                                        ...filters,
                                                        scheme: value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getSchemes().map((scheme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: scheme,
                                                                children: scheme === "all" ? "All Schemes" : scheme
                                                            }, scheme, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Component"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.component,
                                                onValueChange: (value)=>setFilters({
                                                        ...filters,
                                                        component: value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getComponents().map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: component,
                                                                children: component === "all" ? "All Components" : component
                                                            }, component, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Year"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.year,
                                                onValueChange: (value)=>setFilters({
                                                        ...filters,
                                                        year: value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getYears().map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: year,
                                                                children: year === "all" ? "All Years" : year
                                                            }, year, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-[#013A65] mb-1.5 block",
                                                children: "Stage"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: filters.stage,
                                                onValueChange: (value)=>setFilters({
                                                        ...filters,
                                                        stage: value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-9 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$smart$2d$view$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartViewService"].getStages().map((stage)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: stage,
                                                                children: stage === "all" ? "All Stages" : stage
                                                            }, stage, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-0 bg-[#F8F8F8]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapView"], {
                                        locations: locations,
                                        users: showUserTracking ? users : [],
                                        nearestLocations: showNearestTP ? nearestLocations : [],
                                        onLocationClick: handleLocationClick,
                                        selectedLocation: selectedLocation
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                statistics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border-t border-[#EDEEF0] p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$summary$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SummaryCards"], {
                                        statistics: statistics
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                selectedLocation && showNearestTP && nearestLocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$location$2d$details$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationDetailsTable"], {
                                        locations: nearestLocations
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                showUserTracking && users.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$smart$2d$view$2f$user$2d$tracking$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTrackingTable"], {
                                        users: users
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/smart-view/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(SmartViewPage, "cXVuPSxxlXpptWnyX1gPiXvICoY=");
_c = SmartViewPage;
var _c;
__turbopack_context__.k.register(_c, "SmartViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_TITTAM_Tittam_FE_61e7e15f._.js.map