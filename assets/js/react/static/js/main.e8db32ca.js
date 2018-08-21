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
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
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
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 41);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        if (true) {
            module.exports = __webpack_require__(49);
        } else {
            module.exports = require('./cjs/react.development.js');
        }


        /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (false) {
            var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
                Symbol.for &&
                Symbol.for('react.element')) ||
                0xeac7;

            var isValidElement = function(object) {
                return typeof object === 'object' &&
                    object !== null &&
                    object.$$typeof === REACT_ELEMENT_TYPE;
            };

            // By explicitly using `prop-types` you are opting into new development behavior.
            // http://fb.me/prop-types-in-prod
            var throwOnDirectAccess = true;
            module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
        } else {
            // By explicitly using `prop-types` you are opting into new production behavior.
            // http://fb.me/prop-types-in-prod
            module.exports = __webpack_require__(59)();
        }


        /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var bind = __webpack_require__(33);
        var isBuffer = __webpack_require__(100);

        /*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

        var toString = Object.prototype.toString;

        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Array, otherwise false
         */
        function isArray(val) {
            return toString.call(val) === '[object Array]';
        }

        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */
        function isArrayBuffer(val) {
            return toString.call(val) === '[object ArrayBuffer]';
        }

        /**
         * Determine if a value is a FormData
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an FormData, otherwise false
         */
        function isFormData(val) {
            return (typeof FormData !== 'undefined') && (val instanceof FormData);
        }

        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */
        function isArrayBufferView(val) {
            var result;
            if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                result = ArrayBuffer.isView(val);
            } else {
                result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
            }
            return result;
        }

        /**
         * Determine if a value is a String
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a String, otherwise false
         */
        function isString(val) {
            return typeof val === 'string';
        }

        /**
         * Determine if a value is a Number
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Number, otherwise false
         */
        function isNumber(val) {
            return typeof val === 'number';
        }

        /**
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */
        function isUndefined(val) {
            return typeof val === 'undefined';
        }

        /**
         * Determine if a value is an Object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an Object, otherwise false
         */
        function isObject(val) {
            return val !== null && typeof val === 'object';
        }

        /**
         * Determine if a value is a Date
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Date, otherwise false
         */
        function isDate(val) {
            return toString.call(val) === '[object Date]';
        }

        /**
         * Determine if a value is a File
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a File, otherwise false
         */
        function isFile(val) {
            return toString.call(val) === '[object File]';
        }

        /**
         * Determine if a value is a Blob
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Blob, otherwise false
         */
        function isBlob(val) {
            return toString.call(val) === '[object Blob]';
        }

        /**
         * Determine if a value is a Function
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */
        function isFunction(val) {
            return toString.call(val) === '[object Function]';
        }

        /**
         * Determine if a value is a Stream
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Stream, otherwise false
         */
        function isStream(val) {
            return isObject(val) && isFunction(val.pipe);
        }

        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */
        function isURLSearchParams(val) {
            return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
        }

        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         * @returns {String} The String freed of excess whitespace
         */
        function trim(str) {
            return str.replace(/^\s*/, '').replace(/\s*$/, '');
        }

        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  navigator.product -> 'ReactNative'
         */
        function isStandardBrowserEnv() {
            if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
                return false;
            }
            return (
                typeof window !== 'undefined' &&
                typeof document !== 'undefined'
            );
        }

        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         */
        function forEach(obj, fn) {
            // Don't bother if no value provided
            if (obj === null || typeof obj === 'undefined') {
                return;
            }

            // Force an array if not already something iterable
            if (typeof obj !== 'object') {
                /*eslint no-param-reassign:0*/
                obj = [obj];
            }

            if (isArray(obj)) {
                // Iterate over array values
                for (var i = 0, l = obj.length; i < l; i++) {
                    fn.call(null, obj[i], i, obj);
                }
            } else {
                // Iterate over object keys
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        fn.call(null, obj[key], key, obj);
                    }
                }
            }
        }

        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         * @returns {Object} Result of all merge properties
         */
        function merge(/* obj1, obj2, obj3, ... */) {
            var result = {};
            function assignValue(val, key) {
                if (typeof result[key] === 'object' && typeof val === 'object') {
                    result[key] = merge(result[key], val);
                } else {
                    result[key] = val;
                }
            }

            for (var i = 0, l = arguments.length; i < l; i++) {
                forEach(arguments[i], assignValue);
            }
            return result;
        }

        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         * @return {Object} The resulting value of object a
         */
        function extend(a, b, thisArg) {
            forEach(b, function assignValue(val, key) {
                if (thisArg && typeof val === 'function') {
                    a[key] = bind(val, thisArg);
                } else {
                    a[key] = val;
                }
            });
            return a;
        }

        module.exports = {
            isArray: isArray,
            isArrayBuffer: isArrayBuffer,
            isBuffer: isBuffer,
            isFormData: isFormData,
            isArrayBufferView: isArrayBufferView,
            isString: isString,
            isNumber: isNumber,
            isObject: isObject,
            isUndefined: isUndefined,
            isDate: isDate,
            isFile: isFile,
            isBlob: isBlob,
            isFunction: isFunction,
            isStream: isStream,
            isURLSearchParams: isURLSearchParams,
            isStandardBrowserEnv: isStandardBrowserEnv,
            forEach: forEach,
            merge: merge,
            extend: extend,
            trim: trim
        };


        /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(95);


        /***/ }),
    /* 4 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */



        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var invariant = function(condition, format, a, b, c, d, e, f) {
            if (false) {
                if (format === undefined) {
                    throw new Error('invariant requires an error message argument');
                }
            }

            if (!condition) {
                var error;
                if (format === undefined) {
                    error = new Error(
                        'Minified exception occurred; use the non-minified dev environment ' +
                        'for the full error message and additional helpful warnings.'
                    );
                } else {
                    var args = [a, b, c, d, e, f];
                    var argIndex = 0;
                    error = new Error(
                        format.replace(/%s/g, function() { return args[argIndex++]; })
                    );
                    error.name = 'Invariant Violation';
                }

                error.framesToPop = 1; // we don't care about invariant's own frame
                throw error;
            }
        };

        module.exports = invariant;


        /***/ }),
    /* 5 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @providesModule warning
         */



        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var __DEV__ = "production" !== 'production';

        var warning = function() {};

        if (__DEV__) {
            var printWarning = function printWarning(format, args) {
                var len = arguments.length;
                args = new Array(len > 2 ? len - 2 : 0);
                for (var key = 2; key < len; key++) {
                    args[key - 2] = arguments[key];
                }
                var argIndex = 0;
                var message = 'Warning: ' +
                    format.replace(/%s/g, function() {
                        return args[argIndex++];
                    });
                if (typeof console !== 'undefined') {
                    console.error(message);
                }
                try {
                    // --- Welcome to debugging React ---
                    // This error was thrown as a convenience so that you can use this stack
                    // to find the callsite that caused this warning to fire.
                    throw new Error(message);
                } catch (x) {}
            }

            warning = function(condition, format, args) {
                var len = arguments.length;
                args = new Array(len > 2 ? len - 2 : 0);
                for (var key = 2; key < len; key++) {
                    args[key - 2] = arguments[key];
                }
                if (format === undefined) {
                    throw new Error(
                        '`warning(condition, format, ...args)` requires a warning ' +
                        'message argument'
                    );
                }
                if (!condition) {
                    printWarning.apply(null, [format].concat(args));
                }
            };
        }

        module.exports = warning;


        /***/ }),
    /* 6 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(61);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(64);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(65);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(10);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(8);
        /* unused harmony reexport parsePath */
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["b"]; });










        /***/ }),
    /* 7 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NotificationsComponent_NotificationsComponent__ = __webpack_require__(19);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Json_Json__ = __webpack_require__(40);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var IComponent=function(_Component){_inherits(IComponent,_Component);function IComponent(){_classCallCheck(this,IComponent);var _this=_possibleConstructorReturn(this,(IComponent.__proto__||Object.getPrototypeOf(IComponent)).call(this));_this.Notifications=new __WEBPACK_IMPORTED_MODULE_0__NotificationsComponent_NotificationsComponent__["a" /* default */]();_this.Json=new __WEBPACK_IMPORTED_MODULE_1__Json_Json__["a" /* default */]();return _this;}_createClass(IComponent,[{key:"notify",value:function notify(message){var value=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this.props.notify(value);this.Notifications.Show(message);}}]);return IComponent;}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (IComponent);

        /***/ }),
    /* 8 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
        var addLeadingSlash = function addLeadingSlash(path) {
            return path.charAt(0) === '/' ? path : '/' + path;
        };

        var stripLeadingSlash = function stripLeadingSlash(path) {
            return path.charAt(0) === '/' ? path.substr(1) : path;
        };

        var hasBasename = function hasBasename(path, prefix) {
            return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
        };

        var stripBasename = function stripBasename(path, prefix) {
            return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
        };

        var stripTrailingSlash = function stripTrailingSlash(path) {
            return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
        };

        var parsePath = function parsePath(path) {
            var pathname = path || '/';
            var search = '';
            var hash = '';

            var hashIndex = pathname.indexOf('#');
            if (hashIndex !== -1) {
                hash = pathname.substr(hashIndex);
                pathname = pathname.substr(0, hashIndex);
            }

            var searchIndex = pathname.indexOf('?');
            if (searchIndex !== -1) {
                search = pathname.substr(searchIndex);
                pathname = pathname.substr(0, searchIndex);
            }

            return {
                pathname: pathname,
                search: search === '?' ? '' : search,
                hash: hash === '#' ? '' : hash
            };
        };

        var createPath = function createPath(location) {
            var pathname = location.pathname,
                search = location.search,
                hash = location.hash;


            var path = pathname || '/';

            if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

            if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

            return path;
        };

        /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright 2014-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */



        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warning = function() {};

        if (false) {
            warning = function(condition, format, args) {
                var len = arguments.length;
                args = new Array(len > 2 ? len - 2 : 0);
                for (var key = 2; key < len; key++) {
                    args[key - 2] = arguments[key];
                }
                if (format === undefined) {
                    throw new Error(
                        '`warning(condition, format, ...args)` requires a warning ' +
                        'message argument'
                    );
                }

                if (format.length < 10 || (/^[s\W]*$/).test(format)) {
                    throw new Error(
                        'The warning format should be able to uniquely identify this ' +
                        'warning. Please, use a more descriptive format than: ' + format
                    );
                }

                if (!condition) {
                    var argIndex = 0;
                    var message = 'Warning: ' +
                        format.replace(/%s/g, function() {
                            return args[argIndex++];
                        });
                    if (typeof console !== 'undefined') {
                        console.error(message);
                    }
                    try {
                        // This error was thrown as a convenience so that you can use this stack
                        // to find the callsite that caused this warning to fire.
                        throw new Error(message);
                    } catch(x) {}
                }
            };
        }

        module.exports = warning;


        /***/ }),
    /* 10 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(62);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(63);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(8);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





        var createLocation = function createLocation(path, state, key, currentLocation) {
            var location = void 0;
            if (typeof path === 'string') {
                // Two-arg form: push(path, state)
                location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
                location.state = state;
            } else {
                // One-arg form: push(location)
                location = _extends({}, path);

                if (location.pathname === undefined) location.pathname = '';

                if (location.search) {
                    if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
                } else {
                    location.search = '';
                }

                if (location.hash) {
                    if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
                } else {
                    location.hash = '';
                }

                if (state !== undefined && location.state === undefined) location.state = state;
            }

            try {
                location.pathname = decodeURI(location.pathname);
            } catch (e) {
                if (e instanceof URIError) {
                    throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
                } else {
                    throw e;
                }
            }

            if (key) location.key = key;

            if (currentLocation) {
                // Resolve incomplete/relative pathname relative to current location.
                if (!location.pathname) {
                    location.pathname = currentLocation.pathname;
                } else if (location.pathname.charAt(0) !== '/') {
                    location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
                }
            } else {
                // When there is no prior location and pathname is empty, set it to /
                if (!location.pathname) {
                    location.pathname = '/';
                }
            }

            return location;
        };

        var locationsAreEqual = function locationsAreEqual(a, b) {
            return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
        };

        /***/ }),
    /* 11 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/


        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
            if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
            }

            return Object(val);
        }

        function shouldUseNative() {
            try {
                if (!Object.assign) {
                    return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                    return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                    test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                    return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                    return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                    test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !==
                    'abcdefghijklmnopqrst') {
                    return false;
                }

                return true;
            } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
            }
        }

        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
            var from;
            var to = toObject(target);
            var symbols;

            for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                    }
                }

                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]];
                        }
                    }
                }
            }

            return to;
        };


        /***/ }),
    /* 12 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(58);
        /* unused harmony reexport BrowserRouter */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(66);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(27);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(67);
        /* unused harmony reexport MemoryRouter */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(69);
        /* unused harmony reexport NavLink */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(71);
        /* unused harmony reexport Prompt */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(73);
        /* unused harmony reexport Redirect */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(28);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(14);
        /* unused harmony reexport Router */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(75);
        /* unused harmony reexport StaticRouter */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(77);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(79);
        /* unused harmony reexport generatePath */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(80);
        /* unused harmony reexport matchPath */
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(81);
        /* unused harmony reexport withRouter */





























        /***/ }),
    /* 13 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(9);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


        var createTransitionManager = function createTransitionManager() {
            var prompt = null;

            var setPrompt = function setPrompt(nextPrompt) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

                prompt = nextPrompt;

                return function () {
                    if (prompt === nextPrompt) prompt = null;
                };
            };

            var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
                // TODO: If another transition starts while we're still confirming
                // the previous one, we may end up in a weird state. Figure out the
                // best way to handle this.
                if (prompt != null) {
                    var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

                    if (typeof result === 'string') {
                        if (typeof getUserConfirmation === 'function') {
                            getUserConfirmation(result, callback);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

                            callback(true);
                        }
                    } else {
                        // Return false from a transition hook to cancel the transition.
                        callback(result !== false);
                    }
                } else {
                    callback(true);
                }
            };

            var listeners = [];

            var appendListener = function appendListener(fn) {
                var isActive = true;

                var listener = function listener() {
                    if (isActive) fn.apply(undefined, arguments);
                };

                listeners.push(listener);

                return function () {
                    isActive = false;
                    listeners = listeners.filter(function (item) {
                        return item !== listener;
                    });
                };
            };

            var notifyListeners = function notifyListeners() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                listeners.forEach(function (listener) {
                    return listener.apply(undefined, args);
                });
            };

            return {
                setPrompt: setPrompt,
                confirmTransitionTo: confirmTransitionTo,
                appendListener: appendListener,
                notifyListeners: notifyListeners
            };
        };

        /* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

        /***/ }),
    /* 14 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(15);
// Written in this round about way for babel-transform-imports


        /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

        /***/ }),
    /* 15 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






        /**
         * The public API for putting history on context.
         */

        var Router = function (_React$Component) {
            _inherits(Router, _React$Component);

            function Router() {
                var _temp, _this, _ret;

                _classCallCheck(this, Router);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
                    match: _this.computeMatch(_this.props.history.location.pathname)
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            Router.prototype.getChildContext = function getChildContext() {
                return {
                    router: _extends({}, this.context.router, {
                        history: this.props.history,
                        route: {
                            location: this.props.history.location,
                            match: this.state.match
                        }
                    })
                };
            };

            Router.prototype.computeMatch = function computeMatch(pathname) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: pathname === "/"
                };
            };

            Router.prototype.componentWillMount = function componentWillMount() {
                var _this2 = this;

                var _props = this.props,
                    children = _props.children,
                    history = _props.history;


                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

                // Do this here so we can setState when a <Redirect> changes the
                // location in componentWillMount. This happens e.g. when doing
                // server rendering using a <StaticRouter>.
                this.unlisten = history.listen(function () {
                    _this2.setState({
                        match: _this2.computeMatch(history.location.pathname)
                    });
                });
            };

            Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
            };

            Router.prototype.componentWillUnmount = function componentWillUnmount() {
                this.unlisten();
            };

            Router.prototype.render = function render() {
                var children = this.props.children;

                return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
            };

            return Router;
        }(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

        Router.propTypes = {
            history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
            children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
        };
        Router.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
        };
        Router.childContextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (Router);

        /***/ }),
    /* 16 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(30);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


        var patternCache = {};
        var cacheLimit = 10000;
        var cacheCount = 0;

        var compilePath = function compilePath(pattern, options) {
            var cacheKey = "" + options.end + options.strict + options.sensitive;
            var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

            if (cache[pattern]) return cache[pattern];

            var keys = [];
            var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
            var compiledPattern = { re: re, keys: keys };

            if (cacheCount < cacheLimit) {
                cache[pattern] = compiledPattern;
                cacheCount++;
            }

            return compiledPattern;
        };

        /**
         * Public API for matching a URL pathname to a path pattern.
         */
        var matchPath = function matchPath(pathname) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var parent = arguments[2];

            if (typeof options === "string") options = { path: options };

            var _options = options,
                path = _options.path,
                _options$exact = _options.exact,
                exact = _options$exact === undefined ? false : _options$exact,
                _options$strict = _options.strict,
                strict = _options$strict === undefined ? false : _options$strict,
                _options$sensitive = _options.sensitive,
                sensitive = _options$sensitive === undefined ? false : _options$sensitive;


            if (path == null) return parent;

            var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
                re = _compilePath.re,
                keys = _compilePath.keys;

            var match = re.exec(pathname);

            if (!match) return null;

            var url = match[0],
                values = match.slice(1);

            var isExact = pathname === url;

            if (exact && !isExact) return null;

            return {
                path: path, // the path pattern used to match
                url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
                isExact: isExact, // whether or not we matched exactly
                params: keys.reduce(function (memo, key, index) {
                    memo[key.name] = values[index];
                    return memo;
                }, {})
            };
        };

        /* harmony default export */ __webpack_exports__["a"] = (matchPath);

        /***/ }),
    /* 17 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(98);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(118);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var HttpClient=function(){function HttpClient(){_classCallCheck(this,HttpClient);return this._apiUrl=__WEBPACK_IMPORTED_MODULE_2__config___default.a[__WEBPACK_IMPORTED_MODULE_2__config___default.a.mode].api;}_createClass(HttpClient,[{key:'Get',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(url){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.t0=this;_context.next=4;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(this._apiUrl+url);case 4:_context.t1=_context.sent;return _context.abrupt('return',_context.t0.Response.call(_context.t0,_context.t1));case 8:_context.prev=8;_context.t2=_context['catch'](0);case 10:case'end':return _context.stop();}}},_callee,this,[[0,8]]);}));function Get(_x){return _ref.apply(this,arguments);}return Get;}()},{key:'Post',value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(url,data){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.t0=this;_context2.next=4;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(this._apiUrl+url,data);case 4:_context2.t1=_context2.sent;return _context2.abrupt('return',_context2.t0.Response.call(_context2.t0,_context2.t1));case 8:_context2.prev=8;_context2.t2=_context2['catch'](0);case 10:case'end':return _context2.stop();}}},_callee2,this,[[0,8]]);}));function Post(_x2,_x3){return _ref2.apply(this,arguments);}return Post;}()},{key:'Delete',value:function(){var _ref3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(url){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.t0=this;_context3.next=4;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete(this._apiUrl+url);case 4:_context3.t1=_context3.sent;return _context3.abrupt('return',_context3.t0.Response.call(_context3.t0,_context3.t1));case 8:_context3.prev=8;_context3.t2=_context3['catch'](0);case 10:case'end':return _context3.stop();}}},_callee3,this,[[0,8]]);}));function Delete(_x4){return _ref3.apply(this,arguments);}return Delete;}()},{key:'Put',value:function(){var _ref4=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(url,data){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.t0=this;_context4.next=4;return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put(this._apiUrl+url,data);case 4:_context4.t1=_context4.sent;return _context4.abrupt('return',_context4.t0.Response.call(_context4.t0,_context4.t1));case 8:_context4.prev=8;_context4.t2=_context4['catch'](0);case 10:case'end':return _context4.stop();}}},_callee4,this,[[0,8]]);}));function Put(_x5,_x6){return _ref4.apply(this,arguments);}return Put;}()},{key:'Response',value:function(){var _ref5=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(response){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!response.data){_context5.next=2;break;}return _context5.abrupt('return',response.data);case 2:case'end':return _context5.stop();}}},_callee5,this);}));function Response(_x7){return _ref5.apply(this,arguments);}return Response;}()}]);return HttpClient;}();/* harmony default export */ __webpack_exports__["a"] = (HttpClient);

        /***/ }),
    /* 18 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */(function(process) {

            var utils = __webpack_require__(2);
            var normalizeHeaderName = __webpack_require__(103);

            var DEFAULT_CONTENT_TYPE = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                    headers['Content-Type'] = value;
                }
            }

            function getDefaultAdapter() {
                var adapter;
                if (typeof XMLHttpRequest !== 'undefined') {
                    // For browsers use XHR adapter
                    adapter = __webpack_require__(34);
                } else if (typeof process !== 'undefined') {
                    // For node use HTTP adapter
                    adapter = __webpack_require__(34);
                }
                return adapter;
            }

            var defaults = {
                adapter: getDefaultAdapter(),

                transformRequest: [function transformRequest(data, headers) {
                    normalizeHeaderName(headers, 'Content-Type');
                    if (utils.isFormData(data) ||
                        utils.isArrayBuffer(data) ||
                        utils.isBuffer(data) ||
                        utils.isStream(data) ||
                        utils.isFile(data) ||
                        utils.isBlob(data)
                    ) {
                        return data;
                    }
                    if (utils.isArrayBufferView(data)) {
                        return data.buffer;
                    }
                    if (utils.isURLSearchParams(data)) {
                        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                        return data.toString();
                    }
                    if (utils.isObject(data)) {
                        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                        return JSON.stringify(data);
                    }
                    return data;
                }],

                transformResponse: [function transformResponse(data) {
                    /*eslint no-param-reassign:0*/
                    if (typeof data === 'string') {
                        try {
                            data = JSON.parse(data);
                        } catch (e) { /* Ignore */ }
                    }
                    return data;
                }],

                /**
                 * A timeout in milliseconds to abort a request. If set to 0 (default) a
                 * timeout is not created.
                 */
                timeout: 0,

                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',

                maxContentLength: -1,

                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                }
            };

            defaults.headers = {
                common: {
                    'Accept': 'application/json, text/plain, */*'
                }
            };

            utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });

            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });

            module.exports = defaults;

            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

        /***/ }),
    /* 19 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_snackbar__ = __webpack_require__(120);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var NotificationsComponent=function(_Component){_inherits(NotificationsComponent,_Component);function NotificationsComponent(){_classCallCheck(this,NotificationsComponent);var _this=_possibleConstructorReturn(this,(NotificationsComponent.__proto__||Object.getPrototypeOf(NotificationsComponent)).call(this));_this.state={typeNotify:false};return _this;}_createClass(NotificationsComponent,[{key:'componentWillReceiveProps',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(newProps){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(newProps.typeNotify!==this.props.typeNotify){console.log(newProps.typeNotify!==this.props.typeNotify);this.setState({typeNotify:newProps.typeNotify});}case 1:case'end':return _context.stop();}}},_callee,this);}));function componentWillReceiveProps(_x){return _ref.apply(this,arguments);}return componentWillReceiveProps;}()},{key:'Show',value:function Show(message){var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'X';var snackbar=new __WEBPACK_IMPORTED_MODULE_2__material_snackbar__["a" /* MDCSnackbar */](document.querySelector('.mdc-snackbar'));var dataObj={message:message,actionText:action,actionHandler:function actionHandler(){console.log('my cool function');}};if(this.state.typeNotify===true){dataObj.actionText=' ';}snackbar.show(dataObj);}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'mdc-snackbar mdc-snackbar--align-start','aria-live':'assertive','aria-atomic':'true','aria-hidden':'true'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'mdc-snackbar__text'}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'mdc-snackbar__action-wrapper'},this.state.typeNotify===false?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{type:'button',className:'mdc-snackbar__action-button'}):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{className:'mdc-snackbar__action-button button is-loading'})));}}]);return NotificationsComponent;}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (NotificationsComponent);

        /***/ }),
    /* 20 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__ = __webpack_require__(17);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var CollectionManager=function(){function CollectionManager(){_classCallCheck(this,CollectionManager);this.httpClient=new __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__["a" /* default */]();this.api_url='collections';}_createClass(CollectionManager,[{key:"GetAllCollections",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return this.httpClient.Get(this.api_url);case 3:return _context.abrupt("return",_context.sent);case 6:_context.prev=6;_context.t0=_context["catch"](0);case 8:case"end":return _context.stop();}}},_callee,this,[[0,6]]);}));function GetAllCollections(){return _ref.apply(this,arguments);}return GetAllCollections;}()},{key:"DropCollection",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(name){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return this.httpClient.Delete(this.api_url+"/"+name+"/remove");case 3:return _context2.abrupt("return",_context2.sent);case 6:_context2.prev=6;_context2.t0=_context2["catch"](0);case 8:case"end":return _context2.stop();}}},_callee2,this,[[0,6]]);}));function DropCollection(_x){return _ref2.apply(this,arguments);}return DropCollection;}()},{key:"ClearCollection",value:function(){var _ref3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(name){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return this.httpClient.Delete(this.api_url+"/"+name+"/clear");case 3:return _context3.abrupt("return",_context3.sent);case 6:_context3.prev=6;_context3.t0=_context3["catch"](0);case 8:case"end":return _context3.stop();}}},_callee3,this,[[0,6]]);}));function ClearCollection(_x2){return _ref3.apply(this,arguments);}return ClearCollection;}()},{key:"CreateCollection",value:function(){var _ref4=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(name){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;return _context4.abrupt("return",this.httpClient.Post(this.api_url+"/create",{name:name}));case 4:_context4.prev=4;_context4.t0=_context4["catch"](0);case 6:case"end":return _context4.stop();}}},_callee4,this,[[0,4]]);}));function CreateCollection(_x3){return _ref4.apply(this,arguments);}return CreateCollection;}()},{key:"RenameCollection",value:function(){var _ref5=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(oldname,name){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;return _context5.abrupt("return",this.httpClient.Post(this.api_url+"/"+oldname+"/rename",{name:name}));case 4:_context5.prev=4;_context5.t0=_context5["catch"](0);case 6:case"end":return _context5.stop();}}},_callee5,this,[[0,4]]);}));function RenameCollection(_x4,_x5){return _ref5.apply(this,arguments);}return RenameCollection;}()}]);return CollectionManager;}();/* harmony default export */ __webpack_exports__["a"] = (CollectionManager);

        /***/ }),
    /* 21 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__ = __webpack_require__(17);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DocumentManager=function(){function DocumentManager(){_classCallCheck(this,DocumentManager);this.httpClient=new __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__["a" /* default */]();}_createClass(DocumentManager,[{key:"ImportData",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(data){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;return _context.abrupt("return",this.httpClient.Post("import",{data:data}));case 4:_context.prev=4;_context.t0=_context["catch"](0);case 6:case"end":return _context.stop();}}},_callee,this,[[0,4]]);}));function ImportData(_x){return _ref.apply(this,arguments);}return ImportData;}()},{key:"ExportData",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(collections){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return this.httpClient.Post("export",{data:collections});case 3:return _context2.abrupt("return",_context2.sent);case 6:_context2.prev=6;_context2.t0=_context2["catch"](0);case 8:case"end":return _context2.stop();}}},_callee2,this,[[0,6]]);}));function ExportData(_x2){return _ref2.apply(this,arguments);}return ExportData;}()}]);return DocumentManager;}();/* harmony default export */ __webpack_exports__["a"] = (DocumentManager);

        /***/ }),
    /* 22 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var asap = __webpack_require__(44);

        function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
        var LAST_ERROR = null;
        var IS_ERROR = {};
        function getThen(obj) {
            try {
                return obj.then;
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        function tryCallOne(fn, a) {
            try {
                return fn(a);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }
        function tryCallTwo(fn, a, b) {
            try {
                fn(a, b);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        module.exports = Promise;

        function Promise(fn) {
            if (typeof this !== 'object') {
                throw new TypeError('Promises must be constructed via new');
            }
            if (typeof fn !== 'function') {
                throw new TypeError('Promise constructor\'s argument is not a function');
            }
            this._75 = 0;
            this._83 = 0;
            this._18 = null;
            this._38 = null;
            if (fn === noop) return;
            doResolve(fn, this);
        }
        Promise._47 = null;
        Promise._71 = null;
        Promise._44 = noop;

        Promise.prototype.then = function(onFulfilled, onRejected) {
            if (this.constructor !== Promise) {
                return safeThen(this, onFulfilled, onRejected);
            }
            var res = new Promise(noop);
            handle(this, new Handler(onFulfilled, onRejected, res));
            return res;
        };

        function safeThen(self, onFulfilled, onRejected) {
            return new self.constructor(function (resolve, reject) {
                var res = new Promise(noop);
                res.then(resolve, reject);
                handle(self, new Handler(onFulfilled, onRejected, res));
            });
        }
        function handle(self, deferred) {
            while (self._83 === 3) {
                self = self._18;
            }
            if (Promise._47) {
                Promise._47(self);
            }
            if (self._83 === 0) {
                if (self._75 === 0) {
                    self._75 = 1;
                    self._38 = deferred;
                    return;
                }
                if (self._75 === 1) {
                    self._75 = 2;
                    self._38 = [self._38, deferred];
                    return;
                }
                self._38.push(deferred);
                return;
            }
            handleResolved(self, deferred);
        }

        function handleResolved(self, deferred) {
            asap(function() {
                var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
                if (cb === null) {
                    if (self._83 === 1) {
                        resolve(deferred.promise, self._18);
                    } else {
                        reject(deferred.promise, self._18);
                    }
                    return;
                }
                var ret = tryCallOne(cb, self._18);
                if (ret === IS_ERROR) {
                    reject(deferred.promise, LAST_ERROR);
                } else {
                    resolve(deferred.promise, ret);
                }
            });
        }
        function resolve(self, newValue) {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) {
                return reject(
                    self,
                    new TypeError('A promise cannot be resolved with itself.')
                );
            }
            if (
                newValue &&
                (typeof newValue === 'object' || typeof newValue === 'function')
            ) {
                var then = getThen(newValue);
                if (then === IS_ERROR) {
                    return reject(self, LAST_ERROR);
                }
                if (
                    then === self.then &&
                    newValue instanceof Promise
                ) {
                    self._83 = 3;
                    self._18 = newValue;
                    finale(self);
                    return;
                } else if (typeof then === 'function') {
                    doResolve(then.bind(newValue), self);
                    return;
                }
            }
            self._83 = 1;
            self._18 = newValue;
            finale(self);
        }

        function reject(self, newValue) {
            self._83 = 2;
            self._18 = newValue;
            if (Promise._71) {
                Promise._71(self, newValue);
            }
            finale(self);
        }
        function finale(self) {
            if (self._75 === 1) {
                handle(self, self._38);
                self._38 = null;
            }
            if (self._75 === 2) {
                for (var i = 0; i < self._38.length; i++) {
                    handle(self, self._38[i]);
                }
                self._38 = null;
            }
        }

        function Handler(onFulfilled, onRejected, promise){
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.promise = promise;
        }

        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(fn, promise) {
            var done = false;
            var res = tryCallTwo(fn, function (value) {
                if (done) return;
                done = true;
                resolve(promise, value);
            }, function (reason) {
                if (done) return;
                done = true;
                reject(promise, reason);
            });
            if (!done && res === IS_ERROR) {
                done = true;
                reject(promise, LAST_ERROR);
            }
        }


        /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */



        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var validateFormat = function validateFormat(format) {};

        if (false) {
            validateFormat = function validateFormat(format) {
                if (format === undefined) {
                    throw new Error('invariant requires an error message argument');
                }
            };
        }

        function invariant(condition, format, a, b, c, d, e, f) {
            validateFormat(format);

            if (!condition) {
                var error;
                if (format === undefined) {
                    error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                } else {
                    var args = [a, b, c, d, e, f];
                    var argIndex = 0;
                    error = new Error(format.replace(/%s/g, function () {
                        return args[argIndex++];
                    }));
                    error.name = 'Invariant Violation';
                }

                error.framesToPop = 1; // we don't care about invariant's own frame
                throw error;
            }
        }

        module.exports = invariant;

        /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */



        var emptyObject = {};

        if (false) {
            Object.freeze(emptyObject);
        }

        module.exports = emptyObject;

        /***/ }),
    /* 25 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function makeEmptyFunction(arg) {
            return function () {
                return arg;
            };
        }

        /**
         * This function accepts and discards inputs; it has no side effects. This is
         * primarily useful idiomatically for overridable function endpoints which
         * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
         */
        var emptyFunction = function emptyFunction() {};

        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function () {
            return this;
        };
        emptyFunction.thatReturnsArgument = function (arg) {
            return arg;
        };

        module.exports = emptyFunction;

        /***/ }),
    /* 26 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
        var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

        var addEventListener = function addEventListener(node, event, listener) {
            return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
        };

        var removeEventListener = function removeEventListener(node, event, listener) {
            return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
        };

        var getConfirmation = function getConfirmation(message, callback) {
            return callback(window.confirm(message));
        }; // eslint-disable-line no-alert

        /**
         * Returns true if the HTML5 history API is supported. Taken from Modernizr.
         *
         * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
         * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
         * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
         */
        var supportsHistory = function supportsHistory() {
            var ua = window.navigator.userAgent;

            if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

            return window.history && 'pushState' in window.history;
        };

        /**
         * Returns true if browser fires popstate on hash change.
         * IE10 and IE11 do not.
         */
        var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
            return window.navigator.userAgent.indexOf('Trident') === -1;
        };

        /**
         * Returns false if using go(n) with hash history causes a full page reload.
         */
        var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
            return window.navigator.userAgent.indexOf('Firefox') === -1;
        };

        /**
         * Returns true if a given popstate event is an extraneous WebKit event.
         * Accounts for the fact that Chrome on iOS fires real popstate events
         * containing undefined state when pressing the back button.
         */
        var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
            return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
        };

        /***/ }),
    /* 27 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






        var isModifiedEvent = function isModifiedEvent(event) {
            return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        };

        /**
         * The public API for rendering a history-aware <a>.
         */

        var Link = function (_React$Component) {
            _inherits(Link, _React$Component);

            function Link() {
                var _temp, _this, _ret;

                _classCallCheck(this, Link);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
                    if (_this.props.onClick) _this.props.onClick(event);

                    if (!event.defaultPrevented && // onClick prevented default
                        event.button === 0 && // ignore everything but left clicks
                        !_this.props.target && // let browser handle "target=_blank" etc.
                        !isModifiedEvent(event) // ignore clicks with modifier keys
                    ) {
                        event.preventDefault();

                        var history = _this.context.router.history;
                        var _this$props = _this.props,
                            replace = _this$props.replace,
                            to = _this$props.to;


                        if (replace) {
                            history.replace(to);
                        } else {
                            history.push(to);
                        }
                    }
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            Link.prototype.render = function render() {
                var _props = this.props,
                    replace = _props.replace,
                    to = _props.to,
                    innerRef = _props.innerRef,
                    props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

                __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

                __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

                var history = this.context.router.history;

                var location = typeof to === "string" ? Object(__WEBPACK_IMPORTED_MODULE_3_history__["c" /* createLocation */])(to, null, null, history.location) : to;

                var href = history.createHref(location);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
            };

            return Link;
        }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

        Link.propTypes = {
            onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
            target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
            replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
            to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
            innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
        };
        Link.defaultProps = {
            replace: false
        };
        Link.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                    push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
                    replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
                    createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
                }).isRequired
            }).isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (Link);

        /***/ }),
    /* 28 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(29);
// Written in this round about way for babel-transform-imports


        /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

        /***/ }),
    /* 29 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(16);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







        var isEmptyChildren = function isEmptyChildren(children) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
        };

        /**
         * The public API for matching a single path and rendering.
         */

        var Route = function (_React$Component) {
            _inherits(Route, _React$Component);

            function Route() {
                var _temp, _this, _ret;

                _classCallCheck(this, Route);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
                    match: _this.computeMatch(_this.props, _this.context.router)
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            Route.prototype.getChildContext = function getChildContext() {
                return {
                    router: _extends({}, this.context.router, {
                        route: {
                            location: this.props.location || this.context.router.route.location,
                            match: this.state.match
                        }
                    })
                };
            };

            Route.prototype.computeMatch = function computeMatch(_ref, router) {
                var computedMatch = _ref.computedMatch,
                    location = _ref.location,
                    path = _ref.path,
                    strict = _ref.strict,
                    exact = _ref.exact,
                    sensitive = _ref.sensitive;

                if (computedMatch) return computedMatch; // <Switch> already computed the match for us

                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

                var route = router.route;

                var pathname = (location || route.location).pathname;

                return Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
            };

            Route.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
            };

            Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

                this.setState({
                    match: this.computeMatch(nextProps, nextContext.router)
                });
            };

            Route.prototype.render = function render() {
                var match = this.state.match;
                var _props = this.props,
                    children = _props.children,
                    component = _props.component,
                    render = _props.render;
                var _context$router = this.context.router,
                    history = _context$router.history,
                    route = _context$router.route,
                    staticContext = _context$router.staticContext;

                var location = this.props.location || route.location;
                var props = { match: match, location: location, history: history, staticContext: staticContext };

                if (component) return match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null;

                if (render) return match ? render(props) : null;

                if (typeof children === "function") return children(props);

                if (children && !isEmptyChildren(children)) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children);

                return null;
            };

            return Route;
        }(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

        Route.propTypes = {
            computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
            path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
            exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
            strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
            sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
            component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
            render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
            children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
            location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
        };
        Route.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
                history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
                route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
                staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
            })
        };
        Route.childContextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (Route);

        /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {

        var isarray = __webpack_require__(70)

        /**
         * Expose `pathToRegexp`.
         */
        module.exports = pathToRegexp
        module.exports.parse = parse
        module.exports.compile = compile
        module.exports.tokensToFunction = tokensToFunction
        module.exports.tokensToRegExp = tokensToRegExp

        /**
         * The main path matching regexp utility.
         *
         * @type {RegExp}
         */
        var PATH_REGEXP = new RegExp([
            // Match escaped characters that would otherwise appear in future matches.
            // This allows the user to escape special characters that won't transform.
            '(\\\\.)',
            // Match Express-style parameters and un-named parameters with a prefix
            // and optional suffixes. Matches appear as:
            //
            // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
            // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
            // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'), 'g')

        /**
         * Parse a string for the raw tokens.
         *
         * @param  {string}  str
         * @param  {Object=} options
         * @return {!Array}
         */
        function parse (str, options) {
            var tokens = []
            var key = 0
            var index = 0
            var path = ''
            var defaultDelimiter = options && options.delimiter || '/'
            var res

            while ((res = PATH_REGEXP.exec(str)) != null) {
                var m = res[0]
                var escaped = res[1]
                var offset = res.index
                path += str.slice(index, offset)
                index = offset + m.length

                // Ignore already escaped sequences.
                if (escaped) {
                    path += escaped[1]
                    continue
                }

                var next = str[index]
                var prefix = res[2]
                var name = res[3]
                var capture = res[4]
                var group = res[5]
                var modifier = res[6]
                var asterisk = res[7]

                // Push the current path onto the tokens.
                if (path) {
                    tokens.push(path)
                    path = ''
                }

                var partial = prefix != null && next != null && next !== prefix
                var repeat = modifier === '+' || modifier === '*'
                var optional = modifier === '?' || modifier === '*'
                var delimiter = res[2] || defaultDelimiter
                var pattern = capture || group

                tokens.push({
                    name: name || key++,
                    prefix: prefix || '',
                    delimiter: delimiter,
                    optional: optional,
                    repeat: repeat,
                    partial: partial,
                    asterisk: !!asterisk,
                    pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
                })
            }

            // Match any characters still remaining.
            if (index < str.length) {
                path += str.substr(index)
            }

            // If the path exists, push it onto the end.
            if (path) {
                tokens.push(path)
            }

            return tokens
        }

        /**
         * Compile a string to a template function for the path.
         *
         * @param  {string}             str
         * @param  {Object=}            options
         * @return {!function(Object=, Object=)}
         */
        function compile (str, options) {
            return tokensToFunction(parse(str, options))
        }

        /**
         * Prettier encoding of URI path segments.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeURIComponentPretty (str) {
            return encodeURI(str).replace(/[\/?#]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        /**
         * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeAsterisk (str) {
            return encodeURI(str).replace(/[?#]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        /**
         * Expose a method for transforming tokens into the path function.
         */
        function tokensToFunction (tokens) {
            // Compile all the tokens into regexps.
            var matches = new Array(tokens.length)

            // Compile all the patterns before compilation.
            for (var i = 0; i < tokens.length; i++) {
                if (typeof tokens[i] === 'object') {
                    matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
                }
            }

            return function (obj, opts) {
                var path = ''
                var data = obj || {}
                var options = opts || {}
                var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

                for (var i = 0; i < tokens.length; i++) {
                    var token = tokens[i]

                    if (typeof token === 'string') {
                        path += token

                        continue
                    }

                    var value = data[token.name]
                    var segment

                    if (value == null) {
                        if (token.optional) {
                            // Prepend partial segment prefixes.
                            if (token.partial) {
                                path += token.prefix
                            }

                            continue
                        } else {
                            throw new TypeError('Expected "' + token.name + '" to be defined')
                        }
                    }

                    if (isarray(value)) {
                        if (!token.repeat) {
                            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
                        }

                        if (value.length === 0) {
                            if (token.optional) {
                                continue
                            } else {
                                throw new TypeError('Expected "' + token.name + '" to not be empty')
                            }
                        }

                        for (var j = 0; j < value.length; j++) {
                            segment = encode(value[j])

                            if (!matches[i].test(segment)) {
                                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
                            }

                            path += (j === 0 ? token.prefix : token.delimiter) + segment
                        }

                        continue
                    }

                    segment = token.asterisk ? encodeAsterisk(value) : encode(value)

                    if (!matches[i].test(segment)) {
                        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
                    }

                    path += token.prefix + segment
                }

                return path
            }
        }

        /**
         * Escape a regular expression string.
         *
         * @param  {string} str
         * @return {string}
         */
        function escapeString (str) {
            return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
        }

        /**
         * Escape the capturing group by escaping special characters and meaning.
         *
         * @param  {string} group
         * @return {string}
         */
        function escapeGroup (group) {
            return group.replace(/([=!:$\/()])/g, '\\$1')
        }

        /**
         * Attach the keys as a property of the regexp.
         *
         * @param  {!RegExp} re
         * @param  {Array}   keys
         * @return {!RegExp}
         */
        function attachKeys (re, keys) {
            re.keys = keys
            return re
        }

        /**
         * Get the flags for a regexp from the options.
         *
         * @param  {Object} options
         * @return {string}
         */
        function flags (options) {
            return options.sensitive ? '' : 'i'
        }

        /**
         * Pull out keys from a regexp.
         *
         * @param  {!RegExp} path
         * @param  {!Array}  keys
         * @return {!RegExp}
         */
        function regexpToRegexp (path, keys) {
            // Use a negative lookahead to match only capturing groups.
            var groups = path.source.match(/\((?!\?)/g)

            if (groups) {
                for (var i = 0; i < groups.length; i++) {
                    keys.push({
                        name: i,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        partial: false,
                        asterisk: false,
                        pattern: null
                    })
                }
            }

            return attachKeys(path, keys)
        }

        /**
         * Transform an array into a regexp.
         *
         * @param  {!Array}  path
         * @param  {Array}   keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function arrayToRegexp (path, keys, options) {
            var parts = []

            for (var i = 0; i < path.length; i++) {
                parts.push(pathToRegexp(path[i], keys, options).source)
            }

            var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

            return attachKeys(regexp, keys)
        }

        /**
         * Create a path regexp from string input.
         *
         * @param  {string}  path
         * @param  {!Array}  keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function stringToRegexp (path, keys, options) {
            return tokensToRegExp(parse(path, options), keys, options)
        }

        /**
         * Expose a function for taking tokens and returning a RegExp.
         *
         * @param  {!Array}          tokens
         * @param  {(Array|Object)=} keys
         * @param  {Object=}         options
         * @return {!RegExp}
         */
        function tokensToRegExp (tokens, keys, options) {
            if (!isarray(keys)) {
                options = /** @type {!Object} */ (keys || options)
                keys = []
            }

            options = options || {}

            var strict = options.strict
            var end = options.end !== false
            var route = ''

            // Iterate over the tokens and create our regexp string.
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i]

                if (typeof token === 'string') {
                    route += escapeString(token)
                } else {
                    var prefix = escapeString(token.prefix)
                    var capture = '(?:' + token.pattern + ')'

                    keys.push(token)

                    if (token.repeat) {
                        capture += '(?:' + prefix + capture + ')*'
                    }

                    if (token.optional) {
                        if (!token.partial) {
                            capture = '(?:' + prefix + '(' + capture + '))?'
                        } else {
                            capture = prefix + '(' + capture + ')?'
                        }
                    } else {
                        capture = prefix + '(' + capture + ')'
                    }

                    route += capture
                }
            }

            var delimiter = escapeString(options.delimiter || '/')
            var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

            // In non-strict mode we allow a slash at the end of match. If the path to
            // match already ends with a slash, we remove it for consistency. The slash
            // is valid at the end of a path match, not in the middle. This is important
            // in non-ending mode, where "/test/" shouldn't match "/test//route".
            if (!strict) {
                route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
            }

            if (end) {
                route += '$'
            } else {
                // In non-ending mode, we need the capturing groups to match as much as
                // possible by using a positive lookahead to the end or next path segment.
                route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
            }

            return attachKeys(new RegExp('^' + route, flags(options)), keys)
        }

        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         *
         * @param  {(string|RegExp|Array)} path
         * @param  {(Array|Object)=}       keys
         * @param  {Object=}               options
         * @return {!RegExp}
         */
        function pathToRegexp (path, keys, options) {
            if (!isarray(keys)) {
                options = /** @type {!Object} */ (keys || options)
                keys = []
            }

            options = options || {}

            if (path instanceof RegExp) {
                return regexpToRegexp(path, /** @type {!Array} */ (keys))
            }

            if (isarray(path)) {
                return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
            }

            return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
        }


        /***/ }),
    /* 31 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(30);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


        var patternCache = {};
        var cacheLimit = 10000;
        var cacheCount = 0;

        var compileGenerator = function compileGenerator(pattern) {
            var cacheKey = pattern;
            var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

            if (cache[pattern]) return cache[pattern];

            var compiledGenerator = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default.a.compile(pattern);

            if (cacheCount < cacheLimit) {
                cache[pattern] = compiledGenerator;
                cacheCount++;
            }

            return compiledGenerator;
        };

        /**
         * Public API for generating a URL pathname from a pattern and parameters.
         */
        var generatePath = function generatePath() {
            var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (pattern === "/") {
                return pattern;
            }
            var generator = compileGenerator(pattern);
            return generator(params, { pretty: true });
        };

        /* harmony default export */ __webpack_exports__["a"] = (generatePath);

        /***/ }),
    /* 32 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__ = __webpack_require__(17);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DocumentManager=function(){function DocumentManager(){_classCallCheck(this,DocumentManager);this.httpClient=new __WEBPACK_IMPORTED_MODULE_1__core_HttpClient_HttpClient__["a" /* default */]();this.api_url='collection';}_createClass(DocumentManager,[{key:"GetDocumentsByCollection",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(collection){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return this.httpClient.Get(this.api_url+"/"+collection);case 3:return _context.abrupt("return",_context.sent);case 6:_context.prev=6;_context.t0=_context["catch"](0);case 8:case"end":return _context.stop();}}},_callee,this,[[0,6]]);}));function GetDocumentsByCollection(_x){return _ref.apply(this,arguments);}return GetDocumentsByCollection;}()},{key:"CreateDocument",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(collection,document){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;return _context2.abrupt("return",this.httpClient.Post(this.api_url+"/"+collection+"/create",{document:document}));case 4:_context2.prev=4;_context2.t0=_context2["catch"](0);case 6:case"end":return _context2.stop();}}},_callee2,this,[[0,4]]);}));function CreateDocument(_x2,_x3){return _ref2.apply(this,arguments);}return CreateDocument;}()},{key:"EditDocument",value:function(){var _ref3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(collection,document,id){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;return _context3.abrupt("return",this.httpClient.Put(this.api_url+"/"+collection+"/"+id,{document:document}));case 4:_context3.prev=4;_context3.t0=_context3["catch"](0);case 6:case"end":return _context3.stop();}}},_callee3,this,[[0,4]]);}));function EditDocument(_x4,_x5,_x6){return _ref3.apply(this,arguments);}return EditDocument;}()},{key:"DeleteDocument",value:function(){var _ref4=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(collection,id){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;return _context4.abrupt("return",this.httpClient.Delete(this.api_url+"/"+collection+"/"+id));case 4:_context4.prev=4;_context4.t0=_context4["catch"](0);case 6:case"end":return _context4.stop();}}},_callee4,this,[[0,4]]);}));function DeleteDocument(_x7,_x8){return _ref4.apply(this,arguments);}return DeleteDocument;}()}]);return DocumentManager;}();/* harmony default export */ __webpack_exports__["a"] = (DocumentManager);

        /***/ }),
    /* 33 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        module.exports = function bind(fn, thisArg) {
            return function wrap() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                }
                return fn.apply(thisArg, args);
            };
        };


        /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);
        var settle = __webpack_require__(104);
        var buildURL = __webpack_require__(106);
        var parseHeaders = __webpack_require__(107);
        var isURLSameOrigin = __webpack_require__(108);
        var createError = __webpack_require__(35);
        var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(109);

        module.exports = function xhrAdapter(config) {
            return new Promise(function dispatchXhrRequest(resolve, reject) {
                var requestData = config.data;
                var requestHeaders = config.headers;

                if (utils.isFormData(requestData)) {
                    delete requestHeaders['Content-Type']; // Let the browser set it
                }

                var request = new XMLHttpRequest();
                var loadEvent = 'onreadystatechange';
                var xDomain = false;

                // For IE 8/9 CORS support
                // Only supports POST and GET calls and doesn't returns the response headers.
                // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
                if ("production" !== 'test' &&
                    typeof window !== 'undefined' &&
                    window.XDomainRequest && !('withCredentials' in request) &&
                    !isURLSameOrigin(config.url)) {
                    request = new window.XDomainRequest();
                    loadEvent = 'onload';
                    xDomain = true;
                    request.onprogress = function handleProgress() {};
                    request.ontimeout = function handleTimeout() {};
                }

                // HTTP basic authentication
                if (config.auth) {
                    var username = config.auth.username || '';
                    var password = config.auth.password || '';
                    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                }

                request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

                // Set the request timeout in MS
                request.timeout = config.timeout;

                // Listen for ready state
                request[loadEvent] = function handleLoad() {
                    if (!request || (request.readyState !== 4 && !xDomain)) {
                        return;
                    }

                    // The request errored out and we didn't get a response, this will be
                    // handled by onerror instead
                    // With one exception: request that using file: protocol, most browsers
                    // will return status as 0 even though it's a successful request
                    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                        return;
                    }

                    // Prepare the response
                    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                    var response = {
                        data: responseData,
                        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                        status: request.status === 1223 ? 204 : request.status,
                        statusText: request.status === 1223 ? 'No Content' : request.statusText,
                        headers: responseHeaders,
                        config: config,
                        request: request
                    };

                    settle(resolve, reject, response);

                    // Clean up request
                    request = null;
                };

                // Handle low level network errors
                request.onerror = function handleError() {
                    // Real errors are hidden from us by the browser
                    // onerror should only fire if it's a network error
                    reject(createError('Network Error', config, null, request));

                    // Clean up request
                    request = null;
                };

                // Handle timeout
                request.ontimeout = function handleTimeout() {
                    reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
                        request));

                    // Clean up request
                    request = null;
                };

                // Add xsrf header
                // This is only done if running in a standard browser environment.
                // Specifically not if we're in a web worker, or react-native.
                if (utils.isStandardBrowserEnv()) {
                    var cookies = __webpack_require__(110);

                    // Add xsrf header
                    var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
                        cookies.read(config.xsrfCookieName) :
                        undefined;

                    if (xsrfValue) {
                        requestHeaders[config.xsrfHeaderName] = xsrfValue;
                    }
                }

                // Add headers to the request
                if ('setRequestHeader' in request) {
                    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                            // Remove Content-Type if data is undefined
                            delete requestHeaders[key];
                        } else {
                            // Otherwise add header to the request
                            request.setRequestHeader(key, val);
                        }
                    });
                }

                // Add withCredentials to request if needed
                if (config.withCredentials) {
                    request.withCredentials = true;
                }

                // Add responseType to request if needed
                if (config.responseType) {
                    try {
                        request.responseType = config.responseType;
                    } catch (e) {
                        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                        if (config.responseType !== 'json') {
                            throw e;
                        }
                    }
                }

                // Handle progress if needed
                if (typeof config.onDownloadProgress === 'function') {
                    request.addEventListener('progress', config.onDownloadProgress);
                }

                // Not all browsers support upload events
                if (typeof config.onUploadProgress === 'function' && request.upload) {
                    request.upload.addEventListener('progress', config.onUploadProgress);
                }

                if (config.cancelToken) {
                    // Handle cancellation
                    config.cancelToken.promise.then(function onCanceled(cancel) {
                        if (!request) {
                            return;
                        }

                        request.abort();
                        reject(cancel);
                        // Clean up request
                        request = null;
                    });
                }

                if (requestData === undefined) {
                    requestData = null;
                }

                // Send the request
                request.send(requestData);
            });
        };


        /***/ }),
    /* 35 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var enhanceError = __webpack_require__(105);

        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {Object} config The config.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         * @returns {Error} The created error.
         */
        module.exports = function createError(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };


        /***/ }),
    /* 36 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        module.exports = function isCancel(value) {
            return !!(value && value.__CANCEL__);
        };


        /***/ }),
    /* 37 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * A `Cancel` is an object that is thrown when an operation is canceled.
         *
         * @class
         * @param {string=} message The message.
         */
        function Cancel(message) {
            this.message = message;
        }

        Cancel.prototype.toString = function toString() {
            return 'Cancel' + (this.message ? ': ' + this.message : '');
        };

        Cancel.prototype.__CANCEL__ = true;

        module.exports = Cancel;


        /***/ }),
    /* 38 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(39);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(121);
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */







        /***/ }),
    /* 39 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /**
         * @template A
         */
        class MDCFoundation {
            /** @return enum{cssClasses} */
            static get cssClasses() {
                // Classes extending MDCFoundation should implement this method to return an object which exports every
                // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                return {};
            }

            /** @return enum{strings} */
            static get strings() {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                return {};
            }

            /** @return enum{numbers} */
            static get numbers() {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                return {};
            }

            /** @return {!Object} */
            static get defaultAdapter() {
                // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                // validation.
                return {};
            }

            /**
             * @param {A=} adapter
             */
            constructor(adapter = {}) {
                /** @protected {!A} */
                this.adapter_ = adapter;
            }

            init() {
                // Subclasses should override this method to perform initialization routines (registering events, etc.)
            }

            destroy() {
                // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
            }
        }

        /* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);


        /***/ }),
    /* 40 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Json=function(){function Json(){_classCallCheck(this,Json);}_createClass(Json,[{key:"validate",value:function validate(str){try{JSON.parse(str);}catch(e){return false;}return true;}},{key:"dataForImport",value:function dataForImport(str){var json_data=JSON.parse(str);var data_import=[];Object.entries(json_data).map(function(value,key){data_import.push({name:value[0],length:value[1].length});});return data_import;}}]);return Json;}();/* harmony default export */ __webpack_exports__["a"] = (Json);

        /***/ }),
    /* 41 */
    /***/ (function(module, exports, __webpack_require__) {

        __webpack_require__(42);
        module.exports = __webpack_require__(48);


        /***/ }),
    /* 42 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
// @remove-on-eject-begin
        /**
         * Copyright (c) 2015-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
// @remove-on-eject-end


        if (typeof Promise === 'undefined') {
            // Rejection tracking prevents a common issue where React gets into an
            // inconsistent state due to an error, but it gets swallowed by a Promise,
            // and the user has no idea what causes React's erratic future behavior.
            __webpack_require__(43).enable();
            window.Promise = __webpack_require__(46);
        }

// fetch() polyfill for making API calls.
        __webpack_require__(47);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
        Object.assign = __webpack_require__(11);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
        if (false) {
            require('raf').polyfill(global);
        }


        /***/ }),
    /* 43 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var Promise = __webpack_require__(22);

        var DEFAULT_WHITELIST = [
            ReferenceError,
            TypeError,
            RangeError
        ];

        var enabled = false;
        exports.disable = disable;
        function disable() {
            enabled = false;
            Promise._47 = null;
            Promise._71 = null;
        }

        exports.enable = enable;
        function enable(options) {
            options = options || {};
            if (enabled) disable();
            enabled = true;
            var id = 0;
            var displayId = 0;
            var rejections = {};
            Promise._47 = function (promise) {
                if (
                    promise._83 === 2 && // IS REJECTED
                    rejections[promise._56]
                ) {
                    if (rejections[promise._56].logged) {
                        onHandled(promise._56);
                    } else {
                        clearTimeout(rejections[promise._56].timeout);
                    }
                    delete rejections[promise._56];
                }
            };
            Promise._71 = function (promise, err) {
                if (promise._75 === 0) { // not yet handled
                    promise._56 = id++;
                    rejections[promise._56] = {
                        displayId: null,
                        error: err,
                        timeout: setTimeout(
                            onUnhandled.bind(null, promise._56),
                            // For reference errors and type errors, this almost always
                            // means the programmer made a mistake, so log them after just
                            // 100ms
                            // otherwise, wait 2 seconds to see if they get handled
                            matchWhitelist(err, DEFAULT_WHITELIST)
                                ? 100
                                : 2000
                        ),
                        logged: false
                    };
                }
            };
            function onUnhandled(id) {
                if (
                    options.allRejections ||
                    matchWhitelist(
                        rejections[id].error,
                        options.whitelist || DEFAULT_WHITELIST
                    )
                ) {
                    rejections[id].displayId = displayId++;
                    if (options.onUnhandled) {
                        rejections[id].logged = true;
                        options.onUnhandled(
                            rejections[id].displayId,
                            rejections[id].error
                        );
                    } else {
                        rejections[id].logged = true;
                        logError(
                            rejections[id].displayId,
                            rejections[id].error
                        );
                    }
                }
            }
            function onHandled(id) {
                if (rejections[id].logged) {
                    if (options.onHandled) {
                        options.onHandled(rejections[id].displayId, rejections[id].error);
                    } else if (!rejections[id].onUnhandled) {
                        console.warn(
                            'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
                        );
                        console.warn(
                            '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                            rejections[id].displayId + '.'
                        );
                    }
                }
            }
        }

        function logError(id, error) {
            console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
            var errStr = (error && (error.stack || error)) + '';
            errStr.split('\n').forEach(function (line) {
                console.warn('  ' + line);
            });
        }

        function matchWhitelist(error, list) {
            return list.some(function (cls) {
                return error instanceof cls;
            });
        }

        /***/ }),
    /* 44 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
            module.exports = rawAsap;
            function rawAsap(task) {
                if (!queue.length) {
                    requestFlush();
                    flushing = true;
                }
                // Equivalent to push, but avoids a function call.
                queue[queue.length] = task;
            }

            var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
            var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
            var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
            var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
            var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
            function flush() {
                while (index < queue.length) {
                    var currentIndex = index;
                    // Advance the index before calling the task. This ensures that we will
                    // begin flushing on the next task the task throws an error.
                    index = index + 1;
                    queue[currentIndex].call();
                    // Prevent leaking memory for long chains of recursive calls to `asap`.
                    // If we call `asap` within tasks scheduled by `asap`, the queue will
                    // grow, but to avoid an O(n) walk for every task we execute, we don't
                    // shift tasks off the queue after they have been executed.
                    // Instead, we periodically shift 1024 tasks off the queue.
                    if (index > capacity) {
                        // Manually shift all values starting at the index back to the
                        // beginning of the queue.
                        for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                            queue[scan] = queue[scan + index];
                        }
                        queue.length -= index;
                        index = 0;
                    }
                }
                queue.length = 0;
                index = 0;
                flushing = false;
            }

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

            /* globals self */
            var scope = typeof global !== "undefined" ? global : self;
            var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
            if (typeof BrowserMutationObserver === "function") {
                requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
            } else {
                requestFlush = makeRequestCallFromTimer(flush);
            }

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
            rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
            function makeRequestCallFromMutationObserver(callback) {
                var toggle = 1;
                var observer = new BrowserMutationObserver(callback);
                var node = document.createTextNode("");
                observer.observe(node, {characterData: true});
                return function requestCall() {
                    toggle = -toggle;
                    node.data = toggle;
                };
            }

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

            function makeRequestCallFromTimer(callback) {
                return function requestCall() {
                    // We dispatch a timeout with a specified delay of 0 for engines that
                    // can reliably accommodate that request. This will usually be snapped
                    // to a 4 milisecond delay, but once we're flushing, there's no delay
                    // between events.
                    var timeoutHandle = setTimeout(handleTimer, 0);
                    // However, since this timer gets frequently dropped in Firefox
                    // workers, we enlist an interval handle that will try to fire
                    // an event 20 times per second until it succeeds.
                    var intervalHandle = setInterval(handleTimer, 50);

                    function handleTimer() {
                        // Whichever timer succeeds will cancel both timers and
                        // execute the callback.
                        clearTimeout(timeoutHandle);
                        clearInterval(intervalHandle);
                        callback();
                    }
                };
            }

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
            rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

        /***/ }),
    /* 45 */
    /***/ (function(module, exports) {

        var g;

// This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1,eval)("this");
        } catch(e) {
            // This works if the window reference is available
            if(typeof window === "object")
                g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/ }),
    /* 46 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

        var Promise = __webpack_require__(22);

        module.exports = Promise;

        /* Static Functions */

        var TRUE = valuePromise(true);
        var FALSE = valuePromise(false);
        var NULL = valuePromise(null);
        var UNDEFINED = valuePromise(undefined);
        var ZERO = valuePromise(0);
        var EMPTYSTRING = valuePromise('');

        function valuePromise(value) {
            var p = new Promise(Promise._44);
            p._83 = 1;
            p._18 = value;
            return p;
        }
        Promise.resolve = function (value) {
            if (value instanceof Promise) return value;

            if (value === null) return NULL;
            if (value === undefined) return UNDEFINED;
            if (value === true) return TRUE;
            if (value === false) return FALSE;
            if (value === 0) return ZERO;
            if (value === '') return EMPTYSTRING;

            if (typeof value === 'object' || typeof value === 'function') {
                try {
                    var then = value.then;
                    if (typeof then === 'function') {
                        return new Promise(then.bind(value));
                    }
                } catch (ex) {
                    return new Promise(function (resolve, reject) {
                        reject(ex);
                    });
                }
            }
            return valuePromise(value);
        };

        Promise.all = function (arr) {
            var args = Array.prototype.slice.call(arr);

            return new Promise(function (resolve, reject) {
                if (args.length === 0) return resolve([]);
                var remaining = args.length;
                function res(i, val) {
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                        if (val instanceof Promise && val.then === Promise.prototype.then) {
                            while (val._83 === 3) {
                                val = val._18;
                            }
                            if (val._83 === 1) return res(i, val._18);
                            if (val._83 === 2) reject(val._18);
                            val.then(function (val) {
                                res(i, val);
                            }, reject);
                            return;
                        } else {
                            var then = val.then;
                            if (typeof then === 'function') {
                                var p = new Promise(then.bind(val));
                                p.then(function (val) {
                                    res(i, val);
                                }, reject);
                                return;
                            }
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };

        Promise.reject = function (value) {
            return new Promise(function (resolve, reject) {
                reject(value);
            });
        };

        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                values.forEach(function(value){
                    Promise.resolve(value).then(resolve, reject);
                });
            });
        };

        /* Prototype Methods */

        Promise.prototype['catch'] = function (onRejected) {
            return this.then(null, onRejected);
        };


        /***/ }),
    /* 47 */
    /***/ (function(module, exports) {

        (function(self) {
            'use strict';

            if (self.fetch) {
                return
            }

            var support = {
                searchParams: 'URLSearchParams' in self,
                iterable: 'Symbol' in self && 'iterator' in Symbol,
                blob: 'FileReader' in self && 'Blob' in self && (function() {
                    try {
                        new Blob()
                        return true
                    } catch(e) {
                        return false
                    }
                })(),
                formData: 'FormData' in self,
                arrayBuffer: 'ArrayBuffer' in self
            }

            if (support.arrayBuffer) {
                var viewClasses = [
                    '[object Int8Array]',
                    '[object Uint8Array]',
                    '[object Uint8ClampedArray]',
                    '[object Int16Array]',
                    '[object Uint16Array]',
                    '[object Int32Array]',
                    '[object Uint32Array]',
                    '[object Float32Array]',
                    '[object Float64Array]'
                ]

                var isDataView = function(obj) {
                    return obj && DataView.prototype.isPrototypeOf(obj)
                }

                var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
                }
            }

            function normalizeName(name) {
                if (typeof name !== 'string') {
                    name = String(name)
                }
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                    throw new TypeError('Invalid character in header field name')
                }
                return name.toLowerCase()
            }

            function normalizeValue(value) {
                if (typeof value !== 'string') {
                    value = String(value)
                }
                return value
            }

            // Build a destructive iterator for the value list
            function iteratorFor(items) {
                var iterator = {
                    next: function() {
                        var value = items.shift()
                        return {done: value === undefined, value: value}
                    }
                }

                if (support.iterable) {
                    iterator[Symbol.iterator] = function() {
                        return iterator
                    }
                }

                return iterator
            }

            function Headers(headers) {
                this.map = {}

                if (headers instanceof Headers) {
                    headers.forEach(function(value, name) {
                        this.append(name, value)
                    }, this)
                } else if (Array.isArray(headers)) {
                    headers.forEach(function(header) {
                        this.append(header[0], header[1])
                    }, this)
                } else if (headers) {
                    Object.getOwnPropertyNames(headers).forEach(function(name) {
                        this.append(name, headers[name])
                    }, this)
                }
            }

            Headers.prototype.append = function(name, value) {
                name = normalizeName(name)
                value = normalizeValue(value)
                var oldValue = this.map[name]
                this.map[name] = oldValue ? oldValue+','+value : value
            }

            Headers.prototype['delete'] = function(name) {
                delete this.map[normalizeName(name)]
            }

            Headers.prototype.get = function(name) {
                name = normalizeName(name)
                return this.has(name) ? this.map[name] : null
            }

            Headers.prototype.has = function(name) {
                return this.map.hasOwnProperty(normalizeName(name))
            }

            Headers.prototype.set = function(name, value) {
                this.map[normalizeName(name)] = normalizeValue(value)
            }

            Headers.prototype.forEach = function(callback, thisArg) {
                for (var name in this.map) {
                    if (this.map.hasOwnProperty(name)) {
                        callback.call(thisArg, this.map[name], name, this)
                    }
                }
            }

            Headers.prototype.keys = function() {
                var items = []
                this.forEach(function(value, name) { items.push(name) })
                return iteratorFor(items)
            }

            Headers.prototype.values = function() {
                var items = []
                this.forEach(function(value) { items.push(value) })
                return iteratorFor(items)
            }

            Headers.prototype.entries = function() {
                var items = []
                this.forEach(function(value, name) { items.push([name, value]) })
                return iteratorFor(items)
            }

            if (support.iterable) {
                Headers.prototype[Symbol.iterator] = Headers.prototype.entries
            }

            function consumed(body) {
                if (body.bodyUsed) {
                    return Promise.reject(new TypeError('Already read'))
                }
                body.bodyUsed = true
            }

            function fileReaderReady(reader) {
                return new Promise(function(resolve, reject) {
                    reader.onload = function() {
                        resolve(reader.result)
                    }
                    reader.onerror = function() {
                        reject(reader.error)
                    }
                })
            }

            function readBlobAsArrayBuffer(blob) {
                var reader = new FileReader()
                var promise = fileReaderReady(reader)
                reader.readAsArrayBuffer(blob)
                return promise
            }

            function readBlobAsText(blob) {
                var reader = new FileReader()
                var promise = fileReaderReady(reader)
                reader.readAsText(blob)
                return promise
            }

            function readArrayBufferAsText(buf) {
                var view = new Uint8Array(buf)
                var chars = new Array(view.length)

                for (var i = 0; i < view.length; i++) {
                    chars[i] = String.fromCharCode(view[i])
                }
                return chars.join('')
            }

            function bufferClone(buf) {
                if (buf.slice) {
                    return buf.slice(0)
                } else {
                    var view = new Uint8Array(buf.byteLength)
                    view.set(new Uint8Array(buf))
                    return view.buffer
                }
            }

            function Body() {
                this.bodyUsed = false

                this._initBody = function(body) {
                    this._bodyInit = body
                    if (!body) {
                        this._bodyText = ''
                    } else if (typeof body === 'string') {
                        this._bodyText = body
                    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                        this._bodyBlob = body
                    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                        this._bodyFormData = body
                    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                        this._bodyText = body.toString()
                    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                        this._bodyArrayBuffer = bufferClone(body.buffer)
                        // IE 10-11 can't handle a DataView body.
                        this._bodyInit = new Blob([this._bodyArrayBuffer])
                    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                        this._bodyArrayBuffer = bufferClone(body)
                    } else {
                        throw new Error('unsupported BodyInit type')
                    }

                    if (!this.headers.get('content-type')) {
                        if (typeof body === 'string') {
                            this.headers.set('content-type', 'text/plain;charset=UTF-8')
                        } else if (this._bodyBlob && this._bodyBlob.type) {
                            this.headers.set('content-type', this._bodyBlob.type)
                        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
                        }
                    }
                }

                if (support.blob) {
                    this.blob = function() {
                        var rejected = consumed(this)
                        if (rejected) {
                            return rejected
                        }

                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob)
                        } else if (this._bodyArrayBuffer) {
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as blob')
                        } else {
                            return Promise.resolve(new Blob([this._bodyText]))
                        }
                    }

                    this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                        } else {
                            return this.blob().then(readBlobAsArrayBuffer)
                        }
                    }
                }

                this.text = function() {
                    var rejected = consumed(this)
                    if (rejected) {
                        return rejected
                    }

                    if (this._bodyBlob) {
                        return readBlobAsText(this._bodyBlob)
                    } else if (this._bodyArrayBuffer) {
                        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
                    } else if (this._bodyFormData) {
                        throw new Error('could not read FormData body as text')
                    } else {
                        return Promise.resolve(this._bodyText)
                    }
                }

                if (support.formData) {
                    this.formData = function() {
                        return this.text().then(decode)
                    }
                }

                this.json = function() {
                    return this.text().then(JSON.parse)
                }

                return this
            }

            // HTTP methods whose capitalization should be normalized
            var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

            function normalizeMethod(method) {
                var upcased = method.toUpperCase()
                return (methods.indexOf(upcased) > -1) ? upcased : method
            }

            function Request(input, options) {
                options = options || {}
                var body = options.body

                if (input instanceof Request) {
                    if (input.bodyUsed) {
                        throw new TypeError('Already read')
                    }
                    this.url = input.url
                    this.credentials = input.credentials
                    if (!options.headers) {
                        this.headers = new Headers(input.headers)
                    }
                    this.method = input.method
                    this.mode = input.mode
                    if (!body && input._bodyInit != null) {
                        body = input._bodyInit
                        input.bodyUsed = true
                    }
                } else {
                    this.url = String(input)
                }

                this.credentials = options.credentials || this.credentials || 'omit'
                if (options.headers || !this.headers) {
                    this.headers = new Headers(options.headers)
                }
                this.method = normalizeMethod(options.method || this.method || 'GET')
                this.mode = options.mode || this.mode || null
                this.referrer = null

                if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                    throw new TypeError('Body not allowed for GET or HEAD requests')
                }
                this._initBody(body)
            }

            Request.prototype.clone = function() {
                return new Request(this, { body: this._bodyInit })
            }

            function decode(body) {
                var form = new FormData()
                body.trim().split('&').forEach(function(bytes) {
                    if (bytes) {
                        var split = bytes.split('=')
                        var name = split.shift().replace(/\+/g, ' ')
                        var value = split.join('=').replace(/\+/g, ' ')
                        form.append(decodeURIComponent(name), decodeURIComponent(value))
                    }
                })
                return form
            }

            function parseHeaders(rawHeaders) {
                var headers = new Headers()
                rawHeaders.split(/\r?\n/).forEach(function(line) {
                    var parts = line.split(':')
                    var key = parts.shift().trim()
                    if (key) {
                        var value = parts.join(':').trim()
                        headers.append(key, value)
                    }
                })
                return headers
            }

            Body.call(Request.prototype)

            function Response(bodyInit, options) {
                if (!options) {
                    options = {}
                }

                this.type = 'default'
                this.status = 'status' in options ? options.status : 200
                this.ok = this.status >= 200 && this.status < 300
                this.statusText = 'statusText' in options ? options.statusText : 'OK'
                this.headers = new Headers(options.headers)
                this.url = options.url || ''
                this._initBody(bodyInit)
            }

            Body.call(Response.prototype)

            Response.prototype.clone = function() {
                return new Response(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Headers(this.headers),
                    url: this.url
                })
            }

            Response.error = function() {
                var response = new Response(null, {status: 0, statusText: ''})
                response.type = 'error'
                return response
            }

            var redirectStatuses = [301, 302, 303, 307, 308]

            Response.redirect = function(url, status) {
                if (redirectStatuses.indexOf(status) === -1) {
                    throw new RangeError('Invalid status code')
                }

                return new Response(null, {status: status, headers: {location: url}})
            }

            self.Headers = Headers
            self.Request = Request
            self.Response = Response

            self.fetch = function(input, init) {
                return new Promise(function(resolve, reject) {
                    var request = new Request(input, init)
                    var xhr = new XMLHttpRequest()

                    xhr.onload = function() {
                        var options = {
                            status: xhr.status,
                            statusText: xhr.statusText,
                            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                        }
                        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
                        var body = 'response' in xhr ? xhr.response : xhr.responseText
                        resolve(new Response(body, options))
                    }

                    xhr.onerror = function() {
                        reject(new TypeError('Network request failed'))
                    }

                    xhr.ontimeout = function() {
                        reject(new TypeError('Network request failed'))
                    }

                    xhr.open(request.method, request.url, true)

                    if (request.credentials === 'include') {
                        xhr.withCredentials = true
                    }

                    if ('responseType' in xhr && support.blob) {
                        xhr.responseType = 'blob'
                    }

                    request.headers.forEach(function(value, name) {
                        xhr.setRequestHeader(name, value)
                    })

                    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
                })
            }
            self.fetch.polyfill = true
        })(typeof self !== 'undefined' ? self : this);


        /***/ }),
    /* 48 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(50);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(12);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css__ = __webpack_require__(84);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(85);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registerServiceWorker__ = __webpack_require__(131);
        __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* HashRouter */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */],null)),document.getElementById('root'));Object(__WEBPACK_IMPORTED_MODULE_5__registerServiceWorker__["a" /* default */])();

        /***/ }),
    /* 49 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /** @license React v16.4.2
         * react.production.min.js
         *
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var k=__webpack_require__(11),n=__webpack_require__(23),p=__webpack_require__(24),q=__webpack_require__(25),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
            r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
        var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
        G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
        function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
        function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
        function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
        function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
        var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
                _calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
            b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
                assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


        /***/ }),
    /* 50 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        function checkDCE() {
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
            if (
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
            ) {
                return;
            }
            if (false) {
                // This branch is unreachable because this function is only called
                // in production, but the condition is true only in development.
                // Therefore if the branch is still here, dead code elimination wasn't
                // properly applied.
                // Don't change the message. React DevTools relies on it. Also make sure
                // this message doesn't occur elsewhere in this function, or it will cause
                // a false positive.
                throw new Error('^_^');
            }
            try {
                // Verify that the code above has been dead code eliminated (DCE'd).
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
            } catch (err) {
                // DevTools shouldn't crash React, no matter what.
                // We should still report in case we break this code.
                console.error(err);
            }
        }

        if (true) {
            // DCE check should happen before ReactDOM bundle executes so that
            // DevTools can report bad minification during injection.
            checkDCE();
            module.exports = __webpack_require__(51);
        } else {
            module.exports = require('./cjs/react-dom.development.js');
        }


        /***/ }),
    /* 51 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /** @license React v16.4.1
         * react-dom.production.min.js
         *
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
        var aa=__webpack_require__(23),ba=__webpack_require__(0),m=__webpack_require__(52),p=__webpack_require__(11),v=__webpack_require__(25),da=__webpack_require__(53),ea=__webpack_require__(54),fa=__webpack_require__(55),ha=__webpack_require__(24);
        function A(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}ba?void 0:A("227");
        function ia(a,b,c,d,e,f,g,h,k){this._hasCaughtError=!1;this._caughtError=null;var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(r){this._caughtError=r,this._hasCaughtError=!0}}
        var B={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){ia.apply(B,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){B.invokeGuardedCallback.apply(this,arguments);if(B.hasCaughtError()){var n=B.clearCaughtError();B._hasRethrowError||(B._hasRethrowError=!0,B._rethrowError=n)}},rethrowCaughtError:function(){return ka.apply(B,arguments)},hasCaughtError:function(){return B._hasCaughtError},clearCaughtError:function(){if(B._hasCaughtError){var a=
                B._caughtError;B._caughtError=null;B._hasCaughtError=!1;return a}A("198")}};function ka(){if(B._hasRethrowError){var a=B._rethrowError;B._rethrowError=null;B._hasRethrowError=!1;throw a;}}var la=null,ma={};
        function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:A("96",a);if(!oa[c]){b.extractEvents?void 0:A("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?A("99",h):void 0;pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&qa(k[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:A("98",d,a)}}}}
        function qa(a,b,c){ra[a]?A("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={};function ta(a){la?A("101"):void 0;la=Array.prototype.slice.call(a);na()}function ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?A("102",c):void 0,ma[c]=d,b=!0)}b&&na()}
        var va={plugins:oa,eventNameDispatchConfigs:pa,registrationNameModules:ra,registrationNameDependencies:sa,possibleRegistrationNames:null,injectEventPluginOrder:ta,injectEventPluginsByName:ua},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);B.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
        function Aa(a,b){null==b?A("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;
        function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}var Ga={injectEventPluginOrder:ta,injectEventPluginsByName:ua};
        function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?A("231",b,typeof c):void 0;
            return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?A("95"):void 0,B.rethrowCaughtError())}function Ja(a,b,c,d){for(var e=null,f=0;f<oa.length;f++){var g=oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=Aa(e,g))}Ia(e,!1)}var Ka={injection:Ga,getListener:Ha,runEventsInBatch:Ia,runExtractedEventsInBatch:Ja},La=Math.random().toString(36).slice(2),C="__reactInternalInstance$"+La,Ma="__reactEventHandlers$"+La;
        function Na(a){if(a[C])return a[C];for(;!a[C];)if(a.parentNode)a=a.parentNode;else return null;a=a[C];return 5===a.tag||6===a.tag?a:null}function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;A("33")}function Pa(a){return a[Ma]||null}var Qa={precacheFiberNode:function(a,b){b[C]=a},getClosestInstanceFromNode:Na,getInstanceFromNode:function(a){a=a[C];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Oa,getFiberCurrentPropsFromNode:Pa,updateFiberProps:function(a,b){a[Ma]=b}};
        function F(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){for(var d=[];a;)d.push(a),a=F(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}function Ta(a){a&&a.dispatchConfig.phasedRegistrationNames&&Ra(a._targetInst,Sa,a)}
        function Ua(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?F(b):null;Ra(b,Sa,a)}}function Va(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Xa(a){a&&a.dispatchConfig.registrationName&&Va(a._targetInst,null,a)}function Ya(a){Ba(a,Ta)}
        function Za(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=F(h))g++;h=0;for(var k=f;k;k=F(k))h++;for(;0<g-h;)e=F(e),g--;for(;0<h-g;)f=F(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=F(e);f=F(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=F(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=F(d)}for(d=0;d<e.length;d++)Va(e[d],"bubbled",a);for(a=c.length;0<a--;)Va(c[a],"captured",b)}
        var $a={accumulateTwoPhaseDispatches:Ya,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ba(a,Ua)},accumulateEnterLeaveDispatches:Za,accumulateDirectDispatches:function(a){Ba(a,Xa)}};function ab(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
        var bb={animationend:ab("Animation","AnimationEnd"),animationiteration:ab("Animation","AnimationIteration"),animationstart:ab("Animation","AnimationStart"),transitionend:ab("Transition","TransitionEnd")},cb={},db={};m.canUseDOM&&(db=document.createElement("div").style,"AnimationEvent"in window||(delete bb.animationend.animation,delete bb.animationiteration.animation,delete bb.animationstart.animation),"TransitionEvent"in window||delete bb.transitionend.transition);
        function eb(a){if(cb[a])return cb[a];if(!bb[a])return a;var b=bb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in db)return cb[a]=b[c];return a}var fb=eb("animationend"),gb=eb("animationiteration"),hb=eb("animationstart"),ib=eb("transitionend"),jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=null;
        function lb(){!kb&&m.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var G={_root:null,_startText:null,_fallbackText:null};function mb(){if(G._fallbackText)return G._fallbackText;var a,b=G._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);G._fallbackText=e.slice(a,1<d?1-d:void 0);return G._fallbackText}function nb(){return"value"in G._root?G._root.value:G._root[lb()]}
        var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:v.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
        function H(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?v.thatReturnsTrue:v.thatReturnsFalse;this.isPropagationStopped=v.thatReturnsFalse;return this}
        p(H.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=v.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=v.thatReturnsTrue)},persist:function(){this.isPersistent=v.thatReturnsTrue},isPersistent:v.thatReturnsFalse,
            destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null}});H.Interface=pb;H.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;p(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=p({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(H);
        function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:A("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb}var tb=H.extend({data:null}),ub=H.extend({data:null}),vb=[9,13,27,32],wb=m.canUseDOM&&"CompositionEvent"in window,xb=null;m.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
        var yb=m.canUseDOM&&"TextEvent"in window&&!xb,zb=m.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Bb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
                    captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Cb=!1;
        function Db(a,b){switch(a){case "keyup":return-1!==vb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Eb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Fb=!1;function Gb(a,b){switch(a){case "compositionend":return Eb(b);case "keypress":if(32!==b.which)return null;Cb=!0;return Ab;case "textInput":return a=b.data,a===Ab&&Cb?null:a;default:return null}}
        function Hb(a,b){if(Fb)return"compositionend"===a||!wb&&Db(a,b)?(a=mb(),G._root=null,G._startText=null,G._fallbackText=null,Fb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zb?null:b.data;default:return null}}
        var Ib={eventTypes:Bb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "compositionstart":e=Bb.compositionStart;break b;case "compositionend":e=Bb.compositionEnd;break b;case "compositionupdate":e=Bb.compositionUpdate;break b}e=void 0}else Fb?Db(a,c)&&(e=Bb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Bb.compositionStart);e?(zb&&(Fb||e!==Bb.compositionStart?e===Bb.compositionEnd&&Fb&&(f=mb()):(G._root=d,G._startText=nb(),Fb=!0)),e=tb.getPooled(e,b,c,d),f?e.data=
                f:(f=Eb(c),null!==f&&(e.data=f)),Ya(e),f=e):f=null;(a=yb?Gb(a,c):Hb(a,c))?(b=ub.getPooled(Bb.beforeInput,b,c,d),b.data=a,Ya(b)):b=null;return null===f?b:null===b?f:[f,b]}},Jb=null,Kb={injectFiberControlledHostComponent:function(a){Jb=a}},Lb=null,Mb=null;function Nb(a){if(a=xa(a)){Jb&&"function"===typeof Jb.restoreControlledState?void 0:A("194");var b=wa(a.stateNode);Jb.restoreControlledState(a.stateNode,a.type,b)}}function Ob(a){Lb?Mb?Mb.push(a):Mb=[a]:Lb=a}
        function Pb(){return null!==Lb||null!==Mb}function Qb(){if(Lb){var a=Lb,b=Mb;Mb=Lb=null;Nb(a);if(b)for(a=0;a<b.length;a++)Nb(b[a])}}var Rb={injection:Kb,enqueueStateRestore:Ob,needsStateRestore:Pb,restoreStateIfNeeded:Qb};function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{Vb=!1,Pb()&&(Ub(),Qb())}}
        var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}function Zb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
        function $b(a,b){if(!m.canUseDOM||b&&!("addEventListener"in document))return!1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ac(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
        function bc(a){var b=ac(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
                null;delete a[b]}}}}function cc(a){a._valueTracker||(a._valueTracker=bc(a))}function dc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ac(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
        var ec=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fc="function"===typeof Symbol&&Symbol.for,gc=fc?Symbol.for("react.element"):60103,hc=fc?Symbol.for("react.portal"):60106,ic=fc?Symbol.for("react.fragment"):60107,jc=fc?Symbol.for("react.strict_mode"):60108,kc=fc?Symbol.for("react.profiler"):60114,lc=fc?Symbol.for("react.provider"):60109,mc=fc?Symbol.for("react.context"):60110,pc=fc?Symbol.for("react.async_mode"):60111,qc=fc?Symbol.for("react.forward_ref"):60112,rc=fc?Symbol.for("react.timeout"):
            60113,sc="function"===typeof Symbol&&Symbol.iterator;function tc(a){if(null===a||"undefined"===typeof a)return null;a=sc&&a[sc]||a["@@iterator"];return"function"===typeof a?a:null}
        function uc(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case pc:return"AsyncMode";case mc:return"Context.Consumer";case ic:return"ReactFragment";case hc:return"ReactPortal";case kc:return"Profiler("+a.pendingProps.id+")";case lc:return"Context.Provider";case jc:return"StrictMode";case rc:return"Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case qc:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
            a+")":"ForwardRef"}return null}function vc(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=uc(a);var f=null;c&&(f=uc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a.return}while(a);return b}
        var wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},zc={};function Ac(a){if(zc.hasOwnProperty(a))return!0;if(xc.hasOwnProperty(a))return!1;if(wc.test(a))return zc[a]=!0;xc[a]=!0;return!1}
        function Bc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function Cc(a,b,c,d){if(null===b||"undefined"===typeof b||Bc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}
        function I(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null)});
        [["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null)});["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null)});
        "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a.toLowerCase(),null)});["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a.toLowerCase(),null)});
        ["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null)});var Dc=/[\-:]([a-z])/g;function Ec(a){return a[1].toUpperCase()}
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Dc,
            Ec);J[b]=new I(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Dc,Ec);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Dc,Ec);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});J.tabIndex=new I("tabIndex",1,!1,"tabindex",null);
        function Fc(a,b,c,d){var e=J.hasOwnProperty(b)?J[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Cc(b,c,e,d)&&(c=null),d||null===e?Ac(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
        function Gc(a,b){var c=b.checked;return p({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Hc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ic(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Jc(a,b){b=b.checked;null!=b&&Fc(a,"checked",b,!1)}
        function Kc(a,b){Jc(a,b);var c=Ic(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Lc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Lc(a,b.type,Ic(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
        function Mc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){b=""+a._wrapperState.initialValue;var d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==c&&(a.name=c)}function Lc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}
        function Ic(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}var Nc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Oc(a,b,c){a=H.getPooled(Nc.change,a,b,c);a.type="change";Ob(c);Ya(a);return a}var Pc=null,Qc=null;function Rc(a){Ia(a,!1)}function Sc(a){var b=Oa(a);if(dc(b))return a}
        function Tc(a,b){if("change"===a)return b}var Uc=!1;m.canUseDOM&&(Uc=$b("input")&&(!document.documentMode||9<document.documentMode));function Vc(){Pc&&(Pc.detachEvent("onpropertychange",Wc),Qc=Pc=null)}function Wc(a){"value"===a.propertyName&&Sc(Qc)&&(a=Oc(Qc,a,Zb(a)),Wb(Rc,a))}function Xc(a,b,c){"focus"===a?(Vc(),Pc=b,Qc=c,Pc.attachEvent("onpropertychange",Wc)):"blur"===a&&Vc()}function Yc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Sc(Qc)}
        function Zc(a,b){if("click"===a)return Sc(b)}function $c(a,b){if("input"===a||"change"===a)return Sc(b)}
        var ad={eventTypes:Nc,_isInputEventSupported:Uc,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Tc:Yb(e)?Uc?f=$c:(f=Yc,g=Xc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Zc);if(f&&(f=f(a,b)))return Oc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Lc(e,"number",e.value)}},bd=H.extend({view:null,detail:null}),cd={Alt:"altKey",
            Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=cd[a])?!!b[a]:!1}function ed(){return dd}
        var fd=bd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ed,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),gd=fd.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),hd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},
            mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},id={eventTypes:hd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||
                e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,n=void 0;if("mouseout"===a||"mouseover"===a)g=fd,h=hd.mouseLeave,k=hd.mouseEnter,n="mouse";else if("pointerout"===a||"pointerover"===a)g=gd,h=hd.pointerLeave,k=hd.pointerEnter,n="pointer";a=null==f?e:Oa(f);e=null==b?e:Oa(b);h=g.getPooled(h,f,c,d);h.type=n+"leave";h.target=a;h.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=n+"enter";c.target=e;c.relatedTarget=a;Za(h,
                c,f,b);return[h,c]}};function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function kd(a){2!==jd(a)?A("188"):void 0}
        function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?A("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}A("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
            void 0:A("189")}}c.alternate!==d?A("190"):void 0}3!==c.tag?A("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
        function nd(a){a=ld(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}var od=H.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=H.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=bd.extend({relatedTarget:null});
        function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
        var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
            116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=bd.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ed,charCode:function(a){return"keypress"===
            a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=fd.extend({dataTransfer:null}),wd=bd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ed}),xd=H.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=fd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
            a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[fb,"animationEnd"],[gb,"animationIteration"],[hb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
            ["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
            ["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ib,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
        [["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],
            ["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
        var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=fd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
                    vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case fb:case gb:case hb:a=od;break;case ib:a=xd;break;case "scroll":a=bd;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=gd;break;default:a=H}b=a.getPooled(e,b,c,d);Ya(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
            Fd=[];function Gd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c.return;)c=c.return;c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Na(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Ja(a.topLevelType,b,a.nativeEvent,Zb(a.nativeEvent))}var Hd=!0;function Id(a){Hd=!!a}function K(a,b){if(!b)return null;var c=(Ed(a)?Kd:Ld).bind(null,a);b.addEventListener(a,c,!1)}
        function Md(a,b){if(!b)return null;var c=(Ed(a)?Kd:Ld).bind(null,a);b.addEventListener(a,c,!0)}function Kd(a,b){Tb(Ld,a,b)}function Ld(a,b){if(Hd){var c=Zb(b);c=Na(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}
        var Nd={get _enabled(){return Hd},setEnabled:Id,isEnabled:function(){return Hd},trapBubbledEvent:K,trapCapturedEvent:Md,dispatchEvent:Ld},Od={},Pd=0,Qd="_reactListenersID"+(""+Math.random()).slice(2);function Rd(a){Object.prototype.hasOwnProperty.call(a,Qd)||(a[Qd]=Pd++,Od[a[Qd]]={});return Od[a[Qd]]}function Sd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
        function Td(a,b){var c=Sd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Sd(c)}}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
        var Vd=m.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
        function ae(a,b){if($d||null==Xd||Xd!==da())return null;var c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Zd&&ea(Zd,c)?null:(Zd=c,a=H.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ya(a),a)}
        var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Rd(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
                case "keydown":case "keyup":return ae(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa.getFiberCurrentPropsFromNode;xa=Qa.getInstanceFromNode;ya=Qa.getNodeFromInstance;Ga.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:id,ChangeEventPlugin:ad,SelectEventPlugin:be,BeforeInputEventPlugin:Ib});
        var ce="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,de=Date,ee=setTimeout,fe=clearTimeout,ge=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var he=performance;ge=function(){return he.now()}}else ge=function(){return de.now()};var ie=void 0,je=void 0;
        if(m.canUseDOM){var ke="function"===typeof ce?ce:function(){A("276")},L=null,le=null,me=-1,ne=!1,oe=!1,pe=0,qe=33,re=33,se={didTimeout:!1,timeRemaining:function(){var a=pe-ge();return 0<a?a:0}},ue=function(a,b){var c=a.scheduledCallback,d=!1;try{c(b),d=!0}finally{je(a),d||(ne=!0,window.postMessage(te,"*"))}},te="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===te&&(ne=!1,null!==L)){if(null!==L){var b=ge();if(!(-1===
            me||me>b)){a=-1;for(var c=[],d=L;null!==d;){var e=d.timeoutTime;-1!==e&&e<=b?c.push(d):-1!==e&&(-1===a||e<a)&&(a=e);d=d.next}if(0<c.length)for(se.didTimeout=!0,b=0,d=c.length;b<d;b++)ue(c[b],se);me=a}}for(a=ge();0<pe-a&&null!==L;)a=L,se.didTimeout=!1,ue(a,se),a=ge();null===L||oe||(oe=!0,ke(ve))}},!1);var ve=function(a){oe=!1;var b=a-pe+re;b<re&&qe<re?(8>b&&(b=8),re=b<qe?qe:b):qe=b;pe=a+re;ne||(ne=!0,window.postMessage(te,"*"))};ie=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=ge()+
            b.timeout);if(-1===me||-1!==c&&c<me)me=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===L?L=a:(b=a.prev=le,null!==b&&(b.next=a));le=a;oe||(oe=!0,ke(ve));return a};je=function(a){if(null!==a.prev||L===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,L=b):null!==c?(c.next=null,le=c):le=L=null}}}else{var we=new Map;ie=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=ee(function(){a({timeRemaining:function(){return Infinity},
            didTimeout:!1})});we.set(a,c);return b};je=function(a){var b=we.get(a.scheduledCallback);we.delete(a);fe(b)}}function xe(a){var b="";ba.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function ye(a,b){a=p({children:void 0},b);if(b=xe(b.children))a.children=b;return a}
        function ze(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
        function Ae(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Be(a,b){null!=b.dangerouslySetInnerHTML?A("91"):void 0;return p({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?A("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:A("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
        function De(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
        function Ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
        var Ie=void 0,Je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Fe.svg||"innerHTML"in a)a.innerHTML=b;else{Ie=Ie||document.createElement("div");Ie.innerHTML="<svg>"+b+"</svg>";for(b=Ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
        function Ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
        var Le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
            stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Me=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(a){Me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Le[b]=Le[a]})});
        function Ne(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Le.hasOwnProperty(e)&&Le[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Oe=p({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
        function Pe(a,b,c){b&&(Oe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?A("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?A("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:A("61")),null!=b.style&&"object"!==typeof b.style?A("62",c()):void 0)}
        function Qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var Re=v.thatReturns("");
        function Se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Rd(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Md("scroll",a);break;case "focus":case "blur":Md("focus",a);Md("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":$b(e,!0)&&Md(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===jb.indexOf(e)&&K(e,a)}c[e]=!0}}}
        function Te(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Fe.html&&(d=Ge(a));d===Fe.html?"script"===a?(a=c.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function Ue(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
        function Ve(a,b,c,d){var e=Qe(b,c);switch(b){case "iframe":case "object":K("load",a);var f=c;break;case "video":case "audio":for(f=0;f<jb.length;f++)K(jb[f],a);f=c;break;case "source":K("error",a);f=c;break;case "img":case "image":case "link":K("error",a);K("load",a);f=c;break;case "form":K("reset",a);K("submit",a);f=c;break;case "details":K("toggle",a);f=c;break;case "input":Hc(a,c);f=Gc(a,c);K("invalid",a);Se(d,"onChange");break;case "option":f=ye(a,c);break;case "select":Ae(a,c);f=p({},c,{value:void 0});
            K("invalid",a);Se(d,"onChange");break;case "textarea":Ce(a,c);f=Be(a,c);K("invalid",a);Se(d,"onChange");break;default:f=c}Pe(b,f,Re);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Ne(a,k,Re):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Je(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&Ke(a,k):"number"===typeof k&&Ke(a,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ra.hasOwnProperty(h)?null!=k&&Se(d,
            h):null!=k&&Fc(a,h,k,e))}switch(b){case "input":cc(a);Mc(a,c,!1);break;case "textarea":cc(a);Ee(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?ze(a,!!c.multiple,b,!1):null!=c.defaultValue&&ze(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=v)}}
        function We(a,b,c,d,e){var f=null;switch(b){case "input":c=Gc(a,c);d=Gc(a,d);f=[];break;case "option":c=ye(a,c);d=ye(a,d);f=[];break;case "select":c=p({},c,{value:void 0});d=p({},d,{value:void 0});f=[];break;case "textarea":c=Be(a,c);d=Be(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=v)}Pe(b,d,Re);b=a=void 0;var g=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var h=c[a];for(b in h)h.hasOwnProperty(b)&&(g||
        (g={}),g[b]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ra.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];h=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==h&&(null!=k||null!=h))if("style"===a)if(h){for(b in h)!h.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(g||(g={}),g[b]="");for(b in k)k.hasOwnProperty(b)&&h[b]!==k[b]&&(g||(g={}),g[b]=k[b])}else g||(f||(f=[]),f.push(a,g)),
            g=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(a,""+k)):"children"===a?h===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ra.hasOwnProperty(a)?(null!=k&&Se(e,a),f||h===k||(f=[])):(f=f||[]).push(a,k))}g&&(f=f||[]).push("style",g);return f}
        function Xe(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Jc(a,e);Qe(c,d);d=Qe(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Ne(a,h,Re):"dangerouslySetInnerHTML"===g?Je(a,h):"children"===g?Ke(a,h):Fc(a,g,h,d)}switch(c){case "input":Kc(a,e);break;case "textarea":De(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ze(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
            ze(a,!!e.multiple,e.defaultValue,!0):ze(a,!!e.multiple,e.multiple?[]:"",!1))}}
        function Ye(a,b,c,d,e){switch(b){case "iframe":case "object":K("load",a);break;case "video":case "audio":for(d=0;d<jb.length;d++)K(jb[d],a);break;case "source":K("error",a);break;case "img":case "image":case "link":K("error",a);K("load",a);break;case "form":K("reset",a);K("submit",a);break;case "details":K("toggle",a);break;case "input":Hc(a,c);K("invalid",a);Se(e,"onChange");break;case "select":Ae(a,c);K("invalid",a);Se(e,"onChange");break;case "textarea":Ce(a,c),K("invalid",a),Se(e,"onChange")}Pe(b,
            c,Re);d=null;for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];"children"===f?"string"===typeof g?a.textContent!==g&&(d=["children",g]):"number"===typeof g&&a.textContent!==""+g&&(d=["children",""+g]):ra.hasOwnProperty(f)&&null!=g&&Se(e,f)}switch(b){case "input":cc(a);Mc(a,c,!0);break;case "textarea":cc(a);Ee(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=v)}return d}function Ze(a,b){return a.nodeValue!==b}
        var $e={createElement:Te,createTextNode:Ue,setInitialProperties:Ve,diffProperties:We,updateProperties:Xe,diffHydratedProperties:Ye,diffHydratedText:Ze,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Kc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;
                c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:A("90");dc(d);Kc(d,e)}}}break;case "textarea":De(a,c);break;case "select":b=c.value,null!=b&&ze(a,!!c.multiple,b,!1)}}},af=null,bf=null;function cf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
        function df(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html}var ef=ge,ff=ie,gf=je;function hf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function jf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var kf=[],lf=-1;function mf(a){return{current:a}}
        function M(a){0>lf||(a.current=kf[lf],kf[lf]=null,lf--)}function N(a,b){lf++;kf[lf]=a.current;a.current=b}var nf=mf(ha),O=mf(!1),of=ha;function pf(a){return qf(a)?of:nf.current}
        function rf(a,b){var c=a.type.contextTypes;if(!c)return ha;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function qf(a){return 2===a.tag&&null!=a.type.childContextTypes}function sf(a){qf(a)&&(M(O,a),M(nf,a))}function tf(a){M(O,a);M(nf,a)}
        function uf(a,b,c){nf.current!==ha?A("168"):void 0;N(nf,b,a);N(O,c,a)}function vf(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:A("108",uc(a)||"Unknown",e);return p({},b,c)}function wf(a){if(!qf(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ha;of=nf.current;N(nf,b,a);N(O,O.current,a);return!0}
        function xf(a,b){var c=a.stateNode;c?void 0:A("169");if(b){var d=vf(a,of);c.__reactInternalMemoizedMergedChildContext=d;M(O,a);M(nf,a);N(nf,d,a)}else M(O,a);N(O,b,a)}
        function yf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
        function zf(a,b,c){var d=a.alternate;null===d?(d=new yf(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
        function Af(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case ic:return Bf(a.children,b,c,e);case pc:f=11;b|=3;break;case jc:f=11;b|=2;break;case kc:return d=new yf(15,a,e,b|4),d.type=kc,d.expirationTime=c,d;case rc:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case lc:f=13;break a;case mc:f=12;break a;case qc:f=14;break a;default:A("130",null==d?
            d:typeof d,"")}f=void 0}}b=new yf(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Bf(a,b,c,d){a=new yf(10,a,d,b);a.expirationTime=c;return a}function Cf(a,b,c){a=new yf(6,a,null,b);a.expirationTime=c;return a}function Df(a,b,c){b=new yf(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
        function Ef(a,b,c){b=new yf(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a}var Ff=null,Gf=null;function Hf(a){return function(b){try{return a(b)}catch(c){}}}
        function If(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Ff=Hf(function(a){return b.onCommitFiberRoot(c,a)});Gf=Hf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Jf(a){"function"===typeof Ff&&Ff(a)}function Kf(a){"function"===typeof Gf&&Gf(a)}var Lf=!1;
        function Mf(a){return{expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Nf(a){return{expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
        function Of(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Pf(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c}
        function Qf(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=Mf(a.memoizedState))}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=Mf(a.memoizedState),f=d.updateQueue=Mf(d.memoizedState)):e=a.updateQueue=Nf(f):null===f&&(f=d.updateQueue=Nf(e));null===f||e===f?Pf(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Pf(e,b,c),Pf(f,b,c)):(Pf(e,b,c),f.lastUpdate=b)}
        function Rf(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=Mf(a.memoizedState):Sf(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c}function Sf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Nf(b));return b}
        function Tf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return p({},d,e);case 2:Lf=!0}return d}
        function Uf(a,b,c,d,e){Lf=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Sf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,n=f;null!==k;){var r=k.expirationTime;if(r>e){if(null===g&&(g=k,f=n),0===h||h>r)h=r}else n=Tf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}r=null;for(k=b.firstCapturedUpdate;null!==k;){var w=k.expirationTime;if(w>e){if(null===r&&(r=k,null===
        g&&(f=n)),0===h||h>w)h=w}else n=Tf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===r?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===r&&(f=n);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=r;b.expirationTime=h;a.memoizedState=n}}
        function Vf(a,b){"function"!==typeof a?A("191",a):void 0;a.call(b)}
        function Wf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Vf(d,c));a=a.nextEffect}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Vf(b,c)),a=a.nextEffect}
        function Xf(a,b){return{value:a,source:b,stack:vc(b)}}var Yf=mf(null),Zf=mf(null),$f=mf(0);function ag(a){var b=a.type._context;N($f,b._changedBits,a);N(Zf,b._currentValue,a);N(Yf,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode}function bg(a){var b=$f.current,c=Zf.current;M(Yf,a);M(Zf,a);M($f,a);a=a.type._context;a._currentValue=c;a._changedBits=b}var cg={},dg=mf(cg),eg=mf(cg),fg=mf(cg);function gg(a){a===cg?A("174"):void 0;return a}
        function ig(a,b){N(fg,b,a);N(eg,a,a);N(dg,cg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:He(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=He(b,c)}M(dg,a);N(dg,b,a)}function jg(a){M(dg,a);M(eg,a);M(fg,a)}function kg(a){eg.current===a&&(M(dg,a),M(eg,a))}function lg(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:p({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d)}
        var pg={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=mg();d=ng(d,a);var e=Of(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Qf(a,e,d);og(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=mg();d=ng(d,a);var e=Of(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Qf(a,e,d);og(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=mg();c=ng(c,a);var d=Of(c);d.tag=2;void 0!==
            b&&null!==b&&(d.callback=b);Qf(a,d,c);og(a,c)}};function qg(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return"function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!ea(b,c)||!ea(d,e):!0}
        function rg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&pg.enqueueReplaceState(b,b.state,null)}
        function sg(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=pf(a);d.props=e;d.state=a.memoizedState;d.refs=ha;d.context=rf(a,f);f=a.updateQueue;null!==f&&(Uf(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(lg(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
        d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&pg.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Uf(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4)}var tg=Array.isArray;
        function ug(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?A("110"):void 0,d=c.stateNode);d?void 0:A("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===ha?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?A("148"):void 0;c._owner?void 0:A("254",a)}return a}
        function vg(a,b){"textarea"!==a.type&&A("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
        function wg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=zf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
            2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Cf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=ug(a,b,c),d.return=a,d;d=Af(c,a.mode,d);d.ref=ug(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
            Df(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function r(a,b,c,d,f){if(null===b||10!==b.tag)return b=Bf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Cf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case gc:return c=Af(b,a.mode,c),c.ref=ug(a,null,b),c.return=a,c;case hc:return b=Df(b,a.mode,c),b.return=a,b}if(tg(b)||tc(b))return b=Bf(b,a.mode,c,null),b.return=
            a,b;vg(a,b)}return null}function P(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case gc:return c.key===e?c.type===ic?r(a,b,c.props.children,d,e):k(a,b,c,d):null;case hc:return c.key===e?n(a,b,c,d):null}if(tg(c)||tc(c))return null!==e?null:r(a,b,c,d,null);vg(a,c)}return null}function nc(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
            if("object"===typeof d&&null!==d){switch(d.$$typeof){case gc:return a=a.get(null===d.key?c:d.key)||null,d.type===ic?r(b,a,d.props.children,e,d.key):k(b,a,d,e);case hc:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(tg(d)||tc(d))return a=a.get(c)||null,r(b,a,d,e,null);vg(b,d)}return null}function Jd(e,g,h,k){for(var u=null,x=null,t=g,q=g=0,n=null;null!==t&&q<h.length;q++){t.index>q?(n=t,t=null):n=t.sibling;var l=P(e,t,h[q],k);if(null===l){null===t&&(t=n);break}a&&t&&null===l.alternate&&b(e,
            t);g=f(l,g,q);null===x?u=l:x.sibling=l;x=l;t=n}if(q===h.length)return c(e,t),u;if(null===t){for(;q<h.length;q++)if(t=w(e,h[q],k))g=f(t,g,q),null===x?u=t:x.sibling=t,x=t;return u}for(t=d(e,t);q<h.length;q++)if(n=nc(t,e,q,h[q],k))a&&null!==n.alternate&&t.delete(null===n.key?q:n.key),g=f(n,g,q),null===x?u=n:x.sibling=n,x=n;a&&t.forEach(function(a){return b(e,a)});return u}function E(e,g,h,k){var u=tc(h);"function"!==typeof u?A("150"):void 0;h=u.call(h);null==h?A("151"):void 0;for(var t=u=null,n=g,x=
            g=0,y=null,l=h.next();null!==n&&!l.done;x++,l=h.next()){n.index>x?(y=n,n=null):y=n.sibling;var r=P(e,n,l.value,k);if(null===r){n||(n=y);break}a&&n&&null===r.alternate&&b(e,n);g=f(r,g,x);null===t?u=r:t.sibling=r;t=r;n=y}if(l.done)return c(e,n),u;if(null===n){for(;!l.done;x++,l=h.next())l=w(e,l.value,k),null!==l&&(g=f(l,g,x),null===t?u=l:t.sibling=l,t=l);return u}for(n=d(e,n);!l.done;x++,l=h.next())l=nc(n,e,x,l.value,k),null!==l&&(a&&null!==l.alternate&&n.delete(null===l.key?x:l.key),g=f(l,g,x),null===
        t?u=l:t.sibling=l,t=l);a&&n.forEach(function(a){return b(e,a)});return u}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ic&&null===f.key;k&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case gc:a:{n=f.key;for(k=d;null!==k;){if(k.key===n)if(10===k.tag?f.type===ic:k.type===f.type){c(a,k.sibling);d=e(k,f.type===ic?f.props.children:f.props,h);d.ref=ug(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===ic?(d=Bf(f.props.children,
            a.mode,h,f.key),d.return=a,a=d):(h=Af(f,a.mode,h),h.ref=ug(a,d,f),h.return=a,a=h)}return g(a);case hc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Df(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
            a,a=d):(c(a,d),d=Cf(f,a.mode,h),d.return=a,a=d),g(a);if(tg(f))return Jd(a,d,f,h);if(tc(f))return E(a,d,f,h);n&&vg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 1:h=a.type,A("152",h.displayName||h.name||"Component")}return c(a,d)}}var xg=wg(!0),yg=wg(!1),zg=null,Ag=null,Bg=!1;function Cg(a,b){var c=new yf(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
        function Dg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Eg(a){if(Bg){var b=Ag;if(b){var c=b;if(!Dg(a,b)){b=hf(c);if(!b||!Dg(a,b)){a.effectTag|=2;Bg=!1;zg=a;return}Cg(zg,c)}zg=a;Ag=jf(b)}else a.effectTag|=2,Bg=!1,zg=a}}
        function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;zg=a}function Gg(a){if(a!==zg)return!1;if(!Bg)return Fg(a),Bg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!df(b,a.memoizedProps))for(b=Ag;b;)Cg(a,b),b=hf(b);Fg(a);Ag=zg?hf(a.stateNode):null;return!0}function Hg(){Ag=zg=null;Bg=!1}function Q(a,b,c){Ig(a,b,c,b.expirationTime)}function Ig(a,b,c,d){b.child=null===a?yg(b,null,c,d):xg(b,a.child,c,d)}
        function Jg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Kg(a,b,c,d,e){Jg(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&xf(b,!1),R(a,b);c=b.stateNode;ec.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Ig(a,b,null,e),b.child=null);Ig(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&xf(b,!0);return b.child}
        function Lg(a){var b=a.stateNode;b.pendingContext?uf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&uf(a,b.context,!1);ig(a,b.containerInfo)}
        function Mg(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
            e.child}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return}e=f}}
        function Qg(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(O.current)g=!1;else if(f===e)return b.stateNode=0,ag(b),R(a,b);var h=e.value;b.memoizedProps=e;if(null===f)h=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b);h=0}else{var k=f.value;if(k===h&&(0!==k||1/k===1/h)||k!==k&&h!==h){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b);h=0}else if(h="function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,
            h):1073741823,h|=0,0===h){if(f.children===e.children&&g)return b.stateNode=0,ag(b),R(a,b)}else Mg(b,d,h,c)}b.stateNode=h;ag(b);Q(a,b,e.children);return b.child}function R(a,b){null!==a&&b.child!==a.child?A("153"):void 0;if(null!==b.child){a=b.child;var c=zf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=zf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
        function Rg(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Lg(b);break;case 2:wf(b);break;case 4:ig(b,b.stateNode.containerInfo);break;case 13:ag(b)}return null}switch(b.tag){case 0:null!==a?A("155"):void 0;var d=b.type,e=b.pendingProps,f=pf(b);f=rf(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
        typeof f&&lg(b,f,e),e=wf(b),d.updater=pg,b.stateNode=d,d._reactInternalFiber=b,sg(b,c),a=Kg(a,b,!0,e,c)):(b.tag=1,Q(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,O.current||b.memoizedProps!==c?(d=pf(b),d=rf(b,d),e=e(c,d),b.effectTag|=1,Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 2:e=wf(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,h=b.type;d=pf(b);var k=2===b.tag&&null!=b.type.contextTypes;f=k?rf(b,d):ha;g=new h(g,f);b.memoizedState=null!==
        g.state&&void 0!==g.state?g.state:null;g.updater=pg;b.stateNode=g;g._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=d,k.__reactInternalMemoizedMaskedChildContext=f);sg(b,c);d=!0}else{h=b.type;d=b.stateNode;k=b.memoizedProps;f=b.pendingProps;d.props=k;var n=d.context;g=pf(b);g=rf(b,g);var r=h.getDerivedStateFromProps;(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
        (k!==f||n!==g)&&rg(b,d,f,g);Lf=!1;var w=b.memoizedState;n=d.state=w;var P=b.updateQueue;null!==P&&(Uf(b,P,f,d,c),n=b.memoizedState);k!==f||w!==n||O.current||Lf?("function"===typeof r&&(lg(b,r,f),n=b.memoizedState),(k=Lf||qg(b,k,f,w,n,g))?(h||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
        (b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=n),d.props=f,d.state=n,d.context=g,d=k):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.type,d=b.stateNode,f=b.memoizedProps,k=b.pendingProps,d.props=f,n=d.context,g=pf(b),g=rf(b,g),r=h.getDerivedStateFromProps,(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
        (f!==k||n!==g)&&rg(b,d,k,g),Lf=!1,n=b.memoizedState,w=d.state=n,P=b.updateQueue,null!==P&&(Uf(b,P,k,d,c),w=b.memoizedState),f!==k||n!==w||O.current||Lf?("function"===typeof r&&(lg(b,r,k),w=b.memoizedState),(r=Lf||qg(b,f,k,n,w,g))?(h||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(k,w,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(k,w,g)),"function"===typeof d.componentDidUpdate&&
        (b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),b.memoizedProps=k,b.memoizedState=w),d.props=k,d.state=w,d.context=g,d=r):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
        f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),d=!1);return Kg(a,b,d,e,c);case 3:Lg(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Uf(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Hg(),a=R(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)Ag=jf(b.stateNode.containerInfo),zg=b,d=Bg=!0;d?(b.effectTag|=2,b.child=yg(b,null,e,c)):(Hg(),Q(a,b,e));a=b.child}else Hg(),a=R(a,b);return a;case 5:a:{gg(fg.current);e=gg(dg.current);d=He(e,
            b.type);e!==d&&(N(eg,b,b),N(dg,d,b));null===a&&Eg(b);e=b.type;k=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!O.current&&k===d){if(k=b.mode&1&&!!d.hidden)b.expirationTime=1073741823;if(!k||1073741823!==c){a=R(a,b);break a}}k=d.children;df(e,d)?k=null:f&&df(e,f)&&(b.effectTag|=16);Jg(a,b);1073741823!==c&&b.mode&1&&d.hidden?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(Q(a,b,k),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&Eg(b),b.memoizedProps=b.pendingProps,
            null;case 16:return null;case 4:return ig(b,b.stateNode.containerInfo),e=b.pendingProps,O.current||b.memoizedProps!==e?(null===a?b.child=xg(b,null,e,c):Q(a,b,e),b.memoizedProps=e,a=b.child):a=R(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,O.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 10:return c=b.pendingProps,O.current||b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 11:return c=
            b.pendingProps.children,O.current||null!==c&&b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=R(a,b):(Q(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Qg(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,k=b.memoizedProps,e=d._currentValue,g=d._changedBits,O.current||0!==g||k!==f){b.memoizedProps=f;h=f.unstable_observedBits;if(void 0===h||null===h)h=1073741823;b.stateNode=h;if(0!==(g&h))Mg(b,d,g,c);else if(k===f){a=
            R(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;Q(a,b,c);a=b.child}else a=R(a,b);return a;default:A("156")}}function Sg(a){a.effectTag|=4}var Tg=void 0,Ug=void 0,Vg=void 0;Tg=function(){};Ug=function(a,b,c){(b.updateQueue=c)&&Sg(b)};Vg=function(a,b,c,d){c!==d&&Sg(b)};
        function Wg(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return sf(b),null;case 3:jg(b);tf(b);var d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b),b.effectTag&=-3;Tg(b);return null;case 5:kg(b);d=gg(fg.current);var e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,h=gg(dg.current);g=We(g,e,f,c,d);Ug(a,b,g,e,f,c,d,h);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!c)return null===b.stateNode?
            A("166"):void 0,null;a=gg(dg.current);if(Gg(b))c=b.stateNode,e=b.type,f=b.memoizedProps,c[C]=b,c[Ma]=f,d=Ye(c,e,f,a,d),b.updateQueue=d,null!==d&&Sg(b);else{a=Te(e,c,d,a);a[C]=b;a[Ma]=c;a:for(f=b.child;null!==f;){if(5===f.tag||6===f.tag)a.appendChild(f.stateNode);else if(4!==f.tag&&null!==f.child){f.child.return=f;f=f.child;continue}if(f===b)break;for(;null===f.sibling;){if(null===f.return||f.return===b)break a;f=f.return}f.sibling.return=f.return;f=f.sibling}Ve(a,e,c,d);cf(e,c)&&Sg(b);b.stateNode=
            a}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)Vg(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?A("166"):void 0,null;d=gg(fg.current);gg(dg.current);Gg(b)?(d=b.stateNode,c=b.memoizedProps,d[C]=b,Ze(d,c)&&Sg(b)):(d=Ue(c,d),d[C]=b,b.stateNode=d)}return null;case 14:return null;case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return jg(b),Tg(b),null;case 13:return bg(b),null;case 12:return null;case 0:A("167");
            default:A("156")}}function Xg(a,b){var c=b.source;null===b.stack&&null!==c&&vc(c);null!==c&&uc(c);b=b.value;null!==a&&2===a.tag&&uc(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}function Yg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Zg(a,c)}else b.current=null}
        function $g(a){"function"===typeof Kf&&Kf(a);switch(a.tag){case 2:Yg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Zg(a,c)}break;case 5:Yg(a);break;case 4:ah(a)}}function bh(a){return 5===a.tag||3===a.tag||4===a.tag}
        function ch(a){a:{for(var b=a.return;null!==b;){if(bh(b)){var c=b;break a}b=b.return}A("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:A("161")}c.effectTag&16&&(Ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||bh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
            if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?f.parentNode.insertBefore(g,f):f.appendChild(g)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
        function ah(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?A("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if($g(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
            (f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?d=b.stateNode.containerInfo:$g(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
        function dh(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&(c[Ma]=d,Xe(c,f,e,a,d))}break;case 6:null===b.stateNode?A("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 15:break;case 16:break;default:A("163")}}function eh(a,b,c){c=Of(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){fh(d);Xg(a,b)};return c}
        function gh(a,b,c){c=Of(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===hh?hh=new Set([this]):hh.add(this);var c=b.value,d=b.stack;Xg(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
        function ih(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Xf(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=eh(a,d,f);Rf(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===hh||!hh.has(c))){a.effectTag|=1024;d=gh(a,b,f);Rf(a,d,f);return}}a=a.return}while(null!==a)}
        function jh(a){switch(a.tag){case 2:sf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return jg(a),tf(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return kg(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return jg(a),null;case 13:return bg(a),null;default:return null}}var kh=ef(),lh=2,mh=kh,nh=0,oh=0,ph=!1,S=null,qh=null,T=0,rh=-1,sh=!1,U=null,th=!1,uh=!1,hh=null;
        function vh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 2:sf(b);break;case 3:jg(b);tf(b);break;case 5:kg(b);break;case 4:jg(b);break;case 13:bg(b)}a=a.return}qh=null;T=0;rh=-1;sh=!1;S=null;uh=!1}
        function wh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Wg(b,a,T);var e=a;if(1073741823===T||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime)}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
        (null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{uh=!0;break}}else{a=jh(a,sh,T);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
        function xh(a){var b=Rg(a.alternate,a,T);null===b&&(b=wh(a));ec.current=null;return b}
        function yh(a,b,c){ph?A("243"):void 0;ph=!0;if(b!==T||a!==qh||null===S)vh(),qh=a,T=b,rh=-1,S=zf(qh.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;sh=!c||T<=lh;do{try{if(c)for(;null!==S&&!zh();)S=xh(S);else for(;null!==S;)S=xh(S)}catch(f){if(null===S)d=!0,fh(f);else{null===S?A("271"):void 0;c=S;var e=c.return;if(null===e){d=!0;fh(f);break}ih(a,e,c,f,sh,T,mh);S=wh(c)}}break}while(1);ph=!1;if(d)return null;if(null===S){if(uh)return a.pendingCommitExpirationTime=b,a.current.alternate;sh?A("262"):
            void 0;0<=rh&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&Ah(a,b)},rh);Bh(a.current.expirationTime)}return null}
        function Zg(a,b){var c;a:{ph&&!th?A("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===hh||!hh.has(d))){a=Xf(b,a);a=gh(c,a,1);Qf(c,a,1);og(c,1);c=void 0;break a}break;case 3:a=Xf(b,a);a=eh(c,a,1);Qf(c,a,1);og(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=Xf(b,a),c=eh(a,c,1),Qf(a,c,1),og(a,1));c=void 0}return c}
        function Ch(){var a=2+25*(((mg()-2+500)/25|0)+1);a<=nh&&(a=nh+1);return nh=a}function ng(a,b){a=0!==oh?oh:ph?th?1:T:b.mode&1?Dh?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;Dh&&(0===Eh||a>Eh)&&(Eh=a);return a}
        function og(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!ph&&0!==T&&b<T&&vh();var d=c.current.expirationTime;ph&&!th&&qh===c||Ah(c,d);Fh>Gh&&A("185")}else break;a=a.return}}function mg(){mh=ef()-kh;return lh=(mh/10|0)+2}
        function Hh(a){var b=oh;oh=2+25*(((mg()-2+500)/25|0)+1);try{return a()}finally{oh=b}}function Ih(a,b,c,d,e){var f=oh;oh=1;try{return a(b,c,d,e)}finally{oh=f}}var Jh=null,V=null,Kh=0,Lh=void 0,W=!1,X=null,Y=0,Eh=0,Mh=!1,Nh=!1,Oh=null,Ph=null,Z=!1,Qh=!1,Dh=!1,Rh=null,Gh=1E3,Fh=0,Sh=1;function Th(a){if(0!==Kh){if(a>Kh)return;null!==Lh&&gf(Lh)}var b=ef()-kh;Kh=a;Lh=ff(Uh,{timeout:10*(a-2)-b})}
        function Ah(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===V?(Jh=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=Jh);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}W||(Z?Qh&&(X=a,Y=1,Vh(a,1,!1)):1===b?Wh():Th(b))}
        function Xh(){var a=0,b=null;if(null!==V)for(var c=V,d=Jh;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===V?A("244"):void 0;if(d===d.nextScheduledRoot){Jh=V=d.nextScheduledRoot=null;break}else if(d===Jh)Jh=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=Jh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;
            c=d;d=d.nextScheduledRoot}}c=X;null!==c&&c===b&&1===a?Fh++:Fh=0;X=b;Y=a}function Uh(a){Yh(0,!0,a)}function Wh(){Yh(1,!1,null)}function Yh(a,b,c){Ph=c;Xh();if(b)for(;null!==X&&0!==Y&&(0===a||a>=Y)&&(!Mh||mg()>=Y);)mg(),Vh(X,Y,!Mh),Xh();else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Vh(X,Y,!1),Xh();null!==Ph&&(Kh=0,Lh=null);0!==Y&&Th(Y);Ph=null;Mh=!1;Zh()}function $h(a,b){W?A("253"):void 0;X=a;Y=b;Vh(a,b,!1);Wh();Zh()}
        function Zh(){Fh=0;if(null!==Rh){var a=Rh;Rh=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Nh||(Nh=!0,Oh=d)}}}if(Nh)throw a=Oh,Oh=null,Nh=!1,a;}function Vh(a,b,c){W?A("245"):void 0;W=!0;c?(c=a.finishedWork,null!==c?ai(a,c,b):(c=yh(a,b,!0),null!==c&&(zh()?a.finishedWork=c:ai(a,c,b)))):(c=a.finishedWork,null!==c?ai(a,c,b):(c=yh(a,b,!1),null!==c&&ai(a,c,b)));W=!1}
        function ai(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Rh?Rh=[d]:Rh.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;th=ph=!0;c=b.stateNode;c.current===b?A("177"):void 0;d=c.pendingCommitExpirationTime;0===d?A("261"):void 0;c.pendingCommitExpirationTime=0;mg();ec.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect}else e=b;else e=b.firstEffect;af=Hd;var f=da();if(Ud(f)){if("selectionStart"in
            f)var g={start:f.selectionStart,end:f.selectionEnd};else a:{var h=window.getSelection&&window.getSelection();if(h&&0!==h.rangeCount){g=h.anchorNode;var k=h.anchorOffset,n=h.focusNode;h=h.focusOffset;try{g.nodeType,n.nodeType}catch(Wa){g=null;break a}var r=0,w=-1,P=-1,nc=0,Jd=0,E=f,t=null;b:for(;;){for(var x;;){E!==g||0!==k&&3!==E.nodeType||(w=r+k);E!==n||0!==h&&3!==E.nodeType||(P=r+h);3===E.nodeType&&(r+=E.nodeValue.length);if(null===(x=E.firstChild))break;t=E;E=x}for(;;){if(E===f)break b;t===g&&
        ++nc===k&&(w=r);t===n&&++Jd===h&&(P=r);if(null!==(x=E.nextSibling))break;E=t;t=E.parentNode}E=x}g=-1===w||-1===P?null:{start:w,end:P}}else g=null}g=g||{start:0,end:0}}else g=null;bf={focusedElem:f,selectionRange:g};Id(!1);for(U=e;null!==U;){f=!1;g=void 0;try{for(;null!==U;){if(U.effectTag&256){var u=U.alternate;k=U;switch(k.tag){case 2:if(k.effectTag&256&&null!==u){var y=u.memoizedProps,D=u.memoizedState,ja=k.stateNode;ja.props=k.memoizedProps;ja.state=k.memoizedState;var mi=ja.getSnapshotBeforeUpdate(y,
            D);ja.__reactInternalSnapshotBeforeUpdate=mi}break;case 3:case 5:case 6:case 4:break;default:A("163")}}U=U.nextEffect}}catch(Wa){f=!0,g=Wa}f&&(null===U?A("178"):void 0,Zg(U,g),null!==U&&(U=U.nextEffect))}for(U=e;null!==U;){u=!1;y=void 0;try{for(;null!==U;){var q=U.effectTag;q&16&&Ke(U.stateNode,"");if(q&128){var z=U.alternate;if(null!==z){var l=z.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}switch(q&14){case 2:ch(U);U.effectTag&=-3;break;case 6:ch(U);U.effectTag&=-3;dh(U.alternate,
            U);break;case 4:dh(U.alternate,U);break;case 8:D=U,ah(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}U=U.nextEffect}}catch(Wa){u=!0,y=Wa}u&&(null===U?A("178"):void 0,Zg(U,y),null!==U&&(U=U.nextEffect))}l=bf;z=da();q=l.focusedElem;u=l.selectionRange;if(z!==q&&fa(document.documentElement,q)){null!==u&&Ud(q)&&(z=u.start,l=u.end,void 0===l&&(l=z),"selectionStart"in q?(q.selectionStart=z,q.selectionEnd=Math.min(l,q.value.length)):window.getSelection&&(z=window.getSelection(),
            y=q[lb()].length,l=Math.min(u.start,y),u=void 0===u.end?l:Math.min(u.end,y),!z.extend&&l>u&&(y=u,u=l,l=y),y=Td(q,l),D=Td(q,u),y&&D&&(1!==z.rangeCount||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==D.node||z.focusOffset!==D.offset)&&(ja=document.createRange(),ja.setStart(y.node,y.offset),z.removeAllRanges(),l>u?(z.addRange(ja),z.extend(D.node,D.offset)):(ja.setEnd(D.node,D.offset),z.addRange(ja)))));z=[];for(l=q;l=l.parentNode;)1===l.nodeType&&z.push({element:l,left:l.scrollLeft,
            top:l.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<z.length;q++)l=z[q],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}bf=null;Id(af);af=null;c.current=b;for(U=e;null!==U;){e=!1;q=void 0;try{for(z=d;null!==U;){var hg=U.effectTag;if(hg&36){var oc=U.alternate;l=U;u=z;switch(l.tag){case 2:var ca=l.stateNode;if(l.effectTag&4)if(null===oc)ca.props=l.memoizedProps,ca.state=l.memoizedState,ca.componentDidMount();else{var wi=oc.memoizedProps,xi=oc.memoizedState;ca.props=l.memoizedProps;
            ca.state=l.memoizedState;ca.componentDidUpdate(wi,xi,ca.__reactInternalSnapshotBeforeUpdate)}var Ng=l.updateQueue;null!==Ng&&(ca.props=l.memoizedProps,ca.state=l.memoizedState,Wf(l,Ng,ca,u));break;case 3:var Og=l.updateQueue;if(null!==Og){y=null;if(null!==l.child)switch(l.child.tag){case 5:y=l.child.stateNode;break;case 2:y=l.child.stateNode}Wf(l,Og,y,u)}break;case 5:var yi=l.stateNode;null===oc&&l.effectTag&4&&cf(l.type,l.memoizedProps)&&yi.focus();break;case 6:break;case 4:break;case 15:break;case 16:break;
            default:A("163")}}if(hg&128){l=void 0;var yc=U.ref;if(null!==yc){var Pg=U.stateNode;switch(U.tag){case 5:l=Pg;break;default:l=Pg}"function"===typeof yc?yc(l):yc.current=l}}var zi=U.nextEffect;U.nextEffect=null;U=zi}}catch(Wa){e=!0,q=Wa}e&&(null===U?A("178"):void 0,Zg(U,q),null!==U&&(U=U.nextEffect))}ph=th=!1;"function"===typeof Jf&&Jf(b.stateNode);b=c.current.expirationTime;0===b&&(hh=null);a.remainingExpirationTime=b}function zh(){return null===Ph||Ph.timeRemaining()>Sh?!1:Mh=!0}
        function fh(a){null===X?A("246"):void 0;X.remainingExpirationTime=0;Nh||(Nh=!0,Oh=a)}function Bh(a){null===X?A("246"):void 0;X.remainingExpirationTime=a}function bi(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Wh()}}function ci(a,b){if(Z&&!Qh){Qh=!0;try{return a(b)}finally{Qh=!1}}return a(b)}function di(a,b){W?A("187"):void 0;var c=Z;Z=!0;try{return Ih(a,b)}finally{Z=c,Wh()}}
        function ei(a,b,c){if(Dh)return a(b,c);Z||W||0===Eh||(Yh(Eh,!1,null),Eh=0);var d=Dh,e=Z;Z=Dh=!0;try{return a(b,c)}finally{Dh=d,(Z=e)||W||Wh()}}function fi(a){var b=Z;Z=!0;try{Ih(a)}finally{(Z=b)||W||Yh(1,!1,null)}}
        function gi(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===jd(c)&&2===c.tag?void 0:A("170");for(g=c;3!==g.tag;){if(qf(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:A("171")}g=g.stateNode.context}c=qf(c)?vf(c,g):g}else c=ha;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Of(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Qf(f,e,d);og(f,d);return d}
        function hi(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?A("188"):A("268",Object.keys(a)));a=md(b);return null===a?null:a.stateNode}function ii(a,b,c,d){var e=b.current,f=mg();e=ng(f,e);return gi(a,b,c,e,d)}function ji(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}
        function ki(a){var b=a.findFiberByHostInstance;return If(p({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))}
        var li={updateContainerAtExpirationTime:gi,createContainer:function(a,b,c){return Ef(a,b,c)},updateContainer:ii,flushRoot:$h,requestWork:Ah,computeUniqueAsyncExpiration:Ch,batchedUpdates:bi,unbatchedUpdates:ci,deferredUpdates:Hh,syncUpdates:Ih,interactiveUpdates:ei,flushInteractiveUpdates:function(){W||0===Eh||(Yh(Eh,!1,null),Eh=0)},flushControlled:fi,flushSync:di,getPublicRootInstance:ji,findHostInstance:hi,findHostInstanceWithNoPortals:function(a){a=nd(a);return null===a?null:a.stateNode},injectIntoDevTools:ki};
        function ni(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:hc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}Kb.injectFiberControlledHostComponent($e);function oi(a){this._expirationTime=Ch();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}
        oi.prototype.render=function(a){this._defer?void 0:A("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new pi;gi(a,b,null,c,d._onCommit);return d};oi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
        oi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:A("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?A("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;$h(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
            null,this._defer=!1};oi.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function pi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}pi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
        pi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?A("191",c):void 0;c()}}};function qi(a,b,c){this._internalRoot=Ef(a,b,c)}qi.prototype.render=function(a,b){var c=this._internalRoot,d=new pi;b=void 0===b?null:b;null!==b&&d.then(b);ii(a,c,null,d._onCommit);return d};
        qi.prototype.unmount=function(a){var b=this._internalRoot,c=new pi;a=void 0===a?null:a;null!==a&&c.then(a);ii(null,b,null,c._onCommit);return c};qi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new pi;c=void 0===c?null:c;null!==c&&e.then(c);ii(b,d,a,e._onCommit);return e};
        qi.prototype.createBatch=function(){var a=new oi(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function ri(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=li.batchedUpdates;Tb=li.interactiveUpdates;Ub=li.flushInteractiveUpdates;
        function si(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qi(a,!1,b)}
        function ti(a,b,c,d,e){ri(c)?void 0:A("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ji(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=si(c,d);if("function"===typeof e){var h=e;e=function(){var a=ji(f._internalRoot);h.call(a)}}ci(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ji(f._internalRoot)}
        function ui(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ri(b)?void 0:A("200");return ni(a,b,null,c)}
        var vi={createPortal:ui,findDOMNode:function(a){return null==a?null:1===a.nodeType?a:hi(a)},hydrate:function(a,b,c){return ti(null,a,b,!0,c)},render:function(a,b,c){return ti(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?A("38"):void 0;return ti(a,b,c,!1,d)},unmountComponentAtNode:function(a){ri(a)?void 0:A("40");return a._reactRootContainer?(ci(function(){ti(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return ui.apply(void 0,
                arguments)},unstable_batchedUpdates:bi,unstable_deferredUpdates:Hh,unstable_interactiveUpdates:ei,flushSync:di,unstable_flushControlled:fi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Ka,EventPluginRegistry:va,EventPropagators:$a,ReactControlledComponent:Rb,ReactDOMComponentTree:Qa,ReactDOMEventListener:Nd},unstable_createRoot:function(a,b){return new qi(a,!0,null!=b&&!0===b.hydrate)}};ki({findFiberByHostInstance:Na,bundleType:0,version:"16.4.1",rendererPackageName:"react-dom"});
        var Ai={default:vi},Bi=Ai&&vi||Ai;module.exports=Bi.default?Bi.default:Bi;


        /***/ }),
    /* 52 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */



        var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

        /**
         * Simple, lightweight module assisting with the detection and context of
         * Worker. Helps avoid circular dependencies and allows code to reason about
         * whether or not they are in a Worker, even if they never include the main
         * `ReactWorker` dependency.
         */
        var ExecutionEnvironment = {

            canUseDOM: canUseDOM,

            canUseWorkers: typeof Worker !== 'undefined',

            canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

            canUseViewport: canUseDOM && !!window.screen,

            isInWorker: !canUseDOM // For now, this is true - might change in the future.

        };

        module.exports = ExecutionEnvironment;

        /***/ }),
    /* 53 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        /* eslint-disable fb-www/typeof-undefined */

        /**
         * Same as document.activeElement but wraps in a try-catch block. In IE it is
         * not safe to call document.activeElement if there is nothing focused.
         *
         * The activeElement will be null only if the document or document body is not
         * yet defined.
         *
         * @param {?DOMDocument} doc Defaults to current document.
         * @return {?DOMElement}
         */
        function getActiveElement(doc) /*?DOMElement*/{
            doc = doc || (typeof document !== 'undefined' ? document : undefined);
            if (typeof doc === 'undefined') {
                return null;
            }
            try {
                return doc.activeElement || doc.body;
            } catch (e) {
                return doc.body;
            }
        }

        module.exports = getActiveElement;

        /***/ }),
    /* 54 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         *
         */

        /*eslint-disable no-self-compare */



        var hasOwnProperty = Object.prototype.hasOwnProperty;

        /**
         * inlined Object.is polyfill to avoid requiring consumers ship their own
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
         */
        function is(x, y) {
            // SameValue algorithm
            if (x === y) {
                // Steps 1-5, 7-10
                // Steps 6.b-6.e: +0 != -0
                // Added the nonzero y check to make Flow happy, but it is redundant
                return x !== 0 || y !== 0 || 1 / x === 1 / y;
            } else {
                // Step 6.a: NaN == NaN
                return x !== x && y !== y;
            }
        }

        /**
         * Performs equality by iterating through keys on an object and returning false
         * when any key has values which are not strictly equal between the arguments.
         * Returns true when the values of all keys are strictly equal.
         */
        function shallowEqual(objA, objB) {
            if (is(objA, objB)) {
                return true;
            }

            if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
                return false;
            }

            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);

            if (keysA.length !== keysB.length) {
                return false;
            }

            // Test for A's keys different from B.
            for (var i = 0; i < keysA.length; i++) {
                if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
                    return false;
                }
            }

            return true;
        }

        module.exports = shallowEqual;

        /***/ }),
    /* 55 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var isTextNode = __webpack_require__(56);

        /*eslint-disable no-bitwise */

        /**
         * Checks if a given DOM node contains or is another DOM node.
         */
        function containsNode(outerNode, innerNode) {
            if (!outerNode || !innerNode) {
                return false;
            } else if (outerNode === innerNode) {
                return true;
            } else if (isTextNode(outerNode)) {
                return false;
            } else if (isTextNode(innerNode)) {
                return containsNode(outerNode, innerNode.parentNode);
            } else if ('contains' in outerNode) {
                return outerNode.contains(innerNode);
            } else if (outerNode.compareDocumentPosition) {
                return !!(outerNode.compareDocumentPosition(innerNode) & 16);
            } else {
                return false;
            }
        }

        module.exports = containsNode;

        /***/ }),
    /* 56 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        var isNode = __webpack_require__(57);

        /**
         * @param {*} object The object to check.
         * @return {boolean} Whether or not the object is a DOM text node.
         */
        function isTextNode(object) {
            return isNode(object) && object.nodeType == 3;
        }

        module.exports = isTextNode;

        /***/ }),
    /* 57 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        /**
         * @param {*} object The object to check.
         * @return {boolean} Whether or not the object is a DOM node.
         */
        function isNode(object) {
            var doc = object ? object.ownerDocument || object : document;
            var defaultView = doc.defaultView || window;
            return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
        }

        module.exports = isNode;

        /***/ }),
    /* 58 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(14);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







        /**
         * The public API for a <Router> that uses HTML5 history.
         */

        var BrowserRouter = function (_React$Component) {
            _inherits(BrowserRouter, _React$Component);

            function BrowserRouter() {
                var _temp, _this, _ret;

                _classCallCheck(this, BrowserRouter);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["a" /* createBrowserHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
            }

            BrowserRouter.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
            };

            BrowserRouter.prototype.render = function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
            };

            return BrowserRouter;
        }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

        BrowserRouter.propTypes = {
            basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
            forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
            getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
            keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
            children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
        };


        /* unused harmony default export */ var _unused_webpack_default_export = (BrowserRouter);

        /***/ }),
    /* 59 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */



        var ReactPropTypesSecret = __webpack_require__(60);

        function emptyFunction() {}

        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                if (secret === ReactPropTypesSecret) {
                    // It is still safe when called from React.
                    return;
                }
                var err = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                    'Use PropTypes.checkPropTypes() to call them. ' +
                    'Read more at http://fb.me/use-check-prop-types'
                );
                err.name = 'Invariant Violation';
                throw err;
            };
            shim.isRequired = shim;
            function getShim() {
                return shim;
            };
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,

                any: shim,
                arrayOf: getShim,
                element: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim
            };

            ReactPropTypes.checkPropTypes = emptyFunction;
            ReactPropTypes.PropTypes = ReactPropTypes;

            return ReactPropTypes;
        };


        /***/ }),
    /* 60 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */



        var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

        module.exports = ReactPropTypesSecret;


        /***/ }),
    /* 61 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(9);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(8);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(13);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(26);
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








        var PopStateEvent = 'popstate';
        var HashChangeEvent = 'hashchange';

        var getHistoryState = function getHistoryState() {
            try {
                return window.history.state || {};
            } catch (e) {
                // IE 11 sometimes throws when accessing window.history.state
                // See https://github.com/ReactTraining/history/pull/289
                return {};
            }
        };

        /**
         * Creates a history object that uses the HTML5 history API including
         * pushState, replaceState, and the popstate event.
         */
        var createBrowserHistory = function createBrowserHistory() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

            var globalHistory = window.history;
            var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
            var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

            var _props$forceRefresh = props.forceRefresh,
                forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
                _props$getUserConfirm = props.getUserConfirmation,
                getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
                _props$keyLength = props.keyLength,
                keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

            var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

            var getDOMLocation = function getDOMLocation(historyState) {
                var _ref = historyState || {},
                    key = _ref.key,
                    state = _ref.state;

                var _window$location = window.location,
                    pathname = _window$location.pathname,
                    search = _window$location.search,
                    hash = _window$location.hash;


                var path = pathname + search + hash;

                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

                if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

                return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
            };

            var createKey = function createKey() {
                return Math.random().toString(36).substr(2, keyLength);
            };

            var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

            var setState = function setState(nextState) {
                _extends(history, nextState);

                history.length = globalHistory.length;

                transitionManager.notifyListeners(history.location, history.action);
            };

            var handlePopState = function handlePopState(event) {
                // Ignore extraneous popstate events in WebKit.
                if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

                handlePop(getDOMLocation(event.state));
            };

            var handleHashChange = function handleHashChange() {
                handlePop(getDOMLocation(getHistoryState()));
            };

            var forceNextPop = false;

            var handlePop = function handlePop(location) {
                if (forceNextPop) {
                    forceNextPop = false;
                    setState();
                } else {
                    var action = 'POP';

                    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                        if (ok) {
                            setState({ action: action, location: location });
                        } else {
                            revertPop(location);
                        }
                    });
                }
            };

            var revertPop = function revertPop(fromLocation) {
                var toLocation = history.location;

                // TODO: We could probably make this more reliable by
                // keeping a list of keys we've seen in sessionStorage.
                // Instead, we just default to 0 for keys we don't know.

                var toIndex = allKeys.indexOf(toLocation.key);

                if (toIndex === -1) toIndex = 0;

                var fromIndex = allKeys.indexOf(fromLocation.key);

                if (fromIndex === -1) fromIndex = 0;

                var delta = toIndex - fromIndex;

                if (delta) {
                    forceNextPop = true;
                    go(delta);
                }
            };

            var initialLocation = getDOMLocation(getHistoryState());
            var allKeys = [initialLocation.key];

            // Public interface

            var createHref = function createHref(location) {
                return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
            };

            var push = function push(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

                var action = 'PUSH';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    var href = createHref(location);
                    var key = location.key,
                        state = location.state;


                    if (canUseHistory) {
                        globalHistory.pushState({ key: key, state: state }, null, href);

                        if (forceRefresh) {
                            window.location.href = href;
                        } else {
                            var prevIndex = allKeys.indexOf(history.location.key);
                            var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

                            nextKeys.push(location.key);
                            allKeys = nextKeys;

                            setState({ action: action, location: location });
                        }
                    } else {
                        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

                        window.location.href = href;
                    }
                });
            };

            var replace = function replace(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

                var action = 'REPLACE';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    var href = createHref(location);
                    var key = location.key,
                        state = location.state;


                    if (canUseHistory) {
                        globalHistory.replaceState({ key: key, state: state }, null, href);

                        if (forceRefresh) {
                            window.location.replace(href);
                        } else {
                            var prevIndex = allKeys.indexOf(history.location.key);

                            if (prevIndex !== -1) allKeys[prevIndex] = location.key;

                            setState({ action: action, location: location });
                        }
                    } else {
                        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

                        window.location.replace(href);
                    }
                });
            };

            var go = function go(n) {
                globalHistory.go(n);
            };

            var goBack = function goBack() {
                return go(-1);
            };

            var goForward = function goForward() {
                return go(1);
            };

            var listenerCount = 0;

            var checkDOMListeners = function checkDOMListeners(delta) {
                listenerCount += delta;

                if (listenerCount === 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

                    if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
                } else if (listenerCount === 0) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

                    if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
                }
            };

            var isBlocked = false;

            var block = function block() {
                var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var unblock = transitionManager.setPrompt(prompt);

                if (!isBlocked) {
                    checkDOMListeners(1);
                    isBlocked = true;
                }

                return function () {
                    if (isBlocked) {
                        isBlocked = false;
                        checkDOMListeners(-1);
                    }

                    return unblock();
                };
            };

            var listen = function listen(listener) {
                var unlisten = transitionManager.appendListener(listener);
                checkDOMListeners(1);

                return function () {
                    checkDOMListeners(-1);
                    unlisten();
                };
            };

            var history = {
                length: globalHistory.length,
                action: 'POP',
                location: initialLocation,
                createHref: createHref,
                push: push,
                replace: replace,
                go: go,
                goBack: goBack,
                goForward: goForward,
                block: block,
                listen: listen
            };

            return history;
        };

        /* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

        /***/ }),
    /* 62 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        function isAbsolute(pathname) {
            return pathname.charAt(0) === '/';
        }

// About 1.5x faster than the two-arg version of Array#splice()
        function spliceOne(list, index) {
            for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
                list[i] = list[k];
            }

            list.pop();
        }

// This implementation is based heavily on node's url.parse
        function resolvePathname(to) {
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var toParts = to && to.split('/') || [];
            var fromParts = from && from.split('/') || [];

            var isToAbs = to && isAbsolute(to);
            var isFromAbs = from && isAbsolute(from);
            var mustEndAbs = isToAbs || isFromAbs;

            if (to && isAbsolute(to)) {
                // to is absolute
                fromParts = toParts;
            } else if (toParts.length) {
                // to is relative, drop the filename
                fromParts.pop();
                fromParts = fromParts.concat(toParts);
            }

            if (!fromParts.length) return '/';

            var hasTrailingSlash = void 0;
            if (fromParts.length) {
                var last = fromParts[fromParts.length - 1];
                hasTrailingSlash = last === '.' || last === '..' || last === '';
            } else {
                hasTrailingSlash = false;
            }

            var up = 0;
            for (var i = fromParts.length; i >= 0; i--) {
                var part = fromParts[i];

                if (part === '.') {
                    spliceOne(fromParts, i);
                } else if (part === '..') {
                    spliceOne(fromParts, i);
                    up++;
                } else if (up) {
                    spliceOne(fromParts, i);
                    up--;
                }
            }

            if (!mustEndAbs) for (; up--; up) {
                fromParts.unshift('..');
            }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

            var result = fromParts.join('/');

            if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

            return result;
        }

        /* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

        /***/ }),
    /* 63 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        function valueEqual(a, b) {
            if (a === b) return true;

            if (a == null || b == null) return false;

            if (Array.isArray(a)) {
                return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
                    return valueEqual(item, b[index]);
                });
            }

            var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
            var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

            if (aType !== bType) return false;

            if (aType === 'object') {
                var aValue = a.valueOf();
                var bValue = b.valueOf();

                if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

                var aKeys = Object.keys(a);
                var bKeys = Object.keys(b);

                if (aKeys.length !== bKeys.length) return false;

                return aKeys.every(function (key) {
                    return valueEqual(a[key], b[key]);
                });
            }

            return false;
        }

        /* harmony default export */ __webpack_exports__["a"] = (valueEqual);

        /***/ }),
    /* 64 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(9);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(8);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(13);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(26);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








        var HashChangeEvent = 'hashchange';

        var HashPathCoders = {
            hashbang: {
                encodePath: function encodePath(path) {
                    return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
                },
                decodePath: function decodePath(path) {
                    return path.charAt(0) === '!' ? path.substr(1) : path;
                }
            },
            noslash: {
                encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
                decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
            },
            slash: {
                encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
                decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
            }
        };

        var getHashPath = function getHashPath() {
            // We can't use window.location.hash here because it's not
            // consistent across browsers - Firefox will pre-decode it!
            var href = window.location.href;
            var hashIndex = href.indexOf('#');
            return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
        };

        var pushHashPath = function pushHashPath(path) {
            return window.location.hash = path;
        };

        var replaceHashPath = function replaceHashPath(path) {
            var hashIndex = window.location.href.indexOf('#');

            window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
        };

        var createHashHistory = function createHashHistory() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

            var globalHistory = window.history;
            var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

            var _props$getUserConfirm = props.getUserConfirmation,
                getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
                _props$hashType = props.hashType,
                hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

            var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

            var _HashPathCoders$hashT = HashPathCoders[hashType],
                encodePath = _HashPathCoders$hashT.encodePath,
                decodePath = _HashPathCoders$hashT.decodePath;


            var getDOMLocation = function getDOMLocation() {
                var path = decodePath(getHashPath());

                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

                if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

                return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
            };

            var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

            var setState = function setState(nextState) {
                _extends(history, nextState);

                history.length = globalHistory.length;

                transitionManager.notifyListeners(history.location, history.action);
            };

            var forceNextPop = false;
            var ignorePath = null;

            var handleHashChange = function handleHashChange() {
                var path = getHashPath();
                var encodedPath = encodePath(path);

                if (path !== encodedPath) {
                    // Ensure we always have a properly-encoded hash.
                    replaceHashPath(encodedPath);
                } else {
                    var location = getDOMLocation();
                    var prevLocation = history.location;

                    if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

                    if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

                    ignorePath = null;

                    handlePop(location);
                }
            };

            var handlePop = function handlePop(location) {
                if (forceNextPop) {
                    forceNextPop = false;
                    setState();
                } else {
                    var action = 'POP';

                    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                        if (ok) {
                            setState({ action: action, location: location });
                        } else {
                            revertPop(location);
                        }
                    });
                }
            };

            var revertPop = function revertPop(fromLocation) {
                var toLocation = history.location;

                // TODO: We could probably make this more reliable by
                // keeping a list of paths we've seen in sessionStorage.
                // Instead, we just default to 0 for paths we don't know.

                var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

                if (toIndex === -1) toIndex = 0;

                var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

                if (fromIndex === -1) fromIndex = 0;

                var delta = toIndex - fromIndex;

                if (delta) {
                    forceNextPop = true;
                    go(delta);
                }
            };

            // Ensure the hash is encoded properly before doing anything else.
            var path = getHashPath();
            var encodedPath = encodePath(path);

            if (path !== encodedPath) replaceHashPath(encodedPath);

            var initialLocation = getDOMLocation();
            var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

            // Public interface

            var createHref = function createHref(location) {
                return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
            };

            var push = function push(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

                var action = 'PUSH';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
                    var encodedPath = encodePath(basename + path);
                    var hashChanged = getHashPath() !== encodedPath;

                    if (hashChanged) {
                        // We cannot tell if a hashchange was caused by a PUSH, so we'd
                        // rather setState here and ignore the hashchange. The caveat here
                        // is that other hash histories in the page will consider it a POP.
                        ignorePath = path;
                        pushHashPath(encodedPath);

                        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
                        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

                        nextPaths.push(path);
                        allPaths = nextPaths;

                        setState({ action: action, location: location });
                    } else {
                        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

                        setState();
                    }
                });
            };

            var replace = function replace(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

                var action = 'REPLACE';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
                    var encodedPath = encodePath(basename + path);
                    var hashChanged = getHashPath() !== encodedPath;

                    if (hashChanged) {
                        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                        // rather setState here and ignore the hashchange. The caveat here
                        // is that other hash histories in the page will consider it a POP.
                        ignorePath = path;
                        replaceHashPath(encodedPath);
                    }

                    var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

                    if (prevIndex !== -1) allPaths[prevIndex] = path;

                    setState({ action: action, location: location });
                });
            };

            var go = function go(n) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

                globalHistory.go(n);
            };

            var goBack = function goBack() {
                return go(-1);
            };

            var goForward = function goForward() {
                return go(1);
            };

            var listenerCount = 0;

            var checkDOMListeners = function checkDOMListeners(delta) {
                listenerCount += delta;

                if (listenerCount === 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
                } else if (listenerCount === 0) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
                }
            };

            var isBlocked = false;

            var block = function block() {
                var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var unblock = transitionManager.setPrompt(prompt);

                if (!isBlocked) {
                    checkDOMListeners(1);
                    isBlocked = true;
                }

                return function () {
                    if (isBlocked) {
                        isBlocked = false;
                        checkDOMListeners(-1);
                    }

                    return unblock();
                };
            };

            var listen = function listen(listener) {
                var unlisten = transitionManager.appendListener(listener);
                checkDOMListeners(1);

                return function () {
                    checkDOMListeners(-1);
                    unlisten();
                };
            };

            var history = {
                length: globalHistory.length,
                action: 'POP',
                location: initialLocation,
                createHref: createHref,
                push: push,
                replace: replace,
                go: go,
                goBack: goBack,
                goForward: goForward,
                block: block,
                listen: listen
            };

            return history;
        };

        /* harmony default export */ __webpack_exports__["a"] = (createHashHistory);

        /***/ }),
    /* 65 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(9);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(8);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(13);
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






        var clamp = function clamp(n, lowerBound, upperBound) {
            return Math.min(Math.max(n, lowerBound), upperBound);
        };

        /**
         * Creates a history object that stores locations in memory.
         */
        var createMemoryHistory = function createMemoryHistory() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var getUserConfirmation = props.getUserConfirmation,
                _props$initialEntries = props.initialEntries,
                initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
                _props$initialIndex = props.initialIndex,
                initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
                _props$keyLength = props.keyLength,
                keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


            var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

            var setState = function setState(nextState) {
                _extends(history, nextState);

                history.length = history.entries.length;

                transitionManager.notifyListeners(history.location, history.action);
            };

            var createKey = function createKey() {
                return Math.random().toString(36).substr(2, keyLength);
            };

            var index = clamp(initialIndex, 0, initialEntries.length - 1);
            var entries = initialEntries.map(function (entry) {
                return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
            });

            // Public interface

            var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

            var push = function push(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

                var action = 'PUSH';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    var prevIndex = history.index;
                    var nextIndex = prevIndex + 1;

                    var nextEntries = history.entries.slice(0);
                    if (nextEntries.length > nextIndex) {
                        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
                    } else {
                        nextEntries.push(location);
                    }

                    setState({
                        action: action,
                        location: location,
                        index: nextIndex,
                        entries: nextEntries
                    });
                });
            };

            var replace = function replace(path, state) {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

                var action = 'REPLACE';
                var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (!ok) return;

                    history.entries[history.index] = location;

                    setState({ action: action, location: location });
                });
            };

            var go = function go(n) {
                var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

                var action = 'POP';
                var location = history.entries[nextIndex];

                transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                    if (ok) {
                        setState({
                            action: action,
                            location: location,
                            index: nextIndex
                        });
                    } else {
                        // Mimic the behavior of DOM histories by
                        // causing a render after a cancelled POP.
                        setState();
                    }
                });
            };

            var goBack = function goBack() {
                return go(-1);
            };

            var goForward = function goForward() {
                return go(1);
            };

            var canGo = function canGo(n) {
                var nextIndex = history.index + n;
                return nextIndex >= 0 && nextIndex < history.entries.length;
            };

            var block = function block() {
                var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                return transitionManager.setPrompt(prompt);
            };

            var listen = function listen(listener) {
                return transitionManager.appendListener(listener);
            };

            var history = {
                length: entries.length,
                action: 'POP',
                location: entries[index],
                index: index,
                entries: entries,
                createHref: createHref,
                push: push,
                replace: replace,
                go: go,
                goBack: goBack,
                goForward: goForward,
                canGo: canGo,
                block: block,
                listen: listen
            };

            return history;
        };

        /* harmony default export */ __webpack_exports__["a"] = (createMemoryHistory);

        /***/ }),
    /* 66 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(14);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







        /**
         * The public API for a <Router> that uses window.location.hash.
         */

        var HashRouter = function (_React$Component) {
            _inherits(HashRouter, _React$Component);

            function HashRouter() {
                var _temp, _this, _ret;

                _classCallCheck(this, HashRouter);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["b" /* createHashHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
            }

            HashRouter.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
            };

            HashRouter.prototype.render = function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
            };

            return HashRouter;
        }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

        HashRouter.propTypes = {
            basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
            getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
            hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"]),
            children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
        };


        /* harmony default export */ __webpack_exports__["a"] = (HashRouter);

        /***/ }),
    /* 67 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(68);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

        /***/ }),
    /* 68 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(15);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







        /**
         * The public API for a <Router> that stores location in memory.
         */

        var MemoryRouter = function (_React$Component) {
            _inherits(MemoryRouter, _React$Component);

            function MemoryRouter() {
                var _temp, _this, _ret;

                _classCallCheck(this, MemoryRouter);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["d" /* createMemoryHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
            }

            MemoryRouter.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
            };

            MemoryRouter.prototype.render = function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
            };

            return MemoryRouter;
        }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

        MemoryRouter.propTypes = {
            initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
            initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
            getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
            keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
            children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
        };


        /* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

        /***/ }),
    /* 69 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(28);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(27);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






        /**
         * A <Link> wrapper that knows if it's "active" or not.
         */
        var NavLink = function NavLink(_ref) {
            var to = _ref.to,
                exact = _ref.exact,
                strict = _ref.strict,
                location = _ref.location,
                activeClassName = _ref.activeClassName,
                className = _ref.className,
                activeStyle = _ref.activeStyle,
                style = _ref.style,
                getIsActive = _ref.isActive,
                ariaCurrent = _ref["aria-current"],
                rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

            var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

            // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
            var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
                path: escapedPath,
                exact: exact,
                strict: strict,
                location: location,
                children: function children(_ref2) {
                    var location = _ref2.location,
                        match = _ref2.match;

                    var isActive = !!(getIsActive ? getIsActive(match, location) : match);

                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
                        to: to,
                        className: isActive ? [className, activeClassName].filter(function (i) {
                            return i;
                        }).join(" ") : className,
                        style: isActive ? _extends({}, style, activeStyle) : style,
                        "aria-current": isActive && ariaCurrent || null
                    }, rest));
                }
            });
        };

        NavLink.propTypes = {
            to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
            exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
            strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
            location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
            activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
            className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
            activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
            style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
            isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
            "aria-current": __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
        };

        NavLink.defaultProps = {
            activeClassName: "active",
            "aria-current": "page"
        };

        /* unused harmony default export */ var _unused_webpack_default_export = (NavLink);

        /***/ }),
    /* 70 */
    /***/ (function(module, exports) {

        module.exports = Array.isArray || function (arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
        };


        /***/ }),
    /* 71 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(72);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

        /***/ }),
    /* 72 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





        /**
         * The public API for prompting the user before navigating away
         * from a screen with a component.
         */

        var Prompt = function (_React$Component) {
            _inherits(Prompt, _React$Component);

            function Prompt() {
                _classCallCheck(this, Prompt);

                return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
            }

            Prompt.prototype.enable = function enable(message) {
                if (this.unblock) this.unblock();

                this.unblock = this.context.router.history.block(message);
            };

            Prompt.prototype.disable = function disable() {
                if (this.unblock) {
                    this.unblock();
                    this.unblock = null;
                }
            };

            Prompt.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Prompt> outside a <Router>");

                if (this.props.when) this.enable(this.props.message);
            };

            Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                if (nextProps.when) {
                    if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
                } else {
                    this.disable();
                }
            };

            Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
                this.disable();
            };

            Prompt.prototype.render = function render() {
                return null;
            };

            return Prompt;
        }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

        Prompt.propTypes = {
            when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
            message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
        };
        Prompt.defaultProps = {
            when: true
        };
        Prompt.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                    block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
                }).isRequired
            }).isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (Prompt);

        /***/ }),
    /* 73 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(74);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

        /***/ }),
    /* 74 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generatePath__ = __webpack_require__(31);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








        /**
         * The public API for updating the location programmatically
         * with a component.
         */

        var Redirect = function (_React$Component) {
            _inherits(Redirect, _React$Component);

            function Redirect() {
                _classCallCheck(this, Redirect);

                return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
            }

            Redirect.prototype.isStatic = function isStatic() {
                return this.context.router && this.context.router.staticContext;
            };

            Redirect.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Redirect> outside a <Router>");

                if (this.isStatic()) this.perform();
            };

            Redirect.prototype.componentDidMount = function componentDidMount() {
                if (!this.isStatic()) this.perform();
            };

            Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
                var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(prevProps.to);
                var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(this.props.to);

                if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["f" /* locationsAreEqual */])(prevTo, nextTo)) {
                    __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
                    return;
                }

                this.perform();
            };

            Redirect.prototype.computeTo = function computeTo(_ref) {
                var computedMatch = _ref.computedMatch,
                    to = _ref.to;

                if (computedMatch) {
                    if (typeof to === "string") {
                        return Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to, computedMatch.params);
                    } else {
                        return _extends({}, to, {
                            pathname: Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to.pathname, computedMatch.params)
                        });
                    }
                }

                return to;
            };

            Redirect.prototype.perform = function perform() {
                var history = this.context.router.history;
                var push = this.props.push;

                var to = this.computeTo(this.props);

                if (push) {
                    history.push(to);
                } else {
                    history.replace(to);
                }
            };

            Redirect.prototype.render = function render() {
                return null;
            };

            return Redirect;
        }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

        Redirect.propTypes = {
            computedMatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // private, from <Switch>
            push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
            from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
            to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
        };
        Redirect.defaultProps = {
            push: false
        };
        Redirect.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                    push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
                    replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
                }).isRequired,
                staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
            }).isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (Redirect);

        /***/ }),
    /* 75 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(76);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

        /***/ }),
    /* 76 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(15);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








        var addLeadingSlash = function addLeadingSlash(path) {
            return path.charAt(0) === "/" ? path : "/" + path;
        };

        var addBasename = function addBasename(basename, location) {
            if (!basename) return location;

            return _extends({}, location, {
                pathname: addLeadingSlash(basename) + location.pathname
            });
        };

        var stripBasename = function stripBasename(basename, location) {
            if (!basename) return location;

            var base = addLeadingSlash(basename);

            if (location.pathname.indexOf(base) !== 0) return location;

            return _extends({}, location, {
                pathname: location.pathname.substr(base.length)
            });
        };

        var createURL = function createURL(location) {
            return typeof location === "string" ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history__["e" /* createPath */])(location);
        };

        var staticHandler = function staticHandler(methodName) {
            return function () {
                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, "You cannot %s with <StaticRouter>", methodName);
            };
        };

        var noop = function noop() {};

        /**
         * The public top-level API for a "static" <Router>, so-called because it
         * can't actually change the current location. Instead, it just records
         * location changes in a context object. Useful mainly in testing and
         * server-rendering scenarios.
         */

        var StaticRouter = function (_React$Component) {
            _inherits(StaticRouter, _React$Component);

            function StaticRouter() {
                var _temp, _this, _ret;

                _classCallCheck(this, StaticRouter);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
                    return addLeadingSlash(_this.props.basename + createURL(path));
                }, _this.handlePush = function (location) {
                    var _this$props = _this.props,
                        basename = _this$props.basename,
                        context = _this$props.context;

                    context.action = "PUSH";
                    context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
                    context.url = createURL(context.location);
                }, _this.handleReplace = function (location) {
                    var _this$props2 = _this.props,
                        basename = _this$props2.basename,
                        context = _this$props2.context;

                    context.action = "REPLACE";
                    context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
                    context.url = createURL(context.location);
                }, _this.handleListen = function () {
                    return noop;
                }, _this.handleBlock = function () {
                    return noop;
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            StaticRouter.prototype.getChildContext = function getChildContext() {
                return {
                    router: {
                        staticContext: this.props.context
                    }
                };
            };

            StaticRouter.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
            };

            StaticRouter.prototype.render = function render() {
                var _props = this.props,
                    basename = _props.basename,
                    context = _props.context,
                    location = _props.location,
                    props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

                var history = {
                    createHref: this.createHref,
                    action: "POP",
                    location: stripBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location)),
                    push: this.handlePush,
                    replace: this.handleReplace,
                    go: staticHandler("go"),
                    goBack: staticHandler("goBack"),
                    goForward: staticHandler("goForward"),
                    listen: this.handleListen,
                    block: this.handleBlock
                };

                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
            };

            return StaticRouter;
        }(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

        StaticRouter.propTypes = {
            basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
            context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
            location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
        };
        StaticRouter.defaultProps = {
            basename: "",
            location: "/"
        };
        StaticRouter.childContextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
        };


        /* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

        /***/ }),
    /* 77 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(78);
// Written in this round about way for babel-transform-imports


        /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

        /***/ }),
    /* 78 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(16);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







        /**
         * The public API for rendering the first <Route> that matches.
         */

        var Switch = function (_React$Component) {
            _inherits(Switch, _React$Component);

            function Switch() {
                _classCallCheck(this, Switch);

                return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
            }

            Switch.prototype.componentWillMount = function componentWillMount() {
                __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Switch> outside a <Router>");
            };

            Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
                __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

                __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
            };

            Switch.prototype.render = function render() {
                var route = this.context.router.route;
                var children = this.props.children;

                var location = this.props.location || route.location;

                var match = void 0,
                    child = void 0;
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
                    if (match == null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) {
                        var _element$props = element.props,
                            pathProp = _element$props.path,
                            exact = _element$props.exact,
                            strict = _element$props.strict,
                            sensitive = _element$props.sensitive,
                            from = _element$props.from;

                        var path = pathProp || from;

                        child = element;
                        match = Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
                    }
                });

                return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
            };

            return Switch;
        }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

        Switch.contextTypes = {
            router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
                route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
            }).isRequired
        };
        Switch.propTypes = {
            children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
            location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
        };


        /* harmony default export */ __webpack_exports__["a"] = (Switch);

        /***/ }),
    /* 79 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__ = __webpack_require__(31);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__["a" /* default */]);

        /***/ }),
    /* 80 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(16);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

        /***/ }),
    /* 81 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(82);
// Written in this round about way for babel-transform-imports


        /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

        /***/ }),
    /* 82 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(83);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(29);
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






        /**
         * A public higher-order component to access the imperative API
         */
        var withRouter = function withRouter(Component) {
            var C = function C(props) {
                var wrappedComponentRef = props.wrappedComponentRef,
                    remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], {
                    children: function children(routeComponentProps) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
                            ref: wrappedComponentRef
                        }));
                    }
                });
            };

            C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
            C.WrappedComponent = Component;
            C.propTypes = {
                wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
            };

            return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
        };

        /* harmony default export */ __webpack_exports__["a"] = (withRouter);

        /***/ }),
    /* 83 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };

        var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        };

        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

        function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

                if (objectPrototype) {
                    var inheritedComponent = getPrototypeOf(sourceComponent);
                    if (inheritedComponent && inheritedComponent !== objectPrototype) {
                        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                    }
                }

                var keys = getOwnPropertyNames(sourceComponent);

                if (getOwnPropertySymbols) {
                    keys = keys.concat(getOwnPropertySymbols(sourceComponent));
                }

                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                        try { // Avoid failures from read-only properties
                            defineProperty(targetComponent, key, descriptor);
                        } catch (e) {}
                    }
                }

                return targetComponent;
            }

            return targetComponent;
        }

        module.exports = hoistNonReactStatics;


        /***/ }),
    /* 84 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 85 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css__ = __webpack_require__(86);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bulma_css_bulma_min_css__ = __webpack_require__(87);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bulma_css_bulma_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bulma_css_bulma_min_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bulma_checkradio_dist_css_bulma_checkradio_min_css__ = __webpack_require__(88);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bulma_checkradio_dist_css_bulma_checkradio_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bulma_checkradio_dist_css_bulma_checkradio_min_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_fonts_typicons_min_css__ = __webpack_require__(89);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_fonts_typicons_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_fonts_typicons_min_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_main_css__ = __webpack_require__(90);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_main_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_snackbar_dist_mdc_snackbar_min_css__ = __webpack_require__(91);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_snackbar_dist_mdc_snackbar_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_snackbar_dist_mdc_snackbar_min_css__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_HeaderComponent_HeaderComponent__ = __webpack_require__(92);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_layout_ContentComponent_ContentComponent__ = __webpack_require__(93);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var App=function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('header',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_layout_HeaderComponent_HeaderComponent__["a" /* default */],null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('section',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_layout_ContentComponent_ContentComponent__["a" /* default */],null)));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (App);

        /***/ }),
    /* 86 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 87 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 88 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 89 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 90 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 91 */
    /***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

        /***/ }),
    /* 92 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(12);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var HeaderComponent=function(_Component){_inherits(HeaderComponent,_Component);function HeaderComponent(){_classCallCheck(this,HeaderComponent);var _this=_possibleConstructorReturn(this,(HeaderComponent.__proto__||Object.getPrototypeOf(HeaderComponent)).call(this));_this.state={active:null,routes:[{to:'/collections',name:'Collections'},{to:'/import-export',name:'Import/Export'}]};return _this;}_createClass(HeaderComponent,[{key:'handlerActive',value:function handlerActive(index){this.setState({active:index});}},{key:'verifyActive',value:function verifyActive(index){return this.state.active===index;}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('nav',{className:'navbar','aria-label':'main navigation'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'navbar-brand'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'navbar-item'},'AMDB')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'navbar-menu'},this.state.routes.map(function(element,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],{key:index,className:'navbar-item '+(_this2.verifyActive(index)?'link-active':''),to:element.to,onClick:function onClick(){return _this2.handlerActive(index);}},element.name);})));}}]);return HeaderComponent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (HeaderComponent);

        /***/ }),
    /* 93 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(12);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_CRUDCollections_MainComponent__ = __webpack_require__(94);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_ImportExport_MainComponent__ = __webpack_require__(127);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ContentComponent=function(_Component){_inherits(ContentComponent,_Component);function ContentComponent(){_classCallCheck(this,ContentComponent);return _possibleConstructorReturn(this,(ContentComponent.__proto__||Object.getPrototypeOf(ContentComponent)).apply(this,arguments));}_createClass(ContentComponent,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('section',{className:'hero'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'hero-body'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'container'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',{className:'title'},'AMDB Dashboard'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Switch */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */],{exact:true,path:'/collections',component:__WEBPACK_IMPORTED_MODULE_2__dashboard_CRUDCollections_MainComponent__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */],{exact:true,path:'/import-export',component:__WEBPACK_IMPORTED_MODULE_3__dashboard_ImportExport_MainComponent__["a" /* default */]})))));}}]);return ContentComponent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (ContentComponent);

        /***/ }),
    /* 94 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CollectionDataComponent_CollectionDataComponent__ = __webpack_require__(97);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CollectionModalComponent_CollectionModalComponent__ = __webpack_require__(126);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managers_CollectionManager_CollectionManager__ = __webpack_require__(20);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Components_NotificationsComponent_NotificationsComponent__ = __webpack_require__(19);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MainComponent=function(_IComponent){_inherits(MainComponent,_IComponent);function MainComponent(){_classCallCheck(this,MainComponent);var _this=_possibleConstructorReturn(this,(MainComponent.__proto__||Object.getPrototypeOf(MainComponent)).call(this));_this.CollectionManager=new __WEBPACK_IMPORTED_MODULE_4__managers_CollectionManager_CollectionManager__["a" /* default */]();_this.state={collections:[],collectionActive:'',createCModal:false,typeNotify:false};_this.changeType=_this.changeType.bind(_this);return _this;}_createClass(MainComponent,[{key:"changeType",value:function changeType(value){this.setState({typeNotify:value});}},{key:"notify",value:function notify(message){var value=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this.Notifications.Show(message);}},{key:"componentWillMount",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return this.CollectionManager.GetAllCollections();case 3:response=_context.sent;if(!response.error){this.setState({collections:response.data});}_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);this.notify("Error can't connect with the server.");case 10:case"end":return _context.stop();}}},_callee,this,[[0,7]]);}));function componentWillMount(){return _ref.apply(this,arguments);}return componentWillMount;}()},{key:"selectCollection",value:function selectCollection(name,index){this.setState({collectionActive:name});this.setState({collectionActiveIndex:index});}},{key:"setActive",value:function setActive(index){return this.state.collectionActiveIndex===index;}},{key:"dropCollection",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(name,index){var _this2=this;var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;this.notify("Loading...",true);_context2.next=4;return this.CollectionManager.DropCollection(name);case 4:response=_context2.sent;if(!response.error){this.state.collections.map(function(collection,key){if(key===index){delete _this2.state.collections[index];}});this.setState({collections:this.state.collections});this.Notifications.Show(response.message);}_context2.next=11;break;case 8:_context2.prev=8;_context2.t0=_context2["catch"](0);this.notify("Error can't connect with the server.");case 11:case"end":return _context2.stop();}}},_callee2,this,[[0,8]]);}));function dropCollection(_x2,_x3){return _ref2.apply(this,arguments);}return dropCollection;}()},{key:"clearCollection",value:function(){var _ref3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(name,index){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;this.notify("Loading...",true);_context3.next=4;return this.CollectionManager.ClearCollection(name);case 4:response=_context3.sent;if(!response.error){this.setState({collectionActive:"empty"});this.setState({collectionActiveIndex:index});this.Notifications.Show(response.message);}_context3.next=11;break;case 8:_context3.prev=8;_context3.t0=_context3["catch"](0);this.notify("Error can't connect with the server.");case 11:case"end":return _context3.stop();}}},_callee3,this,[[0,8]]);}));function clearCollection(_x4,_x5){return _ref3.apply(this,arguments);}return clearCollection;}()},{key:"createCollectionModal",value:function createCollectionModal(){this.setState({type:'create'});if(this.state.createCModal===true){this.setState({createCModal:false});}else{this.setState({createCModal:true});}}},{key:"renameCollection",value:function renameCollection(name,index){this.setState({collectionActive:name});this.setState({type:'edit'});if(this.state.createCModal===true){this.setState({createCModal:false});}else{this.setState({createCModal:true});}}},{key:"closeModal",value:function(){var _ref4=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(e){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:this.setState({createCModal:false});if(!(e===true)){_context4.next=6;break;}_context4.next=4;return this.CollectionManager.GetAllCollections();case 4:response=_context4.sent;if(!response.error){this.setState({collections:response.data});}case 6:case"end":return _context4.stop();}}},_callee4,this);}));function closeModal(_x6){return _ref4.apply(this,arguments);}return closeModal;}()},{key:"render",value:function render(){var _this3=this;var collections=this.state.collections;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'manage'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:'subtitle'},"Collections Management"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'columns'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'column is-3'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'menu-left'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:'subtitle'},"Collections",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{onClick:function onClick(){return _this3.createCollectionModal();}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-primary'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-plus'})))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul",{className:'collection-list'},collections.map(function(collection,index){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li",{className:'collection',key:index},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"dropdown is-hoverable"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"dropdown-trigger"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:"gear","aria-haspopup":"true","aria-controls":"dropdown-menu4"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:"icon"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:"typcn typcn-cog-outline","aria-hidden":"true"})))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu4",role:"menu"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"dropdown-content"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"dropdown-item"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:'dropdown-item',onClick:function onClick(){return _this3.dropCollection(collection.name,index);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-danger'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-trash'})),"Drop Collection"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:'dropdown-item',onClick:function onClick(){return _this3.clearCollection(collection.name,index);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-info'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-arrow-loop'})),"Clear Collection"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:'dropdown-item',onClick:function onClick(){return _this3.renameCollection(collection.name,index);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-warning'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-edit'})),"Rename Collection"))))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{onClick:function onClick(){return _this3.selectCollection(collection.name,index);},className:_this3.setActive(index)?'is-active':''},collection.name));})))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'column is-10'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'data-right'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_CollectionDataComponent_CollectionDataComponent__["a" /* default */],{notify:this.changeType,collection:this.state.collectionActive}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CollectionModalComponent_CollectionModalComponent__["a" /* default */],{notify:this.changeType,active:this.state.createCModal,type:this.state.type,collection_name:this.state.collectionActive,activeF:this.closeModal.bind(this)}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__core_Components_NotificationsComponent_NotificationsComponent__["a" /* default */],{typeNotify:this.state.typeNotify})));}}]);return MainComponent;}(__WEBPACK_IMPORTED_MODULE_6__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (MainComponent);

        /***/ }),
    /* 95 */
    /***/ (function(module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
        var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
        var hadRuntime = g.regeneratorRuntime &&
            Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
        var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
        g.regeneratorRuntime = undefined;

        module.exports = __webpack_require__(96);

        if (hadRuntime) {
            // Restore the original runtime.
            g.regeneratorRuntime = oldRuntime;
        } else {
            // Remove the global property added by runtime.js.
            try {
                delete g.regeneratorRuntime;
            } catch(e) {
                g.regeneratorRuntime = undefined;
            }
        }


        /***/ }),
    /* 96 */
    /***/ (function(module, exports) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        !(function(global) {
            "use strict";

            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined; // More compressible than void 0.
            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

            var inModule = typeof module === "object";
            var runtime = global.regeneratorRuntime;
            if (runtime) {
                if (inModule) {
                    // If regeneratorRuntime is defined globally and we're in a module,
                    // make the exports object identical to regeneratorRuntime.
                    module.exports = runtime;
                }
                // Don't bother evaluating the rest of this file if the runtime was
                // already defined globally.
                return;
            }

            // Define the runtime globally (as expected by generated code) as either
            // module.exports (if we're in a module) or a new, empty object.
            runtime = global.regeneratorRuntime = inModule ? module.exports : {};

            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype);
                var context = new Context(tryLocsList || []);

                // The ._invoke method unifies the implementations of the .next,
                // .throw, and .return methods.
                generator._invoke = makeInvokeMethod(innerFn, self, context);

                return generator;
            }
            runtime.wrap = wrap;

            // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.
            function tryCatch(fn, obj, arg) {
                try {
                    return { type: "normal", arg: fn.call(obj, arg) };
                } catch (err) {
                    return { type: "throw", arg: err };
                }
            }

            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield = "suspendedYield";
            var GenStateExecuting = "executing";
            var GenStateCompleted = "completed";

            // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.
            var ContinueSentinel = {};

            // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}

            // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.
            var IteratorPrototype = {};
            IteratorPrototype[iteratorSymbol] = function () {
                return this;
            };

            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            if (NativeIteratorPrototype &&
                NativeIteratorPrototype !== Op &&
                hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                // This environment has a native %IteratorPrototype%; use it instead
                // of the polyfill.
                IteratorPrototype = NativeIteratorPrototype;
            }

            var Gp = GeneratorFunctionPrototype.prototype =
                Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] =
                GeneratorFunction.displayName = "GeneratorFunction";

            // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.
            function defineIteratorMethods(prototype) {
                ["next", "throw", "return"].forEach(function(method) {
                    prototype[method] = function(arg) {
                        return this._invoke(method, arg);
                    };
                });
            }

            runtime.isGeneratorFunction = function(genFun) {
                var ctor = typeof genFun === "function" && genFun.constructor;
                return ctor
                    ? ctor === GeneratorFunction ||
                    // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === "GeneratorFunction"
                    : false;
            };

            runtime.mark = function(genFun) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                } else {
                    genFun.__proto__ = GeneratorFunctionPrototype;
                    if (!(toStringTagSymbol in genFun)) {
                        genFun[toStringTagSymbol] = "GeneratorFunction";
                    }
                }
                genFun.prototype = Object.create(Gp);
                return genFun;
            };

            // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.
            runtime.awrap = function(arg) {
                return { __await: arg };
            };

            function AsyncIterator(generator) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);
                    if (record.type === "throw") {
                        reject(record.arg);
                    } else {
                        var result = record.arg;
                        var value = result.value;
                        if (value &&
                            typeof value === "object" &&
                            hasOwn.call(value, "__await")) {
                            return Promise.resolve(value.__await).then(function(value) {
                                invoke("next", value, resolve, reject);
                            }, function(err) {
                                invoke("throw", err, resolve, reject);
                            });
                        }

                        return Promise.resolve(value).then(function(unwrapped) {
                            // When a yielded Promise is resolved, its final value becomes
                            // the .value of the Promise<{value,done}> result for the
                            // current iteration. If the Promise is rejected, however, the
                            // result for this iteration will be rejected with the same
                            // reason. Note that rejections of yielded Promises are not
                            // thrown back into the generator function, as is the case
                            // when an awaited Promise is rejected. This difference in
                            // behavior between yield and await is important, because it
                            // allows the consumer to decide what to do with the yielded
                            // rejection (swallow it and continue, manually .throw it back
                            // into the generator, abandon iteration, whatever). With
                            // await, by contrast, there is no opportunity to examine the
                            // rejection reason outside the generator function, so the
                            // only option is to throw it from the await expression, and
                            // let the generator function handle the exception.
                            result.value = unwrapped;
                            resolve(result);
                        }, reject);
                    }
                }

                var previousPromise;

                function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new Promise(function(resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }

                    return previousPromise =
                        // If enqueue has been called before, then we want to wait until
                        // all previous Promises have been resolved before calling invoke,
                        // so that results are always delivered in the correct order. If
                        // enqueue has not been called before, then it is important to
                        // call invoke immediately, without waiting on a callback to fire,
                        // so that the async generator function has the opportunity to do
                        // any necessary setup in a predictable way. This predictability
                        // is why the Promise constructor synchronously invokes its
                        // executor callback, and why async functions synchronously
                        // execute code before the first await. Since we implement simple
                        // async functions in terms of async generators, it is especially
                        // important to get this right, even though it requires care.
                        previousPromise ? previousPromise.then(
                            callInvokeWithMethodAndArg,
                            // Avoid propagating failures to Promises returned by later
                            // invocations of the iterator.
                            callInvokeWithMethodAndArg
                        ) : callInvokeWithMethodAndArg();
                }

                // Define the unified helper method that is used to implement .next,
                // .throw, and .return (see defineIteratorMethods).
                this._invoke = enqueue;
            }

            defineIteratorMethods(AsyncIterator.prototype);
            AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                return this;
            };
            runtime.AsyncIterator = AsyncIterator;

            // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.
            runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                var iter = new AsyncIterator(
                    wrap(innerFn, outerFn, self, tryLocsList)
                );

                return runtime.isGeneratorFunction(outerFn)
                    ? iter // If outerFn is a generator, return the full iterator.
                    : iter.next().then(function(result) {
                        return result.done ? result.value : iter.next();
                    });
            };

            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart;

                return function invoke(method, arg) {
                    if (state === GenStateExecuting) {
                        throw new Error("Generator is already running");
                    }

                    if (state === GenStateCompleted) {
                        if (method === "throw") {
                            throw arg;
                        }

                        // Be forgiving, per 25.3.3.3.3 of the spec:
                        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                        return doneResult();
                    }

                    context.method = method;
                    context.arg = arg;

                    while (true) {
                        var delegate = context.delegate;
                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);
                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }

                        if (context.method === "next") {
                            // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = context.arg;

                        } else if (context.method === "throw") {
                            if (state === GenStateSuspendedStart) {
                                state = GenStateCompleted;
                                throw context.arg;
                            }

                            context.dispatchException(context.arg);

                        } else if (context.method === "return") {
                            context.abrupt("return", context.arg);
                        }

                        state = GenStateExecuting;

                        var record = tryCatch(innerFn, self, context);
                        if (record.type === "normal") {
                            // If an exception is thrown from innerFn, we leave state ===
                            // GenStateExecuting and loop back for another invocation.
                            state = context.done
                                ? GenStateCompleted
                                : GenStateSuspendedYield;

                            if (record.arg === ContinueSentinel) {
                                continue;
                            }

                            return {
                                value: record.arg,
                                done: context.done
                            };

                        } else if (record.type === "throw") {
                            state = GenStateCompleted;
                            // Dispatch the exception by looping back around to the
                            // context.dispatchException(context.arg) call above.
                            context.method = "throw";
                            context.arg = record.arg;
                        }
                    }
                };
            }

            // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.
            function maybeInvokeDelegate(delegate, context) {
                var method = delegate.iterator[context.method];
                if (method === undefined) {
                    // A .throw or .return when the delegate iterator has no .throw
                    // method always terminates the yield* loop.
                    context.delegate = null;

                    if (context.method === "throw") {
                        if (delegate.iterator.return) {
                            // If the delegate iterator has a return method, give it a
                            // chance to clean up.
                            context.method = "return";
                            context.arg = undefined;
                            maybeInvokeDelegate(delegate, context);

                            if (context.method === "throw") {
                                // If maybeInvokeDelegate(context) changed context.method from
                                // "return" to "throw", let that override the TypeError below.
                                return ContinueSentinel;
                            }
                        }

                        context.method = "throw";
                        context.arg = new TypeError(
                            "The iterator does not provide a 'throw' method");
                    }

                    return ContinueSentinel;
                }

                var record = tryCatch(method, delegate.iterator, context.arg);

                if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                }

                var info = record.arg;

                if (! info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                }

                if (info.done) {
                    // Assign the result of the finished delegate to the temporary
                    // variable specified by delegate.resultName (see delegateYield).
                    context[delegate.resultName] = info.value;

                    // Resume execution at the desired location (see delegateYield).
                    context.next = delegate.nextLoc;

                    // If context.method was "throw" but the delegate handled the
                    // exception, let the outer generator proceed normally. If
                    // context.method was "next", forget context.arg since it has been
                    // "consumed" by the delegate iterator. If context.method was
                    // "return", allow the original .return call to continue in the
                    // outer generator.
                    if (context.method !== "return") {
                        context.method = "next";
                        context.arg = undefined;
                    }

                } else {
                    // Re-yield the result returned by the delegate method.
                    return info;
                }

                // The delegate iterator is finished, so forget it and continue with
                // the outer generator.
                context.delegate = null;
                return ContinueSentinel;
            }

            // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.
            defineIteratorMethods(Gp);

            Gp[toStringTagSymbol] = "Generator";

            // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.
            Gp[iteratorSymbol] = function() {
                return this;
            };

            Gp.toString = function() {
                return "[object Generator]";
            };

            function pushTryEntry(locs) {
                var entry = { tryLoc: locs[0] };

                if (1 in locs) {
                    entry.catchLoc = locs[1];
                }

                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }

                this.tryEntries.push(entry);
            }

            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }

            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [{ tryLoc: "root" }];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(true);
            }

            runtime.keys = function(object) {
                var keys = [];
                for (var key in object) {
                    keys.push(key);
                }
                keys.reverse();

                // Rather than returning an object with a next method, we keep
                // things simple and return the next function itself.
                return function next() {
                    while (keys.length) {
                        var key = keys.pop();
                        if (key in object) {
                            next.value = key;
                            next.done = false;
                            return next;
                        }
                    }

                    // To avoid creating an additional object, we just hang the .value
                    // and .done properties off the next function object itself. This
                    // also ensures that the minifier will not anonymize the function.
                    next.done = true;
                    return next;
                };
            };

            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod) {
                        return iteratorMethod.call(iterable);
                    }

                    if (typeof iterable.next === "function") {
                        return iterable;
                    }

                    if (!isNaN(iterable.length)) {
                        var i = -1, next = function next() {
                            while (++i < iterable.length) {
                                if (hasOwn.call(iterable, i)) {
                                    next.value = iterable[i];
                                    next.done = false;
                                    return next;
                                }
                            }

                            next.value = undefined;
                            next.done = true;

                            return next;
                        };

                        return next.next = next;
                    }
                }

                // Return an iterator with no values.
                return { next: doneResult };
            }
            runtime.values = values;

            function doneResult() {
                return { value: undefined, done: true };
            }

            Context.prototype = {
                constructor: Context,

                reset: function(skipTempReset) {
                    this.prev = 0;
                    this.next = 0;
                    // Resetting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    this.sent = this._sent = undefined;
                    this.done = false;
                    this.delegate = null;

                    this.method = "next";
                    this.arg = undefined;

                    this.tryEntries.forEach(resetTryEntry);

                    if (!skipTempReset) {
                        for (var name in this) {
                            // Not sure about the optimal order of these conditions:
                            if (name.charAt(0) === "t" &&
                                hasOwn.call(this, name) &&
                                !isNaN(+name.slice(1))) {
                                this[name] = undefined;
                            }
                        }
                    }
                },

                stop: function() {
                    this.done = true;

                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;
                    if (rootRecord.type === "throw") {
                        throw rootRecord.arg;
                    }

                    return this.rval;
                },

                dispatchException: function(exception) {
                    if (this.done) {
                        throw exception;
                    }

                    var context = this;
                    function handle(loc, caught) {
                        record.type = "throw";
                        record.arg = exception;
                        context.next = loc;

                        if (caught) {
                            // If the dispatched exception was caught by a catch block,
                            // then let that catch block handle the exception normally.
                            context.method = "next";
                            context.arg = undefined;
                        }

                        return !! caught;
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        var record = entry.completion;

                        if (entry.tryLoc === "root") {
                            // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                        }

                        if (entry.tryLoc <= this.prev) {
                            var hasCatch = hasOwn.call(entry, "catchLoc");
                            var hasFinally = hasOwn.call(entry, "finallyLoc");

                            if (hasCatch && hasFinally) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                } else if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }

                            } else if (hasCatch) {
                                if (this.prev < entry.catchLoc) {
                                    return handle(entry.catchLoc, true);
                                }

                            } else if (hasFinally) {
                                if (this.prev < entry.finallyLoc) {
                                    return handle(entry.finallyLoc);
                                }

                            } else {
                                throw new Error("try statement without catch or finally");
                            }
                        }
                    }
                },

                abrupt: function(type, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc <= this.prev &&
                            hasOwn.call(entry, "finallyLoc") &&
                            this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }

                    if (finallyEntry &&
                        (type === "break" ||
                            type === "continue") &&
                        finallyEntry.tryLoc <= arg &&
                        arg <= finallyEntry.finallyLoc) {
                        // Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null;
                    }

                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type;
                    record.arg = arg;

                    if (finallyEntry) {
                        this.method = "next";
                        this.next = finallyEntry.finallyLoc;
                        return ContinueSentinel;
                    }

                    return this.complete(record);
                },

                complete: function(record, afterLoc) {
                    if (record.type === "throw") {
                        throw record.arg;
                    }

                    if (record.type === "break" ||
                        record.type === "continue") {
                        this.next = record.arg;
                    } else if (record.type === "return") {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if (record.type === "normal" && afterLoc) {
                        this.next = afterLoc;
                    }

                    return ContinueSentinel;
                },

                finish: function(finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);
                            return ContinueSentinel;
                        }
                    }
                },

                "catch": function(tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;
                            if (record.type === "throw") {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }
                            return thrown;
                        }
                    }

                    // The context.catch method must only be called with a location
                    // argument that corresponds to a known catch block.
                    throw new Error("illegal catch attempt");
                },

                delegateYield: function(iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };

                    if (this.method === "next") {
                        // Deliberately forget the last sent value so that we don't
                        // accidentally pass it on to the delegate.
                        this.arg = undefined;
                    }

                    return ContinueSentinel;
                }
            };
        })(
            // In sloppy mode, unbound `this` refers to the global object, fallback to
            // Function constructor if we're in global strict mode. That is sadly a form
            // of indirect eval which violates Content Security Policy.
            (function() { return this })() || Function("return this")()
        );


        /***/ }),
    /* 97 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_DocumentManager_DocumentManager__ = __webpack_require__(32);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DocumentModalComponent_DocumentModalComponent__ = __webpack_require__(119);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Components_FieldObjectsComponent_FieldObjectsComponent__ = __webpack_require__(125);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CollectionDataComponent=function(_IComponent){_inherits(CollectionDataComponent,_IComponent);function CollectionDataComponent(){_classCallCheck(this,CollectionDataComponent);var _this=_possibleConstructorReturn(this,(CollectionDataComponent.__proto__||Object.getPrototypeOf(CollectionDataComponent)).call(this));_this.DocumentManager=new __WEBPACK_IMPORTED_MODULE_2__managers_DocumentManager_DocumentManager__["a" /* default */]();_this.state={dataCollection:[],documentOpen:[],selectedDocument:'',createDModal:false};return _this;}_createClass(CollectionDataComponent,[{key:"componentWillReceiveProps",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(newProps){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(!(newProps.collection!==this.props.collection)){_context.next=11;break;}this.setState({documentOpen:[]});if(!(newProps.collection!=="empty")){_context.next=10;break;}_context.next=6;return this.DocumentManager.GetDocumentsByCollection(newProps.collection);case 6:response=_context.sent;if(!response.error){this.setState({dataCollection:response.data});}_context.next=11;break;case 10:this.setState({dataCollection:[]});case 11:_context.next=16;break;case 13:_context.prev=13;_context.t0=_context["catch"](0);this.notify("Error can't connect with the server.");case 16:case"end":return _context.stop();}}},_callee,this,[[0,13]]);}));function componentWillReceiveProps(_x){return _ref.apply(this,arguments);}return componentWillReceiveProps;}()},{key:"removeDocument",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(collection,key){var response,review;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;this.notify("Loading...",true);_context2.next=4;return this.DocumentManager.DeleteDocument(collection,key);case 4:response=_context2.sent;if(response.error){_context2.next=11;break;}this.notify(response.message);_context2.next=9;return this.DocumentManager.GetDocumentsByCollection(collection);case 9:review=_context2.sent;if(!review.error){this.setState({dataCollection:review.data});}case 11:_context2.next=16;break;case 13:_context2.prev=13;_context2.t0=_context2["catch"](0);this.notify("Error can't connect with the server.");case 16:case"end":return _context2.stop();}}},_callee2,this,[[0,13]]);}));function removeDocument(_x2,_x3){return _ref2.apply(this,arguments);}return removeDocument;}()},{key:"editDocumentModal",value:function editDocumentModal(document){this.setState({type:'edit'});this.setState({selectedDocument:JSON.stringify(document,null,'\t')});this.openModal();}},{key:"openModal",value:function openModal(){if(this.state.createDModal===true){this.setState({createDModal:false});}else{this.setState({createDModal:true});}}},{key:"expandDocument",value:function expandDocument(key){var aux=this.state.documentOpen;var index=aux.indexOf(key);if(index>-1){aux.splice(index,1);}else{aux.push(key);}this.setState({documentOpen:aux});}},{key:"createDocumentModal",value:function createDocumentModal(){this.setState({type:'create'});this.openModal();}},{key:"toggleOpened",value:function toggleOpened(key){var index=this.state.documentOpen.indexOf(key);return index>-1;}},{key:"closeModalD",value:function(){var _ref3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(e){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;this.setState({createDModal:false});if(!(e===true)){_context3.next=7;break;}_context3.next=5;return this.DocumentManager.GetDocumentsByCollection(this.props.collection);case 5:response=_context3.sent;if(!response.error){this.setState({dataCollection:response.data});}case 7:_context3.next=12;break;case 9:_context3.prev=9;_context3.t0=_context3["catch"](0);this.notify("Error can't connect with the server.");case 12:case"end":return _context3.stop();}}},_callee3,this,[[0,9]]);}));function closeModalD(_x4){return _ref3.apply(this,arguments);}return closeModalD;}()},{key:"render",value:function render(){var _this2=this;var dataCollection=this.state.dataCollection;if(this.props.collection!==''){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'documents'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:'subtitle'},"Data Collection - ",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,this.props.collection),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{onClick:function onClick(){return _this2.createDocumentModal();}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-primary'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-plus'})))),dataCollection.map(function(document,key1){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'column document',key:key1},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:'document-expand',onClick:function onClick(){return _this2.expandDocument(key1);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:_this2.toggleOpened(key1)?'icon has-text-danger':'icon has-text-info'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:_this2.toggleOpened(key1)?'typcn typcn-zoom-out-outline':'typcn typcn-zoom-in-outline'}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,'{'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul",{className:'document-data '+(_this2.toggleOpened(key1)?'is-opened':'')},Object.entries(document).map(function(_ref4){var _ref5=_slicedToArray(_ref4,2),key=_ref5[0],value=_ref5[1];if((typeof value==="undefined"?"undefined":_typeof(value))==='object'&&value!==null){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li",{key:key},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,key),":\xA0",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,'{'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul",null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__core_Components_FieldObjectsComponent_FieldObjectsComponent__["a" /* default */],{data_field:value})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,'}'));}else{if(typeof value==='boolean'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li",{key:key},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,key),":\xA0",value+'');}else{return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li",{key:key},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",null,key),":\xA0",value);}}})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong",{className:'last-brace '+(_this2.toggleOpened(key1)?'is-opened':'')},'}'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{onClick:function onClick(){return _this2.removeDocument(_this2.props.collection,document._id);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-danger'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-trash'}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{onClick:function onClick(){return _this2.editDocumentModal(document);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:'icon has-text-warning'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i",{className:'typcn typcn-edit'}))));}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DocumentModalComponent_DocumentModalComponent__["a" /* default */],{notify:this.props.notify,activeDM:this.state.createDModal,collection_name:this.props.collection,type:this.state.type,document:this.state.selectedDocument,activeFDM:this.closeModalD.bind(this)}));}else{return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'documents'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:'subtitle'},"Data Collection"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'column'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4",null,"No collection selected.")));}}}]);return CollectionDataComponent;}(__WEBPACK_IMPORTED_MODULE_5__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (CollectionDataComponent);

        /***/ }),
    /* 98 */
    /***/ (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(99);

        /***/ }),
    /* 99 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);
        var bind = __webpack_require__(33);
        var Axios = __webpack_require__(101);
        var defaults = __webpack_require__(18);

        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         * @return {Axios} A new instance of Axios
         */
        function createInstance(defaultConfig) {
            var context = new Axios(defaultConfig);
            var instance = bind(Axios.prototype.request, context);

            // Copy axios.prototype to instance
            utils.extend(instance, Axios.prototype, context);

            // Copy context to instance
            utils.extend(instance, context);

            return instance;
        }

