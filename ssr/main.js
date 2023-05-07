/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/telegram.svg":
/*!*********************************!*\
  !*** ./src/assets/telegram.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _excluded = ["styles"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    width: "42",
    height: "42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 21c0 11.598 9.363 21 20.913 21s20.913-9.402 20.913-21S32.463 0 20.913 0 0 9.402 0 21zm17.079 9.625l.356-5.353 9.697-8.788c.425-.38-.093-.564-.658-.22l-11.968 7.582-5.17-1.62c-1.116-.344-1.124-1.114.251-1.668l20.144-7.8c.92-.42 1.808.222 1.457 1.636l-3.43 16.234c-.24 1.153-.934 1.43-1.896.896l-5.226-3.877-2.511 2.453-.024.023c-.281.275-.514.502-1.022.502z",
    fill: "#fff"
  }));
});

/***/ }),

/***/ "./src/app/app.tsx":
/*!*************************!*\
  !*** ./src/app/app.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages */ "./src/pages/index.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers */ "./src/app/providers/index.ts");
/* harmony import */ var _design_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/index.scss */ "./src/app/design/index.scss");



var App = (0,_providers__WEBPACK_IMPORTED_MODULE_1__.withProviders)(pages__WEBPACK_IMPORTED_MODULE_0__.AppRouter);

// export const App = () => (
//    <Provider serverState={}>
//     <Ap />
//    </Provider>
// );

/***/ }),

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.App)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app/app.tsx");


/***/ }),

/***/ "./src/app/providers/index.ts":
/*!************************************!*\
  !*** ./src/app/providers/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withProviders": () => (/* binding */ withProviders)
/* harmony export */ });
/* harmony import */ var compose_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compose-function */ "./node_modules/compose-function/index.js");
/* harmony import */ var compose_function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compose_function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-theme */ "./src/app/providers/with-theme.tsx");
/* harmony import */ var _with_strict_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-strict-mode */ "./src/app/providers/with-strict-mode.tsx");



var withProviders = compose_function__WEBPACK_IMPORTED_MODULE_0___default()(_with_strict_mode__WEBPACK_IMPORTED_MODULE_2__.withStrictMode, _with_theme__WEBPACK_IMPORTED_MODULE_1__.withTheme);

/***/ }),

/***/ "./src/app/providers/with-strict-mode.tsx":
/*!************************************************!*\
  !*** ./src/app/providers/with-strict-mode.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withStrictMode": () => (/* binding */ withStrictMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var withStrictMode = function withStrictMode(Component) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props));
  };
};

/***/ }),

/***/ "./src/app/providers/with-theme.tsx":
/*!******************************************!*\
  !*** ./src/app/providers/with-theme.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withTheme": () => (/* binding */ withTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config/index.ts");
/* harmony import */ var shared_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/context */ "./src/shared/context/index.ts");
/* harmony import */ var shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils */ "./src/shared/utils/index.ts");




var withTheme = function withTheme(Component) {
  return function (props) {
    var themeProviderValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return {
        theme: config__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_THEME,
        changeTheme: shared_utils__WEBPACK_IMPORTED_MODULE_3__.changeTheme
      };
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(shared_context__WEBPACK_IMPORTED_MODULE_2__.ThemeContext.Provider, {
      value: themeProviderValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props));
  };
};

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_THEME": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_THEME),
/* harmony export */   "PATHS": () => (/* reexport safe */ _paths__WEBPACK_IMPORTED_MODULE_0__.PATHS)
/* harmony export */ });
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paths */ "./src/config/paths.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/config/theme.ts");



/***/ }),

/***/ "./src/config/paths.ts":
/*!*****************************!*\
  !*** ./src/config/paths.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATHS": () => (/* binding */ PATHS)
/* harmony export */ });
var PATHS = /*#__PURE__*/function (PATHS) {
  PATHS["HOME"] = "/";
  PATHS["BEFORE_AFTER"] = "/before-after";
  PATHS["ABOUT_US"] = "/about-us";
  PATHS["CONTACTS"] = "/contacts";
  PATHS["SHOP"] = "/shop";
  return PATHS;
}({});

/***/ }),

/***/ "./src/config/theme.ts":
/*!*****************************!*\
  !*** ./src/config/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_THEME": () => (/* binding */ DEFAULT_THEME)
/* harmony export */ });
/* harmony import */ var shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/types */ "./src/shared/types/index.ts");

var DEFAULT_THEME = shared_types__WEBPACK_IMPORTED_MODULE_0__.THEME.LIGHT;

/***/ }),

/***/ "./src/main.ssr.tsx":
/*!**************************!*\
  !*** ./src/main.ssr.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app */ "./src/app/index.tsx");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store */ "./src/store/index.ts");






var htmlRoot = document.querySelector('#root');
if (!htmlRoot) {
  throw new Error('Element with id root not found');
}
window.addEventListener('load', function () {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(htmlRoot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store__WEBPACK_IMPORTED_MODULE_4__.store,
    serverState: store__WEBPACK_IMPORTED_MODULE_4__.preloadedState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(app__WEBPACK_IMPORTED_MODULE_3__.App, null))));
});

