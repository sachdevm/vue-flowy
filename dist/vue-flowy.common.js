module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+rLv":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("dyZX").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("f3/d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/mnt/d/WebServer/vue-flowy/node_modules/.cache/vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlowy.vue?vue&type=template&id=0a3f7cca
var VueFlowyvue_type_template_id_0a3f7cca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vueflowyElement",staticClass:"flowyChart"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueFlowy.vue?vue&type=template&id=0a3f7cca

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) {
    return o.__proto__;
  };

  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("i7/w");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("Zdk5");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__("mNvP");

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 6.1.0 MIT LICENSE copyright 2018 kaorun343 */





/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        if (!Array.isArray(options) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        if (!Array.isArray(options) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("rE2o");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ioFf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rGqo");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("0l/t");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("hhXQ");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("yt8O");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("RW0V");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("8+KV");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("91GP");

// CONCATENATED MODULE: ./src/graph/layout/Size.ts



var Size_Size =
/*#__PURE__*/
function () {
  function Size() {
    _classCallCheck(this, Size);

    this.height = 0;
    this.width = 0;
  }

  _createClass(Size, [{
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
    }
  }]);

  return Size;
}();


// CONCATENATED MODULE: ./src/graph/layout/Position.ts


var Position_Position = function Position() {
  _classCallCheck(this, Position);

  this.x = 0;
  this.y = 0;
};


// CONCATENATED MODULE: ./src/graph/layout/Style.ts



var Style_Style =
/*#__PURE__*/
function () {
  function Style() {
    _classCallCheck(this, Style);

    this.shape = 'rect';
  }

  _createClass(Style, [{
    key: "setPadding",
    value: function setPadding(_ref) {
      var _ref$left = _ref.left,
          left = _ref$left === void 0 ? 10 : _ref$left,
          _ref$top = _ref.top,
          top = _ref$top === void 0 ? 10 : _ref$top,
          _ref$right = _ref.right,
          right = _ref$right === void 0 ? 10 : _ref$right,
          _ref$bottom = _ref.bottom,
          bottom = _ref$bottom === void 0 ? 10 : _ref$bottom;
      this.padding = {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      };
    }
  }, {
    key: "setBorderRadius",
    value: function setBorderRadius() {
      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        rx: 0,
        ry: 0
      };
      this.radius = radius;
    }
  }, {
    key: "setShape",
    value: function setShape(shapeType) {
      this.shape = shapeType;
    }
  }, {
    key: "setBorder",
    value: function setBorder(_ref2) {
      var _ref2$left = _ref2.left,
          left = _ref2$left === void 0 ? 0 : _ref2$left,
          _ref2$top = _ref2.top,
          top = _ref2$top === void 0 ? 0 : _ref2$top,
          _ref2$right = _ref2.right,
          right = _ref2$right === void 0 ? 0 : _ref2$right,
          _ref2$bottom = _ref2.bottom,
          bottom = _ref2$bottom === void 0 ? 0 : _ref2$bottom;
      this.border = {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      };
    }
  }]);

  return Style;
}();


// CONCATENATED MODULE: ./src/graph/Node.ts







var Node_GraphNode =
/*#__PURE__*/
function () {
  function GraphNode(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, GraphNode);

    this.label = '';
    this.parent = null;
    this.children = {};
    this.position = new Position_Position();
    this.size = new Size_Size();
    this.style = new Style_Style();
    this.rank = 0;
    this.order = 0;
    this.inEdges = {};
    this.outEdges = {};
    this.successors = {};
    this.predecessors = {};
    this.borders = {};
    this.id = id;
    this.setOptions(options);
  }

  _createClass(GraphNode, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (!options.label) {
        options.label = this.id;
      }

      Object.assign(this, options);
    }
  }]);

  return GraphNode;
}();


// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("Vd3H");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("bWfx");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("DNiP");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__("NOtv");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/graph/layout/Layering.ts













var log = browser_default()('layering');

