"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/wellness-tracker/page",{

/***/ "(app-pages-browser)/./components/SidebarLayout.tsx":
/*!**************************************!*\
  !*** ./components/SidebarLayout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarLayout: function() { return /* binding */ SidebarLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ \"(app-pages-browser)/./components/Sidebar.tsx\");\n\n\nfunction SidebarLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-background flex flex-col md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-64 flex-shrink-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:fixed md:top-0 md:left-0 md:bottom-0 md:w-64 z-40\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\SidebarLayout.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\SidebarLayout.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\SidebarLayout.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow md:ml-64 p-4 md:p-8 overflow-auto min-h-screen\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\SidebarLayout.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adip2\\\\Downloads\\\\NestSenseAI\\\\components\\\\SidebarLayout.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = SidebarLayout;\nvar _c;\n$RefreshReg$(_c, \"SidebarLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhckxheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUU1QixTQUFTQyxjQUFjLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNKLDZDQUFPQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDSztnQkFBS0QsV0FBVTswQkFDYkY7Ozs7Ozs7Ozs7OztBQUlUO0tBYmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXJMYXlvdXQudHN4PzUxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4vU2lkZWJhcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy02NCBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmaXhlZCBtZDp0b3AtMCBtZDpsZWZ0LTAgbWQ6Ym90dG9tLTAgbWQ6dy02NCB6LTQwXCI+XHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC1ncm93IG1kOm1sLTY0IHAtNCBtZDpwLTggb3ZlcmZsb3ctYXV0byBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJTaWRlYmFyTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SidebarLayout.tsx\n"));

/***/ })

});