/***/ }),

/***/ "./src/pages/before/before.tsx":
/*!*************************************!*\
  !*** ./src/pages/before/before.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Before": () => (/* binding */ Before)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var Before = function Before() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state.before;
    }),
    data = _useSelector.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, data.map(function (_ref) {
    var title = _ref.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
      key: title
    }, title);
  }));
};

/***/ }),

/***/ "./src/pages/before/index.ts":
/*!***********************************!*\
  !*** ./src/pages/before/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Before": () => (/* reexport safe */ _before__WEBPACK_IMPORTED_MODULE_0__.Before)
/* harmony export */ });
/* harmony import */ var _before__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before */ "./src/pages/before/before.tsx");


/***/ }),

/***/ "./src/pages/home/home.tsx":
/*!*********************************!*\
  !*** ./src/pages/home/home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var widgets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! widgets */ "./src/widgets/index.ts");
/* harmony import */ var shared_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/components */ "./src/shared/components/index.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../page */ "./src/pages/page/index.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home/home.module.scss");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Home = function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(2),
    _useState2 = _slicedToArray(_useState, 2),
    rating = _useState2[0],
    _setRating = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    console.log(rating);
  }, [rating]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_page__WEBPACK_IMPORTED_MODULE_15__.Page, {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].home
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_14__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, "rating: ", rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "\u041F\u043E\u0436\u0438\u043B\u044B\u0435 \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u0438, \u0437\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0432\u0435\u0437\u0434 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_14__.Rating, {
    rating: rating,
    isEditable: true,
    setRating: function setRating(rating) {
      _setRating(rating);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("b", null, "\u0410 \u0437\u0434\u0435\u0441\u044C \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_14__.Rating, {
    rating: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isGray: true,
    isOutlined: true,
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441 \u043E\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isGray: true,
    type: "number",
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isOutlined: true,
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0431\u0435\u043B\u043E\u0433\u043E (\u0434\u043B\u044F \u0441\u0432\u0435\u0442\u043B\u043E\u0439 \u0442\u0435\u043C\u044B) \u0438\u043D\u043F\u0443\u0442\u0430 \u0441 \u043E\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", null, "\u041F\u043E\u043A\u0430 \u043A\u043D\u043E\u043F\u043E\u0447\u043A\u0438 \u043D\u0435\u0442(")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form, {
    variant: "filled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isGray: true,
    isOutlined: true,
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441 \u043E\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isGray: true,
    type: "number",
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isOutlined: true,
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0431\u0435\u043B\u043E\u0433\u043E (\u0434\u043B\u044F \u0441\u0432\u0435\u0442\u043B\u043E\u0439 \u0442\u0435\u043C\u044B) \u0438\u043D\u043F\u0443\u0442\u0430 \u0441 \u043E\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", null, "\u041F\u043E\u043A\u0430 \u043A\u043D\u043E\u043F\u043E\u0447\u043A\u0438 \u043D\u0435\u0442(")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form, {
    variant: "border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isOutlined: true,
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441 \u043E\u0443\u0442\u043B\u0430\u0439\u043D\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_13__.Form.Input, {
    isOutlined: true,
    type: "number",
    placeholder: "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u043C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", null, "\u041F\u043E\u043A\u0430 \u043A\u043D\u043E\u043F\u043E\u0447\u043A\u0438 \u043D\u0435\u0442("))));
};

/***/ }),

/***/ "./src/pages/home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/home/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.Home)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home/home.tsx");


/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_0__.AppRouter),
/* harmony export */   "routes": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_0__.routes)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/pages/routes.tsx");


/***/ }),

/***/ "./src/pages/page/index.ts":
/*!*********************************!*\
  !*** ./src/pages/page/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _page__WEBPACK_IMPORTED_MODULE_0__.Page)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/pages/page/page.tsx");


/***/ }),

/***/ "./src/pages/page/page.tsx":
/*!*********************************!*\
  !*** ./src/pages/page/page.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widgets */ "./src/widgets/index.ts");
/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.scss */ "./src/pages/page/page.module.scss");





var _excluded = ["className", "children", "pageClassName", "headerClassName", "footerClassName"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Page = function Page(_ref) {
  var className = _ref.className,
    children = _ref.children,
    pageClassName = _ref.pageClassName,
    headerClassName = _ref.headerClassName,
    footerClassName = _ref.footerClassName,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].page, pageClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_7__.Header, {
    className: headerClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("main", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].main, className)
  }, props), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(widgets__WEBPACK_IMPORTED_MODULE_7__.Footer, {
    className: footerClassName
  }));
};

/***/ }),

/***/ "./src/pages/routes.tsx":
/*!******************************!*\
  !*** ./src/pages/routes.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* binding */ AppRouter),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./src/config/index.ts");
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/api */ "./src/shared/api/index.ts");
/* harmony import */ var store_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/constants */ "./src/store/constants.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/pages/home/index.ts");
/* harmony import */ var _before__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./before */ "./src/pages/before/index.ts");