var Layering_Layering =
/*#__PURE__*/
function () {
  function Layering(graph) {
    _classCallCheck(this, Layering);

    this.graph = graph;
    log('creating matrix once');
    this.matrix = this.buildLayerMatrix();
  }

  _createClass(Layering, [{
    key: "buildLayerMatrix",
    value: function buildLayerMatrix() {
      var layering = [];
      log('NODES FOR MATRIX is', Object.assign({}, this.graph.nodes));
      this.graph.nodes.forEach(function (node) {
        if (!layering[node.rank]) {
          layering[node.rank] = [];
        }

        layering[node.rank][node.order] = node;
      });
      return layering;
    }
  }, {
    key: "calculatePositions",
    value: function calculatePositions() {
      this._calculateYPositions();

      this._calculateXPositions();
    }
  }, {
    key: "_calculateYPositions",
    value: function _calculateYPositions() {
      var _this = this;

      var prevY = 0;
      this.matrix.forEach(function (layer) {
        var maxHeight = Math.max.apply(Math, _toConsumableArray(layer.map(function (node) {
          return node.size.height;
        })));
        layer.forEach(function (node) {
          log('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2);
          node.position.y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + _this.graph.rankSep;
      });
    }
  }, {
    key: "_calculateXPositions",
    value: function _calculateXPositions() {
      var _this2 = this;

      if (!this.graph.layout) {
        throw new Error('Layout is not set yet!');
      }

      log('is', this.buildLayerMatrix());
      var xPositions = {};
      var adjustedLayering;
      var verticals = ['u', 'd'];
      var horizontals = ['l', 'r'];
      verticals.forEach(function (vert) {
        adjustedLayering = vert === 'u' ? _this2.matrix : Object.values(_this2.matrix).reverse();
        horizontals.forEach(function (horiz) {
          if (horiz === 'r') {
            adjustedLayering = adjustedLayering.map(function (inner) {
              return Object.values(inner).reverse();
            });
          }

          log('adjusted layering is', adjustedLayering);

          var align = _this2._verticalAlignment(adjustedLayering, vert, horiz); // log('align is', align)


          var xs = _this2._horizontalCompaction(adjustedLayering, align, horiz === 'r');

          log(vert + horiz, xs);

          if (horiz === 'r') {
            for (var key in xs) {
              if (xs.hasOwnProperty(key)) {
                xs[key] = -xs[key];
              }
            }
          }

          xPositions[vert + horiz] = xs;
        });
      });
      log('xPositions finish', xPositions);

      var smallestWidthAlignment = this._findSmallestWidthAlignment(xPositions);

      log('smallestWidth is', smallestWidthAlignment);

      this._alignCoordinates(xPositions, smallestWidthAlignment);

      return this.graph.layout.balance(xPositions);
    }
  }, {
    key: "_alignCoordinates",
    value: function _alignCoordinates(xPositions, smallestWidthAlignment) {
      var alignToVals = Object.values(smallestWidthAlignment);
      var alignToMin = Math.min.apply(Math, _toConsumableArray(alignToVals));
      var alignToMax = Math.max.apply(Math, _toConsumableArray(alignToVals));
      var verticals = ['u', 'd'];
      var horizontals = ['l', 'r'];
      verticals.forEach(function (vert) {
        horizontals.forEach(function (horiz) {
          var alignment = vert + horiz;
          var xs = xPositions[alignment];

          if (xs === smallestWidthAlignment) {
            return;
          }

          var xsVals = Object.values(xs);
          var delta = horiz === 'l' ? alignToMin - Math.min.apply(Math, _toConsumableArray(xsVals)) : alignToMax - Math.max.apply(Math, _toConsumableArray(xsVals));

          if (delta) {
            for (var i in xs) {
              if (xs.hasOwnProperty(i)) {
                xs[i] += delta;
              }
            }

            xPositions[alignment] = xs;
          }
        });
      });
    }
  }, {
    key: "_findSmallestWidthAlignment",
    value: function _findSmallestWidthAlignment(xPositions) {
      var _this3 = this;

      var minWidth = Infinity;
      var minXs = {};
      Object.values(xPositions).forEach(function (xs) {
        // log('XS is', x)
        var minVal = Infinity;
        var maxVal = -Infinity;
        Object.keys(xs).forEach(function (nodeId) {
          var no = xs[nodeId];
          var check = no - _this3.graph.getNode(nodeId).size.width / 2;

          if (check < minVal) {
            minVal = check;
          }

          if (check > maxVal) {
            maxVal = check;
          }
        });
        var minCheck = maxVal - minVal;

        if (minCheck < minWidth) {
          minWidth = minCheck;
          minXs = xs;
        }
      });
      return minXs;
    }
  }, {
    key: "_horizontalCompaction",
    value: function _horizontalCompaction(layering, align, reverseSep) {
      log('horizontalCompaction', layering, align, reverseSep);
      var xs = {};
      var blockGraph = Graph_Graph.buildBlockGraph(layering, align.root, reverseSep);
      var visited = {};

      function pass1(node) {
        if (visited[node.id]) {
          return;
        }

        visited[node.id] = true;
        xs[node.id] = blockGraph.inEdges(node).reduce(function (max, edge) {
          pass1(edge.from); // log('pass1', blockGraph, edge)

          return Math.max(max, xs[edge.from.id] + (edge.maxSep || 0));
        }, 0);
      }

      blockGraph.nodes.forEach(pass1);
      Object.keys(align.align).forEach(function (nodeId) {
        xs[nodeId] = xs[align.root[nodeId].id];
      });
      return xs;
    }
  }, {
    key: "_verticalAlignment",
    value: function _verticalAlignment(layering, vert, horiz) {
      var _this4 = this;

      var root = {};
      var align = {};
      var pos = {};
      layering.forEach(function (layer) {
        layer.forEach(function (node, order) {
          root[node.id] = node;
          align[node.id] = node;
          pos[node.id] = order;
        });
      });
      log('objects after first step is', root, align, pos);
      layering.forEach(function (layer) {
        var prevIdx = -1;
        layer.forEach(function (node) {
          var ws = vert === 'u' ? _this4.graph.getPredecessors(node) : _this4.graph.getSuccessors(node);

          if (!ws.length) {
            return;
          }

          if (!_this4.graph.layout) {
            throw new Error('Layout for graph is not set!');
          }

          ws = _this4.graph.layout.sortByFunction(ws, function (w) {
            return pos[w];
          });
          var mp = (ws.length - 1) / 2;

          for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; i++) {
            var w = ws[i];

            if (align[node.id].id === node.id && prevIdx < pos[w]) {
              align[w] = node;
              align[node.id] = root[node.id] = root[w];
              prevIdx = pos[w];
            }
          }
        });
      });
      return {
        root: root,
        align: align
      };
    }
  }]);

  return Layering;
}();


// CONCATENATED MODULE: ./src/graph/layout/Normalizer.ts





var Normalizer_log = browser_default()('normalizer');

var Normalizer_Normalizer =
/*#__PURE__*/
function () {
  function Normalizer(graph) {
    _classCallCheck(this, Normalizer);

    this.graph = graph;
  }

  _createClass(Normalizer, [{
    key: "normalize",
    value: function normalize() {
      this.graph.dummyChain = [];
      Normalizer_log('EDGES', this.graph.edges);
      this.graph.edges.forEach(this._normalizeEdge, this);
    }
  }, {
    key: "_normalizeEdge",
    value: function _normalizeEdge(edge) {
      if (edge.to.rank === edge.from.rank + 1) {
        return;
      }

      for (var i = edge.from.rank + 1; i < edge.to.rank; i++) {
        edge.points = [];
        var dummy = this.graph.addDummyNode('edge', {
          rank: edge.from.rank
        }, '_d');
        this.graph.setEdge(edge.from.id, dummy.id, {
          weight: edge.weight
        });

        if (i === edge.from.rank + 1) {
          this.graph.dummyChain.push(dummy);
        }
      }
    }
  }]);

  return Normalizer;
}();


// CONCATENATED MODULE: ./src/graph/Layout.ts

















var ldb = browser_default()('layout');

var Layout_Layout =
/*#__PURE__*/
function () {
  function Layout(graph) {
    _classCallCheck(this, Layout);

    this.graph = graph;
    this.normalizer = new Normalizer_Normalizer(this.graph);
    ldb('creating layering once');
    this.layering = new Layering_Layering(this.graph);
    this.runLayout();
  }

  _createClass(Layout, [{
    key: "runLayout",
    value: function runLayout() {
      this.makeSpaceForEdgeLabels();
      this.createNestingGraph();
      this.rank();
      this.cleanupNestingGraph();
      this.normalizeRanks();
      this.assignRankMinMax();
      this.normalizer.normalize();
      this.order();
      this.adjustCoordinateSystem();
      this.layering.calculatePositions();
      this.undoCoordinateSystem();
      this.translateGraph();
    }
  }, {
    key: "makeSpaceForEdgeLabels",
    value: function makeSpaceForEdgeLabels() {
      var _this = this;

      this.graph.rankSep /= 2;
      ldb(this.graph);
      this.graph.edges.forEach(function (edge) {
        ldb('making space for edge', edge);
        edge.minLen *= 2;

        if (edge.labelPos.toLowerCase() === 'c') {
          return;
        }

        if (_this.graph.rankDir === 'tb' || _this.graph.rankDir === 'bt') {
          edge.size.width += edge.labelOffset;
        } else {
          edge.size.height += edge.labelOffset;
        }
      });
    }
  }, {
    key: "createNestingGraph",
    value: function createNestingGraph() {
      var _this2 = this;

      ldb('creating nesting graph');
      this.graph.rootNode = this.graph.setNode('_root', {
        dummy: 'root'
      });
      var depths = this.treeDepths();
      ldb('depths', depths);
      var height = Math.max.apply(Math, _toConsumableArray(Object.values(depths))) - 1;
      this.graph.nodeRankFactor = 2 * height + 1; // multiply minLen by nodeSep to align nodes on non-border ranks

      this.graph.edges.forEach(function (edge) {
        edge.minLen *= _this2.graph.nodeRankFactor;
      }); // calculate a weight that is sufficient to keep subgraphs vertically compact

      var weight = this.graph.edges.reduce(function (prevVal, edge) {
        return prevVal + edge.weight;
      }, 0); // create border nodes and link them up

      this.graph.getChildren().forEach(function (child) {
        ldb('calling dfs with', _this2.graph.rootNode, _this2.graph.nodeRankFactor, weight, height, depths, child);

        _this2.dfs(_this2.graph.rootNode, weight, height, depths, child);
      });
      ldb('edges after nesting graph', this.graph.edges.length);
    }
  }, {
    key: "cleanupNestingGraph",
    value: function cleanupNestingGraph() {
      var _this3 = this;

      if (this.graph.rootNode) {
        this.graph.removeNode(this.graph.rootNode.id);
      }

      delete this.graph.rootNode;
      this.graph.edges.forEach(function (edge) {
        if (edge.nestingEdge) {
          _this3.graph.removeEdge(edge.id);
        }
      });
      ldb('edges after cleanup nesting graph', this.graph.edges.length, this.graph.edges);
    }
  }, {
    key: "normalizeRanks",
    value: function normalizeRanks() {
      var minRank = this.minRank();
      this.graph.nodes.forEach(function (node) {
        return node.rank -= minRank;
      });
    }
  }, {
    key: "assignRankMinMax",
    value: function assignRankMinMax() {
      var maxRank = 0;
      this.graph.nodes.forEach(function (node) {
        if (!node.borders.top || !node.borders.bottom) {
          return;
        }

        node.minRank = node.borders.top.rank;
        node.maxRank = node.borders.bottom.rank;
        maxRank = Math.max(maxRank, node.maxRank);
      });
      this.graph.maxRank = maxRank;
    }
  }, {
    key: "treeDepths",
    value: function treeDepths() {
      var depths = {};
      var layout = this;

      function dfs(node) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var children = Object.values(node.children);
        ldb('children of', node, 'are', children, '. depth:', depth);
        children.forEach(function (child) {
          ldb('child', child);
          dfs(child, depth + 1);
        });
        depths[node.id] = depth;
      }

      this.graph.getChildren().forEach(function (child) {
        dfs(child);
      });
      return depths;
    }
  }, {
    key: "dfs",
    value: function dfs(rootNode, weight, height, depths, node) {
      var _this4 = this;

      var children = Object.values(node.children);
      ldb('DFS:', children.length, 'children of', node, children);

      if (!children.length) {
        if (node.id !== rootNode.id) {
          this.graph.setEdge(rootNode.id, node.id, {
            weight: 0,
            minLen: this.graph.nodeRankFactor
          });
        }

        ldb('returning!');
        return;
      }

      ldb('not returning');
      var top = this.addBorderNode('_bt');
      var bottom = this.addBorderNode('_bb');
      node.borders = {
        top: top,
        bottom: bottom
      };
      this.graph.setParent(top.id, node.id);
      this.graph.setParent(bottom.id, node.id);
      children.forEach(function (child) {
        _this4.dfs(rootNode, weight, height, depths, child);

        var childTop = child.borders.top ? child.borders.top : child;
        var childBottom = child.borders.bottom ? child.borders.bottom : child;
        var thisWeight = Object.keys(child.borders).length ? weight : 2 * weight;
        var minLen = childTop !== childBottom ? 1 : height - depths[node.id] + 1;

        _this4.graph.setEdge(top.id, childTop.id, {
          weight: thisWeight,
          minLen: minLen,
          nestingEdge: true
        });

        _this4.graph.setEdge(childBottom.id, bottom.id, {
          weight: thisWeight,
          minLen: minLen,
          nestingEdge: true
        });
      });

      if (!this.graph.getParent(node.id)) {
        this.graph.setEdge(rootNode.id, top.id, {
          weight: 0,
          minLen: height + depths[node.id]
        });
      }
    }
  }, {
    key: "addBorderNode",
    value: function addBorderNode(prefix, rank, order) {
      var node = {
        width: 0,
        height: 0
      };

      if (rank && order) {
        node.rank = rank;
        node.order = order;
      }

      return this.graph.addDummyNode('border', node, prefix);
    }
  }, {
    key: "rank",
    value: function rank() {
      switch (this.graph.ranker) {
        case 'network-simplex':
          this.networkSimplexRanker();
          break;

        case 'tight-tree':
          // this.tightTreeRanker()
          break;

        case 'longest-path':
          // this.longestPathRanker()
          break;

        default:
          this.networkSimplexRanker();
          break;
      }
    }
  }, {
    key: "position",
    value: function position() {
      // const position = new Position(graph)
      this.positionY(); // this.positionX()
    }
  }, {
    key: "positionX",
    value: function positionX() {
      ldb('creating matrix in positionX');
      var matrix = this.layering.buildLayerMatrix(); // const xss = {}
      // let adjustedLayering
      // ['u', 'd'].forEach(vert => {
      //   adjustedLayering = vert === 'u' ? layering : Object.values(layering).reverse()
      //   ['l', 'r'].forEach(horiz => {
      //     if (horiz === 'r') {
      //       adjustedLayering = adjustedLayering.map(inner => Object.values(inner).reverse())
      //     }
      //     const align = this.verticalAlignment(adjustedLayering)
      //     xss[vert + horiz] = xs
      //   })
      // })
    }
  }, {
    key: "positionY",
    value: function positionY() {
      var _this5 = this;

      var prevY = 0;
      this.layering.matrix.forEach(function (layer) {
        var maxHeight = Math.max.apply(Math, _toConsumableArray(layer.map(function (node) {
          return node.size.height;
        })));
        layer.forEach(function (node) {
          ldb('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2);
          node.position.y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + _this5.graph.rankSep;
      });
    }
  }, {
    key: "balance",
    value: function balance(xPositions) {
      var _loop = function _loop(nodeId) {
        if (xPositions.ul.hasOwnProperty(nodeId)) {
          var mappedXs = Object.values(Object.values(xPositions)).map(function (xs) {
            return xs[nodeId];
          }).sort();
          xPositions.ul[nodeId] = mappedXs[1] + mappedXs[2] / 2;
        }
      };

      for (var nodeId in xPositions.ul) {
        _loop(nodeId);
      }

      return xPositions;
    }
  }, {
    key: "networkSimplexRanker",
    value: function networkSimplexRanker() {
      this.longestPath();
      this.feasibleTree();
    }
  }, {
    key: "longestPath",
    value: function longestPath() {
      var layout = this;
      var visited = {};

      function _longestPath(node) {
        if (visited[node.id]) {
          return node.rank;
        }

        visited[node.id] = true;
        var min = Math.min.apply(Math, _toConsumableArray(layout.graph.outEdges(node).map(function (outEdge) {
          return _longestPath(outEdge.to) - outEdge.minLen;
        })));
        var rank = min === Infinity ? 0 : min;
        return node.rank = rank;
      }

      this.graph.sources.forEach(_longestPath);
    }
  }, {
    key: "feasibleTree",
    value: function feasibleTree() {
      this.treeGraph = new Graph_Graph({
        directed: false
      });
      var start = this.graph.nodeIds[0];
      var size = this.graph.nodeIds.length;
      this.treeGraph.setNode(start);
      ldb('start is', start, 'size is', size);
      var edge;
      var delta;
      var doneTimes = 0;

      while (this.tightTree() < size) {
        edge = this.findMinSlackEdge();

        if (edge === null) {
          throw new Error('min slack edge is null!');
        }

        delta = this.treeGraph.hasNode(edge.from.id) ? this.slack(edge) : -this.slack(edge);
        this.shiftRanks(delta);
        doneTimes++;

        if (doneTimes > 200) {
          throw new Error('too many loops, breaking now!');
        }
      }
    }
    /**
     * Finds a maximal tree of tight edges and returns the number of nodes in the tree
     */

  }, {
    key: "tightTree",
    value: function tightTree() {
      var layout = this;
      var treeGraph = this.treeGraph;

      function dfs(node) {
        ldb('nodeEdges', layout.graph.nodeEdges(node));
        layout.graph.nodeEdges(node).forEach(function (edge) {
          ldb('nodeEdge for', node.id, edge);
          var to = node.id === edge.from.id ? edge.to : edge.from;
          ldb('not hasNode', !treeGraph.hasNode(to.id), 'not slack', !layout.slack(edge));

          if (!treeGraph.hasNode(to.id) && !layout.slack(edge)) {
            ldb('adding node to tighttree', to);
            treeGraph.setNode(to.id);
            treeGraph.setEdge(node.id, to.id);
            dfs(to);
          }
        });
      }

      treeGraph.nodes.forEach(dfs);
      ldb('tightTree size is', treeGraph.nodeIds.length);
      return treeGraph.nodeIds.length;
    }
  }, {
    key: "findMinSlackEdge",
    value: function findMinSlackEdge() {
      var _this6 = this;

      var minSlackEdge = null;
      var minSlack = Infinity;
      ldb('finding min slack edge');
      this.graph.edges.forEach(function (edge) {
        if (_this6.treeGraph.hasNode(edge.from.id) !== _this6.treeGraph.hasNode(edge.to.id)) {
          var slack = _this6.slack(edge);

          if (slack < minSlack) {
            minSlackEdge = edge;
            minSlack = slack;
          }
        }
      });
      return minSlackEdge;
    }
  }, {
    key: "slack",
    value: function slack(edge) {
      ldb('calculating slack of', edge, edge.to.rank, edge.from.rank, edge.minLen);
      return edge.to.rank - edge.from.rank - edge.minLen;
    }
  }, {
    key: "order",
    value: function order() {
      var maxRank = this.maxRank();
      var layering = this.initOrder();
      ldb('LAYERING', layering);
      this.assignOrder(layering); // ldb('order', layering, this.graph.nodes)
      // ldb('STOPPED HERE, code further!')
      // const downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), 'inEdges')
      // const upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), 'outEdges')
      // let layering = initOrder(g)
      // assignOrder(g, layering)
      // let bestCC = Number.POSITIVE_INFINITY
      // let best
      // for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
      //   sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2)
      //   layering = util.buildLayerMatrix(g)
      //   const cc = crossCount(g, layering)
      //   if (cc < bestCC) {
      //     lastBest = 0
      //     best = _.cloneDeep(layering)
      //     bestCC = cc
      //   }
      // }
      // assignOrder(g, best)
    }
  }, {
    key: "buildLayerGraph",
    value: function buildLayerGraph(rank, relationship) {
      var _this7 = this;

      var graph = new Graph_Graph({
        compound: true
      });
      graph.rootNode = graph.setNode('_root', {
        dummy: 'root'
      });
      this.graph.nodes.forEach(function (node) {
        var parent = node.parent;

        if (!node.minRank || !node.maxRank) {
          throw new Error('minRank or maxRank not defined!');
        }

        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
          var newNode = graph.setNode(node.id);
          graph.setParent(node.id, parent ? parent.id : graph.rootNode ? graph.rootNode.id : '');
          var edges = [];

          if (relationship === 'in') {
            edges = _this7.graph.inEdges(node);
          } else if (relationship === 'out') {
            edges = _this7.graph.outEdges(node);
          }

          edges.forEach(function (edge) {
            var to = edge.from.id === node.id ? edge.to : edge.from;
            var newEdge = graph.getEdge(to.id, node.id);
            var weight = edge ? newEdge.weight : 0;
            graph.setEdge(to.id, node.id, {
              weight: edge.weight + weight
            });
          });

          if (node.minRank && node.borders.left && node.borders.right) {
            graph.setNode(node.id, {
              borders: {
                left: _defineProperty({}, rank, node.borders.left[rank]),
                right: _defineProperty({}, rank, node.borders.right[rank])
              }
            });
          }
        }
      });
    }
  }, {
    key: "buildLayerGraphs",
    value: function buildLayerGraphs(ranks, relationship) {
      var _this8 = this;

      return ranks.map(function (rank) {
        return _this8.buildLayerGraph(rank, relationship);
      });
    }
  }, {
    key: "initOrder",
    value: function initOrder() {
      var _this9 = this;

      var layout = this;
      var visited = {};
      var simpleNodes = this.graph.nodes.filter(function (node) {
        return !_this9.graph.getChildren(node.id).length;
      });
      var maxRank = this.maxRank(simpleNodes);
      var layers = [];

      function dfs(node) {
        if (visited[node.id]) {
          return;
        }

        visited[node.id] = true;

        if (!layers[node.rank]) {
          layers[node.rank] = [];
        }

        layers[node.rank].push(node);
        layout.graph.getSuccessors(node).forEach(function (nodeId) {
          dfs(layout.graph.getNode(nodeId));
        });
      }

      function compare(a, b) {
        if (a.rank < b.rank) {
          return -1;
        }

        if (a.rank > b.rank) {
          return 1;
        }

        return 0;
      }

      var orderedNodeIds = simpleNodes.sort(compare);
      orderedNodeIds.forEach(dfs, this);
      return layers;
    }
  }, {
    key: "assignOrder",
    value: function assignOrder(layering) {
      layering.forEach(function (layer) {
        layer.forEach(function (node, index) {
          node.order = index;
        });
      });
    }
  }, {
    key: "adjustCoordinateSystem",
    value: function adjustCoordinateSystem() {
      if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
        this.swapWidthHeight();
      }
    }
  }, {
    key: "undoCoordinateSystem",
    value: function undoCoordinateSystem() {
      if (this.graph.rankDir === 'bt' || this.graph.rankDir === 'rl') {// this.reverseY()
      }

      if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
        this.swapXY();
        this.swapWidthHeight();
      }
    }
  }, {
    key: "_swapWidthHeightOne",
    value: function _swapWidthHeightOne(o) {
      var w = o.size.width;
      o.size.width = o.size.height;
      o.size.height = w;
    }
  }, {
    key: "swapWidthHeight",
    value: function swapWidthHeight() {
      this.graph.nodes.forEach(this._swapWidthHeightOne);
      this.graph.edges.forEach(this._swapWidthHeightOne);
    }
  }, {
    key: "_swapXYOne",
    value: function _swapXYOne(o) {
      var x = o.position.x;
      o.position.x = o.position.y;
      ldb('y before', o.position.y, 'after', x);
      o.position.y = x;
      ldb('now', {
        x: o.position.x,
        y: o.position.y
      });
    }
  }, {
    key: "swapXY",
    value: function swapXY() {
      var _this10 = this;

      this.graph.nodes.forEach(this._swapXYOne);
      this.graph.edges.forEach(function (edge) {
        edge.points.forEach(_this10._swapXYOne);

        if (edge.position.x) {
          _this10._swapXYOne(edge);
        }
      });
    }
  }, {
    key: "maxRank",
    value: function maxRank() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.graph.nodes;
      return nodes.reduce(function (prevV, node) {
        return node.rank > prevV ? node.rank : prevV;
      }, -Infinity);
    }
  }, {
    key: "minRank",
    value: function minRank() {
      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.graph.nodes;
      return nodes.reduce(function (prevV, node) {
        return node.rank < prevV ? node.rank : prevV;
      }, Infinity);
    }
  }, {
    key: "shiftRanks",
    value: function shiftRanks(delta) {
      if (!this.treeGraph) {
        throw new Error('treeGraph is not defined!');
      }

      this.treeGraph.nodes.forEach(function (node) {
        node.rank += delta;
      });
    }
  }, {
    key: "translateGraph",
    value: function translateGraph() {
      var minX = Infinity;
      var maxX = 0;
      var minY = Infinity;
      var maxY = 0;
      var marginX = this.graph.marginX || 0;
      var marginY = this.graph.marginY || 0;

      function getExtremes(o) {
        var x = o.position.x || 0;
        var y = o.position.y || 0;
        var w = o.size.width || 0;
        var h = o.size.height || 0;
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minY = Math.min(minY, y - h / 2);
        maxY = Math.max(maxY, y + h / 2);
      }

      this.graph.nodes.forEach(getExtremes);
      this.graph.edges.forEach(function (edge) {
        if (edge.position.x) {
          getExtremes(edge);
        }
      });
      minX -= marginX;
      minY -= marginY;
      this.graph.nodes.forEach(function (node) {
        node.position.x -= minX;
        node.position.y -= minY;
      });
      this.graph.edges.forEach(function (edge) {
        edge.points.forEach(function (point) {
          point.position.x -= minX;
          point.position.y -= minY;
        });

        if (edge.position.x) {
          edge.position.x -= minX;
        }

        if (edge.position.y) {
          edge.position.y -= minY;
        }
      });
      this.graph.size.width = maxX - minX + marginX;
      this.graph.size.height = maxY - minY + marginY;
    }
    /**
     *
     * @param {[{}]} arr
     * @param {string} key
     */

  }, {
    key: "sortBy",
    value: function sortBy(arr, key) {
      function compare(a, b) {
        if (a[key] < b[key]) {
          return -1;
        }

        if (a[key] > b[key]) {
          return 1;
        }

        return 0;
      }

      return arr.sort(compare);
    }
  }, {
    key: "sortByFunction",
    value: function sortByFunction(arr, fn) {
      function compare(a, b) {
        if (fn(a) < fn(b)) {
          return -1;
        }

        if (fn(a) > fn(b)) {
          return 1;
        }

        return 0;
      }

      return arr.sort(compare);
    }
  }]);

  return Layout;
}();


