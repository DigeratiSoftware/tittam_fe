module.exports = [
"[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
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
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
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
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
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
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout,
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/image.js [app-ssr] (ecmascript)");
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
const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        roles: [
            "super_admin",
            "admin",
            "user"
        ]
    },
    {
        title: "Schemes",
        href: "/dashboard/schemes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Components",
        href: "/dashboard/components",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Templates",
        href: "/dashboard/templates",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Masters",
        href: "/dashboard/masters",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "super_admin"
        ]
    },
    {
        title: "Work Management",
        href: "/dashboard/work",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Data Box",
        href: "/dashboard/drive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Smart Sheets",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        roles: [
            "super_admin",
            "admin"
        ]
    },
    {
        title: "Contractors",
        href: "/dashboard/contractors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
        roles: [
            "admin"
        ]
    },
    {
        title: "Support Tickets",
        href: "/dashboard/support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        roles: [
            "super_admin",
            "admin",
            "user"
        ]
    }
];
;
function DashboardLayout({ children }) {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMenus, setExpandedMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!collapsed && toggleMenu(item.title),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md", collapsed ? "justify-center" : "justify-between", isActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg" : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30"),
                        title: collapsed ? item.title : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isExpanded ? "transform rotate-180" : "")
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
                    !collapsed && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-4 mt-1 space-y-1",
                        children: item.subItems.map((subItem)=>{
                            const isSubActive = pathname === subItem.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: subItem.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200", isSubActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-md" : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-sm"),
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md", collapsed ? "justify-center" : "", isActive ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg transform scale-[1.02]" : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30"),
            onClick: ()=>setIsMobileMenuOpen(false),
            title: collapsed ? item.title : undefined,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
    const SidebarContent = ({ collapsed = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col h-full bg-gradient-to-b from-[#013A65] via-[#012A4D] to-[#013A65] border-r border-[#F3B335]/20 shadow-lg transition-all duration-300", collapsed ? "w-16" : "w-56"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 flex justify-center items-center py-3 border-b border-[#F3B335]/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    },
                    className: "jsx-e9fbbad3ec9935f1" + " " + "flex-1 p-3 space-y-1 bg-gradient-to-b from-[#012A4D] to-[#013A65] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 p-3 border-t border-[#F3B335]/20 bg-gradient-to-r from-[#012A4D] to-[#013A65]",
                    children: !collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium truncate text-white",
                                                children: user?.name
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "w-full h-8 text-sm bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm",
                                onClick: handleLogout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "w-8 h-8 p-0 bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm",
                                onClick: handleLogout,
                                title: "Logout",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full bg-gradient-to-br from-[#013A65] via-[#012A4D] to-[#013A65] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:flex-col md:flex-shrink-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "absolute top-4 -right-3 z-10 h-6 w-6 p-0 bg-white shadow-lg border-[#F3B335]/20 hover:bg-[#F3B335]/10",
                        onClick: ()=>setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
                open: isMobileMenuOpen,
                onOpenChange: setIsMobileMenuOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "md:hidden fixed top-4 left-4 z-50 h-8 w-8 bg-white/95 backdrop-blur-sm shadow-lg border-[#F3B335]/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                        side: "left",
                        className: "p-0 w-56",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto bg-[#F8F8F8]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedRoute",
    ()=>ProtectedRoute,
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/hooks/use-auth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
;
function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !isAuthenticated) {
            router.push("/");
        }
    }, [
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/projects/TITTAM/Tittam_FE/services/meeting-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "meetingService",
    ()=>meetingService
]);
const zoneDistrictMap = {
    "North Zone": [
        "Chennai",
        "Vellore",
        "Tiruvallur"
    ],
    "South Zone": [
        "Madurai",
        "Virudhunagar",
        "Theni"
    ],
    "East Zone": [
        "Cuddalore",
        "Villupuram",
        "Nagapattinam"
    ],
    "West Zone": [
        "Coimbatore",
        "Erode",
        "Tiruppur"
    ],
    "Central Zone": [
        "Trichy",
        "Thanjavur",
        "Karur"
    ]
};
const districtTownPanchayatMap = {
    Chennai: [
        "Ambattur",
        "Poonamallee",
        "Avadi"
    ],
    Vellore: [
        "Katpadi",
        "Arcot",
        "Gudiyatham"
    ],
    Madurai: [
        "Thiruparankundram",
        "Melur",
        "Usilampatti"
    ],
    Virudhunagar: [
        "Sivakasi",
        "Rajapalayam",
        "Srivilliputhur"
    ],
    Cuddalore: [
        "Panruti",
        "Chidambaram",
        "Virudhachalam"
    ],
    Villupuram: [
        "Tindivanam",
        "Gingee",
        "Vanur"
    ],
    Coimbatore: [
        "Pollachi",
        "Mettupalayam",
        "Valparai"
    ],
    Erode: [
        "Bhavani",
        "Gobichettipalayam",
        "Sathyamangalam"
    ],
    Trichy: [
        "Srirangam",
        "Lalgudi",
        "Manapparai"
    ],
    Thanjavur: [
        "Kumbakonam",
        "Pattukkottai",
        "Papanasam"
    ]
};
class MeetingService {
    async getFilterOptions() {
        await new Promise((resolve)=>setTimeout(resolve, 100));
        const schemes = [
            "MGNREGA",
            "PMAY",
            "Swachh Bharat Mission",
            "Smart Cities Mission",
            "AMRUT"
        ];
        const components = [
            "Infrastructure Development",
            "Capacity Building",
            "Community Engagement",
            "Monitoring & Evaluation",
            "Financial Management"
        ];
        const years = [
            "2022-23",
            "2023-24",
            "2024-25",
            "2025-26"
        ];
        const zones = Object.keys(zoneDistrictMap);
        return {
            schemes,
            components,
            years,
            zones
        };
    }
    async getDistricts(zone) {
        await new Promise((resolve)=>setTimeout(resolve, 100));
        return zoneDistrictMap[zone] || [];
    }
    async getTownPanchayats(district) {
        await new Promise((resolve)=>setTimeout(resolve, 100));
        return districtTownPanchayatMap[district] || [];
    }
    async generateMeetingReport(filters) {
        try {
            const response = await fetch("/api/reports/meeting", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filters)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Meeting report API call failed:", error);
            throw error;
        }
    }
    async getPreviousMeetings() {
        await new Promise((resolve)=>setTimeout(resolve, 100));
        return [
            "Q1 2024 Review Meeting",
            "Q2 2024 Planning Session",
            "Q3 2024 Status Update",
            "Q4 2024 Stakeholder Meeting",
            "Annual Review 2023-24",
            "Mid-Year Review 2024-25"
        ];
    }
}
const meetingService = new MeetingService();
}),
"[project]/projects/TITTAM/Tittam_FE/services/meeting-report-template-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "meetingReportTemplateService",
    ()=>meetingReportTemplateService
]);
class MeetingReportTemplateService {
    templates = [
        {
            id: "1",
            name: "North Zone Announcement Meetings",
            reportType: "overall",
            viewOptions: [
                "zone",
                "scheme"
            ],
            filters: {
                scheme: "all",
                component: "all",
                year: "all",
                zone: "North Zone",
                district: "all",
                townPanchayat: "all",
                schemeTypeAnnouncement: true,
                schemeTypeFlagship: false,
                amountFormat: "lakhs",
                comparedMeeting: "none"
            },
            createdAt: "2024-01-15T10:30:00Z"
        },
        {
            id: "2",
            name: "2023-24 Infrastructure Meetings",
            reportType: "component",
            viewOptions: [
                "year"
            ],
            filters: {
                scheme: "MGNREGA",
                component: "Infrastructure Development",
                year: "2023-24",
                zone: "all",
                district: "all",
                townPanchayat: "all",
                schemeTypeAnnouncement: true,
                schemeTypeFlagship: true,
                amountFormat: "crores",
                comparedMeeting: "none"
            },
            createdAt: "2024-01-20T14:45:00Z"
        }
    ];
    async getTemplates() {
        await new Promise((resolve)=>setTimeout(resolve, 300));
        return [
            ...this.templates
        ];
    }
    async saveTemplate(template) {
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const newTemplate = {
            ...template,
            id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };
        this.templates.unshift(newTemplate);
        return newTemplate;
    }
    async deleteTemplate(templateId) {
        await new Promise((resolve)=>setTimeout(resolve, 300));
        this.templates = this.templates.filter((t)=>t.id !== templateId);
    }
    async reorderTemplates(orderedIds) {
        await new Promise((resolve)=>setTimeout(resolve, 200));
        const reordered = [];
        orderedIds.forEach((id)=>{
            const template = this.templates.find((t)=>t.id === id);
            if (template) {
                reordered.push(template);
            }
        });
        this.templates = reordered;
    }
}
const meetingReportTemplateService = new MeetingReportTemplateService();
}),
"[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeetingReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/file-chart-column-increasing.js [app-ssr] (ecmascript) <export default as FileBarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/layout/dashboard-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$auth$2f$protected$2d$route$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/components/auth/protected-route.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/services/meeting-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$report$2d$template$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/TITTAM/Tittam_FE/services/meeting-report-template-service.ts [app-ssr] (ecmascript)");
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
;
;
;
function MeetingReportsPage() {
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overall");
    const [selectedViewOptions, setSelectedViewOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "zone"
    ]);
    const [selectedScheme, setSelectedScheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedComponent, setSelectedComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedZone, setSelectedZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedTownPanchayat, setSelectedTownPanchayat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [schemeTypeAnnouncement, setSchemeTypeAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [schemeTypeFlagship, setSchemeTypeFlagship] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [amountFormat, setAmountFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("lakhs");
    const [comparedMeeting, setComparedMeeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("none");
    const [previousMeetings, setPreviousMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterSets, setFilterSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggedFilterId, setDraggedFilterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredData, setFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasGeneratedReport, setHasGeneratedReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [schemes, setSchemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [components, setComponents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [zones, setZones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [townPanchayats, setTownPanchayats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("none");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("english");
    const [showSaveDialog, setShowSaveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [templateName, setTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSavingTemplate, setIsSavingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadFilterOptions();
        loadTemplates();
        loadPreviousMeetings();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedZone !== "all") {
            loadDistricts(selectedZone);
        } else {
            setDistricts([]);
            setSelectedDistrict("all");
            setTownPanchayats([]);
            setSelectedTownPanchayat("all");
        }
    }, [
        selectedZone
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedDistrict !== "all") {
            loadTownPanchayats(selectedDistrict);
        } else {
            setTownPanchayats([]);
            setSelectedTownPanchayat("all");
        }
    }, [
        selectedDistrict
    ]);
    const loadFilterOptions = async ()=>{
        const options = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingService"].getFilterOptions();
        setSchemes(options.schemes);
        setComponents(options.components);
        setYears(options.years);
        setZones(options.zones);
    };
    const loadDistricts = async (zone)=>{
        const districtList = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingService"].getDistricts(zone);
        setDistricts(districtList);
        setSelectedDistrict("all");
        setTownPanchayats([]);
        setSelectedTownPanchayat("all");
    };
    const loadTownPanchayats = async (district)=>{
        const townPanchayatList = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingService"].getTownPanchayats(district);
        setTownPanchayats(townPanchayatList);
        setSelectedTownPanchayat("all");
    };
    const loadTemplates = async ()=>{
        const templateList = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$report$2d$template$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingReportTemplateService"].getTemplates();
        setTemplates(templateList);
    };
    const loadPreviousMeetings = async ()=>{
        const meetings = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingService"].getPreviousMeetings();
        setPreviousMeetings(meetings);
    };
    const handleSaveFilter = ()=>{
        const newFilterSet = {
            id: Date.now().toString(),
            reportType,
            viewOptions: selectedViewOptions,
            scheme: selectedScheme,
            component: selectedComponent,
            year: selectedYear,
            zone: selectedZone,
            district: selectedDistrict,
            townPanchayat: selectedTownPanchayat,
            schemeTypeAnnouncement,
            schemeTypeFlagship,
            amountFormat,
            comparedMeeting
        };
        setFilterSets([
            ...filterSets,
            newFilterSet
        ]);
    };
    const handleDeleteFilterSet = (filterId)=>{
        setFilterSets(filterSets.filter((f)=>f.id !== filterId));
    };
    const handleFilterDragStart = (filterId)=>{
        setDraggedFilterId(filterId);
    };
    const handleFilterDragOver = (e)=>{
        e.preventDefault();
    };
    const handleFilterDrop = (targetFilterId)=>{
        if (!draggedFilterId || draggedFilterId === targetFilterId) {
            setDraggedFilterId(null);
            return;
        }
        const draggedIndex = filterSets.findIndex((f)=>f.id === draggedFilterId);
        const targetIndex = filterSets.findIndex((f)=>f.id === targetFilterId);
        const newFilterSets = [
            ...filterSets
        ];
        const [draggedFilter] = newFilterSets.splice(draggedIndex, 1);
        newFilterSets.splice(targetIndex, 0, draggedFilter);
        setFilterSets(newFilterSets);
        setDraggedFilterId(null);
    };
    const handleGenerateReportClick = ()=>{
        if (filterSets.length === 0) {
            alert("Please save at least one filter configuration before generating a report.");
            return;
        }
        setShowSaveDialog(true);
    };
    const handleSaveTemplateAndGenerate = async ()=>{
        if (!templateName.trim()) {
            alert("Please enter a template name");
            return;
        }
        setIsSavingTemplate(true);
        const template = {
            name: templateName,
            reportType: filterSets[0].reportType,
            viewOptions: filterSets[0].viewOptions,
            filters: {
                meetingType: filterSets[0].meetingType,
                year: filterSets[0].year,
                zone: filterSets[0].zone,
                district: filterSets[0].district,
                townPanchayat: filterSets[0].townPanchayat,
                schemeTypeAnnouncement: filterSets[0].schemeTypeAnnouncement,
                schemeTypeFlagship: filterSets[0].schemeTypeFlagship,
                // Add amountFormat and comparedMeeting to the filters object for saving template
                amountFormat: filterSets[0].amountFormat,
                comparedMeeting: filterSets[0].comparedMeeting
            }
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$report$2d$template$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingReportTemplateService"].saveTemplate(template);
        await loadTemplates();
        setIsSavingTemplate(false);
        setShowSaveDialog(false);
        setTemplateName("");
        await generateReport();
    };
    const handleSkipAndGenerate = async ()=>{
        setShowSaveDialog(false);
        await generateReport();
    };
    const generateReport = async ()=>{
        setIsLoading(true);
        setHasGeneratedReport(true);
        const primaryFilter = filterSets[0];
        const filters = {
            reportType: primaryFilter.reportType,
            viewType: primaryFilter.viewOptions.join(","),
            scheme: primaryFilter.scheme,
            component: primaryFilter.component,
            year: primaryFilter.year,
            zone: primaryFilter.zone,
            district: primaryFilter.district,
            townPanchayat: primaryFilter.townPanchayat,
            schemeType: primaryFilter.schemeTypeAnnouncement && primaryFilter.schemeTypeFlagship ? "all" : primaryFilter.schemeTypeAnnouncement ? "Announcement" : "Flagship",
            language,
            announcement: primaryFilter.schemeTypeAnnouncement,
            flagship: primaryFilter.schemeTypeFlagship,
            // Pass amountFormat and comparedMeeting to the generateReport function
            amountFormat: primaryFilter.amountFormat,
            comparedMeeting: primaryFilter.comparedMeeting
        };
        console.log("[v0] Calling meeting reports service with:", filters);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingService"].generateMeetingReport(filters);
            if (result.success) {
                console.log("[v0] Meeting service returned", result.count, "records");
                console.log("[v0] Language:", result.language);
                setFilteredData(result.data);
            } else {
                console.error("[v0] Meeting service error:", result.error);
                alert("Failed to generate meeting report. Please try again.");
                setFilteredData([]);
            }
        } catch (error) {
            console.error("[v0] Meeting service call failed:", error);
            alert("Failed to generate meeting report. Please try again.");
            setFilteredData([]);
        } finally{
            setIsLoading(false);
            setCurrentPage(1);
        }
    };
    const handleLoadTemplate = (template)=>{
        const newFilterSet = {
            id: Date.now().toString(),
            reportType: template.reportType,
            viewOptions: template.viewOptions,
            scheme: template.filters.scheme || "all",
            component: template.filters.component || "all",
            year: template.filters.year,
            zone: template.filters.zone,
            district: template.filters.district,
            townPanchayat: template.filters.townPanchayat,
            schemeTypeAnnouncement: template.filters.schemeTypeAnnouncement,
            schemeTypeFlagship: template.filters.schemeTypeFlagship,
            amountFormat: template.filters.amountFormat || "lakhs",
            comparedMeeting: template.filters.comparedMeeting || "none"
        };
        setFilterSets([
            newFilterSet
        ]);
        setReportType(template.reportType);
        setSelectedViewOptions(template.viewOptions);
        setSelectedScheme(template.filters.scheme || "all");
        setSelectedComponent(template.filters.component || "all");
        setSelectedYear(template.filters.year);
        setSelectedZone(template.filters.zone);
        setSelectedDistrict(template.filters.district);
        setSelectedTownPanchayat(template.filters.townPanchayat);
        setSchemeTypeAnnouncement(template.filters.schemeTypeAnnouncement);
        setSchemeTypeFlagship(template.filters.schemeTypeFlagship);
        setAmountFormat(template.filters.amountFormat || "lakhs");
        setComparedMeeting(template.filters.comparedMeeting || "none");
    };
    const handleTemplateSelect = (templateId)=>{
        setSelectedTemplate(templateId);
        if (templateId !== "none") {
            const template = templates.find((t)=>t.id === templateId);
            if (template) {
                handleLoadTemplate(template);
            }
        }
    };
    const handleDeleteTemplate = async (templateId)=>{
        if (confirm("Are you sure you want to delete this template?")) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$services$2f$meeting$2d$report$2d$template$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meetingReportTemplateService"].deleteTemplate(templateId);
            await loadTemplates();
            if (selectedTemplate === templateId) {
                setSelectedTemplate("none");
            }
        }
    };
    const handleExcelDownload = ()=>{
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(filteredData.map((item)=>({
                "Meeting Title": item.meetingTitle,
                "Meeting Type": item.meetingType,
                Stage: item.stage,
                Zone: item.zone,
                District: item.district,
                "Town Panchayat": item.townPanchayat,
                "Financial Year": item.financialYear,
                Status: item.status,
                Attendees: item.attendees,
                "Meeting Date": item.meetingDate,
                "Scheme Type": item.schemeType
            })));
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Meeting Report");
        const excelBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["write"](workbook, {
            bookType: "xlsx",
            type: "array"
        });
        const blob = new Blob([
            excelBuffer
        ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Meeting_Report_${new Date().toISOString().split("T")[0]}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const getStatusBadgeVariant = (status)=>{
        switch(status.toLowerCase()){
            case "scheduled":
                return "default";
            case "completed":
                return "secondary";
            case "cancelled":
                return "destructive";
            case "in progress":
                return "outline";
            default:
                return "secondary";
        }
    };
    const toggleViewOption = (option)=>{
        setSelectedViewOptions((prev)=>{
            if (prev.includes(option)) {
                return prev.filter((item)=>item !== option);
            } else {
                return [
                    ...prev,
                    option
                ];
            }
        });
    };
    const getViewOptions = ()=>{
        switch(reportType){
            case "overall":
                return [
                    {
                        value: "zone",
                        label: "Zone Wise"
                    },
                    {
                        value: "district",
                        label: "District Wise"
                    },
                    {
                        value: "townpanchayat",
                        label: "Town Panchayat Wise"
                    },
                    // { value: "meeting", label: "Meeting Wise" },
                    {
                        value: "scheme",
                        label: "Scheme Wise"
                    },
                    {
                        value: "component",
                        label: "Component Wise"
                    },
                    {
                        value: "year",
                        label: "Year Wise"
                    }
                ];
            case "scheme":
                return [
                    {
                        value: "component",
                        label: "Component Wise"
                    },
                    {
                        value: "year",
                        label: "Year Wise"
                    }
                ];
            case "component":
                return [
                    {
                        value: "scheme",
                        label: "Scheme Wise"
                    },
                    {
                        value: "year",
                        label: "Year Wise"
                    }
                ];
            case "year":
                return [
                    {
                        value: "scheme",
                        label: "Scheme Wise"
                    },
                    {
                        value: "component",
                        label: "Component Wise"
                    }
                ];
            default:
                return [];
        }
    };
    const getFilterSetDisplayName = (filter)=>{
        const parts = [];
        parts.push(filter.reportType.charAt(0).toUpperCase() + filter.reportType.slice(1));
        if (filter.zone !== "all") parts.push(filter.zone);
        if (filter.scheme !== "all") parts.push(filter.scheme);
        return parts.join(" - ");
    };
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);
    const goToNextPage = ()=>{
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const goToPreviousPage = ()=>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$auth$2f$protected$2d$route$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$layout$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 rounded-lg py-3 px-6 text-white shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-semibold",
                                                children: "Meeting Reports"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm mt-1",
                                                children: "Generate meeting-specific reports with template management and advanced filtering"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__["FileBarChart"], {
                                            className: "h-8 w-8 text-[#F3B335]"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg border border-[#EDEEF0] shadow-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-gradient-to-r from-[#F8F8F8] to-[#EDEEF0]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                                        className: "h-5 w-5 text-[#013A65]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-base font-semibold text-[#013A65]",
                                                                        children: "Report Filters"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-sm font-medium text-[#013A65] whitespace-nowrap",
                                                                                children: "Saved Templates:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 518,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                                value: selectedTemplate,
                                                                                onValueChange: handleTemplateSelect,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                        className: "h-9 w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                            placeholder: "Select template"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 520,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                value: "none",
                                                                                                children: "None"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                                lineNumber: 524,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: template.id,
                                                                                                    children: template.name
                                                                                                }, template.id, false, {
                                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                                    lineNumber: 526,
                                                                                                    columnNumber: 31
                                                                                                }, this))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 523,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 519,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 517,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-sm font-medium text-[#013A65] whitespace-nowrap",
                                                                                children: "Compared with:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 534,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                                value: comparedMeeting,
                                                                                onValueChange: setComparedMeeting,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                        className: "h-9 w-[200px] bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                            placeholder: "Select meeting"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 537,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 536,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                value: "none",
                                                                                                children: "None"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                                lineNumber: 540,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            previousMeetings.map((meeting)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: meeting,
                                                                                                    children: meeting
                                                                                                }, meeting, false, {
                                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                                    lineNumber: 542,
                                                                                                    columnNumber: 31
                                                                                                }, this))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 539,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 533,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center border border-[#EDEEF0] rounded-md overflow-hidden bg-white shadow-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setLanguage("english"),
                                                                                className: `h-9 w-9 font-bold text-base transition-all duration-200 ${language === "english" ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white" : "bg-white text-[#013A65]/60 hover:bg-[#F8F8F8]"}`,
                                                                                title: "English",
                                                                                children: "E"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setLanguage("tamil"),
                                                                                className: `h-9 w-9 font-bold text-base transition-all duration-200 border-l border-[#EDEEF0] ${language === "tamil" ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white" : "bg-white text-[#013A65]/60 hover:bg-[#F8F8F8]"}`,
                                                                                title: "Tamil",
                                                                                children: "T"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 561,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-[#013A65] mb-2 block",
                                                                children: "Report Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                                                                value: reportType,
                                                                onValueChange: (value)=>{
                                                                    setReportType(value);
                                                                    if (value === "overall") {
                                                                        setSelectedViewOptions([
                                                                            "zone"
                                                                        ]);
                                                                    } else {
                                                                        setSelectedViewOptions([]);
                                                                    }
                                                                },
                                                                className: "w-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                                                    className: "grid w-full grid-cols-4 h-11 bg-white border border-[#EDEEF0]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                            value: "overall",
                                                                            className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white",
                                                                            children: "Overall Wise"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                            value: "scheme",
                                                                            className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white",
                                                                            children: "Scheme Wise"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 597,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                            value: "component",
                                                                            className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white",
                                                                            children: "Component Wise"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                            value: "year",
                                                                            className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#013A65] data-[state=active]:to-[#013A65]/90 data-[state=active]:text-white",
                                                                            children: "Year Wise"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 609,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Zone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedZone,
                                                                        onValueChange: setSelectedZone,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All zones"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 624,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All zones"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 627,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: zone,
                                                                                            children: zone
                                                                                        }, zone, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 629,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 626,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "District"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedDistrict,
                                                                        onValueChange: setSelectedDistrict,
                                                                        disabled: selectedZone === "all",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All districts"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 645,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All districts"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 648,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    districts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: district,
                                                                                            children: district
                                                                                        }, district, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 650,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Town Panchayat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 659,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedTownPanchayat,
                                                                        onValueChange: setSelectedTownPanchayat,
                                                                        disabled: selectedDistrict === "all",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All town panchayats"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 666,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 665,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All town panchayats"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 669,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    townPanchayats.map((tp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: tp,
                                                                                            children: tp
                                                                                        }, tp, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 671,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 668,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 660,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Scheme"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 680,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedScheme,
                                                                        onValueChange: setSelectedScheme,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All schemes"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 683,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 682,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All schemes"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 686,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    schemes.map((scheme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: scheme,
                                                                                            children: scheme
                                                                                        }, scheme, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 688,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 685,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 681,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Component"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 697,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedComponent,
                                                                        onValueChange: setSelectedComponent,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All components"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 700,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 699,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All components"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 703,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    components.map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: component,
                                                                                            children: component
                                                                                        }, component, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 705,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 696,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Financial Year"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 714,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: selectedYear,
                                                                        onValueChange: setSelectedYear,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "All years"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 717,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 716,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "All years"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 720,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: year,
                                                                                            children: year
                                                                                        }, year, false, {
                                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                            lineNumber: 722,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 719,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 715,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 md:col-span-2 lg:col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Scheme Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 731,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-6 h-11 items-center px-3 bg-white rounded-md border border-[#EDEEF0]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                        id: "announcement-scheme",
                                                                                        checked: schemeTypeAnnouncement,
                                                                                        onCheckedChange: (checked)=>setSchemeTypeAnnouncement(checked)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 734,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: "announcement-scheme",
                                                                                        className: "text-sm font-medium text-[#013A65] cursor-pointer select-none",
                                                                                        children: "Announcement"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 739,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 733,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                        id: "flagship-scheme",
                                                                                        checked: schemeTypeFlagship,
                                                                                        onCheckedChange: (checked)=>setSchemeTypeFlagship(checked)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 747,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: "flagship-scheme",
                                                                                        className: "text-sm font-medium text-[#013A65] cursor-pointer select-none",
                                                                                        children: "Flagship"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 752,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 746,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 732,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-[#013A65]",
                                                                        children: "Amount in"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: amountFormat,
                                                                        onValueChange: setAmountFormat,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "h-11 w-full bg-white border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "Select format"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                    lineNumber: 766,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 765,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "lakhs",
                                                                                        children: "Lakhs"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 769,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "crores",
                                                                                        children: "Crores"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 770,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "thousands",
                                                                                        children: "Thousands"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                        lineNumber: 771,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 768,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-semibold text-[#013A65]",
                                                                children: "View Options"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2 p-3 bg-white rounded-lg border border-[#EDEEF0]",
                                                                children: getViewOptions().map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>toggleViewOption(option.value),
                                                                        className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedViewOptions.includes(option.value) ? "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 text-white shadow-md" : "bg-white border border-[#EDEEF0] text-[#013A65] hover:bg-[#F8F8F8]"}`,
                                                                        children: option.label
                                                                    }, option.value, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 781,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 779,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleSaveFilter,
                                                                className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] h-9 px-4 text-sm font-medium shadow-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "h-4 w-4 mr-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Save Filter"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleGenerateReportClick,
                                                                disabled: isLoading || filterSets.length === 0,
                                                                className: "bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white h-9 px-4 text-sm font-medium shadow-lg",
                                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            className: "h-4 w-4 mr-1.5 animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 811,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Generating..."
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                                            className: "h-4 w-4 mr-1.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 816,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Generate Report"
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 804,
                                                                columnNumber: 21
                                                            }, this),
                                                            hasGeneratedReport && filteredData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleExcelDownload,
                                                                size: "sm",
                                                                className: "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 hover:from-[#F3B335]/90 hover:to-[#F3B335]/80 text-[#013A65] h-9 px-4 text-sm font-medium shadow-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "h-4 w-4 mr-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 827,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Download Excel"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg border border-[#EDEEF0] shadow-sm p-3 h-fit",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "h-4 w-4 text-[#013A65]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-semibold text-[#013A65]",
                                                            children: "Saved Filters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 839,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 max-h-[600px] overflow-y-auto",
                                                    children: filterSets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-6 text-[#013A65]/60 text-xs",
                                                        children: 'No filters saved yet. Configure filters and click "Save Filter".'
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 21
                                                    }, this) : filterSets.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            draggable: true,
                                                            onDragStart: ()=>handleFilterDragStart(filter.id),
                                                            onDragOver: handleFilterDragOver,
                                                            onDrop: ()=>handleFilterDrop(filter.id),
                                                            className: "group bg-[#F8F8F8] border border-[#EDEEF0] rounded-md p-2 hover:bg-[#F3B335]/10 hover:border-[#F3B335]/30 transition-all cursor-move",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                        className: "h-3.5 w-3.5 text-[#013A65]/40 mt-0.5 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0 font-medium text-[#013A65] text-xs truncate",
                                                                        children: getFilterSetDisplayName(filter)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 859,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDeleteFilterSet(filter.id),
                                                                        className: "flex-shrink-0 p-1 hover:bg-red-50 rounded transition-colors group/delete",
                                                                        title: "Delete filter",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-3.5 w-3.5 text-[#013A65]/40 group-hover/delete:text-red-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 867,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 862,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, filter.id, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                hasGeneratedReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg border border-[#EDEEF0] shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[600px] overflow-auto",
                                        children: !hasGeneratedReport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center h-64 text-center p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__["FileBarChart"], {
                                                        className: "h-8 w-8 text-[#013A65]/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-[#013A65] mb-2",
                                                    children: "Ready to Generate Report"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#013A65]/70 mb-4 max-w-md",
                                                    children: 'Configure your filters, save them, and click "Generate Report" to view the data.'
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 21
                                        }, this) : isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full p-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#013A65]/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-5 w-5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Generating report data..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                lineNumber: 893,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 21
                                        }, this) : filteredData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center h-full text-center p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gradient-to-r from-[#013A65]/10 to-[#F3B335]/10 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__["FileBarChart"], {
                                                        className: "h-8 w-8 text-[#013A65]/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                        lineNumber: 901,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-[#013A65] mb-2",
                                                    children: "No report data found"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#013A65]/70 mb-4",
                                                    children: "No data matches your current filter criteria. Try adjusting the filters."
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                                    className: "min-w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                            className: "sticky top-0 z-10 bg-[#F3B335]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                className: "hover:bg-[#F3B335]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Meeting Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 913,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Meeting Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 916,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Stage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 919,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Zone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 920,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "District"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 921,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Town Panchayat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Financial Year"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 925,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 928,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold text-right whitespace-nowrap",
                                                                        children: "Attendees"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 929,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Meeting Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 933,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        className: "text-[#013A65] font-semibold whitespace-nowrap",
                                                                        children: "Scheme Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                        lineNumber: 936,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 911,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                            children: currentData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                    className: "hover:bg-[#F8F8F8]/50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "font-medium text-[#013A65] whitespace-nowrap",
                                                                            children: item.meetingTitle
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 944,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.meetingType
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 947,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.stage
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 948,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.zone
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 949,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.district
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 950,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.townPanchayat
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/80 whitespace-nowrap",
                                                                            children: item.financialYear
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "whitespace-nowrap",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: getStatusBadgeVariant(item.status),
                                                                                className: "bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40",
                                                                                children: item.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 958,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 957,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-right text-[#013A65] whitespace-nowrap",
                                                                            children: item.attendees
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 965,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-[#013A65]/70 whitespace-nowrap",
                                                                            children: new Date(item.meetingDate).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 968,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "whitespace-nowrap",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                className: item.schemeType === "Flagship" ? "bg-gradient-to-r from-[#013A65]/20 to-[#013A65]/30 text-[#013A65] border-[#013A65]/40" : "bg-gradient-to-r from-[#F3B335]/20 to-[#F3B335]/30 text-[#013A65] border-[#F3B335]/40",
                                                                                children: item.schemeType
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                                lineNumber: 972,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 971,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 23
                                                }, this),
                                                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-4 py-3 border-t border-[#EDEEF0] bg-[#F8F8F8] sticky bottom-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-[#013A65]/70",
                                                            children: [
                                                                "Showing ",
                                                                startIndex + 1,
                                                                " to ",
                                                                Math.min(endIndex, filteredData.length),
                                                                " of",
                                                                " ",
                                                                filteredData.length,
                                                                " results"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: goToPreviousPage,
                                                                    disabled: currentPage === 1,
                                                                    className: "h-8 px-3 bg-white border-[#EDEEF0] hover:bg-[#F3B335]/10 disabled:opacity-50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                            className: "h-4 w-4 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 1001,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Previous"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                    lineNumber: 994,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#013A65] font-medium px-3",
                                                                    children: [
                                                                        "Page ",
                                                                        currentPage,
                                                                        " of ",
                                                                        totalPages
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                    lineNumber: 1004,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: goToNextPage,
                                                                    disabled: currentPage === totalPages,
                                                                    className: "h-8 px-3 bg-white border-[#EDEEF0] hover:bg-[#F3B335]/10 disabled:opacity-50",
                                                                    children: [
                                                                        "Next",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "h-4 w-4 ml-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                                    lineNumber: 1007,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 909,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 880,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                    lineNumber: 879,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: showSaveDialog,
                    onOpenChange: setShowSaveDialog,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "sm:max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-[#013A65]",
                                        children: "Save Report Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 1031,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-[#013A65]/70",
                                        children: "Would you like to save this filter configuration as a template for future use?"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                lineNumber: 1030,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-[#013A65]",
                                            children: "Template Name (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Enter template name...",
                                            value: templateName,
                                            onChange: (e)=>setTemplateName(e.target.value),
                                            className: "border-[#EDEEF0] focus:border-[#013A65] focus:ring-[#013A65]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                            lineNumber: 1039,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                lineNumber: 1036,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                className: "flex gap-2 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: handleSkipAndGenerate,
                                        disabled: isSavingTemplate,
                                        className: "flex-1 border-[#EDEEF0] hover:bg-[#F8F8F8] bg-transparent",
                                        children: "Skip & Generate"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSaveTemplateAndGenerate,
                                        disabled: isSavingTemplate || !templateName.trim(),
                                        className: "flex-1 bg-gradient-to-r from-[#013A65] to-[#013A65]/90 hover:from-[#013A65]/90 hover:to-[#013A65]/80 text-white",
                                        children: isSavingTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, this),
                                                "Saving..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$TITTAM$2f$Tittam_FE$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                                    lineNumber: 1068,
                                                    columnNumber: 21
                                                }, this),
                                                "Save & Generate"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                                lineNumber: 1047,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                        lineNumber: 1029,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
                    lineNumber: 1028,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
            lineNumber: 488,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/TITTAM/Tittam_FE/app/dashboard/reports/meeting/page.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bc481f15._.js.map