var routes = [{
  path: config__WEBPACK_IMPORTED_MODULE_2__.PATHS.HOME,
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_home__WEBPACK_IMPORTED_MODULE_5__.Home, null)
}, {
  path: config__WEBPACK_IMPORTED_MODULE_2__.PATHS.BEFORE_AFTER,
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_before__WEBPACK_IMPORTED_MODULE_6__.Before, null),
  loadData: function loadData() {
    return shared_api__WEBPACK_IMPORTED_MODULE_3__.api.get('/product');
  },
  sliceName: store_constants__WEBPACK_IMPORTED_MODULE_4__.SliceNames.BEFORE
}, {
  path: config__WEBPACK_IMPORTED_MODULE_2__.PATHS.ABOUT_US,
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "about us")
}];
var AppRouter = function AppRouter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, routes.map(function (_ref) {
    var path = _ref.path,
      component = _ref.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
      key: path,
      path: path,
      element: component
    });
  }));
};

// import React from 'react';
// import { useRoutes, RouteObject } from 'react-router-dom';

// import { PATHS } from 'config';

// import { Home } from './home';

// export const routes: RouteObject[] = [
//   {
//     path: PATHS.HOME,
//     element: <Home />,
//   },
// ];

// export const AppRouter = () => useRoutes(routes);

/***/ }),

/***/ "./src/shared/api/index.ts":
/*!*********************************!*\
  !*** ./src/shared/api/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: 'http://localhost:8000/api'
});

/***/ }),

/***/ "./src/shared/components/container/container.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/container/container.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _container_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container.module.scss */ "./src/shared/components/container/container.module.scss");





var _excluded = ["className", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Container = function Container(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_container_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container, className)
  }, props), children);
};

/***/ }),

/***/ "./src/shared/components/container/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/components/container/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.Container)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/shared/components/container/container.tsx");


/***/ }),

/***/ "./src/shared/components/index.ts":
/*!****************************************!*\
  !*** ./src/shared/components/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   "Input": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_4__.Input),
/* harmony export */   "Logo": () => (/* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_2__.Logo),
/* harmony export */   "Rating": () => (/* reexport safe */ _rating__WEBPACK_IMPORTED_MODULE_3__.Rating),
/* harmony export */   "Text": () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_1__.Text)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/shared/components/container/index.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/shared/components/text/index.ts");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./src/shared/components/logo/index.ts");
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating */ "./src/shared/components/rating/index.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./src/shared/components/input/index.ts");






/***/ }),

/***/ "./src/shared/components/input/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/components/input/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_0__.Input)
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/shared/components/input/input.tsx");


/***/ }),

/***/ "./src/shared/components/input/input.tsx":
/*!***********************************************!*\
  !*** ./src/shared/components/input/input.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input.module.scss */ "./src/shared/components/input/input.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















var _excluded = ["className", "rangeClassName", "min", "max", "type", "onChange", "isGray", "isOutlined"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_20__.forwardRef)(function (_ref, ref) {
  var _cn;
  var className = _ref.className,
    rangeClassName = _ref.rangeClassName,
    min = _ref.min,
    max = _ref.max,
    type = _ref.type,
    onChange = _ref.onChange,
    isGray = _ref.isGray,
    isOutlined = _ref.isOutlined,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    console.log(value);
  }, [value]);
  var handleChange = function handleChange(e) {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: _input_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", _extends({
    value: value,
    onChange: handleChange,
    type: type,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_21___default()(_input_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].input, className, (_cn = {}, _defineProperty(_cn, _input_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].gray, isGray), _defineProperty(_cn, _input_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].outlined, isOutlined), _cn))
  }, props)), type === 'number' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    value: value,
    onChange: handleChange,
    type: "range",
    min: min,
    max: max,
    className: classnames__WEBPACK_IMPORTED_MODULE_21___default()(_input_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].range, rangeClassName)
  }));
});

/***/ }),

/***/ "./src/shared/components/logo/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/logo/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_0__.Logo)
/* harmony export */ });
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ "./src/shared/components/logo/logo.tsx");


/***/ }),

