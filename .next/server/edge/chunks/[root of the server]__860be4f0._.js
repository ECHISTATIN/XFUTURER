(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__860be4f0._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2d$parser$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/accept-language-parser/index.js [middleware-edge] (ecmascript)");
;
;
const locales = [
    'en',
    'zh',
    'ja'
];
const defaultLocale = 'ja';
function isMobile(userAgent) {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(userAgent);
}
function middleware(request) {
    const { pathname } = request.nextUrl;
    // 跳过静态资源请求
    if (pathname.startsWith('/images') || // 跳过 /images/*
    pathname.startsWith('/_next') || // 跳过 Next.js 内部资源
    pathname.startsWith('/api') || // 跳过 API 路由
    pathname === '/favicon.ico' // 跳过 favicon
    ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next() // 直接处理请求，不重定向
        ;
    }
    // 检查路径是否已包含语言标识
    const pathnameHasLocale = locales.some((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) return;
    // 获取用户首选语言
    const acceptLang = request.headers.get('accept-language') || 'ja';
    const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2d$parser$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(acceptLang);
    const preferredLocale = languages[0]?.code;
    // 选择匹配的语言或默认语言
    const locale = locales.includes(preferredLocale) ? preferredLocale : defaultLocale;
    // 根据设备类型选择路径
    const userAgent = request.headers.get('user-agent') || '';
    const devicePath = isMobile(userAgent) ? '/mobile/top' : '/top';
    // 重定向到对应的路径
    request.nextUrl.pathname = `/${locale}${devicePath}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(request.nextUrl);
}
const config = {
    matcher: [
        // 只匹配不以以下路径开头的请求
        '/((?!images|_next/static|_next/image|api|favicon.ico).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__860be4f0._.js.map