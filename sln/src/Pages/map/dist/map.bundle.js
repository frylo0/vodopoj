/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/map/map.sass":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/map/map.sass ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Pages/map/map.sass":
/*!********************************!*\
  !*** ./src/Pages/map/map.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./map.sass */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/map/map.sass");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_sass__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_sass__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_sass__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Basic/button/button.js":
/*!************************************!*\
  !*** ./src/Basic/button/button.js ***!
  \************************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.button'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Basic/devicer/devicer.js":
/*!**************************************!*\
  !*** ./src/Basic/devicer/devicer.js ***!
  \**************************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.devicer'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Basic/input/input.js":
/*!**********************************!*\
  !*** ./src/Basic/input/input.js ***!
  \**********************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.input'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Basic/link/link.js":
/*!********************************!*\
  !*** ./src/Basic/link/link.js ***!
  \********************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.link'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Blocks/panel-main/panel-main.js":
/*!*********************************************!*\
  !*** ./src/Blocks/panel-main/panel-main.js ***!
  \*********************************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.panel-main'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Blocks/panel-nav/__button/panel-nav__button.js":
/*!************************************************************!*\
  !*** ./src/Blocks/panel-nav/__button/panel-nav__button.js ***!
  \************************************************************/
/***/ (() => {

//$(document).ready(() => {
//   const pref = '.panel-nav__button'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Blocks/panel-nav/panel-nav.js":
/*!*******************************************!*\
  !*** ./src/Blocks/panel-nav/panel-nav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_panel_nav_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__button/panel-nav__button */ "./src/Blocks/panel-nav/__button/panel-nav__button.js");
/* harmony import */ var _button_panel_nav_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_panel_nav_button__WEBPACK_IMPORTED_MODULE_0__);

//$(document).ready(() => {
//   const pref = '.panel-nav'; // prefix for current folder
//   
//   $(pref+'')
//});

/***/ }),

/***/ "./src/Logic/core.js":
/*!***************************!*\
  !*** ./src/Logic/core.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/Logic sync recursive \\.js$":
/*!*******************************!*\
  !*** ./src/Logic/ sync \.js$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./core.js": "./src/Logic/core.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/Logic sync recursive \\.js$";

/***/ }),

/***/ "./src/Pages/map/map.js":
/*!******************************!*\
  !*** ./src/Pages/map/map.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bundle */ "./src/bundle.js");
/* harmony import */ var _Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Plugins/eventone.js */ "./src/Plugins/eventone.js");


// Code libs and plugins


(0,_Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__.globalEventone)();

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//ymaps.ready(init);
function init() {
   // Создание карты.
   var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
   });
}



/***/ }),

/***/ "./src/Plugins/eventone.js":
/*!*********************************!*\
  !*** ./src/Plugins/eventone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalEventone": () => /* binding */ globalEventone
/* harmony export */ });
const __EVENTONE__ = {};

function action(label, inPlaceCallback) {
  return function (...args) {
    let reactors;
    if (__EVENTONE__[label]) // giving shorten name
      reactors = __EVENTONE__[label];

    if (reactors) {
      // reactors before main reactor
      if (Array.isArray(reactors.before) && reactors.before.length > 0)
        reactors.before.forEach(([, reactor]) => reactor(...args));
      // main reactor with 0 callPlace
      if (inPlaceCallback)
        inPlaceCallback(...args);
      // reactors after main reactor
      if (Array.isArray(reactors.after) && reactors.after.length > 0)
        reactors.after.forEach(([, reactor]) => reactor(...args));

    } else if (inPlaceCallback) {
      inPlaceCallback(...args); //just main reactor call
    }
  };
}

function when(actionLabel, reactor, callPlace = 0) {
  if (typeof actionLabel == 'string') {
    whenLogic(actionLabel);
  } else if (Array.isArray(actionLabel)) {
    for (let singleActionLabel of actionLabel) {
      whenLogic(singleActionLabel);
    }
  }

  function whenLogic(actionLabel) {
    let placeDimension = callPlace < 0 ? 'before' : 'after';
    if (!__EVENTONE__[actionLabel]) // check actionLabel exist
      __EVENTONE__[actionLabel] = {}; // create if not
    if (!Array.isArray(__EVENTONE__[actionLabel][placeDimension])) // check dimension is Array
      __EVENTONE__[actionLabel][placeDimension] = []; // create if not

    __EVENTONE__[actionLabel][placeDimension].push([callPlace, reactor]); // pushing reactor inside
    __EVENTONE__[actionLabel][placeDimension].sort((a, b) => a[0] - b[0]); // sorting reactors by callPlace
  }
}