// CONCATENATED MODULE: ./src/graph/Edge.ts





var DEFAULT_EDGE_NAME = '\x00';
var EDGE_KEY_DELIM = '\x01';

var Edge_Edge =
/*#__PURE__*/
function () {
  function Edge(id, from, to, options) {
    _classCallCheck(this, Edge);

    this.order = 0;
    this.points = [];
    this.data = {};
    this.position = new Position_Position();
    this.size = new Size_Size();
    this.minLen = 1;
    this.weight = 1;
    this.labelOffset = 10;
    this.labelPos = 'r';
    this.nestingEdge = false;
    this.id = id;
    this.from = from;
    this.to = to;
    this.setOptions(options);
  }

  _createClass(Edge, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(this, options);
    }
  }], [{
    key: "generateId",
    value: function generateId(fromId, toId) {
      var directed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var name = arguments.length > 3 ? arguments[3] : undefined;

      if (!directed && fromId > toId) {
        var tmp = fromId;
        fromId = toId;
        toId = tmp;
      }

      return fromId + EDGE_KEY_DELIM + toId + EDGE_KEY_DELIM + (name ? name : DEFAULT_EDGE_NAME);
    }
  }]);

  return Edge;
}();


// CONCATENATED MODULE: ./src/Graph.ts
















var gdb = browser_default()('graph');
var GRAPH_NODE = '\x00';

