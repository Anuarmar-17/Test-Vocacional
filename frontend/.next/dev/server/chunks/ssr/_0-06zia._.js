module.exports = [
"[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AREAS",
    ()=>AREAS,
    "COLORS",
    ()=>COLORS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PREGUNTAS_MUESTRA",
    ()=>PREGUNTAS_MUESTRA,
    "PROFESIONES",
    ()=>PROFESIONES
]);
const COLORS = {
    accent: "#4F6AF5",
    accentLight: "#EEF1FF",
    accentMid: "#C7D0FD",
    teal: "#0F9B8E",
    tealLight: "#E0F5F3",
    coral: "#E85D4A",
    coralLight: "#FDF0EE",
    amber: "#D97706",
    amberLight: "#FEF3C7",
    text: "#1A1A2E",
    textMuted: "#6B7280",
    textLight: "#9CA3AF",
    bg: "#F8F9FE",
    surface: "#FFFFFF",
    border: "rgba(0,0,0,0.08)",
    borderMid: "rgba(0,0,0,0.14)",
    sidebar: "#FFFFFF",
    sidebarBorder: "rgba(0,0,0,0.07)"
};
const AREAS = [
    {
        id: "arte",
        label: "Arte y Creatividad",
        color: "#C0533A",
        light: "#FAF0ED",
        score: 72
    },
    {
        id: "social",
        label: "Ciencias Sociales",
        color: "#3A5BD9",
        light: "#EEF2FD",
        score: 58
    },
    {
        id: "economica",
        label: "Económica / Administrativa",
        color: "#B06010",
        light: "#FDF5E8",
        score: 44
    },
    {
        id: "tecnologia",
        label: "Ciencia y Tecnología",
        color: "#0A7A70",
        light: "#E5F5F3",
        score: 61
    },
    {
        id: "salud",
        label: "Ciencias de la Salud",
        color: "#5C2FA8",
        light: "#F0EAFB",
        score: 35
    }
];
const PROFESIONES = {
    arte: [
        "Diseño Gráfico",
        "Arquitectura",
        "Comunicación Social",
        "Publicidad",
        "Bellas Artes"
    ],
    tecnologia: [
        "Ingeniería de Sistemas",
        "Ingeniería Electrónica",
        "Biotecnología",
        "Física",
        "Matemáticas"
    ]
};
const PREGUNTAS_MUESTRA = [
    {
        id: 1,
        area: "arte",
        texto: "Me gusta dibujar, pintar o crear objetos artísticos"
    },
    {
        id: 2,
        area: "social",
        texto: "Disfruto ayudando a resolver conflictos entre personas"
    },
    {
        id: 3,
        area: "tecnologia",
        texto: "Me interesa aprender cómo funcionan los computadores"
    },
    {
        id: 4,
        area: "economica",
        texto: "Me atrae administrar recursos y planear presupuestos"
    },
    {
        id: 5,
        area: "salud",
        texto: "Me preocupa el bienestar físico y emocional de las personas"
    },
    {
        id: 6,
        area: "arte",
        texto: "Me gusta la fotografía, el cine o el teatro"
    },
    {
        id: 7,
        area: "tecnologia",
        texto: "Disfruto resolviendo problemas matemáticos complejos"
    },
    {
        id: 8,
        area: "social",
        texto: "Me interesa la psicología y el comportamiento humano"
    }
];
const NAV_LINKS = [
    {
        id: "inicio",
        label: "Inicio",
        icon: "ti-home"
    },
    {
        id: "dashboard",
        label: "Perfil",
        icon: "ti-user"
    },
    {
        id: "autoconocimiento",
        label: "Autoconocimiento",
        icon: "ti-brain"
    },
    {
        id: "test",
        label: "Test Vocacional",
        icon: "ti-clipboard-list"
    },
    {
        id: "resultados",
        label: "Resultados",
        icon: "ti-chart-bar"
    },
    {
        id: "proyecto",
        label: "Proyecto de Vida",
        icon: "ti-map"
    }
];
}),
"[project]/src/context/VocacionalContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VocacionalContext",
    ()=>VocacionalContext,
    "VocacionalProvider",
    ()=>VocacionalProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
