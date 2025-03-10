module.exports = {

"[project]/src/components/mobile/MapComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/Map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__View$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/View.js [app-ssr] (ecmascript) <export default as View>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/source/OSM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Icon.js [app-ssr] (ecmascript) <export default as Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-ssr] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Feature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Point.js [app-ssr] (ecmascript)");
'use client';
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
const MapComponent = ()=>{
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mapContainer.current) {
            // 设置地图中心点和缩放级别
            const center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                139.785881,
                35.688233
            ]); // 经度, 纬度
            // 创建标记图标样式
            const markerStyle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__["Icon"]({
                    anchor: [
                        0.5,
                        1
                    ],
                    src: '/images/map_marker.png',
                    scale: 0.1
                })
            });
            // 创建标记
            const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                geometry: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](center)
            });
            marker.setStyle(markerStyle);
            // 创建地图
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]({
                target: mapContainer.current,
                layers: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]()
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                            features: [
                                marker
                            ]
                        })
                    })
                ],
                view: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$View$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__View$3e$__["View"]({
                    center: center,
                    zoom: 16
                })
            });
            return ()=>{
                // 清理地图实例
                map.setTarget("");
            };
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainer,
        style: {
            width: '700px',
            height: '300px'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/mobile/MapComponent.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = MapComponent;
}}),
"[project]/src/components/mobile/MapComponent.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/mobile/MapComponent.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_components_mobile_MapComponent_tsx_1a4203ae._.js.map