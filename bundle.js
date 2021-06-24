/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  text-align:center;\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style-type: none;\\r\\n    padding-left: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  clear: both;\\r\\n  overflow: auto;\\r\\n  background-color: black;\\r\\n  padding: 1%;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  float: left;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  color: white;\\r\\n  display: inline-block;\\r\\n  padding: 10px;\\r\\n  font-size: 20px;\\r\\n  font-family: raleway;\\r\\n}\\r\\n\\r\\nnav ul li:hover {\\r\\n  color: purple;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  /* Add shadows to create the \\\"card\\\" effect */\\r\\n  margin: auto;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n  transition: 0.3s;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n/* On mouse-over, add a deeper shadow */\\r\\n.card:hover {\\r\\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n/* Add some padding inside the card container */\\r\\n.card .container {\\r\\n  padding: 2px 16px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _persondoesntexist1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persondoesntexist1.jpg */ \"./src/persondoesntexist1.jpg\");\n/* harmony import */ var _persondoesntexist2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persondoesntexist2.jpg */ \"./src/persondoesntexist2.jpg\");\n/* harmony import */ var _persondoesntexist3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persondoesntexist3.jpg */ \"./src/persondoesntexist3.jpg\");\n\r\n\r\n\r\n\r\nconst about = () => {\r\n  const main_tag = document.createElement(\"main\");\r\n  const content_tag = document.getElementById(\"content\");\r\n  main_tag.id = \"tab\";\r\n  main_tag.innerHTML = `<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img\r\n      src=${_persondoesntexist1_jpg__WEBPACK_IMPORTED_MODULE_0__}\r\n      alt=\"Avatar\"\r\n      style=\"width: 20%\"\r\n    />\r\n    <h4>\r\n      <b\r\n        ><a href=\"https://thispersondoesnotexist.com/\"\r\n          >This person does not exist.</a\r\n        ></b\r\n      >\r\n    </h4>\r\n    <p>Founder</p>\r\n    <p>555-555-5554</p>\r\n    <p>totallyRealEmail@notFake.com</p>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img\r\n      src=${_persondoesntexist2_jpg__WEBPACK_IMPORTED_MODULE_1__}\r\n      alt=\"Avatar\"\r\n      style=\"width: 20%\"\r\n    />\r\n    <h4>\r\n      <b\r\n        ><a href=\"https://thispersondoesnotexist.com/\"\r\n          >This person does not exist.</a\r\n        ></b\r\n      >\r\n    </h4>\r\n    <p>Co-Owner</p>\r\n    <p>555-555-5554</p>\r\n    <p>totallyRealEmail@notFake.com</p>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img\r\n      src=${_persondoesntexist3_jpg__WEBPACK_IMPORTED_MODULE_2__}\r\n      alt=\"Avatar\"\r\n      style=\"width: 20%\"\r\n    />\r\n    <h4>\r\n      <b\r\n        ><a href=\"https://thispersondoesnotexist.com/\"\r\n          >This person does not exist.</a\r\n        ></b\r\n      >\r\n    </h4>\r\n    <p>Co-Owner</p>\r\n    <p>555-555-5554</p>\r\n    <p>totallyRealEmail@notFake.com</p>\r\n  </div>\r\n</div>`\r\ncontent_tag.appendChild(main_tag);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\r\n\n\n//# sourceURL=webpack://restaurant/./src/about-tab.js?");

/***/ }),

/***/ "./src/acai_logo_horizontal.png":
/*!**************************************!*\
  !*** ./src/acai_logo_horizontal.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d5dac86f939f6a7e4ff.png\";\n\n//# sourceURL=webpack://restaurant/./src/acai_logo_horizontal.png?");

/***/ }),