/***/ "./src/shared/components/logo/logo.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/logo/logo.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _logo_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo.module.scss */ "./src/shared/components/logo/logo.module.scss");





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// !TODO Лого пока отличается от лого из фигмы
var Logo = function Logo(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_logo_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].logo, className),
    height: "60px",
    width: "60px",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    // eslint-disable-next-line
    d: "M499.632,331.077c1.604-9.046,1.859-21.635-4.423-34.046c-7.753-15.315-22.803-25.553-44.731-30.425c-64.079-14.239-123.982-42.829-164.348-78.437c-4.03-3.555-8.32-7.649-12.826-12.225l7.388-5.054l-51.157-74.789l-14.293,9.776c-0.163-0.221-0.329-0.443-0.492-0.664c-16.417-22.365-47.965-27.222-70.326-10.823l-97.274,71.335c-22.638,16.602-36.128,43.273-36.085,71.346l0.144,94.424C4.162,341.413,0,353.519,0,366.586c0,33.492,27.247,60.74,60.739,60.74h288.727c45.647,0,90.52-7.974,133.374-23.699C500.281,397.226,512,380.442,512,361.864C512,350.288,507.542,339.31,499.632,331.077z M258.558,208.206l-25.177,40.895l28.435,17.506l22.742-36.937c3.706,2.719,7.501,5.395,11.402,8.012l-22.522,35.633l28.226,17.84l22.862-36.171c4.368,2.393,8.811,4.727,13.333,6.992l-22.544,35.977l28.295,17.731l24.943-39.806c23.761,9.69,48.938,17.604,74.683,23.325c7.977,1.773,18.287,5.426,22.106,12.762c0.896,1.72,1.388,3.562,1.634,5.395c-2.366,0.032-4.744,0.25-7.111,0.669l-0.371,0.066c-5.247,0.927-10.203,1.803-15.102,2.372l-62.89,7.305c-41.266,4.791-82.731,2.553-123.241-6.653l-22.999-5.227c-26.408-6.002-53.461-9.329-80.544-9.933l-47.632-31.053c-5.236-3.413-8.361-9.181-8.361-15.431c0-7.504,4.487-14.194,11.429-17.042l23.187-9.512l18.064,26.408l93.944-64.259C249.917,199.855,254.328,204.241,258.558,208.206z M220.828,142.514l13.453,19.667l-74.17,50.732l-13.452-19.667L220.828,142.514z M66.898,192.651l97.274-71.335c7.442-5.457,17.908-3.899,23.481,3.434l-87.407,59.788l13.815,20.197l-16.583,6.803c-19.528,8.012-32.146,26.828-32.146,47.934c0,17.577,8.791,33.803,23.515,43.403l4.558,2.972H60.739c-5.601,0-11.02,0.778-16.174,2.204l-0.108-71.031C44.43,219.562,52.821,202.976,66.898,192.651z M471.335,372.28c-39.157,14.369-80.159,21.655-121.869,21.655H60.739c-15.079,0-27.347-12.268-27.347-27.349s12.268-27.347,27.347-27.347h85.023c27.581,0,55.203,3.1,82.096,9.212l22.999,5.227c44.21,10.046,89.459,12.489,134.494,7.259l62.891-7.305c5.882-0.683,11.566-1.687,17.061-2.659l0.37-0.066c3.175-0.562,6.455,0.339,8.997,2.471c1.471,1.234,3.94,3.978,3.94,8.483C478.609,366.496,475.686,370.683,471.335,372.28z"
  }))));
};

/***/ }),

/***/ "./src/shared/components/rating/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/rating/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rating": () => (/* reexport safe */ _rating__WEBPACK_IMPORTED_MODULE_0__.Rating)
/* harmony export */ });
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating */ "./src/shared/components/rating/rating.tsx");


/***/ }),

/***/ "./src/shared/components/rating/rating.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/rating/rating.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rating": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../star */ "./src/shared/components/star/index.ts");
/* harmony import */ var _rating_module_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rating.module.scss */ "./src/shared/components/rating/rating.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















var _excluded = ["isEditable", "rating", "setRating", "className", "max"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Rating = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_22__.forwardRef)(function (_ref, ref) {
  var _ref$isEditable = _ref.isEditable,
    isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,
    rating = _ref.rating,
    setRating = _ref.setRating,
    className = _ref.className,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 5 : _ref$max,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(new Array(max).fill(null)),
    _useState2 = _slicedToArray(_useState, 2),
    starArray = _useState2[0],
    setStarArray = _useState2[1];
  var changeDisplay = function changeDisplay(index) {
    if (!isEditable) {
      return;
    }
    changeStarArray(index);
  };
  var changeRating = function changeRating(rating) {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(rating);
  };
  var handleSpace = function handleSpace(e, rating) {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(rating);
  };
  var changeStarArray = function changeStarArray(currentRating) {
    var updatedArray = starArray.map(function (star, index) {
      var _cn;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
        key: index,
        className: classnames__WEBPACK_IMPORTED_MODULE_23___default()(_rating_module_scss__WEBPACK_IMPORTED_MODULE_25__["default"].star, (_cn = {}, _defineProperty(_cn, _rating_module_scss__WEBPACK_IMPORTED_MODULE_25__["default"].filled, index < currentRating), _defineProperty(_cn, _rating_module_scss__WEBPACK_IMPORTED_MODULE_25__["default"].editable, isEditable), _cn)),
        onMouseEnter: function onMouseEnter() {
          return changeDisplay(index + 1);
        },
        onMouseLeave: function onMouseLeave() {
          return changeDisplay(rating);
        },
        onClick: function onClick() {
          return changeRating(index + 1);
        },
        tabIndex: isEditable ? 0 : -1,
        onKeyDown: function onKeyDown(e) {
          return isEditable && handleSpace(e, index + 1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_star__WEBPACK_IMPORTED_MODULE_24__.Star, null));
    });
    setStarArray(updatedArray);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    changeStarArray(rating);
  }, [rating]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", _extends({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_23___default()(_rating_module_scss__WEBPACK_IMPORTED_MODULE_25__["default"].stars, className)
  }, props), starArray.map(function (star, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
      key: index
    }, star);
  }));
});

/***/ }),

