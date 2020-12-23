/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/enter-type/enter-type.sass":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/Pages/enter-type/enter-type.sass ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ "./src/Attach sync recursive \\.":
/*!****************************!*\
  !*** ./src/Attach sync \. ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Fonts/OpenSans-Light.ttf": "./src/Attach/Fonts/OpenSans-Light.ttf",
	"./Fonts/OpenSans-LightItalic.ttf": "./src/Attach/Fonts/OpenSans-LightItalic.ttf",
	"./Fonts/OpenSans-Regular.ttf": "./src/Attach/Fonts/OpenSans-Regular.ttf",
	"./Fonts/more/OpenSans-Bold.ttf": "./src/Attach/Fonts/more/OpenSans-Bold.ttf",
	"./Fonts/more/OpenSans-BoldItalic.ttf": "./src/Attach/Fonts/more/OpenSans-BoldItalic.ttf",
	"./Fonts/more/OpenSans-ExtraBold.ttf": "./src/Attach/Fonts/more/OpenSans-ExtraBold.ttf",
	"./Fonts/more/OpenSans-ExtraBoldItalic.ttf": "./src/Attach/Fonts/more/OpenSans-ExtraBoldItalic.ttf",
	"./Fonts/more/OpenSans-Italic.ttf": "./src/Attach/Fonts/more/OpenSans-Italic.ttf",
	"./Fonts/more/OpenSans-SemiBold.ttf": "./src/Attach/Fonts/more/OpenSans-SemiBold.ttf",
	"./Fonts/more/OpenSans-SemiBoldItalic.ttf": "./src/Attach/Fonts/more/OpenSans-SemiBoldItalic.ttf",
	"./Images/back.jpg": "./src/Attach/Images/back.jpg",
	"./Images/background-login.png": "./src/Attach/Images/background-login.png",
	"./Images/boat1.jpg": "./src/Attach/Images/boat1.jpg",
	"./Images/boat10.jpg": "./src/Attach/Images/boat10.jpg",
	"./Images/boat11.jpg": "./src/Attach/Images/boat11.jpg",
	"./Images/boat2.jpg": "./src/Attach/Images/boat2.jpg",
	"./Images/boat3.jpg": "./src/Attach/Images/boat3.jpg",
	"./Images/boat4.jpg": "./src/Attach/Images/boat4.jpg",
	"./Images/boat5.jpg": "./src/Attach/Images/boat5.jpg",
	"./Images/boat6.jpg": "./src/Attach/Images/boat6.jpg",
	"./Images/boat7.jpg": "./src/Attach/Images/boat7.jpg",
	"./Images/boat8.jpg": "./src/Attach/Images/boat8.jpg",
	"./Images/boat9.jpg": "./src/Attach/Images/boat9.jpg",
	"./Images/button.jpg": "./src/Attach/Images/button.jpg",
	"./Images/diving-icon.svg": "./src/Attach/Images/diving-icon.svg",
	"./Images/fish-icon.svg": "./src/Attach/Images/fish-icon.svg",
	"./Images/food-icon.svg": "./src/Attach/Images/food-icon.svg",
	"./Images/icon-nav-list.svg": "./src/Attach/Images/icon-nav-list.svg",
	"./Images/icon-nav-map.svg": "./src/Attach/Images/icon-nav-map.svg",
	"./Images/icon-nav-settings.svg": "./src/Attach/Images/icon-nav-settings.svg",
	"./Images/logo-dark.svg": "./src/Attach/Images/logo-dark.svg",
	"./Images/logo-light.svg": "./src/Attach/Images/logo-light.svg"
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
webpackContext.id = "./src/Attach sync recursive \\.";

/***/ }),

