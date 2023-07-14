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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PetCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PetCard */ \"(app-client)/./app/components/PetCard.jsx\");\n//this is the home page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home(param) {\n    let { setUsers } = param;\n    _s();\n    const [petData, setPetData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/external-pets\").then((res)=>res.json()).then((data)=>setPetData(data));\n    }, []);\n    if (!petData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/check-session\").then((res)=>res.json()).then((data)=>setUsers(data));\n    }, []);\n    // const pets = [\n    //   {\n    //       id: 1,\n    //       name: 'Belle',\n    //       photo: 'https://cdn.britannica.com/55/236455-050-58F1F4FD/Bichon-frise-dog.jpg?w=300',\n    //       breed: 'Bichon Frise mix',\n    //       location: 'Denver, CO',\n    //       organization: 'Weld Co Humane Society',\n    //       age: 'Adult',\n    //       gender: 'Female',\n    //       size: 'Small',\n    //       color: 'White',\n    //       house_trained: 'Yes',\n    //       vaccinations: 'Vaccinations up to date',\n    //       spayed_neutered: 'spayed / neutered',\n    //       description: 'Just the best',\n    //       coat_length: 'Medium',\n    //       adoption_fee: 'Absolutely not.'\n    //   },\n    // {\n    //     id: 2,\n    //     name: 'Louis Jadot Beaujolais',\n    //     photo: 'img.jpg',\n    //     breed: 'American Shorthair',\n    //     location: 'Denver, CO',\n    //     organization: 'Dumb Friends League',\n    //     age: 'Senior',\n    //     gender: 'Male',\n    //     size: 'Small',\n    //     color: 'Tuxedo',\n    //     house_trained: 'Yes',\n    //     vaccinations: 'Vaccinations up to date',\n    //     spayed_neutured: 'spayed / neutered',\n    //     description: 'Literally the love of my life',\n    //     coat_length: 'short',\n    //     adoption_fee: 'Don't you dare.'\n    // }\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"home\",\n            children: petData.animals.map((pet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PetCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    pet: pet\n                }, pet.id, false, {\n                    fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/fisadmin/Development/code/waggle/client/app/page.js\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"0QzGBcHsPEhlzS9kUTCo1cLJOeY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1QkFBdUI7OztBQUc0QjtBQUNSO0FBRTVCLFNBQVNJLEtBQUssS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWOztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU0sc0JBQ0hDLEtBQUtDLENBQUFBLE1BQU9BLElBQUlDLFFBQ2hCRixLQUFLRyxDQUFBQSxPQUFRTCxXQUFXSztJQUM3QixHQUFHLEVBQUU7SUFHTCxJQUFHLENBQUNOLFNBQVM7UUFDWCxxQkFBTyw4REFBQ087c0JBQUk7Ozs7OztJQUNkO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU0sc0JBQ0hDLEtBQUtDLENBQUFBLE1BQU9BLElBQUlDLFFBQ2hCRixLQUFLRyxDQUFBQSxPQUFRUCxTQUFTTztJQUMzQixHQUFHLEVBQUU7SUFFTCxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsK0ZBQStGO0lBQy9GLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0lBQ2hELHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMsK0JBQStCO0lBQy9CLHdDQUF3QztJQUN4QyxPQUFPO0lBQ0wsSUFBSTtJQUNKLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsMkNBQTJDO0lBQzNDLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QyxvREFBb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QyxJQUFJO0lBQ1IsS0FBSztJQUVILHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNWUixRQUFRUyxRQUFRQyxJQUFJQyxDQUFBQSxvQkFDbkIsOERBQUNkLDJEQUFPQTtvQkFBY2MsS0FBS0E7bUJBQWJBLElBQUlDOzs7Ozs7Ozs7OztBQUs1QjtHQXBFd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy90aGlzIGlzIHRoZSBob21lIHBhZ2Vcbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQZXRDYXJkIGZyb20gJy4vY29tcG9uZW50cy9QZXRDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7c2V0VXNlcnN9KSB7XG4gIGNvbnN0IFtwZXREYXRhLCBzZXRQZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL2FwaS9leHRlcm5hbC1wZXRzJylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRQZXREYXRhKGRhdGEpKVxuICB9LCBbXSlcblxuICBcbiAgaWYoIXBldERhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2NoZWNrLXNlc3Npb24nKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldFVzZXJzKGRhdGEpKVxuICB9LCBbXSlcblxuICAvLyBjb25zdCBwZXRzID0gW1xuICAvLyAgIHtcbiAgLy8gICAgICAgaWQ6IDEsXG4gIC8vICAgICAgIG5hbWU6ICdCZWxsZScsXG4gIC8vICAgICAgIHBob3RvOiAnaHR0cHM6Ly9jZG4uYnJpdGFubmljYS5jb20vNTUvMjM2NDU1LTA1MC01OEYxRjRGRC9CaWNob24tZnJpc2UtZG9nLmpwZz93PTMwMCcsXG4gIC8vICAgICAgIGJyZWVkOiAnQmljaG9uIEZyaXNlIG1peCcsXG4gIC8vICAgICAgIGxvY2F0aW9uOiAnRGVudmVyLCBDTycsXG4gIC8vICAgICAgIG9yZ2FuaXphdGlvbjogJ1dlbGQgQ28gSHVtYW5lIFNvY2lldHknLFxuICAvLyAgICAgICBhZ2U6ICdBZHVsdCcsXG4gIC8vICAgICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gIC8vICAgICAgIHNpemU6ICdTbWFsbCcsXG4gIC8vICAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAvLyAgICAgICBob3VzZV90cmFpbmVkOiAnWWVzJyxcbiAgLy8gICAgICAgdmFjY2luYXRpb25zOiAnVmFjY2luYXRpb25zIHVwIHRvIGRhdGUnLFxuICAvLyAgICAgICBzcGF5ZWRfbmV1dGVyZWQ6ICdzcGF5ZWQgLyBuZXV0ZXJlZCcsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiAnSnVzdCB0aGUgYmVzdCcsXG4gIC8vICAgICAgIGNvYXRfbGVuZ3RoOiAnTWVkaXVtJyxcbiAgLy8gICAgICAgYWRvcHRpb25fZmVlOiAnQWJzb2x1dGVseSBub3QuJ1xuICAvLyAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICBpZDogMixcbiAgICAvLyAgICAgbmFtZTogJ0xvdWlzIEphZG90IEJlYXVqb2xhaXMnLFxuICAgIC8vICAgICBwaG90bzogJ2ltZy5qcGcnLFxuICAgIC8vICAgICBicmVlZDogJ0FtZXJpY2FuIFNob3J0aGFpcicsXG4gICAgLy8gICAgIGxvY2F0aW9uOiAnRGVudmVyLCBDTycsXG4gICAgLy8gICAgIG9yZ2FuaXphdGlvbjogJ0R1bWIgRnJpZW5kcyBMZWFndWUnLFxuICAgIC8vICAgICBhZ2U6ICdTZW5pb3InLFxuICAgIC8vICAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICAvLyAgICAgc2l6ZTogJ1NtYWxsJyxcbiAgICAvLyAgICAgY29sb3I6ICdUdXhlZG8nLFxuICAgIC8vICAgICBob3VzZV90cmFpbmVkOiAnWWVzJyxcbiAgICAvLyAgICAgdmFjY2luYXRpb25zOiAnVmFjY2luYXRpb25zIHVwIHRvIGRhdGUnLFxuICAgIC8vICAgICBzcGF5ZWRfbmV1dHVyZWQ6ICdzcGF5ZWQgLyBuZXV0ZXJlZCcsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiAnTGl0ZXJhbGx5IHRoZSBsb3ZlIG9mIG15IGxpZmUnLFxuICAgIC8vICAgICBjb2F0X2xlbmd0aDogJ3Nob3J0JyxcbiAgICAvLyAgICAgYWRvcHRpb25fZmVlOiAnRG9uJ3QgeW91IGRhcmUuJ1xuICAgIC8vIH1cbi8vIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICB7cGV0RGF0YS5hbmltYWxzLm1hcChwZXQgPT4gKFxuICAgICAgICAgIDxQZXRDYXJkIGtleT17cGV0LmlkfSBwZXQ9e3BldH0gLz5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQZXRDYXJkIiwiSG9tZSIsInNldFVzZXJzIiwicGV0RGF0YSIsInNldFBldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hbHMiLCJtYXAiLCJwZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});