function globalEventone() {
  window.__EVENTONE__ = __EVENTONE__;
  window.action = action;
  window.when = when;
}

/***/ }),

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Basic_devicer_devicer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basic/devicer/devicer */ "./src/Basic/devicer/devicer.js");
/* harmony import */ var _Basic_devicer_devicer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Basic_devicer_devicer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Basic_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Basic/input/input */ "./src/Basic/input/input.js");
/* harmony import */ var _Basic_input_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Basic_input_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Basic_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic/button/button */ "./src/Basic/button/button.js");
/* harmony import */ var _Basic_button_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Basic_button_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Basic_link_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Basic/link/link */ "./src/Basic/link/link.js");
/* harmony import */ var _Basic_link_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Basic_link_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Blocks_panel_main_panel_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blocks/panel-main/panel-main */ "./src/Blocks/panel-main/panel-main.js");
/* harmony import */ var _Blocks_panel_main_panel_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Blocks_panel_main_panel_main__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Blocks_panel_nav_panel_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blocks/panel-nav/panel-nav */ "./src/Blocks/panel-nav/panel-nav.js");
const importer = __webpack_require__(/*! ../webpack.importer */ "./webpack.importer.js");

const imported = importer([
  __webpack_require__("./src/Logic sync recursive \\.js$"),
  //require.context('./Attach/', true, /\./),
]);









/***/ }),

/***/ "./webpack.importer.js":
/*!*****************************!*\
  !*** ./webpack.importer.js ***!
  \*****************************/
