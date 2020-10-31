webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ivbrajkovic_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ivbrajkovic/react-hooks */ "./node_modules/@ivbrajkovic/react-hooks/index.js");
/* harmony import */ var _ivbrajkovic_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ivbrajkovic_react_hooks__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\Ivan\\Desktop\\React tutorials\\bit\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var index = function index() {
  _s();

  var _useFetchJsonAbort = Object(_ivbrajkovic_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useFetchJsonAbort"])("http://localhost:4000/todos1/1"),
      _useFetchJsonAbort2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useFetchJsonAbort, 2),
      _useFetchJsonAbort2$ = _useFetchJsonAbort2[0],
      data = _useFetchJsonAbort2$.data,
      error = _useFetchJsonAbort2$.error,
      loading = _useFetchJsonAbort2$.loading,
      abort = _useFetchJsonAbort2[1];

  console.log("index -> data", data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 19
    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: ["Error: ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, _this), data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: ["Title: ", data.title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }, _this)]
  }, void 0, true);
};

_s(index, "huFUvDszWzrP76J2iGI14tYdCKY=", false, function () {
  return [_ivbrajkovic_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useFetchJsonAbort"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VGZXRjaEpzb25BYm9ydCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJhYm9ydCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwyQkFDd0JDLGtGQUFpQixDQUN6RCxnQ0FEeUQsQ0FEekM7QUFBQTtBQUFBO0FBQUEsTUFDVEMsSUFEUyx3QkFDVEEsSUFEUztBQUFBLE1BQ0hDLEtBREcsd0JBQ0hBLEtBREc7QUFBQSxNQUNJQyxPQURKLHdCQUNJQSxPQURKO0FBQUEsTUFDZUMsS0FEZjs7QUFJbEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJMLElBQTdCO0FBQ0Esc0JBQ0U7QUFBQSxlQUNHRSxPQUFPLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGQsRUFFR0QsS0FBSyxpQkFBSTtBQUFBLDRCQUFhQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZaLEVBR0dELElBQUksaUJBQUk7QUFBQSw0QkFBYUEsSUFBSSxDQUFDTSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIWDtBQUFBLGtCQURGO0FBT0QsQ0FaRDs7R0FBTVIsSztVQUNzQ0MsMEU7OztBQWE3QkQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWRkYjc5MGFjNDRiMDk0ZWFhMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hKc29uQWJvcnQgfSBmcm9tIFwiQGl2YnJhamtvdmljL3JlYWN0LWhvb2tzXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9LCBhYm9ydF0gPSB1c2VGZXRjaEpzb25BYm9ydChcclxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3RvZG9zMS8xXCJcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFwiaW5kZXggLT4gZGF0YVwiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgJiYgPGRpdj5sb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7ZXJyb3IgJiYgPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2Pn1cclxuICAgICAge2RhdGEgJiYgPGRpdj5UaXRsZToge2RhdGEudGl0bGV9PC9kaXY+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9