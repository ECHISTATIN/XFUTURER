(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_mobile_NewsContent_tsx_bda3dcf1._.js", {

"[project]/src/components/mobile/NewsContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ServicePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ServicePage({ lang, translations: t }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 用于检测是否在客户端渲染
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("a"); // 当前活动的部分
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // 当前页码
    const [newsData1, setNewsData1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 明确指定 newsData1 的类型为 NewsItem[]
    const [newsData2, setNewsData2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 明确指定 newsData2 的类型为 NewsItem[]
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // 使用 useRouter 导航   // 确保只在客户端运行相关代码
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicePage.useEffect": ()=>{
            setIsClient(true);
        }
    }["ServicePage.useEffect"], []);
    // 格式化日期为 YY-MM-DD
    const formatDate = (date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format('YYYY/MM/DD');
    // 获取新闻数据
    const fetchNewsData = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/news'); // 调用后端接口
            const data = response.data.data; // 假设接口返回的数据结构是 { data: [...] }
            console.log("Received data:", data); // 打印返回的原始数据
            // 格式化数据并根据 category 分配到 newsData1 或 newsData2
            const formattedData1 = [];
            const formattedData2 = [];
            data.forEach((item)=>{
                const newsItem = {
                    time: formatDate(item.publishDate),
                    summary: t.language === 'en' ? item.title_en : t.language === 'zh' ? item.title_cn : item.title,
                    details: t.language === 'en' ? item.content_en : t.language === 'zh' ? item.content_cn : item.content
                };
                // 根据 category 分配新闻到不同的数组
                if (item.category === "a") {
                    formattedData1.push(newsItem);
                } else if (item.category === "b") {
                    formattedData2.push(newsItem);
                }
            });
            setNewsData1(formattedData1); // 将 category 为 "1" 的新闻赋值给 newsData1
            setNewsData2(formattedData2); // 将 category 为 "2" 的新闻赋值给 newsData2
            console.log("Formatted newsData1:", formattedData1);
            console.log("Formatted newsData2:", formattedData2);
        } catch (error) {
            console.error('Failed to fetch news data:', error);
        }
    };
    // 在组件加载时请求新闻数据，并监听语言变化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicePage.useEffect": ()=>{
            fetchNewsData();
        }
    }["ServicePage.useEffect"], [
        t.language
    ]); // 监听语言变化
    // 事件处理函数示例
    // 修改导航逻辑
    const handleNavigation = (newsIndex)=>{
        router.push(`/${lang}/mobile/route/news/details?section=${activeSection}&index=${newsIndex}`);
    };
    const newsPerPage = 10;
    const currentData = activeSection === "a" ? newsData1 : newsData2;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = currentData.slice(indexOfFirstNews, indexOfLastNews);
    // 下一页
    const nextPage = ()=>{
        if (currentPage * newsPerPage < currentData.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    // 上一页
    const prevPage = ()=>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // 计算分页按钮
    const totalPages = Math.ceil(currentData.length / newsPerPage);
    const getPaginationButtons = ()=>{
        const buttons = [];
        // 如果总页数少于等于5页，显示所有页码
        if (totalPages <= 7) {
            for(let i = 1; i <= totalPages; i++){
                buttons.push(i);
            }
        } else {
            if (currentPage < 5) {
                buttons.push(1);
                buttons.push(2);
                buttons.push(3);
                buttons.push(4);
                buttons.push(5);
                buttons.push('...');
                buttons.push(totalPages);
            } else if (currentPage > totalPages - 5) {
                buttons.push(1);
                buttons.push('...');
                buttons.push(totalPages - 4);
                buttons.push(totalPages - 3);
                buttons.push(totalPages - 2);
                buttons.push(totalPages - 1);
                buttons.push(totalPages);
            } else {
                buttons.push(1);
                buttons.push('...');
                buttons.push(currentPage - 1);
                buttons.push(currentPage);
                buttons.push(currentPage + 1);
                buttons.push('...');
                buttons.push(totalPages);
            }
        }
        return buttons;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "route-select",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "route-f1",
                        children: [
                            " ",
                            t.news.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "route-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "route-f2",
                                children: t.news.home
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/Polygon2.png",
                                alt: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "route-f3",
                                children: t.news.title2
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nnews-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nrequirements-button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${activeSection === "a" ? "active" : ""}`,
                                onClick: ()=>{
                                    setActiveSection("a");
                                    setCurrentPage(1); // 点击按钮时重置为第一页
                                },
                                children: t.news.option1
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${activeSection === "b" ? "active" : ""}`,
                                onClick: ()=>{
                                    setActiveSection("b");
                                    setCurrentPage(1); // 点击按钮时重置为第一页
                                },
                                children: t.news.option2
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nnews-list",
                        children: currentNews.length > 0 ? currentNews.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mnews-item",
                                onClick: ()=>handleNavigation(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nnews-fl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nnews-time",
                                                children: news.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nnews-t",
                                                children: [
                                                    " ",
                                                    activeSection === "a" ? t.news.option1 : t.news.option2
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nnews-summary",
                                        children: news.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                        lineNumber: 199,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-news",
                            children: [
                                t.news.noContent,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mobile/NewsContent.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pagination",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "arrow",
                                onClick: prevPage,
                                disabled: currentPage === 1,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            getPaginationButtons().map((button, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `page-num ${button === currentPage ? "active" : ""}`,
                                    onClick: ()=>{
                                        if (typeof button === 'number') setCurrentPage(button); // 只设置数字页码
                                    },
                                    disabled: button === '...',
                                    children: button
                                }, index, false, {
                                    fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "arrow",
                                onClick: nextPage,
                                disabled: currentPage * newsPerPage >= currentData.length,
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mobile/NewsContent.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mobile/NewsContent.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mobile/NewsContent.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(ServicePage, "NNAqgZrG1upy64qKPvyQzXVIQYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ServicePage;
var _c;
__turbopack_context__.k.register(_c, "ServicePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_mobile_NewsContent_tsx_bda3dcf1._.js.map