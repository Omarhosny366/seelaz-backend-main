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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../../../../node_modules/axios/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/YourCart.module.css */ \"./styles/YourCart.module.css\");\n/* harmony import */ var _styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst YourCart = ()=>{\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [downpayment, setDownpayment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/cart\").then((response)=>{\n            const data = response.data;\n            setCartItems(data.items);\n            setTotalPrice(data.totalPrice);\n            setDownpayment(data.downpayment);\n        }).catch((error)=>console.error(\"Error fetching cart data:\", error));\n    }, []);\n    const handleQuantityChange = (id, newQuantity)=>{\n        setCartItems(cartItems.map((item1)=>item1._id === id ? {\n                ...item1,\n                quantity: newQuantity\n            } : item1));\n    };\n    const handleRemoveItem = async (productId)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"delete\"](\"http://localhost:3001/cart/item/\".concat(item._));\n            if (response.status >= 200 && response.status < 300) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Product deleted successfully\");\n                setCustomizedProducts(customizedProducts.filter((product)=>product._id !== productId));\n                window.location.reload();\n            }\n        } catch (error) {\n            console.error(\"Error deleting product:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to delete product\");\n        }\n    };\n    const calculateTotal = ()=>{\n        return cartItems.reduce((total, item1)=>total + item1.price * item1.quantity, 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                children: \"Your Cart\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().cartTable),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Product Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Product ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Type\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Material\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Dimensions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Quantity\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Total\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: cartItems.map((item1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.product_id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            item1.price.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.type\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.material\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.dimensions\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item1.quantity\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            (item1.price * item1.quantity).toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveItem(item1._id),\n                                            className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().removeButton),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item1._id, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().totalContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Total: $\",\n                            calculateTotal().toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Downpayment: $\",\n                            downpayment.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_YourCart_module_css__WEBPACK_IMPORTED_MODULE_6___default().checkoutButton),\n                        children: \"Proceed to Checkout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            \"=    \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo L340\\\\Desktop\\\\seelaz-backend-main-main\\\\seelaz-backend-main\\\\frontend\\\\pages\\\\YourCart\\\\index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YourCart, \"+nGFNJ+JYozOQyTWU/yBAavfCSo=\");\n_c = YourCart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YourCart);\nvar _c;\n$RefreshReg$(_c, \"YourCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLb0MsUUFBUTs7Ozs7O2tEQUNsQiw4REFBQ0w7a0RBQUkvQixNQUFLcUMsVUFBVTs7Ozs7O2tEQUNwQiw4REFBQ047a0RBRUkvQixNQUFLRSxRQUFROzs7Ozs7a0RBSWxCLDhEQUFDNkI7OzRDQUFHOzRDQUFHL0IsQ0FBQUEsTUFBS21CLEtBQUssR0FBR25CLE1BQUtFLFFBQVEsRUFBRWdDLE9BQU8sQ0FBQzs7Ozs7OztrREFDM0MsOERBQUNIO2tEQUNDLDRFQUFDTzs0Q0FDQ0MsU0FBUyxJQUFNcEMsaUJBQWlCSCxNQUFLQyxHQUFHOzRDQUN4Q29CLFdBQVczQyxpRkFBbUI7c0RBQy9COzs7Ozs7Ozs7Ozs7K0JBbEJJc0IsTUFBS0MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OzswQkEwQnZCLDhEQUFDbUI7Z0JBQUlDLFdBQVczQyxtRkFBcUI7O2tDQUNuQyw4REFBQ2dFOzs0QkFBRzs0QkFBUzFCLGlCQUFpQmtCLE9BQU8sQ0FBQzs7Ozs7OztrQ0FDdEMsOERBQUNTOzs0QkFBRzs0QkFBZXpELFlBQVlnRCxPQUFPLENBQUM7Ozs7Ozs7a0NBRXZDLDhEQUFDSTt3QkFBT2pCLFdBQVczQyxtRkFBcUI7a0NBQUU7Ozs7Ozs7Ozs7OztZQUN0Qzs7Ozs7OztBQUdaO0dBaEdNRztLQUFBQTtBQWtHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Zb3VyQ2FydC9pbmRleC5qcz84NDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvWW91ckNhcnQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuY29uc3QgWW91ckNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZG93bnBheW1lbnQsIHNldERvd25wYXltZW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvY2FydCcpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBzZXRDYXJ0SXRlbXMoZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZShkYXRhLnRvdGFsUHJpY2UpO1xyXG4gICAgICAgIHNldERvd25wYXltZW50KGRhdGEuZG93bnBheW1lbnQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FydCBkYXRhOicsIGVycm9yKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVRdWFudGl0eUNoYW5nZSA9IChpZCwgbmV3UXVhbnRpdHkpID0+IHtcclxuICAgIHNldENhcnRJdGVtcyhcclxuICAgICAgY2FydEl0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgaXRlbS5faWQgPT09IGlkID8geyAuLi5pdGVtLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfSA6IGl0ZW1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL2NhcnQvaXRlbS8ke2l0ZW0uX31gKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvZHVjdCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIHNldEN1c3RvbWl6ZWRQcm9kdWN0cyhjdXN0b21pemVkUHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5faWQgIT09IHByb2R1Y3RJZCkpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2R1Y3QnKTtcclxuICAgIH1cclxuICB9O1xyXG4gXHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIChpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSksIDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Zb3VyIENhcnQ8L2gxPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuY2FydFRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Qcm9kdWN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJvZHVjdCBJRDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgPHRoPk1hdGVyaWFsPC90aD5cclxuICAgICAgICAgICAgPHRoPkRpbWVuc2lvbnM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Y2FydEl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntpdGVtLnByb2R1Y3RfaWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnByaWNlLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2l0ZW0udHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5tYXRlcmlhbH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57aXRlbS5kaW1lbnNpb25zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+JHsoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUl0ZW0oaXRlbS5faWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5Ub3RhbDogJHtjYWxjdWxhdGVUb3RhbCgpLnRvRml4ZWQoMil9PC9oMj5cclxuICAgICAgICA8aDM+RG93bnBheW1lbnQ6ICR7ZG93bnBheW1lbnQudG9GaXhlZCgyKX08L2gzPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrb3V0QnV0dG9ufT5Qcm9jZWVkIHRvIENoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG49ICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZb3VyQ2FydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIk5hdmJhciIsInN0eWxlcyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJZb3VyQ2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwiZG93bnBheW1lbnQiLCJzZXREb3ducGF5bWVudCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpdGVtcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UiLCJpZCIsIm5ld1F1YW50aXR5IiwibWFwIiwiaXRlbSIsIl9pZCIsInF1YW50aXR5IiwiaGFuZGxlUmVtb3ZlSXRlbSIsInByb2R1Y3RJZCIsImRlbGV0ZSIsIl8iLCJzdGF0dXMiLCJzdWNjZXNzIiwic2V0Q3VzdG9taXplZFByb2R1Y3RzIiwiY3VzdG9taXplZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2FsY3VsYXRlVG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsInByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsInRhYmxlIiwiY2FydFRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCIsIm5hbWUiLCJwcm9kdWN0X2lkIiwidG9GaXhlZCIsInR5cGUiLCJtYXRlcmlhbCIsImRpbWVuc2lvbnMiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlQnV0dG9uIiwidG90YWxDb250YWluZXIiLCJoMiIsImgzIiwiY2hlY2tvdXRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/YourCart/index.js\n"));

/***/ })

});