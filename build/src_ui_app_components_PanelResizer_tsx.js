"use strict";
(self["webpackChunkMkitFPdf"] = self["webpackChunkMkitFPdf"] || []).push([["src_ui_app_components_PanelResizer_tsx"],{

/***/ "./src/ui/app/components/PanelResizer.tsx":
/*!************************************************!*\
  !*** ./src/ui/app/components/PanelResizer.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./src/utilities/index.ts");
/* harmony import */ var ui_figma_ui_kit_hooks_use_window_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/figma-ui-kit/hooks/use-window-resize */ "./src/ui/figma-ui-kit/hooks/use-window-resize.ts");


const PanelResizer = () => {
    function onWindowResize(windowSize) {
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)('RESIZE_WINDOW', windowSize);
    }
    (0,ui_figma_ui_kit_hooks_use_window_resize__WEBPACK_IMPORTED_MODULE_1__.useWindowResize)(onWindowResize, {
        maxHeight: 800,
        maxWidth: 1200,
        minHeight: 480,
        minWidth: 480
        //resizeBehaviorOnDoubleClick: "minimize",
    });
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelResizer);


/***/ }),

/***/ "./src/ui/figma-ui-kit/hooks/use-window-resize.ts":
/*!********************************************************!*\
  !*** ./src/ui/figma-ui-kit/hooks/use-window-resize.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowResize: () => (/* binding */ useWindowResize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const mapResizeDirectionToStyles = {
    both: {
        cursor: 'nwse-resize',
        height: '12px',
        width: '12px'
    },
    horizontal: {
        cursor: 'ew-resize',
        height: '100%',
        width: '8px'
    },
    vertical: {
        cursor: 'ns-resize',
        height: '8px',
        width: '100%'
    }
};
function useWindowResize(onWindowResize, options = {}) {
    const initialHeight = window.innerHeight;
    const initialWidth = window.innerWidth;
    const resizeBehaviorOnDoubleClick = typeof options.resizeBehaviorOnDoubleClick === 'undefined'
        ? null
        : options.resizeBehaviorOnDoubleClick;
    const maxHeight = typeof options.maxHeight === 'undefined'
        ? Number.MAX_VALUE
        : options.maxHeight;
    const maxWidth = typeof options.maxWidth === 'undefined'
        ? Number.MAX_VALUE
        : options.maxWidth;
    const minHeight = typeof options.minHeight === 'undefined' ? initialHeight : options.minHeight;
    const minWidth = typeof options.minWidth === 'undefined' ? initialWidth : options.minWidth;
    const resizeDirection = typeof options.resizeDirection === 'undefined'
        ? 'both'
        : options.resizeDirection;
    const windowSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        height: initialHeight,
        width: initialWidth
    });
    const setWindowSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function ({ width, height }) {
        if (typeof width === 'undefined' && typeof height === 'undefined') {
            throw new Error('Need at least one of `width` or `height`');
        }
        if (typeof width !== 'undefined') {
            windowSize.current.width = Math.min(maxWidth, Math.max(minWidth, width));
        }
        if (typeof height !== 'undefined') {
            windowSize.current.height = Math.min(maxHeight, Math.max(minHeight, height));
        }
        onWindowResize(windowSize.current);
    }, [maxHeight, maxWidth, minHeight, minWidth, onWindowResize]);
    const toggleWindowSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (resizeDirection) {
        if (resizeDirection === 'horizontal') {
            if (windowSize.current.width === initialWidth) {
                // Minimize or maximize if currently at `initialWidth`
                windowSize.current.width =
                    resizeBehaviorOnDoubleClick === 'minimize' ? minWidth : maxWidth;
            }
            else {
                // Else restore `initialWidth`
                windowSize.current.width = initialWidth;
            }
            onWindowResize(windowSize.current);
            return;
        }
        if (resizeDirection === 'vertical') {
            if (windowSize.current.height === initialHeight) {
                // Minimize or maximize if currently at `initialHeight`
                windowSize.current.height =
                    resizeBehaviorOnDoubleClick === 'minimize' ? minHeight : maxHeight;
            }
            else {
                // Else restore `initialHeight`
                windowSize.current.height = initialHeight;
            }
            onWindowResize(windowSize.current);
            return;
        }
        if (windowSize.current.width === initialWidth &&
            windowSize.current.height === initialHeight) {
            // Minimize or maximize if currently at `initialWidth` and `initialHeight`
            windowSize.current.width =
                resizeBehaviorOnDoubleClick === 'minimize' ? minWidth : maxWidth;
            windowSize.current.height =
                resizeBehaviorOnDoubleClick === 'minimize' ? minHeight : maxHeight;
        }
        else {
            // Else restore `initialWidth` and `initialHeight`
            windowSize.current.width = initialWidth;
            windowSize.current.height = initialHeight;
        }
        onWindowResize(windowSize.current);
    }, [
        initialHeight,
        initialWidth,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        onWindowResize,
        resizeBehaviorOnDoubleClick
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        const removeResizeHandleElements = [];
        const options = {
            resizeDirection,
            setWindowSize,
            toggleWindowSize: resizeBehaviorOnDoubleClick === null ? null : toggleWindowSize
        };
        if (resizeDirection === 'both') {
            removeResizeHandleElements.push(createResizeHandleElement(Object.assign(Object.assign({}, options), { resizeDirection: 'horizontal' })));
            removeResizeHandleElements.push(createResizeHandleElement(Object.assign(Object.assign({}, options), { resizeDirection: 'vertical' })));
        }
        removeResizeHandleElements.push(createResizeHandleElement(options));
        return function () {
            for (const removeResizeHandleElement of removeResizeHandleElements) {
                removeResizeHandleElement();
            }
        };
    }, [
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        resizeBehaviorOnDoubleClick,
        resizeDirection,
        setWindowSize,
        toggleWindowSize
    ]);
    return setWindowSize;
}
function createResizeHandleElement(options) {
    const { resizeDirection, setWindowSize, toggleWindowSize } = options;
    const resizeHandleElement = document.createElement('div');
    document.body.append(resizeHandleElement);
    const { cursor, height, width } = mapResizeDirectionToStyles[resizeDirection];
    resizeHandleElement.style.cssText = `cursor: ${cursor}; position: fixed; z-index: var(--z-index-2); bottom: 0; right: 0; width: ${width}; height: ${height};`;
    let pointerDownCursorPosition = null;
    resizeHandleElement.addEventListener('pointerdown', function (event) {
        pointerDownCursorPosition = {
            x: event.offsetX,
            y: event.offsetY
        };
        resizeHandleElement.setPointerCapture(event.pointerId);
    });
    resizeHandleElement.addEventListener('pointerup', function (event) {
        pointerDownCursorPosition = null;
        resizeHandleElement.releasePointerCapture(event.pointerId);
    });
    resizeHandleElement.addEventListener('pointermove', function (event) {
        if (pointerDownCursorPosition === null) {
            return;
        }
        const width = resizeDirection === 'both' || resizeDirection === 'horizontal'
            ? Math.round(event.clientX +
                (resizeHandleElement.offsetWidth - pointerDownCursorPosition.x))
            : undefined;
        const height = resizeDirection === 'both' || resizeDirection === 'vertical'
            ? Math.round(event.clientY +
                (resizeHandleElement.offsetHeight - pointerDownCursorPosition.y))
            : undefined;
        setWindowSize({ height, width });
    });
    if (toggleWindowSize !== null) {
        resizeHandleElement.addEventListener('dblclick', function () {
            toggleWindowSize(resizeDirection);
        });
    }
    return function () {
        resizeHandleElement.remove();
    };
}


/***/ })

}]);
//# sourceMappingURL=src_ui_app_components_PanelResizer_tsx.js.map