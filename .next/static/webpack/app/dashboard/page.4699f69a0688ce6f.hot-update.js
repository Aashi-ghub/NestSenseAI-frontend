"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./components/ui/scroll-area.tsx\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var _components_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/switch */ \"(app-pages-browser)/./components/ui/switch.tsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _components_GradientText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/GradientText */ \"(app-pages-browser)/./components/GradientText.tsx\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst menuItems = [\n    {\n        label: \"Dashboard\",\n        href: \"/dashboard\"\n    },\n    {\n        label: \"Wellness Tracker\",\n        href: \"/wellness-tracker\"\n    },\n    {\n        label: \"Nutrition & Workout\",\n        href: \"/nutrition-workout\"\n    },\n    {\n        label: \"Mental Health\",\n        href: \"/mental-health\"\n    },\n    {\n        label: \"Baby Care\",\n        href: \"/baby-care\"\n    },\n    {\n        label: \"Resources\",\n        href: \"/resources\"\n    },\n    {\n        label: \"Community\",\n        href: \"/community\"\n    },\n    {\n        label: \"Profile\",\n        href: \"/profile\"\n    }\n];\nfunction Sidebar() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_7__.Sheet, {\n                open: open,\n                onOpenChange: setOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_7__.SheetTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            variant: \"ghost\",\n                            size: \"icon\",\n                            className: \"md:hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    className: \"h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Toggle Sidebar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_7__.SheetContent, {\n                        side: \"left\",\n                        className: \"p-0 w-64\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContent, {\n                            pathname: pathname,\n                            setOpen: setOpen\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block w-64 h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarContent, {\n                    pathname: pathname,\n                    setOpen: setOpen\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Sidebar, \"1ev0JM0INBegzrcci2bQidW9eiw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = Sidebar;\nfunction SidebarContent(param) {\n    let { pathname, setOpen } = param;\n    _s1();\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col bg-background border-r\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-b\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GradientText__WEBPACK_IMPORTED_MODULE_9__.GradientText, {\n                    className: \"text-2xl font-bold\",\n                    children: \"NestSenseAI\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_6__.ScrollArea, {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-col gap-2 p-4\",\n                    children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: item.href,\n                            className: \"flex items-center px-4 py-2 rounded-md transition-colors \".concat(pathname === item.href ? \"bg-primary text-primary-foreground\" : \"hover:bg-muted\"),\n                            onClick: ()=>setOpen(false),\n                            children: item.label\n                        }, item.href, false, {\n                            fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm font-medium\",\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        mounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_switch__WEBPACK_IMPORTED_MODULE_8__.Switch, {\n                            checked: theme === \"dark\",\n                            onCheckedChange: (checked)=>setTheme(checked ? \"dark\" : \"light\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s1(SidebarContent, \"uGU5l7ciDSfqFDe6wS7vfMb29jQ=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c1 = SidebarContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c1, \"SidebarContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTJDO0FBQ2Y7QUFDaUI7QUFDUDtBQUNTO0FBQ1M7QUFDaUI7QUFDMUI7QUFDRTtBQUNPO0FBRXhELE1BQU1hLFlBQVk7SUFDaEI7UUFBRUMsT0FBTztRQUFhQyxNQUFNO0lBQWE7SUFDekM7UUFBRUQsT0FBTztRQUFvQkMsTUFBTTtJQUFvQjtJQUN2RDtRQUFFRCxPQUFPO1FBQXVCQyxNQUFNO0lBQXFCO0lBQzNEO1FBQUVELE9BQU87UUFBaUJDLE1BQU07SUFBaUI7SUFDakQ7UUFBRUQsT0FBTztRQUFhQyxNQUFNO0lBQWE7SUFDekM7UUFBRUQsT0FBTztRQUFhQyxNQUFNO0lBQWE7SUFDekM7UUFBRUQsT0FBTztRQUFhQyxNQUFNO0lBQWE7SUFDekM7UUFBRUQsT0FBTztRQUFXQyxNQUFNO0lBQVc7Q0FDdEM7QUFFTSxTQUFTQzs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1tQixXQUFXaEIsNERBQVdBO0lBQzVCLE1BQU0sRUFBRWlCLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdqQixxREFBUUE7SUFDcEMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHdkIsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDLElBQU1zQixXQUFXLE9BQU8sRUFBRTtJQUVwQyxxQkFDRTs7MEJBQ0UsOERBQUNoQix1REFBS0E7Z0JBQUNVLE1BQU1BO2dCQUFNTyxjQUFjTjs7a0NBQy9CLDhEQUFDVCw4REFBWUE7d0JBQUNnQixPQUFPO2tDQUNuQiw0RUFBQ3BCLHlEQUFNQTs0QkFBQ3FCLFNBQVE7NEJBQVFDLE1BQUs7NEJBQU9DLFdBQVU7OzhDQUM1Qyw4REFBQ2pCLGlGQUFJQTtvQ0FBQ2lCLFdBQVU7Ozs7Ozs4Q0FDaEIsOERBQUNDO29DQUFLRCxXQUFVOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUIsOERBQUNwQiw4REFBWUE7d0JBQUNzQixNQUFLO3dCQUFPRixXQUFVO2tDQUNsQyw0RUFBQ0c7NEJBQWVaLFVBQVVBOzRCQUFVRCxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpELDhEQUFDYztnQkFBSUosV0FBVTswQkFDYiw0RUFBQ0c7b0JBQWVaLFVBQVVBO29CQUFVRCxTQUFTQTs7Ozs7Ozs7Ozs7OztBQUlyRDtHQTNCZ0JGOztRQUVHYix3REFBV0E7UUFDQUMsaURBQVFBOzs7S0FIdEJZO0FBNkJoQixTQUFTZSxlQUFlLEtBQTZFO1FBQTdFLEVBQUVaLFFBQVEsRUFBRUQsT0FBTyxFQUEwRCxHQUE3RTs7SUFDdEIsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHakIscURBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2tCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQyxJQUFNc0IsV0FBVyxPQUFPLEVBQUU7SUFFcEMscUJBQ0UsOERBQUNTO1FBQUlKLFdBQVU7OzBCQUNiLDhEQUFDSTtnQkFBSUosV0FBVTswQkFDYiw0RUFBQ2hCLGtFQUFZQTtvQkFBQ2dCLFdBQVU7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFL0MsOERBQUN0QixrRUFBVUE7Z0JBQUNzQixXQUFVOzBCQUNwQiw0RUFBQ0s7b0JBQUlMLFdBQVU7OEJBQ1pmLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNqQyxpREFBSUE7NEJBRUhhLE1BQU1vQixLQUFLcEIsSUFBSTs0QkFDZmEsV0FBVyw0REFJVixPQUhDVCxhQUFhZ0IsS0FBS3BCLElBQUksR0FDbEIsdUNBQ0E7NEJBRU5xQixTQUFTLElBQU1sQixRQUFRO3NDQUV0QmlCLEtBQUtyQixLQUFLOzJCQVROcUIsS0FBS3BCLElBQUk7Ozs7Ozs7Ozs7Ozs7OzswQkFjdEIsOERBQUNpQjtnQkFBSUosV0FBVTswQkFDYiw0RUFBQ0k7b0JBQUlKLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBS0QsV0FBVTtzQ0FBc0I7Ozs7Ozt3QkFDckNOLHlCQUNDLDhEQUFDWix5REFBTUE7NEJBQ0wyQixTQUFTakIsVUFBVTs0QkFDbkJrQixpQkFBaUIsQ0FBQ0QsVUFBWWhCLFNBQVNnQixVQUFVLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hFO0lBMUNTTjs7UUFDcUIzQixpREFBUUE7OztNQUQ3QjJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYVwiXHJcbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2hlZXRcIlxyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiXHJcbmltcG9ydCB7IE1lbnUsIFgsIE1vb24sIFN1biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuaW1wb3J0IHsgR3JhZGllbnRUZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzL0dyYWRpZW50VGV4dCdcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7IGxhYmVsOiAnRGFzaGJvYXJkJywgaHJlZjogJy9kYXNoYm9hcmQnIH0sXHJcbiAgeyBsYWJlbDogJ1dlbGxuZXNzIFRyYWNrZXInLCBocmVmOiAnL3dlbGxuZXNzLXRyYWNrZXInIH0sXHJcbiAgeyBsYWJlbDogJ051dHJpdGlvbiAmIFdvcmtvdXQnLCBocmVmOiAnL251dHJpdGlvbi13b3Jrb3V0JyB9LFxyXG4gIHsgbGFiZWw6ICdNZW50YWwgSGVhbHRoJywgaHJlZjogJy9tZW50YWwtaGVhbHRoJyB9LFxyXG4gIHsgbGFiZWw6ICdCYWJ5IENhcmUnLCBocmVmOiAnL2JhYnktY2FyZScgfSxcclxuICB7IGxhYmVsOiAnUmVzb3VyY2VzJywgaHJlZjogJy9yZXNvdXJjZXMnIH0sXHJcbiAgeyBsYWJlbDogJ0NvbW11bml0eScsIGhyZWY6ICcvY29tbXVuaXR5JyB9LFxyXG4gIHsgbGFiZWw6ICdQcm9maWxlJywgaHJlZjogJy9wcm9maWxlJyB9LFxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2hlZXQgb3Blbj17b3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRPcGVufT5cclxuICAgICAgICA8U2hlZXRUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIFNpZGViYXI8L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1NoZWV0VHJpZ2dlcj5cclxuICAgICAgICA8U2hlZXRDb250ZW50IHNpZGU9XCJsZWZ0XCIgY2xhc3NOYW1lPVwicC0wIHctNjRcIj5cclxuICAgICAgICAgIDxTaWRlYmFyQ29udGVudCBwYXRobmFtZT17cGF0aG5hbWV9IHNldE9wZW49e3NldE9wZW59IC8+XHJcbiAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgIDwvU2hlZXQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB3LTY0IGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPFNpZGViYXJDb250ZW50IHBhdGhuYW1lPXtwYXRobmFtZX0gc2V0T3Blbj17c2V0T3Blbn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZGViYXJDb250ZW50KHsgcGF0aG5hbWUsIHNldE9wZW4gfTogeyBwYXRobmFtZTogc3RyaW5nLCBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCB9KSB7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBiZy1iYWNrZ3JvdW5kIGJvcmRlci1yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iXCI+XHJcbiAgICAgICAgPEdyYWRpZW50VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5OZXN0U2Vuc2VBSTwvR3JhZGllbnRUZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHAtNFwiPlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgJHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lID09PSBpdGVtLmhyZWZcclxuICAgICAgICAgICAgICAgICAgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6YmctbXV0ZWQnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvU2Nyb2xsQXJlYT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkRhcmsgTW9kZTwvc3Bhbj5cclxuICAgICAgICAgIHttb3VudGVkICYmIChcclxuICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSAnZGFyayd9XHJcbiAgICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0VGhlbWUoY2hlY2tlZCA/ICdkYXJrJyA6ICdsaWdodCcpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVRoZW1lIiwiQnV0dG9uIiwiU2Nyb2xsQXJlYSIsIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRUcmlnZ2VyIiwiU3dpdGNoIiwiTWVudSIsIkdyYWRpZW50VGV4dCIsIm1lbnVJdGVtcyIsImxhYmVsIiwiaHJlZiIsIlNpZGViYXIiLCJvcGVuIiwic2V0T3BlbiIsInBhdGhuYW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwib25PcGVuQ2hhbmdlIiwiYXNDaGlsZCIsInZhcmlhbnQiLCJzaXplIiwiY2xhc3NOYW1lIiwic3BhbiIsInNpZGUiLCJTaWRlYmFyQ29udGVudCIsImRpdiIsIm5hdiIsIm1hcCIsIml0ZW0iLCJvbkNsaWNrIiwiY2hlY2tlZCIsIm9uQ2hlY2tlZENoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});