// Create the default instance to be exported
        var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
        axios.Axios = Axios;

// Factory for creating new instances
        axios.create = function create(instanceConfig) {
            return createInstance(utils.merge(defaults, instanceConfig));
        };

// Expose Cancel & CancelToken
        axios.Cancel = __webpack_require__(37);
        axios.CancelToken = __webpack_require__(116);
        axios.isCancel = __webpack_require__(36);

// Expose all/spread
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__(117);

        module.exports = axios;

// Allow use of default import syntax in TypeScript
        module.exports.default = axios;


        /***/ }),
    /* 100 */
    /***/ (function(module, exports) {

        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
        module.exports = function (obj) {
            return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
        }

        function isBuffer (obj) {
            return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
        }

// For Node v0.10 support. Remove this eventually.
        function isSlowBuffer (obj) {
            return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
        }


        /***/ }),
    /* 101 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var defaults = __webpack_require__(18);
        var utils = __webpack_require__(2);
        var InterceptorManager = __webpack_require__(111);
        var dispatchRequest = __webpack_require__(112);

        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         */
        function Axios(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
                request: new InterceptorManager(),
                response: new InterceptorManager()
            };
        }

        /**
         * Dispatch a request
         *
         * @param {Object} config The config specific for this request (merged with this.defaults)
         */
        Axios.prototype.request = function request(config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof config === 'string') {
                config = utils.merge({
                    url: arguments[0]
                }, arguments[1]);
            }

            config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
            config.method = config.method.toLowerCase();

            // Hook up interceptors middleware
            var chain = [dispatchRequest, undefined];
            var promise = Promise.resolve(config);

            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });

            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });

            while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
            }

            return promise;
        };