/***/ "./src/shared/components/star/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/star/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Star": () => (/* reexport safe */ _star__WEBPACK_IMPORTED_MODULE_0__.Star)
/* harmony export */ });
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ "./src/shared/components/star/star.tsx");


/***/ }),

/***/ "./src/shared/components/star/star.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/star/star.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Star": () => (/* binding */ Star)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }

var Star = function Star(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", _extends({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "#E2E2E2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", {
    d: "M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686V7.55686Z"
  }));
};

/***/ }),

/***/ "./src/shared/components/text/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/text/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_0__.Text)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/shared/components/text/text.tsx");


/***/ }),

/***/ "./src/shared/components/text/text.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/text/text.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _text_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text.module.scss */ "./src/shared/components/text/text.module.scss");





var _excluded = ["className", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Text = function Text(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_text_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].text, className)
  }, props), children);
};

/***/ }),

/***/ "./src/shared/context/index.ts":
/*!*************************************!*\
  !*** ./src/shared/context/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_0__.ThemeContext)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/shared/context/theme.ts");


/***/ }),

/***/ "./src/shared/context/theme.ts":
/*!*************************************!*\
  !*** ./src/shared/context/theme.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/shared/utils/index.ts");



var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  theme: config__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_THEME,
  changeTheme: _utils__WEBPACK_IMPORTED_MODULE_2__.changeTheme
});

/***/ }),

/***/ "./src/shared/types/index.ts":
/*!***********************************!*\
  !*** ./src/shared/types/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEME": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_0__.THEME)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/shared/types/theme.ts");


/***/ }),

/***/ "./src/shared/types/theme.ts":
/*!***********************************!*\
  !*** ./src/shared/types/theme.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEME": () => (/* binding */ THEME)
/* harmony export */ });
var THEME = /*#__PURE__*/function (THEME) {
  THEME["LIGHT"] = "light";
  THEME["DARK"] = "dark";
  return THEME;
}({});

/***/ }),

/***/ "./src/shared/utils/change-theme.ts":
/*!******************************************!*\
  !*** ./src/shared/utils/change-theme.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTheme": () => (/* binding */ changeTheme)
/* harmony export */ });
var changeTheme = function changeTheme(theme) {
  var root = document.getElementById('root');
  if (!root) {
    return console.warn('Element with id root does not exist');
  }
  root.setAttribute('data-theme', theme);
};

/***/ }),

/***/ "./src/shared/utils/deserialize-server-data.ts":
/*!*****************************************************!*\
  !*** ./src/shared/utils/deserialize-server-data.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializeServerData": () => (/* binding */ deserializeServerData)
/* harmony export */ });
var deserializeServerData = function deserializeServerData(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log('deserialize', err);
    return {};
  }
};

/***/ }),

/***/ "./src/shared/utils/index.ts":
/*!***********************************!*\
  !*** ./src/shared/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTheme": () => (/* reexport safe */ _change_theme__WEBPACK_IMPORTED_MODULE_0__.changeTheme),
/* harmony export */   "deserializeServerData": () => (/* reexport safe */ _deserialize_server_data__WEBPACK_IMPORTED_MODULE_2__.deserializeServerData),
/* harmony export */   "isBrowser": () => (/* reexport safe */ _is_browser__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
/* harmony export */ });
/* harmony import */ var _change_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-theme */ "./src/shared/utils/change-theme.ts");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser */ "./src/shared/utils/is-browser.ts");
/* harmony import */ var _deserialize_server_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deserialize-server-data */ "./src/shared/utils/deserialize-server-data.ts");




/***/ }),

/***/ "./src/shared/utils/is-browser.ts":
/*!****************************************!*\
  !*** ./src/shared/utils/is-browser.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

/***/ }),

/***/ "./src/store/after.ts":
/*!****************************!*\
  !*** ./src/store/after.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterActions": () => (/* binding */ afterActions),
/* harmony export */   "afterReducer": () => (/* binding */ afterReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/store/constants.ts");


var initialState = {
  data: []
};
var _createSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    initialState: initialState,
    name: _constants__WEBPACK_IMPORTED_MODULE_0__.SliceNames.AFTER,
    reducers: {}
  }),
  afterActions = _createSlice.actions,
  afterReducer = _createSlice.reducer;


/***/ }),

/***/ "./src/store/before.ts":
/*!*****************************!*\
  !*** ./src/store/before.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beforeActions": () => (/* binding */ beforeActions),
/* harmony export */   "beforeReducer": () => (/* binding */ beforeReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/store/constants.ts");


var initialState = {
  data: []
};
var _createSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    initialState: initialState,
    name: _constants__WEBPACK_IMPORTED_MODULE_0__.SliceNames.BEFORE,
    reducers: {}
  }),
  beforeActions = _createSlice.actions,
  beforeReducer = _createSlice.reducer;


/***/ }),

/***/ "./src/store/constants.ts":
/*!********************************!*\
  !*** ./src/store/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceNames": () => (/* binding */ SliceNames)