/***/ "./src/Attach/Fonts/OpenSans-Light.ttf":
/*!*********************************************!*\
  !*** ./src/Attach/Fonts/OpenSans-Light.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-Light.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/OpenSans-LightItalic.ttf":
/*!***************************************************!*\
  !*** ./src/Attach/Fonts/OpenSans-LightItalic.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-LightItalic.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/OpenSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/Attach/Fonts/OpenSans-Regular.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-Regular.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-Bold.ttf":
/*!*************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-Bold.ttf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-Bold.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-BoldItalic.ttf":
/*!*******************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-BoldItalic.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-BoldItalic.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-ExtraBold.ttf":
/*!******************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-ExtraBold.ttf ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-ExtraBold.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-ExtraBoldItalic.ttf":
/*!************************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-ExtraBoldItalic.ttf ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-ExtraBoldItalic.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-Italic.ttf":
/*!***************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-Italic.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-Italic.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-SemiBold.ttf":
/*!*****************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-SemiBold.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-SemiBold.ttf");

/***/ }),

/***/ "./src/Attach/Fonts/more/OpenSans-SemiBoldItalic.ttf":
/*!***********************************************************!*\
  !*** ./src/Attach/Fonts/more/OpenSans-SemiBoldItalic.ttf ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/font/OpenSans-SemiBoldItalic.ttf");

/***/ }),

/***/ "./src/Attach/Images/back.jpg":
/*!************************************!*\
  !*** ./src/Attach/Images/back.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/back.jpg");

/***/ }),

/***/ "./src/Attach/Images/background-login.png":
/*!************************************************!*\
  !*** ./src/Attach/Images/background-login.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/background-login.png");

/***/ }),

/***/ "./src/Attach/Images/boat1.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat1.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat1.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat10.jpg":
/*!**************************************!*\
  !*** ./src/Attach/Images/boat10.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat10.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat11.jpg":
/*!**************************************!*\
  !*** ./src/Attach/Images/boat11.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat11.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat2.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat2.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat3.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat3.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat3.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat4.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat4.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat4.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat5.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat5.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat5.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat6.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat6.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat6.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat7.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat7.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat7.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat8.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat8.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat8.jpg");

/***/ }),

/***/ "./src/Attach/Images/boat9.jpg":
/*!*************************************!*\
  !*** ./src/Attach/Images/boat9.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/boat9.jpg");

/***/ }),

/***/ "./src/Attach/Images/button.jpg":
/*!**************************************!*\
  !*** ./src/Attach/Images/button.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/button.jpg");

/***/ }),

/***/ "./src/Attach/Images/diving-icon.svg":
/*!*******************************************!*\
  !*** ./src/Attach/Images/diving-icon.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/diving-icon.svg");

/***/ }),

/***/ "./src/Attach/Images/fish-icon.svg":
/*!*****************************************!*\
  !*** ./src/Attach/Images/fish-icon.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/fish-icon.svg");

/***/ }),

/***/ "./src/Attach/Images/food-icon.svg":
/*!*****************************************!*\
  !*** ./src/Attach/Images/food-icon.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/food-icon.svg");

/***/ }),

/***/ "./src/Attach/Images/icon-nav-list.svg":
/*!*********************************************!*\
  !*** ./src/Attach/Images/icon-nav-list.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/icon-nav-list.svg");

/***/ }),

/***/ "./src/Attach/Images/icon-nav-map.svg":
/*!********************************************!*\
  !*** ./src/Attach/Images/icon-nav-map.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/icon-nav-map.svg");

/***/ }),

/***/ "./src/Attach/Images/icon-nav-settings.svg":
/*!*************************************************!*\
  !*** ./src/Attach/Images/icon-nav-settings.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/icon-nav-settings.svg");

/***/ }),

/***/ "./src/Attach/Images/logo-dark.svg":
/*!*****************************************!*\
  !*** ./src/Attach/Images/logo-dark.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/logo-dark.svg");

/***/ }),

/***/ "./src/Attach/Images/logo-light.svg":
/*!******************************************!*\
  !*** ./src/Attach/Images/logo-light.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./attach/img/logo-light.svg");

/***/ }),

