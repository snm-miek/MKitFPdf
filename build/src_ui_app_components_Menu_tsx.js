"use strict";
(self["webpackChunkMkitFPdf"] = self["webpackChunkMkitFPdf"] || []).push([["src_ui_app_components_Menu_tsx"],{

/***/ "./src/modules/fontkit/src/opentype/shapers/data.trie":
/*!************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/data.trie ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7a878afeddfc9abc68ccc379a6d1cffb.trie");

/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/indic.trie":
/*!*************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/indic.trie ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "01c79423bc1e40fbb2bf6afa8035e4cb.trie");

/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/use.trie":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/use.trie ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "98bff5d2cef92c929a872c5c80a62889.trie");

/***/ }),

/***/ "./src/ui/app/common.ts":
/*!******************************!*\
  !*** ./src/ui/app/common.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralMsgTyps: () => (/* binding */ GeneralMsgTyps)
/* harmony export */ });
/* export type FigmaCepMessage= {
    title: string,
    message: string
};
 */
var GeneralMsgTyps;
(function (GeneralMsgTyps) {
    GeneralMsgTyps["error"] = "error";
    GeneralMsgTyps["warning"] = "warning";
    GeneralMsgTyps["exception"] = "error";
    GeneralMsgTyps["info"] = "info";
    GeneralMsgTyps["log"] = "log";
    GeneralMsgTyps["debug"] = "debug";
})(GeneralMsgTyps || (GeneralMsgTyps = {}));


/***/ }),

/***/ "./src/ui/app/components/Menu.tsx":
/*!****************************************!*\
  !*** ./src/ui/app/components/Menu.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorScheme: () => (/* binding */ colorScheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _stores_menuStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/menuStore */ "./src/ui/stores/menuStore.tsx");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var ui_app_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/app/common */ "./src/ui/app/common.ts");
/* harmony import */ var _Panels_Fonts_FontPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Panels/Fonts/FontPanel */ "./src/ui/app/components/Panels/Fonts/FontPanel.tsx");
/* harmony import */ var _Panels_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Panels/Messages */ "./src/ui/app/components/Panels/Messages.tsx");



//import { FiBookOpen,FiPrinter, FiSettings } from "react-icons/fi";

//import { Config } from "./Panels/Config";
//import { Print } from "./Panels/Print";

//import { PdfBuilder } from "./PdfBuilder";



function colorScheme(typ) {
    switch (typ) {
        case 'error':
            return 'red';
        case 'info':
            return 'green';
        case ui_app_common__WEBPACK_IMPORTED_MODULE_3__.GeneralMsgTyps.warning:
            return 'blue';
    }
    return '';
}
const MainMenu = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { menuIdent, setMenu } = (0,_stores_menuStore__WEBPACK_IMPORTED_MODULE_2__.useMenuStore)();
    const { toggleColorMode } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorMode)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, { spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: menuIdent === 'Print' ? 'outline' : 'ghost', onClick: () => setMenu('Print'), children: '' + t('Print') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Panels_Fonts_FontPanel__WEBPACK_IMPORTED_MODULE_4__.FontMenu, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Panels_Messages__WEBPACK_IMPORTED_MODULE_5__.MessageMenu, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: menuIdent === 'Config' ? 'outline' : 'ghost', onClick: () => setMenu('Config'), children: '' + t('Config') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: menuIdent === 'Tools' ? 'outline' : 'ghost', onClick: () => setMenu('Tools'), children: '' + t('Tools') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: menuIdent === 'Help' ? 'outline' : 'ghost', onClick: () => setMenu('Help'), children: '' + t('Help') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, { variant: 'ghost', "aria-label": 'Mode Change', icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsMoon, { size: '1rem' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsSun, { size: '1rem' })), onClick: toggleColorMode })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);


/***/ }),

/***/ "./src/ui/app/components/Panels/ByCoffe.tsx":
/*!**************************************************!*\
  !*** ./src/ui/app/components/Panels/ByCoffe.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByCoffee: () => (/* binding */ ByCoffee)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs");


const payPalLink = 'https://www.paypal.com/donate/?hosted_button_id=7FFVZSXACREG2';
const ByCoffee = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { as: 'svg', width: '16', height: '16', viewBox: '0 0 24 24', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { transform: 'translate(24 0) scale(-1 1)', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask", { id: 'lineMdBuyMeACoffeeTwotone0', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: '#fff', d: 'M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask", { id: 'lineMdBuyMeACoffeeTwotone1', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: '#fff', d: 'M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeDasharray: '32', strokeDashoffset: '32', d: 'M7.5 10.5C7.5 10.5 8.33 17.43 8.5 19C8.67 20.57 10 21 11 21L13 21C14.5 21 15.875 19.86 16 19C16.125 18.14 17 7 17 7', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", { fill: 'freeze', attributeName: 'stroke-dashoffset', dur: '0.4s', values: '32;0' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeDasharray: '12', strokeDashoffset: '12', d: 'M16.5 6C16.5 3.5 14 3 12 3C10 3 9.1 3.43 8 4', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", { fill: 'freeze', attributeName: 'stroke-dashoffset', begin: '0.8s', dur: '0.2s', values: '12;24' }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: '16', height: '5', x: '20', y: '4', fill: 'currentColor', mask: 'url(#lineMdBuyMeACoffeeTwotone0)', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", { fill: 'freeze', attributeName: 'x', begin: '0.4s', dur: '0.4s', values: '20;4' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: '8', height: '10', x: '8', y: '20', fill: '#009788', fillOpacity: 0.9, mask: 'url(#lineMdBuyMeACoffeeTwotone1)', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", { fill: 'freeze', attributeName: 'y', begin: '1s', dur: '0.4s', values: '20;10' }) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { children: ["If our plugin helps you with your work, we would be happy to receive your support. Thank you.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, { as: 'a', href: payPalLink, target: '_blank', variant: 'outline', children: "Buy Me a Coffee" })] })] }) }));
};


/***/ }),

/***/ "./src/ui/app/components/Panels/Fonts/FontPanel.tsx":
/*!**********************************************************!*\
  !*** ./src/ui/app/components/Panels/Fonts/FontPanel.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontMenu: () => (/* binding */ FontMenu),
/* harmony export */   FontPanel: () => (/* binding */ FontPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-KTD65HY5.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs");
/* harmony import */ var ui_app_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/app/common */ "./src/ui/app/common.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_stores_globalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/stores/globalStore */ "./src/ui/stores/globalStore.tsx");
/* harmony import */ var ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/stores/localFonts */ "./src/ui/stores/localFonts.ts");
/* harmony import */ var ui_stores_menuStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/stores/menuStore */ "./src/ui/stores/menuStore.tsx");
/* harmony import */ var ui_umami__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/umami */ "./src/ui/umami/index.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Menu */ "./src/ui/app/components/Menu.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



//import { BottomToolbar } from "../../Toolbar";






//import { useHostMultiPeerSession } from './FontManager';
const FontMenu = () => {
    const { menuIdent, setMenu } = (0,ui_stores_menuStore__WEBPACK_IMPORTED_MODULE_5__.useMenuStore)();
    const { globalData, setGlobalData } = (0,ui_stores_globalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalPersistStore)();
    const hasErros = ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.hasError(globalData); //globalData.fonts.find((elm) => !elm.state);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: menuIdent === "Fonts" ? "outline" : "ghost", onClick: () => setMenu("Fonts"), color: hasErros ? (0,_Menu__WEBPACK_IMPORTED_MODULE_7__.colorScheme)(ui_app_common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.error) : "inherit", children: "Fonts" }));
};
const StyleItem = ({ fontInfo }) => {
    const styleInfo = fontInfo.styles.map((style) => style.style);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { fontSize: "md", children: fontInfo.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.HStack, { ml: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: styleInfo.join(", ") }) })] }));
};
const FontItem = ({ fontInfo }) => {
    const famInfo = [];
    for (const key in fontInfo.fonts) {
        const info = fontInfo.fonts[key];
        if (info.namedVariations && Object.keys(info.namedVariations).length > 0) {
            famInfo.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: Object.keys(info.namedVariations).join(", ") }, key));
        }
        else {
            famInfo.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: [info.postscriptName, ", ", info.style] }, key));
        }
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { fontSize: "md", children: fontInfo.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { ml: 3, children: famInfo })] }));
};
const blobToBuffer = (blob) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsArrayBuffer(blob);
    });
};
const FontPanel = () => {
    const fileUploadRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { globalData, setGlobalData } = (0,ui_stores_globalStore__WEBPACK_IMPORTED_MODULE_3__.useGlobalPersistStore)();
    const styles = ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.getSortedStyles(globalData);
    const fonts = ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.getSortedFonts(globalData);
    const onChange = (ev) => __awaiter(void 0, void 0, void 0, function* () {
        if (ev.target && ev.target.files.length > 0) {
            const files = [...ev.target.files];
            for (const file of files) {
                const buffer = yield blobToBuffer(file);
                if (buffer && buffer instanceof ArrayBuffer) {
                    yield ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.addFontBuffer(globalData.localFonts.files, buffer);
                }
            }
            (0,ui_umami__WEBPACK_IMPORTED_MODULE_6__.umami)().track("Add Fonts", {});
        }
        ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.updateAllStates(globalData);
        setGlobalData(Object.assign({}, globalData));
    });
    const removeAll = () => {
        setGlobalData(Object.assign(Object.assign({}, globalData), { localFonts: {
                styles: {},
                files: {},
            } }));
    };
    const updateState = () => {
        ui_stores_localFonts__WEBPACK_IMPORTED_MODULE_4__.LocalFontStore.updateAllStates(globalData);
        setGlobalData(Object.assign({}, globalData));
        (0,ui_umami__WEBPACK_IMPORTED_MODULE_6__.umami)().track("Update State", {});
    };
    const fontItems = [];
    for (const key in fonts) {
        fontItems.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FontItem, { fontInfo: fonts[key] }, key));
    }
    fontItems.sort((a, b) => ("" + a.key).localeCompare("" + b.key, undefined, {
        numeric: true,
        sensitivity: "base",
    }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.VStack, { w: "100%", h: "100%", align: "stretch", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { px: 4, pt: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { maxW: "800px", w: "100%", m: "auto", children: "Unfortunately, it is not possible to access your local fonts within a plugin." }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { px: 4, pt: 4, maxW: "800px", w: "100%", m: "auto", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Checkbox, { isChecked: globalData.useFontManager, onChange: (e) => setGlobalData(Object.assign(Object.assign({}, globalData), { useFontManager: e.target.checked })), children: "Use custom font manager.(New)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { pl: 7, children: ["A new browser window will open (Chrome only).", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "The first time you open it, please allow this app to use your local fonts by clicking on the \u201CClick to allow\u201D button."] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { px: 4, pt: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { maxW: "800px", w: "100%", m: "auto", children: "Or, here you can upload your local font files. TTF and OTF fonts are allowed, also as variable font." }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { overflow: "auto", flex: 1, px: 4, children: [styles.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, { size: "xs", fontSize: "sm", maxW: "800px", w: "100%", m: "auto", borderBottomWidth: 1, children: "The following font styles could not be found." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.VStack, { px: 3, align: "stretch", maxW: "800px", w: "100%", m: "auto", divider: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.StackDivider, { borderColor: "gray.200" }), children: styles.map((style, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyleItem, { fontInfo: style }, index))) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, { size: "xs", fontSize: "sm", maxW: "800px", w: "100%", m: "auto", mt: 2, mb: 2, borderBottomWidth: 1, children: "Currently loaded fonts." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.VStack, { px: 3, align: "stretch", maxW: "800px", w: "100%", m: "auto", divider: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.StackDivider, { borderColor: "gray.200" }), children: [fontItems.length > 0 && fontItems, !fontItems.length && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { children: "no custom fonts loaded." })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, { maxW: "800px", w: "100%", m: "auto", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.HStack, { p: 1, borderTopWidth: 1, minH: "45px", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Input, { ref: fileUploadRef, type: "file", accept: ".ttf,.otf", multiple: true, value: "", placeholder: "url to ttf/otf font", onChange: (env) => onChange(env), hidden: true }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { onClick: () => {
                                var _a;
                                (_a = fileUploadRef.current) === null || _a === void 0 ? void 0 : _a.click();
                            }, variant: "outline", children: "Add Font" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Spacer, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { onClick: updateState, variant: "outline", children: "Update State" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { onClick: removeAll, variant: "outline", children: "Remove all" })] }) })] }));
};


/***/ }),

/***/ "./src/ui/app/components/Panels/Messages.tsx":
/*!***************************************************!*\
  !*** ./src/ui/app/components/Panels/Messages.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageDlg: () => (/* binding */ MessageDlg),
/* harmony export */   MessageMenu: () => (/* binding */ MessageMenu),
/* harmony export */   NewsDlg: () => (/* binding */ NewsDlg),
/* harmony export */   ProgressDlg: () => (/* binding */ ProgressDlg),
/* harmony export */   WaitDlg: () => (/* binding */ WaitDlg),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-Z6RXEUPO.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-4FCEGNGT.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs");
/* harmony import */ var ui_app_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/app/common */ "./src/ui/app/common.ts");
/* harmony import */ var ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/stores/messageStore */ "./src/ui/stores/messageStore.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-EL2VKIZQ.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/progress/dist/chunk-BZDCPGYF.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ui_stores_globalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/stores/globalStore */ "./src/ui/stores/globalStore.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./src/ui/app/components/Menu.tsx");
/* harmony import */ var _ByCoffe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ByCoffe */ "./src/ui/app/components/Panels/ByCoffe.tsx");




//import { BottomToolbar } from "../../Toolbar";





const OverlayOne = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalOverlay, { bg: "blackAlpha.300", backdropFilter: "blur(10px) hue-rotate(90deg)" }));
const MessageMenu = () => {
    const { messages, clear, showMessages, showMessagePanel } = (0,ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_2__.useMessageStore)();
    if (!messages.length)
        return null;
    const hasErros = messages.find((elm) => elm.type == ui_app_common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.error);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { p: 2, variant: "ghost", onClick: () => showMessagePanel(true), color: hasErros && (0,_Menu__WEBPACK_IMPORTED_MODULE_5__.colorScheme)(ui_app_common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.error), children: "Messages" }));
};
const MessageLine = ({ msg }) => {
    let mm = "" + msg.message;
    if (typeof msg.message == "object" && msg.message instanceof Error) {
        const e = msg.message;
        mm = e.message;
        mm += "<br/>" + e.stack;
        mm = mm.replace("\n", "<br/>");
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.HStack, { alignItems: "top", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, { w: "70px", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Badge, { variant: "solid", colorScheme: (0,_Menu__WEBPACK_IMPORTED_MODULE_5__.colorScheme)(msg.type), children: [msg.type, " ", msg.count && "(" + msg.count + ")"] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box /* w="150px" */, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, { fontWeight: "bold", children: [" ", msg.title] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, { dangerouslySetInnerHTML: { __html: mm } })] })] }));
};
/* const MessagePanel = ({ headline = "", showToolbar = true }: { headline?: string; showToolbar?: boolean }) => {
  const { messages, clear, progress } = useMessageStore();
  const { t } = useTranslation();
  return (
    <VStack h="100%" align="stretch" spacing={0}>
      <HStack p={2} borderWidth={0}>
        <Box>{headline}</Box>
      </HStack>
      <VStack align="stretch" overflowY={"auto"} p={2} flex={1} divider={<StackDivider borderColor="gray.200" />}>
        {messages.map((msg, index) => (
          <MessageLine key={index} msg={msg} />
        ))}
      </VStack>
      {showToolbar && (
        <Box>
          <Spacer />
          <IconButton
            variant="ghost"
            aria-label="delete"
            title={"" + t("Remove messages")}
            disabled={messages.length ? false : true}
            icon={<FiTrash2 size="1rem" />}
            onClick={() => {
              clear();
            }}
          />
          <Box w={2}></Box>
        </Box>
      )}
    </VStack>
  );
}; */
const MessageDlg = () => {
    const { messages, clear, showMessages, showMessagePanel } = (0,ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_2__.useMessageStore)();
    const [overlay, setOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverlayOne, {}));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Modal, { isCentered: true, isOpen: showMessages, onClose: () => {
            showMessagePanel(false);
        }, children: [overlay, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.ModalContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.ModalHeader, { children: "Messages" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.ModalCloseButton, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.ModalBody, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, { maxH: "10rem", overflow: "auto", children: [messages.map((msg, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MessageLine, { msg: msg }, index))), !messages.length && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MessageLine, { msg: {
                                        type: ui_app_common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.info,
                                        title: "",
                                        message: "Currently, there are no messages available.",
                                    } }))] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.ModalFooter, { children: messages.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "ghost", "aria-label": "delete", title: "Remove messages", onClick: () => {
                                clear();
                            }, children: "Remove messages" })) })] })] }));
};
const WaitDlg = ({ title = "", message, }) => {
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.useDisclosure)();
    const [overlay, setOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverlayOne, {}));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const timer = setTimeout(() => {
            onOpen();
        }, 800);
        return () => clearTimeout(timer);
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Modal, { isCentered: true, isOpen: isOpen, onClose: () => { }, children: [overlay, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.ModalContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.ModalHeader, { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.ModalBody, { children: message }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.ModalFooter, {})] })] }));
};
const NewsDlg = () => {
    const SVersion = ("" + "v1.13").substring(1);
    const version = parseFloat(("" + "v1.13").substring(1));
    const { globalData, setGlobalData } = (0,ui_stores_globalStore__WEBPACK_IMPORTED_MODULE_4__.useGlobalPersistStore)();
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.useDisclosure)();
    const [overlay, setOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverlayOne, {}));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (globalData.newsInfo <= version) {
            onOpen();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (globalData.newsInfo >= version) {
            onClose();
        }
    }, [globalData.newsInfo]);
    const hide = (ev) => {
        if (ev.target.checked) {
            setGlobalData(Object.assign(Object.assign({}, globalData), { newsInfo: version }));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Modal, { isCentered: true, isOpen: isOpen, onClose: onClose, children: [overlay, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.ModalContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.ModalHeader, { children: ["New Version (", SVersion, ")"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.ModalCloseButton, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.ModalBody, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.VStack, { align: "stretch", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, { children: ["Today we are pleased to provide a new version.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "New Features:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, { as: "ul", ml: 4, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Support Layout Grids with option yes/no." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Fix macos/ios pdf preview, flipped images." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Outlines, summary of frames per page." })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ByCoffe__WEBPACK_IMPORTED_MODULE_6__.ByCoffee, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, { textAlign: "right", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.Checkbox, { onChange: hide, children: "Hide dialog permanent" }) })] }) })] })] }));
};
const ProgressDlg = () => {
    const { progress } = (0,ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_2__.useMessageStore)();
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.useDisclosure)();
    const [overlay, setOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverlayOne, {}));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        const timer = setTimeout(() => {
            if (progress.show)
                onOpen();
            else
                onClose();
        }, 500);
        return () => clearTimeout(timer);
    }, [progress.show]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Modal, { closeOnOverlayClick: false, isCentered: true, isOpen: isOpen, onClose: onClose, children: [overlay, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.ModalContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.ModalHeader, { children: progress.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.ModalBody, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, { children: progress.message }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__.Progress, { value: (progress.value * 100) / progress.max })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.ModalFooter, {})] })] }));
};
const Messages = ({ headline = "", showToolbar = true, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProgressDlg, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MessageDlg, {}),  false && 0, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NewsDlg, {})] }));
    /*   return null;
    return (
      <VStack h="100%" align="stretch" spacing={0}>
        <HStack p={2} borderWidth={0}>
          <Box>{headline}</Box>
        </HStack>
        <VStack align="stretch" overflowY={"auto"} p={2} flex={1} divider={<StackDivider borderColor="gray.200" />}>
          {messages.map((msg, index) => (
            <MessageLine key={index} msg={msg} />
          ))}
        </VStack>
        {showToolbar && (
          <Box>
            <Spacer />
            <IconButton
              variant="ghost"
              aria-label="delete"
              title={"" + t("Remove messages")}
              disabled={messages.length ? false : true}
              icon={<FiTrash2 size="1rem" />}
              onClick={() => {
                clear();
              }}
            />
            <Box w={2}></Box>
          </Box>
        )}
      </VStack>
    );
   */
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);


/***/ }),

/***/ "./src/ui/app/components/errors.ts":
/*!*****************************************!*\
  !*** ./src/ui/app/components/errors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMessageDebug: () => (/* binding */ addMessageDebug),
/* harmony export */   addMessageError: () => (/* binding */ addMessageError),
/* harmony export */   addMessageInfo: () => (/* binding */ addMessageInfo),
/* harmony export */   showMessage: () => (/* binding */ showMessage)
/* harmony export */ });
/* harmony import */ var ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/stores/messageStore */ "./src/ui/stores/messageStore.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./src/ui/app/common.ts");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chunk-VYT3TZEC.mjs");

//import { createStandaloneToast } from "@chakra-ui/toast";


function showMessage(msg) {
    ui_stores_messageStore__WEBPACK_IMPORTED_MODULE_0__.messageStore.getState().add(msg);
    if (msg.noToast) {
        const { toast } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.createStandaloneToast)();
        if (msg.type !== _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.debug && msg.type !== _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.log) {
            let duration = 1500;
            switch (msg.type) {
                case _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.error:
                    //case GeneralMsgTyps.exception:
                    duration = 2000;
                    break;
                default:
                    break;
            }
            toast({
                title: "" + msg.title,
                description: "" + msg.message,
                status: msg.type,
                duration: duration,
                isClosable: true,
                position: "bottom-left",
            });
        }
    }
}
function addMessageError(title, message, noToast = false) {
    showMessage({
        title: title,
        type: _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.error,
        message: message,
        noToast: noToast,
    });
    console.log("addMessageError", message);
    //    if (!this.errors) this.errors = [];
    //  this.errors.push(error);
}
function addMessageInfo(title, message, noToast = false) {
    showMessage({
        title: title,
        type: _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.info,
        message: message,
        noToast: noToast,
    });
    //    if (!this.errors) this.errors = [];
    //  this.errors.push(error);
}
function addMessageDebug(title, message, noToast = false) {
    showMessage({
        title: title,
        type: _common__WEBPACK_IMPORTED_MODULE_1__.GeneralMsgTyps.debug,
        message: message,
        noToast: noToast,
    });
    //    if (!this.errors) this.errors = [];
    //  this.errors.push(error);
}


/***/ }),

/***/ "./src/ui/stores/localFonts.ts":
/*!*************************************!*\
  !*** ./src/ui/stores/localFonts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalFontStore: () => (/* binding */ LocalFontStore)
/* harmony export */ });
/* harmony import */ var ui_app_components_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/app/components/errors */ "./src/ui/app/components/errors.ts");
/* harmony import */ var _globalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalStore */ "./src/ui/stores/globalStore.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const fontkit = __webpack_require__(/*! fontkit */ "./src/modules/fontkit/src/index.js");
class LocalFontStore {
    static hasError(globalData) {
        for (const f in globalData.localFonts.styles) {
            const lfont = globalData.localFonts.styles[f];
            for (const style of lfont.styles) {
                if (!style.psfile)
                    return true;
            }
        }
        return false;
    }
    static getSortedStyles(globalData) {
        return Object.values(globalData.localFonts.styles).sort((a, b) => a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: 'base',
        }));
    }
    static getSortedFonts(globalData) {
        return globalData.localFonts.files;
        /*     return Object.values(globalData.localFonts.files).sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: 'base',
          })
        );
     */
    }
    static getFontfromBuffer(buffer) {
        const font = fontkit.create(new Uint8Array(buffer));
        if (font && font.type) {
            let ff = font.familyName; //Hiermit wird font._tables.name geladen nicht entfernen!
            let preferredFamily = '';
            let preferredSubfamily = '';
            if (font._tables && font._tables.name && font._tables.name.records) {
                try {
                    preferredFamily = '' + font._tables.name.records.preferredFamily.en;
                }
                catch (e) { }
                try {
                    preferredSubfamily = '' + font._tables.name.records.preferredSubfamily.en;
                }
                catch (e) { }
            }
            if (!preferredFamily) {
                preferredFamily = '' + font.familyName;
            }
            if (!preferredSubfamily) {
                const f = font.fullName.split(' ');
                f.shift();
                preferredSubfamily = f.join(' ');
            }
            return {
                state: true,
                type: font.type,
                familyName: font.familyName,
                fullName: font.fullName,
                postscriptName: font.postscriptName,
                preferredFamily: '' + preferredFamily,
                preferredSubfamily: '' + preferredSubfamily,
                italic: font.italicAngle != 0,
                style: font.subfamilyName,
                variationAxes: font.variationAxes,
                namedVariations: font.namedVariations,
                font: font,
            };
        }
    }
    static addFontBuffer(files, buffer) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let fkit;
            try {
                fkit = this.getFontfromBuffer(buffer);
            }
            catch (e) { }
            if (!fkit || !fkit.state || !fkit.type) {
                (0,ui_app_components_errors__WEBPACK_IMPORTED_MODULE_0__.addMessageError)('LocalFont', 'Not a font file', true);
                return false;
            }
            const fontKey = fkit.preferredFamily.toLowerCase();
            const psFilename = fkit.postscriptName;
            if (!files[fontKey]) {
                files[fontKey] = {
                    name: fkit.preferredFamily,
                    fonts: {},
                };
            }
            const famInfo = files[fontKey];
            let fileKey = fkit.preferredSubfamily.toLowerCase();
            if (fkit.namedVariations && Object.keys(fkit.namedVariations).length) {
                fileKey = 'NAMEDVARIATIONS';
            }
            if (famInfo.fonts[fileKey]) {
                (0,ui_app_components_errors__WEBPACK_IMPORTED_MODULE_0__.addMessageInfo)('LocalFont', 'Font (' + psFilename + ') already defined', true);
                return;
            }
            const info = {
                buffer: buffer,
                familyName: fkit.familyName,
                postscriptName: psFilename,
                italic: (_a = fkit.italic) !== null && _a !== void 0 ? _a : false,
                preferredFamily: '' + fkit.preferredFamily,
                preferredSubfamily: '' + fkit.preferredSubfamily,
                style: '' + fkit.style,
                variationAxes: fkit.variationAxes,
                namedVariations: fkit.namedVariations,
            };
            famInfo.fonts[fileKey] = info;
            return true;
        });
    }
    static updateFontState(globalData) {
        return __awaiter(this, void 0, void 0, function* () {
            //Reset all
            for (const styleGroupName in globalData.localFonts.styles) {
                const styleGroup = globalData.localFonts.styles[styleGroupName];
                const removeArray = [];
                for (const style of styleGroup.styles) {
                    style.psfile = '';
                    const fontInfo = {
                        family: styleGroup.name,
                        rawStyle: style.style,
                        rawWeight: style.weight,
                        bold: false,
                        postscriptName: '',
                        italic: false,
                    };
                    const font = this.getFontInfoByFontname(fontInfo);
                    if (font && font.buffer) {
                        styleGroup.styles.splice(styleGroup.styles.indexOf(style), 1);
                    }
                    else {
                        removeArray.push(style);
                    }
                }
                styleGroup.styles = removeArray;
                if (!styleGroup.styles.length) {
                    delete globalData.localFonts.styles[styleGroupName];
                }
            }
        });
    }
    static updateAllStates(globalData) {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateFontState(globalData);
        });
    }
    static getFontInfoByFontname(fontInfo) {
        if (!fontInfo.family)
            return;
        const files = _globalStore__WEBPACK_IMPORTED_MODULE_1__.globalPersistStore.getState().globalData.localFonts.files;
        // CHeck files...
        const key = fontInfo.family.toLowerCase();
        if (files[key]) {
            const fontFam = files[key];
            if (fontFam.fonts['NAMEDVARIATIONS']) {
                //@todo Test Italic
                const font = fontFam.fonts['NAMEDVARIATIONS'];
                let variantAxes = null;
                for (const variant in font.namedVariations) {
                    if (variant.toLowerCase() == fontInfo.rawStyle) {
                        variantAxes = {
                            name: variant,
                            postscriptName: (font.familyName + '-' + variant).replace(/ /g, ''),
                            axes: font.namedVariations[variant],
                        };
                        break;
                    }
                }
                if (variantAxes) {
                    const fontBuffer = font.buffer;
                    const psname = font.postscriptName;
                    if (fontBuffer) {
                        return Object.assign(Object.assign({}, fontInfo), { buffer: fontBuffer, postscriptName: psname, variationInstances: variantAxes });
                    }
                }
                if (font.preferredSubfamily.toLowerCase() == fontInfo.rawStyle) {
                    const fontBuffer = font.buffer;
                    const psname = font.postscriptName;
                    if (fontBuffer) {
                        return Object.assign(Object.assign({}, fontInfo), { buffer: fontBuffer, postscriptName: psname });
                    }
                }
            }
            else if (fontFam.fonts[fontInfo.rawStyle]) {
                const fontBuffer = fontFam.fonts[fontInfo.rawStyle].buffer;
                const psname = fontFam.fonts[fontInfo.rawStyle].postscriptName;
                if (fontBuffer) {
                    return Object.assign(Object.assign({}, fontInfo), { buffer: fontBuffer, postscriptName: psname });
                }
            }
        }
        const fontkey = fontInfo.family.toLowerCase();
        const styles = _globalStore__WEBPACK_IMPORTED_MODULE_1__.globalPersistStore.getState().globalData.localFonts.styles;
        if (!styles[fontkey]) {
            styles[fontkey] = {
                name: fontInfo.family,
                styles: [],
            };
        }
        const currentStyle = styles[fontkey];
        const fontStyle = currentStyle.styles.find((f) => f.italic == fontInfo.italic && f.style == fontInfo.rawStyle && f.weight == fontInfo.rawWeight);
        if (!fontStyle) {
            currentStyle.styles.push({
                italic: fontInfo.italic,
                style: fontInfo.rawStyle,
                weight: fontInfo.rawWeight,
                psfile: '',
            });
        }
        const newData = Object.assign(Object.assign({}, _globalStore__WEBPACK_IMPORTED_MODULE_1__.globalPersistStore.getState().globalData), { localFonts: Object.assign(Object.assign({}, _globalStore__WEBPACK_IMPORTED_MODULE_1__.globalPersistStore.getState().globalData.localFonts), { styles: styles }) });
        _globalStore__WEBPACK_IMPORTED_MODULE_1__.globalPersistStore.getState().setGlobalData(newData);
        // return {
        //     ...fontInfo,
        //     url: this.getFigmaUrl(f),
        //     postscriptName: postscriptName,
        //     variationInstances: variant,
        //   };
        (0,ui_app_components_errors__WEBPACK_IMPORTED_MODULE_0__.addMessageError)('FontManager', 'Font not found:' + fontInfo.family + ':' + fontInfo.rawStyle + ':' + fontInfo.rawWeight);
    }
}
//  if (fontInfo.family) {
//     // User Fonts
//     const fonts = globalPersistStore.getState().globalData.fonts;
//     const font = fonts.find(
//       (f) =>
//         f.name == fontInfo.family &&
//         f.italic == fontInfo.italic &&
//         f.style == fontInfo.rawStyle &&
//         f.weight == fontInfo.rawWeight
//     );
//     if (font) {
//       if ( font.state == 1 && font.buffer)
//       {
//           return {
//               ...fontInfo,
//               url: '',
//               buffer:	font.buffer,
//               postscriptName: font.postscriptName,
//               //variationInstances: variant
//             };
//       }
//     } else {
//       fonts.push({
//         name: '' + fontInfo.family,
//         postscriptName: '',
//         italic: fontInfo.italic,
//         style: fontInfo.rawStyle,
//         weight: fontInfo.rawWeight,
//         state: 0,
//         info: '',
//         buffer: null,
//       });
//       const newData = {
//         ...globalPersistStore.getState().globalData,
//         fonts:fonts,
//       };
//       globalPersistStore.getState().setGlobalData(newData);
//       addMessageError(
//         'FontManager',
//         'Font not found:' + fontInfo.family + ':' + fontInfo.rawStyle + ':' + fontInfo.rawWeight
//       );
//     }
//   }


/***/ }),

/***/ "./src/ui/stores/menuStore.tsx":
/*!*************************************!*\
  !*** ./src/ui/stores/menuStore.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItems: () => (/* binding */ menuItems),
/* harmony export */   useMenuStore: () => (/* binding */ useMenuStore)
/* harmony export */ });
/* harmony import */ var ui_umami__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/umami */ "./src/ui/umami/index.ts");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");


/* export function getMenuItem(menu: Menus) {
    return menuItems.find((menuItem) => menuItem.ident === menu);
  }
   */
const menuItems = [
    {
        ident: 'Print',
        label: 'Print',
    },
    {
        ident: 'Config',
        label: 'Config',
    },
];
const useMenuStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)()(
//persist(
(set, get) => ({
    menuIdent: 'Print',
    getMenu: () => { var _a; return (_a = menuItems.find((menuItem) => menuItem.ident === get().menuIdent)) !== null && _a !== void 0 ? _a : null; },
    setMenu: (menuIdent) => {
        set((state) => ({ menuIdent: menuIdent }));
        try {
            //umami().track('Menu  ' + menuIdent, {});
            (0,ui_umami__WEBPACK_IMPORTED_MODULE_0__.umami)().track((props) => (Object.assign(Object.assign({}, props), { name: 'click-' + menuIdent })));
        }
        catch (e) { }
    },
})
// ,
// {
// 	name: 'menu-storage' // name of item in the storage (must be unique)
// 	//getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
// }
//)
);


/***/ }),

/***/ "./src/ui/stores/messageStore.tsx":
/*!****************************************!*\
  !*** ./src/ui/stores/messageStore.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageStore: () => (/* binding */ messageStore),
/* harmony export */   useMessageStore: () => (/* binding */ useMessageStore)
/* harmony export */ });
/* harmony import */ var ui_app_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/app/common */ "./src/ui/app/common.ts");
/* harmony import */ var ui_umami__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/umami */ "./src/ui/umami/index.ts");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/vanilla */ "./node_modules/zustand/esm/vanilla.mjs");




const initalProgress = {
    show: false,
    title: '',
    message: '',
    value: 0,
    max: 100,
};
/**
      messageStore.setState({
      ...messageStore.getState(),
      progress: {
        ...messageStore.getState().progress,
        show: false,
      },
    });

 */
const messageStore = (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_2__.createStore)((set, get) => ({
    messages: [],
    showMessages: false,
    progress: initalProgress,
    showMessagePanel: (bshow) => {
        set((state) => (Object.assign(Object.assign({}, state), { showMessages: bshow })));
    },
    progressStart: (info) => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: info })));
    },
    progressEnd: () => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: initalProgress })));
    },
    setProgressShow: (bshow) => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: Object.assign(Object.assign({}, state.progress), { show: bshow }) })));
    },
    setProgressStep: (value, message) => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: Object.assign(Object.assign({}, state.progress), { value: value, message: message }) })));
    },
    setProgressMessage: (message) => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: Object.assign(Object.assign({}, state.progress), { message: message }) })));
    },
    setProgressValue: (value) => {
        set((state) => (Object.assign(Object.assign({}, state), { progress: Object.assign(Object.assign({}, state.progress), { value: value }) })));
    },
    add: (msg) => {
        const lm = get().messages[get().messages.length - 1];
        if (lm && lm.message == msg.message && lm.type == msg.type) {
            lm.count = (lm === null || lm === void 0 ? void 0 : lm.count) ? (lm === null || lm === void 0 ? void 0 : lm.count) + 1 : 2;
            return;
        }
        const x = 1;
        set((state) => (Object.assign(Object.assign({}, state), { messages: [...state.messages, msg] })));
        if (msg.type == ui_app_common__WEBPACK_IMPORTED_MODULE_0__.GeneralMsgTyps.error) {
            (0,ui_umami__WEBPACK_IMPORTED_MODULE_1__.umami)().track((props) => (Object.assign(Object.assign({}, props), { url: '/Error/' + msg.title + '/' + msg.message, title: '' })));
        }
    },
    clear: () => {
        set((state) => ({
            messages: [],
        }));
    },
}));
const createBoundedUseStore = ((store) => (selector, equals) => (0,zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)(store, selector, equals));
const useMessageStore = createBoundedUseStore(messageStore);
//export const useMessageStore = create(messageStore);
//export const useMessageStore = (selector:any) => useStore(messageStore, selector)


/***/ }),

/***/ "./src/modules/fontkit/src/CmapProcessor.js":
/*!**************************************************!*\
  !*** ./src/modules/fontkit/src/CmapProcessor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CmapProcessor)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/fontkit/src/utils.js");
/* harmony import */ var _encodings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encodings */ "./src/modules/fontkit/src/encodings.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./src/modules/fontkit/src/decorators.js");





class CmapProcessor {
	constructor(cmapTable) {
		// Attempt to find a Unicode cmap first
		this.encoding = null;
		this.cmap = this.findSubtable(cmapTable, [
			// 32-bit subtables
			[3, 10],
			[0, 6],
			[0, 4],

			// 16-bit subtables
			[3, 1],
			[0, 3],
			[0, 2],
			[0, 1],
			[0, 0]
		]);

		// If not unicode cmap was found, take the first table with a supported encoding.
		if (!this.cmap) {
			for (let cmap of cmapTable.tables) {
				let encoding = (0,_encodings__WEBPACK_IMPORTED_MODULE_1__.getEncoding)(cmap.platformID, cmap.encodingID, cmap.table.language - 1);
				let mapping = (0,_encodings__WEBPACK_IMPORTED_MODULE_1__.getEncodingMapping)(encoding);
				if (mapping) {
					this.cmap = cmap.table;
					this.encoding = mapping;
				}
			}
		}

		if (!this.cmap) {
			throw new Error('Could not find a supported cmap table');
		}

		this.uvs = this.findSubtable(cmapTable, [[0, 5]]);
		if (this.uvs && this.uvs.version !== 14) {
			this.uvs = null;
		}
	}

	findSubtable(cmapTable, pairs) {
		for (let [platformID, encodingID] of pairs) {
			for (let cmap of cmapTable.tables) {
				if (cmap.platformID === platformID && cmap.encodingID === encodingID) {
					return cmap.table;
				}
			}
		}

		return null;
	}

	lookup(codepoint, variationSelector) {
		// If there is no Unicode cmap in this font, we need to re-encode
		// the codepoint in the encoding that the cmap supports.
		if (this.encoding) {
			codepoint = this.encoding.get(codepoint) || codepoint;

			// Otherwise, try to get a Unicode variation selector for this codepoint if one is provided.
		} else if (variationSelector) {
			let gid = this.getVariationSelector(codepoint, variationSelector);
			if (gid) {
				return gid;
			}
		}

		let cmap = this.cmap;
		switch (cmap.version) {
			case 0:
				return cmap.codeMap.get(codepoint) || 0;

			case 4: {
				let min = 0;
				let max = cmap.segCount - 1;
				while (min <= max) {
					let mid = (min + max) >> 1;

					if (codepoint < cmap.startCode.get(mid)) {
						max = mid - 1;
					} else if (codepoint > cmap.endCode.get(mid)) {
						min = mid + 1;
					} else {
						let rangeOffset = cmap.idRangeOffset.get(mid);
						let gid;

						if (rangeOffset === 0) {
							gid = codepoint + cmap.idDelta.get(mid);
						} else {
							let index = rangeOffset / 2 + (codepoint - cmap.startCode.get(mid)) - (cmap.segCount - mid);
							gid = cmap.glyphIndexArray.get(index) || 0;
							if (gid !== 0) {
								gid += cmap.idDelta.get(mid);
							}
						}

						return gid & 0xffff;
					}
				}

				return 0;
			}

			case 8:
				throw new Error('TODO: cmap format 8');

			case 6:
			case 10:
				return cmap.glyphIndices.get(codepoint - cmap.firstCode) || 0;

			case 12:
			case 13: {
				let min = 0;
				let max = cmap.nGroups - 1;
				while (min <= max) {
					let mid = (min + max) >> 1;
					let group = cmap.groups.get(mid);

					if (codepoint < group.startCharCode) {
						max = mid - 1;
					} else if (codepoint > group.endCharCode) {
						min = mid + 1;
					} else {
						if (cmap.version === 12) {
							return group.glyphID + (codepoint - group.startCharCode);
						} else {
							return group.glyphID;
						}
					}
				}

				return 0;
			}

			case 14:
				throw new Error('TODO: cmap format 14');

			default:
				throw new Error(`Unknown cmap format ${cmap.version}`);
		}
	}

	getVariationSelector(codepoint, variationSelector) {
		if (!this.uvs) {
			return 0;
		}

		let selectors = this.uvs.varSelectors.toArray();
		let i = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(selectors, x => variationSelector - x.varSelector);
		if (i === -1) {
			return 0;
		}
		let sel = selectors[i];

		if (/* i !== -1 && */ sel.defaultUVS) {
			i = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(sel.defaultUVS, x =>
				codepoint < x.startUnicodeValue ? -1 : codepoint > x.startUnicodeValue + x.additionalCount ? +1 : 0
			);
		}
		if (i === -1) {
			return 0;
		}
		//if (i !== -1 && sel.nonDefaultUVS) {
		if (sel.defaultUVS) {
			i = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(sel.nonDefaultUVS, x => codepoint - x.unicodeValue);
			if (i !== -1) {
				return sel.nonDefaultUVS[i].glyphID;
			}
		}

		return 0;
	}

	////@cache
	getCharacterSet() {
		let cmap = this.cmap;
		switch (cmap.version) {
			case 0:
				return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(0, cmap.codeMap.length);

			case 4: {
				let res = [];
				let endCodes = cmap.endCode.toArray();
				for (let i = 0; i < endCodes.length; i++) {
					let tail = endCodes[i] + 1;
					let start = cmap.startCode.get(i);
					res.push(...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(start, tail));
				}

				return res;
			}

			case 8:
				throw new Error('TODO: cmap format 8');

			case 6:
			case 10:
				return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(cmap.firstCode, cmap.firstCode + cmap.glyphIndices.length);

			case 12:
			case 13: {
				let res = [];
				for (let group of cmap.groups.toArray()) {
					res.push(...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(group.startCharCode, group.endCharCode + 1));
				}

				return res;
			}

			case 14:
				throw new Error('TODO: cmap format 14');

			default:
				throw new Error(`Unknown cmap format ${cmap.version}`);
		}
	}

	////@cache
	codePointsForGlyph(gid) {
		let cmap = this.cmap;
		switch (cmap.version) {
			case 0: {
				let res = [];
				for (let i = 0; i < 256; i++) {
					if (cmap.codeMap.get(i) === gid) {
						res.push(i);
					}
				}

				return res;
			}

			case 4: {
				let res = [];
				for (let i = 0; i < cmap.segCount; i++) {
					let end = cmap.endCode.get(i);
					let start = cmap.startCode.get(i);
					let rangeOffset = cmap.idRangeOffset.get(i);
					let delta = cmap.idDelta.get(i);

					for (var c = start; c <= end; c++) {
						let g = 0;
						if (rangeOffset === 0) {
							g = c + delta;
						} else {
							let index = rangeOffset / 2 + (c - start) - (cmap.segCount - i);
							g = cmap.glyphIndexArray.get(index) || 0;
							if (g !== 0) {
								g += delta;
							}
						}

						if (g === gid) {
							res.push(c);
						}
					}
				}

				return res;
			}

			case 12: {
				let res = [];
				for (let group of cmap.groups.toArray()) {
					if (gid >= group.glyphID && gid <= group.glyphID + (group.endCharCode - group.startCharCode)) {
						res.push(group.startCharCode + (gid - group.glyphID));
					}
				}

				return res;
			}

			case 13: {
				let res = [];
				for (let group of cmap.groups.toArray()) {
					if (gid === group.glyphID) {
						res.push(...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(group.startCharCode, group.endCharCode + 1));
					}
				}

				return res;
			}

			default:
				throw new Error(`Unknown cmap format ${cmap.version}`);
		}
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/DFont.js":
/*!******************************************!*\
  !*** ./src/modules/fontkit/src/DFont.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DFont)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _TTFFont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TTFFont */ "./src/modules/fontkit/src/TTFFont.js");



let DFontName = new restructure__WEBPACK_IMPORTED_MODULE_0__.String(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8);
let DFontData = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  len: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  buf: new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer('len')
});

let Ref = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  id: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nameOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  attr: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  dataOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint24,
  handle: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let Type = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  name: new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  maxTypeIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  refList: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Ref, t => t.maxTypeIndex + 1), { type: 'parent' })
});

let TypeList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  types: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Type, t => t.length + 1)
});

let DFontMap = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 24),
  typeList: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, TypeList),
  nameListOffset: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'void')
});

let DFontHeader = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  dataOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  map: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, DFontMap),
  dataLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  mapLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

class DFont {
  type = 'DFont';

  static probe(buffer) {
    let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(buffer);

    try {
      var header = DFontHeader.decode(stream);
    } catch (e) {
      return false;
    }

    for (let type of header.map.typeList.types) {
      if (type.name === 'sfnt') {
        return true;
      }
    }

    return false;
  }

  constructor(stream) {
    this.stream = stream;
    this.header = DFontHeader.decode(this.stream);

    for (let type of this.header.map.typeList.types) {
      for (let ref of type.refList) {
        if (ref.nameOffset >= 0) {
          this.stream.pos = ref.nameOffset + this.header.map.nameListOffset;
          ref.name = DFontName.decode(this.stream);
        } else {
          ref.name = null;
        }
      }

      if (type.name === 'sfnt') {
        this.sfnt = type;
      }
    }
  }

  getFont(name) {
    if (!this.sfnt) {
      return null;
    }

    for (let ref of this.sfnt.refList) {
      let pos = this.header.dataOffset + ref.dataOffset + 4;
      let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this.stream.buffer.slice(pos));
      let font = new _TTFFont__WEBPACK_IMPORTED_MODULE_1__["default"](stream);
      if (
        font.postscriptName === name ||
        (
          font.postscriptName instanceof Uint8Array && 
          name instanceof Uint8Array && 
          font.postscriptName.every((v, i) => name[i] === v)
        )
      ) {
        return font;
      }
    }

    return null;
  }

  get fonts() {
    let fonts = [];
    for (let ref of this.sfnt.refList) {
      let pos = this.header.dataOffset + ref.dataOffset + 4;
      let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this.stream.buffer.slice(pos));
      fonts.push(new _TTFFont__WEBPACK_IMPORTED_MODULE_1__["default"](stream));
    }

    return fonts;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/TTFFont.js":
/*!********************************************!*\
  !*** ./src/modules/fontkit/src/TTFFont.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTFFont)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "./src/modules/fontkit/src/decorators.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/modules/fontkit/src/base.js");
/* harmony import */ var _tables_directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/directory */ "./src/modules/fontkit/src/tables/directory.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables */ "./src/modules/fontkit/src/tables/index.js");
/* harmony import */ var _CmapProcessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CmapProcessor */ "./src/modules/fontkit/src/CmapProcessor.js");
/* harmony import */ var _layout_LayoutEngine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/LayoutEngine */ "./src/modules/fontkit/src/layout/LayoutEngine.js");
/* harmony import */ var _glyph_TTFGlyph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glyph/TTFGlyph */ "./src/modules/fontkit/src/glyph/TTFGlyph.js");
/* harmony import */ var _glyph_CFFGlyph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glyph/CFFGlyph */ "./src/modules/fontkit/src/glyph/CFFGlyph.js");
/* harmony import */ var _glyph_SBIXGlyph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./glyph/SBIXGlyph */ "./src/modules/fontkit/src/glyph/SBIXGlyph.js");
/* harmony import */ var _glyph_COLRGlyph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./glyph/COLRGlyph */ "./src/modules/fontkit/src/glyph/COLRGlyph.js");
/* harmony import */ var _glyph_GlyphVariationProcessor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./glyph/GlyphVariationProcessor */ "./src/modules/fontkit/src/glyph/GlyphVariationProcessor.js");
/* harmony import */ var _subset_TTFSubset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subset/TTFSubset */ "./src/modules/fontkit/src/subset/TTFSubset.js");
/* harmony import */ var _subset_CFFSubset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subset/CFFSubset */ "./src/modules/fontkit/src/subset/CFFSubset.js");
/* harmony import */ var _glyph_BBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./glyph/BBox */ "./src/modules/fontkit/src/glyph/BBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils */ "./src/modules/fontkit/src/utils.js");

















/**
 * This is the base class for all SFNT-based font formats in fontkit.
 * It supports TrueType, and PostScript glyphs, and several color glyph formats.
 */
class TTFFont {
	type = 'TTF';

	static probe(buffer) {
		let format = _utils__WEBPACK_IMPORTED_MODULE_15__.asciiDecoder.decode(buffer.slice(0, 4));
		return format === 'true' || format === 'OTTO' || format === String.fromCharCode(0, 1, 0, 0);
	}

	constructor(stream, variationCoords = null) {
		this.defaultLanguage = null;
		this.stream = stream;
		this.variationCoords = variationCoords;

		this._directoryPos = this.stream.pos;
		this._tables = {};
		this._glyphs = {};
		this._decodeDirectory();

		// define properties for each table to lazily parse
		for (let tag in this.directory.tables) {
			let table = this.directory.tables[tag];
			if (_tables__WEBPACK_IMPORTED_MODULE_4__["default"][tag] && table.length > 0) {
				Object.defineProperty(this, tag, {
					get: this._getTable.bind(this, table)
				});
			}
		}
	}

	setDefaultLanguage(lang = null) {
		this.defaultLanguage = lang;
	}

	_getTable(table) {
		if (!(table.tag in this._tables)) {
			try {
				this._tables[table.tag] = this._decodeTable(table);
			} catch (e) {
				if (_base__WEBPACK_IMPORTED_MODULE_2__.logErrors) {
					console.error(`Error decoding table ${table.tag}`);
					console.error(e.stack);
				}
			}
		}

		return this._tables[table.tag];
	}

	_getTableStream(tag) {
		let table = this.directory.tables[tag];
		if (table) {
			this.stream.pos = table.offset;
			return this.stream;
		}

		return null;
	}

	_decodeDirectory() {
		return (this.directory = _tables_directory__WEBPACK_IMPORTED_MODULE_3__["default"].decode(this.stream, { _startOffset: 0 }));
	}

	_decodeTable(table) {
		let pos = this.stream.pos;

		let stream = this._getTableStream(table.tag);
		let result = _tables__WEBPACK_IMPORTED_MODULE_4__["default"][table.tag].decode(stream, this, table.length);

		this.stream.pos = pos;
		return result;
	}

	/**
	 * Gets a string from the font's `name` table
	 * `lang` is a BCP-47 language code.
	 * @return {string}
	 */
	getName(key, lang = this.defaultLanguage || _base__WEBPACK_IMPORTED_MODULE_2__.defaultLanguage) {
		let record = this.name && this.name.records[key];
		if (record) {
			// Attempt to retrieve the entry, depending on which translation is available:
			return (
				record[lang] ||
				record[this.defaultLanguage] ||
				record[_base__WEBPACK_IMPORTED_MODULE_2__.defaultLanguage] ||
				record['en'] ||
				record[Object.keys(record)[0]] || // Seriously, ANY language would be fine
				null
			);
		}

		return null;
	}

	/**
	 * The unique PostScript name for this font, e.g. "Helvetica-Bold"
	 * @type {string}
	 */
	get postscriptName() {
		return this.getName('postscriptName');
	}

	/**
	 * The font's full name, e.g. "Helvetica Bold"
	 * @type {string}
	 */
	get fullName() {
		return this.getName('fullName');
	}

	/**
	 * The font's family name, e.g. "Helvetica"
	 * @type {string}
	 */
	get familyName() {
		return this.getName('fontFamily');
	}

	/**
	 * The font's sub-family, e.g. "Bold".
	 * @type {string}
	 */
	get subfamilyName() {
		return this.getName('fontSubfamily');
	}

	/**
	 * The font's copyright information
	 * @type {string}
	 */
	get copyright() {
		return this.getName('copyright');
	}

	/**
	 * The font's version number
	 * @type {string}
	 */
	get version() {
		return this.getName('version');
	}

	/**
	 * The font’s [ascender](https://en.wikipedia.org/wiki/Ascender_(typography))
	 * @type {number}
	 */
	get ascent() {
		return this.hhea.ascent;
	}

	/**
	 * The font’s [descender](https://en.wikipedia.org/wiki/Descender)
	 * @type {number}
	 */
	get descent() {
		return this.hhea.descent;
	}

	/**
	 * The amount of space that should be included between lines
	 * @type {number}
	 */
	get lineGap() {
		return this.hhea.lineGap;
	}

	/**
	 * The offset from the normal underline position that should be used
	 * @type {number}
	 */
	get underlinePosition() {
		return this.post.underlinePosition;
	}

	/**
	 * The weight of the underline that should be used
	 * @type {number}
	 */
	get underlineThickness() {
		return this.post.underlineThickness;
	}

	/**
	 * If this is an italic font, the angle the cursor should be drawn at to match the font design
	 * @type {number}
	 */
	get italicAngle() {
		return this.post.italicAngle;
	}

	/**
	 * The height of capital letters above the baseline.
	 * See [here](https://en.wikipedia.org/wiki/Cap_height) for more details.
	 * @type {number}
	 */
	get capHeight() {
		let os2 = this['OS/2'];
		return os2 ? os2.capHeight : this.ascent;
	}

	/**
	 * The height of lower case letters in the font.
	 * See [here](https://en.wikipedia.org/wiki/X-height) for more details.
	 * @type {number}
	 */
	get xHeight() {
		let os2 = this['OS/2'];
		return os2 ? os2.xHeight : 0;
	}

	/**
	 * The number of glyphs in the font.
	 * @type {number}
	 */
	get numGlyphs() {
		return this.maxp.numGlyphs;
	}

	/**
	 * The size of the font’s internal coordinate grid
	 * @type {number}
	 */
	get unitsPerEm() {
		return this.head.unitsPerEm;
	}

	/**
	 * The font’s bounding box, i.e. the box that encloses all glyphs in the font.
	 * @type {BBox}
	 */
	////@cache
	get bbox() {
		return Object.freeze(new _glyph_BBox__WEBPACK_IMPORTED_MODULE_14__["default"](this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax));
	}

	////@cache
	get _cmapProcessor() {
		return new _CmapProcessor__WEBPACK_IMPORTED_MODULE_5__["default"](this.cmap);
	}

	/**
	 * An array of all of the unicode code points supported by the font.
	 * @type {number[]}
	 */
	////@cache
	get characterSet() {
		return this._cmapProcessor.getCharacterSet();
	}

	/**
	 * Returns whether there is glyph in the font for the given unicode code point.
	 *
	 * @param {number} codePoint
	 * @return {boolean}
	 */
	hasGlyphForCodePoint(codePoint) {
		return !!this._cmapProcessor.lookup(codePoint);
	}

	/**
	 * Maps a single unicode code point to a Glyph object.
	 * Does not perform any advanced substitutions (there is no context to do so).
	 *
	 * @param {number} codePoint
	 * @return {Glyph}
	 */
	glyphForCodePoint(codePoint) {
		return this.getGlyph(this._cmapProcessor.lookup(codePoint), [codePoint]);
	}

	/**
	 * Returns an array of Glyph objects for the given string.
	 * This is only a one-to-one mapping from characters to glyphs.
	 * For most uses, you should use font.layout (described below), which
	 * provides a much more advanced mapping supporting AAT and OpenType shaping.
	 *
	 * @param {string} string
	 * @return {Glyph[]}
	 */
	glyphsForString(string) {
		let glyphs = [];
		let len = string.length;
		let idx = 0;
		let last = -1;
		let state = -1;

		while (idx <= len) {
			let code = 0;
			let nextState = 0;

			if (idx < len) {
				// Decode the next codepoint from UTF 16
				code = string.charCodeAt(idx++);
				if (0xd800 <= code && code <= 0xdbff && idx < len) {
					let next = string.charCodeAt(idx);
					if (0xdc00 <= next && next <= 0xdfff) {
						idx++;
						code = ((code & 0x3ff) << 10) + (next & 0x3ff) + 0x10000;
					}
				}

				// Compute the next state: 1 if the next codepoint is a variation selector, 0 otherwise.
				nextState = (0xfe00 <= code && code <= 0xfe0f) || (0xe0100 <= code && code <= 0xe01ef) ? 1 : 0;
			} else {
				idx++;
			}

			if (state === 0 && nextState === 1) {
				// Variation selector following normal codepoint.
				glyphs.push(this.getGlyph(this._cmapProcessor.lookup(last, code), [last, code]));
			} else if (state === 0 && nextState === 0) {
				// Normal codepoint following normal codepoint.
				glyphs.push(this.glyphForCodePoint(last));
			}

			last = code;
			state = nextState;
		}

		return glyphs;
	}

	////@cache
	get _layoutEngine() {
		return new _layout_LayoutEngine__WEBPACK_IMPORTED_MODULE_6__["default"](this);
	}

	/**
	 * Returns a GlyphRun object, which includes an array of Glyphs and GlyphPositions for the given string.
	 *
	 * @param {string} string
	 * @param {string[]} [userFeatures]
	 * @param {string} [script]
	 * @param {string} [language]
	 * @param {string} [direction]
	 * @return {GlyphRun}
	 */
	layout(string, userFeatures, script, language, direction) {
		return this._layoutEngine.layout(string, userFeatures, script, language, direction);
	}

	/**
	 * Returns an array of strings that map to the given glyph id.
	 * @param {number} gid - glyph id
	 */
	stringsForGlyph(gid) {
		return this._layoutEngine.stringsForGlyph(gid);
	}

	/**
	 * An array of all [OpenType feature tags](https://www.microsoft.com/typography/otspec/featuretags.htm)
	 * (or mapped AAT tags) supported by the font.
	 * The features parameter is an array of OpenType feature tags to be applied in addition to the default set.
	 * If this is an AAT font, the OpenType feature tags are mapped to AAT features.
	 *
	 * @type {string[]}
	 */
	get availableFeatures() {
		return this._layoutEngine.getAvailableFeatures();
	}

	getAvailableFeatures(script, language) {
		return this._layoutEngine.getAvailableFeatures(script, language);
	}

	_getBaseGlyph(glyph, characters = []) {
		if (!this._glyphs[glyph]) {
			if (this.directory.tables.glyf) {
				this._glyphs[glyph] = new _glyph_TTFGlyph__WEBPACK_IMPORTED_MODULE_7__["default"](glyph, characters, this);
			} else if (this.directory.tables['CFF '] || this.directory.tables.CFF2) {
				this._glyphs[glyph] = new _glyph_CFFGlyph__WEBPACK_IMPORTED_MODULE_8__["default"](glyph, characters, this);
			}
		}

		return this._glyphs[glyph] || null;
	}

	/**
	 * Returns a glyph object for the given glyph id.
	 * You can pass the array of code points this glyph represents for
	 * your use later, and it will be stored in the glyph object.
	 *
	 * @param {number} glyph
	 * @param {number[]} characters
	 * @return {Glyph}
	 */
	getGlyph(glyph, characters = []) {
		if (!this._glyphs[glyph]) {
			if (this.directory.tables.sbix) {
				this._glyphs[glyph] = new _glyph_SBIXGlyph__WEBPACK_IMPORTED_MODULE_9__["default"](glyph, characters, this);
			} else if (this.directory.tables.COLR && this.directory.tables.CPAL) {
				this._glyphs[glyph] = new _glyph_COLRGlyph__WEBPACK_IMPORTED_MODULE_10__["default"](glyph, characters, this);
			} else {
				this._getBaseGlyph(glyph, characters);
			}
		}

		return this._glyphs[glyph] || null;
	}

	/**
	 * Returns a Subset for this font.
	 * @return {Subset}
	 */
	createSubset() {
		if (this.directory.tables['CFF ']) {
			return new _subset_CFFSubset__WEBPACK_IMPORTED_MODULE_13__["default"](this);
		}

		return new _subset_TTFSubset__WEBPACK_IMPORTED_MODULE_12__["default"](this);
	}

	/**
	 * Returns an object describing the available variation axes
	 * that this font supports. Keys are setting tags, and values
	 * contain the axis name, range, and default value.
	 *
	 * @type {object}
	 */
	////@cache
	get variationAxes() {
		let res = {};
		if (!this.fvar) {
			return res;
		}

		for (let axis of this.fvar.axis) {
			res[axis.axisTag.trim()] = {
				name: axis.name.en,
				min: axis.minValue,
				default: axis.defaultValue,
				max: axis.maxValue
			};
		}

		return res;
	}

	/**
	 * Returns an object describing the named variation instances
	 * that the font designer has specified. Keys are variation names
	 * and values are the variation settings for this instance.
	 *
	 * @type {object}
	 */
	////@cache
	get namedVariations() {
		let res = {};
		if (!this.fvar) {
			return res;
		}

		for (let instance of this.fvar.instance) {
			let settings = {};
			for (let i = 0; i < this.fvar.axis.length; i++) {
				let axis = this.fvar.axis[i];
				settings[axis.axisTag.trim()] = instance.coord[i];
			}

			res[instance.name.en] = settings;
		}

		return res;
	}

	/**
	 * Returns a new font with the given variation settings applied.
	 * Settings can either be an instance name, or an object containing
	 * variation tags as specified by the `variationAxes` property.
	 *
	 * @param {object} settings
	 * @return {TTFFont}
	 */
	getVariation(settings) {
		if (
			!(
				this.directory.tables.fvar &&
				((this.directory.tables.gvar && this.directory.tables.glyf) || this.directory.tables.CFF2)
			)
		) {
			throw new Error('Variations require a font with the fvar, gvar and glyf, or CFF2 tables.');
		}

		if (typeof settings === 'string') {
			settings = this.namedVariations[settings];
		}

		if (typeof settings !== 'object') {
			throw new Error('Variation settings must be either a variation name or settings object.');
		}

		// normalize the coordinates
		let coords = this.fvar.axis.map((axis, i) => {
			let axisTag = axis.axisTag.trim();
			if (axisTag in settings) {
				return Math.max(axis.minValue, Math.min(axis.maxValue, settings[axisTag]));
			} else {
				return axis.defaultValue;
			}
		});

		let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this.stream.buffer);
		stream.pos = this._directoryPos;
		let font = new TTFFont(stream, coords);
		font._tables = this._tables;

		return font;
	}

	////@cache
	get _variationProcessor() {
		if (!this.fvar) {
			return null;
		}

		let variationCoords = this.variationCoords;

		// Ignore if no variation coords and not CFF2
		if (!variationCoords && !this.CFF2) {
			return null;
		}

		if (!variationCoords) {
			variationCoords = this.fvar.axis.map(axis => axis.defaultValue);
		}

		return new _glyph_GlyphVariationProcessor__WEBPACK_IMPORTED_MODULE_11__["default"](this, variationCoords);
	}

	// Standardized format plugin API
	getFont(name) {
		return this.getVariation(name);
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/TrueTypeCollection.js":
/*!*******************************************************!*\
  !*** ./src/modules/fontkit/src/TrueTypeCollection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrueTypeCollection)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _TTFFont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TTFFont */ "./src/modules/fontkit/src/TTFFont.js");
/* harmony import */ var _tables_directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables/directory */ "./src/modules/fontkit/src/tables/directory.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables */ "./src/modules/fontkit/src/tables/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/modules/fontkit/src/utils.js");






let TTCHeader = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, {
  0x00010000: {
    numFonts:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    offsets:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'numFonts')
  },
  0x00020000: {
    numFonts:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    offsets:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'numFonts'),
    dsigTag:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    dsigLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    dsigOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
  }
});

class TrueTypeCollection {
  type = 'TTC';

  static probe(buffer) {
    return _utils__WEBPACK_IMPORTED_MODULE_4__.asciiDecoder.decode(buffer.slice(0, 4)) === 'ttcf';
  }

  constructor(stream) {
    this.stream = stream;
    if (stream.readString(4) !== 'ttcf') {
      throw new Error('Not a TrueType collection');
    }

    this.header = TTCHeader.decode(stream);
  }

  getFont(name) {
    for (let offset of this.header.offsets) {
      let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this.stream.buffer);
      stream.pos = offset;
      let font = new _TTFFont__WEBPACK_IMPORTED_MODULE_1__["default"](stream);
      if (
        font.postscriptName === name ||
        (
          font.postscriptName instanceof Uint8Array && 
          name instanceof Uint8Array && 
          font.postscriptName.every((v, i) => name[i] === v)
        )
      ) {
        return font;
      }
    }

    return null;
  }

  get fonts() {
    let fonts = [];
    for (let offset of this.header.offsets) {
      let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this.stream.buffer);
      stream.pos = offset;
      fonts.push(new _TTFFont__WEBPACK_IMPORTED_MODULE_1__["default"](stream));
    }

    return fonts;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/WOFF2Font.js":
/*!**********************************************!*\
  !*** ./src/modules/fontkit/src/WOFF2Font.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WOFF2Font)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var brotli_decompress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brotli/decompress.js */ "./node_modules/brotli/decompress.js");
/* harmony import */ var brotli_decompress_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brotli_decompress_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TTFFont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TTFFont */ "./src/modules/fontkit/src/TTFFont.js");
/* harmony import */ var _glyph_TTFGlyph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glyph/TTFGlyph */ "./src/modules/fontkit/src/glyph/TTFGlyph.js");
/* harmony import */ var _glyph_WOFF2Glyph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glyph/WOFF2Glyph */ "./src/modules/fontkit/src/glyph/WOFF2Glyph.js");
/* harmony import */ var _tables_WOFF2Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables/WOFF2Directory */ "./src/modules/fontkit/src/tables/WOFF2Directory.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/modules/fontkit/src/utils.js");








/**
 * Subclass of TTFFont that represents a TTF/OTF font compressed by WOFF2
 * See spec here: http://www.w3.org/TR/WOFF2/
 */
class WOFF2Font extends _TTFFont__WEBPACK_IMPORTED_MODULE_2__["default"] {
  type = 'WOFF2';

  static probe(buffer) {
    return _utils__WEBPACK_IMPORTED_MODULE_6__.asciiDecoder.decode(buffer.slice(0, 4)) === 'wOF2';
  }

  _decodeDirectory() {
    this.directory = _tables_WOFF2Directory__WEBPACK_IMPORTED_MODULE_5__["default"].decode(this.stream);
    this._dataPos = this.stream.pos;
  }

  _decompress() {
    // decompress data and setup table offsets if we haven't already
    if (!this._decompressed) {
      this.stream.pos = this._dataPos;
      let buffer = this.stream.readBuffer(this.directory.totalCompressedSize);

      let decompressedSize = 0;
      for (let tag in this.directory.tables) {
        let entry = this.directory.tables[tag];
        entry.offset = decompressedSize;
        decompressedSize += (entry.transformLength != null) ? entry.transformLength : entry.length;
      }

      let decompressed = brotli_decompress_js__WEBPACK_IMPORTED_MODULE_1___default()(buffer, decompressedSize);
      if (!decompressed) {
        throw new Error('Error decoding compressed data in WOFF2');
      }

      this.stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(decompressed);
      this._decompressed = true;
    }
  }

  _decodeTable(table) {
    this._decompress();
    return super._decodeTable(table);
  }

  // Override this method to get a glyph and return our
  // custom subclass if there is a glyf table.
  _getBaseGlyph(glyph, characters = []) {
    if (!this._glyphs[glyph]) {
      if (this.directory.tables.glyf && this.directory.tables.glyf.transformed) {
        if (!this._transformedGlyphs) { this._transformGlyfTable(); }
        return this._glyphs[glyph] = new _glyph_WOFF2Glyph__WEBPACK_IMPORTED_MODULE_4__["default"](glyph, characters, this);

      } else {
        return super._getBaseGlyph(glyph, characters);
      }
    }
  }

  _transformGlyfTable() {
    this._decompress();
    this.stream.pos = this.directory.tables.glyf.offset;
    let table = GlyfTable.decode(this.stream);
    let glyphs = [];

    for (let index = 0; index < table.numGlyphs; index++) {
      let glyph = {};
      let nContours = table.nContours.readInt16BE();
      glyph.numberOfContours = nContours;

      if (nContours > 0) { // simple glyph
        let nPoints = [];
        let totalPoints = 0;

        for (let i = 0; i < nContours; i++) {
          let r = read255UInt16(table.nPoints);
          totalPoints += r;
          nPoints.push(totalPoints);
        }

        glyph.points = decodeTriplet(table.flags, table.glyphs, totalPoints);
        for (let i = 0; i < nContours; i++) {
          glyph.points[nPoints[i] - 1].endContour = true;
        }

        var instructionSize = read255UInt16(table.glyphs);

      } else if (nContours < 0) { // composite glyph
        let haveInstructions = _glyph_TTFGlyph__WEBPACK_IMPORTED_MODULE_3__["default"].prototype._decodeComposite.call({ _font: this }, glyph, table.composites);
        if (haveInstructions) {
          var instructionSize = read255UInt16(table.glyphs);
        }
      }

      glyphs.push(glyph);
    }

    this._transformedGlyphs = glyphs;
  }
}

// Special class that accepts a length and returns a sub-stream for that data
class Substream {
  constructor(length) {
    this.length = length;
    this._buf = new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer(length);
  }

  decode(stream, parent) {
    return new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(this._buf.decode(stream, parent));
  }
}

// This struct represents the entire glyf table
let GlyfTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  numGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  indexFormat: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nContourStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  nPointsStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  flagStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  glyphStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  compositeStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  bboxStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  instructionStreamSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  nContours: new Substream('nContourStreamSize'),
  nPoints: new Substream('nPointsStreamSize'),
  flags: new Substream('flagStreamSize'),
  glyphs: new Substream('glyphStreamSize'),
  composites: new Substream('compositeStreamSize'),
  bboxes: new Substream('bboxStreamSize'),
  instructions: new Substream('instructionStreamSize')
});

const WORD_CODE = 253;
const ONE_MORE_BYTE_CODE2 = 254;
const ONE_MORE_BYTE_CODE1 = 255;
const LOWEST_U_CODE = 253;

function read255UInt16(stream) {
  let code = stream.readUInt8();

  if (code === WORD_CODE) {
    return stream.readUInt16BE();
  }

  if (code === ONE_MORE_BYTE_CODE1) {
    return stream.readUInt8() + LOWEST_U_CODE;
  }

  if (code === ONE_MORE_BYTE_CODE2) {
    return stream.readUInt8() + LOWEST_U_CODE * 2;
  }

  return code;
}

function withSign(flag, baseval) {
  return flag & 1 ? baseval : -baseval;
}

function decodeTriplet(flags, glyphs, nPoints) {
  let y;
  let x = y = 0;
  let res = [];

  for (let i = 0; i < nPoints; i++) {
    let dx = 0, dy = 0;
    let flag = flags.readUInt8();
    let onCurve = !(flag >> 7);
    flag &= 0x7f;

    if (flag < 10) {
      dx = 0;
      dy = withSign(flag, ((flag & 14) << 7) + glyphs.readUInt8());

    } else if (flag < 20) {
      dx = withSign(flag, (((flag - 10) & 14) << 7) + glyphs.readUInt8());
      dy = 0;

    } else if (flag < 84) {
      var b0 = flag - 20;
      var b1 = glyphs.readUInt8();
      dx = withSign(flag, 1 + (b0 & 0x30) + (b1 >> 4));
      dy = withSign(flag >> 1, 1 + ((b0 & 0x0c) << 2) + (b1 & 0x0f));

    } else if (flag < 120) {
      var b0 = flag - 84;
      dx = withSign(flag, 1 + ((b0 / 12) << 8) + glyphs.readUInt8());
      dy = withSign(flag >> 1, 1 + (((b0 % 12) >> 2) << 8) + glyphs.readUInt8());

    } else if (flag < 124) {
      var b1 = glyphs.readUInt8();
      let b2 = glyphs.readUInt8();
      dx = withSign(flag, (b1 << 4) + (b2 >> 4));
      dy = withSign(flag >> 1, ((b2 & 0x0f) << 8) + glyphs.readUInt8());

    } else {
      dx = withSign(flag, glyphs.readUInt16BE());
      dy = withSign(flag >> 1, glyphs.readUInt16BE());
    }

    x += dx;
    y += dy;
    res.push(new _glyph_TTFGlyph__WEBPACK_IMPORTED_MODULE_3__.Point(onCurve, false, x, y));
  }

  return res;
}


/***/ }),

/***/ "./src/modules/fontkit/src/WOFFFont.js":
/*!*********************************************!*\
  !*** ./src/modules/fontkit/src/WOFFFont.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WOFFFont)
/* harmony export */ });
/* harmony import */ var _TTFFont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TTFFont */ "./src/modules/fontkit/src/TTFFont.js");
/* harmony import */ var _tables_WOFFDirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables/WOFFDirectory */ "./src/modules/fontkit/src/tables/WOFFDirectory.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables */ "./src/modules/fontkit/src/tables/index.js");
/* harmony import */ var tiny_inflate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-inflate */ "./node_modules/tiny-inflate/index.js");
/* harmony import */ var tiny_inflate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tiny_inflate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/modules/fontkit/src/utils.js");







class WOFFFont extends _TTFFont__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'WOFF';

  static probe(buffer) {
    return _utils__WEBPACK_IMPORTED_MODULE_5__.asciiDecoder.decode(buffer.slice(0, 4)) === 'wOFF';
  }

  _decodeDirectory() {
    this.directory = _tables_WOFFDirectory__WEBPACK_IMPORTED_MODULE_1__["default"].decode(this.stream, { _startOffset: 0 });
  }

  _getTableStream(tag) {
    let table = this.directory.tables[tag];
    if (table) {
      this.stream.pos = table.offset;

      if (table.compLength < table.length) {
        this.stream.pos += 2; // skip deflate header
        let outBuffer = new Uint8Array(table.length);
        let buf = tiny_inflate__WEBPACK_IMPORTED_MODULE_3___default()(this.stream.readBuffer(table.compLength - 2), outBuffer);
        return new restructure__WEBPACK_IMPORTED_MODULE_4__.DecodeStream(buf);
      } else {
        return this.stream;
      }
    }

    return null;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/aat/AATFeatureMap.js":
/*!******************************************************!*\
  !*** ./src/modules/fontkit/src/aat/AATFeatureMap.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapAATToOT: () => (/* binding */ mapAATToOT),
/* harmony export */   mapOTToAAT: () => (/* binding */ mapOTToAAT)
/* harmony export */ });
// see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html
// and /System/Library/Frameworks/CoreText.framework/Versions/A/Headers/SFNTLayoutTypes.h on a Mac
const features = {
  allTypographicFeatures: {
    code: 0,
    exclusive: false,
    allTypeFeatures: 0
  },
  ligatures: {
    code: 1,
    exclusive: false,
    requiredLigatures: 0,
    commonLigatures: 2,
    rareLigatures: 4,
    // logos: 6
    rebusPictures: 8,
    diphthongLigatures: 10,
    squaredLigatures: 12,
    abbrevSquaredLigatures: 14,
    symbolLigatures: 16,
    contextualLigatures: 18,
    historicalLigatures: 20
  },
  cursiveConnection: {
    code: 2,
    exclusive: true,
    unconnected: 0,
    partiallyConnected: 1,
    cursive: 2
  },
  letterCase: {
    code: 3,
    exclusive: true
  },
    // upperAndLowerCase: 0          # deprecated
    // allCaps: 1                    # deprecated
    // allLowerCase: 2               # deprecated
    // smallCaps: 3                  # deprecated
    // initialCaps: 4                # deprecated
    // initialCapsAndSmallCaps: 5    # deprecated
  verticalSubstitution: {
    code: 4,
    exclusive: false,
    substituteVerticalForms: 0
  },
  linguisticRearrangement: {
    code: 5,
    exclusive: false,
    linguisticRearrangement: 0
  },
  numberSpacing: {
    code: 6,
    exclusive: true,
    monospacedNumbers: 0,
    proportionalNumbers: 1,
    thirdWidthNumbers: 2,
    quarterWidthNumbers: 3
  },
  smartSwash: {
    code: 8,
    exclusive: false,
    wordInitialSwashes: 0,
    wordFinalSwashes: 2,
    // lineInitialSwashes: 4
    // lineFinalSwashes: 6
    nonFinalSwashes: 8
  },
  diacritics: {
    code: 9,
    exclusive: true,
    showDiacritics: 0,
    hideDiacritics: 1,
    decomposeDiacritics: 2
  },
  verticalPosition: {
    code: 10,
    exclusive: true,
    normalPosition: 0,
    superiors: 1,
    inferiors: 2,
    ordinals: 3,
    scientificInferiors: 4
  },
  fractions: {
    code: 11,
    exclusive: true,
    noFractions: 0,
    verticalFractions: 1,
    diagonalFractions: 2
  },
  overlappingCharacters: {
    code: 13,
    exclusive: false,
    preventOverlap: 0
  },
  typographicExtras: {
    code: 14,
    exclusive: false,
    // hyphensToEmDash: 0
    // hyphenToEnDash: 2
    slashedZero: 4
  },
    // formInterrobang: 6
    // smartQuotes: 8
    // periodsToEllipsis: 10
  mathematicalExtras: {
    code: 15,
    exclusive: false,
    // hyphenToMinus: 0
    // asteristoMultiply: 2
    // slashToDivide: 4
    // inequalityLigatures: 6
    // exponents: 8
    mathematicalGreek: 10
  },
  ornamentSets: {
    code: 16,
    exclusive: true,
    noOrnaments: 0,
    dingbats: 1,
    piCharacters: 2,
    fleurons: 3,
    decorativeBorders: 4,
    internationalSymbols: 5,
    mathSymbols: 6
  },
  characterAlternatives: {
    code: 17,
    exclusive: true,
    noAlternates: 0
  },
    // user defined options
  designComplexity: {
    code: 18,
    exclusive: true,
    designLevel1: 0,
    designLevel2: 1,
    designLevel3: 2,
    designLevel4: 3,
    designLevel5: 4
  },
  styleOptions: {
    code: 19,
    exclusive: true,
    noStyleOptions: 0,
    displayText: 1,
    engravedText: 2,
    illuminatedCaps: 3,
    titlingCaps: 4,
    tallCaps: 5
  },
  characterShape: {
    code: 20,
    exclusive: true,
    traditionalCharacters: 0,
    simplifiedCharacters: 1,
    JIS1978Characters: 2,
    JIS1983Characters: 3,
    JIS1990Characters: 4,
    traditionalAltOne: 5,
    traditionalAltTwo: 6,
    traditionalAltThree: 7,
    traditionalAltFour: 8,
    traditionalAltFive: 9,
    expertCharacters: 10,
    JIS2004Characters: 11,
    hojoCharacters: 12,
    NLCCharacters: 13,
    traditionalNamesCharacters: 14
  },
  numberCase: {
    code: 21,
    exclusive: true,
    lowerCaseNumbers: 0,
    upperCaseNumbers: 1
  },
  textSpacing: {
    code: 22,
    exclusive: true,
    proportionalText: 0,
    monospacedText: 1,
    halfWidthText: 2,
    thirdWidthText: 3,
    quarterWidthText: 4,
    altProportionalText: 5,
    altHalfWidthText: 6
  },
  transliteration: {
    code: 23,
    exclusive: true,
    noTransliteration: 0
  },
    // hanjaToHangul: 1
    // hiraganaToKatakana: 2
    // katakanaToHiragana: 3
    // kanaToRomanization: 4
    // romanizationToHiragana: 5
    // romanizationToKatakana: 6
    // hanjaToHangulAltOne: 7
    // hanjaToHangulAltTwo: 8
    // hanjaToHangulAltThree: 9
  annotation: {
    code: 24,
    exclusive: true,
    noAnnotation: 0,
    boxAnnotation: 1,
    roundedBoxAnnotation: 2,
    circleAnnotation: 3,
    invertedCircleAnnotation: 4,
    parenthesisAnnotation: 5,
    periodAnnotation: 6,
    romanNumeralAnnotation: 7,
    diamondAnnotation: 8,
    invertedBoxAnnotation: 9,
    invertedRoundedBoxAnnotation: 10
  },
  kanaSpacing: {
    code: 25,
    exclusive: true,
    fullWidthKana: 0,
    proportionalKana: 1
  },
  ideographicSpacing: {
    code: 26,
    exclusive: true,
    fullWidthIdeographs: 0,
    proportionalIdeographs: 1,
    halfWidthIdeographs: 2
  },
  unicodeDecomposition: {
    code: 27,
    exclusive: false,
    canonicalComposition: 0,
    compatibilityComposition: 2,
    transcodingComposition: 4
  },
  rubyKana: {
    code: 28,
    exclusive: false,
    // noRubyKana: 0     # deprecated - use rubyKanaOff instead
    // rubyKana: 1     # deprecated - use rubyKanaOn instead
    rubyKana: 2
  },
  CJKSymbolAlternatives: {
    code: 29,
    exclusive: true,
    noCJKSymbolAlternatives: 0,
    CJKSymbolAltOne: 1,
    CJKSymbolAltTwo: 2,
    CJKSymbolAltThree: 3,
    CJKSymbolAltFour: 4,
    CJKSymbolAltFive: 5
  },
  ideographicAlternatives: {
    code: 30,
    exclusive: true,
    noIdeographicAlternatives: 0,
    ideographicAltOne: 1,
    ideographicAltTwo: 2,
    ideographicAltThree: 3,
    ideographicAltFour: 4,
    ideographicAltFive: 5
  },
  CJKVerticalRomanPlacement: {
    code: 31,
    exclusive: true,
    CJKVerticalRomanCentered: 0,
    CJKVerticalRomanHBaseline: 1
  },
  italicCJKRoman: {
    code: 32,
    exclusive: false,
    // noCJKItalicRoman: 0     # deprecated - use CJKItalicRomanOff instead
    // CJKItalicRoman: 1     # deprecated - use CJKItalicRomanOn instead
    CJKItalicRoman: 2
  },
  caseSensitiveLayout: {
    code: 33,
    exclusive: false,
    caseSensitiveLayout: 0,
    caseSensitiveSpacing: 2
  },
  alternateKana: {
    code: 34,
    exclusive: false,
    alternateHorizKana: 0,
    alternateVertKana: 2
  },
  stylisticAlternatives: {
    code: 35,
    exclusive: false,
    noStylisticAlternates: 0,
    stylisticAltOne: 2,
    stylisticAltTwo: 4,
    stylisticAltThree: 6,
    stylisticAltFour: 8,
    stylisticAltFive: 10,
    stylisticAltSix: 12,
    stylisticAltSeven: 14,
    stylisticAltEight: 16,
    stylisticAltNine: 18,
    stylisticAltTen: 20,
    stylisticAltEleven: 22,
    stylisticAltTwelve: 24,
    stylisticAltThirteen: 26,
    stylisticAltFourteen: 28,
    stylisticAltFifteen: 30,
    stylisticAltSixteen: 32,
    stylisticAltSeventeen: 34,
    stylisticAltEighteen: 36,
    stylisticAltNineteen: 38,
    stylisticAltTwenty: 40
  },
  contextualAlternates: {
    code: 36,
    exclusive: false,
    contextualAlternates: 0,
    swashAlternates: 2,
    contextualSwashAlternates: 4
  },
  lowerCase: {
    code: 37,
    exclusive: true,
    defaultLowerCase: 0,
    lowerCaseSmallCaps: 1,
    lowerCasePetiteCaps: 2
  },
  upperCase: {
    code: 38,
    exclusive: true,
    defaultUpperCase: 0,
    upperCaseSmallCaps: 1,
    upperCasePetiteCaps: 2
  },
  languageTag: { // indices into ltag table
    code: 39,
    exclusive: true
  },
  CJKRomanSpacing: {
    code: 103,
    exclusive: true,
    halfWidthCJKRoman: 0,
    proportionalCJKRoman: 1,
    defaultCJKRoman: 2,
    fullWidthCJKRoman: 3
  }
};

const feature = (name, selector) => [features[name].code, features[name][selector]];

const OTMapping = {
  rlig: feature('ligatures', 'requiredLigatures'),
  clig: feature('ligatures', 'contextualLigatures'),
  dlig: feature('ligatures', 'rareLigatures'),
  hlig: feature('ligatures', 'historicalLigatures'),
  liga: feature('ligatures', 'commonLigatures'),
  hist: feature('ligatures', 'historicalLigatures'), // ??

  smcp: feature('lowerCase', 'lowerCaseSmallCaps'),
  pcap: feature('lowerCase', 'lowerCasePetiteCaps'),

  frac: feature('fractions', 'diagonalFractions'),
  dnom: feature('fractions', 'diagonalFractions'), // ??
  numr: feature('fractions', 'diagonalFractions'), // ??
  afrc: feature('fractions', 'verticalFractions'),
  // aalt
  // abvf, abvm, abvs, akhn, blwf, blwm, blws, cfar, cjct, cpsp, falt, isol, jalt, ljmo, mset?
  // ltra, ltrm, nukt, pref, pres, pstf, psts, rand, rkrf, rphf, rtla, rtlm, size, tjmo, tnum?
  // unic, vatu, vhal, vjmo, vpal, vrt2
  // dist -> trak table?
  // kern, vkrn -> kern table
  // lfbd + opbd + rtbd -> opbd table?
  // mark, mkmk -> acnt table?
  // locl -> languageTag + ltag table

  case: feature('caseSensitiveLayout', 'caseSensitiveLayout'), // also caseSensitiveSpacing
  ccmp: feature('unicodeDecomposition', 'canonicalComposition'), // compatibilityComposition?
  cpct: feature('CJKVerticalRomanPlacement', 'CJKVerticalRomanCentered'), // guess..., probably not given below
  valt: feature('CJKVerticalRomanPlacement', 'CJKVerticalRomanCentered'),
  swsh: feature('contextualAlternates', 'swashAlternates'),
  cswh: feature('contextualAlternates', 'contextualSwashAlternates'),
  curs: feature('cursiveConnection', 'cursive'), // ??
  c2pc: feature('upperCase', 'upperCasePetiteCaps'),
  c2sc: feature('upperCase', 'upperCaseSmallCaps'),

  init: feature('smartSwash', 'wordInitialSwashes'), // ??
  fin2: feature('smartSwash', 'wordFinalSwashes'), // ??
  medi: feature('smartSwash', 'nonFinalSwashes'), // ??
  med2: feature('smartSwash', 'nonFinalSwashes'), // ??
  fin3: feature('smartSwash', 'wordFinalSwashes'), // ??
  fina: feature('smartSwash', 'wordFinalSwashes'), // ??

  pkna: feature('kanaSpacing', 'proportionalKana'),
  half: feature('textSpacing', 'halfWidthText'), // also HalfWidthCJKRoman, HalfWidthIdeographs?
  halt: feature('textSpacing', 'altHalfWidthText'),

  hkna: feature('alternateKana', 'alternateHorizKana'),
  vkna: feature('alternateKana', 'alternateVertKana'),
  // hngl: feature 'transliteration', 'hanjaToHangulSelector' # deprecated

  ital: feature('italicCJKRoman', 'CJKItalicRoman'),
  lnum: feature('numberCase', 'upperCaseNumbers'),
  onum: feature('numberCase', 'lowerCaseNumbers'),
  mgrk: feature('mathematicalExtras', 'mathematicalGreek'),

  // nalt: not enough info. what type of annotation?
  // ornm: ditto, which ornament style?

  calt: feature('contextualAlternates', 'contextualAlternates'), // or more?
  vrt2: feature('verticalSubstitution', 'substituteVerticalForms'), // oh... below?
  vert: feature('verticalSubstitution', 'substituteVerticalForms'),
  tnum: feature('numberSpacing', 'monospacedNumbers'),
  pnum: feature('numberSpacing', 'proportionalNumbers'),
  sups: feature('verticalPosition', 'superiors'),
  subs: feature('verticalPosition', 'inferiors'),
  ordn: feature('verticalPosition', 'ordinals'),
  pwid: feature('textSpacing', 'proportionalText'),
  hwid: feature('textSpacing', 'halfWidthText'),
  qwid: feature('textSpacing', 'quarterWidthText'), // also QuarterWidthNumbers?
  twid: feature('textSpacing', 'thirdWidthText'), // also ThirdWidthNumbers?
  fwid: feature('textSpacing', 'proportionalText'), //??
  palt: feature('textSpacing', 'altProportionalText'),
  trad: feature('characterShape', 'traditionalCharacters'),
  smpl: feature('characterShape', 'simplifiedCharacters'),
  jp78: feature('characterShape', 'JIS1978Characters'),
  jp83: feature('characterShape', 'JIS1983Characters'),
  jp90: feature('characterShape', 'JIS1990Characters'),
  jp04: feature('characterShape', 'JIS2004Characters'),
  expt: feature('characterShape', 'expertCharacters'),
  hojo: feature('characterShape', 'hojoCharacters'),
  nlck: feature('characterShape', 'NLCCharacters'),
  tnam: feature('characterShape', 'traditionalNamesCharacters'),
  ruby: feature('rubyKana', 'rubyKana'),
  titl: feature('styleOptions', 'titlingCaps'),
  zero: feature('typographicExtras', 'slashedZero'),

  ss01: feature('stylisticAlternatives', 'stylisticAltOne'),
  ss02: feature('stylisticAlternatives', 'stylisticAltTwo'),
  ss03: feature('stylisticAlternatives', 'stylisticAltThree'),
  ss04: feature('stylisticAlternatives', 'stylisticAltFour'),
  ss05: feature('stylisticAlternatives', 'stylisticAltFive'),
  ss06: feature('stylisticAlternatives', 'stylisticAltSix'),
  ss07: feature('stylisticAlternatives', 'stylisticAltSeven'),
  ss08: feature('stylisticAlternatives', 'stylisticAltEight'),
  ss09: feature('stylisticAlternatives', 'stylisticAltNine'),
  ss10: feature('stylisticAlternatives', 'stylisticAltTen'),
  ss11: feature('stylisticAlternatives', 'stylisticAltEleven'),
  ss12: feature('stylisticAlternatives', 'stylisticAltTwelve'),
  ss13: feature('stylisticAlternatives', 'stylisticAltThirteen'),
  ss14: feature('stylisticAlternatives', 'stylisticAltFourteen'),
  ss15: feature('stylisticAlternatives', 'stylisticAltFifteen'),
  ss16: feature('stylisticAlternatives', 'stylisticAltSixteen'),
  ss17: feature('stylisticAlternatives', 'stylisticAltSeventeen'),
  ss18: feature('stylisticAlternatives', 'stylisticAltEighteen'),
  ss19: feature('stylisticAlternatives', 'stylisticAltNineteen'),
  ss20: feature('stylisticAlternatives', 'stylisticAltTwenty')
};

  // salt: feature 'stylisticAlternatives', 'stylisticAltOne' # hmm, which one to choose

// Add cv01-cv99 features
for (let i = 1; i <= 99; i++) {
  OTMapping[`cv${`00${i}`.slice(-2)}`] = [features.characterAlternatives.code, i];
}

// create inverse mapping
let AATMapping = {};
for (let ot in OTMapping) {
  let aat = OTMapping[ot];
  if (AATMapping[aat[0]] == null) {
    AATMapping[aat[0]] = {};
  }

  AATMapping[aat[0]][aat[1]] = ot;
}

// Maps an array of OpenType features to AAT features
// in the form of {featureType:{featureSetting:true}}
function mapOTToAAT(features) {
  let res = {};
  for (let k in features) {
    let r;
    if (r = OTMapping[k]) {
      if (res[r[0]] == null) {
        res[r[0]] = {};
      }

      res[r[0]][r[1]] = features[k];
    }
  }

  return res;
}

// Maps strings in a [featureType, featureSetting]
// to their equivalent number codes
function mapFeatureStrings(f) {
  let [type, setting] = f;
  if (isNaN(type)) {
    var typeCode = features[type] && features[type].code;
  } else {
    var typeCode = type;
  }

  if (isNaN(setting)) {
    var settingCode = features[type] && features[type][setting];
  } else {
    var settingCode = setting;
  }

  return [typeCode, settingCode];
}

// Maps AAT features to an array of OpenType features
// Supports both arrays in the form of [[featureType, featureSetting]]
// and objects in the form of {featureType:{featureSetting:true}}
// featureTypes and featureSettings can be either strings or number codes
function mapAATToOT(features) {
  let res = {};
  if (Array.isArray(features)) {
    for (let k = 0; k < features.length; k++) {
      let r;
      let f = mapFeatureStrings(features[k]);
      if (r = AATMapping[f[0]] && AATMapping[f[0]][f[1]]) {
        res[r] = true;
      }
    }

  } else if (typeof features === 'object') {
    for (let type in features) {
      let feature = features[type];
      for (let setting in feature) {
        let r;
        let f = mapFeatureStrings([type, setting]);
        if (feature[setting] && (r = AATMapping[f[0]] && AATMapping[f[0]][f[1]])) {
          res[r] = true;
        }
      }
    }
  }

  return Object.keys(res);
}


/***/ }),

/***/ "./src/modules/fontkit/src/aat/AATLayoutEngine.js":
/*!********************************************************!*\
  !*** ./src/modules/fontkit/src/aat/AATLayoutEngine.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AATLayoutEngine)
/* harmony export */ });
/* harmony import */ var _AATFeatureMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AATFeatureMap */ "./src/modules/fontkit/src/aat/AATFeatureMap.js");
/* harmony import */ var _layout_Script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Script */ "./src/modules/fontkit/src/layout/Script.js");
/* harmony import */ var _AATMorxProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AATMorxProcessor */ "./src/modules/fontkit/src/aat/AATMorxProcessor.js");




class AATLayoutEngine {
  constructor(font) {
    this.font = font;
    this.morxProcessor = new _AATMorxProcessor__WEBPACK_IMPORTED_MODULE_2__["default"](font);
    this.fallbackPosition = false;
  }

  substitute(glyphRun) {
    // AAT expects the glyphs to be in visual order prior to morx processing,
    // so reverse the glyphs if the script is right-to-left.
    if (glyphRun.direction === 'rtl') {
      glyphRun.glyphs.reverse();
    }

    this.morxProcessor.process(glyphRun.glyphs, _AATFeatureMap__WEBPACK_IMPORTED_MODULE_0__.mapOTToAAT(glyphRun.features));
  }

  getAvailableFeatures(script, language) {
    return _AATFeatureMap__WEBPACK_IMPORTED_MODULE_0__.mapAATToOT(this.morxProcessor.getSupportedFeatures());
  }

  stringsForGlyph(gid) {
    let glyphStrings = this.morxProcessor.generateInputs(gid);
    let result = new Set;

    for (let glyphs of glyphStrings) {
      this._addStrings(glyphs, 0, result, '');
    }

    return result;
  }

  _addStrings(glyphs, index, strings, string) {
    let codePoints = this.font._cmapProcessor.codePointsForGlyph(glyphs[index]);

    for (let codePoint of codePoints) {
      let s = string + String.fromCodePoint(codePoint);
      if (index < glyphs.length - 1) {
        this._addStrings(glyphs, index + 1, strings, s);
      } else {
        strings.add(s);
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/aat/AATLookupTable.js":
/*!*******************************************************!*\
  !*** ./src/modules/fontkit/src/aat/AATLookupTable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AATLookupTable)
/* harmony export */ });
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators */ "./src/modules/fontkit/src/decorators.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/modules/fontkit/src/utils.js");



class AATLookupTable {
	constructor(table) {
		this.table = table;
	}

	lookup(glyph) {
		switch (this.table.version) {
			case 0: // simple array format
				return this.table.values.getItem(glyph);

			case 2: // segment format
			case 4: {
				let min = 0;
				let max = this.table.binarySearchHeader.nUnits - 1;

				while (min <= max) {
					var mid = (min + max) >> 1;
					var seg = this.table.segments[mid];

					// special end of search value
					if (seg.firstGlyph === 0xffff) {
						return null;
					}

					if (glyph < seg.firstGlyph) {
						max = mid - 1;
					} else if (glyph > seg.lastGlyph) {
						min = mid + 1;
					} else {
						if (this.table.version === 2) {
							return seg.value;
						} else {
							return seg.values[glyph - seg.firstGlyph];
						}
					}
				}

				return null;
			}

			case 6: {
				// lookup single
				let min = 0;
				let max = this.table.binarySearchHeader.nUnits - 1;

				while (min <= max) {
					var mid = (min + max) >> 1;
					var seg = this.table.segments[mid];

					// special end of search value
					if (seg.glyph === 0xffff) {
						return null;
					}

					if (glyph < seg.glyph) {
						max = mid - 1;
					} else if (glyph > seg.glyph) {
						min = mid + 1;
					} else {
						return seg.value;
					}
				}

				return null;
			}

			case 8: // lookup trimmed
				return this.table.values[glyph - this.table.firstGlyph];

			default:
				throw new Error(`Unknown lookup table format: ${this.table.version}`);
		}
	}

	////@cache
	glyphsForValue(classValue) {
		let res = [];

		switch (this.table.version) {
			case 2: // segment format
			case 4: {
				for (let segment of this.table.segments) {
					if (this.table.version === 2 && segment.value === classValue) {
						res.push(...(0,_utils__WEBPACK_IMPORTED_MODULE_1__.range)(segment.firstGlyph, segment.lastGlyph + 1));
					} else {
						for (let index = 0; index < segment.values.length; index++) {
							if (segment.values[index] === classValue) {
								res.push(segment.firstGlyph + index);
							}
						}
					}
				}

				break;
			}

			case 6: {
				// lookup single
				for (let segment of this.table.segments) {
					if (segment.value === classValue) {
						res.push(segment.glyph);
					}
				}

				break;
			}

			case 8: {
				// lookup trimmed
				for (let i = 0; i < this.table.values.length; i++) {
					if (this.table.values[i] === classValue) {
						res.push(this.table.firstGlyph + i);
					}
				}

				break;
			}

			default:
				throw new Error(`Unknown lookup table format: ${this.table.version}`);
		}

		return res;
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/aat/AATMorxProcessor.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/aat/AATMorxProcessor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AATMorxProcessor)
/* harmony export */ });
/* harmony import */ var _AATStateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AATStateMachine */ "./src/modules/fontkit/src/aat/AATStateMachine.js");
/* harmony import */ var _AATLookupTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AATLookupTable */ "./src/modules/fontkit/src/aat/AATLookupTable.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./src/modules/fontkit/src/decorators.js");




// indic replacement flags
const MARK_FIRST = 0x8000;
const MARK_LAST = 0x2000;
const VERB = 0x000f;

// contextual substitution and glyph insertion flag
const SET_MARK = 0x8000;

// ligature entry flags
const SET_COMPONENT = 0x8000;
const PERFORM_ACTION = 0x2000;

// ligature action masks
const LAST_MASK = 0x80000000;
const STORE_MASK = 0x40000000;
const OFFSET_MASK = 0x3fffffff;

const VERTICAL_ONLY = 0x800000;
const REVERSE_DIRECTION = 0x400000;
const HORIZONTAL_AND_VERTICAL = 0x200000;

// glyph insertion flags
const CURRENT_IS_KASHIDA_LIKE = 0x2000;
const MARKED_IS_KASHIDA_LIKE = 0x1000;
const CURRENT_INSERT_BEFORE = 0x0800;
const MARKED_INSERT_BEFORE = 0x0400;
const CURRENT_INSERT_COUNT = 0x03e0;
const MARKED_INSERT_COUNT = 0x001f;

class AATMorxProcessor {
	constructor(font) {
		this.processIndicRearragement = this.processIndicRearragement.bind(this);
		this.processContextualSubstitution = this.processContextualSubstitution.bind(this);
		this.processLigature = this.processLigature.bind(this);
		this.processNoncontextualSubstitutions = this.processNoncontextualSubstitutions.bind(this);
		this.processGlyphInsertion = this.processGlyphInsertion.bind(this);
		this.font = font;
		this.morx = font.morx;
		this.inputCache = null;
	}

	// Processes an array of glyphs and applies the specified features
	// Features should be in the form of {featureType:{featureSetting:boolean}}
	process(glyphs, features = {}) {
		for (let chain of this.morx.chains) {
			let flags = chain.defaultFlags;

			// enable/disable the requested features
			for (let feature of chain.features) {
				let f;
				if ((f = features[feature.featureType])) {
					if (f[feature.featureSetting]) {
						flags &= feature.disableFlags;
						flags |= feature.enableFlags;
					} else if (f[feature.featureSetting] === false) {
						flags |= ~feature.disableFlags;
						flags &= ~feature.enableFlags;
					}
				}
			}

			for (let subtable of chain.subtables) {
				if (subtable.subFeatureFlags & flags) {
					this.processSubtable(subtable, glyphs);
				}
			}
		}

		// remove deleted glyphs
		let index = glyphs.length - 1;
		while (index >= 0) {
			if (glyphs[index].id === 0xffff) {
				glyphs.splice(index, 1);
			}

			index--;
		}

		return glyphs;
	}

	processSubtable(subtable, glyphs) {
		this.subtable = subtable;
		this.glyphs = glyphs;
		if (this.subtable.type === 4) {
			this.processNoncontextualSubstitutions(this.subtable, this.glyphs);
			return;
		}

		this.ligatureStack = [];
		this.markedGlyph = null;
		this.firstGlyph = null;
		this.lastGlyph = null;
		this.markedIndex = null;

		let stateMachine = this.getStateMachine(subtable);
		let process = this.getProcessor();

		let reverse = !!(this.subtable.coverage & REVERSE_DIRECTION);
		return stateMachine.process(this.glyphs, reverse, process);
	}

	////@cache
	getStateMachine(subtable) {
		return new _AATStateMachine__WEBPACK_IMPORTED_MODULE_0__["default"](subtable.table.stateTable);
	}

	getProcessor() {
		switch (this.subtable.type) {
			case 0:
				return this.processIndicRearragement;
			case 1:
				return this.processContextualSubstitution;
			case 2:
				return this.processLigature;
			case 4:
				return this.processNoncontextualSubstitutions;
			case 5:
				return this.processGlyphInsertion;
			default:
				throw new Error(`Invalid morx subtable type: ${this.subtable.type}`);
		}
	}

	processIndicRearragement(glyph, entry, index) {
		if (entry.flags & MARK_FIRST) {
			this.firstGlyph = index;
		}

		if (entry.flags & MARK_LAST) {
			this.lastGlyph = index;
		}

		reorderGlyphs(this.glyphs, entry.flags & VERB, this.firstGlyph, this.lastGlyph);
	}

	processContextualSubstitution(glyph, entry, index) {
		let subsitutions = this.subtable.table.substitutionTable.items;
		if (entry.markIndex !== 0xffff) {
			let lookup = subsitutions.getItem(entry.markIndex);
			let lookupTable = new _AATLookupTable__WEBPACK_IMPORTED_MODULE_1__["default"](lookup);
			glyph = this.glyphs[this.markedGlyph];
			var gid = lookupTable.lookup(glyph.id);
			if (gid) {
				this.glyphs[this.markedGlyph] = this.font.getGlyph(gid, glyph.codePoints);
			}
		}

		if (entry.currentIndex !== 0xffff) {
			let lookup = subsitutions.getItem(entry.currentIndex);
			let lookupTable = new _AATLookupTable__WEBPACK_IMPORTED_MODULE_1__["default"](lookup);
			glyph = this.glyphs[index];
			var gid = lookupTable.lookup(glyph.id);
			if (gid) {
				this.glyphs[index] = this.font.getGlyph(gid, glyph.codePoints);
			}
		}

		if (entry.flags & SET_MARK) {
			this.markedGlyph = index;
		}
	}

	processLigature(glyph, entry, index) {
		if (entry.flags & SET_COMPONENT) {
			this.ligatureStack.push(index);
		}

		if (entry.flags & PERFORM_ACTION) {
			let actions = this.subtable.table.ligatureActions;
			let components = this.subtable.table.components;
			let ligatureList = this.subtable.table.ligatureList;

			let actionIndex = entry.action;
			let last = false;
			let ligatureIndex = 0;
			let codePoints = [];
			let ligatureGlyphs = [];

			while (!last) {
				let componentGlyph = this.ligatureStack.pop();
				codePoints.unshift(...this.glyphs[componentGlyph].codePoints);

				let action = actions.getItem(actionIndex++);
				last = !!(action & LAST_MASK);
				let store = !!(action & STORE_MASK);
				let offset = ((action & OFFSET_MASK) << 2) >> 2; // sign extend 30 to 32 bits
				offset += this.glyphs[componentGlyph].id;

				let component = components.getItem(offset);
				ligatureIndex += component;

				if (last || store) {
					let ligatureEntry = ligatureList.getItem(ligatureIndex);
					this.glyphs[componentGlyph] = this.font.getGlyph(ligatureEntry, codePoints);
					ligatureGlyphs.push(componentGlyph);
					ligatureIndex = 0;
					codePoints = [];
				} else {
					this.glyphs[componentGlyph] = this.font.getGlyph(0xffff);
				}
			}

			// Put ligature glyph indexes back on the stack
			this.ligatureStack.push(...ligatureGlyphs);
		}
	}

	processNoncontextualSubstitutions(subtable, glyphs, index) {
		let lookupTable = new _AATLookupTable__WEBPACK_IMPORTED_MODULE_1__["default"](subtable.table.lookupTable);

		for (index = 0; index < glyphs.length; index++) {
			let glyph = glyphs[index];
			if (glyph.id !== 0xffff) {
				let gid = lookupTable.lookup(glyph.id);
				if (gid) {
					// 0 means do nothing
					glyphs[index] = this.font.getGlyph(gid, glyph.codePoints);
				}
			}
		}
	}

	_insertGlyphs(glyphIndex, insertionActionIndex, count, isBefore) {
		let insertions = [];
		while (count--) {
			let gid = this.subtable.table.insertionActions.getItem(insertionActionIndex++);
			insertions.push(this.font.getGlyph(gid));
		}

		if (!isBefore) {
			glyphIndex++;
		}

		this.glyphs.splice(glyphIndex, 0, ...insertions);
	}

	processGlyphInsertion(glyph, entry, index) {
		if (entry.flags & SET_MARK) {
			this.markedIndex = index;
		}

		if (entry.markedInsertIndex !== 0xffff) {
			let count = (entry.flags & MARKED_INSERT_COUNT) >>> 5;
			let isBefore = !!(entry.flags & MARKED_INSERT_BEFORE);
			this._insertGlyphs(this.markedIndex, entry.markedInsertIndex, count, isBefore);
		}

		if (entry.currentInsertIndex !== 0xffff) {
			let count = (entry.flags & CURRENT_INSERT_COUNT) >>> 5;
			let isBefore = !!(entry.flags & CURRENT_INSERT_BEFORE);
			this._insertGlyphs(index, entry.currentInsertIndex, count, isBefore);
		}
	}

	getSupportedFeatures() {
		let features = [];
		for (let chain of this.morx.chains) {
			for (let feature of chain.features) {
				features.push([feature.featureType, feature.featureSetting]);
			}
		}

		return features;
	}

	generateInputs(gid) {
		if (!this.inputCache) {
			this.generateInputCache();
		}

		return this.inputCache[gid] || [];
	}

	generateInputCache() {
		this.inputCache = {};

		for (let chain of this.morx.chains) {
			let flags = chain.defaultFlags;

			for (let subtable of chain.subtables) {
				if (subtable.subFeatureFlags & flags) {
					this.generateInputsForSubtable(subtable);
				}
			}
		}
	}

	generateInputsForSubtable(subtable) {
		// Currently, only supporting ligature subtables.
		if (subtable.type !== 2) {
			return;
		}

		let reverse = !!(subtable.coverage & REVERSE_DIRECTION);
		if (reverse) {
			throw new Error('Reverse subtable, not supported.');
		}

		this.subtable = subtable;
		this.ligatureStack = [];

		let stateMachine = this.getStateMachine(subtable);
		let process = this.getProcessor();

		let input = [];
		let stack = [];
		this.glyphs = [];

		stateMachine.traverse({
			enter: (glyph, entry) => {
				let glyphs = this.glyphs;
				stack.push({
					glyphs: glyphs.slice(),
					ligatureStack: this.ligatureStack.slice()
				});

				// Add glyph to input and glyphs to process.
				let g = this.font.getGlyph(glyph);
				input.push(g);
				glyphs.push(input[input.length - 1]);

				// Process ligature substitution
				process(glyphs[glyphs.length - 1], entry, glyphs.length - 1);

				// Add input to result if only one matching (non-deleted) glyph remains.
				let count = 0;
				let found = 0;
				for (let i = 0; i < glyphs.length && count <= 1; i++) {
					if (glyphs[i].id !== 0xffff) {
						count++;
						found = glyphs[i].id;
					}
				}

				if (count === 1) {
					let result = input.map(g => g.id);
					let cache = this.inputCache[found];
					if (cache) {
						cache.push(result);
					} else {
						this.inputCache[found] = [result];
					}
				}
			},

			exit: () => {
				({ glyphs: this.glyphs, ligatureStack: this.ligatureStack } = stack.pop());
				input.pop();
			}
		});
	}
}

// swaps the glyphs in rangeA with those in rangeB
// reverse the glyphs inside those ranges if specified
// ranges are in [offset, length] format
function swap(glyphs, rangeA, rangeB, reverseA = false, reverseB = false) {
	let end = glyphs.splice(rangeB[0] - (rangeB[1] - 1), rangeB[1]);
	if (reverseB) {
		end.reverse();
	}

	let start = glyphs.splice(rangeA[0], rangeA[1], ...end);
	if (reverseA) {
		start.reverse();
	}

	glyphs.splice(rangeB[0] - (rangeA[1] - 1), 0, ...start);
	return glyphs;
}

function reorderGlyphs(glyphs, verb, firstGlyph, lastGlyph) {
	let length = lastGlyph - firstGlyph + 1;
	switch (verb) {
		case 0: // no change
			return glyphs;

		case 1: // Ax => xA
			return swap(glyphs, [firstGlyph, 1], [lastGlyph, 0]);

		case 2: // xD => Dx
			return swap(glyphs, [firstGlyph, 0], [lastGlyph, 1]);

		case 3: // AxD => DxA
			return swap(glyphs, [firstGlyph, 1], [lastGlyph, 1]);

		case 4: // ABx => xAB
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 0]);

		case 5: // ABx => xBA
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 0], true, false);

		case 6: // xCD => CDx
			return swap(glyphs, [firstGlyph, 0], [lastGlyph, 2]);

		case 7: // xCD => DCx
			return swap(glyphs, [firstGlyph, 0], [lastGlyph, 2], false, true);

		case 8: // AxCD => CDxA
			return swap(glyphs, [firstGlyph, 1], [lastGlyph, 2]);

		case 9: // AxCD => DCxA
			return swap(glyphs, [firstGlyph, 1], [lastGlyph, 2], false, true);

		case 10: // ABxD => DxAB
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 1]);

		case 11: // ABxD => DxBA
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 1], true, false);

		case 12: // ABxCD => CDxAB
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 2]);

		case 13: // ABxCD => CDxBA
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 2], true, false);

		case 14: // ABxCD => DCxAB
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 2], false, true);

		case 15: // ABxCD => DCxBA
			return swap(glyphs, [firstGlyph, 2], [lastGlyph, 2], true, true);

		default:
			throw new Error(`Unknown verb: ${verb}`);
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/aat/AATStateMachine.js":
/*!********************************************************!*\
  !*** ./src/modules/fontkit/src/aat/AATStateMachine.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AATStateMachine)
/* harmony export */ });
/* harmony import */ var _AATLookupTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AATLookupTable */ "./src/modules/fontkit/src/aat/AATLookupTable.js");


const START_OF_TEXT_STATE = 0;
const START_OF_LINE_STATE = 1;

const END_OF_TEXT_CLASS = 0;
const OUT_OF_BOUNDS_CLASS = 1;
const DELETED_GLYPH_CLASS = 2;
const END_OF_LINE_CLASS = 3;

const DONT_ADVANCE = 0x4000;

class AATStateMachine {
  constructor(stateTable) {
    this.stateTable = stateTable;
    this.lookupTable = new _AATLookupTable__WEBPACK_IMPORTED_MODULE_0__["default"](stateTable.classTable);
  }

  process(glyphs, reverse, processEntry) {
    let currentState = START_OF_TEXT_STATE; // START_OF_LINE_STATE is used for kashida glyph insertions sometimes I think?
    let index = reverse ? glyphs.length - 1 : 0;
    let dir = reverse ? -1 : 1;

    while ((dir === 1 && index <= glyphs.length) || (dir === -1 && index >= -1)) {
      let glyph = null;
      let classCode = OUT_OF_BOUNDS_CLASS;
      let shouldAdvance = true;

      if (index === glyphs.length || index === -1) {
        classCode = END_OF_TEXT_CLASS;
      } else {
        glyph = glyphs[index];
        if (glyph.id === 0xffff) { // deleted glyph
          classCode = DELETED_GLYPH_CLASS;
        } else {
          classCode = this.lookupTable.lookup(glyph.id);
          if (classCode == null) {
            classCode = OUT_OF_BOUNDS_CLASS;
          }
        }
      }

      let row = this.stateTable.stateArray.getItem(currentState);
      let entryIndex = row[classCode];
      let entry = this.stateTable.entryTable.getItem(entryIndex);

      if (classCode !== END_OF_TEXT_CLASS && classCode !==  DELETED_GLYPH_CLASS) {
        processEntry(glyph, entry, index);
        shouldAdvance = !(entry.flags & DONT_ADVANCE);
      }

      currentState = entry.newState;
      if (shouldAdvance) {
        index += dir;
      }
    }

    return glyphs;
  }

  /**
   * Performs a depth-first traversal of the glyph strings
   * represented by the state machine.
   */
  traverse(opts, state = 0, visited = new Set) {
    if (visited.has(state)) {
      return;
    }

    visited.add(state);

    let {nClasses, stateArray, entryTable} = this.stateTable;
    let row = stateArray.getItem(state);

    // Skip predefined classes
    for (let classCode = 4; classCode < nClasses; classCode++) {
      let entryIndex = row[classCode];
      let entry = entryTable.getItem(entryIndex);

      // Try all glyphs in the class
      for (let glyph of this.lookupTable.glyphsForValue(classCode)) {
        if (opts.enter) {
          opts.enter(glyph, entry);
        }

        if (entry.newState !== 0) {
          this.traverse(opts, entry.newState, visited);
        }

        if (opts.exit) {
          opts.exit(glyph, entry);
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/base.js":
/*!*****************************************!*\
  !*** ./src/modules/fontkit/src/base.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   defaultLanguage: () => (/* binding */ defaultLanguage),
/* harmony export */   logErrors: () => (/* binding */ logErrors),
/* harmony export */   registerFormat: () => (/* binding */ registerFormat),
/* harmony export */   setDefaultLanguage: () => (/* binding */ setDefaultLanguage)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let logErrors = false;

let formats = [];
function registerFormat(format) {
  formats.push(format);
};

function create(buffer, postscriptName) {
  for (let i = 0; i < formats.length; i++) {
    let format = formats[i];
    if (format.probe(buffer)) {
      let font = new format(new restructure__WEBPACK_IMPORTED_MODULE_0__.DecodeStream(buffer));
      if (postscriptName) {
        return font.getFont(postscriptName);
      }

      return font;
    }
  }

  throw new Error('Unknown font format');
};

let defaultLanguage = 'en';
function setDefaultLanguage(lang = 'en') {
  defaultLanguage = lang;
};


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFCharsets.js":
/*!****************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFCharsets.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertCharset: () => (/* binding */ ExpertCharset),
/* harmony export */   ExpertSubsetCharset: () => (/* binding */ ExpertSubsetCharset),
/* harmony export */   ISOAdobeCharset: () => (/* binding */ ISOAdobeCharset)
/* harmony export */ });
let ISOAdobeCharset = [
  '.notdef', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar',
  'percent', 'ampersand', 'quoteright', 'parenleft', 'parenright',
  'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero',
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question',
  'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore',
  'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'braceleft', 'bar', 'braceright', 'asciitilde', 'exclamdown', 'cent',
  'sterling', 'fraction', 'yen', 'florin', 'section', 'currency',
  'quotesingle', 'quotedblleft', 'guillemotleft', 'guilsinglleft',
  'guilsinglright', 'fi', 'fl', 'endash', 'dagger', 'daggerdbl',
  'periodcentered', 'paragraph', 'bullet', 'quotesinglbase',
  'quotedblbase', 'quotedblright', 'guillemotright', 'ellipsis',
  'perthousand', 'questiondown', 'grave', 'acute', 'circumflex', 'tilde',
  'macron', 'breve', 'dotaccent', 'dieresis', 'ring', 'cedilla',
  'hungarumlaut', 'ogonek', 'caron', 'emdash', 'AE', 'ordfeminine',
  'Lslash', 'Oslash', 'OE', 'ordmasculine', 'ae', 'dotlessi', 'lslash',
  'oslash', 'oe', 'germandbls', 'onesuperior', 'logicalnot', 'mu',
  'trademark', 'Eth', 'onehalf', 'plusminus', 'Thorn', 'onequarter',
  'divide', 'brokenbar', 'degree', 'thorn', 'threequarters', 'twosuperior',
  'registered', 'minus', 'eth', 'multiply', 'threesuperior', 'copyright',
  'Aacute', 'Acircumflex', 'Adieresis', 'Agrave', 'Aring', 'Atilde',
  'Ccedilla', 'Eacute', 'Ecircumflex', 'Edieresis', 'Egrave', 'Iacute',
  'Icircumflex', 'Idieresis', 'Igrave', 'Ntilde', 'Oacute', 'Ocircumflex',
  'Odieresis', 'Ograve', 'Otilde', 'Scaron', 'Uacute', 'Ucircumflex',
  'Udieresis', 'Ugrave', 'Yacute', 'Ydieresis', 'Zcaron', 'aacute',
  'acircumflex', 'adieresis', 'agrave', 'aring', 'atilde', 'ccedilla',
  'eacute', 'ecircumflex', 'edieresis', 'egrave', 'iacute', 'icircumflex',
  'idieresis', 'igrave', 'ntilde', 'oacute', 'ocircumflex', 'odieresis',
  'ograve', 'otilde', 'scaron', 'uacute', 'ucircumflex', 'udieresis',
  'ugrave', 'yacute', 'ydieresis', 'zcaron'
];

let ExpertCharset = [
  '.notdef', 'space', 'exclamsmall', 'Hungarumlautsmall', 'dollaroldstyle',
  'dollarsuperior', 'ampersandsmall', 'Acutesmall', 'parenleftsuperior',
  'parenrightsuperior', 'twodotenleader', 'onedotenleader', 'comma',
  'hyphen', 'period', 'fraction', 'zerooldstyle', 'oneoldstyle',
  'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle',
  'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle',
  'colon', 'semicolon', 'commasuperior', 'threequartersemdash',
  'periodsuperior', 'questionsmall', 'asuperior', 'bsuperior',
  'centsuperior', 'dsuperior', 'esuperior', 'isuperior', 'lsuperior',
  'msuperior', 'nsuperior', 'osuperior', 'rsuperior', 'ssuperior',
  'tsuperior', 'ff', 'fi', 'fl', 'ffi', 'ffl', 'parenleftinferior',
  'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall',
  'Asmall', 'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall',
  'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall', 'Msmall', 'Nsmall',
  'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall',
  'Vsmall', 'Wsmall', 'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary',
  'onefitted', 'rupiah', 'Tildesmall', 'exclamdownsmall', 'centoldstyle',
  'Lslashsmall', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall',
  'Brevesmall', 'Caronsmall', 'Dotaccentsmall', 'Macronsmall',
  'figuredash', 'hypheninferior', 'Ogoneksmall', 'Ringsmall',
  'Cedillasmall', 'onequarter', 'onehalf', 'threequarters',
  'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths',
  'seveneighths', 'onethird', 'twothirds', 'zerosuperior', 'onesuperior',
  'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior',
  'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior',
  'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior',
  'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior',
  'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior',
  'periodinferior', 'commainferior', 'Agravesmall', 'Aacutesmall',
  'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall',
  'AEsmall', 'Ccedillasmall', 'Egravesmall', 'Eacutesmall',
  'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall',
  'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall',
  'Ogravesmall', 'Oacutesmall', 'Ocircumflexsmall', 'Otildesmall',
  'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall',
  'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall',
  'Ydieresissmall'
];

let ExpertSubsetCharset = [
  '.notdef', 'space', 'dollaroldstyle', 'dollarsuperior',
  'parenleftsuperior', 'parenrightsuperior', 'twodotenleader',
  'onedotenleader', 'comma', 'hyphen', 'period', 'fraction',
  'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle',
  'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle',
  'eightoldstyle', 'nineoldstyle', 'colon', 'semicolon', 'commasuperior',
  'threequartersemdash', 'periodsuperior', 'asuperior', 'bsuperior',
  'centsuperior', 'dsuperior', 'esuperior', 'isuperior', 'lsuperior',
  'msuperior', 'nsuperior', 'osuperior', 'rsuperior', 'ssuperior',
  'tsuperior', 'ff', 'fi', 'fl', 'ffi', 'ffl', 'parenleftinferior',
  'parenrightinferior', 'hyphensuperior', 'colonmonetary', 'onefitted',
  'rupiah', 'centoldstyle', 'figuredash', 'hypheninferior', 'onequarter',
  'onehalf', 'threequarters', 'oneeighth', 'threeeighths', 'fiveeighths',
  'seveneighths', 'onethird', 'twothirds', 'zerosuperior', 'onesuperior',
  'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior',
  'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior',
  'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior',
  'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior',
  'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior',
  'periodinferior', 'commainferior'
];


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFDict.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFDict.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFDict)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _CFFOperand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CFFOperand */ "./src/modules/fontkit/src/cff/CFFOperand.js");





class CFFDict {
  constructor(ops = []) {
    this.ops = ops;
    this.fields = {};
    for (let field of ops) {
      let key = Array.isArray(field[0]) ? field[0][0] << 8 | field[0][1] : field[0];
      this.fields[key] = field;
    }
  }

  decodeOperands(type, stream, ret, operands) {
    if (Array.isArray(type)) {
      return operands.map((op, i) => this.decodeOperands(type[i], stream, ret, [op]));
    } else if (type.decode != null) {
      return type.decode(stream, ret, operands);
    } else {
      switch (type) {
        case 'number':
        case 'offset':
        case 'sid':
          return operands[0];
        case 'boolean':
          return !!operands[0];
        default:
          return operands;
      }
    }
  }

  encodeOperands(type, stream, ctx, operands) {
    if (Array.isArray(type)) {
      return operands.map((op, i) => this.encodeOperands(type[i], stream, ctx, op)[0]);
    } else if (type.encode != null) {
      return type.encode(stream, operands, ctx);
    } else if (typeof operands === 'number') {
      return [operands];
    } else if (typeof operands === 'boolean') {
      return [+operands];
    } else if (Array.isArray(operands)) {
      return operands;
    } else {
      return [operands];
    }
  }

  decode(stream, parent) {
    let end = stream.pos + parent.length;
    let ret = {};
    let operands = [];

    // define hidden properties
    Object.defineProperties(ret, {
      parent:         { value: parent },
      _startOffset:   { value: stream.pos }
    });

    // fill in defaults
    for (let key in this.fields) {
      let field = this.fields[key];
      ret[field[1]] = field[3];
    }

    while (stream.pos < end) {
      let b = stream.readUInt8();
      if (b < 28) {
        if (b === 12) {
          b = (b << 8) | stream.readUInt8();
        }

        let field = this.fields[b];
        if (!field) {
          throw new Error(`Unknown operator ${b}`);
        }

        let val = this.decodeOperands(field[2], stream, ret, operands);
        if (val != null) {
          if (val instanceof restructure__WEBPACK_IMPORTED_MODULE_1__.PropertyDescriptor) {
            Object.defineProperty(ret, field[1], val);
          } else {
            ret[field[1]] = val;
          }
        }

        operands = [];
      } else {
        operands.push(_CFFOperand__WEBPACK_IMPORTED_MODULE_2__["default"].decode(stream, b));
      }
    }

    return ret;
  }

  size(dict, parent, includePointers = true) {
    let ctx = {
      parent,
      val: dict,
      pointerSize: 0,
      startOffset: parent.startOffset || 0
    };

    let len = 0;

    for (let k in this.fields) {
      let field = this.fields[k];
      let val = dict[field[1]];
      if (val == null || fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(val, field[3])) {
        continue;
      }

      let operands = this.encodeOperands(field[2], null, ctx, val);
      for (let op of operands) {
        len += _CFFOperand__WEBPACK_IMPORTED_MODULE_2__["default"].size(op);
      }

      let key = Array.isArray(field[0]) ? field[0] : [field[0]];
      len += key.length;
    }

    if (includePointers) {
      len += ctx.pointerSize;
    }

    return len;
  }

  encode(stream, dict, parent) {
    let ctx = {
      pointers: [],
      startOffset: stream.pos,
      parent,
      val: dict,
      pointerSize: 0
    };

    ctx.pointerOffset = stream.pos + this.size(dict, ctx, false);

    for (let field of this.ops) {
      let val = dict[field[1]];
      if (val == null || fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(val, field[3])) {
        continue;
      }

      let operands = this.encodeOperands(field[2], stream, ctx, val);
      for (let op of operands) {
        _CFFOperand__WEBPACK_IMPORTED_MODULE_2__["default"].encode(stream, op);
      }

      let key = Array.isArray(field[0]) ? field[0] : [field[0]];
      for (let op of key) {
        stream.writeUInt8(op);
      }
    }

    let i = 0;
    while (i < ctx.pointers.length) {
      let ptr = ctx.pointers[i++];
      ptr.type.encode(stream, ptr.val, ptr.parent);
    }

    return;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFEncodings.js":
/*!*****************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFEncodings.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpertEncoding: () => (/* binding */ ExpertEncoding),
/* harmony export */   StandardEncoding: () => (/* binding */ StandardEncoding)
/* harmony export */ });
let StandardEncoding = [
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright',
  'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two',
  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater',
  'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore',
  'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  'exclamdown', 'cent', 'sterling', 'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle',
  'quotedblleft', 'guillemotleft', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', '', 'endash', 'dagger',
  'daggerdbl', 'periodcentered', '', 'paragraph', 'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright',
  'guillemotright', 'ellipsis', 'perthousand', '', 'questiondown', '', 'grave', 'acute', 'circumflex', 'tilde',
  'macron', 'breve', 'dotaccent', 'dieresis', '', 'ring', 'cedilla', '', 'hungarumlaut', 'ogonek', 'caron',
  'emdash', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'AE', '', 'ordfeminine', '', '', '',
  '', 'Lslash', 'Oslash', 'OE', 'ordmasculine', '', '', '', '', '', 'ae', '', '', '', 'dotlessi', '', '',
  'lslash', 'oslash', 'oe', 'germandbls'
];

let ExpertEncoding = [
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', 'space', 'exclamsmall', 'Hungarumlautsmall', '', 'dollaroldstyle', 'dollarsuperior',
  'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', 'twodotenleader', 'onedotenleader',
  'comma', 'hyphen', 'period', 'fraction', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle',
  'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'colon',
  'semicolon', 'commasuperior', 'threequartersemdash', 'periodsuperior', 'questionsmall', '', 'asuperior',
  'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', '', '', 'isuperior', '', '', 'lsuperior', 'msuperior',
  'nsuperior', 'osuperior', '', '', 'rsuperior', 'ssuperior', 'tsuperior', '', 'ff', 'fi', 'fl', 'ffi', 'ffl',
  'parenleftinferior', '', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall',
  'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall',
  'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall',
  'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  'exclamdownsmall', 'centoldstyle', 'Lslashsmall', '', '', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall',
  'Brevesmall', 'Caronsmall', '', 'Dotaccentsmall', '', '', 'Macronsmall', '', '', 'figuredash', 'hypheninferior',
  '', '', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall', '', '', '', 'onequarter', 'onehalf', 'threequarters',
  'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', '',
  '', 'zerosuperior', 'onesuperior', 'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior',
  'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior', 'zeroinferior', 'oneinferior', 'twoinferior',
  'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior', 'eightinferior',
  'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior', 'commainferior', 'Agravesmall',
  'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall', 'AEsmall', 'Ccedillasmall',
  'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall',
  'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall', 'Oacutesmall',
  'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall',
  'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall'
];


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFFont.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFFont.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _CFFIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CFFIndex */ "./src/modules/fontkit/src/cff/CFFIndex.js");
/* harmony import */ var _CFFTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CFFTop */ "./src/modules/fontkit/src/cff/CFFTop.js");
/* harmony import */ var _CFFPrivateDict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CFFPrivateDict */ "./src/modules/fontkit/src/cff/CFFPrivateDict.js");
/* harmony import */ var _CFFStandardStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CFFStandardStrings */ "./src/modules/fontkit/src/cff/CFFStandardStrings.js");






class CFFFont {
  constructor(stream) {
    this.stream = stream;
    this.decode();
  }

  static decode(stream) {
    return new CFFFont(stream);
  }

  decode() {
    let start = this.stream.pos;
    let top = _CFFTop__WEBPACK_IMPORTED_MODULE_2__["default"].decode(this.stream);
    for (let key in top) {
      let val = top[key];
      this[key] = val;
    }

    if (this.version < 2) {
      if (this.topDictIndex.length !== 1) {
        throw new Error("Only a single font is allowed in CFF");
      }

      this.topDict = this.topDictIndex[0];
    }

    this.isCIDFont = this.topDict.ROS != null;
    return this;
  }

  string(sid) {
    if (this.version >= 2) {
      return null;
    }

    if (sid < _CFFStandardStrings__WEBPACK_IMPORTED_MODULE_4__["default"].length) {
      return _CFFStandardStrings__WEBPACK_IMPORTED_MODULE_4__["default"][sid];
    }

    return this.stringIndex[sid - _CFFStandardStrings__WEBPACK_IMPORTED_MODULE_4__["default"].length];
  }

  get postscriptName() {
    if (this.version < 2) {
      return this.nameIndex[0];
    }

    return null;
  }

  get fullName() {
    return this.string(this.topDict.FullName);
  }

  get familyName() {
    return this.string(this.topDict.FamilyName);
  }

  getCharString(glyph) {
    this.stream.pos = this.topDict.CharStrings[glyph].offset;
    return this.stream.readBuffer(this.topDict.CharStrings[glyph].length);
  }

  getGlyphName(gid) {
    // CFF2 glyph names are in the post table.
    if (this.version >= 2) {
      return null;
    }

    // CID-keyed fonts don't have glyph names
    if (this.isCIDFont) {
      return null;
    }

    let { charset } = this.topDict;
    if (Array.isArray(charset)) {
      return charset[gid];
    }

    if (gid === 0) {
      return '.notdef';
    }

    gid -= 1;

    switch (charset.version) {
      case 0:
        return this.string(charset.glyphs[gid]);

      case 1:
      case 2:
        for (let i = 0; i < charset.ranges.length; i++) {
          let range = charset.ranges[i];
          if (range.offset <= gid && gid <= range.offset + range.nLeft) {
            return this.string(range.first + (gid - range.offset));
          }
        }
        break;
    }

    return null;
  }

  fdForGlyph(gid) {
    if (!this.topDict.FDSelect) {
      return null;
    }

    switch (this.topDict.FDSelect.version) {
      case 0:
        return this.topDict.FDSelect.fds[gid];

      case 3:
      case 4:
        let { ranges } = this.topDict.FDSelect;
        let low = 0;
        let high = ranges.length - 1;

        while (low <= high) {
          let mid = (low + high) >> 1;

          if (gid < ranges[mid].first) {
            high = mid - 1;
          } else if (mid < high && gid >= ranges[mid + 1].first) {
            low = mid + 1;
          } else {
            return ranges[mid].fd;
          }
        }
      default:
        throw new Error(`Unknown FDSelect version: ${this.topDict.FDSelect.version}`);
    }
  }

  privateDictForGlyph(gid) {
    if (this.topDict.FDSelect) {
      let fd = this.fdForGlyph(gid);
      if (this.topDict.FDArray[fd]) {
        return this.topDict.FDArray[fd].Private;
      }

      return null;
    }

    if (this.version < 2) {
      return this.topDict.Private;
    }

    return this.topDict.FDArray[0].Private;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CFFFont);


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFIndex.js":
/*!*************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFIndex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFIndex)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


class CFFIndex {
  constructor(type) {
    this.type = type;
  }

  getCFFVersion(ctx) {
    while (ctx && !ctx.hdrSize) {
      ctx = ctx.parent;
    }

    return ctx ? ctx.version : -1;
  }

  decode(stream, parent) {
    let version = this.getCFFVersion(parent);
    let count = version >= 2
      ? stream.readUInt32BE()
      : stream.readUInt16BE();

    if (count === 0) {
      return [];
    }

    let offSize = stream.readUInt8();
    let offsetType;
    if (offSize === 1) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint8;
    } else if (offSize === 2) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16;
    } else if (offSize === 3) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint24;
    } else if (offSize === 4) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint32;
    } else {
      throw new Error(`Bad offset size in CFFIndex: ${offSize} ${stream.pos}`);
    }

    let ret = [];
    let startPos = stream.pos + ((count + 1) * offSize) - 1;

    let start = offsetType.decode(stream);
    for (let i = 0; i < count; i++) {
      let end = offsetType.decode(stream);

      if (this.type != null) {
        let pos = stream.pos;
        stream.pos = startPos + start;

        parent.length = end - start;
        ret.push(this.type.decode(stream, parent));
        stream.pos = pos;
      } else {
        ret.push({
          offset: startPos + start,
          length: end - start
        });
      }

      start = end;
    }

    stream.pos = startPos + start;
    return ret;
  }

  size(arr, parent) {
    let size = 2;
    if (arr.length === 0) {
      return size;
    }

    let type = this.type || new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer;

    // find maximum offset to detminine offset type
    let offset = 1;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      offset += type.size(item, parent);
    }

    let offsetType;
    if (offset <= 0xff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint8;
    } else if (offset <= 0xffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16;
    } else if (offset <= 0xffffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint24;
    } else if (offset <= 0xffffffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint32;
    } else {
      throw new Error("Bad offset in CFFIndex");
    }

    size += 1 + offsetType.size() * (arr.length + 1);
    size += offset - 1;

    return size;
  }

  encode(stream, arr, parent) {
    stream.writeUInt16BE(arr.length);
    if (arr.length === 0) {
      return;
    }

    let type = this.type || new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer;

    // find maximum offset to detminine offset type
    let sizes = [];
    let offset = 1;
    for (let item of arr) {
      let s = type.size(item, parent);
      sizes.push(s);
      offset += s;
    }

    let offsetType;
    if (offset <= 0xff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint8;
    } else if (offset <= 0xffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16;
    } else if (offset <= 0xffffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint24;
    } else if (offset <= 0xffffffff) {
      offsetType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint32;
    } else {
      throw new Error("Bad offset in CFFIndex");
    }

    // write offset size
    stream.writeUInt8(offsetType.size());

    // write elements
    offset = 1;
    offsetType.encode(stream, offset);

    for (let size of sizes) {
      offset += size;
      offsetType.encode(stream, offset);
    }

    for (let item of arr) {
      type.encode(stream, item, parent);
    }

    return;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFOperand.js":
/*!***************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFOperand.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFOperand)
/* harmony export */ });
const FLOAT_EOF = 0xf;
const FLOAT_LOOKUP = [
  '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '.', 'E', 'E-', null, '-'
];

const FLOAT_ENCODE_LOOKUP = {
  '.': 10,
  'E': 11,
  'E-': 12,
  '-': 14
};

class CFFOperand {
  static decode(stream, value) {
    if (32 <= value && value <= 246) {
      return value - 139;
    }

    if (247 <= value && value <= 250) {
      return (value - 247) * 256 + stream.readUInt8() + 108;
    }

    if (251 <= value && value <= 254) {
      return -(value - 251) * 256 - stream.readUInt8() - 108;
    }
    if (value === 255) {
      return stream.readInt32BE() / 65536;
    }
    if (value === 28) {
      return stream.readInt16BE();
    }

    if (value === 29) {
      return stream.readInt32BE();
    }

    if (value === 30) {
      let str = '';
      while (true) {
        let b = stream.readUInt8();

        let n1 = b >> 4;
        if (n1 === FLOAT_EOF) { break; }
        str += FLOAT_LOOKUP[n1];

        let n2 = b & 15;
        if (n2 === FLOAT_EOF) { break; }
        str += FLOAT_LOOKUP[n2];
      }

      return parseFloat(str);
    }

    return null;
  }

  static size(value) {
    // if the value needs to be forced to the largest size (32 bit)
    // e.g. for unknown pointers, set to 32768
    if (value.forceLarge) {
      value = 32768;
    }

    if ((value | 0) !== value) { // floating point
      let str = '' + value;
      return 1 + Math.ceil((str.length + 1) / 2);

    } else if (-107 <= value && value <= 107) {
      return 1;

    } else if (108 <= value && value <= 1131 || -1131 <= value && value <= -108) {
      return 2;

    } else if (-32768 <= value && value <= 32767) {
      return 3;

    } else {
      return 5;
    }
  }

  static encode(stream, value, isCharString = false) {
    // if the value needs to be forced to the largest size (32 bit)
    // e.g. for unknown pointers, save the old value and set to 32768
    let val = Number(value);

    if (value.forceLarge && !isCharString) {
      //if (value.forceLarge) {
      stream.writeUInt8(29);
      return stream.writeInt32BE(val);

//    } else if ((val | 0) !== val) { // floating point
      } else if ((val | 0) !== val && !isCharString) { 
      stream.writeUInt8(30);

      let str = '' + val;
      for (let i = 0; i < str.length; i += 2) {
        let c1 = str[i];
        let n1 = FLOAT_ENCODE_LOOKUP[c1] || +c1;

        if (i === str.length - 1) {
          var n2 = FLOAT_EOF;
        } else {
          let c2 = str[i + 1];
          var n2 = FLOAT_ENCODE_LOOKUP[c2] || +c2;
        }

        stream.writeUInt8((n1 << 4) | (n2 & 15));
      }

      if (n2 !== FLOAT_EOF) {
        return stream.writeUInt8((FLOAT_EOF << 4));
      }

    } else if (-107 <= val && val <= 107) {
      return stream.writeUInt8(val + 139);

    } else if (108 <= val && val <= 1131) {
      val -= 108;
      stream.writeUInt8((val >> 8) + 247);
      return stream.writeUInt8(val & 0xff);

    } else if (-1131 <= val && val <= -108) {
      val = -val - 108;
      stream.writeUInt8((val >> 8) + 251);
      return stream.writeUInt8(val & 0xff);

    } else if (-32768 <= val && val <= 32767) {
      stream.writeUInt8(28);
      return stream.writeInt16BE(val);

    }
   else if (isCharString) {
    stream.writeUInt8(255);
    stream.writeInt32BE(val) * 65536;

  } 
    else {
      stream.writeUInt8(29);
      return stream.writeInt32BE(val);
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFPointer.js":
/*!***************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFPointer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFPointer)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


class CFFPointer extends restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer {
  constructor(type, options = {}) {
    if (options.type == null) {
      options.type = 'global';
    }

    super(null, type, options);
  }

  decode(stream, parent, operands) {
    this.offsetType = {
      decode: () => operands[0]
    };

    return super.decode(stream, parent, operands);
  }

  encode(stream, value, ctx) {
    if (!stream) {
      // compute the size (so ctx.pointerSize is correct)
      this.offsetType = {
        size: () => 0
      };

      this.size(value, ctx);
      return [new Ptr(0)];
    }

    let ptr = null;
    this.offsetType = {
      encode: (stream, val) => ptr = val
    };

    super.encode(stream, value, ctx);
    return [new Ptr(ptr)];
  }
}

class Ptr {
  constructor(val) {
    this.val = val;
    this.forceLarge = true;
  }

  valueOf() {
    return this.val;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFPrivateDict.js":
/*!*******************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFPrivateDict.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CFFDict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CFFDict */ "./src/modules/fontkit/src/cff/CFFDict.js");
/* harmony import */ var _CFFIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CFFIndex */ "./src/modules/fontkit/src/cff/CFFIndex.js");
/* harmony import */ var _CFFPointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CFFPointer */ "./src/modules/fontkit/src/cff/CFFPointer.js");




class CFFBlendOp {
  static decode(stream, parent, operands) {
    let numBlends = operands.pop();

    // TODO: actually blend. For now just consume the deltas
    // since we don't use any of the values anyway.
    while (operands.length > numBlends) {
      operands.pop();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _CFFDict__WEBPACK_IMPORTED_MODULE_0__["default"]([
  // key       name                    type                                          default
  [6,         'BlueValues',           'delta',                                       null],
  [7,         'OtherBlues',           'delta',                                       null],
  [8,         'FamilyBlues',          'delta',                                       null],
  [9,         'FamilyOtherBlues',     'delta',                                       null],
  [[12, 9],   'BlueScale',            'number',                                      0.039625],
  [[12, 10],  'BlueShift',            'number',                                      7],
  [[12, 11],  'BlueFuzz',             'number',                                      1],
  [10,        'StdHW',                'number',                                      null],
  [11,        'StdVW',                'number',                                      null],
  [[12, 12],  'StemSnapH',            'delta',                                       null],
  [[12, 13],  'StemSnapV',            'delta',                                       null],
  [[12, 14],  'ForceBold',            'boolean',                                     false],
  [[12, 17],  'LanguageGroup',        'number',                                      0],
  [[12, 18],  'ExpansionFactor',      'number',                                      0.06],
  [[12, 19],  'initialRandomSeed',    'number',                                      0],
  [20,        'defaultWidthX',        'number',                                      0],
  [21,        'nominalWidthX',        'number',                                      0],
  [22,        'vsindex',              'number',                                      0],
  [23,        'blend',                CFFBlendOp,                                    null],
  [19,        'Subrs',                new _CFFPointer__WEBPACK_IMPORTED_MODULE_2__["default"](new _CFFIndex__WEBPACK_IMPORTED_MODULE_1__["default"], {type: 'local'}), null]
]));


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFStandardStrings.js":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFStandardStrings.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Automatically generated from Appendix A of the CFF specification; do
// not edit. Length should be 391.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  ".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar",
  "percent", "ampersand", "quoteright", "parenleft", "parenright",
  "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one",
  "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon",
  "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C",
  "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash",
  "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c",
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright",
  "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen",
  "florin", "section", "currency", "quotesingle", "quotedblleft",
  "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash",
  "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet",
  "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright",
  "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex",
  "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla",
  "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash",
  "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe",
  "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth",
  "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar",
  "degree", "thorn", "threequarters", "twosuperior", "registered", "minus",
  "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex",
  "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute",
  "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis",
  "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve",
  "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave",
  "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis",
  "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex",
  "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave",
  "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde",
  "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute",
  "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall",
  "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall",
  "parenleftsuperior", "parenrightsuperior", "twodotenleader",
  "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle",
  "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle",
  "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior",
  "threequartersemdash", "periodsuperior", "questionsmall", "asuperior",
  "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior",
  "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior",
  "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior",
  "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall",
  "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall",
  "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall",
  "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall",
  "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary",
  "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle",
  "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall",
  "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash",
  "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall",
  "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths",
  "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior",
  "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior",
  "ninesuperior", "zeroinferior", "oneinferior", "twoinferior",
  "threeinferior", "fourinferior", "fiveinferior", "sixinferior",
  "seveninferior", "eightinferior", "nineinferior", "centinferior",
  "dollarinferior", "periodinferior", "commainferior", "Agravesmall",
  "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall",
  "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall",
  "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall",
  "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall",
  "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall",
  "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall",
  "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall",
  "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black",
  "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"
]);


/***/ }),

/***/ "./src/modules/fontkit/src/cff/CFFTop.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/cff/CFFTop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _CFFDict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CFFDict */ "./src/modules/fontkit/src/cff/CFFDict.js");
/* harmony import */ var _CFFIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CFFIndex */ "./src/modules/fontkit/src/cff/CFFIndex.js");
/* harmony import */ var _CFFPointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CFFPointer */ "./src/modules/fontkit/src/cff/CFFPointer.js");
/* harmony import */ var _CFFPrivateDict__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CFFPrivateDict */ "./src/modules/fontkit/src/cff/CFFPrivateDict.js");
/* harmony import */ var _CFFStandardStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CFFStandardStrings */ "./src/modules/fontkit/src/cff/CFFStandardStrings.js");
/* harmony import */ var _CFFEncodings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CFFEncodings */ "./src/modules/fontkit/src/cff/CFFEncodings.js");
/* harmony import */ var _CFFCharsets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CFFCharsets */ "./src/modules/fontkit/src/cff/CFFCharsets.js");
/* harmony import */ var _tables_variations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/variations */ "./src/modules/fontkit/src/tables/variations.js");











// Checks if an operand is an index of a predefined value,
// otherwise delegates to the provided type.
class PredefinedOp {
  constructor(predefinedOps, type) {
    this.predefinedOps = predefinedOps;
    this.type = type;
  }

  decode(stream, parent, operands) {
    if (this.predefinedOps[operands[0]]) {
      return this.predefinedOps[operands[0]];
    }

    return this.type.decode(stream, parent, operands);
  }

  size(value, ctx) {
    return this.type.size(value, ctx);
  }

  encode(stream, value, ctx) {
    let index = this.predefinedOps.indexOf(value);
    if (index !== -1) {
      return index;
    }

    return this.type.encode(stream, value, ctx);
  }
}

class CFFEncodingVersion extends restructure__WEBPACK_IMPORTED_MODULE_0__.Number {
  constructor() {
    super('UInt8');
  }

  decode(stream) {
    return restructure__WEBPACK_IMPORTED_MODULE_0__.uint8.decode(stream) & 0x7f;
  }
}

let Range1 = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  first: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nLeft: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

let Range2 = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  first: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nLeft: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let CFFCustomEncoding = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(new CFFEncodingVersion(), {
  0: {
    nCodes: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    codes: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 'nCodes')
  },

  1: {
    nRanges: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    ranges: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Range1, 'nRanges')
  }

  // TODO: supplement?
});

let CFFEncoding = new PredefinedOp([ _CFFEncodings__WEBPACK_IMPORTED_MODULE_6__.StandardEncoding, _CFFEncodings__WEBPACK_IMPORTED_MODULE_6__.ExpertEncoding ], new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](CFFCustomEncoding, { lazy: true }));

// Decodes an array of ranges until the total
// length is equal to the provided length.
class RangeArray extends restructure__WEBPACK_IMPORTED_MODULE_0__.Array {
  decode(stream, parent) {
    let length = (0,restructure__WEBPACK_IMPORTED_MODULE_0__.resolveLength)(this.length, stream, parent);
    let count = 0;
    let res = [];
    while (count < length) {
      let range = this.type.decode(stream, parent);
      range.offset = count;
      count += range.nLeft + 1;
      res.push(range);
    }

    return res;
  }
}

let CFFCustomCharset = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, {
  0: {
    glyphs: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.parent.CharStrings.length - 1)
  },

  1: {
    ranges: new RangeArray(Range1, t => t.parent.CharStrings.length - 1)
  },

  2: {
    ranges: new RangeArray(Range2, t => t.parent.CharStrings.length - 1)
  }
});

let CFFCharset = new PredefinedOp([ _CFFCharsets__WEBPACK_IMPORTED_MODULE_7__.ISOAdobeCharset, _CFFCharsets__WEBPACK_IMPORTED_MODULE_7__.ExpertCharset, _CFFCharsets__WEBPACK_IMPORTED_MODULE_7__.ExpertSubsetCharset ], new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](CFFCustomCharset, {lazy: true}));

let FDRange3 = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  first: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  fd: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

let FDRange4 = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  first: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  fd: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let FDSelect = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, {
  0: {
    fds: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.parent.CharStrings.length)
  },

  3: {
    nRanges: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    ranges: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FDRange3, 'nRanges'),
    sentinel: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  4: {
    nRanges: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    ranges: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FDRange4, 'nRanges'),
    sentinel: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
  }
});

let ptr = new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](_CFFPrivateDict__WEBPACK_IMPORTED_MODULE_4__["default"]);
class CFFPrivateOp {
  decode(stream, parent, operands) {
    parent.length = operands[0];
    return ptr.decode(stream, parent, [operands[1]]);
  }

  size(dict, ctx) {
    return [_CFFPrivateDict__WEBPACK_IMPORTED_MODULE_4__["default"].size(dict, ctx, false), ptr.size(dict, ctx)[0]];
  }

  encode(stream, dict, ctx) {
    return [_CFFPrivateDict__WEBPACK_IMPORTED_MODULE_4__["default"].size(dict, ctx, false), ptr.encode(stream, dict, ctx)[0]];
  }
}

let FontDict = new _CFFDict__WEBPACK_IMPORTED_MODULE_1__["default"]([
  // key       name                   type(s)                                 default
  [18,        'Private',              new CFFPrivateOp,                       null],
  [[12, 38],  'FontName',             'sid',                                  null],
  [[12, 7],   'FontMatrix',           'array',                                [0.001, 0, 0, 0.001, 0, 0]],
  [[12, 5],   'PaintType',            'number',                               0],
]);

let CFFTopDict = new _CFFDict__WEBPACK_IMPORTED_MODULE_1__["default"]([
  // key       name                   type(s)                                 default
  [[12, 30],  'ROS',                  ['sid', 'sid', 'number'],               null],

  [0,         'version',              'sid',                                  null],
  [1,         'Notice',               'sid',                                  null],
  [[12, 0],   'Copyright',            'sid',                                  null],
  [2,         'FullName',             'sid',                                  null],
  [3,         'FamilyName',           'sid',                                  null],
  [4,         'Weight',               'sid',                                  null],
  [[12, 1],   'isFixedPitch',         'boolean',                              false],
  [[12, 2],   'ItalicAngle',          'number',                               0],
  [[12, 3],   'UnderlinePosition',    'number',                               -100],
  [[12, 4],   'UnderlineThickness',   'number',                               50],
  [[12, 5],   'PaintType',            'number',                               0],
  [[12, 6],   'CharstringType',       'number',                               2],
  [[12, 7],   'FontMatrix',           'array',                                [0.001, 0, 0, 0.001, 0, 0]],
  [13,        'UniqueID',             'number',                               null],
  [5,         'FontBBox',             'array',                                [0, 0, 0, 0]],
  [[12, 8],   'StrokeWidth',          'number',                               0],
  [14,        'XUID',                 'array',                                null],
  [15,        'charset',              CFFCharset,                             _CFFCharsets__WEBPACK_IMPORTED_MODULE_7__.ISOAdobeCharset],
  [16,        'Encoding',             CFFEncoding,                            _CFFEncodings__WEBPACK_IMPORTED_MODULE_6__.StandardEncoding],
  [17,        'CharStrings',          new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"]),           null],
  [18,        'Private',              new CFFPrivateOp,                       null],
  [[12, 20],  'SyntheticBase',        'number',                               null],
  [[12, 21],  'PostScript',           'sid',                                  null],
  [[12, 22],  'BaseFontName',         'sid',                                  null],
  [[12, 23],  'BaseFontBlend',        'delta',                                null],

  // CID font specific
  [[12, 31],  'CIDFontVersion',       'number',                               0],
  [[12, 32],  'CIDFontRevision',      'number',                               0],
  [[12, 33],  'CIDFontType',          'number',                               0],
  [[12, 34],  'CIDCount',             'number',                               8720],
  [[12, 35],  'UIDBase',              'number',                               null],
  [[12, 37],  'FDSelect',             new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](FDSelect),               null],
  [[12, 36],  'FDArray',              new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"](FontDict)), null],
  [[12, 38],  'FontName',             'sid',                                  null]
]);

let VariationStore = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  itemVariationStore: _tables_variations__WEBPACK_IMPORTED_MODULE_8__.ItemVariationStore
})

let CFF2TopDict = new _CFFDict__WEBPACK_IMPORTED_MODULE_1__["default"]([
  [[12, 7],   'FontMatrix',           'array',                                [0.001, 0, 0, 0.001, 0, 0]],
  [17,        'CharStrings',          new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"]),           null],
  [[12, 37],  'FDSelect',             new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](FDSelect),               null],
  [[12, 36],  'FDArray',              new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"](FontDict)), null],
  [24,        'vstore',               new _CFFPointer__WEBPACK_IMPORTED_MODULE_3__["default"](VariationStore),         null],
  [25,        'maxstack',             'number',                               193]
]);

let CFFTop = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.fixed16, {
  1: {
    hdrSize:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    offSize:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    nameIndex:          new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"](new restructure__WEBPACK_IMPORTED_MODULE_0__.String('length')),
    topDictIndex:       new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"](CFFTopDict),
    stringIndex:        new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"](new restructure__WEBPACK_IMPORTED_MODULE_0__.String('length')),
    globalSubrIndex:    new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  2: {
    hdrSize:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    length:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    topDict:            CFF2TopDict,
    globalSubrIndex:    new _CFFIndex__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CFFTop);


/***/ }),

/***/ "./src/modules/fontkit/src/decorators.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/decorators.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cache: () => (/* binding */ cache)
/* harmony export */ });
/**
 * This decorator caches the results of a getter or method such that
 * the results are lazily computed once, and then cached.
 * @private
 */
function cache(target, key, descriptor) {
  if (descriptor.get) {
    let get = descriptor.get;
    descriptor.get = function() {
      let value = get.call(this);
      Object.defineProperty(this, key, { value });
      return value;
    };
  } else if (typeof descriptor.value === 'function') {
    let fn = descriptor.value;

    return {
      get() {
        let cache = new Map;
        function memoized(...args) {
          let key = args.length > 0 ? args[0] : 'value';
          if (cache.has(key)) {
            return cache.get(key);
          }

          let result = fn.apply(this, args);
          cache.set(key, result);
          return result;
        };

        Object.defineProperty(this, key, {value: memoized});
        return memoized;
      }
    };
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/encodings.js":
/*!**********************************************!*\
  !*** ./src/modules/fontkit/src/encodings.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENCODINGS: () => (/* binding */ ENCODINGS),
/* harmony export */   LANGUAGES: () => (/* binding */ LANGUAGES),
/* harmony export */   MAC_LANGUAGE_ENCODINGS: () => (/* binding */ MAC_LANGUAGE_ENCODINGS),
/* harmony export */   getEncoding: () => (/* binding */ getEncoding),
/* harmony export */   getEncodingMapping: () => (/* binding */ getEncodingMapping)
/* harmony export */ });
/**
 * Gets an encoding name from platform, encoding, and language ids.
 * Returned encoding names can be used in iconv-lite to decode text.
 */
function getEncoding(platformID, encodingID, languageID = 0) {
  if (platformID === 1 && MAC_LANGUAGE_ENCODINGS[languageID]) {
    return MAC_LANGUAGE_ENCODINGS[languageID];
  }
  
  return ENCODINGS[platformID][encodingID];
}

const SINGLE_BYTE_ENCODINGS = new Set(['x-mac-roman', 'x-mac-cyrillic', 'iso-8859-6', 'iso-8859-8']);
const MAC_ENCODINGS = {
  'x-mac-croatian': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ',
  'x-mac-gaelic': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ',
  'x-mac-greek': 'Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\u00AD',
  'x-mac-icelandic': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ',
  'x-mac-inuit': 'ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł',
  'x-mac-ce': 'ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ',
  'x-mac-romanian': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ',
  'x-mac-turkish': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ'
};

const encodingCache = new Map();

function getEncodingMapping(encoding) {
  let cached = encodingCache.get(encoding);
  if (cached) {
    return cached;
  }

  // These encodings aren't supported by TextDecoder.
  let mapping = MAC_ENCODINGS[encoding];
  if (mapping) {
    let res = new Map();
    for (let i = 0; i < mapping.length; i++) {
      res.set(mapping.charCodeAt(i), 0x80 + i);
    }

    encodingCache.set(encoding, res);
    return res;
  }

  // Only single byte encodings can be mapped 1:1.
  if (SINGLE_BYTE_ENCODINGS.has(encoding)) {
    // TextEncoder only supports utf8, whereas TextDecoder supports legacy encodings.
    // Use this to create a mapping of code points.
    let decoder = new TextDecoder(encoding);
    let mapping = new Uint8Array(0x80);
    for (let i = 0; i < 0x80; i++) {
      mapping[i] = 0x80 + i;
    }

    let res = new Map();
    let s = decoder.decode(mapping);
    for (let i = 0; i < 0x80; i++) {
      res.set(s.charCodeAt(i), 0x80 + i);
    }

    encodingCache.set(encoding, res);
    return res;
  }
}

// Map of platform ids to encoding ids.
const ENCODINGS = [
  // unicode
  ['utf-16be', 'utf-16be', 'utf-16be', 'utf-16be', 'utf-16be', 'utf-16be', 'utf-16be'],
  
  // macintosh
  // Mappings available at http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/
  // 0	Roman                 17	Malayalam
  // 1	Japanese	            18	Sinhalese
  // 2	Traditional Chinese	  19	Burmese
  // 3	Korean	              20	Khmer
  // 4	Arabic	              21	Thai
  // 5	Hebrew	              22	Laotian
  // 6	Greek	                23	Georgian
  // 7	Russian	              24	Armenian
  // 8	RSymbol	              25	Simplified Chinese
  // 9	Devanagari	          26	Tibetan
  // 10	Gurmukhi	            27	Mongolian
  // 11	Gujarati	            28	Geez
  // 12	Oriya	                29	Slavic
  // 13	Bengali	              30	Vietnamese
  // 14	Tamil	                31	Sindhi
  // 15	Telugu	              32	(Uninterpreted)
  // 16	Kannada
  ['x-mac-roman', 'shift-jis', 'big5', 'euc-kr', 'iso-8859-6', 'iso-8859-8',
   'x-mac-greek', 'x-mac-cyrillic', 'x-mac-symbol', 'x-mac-devanagari', 'x-mac-gurmukhi', 'x-mac-gujarati',
   'Oriya', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Sinhalese',
   'Burmese', 'Khmer', 'iso-8859-11', 'Laotian', 'Georgian', 'Armenian', 'gbk', 
   'Tibetan', 'Mongolian', 'Geez', 'x-mac-ce', 'Vietnamese', 'Sindhi'],
  
  // ISO (deprecated)
  ['ascii', null, 'iso-8859-1'],
  
  // windows
  // Docs here: http://msdn.microsoft.com/en-us/library/system.text.encoding(v=vs.110).aspx
  ['symbol', 'utf-16be', 'shift-jis', 'gb18030', 'big5', 'euc-kr', 'johab', null, null, null, 'utf-16be']
];

// Overrides for Mac scripts by language id.
// See http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
const MAC_LANGUAGE_ENCODINGS = {
  15: 'x-mac-icelandic',
  17: 'x-mac-turkish',
  18: 'x-mac-croatian',
  24: 'x-mac-ce',
  25: 'x-mac-ce',
  26: 'x-mac-ce',
  27: 'x-mac-ce',
  28: 'x-mac-ce',
  30: 'x-mac-icelandic',
  37: 'x-mac-romanian',
  38: 'x-mac-ce',
  39: 'x-mac-ce',
  40: 'x-mac-ce',
  143: 'x-mac-inuit',
  146: 'x-mac-gaelic'
};

// Map of platform ids to BCP-47 language codes.
const LANGUAGES = [
  // unicode
  [],
  
  { // macintosh
    0: 'en',        30: 'fo',       60: 'ks',       90: 'rw',
    1: 'fr',        31: 'fa',       61: 'ku',       91: 'rn',
    2: 'de',        32: 'ru',       62: 'sd',       92: 'ny',
    3: 'it',        33: 'zh',       63: 'bo',       93: 'mg',
    4: 'nl',        34: 'nl-BE',    64: 'ne',       94: 'eo',
    5: 'sv',        35: 'ga',       65: 'sa',       128: 'cy',
    6: 'es',        36: 'sq',       66: 'mr',       129: 'eu',
    7: 'da',        37: 'ro',       67: 'bn',       130: 'ca',
    8: 'pt',        38: 'cz',       68: 'as',       131: 'la',
    9: 'no',        39: 'sk',       69: 'gu',       132: 'qu',
    10: 'he',       40: 'si',       70: 'pa',       133: 'gn',
    11: 'ja',       41: 'yi',       71: 'or',       134: 'ay',
    12: 'ar',       42: 'sr',       72: 'ml',       135: 'tt',
    13: 'fi',       43: 'mk',       73: 'kn',       136: 'ug',
    14: 'el',       44: 'bg',       74: 'ta',       137: 'dz',
    15: 'is',       45: 'uk',       75: 'te',       138: 'jv',
    16: 'mt',       46: 'be',       76: 'si',       139: 'su',
    17: 'tr',       47: 'uz',       77: 'my',       140: 'gl',
    18: 'hr',       48: 'kk',       78: 'km',       141: 'af',
    19: 'zh-Hant',  49: 'az-Cyrl',  79: 'lo',       142: 'br',
    20: 'ur',       50: 'az-Arab',  80: 'vi',       143: 'iu',
    21: 'hi',       51: 'hy',       81: 'id',       144: 'gd',
    22: 'th',       52: 'ka',       82: 'tl',       145: 'gv',
    23: 'ko',       53: 'mo',       83: 'ms',       146: 'ga',
    24: 'lt',       54: 'ky',       84: 'ms-Arab',  147: 'to',
    25: 'pl',       55: 'tg',       85: 'am',       148: 'el-polyton',
    26: 'hu',       56: 'tk',       86: 'ti',       149: 'kl',
    27: 'es',       57: 'mn-CN',    87: 'om',       150: 'az',
    28: 'lv',       58: 'mn',       88: 'so',       151: 'nn',
    29: 'se',       59: 'ps',       89: 'sw',
  },
  
  // ISO (deprecated)
  [],
  
  { // windows                                        
    0x0436: 'af',       0x4009: 'en-IN',    0x0487: 'rw',          0x0432: 'tn',       
    0x041C: 'sq',       0x1809: 'en-IE',    0x0441: 'sw',          0x045B: 'si',          
    0x0484: 'gsw',      0x2009: 'en-JM',    0x0457: 'kok',         0x041B: 'sk',          
    0x045E: 'am',       0x4409: 'en-MY',    0x0412: 'ko',          0x0424: 'sl',          
    0x1401: 'ar-DZ',    0x1409: 'en-NZ',    0x0440: 'ky',          0x2C0A: 'es-AR',       
    0x3C01: 'ar-BH',    0x3409: 'en-PH',    0x0454: 'lo',          0x400A: 'es-BO',       
    0x0C01: 'ar',       0x4809: 'en-SG',    0x0426: 'lv',          0x340A: 'es-CL',       
    0x0801: 'ar-IQ',    0x1C09: 'en-ZA',    0x0427: 'lt',          0x240A: 'es-CO',       
    0x2C01: 'ar-JO',    0x2C09: 'en-TT',    0x082E: 'dsb',         0x140A: 'es-CR',       
    0x3401: 'ar-KW',    0x0809: 'en-GB',    0x046E: 'lb',          0x1C0A: 'es-DO',       
    0x3001: 'ar-LB',    0x0409: 'en',       0x042F: 'mk',          0x300A: 'es-EC',       
    0x1001: 'ar-LY',    0x3009: 'en-ZW',    0x083E: 'ms-BN',       0x440A: 'es-SV',       
    0x1801: 'ary',      0x0425: 'et',       0x043E: 'ms',          0x100A: 'es-GT',       
    0x2001: 'ar-OM',    0x0438: 'fo',       0x044C: 'ml',          0x480A: 'es-HN',       
    0x4001: 'ar-QA',    0x0464: 'fil',      0x043A: 'mt',          0x080A: 'es-MX',       
    0x0401: 'ar-SA',    0x040B: 'fi',       0x0481: 'mi',          0x4C0A: 'es-NI',       
    0x2801: 'ar-SY',    0x080C: 'fr-BE',    0x047A: 'arn',         0x180A: 'es-PA',       
    0x1C01: 'aeb',      0x0C0C: 'fr-CA',    0x044E: 'mr',          0x3C0A: 'es-PY',       
    0x3801: 'ar-AE',    0x040C: 'fr',       0x047C: 'moh',         0x280A: 'es-PE',       
    0x2401: 'ar-YE',    0x140C: 'fr-LU',    0x0450: 'mn',          0x500A: 'es-PR',       
    0x042B: 'hy',       0x180C: 'fr-MC',    0x0850: 'mn-CN',       0x0C0A: 'es',          
    0x044D: 'as',       0x100C: 'fr-CH',    0x0461: 'ne',          0x040A: 'es',          
    0x082C: 'az-Cyrl',  0x0462: 'fy',       0x0414: 'nb',          0x540A: 'es-US',       
    0x042C: 'az',       0x0456: 'gl',       0x0814: 'nn',          0x380A: 'es-UY',     
    0x046D: 'ba',       0x0437: 'ka',       0x0482: 'oc',          0x200A: 'es-VE',       
    0x042D: 'eu',       0x0C07: 'de-AT',    0x0448: 'or',          0x081D: 'sv-FI',       
    0x0423: 'be',       0x0407: 'de',       0x0463: 'ps',          0x041D: 'sv',          
    0x0845: 'bn',       0x1407: 'de-LI',    0x0415: 'pl',          0x045A: 'syr',         
    0x0445: 'bn-IN',    0x1007: 'de-LU',    0x0416: 'pt',          0x0428: 'tg',          
    0x201A: 'bs-Cyrl',  0x0807: 'de-CH',    0x0816: 'pt-PT',       0x085F: 'tzm',         
    0x141A: 'bs',       0x0408: 'el',       0x0446: 'pa',          0x0449: 'ta',          
    0x047E: 'br',       0x046F: 'kl',       0x046B: 'qu-BO',       0x0444: 'tt',          
    0x0402: 'bg',       0x0447: 'gu',       0x086B: 'qu-EC',       0x044A: 'te',          
    0x0403: 'ca',       0x0468: 'ha',       0x0C6B: 'qu',          0x041E: 'th',          
    0x0C04: 'zh-HK',    0x040D: 'he',       0x0418: 'ro',          0x0451: 'bo',          
    0x1404: 'zh-MO',    0x0439: 'hi',       0x0417: 'rm',          0x041F: 'tr',          
    0x0804: 'zh',       0x040E: 'hu',       0x0419: 'ru',          0x0442: 'tk',          
    0x1004: 'zh-SG',    0x040F: 'is',       0x243B: 'smn',         0x0480: 'ug',          
    0x0404: 'zh-TW',    0x0470: 'ig',       0x103B: 'smj-NO',      0x0422: 'uk',          
    0x0483: 'co',       0x0421: 'id',       0x143B: 'smj',         0x042E: 'hsb',         
    0x041A: 'hr',       0x045D: 'iu',       0x0C3B: 'se-FI',       0x0420: 'ur',          
    0x101A: 'hr-BA',    0x085D: 'iu-Latn',  0x043B: 'se',          0x0843: 'uz-Cyrl',     
    0x0405: 'cs',       0x083C: 'ga',       0x083B: 'se-SE',       0x0443: 'uz',          
    0x0406: 'da',       0x0434: 'xh',       0x203B: 'sms',         0x042A: 'vi',          
    0x048C: 'prs',      0x0435: 'zu',       0x183B: 'sma-NO',      0x0452: 'cy',          
    0x0465: 'dv',       0x0410: 'it',       0x1C3B: 'sms',         0x0488: 'wo',          
    0x0813: 'nl-BE',    0x0810: 'it-CH',    0x044F: 'sa',          0x0485: 'sah',         
    0x0413: 'nl',       0x0411: 'ja',       0x1C1A: 'sr-Cyrl-BA',  0x0478: 'ii',          
    0x0C09: 'en-AU',    0x044B: 'kn',       0x0C1A: 'sr',          0x046A: 'yo',           
    0x2809: 'en-BZ',    0x043F: 'kk',       0x181A: 'sr-Latn-BA',  
    0x1009: 'en-CA',    0x0453: 'km',       0x081A: 'sr-Latn',     
    0x2409: 'en-029',   0x0486: 'quc',      0x046C: 'nso',         
  }
];


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/BBox.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/glyph/BBox.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BBox)
/* harmony export */ });
/**
 * Represents a glyph bounding box
 */
class BBox {
  constructor(minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity) {
    /**
     * The minimum X position in the bounding box
     * @type {number}
     */
    this.minX = minX;

    /**
     * The minimum Y position in the bounding box
     * @type {number}
     */
    this.minY = minY;

    /**
     * The maxmimum X position in the bounding box
     * @type {number}
     */
    this.maxX = maxX;

    /**
     * The maxmimum Y position in the bounding box
     * @type {number}
     */
    this.maxY = maxY;
  }

  /**
   * The width of the bounding box
   * @type {number}
   */
  get width() {
    return this.maxX - this.minX;
  }

  /**
   * The height of the bounding box
   * @type {number}
   */
  get height() {
    return this.maxY - this.minY;
  }

  addPoint(x, y) {
    if (Math.abs(x) !== Infinity) {
      if (x < this.minX) {
        this.minX = x;
      }

      if (x > this.maxX) {
        this.maxX = x;
      }
    }

    if (Math.abs(y) !== Infinity) {
      if (y < this.minY) {
        this.minY = y;
      }

      if (y > this.maxY) {
        this.maxY = y;
      }
    }
  }

  copy() {
    return new BBox(this.minX, this.minY, this.maxX, this.maxY);
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/CFFGlyph.js":
/*!***************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/CFFGlyph.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFGlyph)
/* harmony export */ });
/* harmony import */ var _Glyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Glyph */ "./src/modules/fontkit/src/glyph/Glyph.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Path */ "./src/modules/fontkit/src/glyph/Path.js");
/* harmony import */ var _cff_CFFOperand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cff/CFFOperand */ "./src/modules/fontkit/src/cff/CFFOperand.js");



/**
 * Represents an OpenType PostScript glyph, in the Compact Font Format.
 */
class CFFGlyph extends _Glyph__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'CFF';

  _getName() {
    if (this._font.CFF2) {
      return super._getName();
    }

    return this._font['CFF '].getGlyphName(this.id);
  }

  bias(s) {
    if (s.length < 1240) {
      return 107;
    } else if (s.length < 33900) {
      return 1131;
    } else {
      return 32768;
    }
  }

  _getPath() {
    let cff = this._font.CFF2 || this._font['CFF '];
    let { stream } = cff;
    let str = cff.topDict.CharStrings[this.id];
    let end = str.offset + str.length;
    stream.pos = str.offset;

    let path = new _Path__WEBPACK_IMPORTED_MODULE_1__["default"];
    let stack = [];
    let trans = [];

    let width = null;
    let nStems = 0;
    let x = 0, y = 0;
    let usedGsubrs;
    let usedSubrs;
    let open = false;

    this._usedGsubrs = usedGsubrs = {};
    this._usedSubrs = usedSubrs = {};

    let gsubrs = cff.globalSubrIndex || [];
    let gsubrsBias = this.bias(gsubrs);

    let privateDict = cff.privateDictForGlyph(this.id) || {};
    let subrs = privateDict.Subrs || [];
    let subrsBias = this.bias(subrs);

    let vstore = cff.topDict.vstore && cff.topDict.vstore.itemVariationStore;
    let vsindex = privateDict.vsindex;
    let variationProcessor = this._font._variationProcessor;

    function checkWidth() {
      if (width == null) {
        width = stack.shift() + privateDict.nominalWidthX;
      }
    }

    function parseStems() {
      if (stack.length % 2 !== 0) {
        checkWidth();
      }

      nStems += stack.length >> 1;
      return stack.length = 0;
    }

    function moveTo(x, y) {
      if (open) {
        path.closePath();
      }

      path.moveTo(x, y);
      open = true;
    }

    let parse = function () {
      while (stream.pos < end) {
        let op = stream.readUInt8();
        if (op < 32) {
          let index, subr, phase;
          let c1x, c1y, c2x, c2y, c3x, c3y;
          let c4x, c4y, c5x, c5y, c6x, c6y;
          let pts;

          switch (op) {
            case 1:  // hstem
            case 3:  // vstem
            case 18: // hstemhm
            case 23: // vstemhm
              parseStems();
              break;

            case 4: // vmoveto
              if (stack.length > 1) {
                checkWidth();
              }

              y += stack.shift();
              moveTo(x, y);
              break;

            case 5: // rlineto
              while (stack.length >= 2) {
                x += stack.shift();
                y += stack.shift();
                path.lineTo(x, y);
              }
              break;

            case 6: // hlineto
            case 7: // vlineto
              phase = op === 6;
              while (stack.length >= 1) {
                if (phase) {
                  x += stack.shift();
                } else {
                  y += stack.shift();
                }

                path.lineTo(x, y);
                phase = !phase;
              }
              break;

            case 8: // rrcurveto
              while (stack.length > 0) {
                c1x = x + stack.shift();
                c1y = y + stack.shift();
                c2x = c1x + stack.shift();
                c2y = c1y + stack.shift();
                x = c2x + stack.shift();
                y = c2y + stack.shift();
                path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              }
              break;

            case 10: // callsubr
              index = stack.pop() + subrsBias;
              subr = subrs[index];
              if (subr) {
                usedSubrs[index] = true;
                let p = stream.pos;
                let e = end;
                stream.pos = subr.offset;
                end = subr.offset + subr.length;
                parse();
                stream.pos = p;
                end = e;
              }
              break;

            case 11: // return
              if (cff.version >= 2) {
                break;
              }
              return;

            case 14: // endchar
              if (cff.version >= 2) {
                break;
              }

              if (stack.length > 0) {
                checkWidth();
              }

              if (open) {
                path.closePath();
                open = false;
              }
              break;

            case 15: { // vsindex
              if (cff.version < 2) {
                throw new Error('vsindex operator not supported in CFF v1');
              }

              vsindex = stack.pop();
              break;
            }

            case 16: { // blend
              if (cff.version < 2) {
                throw new Error('blend operator not supported in CFF v1');
              }

              if (!variationProcessor) {
                throw new Error('blend operator in non-variation font');
              }

              let blendVector = variationProcessor.getBlendVector(vstore, vsindex);
              let numBlends = stack.pop();
              let numOperands = numBlends * blendVector.length;
              let delta = stack.length - numOperands;
              let base = delta - numBlends;

              for (let i = 0; i < numBlends; i++) {
                let sum = stack[base + i];
                for (let j = 0; j < blendVector.length; j++) {
                  sum += blendVector[j] * stack[delta++];
                }

                stack[base + i] = sum;
              }

              while (numOperands--) {
                stack.pop();
              }

              break;
            }

            case 19: // hintmask
            case 20: // cntrmask
              parseStems();
              stream.pos += (nStems + 7) >> 3;
              break;

            case 21: // rmoveto
              if (stack.length > 2) {
                checkWidth();
              }

              x += stack.shift();
              y += stack.shift();
              moveTo(x, y);
              break;

            case 22: // hmoveto
              if (stack.length > 1) {
                checkWidth();
              }

              x += stack.shift();
              moveTo(x, y);
              break;

            case 24: // rcurveline
              while (stack.length >= 8) {
                c1x = x + stack.shift();
                c1y = y + stack.shift();
                c2x = c1x + stack.shift();
                c2y = c1y + stack.shift();
                x = c2x + stack.shift();
                y = c2y + stack.shift();
                path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              }

              x += stack.shift();
              y += stack.shift();
              path.lineTo(x, y);
              break;

            case 25: // rlinecurve
              while (stack.length >= 8) {
                x += stack.shift();
                y += stack.shift();
                path.lineTo(x, y);
              }

              c1x = x + stack.shift();
              c1y = y + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              x = c2x + stack.shift();
              y = c2y + stack.shift();
              path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              break;

            case 26: // vvcurveto
              if (stack.length % 2) {
                x += stack.shift();
              }

              while (stack.length >= 4) {
                c1x = x;
                c1y = y + stack.shift();
                c2x = c1x + stack.shift();
                c2y = c1y + stack.shift();
                x = c2x;
                y = c2y + stack.shift();
                path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              }
              break;

            case 27: // hhcurveto
              if (stack.length % 2) {
                y += stack.shift();
              }

              while (stack.length >= 4) {
                c1x = x + stack.shift();
                c1y = y;
                c2x = c1x + stack.shift();
                c2y = c1y + stack.shift();
                x = c2x + stack.shift();
                y = c2y;
                path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              }
              break;

            case 28: // shortint
              stack.push(stream.readInt16BE());
              break;

            case 29: // callgsubr
              index = stack.pop() + gsubrsBias;
              subr = gsubrs[index];
              if (subr) {
                usedGsubrs[index] = true;
                let p = stream.pos;
                let e = end;
                stream.pos = subr.offset;
                end = subr.offset + subr.length;
                parse();
                stream.pos = p;
                end = e;
              }
              break;

            case 30: // vhcurveto
            case 31: // hvcurveto
              phase = op === 31;
              while (stack.length >= 4) {
                if (phase) {
                  c1x = x + stack.shift();
                  c1y = y;
                  c2x = c1x + stack.shift();
                  c2y = c1y + stack.shift();
                  y = c2y + stack.shift();
                  x = c2x + (stack.length === 1 ? stack.shift() : 0);
                } else {
                  c1x = x;
                  c1y = y + stack.shift();
                  c2x = c1x + stack.shift();
                  c2y = c1y + stack.shift();
                  x = c2x + stack.shift();
                  y = c2y + (stack.length === 1 ? stack.shift() : 0);
                }

                path.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
                phase = !phase;
              }
              break;

            case 12:
              op = stream.readUInt8();
              switch (op) {
                case 3: // and
                  let a = stack.pop();
                  let b = stack.pop();
                  stack.push(a && b ? 1 : 0);
                  break;

                case 4: // or
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a || b ? 1 : 0);
                  break;

                case 5: // not
                  a = stack.pop();
                  stack.push(a ? 0 : 1);
                  break;

                case 9: // abs
                  a = stack.pop();
                  stack.push(Math.abs(a));
                  break;

                case 10: // add
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a + b);
                  break;

                case 11: // sub
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a - b);
                  break;

                case 12: // div
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a / b);
                  break;

                case 14: // neg
                  a = stack.pop();
                  stack.push(-a);
                  break;

                case 15: // eq
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a === b ? 1 : 0);
                  break;

                case 18: // drop
                  stack.pop();
                  break;

                case 20: // put
                  let val = stack.pop();
                  let idx = stack.pop();
                  trans[idx] = val;
                  break;

                case 21: // get
                  idx = stack.pop();
                  stack.push(trans[idx] || 0);
                  break;

                case 22: // ifelse
                  let s1 = stack.pop();
                  let s2 = stack.pop();
                  let v1 = stack.pop();
                  let v2 = stack.pop();
                  stack.push(v1 <= v2 ? s1 : s2);
                  break;

                case 23: // random
                  stack.push(Math.random());
                  break;

                case 24: // mul
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(a * b);
                  break;

                case 26: // sqrt
                  a = stack.pop();
                  stack.push(Math.sqrt(a));
                  break;

                case 27: // dup
                  a = stack.pop();
                  stack.push(a, a);
                  break;

                case 28: // exch
                  a = stack.pop();
                  b = stack.pop();
                  stack.push(b, a);
                  break;

                case 29: // index
                  idx = stack.pop();
                  if (idx < 0) {
                    idx = 0;
                  } else if (idx > stack.length - 1) {
                    idx = stack.length - 1;
                  }

                  stack.push(stack[idx]);
                  break;

                case 30: // roll
                  let n = stack.pop();
                  let j = stack.pop();

                  if (j >= 0) {
                    while (j > 0) {
                      var t = stack[n - 1];
                      for (let i = n - 2; i >= 0; i--) {
                        stack[i + 1] = stack[i];
                      }

                      stack[0] = t;
                      j--;
                    }
                  } else {
                    while (j < 0) {
                      var t = stack[0];
                      for (let i = 0; i <= n; i++) {
                        stack[i] = stack[i + 1];
                      }

                      stack[n - 1] = t;
                      j++;
                    }
                  }
                  break;

                case 34: // hflex
                  c1x = x + stack.shift();
                  c1y = y;
                  c2x = c1x + stack.shift();
                  c2y = c1y + stack.shift();
                  c3x = c2x + stack.shift();
                  c3y = c2y;
                  c4x = c3x + stack.shift();
                  c4y = c3y;
                  c5x = c4x + stack.shift();
                  c5y = c4y;
                  c6x = c5x + stack.shift();
                  c6y = c5y;
                  x = c6x;
                  y = c6y;

                  path.bezierCurveTo(c1x, c1y, c2x, c2y, c3x, c3y);
                  path.bezierCurveTo(c4x, c4y, c5x, c5y, c6x, c6y);
                  break;

                case 35: // flex
                  pts = [];

                  for (let i = 0; i <= 5; i++) {
                    x += stack.shift();
                    y += stack.shift();
                    pts.push(x, y);
                  }

                  path.bezierCurveTo(...pts.slice(0, 6));
                  path.bezierCurveTo(...pts.slice(6));
                  stack.shift(); // fd
                  break;

                case 36: // hflex1
                  c1x = x + stack.shift();
                  c1y = y + stack.shift();
                  c2x = c1x + stack.shift();
                  c2y = c1y + stack.shift();
                  c3x = c2x + stack.shift();
                  c3y = c2y;
                  c4x = c3x + stack.shift();
                  c4y = c3y;
                  c5x = c4x + stack.shift();
                  c5y = c4y + stack.shift();
                  c6x = c5x + stack.shift();
                  c6y = c5y;
                  x = c6x;
                  y = c6y;

                  path.bezierCurveTo(c1x, c1y, c2x, c2y, c3x, c3y);
                  path.bezierCurveTo(c4x, c4y, c5x, c5y, c6x, c6y);
                  break;

                case 37: // flex1
                  let startx = x;
                  let starty = y;

                  pts = [];
                  for (let i = 0; i <= 4; i++) {
                    x += stack.shift();
                    y += stack.shift();
                    pts.push(x, y);
                  }

                  if (Math.abs(x - startx) > Math.abs(y - starty)) { // horizontal
                    x += stack.shift();
                    y = starty;
                  } else {
                    x = startx;
                    y += stack.shift();
                  }

                  pts.push(x, y);
                  path.bezierCurveTo(...pts.slice(0, 6));
                  path.bezierCurveTo(...pts.slice(6));
                  break;

                default:
                  throw new Error(`Unknown op: 12 ${op}`);
              }
              break;

            default:
              throw new Error(`Unknown op: ${op}`);
          }

/*         } else if (op < 247) {
          stack.push(op - 139);
        } else if (op < 251) {
          var b1 = stream.readUInt8();
          stack.push((op - 247) * 256 + b1 + 108);
        } else if (op < 255) {
          var b1 = stream.readUInt8();
          stack.push(-(op - 251) * 256 - b1 - 108);
 */        } else {
//          stack.push(stream.readInt32BE() / 65536);
stack.push(_cff_CFFOperand__WEBPACK_IMPORTED_MODULE_2__["default"].decode(stream, op));
        }
      }
    };

    parse();

    if (open) {
      path.closePath();
    }

    return path;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/COLRGlyph.js":
/*!****************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/COLRGlyph.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ COLRGlyph)
/* harmony export */ });
/* harmony import */ var _Glyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Glyph */ "./src/modules/fontkit/src/glyph/Glyph.js");
/* harmony import */ var _BBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BBox */ "./src/modules/fontkit/src/glyph/BBox.js");



class COLRLayer {
  constructor(glyph, color) {
    this.glyph = glyph;
    this.color = color;
  }
}

/**
 * Represents a color (e.g. emoji) glyph in Microsoft's COLR format.
 * Each glyph in this format contain a list of colored layers, each
 * of which  is another vector glyph.
 */
class COLRGlyph extends _Glyph__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'COLR';

  _getBBox() {
    let bbox = new _BBox__WEBPACK_IMPORTED_MODULE_1__["default"];
    for (let i = 0; i < this.layers.length; i++) {
      let layer = this.layers[i];
      let b = layer.glyph.bbox;
      bbox.addPoint(b.minX, b.minY);
      bbox.addPoint(b.maxX, b.maxY);
    }

    return bbox;
  }

  /**
   * Returns an array of objects containing the glyph and color for
   * each layer in the composite color glyph.
   * @type {object[]}
   */
  get layers() {
    let cpal = this._font.CPAL;
    let colr = this._font.COLR;
    let low = 0;
    let high = colr.baseGlyphRecord.length - 1;

    while (low <= high) {
      let mid = (low + high) >> 1;
      var rec = colr.baseGlyphRecord[mid];

      if (this.id < rec.gid) {
        high = mid - 1;
      } else if (this.id > rec.gid) {
        low = mid + 1;
      } else {
        var baseLayer = rec;
        break;
      }
    }

    // if base glyph not found in COLR table,
    // default to normal glyph from glyf or CFF
    if (baseLayer == null) {
      var g = this._font._getBaseGlyph(this.id);
      var color = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 255
      };

      return [new COLRLayer(g, color)];
    }

    // otherwise, return an array of all the layers
    let layers = [];
    for (let i = baseLayer.firstLayerIndex; i < baseLayer.firstLayerIndex + baseLayer.numLayers; i++) {
      var rec = colr.layerRecords[i];
      var color = cpal.colorRecords[rec.paletteIndex];
      var g = this._font._getBaseGlyph(rec.gid);
      layers.push(new COLRLayer(g, color));
    }

    return layers;
  }

  render(ctx, size) {
    for (let {glyph, color} of this.layers) {
      ctx.fillColor([color.red, color.green, color.blue], color.alpha / 255 * 100);
      glyph.render(ctx, size);
    }

    return;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/Glyph.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/Glyph.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glyph)
/* harmony export */ });
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators */ "./src/modules/fontkit/src/decorators.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Path */ "./src/modules/fontkit/src/glyph/Path.js");
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");
/* harmony import */ var _StandardNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StandardNames */ "./src/modules/fontkit/src/glyph/StandardNames.js");





/**
 * Glyph objects represent a glyph in the font. They have various properties for accessing metrics and
 * the actual vector path the glyph represents, and methods for rendering the glyph to a graphics context.
 *
 * You do not create glyph objects directly. They are created by various methods on the font object.
 * There are several subclasses of the base Glyph class internally that may be returned depending
 * on the font format, but they all inherit from this class.
 */
class Glyph {
	constructor(id, codePoints, font) {
		/**
		 * The glyph id in the font
		 * @type {number}
		 */
		this.id = id;

		/**
		 * An array of unicode code points that are represented by this glyph.
		 * There can be multiple code points in the case of ligatures and other glyphs
		 * that represent multiple visual characters.
		 * @type {number[]}
		 */
		this.codePoints = codePoints;
		this._font = font;

		// TODO: get this info from GDEF if available
		this.isMark = this.codePoints.length > 0 && this.codePoints.every(unicode_properties__WEBPACK_IMPORTED_MODULE_2__.isMark);
		this.isLigature = this.codePoints.length > 1;
	}

	_getPath() {
		return new _Path__WEBPACK_IMPORTED_MODULE_1__["default"]();
	}

	_getCBox() {
		return this.path.cbox;
	}

	_getBBox() {
		return this.path.bbox;
	}

	_getTableMetrics(table) {
		if (this.id < table.metrics.length) {
			return table.metrics.get(this.id);
		}

		let metric = table.metrics.get(table.metrics.length - 1);
		let res = {
			advance: metric ? metric.advance : 0,
			bearing: table.bearings.get(this.id - table.metrics.length) || 0
		};

		return res;
	}

	_getMetrics(cbox) {
		if (this._metrics) {
			return this._metrics;
		}

		let { advance: advanceWidth, bearing: leftBearing } = this._getTableMetrics(this._font.hmtx);

		// For vertical metrics, use vmtx if available, or fall back to global data from OS/2 or hhea
		if (this._font.vmtx) {
			var { advance: advanceHeight, bearing: topBearing } = this._getTableMetrics(this._font.vmtx);
		} else {
			let os2;
			if (typeof cbox === 'undefined' || cbox === null) {
				({ cbox } = this);
			}

			if ((os2 = this._font['OS/2']) && os2.version > 0) {
				var advanceHeight = Math.abs(os2.typoAscender - os2.typoDescender);
				var topBearing = os2.typoAscender - cbox.maxY;
			} else {
				let { hhea } = this._font;
				var advanceHeight = Math.abs(hhea.ascent - hhea.descent);
				var topBearing = hhea.ascent - cbox.maxY;
			}
		}

		if (this._font._variationProcessor && this._font.HVAR) {
			advanceWidth += this._font._variationProcessor.getAdvanceAdjustment(this.id, this._font.HVAR);
		}

		return (this._metrics = { advanceWidth, advanceHeight, leftBearing, topBearing });
	}

	/**
	 * The glyph’s control box.
	 * This is often the same as the bounding box, but is faster to compute.
	 * Because of the way bezier curves are defined, some of the control points
	 * can be outside of the bounding box. Where `bbox` takes this into account,
	 * `cbox` does not. Thus, cbox is less accurate, but faster to compute.
	 * See [here](http://www.freetype.org/freetype2/docs/glyphs/glyphs-6.html#section-2)
	 * for a more detailed description.
	 *
	 * @type {BBox}
	 */
	////@cache
	get cbox() {
		return this._getCBox();
	}

	/**
	 * The glyph’s bounding box, i.e. the rectangle that encloses the
	 * glyph outline as tightly as possible.
	 * @type {BBox}
	 */
	////@cache
	get bbox() {
		return this._getBBox();
	}

	/**
	 * A vector Path object representing the glyph outline.
	 * @type {Path}
	 */
	////@cache
	get path() {
		// Cache the path so we only decode it once
		// Decoding is actually performed by subclasses
		return this._getPath();
	}

	/**
	 * Returns a path scaled to the given font size.
	 * @param {number} size
	 * @return {Path}
	 */
	getScaledPath(size) {
		let scale = (1 / this._font.unitsPerEm) * size;
		return this.path.scale(scale);
	}

	/**
	 * The glyph's advance width.
	 * @type {number}
	 */
	////@cache
	get advanceWidth() {
		return this._getMetrics().advanceWidth;
	}

	/**
	 * The glyph's advance height.
	 * @type {number}
	 */
	////@cache
	get advanceHeight() {
		return this._getMetrics().advanceHeight;
	}

	get ligatureCaretPositions() {}

	_getName() {
		let { post } = this._font;
		if (!post) {
			return null;
		}

		switch (post.version) {
			case 1:
				return _StandardNames__WEBPACK_IMPORTED_MODULE_3__["default"][this.id];

			case 2:
				let id = post.glyphNameIndex[this.id];
				if (id < _StandardNames__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
					return _StandardNames__WEBPACK_IMPORTED_MODULE_3__["default"][id];
				}

				return post.names[id - _StandardNames__WEBPACK_IMPORTED_MODULE_3__["default"].length];

			case 2.5:
				return _StandardNames__WEBPACK_IMPORTED_MODULE_3__["default"][this.id + post.offsets[this.id]];

			case 4:
				return String.fromCharCode(post.map[this.id]);
		}
	}

	/**
	 * The glyph's name
	 * @type {string}
	 */
	////@cache
	get name() {
		return this._getName();
	}

	/**
	 * Renders the glyph to the given graphics context, at the specified font size.
	 * @param {CanvasRenderingContext2d} ctx
	 * @param {number} size
	 */
	render(ctx, size) {
		ctx.save();

		let scale = (1 / this._font.head.unitsPerEm) * size;
		ctx.scale(scale, scale);

		let fn = this.path.toFunction();
		fn(ctx);
		ctx.fill();

		ctx.restore();
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/GlyphVariationProcessor.js":
/*!******************************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/GlyphVariationProcessor.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlyphVariationProcessor)
/* harmony export */ });
const TUPLES_SHARE_POINT_NUMBERS = 0x8000;
const TUPLE_COUNT_MASK           = 0x0fff;
const EMBEDDED_TUPLE_COORD       = 0x8000;
const INTERMEDIATE_TUPLE         = 0x4000;
const PRIVATE_POINT_NUMBERS      = 0x2000;
const TUPLE_INDEX_MASK           = 0x0fff;
const POINTS_ARE_WORDS           = 0x80;
const POINT_RUN_COUNT_MASK       = 0x7f;
const DELTAS_ARE_ZERO            = 0x80;
const DELTAS_ARE_WORDS           = 0x40;
const DELTA_RUN_COUNT_MASK       = 0x3f;

/**
 * This class is transforms TrueType glyphs according to the data from
 * the Apple Advanced Typography variation tables (fvar, gvar, and avar).
 * These tables allow infinite adjustments to glyph weight, width, slant,
 * and optical size without the designer needing to specify every exact style.
 *
 * Apple's documentation for these tables is not great, so thanks to the
 * Freetype project for figuring much of this out.
 *
 * @private
 */
class GlyphVariationProcessor {
  constructor(font, coords) {
    this.font = font;
    this.normalizedCoords = this.normalizeCoords(coords);
    this.blendVectors = new Map;
  }

  normalizeCoords(coords) {
    // the default mapping is linear along each axis, in two segments:
    // from the minValue to defaultValue, and from defaultValue to maxValue.
    let normalized = [];
    for (var i = 0; i < this.font.fvar.axis.length; i++) {
      let axis = this.font.fvar.axis[i];
      if (coords[i] < axis.defaultValue) {
        normalized.push((coords[i] - axis.defaultValue + Number.EPSILON) / (axis.defaultValue - axis.minValue + Number.EPSILON));
      } else {
        normalized.push((coords[i] - axis.defaultValue + Number.EPSILON) / (axis.maxValue - axis.defaultValue + Number.EPSILON));
      }
    }

    // if there is an avar table, the normalized value is calculated
    // by interpolating between the two nearest mapped values.
    if (this.font.avar) {
      for (var i = 0; i < this.font.avar.segment.length; i++) {
        let segment = this.font.avar.segment[i];
        for (let j = 0; j < segment.correspondence.length; j++) {
          let pair = segment.correspondence[j];
          if (j >= 1 && normalized[i] < pair.fromCoord) {
            let prev = segment.correspondence[j - 1];
            normalized[i] = ((normalized[i] - prev.fromCoord) * (pair.toCoord - prev.toCoord) + Number.EPSILON) /
              (pair.fromCoord - prev.fromCoord + Number.EPSILON) +
              prev.toCoord;

            break;
          }
        }
      }
    }

    return normalized;
  }

  transformPoints(gid, glyphPoints) {
    if (!this.font.fvar || !this.font.gvar) { return; }

    let { gvar } = this.font;
    if (gid >= gvar.glyphCount) { return; }

    let offset = gvar.offsets[gid];
    if (offset === gvar.offsets[gid + 1]) { return; }

    // Read the gvar data for this glyph
    let { stream } = this.font;
    stream.pos = offset;
    if (stream.pos >= stream.length) {
      return;
    }

    let tupleCount = stream.readUInt16BE();
    let offsetToData = offset + stream.readUInt16BE();

    if (tupleCount & TUPLES_SHARE_POINT_NUMBERS) {
      var here = stream.pos;
      stream.pos = offsetToData;
      var sharedPoints = this.decodePoints();
      offsetToData = stream.pos;
      stream.pos = here;
    }

    let origPoints = glyphPoints.map(pt => pt.copy());

    tupleCount &= TUPLE_COUNT_MASK;
    for (let i = 0; i < tupleCount; i++) {
      let tupleDataSize = stream.readUInt16BE();
      let tupleIndex = stream.readUInt16BE();

      if (tupleIndex & EMBEDDED_TUPLE_COORD) {
        var tupleCoords = [];
        for (let a = 0; a < gvar.axisCount; a++) {
          tupleCoords.push(stream.readInt16BE() / 16384);
        }

      } else {
        if ((tupleIndex & TUPLE_INDEX_MASK) >= gvar.globalCoordCount) {
          throw new Error('Invalid gvar table');
        }

        var tupleCoords = gvar.globalCoords[tupleIndex & TUPLE_INDEX_MASK];
      }

      if (tupleIndex & INTERMEDIATE_TUPLE) {
        var startCoords = [];
        for (let a = 0; a < gvar.axisCount; a++) {
          startCoords.push(stream.readInt16BE() / 16384);
        }

        var endCoords = [];
        for (let a = 0; a < gvar.axisCount; a++) {
          endCoords.push(stream.readInt16BE() / 16384);
        }
      }

      // Get the factor at which to apply this tuple
      let factor = this.tupleFactor(tupleIndex, tupleCoords, startCoords, endCoords);
      if (factor === 0) {
        offsetToData += tupleDataSize;
        continue;
      }

      var here = stream.pos;
      stream.pos = offsetToData;

      if (tupleIndex & PRIVATE_POINT_NUMBERS) {
        var points = this.decodePoints();
      } else {
        var points = sharedPoints;
      }

      // points.length = 0 means there are deltas for all points
      let nPoints = points.length === 0 ? glyphPoints.length : points.length;
      let xDeltas = this.decodeDeltas(nPoints);
      let yDeltas = this.decodeDeltas(nPoints);

      if (points.length === 0) { // all points
        for (let i = 0; i < glyphPoints.length; i++) {
          var point = glyphPoints[i];
          point.x += Math.round(xDeltas[i] * factor);
          point.y += Math.round(yDeltas[i] * factor);
        }
      } else {
        let outPoints = origPoints.map(pt => pt.copy());
        let hasDelta = glyphPoints.map(() => false);

        for (let i = 0; i < points.length; i++) {
          let idx = points[i];
          if (idx < glyphPoints.length) {
            let point = outPoints[idx];
            hasDelta[idx] = true;

            point.x += Math.round(xDeltas[i] * factor);
            point.y += Math.round(yDeltas[i] * factor);
          }
        }

        this.interpolateMissingDeltas(outPoints, origPoints, hasDelta);

        for (let i = 0; i < glyphPoints.length; i++) {
          let deltaX = outPoints[i].x - origPoints[i].x;
          let deltaY = outPoints[i].y - origPoints[i].y;

          glyphPoints[i].x += deltaX;
          glyphPoints[i].y += deltaY;
        }
      }

      offsetToData += tupleDataSize;
      stream.pos = here;
    }
  }

  decodePoints() {
    let stream = this.font.stream;
    let count = stream.readUInt8();

    if (count & POINTS_ARE_WORDS) {
      count = (count & POINT_RUN_COUNT_MASK) << 8 | stream.readUInt8();
    }

    let points = new Uint16Array(count);
    let i = 0;
    let point = 0;
    while (i < count) {
      let run = stream.readUInt8();
      let runCount = (run & POINT_RUN_COUNT_MASK) + 1;
      let fn = run & POINTS_ARE_WORDS ? stream.readUInt16 : stream.readUInt8;

      for (let j = 0; j < runCount && i < count; j++) {
        point += fn.call(stream);
        points[i++] = point;
      }
    }

    return points;
  }

  decodeDeltas(count) {
    let stream = this.font.stream;
    let i = 0;
    let deltas = new Int16Array(count);

    while (i < count) {
      let run = stream.readUInt8();
      let runCount = (run & DELTA_RUN_COUNT_MASK) + 1;

      if (run & DELTAS_ARE_ZERO) {
        i += runCount;

      } else {
        let fn = run & DELTAS_ARE_WORDS ? stream.readInt16BE : stream.readInt8;
        for (let j = 0; j < runCount && i < count; j++) {
          deltas[i++] = fn.call(stream);
        }
      }
    }

    return deltas;
  }

  tupleFactor(tupleIndex, tupleCoords, startCoords, endCoords) {
    let normalized = this.normalizedCoords;
    let { gvar } = this.font;
    let factor = 1;

    for (let i = 0; i < gvar.axisCount; i++) {
      if (tupleCoords[i] === 0) {
        continue;
      }

      if (normalized[i] === 0) {
        return 0;
      }

      if ((tupleIndex & INTERMEDIATE_TUPLE) === 0) {
        if ((normalized[i] < Math.min(0, tupleCoords[i])) ||
            (normalized[i] > Math.max(0, tupleCoords[i]))) {
          return 0;
        }

        factor = (factor * normalized[i] + Number.EPSILON) / (tupleCoords[i] + Number.EPSILON);
      } else {
        if ((normalized[i] < startCoords[i]) ||
            (normalized[i] > endCoords[i])) {
          return 0;

        } else if (normalized[i] < tupleCoords[i]) {
          factor = factor * (normalized[i] - startCoords[i] + Number.EPSILON) / (tupleCoords[i] - startCoords[i] + Number.EPSILON);

        } else {
          factor = factor * (endCoords[i] - normalized[i] + Number.EPSILON) / (endCoords[i] - tupleCoords[i] + Number.EPSILON);
        }
      }
    }

    return factor;
  }

  // Interpolates points without delta values.
  // Needed for the Ø and Q glyphs in Skia.
  // Algorithm from Freetype.
  interpolateMissingDeltas(points, inPoints, hasDelta) {
    if (points.length === 0) {
      return;
    }

    let point = 0;
    while (point < points.length) {
      let firstPoint = point;

      // find the end point of the contour
      let endPoint = point;
      let pt = points[endPoint];
      while (!pt.endContour) {
        pt = points[++endPoint];
      }

      // find the first point that has a delta
      while (point <= endPoint && !hasDelta[point]) {
        point++;
      }

      if (point > endPoint) {
        continue;
      }

      let firstDelta = point;
      let curDelta = point;
      point++;

      while (point <= endPoint) {
        // find the next point with a delta, and interpolate intermediate points
        if (hasDelta[point]) {
          this.deltaInterpolate(curDelta + 1, point - 1, curDelta, point, inPoints, points);
          curDelta = point;
        }

        point++;
      }

      // shift contour if we only have a single delta
      if (curDelta === firstDelta) {
        this.deltaShift(firstPoint, endPoint, curDelta, inPoints, points);
      } else {
        // otherwise, handle the remaining points at the end and beginning of the contour
        this.deltaInterpolate(curDelta + 1, endPoint, curDelta, firstDelta, inPoints, points);

        if (firstDelta > 0) {
          this.deltaInterpolate(firstPoint, firstDelta - 1, curDelta, firstDelta, inPoints, points);
        }
      }

      point = endPoint + 1;
    }
  }

  deltaInterpolate(p1, p2, ref1, ref2, inPoints, outPoints) {
    if (p1 > p2) {
      return;
    }

    let iterable = ['x', 'y'];
    for (let i = 0; i < iterable.length; i++) {
      let k = iterable[i];
      if (inPoints[ref1][k] > inPoints[ref2][k]) {
        var p = ref1;
        ref1 = ref2;
        ref2 = p;
      }

      let in1 = inPoints[ref1][k];
      let in2 = inPoints[ref2][k];
      let out1 = outPoints[ref1][k];
      let out2 = outPoints[ref2][k];

      // If the reference points have the same coordinate but different
      // delta, inferred delta is zero.  Otherwise interpolate.
      if (in1 !== in2 || out1 === out2) {
        let scale = in1 === in2 ? 0 : (out2 - out1) / (in2 - in1);

        for (let p = p1; p <= p2; p++) {
          let out = inPoints[p][k];

          if (out <= in1) {
            out += out1 - in1;
          } else if (out >= in2) {
            out += out2 - in2;
          } else {
            out = out1 + (out - in1) * scale;
          }

          outPoints[p][k] = out;
        }
      }
    }
  }

  deltaShift(p1, p2, ref, inPoints, outPoints) {
    let deltaX = outPoints[ref].x - inPoints[ref].x;
    let deltaY = outPoints[ref].y - inPoints[ref].y;

    if (deltaX === 0 && deltaY === 0) {
      return;
    }

    for (let p = p1; p <= p2; p++) {
      if (p !== ref) {
        outPoints[p].x += deltaX;
        outPoints[p].y += deltaY;
      }
    }
  }

  getAdvanceAdjustment(gid, table) {
    let outerIndex, innerIndex;

    if (table.advanceWidthMapping) {
      let idx = gid;
      if (idx >= table.advanceWidthMapping.mapCount) {
        idx = table.advanceWidthMapping.mapCount - 1;
      }

      let entryFormat = table.advanceWidthMapping.entryFormat;
      ({outerIndex, innerIndex} = table.advanceWidthMapping.mapData[idx]);
    } else {
      outerIndex = 0;
      innerIndex = gid;
    }

    return this.getDelta(table.itemVariationStore, outerIndex, innerIndex);
  }

  // See pseudo code from `Font Variations Overview'
  // in the OpenType specification.
  getDelta(itemStore, outerIndex, innerIndex) {
    if (outerIndex >= itemStore.itemVariationData.length) {
      return 0;
    }

    let varData = itemStore.itemVariationData[outerIndex];
    if (innerIndex >= varData.deltaSets.length) {
      return 0;
    }

    let deltaSet = varData.deltaSets[innerIndex];
    let blendVector = this.getBlendVector(itemStore, outerIndex);
    let netAdjustment = 0;

    for (let master = 0; master < varData.regionIndexCount; master++) {
      netAdjustment += deltaSet.deltas[master] * blendVector[master];
    }

    return netAdjustment;
  }

  getBlendVector(itemStore, outerIndex) {
    let varData = itemStore.itemVariationData[outerIndex];
    if (this.blendVectors.has(varData)) {
      return this.blendVectors.get(varData);
    }

    let normalizedCoords = this.normalizedCoords;
    let blendVector = [];

    // outer loop steps through master designs to be blended
    for (let master = 0; master < varData.regionIndexCount; master++) {
      let scalar = 1;
      let regionIndex = varData.regionIndexes[master];
      let axes = itemStore.variationRegionList.variationRegions[regionIndex];

      // inner loop steps through axes in this region
      for (let j = 0; j < axes.length; j++) {
        let axis = axes[j];
        let axisScalar;

        // compute the scalar contribution of this axis
        // ignore invalid ranges
        if (axis.startCoord > axis.peakCoord || axis.peakCoord > axis.endCoord) {
          axisScalar = 1;

        } else if (axis.startCoord < 0 && axis.endCoord > 0 && axis.peakCoord !== 0) {
          axisScalar = 1;

        // peak of 0 means ignore this axis
        } else if (axis.peakCoord === 0) {
          axisScalar = 1;

        // ignore this region if coords are out of range
        } else if (normalizedCoords[j] < axis.startCoord || normalizedCoords[j] > axis.endCoord) {
          axisScalar = 0;

        // calculate a proportional factor
        } else {
          if (normalizedCoords[j] === axis.peakCoord) {
            axisScalar = 1;
          } else if (normalizedCoords[j] < axis.peakCoord) {
            axisScalar = (normalizedCoords[j] - axis.startCoord + Number.EPSILON) /
              (axis.peakCoord - axis.startCoord + Number.EPSILON);
          } else {
            axisScalar = (axis.endCoord - normalizedCoords[j] + Number.EPSILON) /
              (axis.endCoord - axis.peakCoord + Number.EPSILON);
          }
        }

        // take product of all the axis scalars
        scalar *= axisScalar;
      }

      blendVector[master] = scalar;
    }

    this.blendVectors.set(varData, blendVector);
    return blendVector;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/Path.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/glyph/Path.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var _BBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BBox */ "./src/modules/fontkit/src/glyph/BBox.js");


const SVG_COMMANDS = {
  moveTo: 'M',
  lineTo: 'L',
  quadraticCurveTo: 'Q',
  bezierCurveTo: 'C',
  closePath: 'Z'
};

/**
 * Path objects are returned by glyphs and represent the actual
 * vector outlines for each glyph in the font. Paths can be converted
 * to SVG path data strings, or to functions that can be applied to
 * render the path to a graphics context.
 */
class Path {
  constructor() {
    this.commands = [];
    this._bbox = null;
    this._cbox = null;
  }

  /**
   * Compiles the path to a JavaScript function that can be applied with
   * a graphics context in order to render the path.
   * @return {string}
   */
  toFunction() {
    return ctx => {
      this.commands.forEach(c => {
        return ctx[c.command].apply(ctx, c.args)
      })
    };
  }

  /**
   * Converts the path to an SVG path data string
   * @return {string}
   */
  toSVG() {
    let cmds = this.commands.map(c => {
      let args = c.args.map(arg => Math.round(arg * 100) / 100);
      return `${SVG_COMMANDS[c.command]}${args.join(' ')}`;
    });

    return cmds.join('');
  }

  /**
   * Gets the "control box" of a path.
   * This is like the bounding box, but it includes all points including
   * control points of bezier segments and is much faster to compute than
   * the real bounding box.
   * @type {BBox}
   */
  get cbox() {
    if (!this._cbox) {
      let cbox = new _BBox__WEBPACK_IMPORTED_MODULE_0__["default"];
      for (let command of this.commands) {
        for (let i = 0; i < command.args.length; i += 2) {
          cbox.addPoint(command.args[i], command.args[i + 1]);
        }
      }

      this._cbox = Object.freeze(cbox);
    }

    return this._cbox;
  }

  /**
   * Gets the exact bounding box of the path by evaluating curve segments.
   * Slower to compute than the control box, but more accurate.
   * @type {BBox}
   */
  get bbox() {
    if (this._bbox) {
      return this._bbox;
    }

    let bbox = new _BBox__WEBPACK_IMPORTED_MODULE_0__["default"];
    let cx = 0, cy = 0;

    let f = t => (
      Math.pow(1 - t, 3) * p0[i]
        + 3 * Math.pow(1 - t, 2) * t * p1[i]
        + 3 * (1 - t) * Math.pow(t, 2) * p2[i]
        + Math.pow(t, 3) * p3[i]
    );

    for (let c of this.commands) {
      switch (c.command) {
        case 'moveTo':
        case 'lineTo':
          let [x, y] = c.args;
          bbox.addPoint(x, y);
          cx = x;
          cy = y;
          break;

        case 'quadraticCurveTo':
        case 'bezierCurveTo':
          if (c.command === 'quadraticCurveTo') {
            // http://fontforge.org/bezier.html
            var [qp1x, qp1y, p3x, p3y] = c.args;
            var cp1x = cx + 2 / 3 * (qp1x - cx);    // CP1 = QP0 + 2/3 * (QP1-QP0)
            var cp1y = cy + 2 / 3 * (qp1y - cy);
            var cp2x = p3x + 2 / 3 * (qp1x - p3x);  // CP2 = QP2 + 2/3 * (QP1-QP2)
            var cp2y = p3y + 2 / 3 * (qp1y - p3y);
          } else {
            var [cp1x, cp1y, cp2x, cp2y, p3x, p3y] = c.args;
          }

          // http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
          bbox.addPoint(p3x, p3y);

          var p0 = [cx, cy];
          var p1 = [cp1x, cp1y];
          var p2 = [cp2x, cp2y];
          var p3 = [p3x, p3y];

          for (var i = 0; i <= 1; i++) {
            let b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
            let a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
            c = 3 * p1[i] - 3 * p0[i];

            if (a === 0) {
              if (b === 0) {
                continue;
              }

              let t = -c / b;
              if (0 < t && t < 1) {
                if (i === 0) {
                  bbox.addPoint(f(t), bbox.maxY);
                } else if (i === 1) {
                  bbox.addPoint(bbox.maxX, f(t));
                }
              }

              continue;
            }

            let b2ac = Math.pow(b, 2) - 4 * c * a;
            if (b2ac < 0) {
              continue;
            }

            let t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
            if (0 < t1 && t1 < 1) {
              if (i === 0) {
                bbox.addPoint(f(t1), bbox.maxY);
              } else if (i === 1) {
                bbox.addPoint(bbox.maxX, f(t1));
              }
            }

            let t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
            if (0 < t2 && t2 < 1) {
              if (i === 0) {
                bbox.addPoint(f(t2), bbox.maxY);
              } else if (i === 1) {
                bbox.addPoint(bbox.maxX, f(t2));
              }
            }
          }

          cx = p3x;
          cy = p3y;
          break;
      }
    }

    return this._bbox = Object.freeze(bbox);
  }

  /**
   * Applies a mapping function to each point in the path.
   * @param {function} fn
   * @return {Path}
   */
  mapPoints(fn) {
    let path = new Path;

    for (let c of this.commands) {
      let args = [];
      for (let i = 0; i < c.args.length; i += 2) {
        let [x, y] = fn(c.args[i], c.args[i + 1]);
        args.push(x, y);
      }

      path[c.command](...args);
    }

    return path;
  }

  /**
   * Transforms the path by the given matrix.
   */
  transform(m0, m1, m2, m3, m4, m5) {
    return this.mapPoints((x, y) => {
      const tx = m0 * x + m2 * y + m4;
      const ty = m1 * x + m3 * y + m5;
      return [tx, ty];
    });
  }

  /**
   * Translates the path by the given offset.
   */
  translate(x, y) {
    return this.transform(1, 0, 0, 1, x, y);
  }

  /**
   * Rotates the path by the given angle (in radians).
   */
  rotate(angle) {
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    return this.transform(cos, sin, -sin, cos, 0, 0);
  }

  /**
   * Scales the path.
   */
  scale(scaleX, scaleY = scaleX) {
    return this.transform(scaleX, 0, 0, scaleY, 0, 0);
  }
}

for (let command of ['moveTo', 'lineTo', 'quadraticCurveTo', 'bezierCurveTo', 'closePath']) {
  Path.prototype[command] = function(...args) {
    this._bbox = this._cbox = null;
    this.commands.push({
      command,
      args
    });

    return this;
  };
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/SBIXGlyph.js":
/*!****************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/SBIXGlyph.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SBIXGlyph)
/* harmony export */ });
/* harmony import */ var _TTFGlyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TTFGlyph */ "./src/modules/fontkit/src/glyph/TTFGlyph.js");
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");



let SBIXImage = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  originX: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  originY: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  type: new restructure__WEBPACK_IMPORTED_MODULE_1__.String(4),
  data: new restructure__WEBPACK_IMPORTED_MODULE_1__.Buffer(t => t.parent.buflen - t._currentOffset)
});

/**
 * Represents a color (e.g. emoji) glyph in Apple's SBIX format.
 */
class SBIXGlyph extends _TTFGlyph__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'SBIX';

  /**
   * Returns an object representing a glyph image at the given point size.
   * The object has a data property with a Buffer containing the actual image data,
   * along with the image type, and origin.
   *
   * @param {number} size
   * @return {object}
   */
  getImageForSize(size) {
    for (let i = 0; i < this._font.sbix.imageTables.length; i++) {
      var table = this._font.sbix.imageTables[i];
      if (table.ppem >= size) { break; }
    }

    let offsets = table.imageOffsets;
    let start = offsets[this.id];
    let end = offsets[this.id + 1];

    if (start === end) {
      return null;
    }

    this._font.stream.pos = start;
    return SBIXImage.decode(this._font.stream, {buflen: end - start});
  }

  render(ctx, size) {
    let img = this.getImageForSize(size);
    if (img != null) {
      let scale = size / this._font.unitsPerEm;
      ctx.image(img.data, {height: size, x: img.originX, y: (this.bbox.minY - img.originY) * scale});
    }

    if (this._font.sbix.flags.renderOutlines) {
      super.render(ctx, size);
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/StandardNames.js":
/*!********************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/StandardNames.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  '.notdef', '.null', 'nonmarkingreturn', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent',
  'ampersand', 'quotesingle', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash',
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less',
  'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright',
  'asciicircum', 'underscore', 'grave', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde',
  'Adieresis', 'Aring', 'Ccedilla', 'Eacute', 'Ntilde', 'Odieresis', 'Udieresis', 'aacute', 'agrave',
  'acircumflex', 'adieresis', 'atilde', 'aring', 'ccedilla', 'eacute', 'egrave', 'ecircumflex', 'edieresis',
  'iacute', 'igrave', 'icircumflex', 'idieresis', 'ntilde', 'oacute', 'ograve', 'ocircumflex', 'odieresis',
  'otilde', 'uacute', 'ugrave', 'ucircumflex', 'udieresis', 'dagger', 'degree', 'cent', 'sterling', 'section',
  'bullet', 'paragraph', 'germandbls', 'registered', 'copyright', 'trademark', 'acute', 'dieresis', 'notequal',
  'AE', 'Oslash', 'infinity', 'plusminus', 'lessequal', 'greaterequal', 'yen', 'mu', 'partialdiff', 'summation',
  'product', 'pi', 'integral', 'ordfeminine', 'ordmasculine', 'Omega', 'ae', 'oslash', 'questiondown',
  'exclamdown', 'logicalnot', 'radical', 'florin', 'approxequal', 'Delta', 'guillemotleft', 'guillemotright',
  'ellipsis', 'nonbreakingspace', 'Agrave', 'Atilde', 'Otilde', 'OE', 'oe', 'endash', 'emdash', 'quotedblleft',
  'quotedblright', 'quoteleft', 'quoteright', 'divide', 'lozenge', 'ydieresis', 'Ydieresis', 'fraction',
  'currency', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'daggerdbl', 'periodcentered', 'quotesinglbase',
  'quotedblbase', 'perthousand', 'Acircumflex', 'Ecircumflex', 'Aacute', 'Edieresis', 'Egrave', 'Iacute',
  'Icircumflex', 'Idieresis', 'Igrave', 'Oacute', 'Ocircumflex', 'apple', 'Ograve', 'Uacute', 'Ucircumflex',
  'Ugrave', 'dotlessi', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'ring', 'cedilla', 'hungarumlaut',
  'ogonek', 'caron', 'Lslash', 'lslash', 'Scaron', 'scaron', 'Zcaron', 'zcaron', 'brokenbar', 'Eth', 'eth',
  'Yacute', 'yacute', 'Thorn', 'thorn', 'minus', 'multiply', 'onesuperior', 'twosuperior', 'threesuperior',
  'onehalf', 'onequarter', 'threequarters', 'franc', 'Gbreve', 'gbreve', 'Idotaccent', 'Scedilla', 'scedilla',
  'Cacute', 'cacute', 'Ccaron', 'ccaron', 'dcroat'
]);


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/TTFGlyph.js":
/*!***************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/TTFGlyph.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point),
/* harmony export */   "default": () => (/* binding */ TTFGlyph)
/* harmony export */ });
/* harmony import */ var _Glyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Glyph */ "./src/modules/fontkit/src/glyph/Glyph.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Path */ "./src/modules/fontkit/src/glyph/Path.js");
/* harmony import */ var _BBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BBox */ "./src/modules/fontkit/src/glyph/BBox.js");
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");





// The header for both simple and composite glyphs
let GlyfHeader = new restructure__WEBPACK_IMPORTED_MODULE_3__.Struct({
  numberOfContours: restructure__WEBPACK_IMPORTED_MODULE_3__.int16, // if negative, this is a composite glyph
  xMin:             restructure__WEBPACK_IMPORTED_MODULE_3__.int16,
  yMin:             restructure__WEBPACK_IMPORTED_MODULE_3__.int16,
  xMax:             restructure__WEBPACK_IMPORTED_MODULE_3__.int16,
  yMax:             restructure__WEBPACK_IMPORTED_MODULE_3__.int16
});

// Flags for simple glyphs
const ON_CURVE        = 1 << 0;
const X_SHORT_VECTOR  = 1 << 1;
const Y_SHORT_VECTOR  = 1 << 2;
const REPEAT          = 1 << 3;
const SAME_X          = 1 << 4;
const SAME_Y          = 1 << 5;

// Flags for composite glyphs
const ARG_1_AND_2_ARE_WORDS     = 1 << 0;
const ARGS_ARE_XY_VALUES        = 1 << 1;
const ROUND_XY_TO_GRID          = 1 << 2;
const WE_HAVE_A_SCALE           = 1 << 3;
const MORE_COMPONENTS           = 1 << 5;
const WE_HAVE_AN_X_AND_Y_SCALE  = 1 << 6;
const WE_HAVE_A_TWO_BY_TWO      = 1 << 7;
const WE_HAVE_INSTRUCTIONS      = 1 << 8;
const USE_MY_METRICS            = 1 << 9;
const OVERLAP_COMPOUND          = 1 << 10;
const SCALED_COMPONENT_OFFSET   = 1 << 11;
const UNSCALED_COMPONENT_OFFSET = 1 << 12;

// Represents a point in a simple glyph
class Point {
  constructor(onCurve, endContour, x = 0, y = 0) {
    this.onCurve = onCurve;
    this.endContour = endContour;
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Point(this.onCurve, this.endContour, this.x, this.y);
  }
}

// Represents a component in a composite glyph
class Component {
  constructor(glyphID, dx, dy) {
    this.glyphID = glyphID;
    this.dx = dx;
    this.dy = dy;
    this.pos = 0;
    this.scaleX = this.scaleY = 1;
    this.scale01 = this.scale10 = 0;
  }
}

/**
 * Represents a TrueType glyph.
 */
class TTFGlyph extends _Glyph__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'TTF';

  // Parses just the glyph header and returns the bounding box
  _getCBox(internal) {
    // We need to decode the glyph if variation processing is requested,
    // so it's easier just to recompute the path's cbox after decoding.
    if (this._font._variationProcessor && !internal) {
      return this.path.cbox;
    }

    let stream = this._font._getTableStream('glyf');
    stream.pos += this._font.loca.offsets[this.id];
    let glyph = GlyfHeader.decode(stream);

    let cbox = new _BBox__WEBPACK_IMPORTED_MODULE_2__["default"](glyph.xMin, glyph.yMin, glyph.xMax, glyph.yMax);
    return Object.freeze(cbox);
  }

  // Parses a single glyph coordinate
  _parseGlyphCoord(stream, prev, short, same) {
    if (short) {
      var val = stream.readUInt8();
      if (!same) {
        val = -val;
      }

      val += prev;
    } else {
      if (same) {
        var val = prev;
      } else {
        var val = prev + stream.readInt16BE();
      }
    }

    return val;
  }

  // Decodes the glyph data into points for simple glyphs,
  // or components for composite glyphs
  _decode() {
    let glyfPos = this._font.loca.offsets[this.id];
    let nextPos = this._font.loca.offsets[this.id + 1];

    // Nothing to do if there is no data for this glyph
    if (glyfPos === nextPos) { return null; }

    let stream = this._font._getTableStream('glyf');
    stream.pos += glyfPos;
    let startPos = stream.pos;

    let glyph = GlyfHeader.decode(stream);

    if (glyph.numberOfContours > 0) {
      this._decodeSimple(glyph, stream);

    } else if (glyph.numberOfContours < 0) {
      this._decodeComposite(glyph, stream, startPos);
    }

    return glyph;
  }

  _decodeSimple(glyph, stream) {
    // this is a simple glyph
    glyph.points = [];

    let endPtsOfContours = new restructure__WEBPACK_IMPORTED_MODULE_3__.Array(restructure__WEBPACK_IMPORTED_MODULE_3__.uint16, glyph.numberOfContours).decode(stream);
    glyph.instructions = new restructure__WEBPACK_IMPORTED_MODULE_3__.Array(restructure__WEBPACK_IMPORTED_MODULE_3__.uint8, restructure__WEBPACK_IMPORTED_MODULE_3__.uint16).decode(stream);

    let flags = [];
    let numCoords = endPtsOfContours[endPtsOfContours.length - 1] + 1;

    while (flags.length < numCoords) {
      var flag = stream.readUInt8();
      flags.push(flag);

      // check for repeat flag
      if (flag & REPEAT) {
        let count = stream.readUInt8();
        for (let j = 0; j < count; j++) {
          flags.push(flag);
        }
      }
    }

    for (var i = 0; i < flags.length; i++) {
      var flag = flags[i];
      let point = new Point(!!(flag & ON_CURVE), endPtsOfContours.indexOf(i) >= 0, 0, 0);
      glyph.points.push(point);
    }

    let px = 0;
    for (var i = 0; i < flags.length; i++) {
      var flag = flags[i];
      glyph.points[i].x = px = this._parseGlyphCoord(stream, px, flag & X_SHORT_VECTOR, flag & SAME_X);
    }

    let py = 0;
    for (var i = 0; i < flags.length; i++) {
      var flag = flags[i];
      glyph.points[i].y = py = this._parseGlyphCoord(stream, py, flag & Y_SHORT_VECTOR, flag & SAME_Y);
    }

    if (this._font._variationProcessor) {
      let points = glyph.points.slice();
      points.push(...this._getPhantomPoints(glyph));

      this._font._variationProcessor.transformPoints(this.id, points);
      glyph.phantomPoints = points.slice(-4);
    }

    return;
  }

  _decodeComposite(glyph, stream, offset = 0) {
    // this is a composite glyph
    glyph.components = [];
    let haveInstructions = false;
    let flags = MORE_COMPONENTS;

    while (flags & MORE_COMPONENTS) {
      flags = stream.readUInt16BE();
      let gPos = stream.pos - offset;
      let glyphID = stream.readUInt16BE();
      if (!haveInstructions) {
        haveInstructions = (flags & WE_HAVE_INSTRUCTIONS) !== 0;
      }

      if (flags & ARG_1_AND_2_ARE_WORDS) {
        var dx = stream.readInt16BE();
        var dy = stream.readInt16BE();
      } else {
        var dx = stream.readInt8();
        var dy = stream.readInt8();
      }

      var component = new Component(glyphID, dx, dy);
      component.pos = gPos;

      if (flags & WE_HAVE_A_SCALE) {
        // fixed number with 14 bits of fraction
        component.scaleX =
        component.scaleY = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;

      } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
        component.scaleX = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;
        component.scaleY = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;

      } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
        component.scaleX  = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;
        component.scale01 = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;
        component.scale10 = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;
        component.scaleY  = ((stream.readUInt8() << 24) | (stream.readUInt8() << 16)) / 1073741824;
      }

      glyph.components.push(component);
    }

    if (this._font._variationProcessor) {
      let points = [];
      for (let j = 0; j < glyph.components.length; j++) {
        var component = glyph.components[j];
        points.push(new Point(true, true, component.dx, component.dy));
      }

      points.push(...this._getPhantomPoints(glyph));

      this._font._variationProcessor.transformPoints(this.id, points);
      glyph.phantomPoints = points.splice(-4, 4);

      for (let i = 0; i < points.length; i++) {
        let point = points[i];
        glyph.components[i].dx = point.x;
        glyph.components[i].dy = point.y;
      }
    }

    return haveInstructions;
  }

  _getPhantomPoints(glyph) {
    let cbox = this._getCBox(true);
    if (this._metrics == null) {
      this._metrics = _Glyph__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._getMetrics.call(this, cbox);
    }

    let { advanceWidth, advanceHeight, leftBearing, topBearing } = this._metrics;

    return [
      new Point(false, true, glyph.xMin - leftBearing, 0),
      new Point(false, true, glyph.xMin - leftBearing + advanceWidth, 0),
      new Point(false, true, 0, glyph.yMax + topBearing),
      new Point(false, true, 0, glyph.yMax + topBearing + advanceHeight)
    ];
  }

  // Decodes font data, resolves composite glyphs, and returns an array of contours
  _getContours() {
    let glyph = this._decode();
    if (!glyph) {
      return [];
    }

    let points = [];

    if (glyph.numberOfContours < 0) {
      // resolve composite glyphs
      for (let component of glyph.components) {
        let contours = this._font.getGlyph(component.glyphID)._getContours();
        for (let i = 0; i < contours.length; i++) {
          let contour = contours[i];
          for (let j = 0; j < contour.length; j++) {
            let point = contour[j];
            let x = point.x * component.scaleX + point.y * component.scale01 + component.dx;
            let y = point.y * component.scaleY + point.x * component.scale10 + component.dy;
            points.push(new Point(point.onCurve, point.endContour, x, y));
          }
        }
      }
    } else {
      points = glyph.points || [];
    }

    // Recompute and cache metrics if we performed variation processing, and don't have an HVAR table
    if (glyph.phantomPoints && !this._font.directory.tables.HVAR) {
      this._metrics.advanceWidth  = glyph.phantomPoints[1].x - glyph.phantomPoints[0].x;
      this._metrics.advanceHeight = glyph.phantomPoints[3].y - glyph.phantomPoints[2].y;
      this._metrics.leftBearing   = glyph.xMin - glyph.phantomPoints[0].x;
      this._metrics.topBearing    = glyph.phantomPoints[2].y - glyph.yMax;
    }

    let contours = [];
    let cur = [];
    for (let k = 0; k < points.length; k++) {
      var point = points[k];
      cur.push(point);
      if (point.endContour) {
        contours.push(cur);
        cur = [];
      }
    }

    return contours;
  }

  _getMetrics() {
    if (this._metrics) {
      return this._metrics;
    }

    let cbox = this._getCBox(true);
    super._getMetrics(cbox);

    if (this._font._variationProcessor && !this._font.HVAR) {
      // No HVAR table, decode the glyph. This triggers recomputation of metrics.
      this.path;
    }

    return this._metrics;
  }

  // Converts contours to a Path object that can be rendered
  _getPath() {
    let contours = this._getContours();
    let path = new _Path__WEBPACK_IMPORTED_MODULE_1__["default"];

    for (let i = 0; i < contours.length; i++) {
      let contour = contours[i];
      let firstPt = contour[0];
      let lastPt = contour[contour.length - 1];
      let start = 0;

      if (firstPt.onCurve) {
        // The first point will be consumed by the moveTo command, so skip in the loop
        var curvePt = null;
        start = 1;
      } else {
        if (lastPt.onCurve) {
          // Start at the last point if the first point is off curve and the last point is on curve
          firstPt = lastPt;
        } else {
          // Start at the middle if both the first and last points are off curve
          firstPt = new Point(false, false, (firstPt.x + lastPt.x) / 2, (firstPt.y + lastPt.y) / 2);
        }

        var curvePt = firstPt;
      }

      path.moveTo(firstPt.x, firstPt.y);

      for (let j = start; j < contour.length; j++) {
        let pt = contour[j];
        let prevPt = j === 0 ? firstPt : contour[j - 1];

        if (prevPt.onCurve && pt.onCurve) {
          path.lineTo(pt.x, pt.y);

        } else if (prevPt.onCurve && !pt.onCurve) {
          var curvePt = pt;

        } else if (!prevPt.onCurve && !pt.onCurve) {
          let midX = (prevPt.x + pt.x) / 2;
          let midY = (prevPt.y + pt.y) / 2;
          path.quadraticCurveTo(prevPt.x, prevPt.y, midX, midY);
          var curvePt = pt;

        } else if (!prevPt.onCurve && pt.onCurve) {
          path.quadraticCurveTo(curvePt.x, curvePt.y, pt.x, pt.y);
          var curvePt = null;

        } else {
          throw new Error("Unknown TTF path state");
        }
      }

      // Connect the first and last points
      if (curvePt) {
        path.quadraticCurveTo(curvePt.x, curvePt.y, firstPt.x, firstPt.y);
      }

      path.closePath();
    }

    return path;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/TTFGlyphEncoder.js":
/*!**********************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/TTFGlyphEncoder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTFGlyphEncoder)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// Flags for simple glyphs
const ON_CURVE = 1 << 0;
const X_SHORT_VECTOR = 1 << 1;
const Y_SHORT_VECTOR = 1 << 2;
const REPEAT = 1 << 3;
const SAME_X = 1 << 4;
const SAME_Y = 1 << 5;

class Point {
  static size(val) {
    return val >= 0 && val <= 255 ? 1 : 2;
  }

  static encode(stream, value) {
    if (value >= 0 && value <= 255) {
      stream.writeUInt8(value);
    } else {
      stream.writeInt16BE(value);
    }
  }
}

let Glyf = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  numberOfContours: restructure__WEBPACK_IMPORTED_MODULE_0__.int16, // if negative, this is a composite glyph
  xMin: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  yMin: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  xMax: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  yMax: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  endPtsOfContours: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, "numberOfContours"),
  instructions: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  flags: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 0),
  xPoints: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Point, 0),
  yPoints: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Point, 0),
});

/**
 * Encodes TrueType glyph outlines
 */
class TTFGlyphEncoder {
  //AUiT
  encodeSimple2(contours, path, instructions = []) {
    let xPoints = [];
    let yPoints = [];
    let endPtsOfContours = [];
    let flags = [];
    let lastX = 0,
      lastY = 0,
      x,
      y,
      lastFlag = 0;
    let pointCount = 0;

    for (let i = 0; i < contours.length; i++) {
      let pt = contours[i];
      let flag = 0;
      if (pt.onCurve) {
        flag |= ON_CURVE;
      }
      if (pt.endContour) {
        endPtsOfContours.push(i);
      }

      flag = this._encodePoint(
        pt.x,
        lastX,
        xPoints,
        flag,
        X_SHORT_VECTOR,
        SAME_X
      );
      flag = this._encodePoint(
        pt.y,
        lastY,
        yPoints,
        flag,
        Y_SHORT_VECTOR,
        SAME_Y
      );
      lastX = pt.x;
      lastY = pt.y;
      // if (flagx != flag) .log('flag not flag');
      flags.push(flag);
    }

/*     if (endPtsOfContours.length > 1) {
      .warn(
        "TTFGlyphEncoder Test multiple endContour",
        endPtsOfContours
      );
    }
 */    let bbox = path.bbox;
    let glyf = {
      numberOfContours: endPtsOfContours.length,
      xMin: bbox.minX,
      yMin: bbox.minY,
      xMax: bbox.maxX,
      yMax: bbox.maxY,
      endPtsOfContours: endPtsOfContours,
      instructions: instructions,
      flags: flags,
      xPoints: xPoints,
      yPoints: yPoints,
    };

    let size = Glyf.size(glyf);
    let tail = 4 - (size % 4);

    let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.EncodeStream(new Uint8Array(size + tail));
    Glyf.encode(stream, glyf);

    // Align to 4-byte length
    if (tail !== 0) {
      stream.fill(0, tail);
    }

    return stream.buffer;
  }

  encodeSimple(path, instructions = []) {
    let endPtsOfContours = [];
    let xPoints = [];
    let yPoints = [];
    let flags = [];
    let same = 0;
    let lastX = 0,
      lastY = 0,
      lastFlag = 0;
    let pointCount = 0;
    
    for (let i = 0; i < path.commands.length; i++) {
      let c = path.commands[i];

      for (let j = 0; j < c.args.length; j += 2) {
        /*        if (j == 0) {
          lastX = 0;
          lastY = 0;
} */

        let x = c.args[j];
        let y = c.args[j + 1];
        let flag = 0;

        // If the ending point of a quadratic curve is the midpoint
        // between the control point and the control point of the next
        // quadratic curve, we can omit the ending point.
        if (c.command === "quadraticCurveTo" && j === 2) {
          let next = path.commands[i + 1];
          if (next && next.command === "quadraticCurveTo") {
            let midX = (lastX + next.args[0]) / 2;
            let midY = (lastY + next.args[1]) / 2;

            if (x === midX && y === midY) {
              continue;
            }
          }
        }

        // All points except control points are on curve.
        if (!(c.command === "quadraticCurveTo" && j === 0)) {
          flag |= ON_CURVE;
        }

        flag = this._encodePoint(
          x,
          lastX,
          xPoints,
          flag,
          X_SHORT_VECTOR,
          SAME_X
        );
        flag = this._encodePoint(
          y,
          lastY,
          yPoints,
          flag,
          Y_SHORT_VECTOR,
          SAME_Y
        );

        if (flag === lastFlag && same < 255) {
          flags[flags.length - 1] |= REPEAT;
          same++;
        } else {
          if (same > 0) {
            flags.push(same);
            same = 0;
          }

          flags.push(flag);
          lastFlag = flag;
        }

        lastX = x;
        lastY = y;
        pointCount++;
      }

      if (c.command === "closePath") {
        endPtsOfContours.push(pointCount - 1);
      }
    }
    if (same > 0) {
      // AUIT
      //  "local fontkit ...");
      flags.push(same);
      same = 0;
    }
    // Close the path if the last command didn't already
    if (
      path.commands.length > 1 &&
      path.commands[path.commands.length - 1].command !== "closePath"
    ) {
      endPtsOfContours.push(pointCount - 1);
    }

    let bbox = path.bbox;
    let glyf = {
      numberOfContours: endPtsOfContours.length,
      xMin: bbox.minX,
      yMin: bbox.minY,
      xMax: bbox.maxX,
      yMax: bbox.maxY,
      endPtsOfContours: endPtsOfContours,
      instructions: instructions,
      flags: flags,
      xPoints: xPoints,
      yPoints: yPoints,
    };

    let size = Glyf.size(glyf);
    let tail = 4 - (size % 4);

    //let stream = new r.EncodeStream(size + tail);
    // Fix auit
    let stream = new restructure__WEBPACK_IMPORTED_MODULE_0__.EncodeStream(new Uint8Array(size + tail));
    Glyf.encode(stream, glyf);

    // Align to 4-byte length
    if (tail !== 0) {
      stream.fill(0, tail);
    }

    return stream.buffer;
  }

  _encodePoint(value, last, points, flag, shortFlag, sameFlag) {
    let diff = value - last;

    if (value === last) {
      flag |= sameFlag;
    } else {
      if (-255 <= diff && diff <= 255) {
        flag |= shortFlag;
        if (diff < 0) {
          diff = -diff;
        } else {
          flag |= sameFlag;
        }
      }

      points.push(diff);
    }

    return flag;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/glyph/WOFF2Glyph.js":
/*!*****************************************************!*\
  !*** ./src/modules/fontkit/src/glyph/WOFF2Glyph.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WOFF2Glyph)
/* harmony export */ });
/* harmony import */ var _TTFGlyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TTFGlyph */ "./src/modules/fontkit/src/glyph/TTFGlyph.js");


/**
 * Represents a TrueType glyph in the WOFF2 format, which compresses glyphs differently.
 */
class WOFF2Glyph extends _TTFGlyph__WEBPACK_IMPORTED_MODULE_0__["default"] {
  type = 'WOFF2';

  _decode() {
    // We have to decode in advance (in WOFF2Font), so just return the pre-decoded data.
    return this._font._transformedGlyphs[this.id];
  }

  _getCBox() {
    return this.path.bbox;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/index.js":
/*!******************************************!*\
  !*** ./src/modules/fontkit/src/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.create),
/* harmony export */   defaultLanguage: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.defaultLanguage),
/* harmony export */   logErrors: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.logErrors),
/* harmony export */   registerFormat: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.registerFormat),
/* harmony export */   setDefaultLanguage: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.setDefaultLanguage)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/modules/fontkit/src/base.js");
/* harmony import */ var _TTFFont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TTFFont */ "./src/modules/fontkit/src/TTFFont.js");
/* harmony import */ var _WOFFFont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WOFFFont */ "./src/modules/fontkit/src/WOFFFont.js");
/* harmony import */ var _WOFF2Font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WOFF2Font */ "./src/modules/fontkit/src/WOFF2Font.js");
/* harmony import */ var _TrueTypeCollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrueTypeCollection */ "./src/modules/fontkit/src/TrueTypeCollection.js");
/* harmony import */ var _DFont__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DFont */ "./src/modules/fontkit/src/DFont.js");







// Register font formats
(0,_base__WEBPACK_IMPORTED_MODULE_0__.registerFormat)(_TTFFont__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_base__WEBPACK_IMPORTED_MODULE_0__.registerFormat)(_WOFFFont__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,_base__WEBPACK_IMPORTED_MODULE_0__.registerFormat)(_WOFF2Font__WEBPACK_IMPORTED_MODULE_3__["default"]);
(0,_base__WEBPACK_IMPORTED_MODULE_0__.registerFormat)(_TrueTypeCollection__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_base__WEBPACK_IMPORTED_MODULE_0__.registerFormat)(_DFont__WEBPACK_IMPORTED_MODULE_5__["default"]);




/***/ }),

/***/ "./src/modules/fontkit/src/layout/GlyphPosition.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/layout/GlyphPosition.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlyphPosition)
/* harmony export */ });
/**
 * Represents positioning information for a glyph in a GlyphRun.
 */
class GlyphPosition {
  constructor(xAdvance = 0, yAdvance = 0, xOffset = 0, yOffset = 0) {
    /**
     * The amount to move the virtual pen in the X direction after rendering this glyph.
     * @type {number}
     */
    this.xAdvance = xAdvance;

    /**
     * The amount to move the virtual pen in the Y direction after rendering this glyph.
     * @type {number}
     */
    this.yAdvance = yAdvance;

    /**
     * The offset from the pen position in the X direction at which to render this glyph.
     * @type {number}
     */
    this.xOffset = xOffset;

    /**
     * The offset from the pen position in the Y direction at which to render this glyph.
     * @type {number}
     */
    this.yOffset = yOffset;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/layout/GlyphRun.js":
/*!****************************************************!*\
  !*** ./src/modules/fontkit/src/layout/GlyphRun.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlyphRun)
/* harmony export */ });
/* harmony import */ var _glyph_BBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glyph/BBox */ "./src/modules/fontkit/src/glyph/BBox.js");
/* harmony import */ var _layout_Script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Script */ "./src/modules/fontkit/src/layout/Script.js");



/**
 * Represents a run of Glyph and GlyphPosition objects.
 * Returned by the font layout method.
 */
class GlyphRun {
  constructor(glyphs, features, script, language, direction) {
    /**
     * An array of Glyph objects in the run
     * @type {Glyph[]}
     */
    this.glyphs = glyphs;

    /**
     * An array of GlyphPosition objects for each glyph in the run
     * @type {GlyphPosition[]}
     */
    this.positions = null;

    /**
     * The script that was requested for shaping. This was either passed in or detected automatically.
     * @type {string}
     */
    this.script = script;

    /**
     * The language requested for shaping, as passed in. If `null`, the default language for the
     * script was used.
     * @type {string}
     */
    this.language = language || null;

    /**
     * The direction requested for shaping, as passed in (either ltr or rtl).
     * If `null`, the default direction of the script is used.
     * @type {string}
     */
    this.direction = direction || _layout_Script__WEBPACK_IMPORTED_MODULE_1__.direction(script);

    /**
     * The features requested during shaping. This is a combination of user
     * specified features and features chosen by the shaper.
     * @type {object}
     */
    this.features = {};

    // Convert features to an object
    if (Array.isArray(features)) {
      for (let tag of features) {
        this.features[tag] = true;
      }
    } else if (typeof features === 'object') {
      this.features = features;
    }
  }

  /**
   * The total advance width of the run.
   * @type {number}
   */
  get advanceWidth() {
    let width = 0;
    for (let position of this.positions) {
      width += position.xAdvance;
    }

    return width;
  }

 /**
  * The total advance height of the run.
  * @type {number}
  */
  get advanceHeight() {
    let height = 0;
    for (let position of this.positions) {
      height += position.yAdvance;
    }

    return height;
  }

 /**
  * The bounding box containing all glyphs in the run.
  * @type {BBox}
  */
  get bbox() {
    let bbox = new _glyph_BBox__WEBPACK_IMPORTED_MODULE_0__["default"];

    let x = 0;
    let y = 0;
    for (let index = 0; index < this.glyphs.length; index++) {
      let glyph = this.glyphs[index];
      let p = this.positions[index];
      let b = glyph.bbox;

      bbox.addPoint(b.minX + x + p.xOffset, b.minY + y + p.yOffset);
      bbox.addPoint(b.maxX + x + p.xOffset, b.maxY + y + p.yOffset);

      x += p.xAdvance;
      y += p.yAdvance;
    }

    return bbox;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/layout/KernProcessor.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/layout/KernProcessor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KernProcessor)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/modules/fontkit/src/utils.js");


class KernProcessor {
  constructor(font) {
    this.kern = font.kern;
  }

  process(glyphs, positions) {
    for (let glyphIndex = 0; glyphIndex < glyphs.length - 1; glyphIndex++) {
      let left = glyphs[glyphIndex].id;
      let right = glyphs[glyphIndex + 1].id;
      positions[glyphIndex].xAdvance += this.getKerning(left, right);
    }
  }

  getKerning(left, right) {
    let res = 0;

    for (let table of this.kern.tables) {
      if (table.coverage.crossStream) {
        continue;
      }

      switch (table.version) {
        case 0:
          if (!table.coverage.horizontal) {
            continue;
          }

          break;
        case 1:
          if (table.coverage.vertical || table.coverage.variation) {
            continue;
          }

          break;
        default:
          throw new Error(`Unsupported kerning table version ${table.version}`);
      }

      let val = 0;
      let s = table.subtable;
      switch (table.format) {
        case 0:
          let pairIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(s.pairs, function (pair) {
            return (left - pair.left) || (right - pair.right);
          });

          if (pairIdx >= 0) {
            val = s.pairs[pairIdx].value;
          }

          break;

        case 2:
          let leftOffset = 0, rightOffset = 0;
          if (left >= s.leftTable.firstGlyph && left < s.leftTable.firstGlyph + s.leftTable.nGlyphs) {
            leftOffset = s.leftTable.offsets[left - s.leftTable.firstGlyph];
          } else {
            leftOffset = s.array.off;
          }

          if (right >= s.rightTable.firstGlyph && right < s.rightTable.firstGlyph + s.rightTable.nGlyphs) {
            rightOffset = s.rightTable.offsets[right - s.rightTable.firstGlyph];
          }

          let index = (leftOffset + rightOffset - s.array.off) / 2;
          val = s.array.values.get(index);
          break;

        case 3:
          if (left >= s.glyphCount || right >= s.glyphCount) {
            return 0;
          }

          val = s.kernValue[s.kernIndex[s.leftClass[left] * s.rightClassCount + s.rightClass[right]]];
          break;

        default:
          throw new Error(`Unsupported kerning sub-table format ${table.format}`);
      }

      // Microsoft supports the override flag, which resets the result
      // Otherwise, the sum of the results from all subtables is returned
      if (table.coverage.override) {
        res = val;
      } else {
        res += val;
      }
    }

    return res;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/layout/LayoutEngine.js":
/*!********************************************************!*\
  !*** ./src/modules/fontkit/src/layout/LayoutEngine.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutEngine)
/* harmony export */ });
/* harmony import */ var _KernProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KernProcessor */ "./src/modules/fontkit/src/layout/KernProcessor.js");
/* harmony import */ var _UnicodeLayoutEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnicodeLayoutEngine */ "./src/modules/fontkit/src/layout/UnicodeLayoutEngine.js");
/* harmony import */ var _GlyphRun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlyphRun */ "./src/modules/fontkit/src/layout/GlyphRun.js");
/* harmony import */ var _GlyphPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlyphPosition */ "./src/modules/fontkit/src/layout/GlyphPosition.js");
/* harmony import */ var _Script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Script */ "./src/modules/fontkit/src/layout/Script.js");
/* harmony import */ var _aat_AATLayoutEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aat/AATLayoutEngine */ "./src/modules/fontkit/src/aat/AATLayoutEngine.js");
/* harmony import */ var _opentype_OTLayoutEngine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../opentype/OTLayoutEngine */ "./src/modules/fontkit/src/opentype/OTLayoutEngine.js");








class LayoutEngine {
  constructor(font) {
    this.font = font;
    this.unicodeLayoutEngine = null;
    this.kernProcessor = null;

    // Choose an advanced layout engine. We try the AAT morx table first since more
    // scripts are currently supported because the shaping logic is built into the font.
    if (this.font.morx) {
      this.engine = new _aat_AATLayoutEngine__WEBPACK_IMPORTED_MODULE_5__["default"](this.font);

    } else if (this.font.GSUB || this.font.GPOS) {
      this.engine = new _opentype_OTLayoutEngine__WEBPACK_IMPORTED_MODULE_6__["default"](this.font);
    }
  }

  layout(string, features, script, language, direction) {
    // Make the features parameter optional
    if (typeof features === 'string') {
      direction = language;
      language = script;
      script = features;
      features = [];
    }

    // Map string to glyphs if needed
    if (typeof string === 'string') {
      // Attempt to detect the script from the string if not provided.
      if (script == null) {
        script = _Script__WEBPACK_IMPORTED_MODULE_4__.forString(string);
      }

      var glyphs = this.font.glyphsForString(string);
    } else {
      // Attempt to detect the script from the glyph code points if not provided.
      if (script == null) {
        let codePoints = [];
        for (let glyph of string) {
          codePoints.push(...glyph.codePoints);
        }

        script = _Script__WEBPACK_IMPORTED_MODULE_4__.forCodePoints(codePoints);
      }

      var glyphs = string;
    }

    let glyphRun = new _GlyphRun__WEBPACK_IMPORTED_MODULE_2__["default"](glyphs, features, script, language, direction);

    // Return early if there are no glyphs
    if (glyphs.length === 0) {
      glyphRun.positions = [];
      return glyphRun;
    }

    // Setup the advanced layout engine
    if (this.engine && this.engine.setup) {
      this.engine.setup(glyphRun);
    }

    // Substitute and position the glyphs
    this.substitute(glyphRun);
    this.position(glyphRun);

    this.hideDefaultIgnorables(glyphRun.glyphs, glyphRun.positions);

    // Let the layout engine clean up any state it might have
    if (this.engine && this.engine.cleanup) {
      this.engine.cleanup();
    }

    return glyphRun;
  }

  substitute(glyphRun) {
    // Call the advanced layout engine to make substitutions
    if (this.engine && this.engine.substitute) {
      this.engine.substitute(glyphRun);
    }
  }

  position(glyphRun) {
    // Get initial glyph positions
    glyphRun.positions = glyphRun.glyphs.map(glyph => new _GlyphPosition__WEBPACK_IMPORTED_MODULE_3__["default"](glyph.advanceWidth));
    let positioned = null;

    // Call the advanced layout engine. Returns the features applied.
    if (this.engine && this.engine.position) {
      positioned = this.engine.position(glyphRun);
    }

    // if there is no GPOS table, use unicode properties to position marks.
    if (!positioned && (!this.engine || this.engine.fallbackPosition)) {
      if (!this.unicodeLayoutEngine) {
        this.unicodeLayoutEngine = new _UnicodeLayoutEngine__WEBPACK_IMPORTED_MODULE_1__["default"](this.font);
      }

      this.unicodeLayoutEngine.positionGlyphs(glyphRun.glyphs, glyphRun.positions);
    }

    // if kerning is not supported by GPOS, do kerning with the TrueType/AAT kern table
    if ((!positioned || !positioned.kern) && glyphRun.features.kern !== false && this.font.kern) {
      if (!this.kernProcessor) {
        this.kernProcessor = new _KernProcessor__WEBPACK_IMPORTED_MODULE_0__["default"](this.font);
      }

      this.kernProcessor.process(glyphRun.glyphs, glyphRun.positions);
      glyphRun.features.kern = true;
    }
  }

  hideDefaultIgnorables(glyphs, positions) {
    let space = this.font.glyphForCodePoint(0x20);
    for (let i = 0; i < glyphs.length; i++) {
      if (this.isDefaultIgnorable(glyphs[i].codePoints[0])) {
        glyphs[i] = space;
        positions[i].xAdvance = 0;
        positions[i].yAdvance = 0;
      }
    }
  }

  isDefaultIgnorable(ch) {
    // From DerivedCoreProperties.txt in the Unicode database,
    // minus U+115F, U+1160, U+3164 and U+FFA0, which is what
    // Harfbuzz and Uniscribe do.
    let plane = ch >> 16;
    if (plane === 0) {
      // BMP
      switch (ch >> 8) {
      	case 0x00: return ch === 0x00AD;
      	case 0x03: return ch === 0x034F;
      	case 0x06: return ch === 0x061C;
      	case 0x17: return 0x17B4 <= ch && ch <= 0x17B5;
      	case 0x18: return 0x180B <= ch && ch <= 0x180E;
      	case 0x20: return (0x200B <= ch && ch <= 0x200F) || (0x202A <= ch && ch <= 0x202E) || (0x2060 <= ch && ch <= 0x206F);
      	case 0xFE: return (0xFE00 <= ch && ch <= 0xFE0F) || ch === 0xFEFF;
      	case 0xFF: return 0xFFF0 <= ch && ch <= 0xFFF8;
      	default:   return false;
      }
    } else {
      // Other planes
      switch (plane) {
      	case 0x01: return (0x1BCA0 <= ch && ch <= 0x1BCA3) || (0x1D173 <= ch && ch <= 0x1D17A);
      	case 0x0E: return 0xE0000 <= ch && ch <= 0xE0FFF;
      	default:   return false;
      }
    }
  }

  getAvailableFeatures(script, language) {
    let features = [];

    if (this.engine) {
      features.push(...this.engine.getAvailableFeatures(script, language));
    }

    if (this.font.kern && features.indexOf('kern') === -1) {
      features.push('kern');
    }

    return features;
  }

  stringsForGlyph(gid) {
    let result = new Set;

    let codePoints = this.font._cmapProcessor.codePointsForGlyph(gid);
    for (let codePoint of codePoints) {
      result.add(String.fromCodePoint(codePoint));
    }

    if (this.engine && this.engine.stringsForGlyph) {
      for (let string of this.engine.stringsForGlyph(gid)) {
        result.add(string);
      }
    }

    return Array.from(result);
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/layout/Script.js":
/*!**************************************************!*\
  !*** ./src/modules/fontkit/src/layout/Script.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   direction: () => (/* binding */ direction),
/* harmony export */   forCodePoints: () => (/* binding */ forCodePoints),
/* harmony export */   forString: () => (/* binding */ forString),
/* harmony export */   fromOpenType: () => (/* binding */ fromOpenType),
/* harmony export */   fromUnicode: () => (/* binding */ fromUnicode)
/* harmony export */ });
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");


// This maps the Unicode Script property to an OpenType script tag
// Data from http://www.microsoft.com/typography/otspec/scripttags.htm
// and http://www.unicode.org/Public/UNIDATA/PropertyValueAliases.txt.
const UNICODE_SCRIPTS = {
  Caucasian_Albanian: 'aghb',
  Arabic: 'arab',
  Imperial_Aramaic: 'armi',
  Armenian: 'armn',
  Avestan: 'avst',
  Balinese: 'bali',
  Bamum: 'bamu',
  Bassa_Vah: 'bass',
  Batak: 'batk',
  Bengali: ['bng2', 'beng'],
  Bopomofo: 'bopo',
  Brahmi: 'brah',
  Braille: 'brai',
  Buginese: 'bugi',
  Buhid: 'buhd',
  Chakma: 'cakm',
  Canadian_Aboriginal: 'cans',
  Carian: 'cari',
  Cham: 'cham',
  Cherokee: 'cher',
  Coptic: 'copt',
  Cypriot: 'cprt',
  Cyrillic: 'cyrl',
  Devanagari: ['dev2', 'deva'],
  Deseret: 'dsrt',
  Duployan: 'dupl',
  Egyptian_Hieroglyphs: 'egyp',
  Elbasan: 'elba',
  Ethiopic: 'ethi',
  Georgian: 'geor',
  Glagolitic: 'glag',
  Gothic: 'goth',
  Grantha: 'gran',
  Greek: 'grek',
  Gujarati: ['gjr2', 'gujr'],
  Gurmukhi: ['gur2', 'guru'],
  Hangul: 'hang',
  Han: 'hani',
  Hanunoo: 'hano',
  Hebrew: 'hebr',
  Hiragana: 'hira',
  Pahawh_Hmong: 'hmng',
  Katakana_Or_Hiragana: 'hrkt',
  Old_Italic: 'ital',
  Javanese: 'java',
  Kayah_Li: 'kali',
  Katakana: 'kana',
  Kharoshthi: 'khar',
  Khmer: 'khmr',
  Khojki: 'khoj',
  Kannada: ['knd2', 'knda'],
  Kaithi: 'kthi',
  Tai_Tham: 'lana',
  Lao: 'lao ',
  Latin: 'latn',
  Lepcha: 'lepc',
  Limbu: 'limb',
  Linear_A: 'lina',
  Linear_B: 'linb',
  Lisu: 'lisu',
  Lycian: 'lyci',
  Lydian: 'lydi',
  Mahajani: 'mahj',
  Mandaic: 'mand',
  Manichaean: 'mani',
  Mende_Kikakui: 'mend',
  Meroitic_Cursive: 'merc',
  Meroitic_Hieroglyphs: 'mero',
  Malayalam: ['mlm2', 'mlym'],
  Modi: 'modi',
  Mongolian: 'mong',
  Mro: 'mroo',
  Meetei_Mayek: 'mtei',
  Myanmar: ['mym2', 'mymr'],
  Old_North_Arabian: 'narb',
  Nabataean: 'nbat',
  Nko: 'nko ',
  Ogham: 'ogam',
  Ol_Chiki: 'olck',
  Old_Turkic: 'orkh',
  Oriya: ['ory2', 'orya'],
  Osmanya: 'osma',
  Palmyrene: 'palm',
  Pau_Cin_Hau: 'pauc',
  Old_Permic: 'perm',
  Phags_Pa: 'phag',
  Inscriptional_Pahlavi: 'phli',
  Psalter_Pahlavi: 'phlp',
  Phoenician: 'phnx',
  Miao: 'plrd',
  Inscriptional_Parthian: 'prti',
  Rejang: 'rjng',
  Runic: 'runr',
  Samaritan: 'samr',
  Old_South_Arabian: 'sarb',
  Saurashtra: 'saur',
  Shavian: 'shaw',
  Sharada: 'shrd',
  Siddham: 'sidd',
  Khudawadi: 'sind',
  Sinhala: 'sinh',
  Sora_Sompeng: 'sora',
  Sundanese: 'sund',
  Syloti_Nagri: 'sylo',
  Syriac: 'syrc',
  Tagbanwa: 'tagb',
  Takri: 'takr',
  Tai_Le: 'tale',
  New_Tai_Lue: 'talu',
  Tamil: ['tml2', 'taml'],
  Tai_Viet: 'tavt',
  Telugu: ['tel2', 'telu'],
  Tifinagh: 'tfng',
  Tagalog: 'tglg',
  Thaana: 'thaa',
  Thai: 'thai',
  Tibetan: 'tibt',
  Tirhuta: 'tirh',
  Ugaritic: 'ugar',
  Vai: 'vai ',
  Warang_Citi: 'wara',
  Old_Persian: 'xpeo',
  Cuneiform: 'xsux',
  Yi: 'yi  ',
  Inherited: 'zinh',
  Common: 'zyyy',
  Unknown: 'zzzz'
};

const OPENTYPE_SCRIPTS = {};
for (let script in UNICODE_SCRIPTS) {
  let tag = UNICODE_SCRIPTS[script];
  if (Array.isArray(tag)) {
    for (let t of tag) {
      OPENTYPE_SCRIPTS[t] = script;
    }
  } else {
    OPENTYPE_SCRIPTS[tag] = script;
  }
}

function fromUnicode(script) {
  return UNICODE_SCRIPTS[script];
}

function fromOpenType(tag) {
  return OPENTYPE_SCRIPTS[tag];
}

function forString(string) {
  let len = string.length;
  let idx = 0;
  while (idx < len) {
    let code = string.charCodeAt(idx++);

    // Check if this is a high surrogate
    if (0xd800 <= code && code <= 0xdbff && idx < len) {
      let next = string.charCodeAt(idx);

      // Check if this is a low surrogate
      if (0xdc00 <= next && next <= 0xdfff) {
        idx++;
        code = ((code & 0x3FF) << 10) + (next & 0x3FF) + 0x10000;
      }
    }

    let script = (0,unicode_properties__WEBPACK_IMPORTED_MODULE_0__.getScript)(code);
    if (script !== 'Common' && script !== 'Inherited' && script !== 'Unknown') {
      return UNICODE_SCRIPTS[script];
    }
  }

  return UNICODE_SCRIPTS.Unknown;
}

function forCodePoints(codePoints) {
  for (let i = 0; i < codePoints.length; i++) {
    let codePoint = codePoints[i];
    let script = (0,unicode_properties__WEBPACK_IMPORTED_MODULE_0__.getScript)(codePoint);
    if (script !== 'Common' && script !== 'Inherited' && script !== 'Unknown') {
      return UNICODE_SCRIPTS[script];
    }
  }

  return UNICODE_SCRIPTS.Unknown;
}

// The scripts in this map are written from right to left
const RTL = {
  arab: true,   // Arabic
  hebr: true,   // Hebrew
  syrc: true,   // Syriac
  thaa: true,   // Thaana
  cprt: true,   // Cypriot Syllabary
  khar: true,   // Kharosthi
  phnx: true,   // Phoenician
  'nko ': true, // N'Ko
  lydi: true,   // Lydian
  avst: true,   // Avestan
  armi: true,   // Imperial Aramaic
  phli: true,   // Inscriptional Pahlavi
  prti: true,   // Inscriptional Parthian
  sarb: true,   // Old South Arabian
  orkh: true,   // Old Turkic, Orkhon Runic
  samr: true,   // Samaritan
  mand: true,   // Mandaic, Mandaean
  merc: true,   // Meroitic Cursive
  mero: true,   // Meroitic Hieroglyphs

  // Unicode 7.0 (not listed on http://www.microsoft.com/typography/otspec/scripttags.htm)
  mani: true,   // Manichaean
  mend: true,   // Mende Kikakui
  nbat: true,   // Nabataean
  narb: true,   // Old North Arabian
  palm: true,   // Palmyrene
  phlp: true    // Psalter Pahlavi
};

function direction(script) {
  if (RTL[script]) {
    return 'rtl';
  }

  return 'ltr';
}


/***/ }),

/***/ "./src/modules/fontkit/src/layout/UnicodeLayoutEngine.js":
/*!***************************************************************!*\
  !*** ./src/modules/fontkit/src/layout/UnicodeLayoutEngine.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnicodeLayoutEngine)
/* harmony export */ });
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");


/**
 * This class is used when GPOS does not define 'mark' or 'mkmk' features
 * for positioning marks relative to base glyphs. It uses the unicode
 * combining class property to position marks.
 *
 * Based on code from Harfbuzz, thanks!
 * https://github.com/behdad/harfbuzz/blob/master/src/hb-ot-shape-fallback.cc
 */
class UnicodeLayoutEngine {
  constructor(font) {
    this.font = font;
  }

  positionGlyphs(glyphs, positions) {
    // find each base + mark cluster, and position the marks relative to the base
    let clusterStart = 0;
    let clusterEnd = 0;
    for (let index = 0; index < glyphs.length; index++) {
      let glyph = glyphs[index];
      if (glyph.isMark) { // TODO: handle ligatures
        clusterEnd = index;
      } else {
        if (clusterStart !== clusterEnd) {
          this.positionCluster(glyphs, positions, clusterStart, clusterEnd);
        }

        clusterStart = clusterEnd = index;
      }
    }

    if (clusterStart !== clusterEnd) {
      this.positionCluster(glyphs, positions, clusterStart, clusterEnd);
    }

    return positions;
  }

  positionCluster(glyphs, positions, clusterStart, clusterEnd) {
    let base = glyphs[clusterStart];
    let baseBox = base.cbox.copy();

    // adjust bounding box for ligature glyphs
    if (base.codePoints.length > 1) {
      // LTR. TODO: RTL support.
      baseBox.minX += ((base.codePoints.length - 1) * baseBox.width) / base.codePoints.length;
    }

    let xOffset = -positions[clusterStart].xAdvance;
    let yOffset = 0;
    let yGap = this.font.unitsPerEm / 16;

    // position each of the mark glyphs relative to the base glyph
    for (let index = clusterStart + 1; index <= clusterEnd; index++) {
      let mark = glyphs[index];
      let markBox = mark.cbox;
      let position = positions[index];

      let combiningClass = this.getCombiningClass(mark.codePoints[0]);

      if (combiningClass !== 'Not_Reordered') {
        position.xOffset = position.yOffset = 0;

        // x positioning
        switch (combiningClass) {
          case 'Double_Above':
          case 'Double_Below':
            // LTR. TODO: RTL support.
            position.xOffset += baseBox.minX - markBox.width / 2 - markBox.minX;
            break;

          case 'Attached_Below_Left':
          case 'Below_Left':
          case 'Above_Left':
            // left align
            position.xOffset += baseBox.minX - markBox.minX;
            break;

          case 'Attached_Above_Right':
          case 'Below_Right':
          case 'Above_Right':
            // right align
            position.xOffset += baseBox.maxX - markBox.width - markBox.minX;
            break;

          default: // Attached_Below, Attached_Above, Below, Above, other
            // center align
            position.xOffset += baseBox.minX + (baseBox.width - markBox.width) / 2 - markBox.minX;
        }

        // y positioning
        switch (combiningClass) {
          case 'Double_Below':
          case 'Below_Left':
          case 'Below':
          case 'Below_Right':
          case 'Attached_Below_Left':
          case 'Attached_Below':
            // add a small gap between the glyphs if they are not attached
            if (combiningClass === 'Attached_Below_Left' || combiningClass === 'Attached_Below') {
              baseBox.minY += yGap;
            }

            position.yOffset = -baseBox.minY - markBox.maxY;
            baseBox.minY += markBox.height;
            break;

          case 'Double_Above':
          case 'Above_Left':
          case 'Above':
          case 'Above_Right':
          case 'Attached_Above':
          case 'Attached_Above_Right':
            // add a small gap between the glyphs if they are not attached
            if (combiningClass === 'Attached_Above' || combiningClass === 'Attached_Above_Right') {
              baseBox.maxY += yGap;
            }

            position.yOffset = baseBox.maxY - markBox.minY;
            baseBox.maxY += markBox.height;
            break;
        }

        position.xAdvance = position.yAdvance = 0;
        position.xOffset += xOffset;
        position.yOffset += yOffset;

      } else {
        xOffset -= position.xAdvance;
        yOffset -= position.yAdvance;
      }
    }

    return;
  }

  getCombiningClass(codePoint) {
    let combiningClass = (0,unicode_properties__WEBPACK_IMPORTED_MODULE_0__.getCombiningClass)(codePoint);

    // Thai / Lao need some per-character work
    if ((codePoint & ~0xff) === 0x0e00) {
      if (combiningClass === 'Not_Reordered') {
        switch (codePoint) {
          case 0x0e31:
          case 0x0e34:
          case 0x0e35:
          case 0x0e36:
          case 0x0e37:
          case 0x0e47:
          case 0x0e4c:
          case 0x0e3d:
          case 0x0e4e:
            return 'Above_Right';

          case 0x0eb1:
          case 0x0eb4:
          case 0x0eb5:
          case 0x0eb6:
          case 0x0eb7:
          case 0x0ebb:
          case 0x0ecc:
          case 0x0ecd:
            return 'Above';

          case 0x0ebc:
            return 'Below';
        }
      } else if (codePoint === 0x0e3a) { // virama
        return 'Below_Right';
      }
    }

    switch (combiningClass) {
      // Hebrew

      case 'CCC10': // sheva
      case 'CCC11': // hataf segol
      case 'CCC12': // hataf patah
      case 'CCC13': // hataf qamats
      case 'CCC14': // hiriq
      case 'CCC15': // tsere
      case 'CCC16': // segol
      case 'CCC17': // patah
      case 'CCC18': // qamats
      case 'CCC20': // qubuts
      case 'CCC22': // meteg
        return 'Below';

      case 'CCC23': // rafe
        return 'Attached_Above';

      case 'CCC24': // shin dot
        return 'Above_Right';

      case 'CCC25': // sin dot
      case 'CCC19': // holam
        return 'Above_Left';

      case 'CCC26': // point varika
        return 'Above';

      case 'CCC21': // dagesh
        break;

      // Arabic and Syriac

      case 'CCC27': // fathatan
      case 'CCC28': // dammatan
      case 'CCC30': // fatha
      case 'CCC31': // damma
      case 'CCC33': // shadda
      case 'CCC34': // sukun
      case 'CCC35': // superscript alef
      case 'CCC36': // superscript alaph
        return 'Above';

      case 'CCC29': // kasratan
      case 'CCC32': // kasra
        return 'Below';

      // Thai

      case 'CCC103': // sara u / sara uu
        return 'Below_Right';

      case 'CCC107': // mai
        return 'Above_Right';

      // Lao

      case 'CCC118': // sign u / sign uu
        return 'Below';

      case 'CCC122': // mai
        return 'Above';

      // Tibetan

      case 'CCC129': // sign aa
      case 'CCC132': // sign u
        return 'Below';

      case 'CCC130': // sign i
        return 'Above';
    }

    return combiningClass;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/GPOSProcessor.js":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/GPOSProcessor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GPOSProcessor)
/* harmony export */ });
/* harmony import */ var _OTProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OTProcessor */ "./src/modules/fontkit/src/opentype/OTProcessor.js");


class GPOSProcessor extends _OTProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  applyPositionValue(sequenceIndex, value) {
    let position = this.positions[this.glyphIterator.peekIndex(sequenceIndex)];
    if (value.xAdvance != null) {
      position.xAdvance += value.xAdvance;
    }

    if (value.yAdvance != null) {
      position.yAdvance += value.yAdvance;
    }

    if (value.xPlacement != null) {
      position.xOffset += value.xPlacement;
    }

    if (value.yPlacement != null) {
      position.yOffset += value.yPlacement;
    }

    // Adjustments for font variations
    let variationProcessor = this.font._variationProcessor;
    let variationStore = this.font.GDEF && this.font.GDEF.itemVariationStore;
    if (variationProcessor && variationStore) {
      if (value.xPlaDevice) {
        position.xOffset += variationProcessor.getDelta(variationStore, value.xPlaDevice.a, value.xPlaDevice.b);
      }

      if (value.yPlaDevice) {
        position.yOffset += variationProcessor.getDelta(variationStore, value.yPlaDevice.a, value.yPlaDevice.b);
      }

      if (value.xAdvDevice) {
        position.xAdvance += variationProcessor.getDelta(variationStore, value.xAdvDevice.a, value.xAdvDevice.b);
      }

      if (value.yAdvDevice) {
        position.yAdvance += variationProcessor.getDelta(variationStore, value.yAdvDevice.a, value.yAdvDevice.b);
      }
    }

    // TODO: device tables
  }

  applyLookup(lookupType, table) {
    switch (lookupType) {
      case 1: { // Single positioning value
        let index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        switch (table.version) {
          case 1:
            this.applyPositionValue(0, table.value);
            break;

          case 2:
            this.applyPositionValue(0, table.values.get(index));
            break;
        }

        return true;
      }

      case 2: { // Pair Adjustment Positioning
        let nextGlyph = this.glyphIterator.peek();
        if (!nextGlyph) {
          return false;
        }

        let index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        switch (table.version) {
          case 1: // Adjustments for glyph pairs
            let set = table.pairSets.get(index);

            for (let pair of set) {
              if (pair.secondGlyph === nextGlyph.id) {
                this.applyPositionValue(0, pair.value1);
                this.applyPositionValue(1, pair.value2);
                return true;
              }
            }

            return false;

          case 2: // Class pair adjustment
            let class1 = this.getClassID(this.glyphIterator.cur.id, table.classDef1);
            let class2 = this.getClassID(nextGlyph.id, table.classDef2);
            if (class1 === -1 || class2 === -1) {
              return false;
            }

            var pair = table.classRecords.get(class1).get(class2);
            this.applyPositionValue(0, pair.value1);
            this.applyPositionValue(1, pair.value2);
            return true;
        }
      }

      case 3: { // Cursive Attachment Positioning
        let nextIndex = this.glyphIterator.peekIndex();
        let nextGlyph = this.glyphs[nextIndex];
        if (!nextGlyph) {
          return false;
        }

        let curRecord = table.entryExitRecords[this.coverageIndex(table.coverage)];
        if (!curRecord || !curRecord.exitAnchor) {
          return false;
        }

        let nextRecord = table.entryExitRecords[this.coverageIndex(table.coverage, nextGlyph.id)];
        if (!nextRecord || !nextRecord.entryAnchor) {
          return false;
        }

        let entry = this.getAnchor(nextRecord.entryAnchor);
        let exit = this.getAnchor(curRecord.exitAnchor);

        let cur = this.positions[this.glyphIterator.index];
        let next = this.positions[nextIndex];
        let d;

        switch (this.direction) {
          case 'ltr':
            cur.xAdvance = exit.x + cur.xOffset;

            d = entry.x + next.xOffset;
            next.xAdvance -= d;
            next.xOffset -= d;
            break;

          case 'rtl':
            d = exit.x + cur.xOffset;
            cur.xAdvance -= d;
            cur.xOffset -= d;
            next.xAdvance = entry.x + next.xOffset;
            break;
        }

        if (this.glyphIterator.flags.rightToLeft) {
          this.glyphIterator.cur.cursiveAttachment = nextIndex;
          cur.yOffset = entry.y - exit.y;
        } else {
          nextGlyph.cursiveAttachment = this.glyphIterator.index;
          cur.yOffset = exit.y - entry.y;
        }

        return true;
      }

      case 4: { // Mark to base positioning
        let markIndex = this.coverageIndex(table.markCoverage);
        if (markIndex === -1) {
          return false;
        }

        // search backward for a base glyph
        let baseGlyphIndex = this.glyphIterator.index;
        while (--baseGlyphIndex >= 0 && (this.glyphs[baseGlyphIndex].isMark || this.glyphs[baseGlyphIndex].ligatureComponent > 0));

        if (baseGlyphIndex < 0) {
          return false;
        }

        let baseIndex = this.coverageIndex(table.baseCoverage, this.glyphs[baseGlyphIndex].id);
        if (baseIndex === -1) {
          return false;
        }

        let markRecord = table.markArray[markIndex];
        let baseAnchor = table.baseArray[baseIndex][markRecord.class];
        this.applyAnchor(markRecord, baseAnchor, baseGlyphIndex);
        return true;
      }

      case 5: { // Mark to ligature positioning
        let markIndex = this.coverageIndex(table.markCoverage);
        if (markIndex === -1) {
          return false;
        }

        // search backward for a base glyph
        let baseGlyphIndex = this.glyphIterator.index;
        while (--baseGlyphIndex >= 0 && this.glyphs[baseGlyphIndex].isMark);

        if (baseGlyphIndex < 0) {
          return false;
        }

        let ligIndex = this.coverageIndex(table.ligatureCoverage, this.glyphs[baseGlyphIndex].id);
        if (ligIndex === -1) {
          return false;
        }

        let ligAttach = table.ligatureArray[ligIndex];
        let markGlyph = this.glyphIterator.cur;
        let ligGlyph = this.glyphs[baseGlyphIndex];
        let compIndex = ligGlyph.ligatureID && ligGlyph.ligatureID === markGlyph.ligatureID && (markGlyph.ligatureComponent > 0)
          ? Math.min(markGlyph.ligatureComponent, ligGlyph.codePoints.length) - 1
          : ligGlyph.codePoints.length - 1;

        let markRecord = table.markArray[markIndex];
        let baseAnchor = ligAttach[compIndex][markRecord.class];
        this.applyAnchor(markRecord, baseAnchor, baseGlyphIndex);
        return true;
      }

      case 6: { // Mark to mark positioning
        let mark1Index = this.coverageIndex(table.mark1Coverage);
        if (mark1Index === -1) {
          return false;
        }

        // get the previous mark to attach to
        let prevIndex = this.glyphIterator.peekIndex(-1);
        let prev = this.glyphs[prevIndex];
        if (!prev || !prev.isMark) {
          return false;
        }

        let cur = this.glyphIterator.cur;

        // The following logic was borrowed from Harfbuzz
        let good = false;
        if (cur.ligatureID === prev.ligatureID) {
          if (!cur.ligatureID) { // Marks belonging to the same base
            good = true;
          } else if (cur.ligatureComponent === prev.ligatureComponent) { // Marks belonging to the same ligature component
            good = true;
          }
        } else {
          // If ligature ids don't match, it may be the case that one of the marks
          // itself is a ligature, in which case match.
          if ((cur.ligatureID && !cur.ligatureComponent) || (prev.ligatureID && !prev.ligatureComponent)) {
            good = true;
          }
        }

        if (!good) {
          return false;
        }

        let mark2Index = this.coverageIndex(table.mark2Coverage, prev.id);
        if (mark2Index === -1) {
          return false;
        }

        let markRecord = table.mark1Array[mark1Index];
        let baseAnchor = table.mark2Array[mark2Index][markRecord.class];
        this.applyAnchor(markRecord, baseAnchor, prevIndex);
        return true;
      }

      case 7: // Contextual positioning
        return this.applyContext(table);

      case 8: // Chaining contextual positioning
        return this.applyChainingContext(table);

      case 9: // Extension positioning
        return this.applyLookup(table.lookupType, table.extension);

      default:
        throw new Error(`Unsupported GPOS table: ${lookupType}`);
    }
  }

  applyAnchor(markRecord, baseAnchor, baseGlyphIndex) {
    let baseCoords = this.getAnchor(baseAnchor);
    let markCoords = this.getAnchor(markRecord.markAnchor);

    let basePos = this.positions[baseGlyphIndex];
    let markPos = this.positions[this.glyphIterator.index];

    markPos.xOffset = baseCoords.x - markCoords.x;
    markPos.yOffset = baseCoords.y - markCoords.y;
    this.glyphIterator.cur.markAttachment = baseGlyphIndex;
  }

  getAnchor(anchor) {
    // TODO: contour point, device tables
    let x = anchor.xCoordinate;
    let y = anchor.yCoordinate;

    // Adjustments for font variations
    let variationProcessor = this.font._variationProcessor;
    let variationStore = this.font.GDEF && this.font.GDEF.itemVariationStore;
    if (variationProcessor && variationStore) {
      if (anchor.xDeviceTable) {
        x += variationProcessor.getDelta(variationStore, anchor.xDeviceTable.a, anchor.xDeviceTable.b);
      }

      if (anchor.yDeviceTable) {
        y += variationProcessor.getDelta(variationStore, anchor.yDeviceTable.a, anchor.yDeviceTable.b);
      }
    }

    return { x, y };
  }

  applyFeatures(userFeatures, glyphs, advances) {
    super.applyFeatures(userFeatures, glyphs, advances);

    for (var i = 0; i < this.glyphs.length; i++) {
      this.fixCursiveAttachment(i);
    }

    this.fixMarkAttachment();
  }

  fixCursiveAttachment(i) {
    let glyph = this.glyphs[i];
    if (glyph.cursiveAttachment != null) {
      let j = glyph.cursiveAttachment;

      glyph.cursiveAttachment = null;
      this.fixCursiveAttachment(j);

      this.positions[i].yOffset += this.positions[j].yOffset;
    }
  }

  fixMarkAttachment() {
    for (let i = 0; i < this.glyphs.length; i++) {
      let glyph = this.glyphs[i];
      if (glyph.markAttachment != null) {
        let j = glyph.markAttachment;

        this.positions[i].xOffset += this.positions[j].xOffset;
        this.positions[i].yOffset += this.positions[j].yOffset;

        if (this.direction === 'ltr') {
          for (let k = j; k < i; k++) {
            this.positions[i].xOffset -= this.positions[k].xAdvance;
            this.positions[i].yOffset -= this.positions[k].yAdvance;
          }
        } else {
          for (let k = j + 1; k < i + 1; k++) {
            this.positions[i].xOffset += this.positions[k].xAdvance;
            this.positions[i].yOffset += this.positions[k].yAdvance;
          }
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/GSUBProcessor.js":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/GSUBProcessor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GSUBProcessor)
/* harmony export */ });
/* harmony import */ var _OTProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OTProcessor */ "./src/modules/fontkit/src/opentype/OTProcessor.js");
/* harmony import */ var _GlyphInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlyphInfo */ "./src/modules/fontkit/src/opentype/GlyphInfo.js");



class GSUBProcessor extends _OTProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  applyLookup(lookupType, table) {
    switch (lookupType) {
      case 1: { // Single Substitution
        let index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        let glyph = this.glyphIterator.cur;
        switch (table.version) {
          case 1:
            glyph.id = (glyph.id + table.deltaGlyphID) & 0xffff;
            break;

          case 2:
            glyph.id = table.substitute.get(index);
            break;
        }

        return true;
      }

      case 2: { // Multiple Substitution
        let index = this.coverageIndex(table.coverage);
        if (index !== -1) {
          let sequence = table.sequences.get(index);

          if (sequence.length === 0) {
            // If the sequence length is zero, delete the glyph.
            // The OpenType spec disallows this, but seems like Harfbuzz and Uniscribe allow it.
            this.glyphs.splice(this.glyphIterator.index, 1);
            return true;
          }

          this.glyphIterator.cur.id = sequence[0];
          this.glyphIterator.cur.ligatureComponent = 0;

          let features = this.glyphIterator.cur.features;
          let curGlyph = this.glyphIterator.cur;
          let replacement = sequence.slice(1).map((gid, i) => {
            let glyph = new _GlyphInfo__WEBPACK_IMPORTED_MODULE_1__["default"](this.font, gid, undefined, features);
            glyph.shaperInfo = curGlyph.shaperInfo;
            glyph.isLigated = curGlyph.isLigated;
            glyph.ligatureComponent = i + 1;
            glyph.substituted = true;
            glyph.isMultiplied = true;
            return glyph;
          });

          this.glyphs.splice(this.glyphIterator.index + 1, 0, ...replacement);
          return true;
        }

        return false;
      }

      case 3: { // Alternate Substitution
        let index = this.coverageIndex(table.coverage);
        if (index !== -1) {
          let USER_INDEX = 0; // TODO
          this.glyphIterator.cur.id = table.alternateSet.get(index)[USER_INDEX];
          return true;
        }

        return false;
      }

      case 4: { // Ligature Substitution
        let index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        for (let ligature of table.ligatureSets.get(index)) {
          let matched = this.sequenceMatchIndices(1, ligature.components);
          if (!matched) {
            continue;
          }

          let curGlyph = this.glyphIterator.cur;

          // Concatenate all of the characters the new ligature will represent
          let characters = curGlyph.codePoints.slice();
          for (let index of matched) {
            characters.push(...this.glyphs[index].codePoints);
          }

          // Create the replacement ligature glyph
          let ligatureGlyph = new _GlyphInfo__WEBPACK_IMPORTED_MODULE_1__["default"](this.font, ligature.glyph, characters, curGlyph.features);
          ligatureGlyph.shaperInfo = curGlyph.shaperInfo;
          ligatureGlyph.isLigated = true;
          ligatureGlyph.substituted = true;

          // From Harfbuzz:
          // - If it *is* a mark ligature, we don't allocate a new ligature id, and leave
          //   the ligature to keep its old ligature id.  This will allow it to attach to
          //   a base ligature in GPOS.  Eg. if the sequence is: LAM,LAM,SHADDA,FATHA,HEH,
          //   and LAM,LAM,HEH for a ligature, they will leave SHADDA and FATHA with a
          //   ligature id and component value of 2.  Then if SHADDA,FATHA form a ligature
          //   later, we don't want them to lose their ligature id/component, otherwise
          //   GPOS will fail to correctly position the mark ligature on top of the
          //   LAM,LAM,HEH ligature. See https://bugzilla.gnome.org/show_bug.cgi?id=676343
          //
          // - If a ligature is formed of components that some of which are also ligatures
          //   themselves, and those ligature components had marks attached to *their*
          //   components, we have to attach the marks to the new ligature component
          //   positions!  Now *that*'s tricky!  And these marks may be following the
          //   last component of the whole sequence, so we should loop forward looking
          //   for them and update them.
          //
          //   Eg. the sequence is LAM,LAM,SHADDA,FATHA,HEH, and the font first forms a
          //   'calt' ligature of LAM,HEH, leaving the SHADDA and FATHA with a ligature
          //   id and component == 1.  Now, during 'liga', the LAM and the LAM-HEH ligature
          //   form a LAM-LAM-HEH ligature.  We need to reassign the SHADDA and FATHA to
          //   the new ligature with a component value of 2.
          //
          //   This in fact happened to a font...  See https://bugzilla.gnome.org/show_bug.cgi?id=437633
          let isMarkLigature = curGlyph.isMark;
          for (let i = 0; i < matched.length && isMarkLigature; i++) {
            isMarkLigature = this.glyphs[matched[i]].isMark;
          }

          ligatureGlyph.ligatureID = isMarkLigature ? null : this.ligatureID++;

          let lastLigID = curGlyph.ligatureID;
          let lastNumComps = curGlyph.codePoints.length;
          let curComps = lastNumComps;
          let idx = this.glyphIterator.index + 1;

          // Set ligatureID and ligatureComponent on glyphs that were skipped in the matched sequence.
          // This allows GPOS to attach marks to the correct ligature components.
          for (let matchIndex of matched) {
            // Don't assign new ligature components for mark ligatures (see above)
            if (isMarkLigature) {
              idx = matchIndex;
            } else {
              while (idx < matchIndex) {
                var ligatureComponent = curComps - lastNumComps + Math.min(this.glyphs[idx].ligatureComponent || 1, lastNumComps);
                this.glyphs[idx].ligatureID = ligatureGlyph.ligatureID;
                this.glyphs[idx].ligatureComponent = ligatureComponent;
                idx++;
              }
            }

            lastLigID = this.glyphs[idx].ligatureID;
            lastNumComps = this.glyphs[idx].codePoints.length;
            curComps += lastNumComps;
            idx++; // skip base glyph
          }

          // Adjust ligature components for any marks following
          if (lastLigID && !isMarkLigature) {
            for (let i = idx; i < this.glyphs.length; i++) {
              if (this.glyphs[i].ligatureID === lastLigID) {
                var ligatureComponent = curComps - lastNumComps + Math.min(this.glyphs[i].ligatureComponent || 1, lastNumComps);
                this.glyphs[i].ligatureComponent = ligatureComponent;
              } else {
                break;
              }
            }
          }

          // Delete the matched glyphs, and replace the current glyph with the ligature glyph
          for (let i = matched.length - 1; i >= 0; i--) {
            this.glyphs.splice(matched[i], 1);
          }

          this.glyphs[this.glyphIterator.index] = ligatureGlyph;
          return true;
        }

        return false;
      }

      case 5: // Contextual Substitution
        return this.applyContext(table);

      case 6: // Chaining Contextual Substitution
        return this.applyChainingContext(table);

      case 7: // Extension Substitution
        return this.applyLookup(table.lookupType, table.extension);

      default:
        throw new Error(`GSUB lookupType ${lookupType} is not supported`);
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/GlyphInfo.js":
/*!*******************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/GlyphInfo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlyphInfo)
/* harmony export */ });
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");
/* harmony import */ var _OTProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OTProcessor */ "./src/modules/fontkit/src/opentype/OTProcessor.js");



class GlyphInfo {
  constructor(font, id, codePoints = [], features) {
    this._font = font;
    this.codePoints = codePoints;
    this.id = id;

    this.features = {};
    if (Array.isArray(features)) {
      for (let i = 0; i < features.length; i++) {
        let feature = features[i];
        this.features[feature] = true;
      }
    } else if (typeof features === 'object') {
      Object.assign(this.features, features);
    }

    this.ligatureID = null;
    this.ligatureComponent = null;
    this.isLigated = false;
    this.cursiveAttachment = null;
    this.markAttachment = null;
    this.shaperInfo = null;
    this.substituted = false;
    this.isMultiplied = false;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
    this.substituted = true;

    let GDEF = this._font.GDEF;
    if (GDEF && GDEF.glyphClassDef) {
      // TODO: clean this up
      let classID = _OTProcessor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.getClassID(id, GDEF.glyphClassDef);
      this.isBase = classID === 1;
      this.isLigature = classID === 2;
      this.isMark = classID === 3;
      this.markAttachmentType = GDEF.markAttachClassDef ? _OTProcessor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.getClassID(id, GDEF.markAttachClassDef) : 0;
    } else {
      this.isMark = this.codePoints.length > 0 && this.codePoints.every(unicode_properties__WEBPACK_IMPORTED_MODULE_0__.isMark);
      this.isBase = !this.isMark;
      this.isLigature = this.codePoints.length > 1;
      this.markAttachmentType = 0;
    }
  }

  copy() {
    return new GlyphInfo(this._font, this.id, this.codePoints, this.features);
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/GlyphIterator.js":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/GlyphIterator.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlyphIterator)
/* harmony export */ });
class GlyphIterator {
  constructor(glyphs, options) {
    this.glyphs = glyphs;
    this.reset(options);
  }

  reset(options = {}, index = 0) {
    this.options = options;
    this.flags = options.flags || {};
    this.markAttachmentType = options.markAttachmentType || 0;
    this.index = index;
  }

  get cur() {
    return this.glyphs[this.index] || null;
  }

  shouldIgnore(glyph) {
    return (this.flags.ignoreMarks && glyph.isMark) ||
           (this.flags.ignoreBaseGlyphs && glyph.isBase) ||
           (this.flags.ignoreLigatures && glyph.isLigature) ||
           (this.markAttachmentType && glyph.isMark && glyph.markAttachmentType !== this.markAttachmentType);
  }

  move(dir) {
    this.index += dir;
    while (0 <= this.index && this.index < this.glyphs.length && this.shouldIgnore(this.glyphs[this.index])) {
      this.index += dir;
    }

    if (0 > this.index || this.index >= this.glyphs.length) {
      return null;
    }

    return this.glyphs[this.index];
  }

  next() {
    return this.move(+1);
  }

  prev() {
    return this.move(-1);
  }

  peek(count = 1) {
    let idx = this.index;
    let res = this.increment(count);
    this.index = idx;
    return res;
  }

  peekIndex(count = 1) {
    let idx = this.index;
    this.increment(count);
    let res = this.index;
    this.index = idx;
    return res;
  }

  increment(count = 1) {
    let dir = count < 0 ? -1 : 1;
    count = Math.abs(count);
    while (count--) {
      this.move(dir);
    }

    return this.glyphs[this.index];
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/OTLayoutEngine.js":
/*!************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/OTLayoutEngine.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OTLayoutEngine)
/* harmony export */ });
/* harmony import */ var _ShapingPlan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapingPlan */ "./src/modules/fontkit/src/opentype/ShapingPlan.js");
/* harmony import */ var _shapers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapers */ "./src/modules/fontkit/src/opentype/shapers/index.js");
/* harmony import */ var _GlyphInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlyphInfo */ "./src/modules/fontkit/src/opentype/GlyphInfo.js");
/* harmony import */ var _GSUBProcessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GSUBProcessor */ "./src/modules/fontkit/src/opentype/GSUBProcessor.js");
/* harmony import */ var _GPOSProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GPOSProcessor */ "./src/modules/fontkit/src/opentype/GPOSProcessor.js");






class OTLayoutEngine {
  constructor(font) {
    this.font = font;
    this.glyphInfos = null;
    this.plan = null;
    this.GSUBProcessor = null;
    this.GPOSProcessor = null;
    this.fallbackPosition = true;

    if (font.GSUB) {
      this.GSUBProcessor = new _GSUBProcessor__WEBPACK_IMPORTED_MODULE_3__["default"](font, font.GSUB);
    }

    if (font.GPOS) {
      this.GPOSProcessor = new _GPOSProcessor__WEBPACK_IMPORTED_MODULE_4__["default"](font, font.GPOS);
    }
  }

  setup(glyphRun) {
    // Map glyphs to GlyphInfo objects so data can be passed between
    // GSUB and GPOS without mutating the real (shared) Glyph objects.
    this.glyphInfos = glyphRun.glyphs.map(glyph => new _GlyphInfo__WEBPACK_IMPORTED_MODULE_2__["default"](this.font, glyph.id, [...glyph.codePoints]));

    // Select a script based on what is available in GSUB/GPOS.
    let script = null;
    if (this.GPOSProcessor) {
      script = this.GPOSProcessor.selectScript(glyphRun.script, glyphRun.language, glyphRun.direction);
    }

    if (this.GSUBProcessor) {
      script = this.GSUBProcessor.selectScript(glyphRun.script, glyphRun.language, glyphRun.direction);
    }

    // Choose a shaper based on the script, and setup a shaping plan.
    // This determines which features to apply to which glyphs.
    this.shaper = _shapers__WEBPACK_IMPORTED_MODULE_1__.choose(script);
    this.plan = new _ShapingPlan__WEBPACK_IMPORTED_MODULE_0__["default"](this.font, script, glyphRun.direction);
    this.shaper.plan(this.plan, this.glyphInfos, glyphRun.features);

    // Assign chosen features to output glyph run
    for (let key in this.plan.allFeatures) {
      glyphRun.features[key] = true;
    }
  }

  substitute(glyphRun) {
    if (this.GSUBProcessor) {
      this.plan.process(this.GSUBProcessor, this.glyphInfos);

      // Map glyph infos back to normal Glyph objects
      glyphRun.glyphs = this.glyphInfos.map(glyphInfo => this.font.getGlyph(glyphInfo.id, glyphInfo.codePoints));
    }
  }

  position(glyphRun) {
    if (this.shaper.zeroMarkWidths === 'BEFORE_GPOS') {
      this.zeroMarkAdvances(glyphRun.positions);
    }

    if (this.GPOSProcessor) {
      this.plan.process(this.GPOSProcessor, this.glyphInfos, glyphRun.positions);
    }

    if (this.shaper.zeroMarkWidths === 'AFTER_GPOS') {
      this.zeroMarkAdvances(glyphRun.positions);
    }

    // Reverse the glyphs and positions if the script is right-to-left
    if (glyphRun.direction === 'rtl') {
      glyphRun.glyphs.reverse();
      glyphRun.positions.reverse();
    }

    return this.GPOSProcessor && this.GPOSProcessor.features;
  }

  zeroMarkAdvances(positions) {
    for (let i = 0; i < this.glyphInfos.length; i++) {
      if (this.glyphInfos[i].isMark) {
        positions[i].xAdvance = 0;
        positions[i].yAdvance = 0;
      }
    }
  }

  cleanup() {
    this.glyphInfos = null;
    this.plan = null;
    this.shaper = null;
  }

  getAvailableFeatures(script, language) {
    let features = [];

    if (this.GSUBProcessor) {
      this.GSUBProcessor.selectScript(script, language);
      features.push(...Object.keys(this.GSUBProcessor.features));
    }

    if (this.GPOSProcessor) {
      this.GPOSProcessor.selectScript(script, language);
      features.push(...Object.keys(this.GPOSProcessor.features));
    }

    return features;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/OTProcessor.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/OTProcessor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OTProcessor)
/* harmony export */ });
/* harmony import */ var _GlyphIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlyphIterator */ "./src/modules/fontkit/src/opentype/GlyphIterator.js");
/* harmony import */ var _layout_Script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Script */ "./src/modules/fontkit/src/layout/Script.js");



const DEFAULT_SCRIPTS = ['DFLT', 'dflt', 'latn'];

class OTProcessor {
  constructor(font, table) {
    this.font = font;
    this.table = table;

    this.script = null;
    this.scriptTag = null;

    this.language = null;
    this.languageTag = null;

    this.features = {};
    this.lookups = {};

    // Setup variation substitutions
    this.variationsIndex = font._variationProcessor
      ? this.findVariationsIndex(font._variationProcessor.normalizedCoords)
      : -1;

    // initialize to default script + language
    this.selectScript();

    // current context (set by applyFeatures)
    this.glyphs = [];
    this.positions = []; // only used by GPOS
    this.ligatureID = 1;
    this.currentFeature = null;
  }

  findScript(script) {
    if (this.table.scriptList == null) {
      return null;
    }

    if (!Array.isArray(script)) {
      script = [script];
    }

    for (let s of script) {
      for (let entry of this.table.scriptList) {
        if (entry.tag === s) {
          return entry;
        }
      }
    }

    return null;
  }

  selectScript(script, language, direction) {
    let changed = false;
    let entry;
    if (!this.script || script !== this.scriptTag) {
      entry = this.findScript(script);
      if (!entry) {
        entry = this.findScript(DEFAULT_SCRIPTS);
      }

      if (!entry) {
        return this.scriptTag;
      }

      this.scriptTag = entry.tag;
      this.script = entry.script;
      this.language = null;
      this.languageTag = null;
      changed = true;
    }

    if (!direction || direction !== this.direction) {
      this.direction = direction || _layout_Script__WEBPACK_IMPORTED_MODULE_1__.direction(script);
    }

    if (language && language.length < 4) {
      language += ' '.repeat(4 - language.length);
    }

    if (!language || language !== this.languageTag) {
      this.language = null;

      for (let lang of this.script.langSysRecords) {
        if (lang.tag === language) {
          this.language = lang.langSys;
          this.languageTag = lang.tag;
          break;
        }
      }

      if (!this.language) {
        this.language = this.script.defaultLangSys;
        this.languageTag = null;
      }

      changed = true;
    }

    // Build a feature lookup table
    if (changed) {
      this.features = {};
      if (this.language) {
        for (let featureIndex of this.language.featureIndexes) {
          let record = this.table.featureList[featureIndex];
          let substituteFeature = this.substituteFeatureForVariations(featureIndex);
          this.features[record.tag] = substituteFeature || record.feature;
        }
      }
    }

    return this.scriptTag;
  }

  lookupsForFeatures(userFeatures = [], exclude) {
    let lookups = [];
    for (let tag of userFeatures) {
      let feature = this.features[tag];
      if (!feature) {
        continue;
      }

      for (let lookupIndex of feature.lookupListIndexes) {
        if (exclude && exclude.indexOf(lookupIndex) !== -1) {
          continue;
        }

        lookups.push({
          feature: tag,
          index: lookupIndex,
          lookup: this.table.lookupList.get(lookupIndex)
        });
      }
    }

    lookups.sort((a, b) => a.index - b.index);
    return lookups;
  }

  substituteFeatureForVariations(featureIndex) {
    if (this.variationsIndex === -1) {
      return null;
    }

    let record = this.table.featureVariations.featureVariationRecords[this.variationsIndex];
    let substitutions = record.featureTableSubstitution.substitutions;
    for (let substitution of substitutions) {
      if (substitution.featureIndex === featureIndex) {
        return substitution.alternateFeatureTable;
      }
    }

    return null;
  }

  findVariationsIndex(coords) {
    let variations = this.table.featureVariations;
    if (!variations) {
      return -1;
    }

    let records = variations.featureVariationRecords;
    for (let i = 0; i < records.length; i++) {
      let conditions = records[i].conditionSet.conditionTable;
      if (this.variationConditionsMatch(conditions, coords)) {
        return i;
      }
    }

    return -1;
  }

  variationConditionsMatch(conditions, coords) {
    return conditions.every(condition => {
      let coord = condition.axisIndex < coords.length ? coords[condition.axisIndex] : 0;
      return condition.filterRangeMinValue <= coord && coord <= condition.filterRangeMaxValue;
    });
  }

  applyFeatures(userFeatures, glyphs, advances) {
    let lookups = this.lookupsForFeatures(userFeatures);
    this.applyLookups(lookups, glyphs, advances);
  }

  applyLookups(lookups, glyphs, positions) {
    this.glyphs = glyphs;
    this.positions = positions;
    this.glyphIterator = new _GlyphIterator__WEBPACK_IMPORTED_MODULE_0__["default"](glyphs);

    for (let { feature, lookup } of lookups) {
      this.currentFeature = feature;
      this.glyphIterator.reset(lookup.flags);

      while (this.glyphIterator.index < glyphs.length) {
        if (!(feature in this.glyphIterator.cur.features)) {
          this.glyphIterator.next();
          continue;
        }

        for (let table of lookup.subTables) {
          let res = this.applyLookup(lookup.lookupType, table);
          if (res) {
            break;
          }
        }

        this.glyphIterator.next();
      }
    }
  }

  applyLookup(lookup, table) {
    throw new Error("applyLookup must be implemented by subclasses");
  }

  applyLookupList(lookupRecords) {
    let options = this.glyphIterator.options;
    let glyphIndex = this.glyphIterator.index;

    for (let lookupRecord of lookupRecords) {
      // Reset flags and find glyph index for this lookup record
      this.glyphIterator.reset(options, glyphIndex);
      this.glyphIterator.increment(lookupRecord.sequenceIndex);

      // Get the lookup and setup flags for subtables
      let lookup = this.table.lookupList.get(lookupRecord.lookupListIndex);
      this.glyphIterator.reset(lookup.flags, this.glyphIterator.index);

      // Apply lookup subtables until one matches
      for (let table of lookup.subTables) {
        if (this.applyLookup(lookup.lookupType, table)) {
          break;
        }
      }
    }

    this.glyphIterator.reset(options, glyphIndex);
    return true;
  }

  coverageIndex(coverage, glyph) {
    if (glyph == null) {
      glyph = this.glyphIterator.cur.id;
    }

    switch (coverage.version) {
      case 1:
        return coverage.glyphs.indexOf(glyph);

      case 2:
        for (let range of coverage.rangeRecords) {
          if (range.start <= glyph && glyph <= range.end) {
            return range.startCoverageIndex + glyph - range.start;
          }
        }

        break;
    }

    return -1;
  }

  match(sequenceIndex, sequence, fn, matched) {
    let pos = this.glyphIterator.index;
    let glyph = this.glyphIterator.increment(sequenceIndex);
    let idx = 0;

    while (idx < sequence.length && glyph && fn(sequence[idx], glyph)) {
      if (matched) {
        matched.push(this.glyphIterator.index);
      }

      idx++;
      glyph = this.glyphIterator.next();
    }

    this.glyphIterator.index = pos;
    if (idx < sequence.length) {
      return false;
    }

    return matched || true;
  }

  sequenceMatches(sequenceIndex, sequence) {
    return this.match(sequenceIndex, sequence, (component, glyph) => component === glyph.id);
  }

  sequenceMatchIndices(sequenceIndex, sequence) {
    return this.match(sequenceIndex, sequence, (component, glyph) => {
      // If the current feature doesn't apply to this glyph,
      if (!(this.currentFeature in glyph.features)) {
        return false;
      }

      return component === glyph.id;
    }, []);
  }

  coverageSequenceMatches(sequenceIndex, sequence) {
    return this.match(sequenceIndex, sequence, (coverage, glyph) =>
      this.coverageIndex(coverage, glyph.id) >= 0
    );
  }

  getClassID(glyph, classDef) {
    switch (classDef.version) {
      case 1: // Class array
        let i = glyph - classDef.startGlyph;
        if (i >= 0 && i < classDef.classValueArray.length) {
          return classDef.classValueArray[i];
        }

        break;

      case 2:
        for (let range of classDef.classRangeRecord) {
          if (range.start <= glyph && glyph <= range.end) {
            return range.class;
          }
        }

        break;
    }

    return 0;
  }

  classSequenceMatches(sequenceIndex, sequence, classDef) {
    return this.match(sequenceIndex, sequence, (classID, glyph) =>
      classID === this.getClassID(glyph.id, classDef)
    );
  }

  applyContext(table) {
    let index, set;
    switch (table.version) {
      case 1:
        index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        set = table.ruleSets[index];
        for (let rule of set) {
          if (this.sequenceMatches(1, rule.input)) {
            return this.applyLookupList(rule.lookupRecords);
          }
        }

        break;

      case 2:
        if (this.coverageIndex(table.coverage) === -1) {
          return false;
        }

        index = this.getClassID(this.glyphIterator.cur.id, table.classDef);
        if (index === -1) {
          return false;
        }

        set = table.classSet[index];
        for (let rule of set) {
          if (this.classSequenceMatches(1, rule.classes, table.classDef)) {
            return this.applyLookupList(rule.lookupRecords);
          }
        }

        break;

      case 3:
        if (this.coverageSequenceMatches(0, table.coverages)) {
          return this.applyLookupList(table.lookupRecords);
        }

        break;
    }

    return false;
  }

  applyChainingContext(table) {
    let index;
    switch (table.version) {
      case 1:
        index = this.coverageIndex(table.coverage);
        if (index === -1) {
          return false;
        }

        let set = table.chainRuleSets[index];
        for (let rule of set) {
          if (this.sequenceMatches(-rule.backtrack.length, rule.backtrack)
            && this.sequenceMatches(1, rule.input)
            && this.sequenceMatches(1 + rule.input.length, rule.lookahead)) {
            return this.applyLookupList(rule.lookupRecords);
          }
        }

        break;

      case 2:
        if (this.coverageIndex(table.coverage) === -1) {
          return false;
        }

        index = this.getClassID(this.glyphIterator.cur.id, table.inputClassDef);
        let rules = table.chainClassSet[index];
        if (!rules) {
          return false;
        }

        for (let rule of rules) {
          if (this.classSequenceMatches(-rule.backtrack.length, rule.backtrack, table.backtrackClassDef) &&
            this.classSequenceMatches(1, rule.input, table.inputClassDef) &&
            this.classSequenceMatches(1 + rule.input.length, rule.lookahead, table.lookaheadClassDef)) {
            return this.applyLookupList(rule.lookupRecords);
          }
        }

        break;

      case 3:
        if (this.coverageSequenceMatches(-table.backtrackGlyphCount, table.backtrackCoverage) &&
          this.coverageSequenceMatches(0, table.inputCoverage) &&
          this.coverageSequenceMatches(table.inputGlyphCount, table.lookaheadCoverage)) {
          return this.applyLookupList(table.lookupRecords);
        }

        break;
    }

    return false;
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/ShapingPlan.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/ShapingPlan.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShapingPlan)
/* harmony export */ });
/* harmony import */ var _layout_Script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Script */ "./src/modules/fontkit/src/layout/Script.js");


/**
 * ShapingPlans are used by the OpenType shapers to store which
 * features should by applied, and in what order to apply them.
 * The features are applied in groups called stages. A feature
 * can be applied globally to all glyphs, or locally to only
 * specific glyphs.
 *
 * @private
 */
class ShapingPlan {
  constructor(font, script, direction) {
    this.font = font;
    this.script = script;
    this.direction = direction;
    this.stages = [];
    this.globalFeatures = {};
    this.allFeatures = {};
  }

  /**
   * Adds the given features to the last stage.
   * Ignores features that have already been applied.
   */
  _addFeatures(features, global) {
    let stageIndex = this.stages.length - 1;
    let stage = this.stages[stageIndex];
    for (let feature of features) {
      if (this.allFeatures[feature] == null) {
        stage.push(feature);
        this.allFeatures[feature] = stageIndex;

        if (global) {
          this.globalFeatures[feature] = true;
        }
      }
    }
  }

  /**
   * Add features to the last stage
   */
  add(arg, global = true) {
    if (this.stages.length === 0) {
      this.stages.push([]);
    }

    if (typeof arg === 'string') {
      arg = [arg];
    }

    if (Array.isArray(arg)) {
      this._addFeatures(arg, global);
    } else if (typeof arg === 'object') {
      this._addFeatures(arg.global || [], true);
      this._addFeatures(arg.local || [], false);
    } else {
      throw new Error("Unsupported argument to ShapingPlan#add");
    }
  }

  /**
   * Add a new stage
   */
  addStage(arg, global) {
    if (typeof arg === 'function') {
      this.stages.push(arg, []);
    } else {
      this.stages.push([]);
      this.add(arg, global);
    }
  }

  setFeatureOverrides(features) {
    if (Array.isArray(features)) {
      this.add(features);
    } else if (typeof features === 'object') {
      for (let tag in features) {
        if (features[tag]) {
          this.add(tag);
        } else if (this.allFeatures[tag] != null) {
          let stage = this.stages[this.allFeatures[tag]];
          stage.splice(stage.indexOf(tag), 1);
          delete this.allFeatures[tag];
          delete this.globalFeatures[tag];
        }
      }
    }
  }

  /**
   * Assigns the global features to the given glyphs
   */
  assignGlobalFeatures(glyphs) {
    for (let glyph of glyphs) {
      for (let feature in this.globalFeatures) {
        glyph.features[feature] = true;
      }
    }
  }

  /**
   * Executes the planned stages using the given OTProcessor
   */
  process(processor, glyphs, positions) {
    for (let stage of this.stages) {
      if (typeof stage === 'function') {
        if (!positions) {
          stage(this.font, glyphs, this);
        }

      } else if (stage.length > 0) {
        processor.applyFeatures(stage, glyphs, positions);
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/ArabicShaper.js":
/*!******************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/ArabicShaper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArabicShaper)
/* harmony export */ });
/* harmony import */ var _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultShaper */ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js");
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unicode-trie */ "./node_modules/unicode-trie/index.js");
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unicode_trie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/modules/fontkit/src/utils.js");
/* harmony import */ var _data_trie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.trie */ "./src/modules/fontkit/src/opentype/shapers/data.trie");





//AUIT
//const trie = new UnicodeTrie(decodeBase64(require('fs').readFileSync(__dirname + '/data.trie', 'base64')));
const trie = new (unicode_trie__WEBPACK_IMPORTED_MODULE_2___default())(_data_trie__WEBPACK_IMPORTED_MODULE_4__["default"]);
const FEATURES = ['isol', 'fina', 'fin2', 'fin3', 'medi', 'med2', 'init'];

const ShapingClasses = {
  Non_Joining: 0,
  Left_Joining: 1,
  Right_Joining: 2,
  Dual_Joining: 3,
  Join_Causing: 3,
  ALAPH: 4,
  'DALATH RISH': 5,
  Transparent: 6
};

const ISOL = 'isol';
const FINA = 'fina';
const FIN2 = 'fin2';
const FIN3 = 'fin3';
const MEDI = 'medi';
const MED2 = 'med2';
const INIT = 'init';
const NONE = null;

// Each entry is [prevAction, curAction, nextState]
const STATE_TABLE = [
  //   Non_Joining,        Left_Joining,       Right_Joining,     Dual_Joining,           ALAPH,            DALATH RISH
  // State 0: prev was U,  not willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ NONE, ISOL, 1 ],  [ NONE, ISOL, 2 ],  [ NONE, ISOL, 1 ],  [ NONE, ISOL, 6 ] ],

  // State 1: prev was R or ISOL/ALAPH,  not willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ NONE, ISOL, 1 ],  [ NONE, ISOL, 2 ],  [ NONE, FIN2, 5 ],  [ NONE, ISOL, 6 ] ],

  // State 2: prev was D/L in ISOL form,  willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ INIT, FINA, 1 ],  [ INIT, FINA, 3 ],  [ INIT, FINA, 4 ],  [ INIT, FINA, 6 ] ],

  // State 3: prev was D in FINA form,  willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ MEDI, FINA, 1 ],  [ MEDI, FINA, 3 ],  [ MEDI, FINA, 4 ],  [ MEDI, FINA, 6 ] ],

  // State 4: prev was FINA ALAPH,  not willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ MED2, ISOL, 1 ],  [ MED2, ISOL, 2 ],  [ MED2, FIN2, 5 ],  [ MED2, ISOL, 6 ] ],

  // State 5: prev was FIN2/FIN3 ALAPH,  not willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ ISOL, ISOL, 1 ],  [ ISOL, ISOL, 2 ],  [ ISOL, FIN2, 5 ],  [ ISOL, ISOL, 6 ] ],

  // State 6: prev was DALATH/RISH,  not willing to join.
  [ [ NONE, NONE, 0 ],  [ NONE, ISOL, 2 ],  [ NONE, ISOL, 1 ],  [ NONE, ISOL, 2 ],  [ NONE, FIN3, 5 ],  [ NONE, ISOL, 6 ] ]
];

/**
 * This is a shaper for Arabic, and other cursive scripts.
 * It uses data from ArabicShaping.txt in the Unicode database,
 * compiled to a UnicodeTrie by generate-data.coffee.
 *
 * The shaping state machine was ported from Harfbuzz.
 * https://github.com/behdad/harfbuzz/blob/master/src/hb-ot-shape-complex-arabic.cc
 */
class ArabicShaper extends _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static planFeatures(plan) {
    plan.add(['ccmp', 'locl']);
    for (let i = 0; i < FEATURES.length; i++) {
      let feature = FEATURES[i];
      plan.addStage(feature, false);
    }

    plan.addStage('mset');
  }

  static assignFeatures(plan, glyphs) {
    super.assignFeatures(plan, glyphs);

    let prev = -1;
    let state = 0;
    let actions = [];

    // Apply the state machine to map glyphs to features
    for (let i = 0; i < glyphs.length; i++) {
      let curAction, prevAction;
      var glyph = glyphs[i];
      let type = getShapingClass(glyph.codePoints[0]);
      if (type === ShapingClasses.Transparent) {
        actions[i] = NONE;
        continue;
      }

      [prevAction, curAction, state] = STATE_TABLE[state][type];

      if (prevAction !== NONE && prev !== -1) {
        actions[prev] = prevAction;
      }

      actions[i] = curAction;
      prev = i;
    }

    // Apply the chosen features to their respective glyphs
    for (let index = 0; index < glyphs.length; index++) {
      let feature;
      var glyph = glyphs[index];
      if (feature = actions[index]) {
        glyph.features[feature] = true;
      }
    }
  }
}

function getShapingClass(codePoint) {
  let res = trie.get(codePoint);
  if (res) {
    return res - 1;
  }

  let category = (0,unicode_properties__WEBPACK_IMPORTED_MODULE_1__.getCategory)(codePoint);
  if (category === 'Mn' || category === 'Me' || category === 'Cf') {
    return ShapingClasses.Transparent;
  }

  return ShapingClasses.Non_Joining;
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js":
/*!*******************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultShaper)
/* harmony export */ });
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");


const VARIATION_FEATURES = ['rvrn'];
const COMMON_FEATURES = ['ccmp', 'locl', 'rlig', 'mark', 'mkmk'];
const FRACTIONAL_FEATURES = ['frac', 'numr', 'dnom'];
const HORIZONTAL_FEATURES = ['calt', 'clig', 'liga', 'rclt', 'curs', 'kern'];
const VERTICAL_FEATURES = ['vert'];
const DIRECTIONAL_FEATURES = {
  ltr: ['ltra', 'ltrm'],
  rtl: ['rtla', 'rtlm']
};

class DefaultShaper {
  static zeroMarkWidths = 'AFTER_GPOS';
  static plan(plan, glyphs, features) {
    // Plan the features we want to apply
    this.planPreprocessing(plan);
    this.planFeatures(plan);
    this.planPostprocessing(plan, features);

    // Assign the global features to all the glyphs
    plan.assignGlobalFeatures(glyphs);

    // Assign local features to glyphs
    this.assignFeatures(plan, glyphs);
  }

  static planPreprocessing(plan) {
    plan.add({
      global: [...VARIATION_FEATURES, ...DIRECTIONAL_FEATURES[plan.direction]],
      local: FRACTIONAL_FEATURES
    });
  }

  static planFeatures(plan) {
    // Do nothing by default. Let subclasses override this.
  }

  static planPostprocessing(plan, userFeatures) {
    plan.add([...COMMON_FEATURES, ...HORIZONTAL_FEATURES]);
    plan.setFeatureOverrides(userFeatures);
  }

  static assignFeatures(plan, glyphs) {
    // Enable contextual fractions
    for (let i = 0; i < glyphs.length; i++) {
      let glyph = glyphs[i];
      if (glyph.codePoints[0] === 0x2044) { // fraction slash
        let start = i;
        let end = i + 1;

        // Apply numerator
        while (start > 0 && (0,unicode_properties__WEBPACK_IMPORTED_MODULE_0__.isDigit)(glyphs[start - 1].codePoints[0])) {
          glyphs[start - 1].features.numr = true;
          glyphs[start - 1].features.frac = true;
          start--;
        }

        // Apply denominator
        while (end < glyphs.length && (0,unicode_properties__WEBPACK_IMPORTED_MODULE_0__.isDigit)(glyphs[end].codePoints[0])) {
          glyphs[end].features.dnom = true;
          glyphs[end].features.frac = true;
          end++;
        }

        // Apply fraction slash
        glyph.features.frac = true;
        i = end - 1;
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/HangulShaper.js":
/*!******************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/HangulShaper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HangulShaper)
/* harmony export */ });
/* harmony import */ var _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultShaper */ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js");
/* harmony import */ var _GlyphInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlyphInfo */ "./src/modules/fontkit/src/opentype/GlyphInfo.js");



/**
 * This is a shaper for the Hangul script, used by the Korean language.
 * It does the following:
 *   - decompose if unsupported by the font:
 *     <LV>   -> <L,V>
 *     <LVT>  -> <L,V,T>
 *     <LV,T> -> <L,V,T>
 *
 *   - compose if supported by the font:
 *     <L,V>   -> <LV>
 *     <L,V,T> -> <LVT>
 *     <LV,T>  -> <LVT>
 *
 *   - reorder tone marks (S is any valid syllable):
 *     <S, M> -> <M, S>
 *
 *   - apply ljmo, vjmo, and tjmo OpenType features to decomposed Jamo sequences.
 *
 * This logic is based on the following documents:
 *   - http://www.microsoft.com/typography/OpenTypeDev/hangul/intro.htm
 *   - http://ktug.org/~nomos/harfbuzz-hangul/hangulshaper.pdf
 */
class HangulShaper extends _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static zeroMarkWidths = 'NONE';
  static planFeatures(plan) {
    plan.add(['ljmo', 'vjmo', 'tjmo'], false);
  }

  static assignFeatures(plan, glyphs) {
    let state = 0;
    let i = 0;
    while (i < glyphs.length) {
      let action;
      let glyph = glyphs[i];
      let code = glyph.codePoints[0];
      let type = getType(code);

      [ action, state ] = STATE_TABLE[state][type];

      switch (action) {
        case DECOMPOSE:
          // Decompose the composed syllable if it is not supported by the font.
          if (!plan.font.hasGlyphForCodePoint(code)) {
            i = decompose(glyphs, i, plan.font);
          }
          break;

        case COMPOSE:
          // Found a decomposed syllable. Try to compose if supported by the font.
          i = compose(glyphs, i, plan.font);
          break;

        case TONE_MARK:
          // Got a valid syllable, followed by a tone mark. Move the tone mark to the beginning of the syllable.
          reorderToneMark(glyphs, i, plan.font);
          break;

        case INVALID:
          // Tone mark has no valid syllable to attach to, so insert a dotted circle
          i = insertDottedCircle(glyphs, i, plan.font);
          break;
      }

      i++;
    }
  }
}

const HANGUL_BASE  = 0xac00;
const HANGUL_END   = 0xd7a4;
const HANGUL_COUNT = HANGUL_END - HANGUL_BASE + 1;
const L_BASE  = 0x1100; // lead
const V_BASE  = 0x1161; // vowel
const T_BASE  = 0x11a7; // trail
const L_COUNT = 19;
const V_COUNT = 21;
const T_COUNT = 28;
const L_END   = L_BASE + L_COUNT - 1;
const V_END   = V_BASE + V_COUNT - 1;
const T_END   = T_BASE + T_COUNT - 1;
const DOTTED_CIRCLE = 0x25cc;

const isL    = code => 0x1100 <= code && code <= 0x115f || 0xa960 <= code && code <= 0xa97c;
const isV    = code => 0x1160 <= code && code <= 0x11a7 || 0xd7b0 <= code && code <= 0xd7c6;
const isT    = code => 0x11a8 <= code && code <= 0x11ff || 0xd7cb <= code && code <= 0xd7fb;
const isTone = code => 0x302e <= code && code <= 0x302f;
const isLVT  = code => HANGUL_BASE <= code && code <= HANGUL_END;
const isLV   = code => (code - HANGUL_BASE) < HANGUL_COUNT && (code - HANGUL_BASE) % T_COUNT === 0;
const isCombiningL = code => L_BASE <= code && code <= L_END;
const isCombiningV = code => V_BASE <= code && code <= V_END;
const isCombiningT = code => T_BASE + 1 && 1 <= code && code <= T_END;

// Character categories
const X   = 0; // Other character
const L   = 1; // Leading consonant
const V   = 2; // Medial vowel
const T   = 3; // Trailing consonant
const LV  = 4; // Composed <LV> syllable
const LVT = 5; // Composed <LVT> syllable
const M   = 6; // Tone mark

// This function classifies a character using the above categories.
function getType(code) {
  if (isL(code))    { return L; }
  if (isV(code))    { return V; }
  if (isT(code))    { return T; }
  if (isLV(code))   { return LV; }
  if (isLVT(code))  { return LVT; }
  if (isTone(code)) { return M; }
  return X;
}

// State machine actions
const NO_ACTION = 0;
const DECOMPOSE = 1;
const COMPOSE   = 2;
const TONE_MARK = 4;
const INVALID   = 5;

// Build a state machine that accepts valid syllables, and applies actions along the way.
// The logic this is implementing is documented at the top of the file.
const STATE_TABLE = [
  //       X                 L                 V                T                  LV                LVT               M
  // State 0: start state
  [ [ NO_ACTION, 0 ], [ NO_ACTION, 1 ], [ NO_ACTION, 0 ], [ NO_ACTION, 0 ], [ DECOMPOSE, 2 ], [ DECOMPOSE, 3 ], [  INVALID, 0  ] ],

  // State 1: <L>
  [ [ NO_ACTION, 0 ], [ NO_ACTION, 1 ], [  COMPOSE, 2  ], [ NO_ACTION, 0 ], [ DECOMPOSE, 2 ], [ DECOMPOSE, 3 ], [  INVALID, 0  ] ],

  // State 2: <L,V> or <LV>
  [ [ NO_ACTION, 0 ], [ NO_ACTION, 1 ], [ NO_ACTION, 0 ], [  COMPOSE, 3  ], [ DECOMPOSE, 2 ], [ DECOMPOSE, 3 ], [ TONE_MARK, 0 ] ],

  // State 3: <L,V,T> or <LVT>
  [ [ NO_ACTION, 0 ], [ NO_ACTION, 1 ], [ NO_ACTION, 0 ], [ NO_ACTION, 0 ], [ DECOMPOSE, 2 ], [ DECOMPOSE, 3 ], [ TONE_MARK, 0 ] ]
];

function getGlyph(font, code, features) {
  return new _GlyphInfo__WEBPACK_IMPORTED_MODULE_1__["default"](font, font.glyphForCodePoint(code).id, [code], features);
}

function decompose(glyphs, i, font) {
  let glyph = glyphs[i];
  let code = glyph.codePoints[0];

  let s = code - HANGUL_BASE;
  let t = T_BASE + s % T_COUNT;
  s = s / T_COUNT | 0;
  let l = L_BASE + s / V_COUNT | 0;
  let v = V_BASE + s % V_COUNT;

  // Don't decompose if all of the components are not available
  if (!font.hasGlyphForCodePoint(l) ||
      !font.hasGlyphForCodePoint(v) ||
      (t !== T_BASE && !font.hasGlyphForCodePoint(t))) {
    return i;
  }

  // Replace the current glyph with decomposed L, V, and T glyphs,
  // and apply the proper OpenType features to each component.
  let ljmo = getGlyph(font, l, glyph.features);
  ljmo.features.ljmo = true;

  let vjmo = getGlyph(font, v, glyph.features);
  vjmo.features.vjmo = true;

  let insert = [ ljmo, vjmo ];

  if (t > T_BASE) {
    let tjmo = getGlyph(font, t, glyph.features);
    tjmo.features.tjmo = true;
    insert.push(tjmo);
  }

  glyphs.splice(i, 1, ...insert);
  return i + insert.length - 1;
}

function compose(glyphs, i, font) {
  let glyph = glyphs[i];
  let code = glyphs[i].codePoints[0];
  let type = getType(code);

  let prev = glyphs[i - 1].codePoints[0];
  let prevType = getType(prev);

  // Figure out what type of syllable we're dealing with
  let lv, ljmo, vjmo, tjmo;
  if (prevType === LV && type === T) {
    // <LV,T>
    lv = prev;
    tjmo = glyph;
  } else {
    if (type === V) {
      // <L,V>
      ljmo = glyphs[i - 1];
      vjmo = glyph;
    } else {
      // <L,V,T>
      ljmo = glyphs[i - 2];
      vjmo = glyphs[i - 1];
      tjmo = glyph;
    }

    let l = ljmo.codePoints[0];
    let v = vjmo.codePoints[0];

    // Make sure L and V are combining characters
    if (isCombiningL(l) && isCombiningV(v)) {
      lv = HANGUL_BASE + ((l - L_BASE) * V_COUNT + (v - V_BASE)) * T_COUNT;
    }
  }

  let t = (tjmo && tjmo.codePoints[0]) || T_BASE;
  if ((lv != null) && (t === T_BASE || isCombiningT(t))) {
    let s = lv + (t - T_BASE);

    // Replace with a composed glyph if supported by the font,
    // otherwise apply the proper OpenType features to each component.
    if (font.hasGlyphForCodePoint(s)) {
      let del = prevType === V ? 3 : 2;
      glyphs.splice(i - del + 1, del, getGlyph(font, s, glyph.features));
      return i - del + 1;
    }
  }

  // Didn't compose (either a non-combining component or unsupported by font).
  if (ljmo) { ljmo.features.ljmo = true; }
  if (vjmo) { vjmo.features.vjmo = true; }
  if (tjmo) { tjmo.features.tjmo = true; }

  if (prevType === LV) {
    // Sequence was originally <L,V>, which got combined earlier.
    // Either the T was non-combining, or the LVT glyph wasn't supported.
    // Decompose the glyph again and apply OT features.
    decompose(glyphs, i - 1, font);
    return i + 1;
  }

  return i;
}

function getLength(code) {
  switch (getType(code)) {
    case LV:
    case LVT:
      return 1;
    case V:
      return 2;
    case T:
      return 3;
  }
}

function reorderToneMark(glyphs, i, font) {
  let glyph = glyphs[i];
  let code = glyphs[i].codePoints[0];

  // Move tone mark to the beginning of the previous syllable, unless it is zero width
  if (font.glyphForCodePoint(code).advanceWidth === 0) { return; }

  let prev = glyphs[i - 1].codePoints[0];
  let len = getLength(prev);

  glyphs.splice(i, 1);
  return glyphs.splice(i - len, 0, glyph);
}

function insertDottedCircle(glyphs, i, font) {
  let glyph = glyphs[i];
  let code = glyphs[i].codePoints[0];

  if (font.hasGlyphForCodePoint(DOTTED_CIRCLE)) {
    let dottedCircle = getGlyph(font, DOTTED_CIRCLE, glyph.features);

    // If the tone mark is zero width, insert the dotted circle before, otherwise after
    let idx = font.glyphForCodePoint(code).advanceWidth === 0 ? i : i + 1;
    glyphs.splice(idx, 0, dottedCircle);
    i++;
  }

  return i;
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/IndicShaper.js":
/*!*****************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/IndicShaper.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicShaper)
/* harmony export */ });
/* harmony import */ var _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultShaper */ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js");
/* harmony import */ var dfa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dfa */ "./node_modules/dfa/index.js");
/* harmony import */ var dfa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dfa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unicode-trie */ "./node_modules/unicode-trie/index.js");
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unicode_trie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unicode_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unicode-properties */ "./node_modules/unicode-properties/dist/module.mjs");
/* harmony import */ var _layout_Script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/Script */ "./src/modules/fontkit/src/layout/Script.js");
/* harmony import */ var _GlyphInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GlyphInfo */ "./src/modules/fontkit/src/opentype/GlyphInfo.js");
/* harmony import */ var _indic_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indic.json */ "./src/modules/fontkit/src/opentype/shapers/indic.json");
/* harmony import */ var _use_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use.json */ "./src/modules/fontkit/src/opentype/shapers/use.json");
/* harmony import */ var _indic_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indic-data */ "./src/modules/fontkit/src/opentype/shapers/indic-data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/modules/fontkit/src/utils.js");
/* harmony import */ var _indic_trie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indic.trie */ "./src/modules/fontkit/src/opentype/shapers/indic.trie");










//AUIT

const {decompositions} = _use_json__WEBPACK_IMPORTED_MODULE_7__;
const trie = new (unicode_trie__WEBPACK_IMPORTED_MODULE_2___default())(_indic_trie__WEBPACK_IMPORTED_MODULE_10__["default"]);
//const trie = new UnicodeTrie(decodeBase64(require('fs').readFileSync(__dirname + '/indic.trie', 'base64')));
const stateMachine = new (dfa__WEBPACK_IMPORTED_MODULE_1___default())(_indic_json__WEBPACK_IMPORTED_MODULE_6__);

/**
 * The IndicShaper supports indic scripts e.g. Devanagari, Kannada, etc.
 * Based on code from Harfbuzz: https://github.com/behdad/harfbuzz/blob/master/src/hb-ot-shape-complex-indic.cc
 */
class IndicShaper extends _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static zeroMarkWidths = 'NONE';
  static planFeatures(plan) {
    plan.addStage(setupSyllables);

    plan.addStage(['locl', 'ccmp']);

    plan.addStage(initialReordering);

    plan.addStage('nukt');
    plan.addStage('akhn');
    plan.addStage('rphf', false);
    plan.addStage('rkrf');
    plan.addStage('pref', false);
    plan.addStage('blwf', false);
    plan.addStage('abvf', false);
    plan.addStage('half', false);
    plan.addStage('pstf', false);
    plan.addStage('vatu');
    plan.addStage('cjct');
    plan.addStage('cfar', false);

    plan.addStage(finalReordering);

    plan.addStage({
      local: ['init'],
      global: ['pres', 'abvs', 'blws', 'psts', 'haln', 'dist', 'abvm', 'blwm', 'calt', 'clig']
    });

    // Setup the indic config for the selected script
    plan.unicodeScript = _layout_Script__WEBPACK_IMPORTED_MODULE_4__.fromOpenType(plan.script);
    plan.indicConfig = _indic_data__WEBPACK_IMPORTED_MODULE_8__.INDIC_CONFIGS[plan.unicodeScript] || _indic_data__WEBPACK_IMPORTED_MODULE_8__.INDIC_CONFIGS.Default;
    plan.isOldSpec = plan.indicConfig.hasOldSpec && plan.script[plan.script.length - 1] !== '2';

    // TODO: turn off kern (Khmer) and liga features.
  }

  static assignFeatures(plan, glyphs) {
    // Decompose split matras
    // TODO: do this in a more general unicode normalizer
    for (let i = glyphs.length - 1; i >= 0; i--) {
      let codepoint = glyphs[i].codePoints[0];
      let d = _indic_data__WEBPACK_IMPORTED_MODULE_8__.INDIC_DECOMPOSITIONS[codepoint] || decompositions[codepoint];
      if (d) {
        let decomposed = d.map(c => {
          let g = plan.font.glyphForCodePoint(c);
          return new _GlyphInfo__WEBPACK_IMPORTED_MODULE_5__["default"](plan.font, g.id, [c], glyphs[i].features);
        });

        glyphs.splice(i, 1, ...decomposed);
      }
    }
  }
}

function indicCategory(glyph) {
  return trie.get(glyph.codePoints[0]) >> 8;
}

function indicPosition(glyph) {
  return 1 << (trie.get(glyph.codePoints[0]) & 0xff);
}

class IndicInfo {
  constructor(category, position, syllableType, syllable) {
    this.category = category;
    this.position = position;
    this.syllableType = syllableType;
    this.syllable = syllable;
  }
}

function setupSyllables(font, glyphs) {
  let syllable = 0;
  let last = 0;
  for (let [start, end, tags] of stateMachine.match(glyphs.map(indicCategory))) {
    if (start > last) {
      ++syllable;
      for (let i = last; i < start; i++) {
        glyphs[i].shaperInfo = new IndicInfo(_indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.X, _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.End, 'non_indic_cluster', syllable);
      }
    }

    ++syllable;

    // Create shaper info
    for (let i = start; i <= end; i++) {
      glyphs[i].shaperInfo = new IndicInfo(
        1 << indicCategory(glyphs[i]),
        indicPosition(glyphs[i]),
        tags[0],
        syllable
      );
    }

    last = end + 1;
  }

  if (last < glyphs.length) {
    ++syllable;
    for (let i = last; i < glyphs.length; i++) {
      glyphs[i].shaperInfo = new IndicInfo(_indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.X, _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.End, 'non_indic_cluster', syllable);
    }
  }
}

function isConsonant(glyph) {
  return glyph.shaperInfo.category & _indic_data__WEBPACK_IMPORTED_MODULE_8__.CONSONANT_FLAGS;
}

function isJoiner(glyph) {
  return glyph.shaperInfo.category & _indic_data__WEBPACK_IMPORTED_MODULE_8__.JOINER_FLAGS;
}

function isHalantOrCoeng(glyph) {
  return glyph.shaperInfo.category & _indic_data__WEBPACK_IMPORTED_MODULE_8__.HALANT_OR_COENG_FLAGS;
}

function wouldSubstitute(glyphs, feature) {
  for (let glyph of glyphs) {
    glyph.features = {[feature]: true};
  }

  let GSUB = glyphs[0]._font._layoutEngine.engine.GSUBProcessor;
  GSUB.applyFeatures([feature], glyphs);

  return glyphs.length === 1;
}

function consonantPosition(font, consonant, virama) {
  let glyphs = [virama, consonant, virama];
  if (wouldSubstitute(glyphs.slice(0, 2), 'blwf') || wouldSubstitute(glyphs.slice(1, 3), 'blwf')) {
    return _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Below_C;
  } else if (wouldSubstitute(glyphs.slice(0, 2), 'pstf') || wouldSubstitute(glyphs.slice(1, 3), 'pstf')) {
    return _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Post_C;
  } else if (wouldSubstitute(glyphs.slice(0, 2), 'pref') || wouldSubstitute(glyphs.slice(1, 3), 'pref')) {
    return _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Post_C;
  }

  return _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C;
}

function initialReordering(font, glyphs, plan) {
  let indicConfig = plan.indicConfig;
  let features = font._layoutEngine.engine.GSUBProcessor.features;

  let dottedCircle = font.glyphForCodePoint(0x25cc).id;
  let virama = font.glyphForCodePoint(indicConfig.virama).id;
  if (virama) {
    let info = new _GlyphInfo__WEBPACK_IMPORTED_MODULE_5__["default"](font, virama, [indicConfig.virama]);
    for (let i = 0; i < glyphs.length; i++) {
      if (glyphs[i].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C) {
        glyphs[i].shaperInfo.position = consonantPosition(font, glyphs[i].copy(), info);
      }
    }
  }

  for (let start = 0, end = nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = nextSyllable(glyphs, start)) {
    let {category, syllableType} = glyphs[start].shaperInfo;

    if (syllableType === 'symbol_cluster' || syllableType === 'non_indic_cluster') {
      continue;
    }

    if (syllableType === 'broken_cluster' && dottedCircle) {
      let g = new _GlyphInfo__WEBPACK_IMPORTED_MODULE_5__["default"](font, dottedCircle, [0x25cc]);
      g.shaperInfo = new IndicInfo(
        1 << indicCategory(g),
        indicPosition(g),
        glyphs[start].shaperInfo.syllableType,
        glyphs[start].shaperInfo.syllable
      );

      // Insert after possible Repha.
      let i = start;
      while (i < end && glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.Repha) {
        i++;
      }

      glyphs.splice(i++, 0, g);
      end++;
    }

    // 1. Find base consonant:
    //
    // The shaping engine finds the base consonant of the syllable, using the
    // following algorithm: starting from the end of the syllable, move backwards
    // until a consonant is found that does not have a below-base or post-base
    // form (post-base forms have to follow below-base forms), or that is not a
    // pre-base reordering Ra, or arrive at the first consonant. The consonant
    // stopped at will be the base.

    let base = end;
    let limit = start;
    let hasReph = false;

    // If the syllable starts with Ra + Halant (in a script that has Reph)
    // and has more than one consonant, Ra is excluded from candidates for
    // base consonants.
    if (indicConfig.rephPos !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Ra_To_Become_Reph &&
      features.rphf &&
      start + 3 <= end && (
        (indicConfig.rephMode === 'Implicit' && !isJoiner(glyphs[start + 2])) ||
        (indicConfig.rephMode === 'Explicit' && glyphs[start + 2].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.ZWJ)
      )
    ) {
      // See if it matches the 'rphf' feature.
      let g = [glyphs[start].copy(), glyphs[start + 1].copy(), glyphs[start + 2].copy()];
      if (wouldSubstitute(g.slice(0, 2), 'rphf') || (indicConfig.rephMode === 'Explicit' && wouldSubstitute(g, 'rphf'))) {
        limit += 2;
        while (limit < end && isJoiner(glyphs[limit])) {
          limit++;
        }
        base = start;
        hasReph = true;
      }
    } else if (indicConfig.rephMode === 'Log_Repha' && glyphs[start].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.Repha) {
      limit++;
      while (limit < end && isJoiner(glyphs[limit])) {
        limit++;
      }
      base = start;
      hasReph = true;
    }

    switch (indicConfig.basePos) {
      case 'Last': {
        // starting from the end of the syllable, move backwards
        let i = end;
        let seenBelow = false;

        do {
          let info = glyphs[--i].shaperInfo;

          // until a consonant is found
          if (isConsonant(glyphs[i])) {
            // that does not have a below-base or post-base form
            // (post-base forms have to follow below-base forms),
            if (info.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Below_C && (info.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Post_C || seenBelow)) {
              base = i;
              break;
            }

            // or that is not a pre-base reordering Ra,
            //
            // IMPLEMENTATION NOTES:
            //
            // Our pre-base reordering Ra's are marked POS_POST_C, so will be skipped
            // by the logic above already.
            //

            // or arrive at the first consonant. The consonant stopped at will
            // be the base.
            if (info.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Below_C) {
              seenBelow = true;
            }

            base = i;
          } else if (start < i && info.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.ZWJ && glyphs[i - 1].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H) {
            // A ZWJ after a Halant stops the base search, and requests an explicit
            // half form.
            // A ZWJ before a Halant, requests a subjoined form instead, and hence
            // search continues.  This is particularly important for Bengali
            // sequence Ra,H,Ya that should form Ya-Phalaa by subjoining Ya.
            break;
          }
        } while (i > limit);
        break;
      }

      case 'First': {
        // The first consonant is always the base.
        base = start;

        // Mark all subsequent consonants as below.
        for (let i = base + 1; i < end; i++) {
          if (isConsonant(glyphs[i])) {
            glyphs[i].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Below_C;
          }
        }
      }
    }

    // If the syllable starts with Ra + Halant (in a script that has Reph)
    // and has more than one consonant, Ra is excluded from candidates for
    // base consonants.
    //
    //  Only do this for unforced Reph. (ie. not for Ra,H,ZWJ)
    if (hasReph && base === start && limit - base <= 2) {
      hasReph = false;
    }

    // 2. Decompose and reorder Matras:
    //
    // Each matra and any syllable modifier sign in the cluster are moved to the
    // appropriate position relative to the consonant(s) in the cluster. The
    // shaping engine decomposes two- or three-part matras into their constituent
    // parts before any repositioning. Matra characters are classified by which
    // consonant in a conjunct they have affinity for and are reordered to the
    // following positions:
    //
    //   o Before first half form in the syllable
    //   o After subjoined consonants
    //   o After post-form consonant
    //   o After main consonant (for above marks)
    //
    // IMPLEMENTATION NOTES:
    //
    // The normalize() routine has already decomposed matras for us, so we don't
    // need to worry about that.

    // 3.  Reorder marks to canonical order:
    //
    // Adjacent nukta and halant or nukta and vedic sign are always repositioned
    // if necessary, so that the nukta is first.
    //
    // IMPLEMENTATION NOTES:
    //
    // We don't need to do this: the normalize() routine already did this for us.

    // Reorder characters

    for (let i = start; i < base; i++) {
      let info = glyphs[i].shaperInfo;
      info.position = Math.min(_indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_C, info.position);
    }

    if (base < end) {
      glyphs[base].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C;
    }

    // Mark final consonants.  A final consonant is one appearing after a matra,
    // like in Khmer.
    for (let i = base + 1; i < end; i++) {
      if (glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M) {
        for (let j = i + 1; j < end; j++) {
          if (isConsonant(glyphs[j])) {
            glyphs[j].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Final_C;
            break;
          }
        }
        break;
      }
    }

    // Handle beginning Ra
    if (hasReph) {
      glyphs[start].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Ra_To_Become_Reph;
    }

    // For old-style Indic script tags, move the first post-base Halant after
    // last consonant.
    //
    // Reports suggest that in some scripts Uniscribe does this only if there
    // is *not* a Halant after last consonant already (eg. Kannada), while it
    // does it unconditionally in other scripts (eg. Malayalam).  We don't
    // currently know about other scripts, so we single out Malayalam for now.
    //
    // Kannada test case:
    // U+0C9A,U+0CCD,U+0C9A,U+0CCD
    // With some versions of Lohit Kannada.
    // https://bugs.freedesktop.org/show_bug.cgi?id=59118
    //
    // Malayalam test case:
    // U+0D38,U+0D4D,U+0D31,U+0D4D,U+0D31,U+0D4D
    // With lohit-ttf-20121122/Lohit-Malayalam.ttf
    if (plan.isOldSpec) {
      let disallowDoubleHalants = plan.unicodeScript !== 'Malayalam';
      for (let i = base + 1; i < end; i++) {
        if (glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H) {
          let j;
          for (j = end - 1; j > i; j--) {
            if (isConsonant(glyphs[j]) || (disallowDoubleHalants && glyphs[j].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H)) {
              break;
            }
          }

          if (glyphs[j].shaperInfo.category !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H && j > i) {
            // Move Halant to after last consonant.
            let t = glyphs[i];
            glyphs.splice(i, 0, ...glyphs.splice(i + 1, j - i));
            glyphs[j] = t;
          }

          break;
        }
      }
    }

    // Attach misc marks to previous char to move with them.
    let lastPos = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Start;
    for (let i = start; i < end; i++) {
      let info = glyphs[i].shaperInfo;
      if (info.category & (_indic_data__WEBPACK_IMPORTED_MODULE_8__.JOINER_FLAGS | _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.N | _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.RS | _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.CM | _indic_data__WEBPACK_IMPORTED_MODULE_8__.HALANT_OR_COENG_FLAGS & info.category)) {
        info.position = lastPos;
        if (info.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H && info.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M) {
          // Uniscribe doesn't move the Halant with Left Matra.
          // TEST: U+092B,U+093F,U+094DE
          // We follow.  This is important for the Sinhala
          // U+0DDA split matra since it decomposes to U+0DD9,U+0DCA
          // where U+0DD9 is a left matra and U+0DCA is the virama.
          // We don't want to move the virama with the left matra.
          // TEST: U+0D9A,U+0DDA
          for (let j = i; j > start; j--) {
            if (glyphs[j - 1].shaperInfo.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M) {
              info.position = glyphs[j - 1].shaperInfo.position;
              break;
            }
          }
        }
      } else if (info.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.SMVD) {
        lastPos = info.position;
      }
    }

    // For post-base consonants let them own anything before them
    // since the last consonant or matra.
    let last = base;
    for (let i = base + 1; i < end; i++) {
      if (isConsonant(glyphs[i])) {
        for (let j = last + 1; j < i; j++) {
          if (glyphs[j].shaperInfo.position < _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.SMVD) {
            glyphs[j].shaperInfo.position = glyphs[i].shaperInfo.position;
          }
        }
        last = i;
      } else if (glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M) {
        last = i;
      }
    }

    let arr = glyphs.slice(start, end);
    arr.sort((a, b) => a.shaperInfo.position - b.shaperInfo.position);
    glyphs.splice(start, arr.length, ...arr);

    // Find base again
    for (let i = start; i < end; i++) {
      if (glyphs[i].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C) {
        base = i;
        break;
      }
    }

    // Setup features now

    // Reph
    for (let i = start; i < end && glyphs[i].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Ra_To_Become_Reph; i++) {
      glyphs[i].features.rphf = true;
    }

    // Pre-base
    let blwf = !plan.isOldSpec && indicConfig.blwfMode === 'Pre_And_Post';
    for (let i = start; i < base; i++) {
      glyphs[i].features.half = true;
      if (blwf) {
        glyphs[i].features.blwf = true;
      }
    }

    // Post-base
    for (let i = base + 1; i < end; i++) {
      glyphs[i].features.abvf = true;
      glyphs[i].features.pstf = true;
      glyphs[i].features.blwf = true;
    }

    if (plan.isOldSpec && plan.unicodeScript === 'Devanagari') {
      // Old-spec eye-lash Ra needs special handling.  From the
      // spec:
      //
      // "The feature 'below-base form' is applied to consonants
      // having below-base forms and following the base consonant.
      // The exception is vattu, which may appear below half forms
      // as well as below the base glyph. The feature 'below-base
      // form' will be applied to all such occurrences of Ra as well."
      //
      // Test case: U+0924,U+094D,U+0930,U+094d,U+0915
      // with Sanskrit 2003 font.
      //
      // However, note that Ra,Halant,ZWJ is the correct way to
      // request eyelash form of Ra, so we wouldbn't inhibit it
      // in that sequence.
      //
      // Test case: U+0924,U+094D,U+0930,U+094d,U+200D,U+0915
      for (let i = start; i + 1 < base; i++) {
        if (glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.Ra &&
          glyphs[i + 1].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.H &&
          (i + 1 === base || glyphs[i + 2].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.ZWJ)
        ) {
          glyphs[i].features.blwf = true;
          glyphs[i + 1].features.blwf = true;
        }
      }
    }

    let prefLen = 2;
    if (features.pref && base + prefLen < end) {
      // Find a Halant,Ra sequence and mark it for pre-base reordering processing.
      for (let i = base + 1; i + prefLen - 1 < end; i++) {
        let g = [glyphs[i].copy(), glyphs[i + 1].copy()];
        if (wouldSubstitute(g, 'pref')) {
          for (let j = 0; j < prefLen; j++) {
            glyphs[i++].features.pref = true;
          }

          // Mark the subsequent stuff with 'cfar'.  Used in Khmer.
          // Read the feature spec.
          // This allows distinguishing the following cases with MS Khmer fonts:
          // U+1784,U+17D2,U+179A,U+17D2,U+1782
          // U+1784,U+17D2,U+1782,U+17D2,U+179A
          if (features.cfar) {
            for (; i < end; i++) {
              glyphs[i].features.cfar = true;
            }
          }

          break;
        }
      }
    }

    // Apply ZWJ/ZWNJ effects
    for (let i = start + 1; i < end; i++) {
      if (isJoiner(glyphs[i])) {
        let nonJoiner = glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.ZWNJ;
        let j = i;

        do {
          j--;

          // ZWJ/ZWNJ should disable CJCT.  They do that by simply
          // being there, since we don't skip them for the CJCT
          // feature (ie. F_MANUAL_ZWJ)

          // A ZWNJ disables HALF.
          if (nonJoiner) {
            delete glyphs[j].features.half;
          }
        } while (j > start && !isConsonant(glyphs[j]));
      }
    }
  }
}

function finalReordering(font, glyphs, plan) {
  let indicConfig = plan.indicConfig;
  let features = font._layoutEngine.engine.GSUBProcessor.features;

  for (let start = 0, end = nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = nextSyllable(glyphs, start)) {
    // 4. Final reordering:
    //
    // After the localized forms and basic shaping forms GSUB features have been
    // applied (see below), the shaping engine performs some final glyph
    // reordering before applying all the remaining font features to the entire
    // cluster.

    let tryPref = !!features.pref;

    // Find base again
    let base = start;
    for (; base < end; base++) {
      if (glyphs[base].shaperInfo.position >= _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C) {
        if (tryPref && base + 1 < end) {
          for (let i = base + 1; i < end; i++) {
            if (glyphs[i].features.pref) {
              if (!(glyphs[i].substituted && glyphs[i].isLigated && !glyphs[i].isMultiplied)) {
                // Ok, this was a 'pref' candidate but didn't form any.
                // Base is around here...
                base = i;
                while (base < end && isHalantOrCoeng(glyphs[base])) {
                  base++;
                }
                glyphs[base].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.BASE_C;
                tryPref = false;
              }
              break;
            }
          }
        }

        // For Malayalam, skip over unformed below- (but NOT post-) forms.
        if (plan.unicodeScript === 'Malayalam') {
          for (let i = base + 1; i < end; i++) {
            while (i < end && isJoiner(glyphs[i])) {
              i++;
            }

            if (i === end || !isHalantOrCoeng(glyphs[i])) {
              break;
            }

            i++; // Skip halant.
            while (i < end && isJoiner(glyphs[i])) {
              i++;
            }

            if (i < end && isConsonant(glyphs[i]) && glyphs[i].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Below_C) {
              base = i;
              glyphs[base].shaperInfo.position = _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C;
            }
          }
        }

        if (start < base && glyphs[base].shaperInfo.position > _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Base_C) {
          base--;
        }
        break;
      }
    }

    if (base === end && start < base && glyphs[base - 1].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.ZWJ) {
      base--;
    }

    if (base < end) {
      while (start < base && glyphs[base].shaperInfo.category & (_indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.N | _indic_data__WEBPACK_IMPORTED_MODULE_8__.HALANT_OR_COENG_FLAGS)) {
        base--;
      }
    }

    // o Reorder matras:
    //
    // If a pre-base matra character had been reordered before applying basic
    // features, the glyph can be moved closer to the main consonant based on
    // whether half-forms had been formed. Actual position for the matra is
    // defined as “after last standalone halant glyph, after initial matra
    // position and before the main consonant”. If ZWJ or ZWNJ follow this
    // halant, position is moved after it.
    //

    if (start + 1 < end && start < base) { // Otherwise there can't be any pre-base matra characters.
      // If we lost track of base, alas, position before last thingy.
      let newPos = base === end ? base - 2 : base - 1;

      // Malayalam / Tamil do not have "half" forms or explicit virama forms.
      // The glyphs formed by 'half' are Chillus or ligated explicit viramas.
      // We want to position matra after them.
      if (plan.unicodeScript !== 'Malayalam' && plan.unicodeScript !== 'Tamil') {
        while (newPos > start && !(glyphs[newPos].shaperInfo.category & (_indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M | _indic_data__WEBPACK_IMPORTED_MODULE_8__.HALANT_OR_COENG_FLAGS))) {
          newPos--;
        }

        // If we found no Halant we are done.
        // Otherwise only proceed if the Halant does
        // not belong to the Matra itself!
        if (isHalantOrCoeng(glyphs[newPos]) && glyphs[newPos].shaperInfo.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M) {
          // If ZWJ or ZWNJ follow this halant, position is moved after it.
          if (newPos + 1 < end && isJoiner(glyphs[newPos + 1])) {
            newPos++;
          }
        } else {
          newPos = start; // No move.
        }
      }

      if (start < newPos && glyphs[newPos].shaperInfo.position !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M) {
        // Now go see if there's actually any matras...
        for (let i = newPos; i > start; i--) {
          if (glyphs[i - 1].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M) {
            let oldPos = i - 1;
            if (oldPos < base && base <= newPos) { // Shouldn't actually happen.
              base--;
            }

            let tmp = glyphs[oldPos];
            glyphs.splice(oldPos, 0, ...glyphs.splice(oldPos + 1, newPos - oldPos));
            glyphs[newPos] = tmp;

            newPos--;
          }
        }
      }
    }

    // o Reorder reph:
    //
    // Reph’s original position is always at the beginning of the syllable,
    // (i.e. it is not reordered at the character reordering stage). However,
    // it will be reordered according to the basic-forms shaping results.
    // Possible positions for reph, depending on the script, are; after main,
    // before post-base consonant forms, and after post-base consonant forms.

    // Two cases:
    //
    // - If repha is encoded as a sequence of characters (Ra,H or Ra,H,ZWJ), then
    //   we should only move it if the sequence ligated to the repha form.
    //
    // - If repha is encoded separately and in the logical position, we should only
    //   move it if it did NOT ligate.  If it ligated, it's probably the font trying
    //   to make it work without the reordering.
    if (start + 1 < end &&
      glyphs[start].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Ra_To_Become_Reph &&
      (glyphs[start].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.Repha) !== (glyphs[start].isLigated && !glyphs[start].isMultiplied)
    ) {
      let newRephPos;
      let rephPos = indicConfig.rephPos;
      let found = false;

      // 1. If reph should be positioned after post-base consonant forms,
      //    proceed to step 5.
      if (rephPos !== _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.After_Post) {
        //  2. If the reph repositioning class is not after post-base: target
        //     position is after the first explicit halant glyph between the
        //     first post-reph consonant and last main consonant. If ZWJ or ZWNJ
        //     are following this halant, position is moved after it. If such
        //     position is found, this is the target position. Otherwise,
        //     proceed to the next step.
        //
        //     Note: in old-implementation fonts, where classifications were
        //     fixed in shaping engine, there was no case where reph position
        //     will be found on this step.
        newRephPos = start + 1;
        while (newRephPos < base && !isHalantOrCoeng(glyphs[newRephPos])) {
          newRephPos++;
        }

        if (newRephPos < base && isHalantOrCoeng(glyphs[newRephPos])) {
          // ->If ZWJ or ZWNJ are following this halant, position is moved after it.
          if (newRephPos + 1 < base && isJoiner(glyphs[newRephPos + 1])) {
            newRephPos++;
          }

          found = true;
        }

        // 3. If reph should be repositioned after the main consonant: find the
        //    first consonant not ligated with main, or find the first
        //    consonant that is not a potential pre-base reordering Ra.
        if (!found && rephPos === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.After_Main) {
          newRephPos = base;
          while (newRephPos + 1 < end && glyphs[newRephPos + 1].shaperInfo.position <= _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.After_Main) {
            newRephPos++;
          }

          found = newRephPos < end;
        }

        // 4. If reph should be positioned before post-base consonant, find
        //    first post-base classified consonant not ligated with main. If no
        //    consonant is found, the target position should be before the
        //    first matra, syllable modifier sign or vedic sign.
        //
        // This is our take on what step 4 is trying to say (and failing, BADLY).
        if (!found && rephPos === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.After_Sub) {
          newRephPos = base;
          while (newRephPos + 1 < end && !(glyphs[newRephPos + 1].shaperInfo.position & (_indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Post_C | _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.After_Post | _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.SMVD))) {
            newRephPos++;
          }

          found = newRephPos < end;
        }
      }

      //  5. If no consonant is found in steps 3 or 4, move reph to a position
      //     immediately before the first post-base matra, syllable modifier
      //     sign or vedic sign that has a reordering class after the intended
      //     reph position. For example, if the reordering position for reph
      //     is post-main, it will skip above-base matras that also have a
      //     post-main position.
      if (!found) {
        // Copied from step 2.
        newRephPos = start + 1;
        while (newRephPos < base && !isHalantOrCoeng(glyphs[newRephPos])) {
          newRephPos++;
        }

        if (newRephPos < base && isHalantOrCoeng(glyphs[newRephPos])) {
          // ->If ZWJ or ZWNJ are following this halant, position is moved after it.
          if (newRephPos + 1 < base && isJoiner(glyphs[newRephPos + 1])) {
            newRephPos++;
          }

          found = true;
        }
      }

      // 6. Otherwise, reorder reph to the end of the syllable.
      if (!found) {
        newRephPos = end - 1;
        while (newRephPos > start && glyphs[newRephPos].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.SMVD) {
          newRephPos--;
        }

        // If the Reph is to be ending up after a Matra,Halant sequence,
        // position it before that Halant so it can interact with the Matra.
        // However, if it's a plain Consonant,Halant we shouldn't do that.
        // Uniscribe doesn't do this.
        // TEST: U+0930,U+094D,U+0915,U+094B,U+094D
        if (isHalantOrCoeng(glyphs[newRephPos])) {
          for (let i = base + 1; i < newRephPos; i++) {
            if (glyphs[i].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M) {
              newRephPos--;
            }
          }
        }
      }

      let reph = glyphs[start];
      glyphs.splice(start, 0, ...glyphs.splice(start + 1, newRephPos - start));
      glyphs[newRephPos] = reph;

      if (start < base && base <= newRephPos) {
        base--;
      }
    }

    // o Reorder pre-base reordering consonants:
    //
    // If a pre-base reordering consonant is found, reorder it according to
    // the following rules:
    if (tryPref && base + 1 < end) {
      for (let i = base + 1; i < end; i++) {
        if (glyphs[i].features.pref) {
           // 1. Only reorder a glyph produced by substitution during application
           //    of the <pref> feature. (Note that a font may shape a Ra consonant with
           //    the feature generally but block it in certain contexts.)

          // Note: We just check that something got substituted.  We don't check that
          // the <pref> feature actually did it...
          //
          // Reorder pref only if it ligated.
          if (glyphs[i].isLigated && !glyphs[i].isMultiplied) {
            // 2. Try to find a target position the same way as for pre-base matra.
            //    If it is found, reorder pre-base consonant glyph.
            //
            // 3. If position is not found, reorder immediately before main
            //    consonant.
            let newPos = base;

            // Malayalam / Tamil do not have "half" forms or explicit virama forms.
            // The glyphs formed by 'half' are Chillus or ligated explicit viramas.
            // We want to position matra after them.
            if (plan.unicodeScript !== 'Malayalam' && plan.unicodeScript !== 'Tamil') {
              while (newPos > start && !(glyphs[newPos - 1].shaperInfo.category & (_indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M | _indic_data__WEBPACK_IMPORTED_MODULE_8__.HALANT_OR_COENG_FLAGS))) {
                newPos--;
              }

              // In Khmer coeng model, a H,Ra can go *after* matras.  If it goes after a
              // split matra, it should be reordered to *before* the left part of such matra.
              if (newPos > start && glyphs[newPos - 1].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M) {
                let oldPos = i;
                for (let j = base + 1; j < oldPos; j++) {
                  if (glyphs[j].shaperInfo.category === _indic_data__WEBPACK_IMPORTED_MODULE_8__.CATEGORIES.M) {
                    newPos--;
                    break;
                  }
                }
              }
            }

            if (newPos > start && isHalantOrCoeng(glyphs[newPos - 1])) {
              // -> If ZWJ or ZWNJ follow this halant, position is moved after it.
              if (newPos < end && isJoiner(glyphs[newPos])) {
                newPos++;
              }
            }

            let oldPos = i;
            let tmp = glyphs[oldPos];
            glyphs.splice(newPos + 1, 0, ...glyphs.splice(newPos, oldPos - newPos));
            glyphs[newPos] = tmp;

            if (newPos <= base && base < oldPos) {
              base++;
            }
          }

          break;
        }
      }
    }

    // Apply 'init' to the Left Matra if it's a word start.
    if (glyphs[start].shaperInfo.position === _indic_data__WEBPACK_IMPORTED_MODULE_8__.POSITIONS.Pre_M && (!start || !/Cf|Mn/.test((0,unicode_properties__WEBPACK_IMPORTED_MODULE_3__.getCategory)(glyphs[start - 1].codePoints[0])))) {
      glyphs[start].features.init = true;
    }
  }
}

function nextSyllable(glyphs, start) {
  if (start >= glyphs.length) return start;
  let syllable = glyphs[start].shaperInfo.syllable;
  while (++start < glyphs.length && glyphs[start].shaperInfo.syllable === syllable);
  return start;
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/UniversalShaper.js":
/*!*********************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/UniversalShaper.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UniversalShaper)
/* harmony export */ });
/* harmony import */ var _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultShaper */ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js");
/* harmony import */ var dfa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dfa */ "./node_modules/dfa/index.js");
/* harmony import */ var dfa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dfa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unicode-trie */ "./node_modules/unicode-trie/index.js");
/* harmony import */ var unicode_trie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unicode_trie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlyphInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GlyphInfo */ "./src/modules/fontkit/src/opentype/GlyphInfo.js");
/* harmony import */ var _use_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use.json */ "./src/modules/fontkit/src/opentype/shapers/use.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/modules/fontkit/src/utils.js");
/* harmony import */ var _use_trie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use.trie */ "./src/modules/fontkit/src/opentype/shapers/use.trie");






//AUIT


const {categories, decompositions} = _use_json__WEBPACK_IMPORTED_MODULE_4__;
//const trie = new UnicodeTrie(decodeBase64(require('fs').readFileSync(__dirname + '/use.trie', 'base64')));
const trie = new (unicode_trie__WEBPACK_IMPORTED_MODULE_2___default())(_use_trie__WEBPACK_IMPORTED_MODULE_6__["default"]); //decodeBase64(trieRawData));
const stateMachine = new (dfa__WEBPACK_IMPORTED_MODULE_1___default())(_use_json__WEBPACK_IMPORTED_MODULE_4__);

/**
 * This shaper is an implementation of the Universal Shaping Engine, which
 * uses Unicode data to shape a number of scripts without a dedicated shaping engine.
 * See https://www.microsoft.com/typography/OpenTypeDev/USE/intro.htm.
 */
class UniversalShaper extends _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static zeroMarkWidths = 'BEFORE_GPOS';
  static planFeatures(plan) {
    plan.addStage(setupSyllables);

    // Default glyph pre-processing group
    plan.addStage(['locl', 'ccmp', 'nukt', 'akhn']);

    // Reordering group
    plan.addStage(clearSubstitutionFlags);
    plan.addStage(['rphf'], false);
    plan.addStage(recordRphf);
    plan.addStage(clearSubstitutionFlags);
    plan.addStage(['pref']);
    plan.addStage(recordPref);

    // Orthographic unit shaping group
    plan.addStage(['rkrf', 'abvf', 'blwf', 'half', 'pstf', 'vatu', 'cjct']);
    plan.addStage(reorder);

    // Topographical features
    // Scripts that need this are handled by the Arabic shaper, not implemented here for now.
    // plan.addStage(['isol', 'init', 'medi', 'fina', 'med2', 'fin2', 'fin3'], false);

    // Standard topographic presentation and positional feature application
    plan.addStage(['abvs', 'blws', 'pres', 'psts', 'dist', 'abvm', 'blwm']);
  }

  static assignFeatures(plan, glyphs) {
    // Decompose split vowels
    // TODO: do this in a more general unicode normalizer
    for (let i = glyphs.length - 1; i >= 0; i--) {
      let codepoint = glyphs[i].codePoints[0];
      if (decompositions[codepoint]) {
        let decomposed = decompositions[codepoint].map(c => {
          let g = plan.font.glyphForCodePoint(c);
          return new _GlyphInfo__WEBPACK_IMPORTED_MODULE_3__["default"](plan.font, g.id, [c], glyphs[i].features);
        });

        glyphs.splice(i, 1, ...decomposed);
      }
    }
  }
}

function useCategory(glyph) {
  return trie.get(glyph.codePoints[0]);
}

class USEInfo {
  constructor(category, syllableType, syllable) {
    this.category = category;
    this.syllableType = syllableType;
    this.syllable = syllable;
  }
}

function setupSyllables(font, glyphs) {
  let syllable = 0;
  for (let [start, end, tags] of stateMachine.match(glyphs.map(useCategory))) {
    ++syllable;

    // Create shaper info
    for (let i = start; i <= end; i++) {
      glyphs[i].shaperInfo = new USEInfo(categories[useCategory(glyphs[i])], tags[0], syllable);
    }

    // Assign rphf feature
    let limit = glyphs[start].shaperInfo.category === 'R' ? 1 : Math.min(3, end - start);
    for (let i = start; i < start + limit; i++) {
      glyphs[i].features.rphf = true;
    }
  }
}

function clearSubstitutionFlags(font, glyphs) {
  for (let glyph of glyphs) {
    glyph.substituted = false;
  }
}

function recordRphf(font, glyphs) {
  for (let glyph of glyphs) {
    if (glyph.substituted && glyph.features.rphf) {
      // Mark a substituted repha.
      glyph.shaperInfo.category = 'R';
    }
  }
}

function recordPref(font, glyphs) {
  for (let glyph of glyphs) {
    if (glyph.substituted) {
      // Mark a substituted pref as VPre, as they behave the same way.
      glyph.shaperInfo.category = 'VPre';
    }
  }
}

function reorder(font, glyphs) {
  let dottedCircle = font.glyphForCodePoint(0x25cc).id;

  for (let start = 0, end = nextSyllable(glyphs, 0); start < glyphs.length; start = end, end = nextSyllable(glyphs, start)) {
    let i, j;
    let info = glyphs[start].shaperInfo;
    let type = info.syllableType;

    // Only a few syllable types need reordering.
    if (type !== 'virama_terminated_cluster' && type !== 'standard_cluster' && type !== 'broken_cluster') {
      continue;
    }

    // Insert a dotted circle glyph in broken clusters.
    if (type === 'broken_cluster' && dottedCircle) {
      let g = new _GlyphInfo__WEBPACK_IMPORTED_MODULE_3__["default"](font, dottedCircle, [0x25cc]);
      g.shaperInfo = info;

      // Insert after possible Repha.
      for (i = start; i < end && glyphs[i].shaperInfo.category === 'R'; i++);
      glyphs.splice(++i, 0, g);
      end++;
    }

    // Move things forward.
    if (info.category === 'R' && end - start > 1) {
      // Got a repha. Reorder it to after first base, before first halant.
      for (i = start + 1; i < end; i++) {
        info = glyphs[i].shaperInfo;
        if (isBase(info) || isHalant(glyphs[i])) {
          // If we hit a halant, move before it; otherwise it's a base: move to it's
          // place, and shift things in between backward.
          if (isHalant(glyphs[i])) {
            i--;
          }

          glyphs.splice(start, 0, ...glyphs.splice(start + 1, i - start), glyphs[i]);
          break;
        }
      }
    }

    // Move things back.
    for (i = start, j = end; i < end; i++) {
      info = glyphs[i].shaperInfo;
      if (isBase(info) || isHalant(glyphs[i])) {
        // If we hit a halant, move after it; otherwise it's a base: move to it's
        // place, and shift things in between backward.
        j = isHalant(glyphs[i]) ? i + 1 : i;
      } else if ((info.category === 'VPre' || info.category === 'VMPre') && j < i) {
        glyphs.splice(j, 1, glyphs[i], ...glyphs.splice(j, i - j));
      }
    }
  }
}

function nextSyllable(glyphs, start) {
  if (start >= glyphs.length) return start;
  let syllable = glyphs[start].shaperInfo.syllable;
  while (++start < glyphs.length && glyphs[start].shaperInfo.syllable === syllable);
  return start;
}

function isHalant(glyph) {
  return glyph.shaperInfo.category === 'H' && !glyph.isLigated;
}

function isBase(info) {
  return info.category === 'B' || info.category === 'GB';
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/index.js":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   choose: () => (/* binding */ choose)
/* harmony export */ });
/* harmony import */ var _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultShaper */ "./src/modules/fontkit/src/opentype/shapers/DefaultShaper.js");
/* harmony import */ var _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArabicShaper */ "./src/modules/fontkit/src/opentype/shapers/ArabicShaper.js");
/* harmony import */ var _HangulShaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HangulShaper */ "./src/modules/fontkit/src/opentype/shapers/HangulShaper.js");
/* harmony import */ var _IndicShaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndicShaper */ "./src/modules/fontkit/src/opentype/shapers/IndicShaper.js");
/* harmony import */ var _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UniversalShaper */ "./src/modules/fontkit/src/opentype/shapers/UniversalShaper.js");






const SHAPERS = {
  arab: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Arabic
  mong: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Mongolian
  syrc: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Syriac
  'nko ': _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],  // N'Ko
  phag: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Phags Pa
  mand: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Mandaic
  mani: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Manichaean
  phlp: _ArabicShaper__WEBPACK_IMPORTED_MODULE_1__["default"],    // Psalter Pahlavi

  hang: _HangulShaper__WEBPACK_IMPORTED_MODULE_2__["default"],    // Hangul

  bng2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Bengali
  beng: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Bengali
  dev2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Devanagari
  deva: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Devanagari
  gjr2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Gujarati
  gujr: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Gujarati
  guru: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Gurmukhi
  gur2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Gurmukhi
  knda: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Kannada
  knd2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Kannada
  mlm2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Malayalam
  mlym: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Malayalam
  ory2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Oriya
  orya: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Oriya
  taml: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Tamil
  tml2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Tamil
  telu: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Telugu
  tel2: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Telugu
  khmr: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"],     // Khmer

  bali: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Balinese
  batk: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Batak
  brah: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Brahmi
  bugi: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Buginese
  buhd: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Buhid
  cakm: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Chakma
  cham: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Cham
  dupl: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Duployan
  egyp: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Egyptian Hieroglyphs
  gran: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Grantha
  hano: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Hanunoo
  java: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Javanese
  kthi: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Kaithi
  kali: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Kayah Li
  khar: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Kharoshthi
  khoj: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Khojki
  sind: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Khudawadi
  lepc: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Lepcha
  limb: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Limbu
  mahj: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Mahajani
  // mand: UniversalShaper, // Mandaic
  // mani: UniversalShaper, // Manichaean
  mtei: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Meitei Mayek
  modi: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Modi
  // mong: UniversalShaper, // Mongolian
  // 'nko ': UniversalShaper, // N’Ko
  hmng: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Pahawh Hmong
  // phag: UniversalShaper, // Phags-pa
  // phlp: UniversalShaper, // Psalter Pahlavi
  rjng: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Rejang
  saur: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Saurashtra
  shrd: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Sharada
  sidd: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Siddham
  sinh: _IndicShaper__WEBPACK_IMPORTED_MODULE_3__["default"], // Sinhala
  sund: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Sundanese
  sylo: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Syloti Nagri
  tglg: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tagalog
  tagb: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tagbanwa
  tale: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tai Le
  lana: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tai Tham
  tavt: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tai Viet
  takr: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Takri
  tibt: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tibetan
  tfng: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tifinagh
  tirh: _UniversalShaper__WEBPACK_IMPORTED_MODULE_4__["default"], // Tirhuta

  latn: _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"],   // Latin
  DFLT: _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"]    // Default
};

function choose(script) {
  if (!Array.isArray(script)) {
    script = [script];
  }

  for (let s of script) {
    let shaper = SHAPERS[s];
    if (shaper) {
      return shaper;
    }
  }

  return _DefaultShaper__WEBPACK_IMPORTED_MODULE_0__["default"];
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/indic-data.js":
/*!****************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/indic-data.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORIES: () => (/* binding */ CATEGORIES),
/* harmony export */   CONSONANT_FLAGS: () => (/* binding */ CONSONANT_FLAGS),
/* harmony export */   HALANT_OR_COENG_FLAGS: () => (/* binding */ HALANT_OR_COENG_FLAGS),
/* harmony export */   INDIC_CONFIGS: () => (/* binding */ INDIC_CONFIGS),
/* harmony export */   INDIC_DECOMPOSITIONS: () => (/* binding */ INDIC_DECOMPOSITIONS),
/* harmony export */   JOINER_FLAGS: () => (/* binding */ JOINER_FLAGS),
/* harmony export */   POSITIONS: () => (/* binding */ POSITIONS)
/* harmony export */ });
// Cateories used in the OpenType spec:
// https://www.microsoft.com/typography/otfntdev/devanot/shaping.aspx
const CATEGORIES = {
  X: 1 << 0,
  C: 1 << 1,
  V: 1 << 2,
  N: 1 << 3,
  H: 1 << 4,
  ZWNJ: 1 << 5,
  ZWJ: 1 << 6,
  M: 1 << 7,
  SM: 1 << 8,
  VD: 1 << 9,
  A: 1 << 10,
  Placeholder: 1 << 11,
  Dotted_Circle: 1 << 12,
  RS: 1 << 13,    // Register Shifter, used in Khmer OT spec.
  Coeng: 1 << 14, // Khmer-style Virama.
  Repha: 1 << 15, // Atomically-encoded logical or visual repha.
  Ra: 1 << 16,
  CM: 1 << 17,    // Consonant-Medial.
  Symbol: 1 << 18 // Avagraha, etc that take marks (SM,A,VD).
};

// Visual positions in a syllable from left to right.
const POSITIONS = {
  Start: 1 << 0,

  Ra_To_Become_Reph: 1 << 1,
  Pre_M: 1 << 2,
  Pre_C: 1 << 3,

  Base_C: 1 << 4,
  After_Main: 1 << 5,

  Above_C: 1 << 6,

  Before_Sub: 1 << 7,
  Below_C: 1 << 8,
  After_Sub: 1 << 9,

  Before_Post: 1 << 10,
  Post_C: 1 << 11,
  After_Post: 1 << 12,

  Final_C: 1 << 13,
  SMVD: 1 << 14,

  End: 1 << 15
};

const CONSONANT_FLAGS = CATEGORIES.C | CATEGORIES.Ra | CATEGORIES.CM | CATEGORIES.V | CATEGORIES.Placeholder | CATEGORIES.Dotted_Circle;
const JOINER_FLAGS = CATEGORIES.ZWJ | CATEGORIES.ZWNJ;
const HALANT_OR_COENG_FLAGS = CATEGORIES.H | CATEGORIES.Coeng;

const INDIC_CONFIGS = {
  Default: {
    hasOldSpec: false,
    virama: 0,
    basePos: 'Last',
    rephPos: POSITIONS.Before_Post,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Devanagari: {
    hasOldSpec: true,
    virama: 0x094D,
    basePos: 'Last',
    rephPos: POSITIONS.Before_Post,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Bengali: {
    hasOldSpec: true,
    virama: 0x09CD,
    basePos: 'Last',
    rephPos: POSITIONS.After_Sub,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Gurmukhi: {
    hasOldSpec: true,
    virama: 0x0A4D,
    basePos: 'Last',
    rephPos: POSITIONS.Before_Sub,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Gujarati: {
    hasOldSpec: true,
    virama: 0x0ACD,
    basePos: 'Last',
    rephPos: POSITIONS.Before_Post,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Oriya: {
    hasOldSpec: true,
    virama: 0x0B4D,
    basePos: 'Last',
    rephPos: POSITIONS.After_Main,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Tamil: {
    hasOldSpec: true,
    virama: 0x0BCD,
    basePos: 'Last',
    rephPos: POSITIONS.After_Post,
    rephMode: 'Implicit',
    blwfMode: 'Pre_And_Post'
  },

  Telugu: {
    hasOldSpec: true,
    virama: 0x0C4D,
    basePos: 'Last',
    rephPos: POSITIONS.After_Post,
    rephMode: 'Explicit',
    blwfMode: 'Post_Only'
  },

  Kannada: {
    hasOldSpec: true,
    virama: 0x0CCD,
    basePos: 'Last',
    rephPos: POSITIONS.After_Post,
    rephMode: 'Implicit',
    blwfMode: 'Post_Only'
  },

  Malayalam: {
    hasOldSpec: true,
    virama: 0x0D4D,
    basePos: 'Last',
    rephPos: POSITIONS.After_Main,
    rephMode: 'Log_Repha',
    blwfMode: 'Pre_And_Post'
  },

  // Handled by UniversalShaper
  // Sinhala: {
  //   hasOldSpec: false,
  //   virama: 0x0DCA,
  //   basePos: 'Last_Sinhala',
  //   rephPos: POSITIONS.After_Main,
  //   rephMode: 'Explicit',
  //   blwfMode: 'Pre_And_Post'
  // },

  Khmer: {
    hasOldSpec: false,
    virama: 0x17D2,
    basePos: 'First',
    rephPos: POSITIONS.Ra_To_Become_Reph,
    rephMode: 'Vis_Repha',
    blwfMode: 'Pre_And_Post'
  }
};

// Additional decompositions that aren't in Unicode
const INDIC_DECOMPOSITIONS = {
  // Khmer
  0x17BE: [0x17C1, 0x17BE],
  0x17BF: [0x17C1, 0x17BF],
  0x17C0: [0x17C1, 0x17C0],
  0x17C4: [0x17C1, 0x17C4],
  0x17C5: [0x17C1, 0x17C5]
};


/***/ }),

/***/ "./src/modules/fontkit/src/subset/CFFSubset.js":
/*!*****************************************************!*\
  !*** ./src/modules/fontkit/src/subset/CFFSubset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CFFSubset)
/* harmony export */ });
/* harmony import */ var _Subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subset */ "./src/modules/fontkit/src/subset/Subset.js");
/* harmony import */ var _cff_CFFTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cff/CFFTop */ "./src/modules/fontkit/src/cff/CFFTop.js");
/* harmony import */ var _cff_CFFPrivateDict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cff/CFFPrivateDict */ "./src/modules/fontkit/src/cff/CFFPrivateDict.js");
/* harmony import */ var _cff_CFFStandardStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cff/CFFStandardStrings */ "./src/modules/fontkit/src/cff/CFFStandardStrings.js");





class CFFSubset extends _Subset__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(font) {
    super(font);

    this.cff = this.font['CFF '];
    if (!this.cff) {
      throw new Error('Not a CFF Font');
    }
  }

  subsetCharstrings() {
    this.charstrings = [];
    let gsubrs = {};

    for (let gid of this.glyphs) {
      this.charstrings.push(this.cff.getCharString(gid));

      let glyph = this.font.getGlyph(gid);
      let path = glyph.path; // this causes the glyph to be parsed

      for (let subr in glyph._usedGsubrs) {
        gsubrs[subr] = true;
      }
    }

    this.gsubrs = this.subsetSubrs(this.cff.globalSubrIndex, gsubrs);
  }

  subsetSubrs(subrs, used) {
    let res = [];
    for (let i = 0; i < subrs.length; i++) {
      let subr = subrs[i];
      if (used[i]) {
        this.cff.stream.pos = subr.offset;
        res.push(this.cff.stream.readBuffer(subr.length));
      } else {
        res.push(new Uint8Array([11])); // return
      }
    }

    return res;
  }

  subsetFontdict(topDict) {
    topDict.FDArray = [];
    topDict.FDSelect = {
      version: 0,
      fds: []
    };

    let used_fds = {};
    let used_subrs = [];
    let fd_select = {};
    for (let gid of this.glyphs) {
      let fd = this.cff.fdForGlyph(gid);
      if (fd == null) {
        continue;
      }

      if (!used_fds[fd]) {
        topDict.FDArray.push(Object.assign({}, this.cff.topDict.FDArray[fd]));
        used_subrs.push({});
        fd_select[fd] = topDict.FDArray.length - 1;
      }

      used_fds[fd] = true;
      topDict.FDSelect.fds.push(fd_select[fd]);

      let glyph = this.font.getGlyph(gid);
      let path = glyph.path; // this causes the glyph to be parsed
      for (let subr in glyph._usedSubrs) {
        used_subrs[fd_select[fd]][subr] = true;
      }
    }

    for (let i = 0; i < topDict.FDArray.length; i++) {
      let dict = topDict.FDArray[i];
      delete dict.FontName;
      if (dict.Private && dict.Private.Subrs) {
        dict.Private = Object.assign({}, dict.Private);
        dict.Private.Subrs = this.subsetSubrs(dict.Private.Subrs, used_subrs[i]);
      }
    }

    return;
  }

  createCIDFontdict(topDict) {
    let used_subrs = {};
    for (let gid of this.glyphs) {
      let glyph = this.font.getGlyph(gid);
      let path = glyph.path; // this causes the glyph to be parsed

      for (let subr in glyph._usedSubrs) {
        used_subrs[subr] = true;
      }
    }

    let privateDict = Object.assign({}, this.cff.topDict.Private);
    if (this.cff.topDict.Private && this.cff.topDict.Private.Subrs) {
      privateDict.Subrs = this.subsetSubrs(this.cff.topDict.Private.Subrs, used_subrs);
    }

    topDict.FDArray = [{ Private: privateDict }];
    return topDict.FDSelect = {
      version: 3,
      nRanges: 1,
      ranges: [{ first: 0, fd: 0 }],
      sentinel: this.charstrings.length
    };
  }

  addString(string) {
    if (!string) {
      return null;
    }

    if (!this.strings) {
      this.strings = [];
    }

    this.strings.push(string);
    return _cff_CFFStandardStrings__WEBPACK_IMPORTED_MODULE_3__["default"].length + this.strings.length - 1;
  }

  encode() {
    this.subsetCharstrings();

    let charset = {
      version: this.charstrings.length > 255 ? 2 : 1,
      ranges: [{ first: 1, nLeft: this.charstrings.length - 2 }]
    };

    let topDict = Object.assign({}, this.cff.topDict);
    topDict.Private = null;
    topDict.charset = charset;
    topDict.Encoding = null;
    topDict.CharStrings = this.charstrings;

    for (let key of ['version', 'Notice', 'Copyright', 'FullName', 'FamilyName', 'Weight', 'PostScript', 'BaseFontName', 'FontName']) {
      topDict[key] = this.addString(this.cff.string(topDict[key]));
    }

    topDict.ROS = [this.addString('Adobe'), this.addString('Identity'), 0];
    topDict.CIDCount = this.charstrings.length;

    if (this.cff.isCIDFont) {
      this.subsetFontdict(topDict);
    } else {
      this.createCIDFontdict(topDict);
    }

    let top = {
      version: 1,
      hdrSize: this.cff.hdrSize,
      offSize: 4,
      header: this.cff.header,
      nameIndex: [this.cff.postscriptName],
      topDictIndex: [topDict],
      stringIndex: this.strings,
      globalSubrIndex: this.gsubrs
    };

    return _cff_CFFTop__WEBPACK_IMPORTED_MODULE_1__["default"].toBuffer(top);
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/subset/Subset.js":
/*!**************************************************!*\
  !*** ./src/modules/fontkit/src/subset/Subset.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subset)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


const resolved = Promise.resolve();

class Subset {
  constructor(font) {
    this.font = font;
    this.glyphs = [];
    this.mapping = {};
    this.tables = []; // AUIT
    // always include the missing glyph
    this.includeGlyph(0);
  }
  includeTable(table) {
    if (typeof table === 'string' && table.length === 4) {
      this.tables.push(table);
    }
  }
  includeGlyph(glyph) {
    if (typeof glyph === 'object') {
      glyph = glyph.id;
    }

    if (this.mapping[glyph] == null) {
      this.glyphs.push(glyph);
      this.mapping[glyph] = this.glyphs.length - 1;
    }

    return this.mapping[glyph];
  }
}


/***/ }),

/***/ "./src/modules/fontkit/src/subset/TTFSubset.js":
/*!*****************************************************!*\
  !*** ./src/modules/fontkit/src/subset/TTFSubset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTFSubset)
/* harmony export */ });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subset */ "./src/modules/fontkit/src/subset/Subset.js");
/* harmony import */ var _tables_directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables/directory */ "./src/modules/fontkit/src/tables/directory.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables */ "./src/modules/fontkit/src/tables/index.js");
/* harmony import */ var _glyph_TTFGlyphEncoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../glyph/TTFGlyphEncoder */ "./src/modules/fontkit/src/glyph/TTFGlyphEncoder.js");






class TTFSubset extends _Subset__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(font) {
		super(font);
		this.glyphEncoder = new _glyph_TTFGlyphEncoder__WEBPACK_IMPORTED_MODULE_4__["default"]();
	}

	_addGlyph(gid) {
		let glyph = this.font.getGlyph(gid);
		let glyf = glyph._decode();

		// get the offset to the glyph from the loca table
		let curOffset = this.font.loca.offsets[gid];
		let nextOffset = this.font.loca.offsets[gid + 1];

		let stream = this.font._getTableStream('glyf');
		stream.pos += curOffset;

		let  buffer = stream.readBuffer(nextOffset - curOffset);
    let bufor = buffer;
		// if it is a compound glyph, include its components
		if (glyf && glyf.numberOfContours < 0) {
			buffer = new Uint8Array(buffer);
			let view = new DataView(buffer.buffer);
			for (let component of glyf.components) {
				gid = this.includeGlyph(component.glyphID);
				view.setUint16(component.pos, gid);
			}
		} else if (glyf && this.font._variationProcessor) {
			// If this is a TrueType variation glyph, re-encode the path
			buffer = this.glyphEncoder.encodeSimple2( glyf.points, glyph.path, glyf.instructions);
		}

		this.glyf.push(buffer);
		this.loca.offsets.push(this.offset);

		this.hmtx.metrics.push({
			advance: glyph.advanceWidth,
			bearing: glyph._getMetrics().leftBearing
		});

		this.offset += buffer.length;
		return this.glyf.length - 1;
	}

	encode() {
		// tables required by PDF spec:
		//   head, hhea, loca, maxp, cvt , prep, glyf, hmtx, fpgm
		//
		// additional tables required for standalone fonts:
		//   name, cmap, OS/2, post

		this.glyf = [];
		this.offset = 0;
		this.loca = {
			offsets: [],
			version: this.font.loca.version
		};

		this.hmtx = {
			metrics: [],
			bearings: []
		};

		// include all the glyphs
		// not using a for loop because we need to support adding more
		// glyphs to the array as we go, and CoffeeScript caches the length.
		let i = 0;
		while (i < this.glyphs.length) {
			this._addGlyph(this.glyphs[i++]);
		}

		let maxp = clone__WEBPACK_IMPORTED_MODULE_0___default()(this.font.maxp);
		maxp.numGlyphs = this.glyf.length;

		this.loca.offsets.push(this.offset);

		let head = clone__WEBPACK_IMPORTED_MODULE_0___default()(this.font.head);
		head.indexToLocFormat = this.loca.version;

		let hhea = clone__WEBPACK_IMPORTED_MODULE_0___default()(this.font.hhea);
		hhea.numberOfMetrics = this.hmtx.metrics.length;

		// map = []
		// for index in [0...256]
		//     if index < @numGlyphs
		//         map[index] = index
		//     else
		//         map[index] = 0
		//
		// cmapTable =
		//     version: 0
		//     length: 262
		//     language: 0
		//     codeMap: map
		//
		// cmap =
		//     version: 0
		//     numSubtables: 1
		//     tables: [
		//         platformID: 1
		//         encodingID: 0
		//         table: cmapTable
		//     ]

		// TODO: subset prep, cvt, fpgm?
		// AUIT
		/*     return Directory.toBuffer({
      tables: {
        head,
        hhea,
        loca: this.loca,
        maxp,
        'cvt ': this.font['cvt '],
        prep: this.font.prep,
        glyf: this.glyf,
        hmtx: this.hmtx,
        fpgm: this.font.fpgm

        // name: clone @font.name
        // 'OS/2': clone @font['OS/2']
        // post: clone @font.post
        // cmap: cmap
      }
    });
 */
		// The following is the minimum set of tables.
		let t = {
			head,
			hhea,
			loca: this.loca,
			maxp,
			'cvt ': this.font['cvt '],
			prep: this.font.prep,
			glyf: this.glyf,
			hmtx: this.hmtx,
			fpgm: this.font.fpgm
		};

		for (const i in this.tables) {
			const table = this.tables[i];
			t[table] = clone__WEBPACK_IMPORTED_MODULE_0___default()(this.font[table]);
		}

		return _tables_directory__WEBPACK_IMPORTED_MODULE_2__["default"].toBuffer({ tables: t });
	}
}


/***/ }),

/***/ "./src/modules/fontkit/src/tables/BASE.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/BASE.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/modules/fontkit/src/tables/variations.js");




let BaseCoord = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Design units only
    coordinate:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16 // X or Y value, in design units
  },

  2: { // Design units plus contour point
    coordinate:     restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // X or Y value, in design units
    referenceGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // GlyphID of control glyph
    baseCoordPoint: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16   // Index of contour point on the referenceGlyph
  },

  3: { // Design units plus Device table
    coordinate:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                         // X or Y value, in design units
    deviceTable:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device)  // Device table for X or Y value
  }
});

let BaseValues = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  defaultIndex:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Index of default baseline for this script-same index in the BaseTagList
  baseCoordCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  baseCoords:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseCoord), 'baseCoordCount')
});

let FeatMinMaxRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:        new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),  // 4-byte feature identification tag-must match FeatureTag in FeatureList
  minCoord:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseCoord, {type: 'parent'}), // May be NULL
  maxCoord:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseCoord, {type: 'parent'})  // May be NULL
});

let MinMax = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  minCoord:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseCoord),  // May be NULL
  maxCoord:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseCoord),  // May be NULL
  featMinMaxCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // May be 0
  featMinMaxRecords:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FeatMinMaxRecord, 'featMinMaxCount') // In alphabetical order
});

let BaseLangSysRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:    new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),  // 4-byte language system identification tag
  minMax: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MinMax, {type: 'parent'})
});

let BaseScript = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  baseValues:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseValues), // May be NULL
  defaultMinMax:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MinMax),     // May be NULL
  baseLangSysCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // May be 0
  baseLangSysRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(BaseLangSysRecord, 'baseLangSysCount') // in alphabetical order by BaseLangSysTag
});

let BaseScriptRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:      new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),  // 4-byte script identification tag
  script:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseScript, {type: 'parent'})
});

let BaseScriptList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(BaseScriptRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

// Array of 4-byte baseline identification tags-must be in alphabetical order
let BaseTagList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let Axis = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  baseTagList:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseTagList),  // May be NULL
  baseScriptList: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseScriptList)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, {
  header: {
    horizAxis:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Axis),   // May be NULL
    vertAxis:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Axis)    // May be NULL
  },

  0x00010000: {},
  0x00010001: {
    itemVariationStore: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _variations__WEBPACK_IMPORTED_MODULE_2__.ItemVariationStore)
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/COLR.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/COLR.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let LayerRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  gid: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,          // Glyph ID of layer glyph (must be in z-order from bottom to top).
  paletteIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16  // Index value to use in the appropriate palette. This value must
});                       // be less than numPaletteEntries in the CPAL table, except for
                          // the special case noted below. Each palette entry is 16 bits.
                          // A palette index of 0xFFFF is a special case indicating that
                          // the text foreground color should be used.

let BaseGlyphRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  gid: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,             // Glyph ID of reference glyph. This glyph is for reference only
                             // and is not rendered for color.
  firstLayerIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, // Index (from beginning of the Layer Records) to the layer record.
                             // There will be numLayers consecutive entries for this base glyph.
  numLayers: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  numBaseGlyphRecords: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  baseGlyphRecord: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(BaseGlyphRecord, 'numBaseGlyphRecords')),
  layerRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LayerRecord, 'numLayerRecords'), { lazy: true }),
  numLayerRecords: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/CPAL.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/CPAL.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let ColorRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  blue: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  green: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  red: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  alpha: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  header: {
    numPaletteEntries: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    numPalettes: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    numColorRecords: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    colorRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ColorRecord, 'numColorRecords')),
    colorRecordIndices: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numPalettes'),
  },
  0: {},
  1: {
    offsetPaletteTypeArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'numPalettes')),
    offsetPaletteLabelArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numPalettes')),
    offsetPaletteEntryLabelArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numPaletteEntries'))
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/DSIG.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/DSIG.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let Signature = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  format: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  offset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let SignatureBlock = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  reserved:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 2),
  cbSignature:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Length (in bytes) of the PKCS#7 packet in pbSignature
  signature:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer('cbSignature')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  ulVersion:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Version number of the DSIG table (0x00000001)
  usNumSigs:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Number of signatures in the table
  usFlag:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Permission flags
  signatures:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Signature, 'usNumSigs'),
  signatureBlocks: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(SignatureBlock, 'usNumSigs')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/EBDT.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/EBDT.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BigMetrics: () => (/* binding */ BigMetrics),
/* harmony export */   SmallMetrics: () => (/* binding */ SmallMetrics),
/* harmony export */   glyph: () => (/* binding */ glyph)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let BigMetrics = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  height: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  width: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  horiBearingX: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  horiBearingY: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  horiAdvance: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  vertBearingX: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  vertBearingY: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  vertAdvance: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

let SmallMetrics = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  height: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  width: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  bearingX: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  bearingY: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  advance: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

let EBDTComponent = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  xOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  yOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.int8
});

class ByteAligned {}

class BitAligned {}

let glyph = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('version', {
  1: {
    metrics: SmallMetrics,
    data: ByteAligned
  },

  2: {
    metrics: SmallMetrics,
    data: BitAligned
  },

  // format 3 is deprecated
  // format 4 is not supported by Microsoft

  5: {
    data: BitAligned
  },

  6: {
    metrics: BigMetrics,
    data: ByteAligned
  },

  7: {
    metrics: BigMetrics,
    data: BitAligned
  },

  8: {
    metrics: SmallMetrics,
    pad: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8),
    numComponents: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    components: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(EBDTComponent, 'numComponents')
  },

  9: {
    metrics: BigMetrics,
    pad: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8),
    numComponents: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    components: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(EBDTComponent, 'numComponents')
  },

  17: {
    metrics: SmallMetrics,
    dataLen: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    data: new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer('dataLen')
  },

  18: {
    metrics: BigMetrics,
    dataLen: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    data: new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer('dataLen')
  },

  19: {
    dataLen: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    data: new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer('dataLen')
  }
});



/***/ }),

/***/ "./src/modules/fontkit/src/tables/EBLC.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/EBLC.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _EBDT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EBDT */ "./src/modules/fontkit/src/tables/EBDT.js");



let SBitLineMetrics = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  ascender: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  descender: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  widthMax: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  caretSlopeNumerator: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  caretSlopeDenominator: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  caretOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  minOriginSB: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  minAdvanceSB: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  maxBeforeBL: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  minAfterBL: restructure__WEBPACK_IMPORTED_MODULE_0__.int8,
  pad: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.int8, 2)
});

let CodeOffsetPair = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyphCode: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  offset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let IndexSubtable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  header: {
    imageFormat: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    imageDataOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
  },

  1: {
    offsetArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, t => t.parent.lastGlyphIndex - t.parent.firstGlyphIndex + 1)
  },

  2: {
    imageSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    bigMetrics: _EBDT__WEBPACK_IMPORTED_MODULE_1__.BigMetrics
  },

  3: {
    offsetArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.parent.lastGlyphIndex - t.parent.firstGlyphIndex + 1)
  },

  4: {
    numGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    glyphArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(CodeOffsetPair, t => t.numGlyphs + 1)
  },

  5: {
    imageSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    bigMetrics: _EBDT__WEBPACK_IMPORTED_MODULE_1__.BigMetrics,
    numGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    glyphCodeArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numGlyphs')
  }
});

let IndexSubtableArray = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  firstGlyphIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lastGlyphIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  subtable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, IndexSubtable)
});

let BitmapSizeTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  indexSubTableArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(IndexSubtableArray, 1), { type: 'parent' }),
  indexTablesSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  numberOfIndexSubTables: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  colorRef: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  hori: SBitLineMetrics,
  vert: SBitLineMetrics,
  startGlyphIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  endGlyphIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  ppemX: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  ppemY: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  bitDepth: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  flags: new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, ['horizontal', 'vertical'])
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, // 0x00020000
  numSizes: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  sizes:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(BitmapSizeTable, 'numSizes')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/GDEF.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/GDEF.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/modules/fontkit/src/tables/variations.js");




let AttachPoint = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);
let AttachList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
  glyphCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  attachPoints:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, AttachPoint), 'glyphCount')
});

let CaretValue = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Design units only
    coordinate: restructure__WEBPACK_IMPORTED_MODULE_0__.int16
  },

  2: { // Contour point
    caretValuePoint: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  3: { // Design units plus Device table
    coordinate:     restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    deviceTable:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device)
  }
});

let LigGlyph = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, CaretValue), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let LigCaretList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
  ligGlyphCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  ligGlyphs:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LigGlyph), 'ligGlyphCount')
});

let MarkGlyphSetsDef = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  markSetTableFormat: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  markSetCount:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  coverage:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage), 'markSetCount')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, {
  header: {
    glyphClassDef:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ClassDef),
    attachList:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, AttachList),
    ligCaretList:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LigCaretList),
    markAttachClassDef: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ClassDef)
  },

  0x00010000: {},
  0x00010002: {
    markGlyphSetsDef:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MarkGlyphSetsDef)
  },
  0x00010003: {
    markGlyphSetsDef:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MarkGlyphSetsDef),
    itemVariationStore: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _variations__WEBPACK_IMPORTED_MODULE_2__.ItemVariationStore)
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/GPOS.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/GPOS.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GPOSLookup: () => (/* binding */ GPOSLookup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/modules/fontkit/src/tables/variations.js");




let ValueFormat = new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, [
  'xPlacement', 'yPlacement',
  'xAdvance', 'yAdvance',
  'xPlaDevice', 'yPlaDevice',
  'xAdvDevice', 'yAdvDevice'
]);

let types = {
  xPlacement: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  yPlacement: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  xAdvance:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  yAdvance:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  xPlaDevice: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device, { type: 'global', relativeTo: ctx => ctx.rel }),
  yPlaDevice: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device, { type: 'global', relativeTo: ctx => ctx.rel }),
  xAdvDevice: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device, { type: 'global', relativeTo: ctx => ctx.rel }),
  yAdvDevice: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device, { type: 'global', relativeTo: ctx => ctx.rel })
};

class ValueRecord {
  constructor(key = 'valueFormat') {
    this.key = key;
  }

  buildStruct(parent) {
    let struct = parent;
    while (!struct[this.key] && struct.parent) {
      struct = struct.parent;
    }

    if (!struct[this.key]) return;

    let fields = {};
    fields.rel = () => struct._startOffset;

    let format = struct[this.key];
    for (let key in format) {
      if (format[key]) {
        fields[key] = types[key];
      }
    }

    return new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct(fields);
  }

  size(val, ctx) {
    return this.buildStruct(ctx).size(val, ctx);
  }

  decode(stream, parent) {
    let res = this.buildStruct(parent).decode(stream, parent);
    delete res.rel;
    return res;
  }
}

let PairValueRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  secondGlyph:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  value1:         new ValueRecord('valueFormat1'),
  value2:         new ValueRecord('valueFormat2')
});

let PairSet = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(PairValueRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let Class2Record = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  value1: new ValueRecord('valueFormat1'),
  value2: new ValueRecord('valueFormat2')
});

let Anchor = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Design units only
    xCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    yCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16
  },

  2: { // Design units plus contour point
    xCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    yCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    anchorPoint:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  3: { // Design units plus Device tables
    xCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    yCoordinate:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    xDeviceTable:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device),
    yDeviceTable:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Device)
  }
});

let EntryExitRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  entryAnchor:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Anchor, {type: 'parent'}),
  exitAnchor:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Anchor, {type: 'parent'})
});

let MarkRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  class:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  markAnchor: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Anchor, {type: 'parent'})
});

let MarkArray = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(MarkRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let BaseRecord  = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Anchor), t => t.parent.classCount);
let BaseArray   = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(BaseRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let ComponentRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Anchor), t => t.parent.parent.classCount);
let LigatureAttach  = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ComponentRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);
let LigatureArray   = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LigatureAttach), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let GPOSLookup = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('lookupType', {
  1: new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, { // Single Adjustment
    1: { // Single positioning value
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      valueFormat:    ValueFormat,
      value:          new ValueRecord()
    },
    2: {
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      valueFormat:    ValueFormat,
      valueCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      values:         new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new ValueRecord(), 'valueCount')
    }
  }),

  2: new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, { // Pair Adjustment Positioning
    1: { // Adjustments for glyph pairs
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      valueFormat1:   ValueFormat,
      valueFormat2:   ValueFormat,
      pairSetCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      pairSets:       new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, PairSet), 'pairSetCount')
    },

    2: { // Class pair adjustment
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      valueFormat1:   ValueFormat,
      valueFormat2:   ValueFormat,
      classDef1:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ClassDef),
      classDef2:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ClassDef),
      class1Count:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      class2Count:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      classRecords:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(Class2Record, 'class2Count'), 'class1Count')
    }
  }),

  3: { // Cursive Attachment Positioning
    format:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverage:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    entryExitCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    entryExitRecords:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(EntryExitRecord, 'entryExitCount')
  },

  4: { // MarkToBase Attachment Positioning
    format:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    markCoverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    baseCoverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    classCount:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    markArray:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MarkArray),
    baseArray:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseArray)
  },

  5: { // MarkToLigature Attachment Positioning
    format:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    markCoverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    ligatureCoverage:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    classCount:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    markArray:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MarkArray),
    ligatureArray:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LigatureArray)
  },

  6: { // MarkToMark Attachment Positioning
    format:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    mark1Coverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    mark2Coverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    classCount:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    mark1Array:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, MarkArray),
    mark2Array:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, BaseArray)
  },

  7: _opentype__WEBPACK_IMPORTED_MODULE_1__.Context,          // Contextual positioning
  8: _opentype__WEBPACK_IMPORTED_MODULE_1__.ChainingContext,  // Chaining contextual positioning

  9: { // Extension Positioning
    posFormat:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookupType:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,   // cannot also be 9
    extension:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, null)
  }
});

// Fix circular reference
GPOSLookup.versions[9].extension.type = GPOSLookup;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, {
  header: {
    scriptList:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ScriptList),
    featureList:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.FeatureList),
    lookupList:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new _opentype__WEBPACK_IMPORTED_MODULE_1__.LookupList(GPOSLookup))
  },

  0x00010000: {},
  0x00010001: {
    featureVariations: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _variations__WEBPACK_IMPORTED_MODULE_2__.FeatureVariations)
  }
}));

// export GPOSLookup for JSTF table



/***/ }),

/***/ "./src/modules/fontkit/src/tables/GSUB.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/GSUB.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/modules/fontkit/src/tables/variations.js");




let Sequence = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);
let AlternateSet = Sequence;

let Ligature = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyph:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  compCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  components: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.compCount - 1)
});

let LigatureSet = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Ligature), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let GSUBLookup = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('lookupType', {
  1: new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {// Single Substitution
    1: {
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      deltaGlyphID:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16
    },
    2: {
      coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
      glyphCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      substitute:     new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'glyphCount')
    }
  }),

  2: { // Multiple Substitution
    substFormat:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    sequences:      new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Sequence), 'count')
  },

  3: { // Alternate Substitution
    substFormat:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    alternateSet:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, AlternateSet), 'count')
  },

  4: { // Ligature Substitution
    substFormat:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverage:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    ligatureSets:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LigatureSet), 'count')
  },

  5: _opentype__WEBPACK_IMPORTED_MODULE_1__.Context,         // Contextual Substitution
  6: _opentype__WEBPACK_IMPORTED_MODULE_1__.ChainingContext, // Chaining Contextual Substitution

  7: { // Extension Substitution
    substFormat:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookupType:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,   // cannot also be 7
    extension:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, null)
  },

  8: { // Reverse Chaining Contextual Single Substitution
    substFormat:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverage:               new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage),
    backtrackCoverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage), 'backtrackGlyphCount'),
    lookaheadGlyphCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookaheadCoverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.Coverage), 'lookaheadGlyphCount'),
    glyphCount:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    substitutes:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'glyphCount')
  }
});

// Fix circular reference
GSUBLookup.versions[7].extension.type = GSUBLookup;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, {
  header: {
    scriptList:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.ScriptList),
    featureList:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, _opentype__WEBPACK_IMPORTED_MODULE_1__.FeatureList),
    lookupList:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new _opentype__WEBPACK_IMPORTED_MODULE_1__.LookupList(GSUBLookup))
  },

  0x00010000: {},
  0x00010001: {
    featureVariations: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _variations__WEBPACK_IMPORTED_MODULE_2__.FeatureVariations)
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/HVAR.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/HVAR.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations */ "./src/modules/fontkit/src/tables/variations.js");




// TODO: add this to restructure
class VariableSizeNumber {
  constructor(size) {
    this._size = size;
  }

  decode(stream, parent) {
    switch (this.size(0, parent)) {
      case 1: return stream.readUInt8();
      case 2: return stream.readUInt16BE();
      case 3: return stream.readUInt24BE();
      case 4: return stream.readUInt32BE();
    }
  }

  size(val, parent) {
    return (0,restructure__WEBPACK_IMPORTED_MODULE_0__.resolveLength)(this._size, null, parent);
  }
}

let MapDataEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  entry: new VariableSizeNumber(t => ((t.parent.entryFormat & 0x0030) >> 4) + 1),
  outerIndex: t => t.entry >> ((t.parent.entryFormat & 0x000F) + 1),
  innerIndex: t => t.entry & ((1 << ((t.parent.entryFormat & 0x000F) + 1)) - 1)
});

let DeltaSetIndexMap = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  entryFormat: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  mapCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  mapData: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(MapDataEntry, 'mapCount')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  majorVersion: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  minorVersion: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  itemVariationStore: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, _variations__WEBPACK_IMPORTED_MODULE_1__.ItemVariationStore),
  advanceWidthMapping: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, DeltaSetIndexMap),
  LSBMapping: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, DeltaSetIndexMap),
  RSBMapping: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, DeltaSetIndexMap)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/JSTF.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/JSTF.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var _GPOS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GPOS */ "./src/modules/fontkit/src/tables/GPOS.js");




let JstfGSUBModList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let JstfPriority = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  shrinkageEnableGSUB:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  shrinkageDisableGSUB:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  shrinkageEnableGPOS:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  shrinkageDisableGPOS:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  shrinkageJstfMax:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new _opentype__WEBPACK_IMPORTED_MODULE_1__.LookupList(_GPOS__WEBPACK_IMPORTED_MODULE_2__.GPOSLookup)),
  extensionEnableGSUB:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  extensionDisableGSUB:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  extensionEnableGPOS:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  extensionDisableGPOS:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfGSUBModList),
  extensionJstfMax:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new _opentype__WEBPACK_IMPORTED_MODULE_1__.LookupList(_GPOS__WEBPACK_IMPORTED_MODULE_2__.GPOSLookup))
});

let JstfLangSys = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfPriority), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let JstfLangSysRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:         new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  jstfLangSys: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfLangSys)
});

let JstfScript = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  extenderGlyphs: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)), // array of glyphs to extend line length
  defaultLangSys: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfLangSys),
  langSysCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  langSysRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(JstfLangSysRecord, 'langSysCount')
});

let JstfScriptRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:    new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  script: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JstfScript, {type: 'parent'})
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // should be 0x00010000
  scriptCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  scriptList:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(JstfScriptRecord, 'scriptCount')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/LTSH.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/LTSH.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// Linear Threshold table
// Records the ppem for each glyph at which the scaling becomes linear again,
// despite instructions effecting the advance width
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  numGlyphs:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  yPels:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 'numGlyphs')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/OS2.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/tables/OS2.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


var OS2 = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  header: {
    xAvgCharWidth:          restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // average weighted advance width of lower case letters and space
    usWeightClass:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // visual weight of stroke in glyphs
    usWidthClass:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // relative change from the normal aspect ratio (width to height ratio)
    fsType:                 new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, [ // Indicates font embedding licensing rights
      null, 'noEmbedding', 'viewOnly', 'editable', null,
      null, null, null, 'noSubsetting', 'bitmapOnly'
    ]),
    ySubscriptXSize:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended horizontal size in pixels for subscripts
    ySubscriptYSize:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended vertical size in pixels for subscripts
    ySubscriptXOffset:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended horizontal offset for subscripts
    ySubscriptYOffset:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended vertical offset form the baseline for subscripts
    ySuperscriptXSize:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended horizontal size in pixels for superscripts
    ySuperscriptYSize:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended vertical size in pixels for superscripts
    ySuperscriptXOffset:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended horizontal offset for superscripts
    ySuperscriptYOffset:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // recommended vertical offset from the baseline for superscripts
    yStrikeoutSize:         restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // width of the strikeout stroke
    yStrikeoutPosition:     restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // position of the strikeout stroke relative to the baseline
    sFamilyClass:           restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // classification of font-family design
    panose:                 new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 10),   // describe the visual characteristics of a given typeface
    ulCharRange:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 4),
    vendorID:               new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),          // four character identifier for the font vendor
    fsSelection:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, [  // bit field containing information about the font
      'italic', 'underscore', 'negative', 'outlined', 'strikeout',
      'bold', 'regular', 'useTypoMetrics', 'wws', 'oblique'
    ]),
    usFirstCharIndex:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // The minimum Unicode index in this font
    usLastCharIndex:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16   // The maximum Unicode index in this font
  },

  // The Apple version of this table ends here, but the Microsoft one continues on...
  0: {},

  1: {
    typoAscender:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoDescender:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoLineGap:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    winAscent:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    winDescent:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    codePageRange:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 2)
  },

  2: {
    // these should be common with version 1 somehow
    typoAscender:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoDescender:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoLineGap:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    winAscent:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    winDescent:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    codePageRange:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 2),

    xHeight:            restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    capHeight:          restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    defaultChar:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    breakChar:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    maxContent:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  5: {
    typoAscender:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoDescender:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    typoLineGap:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    winAscent:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    winDescent:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    codePageRange:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 2),

    xHeight:            restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    capHeight:          restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
    defaultChar:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    breakChar:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    maxContent:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,

    usLowerOpticalPointSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    usUpperOpticalPointSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  }
});

let versions = OS2.versions;
versions[3] = versions[4] = versions[2];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OS2);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/PCLT.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/PCLT.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// PCL 5 Table
// NOTE: The PCLT table is strongly discouraged for OpenType fonts with TrueType outlines
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  fontNumber:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  pitch:                restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  xHeight:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  style:                restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  typeFamily:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  capHeight:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  symbolSet:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  typeface:             new restructure__WEBPACK_IMPORTED_MODULE_0__.String(16),
  characterComplement:  new restructure__WEBPACK_IMPORTED_MODULE_0__.String(8),
  fileName:             new restructure__WEBPACK_IMPORTED_MODULE_0__.String(6),
  strokeWeight:         new restructure__WEBPACK_IMPORTED_MODULE_0__.String(1),
  widthType:            new restructure__WEBPACK_IMPORTED_MODULE_0__.String(1),
  serifStyle:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  reserved:             new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/VDMX.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/VDMX.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// VDMX tables contain ascender/descender overrides for certain (usually small)
// sizes. This is needed in order to match font metrics on Windows.

let Ratio = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  bCharSet:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,                             // Character set
  xRatio:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,                             // Value to use for x-Ratio
  yStartRatio:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,                             // Starting y-Ratio value
  yEndRatio:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint8                              // Ending y-Ratio value
});

let vTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  yPelHeight:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // yPelHeight to which values apply
  yMax:           restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                             // Maximum value (in pels) for this yPelHeight
  yMin:           restructure__WEBPACK_IMPORTED_MODULE_0__.int16                              // Minimum value (in pels) for this yPelHeight
});

let VdmxGroup = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  recs:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // Number of height records in this group
  startsz:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,                             // Starting yPelHeight
  endsz:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,                             // Ending yPelHeight
  entries:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(vTable, 'recs')          // The VDMX records
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // Version number (0 or 1)
  numRecs:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // Number of VDMX groups present
  numRatios:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                            // Number of aspect ratio groupings
  ratioRanges:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Ratio, 'numRatios'),     // Ratio ranges
  offsets:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numRatios'),  // Offset to the VDMX group for this ratio range
  groups:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(VdmxGroup, 'numRecs')    // The actual VDMX groupings
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/VORG.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/VORG.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let VerticalOrigin = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyphIndex:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  vertOriginY:  restructure__WEBPACK_IMPORTED_MODULE_0__.int16
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  majorVersion:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  minorVersion:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  defaultVertOriginY:     restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  numVertOriginYMetrics:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  metrics:                new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(VerticalOrigin, 'numVertOriginYMetrics')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/WOFF2Directory.js":
/*!**********************************************************!*\
  !*** ./src/modules/fontkit/src/tables/WOFF2Directory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


const Base128 = {
  decode(stream) {
    let result = 0;
    let iterable = [0, 1, 2, 3, 4];
    for (let j = 0; j < iterable.length; j++) {
      let i = iterable[j];
      let code = stream.readUInt8();

      // If any of the top seven bits are set then we're about to overflow.
      if (result & 0xe0000000) {
        throw new Error('Overflow');
      }

      result = (result << 7) | (code & 0x7f);
      if ((code & 0x80) === 0) {
        return result;
      }
    }

    throw new Error('Bad base 128 number');
  }
};

let knownTags = [
  'cmap', 'head', 'hhea', 'hmtx', 'maxp', 'name', 'OS/2', 'post', 'cvt ',
  'fpgm', 'glyf', 'loca', 'prep', 'CFF ', 'VORG', 'EBDT', 'EBLC', 'gasp',
  'hdmx', 'kern', 'LTSH', 'PCLT', 'VDMX', 'vhea', 'vmtx', 'BASE', 'GDEF',
  'GPOS', 'GSUB', 'EBSC', 'JSTF', 'MATH', 'CBDT', 'CBLC', 'COLR', 'CPAL',
  'SVG ', 'sbix', 'acnt', 'avar', 'bdat', 'bloc', 'bsln', 'cvar', 'fdsc',
  'feat', 'fmtx', 'fvar', 'gvar', 'hsty', 'just', 'lcar', 'mort', 'morx',
  'opbd', 'prop', 'trak', 'Zapf', 'Silf', 'Glat', 'Gloc', 'Feat', 'Sill'
];

let WOFF2DirectoryEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  customTag: new restructure__WEBPACK_IMPORTED_MODULE_0__.Optional(new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4), t => (t.flags & 0x3f) === 0x3f),
  tag: t => t.customTag || knownTags[t.flags & 0x3f],// || (() => { throw new Error(`Bad tag: ${flags & 0x3f}`); })(); },
  length: Base128,
  transformVersion: t => (t.flags >>> 6) & 0x03,
  transformed: t => (t.tag === 'glyf' || t.tag === 'loca') ? t.transformVersion === 0 : t.transformVersion !== 0,
  transformLength: new restructure__WEBPACK_IMPORTED_MODULE_0__.Optional(Base128, t => t.transformed)
});

let WOFF2Directory = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag: new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4), // should be 'wOF2'
  flavor: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  numTables: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  totalSfntSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  totalCompressedSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  majorVersion: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  minorVersion: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  metaOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  metaLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  metaOrigLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  privOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  privLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  tables: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(WOFF2DirectoryEntry, 'numTables')
});

WOFF2Directory.process = function() {
  let tables = {};
  for (let i = 0; i < this.tables.length; i++) {
    let table = this.tables[i];
    tables[table.tag] = table;
  }

  return this.tables = tables;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WOFF2Directory);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/WOFFDirectory.js":
/*!*********************************************************!*\
  !*** ./src/modules/fontkit/src/tables/WOFFDirectory.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/modules/fontkit/src/tables/index.js");



let WOFFDirectoryEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:          new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  offset:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'void', {type: 'global'}),
  compLength:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  length:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  origChecksum: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let WOFFDirectory = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:            new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4), // should be 'wOFF'
  flavor:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  length:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  numTables:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  reserved:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  totalSfntSize:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  majorVersion:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  minorVersion:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  metaOffset:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  metaLength:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  metaOrigLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  privOffset:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  privLength:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  tables:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(WOFFDirectoryEntry, 'numTables')
});

WOFFDirectory.process = function() {
  let tables = {};
  for (let table of this.tables) {
    tables[table.tag] = table;
  }

  this.tables = tables;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WOFFDirectory);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/aat.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/tables/aat.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LookupTable: () => (/* binding */ LookupTable),
/* harmony export */   StateTable: () => (/* binding */ StateTable),
/* harmony export */   StateTable1: () => (/* binding */ StateTable1),
/* harmony export */   UnboundedArray: () => (/* binding */ UnboundedArray)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


class UnboundedArrayAccessor {
  constructor(type, stream, parent) {
    this.type = type;
    this.stream = stream;
    this.parent = parent;
    this.base = this.stream.pos;
    this._items = [];
  }

  getItem(index) {
    if (this._items[index] == null) {
      let pos = this.stream.pos;
      this.stream.pos = this.base + this.type.size(null, this.parent) * index;
      this._items[index] = this.type.decode(this.stream, this.parent);
      this.stream.pos = pos;
    }

    return this._items[index];
  }

  inspect() {
    return `[UnboundedArray ${this.type.constructor.name}]`;
  }
}

class UnboundedArray extends restructure__WEBPACK_IMPORTED_MODULE_0__.Array {
  constructor(type) {
    super(type, 0);
  }

  decode(stream, parent) {
    return new UnboundedArrayAccessor(this.type, stream, parent);
  }
}

let LookupTable = function(ValueType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16) {
  // Helper class that makes internal structures invisible to pointers
  class Shadow {
    constructor(type) {
      this.type = type;
    }

    decode(stream, ctx) {
      ctx = ctx.parent.parent;
      return this.type.decode(stream, ctx);
    }

    size(val, ctx) {
      ctx = ctx.parent.parent;
      return this.type.size(val, ctx);
    }

    encode(stream, val, ctx) {
      ctx = ctx.parent.parent;
      return this.type.encode(stream, val, ctx);
    }
  }

  ValueType = new Shadow(ValueType);

  let BinarySearchHeader = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    unitSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    nUnits: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    searchRange: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    entrySelector: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    rangeShift: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  });

  let LookupSegmentSingle = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    lastGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    firstGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    value: ValueType
  });

  let LookupSegmentArray = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    lastGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    firstGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    values: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ValueType, t => t.lastGlyph - t.firstGlyph + 1), {type: 'parent'})
  });

  let LookupSingle = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    glyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    value: ValueType
  });

  return new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
    0: {
      values: new UnboundedArray(ValueType) // length == number of glyphs maybe?
    },
    2: {
      binarySearchHeader: BinarySearchHeader,
      segments: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupSegmentSingle, t => t.binarySearchHeader.nUnits)
    },
    4: {
      binarySearchHeader: BinarySearchHeader,
      segments: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupSegmentArray, t => t.binarySearchHeader.nUnits)
    },
    6: {
      binarySearchHeader: BinarySearchHeader,
      segments: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupSingle, t => t.binarySearchHeader.nUnits)
    },
    8: {
      firstGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      count: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
      values: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ValueType, 'count')
    }
  });
};

function StateTable(entryData = {}, lookupType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16) {
  let entry = Object.assign({
    newState: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  }, entryData);

  let Entry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct(entry);
  let StateArray = new UnboundedArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.nClasses));

  let StateHeader = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    nClasses: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    classTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new LookupTable(lookupType)),
    stateArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, StateArray),
    entryTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new UnboundedArray(Entry))
  });

  return StateHeader;
}

// This is the old version of the StateTable structure
function StateTable1(entryData = {}, lookupType = restructure__WEBPACK_IMPORTED_MODULE_0__.uint16) {
  let ClassLookupTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    version() { return 8; }, // simulate LookupTable
    firstGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    values: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)
  });

  let entry = Object.assign({
    newStateOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    // convert offset to stateArray index
    newState: t => (t.newStateOffset - (t.parent.stateArray.base - t.parent._startOffset)) / t.parent.nClasses,
    flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  }, entryData);

  let Entry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct(entry);
  let StateArray = new UnboundedArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.nClasses));

  let StateHeader1 = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    nClasses: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    classTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassLookupTable),
    stateArray: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, StateArray),
    entryTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new UnboundedArray(Entry))
  });

  return StateHeader1;
}


/***/ }),

/***/ "./src/modules/fontkit/src/tables/avar.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/avar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let shortFrac = new restructure__WEBPACK_IMPORTED_MODULE_0__.Fixed(16, 'BE', 14);

let Correspondence = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  fromCoord: shortFrac,
  toCoord: shortFrac
});

let Segment = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  pairCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  correspondence: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Correspondence, 'pairCount')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  axisCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  segment: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Segment, 'axisCount')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/bsln.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/bsln.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _aat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aat */ "./src/modules/fontkit/src/tables/aat.js");



let BslnSubtable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('format', {
  0: { // Distance-based, no mapping
    deltas: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 32)
  },

  1: { // Distance-based, with mapping
    deltas: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 32),
    mappingData: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)
  },

  2: { // Control point-based, no mapping
    standardGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    controlPoints: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 32)
  },

  3: { // Control point-based, with mapping
    standardGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    controlPoints: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 32),
    mappingData: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  format: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  defaultBaseline: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  subtable: BslnSubtable
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/cmap.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/cmap.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let SubHeader = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  firstCode:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  entryCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  idDelta:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  idRangeOffset:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let CmapGroup = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  startCharCode:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  endCharCode:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  glyphID:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let UnicodeValueRange = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  startUnicodeValue:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint24,
  additionalCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint8
});

let UVSMapping = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  unicodeValue: restructure__WEBPACK_IMPORTED_MODULE_0__.uint24,
  glyphID:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let DefaultUVS = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(UnicodeValueRange, restructure__WEBPACK_IMPORTED_MODULE_0__.uint32);
let NonDefaultUVS = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(UVSMapping, restructure__WEBPACK_IMPORTED_MODULE_0__.uint32);

let VarSelectorRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  varSelector:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint24,
  defaultUVS:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, DefaultUVS, {type: 'parent'}),
  nonDefaultUVS:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, NonDefaultUVS, {type: 'parent'})
});

let CmapSubtable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  0: { // Byte encoding
    length:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,   // Total table length in bytes (set to 262 for format 0)
    language:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,   // Language code for this encoding subtable, or zero if language-independent
    codeMap:    new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 256)
  },

  2: { // High-byte mapping (CJK)
    length:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    language:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    subHeaderKeys:    new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 256),
    subHeaderCount:   t => Math.max.apply(Math, t.subHeaderKeys),
    subHeaders:       new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(SubHeader, 'subHeaderCount'),
    glyphIndexArray:  new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'subHeaderCount')
  },

  4: { // Segment mapping to delta values
    length:           restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,              // Total table length in bytes
    language:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,              // Language code
    segCountX2:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    segCount:         t => t.segCountX2 >> 1,
    searchRange:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    entrySelector:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    rangeShift:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    endCode:          new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'segCount'),
    reservedPad:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),       // This value should be zero
    startCode:        new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'segCount'),
    idDelta:          new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 'segCount'),
    idRangeOffset:    new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'segCount'),
    glyphIndexArray:  new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => (t.length - t._currentOffset) / 2)
  },

  6: { // Trimmed table
    length:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    language:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    firstCode:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    entryCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyphIndices:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'entryCount')
  },

  8: { // mixed 16-bit and 32-bit coverage
    reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
    length:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    language: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    is32:     new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 8192),
    nGroups:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    groups:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(CmapGroup, 'nGroups')
  },

  10: { // Trimmed Array
    reserved:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
    length:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    language:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    firstCode:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    entryCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    glyphIndices:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numChars')
  },

  12: { // Segmented coverage
    reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
    length:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    language: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    nGroups:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    groups:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(CmapGroup, 'nGroups')
  },

  13: { // Many-to-one range mappings (same as 12 except for group.startGlyphID)
    reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
    length:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    language: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    nGroups:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    groups:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(CmapGroup, 'nGroups')
  },

  14: { // Unicode Variation Sequences
    length:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    numRecords:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    varSelectors: new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(VarSelectorRecord, 'numRecords')
  }
});

let CmapEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  platformID:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Platform identifier
  encodingID:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Platform-specific encoding identifier
  table:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, CmapSubtable, {type: 'parent', lazy: true})
});

// character to glyph mapping
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  numSubtables: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  tables:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(CmapEntry, 'numSubtables')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/cvt.js":
/*!***********************************************!*\
  !*** ./src/modules/fontkit/src/tables/cvt.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// An array of predefined values accessible by instructions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  controlValues: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int16)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/directory.js":
/*!*****************************************************!*\
  !*** ./src/modules/fontkit/src/tables/directory.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/modules/fontkit/src/tables/index.js");



let TableEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:        new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  checkSum:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  offset:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'void', { type: 'global' }),
  length:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let Directory = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:            new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  numTables:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  searchRange:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  entrySelector:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  rangeShift:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  tables:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(TableEntry, 'numTables')
});

Directory.process = function() {
  let tables = {};
  for (let table of this.tables) {
    tables[table.tag] = table;
  }

  this.tables = tables;
};

Directory.preEncode = function() {
  if (!Array.isArray(this.tables)) {
    let tables = [];
    for (let tag in this.tables) {
      let table = this.tables[tag];
      if (table) {
        tables.push({
          tag: tag,
          checkSum: 0,
          offset: new restructure__WEBPACK_IMPORTED_MODULE_0__.VoidPointer(___WEBPACK_IMPORTED_MODULE_1__["default"][tag], table),
          length: ___WEBPACK_IMPORTED_MODULE_1__["default"][tag].size(table)
        });
      }
    }
    
    this.tables = tables;
  }

  this.tag = 'true';
  this.numTables = this.tables.length;

  let maxExponentFor2 = Math.floor((Math.log(this.numTables) / Math.LN2));
  let maxPowerOf2 = Math.pow(2, maxExponentFor2);

  this.searchRange =  maxPowerOf2 * 16;
  this.entrySelector = Math.log(maxPowerOf2) / Math.LN2;
  this.rangeShift = this.numTables * 16 - this.searchRange;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Directory);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/feat.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/feat.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let Setting = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  setting: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nameIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  name: t => t.parent.parent.parent.name.records.fontFeatures[t.nameIndex]
});

let FeatureName = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  feature: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nSettings: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  settingTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Setting, 'nSettings'), { type: 'parent' }),
  featureFlags: new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, [
    null, null, null, null, null, null,
    'hasDefault', 'exclusive'
  ]),
  defaultSetting: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  nameIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  name: t => t.parent.parent.name.records.fontFeatures[t.nameIndex]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  featureNameCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  reserved1: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  reserved2: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32),
  featureNames: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FeatureName, 'featureNameCount')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/fpgm.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/fpgm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// A list of instructions that are executed once when a font is first used.
// These instructions are known as the font program. The main use of this table
// is for the definition of functions that are used in many different glyph programs.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  instructions: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/fvar.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/fvar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let Axis = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  axisTag: new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  minValue: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  defaultValue: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  maxValue: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nameID: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  name: t => t.parent.parent.name.records.fontFeatures[t.nameID]
});

let Instance = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  nameID: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  name: t => t.parent.parent.name.records.fontFeatures[t.nameID],
  flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  coord: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32, t => t.parent.axisCount),
  postscriptNameID: new restructure__WEBPACK_IMPORTED_MODULE_0__.Optional(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.parent.instanceSize - t._currentOffset > 0)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  offsetToData: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  countSizePairs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  axisCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  axisSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  instanceCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  instanceSize: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  axis: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Axis, 'axisCount'),
  instance: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Instance, 'instanceCount')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/gasp.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/gasp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let GaspRange = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  rangeMaxPPEM:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                  // Upper limit of range, in ppem
  rangeGaspBehavior:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, [ // Flags describing desired rasterizer behavior
    'grayscale', 'gridfit',
    'symmetricSmoothing', 'symmetricGridfit'     // only in version 1, for ClearType
  ])
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // set to 0
  numRanges:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  gaspRanges: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(GaspRange, 'numRanges') // Sorted by ppem
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/glyf.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/glyf.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// only used for encoding
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Buffer));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/gvar.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/gvar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let shortFrac = new restructure__WEBPACK_IMPORTED_MODULE_0__.Fixed(16, 'BE', 14);
class Offset {
  static decode(stream, parent) {
    // In short format, offsets are multiplied by 2.
    // This doesn't seem to be documented by Apple, but it
    // is implemented this way in Freetype.
    return parent.flags
      ? stream.readUInt32BE()
      : stream.readUInt16BE() * 2;
  }
}

let gvar = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  reserved: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  axisCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  globalCoordCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  globalCoords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(shortFrac, 'axisCount'), 'globalCoordCount')),
  glyphCount: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  offsetToData: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  offsets: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(Offset, 'void', { relativeTo: ctx => ctx.offsetToData, allowNull: false }), t => t.glyphCount + 1)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gvar);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/hdmx.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/hdmx.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let DeviceRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  pixelSize:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  maximumWidth:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  widths:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.parent.parent.maxp.numGlyphs)
});

// The Horizontal Device Metrics table stores integer advance widths scaled to particular pixel sizes
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  numRecords:         restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  sizeDeviceRecord:   restructure__WEBPACK_IMPORTED_MODULE_0__.int32,
  records:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(DeviceRecord, 'numRecords')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/head.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/head.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// font header
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:            restructure__WEBPACK_IMPORTED_MODULE_0__.int32,                   // 0x00010000 (version 1.0)
  revision:           restructure__WEBPACK_IMPORTED_MODULE_0__.int32,                   // set by font manufacturer
  checkSumAdjustment: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  magicNumber:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,                  // set to 0x5F0F3CF5
  flags:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  unitsPerEm:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                  // range from 64 to 16384
  created:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int32, 2),
  modified:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int32, 2),
  xMin:               restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                   // for all glyph bounding boxes
  yMin:               restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                   // for all glyph bounding boxes
  xMax:               restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                   // for all glyph bounding boxes
  yMax:               restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                   // for all glyph bounding boxes
  macStyle:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, [
    'bold', 'italic', 'underline', 'outline',
    'shadow', 'condensed', 'extended'
  ]),
  lowestRecPPEM:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,                  // smallest readable size in pixels
  fontDirectionHint:  restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  indexToLocFormat:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,                   // 0 for short offsets, 1 for long
  glyphDataFormat:    restructure__WEBPACK_IMPORTED_MODULE_0__.int16                    // 0 for current format
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/hhea.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/hhea.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// horizontal header
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:              restructure__WEBPACK_IMPORTED_MODULE_0__.int32,
  ascent:               restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Distance from baseline of highest ascender
  descent:              restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Distance from baseline of lowest descender
  lineGap:              restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Typographic line gap
  advanceWidthMax:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum advance width value in 'hmtx' table
  minLeftSideBearing:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Maximum advance width value in 'hmtx' table
  minRightSideBearing:  restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Minimum right sidebearing value
  xMaxExtent:           restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  caretSlopeRise:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Used to calculate the slope of the cursor (rise/run); 1 for vertical
  caretSlopeRun:        restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // 0 for vertical
  caretOffset:          restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Set to 0 for non-slanted fonts
  reserved:             new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 4),
  metricDataFormat:     restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // 0 for current format
  numberOfMetrics:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16   // Number of advance widths in 'hmtx' table
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/hmtx.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/hmtx.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let HmtxEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  advance: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  bearing: restructure__WEBPACK_IMPORTED_MODULE_0__.int16
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  metrics:    new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(HmtxEntry, t => t.parent.hhea.numberOfMetrics),
  bearings:   new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, t => t.parent.maxp.numGlyphs - t.parent.hhea.numberOfMetrics)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/index.js":
/*!*************************************************!*\
  !*** ./src/modules/fontkit/src/tables/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmap */ "./src/modules/fontkit/src/tables/cmap.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head */ "./src/modules/fontkit/src/tables/head.js");
/* harmony import */ var _hhea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hhea */ "./src/modules/fontkit/src/tables/hhea.js");
/* harmony import */ var _hmtx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hmtx */ "./src/modules/fontkit/src/tables/hmtx.js");
/* harmony import */ var _maxp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maxp */ "./src/modules/fontkit/src/tables/maxp.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./name */ "./src/modules/fontkit/src/tables/name.js");
/* harmony import */ var _OS2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OS2 */ "./src/modules/fontkit/src/tables/OS2.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post */ "./src/modules/fontkit/src/tables/post.js");
/* harmony import */ var _cvt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cvt */ "./src/modules/fontkit/src/tables/cvt.js");
/* harmony import */ var _fpgm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fpgm */ "./src/modules/fontkit/src/tables/fpgm.js");
/* harmony import */ var _loca__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loca */ "./src/modules/fontkit/src/tables/loca.js");
/* harmony import */ var _prep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prep */ "./src/modules/fontkit/src/tables/prep.js");
/* harmony import */ var _glyf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./glyf */ "./src/modules/fontkit/src/tables/glyf.js");
/* harmony import */ var _cff_CFFFont__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cff/CFFFont */ "./src/modules/fontkit/src/cff/CFFFont.js");
/* harmony import */ var _VORG__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VORG */ "./src/modules/fontkit/src/tables/VORG.js");
/* harmony import */ var _EBLC__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EBLC */ "./src/modules/fontkit/src/tables/EBLC.js");
/* harmony import */ var _sbix__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sbix */ "./src/modules/fontkit/src/tables/sbix.js");
/* harmony import */ var _COLR__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./COLR */ "./src/modules/fontkit/src/tables/COLR.js");
/* harmony import */ var _CPAL__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CPAL */ "./src/modules/fontkit/src/tables/CPAL.js");
/* harmony import */ var _BASE__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./BASE */ "./src/modules/fontkit/src/tables/BASE.js");
/* harmony import */ var _GDEF__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GDEF */ "./src/modules/fontkit/src/tables/GDEF.js");
/* harmony import */ var _GPOS__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GPOS */ "./src/modules/fontkit/src/tables/GPOS.js");
/* harmony import */ var _GSUB__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./GSUB */ "./src/modules/fontkit/src/tables/GSUB.js");
/* harmony import */ var _JSTF__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./JSTF */ "./src/modules/fontkit/src/tables/JSTF.js");
/* harmony import */ var _HVAR__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./HVAR */ "./src/modules/fontkit/src/tables/HVAR.js");
/* harmony import */ var _DSIG__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./DSIG */ "./src/modules/fontkit/src/tables/DSIG.js");
/* harmony import */ var _gasp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gasp */ "./src/modules/fontkit/src/tables/gasp.js");
/* harmony import */ var _hdmx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hdmx */ "./src/modules/fontkit/src/tables/hdmx.js");
/* harmony import */ var _kern__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kern */ "./src/modules/fontkit/src/tables/kern.js");
/* harmony import */ var _LTSH__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LTSH */ "./src/modules/fontkit/src/tables/LTSH.js");
/* harmony import */ var _PCLT__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PCLT */ "./src/modules/fontkit/src/tables/PCLT.js");
/* harmony import */ var _VDMX__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./VDMX */ "./src/modules/fontkit/src/tables/VDMX.js");
/* harmony import */ var _vhea__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./vhea */ "./src/modules/fontkit/src/tables/vhea.js");
/* harmony import */ var _vmtx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./vmtx */ "./src/modules/fontkit/src/tables/vmtx.js");
/* harmony import */ var _avar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./avar */ "./src/modules/fontkit/src/tables/avar.js");
/* harmony import */ var _bsln__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bsln */ "./src/modules/fontkit/src/tables/bsln.js");
/* harmony import */ var _feat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./feat */ "./src/modules/fontkit/src/tables/feat.js");
/* harmony import */ var _fvar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fvar */ "./src/modules/fontkit/src/tables/fvar.js");
/* harmony import */ var _gvar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./gvar */ "./src/modules/fontkit/src/tables/gvar.js");
/* harmony import */ var _just__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./just */ "./src/modules/fontkit/src/tables/just.js");
/* harmony import */ var _morx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./morx */ "./src/modules/fontkit/src/tables/morx.js");
/* harmony import */ var _opbd__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./opbd */ "./src/modules/fontkit/src/tables/opbd.js");
let tables = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tables);

// Required Tables









tables.cmap = _cmap__WEBPACK_IMPORTED_MODULE_0__["default"];
tables.head = _head__WEBPACK_IMPORTED_MODULE_1__["default"];
tables.hhea = _hhea__WEBPACK_IMPORTED_MODULE_2__["default"];
tables.hmtx = _hmtx__WEBPACK_IMPORTED_MODULE_3__["default"];
tables.maxp = _maxp__WEBPACK_IMPORTED_MODULE_4__["default"];
tables.name = _name__WEBPACK_IMPORTED_MODULE_5__["default"];
tables['OS/2'] = _OS2__WEBPACK_IMPORTED_MODULE_6__["default"];
tables.post = _post__WEBPACK_IMPORTED_MODULE_7__["default"];


// TrueType Outlines






tables.fpgm = _fpgm__WEBPACK_IMPORTED_MODULE_9__["default"];
tables.loca = _loca__WEBPACK_IMPORTED_MODULE_10__["default"];
tables.prep = _prep__WEBPACK_IMPORTED_MODULE_11__["default"];
tables['cvt '] = _cvt__WEBPACK_IMPORTED_MODULE_8__["default"];
tables.glyf = _glyf__WEBPACK_IMPORTED_MODULE_12__["default"];


// PostScript Outlines



tables['CFF '] = _cff_CFFFont__WEBPACK_IMPORTED_MODULE_13__["default"];
tables['CFF2'] = _cff_CFFFont__WEBPACK_IMPORTED_MODULE_13__["default"];
tables.VORG = _VORG__WEBPACK_IMPORTED_MODULE_14__["default"];


// Bitmap Glyphs





tables.EBLC = _EBLC__WEBPACK_IMPORTED_MODULE_15__["default"];
tables.CBLC = tables.EBLC;
tables.sbix = _sbix__WEBPACK_IMPORTED_MODULE_16__["default"];
tables.COLR = _COLR__WEBPACK_IMPORTED_MODULE_17__["default"];
tables.CPAL = _CPAL__WEBPACK_IMPORTED_MODULE_18__["default"];


// Advanced OpenType Tables






tables.BASE = _BASE__WEBPACK_IMPORTED_MODULE_19__["default"];
tables.GDEF = _GDEF__WEBPACK_IMPORTED_MODULE_20__["default"];
tables.GPOS = _GPOS__WEBPACK_IMPORTED_MODULE_21__["default"];
tables.GSUB = _GSUB__WEBPACK_IMPORTED_MODULE_22__["default"];
tables.JSTF = _JSTF__WEBPACK_IMPORTED_MODULE_23__["default"];

// OpenType variations tables


tables.HVAR = _HVAR__WEBPACK_IMPORTED_MODULE_24__["default"];

// Other OpenType Tables










tables.DSIG = _DSIG__WEBPACK_IMPORTED_MODULE_25__["default"];
tables.gasp = _gasp__WEBPACK_IMPORTED_MODULE_26__["default"];
tables.hdmx = _hdmx__WEBPACK_IMPORTED_MODULE_27__["default"];
tables.kern = _kern__WEBPACK_IMPORTED_MODULE_28__["default"];
tables.LTSH = _LTSH__WEBPACK_IMPORTED_MODULE_29__["default"];
tables.PCLT = _PCLT__WEBPACK_IMPORTED_MODULE_30__["default"];
tables.VDMX = _VDMX__WEBPACK_IMPORTED_MODULE_31__["default"];
tables.vhea = _vhea__WEBPACK_IMPORTED_MODULE_32__["default"];
tables.vmtx = _vmtx__WEBPACK_IMPORTED_MODULE_33__["default"];


// Apple Advanced Typography Tables









tables.avar = _avar__WEBPACK_IMPORTED_MODULE_34__["default"];
tables.bsln = _bsln__WEBPACK_IMPORTED_MODULE_35__["default"];
tables.feat = _feat__WEBPACK_IMPORTED_MODULE_36__["default"];
tables.fvar = _fvar__WEBPACK_IMPORTED_MODULE_37__["default"];
tables.gvar = _gvar__WEBPACK_IMPORTED_MODULE_38__["default"];
tables.just = _just__WEBPACK_IMPORTED_MODULE_39__["default"];
tables.morx = _morx__WEBPACK_IMPORTED_MODULE_40__["default"];
tables.opbd = _opbd__WEBPACK_IMPORTED_MODULE_41__["default"];


/***/ }),

/***/ "./src/modules/fontkit/src/tables/just.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/just.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _aat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aat */ "./src/modules/fontkit/src/tables/aat.js");



let ClassTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  coverage: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  subFeatureFlags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  stateTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.StateTable1
});

let WidthDeltaRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  justClass: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  beforeGrowLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  beforeShrinkLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  afterGrowLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  afterShrinkLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  growFlags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  shrinkFlags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let WidthDeltaCluster = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(WidthDeltaRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint32);

let ActionData = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('actionType', {
  0: { // Decomposition action
    lowerLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
    upperLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
    order: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyphs: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)
  },

  1: { // Unconditional add glyph action
    addGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  2: { // Conditional add glyph action
    substThreshold: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
    addGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    substGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  },

  3: {}, // Stretch glyph action (no data, not supported by CoreText)

  4: { // Ductile glyph action (not supported by CoreText)
    variationAxis: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    minimumLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
    noStretchValue: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
    maximumLimit: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32
  },

  5: { // Repeated add glyph action
    flags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
  }
});

let Action = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  actionClass: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  actionType: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  actionLength: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  actionData: ActionData,
  padding: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.actionLength - t._currentOffset)
});

let PostcompensationAction = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Action, restructure__WEBPACK_IMPORTED_MODULE_0__.uint32);
let PostCompensationTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  lookupTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, PostcompensationAction))
});

let JustificationTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  classTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassTable, { type: 'parent' }),
  wdcOffset: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  postCompensationTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, PostCompensationTable, { type: 'parent' }),
  widthDeltaClusters: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, WidthDeltaCluster, { type: 'parent', relativeTo: ctx => ctx.wdcOffset }))
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  format: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  horizontal: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JustificationTable),
  vertical: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, JustificationTable)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/kern.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/kern.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let KernPair = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  left:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  right:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  value:  restructure__WEBPACK_IMPORTED_MODULE_0__.int16
});

let ClassTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  firstGlyph: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  offsets: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'nGlyphs'),
  max: t => t.offsets.length && Math.max.apply(Math, t.offsets)
});

let Kern2Array = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  off: t => t._startOffset - t.parent.parent._startOffset,
  len: t => (((t.parent.leftTable.max - t.off) / t.parent.rowWidth) + 1) * (t.parent.rowWidth / 2),
  values: new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 'len')
});

let KernSubtable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('format', {
  0: {
    nPairs:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    searchRange:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    entrySelector:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    rangeShift:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    pairs:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(KernPair, 'nPairs')
  },

  2: {
    rowWidth:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    leftTable:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassTable, {type: 'parent'}),
    rightTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassTable, {type: 'parent'}),
    array:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Kern2Array, {type: 'parent'})
  },

  3: {
    glyphCount:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    kernValueCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    leftClassCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    rightClassCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    flags:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    kernValue:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 'kernValueCount'),
    leftClass:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 'glyphCount'),
    rightClass:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 'glyphCount'),
    kernIndex:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.leftClassCount * t.rightClassCount)
  }
});

let KernTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('version', {
  0: { // Microsoft uses this format
    subVersion: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Microsoft has an extra sub-table version number
    length:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Length of the subtable, in bytes
    format:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,   // Format of subtable
    coverage:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, [
      'horizontal',    // 1 if table has horizontal data, 0 if vertical
      'minimum',       // If set to 1, the table has minimum values. If set to 0, the table has kerning values.
      'crossStream',   // If set to 1, kerning is perpendicular to the flow of the text
      'override'      // If set to 1 the value in this table replaces the accumulated value
    ]),
    subtable:   KernSubtable,
    padding: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.length - t._currentOffset)
  },
  1: { // Apple uses this format
    length:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    coverage:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, [
      null, null, null, null, null,
      'variation',     // Set if table has variation kerning values
      'crossStream',   // Set if table has cross-stream kerning values
      'vertical'      // Set if table has vertical kerning values
    ]),
    format:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
    tupleIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    subtable:   KernSubtable,
    padding: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.length - t._currentOffset)
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  0: { // Microsoft Version
    nTables:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    tables:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(KernTable, 'nTables')
  },

  1: { // Apple Version
    reserved:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16), // the other half of the version number
    nTables:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
    tables:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(KernTable, 'nTables')
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/loca.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/loca.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let loca = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('head.indexToLocFormat', {
  0: {
    offsets: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)
  },
  1: {
    offsets: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32)
  }
});

loca.process = function() {
  if (this.version === 0 && !this._processed) {
    for (let i = 0; i < this.offsets.length; i++) {
      this.offsets[i] <<= 1;
    }
    this._processed = true;
  }
};

loca.preEncode = function() {
  if (this.version === 0 && this._processed !== false) {
    for (let i = 0; i < this.offsets.length; i++) {
      this.offsets[i] >>>= 1;
    }
    this._processed = false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loca);


/***/ }),

/***/ "./src/modules/fontkit/src/tables/maxp.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/maxp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// maxiumum profile
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:                restructure__WEBPACK_IMPORTED_MODULE_0__.int32,
  numGlyphs:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // The number of glyphs in the font
  maxPoints:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum points in a non-composite glyph
  maxContours:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum contours in a non-composite glyph
  maxComponentPoints:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum points in a composite glyph
  maxComponentContours:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum contours in a composite glyph
  maxZones:               restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // 1 if instructions do not use the twilight zone, 2 otherwise
  maxTwilightPoints:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum points used in Z0
  maxStorage:             restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Number of Storage Area locations
  maxFunctionDefs:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Number of FDEFs
  maxInstructionDefs:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Number of IDEFs
  maxStackElements:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum stack depth
  maxSizeOfInstructions:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum byte count for glyph instructions
  maxComponentElements:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Maximum number of components referenced at “top level” for any composite glyph
  maxComponentDepth:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16   // Maximum levels of recursion; 1 for simple components
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/morx.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/morx.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _aat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aat */ "./src/modules/fontkit/src/tables/aat.js");



let LigatureData = {
  action: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
};

let ContextualData = {
  markIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  currentIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
};

let InsertionData = {
  currentInsertIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  markedInsertIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
};

let SubstitutionTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  items: new _aat__WEBPACK_IMPORTED_MODULE_1__.UnboundedArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable))
});

let SubtableData = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct('type', {
  0: { // Indic Rearrangement Subtable
    stateTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.StateTable
  },

  1: { // Contextual Glyph Substitution Subtable
    stateTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.StateTable(ContextualData),
    substitutionTable: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, SubstitutionTable)
  },

  2: { // Ligature subtable
    stateTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.StateTable(LigatureData),
    ligatureActions: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new _aat__WEBPACK_IMPORTED_MODULE_1__.UnboundedArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32)),
    components: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new _aat__WEBPACK_IMPORTED_MODULE_1__.UnboundedArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16)),
    ligatureList: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new _aat__WEBPACK_IMPORTED_MODULE_1__.UnboundedArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16))
  },

  4: { // Non-contextual Glyph Substitution Subtable
    lookupTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable
  },

  5: { // Glyph Insertion Subtable
    stateTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.StateTable(InsertionData),
    insertionActions: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, new _aat__WEBPACK_IMPORTED_MODULE_1__.UnboundedArray(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16))
  }
});

let Subtable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  length: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  coverage: restructure__WEBPACK_IMPORTED_MODULE_0__.uint24,
  type: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  subFeatureFlags: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  table: SubtableData,
  padding: new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, t => t.length - t._currentOffset)
});

let FeatureEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  featureType:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  featureSetting: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  enableFlags:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  disableFlags:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint32
});

let MorxChain = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  defaultFlags:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  chainLength:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  nFeatureEntries:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  nSubtables:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  features:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FeatureEntry, 'nFeatureEntries'),
  subtables:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(Subtable, 'nSubtables')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  unused:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  nChains:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  chains:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(MorxChain, 'nChains')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/name.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/name.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _encodings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encodings */ "./src/modules/fontkit/src/encodings.js");



let NameRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  platformID: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  encodingID: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  languageID: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  nameID:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  length:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  string:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    new restructure__WEBPACK_IMPORTED_MODULE_0__.String('length', t => (0,_encodings__WEBPACK_IMPORTED_MODULE_1__.getEncoding)(t.platformID, t.encodingID, t.languageID)),
    { type: 'parent', relativeTo: ctx => ctx.parent.stringOffset, allowNull: false }
  )
});

let LangTagRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  length:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  tag:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, new restructure__WEBPACK_IMPORTED_MODULE_0__.String('length', 'utf16be'), {type: 'parent', relativeTo: ctx => ctx.stringOffset})
});

var NameTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  0: {
    count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    stringOffset:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    records:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(NameRecord, 'count')
  },
  1: {
    count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    stringOffset:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    records:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(NameRecord, 'count'),
    langTagCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    langTags:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LangTagRecord, 'langTagCount')
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameTable);

const NAMES = [
  'copyright',
  'fontFamily',
  'fontSubfamily',
  'uniqueSubfamily',
  'fullName',
  'version',
  'postscriptName', // Note: A font may have only one PostScript name and that name must be ASCII.
  'trademark',
  'manufacturer',
  'designer',
  'description',
  'vendorURL',
  'designerURL',
  'license',
  'licenseURL',
  null, // reserved
  'preferredFamily',
  'preferredSubfamily',
  'compatibleFull',
  'sampleText',
  'postscriptCIDFontName',
  'wwsFamilyName',
  'wwsSubfamilyName'
];

NameTable.process = function(stream) {
  var records = {};
  for (let record of this.records) {
    // find out what language this is for
    let language = _encodings__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES[record.platformID][record.languageID];

    if (language == null && this.langTags != null && record.languageID >= 0x8000) {
      language = this.langTags[record.languageID - 0x8000].tag;
    }

    if (language == null) {
      language = record.platformID + '-' + record.languageID;
    }

    // if the nameID is >= 256, it is a font feature record (AAT)
    let key = record.nameID >= 256 ? 'fontFeatures' : (NAMES[record.nameID] || record.nameID);
    if (records[key] == null) {
      records[key] = {};
    }

    let obj = records[key];
    if (record.nameID >= 256) {
      obj = obj[record.nameID] || (obj[record.nameID] = {});
    }

    if (typeof record.string === 'string' || typeof obj[language] !== 'string') {
      obj[language] = record.string;
    }
  }

  this.records = records;
};

NameTable.preEncode = function() {
  if (Array.isArray(this.records)) return;
  this.version = 0;

  let records = [];
  for (let key in this.records) {
    let val = this.records[key];
    if (key === 'fontFeatures') continue;

    records.push({
      platformID: 3,
      encodingID: 1,
      languageID: 0x409,
      nameID: NAMES.indexOf(key),
      length: val.en.length * 2,
      string: val.en
    });

    if (key === 'postscriptName') {
      records.push({
        platformID: 1,
        encodingID: 0,
        languageID: 0,
        nameID: NAMES.indexOf(key),
        length: val.en.length,
        string: val.en
      });
    }
  }

  this.records = records;
  this.count = records.length;
  this.stringOffset = NameTable.size(this, null, false);
};


/***/ }),

/***/ "./src/modules/fontkit/src/tables/opbd.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/opbd.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");
/* harmony import */ var _aat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aat */ "./src/modules/fontkit/src/tables/aat.js");



let OpticalBounds = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  left: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  top: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  right: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  bottom: restructure__WEBPACK_IMPORTED_MODULE_0__.int16
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32,
  format: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupTable: new _aat__WEBPACK_IMPORTED_MODULE_1__.LookupTable(OpticalBounds)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/opentype.js":
/*!****************************************************!*\
  !*** ./src/modules/fontkit/src/tables/opentype.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChainingContext: () => (/* binding */ ChainingContext),
/* harmony export */   ClassDef: () => (/* binding */ ClassDef),
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   Coverage: () => (/* binding */ Coverage),
/* harmony export */   Device: () => (/* binding */ Device),
/* harmony export */   Feature: () => (/* binding */ Feature),
/* harmony export */   FeatureList: () => (/* binding */ FeatureList),
/* harmony export */   LookupList: () => (/* binding */ LookupList),
/* harmony export */   ScriptList: () => (/* binding */ ScriptList)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


//########################
// Scripts and Languages #
//########################

let LangSysTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  reserved:         new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16),
  reqFeatureIndex:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  featureCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  featureIndexes:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'featureCount')
});

let LangSysRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:      new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  langSys:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LangSysTable, { type: 'parent' })
});

let Script = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  defaultLangSys: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, LangSysTable),
  count:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  langSysRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LangSysRecord, 'count')
});

let ScriptRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:    new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  script: new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Script, { type: 'parent' })
});

let ScriptList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ScriptRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

//#######################
// Features and Lookups #
//#######################

let FeatureParams = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, // should be set to 0 according OT spec
  nameID:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, //OT spec: UI Name ID or uiLabelNameId
});

let Feature = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  featureParams:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, FeatureParams),
  lookupCount:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupListIndexes:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'lookupCount')
});

let FeatureRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  tag:      new restructure__WEBPACK_IMPORTED_MODULE_0__.String(4),
  feature:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Feature, { type: 'parent' })
});

let FeatureList = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(FeatureRecord, restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let LookupFlags = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  markAttachmentType: restructure__WEBPACK_IMPORTED_MODULE_0__.uint8,
  flags: new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, [
    'rightToLeft', 'ignoreBaseGlyphs', 'ignoreLigatures',
    'ignoreMarks', 'useMarkFilteringSet'
  ])
});

function LookupList(SubTable) {
  let Lookup = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
    lookupType:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    flags:              LookupFlags,
    subTableCount:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    subTables:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, SubTable), 'subTableCount'),
    markFilteringSet:   new restructure__WEBPACK_IMPORTED_MODULE_0__.Optional(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.flags.flags.useMarkFilteringSet)
  });

  return new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Lookup), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);
}

//#################
// Coverage Table #
//#################

let RangeRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  start:              restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  end:                restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  startCoverageIndex: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let Coverage = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: {
    glyphCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyphs:       new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'glyphCount')
  },
  2: {
    rangeCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    rangeRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(RangeRecord, 'rangeCount')
  }
});

//#########################
// Class Definition Table #
//#########################

let ClassRangeRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  start:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  end:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  class:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let ClassDef = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Class array
    startGlyph:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyphCount:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    classValueArray:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'glyphCount')
  },
  2: { // Class ranges
    classRangeCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    classRangeRecord: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(ClassRangeRecord, 'classRangeCount')
  }
});

//###############
// Device Table #
//###############

let Device = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  a: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, // startSize for hinting Device, outerIndex for VariationIndex
  b: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, // endSize for Device, innerIndex for VariationIndex
  deltaFormat: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

//#############################################
// Contextual Substitution/Positioning Tables #
//#############################################

let LookupRecord = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  sequenceIndex:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupListIndex:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16
});

let Rule = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyphCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  input:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.glyphCount - 1),
  lookupRecords:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupRecord, 'lookupCount')
});

let RuleSet = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Rule), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let ClassRule = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  glyphCount:     restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  classes:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.glyphCount - 1),
  lookupRecords:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupRecord, 'lookupCount')
});

let ClassSet = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassRule), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let Context = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Simple context
    coverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage),
    ruleSetCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    ruleSets:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, RuleSet), 'ruleSetCount')
  },
  2: { // Class-based context
    coverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage),
    classDef:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassDef),
    classSetCnt:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    classSet:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassSet), 'classSetCnt')
  },
  3: {
    glyphCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookupCount:   restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    coverages:     new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage), 'glyphCount'),
    lookupRecords: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupRecord, 'lookupCount')
  }
});

//######################################################
// Chaining Contextual Substitution/Positioning Tables #
//######################################################

let ChainRule = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  backtrackGlyphCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  backtrack:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'backtrackGlyphCount'),
  inputGlyphCount:      restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  input:                new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, t => t.inputGlyphCount - 1),
  lookaheadGlyphCount:  restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookahead:            new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'lookaheadGlyphCount'),
  lookupCount:          restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  lookupRecords:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupRecord, 'lookupCount')
});

let ChainRuleSet = new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ChainRule), restructure__WEBPACK_IMPORTED_MODULE_0__.uint16);

let ChainingContext = new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, {
  1: { // Simple context glyph substitution
    coverage:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage),
    chainCount:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    chainRuleSets:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ChainRuleSet), 'chainCount')
  },

  2: { // Class-based chaining context
    coverage:           new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage),
    backtrackClassDef:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassDef),
    inputClassDef:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassDef),
    lookaheadClassDef:  new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ClassDef),
    chainCount:         restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    chainClassSet:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ChainRuleSet), 'chainCount')
  },

  3: { // Coverage-based chaining context
    backtrackGlyphCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    backtrackCoverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage), 'backtrackGlyphCount'),
    inputGlyphCount:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    inputCoverage:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage), 'inputGlyphCount'),
    lookaheadGlyphCount:    restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookaheadCoverage:      new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, Coverage), 'lookaheadGlyphCount'),
    lookupCount:            restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    lookupRecords:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(LookupRecord, 'lookupCount')
  }
});


/***/ }),

/***/ "./src/modules/fontkit/src/tables/post.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/post.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// PostScript information
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32, {
  header: { // these fields exist at the top of all versions
    italicAngle:        restructure__WEBPACK_IMPORTED_MODULE_0__.fixed32, // Italic angle in counter-clockwise degrees from the vertical.
    underlinePosition:  restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Suggested distance of the top of the underline from the baseline
    underlineThickness: restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Suggested values for the underline thickness
    isFixedPitch:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Whether the font is monospaced
    minMemType42:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Minimum memory usage when a TrueType font is downloaded as a Type 42 font
    maxMemType42:       restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Maximum memory usage when a TrueType font is downloaded as a Type 42 font
    minMemType1:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,  // Minimum memory usage when a TrueType font is downloaded as a Type 1 font
    maxMemType1:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint32   // Maximum memory usage when a TrueType font is downloaded as a Type 1 font
  },

  1: {}, // version 1 has no additional fields

  2: {
    numberOfGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    glyphNameIndex: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, 'numberOfGlyphs'),
    names:          new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.String(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8))
  },

  2.5: {
    numberOfGlyphs: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
    offsets:        new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8, 'numberOfGlyphs')
  },

  3: {}, // version 3 has no additional fields

  4: {
    map: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, t => t.parent.maxp.numGlyphs)
  }
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/prep.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/prep.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// Set of instructions executed whenever the point size or font transformation change
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  controlValueProgram: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(restructure__WEBPACK_IMPORTED_MODULE_0__.uint8)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/sbix.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/sbix.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let ImageTable = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  ppem: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  resolution: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  imageOffsets: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, 'void'), t => t.parent.parent.maxp.numGlyphs + 1)
});

// This is the Apple sbix table, used by the "Apple Color Emoji" font.
// It includes several image tables with images for each bitmap glyph
// of several different sizes.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,
  flags: new restructure__WEBPACK_IMPORTED_MODULE_0__.Bitfield(restructure__WEBPACK_IMPORTED_MODULE_0__.uint16, ['renderOutlines']),
  numImgTables: restructure__WEBPACK_IMPORTED_MODULE_0__.uint32,
  imageTables: new restructure__WEBPACK_IMPORTED_MODULE_0__.Array(new restructure__WEBPACK_IMPORTED_MODULE_0__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_0__.uint32, ImageTable), 'numImgTables')
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/variations.js":
/*!******************************************************!*\
  !*** ./src/modules/fontkit/src/tables/variations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureVariations: () => (/* binding */ FeatureVariations),
/* harmony export */   ItemVariationStore: () => (/* binding */ ItemVariationStore)
/* harmony export */ });
/* harmony import */ var _opentype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opentype */ "./src/modules/fontkit/src/tables/opentype.js");
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");



/*******************
 * Variation Store *
 *******************/

let F2DOT14 = new restructure__WEBPACK_IMPORTED_MODULE_1__.Fixed(16, 'BE', 14);
let RegionAxisCoordinates = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  startCoord: F2DOT14,
  peakCoord: F2DOT14,
  endCoord: F2DOT14
});

let VariationRegionList = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  axisCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  regionCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  variationRegions: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(RegionAxisCoordinates, 'axisCount'), 'regionCount')
});

let DeltaSet = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  shortDeltas: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(restructure__WEBPACK_IMPORTED_MODULE_1__.int16, t => t.parent.shortDeltaCount),
  regionDeltas: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(restructure__WEBPACK_IMPORTED_MODULE_1__.int8, t => t.parent.regionIndexCount - t.parent.shortDeltaCount),
  deltas: t => t.shortDeltas.concat(t.regionDeltas)
});

let ItemVariationData = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  itemCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  shortDeltaCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  regionIndexCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  regionIndexes: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(restructure__WEBPACK_IMPORTED_MODULE_1__.uint16, 'regionIndexCount'),
  deltaSets: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(DeltaSet, 'itemCount')
});

let ItemVariationStore = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  format: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  variationRegionList: new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, VariationRegionList),
  variationDataCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  itemVariationData: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, ItemVariationData), 'variationDataCount')
});

/**********************
 * Feature Variations *
 **********************/

let ConditionTable = new restructure__WEBPACK_IMPORTED_MODULE_1__.VersionedStruct(restructure__WEBPACK_IMPORTED_MODULE_1__.uint16, {
  1: {
    axisIndex: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
    axisIndex: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
    filterRangeMinValue: F2DOT14,
    filterRangeMaxValue: F2DOT14
  }
});

let ConditionSet = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  conditionCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  conditionTable: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, ConditionTable), 'conditionCount')
});

let FeatureTableSubstitutionRecord = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  featureIndex: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  alternateFeatureTable: new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, _opentype__WEBPACK_IMPORTED_MODULE_0__.Feature, {type: 'parent'})
});

let FeatureTableSubstitution = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  version: restructure__WEBPACK_IMPORTED_MODULE_1__.fixed32,
  substitutionCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  substitutions: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(FeatureTableSubstitutionRecord, 'substitutionCount')
});

let FeatureVariationRecord = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  conditionSet: new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, ConditionSet, {type: 'parent'}),
  featureTableSubstitution: new restructure__WEBPACK_IMPORTED_MODULE_1__.Pointer(restructure__WEBPACK_IMPORTED_MODULE_1__.uint32, FeatureTableSubstitution, {type: 'parent'})
});

let FeatureVariations = new restructure__WEBPACK_IMPORTED_MODULE_1__.Struct({
  majorVersion: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  minorVersion: restructure__WEBPACK_IMPORTED_MODULE_1__.uint16,
  featureVariationRecordCount: restructure__WEBPACK_IMPORTED_MODULE_1__.uint32,
  featureVariationRecords: new restructure__WEBPACK_IMPORTED_MODULE_1__.Array(FeatureVariationRecord, 'featureVariationRecordCount')
});


/***/ }),

/***/ "./src/modules/fontkit/src/tables/vhea.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/vhea.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


// Vertical Header Table
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  version:                restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // Version number of the Vertical Header Table
  ascent:                 restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The vertical typographic ascender for this font
  descent:                restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The vertical typographic descender for this font
  lineGap:                restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The vertical typographic line gap for this font
  advanceHeightMax:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The maximum advance height measurement found in the font
  minTopSideBearing:      restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The minimum top side bearing measurement found in the font
  minBottomSideBearing:   restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // The minimum bottom side bearing measurement found in the font
  yMaxExtent:             restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  caretSlopeRise:         restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Caret slope (rise/run)
  caretSlopeRun:          restructure__WEBPACK_IMPORTED_MODULE_0__.int16,
  caretOffset:            restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Set value equal to 0 for nonslanted fonts
  reserved:               new restructure__WEBPACK_IMPORTED_MODULE_0__.Reserved(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, 4),
  metricDataFormat:       restructure__WEBPACK_IMPORTED_MODULE_0__.int16,   // Set to 0
  numberOfMetrics:        restructure__WEBPACK_IMPORTED_MODULE_0__.uint16   // Number of advance heights in the Vertical Metrics table
}));


/***/ }),

/***/ "./src/modules/fontkit/src/tables/vmtx.js":
/*!************************************************!*\
  !*** ./src/modules/fontkit/src/tables/vmtx.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var restructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! restructure */ "./node_modules/restructure/index.js");


let VmtxEntry = new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  advance: restructure__WEBPACK_IMPORTED_MODULE_0__.uint16,  // The advance height of the glyph
  bearing: restructure__WEBPACK_IMPORTED_MODULE_0__.int16    // The top sidebearing of the glyph
});

// Vertical Metrics Table
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new restructure__WEBPACK_IMPORTED_MODULE_0__.Struct({
  metrics:  new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(VmtxEntry, t => t.parent.vhea.numberOfMetrics),
  bearings: new restructure__WEBPACK_IMPORTED_MODULE_0__.LazyArray(restructure__WEBPACK_IMPORTED_MODULE_0__.int16, t => t.parent.maxp.numGlyphs - t.parent.vhea.numberOfMetrics)
}));


/***/ }),

/***/ "./src/modules/fontkit/src/utils.js":
/*!******************************************!*\
  !*** ./src/modules/fontkit/src/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asciiDecoder: () => (/* binding */ asciiDecoder),
/* harmony export */   binarySearch: () => (/* binding */ binarySearch),
/* harmony export */   decodeBase64: () => (/* binding */ decodeBase64),
/* harmony export */   range: () => (/* binding */ range)
/* harmony export */ });
function binarySearch(arr, cmp) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = (min + max) >> 1;
    let res = cmp(arr[mid]);

    if (res < 0) {
      max = mid - 1;
    } else if (res > 0) {
      min = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function range(index, end) {
  let range = [];
  while (index < end) {
    range.push(index++);
  }
  return range;
}

const asciiDecoder = new TextDecoder('ascii');

// Based on https://github.com/niklasvh/base64-arraybuffer. MIT license.
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const LOOKUP = new Uint8Array(256);
for (let i = 0; i < CHARS.length; i++) {
  LOOKUP[CHARS.charCodeAt(i)] = i;
}

function decodeBase64(base64) {
  let bufferLength = base64.length * 0.75;

  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }

  let bytes = new Uint8Array(bufferLength);
  let p = 0;

  for (let i = 0, len = base64.length; i < len; i += 4) {
    let encoded1 = LOOKUP[base64.charCodeAt(i)];
    let encoded2 = LOOKUP[base64.charCodeAt(i + 1)];
    let encoded3 = LOOKUP[base64.charCodeAt(i + 2)];
    let encoded4 = LOOKUP[base64.charCodeAt(i + 3)];

    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
    bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
  }

  return bytes;
}


/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/indic.json":
/*!*************************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/indic.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,14,15,16,17],[0,0,0,18,19,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,28,29,30,31,32,33,0,34,0,0,35,36,0,0,37,0],[0,0,0,38,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,39,0,0,0,40,41,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,12,43,0,0,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,0,43,0,0,0,0],[0,0,0,45,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,50,0,0,51,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0],[0,0,0,53,54,55,56,57,58,0,59,0,0,60,61,0,0,62,0],[0,0,0,4,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,63,64,0,0,40,41,0,9,0,10,0,0,0,42,0,63,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,0,2,16,0],[0,0,0,18,65,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,0,0],[0,0,0,69,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,73,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,75,0,0,0,76,77,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,25,79,0,0,0,0],[0,0,0,18,19,20,74,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,81,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,86,0,0,87,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0],[0,0,0,18,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,89,90,0,0,76,77,0,23,0,24,0,0,0,78,0,89,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,0,0],[0,0,0,94,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,96,0,0,0,97,98,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,35,100,0,0,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,102,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,107,0,0,108,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,109,0,0,0,0,0,0,0,0],[0,0,0,28,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,110,111,0,0,97,98,0,33,0,34,0,0,0,99,0,110,0,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,0,0],[0,0,0,0,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,0,0,115,116,117,118,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,39,0,122,0,123,123,8,9,0,10,0,0,0,42,0,39,0,0],[0,124,64,0,0,0,0,0,0,0,0,0,0,0,0,0,124,0,0],[0,39,0,0,0,121,125,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,126,126,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,47,47,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,128,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,129,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,50,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0],[0,0,0,135,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,136,0,0,0,137,138,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,60,140,0,0,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,0,140,0,0,0,0],[0,0,0,142,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,147,0,0,148,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0],[0,0,0,53,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,150,151,0,0,137,138,0,58,0,59,0,0,0,139,0,150,0,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,0,0],[0,0,0,155,116,156,157,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,75,3,4,5,159,160,8,161,0,162,0,11,12,163,0,75,16,0],[0,0,0,0,0,40,164,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,0,165,0,0,0,0],[0,124,64,0,0,40,164,0,9,0,10,0,0,0,42,0,124,0,0],[0,0,0,0,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,167,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,168,0,0,0,0,0,0,0,0],[0,0,0,0,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,0,79,0,0,0,0],[0,0,0,169,170,171,172,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,75,0,176,0,177,177,22,23,0,24,0,0,0,78,0,75,0,0],[0,178,90,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0],[0,75,0,0,0,175,179,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,180,180,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,83,83,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,182,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,183,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,86,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,188,0,0,0,0,0,0,0,0],[0,0,0,189,170,190,191,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,76,193,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,0,194,0,0,0,0],[0,178,90,0,0,76,193,0,23,0,24,0,0,0,78,0,178,0,0],[0,0,0,0,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,195,196,197,198,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,96,0,202,0,203,203,32,33,0,34,0,0,0,99,0,96,0,0],[0,204,111,0,0,0,0,0,0,0,0,0,0,0,0,0,204,0,0],[0,96,0,0,0,201,205,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,206,206,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,104,104,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,208,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,209,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,107,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,0],[0,0,0,215,196,216,217,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,97,219,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,0,220,0,0,0,0],[0,204,111,0,0,97,219,0,33,0,34,0,0,0,99,0,204,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,223,0,0,0,40,224,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,119,225,0,0,0,0],[0,0,0,115,116,117,222,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,115,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,226,64,0,0,40,224,0,9,0,10,0,0,0,42,0,226,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,39,0,0,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,44,44,8,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,227,0,228,229,0,9,0,10,0,0,230,0,0,0,0,0],[0,39,0,122,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,231,231,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,131,131,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,234,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,235,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,0,0,240,241,242,243,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,136,0,247,0,248,248,57,58,0,59,0,0,0,139,0,136,0,0],[0,249,151,0,0,0,0,0,0,0,0,0,0,0,0,0,249,0,0],[0,136,0,0,0,246,250,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,251,251,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,144,144,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,253,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,254,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,147,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,259,0,0,0,0,0,0,0,0],[0,0,0,260,241,261,262,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,137,264,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,0,265,0,0,0,0],[0,249,151,0,0,137,264,0,58,0,59,0,0,0,139,0,249,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,158,225,0,0,0,0],[0,0,0,155,116,156,222,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,155,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,43,266,266,8,161,0,24,0,0,12,267,0,0,0,0],[0,75,0,176,43,268,268,269,161,0,24,0,0,0,267,0,75,0,0],[0,0,0,0,0,270,0,0,271,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,272,0,0,0,0,0,0,0,0],[0,273,274,0,0,40,41,0,9,0,10,0,0,0,42,0,273,0,0],[0,0,0,40,0,123,123,8,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,121,275,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,276,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,279,0,0,0,76,280,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,173,281,0,0,0,0],[0,0,0,169,170,171,278,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,169,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,282,90,0,0,76,280,0,23,0,24,0,0,0,78,0,282,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,75,0,0,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,80,80,22,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,283,0,284,285,0,23,0,24,0,0,286,0,0,0,0,0],[0,75,0,176,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,287,287,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,288,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,185,185,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,290,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,291,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,192,281,0,0,0,0],[0,0,0,189,170,190,278,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,189,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,76,0,177,177,22,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,175,296,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,299,0,0,0,97,300,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,199,301,0,0,0,0],[0,0,0,195,196,197,298,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,195,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,302,111,0,0,97,300,0,33,0,34,0,0,0,99,0,302,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,96,0,0,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,101,101,32,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,303,0,304,305,0,33,0,34,0,0,306,0,0,0,0,0],[0,96,0,202,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,307,307,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,211,211,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,310,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,311,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,218,301,0,0,0,0],[0,0,0,215,196,216,298,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,215,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,97,0,203,203,32,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,201,316,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,0,225,0,0,0,0],[0,0,0,317,318,319,320,8,9,0,10,0,0,321,322,0,0,16,0],[0,223,0,323,0,123,123,8,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,0,0,121,324,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,325,318,326,327,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,64,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,230,0,0,0,0,0],[0,0,0,227,0,228,121,0,9,0,10,0,0,230,0,0,0,0,0],[0,0,0,227,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0],[0,0,0,0,0,329,329,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,237,237,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,332,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,333,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,337,0,0,0,137,338,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,244,339,0,0,0,0],[0,0,0,240,241,242,336,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,240,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,340,151,0,0,137,338,0,58,0,59,0,0,0,139,0,340,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,136,0,0,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,141,141,57,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,341,0,342,343,0,58,0,59,0,0,344,0,0,0,0,0],[0,136,0,247,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,345,345,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,346,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,256,256,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,348,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,349,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,263,339,0,0,0,0],[0,0,0,260,241,261,336,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,260,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,137,0,248,248,57,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,246,354,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,126,126,8,23,0,0,0,0,0,0,0,0,0,0],[0,355,90,0,0,121,125,0,9,0,10,0,0,0,42,0,355,0,0],[0,0,0,0,0,356,356,269,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,357,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,270,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,363,0,0,0,0,0,0,0,0],[0,0,0,364,116,365,366,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,40,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,0,281,0,0,0,0],[0,0,0,369,370,371,372,22,23,0,24,0,0,373,374,0,0,27,0],[0,279,0,375,0,177,177,22,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,0,0,175,376,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,377,370,378,379,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,90,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,286,0,0,0,0,0],[0,0,0,283,0,284,175,0,23,0,24,0,0,286,0,0,0,0,0],[0,0,0,283,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,0,0],[0,0,0,0,0,381,381,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,382,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,293,293,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,384,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,385,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,76,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,0,301,0,0,0,0],[0,0,0,387,388,389,390,32,33,0,34,0,0,391,392,0,0,37,0],[0,299,0,393,0,203,203,32,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,0,0,201,394,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,395,388,396,397,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,111,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,306,0,0,0,0,0],[0,0,0,303,0,304,201,0,33,0,34,0,0,306,0,0,0,0,0],[0,0,0,303,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,0,0],[0,0,0,0,0,399,399,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,313,313,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,402,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,403,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,97,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,407,0,0,0,40,408,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,321,409,0,0,0,0],[0,0,0,317,318,319,406,8,9,0,10,0,0,321,322,0,0,16,0],[0,0,0,317,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,410,64,0,0,40,408,0,9,0,10,0,0,0,42,0,410,0,0],[0,223,0,0,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,323,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,328,409,0,0,0,0],[0,0,0,325,318,326,406,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,325,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0],[0,0,0,0,0,411,411,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,412,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,413,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,0,339,0,0,0,0],[0,0,0,414,415,416,417,57,58,0,59,0,0,418,419,0,0,62,0],[0,337,0,420,0,248,248,57,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,0,0,246,421,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,422,415,423,424,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,151,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,344,0,0,0,0,0],[0,0,0,341,0,342,246,0,58,0,59,0,0,344,0,0,0,0,0],[0,0,0,341,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,0,0],[0,0,0,0,0,426,426,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,427,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,351,351,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,429,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,430,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,137,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,432,116,433,434,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,0,0,180,180,269,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,359,359,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,437,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,438,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,443,274,0,0,0,0,0,0,0,0,0,0,0,0,0,443,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,367,225,0,0,0,0],[0,0,0,364,116,365,445,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,364,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,448,0,0,0,76,449,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,373,450,0,0,0,0],[0,0,0,369,370,371,447,22,23,0,24,0,0,373,374,0,0,27,0],[0,0,0,369,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,451,90,0,0,76,449,0,23,0,24,0,0,0,78,0,451,0,0],[0,279,0,0,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,375,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,380,450,0,0,0,0],[0,0,0,377,370,378,447,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,377,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0],[0,0,0,0,0,452,452,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,453,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,454,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,457,0,0,0,97,458,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,391,459,0,0,0,0],[0,0,0,387,388,389,456,32,33,0,34,0,0,391,392,0,0,37,0],[0,0,0,387,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,460,111,0,0,97,458,0,33,0,34,0,0,0,99,0,460,0,0],[0,299,0,0,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,393,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,398,459,0,0,0,0],[0,0,0,395,388,396,456,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,395,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0],[0,0,0,0,0,461,461,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,462,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,463,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,0,409,0,0,0,0],[0,0,0,464,465,466,467,8,9,0,10,0,0,468,469,0,0,16,0],[0,407,0,470,0,123,123,8,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,0,0,121,471,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,472,465,473,474,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,0,0,0,0,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,236,0,0],[0,0,0,0,0,0,476,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,479,0,0,0,137,480,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,418,481,0,0,0,0],[0,0,0,414,415,416,478,57,58,0,59,0,0,418,419,0,0,62,0],[0,0,0,414,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,482,151,0,0,137,480,0,58,0,59,0,0,0,139,0,482,0,0],[0,337,0,0,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,420,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,425,481,0,0,0,0],[0,0,0,422,415,423,478,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,422,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0],[0,0,0,0,0,483,483,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,484,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,485,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,435,225,0,0,0,0],[0,0,0,432,116,433,445,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,432,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,486,486,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,487,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,440,440,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,489,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,490,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,495,0,496,497,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,0,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,0,225,0,0,0,0],[0,0,0,0,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,0,450,0,0,0,0],[0,0,0,499,500,501,502,22,23,0,24,0,0,503,504,0,0,27,0],[0,448,0,505,0,177,177,22,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,0,0,175,506,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,507,500,508,509,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,0,0,0,0,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,292,0,0],[0,0,0,0,0,0,511,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,0,459,0,0,0,0],[0,0,0,512,513,514,515,32,33,0,34,0,0,516,517,0,0,37,0],[0,457,0,518,0,203,203,32,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,0,0,201,519,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,520,513,521,522,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,0,0,0,0,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,312,0,0],[0,0,0,0,0,0,524,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,527,0,0,0,40,528,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,468,529,0,0,0,0],[0,0,0,464,465,466,526,8,9,0,10,0,0,468,469,0,0,16,0],[0,0,0,464,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,530,64,0,0,40,528,0,9,0,10,0,0,0,42,0,530,0,0],[0,407,0,0,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,470,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,475,529,0,0,0,0],[0,0,0,472,465,473,526,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,472,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0],[0,0,0,0,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,0,481,0,0,0,0],[0,0,0,531,532,533,534,57,58,0,59,0,0,535,536,0,0,62,0],[0,479,0,537,0,248,248,57,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,0,0,246,538,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,539,532,540,541,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,0,0,0,0,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350,0,0],[0,0,0,0,0,0,543,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,358,0,0],[0,0,0,0,0,544,544,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,545,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,492,492,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,547,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,548,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,274,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,498,0,0,0,0,0],[0,0,0,495,0,496,368,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,495,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,553,0,0,0,76,554,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,503,555,0,0,0,0],[0,0,0,499,500,501,552,22,23,0,24,0,0,503,504,0,0,27,0],[0,0,0,499,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,556,90,0,0,76,554,0,23,0,24,0,0,0,78,0,556,0,0],[0,448,0,0,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,505,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,510,555,0,0,0,0],[0,0,0,507,500,508,552,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,507,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,559,0,0,0,97,560,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,516,561,0,0,0,0],[0,0,0,512,513,514,558,32,33,0,34,0,0,516,517,0,0,37,0],[0,0,0,512,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,562,111,0,0,97,560,0,33,0,34,0,0,0,99,0,562,0,0],[0,457,0,0,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,518,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,523,561,0,0,0,0],[0,0,0,520,513,521,558,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,520,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0],[0,0,0,0,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,0,529,0,0,0,0],[0,0,0,563,66,564,565,8,9,0,10,0,0,566,68,0,0,16,0],[0,527,0,567,0,123,123,8,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,0,0,121,568,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,569,66,570,571,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,575,0,0,0,137,576,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,535,577,0,0,0,0],[0,0,0,531,532,533,574,57,58,0,59,0,0,535,536,0,0,62,0],[0,0,0,531,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,578,151,0,0,137,576,0,58,0,59,0,0,0,139,0,578,0,0],[0,479,0,0,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,537,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,542,577,0,0,0,0],[0,0,0,539,532,540,574,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,539,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,137,0,0],[0,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,439,0,0],[0,0,0,0,0,579,579,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,580,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,581,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,0,555,0,0,0,0],[0,0,0,582,91,583,584,22,23,0,24,0,0,585,93,0,0,27,0],[0,553,0,586,0,177,177,22,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,0,0,175,587,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,588,91,589,590,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,0,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,0,561,0,0,0,0],[0,0,0,592,112,593,594,32,33,0,34,0,0,595,114,0,0,37,0],[0,559,0,596,0,203,203,32,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,0,0,201,597,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,598,112,599,600,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,566,165,0,0,0,0],[0,0,0,563,66,564,67,8,9,0,10,0,0,566,68,0,0,16,0],[0,0,0,563,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,527,0,0,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,567,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,572,165,0,0,0,0],[0,0,0,569,66,570,67,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,569,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,0,577,0,0,0,0],[0,0,0,603,152,604,605,57,58,0,59,0,0,606,154,0,0,62,0],[0,575,0,607,0,248,248,57,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,0,0,246,608,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,609,152,610,611,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,0,0,0,0,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,491,0,0],[0,0,0,0,0,0,613,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,585,194,0,0,0,0],[0,0,0,582,91,583,92,22,23,0,24,0,0,585,93,0,0,27,0],[0,0,0,582,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,553,0,0,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,586,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,591,194,0,0,0,0],[0,0,0,588,91,589,92,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,588,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,595,220,0,0,0,0],[0,0,0,592,112,593,113,32,33,0,34,0,0,595,114,0,0,37,0],[0,0,0,592,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,559,0,0,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,596,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,601,220,0,0,0,0],[0,0,0,598,112,599,113,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,598,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,606,265,0,0,0,0],[0,0,0,603,152,604,153,57,58,0,59,0,0,606,154,0,0,62,0],[0,0,0,603,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,575,0,0,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,607,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,612,265,0,0,0,0],[0,0,0,609,152,610,153,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,609,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,549,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0]],"accepting":[false,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,false,false,true,false,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,false,false,true,true,false,false,true,true,true,false,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,false,true,true,false,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,false,true,true,true,true,true,false,true,true,false,true,true,true],"tags":[[],["broken_cluster"],["consonant_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],[],["broken_cluster"],["symbol_cluster"],[],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["symbol_cluster"],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],[],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],[],[],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],["consonant_syllable"],["vowel_syllable"],["standalone_cluster"]]}');

/***/ }),

/***/ "./src/modules/fontkit/src/opentype/shapers/use.json":
/*!***********************************************************!*\
  !*** ./src/modules/fontkit/src/opentype/shapers/use.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"categories":["O","IND","S","GB","B","FM","CGJ","VMAbv","VMPst","VAbv","VPst","CMBlw","VPre","VBlw","H","VMBlw","CMAbv","MBlw","CS","R","SUB","MPst","MPre","FAbv","FPst","FBlw","null","SMAbv","SMBlw","VMPre","ZWNJ","ZWJ","WJ","M","VS","N","HN","MAbv"],"decompositions":{"2507":[2503,2494],"2508":[2503,2519],"2888":[2887,2902],"2891":[2887,2878],"2892":[2887,2903],"3018":[3014,3006],"3019":[3015,3006],"3020":[3014,3031],"3144":[3142,3158],"3264":[3263,3285],"3271":[3270,3285],"3272":[3270,3286],"3274":[3270,3266],"3275":[3270,3266,3285],"3402":[3398,3390],"3403":[3399,3390],"3404":[3398,3415],"3546":[3545,3530],"3548":[3545,3535],"3549":[3545,3535,3530],"3550":[3545,3551],"3635":[3661,3634],"3763":[3789,3762],"3955":[3953,3954],"3957":[3953,3956],"3958":[4018,3968],"3959":[4018,3953,3968],"3960":[4019,3968],"3961":[4019,3953,3968],"3969":[3953,3968],"6971":[6970,6965],"6973":[6972,6965],"6976":[6974,6965],"6977":[6975,6965],"6979":[6978,6965],"69934":[69937,69927],"69935":[69938,69927],"70475":[70471,70462],"70476":[70471,70487],"70843":[70841,70842],"70844":[70841,70832],"70846":[70841,70845],"71098":[71096,71087],"71099":[71097,71087]},"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,3,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,17,18,11,19,20,21,22,0,0,0,23,0,0,2,0,0,24,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,27,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,39,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,11,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,49,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,35,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,53,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,0,46,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,0,23,0,0,0,0,0,0,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,0,46,0,0,0,0,0,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0]],"accepting":[false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],"tags":[[],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["symbol_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["virama_terminated_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["number_joiner_terminated_cluster"],["standard_cluster"],["standard_cluster"],["numeral_cluster"]]}');

/***/ })

}]);
//# sourceMappingURL=src_ui_app_components_Menu_tsx.js.map