/***/ ((module) => {

function importAll(req) {
  let targets = {};
  req.keys().forEach(item => { targets[item.replace('./', '')] = req(item); });
  //console.log('targets', targets);
  return targets;
}

function importer(fileImports) {
  const imported = [];
  for (let req of fileImports) {
    imported.push(importAll(req));
  }

  return imported;
}

module.exports = importer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Pages/map/map.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/Pages/map/map.sass");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2RvcG9qLy4vc3JjL1BhZ2VzL21hcC9tYXAuc2Fzcz8wMDdlIiwid2VicGFjazovL3ZvZG9wb2ovLi9zcmMvUGFnZXMvbWFwL21hcC5zYXNzPzQxNDkiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92b2RvcG9qLy4vc3JjL0Jhc2ljL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL3NyYy9CYXNpYy9kZXZpY2VyL2RldmljZXIuanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL3NyYy9CYXNpYy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly92b2RvcG9qLy4vc3JjL0Jhc2ljL2xpbmsvbGluay5qcyIsIndlYnBhY2s6Ly92b2RvcG9qLy4vc3JjL0Jsb2Nrcy9wYW5lbC1tYWluL3BhbmVsLW1haW4uanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL3NyYy9CbG9ja3MvcGFuZWwtbmF2L19fYnV0dG9uL3BhbmVsLW5hdl9fYnV0dG9uLmpzIiwid2VicGFjazovL3ZvZG9wb2ovLi9zcmMvQmxvY2tzL3BhbmVsLW5hdi9wYW5lbC1uYXYuanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8vdmFyL3d3dy9odG1sL3ZvZG9wb2ovc2xuL3NyYy9Mb2dpY3xzeW5jfC9cXC5qcyQvIiwid2VicGFjazovL3ZvZG9wb2ovLi9zcmMvUGFnZXMvbWFwL21hcC5qcyIsIndlYnBhY2s6Ly92b2RvcG9qLy4vc3JjL1BsdWdpbnMvZXZlbnRvbmUuanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL3NyYy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai8uL3dlYnBhY2suaW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdm9kb3Bvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92b2RvcG9qL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZvZG9wb2ovd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZvZG9wb2ovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92b2RvcG9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdm9kb3Bvai93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0Y7QUFDL0YsWUFBZ1Q7O0FBRWhUOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHVRQUFPOzs7O0FBSXhCLGlFQUFlLDhRQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxH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QyxrREFBcUI7O0FBRTlDO0FBQ0EsRUFBRSx3REFBMEM7QUFDNUM7QUFDQTs7QUFFaUM7QUFDSjtBQUNFO0FBQ0o7QUFDYTtBQUNGOzs7Ozs7Ozs7OztBQ1p0QztBQUNBO0FBQ0EsOEJBQThCLDZDQUE2QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vc3JjL1BhZ2VzL21hcC9kaXN0L21hcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFwLnNhc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5idXR0b24nOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5kZXZpY2VyJzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcuaW5wdXQnOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5saW5rJzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcucGFuZWwtbWFpbic7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLnBhbmVsLW5hdl9fYnV0dG9uJzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCJpbXBvcnQgJy4vX19idXR0b24vcGFuZWwtbmF2X19idXR0b24nO1xuLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLnBhbmVsLW5hdic7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwidmFyIG1hcCA9IHtcblx0XCIuL2NvcmUuanNcIjogXCIuL3NyYy9Mb2dpYy9jb3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL0xvZ2ljIHN5bmMgcmVjdXJzaXZlIFxcXFwuanMkXCI7IiwiaW1wb3J0ICcuLy4uLy4uL2J1bmRsZSc7XG5cbi8vIENvZGUgbGlicyBhbmQgcGx1Z2luc1xuaW1wb3J0IHsgZ2xvYmFsRXZlbnRvbmUgfSBmcm9tICcuLi8uLi9QbHVnaW5zL2V2ZW50b25lLmpzJztcblxuZ2xvYmFsRXZlbnRvbmUoKTtcblxuLy8g0KTRg9C90LrRhtC40Y8geW1hcHMucmVhZHkoKSDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvdCwLCDQutC+0LPQtNCwXG4vLyDQt9Cw0LPRgNGD0LfRj9GC0YHRjyDQstGB0LUg0LrQvtC80L/QvtC90LXQvdGC0YsgQVBJLCDQsCDRgtCw0LrQttC1INC60L7Qs9C00LAg0LHRg9C00LXRgiDQs9C+0YLQvtCy0L4gRE9NLdC00LXRgNC10LLQvi5cbi8veW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtGLLlxuICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiy5cbiAgICAgIC8vINCf0L7RgNGP0LTQvtC6INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOOiDCq9GI0LjRgNC+0YLQsCwg0LTQvtC70LPQvtGC0LDCuy5cbiAgICAgIC8vINCn0YLQvtCx0Ysg0L3QtSDQvtC/0YDQtdC00LXQu9GP0YLRjCDQutC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiyDQstGA0YPRh9C90YPRjixcbiAgICAgIC8vINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INCe0L/RgNC10LTQtdC70LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgICAgY2VudGVyOiBbNTUuNzYsIDM3LjY0XSxcbiAgICAgIC8vINCj0YDQvtCy0LXQvdGMINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjRjy4g0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjzpcbiAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxuICAgICAgem9vbTogN1xuICAgfSk7XG59XG5cbiIsImNvbnN0IF9fRVZFTlRPTkVfXyA9IHt9O1xuXG5mdW5jdGlvbiBhY3Rpb24obGFiZWwsIGluUGxhY2VDYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBsZXQgcmVhY3RvcnM7XG4gICAgaWYgKF9fRVZFTlRPTkVfX1tsYWJlbF0pIC8vIGdpdmluZyBzaG9ydGVuIG5hbWVcbiAgICAgIHJlYWN0b3JzID0gX19FVkVOVE9ORV9fW2xhYmVsXTtcblxuICAgIGlmIChyZWFjdG9ycykge1xuICAgICAgLy8gcmVhY3RvcnMgYmVmb3JlIG1haW4gcmVhY3RvclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVhY3RvcnMuYmVmb3JlKSAmJiByZWFjdG9ycy5iZWZvcmUubGVuZ3RoID4gMClcbiAgICAgICAgcmVhY3RvcnMuYmVmb3JlLmZvckVhY2goKFssIHJlYWN0b3JdKSA9PiByZWFjdG9yKC4uLmFyZ3MpKTtcbiAgICAgIC8vIG1haW4gcmVhY3RvciB3aXRoIDAgY2FsbFBsYWNlXG4gICAgICBpZiAoaW5QbGFjZUNhbGxiYWNrKVxuICAgICAgICBpblBsYWNlQ2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAvLyByZWFjdG9ycyBhZnRlciBtYWluIHJlYWN0b3JcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlYWN0b3JzLmFmdGVyKSAmJiByZWFjdG9ycy5hZnRlci5sZW5ndGggPiAwKVxuICAgICAgICByZWFjdG9ycy5hZnRlci5mb3JFYWNoKChbLCByZWFjdG9yXSkgPT4gcmVhY3RvciguLi5hcmdzKSk7XG5cbiAgICB9IGVsc2UgaWYgKGluUGxhY2VDYWxsYmFjaykge1xuICAgICAgaW5QbGFjZUNhbGxiYWNrKC4uLmFyZ3MpOyAvL2p1c3QgbWFpbiByZWFjdG9yIGNhbGxcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdoZW4oYWN0aW9uTGFiZWwsIHJlYWN0b3IsIGNhbGxQbGFjZSA9IDApIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25MYWJlbCA9PSAnc3RyaW5nJykge1xuICAgIHdoZW5Mb2dpYyhhY3Rpb25MYWJlbCk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb25MYWJlbCkpIHtcbiAgICBmb3IgKGxldCBzaW5nbGVBY3Rpb25MYWJlbCBvZiBhY3Rpb25MYWJlbCkge1xuICAgICAgd2hlbkxvZ2ljKHNpbmdsZUFjdGlvbkxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3aGVuTG9naWMoYWN0aW9uTGFiZWwpIHtcbiAgICBsZXQgcGxhY2VEaW1lbnNpb24gPSBjYWxsUGxhY2UgPCAwID8gJ2JlZm9yZScgOiAnYWZ0ZXInO1xuICAgIGlmICghX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXSkgLy8gY2hlY2sgYWN0aW9uTGFiZWwgZXhpc3RcbiAgICAgIF9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF0gPSB7fTsgLy8gY3JlYXRlIGlmIG5vdFxuICAgIGlmICghQXJyYXkuaXNBcnJheShfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdW3BsYWNlRGltZW5zaW9uXSkpIC8vIGNoZWNrIGRpbWVuc2lvbiBpcyBBcnJheVxuICAgICAgX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXVtwbGFjZURpbWVuc2lvbl0gPSBbXTsgLy8gY3JlYXRlIGlmIG5vdFxuXG4gICAgX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXVtwbGFjZURpbWVuc2lvbl0ucHVzaChbY2FsbFBsYWNlLCByZWFjdG9yXSk7IC8vIHB1c2hpbmcgcmVhY3RvciBpbnNpZGVcbiAgICBfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdW3BsYWNlRGltZW5zaW9uXS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7IC8vIHNvcnRpbmcgcmVhY3RvcnMgYnkgY2FsbFBsYWNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsb2JhbEV2ZW50b25lKCkge1xuICB3aW5kb3cuX19FVkVOVE9ORV9fID0gX19FVkVOVE9ORV9fO1xuICB3aW5kb3cuYWN0aW9uID0gYWN0aW9uO1xuICB3aW5kb3cud2hlbiA9IHdoZW47XG59IiwiY29uc3QgaW1wb3J0ZXIgPSByZXF1aXJlKCcuLi93ZWJwYWNrLmltcG9ydGVyJyk7XHJcblxyXG5jb25zdCBpbXBvcnRlZCA9IGltcG9ydGVyKFtcclxuICByZXF1aXJlLmNvbnRleHQoJy4vTG9naWMvJywgdHJ1ZSwgL1xcLmpzJC8pLFxyXG4gIC8vcmVxdWlyZS5jb250ZXh0KCcuL0F0dGFjaC8nLCB0cnVlLCAvXFwuLyksXHJcbl0pO1xyXG5cclxuaW1wb3J0ICcuL0Jhc2ljL2RldmljZXIvZGV2aWNlcic7XHJcbmltcG9ydCAnLi9CYXNpYy9pbnB1dC9pbnB1dCc7XHJcbmltcG9ydCAnLi9CYXNpYy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0ICcuL0Jhc2ljL2xpbmsvbGluayc7XHJcbmltcG9ydCAnLi9CbG9ja3MvcGFuZWwtbWFpbi9wYW5lbC1tYWluJztcclxuaW1wb3J0ICcuL0Jsb2Nrcy9wYW5lbC1uYXYvcGFuZWwtbmF2JztcclxuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHJlcSkge1xuICBsZXQgdGFyZ2V0cyA9IHt9O1xuICByZXEua2V5cygpLmZvckVhY2goaXRlbSA9PiB7IHRhcmdldHNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByZXEoaXRlbSk7IH0pO1xuICAvL2NvbnNvbGUubG9nKCd0YXJnZXRzJywgdGFyZ2V0cyk7XG4gIHJldHVybiB0YXJnZXRzO1xufVxuXG5mdW5jdGlvbiBpbXBvcnRlcihmaWxlSW1wb3J0cykge1xuICBjb25zdCBpbXBvcnRlZCA9IFtdO1xuICBmb3IgKGxldCByZXEgb2YgZmlsZUltcG9ydHMpIHtcbiAgICBpbXBvcnRlZC5wdXNoKGltcG9ydEFsbChyZXEpKTtcbiAgfVxuXG4gIHJldHVybiBpbXBvcnRlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbXBvcnRlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvUGFnZXMvbWFwL21hcC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9QYWdlcy9tYXAvbWFwLnNhc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9