/***/ "./src/Basic/button/button.js":
/*!************************************!*\
  !*** ./src/Basic/button/button.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/Logic sync recursive \\.js$":
/*!******************************!*\
  !*** ./src/Logic sync \.js$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./src/Logic/core.js":
/*!***************************!*\
  !*** ./src/Logic/core.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Pages/enter-type/enter-type.js":
/*!********************************************!*\
  !*** ./src/Pages/enter-type/enter-type.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bundle */ "./src/bundle.js");
/* harmony import */ var _Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Plugins/eventone.js */ "./src/Plugins/eventone.js");


// Code libs and plugins


Object(_Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__["globalEventone"])();

/***/ }),

/***/ "./src/Pages/enter-type/enter-type.sass":
/*!**********************************************!*\
  !*** ./src/Pages/enter-type/enter-type.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./enter-type.sass */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/enter-type/enter-type.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/Plugins/eventone.js":
/*!*********************************!*\
  !*** ./src/Plugins/eventone.js ***!
  \*********************************/
/*! exports provided: globalEventone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalEventone", function() { return globalEventone; });
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
  __webpack_require__("./src/Attach sync recursive \\."),
]);









/***/ }),

/***/ "./webpack.importer.js":
/*!*****************************!*\
  !*** ./webpack.importer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ 0:
/*!*****************************************************************************************!*\
  !*** multi ./src/Pages/enter-type/enter-type.js ./src/Pages/enter-type/enter-type.sass ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/vodopoj/front/src/Pages/enter-type/enter-type.js */"./src/Pages/enter-type/enter-type.js");