// Provide aliases for supported request methods
        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function(url, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url
                }));
            };
        });

        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function(url, data, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url,
                    data: data
                }));
            };
        });

        module.exports = Axios;


        /***/ }),
    /* 102 */
    /***/ (function(module, exports) {

// shim for using process in browser
        var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout () {
            throw new Error('clearTimeout has not been defined');
        }
        (function () {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        } ())
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch(e){
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch(e){
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }


        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e){
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e){
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while(len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };

// v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function (name) { return [] }

        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function () { return '/' };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function() { return 0; };


        /***/ }),
    /* 103 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        module.exports = function normalizeHeaderName(headers, normalizedName) {
            utils.forEach(headers, function processHeader(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            });
        };


        /***/ }),
    /* 104 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var createError = __webpack_require__(35);

        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         */
        module.exports = function settle(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            // Note: status is not exposed by XDomainRequest
            if (!response.status || !validateStatus || validateStatus(response.status)) {
                resolve(response);
            } else {
                reject(createError(
                    'Request failed with status code ' + response.status,
                    response.config,
                    null,
                    response.request,
                    response
                ));
            }
        };


        /***/ }),
    /* 105 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Update an Error with the specified config, error code, and response.
         *
         * @param {Error} error The error to update.
         * @param {Object} config The config.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         * @returns {Error} The error.
         */
        module.exports = function enhanceError(error, config, code, request, response) {
            error.config = config;
            if (code) {
                error.code = code;
            }
            error.request = request;
            error.response = response;
            return error;
        };


        /***/ }),
    /* 106 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        function encode(val) {
            return encodeURIComponent(val).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, '+').
            replace(/%5B/gi, '[').
            replace(/%5D/gi, ']');
        }

        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @returns {string} The formatted url
         */
        module.exports = function buildURL(url, params, paramsSerializer) {
            /*eslint no-param-reassign:0*/
            if (!params) {
                return url;
            }

            var serializedParams;
            if (paramsSerializer) {
                serializedParams = paramsSerializer(params);
            } else if (utils.isURLSearchParams(params)) {
                serializedParams = params.toString();
            } else {
                var parts = [];

                utils.forEach(params, function serialize(val, key) {
                    if (val === null || typeof val === 'undefined') {
                        return;
                    }

                    if (utils.isArray(val)) {
                        key = key + '[]';
                    } else {
                        val = [val];
                    }

                    utils.forEach(val, function parseValue(v) {
                        if (utils.isDate(v)) {
                            v = v.toISOString();
                        } else if (utils.isObject(v)) {
                            v = JSON.stringify(v);
                        }
                        parts.push(encode(key) + '=' + encode(v));
                    });
                });

                serializedParams = parts.join('&');
            }

            if (serializedParams) {
                url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
            }

            return url;
        };


        /***/ }),
    /* 107 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
        var ignoreDuplicateOf = [
            'age', 'authorization', 'content-length', 'content-type', 'etag',
            'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
            'last-modified', 'location', 'max-forwards', 'proxy-authorization',
            'referer', 'retry-after', 'user-agent'
        ];

        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} headers Headers needing to be parsed
         * @returns {Object} Headers parsed into an object
         */
        module.exports = function parseHeaders(headers) {
            var parsed = {};
            var key;
            var val;
            var i;

            if (!headers) { return parsed; }

            utils.forEach(headers.split('\n'), function parser(line) {
                i = line.indexOf(':');
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));

                if (key) {
                    if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                        return;
                    }
                    if (key === 'set-cookie') {
                        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                    } else {
                        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                    }
                }
            });

            return parsed;
        };


        /***/ }),
    /* 108 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        module.exports = (
            utils.isStandardBrowserEnv() ?

                // Standard browser envs have full support of the APIs needed to test
                // whether the request URL is of the same origin as current location.
                (function standardBrowserEnv() {
                    var msie = /(msie|trident)/i.test(navigator.userAgent);
                    var urlParsingNode = document.createElement('a');
                    var originURL;

                    /**
                     * Parse a URL to discover it's components
                     *
                     * @param {String} url The URL to be parsed
                     * @returns {Object}
                     */
                    function resolveURL(url) {
                        var href = url;

                        if (msie) {
                            // IE needs attribute set twice to normalize properties
                            urlParsingNode.setAttribute('href', href);
                            href = urlParsingNode.href;
                        }

                        urlParsingNode.setAttribute('href', href);

                        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                        return {
                            href: urlParsingNode.href,
                            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                            host: urlParsingNode.host,
                            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                            hostname: urlParsingNode.hostname,
                            port: urlParsingNode.port,
                            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                                urlParsingNode.pathname :
                                '/' + urlParsingNode.pathname
                        };
                    }

                    originURL = resolveURL(window.location.href);

                    /**
                     * Determine if a URL shares the same origin as the current location
                     *
                     * @param {String} requestURL The URL to test
                     * @returns {boolean} True if URL shares the same origin, otherwise false
                     */
                    return function isURLSameOrigin(requestURL) {
                        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                        return (parsed.protocol === originURL.protocol &&
                            parsed.host === originURL.host);
                    };
                })() :

                // Non standard browser envs (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return function isURLSameOrigin() {
                        return true;
                    };
                })()
        );


        /***/ }),
    /* 109 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        function E() {
            this.message = 'String contains an invalid character';
        }
        E.prototype = new Error;
        E.prototype.code = 5;
        E.prototype.name = 'InvalidCharacterError';

        function btoa(input) {
            var str = String(input);
            var output = '';
            for (
                // initialize result and counter
                var block, charCode, idx = 0, map = chars;
                // if the next str index does not exist:
                //   change the mapping table to "="
                //   check if d has no fractional digits
                str.charAt(idx | 0) || (map = '=', idx % 1);
                // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
                output += map.charAt(63 & block >> 8 - idx % 1 * 8)
            ) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new E();
                }
                block = block << 8 | charCode;
            }
            return output;
        }

        module.exports = btoa;


        /***/ }),
    /* 110 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        module.exports = (
            utils.isStandardBrowserEnv() ?

                // Standard browser envs support document.cookie
                (function standardBrowserEnv() {
                    return {
                        write: function write(name, value, expires, path, domain, secure) {
                            var cookie = [];
                            cookie.push(name + '=' + encodeURIComponent(value));

                            if (utils.isNumber(expires)) {
                                cookie.push('expires=' + new Date(expires).toGMTString());
                            }

                            if (utils.isString(path)) {
                                cookie.push('path=' + path);
                            }

                            if (utils.isString(domain)) {
                                cookie.push('domain=' + domain);
                            }

                            if (secure === true) {
                                cookie.push('secure');
                            }

                            document.cookie = cookie.join('; ');
                        },

                        read: function read(name) {
                            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                            return (match ? decodeURIComponent(match[3]) : null);
                        },

                        remove: function remove(name) {
                            this.write(name, '', Date.now() - 86400000);
                        }
                    };
                })() :

                // Non standard browser env (web workers, react-native) lack needed support.
                (function nonStandardBrowserEnv() {
                    return {
                        write: function write() {},
                        read: function read() { return null; },
                        remove: function remove() {}
                    };
                })()
        );


        /***/ }),
    /* 111 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        function InterceptorManager() {
            this.handlers = [];
        }

        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        InterceptorManager.prototype.use = function use(fulfilled, rejected) {
            this.handlers.push({
                fulfilled: fulfilled,
                rejected: rejected
            });
            return this.handlers.length - 1;
        };

        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         */
        InterceptorManager.prototype.eject = function eject(id) {
            if (this.handlers[id]) {
                this.handlers[id] = null;
            }
        };

        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         */
        InterceptorManager.prototype.forEach = function forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
                if (h !== null) {
                    fn(h);
                }
            });
        };

        module.exports = InterceptorManager;


        /***/ }),
    /* 112 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);
        var transformData = __webpack_require__(113);
        var isCancel = __webpack_require__(36);
        var defaults = __webpack_require__(18);
        var isAbsoluteURL = __webpack_require__(114);
        var combineURLs = __webpack_require__(115);

        /**
         * Throws a `Cancel` if cancellation has been requested.
         */
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) {
                config.cancelToken.throwIfRequested();
            }
        }

        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         * @returns {Promise} The Promise to be fulfilled
         */
        module.exports = function dispatchRequest(config) {
            throwIfCancellationRequested(config);

            // Support baseURL config
            if (config.baseURL && !isAbsoluteURL(config.url)) {
                config.url = combineURLs(config.baseURL, config.url);
            }

            // Ensure headers exist
            config.headers = config.headers || {};

            // Transform request data
            config.data = transformData(
                config.data,
                config.headers,
                config.transformRequest
            );

            // Flatten headers
            config.headers = utils.merge(
                config.headers.common || {},
                config.headers[config.method] || {},
                config.headers || {}
            );

            utils.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                function cleanHeaderConfig(method) {
                    delete config.headers[method];
                }
            );

            var adapter = config.adapter || defaults.adapter;

            return adapter(config).then(function onAdapterResolution(response) {
                throwIfCancellationRequested(config);

                // Transform response data
                response.data = transformData(
                    response.data,
                    response.headers,
                    config.transformResponse
                );

                return response;
            }, function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);

                    // Transform response data
                    if (reason && reason.response) {
                        reason.response.data = transformData(
                            reason.response.data,
                            reason.response.headers,
                            config.transformResponse
                        );
                    }
                }

                return Promise.reject(reason);
            });
        };


        /***/ }),
    /* 113 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var utils = __webpack_require__(2);

        /**
         * Transform the data for a request or a response
         *
         * @param {Object|String} data The data to be transformed
         * @param {Array} headers The headers for the request or response
         * @param {Array|Function} fns A single function or Array of functions
         * @returns {*} The resulting transformed data
         */
        module.exports = function transformData(data, headers, fns) {
            /*eslint no-param-reassign:0*/
            utils.forEach(fns, function transform(fn) {
                data = fn(data, headers);
            });

            return data;
        };


        /***/ }),
    /* 114 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */
        module.exports = function isAbsoluteURL(url) {
            // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
            // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
            // by any combination of letters, digits, plus, period, or hyphen.
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };


        /***/ }),
    /* 115 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */
        module.exports = function combineURLs(baseURL, relativeURL) {
            return relativeURL
                ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
                : baseURL;
        };


        /***/ }),
    /* 116 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var Cancel = __webpack_require__(37);

        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @class
         * @param {Function} executor The executor function.
         */
        function CancelToken(executor) {
            if (typeof executor !== 'function') {
                throw new TypeError('executor must be a function.');
            }

            var resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
                resolvePromise = resolve;
            });

            var token = this;
            executor(function cancel(message) {
                if (token.reason) {
                    // Cancellation has already been requested
                    return;
                }

                token.reason = new Cancel(message);
                resolvePromise(token.reason);
            });
        }

        /**
         * Throws a `Cancel` if cancellation has been requested.
         */
        CancelToken.prototype.throwIfRequested = function throwIfRequested() {
            if (this.reason) {
                throw this.reason;
            }
        };

        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        CancelToken.source = function source() {
            var cancel;
            var token = new CancelToken(function executor(c) {
                cancel = c;
            });
            return {
                token: token,
                cancel: cancel
            };
        };

        module.exports = CancelToken;


        /***/ }),
    /* 117 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         * @returns {Function}
         */
        module.exports = function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        };


        /***/ }),
    /* 118 */
    /***/ (function(module, exports) {

        module.exports = {"mode":"dev","prod":{"api":"http://localhost/amdb/"},"dev":{"api":"http://localhost:4040/amdb/"}}

        /***/ }),
    /* 119 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_DocumentManager_DocumentManager__ = __webpack_require__(32);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DocumentModalComponent=function(_IComponent){_inherits(DocumentModalComponent,_IComponent);function DocumentModalComponent(){_classCallCheck(this,DocumentModalComponent);var _this=_possibleConstructorReturn(this,(DocumentModalComponent.__proto__||Object.getPrototypeOf(DocumentModalComponent)).call(this));_this.DocumentManager=new __WEBPACK_IMPORTED_MODULE_2__managers_DocumentManager_DocumentManager__["a" /* default */]();_this.state={activeDM:false,document:'',formAction:'Create'};_this.onSubmit=_this.onSubmit.bind(_this);return _this;}_createClass(DocumentModalComponent,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(newProps){this.setState({activeDM:newProps.activeDM});this.setState({document:newProps.document});this.setState({oldocument:newProps.document});if(newProps.type==='create'){this.setState({formAction:'Create'});this.setState({document:''});}else{this.setState({formAction:'Edit'});}}},{key:'closeModalD',value:function closeModalD(){this.setState({activeDM:false});this.setState({document:''});this.props.activeFDM(false);}},{key:'handleFields',value:function handleFields(event){var target=event.target;var value=target.type==='checkbox'?target.checked:target.value;var name=target.name;this.setState(_defineProperty({},name,value));}},{key:'onSubmit',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;event.preventDefault();this.notify("Loading...",true);response=void 0;if(!this.Json.validate(this.state.document)){_context.next=20;break;}if(!(this.props.type!==null&&this.props.type!==undefined)){_context.next=15;break;}if(!(this.props.type==='create')){_context.next=12;break;}_context.next=9;return this.DocumentManager.CreateDocument(this.props.collection_name,this.state.document);case 9:response=_context.sent;_context.next=15;break;case 12:_context.next=14;return this.DocumentManager.EditDocument(this.props.collection_name,this.state.document,JSON.parse(this.state.document)._id);case 14:response=_context.sent;case 15:if(!response.error){this.props.activeFDM(true);}else{this.props.activeFDM(false);}this.setState({document:''});this.notify(response.message);_context.next=21;break;case 20:this.notify("No valid json document.");case 21:_context.next=26;break;case 23:_context.prev=23;_context.t0=_context['catch'](0);this.notify("Error can't connect with the server.");case 26:case'end':return _context.stop();}}},_callee,this,[[0,23]]);}));function onSubmit(_x){return _ref.apply(this,arguments);}return onSubmit;}()},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{id:'documentModal',className:this.state.activeDM?'modal is-active':'modal'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'modal-background'}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'modal-card'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('header',{className:'modal-card-head'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'modal-card-title'},this.state.formAction,' Document'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{className:'delete','aria-label':'close',onClick:function onClick(){return _this2.closeModalD();}})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('section',{className:'modal-card-body'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('form',{onSubmit:this.onSubmit},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{className:'label'},'Document'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea',{className:'textarea',name:'document',placeholder:'e.g { "name": "John", "lastname": "Snow"}',value:this.state.document,onChange:this.handleFields.bind(this),rows:'20',required:true})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'help'},'This field is required')),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field is-grouped is-grouped-right'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{type:'submit',className:'button is-primary',value:this.state.formAction},this.state.formAction)),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('a',{className:'button is-light',onClick:function onClick(){return _this2.closeModalD();}},'Cancel')))))));}}]);return DocumentModalComponent;}(__WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (DocumentModalComponent);

        /***/ }),
    /* 120 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(38);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(122);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(124);
        /* unused harmony reexport MDCSnackbarFoundation */
        /**
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */







        class MDCSnackbar extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
            static attachTo(root) {
                return new MDCSnackbar(root);
            }

            show(data) {
                this.foundation_.show(data);
            }

            getDefaultFoundation() {
                const {
                    TEXT_SELECTOR,
                    ACTION_BUTTON_SELECTOR,
                } = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;
                const getText = () => this.root_.querySelector(TEXT_SELECTOR);
                const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);

                /* eslint brace-style: "off" */
                return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
                    addClass: (className) => this.root_.classList.add(className),
                    removeClass: (className) => this.root_.classList.remove(className),
                    setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
                    unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
                    setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
                    unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
                    setActionText: (text) => {getActionButton().textContent = text;},
                    setMessageText: (text) => {getText().textContent = text;},
                    setFocus: () => getActionButton().focus(),
                    visibilityIsHidden: () => document.hidden,
                    registerCapturedBlurHandler: (handler) => getActionButton().addEventListener('blur', handler, true),
                    deregisterCapturedBlurHandler: (handler) => getActionButton().removeEventListener('blur', handler, true),
                    registerVisibilityChangeHandler: (handler) => document.addEventListener('visibilitychange', handler),
                    deregisterVisibilityChangeHandler: (handler) => document.removeEventListener('visibilitychange', handler),
                    registerCapturedInteractionHandler: (evt, handler) =>
                        document.body.addEventListener(evt, handler, true),
                    deregisterCapturedInteractionHandler: (evt, handler) =>
                        document.body.removeEventListener(evt, handler, true),
                    registerActionClickHandler: (handler) => getActionButton().addEventListener('click', handler),
                    deregisterActionClickHandler: (handler) => getActionButton().removeEventListener('click', handler),
                    registerTransitionEndHandler:
                        (handler) => this.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
                    deregisterTransitionEndHandler:
                        (handler) => this.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
                    notifyShow: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SHOW_EVENT),
                    notifyHide: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.HIDE_EVENT),
                });
            }

            get dismissesOnAction() {
                return this.foundation_.dismissesOnAction();
            }

            set dismissesOnAction(dismissesOnAction) {
                this.foundation_.setDismissOnAction(dismissesOnAction);
            }
        }
        /* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbar;



        /***/ }),
    /* 121 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(39);
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */



        /**
         * @template F
         */
        class MDCComponent {
            /**
             * @param {!Element} root
             * @return {!MDCComponent}
             */
            static attachTo(root) {
                // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
                // returns an instantiated component with its root set to that element. Also note that in the cases of
                // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
                // from getDefaultFoundation().
                return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
            }

            /**
             * @param {!Element} root
             * @param {F=} foundation
             * @param {...?} args
             */
            constructor(root, foundation = undefined, ...args) {
                /** @protected {!Element} */
                this.root_ = root;
                this.initialize(...args);
                // Note that we initialize foundation here and not within the constructor's default param so that
                // this.root_ is defined and can be used within the foundation class.
                /** @protected {!F} */
                this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                this.foundation_.init();
                this.initialSyncWithDOM();
            }

            initialize(/* ...args */) {
                // Subclasses can override this to do any additional setup work that would be considered part of a
                // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
                // initialized. Any additional arguments besides root and foundation will be passed in here.
            }

            /**
             * @return {!F} foundation
             */
            getDefaultFoundation() {
                // Subclasses must override this method to return a properly configured foundation class for the
                // component.
                throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
                    'foundation class');
            }

            initialSyncWithDOM() {
                // Subclasses should override this method if they need to perform work to synchronize with a host DOM
                // object. An example of this would be a form control wrapper that needs to synchronize its internal state
                // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
                // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
            }

            destroy() {
                // Subclasses may implement this method to release any resources / deregister any listeners they have
                // attached. An example of this might be deregistering a resize event from the window object.
                this.foundation_.destroy();
            }

            /**
             * Wrapper method to add an event listener to the component's root element. This is most useful when
             * listening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */
            listen(evtType, handler) {
                this.root_.addEventListener(evtType, handler);
            }

            /**
             * Wrapper method to remove an event listener to the component's root element. This is most useful when
             * unlistening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */
            unlisten(evtType, handler) {
                this.root_.removeEventListener(evtType, handler);
            }

            /**
             * Fires a cross-browser-compatible custom event from the component root of the given type,
             * with the given data.
             * @param {string} evtType
             * @param {!Object} evtData
             * @param {boolean=} shouldBubble
             */
            emit(evtType, evtData, shouldBubble = false) {
                let evt;
                if (typeof CustomEvent === 'function') {
                    evt = new CustomEvent(evtType, {
                        detail: evtData,
                        bubbles: shouldBubble,
                    });
                } else {
                    evt = document.createEvent('CustomEvent');
                    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                }

                this.root_.dispatchEvent(evt);
            }
        }

        /* harmony default export */ __webpack_exports__["a"] = (MDCComponent);


        /***/ }),
    /* 122 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(38);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(123);
        /**
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */




        class MDCSnackbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
            static get cssClasses() {
                return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
            }

            static get strings() {
                return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
            }

            static get defaultAdapter() {
                return {
                    addClass: (/* className: string */) => {},
                    removeClass: (/* className: string */) => {},
                    setAriaHidden: () => {},
                    unsetAriaHidden: () => {},
                    setActionAriaHidden: () => {},
                    unsetActionAriaHidden: () => {},
                    setActionText: (/* actionText: string */) => {},
                    setMessageText: (/* message: string */) => {},
                    setFocus: () => {},
                    visibilityIsHidden: () => /* boolean */ false,
                    registerCapturedBlurHandler: (/* handler: EventListener */) => {},
                    deregisterCapturedBlurHandler: (/* handler: EventListener */) => {},
                    registerVisibilityChangeHandler: (/* handler: EventListener */) => {},
                    deregisterVisibilityChangeHandler: (/* handler: EventListener */) => {},
                    registerCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
                    deregisterCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
                    registerActionClickHandler: (/* handler: EventListener */) => {},
                    deregisterActionClickHandler: (/* handler: EventListener */) => {},
                    registerTransitionEndHandler: (/* handler: EventListener */) => {},
                    deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
                    notifyShow: () => {},
                    notifyHide: () => {},
                };
            }

            get active() {
                return this.active_;
            }

            constructor(adapter) {
                super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));

                this.active_ = false;
                this.actionWasClicked_ = false;
                this.dismissOnAction_ = true;
                this.firstFocus_ = true;
                this.pointerDownRecognized_ = false;
                this.snackbarHasFocus_ = false;
                this.snackbarData_ = null;
                this.queue_ = [];
                this.actionClickHandler_ = () => {
                    this.actionWasClicked_ = true;
                    this.invokeAction_();
                };
                this.visibilitychangeHandler_ = () => {
                    clearTimeout(this.timeoutId_);
                    this.snackbarHasFocus_ = true;

                    if (!this.adapter_.visibilityIsHidden()) {
                        setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
                    }
                };
                this.interactionHandler_ = (evt) => {
                    if (evt.type == 'touchstart' || evt.type == 'mousedown') {
                        this.pointerDownRecognized_ = true;
                    }
                    this.handlePossibleTabKeyboardFocus_(evt);

                    if (evt.type == 'focus') {
                        this.pointerDownRecognized_ = false;
                    }
                };
                this.blurHandler_ = () => {
                    clearTimeout(this.timeoutId_);
                    this.snackbarHasFocus_ = false;
                    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
                };
            }

            init() {
                this.adapter_.registerActionClickHandler(this.actionClickHandler_);
                this.adapter_.setAriaHidden();
                this.adapter_.setActionAriaHidden();
            }

            destroy() {
                this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
                this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
                this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
                ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
                    this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
                });
            }

            dismissesOnAction() {
                return this.dismissOnAction_;
            }

            setDismissOnAction(dismissOnAction) {
                this.dismissOnAction_ = !!dismissOnAction;
            }

            show(data) {
                if (!data) {
                    throw new Error(
                        'Please provide a data object with at least a message to display.');
                }
                if (!data.message) {
                    throw new Error('Please provide a message to be displayed.');
                }
                if (data.actionHandler && !data.actionText) {
                    throw new Error('Please provide action text with the handler.');
                }
                if (this.active) {
                    this.queue_.push(data);
                    return;
                }
                clearTimeout(this.timeoutId_);
                this.snackbarData_ = data;
                this.firstFocus_ = true;
                this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
                this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
                ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
                    this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
                });

                const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

                this.adapter_.setMessageText(this.snackbarData_.message);

                if (this.snackbarData_.multiline) {
                    this.adapter_.addClass(MULTILINE);
                    if (this.snackbarData_.actionOnBottom) {
                        this.adapter_.addClass(ACTION_ON_BOTTOM);
                    }
                }

                if (this.snackbarData_.actionHandler) {
                    this.adapter_.setActionText(this.snackbarData_.actionText);
                    this.actionHandler_ = this.snackbarData_.actionHandler;
                    this.setActionHidden_(false);
                } else {
                    this.setActionHidden_(true);
                    this.actionHandler_ = null;
                    this.adapter_.setActionText(null);
                }

                this.active_ = true;
                this.adapter_.addClass(ACTIVE);
                this.adapter_.unsetAriaHidden();
                this.adapter_.notifyShow();

                this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
            }

            handlePossibleTabKeyboardFocus_() {
                const hijackFocus =
                    this.firstFocus_ && !this.pointerDownRecognized_;

                if (hijackFocus) {
                    this.setFocusOnAction_();
                }

                this.firstFocus_ = false;
            }

            setFocusOnAction_() {
                this.adapter_.setFocus();
                this.snackbarHasFocus_ = true;
                this.firstFocus_ = false;
            }

            invokeAction_() {
                try {
                    if (!this.actionHandler_) {
                        return;
                    }

                    this.actionHandler_();
                } finally {
                    if (this.dismissOnAction_) {
                        this.cleanup_();
                    }
                }
            }

            cleanup_() {
                const allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

                if (allowDismissal) {
                    const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

                    this.adapter_.removeClass(ACTIVE);

                    const handler = () => {
                        clearTimeout(this.timeoutId_);
                        this.adapter_.deregisterTransitionEndHandler(handler);
                        this.adapter_.removeClass(MULTILINE);
                        this.adapter_.removeClass(ACTION_ON_BOTTOM);
                        this.setActionHidden_(true);
                        this.adapter_.setAriaHidden();
                        this.active_ = false;
                        this.snackbarHasFocus_ = false;
                        this.adapter_.notifyHide();
                        this.showNext_();
                    };

                    this.adapter_.registerTransitionEndHandler(handler);
                }
            }

            showNext_() {
                if (!this.queue_.length) {
                    return;
                }
                this.show(this.queue_.shift());
            }

            setActionHidden_(isHidden) {
                if (isHidden) {
                    this.adapter_.setActionAriaHidden();
                } else {
                    this.adapter_.unsetActionAriaHidden();
                }
            }
        }
        /* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbarFoundation;



        /***/ }),
    /* 123 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /**
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const cssClasses = {
            ROOT: 'mdc-snackbar',
            TEXT: 'mdc-snackbar__text',
            ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
            ACTION_BUTTON: 'mdc-snackbar__action-button',
            ACTIVE: 'mdc-snackbar--active',
            MULTILINE: 'mdc-snackbar--multiline',
            ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom',
        };
        /* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


        const strings = {
            TEXT_SELECTOR: '.mdc-snackbar__text',
            ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
            ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
            SHOW_EVENT: 'MDCSnackbar:show',
            HIDE_EVENT: 'MDCSnackbar:hide',
        };
        /* harmony export (immutable) */ __webpack_exports__["c"] = strings;


        const numbers = {
            MESSAGE_TIMEOUT: 2750,
        };
        /* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



        /***/ }),
    /* 124 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* unused harmony export transformStyleProperties */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCorrectEventName; });
        /* unused harmony export getCorrectPropertyName */
        /**
         * @license
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /**
         * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
         */
        let VendorPropertyMapType;

        /** @const {Object<string, !VendorPropertyMapType>} */
        const eventTypeMap = {
            'animationstart': {
                noPrefix: 'animationstart',
                webkitPrefix: 'webkitAnimationStart',
                styleProperty: 'animation',
            },
            'animationend': {
                noPrefix: 'animationend',
                webkitPrefix: 'webkitAnimationEnd',
                styleProperty: 'animation',
            },
            'animationiteration': {
                noPrefix: 'animationiteration',
                webkitPrefix: 'webkitAnimationIteration',
                styleProperty: 'animation',
            },
            'transitionend': {
                noPrefix: 'transitionend',
                webkitPrefix: 'webkitTransitionEnd',
                styleProperty: 'transition',
            },
        };

        /** @const {Object<string, !VendorPropertyMapType>} */
        const cssPropertyMap = {
            'animation': {
                noPrefix: 'animation',
                webkitPrefix: '-webkit-animation',
            },
            'transform': {
                noPrefix: 'transform',
                webkitPrefix: '-webkit-transform',
            },
            'transition': {
                noPrefix: 'transition',
                webkitPrefix: '-webkit-transition',
            },
        };

        /**
         * @param {!Object} windowObj
         * @return {boolean}
         */
        function hasProperShape(windowObj) {
            return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
        }

        /**
         * @param {string} eventType
         * @return {boolean}
         */
        function eventFoundInMaps(eventType) {
            return (eventType in eventTypeMap || eventType in cssPropertyMap);
        }

        /**
         * @param {string} eventType
         * @param {!Object<string, !VendorPropertyMapType>} map
         * @param {!Element} el
         * @return {string}
         */
        function getJavaScriptEventName(eventType, map, el) {
            return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
        }

        /**
         * Helper function to determine browser prefix for CSS3 animation events
         * and property names.
         * @param {!Object} windowObj
         * @param {string} eventType
         * @return {string}
         */
        function getAnimationName(windowObj, eventType) {
            if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
                return eventType;
            }

            const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
                eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
            );
            const el = windowObj['document']['createElement']('div');
            let eventName = '';

            if (map === eventTypeMap) {
                eventName = getJavaScriptEventName(eventType, map, el);
            } else {
                eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
            }

            return eventName;
        }

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

        const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

        /**
         * @param {!Object} windowObj
         * @param {string} eventType
         * @return {string}
         */
        function getCorrectEventName(windowObj, eventType) {
            return getAnimationName(windowObj, eventType);
        }

        /**
         * @param {!Object} windowObj
         * @param {string} eventType
         * @return {string}
         */
        function getCorrectPropertyName(windowObj, eventType) {
            return getAnimationName(windowObj, eventType);
        }




        /***/ }),
    /* 125 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FieldObjectsComponent=function(_Component){_inherits(FieldObjectsComponent,_Component);function FieldObjectsComponent(){_classCallCheck(this,FieldObjectsComponent);var _this=_possibleConstructorReturn(this,(FieldObjectsComponent.__proto__||Object.getPrototypeOf(FieldObjectsComponent)).call(this));_this.state={data:[]};return _this;}_createClass(FieldObjectsComponent,[{key:'componentWillMount',value:function componentWillMount(){this.setState({data:this.props.data_field});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,Object.entries(this.state.data).map(function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];if((typeof value==='undefined'?'undefined':_typeof(value))==='object'&&value!==null){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:key},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong',null,key),':\xA0',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong',null,'{'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FieldObjectsComponent,{data_field:value})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong',null,'}'));}else{return typeof value==='boolean'?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:key},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong',null,key),':\xA0',value+''):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:key},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('strong',null,key),':\xA0',value);}}));}}]);return FieldObjectsComponent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (FieldObjectsComponent);

        /***/ }),
    /* 126 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_CollectionManager_CollectionManager__ = __webpack_require__(20);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CollectionCreateModalComponent=function(_IComponent){_inherits(CollectionCreateModalComponent,_IComponent);function CollectionCreateModalComponent(){_classCallCheck(this,CollectionCreateModalComponent);var _this=_possibleConstructorReturn(this,(CollectionCreateModalComponent.__proto__||Object.getPrototypeOf(CollectionCreateModalComponent)).call(this));_this.CollectionManager=new __WEBPACK_IMPORTED_MODULE_2__managers_CollectionManager_CollectionManager__["a" /* default */]();_this.state={active:false,name:'',oldname:'',formAction:'Create'};_this.onSubmit=_this.onSubmit.bind(_this);return _this;}_createClass(CollectionCreateModalComponent,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(newProps){this.setState({active:newProps.active});this.setState({name:''});if(newProps.type!=='create'){this.setState({name:newProps.collection_name});this.setState({formAction:'Rename'});}else{this.setState({formAction:'Create'});this.setState({name:''});}this.setState({oldname:newProps.collection_name});}},{key:'closeModal',value:function closeModal(){this.setState({active:false});this.setState({name:''});this.props.activeF(false);}},{key:'handleFields',value:function handleFields(event){var target=event.target;var value=target.type==='checkbox'?target.checked:target.value;var name=target.name;this.setState(_defineProperty({},name,value));}},{key:'onSubmit',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;event.preventDefault();this.notify("Loading...",true);response=void 0;if(!(this.props.type!==null&&this.props.type!==undefined)){_context.next=14;break;}if(!(this.props.type==='create')){_context.next=11;break;}_context.next=8;return this.CollectionManager.CreateCollection(this.state.name);case 8:response=_context.sent;_context.next=14;break;case 11:_context.next=13;return this.CollectionManager.RenameCollection(this.state.oldname,this.state.name);case 13:response=_context.sent;case 14:if(!response.error){this.props.activeF(true);}else{this.props.activeF(false);}this.setState({name:''});this.notify(response.message);_context.next=22;break;case 19:_context.prev=19;_context.t0=_context['catch'](0);this.notify("Error can't connect with the server.");case 22:case'end':return _context.stop();}}},_callee,this,[[0,19]]);}));function onSubmit(_x){return _ref.apply(this,arguments);}return onSubmit;}()},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{id:'collectionModal',className:this.state.active?'modal is-active':'modal'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'modal-background'}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'modal-card'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('header',{className:'modal-card-head'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'modal-card-title'},this.state.formAction,' Collection'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{className:'delete','aria-label':'close',onClick:function onClick(){return _this2.closeModal();}})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('section',{className:'modal-card-body'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('form',{onSubmit:this.onSubmit},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{className:'label'},'Name'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input',{className:'input',type:'text',name:'name',placeholder:'Collection name',value:this.state.name,onChange:this.handleFields.bind(this),required:true})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'help'},'This field is required')),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field is-grouped is-grouped-right'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{type:'submit',className:'button is-primary',value:this.state.formAction},this.state.formAction)),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('p',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('a',{className:'button is-light',onClick:function onClick(){return _this2.closeModal();}},'Cancel')))))));}}]);return CollectionCreateModalComponent;}(__WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (CollectionCreateModalComponent);

        /***/ }),
    /* 127 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Json_Json__ = __webpack_require__(40);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Components_NotificationsComponent_NotificationsComponent__ = __webpack_require__(19);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managers_ImportExportManager_ImportExportManager__ = __webpack_require__(21);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImportComponent_ImportComponent__ = __webpack_require__(128);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ExportComponent_ExportComponent__ = __webpack_require__(129);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MainComponent=function(_Component){_inherits(MainComponent,_Component);function MainComponent(){_classCallCheck(this,MainComponent);var _this=_possibleConstructorReturn(this,(MainComponent.__proto__||Object.getPrototypeOf(MainComponent)).call(this));_this.state={typeNotify:false,active:''};_this.changeType=_this.changeType.bind(_this);return _this;}_createClass(MainComponent,[{key:"changeType",value:function changeType(value){this.setState({typeNotify:value});}},{key:"handleSelectActive",value:function handleSelectActive(value){this.setState({active:value});}},{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'import-export'},this.state.active==='import'?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'view-import'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'arrow-back'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{onClick:function onClick(){return _this2.handleSelectActive('');}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:'typcn typcn-arrow-left'}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImportComponent_ImportComponent__["a" /* default */],{notify:this.changeType})):this.state.active==='export'?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'view-export'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'arrow-back'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{onClick:function onClick(){return _this2.handleSelectActive('');}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:'typcn typcn-arrow-left'}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ExportComponent_ExportComponent__["a" /* default */],{notify:this.changeType})):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'selection'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'column is-12'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:'subtitle'},"Please select an option:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'columns'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'column is-6 has-text-centered'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{onClick:function onClick(){return _this2.handleSelectActive('import');}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'select-import'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:'icon is-large'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:'typcn typcn-cloud-storage-outline'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",null,"Import")))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'column is-6 has-text-centered'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{onClick:function onClick(){return _this2.handleSelectActive('export');}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:'select-export'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:'icon is-large'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i",{className:'typcn typcn-export-outline'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",null,"Export")))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__core_Components_NotificationsComponent_NotificationsComponent__["a" /* default */],{typeNotify:this.state.typeNotify}));}}]);return MainComponent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (MainComponent);

        /***/ }),
    /* 128 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_ImportExportManager_ImportExportManager__ = __webpack_require__(21);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ImportComponent=function(_IComponent){_inherits(ImportComponent,_IComponent);function ImportComponent(){_classCallCheck(this,ImportComponent);var _this=_possibleConstructorReturn(this,(ImportComponent.__proto__||Object.getPrototypeOf(ImportComponent)).call(this));_this.state={fileName:"",FileHandle:{},collection_show:[],data:'',importMode:false};_this.fileReader;_this.IEManager=new __WEBPACK_IMPORTED_MODULE_2__managers_ImportExportManager_ImportExportManager__["a" /* default */]();_this.fileChange=_this.fileChange.bind(_this);_this.onSubmit=_this.onSubmit.bind(_this);_this.showFileData=_this.showFileData.bind(_this);return _this;}_createClass(ImportComponent,[{key:'vJson',value:function vJson(contentFile){if(this.Json.validate(contentFile)){this.notify('Valid Json.');this.setState({collection_show:this.Json.dataForImport(contentFile)});this.setState({data:contentFile});}else{this.notify('Invalid Json.');this.setState({collection_show:[]});}}},{key:'showFileData',value:function showFileData(e){var contentFile=this.fileReader.result;this.vJson(contentFile);}},{key:'fileChange',value:function fileChange(event){this.fileReader=new FileReader();this.fileReader.onloadend=this.showFileData;this.fileReader.readAsText(event.target.files[0]);this.setState({fileName:event.target.files[0].name});this.setState({FileHandle:event.target.files[0]});}},{key:'handleOptionChangeMode',value:function handleOptionChangeMode(event){this.setState({importMode:!this.state.importMode});if(this.state.importMode===true){this.setState({collection_show:[]});}}},{key:'codeChange',value:function codeChange(event){if(event.target.value!==''){this.vJson(event.target.value);}}},{key:'onSubmit',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;event.preventDefault();this.notify("Loading...",true);response=void 0;if(!(this.state.collection_show!==null&&this.state.collection_show!==undefined&&this.state.data!=='')){_context.next=11;break;}_context.next=7;return this.IEManager.ImportData(this.state.data);case 7:response=_context.sent;if(response.error===false){this.setState({fileName:""});this.setState({FileHandle:{}});this.setState({collection_show:[]});this.setState({data:''});this.notify(response.message);document.getElementById("importForm").reset();}else{this.notify(response.message);}_context.next=13;break;case 11:this.notify("No correct data for import.");document.getElementById("importForm").reset();case 13:_context.next=18;break;case 15:_context.prev=15;_context.t0=_context['catch'](0);this.notify("Error can't connect with the server.");case 18:case'end':return _context.stop();}}},_callee,this,[[0,15]]);}));function onSubmit(_x){return _ref.apply(this,arguments);}return onSubmit;}()},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'columns'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'column is-5'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('h1',{className:'subtitle'},'Import Database'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('form',{id:'importForm',onSubmit:this.onSubmit},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input',{id:'mode1',className:'is-checkradio',type:'radio',name:'mode',checked:this.state.importMode===false,onChange:this.handleOptionChangeMode.bind(this)}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{htmlFor:'mode1'},'File'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input',{id:'mode2',className:'is-checkradio',type:'radio',name:'mode',checked:this.state.importMode===true,onChange:this.handleOptionChangeMode.bind(this)}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{htmlFor:'mode2'},'Code')),this.state.importMode===false?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{className:'label'},'Upload File'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'file has-name is-fullwidth'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{className:'file-label'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input',{className:'file-input',type:'file',name:'resume',accept:'.json',onChange:this.fileChange}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:'file-cta'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:'file-icon icon'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i',{className:'typcn typcn-cloud-storage'})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:'file-label'},'Choose a file\u2026')),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:'file-name'},this.state.fileName))))):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('label',{className:'label'},'Write Code'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'control'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea',{className:'textarea',name:'resume',placeholder:'e.g. { users: [{\'name\': \'Alex\', }], houses: [...] }',onChange:this.codeChange.bind(this)}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'field is-grouped is-grouped-right'}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'controls'},this.state.collection_show.length>0?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input',{className:'button is-primary',type:'submit',value:'Import'}):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('button',{className:'button is-primary',value:'Import',disabled:true},' Import')))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'column is-3'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('h1',{className:'subtitle'},'Data View'),this.state.collection_show.length>0?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'data-right'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('ul',{className:'data-right-collections'},this.state.collection_show.map(function(doc,key){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('li',{className:'data-right-collections-view',key:key},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'collection-name'},doc.name,':\xA0'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'collection-total'},doc.length));}))):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('h6',null,'Not data to show.'))));}}]);return ImportComponent;}(__WEBPACK_IMPORTED_MODULE_3__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (ImportComponent);

        /***/ }),
    /* 129 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Components_IComponent_IComponent__ = __webpack_require__(7);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managers_ImportExportManager_ImportExportManager__ = __webpack_require__(21);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managers_CollectionManager_CollectionManager__ = __webpack_require__(20);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_FileDownload_FileDownload__ = __webpack_require__(130);
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ExportComponent=function(_IComponent){_inherits(ExportComponent,_IComponent);function ExportComponent(){_classCallCheck(this,ExportComponent);var _this=_possibleConstructorReturn(this,(ExportComponent.__proto__||Object.getPrototypeOf(ExportComponent)).call(this));_this.state={data:[],collections:[]};_this.fileDownload=new __WEBPACK_IMPORTED_MODULE_5__core_FileDownload_FileDownload__["a" /* default */]();_this.IEManager=new __WEBPACK_IMPORTED_MODULE_3__managers_ImportExportManager_ImportExportManager__["a" /* default */]();_this.CollectionManager=new __WEBPACK_IMPORTED_MODULE_4__managers_CollectionManager_CollectionManager__["a" /* default */]();_this.onSubmit=_this.onSubmit.bind(_this);return _this;}_createClass(ExportComponent,[{key:"componentDidMount",value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return this.CollectionManager.GetAllCollections();case 3:response=_context.sent;if(!response.error){this.setState({collections:response.data});}_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);this.notify("Error can't connect with the server.");case 10:case"end":return _context.stop();}}},_callee,this,[[0,7]]);}));function componentDidMount(){return _ref.apply(this,arguments);}return componentDidMount;}()},{key:"handleSelectCollections",value:function handleSelectCollections(event){var aux=this.state.data;if(event.target.checked===true){aux.push(event.target.name);}else{var index=aux.indexOf(event.target.name);aux.splice(index,1);console.log(aux);}this.setState({data:aux});}},{key:"onSubmit",value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(event){var response;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;event.preventDefault();this.notify("Loading...",true);response=void 0;if(!(this.state.data.length>0)){_context2.next=11;break;}_context2.next=7;return this.IEManager.ExportData(this.state.data);case 7:response=_context2.sent;if(response.error===false){this.fileDownload.Download(JSON.stringify(response.data),'database.json');this.setState({data:[]});document.getElementById("exportForm").reset();this.notify('Export data successful.');}else{this.notify(response.message);}_context2.next=12;break;case 11:this.notify("No correct data for export.");case 12:_context2.next=17;break;case 14:_context2.prev=14;_context2.t0=_context2["catch"](0);this.notify("Error can't connect with the server.");case 17:case"end":return _context2.stop();}}},_callee2,this,[[0,14]]);}));function onSubmit(_x){return _ref2.apply(this,arguments);}return onSubmit;}()},{key:"render",value:function render(){var _this2=this;var collections=this.state.collections;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'export-module'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:'subtitle'},"Export Database"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'columns'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form",{id:'exportForm',onSubmit:this.onSubmit},collections.map(function(collection,index){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'field',key:index},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input",{className:"is-checkradio",id:'cexport_'+index,type:"checkbox",name:collection.name,onChange:_this2.handleSelectCollections.bind(_this2)}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label",{htmlFor:'cexport_'+index},collection.name));}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:'controls'},this.state.data.length>0?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input",{className:'button is-primary',type:"submit",value:'Export'}):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button",{className:'button is-primary',type:"button",disabled:true},"Export")))));}}]);return ExportComponent;}(__WEBPACK_IMPORTED_MODULE_2__core_Components_IComponent_IComponent__["a" /* default */]);/* harmony default export */ __webpack_exports__["a"] = (ExportComponent);

        /***/ }),
    /* 130 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var FileDownload=function(){function FileDownload(){_classCallCheck(this,FileDownload);}/**
         *   Download function
         *   @param {Blob} Uri - File for download
         *   @param {String} Filename - Name of the file
         */_createClass(FileDownload,[{key:"Download",value:function Download(data,filename){try{var element=document.createElement("a");var blob=new Blob([data],{type:"text/json;charset=utf-8"});element.href=URL.createObjectURL(blob);element.download=filename;element.click();document.body.removeChild(element);}catch(e){console.log('Error');}}}]);return FileDownload;}();/* harmony default export */ __webpack_exports__["a"] = (FileDownload);

        /***/ }),
    /* 131 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (immutable) */ __webpack_exports__["a"] = register;
        /* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
        var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
            window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
            var publicUrl=new URL("",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
                return;}window.addEventListener('load',function(){var swUrl=""+'/service-worker.js';if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
                checkValidServiceWorker(swUrl);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://goo.gl/SC7cgQ');});}else{// Is not local host. Just register service worker
                registerValidSW(swUrl);}});}}function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
            fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
                if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
                    navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
                    registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

        /***/ })
    /******/ ]);
//# sourceMappingURL=main.068c6bcc.js.map