/***/ "./src/classic-bowl.png":
/*!******************************!*\
  !*** ./src/classic-bowl.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f10b54e868856454cfc9.png\";\n\n//# sourceURL=webpack://restaurant/./src/classic-bowl.png?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _acai_logo_horizontal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acai_logo_horizontal.png */ \"./src/acai_logo_horizontal.png\");\n\r\n\r\nconst header = () => {\r\n  const header_tag = document.createElement(\"header\");\r\n  const content_tag = document.getElementById(\"content\");\r\n  header_tag.id = \"nav\";\r\n  header_tag.innerHTML = ` <div class=\"logo\">\r\n  <img src=${_acai_logo_horizontal_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"\" width=\"500\" />\r\n</div>\r\n<nav>\r\n  <ul>\r\n    <li id=\"home_tab_btn\">Home</li>\r\n    <li id=\"menu_tab_btn\">Menu</li>\r\n    <li id=\"about_tab_btn\">About</li>\r\n  </ul>\r\n</nav>`;\r\n  content_tag.appendChild(header_tag);\r\n  content_tag.appendChild(document.createElement(\"hr\"));\r\n  content_tag.appendChild(document.createElement(\"br\"));\r\n  content_tag.appendChild(document.createElement(\"br\"));\r\n  content_tag.appendChild(document.createElement(\"br\"));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\r\n  const main_tag = document.createElement(\"main\");\r\n  const content_tag = document.getElementById(\"content\");\r\n  main_tag.id = \"tab\";\r\n  main_tag.innerHTML = `<div class=\"card\">\r\n  <div class=\"container\">\r\n    <h4><b>WHY ACAI EXPRESS?</b></h4>\r\n    <p>\r\n      Acai Express creates an experience for people to “unplug” from the\r\n      noise and stress of day-to-day life. Using our Premium Organic\r\n      100% Grade “A” Acai as the centerpiece, our guests can practice an\r\n      active and healthful eating lifestyle without giving up flavor…\r\n      They are always eager to “refresh” & feed their mind, body & soul\r\n      with our array of delicious Acai Express super food bowls.\r\n      <br />Our Mission is simple - To Serve the best tasting, highest\r\n      quality super food bowls that go hand in hand with a life style\r\n      based around health and fun.\r\n    </p>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <h4><b>Schedule</b></h4>\r\n    <ul>\r\n        <li>Sunday: 8am - 8pm</li>\r\n        <li>Monday: 6am - 6pm</li>\r\n        <li>Tuesday: 6am - 6pm</li>\r\n        <li>Wednesday: 6am - 6pm</li>\r\n        <li>Thursday: 6am - 10pm</li>\r\n        <li>Friday: 6am - 10pm</li>\r\n        <li>Saturday: 8am - 10pm</li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <h4><b>Location</b></h4>\r\n    <p>221b Baker Street, London</p>\r\n  </div>\r\n</div>`\r\ncontent_tag.appendChild(main_tag);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\r\n\n\n//# sourceURL=webpack://restaurant/./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-tab */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tab */ \"./src/menu-tab.js\");\n/* harmony import */ var _about_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-tab */ \"./src/about-tab.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst display_controller = (function (doc) {\r\n  const initial_load = () => {\r\n    const content_tag = doc.createElement(\"div\");\r\n    content_tag.setAttribute(\"id\", \"content\");\r\n    doc.body.appendChild(content_tag);\r\n    _load_header();\r\n    (0,_home_tab__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    const _tab_btn_tags = [\r\n      doc.getElementById(\"home_tab_btn\"),\r\n      doc.getElementById(\"menu_tab_btn\"),\r\n      doc.getElementById(\"about_tab_btn\"),\r\n    ];\r\n    _tab_btn_tags[0].onclick = function (event) {\r\n      display_controller.load_home();\r\n    };\r\n    _tab_btn_tags[1].onclick = function (event) {\r\n      display_controller.load_menu();\r\n    };\r\n    _tab_btn_tags[2].onclick = function (event) {\r\n      display_controller.load_about();\r\n    };\r\n  };\r\n\r\n  const _load_header = () => {\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n  };\r\n\r\n  const load_home = () => {\r\n    _unload_tab(doc.getElementById(\"tab\"));\r\n    (0,_home_tab__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  };\r\n\r\n  const load_menu = () => {\r\n    _unload_tab(doc.getElementById(\"tab\"));\r\n    (0,_menu_tab__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  };\r\n\r\n  const load_about = () => {\r\n    _unload_tab(doc.getElementById(\"tab\"));\r\n    (0,_about_tab__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n  };\r\n\r\n  const _unload_tab = (parent) => {\r\n    while (parent.firstChild) {\r\n      parent.removeChild(parent.firstChild);\r\n    }\r\n    parent.parentNode.removeChild(parent);\r\n  };\r\n\r\n  return {\r\n    initial_load,\r\n    load_home,\r\n    load_menu,\r\n    load_about,\r\n  };\r\n})(document);\r\n\r\ndocument.onload = display_controller.initial_load();\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classic_bowl_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classic-bowl.png */ \"./src/classic-bowl.png\");\n/* harmony import */ var _valentine_bowl_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valentine-bowl.png */ \"./src/valentine-bowl.png\");\n/* harmony import */ var _surfer_bowl_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surfer-bowl.png */ \"./src/surfer-bowl.png\");\n\r\n\r\n\r\n\r\nconst menu = () => {\r\n  const main_tag = document.createElement(\"main\");\r\n  const content_tag = document.getElementById(\"content\");\r\n  main_tag.id = \"tab\";\r\n  main_tag.innerHTML = `<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img src=${_classic_bowl_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"Avatar\" style=\"width:20%\">\r\n    <h4><b>CLASSIC BOWL</b></h4>\r\n    <p>Acai, granola and banana.</p>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img src=${_valentine_bowl_png__WEBPACK_IMPORTED_MODULE_1__} alt=\"Avatar\" style=\"width:20%\">\r\n    <h4><b>VALENTINE BOWL</b></h4>\r\n    <p>Acai, coconut oil, granola, banana, nutella, strawberry and coconut flakes.</p>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"card\">\r\n  <div class=\"container\">\r\n    <img src=${_surfer_bowl_png__WEBPACK_IMPORTED_MODULE_2__} alt=\"Avatar\" style=\"width:20%\">\r\n    <h4><b>SURFER BOWL</b></h4>\r\n    <p>Acai, coconut oil, granola, banana, strawberry, blueberry, coconut flakes and hemp seed.</p>\r\n  </div>\r\n</div>`\r\ncontent_tag.appendChild(main_tag);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu-tab.js?");

/***/ }),

/***/ "./src/persondoesntexist1.jpg":
/*!************************************!*\
  !*** ./src/persondoesntexist1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00736572f8beb430ae9d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/persondoesntexist1.jpg?");

/***/ }),

/***/ "./src/persondoesntexist2.jpg":
/*!************************************!*\
  !*** ./src/persondoesntexist2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"664c7ad71a1a69099d56.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/persondoesntexist2.jpg?");

/***/ }),

/***/ "./src/persondoesntexist3.jpg":
/*!************************************!*\
  !*** ./src/persondoesntexist3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad5a123a31a058a67e21.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/persondoesntexist3.jpg?");

/***/ }),

/***/ "./src/surfer-bowl.png":
/*!*****************************!*\
  !*** ./src/surfer-bowl.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8dbf078da56f33815ef0.png\";\n\n//# sourceURL=webpack://restaurant/./src/surfer-bowl.png?");

/***/ }),

/***/ "./src/valentine-bowl.png":
/*!********************************!*\
  !*** ./src/valentine-bowl.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f619ee6b63574ce4ffa.png\";\n\n//# sourceURL=webpack://restaurant/./src/valentine-bowl.png?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;