;
;
;
const VocacionalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const INITIAL_REFLECTIONS = {
    "0-0": "Mi principal fortaleza es la perseverancia y la empatía con los demás.",
    "0-1": "Me hace perder la noción del tiempo programar y diseñar interfaces creativas.",
    "0-2": "Curiosa, creativa y organizada.",
    "1-0": "Lo más importante en la vida es mi familia, el crecimiento personal y ayudar a otros.",
    "1-1": "Me guío bajo principios de honestidad, respeto y equidad."
};
const INITIAL_ANSWERS = {
    // Sample questions 1-8 answered to match default scores
    1: "Me interesa",
    2: "Me interesa",
    3: "Me interesa",
    4: "Me interesa",
    5: "Me interesa",
    6: "Me interesa",
    7: "Me interesa",
    8: "Me interesa",
    // Questions 9-24 to complete 24 answered questions
    9: "Me interesa",
    10: "No me interesa",
    11: "Me interesa",
    12: "No me interesa",
    13: "Me interesa",
    14: "No me interesa",
    15: "Me interesa",
    16: "No me interesa",
    17: "Me interesa",
    18: "No me interesa",
    19: "Me interesa",
    20: "No me interesa",
    21: "Me interesa",
    22: "No me interesa",
    23: "Me interesa",
    24: "Me interesa"
};
const INITIAL_LIFE_PROJECT = {
    vision: "Quiero ser una profesional de la tecnología, creando soluciones interactivas que faciliten la educación y el bienestar de las personas en mi comunidad.",
    corto: "Completar con éxito este test vocacional y elegir mi carrera universitaria ideal."
};
function VocacionalProvider({ children }) {
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("inicio");
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("María López");
    const [reflections, setReflections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_REFLECTIONS);
    const [testAnswers, setTestAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ANSWERS);
    const [lifeProject, setLifeProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_LIFE_PROJECT);
    const saveReflections = (newReflections)=>{
        setReflections(newReflections);
    };
    const saveTestAnswers = (newAnswers)=>{
        setTestAnswers(newAnswers);
    };
    const saveLifeProject = (newData)=>{
        setLifeProject(newData);
    };
    // Computations
    const answeredCount = Object.keys(testAnswers).length;
    const reflectionsCount = Object.keys(reflections).filter((k)=>reflections[k] && reflections[k].trim() !== "").length;
    // Calculate profile completion dynamically
    const testWeight = answeredCount / 80 * 35; // Test accounts for 35%
    const reflectionsWeight = reflectionsCount / 9 * 25; // Reflections account for 25% (9 total textareas)
    const lifeProjectKeys = [
        "vision",
        "corto",
        "mediano",
        "largo",
        "compromisos",
        "acad-0",
        "acad-1",
        "acad-2",
        "acad-3"
    ];
    const completedLifeProject = lifeProjectKeys.filter((k)=>lifeProject[k] && lifeProject[k].trim() !== "").length;
    const lifeProjectWeight = completedLifeProject / lifeProjectKeys.length * 40; // Life project accounts for 40%
    const rawCompletion = Math.round(testWeight + reflectionsWeight + lifeProjectWeight);
    const profileCompletion = Math.min(100, Math.max(30, rawCompletion)); // Clamp between 30% and 100% to match mock visually
    // Dynamic Vocational scores calculated based on actual answers to sample questions
    const dynamicAreas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AREAS"].map((area)=>{
        let score = area.score; // default baseline
        // Adjust score based on active answers for sample questions to make it dynamic
        if (area.id === "arte") {
            const q1Score = testAnswers[1] === "Me interesa" ? 0 : -6;
            const q6Score = testAnswers[6] === "Me interesa" ? 0 : -6;
            score += q1Score + q6Score;
        } else if (area.id === "social") {
            const q2Score = testAnswers[2] === "Me interesa" ? 0 : -6;
            const q8Score = testAnswers[8] === "Me interesa" ? 0 : -6;
            score += q2Score + q8Score;
        } else if (area.id === "tecnologia") {
            const q3Score = testAnswers[3] === "Me interesa" ? 0 : -6;
            const q7Score = testAnswers[7] === "Me interesa" ? 0 : -6;
            score += q3Score + q7Score;
        } else if (area.id === "economica") {
            const q4Score = testAnswers[4] === "Me interesa" ? 0 : -6;
            score += q4Score;
        } else if (area.id === "salud") {
            const q5Score = testAnswers[5] === "Me interesa" ? 0 : -6;
            score += q5Score;
        }
        return {
            ...area,
            score: Math.max(0, Math.min(80, score))
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VocacionalContext.Provider, {
        value: {
            view,
            setView,
            userName,
            setUserName,
            reflections,
            setReflections,
            saveReflections,
            testAnswers,
            setTestAnswers,
            saveTestAnswers,
            lifeProject,
            setLifeProject,
            saveLifeProject,
            answeredCount,
            reflectionsCount,
            profileCompletion,
            dynamicAreas
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/VocacionalContext.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVocacional",
    ()=>useVocacional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VocacionalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/VocacionalContext.tsx [app-ssr] (ecmascript)");
;
;
function useVocacional() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VocacionalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VocacionalContext"]);
    if (!context) {
        throw new Error("useVocacional debe usarse dentro de un VocacionalProvider");
    }
    return context;
}
}),
"[project]/src/components/layout/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
function Sidebar() {
    const { view, setView, userName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: 220,
            minWidth: 220,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sidebar,
            borderRight: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sidebarBorder}`,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            position: "sticky",
            top: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "1.4rem 1.5rem 1rem",
                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sidebarBorder}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ti ti-compass",
                            style: {
                                color: "#fff",
                                fontSize: 18
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 700,
                            fontSize: 15.5,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            letterSpacing: "-0.3px"
                        },
                        children: "VocaTest"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    flex: 1,
                    padding: "1rem 0.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 10.5,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight,
                            textTransform: "uppercase",
                            letterSpacing: "0.6px",
                            margin: "0 0 8px 8px"
                        },
                        children: "Menú"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((l)=>{
                        const isActive = view === l.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setView(l.id),
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                background: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight : "transparent",
                                color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                border: "none",
                                cursor: "pointer",
                                padding: "9px 12px",
                                borderRadius: 10,
                                fontSize: 13.5,
                                fontWeight: isActive ? 600 : 400,
                                textAlign: "left",
                                width: "100%",
                                transition: "all .12s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `ti ${l.icon}`,
                                    style: {
                                        fontSize: 17,
                                        flexShrink: 0
                                    },
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                l.label
                            ]
                        }, l.id, true, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "1rem 1.25rem",
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sidebarBorder}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentMid,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 700,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                            flexShrink: 0
                        },
                        children: userName ? userName.slice(0, 2).toUpperCase() : "US"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                children: userName
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: 11.5,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                },
                                children: "Estudiante"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Sidebar.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/TopBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
;
;
function TopBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            height: 52,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sidebarBorder}`,
            display: "flex",
            alignItems: "center",
            padding: "0 2rem",
            gap: 12,
            position: "sticky",
            top: 0,
            zIndex: 50
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/TopBar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
                    borderRadius: 8,
                    padding: "6px 12px",
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                    cursor: "text"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ti ti-search",
                        style: {
                            fontSize: 14,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/TopBar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight
                        },
                        children: "Buscar..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/TopBar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/TopBar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    background: "transparent",
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                    borderRadius: 8,
                    width: 34,
                    height: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ti ti-bell",
                    style: {
                        fontSize: 17,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                    },
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/TopBar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/TopBar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/TopBar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
;
;
function Card({ children, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
            borderRadius: 16,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
            padding: "1.5rem",
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/ProgressBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProgressBar({ value, color, max = 80 }) {
    const percentage = Math.max(0, Math.min(100, value / max * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#EDEFF5",
            borderRadius: 99,
            height: 7,
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: `${percentage}%`,
                height: "100%",
                background: color,
                borderRadius: 99,
                transition: "width .5s ease"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ProgressBar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ProgressBar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/DashboardView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function DashboardView() {
    const { setView, userName, answeredCount, reflectionsCount, profileCompletion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    // Dynamically count completed modules
    const isAutoconocimientoDone = reflectionsCount >= 5;
    const isTestDone = answeredCount === 80;
    const isResultadosDone = isTestDone; // unlocked when test is done
    const isProyectoDone = reflectionsCount > 0 && answeredCount === 80; // simplified mock completion check
    let completedModules = 0;
    if (isAutoconocimientoDone) completedModules += 1;
    if (isTestDone) completedModules += 1;
    if (isResultadosDone) completedModules += 1;
    if (isProyectoDone) completedModules += 1;
    // Enforce at least 1 module completed to match initial visual mock exactly
    const displayCompletedModules = Math.max(1, completedModules);
    const steps = [
        {
            id: "autoconocimiento",
            label: "Autoconocimiento",
            desc: "Reflexiona sobre quién eres",
            icon: "ti-user-search",
            done: isAutoconocimientoDone,
            active: !isAutoconocimientoDone,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal
        },
        {
            id: "test",
            label: "Test Vocacional",
            desc: "80 preguntas de interés",
            icon: "ti-clipboard-list",
            done: isTestDone,
            active: isAutoconocimientoDone && !isTestDone,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
        },
        {
            id: "resultados",
            label: "Resultados",
            desc: "Conoce tus áreas top",
            icon: "ti-chart-bar",
            done: isResultadosDone,
            active: isTestDone && !isResultadosDone,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coral
        },
        {
            id: "proyecto",
            label: "Proyecto de Vida",
            desc: "Define tu futuro",
            icon: "ti-map",
            done: isProyectoDone,
            active: isResultadosDone && !isProyectoDone,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].amber
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem 2.5rem",
            maxWidth: 860,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            fontSize: 14,
                            margin: 0
                        },
                        children: "Bienvenido de vuelta"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: 26,
                            fontWeight: 700,
                            margin: "4px 0 0",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            letterSpacing: "-0.5px"
                        },
                        children: [
                            "Hola, ",
                            userName.split(" ")[0]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardView.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: "2rem"
                },
                children: [
                    {
                        label: "Módulos completados",
                        value: `${displayCompletedModules} / 4`,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal
                    },
                    {
                        label: "Preguntas respondidas",
                        value: `${answeredCount} / 80`,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                    },
                    {
                        label: "Perfil completado",
                        value: `${profileCompletion}%`,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coral
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            padding: "1.25rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 0 6px",
                                    fontSize: 11.5,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    letterSpacing: ".5px"
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: 28,
                                    fontWeight: 700,
                                    color: s.color
                                },
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/DashboardView.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            textTransform: "uppercase",
                            letterSpacing: ".5px",
                            margin: "0 0 1.5rem"
                        },
                        children: "Tu recorrido"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 0,
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 21,
                                    left: "12.5%",
                                    right: "12.5%",
                                    height: 2,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border,
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            steps.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setView(s.id),
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 10,
                                        cursor: "pointer",
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 42,
                                                height: 42,
                                                borderRadius: "50%",
                                                background: s.done ? s.color : s.active ? s.color : "#EDEFF5",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: s.active ? `0 0 0 4px ${s.color}22` : "none",
                                                transition: "all .2s"
                                            },
                                            children: s.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-check",
                                                style: {
                                                    color: "#fff",
                                                    fontSize: 18
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardView.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `ti ${s.icon}`,
                                                style: {
                                                    color: s.active ? "#fff" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight,
                                                    fontSize: 18
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardView.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DashboardView.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        color: s.active || s.done ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight
                                                    },
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardView.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: "2px 0 0",
                                                        fontSize: 11.5,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                    },
                                                    children: s.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardView.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/DashboardView.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/views/DashboardView.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardView.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 0 1rem",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                    textTransform: "uppercase",
                                    letterSpacing: ".5px"
                                },
                                children: "Continuar test"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 0 12px",
                                    fontSize: 14,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                },
                                children: [
                                    "Llevas ",
                                    answeredCount,
                                    " de 80 preguntas respondidas."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: answeredCount,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("test"),
                                style: {
                                    marginTop: 16,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 10,
                                    padding: "10px 20px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    width: "100%"
                                },
                                children: "Continuar test →"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 0 1rem",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                    textTransform: "uppercase",
                                    letterSpacing: ".5px"
                                },
                                children: "Módulo completado"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].tealLight,
                                    borderRadius: 12,
                                    padding: "1rem",
                                    display: "flex",
                                    gap: 12,
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-circle-check",
                                        style: {
                                            fontSize: 28,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal
                                        },
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DashboardView.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal
                                                },
                                                children: "Autoconocimiento"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardView.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "2px 0 0",
                                                    fontSize: 12,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                },
                                                children: [
                                                    "Completado · ",
                                                    reflectionsCount,
                                                    " reflexiones guardadas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DashboardView.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DashboardView.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("autoconocimiento"),
                                style: {
                                    marginTop: 12,
                                    background: "transparent",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal,
                                    border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal}`,
                                    borderRadius: 10,
                                    padding: "10px 20px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    width: "100%"
                                },
                                children: "Revisar respuestas"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardView.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardView.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardView.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DashboardView.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Tag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Tag({ color, light, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            background: light,
            color,
            fontSize: 12,
            fontWeight: 500,
            padding: "3px 10px",
            borderRadius: 20,
            display: "inline-block"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Tag.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/AutoconocimientoView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AutoconocimientoView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function AutoconocimientoView() {
    const { reflections, saveReflections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [localVals, setLocalVals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Sync with global reflections on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalVals(reflections);
    }, [
        reflections
    ]);
    const tabs = [
        "¿Quién soy?",
        "Mis valores",
        "Metas personales"
    ];
    const questions = [
        [
            "¿Cuáles son tus principales fortalezas?",
            "¿Qué actividades te hacen perder la noción del tiempo?",
            "¿Cómo te describirías en 3 palabras?"
        ],
        [
            "¿Qué es lo más importante para ti en la vida?",
            "¿Qué valores guían tus decisiones?",
            "¿Qué principios nunca comprometerías?"
        ],
        [
            "¿Qué quieres lograr en los próximos 2 años?",
            "¿Cuál es tu sueño profesional?",
            "¿Qué obstáculos debes superar?"
        ]
    ];
    const handleSave = ()=>{
        saveReflections(localVals);
        alert("¡Reflexiones guardadas con éxito!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem 2.5rem",
            maxWidth: 820,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal,
                        light: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].tealLight,
                        children: "Módulo 1"
                    }, void 0, false, {
                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "8px 0 4px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            letterSpacing: "-.5px"
                        },
                        children: "Autoconocimiento"
                    }, void 0, false, {
                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            fontSize: 14
                        },
                        children: "Reflexiona sobre ti mismo antes de explorar tus intereses vocacionales."
                    }, void 0, false, {
                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: [
                            tabs.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab(i),
                                    style: {
                                        background: tab === i ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].tealLight : "transparent",
                                        color: tab === i ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                        border: tab === i ? `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal}33` : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                        borderRadius: 12,
                                        padding: "12px 16px",
                                        fontSize: 14,
                                        fontWeight: tab === i ? 600 : 400,
                                        cursor: "pointer",
                                        textAlign: "left"
                                    },
                                    children: t
                                }, i, false, {
                                    fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    marginTop: 8,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentMid}`,
                                    padding: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: "0 0 6px",
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-brain",
                                                style: {
                                                    marginRight: 6
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            "Inteligencia emocional"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: 12,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                            lineHeight: 1.6
                                        },
                                        children: "Reconocer tus emociones te ayuda a tomar mejores decisiones vocacionales."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: "0 0 1.25rem",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                },
                                children: tabs[tab]
                            }, void 0, false, {
                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 20
                                },
                                children: questions[tab].map((q, i)=>{
                                    const key = `${tab}-${i}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                                    marginBottom: 8
                                                },
                                                children: q
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: localVals[key] || "",
                                                onChange: (e)=>setLocalVals((v)=>({
                                                            ...v,
                                                            [key]: e.target.value
                                                        })),
                                                placeholder: "Escribe tu reflexión aquí...",
                                                style: {
                                                    width: "100%",
                                                    minHeight: 80,
                                                    borderRadius: 10,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                                    padding: 12,
                                                    fontSize: 14,
                                                    resize: "vertical",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                                    fontFamily: "inherit",
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
                                                    outline: "none",
                                                    boxSizing: "border-box"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 10,
                                        padding: "10px 24px",
                                        fontSize: 14,
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    },
                                    children: "Guardar reflexiones"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/AutoconocimientoView.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/AutoconocimientoView.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/AutoconocimientoView.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/TestVocacionalView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestVocacionalView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Semantic normalizer to match the full area names in the JSON to the AREA ids in the application
const getAreaKey = (areaName)=>{
    const normalized = areaName.toLowerCase();
    if (normalized.includes("arte") || normalized.includes("creativ")) return "arte";
    if (normalized.includes("social")) return "social";
    if (normalized.includes("econ") || normalized.includes("admin") || normalized.includes("finan")) return "economica";
    if (normalized.includes("tecn")) return "tecnologia";
    if (normalized.includes("salud") || normalized.includes("ecol") || normalized.includes("biol")) return "salud";
    return "arte"; // fallback
};
function TestVocacionalView() {
    const { testAnswers, setTestAnswers, setView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    const [preguntas, setPreguntas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBlock, setCurrentBlock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const total = 80;
    const questionsPerBlock = 10;
    const totalBlocks = Math.ceil(total / questionsPerBlock); // 8 blocks of 10 questions
    // Calculate answered count based on active answers matching IDs from 1 to 80
    const answered = Object.keys(testAnswers).filter((id)=>{
        const numId = Number(id);
        return numId >= 1 && numId <= 80 && testAnswers[numId];
    }).length;
    const percent = Math.round(answered / total * 100);
    // 1. Fetch real questions from public folder (preguntas.json)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/preguntas.json").then((res)=>{
            if (!res.ok) {
                throw new Error("No se pudo cargar el archivo de preguntas");
            }
            return res.json();
        }).then((data)=>{
            setPreguntas(data);
            setLoading(false);
        }).catch((err)=>{
            console.error("Error loading questions JSON:", err);
            setLoading(false);
        });
    }, []);
    const handleSelectOption = (questionId, option)=>{
        setTestAnswers((prev)=>({
                ...prev,
                [questionId]: option
            }));
    };
    const handleSaveProgress = ()=>{
        alert("¡Tu avance en el test vocacional ha sido guardado correctamente en tu navegador!");
    };
    const handleNextBlock = ()=>{
        if (currentBlock < totalBlocks - 1) {
            setCurrentBlock((prev)=>prev + 1);
            // Smooth scroll to top of questions container for premium user experience
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // Last block completed! Check if there are unanswered questions
            if (answered < total) {
                alert(`Has respondido ${answered} de ${total} preguntas. Por favor, responde las ${total - answered} preguntas faltantes en los bloques anteriores antes de finalizar.`);
                return;
            }
            alert("¡Enhorabuena! Has respondido las 80 preguntas con éxito. Calculando tus resultados vocacionales...");
            setView("resultados");
        }
    };
    const handlePrevBlock = ()=>{
        if (currentBlock > 0) {
            setCurrentBlock((prev)=>prev - 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    // Slice questions for the current block page (e.g. 0-9, 10-19, etc.)
    const startIdx = currentBlock * questionsPerBlock;
    const endIdx = startIdx + questionsPerBlock;
    const currentQuestions = preguntas.slice(startIdx, endIdx);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "4rem 2rem",
                textAlign: "center",
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 16,
                    fontWeight: 500
                },
                children: "Cargando preguntas del test..."
            }, void 0, false, {
                fileName: "[project]/src/views/TestVocacionalView.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/views/TestVocacionalView.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem 2.5rem",
            maxWidth: 820,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                light: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight,
                                children: "Módulo 2"
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 24,
                                    fontWeight: 700,
                                    margin: "8px 0 4px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                    letterSpacing: "-.5px"
                                },
                                children: "Test Vocacional"
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                    fontSize: 14
                                },
                                children: "Responde con honestidad. No hay respuestas correctas o incorrectas."
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            padding: "1rem 1.5rem",
                            textAlign: "center",
                            minWidth: 120
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: 28,
                                    fontWeight: 700,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                                },
                                children: answered
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "2px 0 0",
                                    fontSize: 12,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                },
                                children: [
                                    "de ",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/TestVocacionalView.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    marginBottom: 20,
                    padding: "1rem 1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                },
                                children: "Progreso general del test"
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                    fontWeight: 600
                                },
                                children: [
                                    percent,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: answered,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                        max: total
                    }, void 0, false, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6,
                                    flexWrap: "wrap"
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AREAS"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        color: a.color,
                                        light: a.light,
                                        children: a.label
                                    }, a.id, false, {
                                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                },
                                children: [
                                    "Bloque ",
                                    currentBlock + 1,
                                    " de ",
                                    totalBlocks
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/TestVocacionalView.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                },
                children: currentQuestions.map((q)=>{
                    const areaKey = getAreaKey(q.area);
                    const area = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AREAS"].find((a)=>a.id === areaKey);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            padding: "1.25rem 1.5rem",
                            borderLeft: `4px solid ${area?.color || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 16,
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        minWidth: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        background: area?.light || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight,
                                        color: area?.color || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 13,
                                        fontWeight: 700,
                                        flexShrink: 0
                                    },
                                    children: q.id
                                }, void 0, false, {
                                    fileName: "[project]/src/views/TestVocacionalView.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: "0 0 12px",
                                                fontSize: 14.5,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                                lineHeight: 1.5,
                                                fontWeight: 500
                                            },
                                            children: q.pregunta
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/TestVocacionalView.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 10
                                            },
                                            children: q.opciones.map((opt)=>{
                                                const isActive = testAnswers[q.id] === opt;
                                                const isInterest = opt === "Me interesa";
                                                const ac = isInterest ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coral;
                                                const al = isInterest ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].tealLight : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coralLight;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelectOption(q.id, opt),
                                                    style: {
                                                        background: isActive ? al : "#F8F9FE",
                                                        color: isActive ? ac : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                                        border: isActive ? `1.5px solid ${ac}` : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                                        borderRadius: 10,
                                                        padding: "8px 18px",
                                                        fontSize: 13.5,
                                                        fontWeight: isActive ? 600 : 400,
                                                        cursor: "pointer",
                                                        transition: "all .15s"
                                                    },
                                                    children: [
                                                        isInterest ? "✓ " : "✗ ",
                                                        opt
                                                    ]
                                                }, opt, true, {
                                                    fileName: "[project]/src/views/TestVocacionalView.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/TestVocacionalView.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/TestVocacionalView.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/TestVocacionalView.tsx",
                            lineNumber: 200,
                            columnNumber: 15
                        }, this)
                    }, q.id, false, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/views/TestVocacionalView.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSaveProgress,
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                            borderRadius: 10,
                            padding: "11px 24px",
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer"
                        },
                        children: "Guardar avance"
                    }, void 0, false, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 12
                        },
                        children: [
                            currentBlock > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrevBlock,
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                    border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent}`,
                                    borderRadius: 10,
                                    padding: "11px 24px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: "pointer"
                                },
                                children: "← Bloque anterior"
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNextBlock,
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 10,
                                    padding: "11px 24px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: "pointer"
                                },
                                children: currentBlock === totalBlocks - 1 ? "Finalizar y Ver Resultados ✓" : "Siguiente bloque →"
                            }, void 0, false, {
                                fileName: "[project]/src/views/TestVocacionalView.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/TestVocacionalView.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/TestVocacionalView.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/TestVocacionalView.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/ResultadosView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultadosView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ResultadosView() {
    const { dynamicAreas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    // Sort dynamic areas dynamically based on calculated scores
    const sorted = [
        ...dynamicAreas
    ].sort((a, b)=>b.score - a.score);
    const top = sorted[0];
    const second = sorted[1];
    // Muted neutral palette for the top cards
    const RANK_COLORS = [
        {
            bg: "#F5F6FA",
            border: "#DDE0EC",
            badge: {
                bg: "#E8EAFA",
                text: "#3A4DB0"
            },
            rank: "1er lugar"
        },
        {
            bg: "#F7F7F5",
            border: "#E2E0D8",
            badge: {
                bg: "#EDECE5",
                text: "#6B6450"
            },
            rank: "2do lugar"
        }
    ];
    const handleDownloadPDF = ()=>{
        alert("Generando y descargando reporte de resultados en PDF...");
    };
    const handlePrint = ()=>{
        window.print();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem 2.5rem",
            maxWidth: 860,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "#5060B8",
                        light: "#EAECF8",
                        children: "Módulo 3"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "8px 0 4px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            letterSpacing: "-.5px"
                        },
                        children: "Tus Resultados"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            fontSize: 14
                        },
                        children: "Basado en tus respuestas, estas son tus áreas vocacionales destacadas."
                    }, void 0, false, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ResultadosView.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: "1.5rem"
                },
                children: [
                    top,
                    second
                ].map((area, idx)=>{
                    const rc = RANK_COLORS[idx];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: rc.bg,
                            borderRadius: 16,
                            border: `1px solid ${rc.border}`,
                            padding: "1.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 4px",
                                                    fontSize: 11,
                                                    fontWeight: 400,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                                    textTransform: "uppercase",
                                                    letterSpacing: ".6px"
                                                },
                                                children: idx === 0 ? "Área principal" : "Área secundaria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 17,
                                                    fontWeight: 500,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                                },
                                                children: area.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11.5,
                                            fontWeight: 600,
                                            padding: "4px 10px",
                                            borderRadius: 8,
                                            background: rc.badge.bg,
                                            color: rc.badge.text
                                        },
                                        children: rc.rank
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "baseline",
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 36,
                                            fontWeight: 800,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                        },
                                        children: area.score
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                        },
                                        children: "/ 80 pts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: area.score,
                                    color: idx === 0 ? "#4F6AF5" : "#9CA3AF",
                                    max: 80
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ResultadosView.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        ]
                    }, area.id, true, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/views/ResultadosView.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: "0 0 1.25rem",
                            fontSize: 12,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            textTransform: "uppercase",
                            letterSpacing: ".5px"
                        },
                        children: "Puntaje por área"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 16
                        },
                        children: sorted.map((area, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13.5,
                                                    fontWeight: idx < 2 ? 600 : 400,
                                                    color: idx < 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                },
                                                children: area.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13.5,
                                                    fontWeight: 600,
                                                    color: idx < 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                },
                                                children: [
                                                    area.score,
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: area.score,
                                        color: idx === 0 ? "#4F6AF5" : idx === 1 ? "#9CA3AF" : "#D1D5DB",
                                        max: 80
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, area.id, true, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ResultadosView.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: "1.5rem"
                },
                children: [
                    top,
                    second
                ].map((area, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center",
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 32,
                                            height: 32,
                                            borderRadius: 8,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-school",
                                            style: {
                                                fontSize: 16,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/ResultadosView.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                                                },
                                                children: area.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 11.5,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                },
                                                children: idx === 0 ? "Área principal" : "Área secundaria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 0 10px",
                                    fontSize: 11.5,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                    textTransform: "uppercase",
                                    letterSpacing: ".4px"
                                },
                                children: "Carreras recomendadas"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 6
                                },
                                children: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROFESIONES"][area.id] || [
                                    "Pendiente de configurar"
                                ]).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
                                            borderRadius: 8,
                                            padding: "8px 12px",
                                            fontSize: 13.5,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-arrow-right",
                                                style: {
                                                    fontSize: 14,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textLight
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ResultadosView.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this),
                                            p
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/src/views/ResultadosView.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        ]
                    }, area.id, true, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/ResultadosView.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDownloadPDF,
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent,
                            color: "#fff",
                            border: "none",
                            borderRadius: 10,
                            padding: "12px 24px",
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-file-download",
                                style: {
                                    fontSize: 16
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            "Descargar resultados PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrint,
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                            borderRadius: 10,
                            padding: "12px 24px",
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-printer",
                                style: {
                                    fontSize: 16
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ResultadosView.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            "Imprimir"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ResultadosView.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ResultadosView.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/ResultadosView.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/ProyectoVidaView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProyectoVidaView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ProyectoVidaView() {
    const { lifeProject, saveLifeProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    const [localVals, setLocalVals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Sync with global context state on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalVals(lifeProject);
    }, [
        lifeProject
    ]);
    const set = (k, v)=>{
        setLocalVals((prev)=>({
                ...prev,
                [k]: v
            }));
    };
    const metas = [
        {
            id: "corto",
            label: "Corto plazo",
            desc: "En los próximos 6 meses",
            icon: "ti-target",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal
        },
        {
            id: "mediano",
            label: "Mediano plazo",
            desc: "En 1 a 3 años",
            icon: "ti-calendar",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
        },
        {
            id: "largo",
            label: "Largo plazo",
            desc: "En 5 años o más",
            icon: "ti-rocket",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coral
        }
    ];
    const academico = [
        "¿Tienes claro qué carrera quieres estudiar?",
        "¿Conoces los requisitos de admisión de tu institución de interés?",
        "¿Has investigado opciones de financiamiento (becas, créditos)?",
        "¿Tienes el apoyo de tu familia para continuar estudiando?"
    ];
    const handleSaveDraft = ()=>{
        saveLifeProject(localVals);
        alert("¡Borrador del proyecto de vida guardado!");
    };
    const handleSaveFinal = ()=>{
        saveLifeProject(localVals);
        alert("¡Proyecto de vida guardado y finalizado con éxito!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem 2.5rem",
            maxWidth: 820,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].amber,
                        light: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].amberLight,
                        children: "Módulo 4"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 24,
                            fontWeight: 700,
                            margin: "8px 0 4px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            letterSpacing: "-.5px"
                        },
                        children: "Mi Proyecto de Vida"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            fontSize: 14
                        },
                        children: "Define tu visión, metas y compromisos para construir tu futuro."
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: "0 0 12px",
                            fontSize: 15,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-star",
                                style: {
                                    marginRight: 8,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].amber
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            "Mi visión personal"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: localVals.vision || "",
                        onChange: (e)=>set("vision", e.target.value),
                        placeholder: "Describe cómo te imaginas en el futuro: quién quieres ser, qué quieres lograr y cómo quieres que te recuerden...",
                        style: {
                            width: "100%",
                            minHeight: 100,
                            borderRadius: 10,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                            padding: 14,
                            fontSize: 14,
                            resize: "vertical",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            fontFamily: "inherit",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
                            outline: "none",
                            boxSizing: "border-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: 20
                },
                children: metas.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            borderTop: `3px solid ${m.color}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `ti ${m.icon}`,
                                        style: {
                                            fontSize: 20,
                                            color: m.color
                                        },
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: m.color
                                                },
                                                children: m.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 11.5,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted
                                                },
                                                children: m.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: localVals[m.id] || "",
                                onChange: (e)=>set(m.id, e.target.value),
                                placeholder: "Escribe tus metas...",
                                style: {
                                    width: "100%",
                                    minHeight: 90,
                                    borderRadius: 8,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                    padding: 10,
                                    fontSize: 13,
                                    resize: "vertical",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                    fontFamily: "inherit",
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
                                    outline: "none",
                                    boxSizing: "border-box"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: "0 0 1rem",
                            fontSize: 15,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-books",
                                style: {
                                    marginRight: 8,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            "Evaluación académica"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 14
                        },
                        children: academico.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "12px 0",
                                    borderBottom: i < academico.length - 1 ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}` : "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: 14,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                                            flex: 1,
                                            lineHeight: 1.5
                                        },
                                        children: q
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 8,
                                            marginLeft: 16
                                        },
                                        children: [
                                            "Sí",
                                            "No"
                                        ].map((opt)=>{
                                            const isActive = localVals[`acad-${i}`] === opt;
                                            const c = opt === "Sí" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].teal : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coral;
                                            const cl = opt === "Sí" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].tealLight : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].coralLight;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>set(`acad-${i}`, opt),
                                                style: {
                                                    background: isActive ? cl : "#F8F9FE",
                                                    color: isActive ? c : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                                                    border: isActive ? `1.5px solid ${c}` : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                                                    borderRadius: 8,
                                                    padding: "6px 16px",
                                                    fontSize: 13.5,
                                                    fontWeight: isActive ? 600 : 400,
                                                    cursor: "pointer",
                                                    minWidth: 50
                                                },
                                                children: opt
                                            }, opt, false, {
                                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentLight,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentMid}`,
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: "0 0 12px",
                            fontSize: 15,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accent
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-writing",
                                style: {
                                    marginRight: 8
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            "Mis compromisos personales"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: localVals.compromisos || "",
                        onChange: (e)=>set("compromisos", e.target.value),
                        placeholder: "¿A qué te comprometes para lograr tus metas? Escribe acciones concretas y fechas...",
                        style: {
                            width: "100%",
                            minHeight: 90,
                            borderRadius: 10,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].accentMid}`,
                            padding: 14,
                            fontSize: 14,
                            resize: "vertical",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].text,
                            fontFamily: "inherit",
                            background: "white",
                            outline: "none",
                            boxSizing: "border-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSaveDraft,
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textMuted,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].border}`,
                            borderRadius: 10,
                            padding: "11px 24px",
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer"
                        },
                        children: "Guardar borrador"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSaveFinal,
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].amber,
                            color: "#fff",
                            border: "none",
                            borderRadius: 10,
                            padding: "11px 24px",
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: "pointer"
                        },
                        children: "Guardar proyecto de vida"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProyectoVidaView.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProyectoVidaView.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/ProyectoVidaView.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VocacionalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/VocacionalContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVocacional.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TopBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/TopBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/vocacional.ts [app-ssr] (ecmascript)");
// Views
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DashboardView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/DashboardView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$AutoconocimientoView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/AutoconocimientoView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$TestVocacionalView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/TestVocacionalView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ResultadosView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ResultadosView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ProyectoVidaView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ProyectoVidaView.tsx [app-ssr] (ecmascript)");
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
function VocacionalAppContent() {
    const { view } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVocacional"])();
    const renderView = ()=>{
        switch(view){
            case "dashboard":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DashboardView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, this);
            case "autoconocimiento":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$AutoconocimientoView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 16
                }, this);
            case "test":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$TestVocacionalView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 16
                }, this);
            case "resultados":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ResultadosView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 16
                }, this);
            case "proyecto":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ProyectoVidaView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DashboardView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            minHeight: "100vh",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$vocacional$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].bg,
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TopBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            position: "relative"
                        },
                        children: renderView()
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VocacionalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VocacionalProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VocacionalAppContent, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0-06zia._.js.map