var Graph_Graph =
/*#__PURE__*/
function () {
  function Graph() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Graph);

    this.size = new Size_Size();
    this.style = new Style_Style();
    this.nodeRankFactor = 0;
    this.compound = false;
    this.multiGraph = false;
    this.directed = true;
    this.rankDir = 'tb';
    this.minX = 0;
    this.minY = 0;
    this.maxX = 0;
    this.maxY = 0;
    this.marginX = 20;
    this.marginY = 20;
    this.randomId = 1;
    this.dummyChain = [];
    this.rankSep = 50;
    this.edgeSep = 20;
    this.nodeSep = 50;
    this.ranker = 'network-simplex';
    this.NODES = {};
    this.EDGES = {};
    Object.assign(this, options);
    this.rankDir = this.rankDir.toLowerCase(); // v -> edgeObj
    // this.in = {}
    // u -> v -> Number
    // this.preds = {}
    // v -> edgeObj
    // this.out = {}
    // v -> w -> Number
    // this.sucs = {}
  }

  _createClass(Graph, [{
    key: "setNode",
    value: function setNode(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.NODES[id]) {
        if (options) {
          this.NODES[id].setOptions(options);
        }

        return this.NODES[id];
      }

      gdb('creating node', id, options);
      this.NODES[id] = new Node_GraphNode(id, options);
      return this.NODES[id];
    }
  }, {
    key: "removeNode",
    value: function removeNode(id) {
      gdb('removing node id', id);
      var node = this.NODES[id];

      if (!node) {
        return;
      }

      Object.keys(node.inEdges).forEach(this.removeEdge, this);
      Object.keys(node.outEdges[id]).forEach(this.removeEdge, this);
      delete this.NODES[id];
    }
  }, {
    key: "setEdge",
    value: function setEdge(fromId, toId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      gdb('setting edge', fromId, toId, options);
      var edgeId = Edge_Edge.generateId(fromId, toId, this.directed, options.name);

      if (this.EDGES[edgeId]) {
        if (options) {
          this.EDGES[edgeId].setOptions(options);
        }

        return this;
      } // first ensure the nodes exist


      var fromNode = this.setNode(fromId);
      var toNode = this.setNode(toId);
      var edge = new Edge_Edge(edgeId, fromNode, toNode, options);
      this.EDGES[edgeId] = edge;
      fromNode.outEdges[edgeId] = edge;
      toNode.inEdges[edgeId] = edge;
      return this;
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(id) {
      gdb('removing edge', id);

      if (!this.EDGES[id]) {
        gdb('edge', id, 'does not exist. returning...');
        return;
      }

      var edge = this.EDGES[id];
      delete this.EDGES[id];
    }
  }, {
    key: "addDummyNode",
    value: function addDummyNode(type, attrs, name) {
      name = name + this.randomId++;
      attrs.dummy = type;
      return this.setNode(name, attrs);
    }
  }, {
    key: "getNode",
    value: function getNode(id) {
      return this.NODES[id];
    }
  }, {
    key: "getEdge",
    value: function getEdge(fromId, toId) {
      return this.EDGES[Edge_Edge.generateId(fromId, toId, this.directed)];
    }
  }, {
    key: "getChildren",
    value: function getChildren(id) {
      if (!id) {
        return this.nodes;
      }

      if (this.compound) {
        return Object.values(this.NODES[id].children);
      } else {
        return [];
      }
    }
  }, {
    key: "getParent",
    value: function getParent(id) {
      if (!this.compound) {
        return null;
      }

      var parent = this.NODES[id].parent;

      if (parent !== null && parent.id !== GRAPH_NODE) {
        return parent;
      }

      return null;
    }
  }, {
    key: "getPredecessors",
    value: function getPredecessors(node) {
      return node.predecessors ? Object.keys(node.predecessors) : [];
    }
  }, {
    key: "getSuccessors",
    value: function getSuccessors(node) {
      return node.successors ? Object.keys(node.successors) : [];
    }
  }, {
    key: "setParent",
    value: function setParent(id, parentId) {
      if (!this.compound) {
        throw new Error('Cannot set parent in a non-compound graph');
      }

      if (parentId === '') {
        throw new Error('Cannot set parent id to an empty id! (parentId is an empty string)');
      }

      var ancestor = parentId;

      while (ancestor) {
        var parent = this.getParent(ancestor);

        if (!parent) {
          ancestor = null;
          continue;
        }

        if (ancestor === id) {
          throw new Error('Setting ' + parentId + ' as parent of ' + id + ' would create a cycle');
        }

        ancestor = parent.id;
      }

      var parentNode = this.setNode(parentId);
      var childNode = this.setNode(id); // delete parentNode.children[id]

      this.NODES[id].parent = parentNode;
      parentNode.children[id] = childNode;
    }
  }, {
    key: "nodeEdges",
    value: function nodeEdges(from, to) {
      var inEdges = this.inEdges(from, to);

      if (inEdges) {
        return inEdges.concat(this.outEdges(from, to));
      }

      return [];
    }
  }, {
    key: "isSubgraph",
    value: function isSubgraph(id) {
      return this.getChildren(id).length !== 0;
    }
  }, {
    key: "doLayout",
    value: function doLayout() {
      gdb('layouting graph');
      this.layout = new Layout_Layout(this);
    }
  }, {
    key: "hasNode",
    value: function hasNode(id) {
      return this.NODES[id];
    }
  }, {
    key: "inEdges",
    value: function inEdges(from, to) {
      // gdb('ins', this.in)
      // gdb('in from', from, 'to', to, inFrom)
      if (!from.inEdges) {
        return [];
      }

      var edges = Object.values(from.inEdges);

      if (!to) {
        return edges;
      }

      return edges.filter(function (edge) {
        return edge.from.id === to.id;
      });
    }
  }, {
    key: "outEdges",
    value: function outEdges(from, to) {
      // gdb('out from', from, 'to', to, outFrom)
      if (!from.outEdges) {
        return [];
      }

      var edges = Object.values(from.outEdges);

      if (!to) {
        return edges;
      }

      return edges.filter(function (edge) {
        return edge.to.id === to.id;
      });
    }
  }, {
    key: "sep",
    value: function sep(reverseSep, from, to) {
      var sum = 0;
      var delta;
      sum += from.size.width / 2;
      gdb('CHECK LABEL POS'); // if (from.labelPos) {
      //   switch (from.labelPos.toLowerCase()) {
      //     case 'l':
      //       delta = -from.size.width / 2
      //       break
      //     case 'r':
      //       delta = from.size.width / 2
      //       break
      //   }
      // }

      if (delta) {
        sum += reverseSep ? delta : -delta;
      }

      delta = 0;
      sum += (from.dummy ? this.edgeSep : this.nodeSep) / 2;
      sum += (to.dummy ? this.edgeSep : this.nodeSep) / 2;
      sum += to.size.width / 2; // if (to.labelPos) {
      //   switch (to.labelPos.toLowerCase()) {
      //     case 'l':
      //       delta = to.size.width / 2
      //       break
      //     case 'r':
      //       delta = -to.size.width / 2
      //       break
      //   }
      // }

      if (delta) {
        sum += reverseSep ? delta : -delta;
      }

      delta = 0;
      return sum;
    }
  }, {
    key: "nodes",
    get: function get() {
      return Object.values(this.NODES);
    }
  }, {
    key: "edges",
    get: function get() {
      return Object.values(this.EDGES);
    }
  }, {
    key: "sources",
    get: function get() {
      return this.nodes.filter(function (node) {
        return Object.keys(node.inEdges).length === 0;
      });
    }
  }, {
    key: "nodeIds",
    get: function get() {
      return Object.keys(this.NODES);
    }
  }], [{
    key: "buildBlockGraph",
    value: function buildBlockGraph(layering, root, reverseSep) {
      var blockGraph = new Graph();
      layering.forEach(function (layer) {
        var to;
        layer.forEach(function (node) {
          blockGraph.setNode(root[node.id].id);

          if (!to) {
            to = node;
            return;
          }

          var prevMax = blockGraph.getEdge(root[to.id].id, root[node.id].id);
          gdb('CHECK PREVMAX FROM STABLE');
          blockGraph.setEdge(root[to.id].id, root[node.id].id, {
            maxSep: Math.max(blockGraph.sep(reverseSep, node, to),
            /*prevMax || */
            0)
          });
          to = node;
        });
      });
      return blockGraph;
    }
  }]);

  return Graph;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("a1Th");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("h7Nl");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("XfO3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("HEwt");

// CONCATENATED MODULE: ./src/graph/Svg.ts







var Svg_GraphSvg =
/*#__PURE__*/
function () {
  function GraphSvg(el) {
    _classCallCheck(this, GraphSvg);

    if (el instanceof SVGGraphicsElement) {
      this.node = el;
    } else {
      this.node = document.createElementNS('http://www.w3.org/2000/svg', el);
    }
  }

  _createClass(GraphSvg, [{
    key: "append",
    value: function append(el) {
      if (!(el instanceof GraphSvg)) {
        el = new GraphSvg(el);
      }

      this.node.appendChild(el.node);
      return el;
    }
  }, {
    key: "attr",
    value: function attr(attribute, value) {
      this.node.setAttribute(attribute, value);
      return this;
    }
  }, {
    key: "select",
    value: function select(selector) {
      var res = this.node.querySelector(selector);

      if (res instanceof SVGGraphicsElement) {
        return new GraphSvg(res);
      } else if (res) {
        throw new TypeError('The selected element is not of type "SVGGraphicsElement"');
      }

      return null;
    }
  }, {
    key: "selectAll",
    value: function selectAll(selector) {
      var res = this.node.querySelectorAll(selector);
      return Array.from(res).filter(function (node) {
        return node instanceof SVGGraphicsElement;
      }).map(function (node) {
        return new GraphSvg(node);
      }); // return null
    }
  }, {
    key: "text",
    value: function text(s) {
      var el = document.createTextNode(s);
      this.node.appendChild(el);
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(c) {
      this.node.classList.add(c);
      return this;
    }
  }]);

  return GraphSvg;
}();


// CONCATENATED MODULE: ./src/graph/Shape.ts






var Shape_Shape =
/*#__PURE__*/
function () {
  function Shape(shapeType, bbox, options) {
    _classCallCheck(this, Shape);

    this.shape = this[shapeType](bbox, options);
  }

  _createClass(Shape, [{
    key: "rect",
    value: function rect(bbox, _ref) {
      var _ref$rx = _ref.rx,
          rx = _ref$rx === void 0 ? '0' : _ref$rx,
          _ref$ry = _ref.ry,
          ry = _ref$ry === void 0 ? '0' : _ref$ry;
      return new Svg_GraphSvg('rect').attr('rx', rx).attr('ry', ry).attr('x', (-bbox.width / 2).toString()).attr('y', (-bbox.height / 2).toString()).attr('width', bbox.width.toString()).attr('height', bbox.height.toString());
    }
  }]);

  return Shape;
}();


// CONCATENATED MODULE: ./src/graph/Label.ts




var Label_GraphLabel =
/*#__PURE__*/
function () {
  function GraphLabel(options) {
    _classCallCheck(this, GraphLabel);

    this.group = new Svg_GraphSvg('g');
    this.labelData = options;
    this.textLabel();
  }

  _createClass(GraphLabel, [{
    key: "textLabel",
    value: function textLabel() {
      var text = this.group.append('text').text(this.labelData.label);
    }
  }]);

  return GraphLabel;
}();


// CONCATENATED MODULE: ./src/Renderer.ts










var Renderer_Renderer =
/*#__PURE__*/
function () {
  function Renderer(graph) {
    _classCallCheck(this, Renderer);

    this.graph = graph;
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render(svg) {
      // TODO: remove all children of svg
      var edgePathsGroup = this.createOrSelectGroup(svg, 'edgePaths');
      var edgeLabels = this.createEdgeLabels(this.createOrSelectGroup(svg, 'edgeLabels'));
      this.createNodes(this.createOrSelectGroup(svg, 'nodes'));
      this.graph.doLayout();
      var minX = 1000;
      var minY = 1000;
      var maxX = -1000;
      var maxY = -1000;
      this.graph.nodes.forEach(function (node) {
        minX = Math.min(minX, node.position.x - node.size.width / 2);
        minY = Math.min(minY, node.position.y - node.size.height / 2);
        maxX = Math.max(maxX, node.position.x + node.size.width / 2);
        maxY = Math.max(maxY, node.position.y + node.size.height / 2);
      });
      this.graph.edges.forEach(function (edge) {
        if (edge.position.x && edge.position.y) {
          minX = Math.min(minX, edge.position.x - edge.size.width / 2);
          minY = Math.min(minY, edge.position.y - edge.size.height / 2);
          maxX = Math.max(maxX, edge.position.x + edge.size.width / 2);
          maxY = Math.max(maxY, edge.position.y + edge.size.height / 2);
        }

        var points = edge.points.slice(1, edge.points.length - 1); // intersetion points don't matter

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var point = _step.value;
            minX = Math.min(minX, point.x);
            minY = Math.min(minY, point.y);
            maxX = Math.max(maxX, point.x);
            maxY = Math.max(maxY, point.y);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      this.graph.minX = minX;
      this.graph.minY = minY;
      this.graph.maxX = maxX;
      this.graph.maxY = maxY;
      this.positionNodes();
    }
  }, {
    key: "createNodes",
    value: function createNodes(selection) {
      var _this = this;

      var simpleNodes = this.graph.nodeIds.filter(function (id) {
        return !_this.graph.isSubgraph(id);
      }); // we have to append all simpleNodes to the graph now

      this.graph.nodes.forEach(function (graphNode) {
        var nodeGroup = selection.append('g').addClass('node');
        var labelGroup = nodeGroup.append('g').addClass('label');
        var label = labelGroup.append(new Label_GraphLabel({
          label: graphNode.label
        }).group);
        var labelBBox = label.node.getBBox();

        if (graphNode.style.padding) {
          // set width and height
          labelBBox.width += graphNode.style.padding.left + graphNode.style.padding.right;
          labelBBox.height += graphNode.style.padding.top + graphNode.style.padding.bottom; // transform label with padding

          labelGroup.attr('transform', 'translate(' + (graphNode.style.padding.left - graphNode.style.padding.right) / 2 + ',' + (graphNode.style.padding.top - graphNode.style.padding.bottom) / 2 + ')');
        } // nodeGroup.node.style.opacity = 0


        if (!graphNode.style.shape) {
          throw new Error('no shape is defined!');
        }

        var shape = nodeGroup.append(new Shape_Shape(graphNode.style.shape, labelBBox, {
          width: graphNode.size.width,
          height: graphNode.size.height
        }).shape);
        var shapeBBox = shape.node.getBBox();
        graphNode.size.setSize(shapeBBox.width, shapeBBox.height);
        nodeGroup.append(labelGroup);
        graphNode.svgGroup = nodeGroup;
      }); // let svgNodes = selection.querySelectorAll('g.node')
      // svgNodes.forEach((svgNode) => {
      //   svgNode.classList.add('update')
      // })
      // for (const node of nodes) {
      //   const shape = shapes[node.shape]
      // }
    }
  }, {
    key: "createEdgeLabels",
    value: function createEdgeLabels(selection) {
      var svgEdgeLabels = selection.selectAll('g.edgeLabel');
      this.graph.edges.forEach(function (edge) {
        var edgeLabelGroup = selection.append('g').addClass('edgeLabel');
        var labelGroup = edgeLabelGroup.append('g').addClass('label');
        var label = labelGroup.append(new Label_GraphLabel({
          label: edge.label || ''
        }).group);
        var labelBBox = label.node.getBBox();
        edge.size.width = edge.size.width || labelBBox.width;
        edge.size.height = edge.size.height || labelBBox.height;
      });
    }
  }, {
    key: "positionNodes",
    value: function positionNodes() {
      this.graph.nodes.forEach(function (node) {
        if (!node.svgGroup) {
          return;
        }

        node.svgGroup.attr('transform', 'translate(' + (node.position.x || 0) + ',' + (node.position.y || 0) + ')');
      });
    }
  }, {
    key: "createOrSelectGroup",
    value: function createOrSelectGroup(root, name) {
      return root.select('g.' + name) || root.append('g').addClass(name);
    }
  }]);

  return Renderer;
}();


// CONCATENATED MODULE: ./src/FlowElement.ts



var FlowElement_FlowElement =
/*#__PURE__*/
function () {
  function FlowElement(id, options) {
    _classCallCheck(this, FlowElement);

    this.edges = [];
    this.id = id;
    this.options = options;
  }

  _createClass(FlowElement, [{
    key: "leadsTo",
    value: function leadsTo(destinationElement, options) {
      this.edges.push({
        otherId: destinationElement.id,
        options: options
      });
      return destinationElement;
    }
  }]);

  return FlowElement;
}();


// CONCATENATED MODULE: ./src/FlowChart.ts










var FlowChart_FlowChart =
/*#__PURE__*/
function () {
  function FlowChart() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FlowChart);

    this.elements = [];
    localStorage.debug = 'graph,layout,normalizer,layering';
  }

  _createClass(FlowChart, [{
    key: "addElement",
    value: function addElement(id, options) {
      var el = new FlowElement_FlowElement(id, options);
      this.elements.push(el);
      return el;
    }
  }, {
    key: "setElements",
    value: function setElements(elements) {
      this.elements = elements;
    }
  }, {
    key: "render",
    value: function render(element) {
      var svg = new Svg_GraphSvg('svg');
      svg.node.id = 'f' + element.id;
      element.appendChild(svg.node);
      var group = svg.append('g'); // Create the input graph

      var graph = new Graph_Graph({
        multiGraph: true,
        compound: true,
        rankDir: 'LR',
        marginX: 20,
        marginY: 20
      }); // first create all nodes

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          var node = graph.setNode(el.id, el.options);
          node.style.radius = {
            rx: 5,
            ry: 5
          };
        } // now create all edges

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _el = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _el.edges[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var edge = _step3.value;
              graph.setEdge(_el.id, edge.otherId, edge.options);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var renderer = new Renderer_Renderer(graph);
      renderer.render(group); // const svgElement = document.getElementById('f' + element.id)
      // const groupElement = svgElement.querySelector('g')
      // svgElement.style.width = groupElement.getBoundingClientRect().width + 40
      // svgElement.style.height = groupElement.getBoundingClientRect().height + 40
    }
  }]);

  return FlowChart;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlowy.vue?vue&type=script&lang=ts







var VueFlowyvue_type_script_lang_ts_a;




var VueFlowyvue_type_script_lang_ts_VueFlowy =
/*#__PURE__*/
function (_Vue) {
  function VueFlowy() {
    _classCallCheck(this, VueFlowy);

    return _possibleConstructorReturn(this, _getPrototypeOf(VueFlowy).apply(this, arguments));
  }

  _createClass(VueFlowy, [{
    key: "mounted",
    value: function mounted() {
      this.renderChart = this.chart || new FlowChart_FlowChart();
      this.chartElement = this.$refs.vueflowyElement;
      this.chart.render(this.chartElement);
    }
  }]);

  _inherits(VueFlowy, _Vue);

  return VueFlowy;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(), __metadata("design:type", typeof (VueFlowyvue_type_script_lang_ts_a = typeof FlowChart_FlowChart !== "undefined" && FlowChart_FlowChart) === "function" && VueFlowyvue_type_script_lang_ts_a || Object)], VueFlowyvue_type_script_lang_ts_VueFlowy.prototype, "chart", void 0);

