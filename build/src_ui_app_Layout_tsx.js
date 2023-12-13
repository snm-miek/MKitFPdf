"use strict";
(self["webpackChunkMkitFPdf"] = self["webpackChunkMkitFPdf"] || []).push([["src_ui_app_Layout_tsx"],{

/***/ "./src/ui/app/Layout.tsx":
/*!*******************************!*\
  !*** ./src/ui/app/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs");



const Messages = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_brotli_decompress_js-node_modules_clone_clone_js-node_modules_dfa_index_-0453c1"), __webpack_require__.e("src_ui_app_components_Menu_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Panels/Messages */ "./src/ui/app/components/Panels/Messages.tsx")));
const PanelFrame = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_brotli_decompress_js-node_modules_clone_clone_js-node_modules_dfa_index_-0453c1"), __webpack_require__.e("vendors-node_modules_chakra-ui_form-control_dist_index_js-node_modules_dnd-kit_sortable_dist_-8bfd9e"), __webpack_require__.e("src_ui_app_components_Menu_tsx"), __webpack_require__.e("src_ui_app_components_PanelFrame_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/PanelFrame */ "./src/ui/app/components/PanelFrame.tsx")));
const MainMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_brotli_decompress_js-node_modules_clone_clone_js-node_modules_dfa_index_-0453c1"), __webpack_require__.e("src_ui_app_components_Menu_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Menu */ "./src/ui/app/components/Menu.tsx")));
const Layout = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, { h: "100vh", align: "stretch", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Messages, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, { p: 1, borderBottomWidth: 1, minH: '45px', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelFrame, {})] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ "./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayToObjectNotation: () => (/* binding */ arrayToObjectNotation),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   isCustomBreakpoint: () => (/* binding */ isCustomBreakpoint),
/* harmony export */   isResponsiveObjectLike: () => (/* binding */ isResponsiveObjectLike),
/* harmony export */   mapResponsive: () => (/* binding */ mapResponsive),
/* harmony export */   objectToArrayNotation: () => (/* binding */ objectToArrayNotation)
/* harmony export */ });
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/shared-utils */ "./node_modules/@chakra-ui/shared-utils/dist/index.mjs");
// src/responsive.ts

var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if ((0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function objectToArrayNotation(obj, bps = breakpoints) {
  const result = bps.map((br) => {
    var _a;
    return (_a = obj[br]) != null ? _a : null;
  });
  const lastItem = result[result.length - 1];
  while (lastItem === null)
    result.pop();
  return result;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps = breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => bps.includes(key));
}
var isCustomBreakpoint = (v) => Number.isNaN(Number(v));




/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HStack: () => (/* binding */ HStack)
/* harmony export */ });
/* harmony import */ var _chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ZHMYA64R.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'
;

// src/stack/h-stack.tsx


var HStack = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__.Stack, { align: "center", ...props, direction: "row", ref }));
HStack.displayName = "HStack";


//# sourceMappingURL=chunk-3ASUQ6PA.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDividerStyles: () => (/* binding */ getDividerStyles)
/* harmony export */ });
/* harmony import */ var _chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/breakpoint-utils */ "./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");
'use client'

// src/stack/stack.utils.tsx
;
function getDividerStyles(options) {
  const { spacing, direction } = options;
  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": (0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__.mapResponsive)(
      direction,
      (value) => dividerStyles[value]
    )
  };
}


//# sourceMappingURL=chunk-5VJV6UNA.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spacer: () => (/* binding */ Spacer)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
'use client'

// src/spacer.tsx
;
var Spacer = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.chakra)("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";


//# sourceMappingURL=chunk-BL2ZZSHG.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VStack: () => (/* binding */ VStack)
/* harmony export */ });
/* harmony import */ var _chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ZHMYA64R.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'
;

// src/stack/v-stack.tsx


var VStack = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__.Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";


//# sourceMappingURL=chunk-NTCQBYKE.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackItem: () => (/* binding */ StackItem)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'

// src/stack/stack-item.tsx
;

var StackItem = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";


//# sourceMappingURL=chunk-ZFQCCYWD.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _chunk_ZFQCCYWD_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunk-ZFQCCYWD.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs");
/* harmony import */ var _chunk_5VJV6UNA_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-5VJV6UNA.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs");
/* harmony import */ var _chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react-children-utils */ "./node_modules/@chakra-ui/react-children-utils/dist/index.mjs");
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/shared-utils */ "./node_modules/@chakra-ui/shared-utils/dist/index.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'
;


// src/stack/stack.tsx





var Stack = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  const dividerStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (0,_chunk_5VJV6UNA_mjs__WEBPACK_IMPORTED_MODULE_3__.getDividerStyles)({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const validChildren = (0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_4__.getValidChildren)(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_ZFQCCYWD_mjs__WEBPACK_IMPORTED_MODULE_5__.StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-stack", className);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      flexWrap: wrap,
      gap: hasDivider ? void 0 : spacing,
      className: _className,
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";


//# sourceMappingURL=chunk-ZHMYA64R.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@chakra-ui/react-children-utils/dist/index.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidChildren: () => (/* binding */ getValidChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// src/index.ts

function getValidChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(
    (child) => (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)
  );
}



/***/ })

}]);
//# sourceMappingURL=src_ui_app_Layout_tsx.js.map