/* harmony export */ });
var SliceNames = /*#__PURE__*/function (SliceNames) {
  SliceNames["BEFORE"] = "before";
  SliceNames["AFTER"] = "after";
  return SliceNames;
}({});

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadedState": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.preloadedState),
/* harmony export */   "rootReducer": () => (/* reexport safe */ _root_reducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer),
/* harmony export */   "store": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/store.ts");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-reducer */ "./src/store/root-reducer.ts");



/***/ }),

/***/ "./src/store/root-reducer.ts":
/*!***********************************!*\
  !*** ./src/store/root-reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/store/constants.ts");
/* harmony import */ var _before__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./before */ "./src/store/before.ts");
/* harmony import */ var _after__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./after */ "./src/store/after.ts");





var _combineReducers;






function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_14__.combineReducers)((_combineReducers = {}, _defineProperty(_combineReducers, _constants__WEBPACK_IMPORTED_MODULE_11__.SliceNames.BEFORE, _before__WEBPACK_IMPORTED_MODULE_12__.beforeReducer), _defineProperty(_combineReducers, _constants__WEBPACK_IMPORTED_MODULE_11__.SliceNames.AFTER, _after__WEBPACK_IMPORTED_MODULE_13__.afterReducer), _combineReducers));

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadedState": () => (/* binding */ preloadedState),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/utils */ "./src/shared/utils/index.ts");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-reducer */ "./src/store/root-reducer.ts");
var _window;



var preloadedState = (0,shared_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() ? (_window = window) === null || _window === void 0 ? void 0 : _window.__PRELOADED_STATE__ : {};
if ((0,shared_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)()) {
  var _window2;
  (_window2 = window) === null || _window2 === void 0 ? true : delete _window2.__PRELOADED_STATE__;
}
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: _root_reducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer,
  preloadedState: preloadedState
});

/***/ }),

/***/ "./src/widgets/carousel/carousel.tsx":
/*!*******************************************!*\
  !*** ./src/widgets/carousel/carousel.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carousel.module.scss */ "./src/widgets/carousel/carousel.module.scss");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper */ "./src/widgets/carousel/helper.ts");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Carousel = function Carousel(_ref) {
  var className = _ref.className,
    _ref$perPage = _ref.perPage,
    perPage = _ref$perPage === void 0 ? 3 : _ref$perPage,
    blocks = _ref.blocks;
  var _useWindowDimensions = (0,_helper__WEBPACK_IMPORTED_MODULE_16__["default"])(),
    width = _useWindowDimensions.width;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(perPage),
    _useState2 = _slicedToArray(_useState, 2),
    itemsPerPage = _useState2[0],
    setItemsPerPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(32),
    _useState6 = _slicedToArray(_useState5, 2),
    blockLength = _useState6[0],
    setBlockLength = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(74.2),
    _useState8 = _slicedToArray(_useState7, 2),
    transformLenght = _useState8[0],
    setTransformLength = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (width > 900) {
      setItemsPerPage(perPage);
    }
    if (width > 670 && width < 900) {
      if (itemsPerPage >= 2) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(perPage);
      }
    }
    if (width < 670) {
      if (itemsPerPage >= 1) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(perPage);
      }
    }
    switch (itemsPerPage) {
      case 1:
        setBlockLength(100);
        setTransformLength(2);
        break;
      case 2:
        setBlockLength(49);
        setTransformLength(55.1);
        break;
      case 4:
        setBlockLength(23.5);
        setTransformLength(85);
        break;
      default:
        setBlockLength(32);
        setTransformLength(74.2);
        break;
    }
  }, [itemsPerPage, perPage, width]);
  var moveBack = function moveBack() {
    var moveLenght = -(blocks.length - perPage);
    var isStart = activeIndex === 0;
    if (isStart) {
      setActiveIndex(moveLenght);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  var moveNext = function moveNext() {
    var moveLength = -(blocks.length - perPage);
    var isEnd = activeIndex === moveLength;
    if (isEnd) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].carousel, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].carouselItems)
  }, blocks.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].carouselItem),
      style: {
        transform: "translateX(".concat(activeIndex * (blockLength + transformLenght), "%)"),
        minWidth: "".concat(blockLength, "%")
      },
      key: block.id
    }, block.image);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].carouselButtonBack),
    onClick: function onClick() {
      return moveBack();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].arrowLeft)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].carouselButtonNext),
    onClick: function onClick() {
      return moveNext();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].arrowRight)
  })));
};

/***/ }),

/***/ "./src/widgets/carousel/helper.ts":
/*!****************************************!*\
  !*** ./src/widgets/carousel/helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getWindowDimensions() {
  var _window = window,
    width = _window.innerWidth,
    height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}
function useWindowDimensions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(getWindowDimensions),
    _useState2 = _slicedToArray(_useState, 2),
    windowDimensions = _useState2[0],
    setWindowDimensions = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "./src/widgets/carousel/index.ts":
/*!***************************************!*\
  !*** ./src/widgets/carousel/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel)
/* harmony export */ });
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ "./src/widgets/carousel/carousel.tsx");


/***/ }),

/***/ "./src/widgets/footer/footer.tsx":
/*!***************************************!*\
  !*** ./src/widgets/footer/footer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/components */ "./src/shared/components/index.ts");