VueFlowyvue_type_script_lang_ts_VueFlowy = __decorate([vue_class_component_common_default.a], VueFlowyvue_type_script_lang_ts_VueFlowy);
/* harmony default export */ var VueFlowyvue_type_script_lang_ts = (VueFlowyvue_type_script_lang_ts_VueFlowy);
// CONCATENATED MODULE: ./src/components/VueFlowy.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_VueFlowyvue_type_script_lang_ts = (VueFlowyvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/VueFlowy.vue?vue&type=style&index=0&lang=scss
var VueFlowyvue_type_style_index_0_lang_scss = __webpack_require__("yGgv");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueFlowy.vue






/* normalize component */

var component = normalizeComponent(
  components_VueFlowyvue_type_script_lang_ts,
  VueFlowyvue_type_template_id_0a3f7cca_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_VueFlowy = (component.exports);
// CONCATENATED MODULE: ./src/main.ts



var Plugin = {
  VueFlowy: components_VueFlowy,
  FlowChart: FlowChart_FlowChart,
  install: function install(Vue) {
    Vue.component(components_VueFlowy.name, components_VueFlowy);
  }
};
/* harmony default export */ var main = (Plugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VueFlowy", function() { return components_VueFlowy; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FlowChart", function() { return FlowChart_FlowChart; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "0/R4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "0l/t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("XKFU");
var $filter = __webpack_require__("CkkT")(2);

$export($export.P + $export.F * !__webpack_require__("LyE8")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "1MBn":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("DVgA");
var gOPS = __webpack_require__("JiEa");
var pIE = __webpack_require__("UqcF");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "1TsA":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2OiF":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "33yf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig")))

/***/ }),

/***/ "4R4u":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "6FMO":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var isArray = __webpack_require__("EWmC");
var SPECIES = __webpack_require__("K0xU")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "8+KV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("XKFU");
var $forEach = __webpack_require__("CkkT")(0);
var STRICT = __webpack_require__("LyE8")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "8a7r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("hswa");
var createDesc = __webpack_require__("RjD/");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "91GP":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("XKFU");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("czNK") });


