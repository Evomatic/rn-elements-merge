(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.uxpin-merge/presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js":
/*!**********************************************************************!*\
  !*** ./.uxpin-merge/presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js ***!
  \**********************************************************************/
/*! exports provided: Preset3b5c273f5a2555fab50b3daf4e29c9b3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Button/presets/0-default.jsx */ "./src/components/Button/presets/0-default.jsx");
/* harmony import */ var _src_components_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Preset3b5c273f5a2555fab50b3daf4e29c9b3", function() { return _src_components_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0___default.a; });



/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
}); // tslint:disable-next-line:function-name

function __uxpinParsePreset(component, props, ...children) {
  if (component === undefined) {
    const error = new Error('Unknown component!');
    error.message = parsePresetErrorMessage(error);
    throw error;
  }

  const componentName = !!component.name ? component.name : 'Unknown';
  return {
    children,
    name: componentName,
    props: JSON.parse(JSON.stringify(props)) || {},
    uxpinPresetElementType: 'CodeComponent',
    warnings: getPropertySerializationWarnings(props)
  };
}

function getPropertySerializationWarnings(props) {
  if (!props) {
    return [];
  }

  return Object.keys(props).reduce((warnings, propName) => {
    const propValue = props[propName];

    if (typeof propValue === 'function') {
      warnings.push({
        message: `Unsupported property \`${propName}\` of a type \`${typeof propValue}\``
      });
    }

    return warnings;
  }, []);
}

const ERROR_LINES = 5;

function parsePresetErrorMessage(error) {
  if (!error.stack) {
    return error.message;
  }

  const lines = error.stack.split('\n').filter(line => !line.match(/at __uxpinParsePreset/gi));
  return lines.slice(0, ERROR_LINES).join('\n');
}

global.__uxpinParsePreset = __uxpinParsePreset;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/@uxpin/merge-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/Button/presets/0-default.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Button/presets/0-default.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@uxpin/merge-cli/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/evantrujillo/Documents/coding/work/rn-elements-merge/src/components/Button/presets/0-default.jsx: Unexpected token (9:2)\n\n\u001b[0m \u001b[90m  7 |\u001b[39m     disabled\u001b[33m=\u001b[39m{\u001b[36mfalse\u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m     type\u001b[33m=\u001b[39m\u001b[32m\"outline\"\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m   \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mButton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m\u001b[0m\n    at Object._raise (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/error.js:147:45)\n    at Object.raiseWithData (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/error.js:142:17)\n    at Object.raise (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/error.js:91:17)\n    at Object.unexpected (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/util.js:174:16)\n    at Object.jsxParseIdentifier (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:255:14)\n    at Object.jsxParseNamespacedName (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:266:25)\n    at Object.jsxParseAttribute (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:386:24)\n    at Object.jsxParseOpeningElementAfterName (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:411:30)\n    at Object.jsxParseOpeningElementAt (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:403:19)\n    at Object.jsxParseElementAt (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:441:35)\n    at Object.jsxParseElement (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:537:19)\n    at Object.parseExprAtom (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/jsx/index.js:548:21)\n    at Object.parseExprSubscripts (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:668:23)\n    at Object.parseUpdate (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:648:21)\n    at Object.parseMaybeUnary (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:619:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:372:14)\n    at Object.parseExprOps (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:382:23)\n    at Object.parseMaybeConditional (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:340:23)\n    at Object.parseMaybeAssign (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/expression.js:301:21)\n    at /Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/flow/index.js:2803:23\n    at Object.tryParse (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/parser/util.js:213:20)\n    at Object.parseMaybeAssign (/Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@babel/parser/src/plugins/flow/index.js:2802:20)");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ./.uxpin-merge/presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/evantrujillo/Documents/coding/work/rn-elements-merge/node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js */"./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js");
module.exports = __webpack_require__(/*! /Users/evantrujillo/Documents/coding/work/rn-elements-merge/.uxpin-merge/presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js */"./.uxpin-merge/presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js");


/***/ })

/******/ })));
//# sourceMappingURL=__bundle__presets-a92efd63-8e2b-468c-a34c-90f6a1722db0.js.map