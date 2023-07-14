"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/join/page",{

/***/ "(app-client)/./app/(auth)/join/page.jsx":
/*!**********************************!*\
  !*** ./app/(auth)/join/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Join; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Join(param) {\n    let { setUsers } = param;\n    _s();\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [surname, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleJoin = async (e)=>{\n        e.preventDefault();\n        if (!email || !password) {\n            setError(\"Email and password are required.\");\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/join\", {\n                email,\n                password\n            });\n            console.log(\"User joined successfully!\", response.data);\n            // Reset the form\n            setEmail(\"\");\n            setPassword(\"\");\n            setError(\"\");\n        } catch (error) {\n            // Handle the error response\n            console.error(\"Error joining user:\", error);\n            setError(\"Failed to join. Please try again.\");\n        }\n    };\n    return(// join component src: https://tailwindflex.com/bunny/simple-login-form\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-yellow-400 h-screen overflow-hidden flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"32\",\n                        height: \"32\",\n                        viewBox: \"0 0 24 24\",\n                        fill: \"#FFF\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"p-12 md:p-24\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center text-lg mb-6 md:mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"absolute ml-3\",\n                                    width: \"24\",\n                                    viewBox: \"0 0 24 24\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"email\",\n                                    value: firstName,\n                                    onChange: (e)=>setFirstName(e.target.value),\n                                    className: \"bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full\",\n                                    placeholder: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center text-lg mb-6 md:mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"absolute ml-3\",\n                                    width: \"24\",\n                                    viewBox: \"0 0 24 24\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"email\",\n                                    value: surname,\n                                    onChange: (e)=>setSurname(e.target.value),\n                                    className: \"bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full\",\n                                    placeholder: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center text-lg mb-6 md:mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"absolute ml-3\",\n                                    width: \"24\",\n                                    viewBox: \"0 0 24 24\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full\",\n                                    placeholder: \"Email Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center text-lg mb-6 md:mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"absolute ml-3\",\n                                    viewBox: \"0 0 24 24\",\n                                    width: \"24\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full\",\n                                    placeholder: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full\",\n                            children: \"Join\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fisadmin/Development/code/waggle/client/app/(auth)/join/page.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this));\n}\n_s(Join, \"5J+LdPLI5xWokq5bPjVEi07oehM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Join;\nvar _c;\n$RefreshReg$(_c, \"Join\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXQyxJQUFHO29DQUFXQyxPQUFPNUI7b0NBQVU2QixVQUFVLENBQUN6QixJQUFNSCxZQUFZRyxFQUFFMEIsT0FBT0Y7b0NBQVFkLFdBQVU7b0NBQTJEaUIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUV2TCw4REFBQ0M7NEJBQU9sQixXQUFVO3NDQUFnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUg7R0FyRXdCdEI7O1FBS0xGLHNEQUFTQTs7O0tBTEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYXV0aCkvam9pbi9wYWdlLmpzeD9mZGM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9pbih7c2V0VXNlcnN9KSB7XG4gICAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdXJuYW1lLCBzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgaGFuZGxlSm9pbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0VtYWlsIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9qb2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBqb2luZWQgc3VjY2Vzc2Z1bGx5IScsIHJlc3BvbnNlLmRhdGEpO1xuICBcbiAgICAgICAgLy8gUmVzZXQgdGhlIGZvcm1cbiAgICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgcmVzcG9uc2VcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igam9pbmluZyB1c2VyOicsIGVycm9yKTtcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBqb2luLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIGpvaW4gY29tcG9uZW50IHNyYzogaHR0cHM6Ly90YWlsd2luZGZsZXguY29tL2J1bm55L3NpbXBsZS1sb2dpbi1mb3JtXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBsZzp3LTYvMTIgbWQ6Ny8xMiB3LTgvMTIgc2hhZG93LTN4bFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiByb3VuZGVkLWZ1bGwgcC00IG1kOnAtOFwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNGRkZcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDN2MThoMjR2LTE4aC0yNHptNi42MjMgNy45MjlsLTQuNjIzIDUuNzEydi05LjQ1OGw0LjYyMyAzLjc0NnptLTQuMTQxLTUuOTI5aDE5LjAzNWwtOS41MTcgNy43MTMtOS41MTgtNy43MTN6bTUuNjk0IDcuMTg4bDMuODI0IDMuMDk5IDMuODMtMy4xMDQgNS42MTIgNi44MTdoLTE4Ljc3OWw1LjUxMy02LjgxMnptOS4yMDgtMS4yNjRsNC42MTYtMy43NDF2OS4zNDhsLTQuNjE2LTUuNjA3elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInAtMTIgbWQ6cC0yNFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBtYi02IG1kOm1iLThcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtbC0zXCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjgyMiAxOC4wOTZjLTMuNDM5LS43OTQtNi42NC0xLjQ5LTUuMDktNC40MTggNC43Mi04LjkxMiAxLjI1MS0xMy42NzgtMy43MzItMTMuNjc4LTUuMDgyIDAtOC40NjQgNC45NDktMy43MzIgMTMuNjc4IDEuNTk3IDIuOTQ1LTEuNzI1IDMuNjQxLTUuMDkgNC40MTgtMy4wNzMuNzEtMy4xODggMi4yMzYtMy4xNzggNC45MDRsLjAwNCAxaDIzLjk5bC4wMDQtLjk2OWMuMDEyLTIuNjg4LS4wOTItNC4yMjItMy4xNzYtNC45MzV6XCIvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtmaXJzdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcGwtMTIgcHktMiBtZDpweS00IGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIG1iLTYgbWQ6bWItOFwiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIG1sLTNcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuODIyIDE4LjA5NmMtMy40MzktLjc5NC02LjY0LTEuNDktNS4wOS00LjQxOCA0LjcyLTguOTEyIDEuMjUxLTEzLjY3OC0zLjczMi0xMy42NzgtNS4wODIgMC04LjQ2NCA0Ljk0OS0zLjczMiAxMy42NzggMS41OTcgMi45NDUtMS43MjUgMy42NDEtNS4wOSA0LjQxOC0zLjA3My43MS0zLjE4OCAyLjIzNi0zLjE3OCA0LjkwNGwuMDA0IDFoMjMuOTlsLjAwNC0uOTY5Yy4wMTItMi42ODgtLjA5Mi00LjIyMi0zLjE3Ni00LjkzNXpcIi8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgdmFsdWU9e3N1cm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHBsLTEyIHB5LTIgbWQ6cHktNCBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgbWItNiBtZDptYi04XCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbWwtM1wiIHdpZHRoPVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC44MjIgMTguMDk2Yy0zLjQzOS0uNzk0LTYuNjQtMS40OS01LjA5LTQuNDE4IDQuNzItOC45MTIgMS4yNTEtMTMuNjc4LTMuNzMyLTEzLjY3OC01LjA4MiAwLTguNDY0IDQuOTQ5LTMuNzMyIDEzLjY3OCAxLjU5NyAyLjk0NS0xLjcyNSAzLjY0MS01LjA5IDQuNDE4LTMuMDczLjcxLTMuMTg4IDIuMjM2LTMuMTc4IDQuOTA0bC4wMDQgMWgyMy45OWwuMDA0LS45NjljLjAxMi0yLjY4OC0uMDkyLTQuMjIyLTMuMTc2LTQuOTM1elwiLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwbC0xMiBweS0yIG1kOnB5LTQgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBtYi02IG1kOm1iLThcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtbC0zXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTE4Ljc1IDloLS43NXYtM2MwLTMuMzA5LTIuNjkxLTYtNi02cy02IDIuNjkxLTYgNnYzaC0uNzVjLTEuMjQgMC0yLjI1IDEuMDA5LTIuMjUgMi4yNXYxMC41YzAgMS4yNDEgMS4wMSAyLjI1IDIuMjUgMi4yNWgxMy41YzEuMjQgMCAyLjI1LTEuMDA5IDIuMjUtMi4yNXYtMTAuNWMwLTEuMjQxLTEuMDEtMi4yNS0yLjI1LTIuMjV6bS0xMC43NS0zYzAtMi4yMDYgMS43OTQtNCA0LTRzNCAxLjc5NCA0IDR2M2gtOHptNSAxMC43MjJ2Mi4yNzhjMCAuNTUyLS40NDcgMS0xIDFzLTEtLjQ0OC0xLTF2LTIuMjc4Yy0uNTk1LS4zNDctMS0uOTg1LTEtMS43MjIgMC0xLjEwMy44OTctMiAyLTJzMiAuODk3IDIgMmMwIC43MzctLjQwNSAxLjM3NS0xIDEuNzIyelwiLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcGwtMTIgcHktMiBtZDpweS00IGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS03MDAgdG8tZ3JheS05MDAgZm9udC1tZWRpdW0gcC0yIG1kOnAtNCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSB3LWZ1bGxcIj5Kb2luPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJKb2luIiwic2V0VXNlcnMiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJzdXJuYW1lIiwic2V0U3VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlSm9pbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEVycm9yIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/(auth)/join/page.jsx\n"));

/***/ })

});