/* harmony import */ var assets_telegram_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/telegram.svg */ "./src/assets/telegram.svg");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.module.scss */ "./src/widgets/footer/footer.module.scss");





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Footer = function Footer(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("footer", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].footer, className)
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_7__.Container, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].cont, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].wrapper, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: "https://t.me/joinchat/HltVtDpVhHpiYTEy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(assets_telegram_svg__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: "tel:+74950000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].number, className)
  }, "+7 (495) 000-00-00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: "mailto:help@puresneakers.ru"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].mail, className)
  }, "help@puresneakers.ru"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_footer_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].cpr, className)
  }, "Copyright (C)")));
};

/***/ }),

/***/ "./src/widgets/footer/index.ts":
/*!*************************************!*\
  !*** ./src/widgets/footer/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_0__.Footer)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/widgets/footer/footer.tsx");


/***/ }),

/***/ "./src/widgets/form/form.tsx":
/*!***********************************!*\
  !*** ./src/widgets/form/form.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/components */ "./src/shared/components/index.ts");
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form.module.scss */ "./src/widgets/form/form.module.scss");





var _excluded = ["className", "variant", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Form = function Form(_ref) {
  var className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'transparent' : _ref$variant,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("form", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_form_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].form, className, _form_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][variant])
  }, props), children);
};
Form.Input = shared_components__WEBPACK_IMPORTED_MODULE_7__.Input;

/***/ }),

/***/ "./src/widgets/form/index.ts":
/*!***********************************!*\
  !*** ./src/widgets/form/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_0__.Form)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/widgets/form/form.tsx");


/***/ }),

/***/ "./src/widgets/header/header.tsx":
/*!***************************************!*\
  !*** ./src/widgets/header/header.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config */ "./src/config/index.ts");
/* harmony import */ var shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/components */ "./src/shared/components/index.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu */ "./src/widgets/menu/index.ts");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.module.scss */ "./src/widgets/header/header.module.scss");





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// Просто класс - ок
// styles.header - в html вообще нет класса
// cn("header") - ок

// !TODO Добавить выбор города (если нужно вообще), кнопки для аутентификации (когда будут готовы)
var Header = function Header(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("header", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_header_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].header, className)
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_8__.Container, {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    to: config__WEBPACK_IMPORTED_MODULE_7__.PATHS.HOME
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(shared_components__WEBPACK_IMPORTED_MODULE_8__.Logo, {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].logo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_menu__WEBPACK_IMPORTED_MODULE_9__.Menu, null)));
};

/***/ }),

/***/ "./src/widgets/header/index.ts":
/*!*************************************!*\
  !*** ./src/widgets/header/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/widgets/header/header.tsx");


/***/ }),

/***/ "./src/widgets/index.ts":
/*!******************************!*\
  !*** ./src/widgets/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel),
/* harmony export */   "Footer": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_1__.Footer),
/* harmony export */   "Form": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.Form),
/* harmony export */   "Header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/widgets/header/index.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/widgets/footer/index.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/widgets/form/index.ts");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./src/widgets/carousel/index.ts");





/***/ }),

/***/ "./src/widgets/menu/content.tsx":
/*!**************************************!*\
  !*** ./src/widgets/menu/content.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuContent": () => (/* binding */ menuContent)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "./src/config/index.ts");

var menuContent = [{
  path: config__WEBPACK_IMPORTED_MODULE_0__.PATHS.SHOP,
  content: 'Магазин'
}, {
  path: config__WEBPACK_IMPORTED_MODULE_0__.PATHS.BEFORE_AFTER,
  content: 'До/После'
}, {
  path: config__WEBPACK_IMPORTED_MODULE_0__.PATHS.ABOUT_US,
  content: 'О нас'
}, {
  path: config__WEBPACK_IMPORTED_MODULE_0__.PATHS.CONTACTS,
  content: 'Контакты'
}];

/***/ }),

/***/ "./src/widgets/menu/index.ts":
/*!***********************************!*\
  !*** ./src/widgets/menu/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_0__.Menu)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/widgets/menu/menu.tsx");


/***/ }),

/***/ "./src/widgets/menu/menu.tsx":
/*!***********************************!*\
  !*** ./src/widgets/menu/menu.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content */ "./src/widgets/menu/content.tsx");
/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu.module.scss */ "./src/widgets/menu/menu.module.scss");





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// !TODO когда будет готов тег с текстом нужно будет сделать отдельный тег для Link
var Menu = function Menu(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("ul", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_menu_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].list, className)
  }, props), _content__WEBPACK_IMPORTED_MODULE_9__.menuContent.map(function (_ref2) {
    var path = _ref2.path,
      content = _ref2.content;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("li", {
      key: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("a", {
      className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].link,
      href: "http://localhost:8080".concat(path)
    }, content));
  })));
};

/***/ }),

/***/ "./src/app/design/index.scss":
/*!***********************************!*\
  !*** ./src/app/design/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/home/home.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/home/home.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"home":"home-module__home"});

/***/ }),

/***/ "./src/pages/page/page.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/page/page.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"page-module__page","main":"page-module__main"});

