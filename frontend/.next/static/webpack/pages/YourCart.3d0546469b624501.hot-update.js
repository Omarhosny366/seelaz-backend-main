"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/YourCart",{

/***/ "./pages/YourCart/index.js":
/*!*********************************!*\
  !*** ./pages/YourCart/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../../../../node_modules/axios/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/YourCart.module.css */ \"./styles/YourCart.module.css\");\n/* harmony import */ var _styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_footerr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footerr */ \"./pages/components/footerr.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst YourCart = ()=>{\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [downpayment, setDownpayment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/cart\").then((response)=>{\n            const data = response.data;\n            setCartItems(data.items);\n            setTotalPrice(data.totalPrice);\n            setDownpayment(data.downpayment);\n        }).catch((error)=>console.error(\"Error fetching cart data:\", error));\n    }, []);\n    const handleQuantityChange = (id, newQuantity)=>{\n        setCartItems(cartItems.map((item)=>item._id === id ? {\n                ...item,\n                quantity: newQuantity\n            } : item));\n    };\n    const handleRemoveItem = (id)=>{\n        setCartItems(cartItems.filter((cartItem)=>cartItem._id !== id));\n    };\n    const calculateTotal = ()=>{\n        return cartItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \"Your Cart\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().cartTable),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Product Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Product ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Type\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Material\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Dimensions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Quantity\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Total\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: cartItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.product_id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            item.price.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.type\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.material\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.dimensions\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.quantity\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            (item.price * item.quantity).toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveItem(item._id),\n                                            className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().removeButton),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item._id, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().totalContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Total: $\",\n                            calculateTotal().toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Downpayment: $\",\n                            downpayment.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkoutButton),\n                        children: \"Proceed to Checkout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            \"=    \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YourCart, \"+nGFNJ+JYozOQyTWU/yBAavfCSo=\");\n_c = YourCart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YourCart);\nvar _c;\n$RefreshReg$(_c, \"YourCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBCQTBCdkIsOERBQUNTO2dCQUFJQyxXQUFXaEMsbUZBQXFCOztrQ0FDbkMsOERBQUNxRDs7NEJBQUc7NEJBQVMxQixpQkFBaUJrQixPQUFPLENBQUM7Ozs7Ozs7a0NBQ3RDLDhEQUFDUzs7NEJBQUc7NEJBQWUvQyxZQUFZc0MsT0FBTyxDQUFDOzs7Ozs7O2tDQUV2Qyw4REFBQ0k7d0JBQU9qQixXQUFXaEMsbUZBQXFCO2tDQUFFOzs7Ozs7Ozs7Ozs7WUFDdEM7Ozs7Ozs7QUFHWjtHQXRGTUU7S0FBQUE7QUF3Rk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWW91ckNhcnQvaW5kZXguanM/ODQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1lvdXJDYXJ0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVycic7XHJcbmNvbnN0IFlvdXJDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Rvd25wYXltZW50LCBzZXREb3ducGF5bWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NhcnQnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgc2V0Q2FydEl0ZW1zKGRhdGEuaXRlbXMpO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoZGF0YS50b3RhbFByaWNlKTtcclxuICAgICAgICBzZXREb3ducGF5bWVudChkYXRhLmRvd25wYXltZW50KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcnQgZGF0YTonLCBlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlDaGFuZ2UgPSAoaWQsIG5ld1F1YW50aXR5KSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoXHJcbiAgICAgIGNhcnRJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgIGl0ZW0uX2lkID09PSBpZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH0gOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKGNhcnRJdGVtcy5maWx0ZXIoY2FydEl0ZW0gPT4gY2FydEl0ZW0uX2lkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIChpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSksIDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Zb3VyIENhcnQ8L2gxPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuY2FydFRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Qcm9kdWN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJvZHVjdCBJRDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgPHRoPk1hdGVyaWFsPC90aD5cclxuICAgICAgICAgICAgPHRoPkRpbWVuc2lvbnM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Y2FydEl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntpdGVtLnByb2R1Y3RfaWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnByaWNlLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2l0ZW0udHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5tYXRlcmlhbH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5kaW1lbnNpb25zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHsoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUl0ZW0oaXRlbS5faWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5Ub3RhbDogJHtjYWxjdWxhdGVUb3RhbCgpLnRvRml4ZWQoMil9PC9oMj5cclxuICAgICAgICA8aDM+RG93bnBheW1lbnQ6ICR7ZG93bnBheW1lbnQudG9GaXhlZCgyKX08L2gzPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrb3V0QnV0dG9ufT5Qcm9jZWVkIHRvIENoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG49ICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZb3VyQ2FydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIk5hdmJhciIsInN0eWxlcyIsIkZvb3RlciIsIllvdXJDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJkb3ducGF5bWVudCIsInNldERvd25wYXltZW50IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIml0ZW1zIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsImlkIiwibmV3UXVhbnRpdHkiLCJtYXAiLCJpdGVtIiwiX2lkIiwicXVhbnRpdHkiLCJoYW5kbGVSZW1vdmVJdGVtIiwiZmlsdGVyIiwiY2FydEl0ZW0iLCJjYWxjdWxhdGVUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwicHJpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwidGFibGUiLCJjYXJ0VGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwibmFtZSIsInByb2R1Y3RfaWQiLCJ0b0ZpeGVkIiwidHlwZSIsIm1hdGVyaWFsIiwiZGltZW5zaW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVCdXR0b24iLCJ0b3RhbENvbnRhaW5lciIsImgyIiwiaDMiLCJjaGVja291dEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/YourCart/index.js\n"));

/***/ })

});