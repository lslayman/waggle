"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eb96012ffc94\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NjZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImViOTYwMTJmZmM5NFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./app/components/NavBar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LogoWName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogoWName */ \"(app-client)/./app/components/LogoWName.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst withSetUsers = (param)=>{\n    let { children, setUsers } = param;\n    const ChildrenWithSetUsers = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {\n            setUsers\n        }));\n    return ChildrenWithSetUsers;\n};\nfunction NavBar() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/check-session\").then((res)=>res.json()).then((data)=>setUsers(data));\n    }, []);\n    function handleLogout(e) {\n        e.preventDefault();\n        fetch(\"/api/logout\", {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(setUsers(null));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-white shadow-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-6xl mx-auto px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoWName__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 6\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:flex items-center space-x-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Join, {\n                                        setUsers: setUsers\n                                    }, void 0, false, {\n                                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 6\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/login\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 8\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 6\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-white shadow-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-6xl mx-auto px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoWName__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 6\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"hidden md:flex items-center space-x-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/favorites\",\n                                        className: \"py-4 px-2 text-gray-500 font-semibold hover:text-gold-500 transition duration-300\",\n                                        children: \"Favorites\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 6\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"py-4 px-2 text-gold-500 border-b-4 border-gold-500 font-semibold\",\n                                        onClick: handleLogout,\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 6\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/lslayman/Development/code/waggle/client/app/components/NavBar.jsx\",\n            lineNumber: 61,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(NavBar, \"agkcAITZm3jfJZtUcsWKkI40X24=\");\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDdEI7QUFDTztBQUVwQyxNQUFNSyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDM0MsTUFBTUMsdUJBQXVCUixxREFBY1MsQ0FBQ0MsSUFBSUosVUFBVUssQ0FBQUEsc0JBQ3hEWCx5REFBa0JZLENBQUNELE9BQU87WUFBRUo7UUFBUztJQUV2QyxPQUFPQztBQUNOO0FBRWEsU0FBU0s7O0lBQ3ZCLE1BQU0sQ0FBQ0MsT0FBT1AsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDVGMsTUFBTSxzQkFDSEMsS0FBS0MsQ0FBQUEsTUFBT0EsSUFBSUMsUUFDaEJGLEtBQUtHLENBQUFBLE9BQVFaLFNBQVNZO0lBQ3hCLEdBQUcsRUFBRTtJQUVQLFNBQVNDLGFBQWFDLENBQUM7UUFDdEJBLEVBQUVDO1FBQ0ZQLE1BQU0sZUFBZTtZQUNwQlEsUUFBUTtZQUNSQyxTQUFTO2dCQUNSLGdCQUFnQjtZQUNqQjtRQUNELEdBQ0NSLEtBQUtULFNBQVM7SUFDaEI7SUFFQSxxQkFDQztrQkFDRSw0RUFBQ2tCO1lBQUlDLFdBQVU7c0JBQ2hCLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2hCLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUNGLDRFQUFDdkIsa0RBQVNBOzs7Ozs7Ozs7OzBDQUVULDhEQUFDdUI7Z0NBQUlELFdBQVU7O2tEQUVoQiw4REFBQ0U7d0NBQUtyQixVQUFVQTs7Ozs7O2tEQUNoQiw4REFBQ0osa0RBQUlBO3dDQUFDMEIsTUFBSztrREFDVCw0RUFBQ0M7NENBQUVKLFdBQVU7c0RBQW9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZcEcscUJBQ0k7a0JBQ0UsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ25CLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNoQiw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQzswQ0FDRiw0RUFBQ3ZCLGtEQUFTQTs7Ozs7Ozs7OzswQ0FFVCw4REFBQ3VCO2dDQUFJSSxPQUFNOztrREFDWiw4REFBQzVCLGtEQUFJQTt3Q0FBQzBCLE1BQUs7d0NBQWFILFdBQVU7a0RBQW9GOzs7Ozs7a0RBQ3RILDhEQUFDdkIsa0RBQUlBO3dDQUFDMEIsTUFBSzt3Q0FBSUgsV0FBVTt3Q0FBbUVNLFNBQVNaO2tEQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhIO0dBaEV3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2QmFyLmpzeD83NjA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9nb1dOYW1lIGZyb20gJy4vTG9nb1dOYW1lJztcblxuY29uc3Qgd2l0aFNldFVzZXJzID0gKHsgY2hpbGRyZW4sIHNldFVzZXJzIH0pID0+IHtcblx0Y29uc3QgQ2hpbGRyZW5XaXRoU2V0VXNlcnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG5cdCAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IHNldFVzZXJzIH0pXG5cdCk7XG5cdHJldHVybiBDaGlsZHJlbldpdGhTZXRVc2VycztcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuXHRjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaCgnL2FwaS9jaGVjay1zZXNzaW9uJylcblx0XHQgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdCAgLnRoZW4oZGF0YSA9PiBzZXRVc2VycyhkYXRhKSlcblx0ICB9LCBbXSlcblxuXHRmdW5jdGlvbiBoYW5kbGVMb2dvdXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGZldGNoKCcvYXBpL2xvZ291dCcsIHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH1cblx0XHR9KVxuXHRcdC50aGVuKHNldFVzZXJzKG51bGwpKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdCAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGdcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNFwiPlxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTdcIj5cblx0XHRcdFx0ICA8ZGl2PlxuXHRcdFx0XHRcdDxMb2dvV05hbWUgLz5cblx0XHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cblx0XHRcdFx0XHR7LyogUGFzcyB0aGUgc2V0VXNlcnMgcHJvcCBkaXJlY3RseSB0byB0aGUgSm9pbiBjb21wb25lbnQgKi99XG5cdFx0XHRcdFx0PEpvaW4gc2V0VXNlcnM9e3NldFVzZXJzfSAvPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cblx0XHRcdFx0XHQgIDxhIGNsYXNzTmFtZT1cInB5LTQgcHgtMiB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1nb2xkLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiPlxuXHRcdFx0XHRcdFx0TG9naW5cblx0XHRcdFx0XHQgIDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCAgPC9uYXY+XG5cdFx0PC8+XG5cdCAgKTtcblx0XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxuXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTRcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC03XCI+XG5cdFx0XHRcdCAgPGRpdj5cblx0XHRcdFx0XHQ8TG9nb1dOYW1lIC8+XG5cdFx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdCAgPGRpdiBjbGFzcz1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cblx0XHRcdFx0XHQ8TGluayBocmVmPScvZmF2b3JpdGVzJyBjbGFzc05hbWU9XCJweS00IHB4LTIgdGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtZ29sZC01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5GYXZvcml0ZXM8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPVwicHktNCBweC0yIHRleHQtZ29sZC01MDAgYm9yZGVyLWItNCBib3JkZXItZ29sZC01MDAgZm9udC1zZW1pYm9sZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPlxuXHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCAgPC9kaXY+XG5cdFx0ICAgIDwvZGl2PlxuXHQgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkxvZ29XTmFtZSIsIndpdGhTZXRVc2VycyIsImNoaWxkcmVuIiwic2V0VXNlcnMiLCJDaGlsZHJlbldpdGhTZXRVc2VycyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJOYXZCYXIiLCJ1c2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaGFuZGxlTG9nb3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsIkpvaW4iLCJocmVmIiwiYSIsImNsYXNzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/NavBar.jsx\n"));

/***/ })

});