/***/ }),

/***/ "./src/shared/components/container/container.module.scss":
/*!***************************************************************!*\
  !*** ./src/shared/components/container/container.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-module__container"});

/***/ }),

/***/ "./src/shared/components/input/input.module.scss":
/*!*******************************************************!*\
  !*** ./src/shared/components/input/input.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"input-module__wrapper","input":"input-module__input","gray":"input-module__gray","outlined":"input-module__outlined","range":"input-module__range"});

/***/ }),

/***/ "./src/shared/components/logo/logo.module.scss":
/*!*****************************************************!*\
  !*** ./src/shared/components/logo/logo.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"logo":"logo-module__logo"});

/***/ }),

/***/ "./src/shared/components/rating/rating.module.scss":
/*!*********************************************************!*\
  !*** ./src/shared/components/rating/rating.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"filled":"rating-module__filled","star":"rating-module__star","editable":"rating-module__editable"});

/***/ }),

/***/ "./src/shared/components/text/text.module.scss":
/*!*****************************************************!*\
  !*** ./src/shared/components/text/text.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"text":"text-module__text","textMin":"text-module__textMin","textMax":"text-module__textMax","textMid":"text-module__textMid","textLower":"text-module__textLower","textMaxim":"text-module__textMaxim","textdsafsd":"text-module__textdsafsd","textdsafsdk":"text-module__textdsafsdk","textdsamfkl":"text-module__textdsamfkl","textdsasdf":"text-module__textdsasdf","textdsasd":"text-module__textdsasd","textdsaa":"text-module__textdsaa","textdsavb":"text-module__textdsavb","textdsasdfd":"text-module__textdsasdfd","textdsaasd":"text-module__textdsaasd","textdsasdsd":"text-module__textdsasdsd","textdsaxc":"text-module__textdsaxc","textdsacxcx":"text-module__textdsacxcx","textdsamm":"text-module__textdsamm","textdsabn":"text-module__textdsabn","textdsyua":"text-module__textdsyua","textddfsa":"text-module__textddfsa","textdsknkfla":"text-module__textdsknkfla","textdskdsnflksda":"text-module__textdskdsnflksda","textddkfmdlkfsa":"text-module__textddkfmdlkfsa","textdsdkfnldka":"text-module__textdsdkfnldka","textdssdfnlsldfna":"text-module__textdssdfnlsldfna","textdkfnskdlnfksa":"text-module__textdkfnskdlnfksa","textdssdnflka":"text-module__textdssdnflka","textdsasldjfnljsdja":"text-module__textdsasldjfnljsdja","textdasdjfljsdsa":"text-module__textdasdjfljsdsa","textsdjfbkjsdfdsa":"text-module__textsdjfbkjsdfdsa","textsdfbsdjfdsa":"text-module__textsdfbsdjfdsa","texasjdfnjsdjfkltdsa":"text-module__texasjdfnjsdjfkltdsa","textdsdknlflsdkfsa":"text-module__textdsdknlflsdkfsa","textdskldnfslkdfsa":"text-module__textdskldnfslkdfsa","textdsdknffskdfa":"text-module__textdsdknffskdfa","textdsdjfnsljdbfsa":"text-module__textdsdjfnsljdbfsa","textdsasjdjfnasldfa":"text-module__textdsasjdjfnasldfa","textdasdasdsa":"text-module__textdasdasdsa","textasassadsa":"text-module__textasassadsa","textdasasdassa":"text-module__textdasasdassa"});

/***/ }),

/***/ "./src/widgets/carousel/carousel.module.scss":
/*!***************************************************!*\
  !*** ./src/widgets/carousel/carousel.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"carousel":"carousel-module__carousel","carouselItems":"carousel-module__carouselItems","carouselItem":"carousel-module__carouselItem","carouselButtonNext":"carousel-module__carouselButtonNext","carouselButtonBack":"carousel-module__carouselButtonBack","arrowRight":"carousel-module__arrowRight","arrowLeft":"carousel-module__arrowLeft"});

/***/ }),

/***/ "./src/widgets/footer/footer.module.scss":
/*!***********************************************!*\
  !*** ./src/widgets/footer/footer.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"footer":"footer-module__footer","wrapper":"footer-module__wrapper","cont":"footer-module__cont","number":"footer-module__number","mail":"footer-module__mail","cpr":"footer-module__cpr"});

/***/ }),

/***/ "./src/widgets/form/form.module.scss":
/*!*******************************************!*\
  !*** ./src/widgets/form/form.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"form":"form-module__form","filled":"form-module__filled","border":"form-module__border"});

/***/ }),

/***/ "./src/widgets/header/header.module.scss":
/*!***********************************************!*\
  !*** ./src/widgets/header/header.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-module__header","content":"header-module__content","logo":"header-module__logo"});

/***/ }),

/***/ "./src/widgets/menu/menu.module.scss":
/*!*******************************************!*\
  !*** ./src/widgets/menu/menu.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"list":"menu-module__list","link":"menu-module__link"});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvelvet_sneakers"] = self["webpackChunkvelvet_sneakers"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/main.ssr.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map