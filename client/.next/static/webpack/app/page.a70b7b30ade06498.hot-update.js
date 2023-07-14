"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PetCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PetCard */ \"(app-client)/./app/components/PetCard.jsx\");\n//this is the home page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let { setUsers } = param;\n    _s();\n    const [petData, setPetData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/external-pets\").then((res)=>res.json()).then((data)=>setPetData(data));\n    }, []);\n    if (!petData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/check-session\");\n    });\n    // const pets = [\n    //   {\n    //       id: 1,\n    //       name: 'Belle',\n    //       photo: 'https://cdn.britannica.com/55/236455-050-58F1F4FD/Bichon-frise-dog.jpg?w=300',\n    //       breed: 'Bichon Frise mix',\n    //       location: 'Denver, CO',\n    //       organization: 'Weld Co Humane Society',\n    //       age: 'Adult',\n    //       gender: 'Female',\n    //       size: 'Small',\n    //       color: 'White',\n    //       house_trained: 'Yes',\n    //       vaccinations: 'Vaccinations up to date',\n    //       spayed_neutered: 'spayed / neutered',\n    //       description: 'Just the best',\n    //       coat_length: 'Medium',\n    //       adoption_fee: 'Absolutely not.'\n    //   },\n    // {\n    //     id: 2,\n    //     name: 'Louis Jadot Beaujolais',\n    //     photo: 'img.jpg',\n    //     breed: 'American Shorthair',\n    //     location: 'Denver, CO',\n    //     organization: 'Dumb Friends League',\n    //     age: 'Senior',\n    //     gender: 'Male',\n    //     size: 'Small',\n    //     color: 'Tuxedo',\n    //     house_trained: 'Yes',\n    //     vaccinations: 'Vaccinations up to date',\n    //     spayed_neutured: 'spayed / neutered',\n    //     description: 'Literally the love of my life',\n    //     coat_length: 'short',\n    //     adoption_fee: 'Don't you dare.'\n    // }\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"home\",\n            children: petData.animals.map((pet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PetCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    pet: pet\n                }, pet.id, false, {\n                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n            lineNumber: 69,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"0QzGBcHsPEhlzS9kUTCo1cLJOeY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1QkFBdUI7OztBQUc0QjtBQUNSO0FBRTVCLFNBQVNJLEtBQUssS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWOztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU0sc0JBQ0hDLEtBQUtDLENBQUFBLE1BQU9BLElBQUlDLFFBQ2hCRixLQUFLRyxDQUFBQSxPQUFRTCxXQUFXSztJQUM3QixHQUFHLEVBQUU7SUFHTCxJQUFHLENBQUNOLFNBQVM7UUFDWCxxQkFBTyw4REFBQ087c0JBQUk7Ozs7OztJQUNkO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU07SUFFUjtJQUlBLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwrRkFBK0Y7SUFDL0YsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxnREFBZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixpREFBaUQ7SUFDakQsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0Isd0NBQXdDO0lBQ3hDLE9BQU87SUFDTCxJQUFJO0lBQ0osYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QiwyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLG9EQUFvRDtJQUNwRCw0QkFBNEI7SUFDNUIsc0NBQXNDO0lBQ3RDLElBQUk7SUFDUixLQUFLO0lBRUgscUJBQ0U7a0JBQ0EsNEVBQUNLO1lBQUlDLFdBQVU7c0JBQ1ZSLFFBQVFTLFFBQVFDLElBQUlDLENBQUFBLG9CQUNuQiw4REFBQ2QsMkRBQU9BO29CQUFjYyxLQUFLQTttQkFBYkEsSUFBSUM7Ozs7Ozs7Ozs7O0FBSzVCO0dBckV3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgaXMgdGhlIGhvbWUgcGFnZVxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBldENhcmQgZnJvbSAnLi9jb21wb25lbnRzL1BldENhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtzZXRVc2Vyc30pIHtcbiAgY29uc3QgW3BldERhdGEsIHNldFBldERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2V4dGVybmFsLXBldHMnKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldFBldERhdGEoZGF0YSkpXG4gIH0sIFtdKVxuXG4gIFxuICBpZighcGV0RGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvY2hlY2stc2Vzc2lvbicpXG4gICAgXG4gIH0pXG5cblxuXG4gIC8vIGNvbnN0IHBldHMgPSBbXG4gIC8vICAge1xuICAvLyAgICAgICBpZDogMSxcbiAgLy8gICAgICAgbmFtZTogJ0JlbGxlJyxcbiAgLy8gICAgICAgcGhvdG86ICdodHRwczovL2Nkbi5icml0YW5uaWNhLmNvbS81NS8yMzY0NTUtMDUwLTU4RjFGNEZEL0JpY2hvbi1mcmlzZS1kb2cuanBnP3c9MzAwJyxcbiAgLy8gICAgICAgYnJlZWQ6ICdCaWNob24gRnJpc2UgbWl4JyxcbiAgLy8gICAgICAgbG9jYXRpb246ICdEZW52ZXIsIENPJyxcbiAgLy8gICAgICAgb3JnYW5pemF0aW9uOiAnV2VsZCBDbyBIdW1hbmUgU29jaWV0eScsXG4gIC8vICAgICAgIGFnZTogJ0FkdWx0JyxcbiAgLy8gICAgICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgLy8gICAgICAgc2l6ZTogJ1NtYWxsJyxcbiAgLy8gICAgICAgY29sb3I6ICdXaGl0ZScsXG4gIC8vICAgICAgIGhvdXNlX3RyYWluZWQ6ICdZZXMnLFxuICAvLyAgICAgICB2YWNjaW5hdGlvbnM6ICdWYWNjaW5hdGlvbnMgdXAgdG8gZGF0ZScsXG4gIC8vICAgICAgIHNwYXllZF9uZXV0ZXJlZDogJ3NwYXllZCAvIG5ldXRlcmVkJyxcbiAgLy8gICAgICAgZGVzY3JpcHRpb246ICdKdXN0IHRoZSBiZXN0JyxcbiAgLy8gICAgICAgY29hdF9sZW5ndGg6ICdNZWRpdW0nLFxuICAvLyAgICAgICBhZG9wdGlvbl9mZWU6ICdBYnNvbHV0ZWx5IG5vdC4nXG4gIC8vICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIGlkOiAyLFxuICAgIC8vICAgICBuYW1lOiAnTG91aXMgSmFkb3QgQmVhdWpvbGFpcycsXG4gICAgLy8gICAgIHBob3RvOiAnaW1nLmpwZycsXG4gICAgLy8gICAgIGJyZWVkOiAnQW1lcmljYW4gU2hvcnRoYWlyJyxcbiAgICAvLyAgICAgbG9jYXRpb246ICdEZW52ZXIsIENPJyxcbiAgICAvLyAgICAgb3JnYW5pemF0aW9uOiAnRHVtYiBGcmllbmRzIExlYWd1ZScsXG4gICAgLy8gICAgIGFnZTogJ1NlbmlvcicsXG4gICAgLy8gICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIC8vICAgICBzaXplOiAnU21hbGwnLFxuICAgIC8vICAgICBjb2xvcjogJ1R1eGVkbycsXG4gICAgLy8gICAgIGhvdXNlX3RyYWluZWQ6ICdZZXMnLFxuICAgIC8vICAgICB2YWNjaW5hdGlvbnM6ICdWYWNjaW5hdGlvbnMgdXAgdG8gZGF0ZScsXG4gICAgLy8gICAgIHNwYXllZF9uZXV0dXJlZDogJ3NwYXllZCAvIG5ldXRlcmVkJyxcbiAgICAvLyAgICAgZGVzY3JpcHRpb246ICdMaXRlcmFsbHkgdGhlIGxvdmUgb2YgbXkgbGlmZScsXG4gICAgLy8gICAgIGNvYXRfbGVuZ3RoOiAnc2hvcnQnLFxuICAgIC8vICAgICBhZG9wdGlvbl9mZWU6ICdEb24ndCB5b3UgZGFyZS4nXG4gICAgLy8gfVxuLy8gXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIHtwZXREYXRhLmFuaW1hbHMubWFwKHBldCA9PiAoXG4gICAgICAgICAgPFBldENhcmQga2V5PXtwZXQuaWR9IHBldD17cGV0fSAvPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBldENhcmQiLCJIb21lIiwic2V0VXNlcnMiLCJwZXREYXRhIiwic2V0UGV0RGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiYW5pbWFscyIsIm1hcCIsInBldCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});