/***/ }),

/***/ "Afnz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("LQAc");
var $export = __webpack_require__("XKFU");
var redefine = __webpack_require__("KroJ");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var $iterCreate = __webpack_require__("QaDb");
var setToStringTag = __webpack_require__("fyDq");
var getPrototypeOf = __webpack_require__("OP3Y");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "AvRE":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("RYi7");
var defined = __webpack_require__("vhPU");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "C/va":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("y3w9");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "CkkT":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("m0Pp");
var IObject = __webpack_require__("Ymqv");
var toObject = __webpack_require__("S/j/");
var toLength = __webpack_require__("ne8i");
var asc = __webpack_require__("zRwo");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "DNiP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("XKFU");
var $reduce = __webpack_require__("eyMr");

$export($export.P + $export.F * !__webpack_require__("LyE8")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "DVgA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("zhAb");
var enumBugKeys = __webpack_require__("4R4u");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "EWmC":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("LZWt");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "EemH":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("UqcF");
var createDesc = __webpack_require__("RjD/");
var toIObject = __webpack_require__("aCFj");
var toPrimitive = __webpack_require__("apmT");
var has = __webpack_require__("aagx");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("nh4g") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "FGiv":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "FJW5":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var anObject = __webpack_require__("y3w9");
var getKeys = __webpack_require__("DVgA");

module.exports = __webpack_require__("nh4g") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "H6hf":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("y3w9");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "HEwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("m0Pp");
var $export = __webpack_require__("XKFU");
var toObject = __webpack_require__("S/j/");
var call = __webpack_require__("H6hf");
var isArrayIter = __webpack_require__("M6Qj");
var toLength = __webpack_require__("ne8i");
var createProperty = __webpack_require__("8a7r");
var getIterFn = __webpack_require__("J+6e");

$export($export.S + $export.F * !__webpack_require__("XMVh")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "I8a+":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("LZWt");
var TAG = __webpack_require__("K0xU")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "Iw71":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var document = __webpack_require__("dyZX").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "J+6e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("I8a+");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var Iterators = __webpack_require__("hPIQ");
module.exports = __webpack_require__("g3g5").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "JiEa":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "K0xU":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VTer")('wks');
var uid = __webpack_require__("ylqs");
var Symbol = __webpack_require__("dyZX").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "KroJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var has = __webpack_require__("aagx");
var SRC = __webpack_require__("ylqs")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("g3g5").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "Kuth":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("y3w9");
var dPs = __webpack_require__("FJW5");
var enumBugKeys = __webpack_require__("4R4u");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Iw71")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("+rLv").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "LQAc":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "LZWt":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "LyE8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("eeVq");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "M6Qj":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("hPIQ");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "Mukb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var createDesc = __webpack_require__("RjD/");
module.exports = __webpack_require__("nh4g") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "N8g3":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("K0xU");


/***/ }),