module.exports = __webpack_require__(/*! /var/www/html/vodopoj/front/src/Pages/enter-type/enter-type.sass */"./src/Pages/enter-type/enter-type.sass");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL2VudGVyLXR5cGUvZW50ZXItdHlwZS5zYXNzPzFhMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2ggc3luYyBcXC4iLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1MaWdodC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1MaWdodEl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUJvbGRJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1FeHRyYUJvbGQudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1TZW1pQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLVNlbWlCb2xkSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9iYWNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0MS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDEwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0MTEuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0My5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDQuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDcuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ4LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0OS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYnV0dG9uLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9kaXZpbmctaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvZmlzaC1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9mb29kLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2ljb24tbmF2LWxpc3Quc3ZnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2ljb24tbmF2LW1hcC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvaWNvbi1uYXYtc2V0dGluZ3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2xvZ28tZGFyay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvbG9nby1saWdodC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2ljL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2ljL2RldmljZXIvZGV2aWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzaWMvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2ljL2xpbmsvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxvY2tzL3BhbmVsLW1haW4vcGFuZWwtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxvY2tzL3BhbmVsLW5hdi9fX2J1dHRvbi9wYW5lbC1uYXZfX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxvY2tzL3BhbmVsLW5hdi9wYW5lbC1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2ljIHN5bmMgXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9QYWdlcy9lbnRlci10eXBlL2VudGVyLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL2VudGVyLXR5cGUvZW50ZXItdHlwZS5zYXNzP2I1OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvZXZlbnRvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmltcG9ydGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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OztBQ3RCQTtBQUFBO0FBQUE7QUFBd0I7O0FBRXhCO0FBQzJEOztBQUUzRCwyRUFBYyxHOzs7Ozs7Ozs7OztBQ0xkLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsdWNBQW1QOztBQUVyUjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxREFBcUQ7O0FBRXJELHlFQUF5RTtBQUN6RSwwRUFBMEU7QUFDMUU7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxrREFBcUI7O0FBRTlDO0FBQ0EsRUFBRSx3REFBMEM7QUFDNUMsRUFBRSxzREFBd0M7QUFDMUM7O0FBRWlDO0FBQ0o7QUFDRTtBQUNKO0FBQ2E7QUFDRjs7Ozs7Ozs7Ozs7O0FDWnRDO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQTZDLEVBQUU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQiIsImZpbGUiOiJlbnRlci10eXBlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDg2OTE4NDE4NzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC92b2RvcG9qL2Zyb250L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIG1hcCA9IHtcblx0XCIuL0ZvbnRzL09wZW5TYW5zLUxpZ2h0LnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1MaWdodC50dGZcIixcblx0XCIuL0ZvbnRzL09wZW5TYW5zLUxpZ2h0SXRhbGljLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1MaWdodEl0YWxpYy50dGZcIixcblx0XCIuL0ZvbnRzL09wZW5TYW5zLVJlZ3VsYXIudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL09wZW5TYW5zLVJlZ3VsYXIudHRmXCIsXG5cdFwiLi9Gb250cy9tb3JlL09wZW5TYW5zLUJvbGQudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtQm9sZC50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtQm9sZEl0YWxpYy50dGZcIjogXCIuL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1Cb2xkSXRhbGljLnR0ZlwiLFxuXHRcIi4vRm9udHMvbW9yZS9PcGVuU2Fucy1FeHRyYUJvbGQudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZlwiLFxuXHRcIi4vRm9udHMvbW9yZS9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLnR0ZlwiLFxuXHRcIi4vRm9udHMvbW9yZS9PcGVuU2Fucy1JdGFsaWMudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtSXRhbGljLnR0ZlwiLFxuXHRcIi4vRm9udHMvbW9yZS9PcGVuU2Fucy1TZW1pQm9sZC50dGZcIjogXCIuL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1TZW1pQm9sZC50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmXCIsXG5cdFwiLi9JbWFnZXMvYmFjay5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JhY2suanBnXCIsXG5cdFwiLi9JbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5wbmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JhY2tncm91bmQtbG9naW4ucG5nXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDEuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0MS5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0MTAuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0MTAuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDExLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDExLmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQyLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDIuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDMuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0My5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0NC5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ0LmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQ1LmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDUuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDYuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0Ni5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0Ny5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ3LmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQ4LmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDguanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDkuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0OS5qcGdcIixcblx0XCIuL0ltYWdlcy9idXR0b24uanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9idXR0b24uanBnXCIsXG5cdFwiLi9JbWFnZXMvZGl2aW5nLWljb24uc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9kaXZpbmctaWNvbi5zdmdcIixcblx0XCIuL0ltYWdlcy9maXNoLWljb24uc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9maXNoLWljb24uc3ZnXCIsXG5cdFwiLi9JbWFnZXMvZm9vZC1pY29uLnN2Z1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvZm9vZC1pY29uLnN2Z1wiLFxuXHRcIi4vSW1hZ2VzL2ljb24tbmF2LWxpc3Quc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9pY29uLW5hdi1saXN0LnN2Z1wiLFxuXHRcIi4vSW1hZ2VzL2ljb24tbmF2LW1hcC5zdmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2ljb24tbmF2LW1hcC5zdmdcIixcblx0XCIuL0ltYWdlcy9pY29uLW5hdi1zZXR0aW5ncy5zdmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2ljb24tbmF2LXNldHRpbmdzLnN2Z1wiLFxuXHRcIi4vSW1hZ2VzL2xvZ28tZGFyay5zdmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2xvZ28tZGFyay5zdmdcIixcblx0XCIuL0ltYWdlcy9sb2dvLWxpZ2h0LnN2Z1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvbG9nby1saWdodC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvQXR0YWNoIHN5bmMgcmVjdXJzaXZlIFxcXFwuXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtTGlnaHQudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtTGlnaHRJdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtUmVndWxhci50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvZm9udC9PcGVuU2Fucy1Cb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLUJvbGRJdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLUV4dHJhQm9sZEl0YWxpYy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvZm9udC9PcGVuU2Fucy1JdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtU2VtaUJvbGQudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9iYWNrLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYmFja2dyb3VuZC1sb2dpbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDEwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDExLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQ0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQ3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0OS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2J1dHRvbi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2RpdmluZy1pY29uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvZmlzaC1pY29uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvZm9vZC1pY29uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvaWNvbi1uYXYtbGlzdC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2ljb24tbmF2LW1hcC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2ljb24tbmF2LXNldHRpbmdzLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvbG9nby1kYXJrLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvbG9nby1saWdodC5zdmdcIjsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcuYnV0dG9uJzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcuZGV2aWNlcic7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLmlucHV0JzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcubGluayc7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLnBhbmVsLW1haW4nOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5wYW5lbC1uYXZfX2J1dHRvbic7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiaW1wb3J0ICcuL19fYnV0dG9uL3BhbmVsLW5hdl9fYnV0dG9uJztcbi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5wYW5lbC1uYXYnOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jb3JlLmpzXCI6IFwiLi9zcmMvTG9naWMvY29yZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9Mb2dpYyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsImltcG9ydCAnLi8uLi8uLi9idW5kbGUnO1xuXG4vLyBDb2RlIGxpYnMgYW5kIHBsdWdpbnNcbmltcG9ydCB7IGdsb2JhbEV2ZW50b25lIH0gZnJvbSAnLi4vLi4vUGx1Z2lucy9ldmVudG9uZS5qcyc7XG5cbmdsb2JhbEV2ZW50b25lKCk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VudGVyLXR5cGUuc2Fzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgX19FVkVOVE9ORV9fID0ge307XG5cbmZ1bmN0aW9uIGFjdGlvbihsYWJlbCwgaW5QbGFjZUNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGxldCByZWFjdG9ycztcbiAgICBpZiAoX19FVkVOVE9ORV9fW2xhYmVsXSkgLy8gZ2l2aW5nIHNob3J0ZW4gbmFtZVxuICAgICAgcmVhY3RvcnMgPSBfX0VWRU5UT05FX19bbGFiZWxdO1xuXG4gICAgaWYgKHJlYWN0b3JzKSB7XG4gICAgICAvLyByZWFjdG9ycyBiZWZvcmUgbWFpbiByZWFjdG9yXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWFjdG9ycy5iZWZvcmUpICYmIHJlYWN0b3JzLmJlZm9yZS5sZW5ndGggPiAwKVxuICAgICAgICByZWFjdG9ycy5iZWZvcmUuZm9yRWFjaCgoWywgcmVhY3Rvcl0pID0+IHJlYWN0b3IoLi4uYXJncykpO1xuICAgICAgLy8gbWFpbiByZWFjdG9yIHdpdGggMCBjYWxsUGxhY2VcbiAgICAgIGlmIChpblBsYWNlQ2FsbGJhY2spXG4gICAgICAgIGluUGxhY2VDYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIC8vIHJlYWN0b3JzIGFmdGVyIG1haW4gcmVhY3RvclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVhY3RvcnMuYWZ0ZXIpICYmIHJlYWN0b3JzLmFmdGVyLmxlbmd0aCA+IDApXG4gICAgICAgIHJlYWN0b3JzLmFmdGVyLmZvckVhY2goKFssIHJlYWN0b3JdKSA9PiByZWFjdG9yKC4uLmFyZ3MpKTtcblxuICAgIH0gZWxzZSBpZiAoaW5QbGFjZUNhbGxiYWNrKSB7XG4gICAgICBpblBsYWNlQ2FsbGJhY2soLi4uYXJncyk7IC8vanVzdCBtYWluIHJlYWN0b3IgY2FsbFxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gd2hlbihhY3Rpb25MYWJlbCwgcmVhY3RvciwgY2FsbFBsYWNlID0gMCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkxhYmVsID09ICdzdHJpbmcnKSB7XG4gICAgd2hlbkxvZ2ljKGFjdGlvbkxhYmVsKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbkxhYmVsKSkge1xuICAgIGZvciAobGV0IHNpbmdsZUFjdGlvbkxhYmVsIG9mIGFjdGlvbkxhYmVsKSB7XG4gICAgICB3aGVuTG9naWMoc2luZ2xlQWN0aW9uTGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdoZW5Mb2dpYyhhY3Rpb25MYWJlbCkge1xuICAgIGxldCBwbGFjZURpbWVuc2lvbiA9IGNhbGxQbGFjZSA8IDAgPyAnYmVmb3JlJyA6ICdhZnRlcic7XG4gICAgaWYgKCFfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdKSAvLyBjaGVjayBhY3Rpb25MYWJlbCBleGlzdFxuICAgICAgX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXSA9IHt9OyAvLyBjcmVhdGUgaWYgbm90XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF1bcGxhY2VEaW1lbnNpb25dKSkgLy8gY2hlY2sgZGltZW5zaW9uIGlzIEFycmF5XG4gICAgICBfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdW3BsYWNlRGltZW5zaW9uXSA9IFtdOyAvLyBjcmVhdGUgaWYgbm90XG5cbiAgICBfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdW3BsYWNlRGltZW5zaW9uXS5wdXNoKFtjYWxsUGxhY2UsIHJlYWN0b3JdKTsgLy8gcHVzaGluZyByZWFjdG9yIGluc2lkZVxuICAgIF9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF1bcGxhY2VEaW1lbnNpb25dLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTsgLy8gc29ydGluZyByZWFjdG9ycyBieSBjYWxsUGxhY2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xvYmFsRXZlbnRvbmUoKSB7XG4gIHdpbmRvdy5fX0VWRU5UT05FX18gPSBfX0VWRU5UT05FX187XG4gIHdpbmRvdy5hY3Rpb24gPSBhY3Rpb247XG4gIHdpbmRvdy53aGVuID0gd2hlbjtcbn0iLCJjb25zdCBpbXBvcnRlciA9IHJlcXVpcmUoJy4uL3dlYnBhY2suaW1wb3J0ZXInKTtcclxuXHJcbmNvbnN0IGltcG9ydGVkID0gaW1wb3J0ZXIoW1xyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9Mb2dpYy8nLCB0cnVlLCAvXFwuanMkLyksXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL0F0dGFjaC8nLCB0cnVlLCAvXFwuLyksXHJcbl0pO1xyXG5cclxuaW1wb3J0ICcuL0Jhc2ljL2RldmljZXIvZGV2aWNlcic7XHJcbmltcG9ydCAnLi9CYXNpYy9pbnB1dC9pbnB1dCc7XHJcbmltcG9ydCAnLi9CYXNpYy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0ICcuL0Jhc2ljL2xpbmsvbGluayc7XHJcbmltcG9ydCAnLi9CbG9ja3MvcGFuZWwtbWFpbi9wYW5lbC1tYWluJztcclxuaW1wb3J0ICcuL0Jsb2Nrcy9wYW5lbC1uYXYvcGFuZWwtbmF2JztcclxuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHJlcSkge1xuICBsZXQgdGFyZ2V0cyA9IHt9O1xuICByZXEua2V5cygpLmZvckVhY2goaXRlbSA9PiB7IHRhcmdldHNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByZXEoaXRlbSk7IH0pO1xuICAvL2NvbnNvbGUubG9nKCd0YXJnZXRzJywgdGFyZ2V0cyk7XG4gIHJldHVybiB0YXJnZXRzO1xufVxuXG5mdW5jdGlvbiBpbXBvcnRlcihmaWxlSW1wb3J0cykge1xuICBjb25zdCBpbXBvcnRlZCA9IFtdO1xuICBmb3IgKGxldCByZXEgb2YgZmlsZUltcG9ydHMpIHtcbiAgICBpbXBvcnRlZC5wdXNoKGltcG9ydEFsbChyZXEpKTtcbiAgfVxuXG4gIHJldHVybiBpbXBvcnRlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbXBvcnRlcjsiXSwic291cmNlUm9vdCI6IiJ9