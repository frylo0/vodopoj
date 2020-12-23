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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/settings/settings.sass":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/Pages/settings/settings.sass ***!
  \***********************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/Pages/settings/settings.js":
/*!****************************************!*\
  !*** ./src/Pages/settings/settings.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bundle */ "./src/bundle.js");
/* harmony import */ var _Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Plugins/eventone.js */ "./src/Plugins/eventone.js");


// Code libs and plugins


Object(_Plugins_eventone_js__WEBPACK_IMPORTED_MODULE_1__["globalEventone"])();

/***/ }),

/***/ "./src/Pages/settings/settings.sass":
/*!******************************************!*\
  !*** ./src/Pages/settings/settings.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./settings.sass */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/Pages/settings/settings.sass");

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

/***/ 6:
/*!*********************************************************************************!*\
  !*** multi ./src/Pages/settings/settings.js ./src/Pages/settings/settings.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/vodopoj/front/src/Pages/settings/settings.js */"./src/Pages/settings/settings.js");
module.exports = __webpack_require__(/*! /var/www/html/vodopoj/front/src/Pages/settings/settings.sass */"./src/Pages/settings/settings.sass");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnNhc3M/ZTcyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaCBzeW5jIFxcLiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL09wZW5TYW5zLUxpZ2h0LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL09wZW5TYW5zLUxpZ2h0SXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL09wZW5TYW5zLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvRm9udHMvbW9yZS9PcGVuU2Fucy1Cb2xkLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtQm9sZEl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUV4dHJhQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUV4dHJhQm9sZEl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLVNlbWlCb2xkLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JhY2suanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JhY2tncm91bmQtbG9naW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0MTAuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQxMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDIuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0NC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDUuanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ2LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDguanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9idXR0b24uanBnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2RpdmluZy1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9maXNoLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9BdHRhY2gvSW1hZ2VzL2Zvb2QtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvaWNvbi1uYXYtbGlzdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvaWNvbi1uYXYtbWFwLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9pY29uLW5hdi1zZXR0aW5ncy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0F0dGFjaC9JbWFnZXMvbG9nby1kYXJrLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvQXR0YWNoL0ltYWdlcy9sb2dvLWxpZ2h0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzaWMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzaWMvZGV2aWNlci9kZXZpY2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNpYy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzaWMvbGluay9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9CbG9ja3MvcGFuZWwtbWFpbi9wYW5lbC1tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9CbG9ja3MvcGFuZWwtbmF2L19fYnV0dG9uL3BhbmVsLW5hdl9fYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9CbG9ja3MvcGFuZWwtbmF2L3BhbmVsLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9naWMgc3luYyBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9QYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zYXNzP2EwY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsdWdpbnMvZXZlbnRvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmltcG9ydGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQUE7QUFBd0I7O0FBRXhCO0FBQzJEOztBQUUzRCwyRUFBYyxHOzs7Ozs7Ozs7OztBQ0xkLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsaWNBQWlQOztBQUVuUjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxREFBcUQ7O0FBRXJELHlFQUF5RTtBQUN6RSwwRUFBMEU7QUFDMUU7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxrREFBcUI7O0FBRTlDO0FBQ0EsRUFBRSx3REFBMEM7QUFDNUMsRUFBRSxzREFBd0M7QUFDMUM7O0FBRWlDO0FBQ0o7QUFDRTtBQUNKO0FBQ2E7QUFDRjs7Ozs7Ozs7Ozs7O0FDWnRDO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQTZDLEVBQUU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQiIsImZpbGUiOiJzZXR0aW5ncy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA4NjkxODQyMTQ2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi92YXIvd3d3L2h0bWwvdm9kb3Bvai9mcm9udC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBtYXAgPSB7XG5cdFwiLi9Gb250cy9PcGVuU2Fucy1MaWdodC50dGZcIjogXCIuL3NyYy9BdHRhY2gvRm9udHMvT3BlblNhbnMtTGlnaHQudHRmXCIsXG5cdFwiLi9Gb250cy9PcGVuU2Fucy1MaWdodEl0YWxpYy50dGZcIjogXCIuL3NyYy9BdHRhY2gvRm9udHMvT3BlblNhbnMtTGlnaHRJdGFsaWMudHRmXCIsXG5cdFwiLi9Gb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZlwiLFxuXHRcIi4vRm9udHMvbW9yZS9PcGVuU2Fucy1Cb2xkLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUJvbGQudHRmXCIsXG5cdFwiLi9Gb250cy9tb3JlL09wZW5TYW5zLUJvbGRJdGFsaWMudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtQm9sZEl0YWxpYy50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUV4dHJhQm9sZC50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUV4dHJhQm9sZEl0YWxpYy50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtSXRhbGljLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLUl0YWxpYy50dGZcIixcblx0XCIuL0ZvbnRzL21vcmUvT3BlblNhbnMtU2VtaUJvbGQudHRmXCI6IFwiLi9zcmMvQXR0YWNoL0ZvbnRzL21vcmUvT3BlblNhbnMtU2VtaUJvbGQudHRmXCIsXG5cdFwiLi9Gb250cy9tb3JlL09wZW5TYW5zLVNlbWlCb2xkSXRhbGljLnR0ZlwiOiBcIi4vc3JjL0F0dGFjaC9Gb250cy9tb3JlL09wZW5TYW5zLVNlbWlCb2xkSXRhbGljLnR0ZlwiLFxuXHRcIi4vSW1hZ2VzL2JhY2suanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9iYWNrLmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JhY2tncm91bmQtbG9naW4ucG5nXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLnBuZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQxLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDEuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDEwLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDEwLmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQxMS5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQxMS5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0Mi5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQyLmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQzLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDMuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDQuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0NC5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0NS5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ1LmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQ2LmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDYuanBnXCIsXG5cdFwiLi9JbWFnZXMvYm9hdDcuanBnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9ib2F0Ny5qcGdcIixcblx0XCIuL0ltYWdlcy9ib2F0OC5qcGdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2JvYXQ4LmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2JvYXQ5LmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYm9hdDkuanBnXCIsXG5cdFwiLi9JbWFnZXMvYnV0dG9uLmpwZ1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvYnV0dG9uLmpwZ1wiLFxuXHRcIi4vSW1hZ2VzL2RpdmluZy1pY29uLnN2Z1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvZGl2aW5nLWljb24uc3ZnXCIsXG5cdFwiLi9JbWFnZXMvZmlzaC1pY29uLnN2Z1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvZmlzaC1pY29uLnN2Z1wiLFxuXHRcIi4vSW1hZ2VzL2Zvb2QtaWNvbi5zdmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2Zvb2QtaWNvbi5zdmdcIixcblx0XCIuL0ltYWdlcy9pY29uLW5hdi1saXN0LnN2Z1wiOiBcIi4vc3JjL0F0dGFjaC9JbWFnZXMvaWNvbi1uYXYtbGlzdC5zdmdcIixcblx0XCIuL0ltYWdlcy9pY29uLW5hdi1tYXAuc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9pY29uLW5hdi1tYXAuc3ZnXCIsXG5cdFwiLi9JbWFnZXMvaWNvbi1uYXYtc2V0dGluZ3Muc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9pY29uLW5hdi1zZXR0aW5ncy5zdmdcIixcblx0XCIuL0ltYWdlcy9sb2dvLWRhcmsuc3ZnXCI6IFwiLi9zcmMvQXR0YWNoL0ltYWdlcy9sb2dvLWRhcmsuc3ZnXCIsXG5cdFwiLi9JbWFnZXMvbG9nby1saWdodC5zdmdcIjogXCIuL3NyYy9BdHRhY2gvSW1hZ2VzL2xvZ28tbGlnaHQuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL0F0dGFjaCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLUxpZ2h0LnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLUxpZ2h0SXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLVJlZ3VsYXIudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtQm9sZC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvZm9udC9PcGVuU2Fucy1Cb2xkSXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLUV4dHJhQm9sZC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvZm9udC9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ZvbnQvT3BlblNhbnMtSXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLVNlbWlCb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9mb250L09wZW5TYW5zLVNlbWlCb2xkSXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYmFjay5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JhY2tncm91bmQtbG9naW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0MS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQxMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQxMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0NC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQ1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9ib2F0Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2JvYXQ4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2F0dGFjaC9pbWcvYm9hdDkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9idXR0b24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9kaXZpbmctaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2Zpc2gtaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2Zvb2QtaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2ljb24tbmF2LWxpc3Quc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9pY29uLW5hdi1tYXAuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXR0YWNoL2ltZy9pY29uLW5hdi1zZXR0aW5ncy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2xvZ28tZGFyay5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hdHRhY2gvaW1nL2xvZ28tbGlnaHQuc3ZnXCI7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLmJ1dHRvbic7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLmRldmljZXInOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5pbnB1dCc7IC8vIHByZWZpeCBmb3IgY3VycmVudCBmb2xkZXJcbi8vICAgXG4vLyAgICQocHJlZisnJylcbi8vfSk7IiwiLy8kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4vLyAgIGNvbnN0IHByZWYgPSAnLmxpbmsnOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsIi8vJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuLy8gICBjb25zdCBwcmVmID0gJy5wYW5lbC1tYWluJzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCIvLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcucGFuZWwtbmF2X19idXR0b24nOyAvLyBwcmVmaXggZm9yIGN1cnJlbnQgZm9sZGVyXG4vLyAgIFxuLy8gICAkKHByZWYrJycpXG4vL30pOyIsImltcG9ydCAnLi9fX2J1dHRvbi9wYW5lbC1uYXZfX2J1dHRvbic7XG4vLyQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbi8vICAgY29uc3QgcHJlZiA9ICcucGFuZWwtbmF2JzsgLy8gcHJlZml4IGZvciBjdXJyZW50IGZvbGRlclxuLy8gICBcbi8vICAgJChwcmVmKycnKVxuLy99KTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29yZS5qc1wiOiBcIi4vc3JjL0xvZ2ljL2NvcmUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvTG9naWMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJpbXBvcnQgJy4vLi4vLi4vYnVuZGxlJztcblxuLy8gQ29kZSBsaWJzIGFuZCBwbHVnaW5zXG5pbXBvcnQgeyBnbG9iYWxFdmVudG9uZSB9IGZyb20gJy4uLy4uL1BsdWdpbnMvZXZlbnRvbmUuanMnO1xuXG5nbG9iYWxFdmVudG9uZSgpOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZXR0aW5ncy5zYXNzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBfX0VWRU5UT05FX18gPSB7fTtcblxuZnVuY3Rpb24gYWN0aW9uKGxhYmVsLCBpblBsYWNlQ2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgbGV0IHJlYWN0b3JzO1xuICAgIGlmIChfX0VWRU5UT05FX19bbGFiZWxdKSAvLyBnaXZpbmcgc2hvcnRlbiBuYW1lXG4gICAgICByZWFjdG9ycyA9IF9fRVZFTlRPTkVfX1tsYWJlbF07XG5cbiAgICBpZiAocmVhY3RvcnMpIHtcbiAgICAgIC8vIHJlYWN0b3JzIGJlZm9yZSBtYWluIHJlYWN0b3JcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlYWN0b3JzLmJlZm9yZSkgJiYgcmVhY3RvcnMuYmVmb3JlLmxlbmd0aCA+IDApXG4gICAgICAgIHJlYWN0b3JzLmJlZm9yZS5mb3JFYWNoKChbLCByZWFjdG9yXSkgPT4gcmVhY3RvciguLi5hcmdzKSk7XG4gICAgICAvLyBtYWluIHJlYWN0b3Igd2l0aCAwIGNhbGxQbGFjZVxuICAgICAgaWYgKGluUGxhY2VDYWxsYmFjaylcbiAgICAgICAgaW5QbGFjZUNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgLy8gcmVhY3RvcnMgYWZ0ZXIgbWFpbiByZWFjdG9yXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWFjdG9ycy5hZnRlcikgJiYgcmVhY3RvcnMuYWZ0ZXIubGVuZ3RoID4gMClcbiAgICAgICAgcmVhY3RvcnMuYWZ0ZXIuZm9yRWFjaCgoWywgcmVhY3Rvcl0pID0+IHJlYWN0b3IoLi4uYXJncykpO1xuXG4gICAgfSBlbHNlIGlmIChpblBsYWNlQ2FsbGJhY2spIHtcbiAgICAgIGluUGxhY2VDYWxsYmFjayguLi5hcmdzKTsgLy9qdXN0IG1haW4gcmVhY3RvciBjYWxsXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB3aGVuKGFjdGlvbkxhYmVsLCByZWFjdG9yLCBjYWxsUGxhY2UgPSAwKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uTGFiZWwgPT0gJ3N0cmluZycpIHtcbiAgICB3aGVuTG9naWMoYWN0aW9uTGFiZWwpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uTGFiZWwpKSB7XG4gICAgZm9yIChsZXQgc2luZ2xlQWN0aW9uTGFiZWwgb2YgYWN0aW9uTGFiZWwpIHtcbiAgICAgIHdoZW5Mb2dpYyhzaW5nbGVBY3Rpb25MYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd2hlbkxvZ2ljKGFjdGlvbkxhYmVsKSB7XG4gICAgbGV0IHBsYWNlRGltZW5zaW9uID0gY2FsbFBsYWNlIDwgMCA/ICdiZWZvcmUnIDogJ2FmdGVyJztcbiAgICBpZiAoIV9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF0pIC8vIGNoZWNrIGFjdGlvbkxhYmVsIGV4aXN0XG4gICAgICBfX0VWRU5UT05FX19bYWN0aW9uTGFiZWxdID0ge307IC8vIGNyZWF0ZSBpZiBub3RcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXVtwbGFjZURpbWVuc2lvbl0pKSAvLyBjaGVjayBkaW1lbnNpb24gaXMgQXJyYXlcbiAgICAgIF9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF1bcGxhY2VEaW1lbnNpb25dID0gW107IC8vIGNyZWF0ZSBpZiBub3RcblxuICAgIF9fRVZFTlRPTkVfX1thY3Rpb25MYWJlbF1bcGxhY2VEaW1lbnNpb25dLnB1c2goW2NhbGxQbGFjZSwgcmVhY3Rvcl0pOyAvLyBwdXNoaW5nIHJlYWN0b3IgaW5zaWRlXG4gICAgX19FVkVOVE9ORV9fW2FjdGlvbkxhYmVsXVtwbGFjZURpbWVuc2lvbl0uc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pOyAvLyBzb3J0aW5nIHJlYWN0b3JzIGJ5IGNhbGxQbGFjZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbG9iYWxFdmVudG9uZSgpIHtcbiAgd2luZG93Ll9fRVZFTlRPTkVfXyA9IF9fRVZFTlRPTkVfXztcbiAgd2luZG93LmFjdGlvbiA9IGFjdGlvbjtcbiAgd2luZG93LndoZW4gPSB3aGVuO1xufSIsImNvbnN0IGltcG9ydGVyID0gcmVxdWlyZSgnLi4vd2VicGFjay5pbXBvcnRlcicpO1xyXG5cclxuY29uc3QgaW1wb3J0ZWQgPSBpbXBvcnRlcihbXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL0xvZ2ljLycsIHRydWUsIC9cXC5qcyQvKSxcclxuICByZXF1aXJlLmNvbnRleHQoJy4vQXR0YWNoLycsIHRydWUsIC9cXC4vKSxcclxuXSk7XHJcblxyXG5pbXBvcnQgJy4vQmFzaWMvZGV2aWNlci9kZXZpY2VyJztcclxuaW1wb3J0ICcuL0Jhc2ljL2lucHV0L2lucHV0JztcclxuaW1wb3J0ICcuL0Jhc2ljL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgJy4vQmFzaWMvbGluay9saW5rJztcclxuaW1wb3J0ICcuL0Jsb2Nrcy9wYW5lbC1tYWluL3BhbmVsLW1haW4nO1xyXG5pbXBvcnQgJy4vQmxvY2tzL3BhbmVsLW5hdi9wYW5lbC1uYXYnO1xyXG4iLCJmdW5jdGlvbiBpbXBvcnRBbGwocmVxKSB7XG4gIGxldCB0YXJnZXRzID0ge307XG4gIHJlcS5rZXlzKCkuZm9yRWFjaChpdGVtID0+IHsgdGFyZ2V0c1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHJlcShpdGVtKTsgfSk7XG4gIC8vY29uc29sZS5sb2coJ3RhcmdldHMnLCB0YXJnZXRzKTtcbiAgcmV0dXJuIHRhcmdldHM7XG59XG5cbmZ1bmN0aW9uIGltcG9ydGVyKGZpbGVJbXBvcnRzKSB7XG4gIGNvbnN0IGltcG9ydGVkID0gW107XG4gIGZvciAobGV0IHJlcSBvZiBmaWxlSW1wb3J0cykge1xuICAgIGltcG9ydGVkLnB1c2goaW1wb3J0QWxsKHJlcSkpO1xuICB9XG5cbiAgcmV0dXJuIGltcG9ydGVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltcG9ydGVyOyJdLCJzb3VyY2VSb290IjoiIn0=