/***/ "NOtv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("lv48");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"NODE_ENV":"production","BASE_URL":"/"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig")))

/***/ }),

/***/ "OEbY":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("nh4g") && /./g.flags != 'g') __webpack_require__("hswa").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("C/va")
});


/***/ }),

/***/ "OP3Y":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("aagx");
var toObject = __webpack_require__("S/j/");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "OnI7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var core = __webpack_require__("g3g5");
var LIBRARY = __webpack_require__("LQAc");
var wksExt = __webpack_require__("N8g3");
var defineProperty = __webpack_require__("hswa").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "Q2Ig":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("33yf");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "QaDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Kuth");
var descriptor = __webpack_require__("RjD/");
var setToStringTag = __webpack_require__("fyDq");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("Mukb")(IteratorPrototype, __webpack_require__("K0xU")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "RW0V":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("S/j/");
var $keys = __webpack_require__("DVgA");

__webpack_require__("Xtr8")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "RYi7":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "RjD/":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "RlVf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "S/j/":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "UExd":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("DVgA");
var toIObject = __webpack_require__("aCFj");
var isEnum = __webpack_require__("UqcF").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "UqcF":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "VTer":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("g3g5");
var global = __webpack_require__("dyZX");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("LQAc") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "Vd3H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("XKFU");
var aFunction = __webpack_require__("2OiF");
var toObject = __webpack_require__("S/j/");
var fails = __webpack_require__("eeVq");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("LyE8")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "XKFU":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var core = __webpack_require__("g3g5");
var hide = __webpack_require__("Mukb");
var redefine = __webpack_require__("KroJ");
var ctx = __webpack_require__("m0Pp");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "XMVh":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("K0xU")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "XfO3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("AvRE")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("Afnz")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "Xtr8":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("XKFU");
var core = __webpack_require__("g3g5");
var fails = __webpack_require__("eeVq");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "YTvA":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("VTer")('keys');
var uid = __webpack_require__("ylqs");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "Ymqv":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("LZWt");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "Z6vF":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ylqs")('meta');
var isObject = __webpack_require__("0/R4");
var has = __webpack_require__("aagx");
var setDesc = __webpack_require__("hswa").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("eeVq")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "Zdk5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("i7/w"));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "a1Th":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("OEbY");
var anObject = __webpack_require__("y3w9");
var $flags = __webpack_require__("C/va");
var DESCRIPTORS = __webpack_require__("nh4g");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("KroJ")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("eeVq")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "aCFj":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("Ymqv");
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "aagx":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "apmT":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("0/R4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "bWfx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("XKFU");
var $map = __webpack_require__("CkkT")(1);

$export($export.P + $export.F * !__webpack_require__("LyE8")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "czNK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("DVgA");
var gOPS = __webpack_require__("JiEa");
var pIE = __webpack_require__("UqcF");
var toObject = __webpack_require__("S/j/");
var IObject = __webpack_require__("Ymqv");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("eeVq")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "d/Gc":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("RYi7");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "dyZX":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e7yV":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aCFj");
var gOPN = __webpack_require__("kJMx").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "eeVq":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "eyMr":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("2OiF");
var toObject = __webpack_require__("S/j/");
var IObject = __webpack_require__("Ymqv");
var toLength = __webpack_require__("ne8i");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "f3/d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("nh4g") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "fyDq":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("hswa").f;
var has = __webpack_require__("aagx");
var TAG = __webpack_require__("K0xU")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "g3g5":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "h7Nl":
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__("KroJ")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "hPIQ":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "hhXQ":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("XKFU");
var $values = __webpack_require__("UExd")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "hswa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("y3w9");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var toPrimitive = __webpack_require__("apmT");
var dP = Object.defineProperty;

exports.f = __webpack_require__("nh4g") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ioFf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("dyZX");
var has = __webpack_require__("aagx");
var DESCRIPTORS = __webpack_require__("nh4g");
var $export = __webpack_require__("XKFU");
var redefine = __webpack_require__("KroJ");
var META = __webpack_require__("Z6vF").KEY;
var $fails = __webpack_require__("eeVq");
var shared = __webpack_require__("VTer");
var setToStringTag = __webpack_require__("fyDq");
var uid = __webpack_require__("ylqs");
var wks = __webpack_require__("K0xU");
var wksExt = __webpack_require__("N8g3");
var wksDefine = __webpack_require__("OnI7");
var enumKeys = __webpack_require__("1MBn");
var isArray = __webpack_require__("EWmC");
var anObject = __webpack_require__("y3w9");
var isObject = __webpack_require__("0/R4");
var toIObject = __webpack_require__("aCFj");
var toPrimitive = __webpack_require__("apmT");
var createDesc = __webpack_require__("RjD/");
var _create = __webpack_require__("Kuth");
var gOPNExt = __webpack_require__("e7yV");
var $GOPD = __webpack_require__("EemH");
var $DP = __webpack_require__("hswa");
var $keys = __webpack_require__("DVgA");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("kJMx").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("UqcF").f = $propertyIsEnumerable;
  __webpack_require__("JiEa").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("LQAc")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("Mukb")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "kJMx":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("zhAb");
var hiddenKeys = __webpack_require__("4R4u").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "lv48":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("FGiv");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "m0Pp":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("2OiF");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "mNvP":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && Object({"NODE_ENV":"production","BASE_URL":"/"}) && Object({"NODE_ENV":"production","BASE_URL":"/"})["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig"), __webpack_require__("yLpj")))

/***/ }),

/***/ "nGyu":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("K0xU")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("Mukb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ne8i":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("RYi7");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "nh4g":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("eeVq")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "rE2o":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("OnI7")('asyncIterator');


/***/ }),

/***/ "rGqo":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("yt8O");
var getKeys = __webpack_require__("DVgA");
var redefine = __webpack_require__("KroJ");
var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var wks = __webpack_require__("K0xU");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "vhPU":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "w2a5":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aCFj");
var toLength = __webpack_require__("ne8i");
var toAbsoluteIndex = __webpack_require__("d/Gc");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "xpql":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("nh4g") && !__webpack_require__("eeVq")(function () {
  return Object.defineProperty(__webpack_require__("Iw71")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "y3w9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "yGgv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RlVf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "yLpj":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ylqs":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "yt8O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("nGyu");
var step = __webpack_require__("1TsA");
var Iterators = __webpack_require__("hPIQ");
var toIObject = __webpack_require__("aCFj");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("Afnz")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "zRwo":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("6FMO");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "zhAb":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("aagx");
var toIObject = __webpack_require__("aCFj");
var arrayIndexOf = __webpack_require__("w2a5")(false);
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ })

/******/ });
//# sourceMappingURL=vue-flowy.common.js.map