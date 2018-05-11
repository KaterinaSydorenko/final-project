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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(25);

var _RegistrationForm = __webpack_require__(26);

var _SignInForm = __webpack_require__(27);

var _MobNav = __webpack_require__(28);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderComponent = exports.HeaderComponent = function (_React$Component) {
    _inherits(HeaderComponent, _React$Component);

    function HeaderComponent(props) {
        _classCallCheck(this, HeaderComponent);

        var _this = _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this, props));

        _this.state = {
            registrationOn: false,
            signIn: false,
            navList: false
        };
        return _this;
    }

    _createClass(HeaderComponent, [{
        key: 'toggleRegister',
        value: function toggleRegister() {
            this.setState(function (state) {
                state.registrationOn = !state.registrationOn;
                return state;
            });
        }
    }, {
        key: 'toggleSignIn',
        value: function toggleSignIn() {
            this.setState(function (state) {
                state.signIn = !state.signIn;
                return state;
            });
        }
    }, {
        key: 'mobNavList',
        value: function mobNavList() {
            this.setState(function (state) {
                state.navList = !state.navList;
                return state;
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.registrationOn) {
                return React.createElement(_RegistrationForm.RegistrationForm, null);
            }
            if (this.state.signIn) {
                return React.createElement(_SignInForm.SignInForm, null);
            }

            if (this.state.navList) {
                return React.createElement(_MobNav.MobNav, { className: 'mob' });
            }
            return React.createElement(
                'div',
                { className: 'header-mob' },
                React.createElement(
                    'button',
                    { className: "btn-toggle", onClick: this.mobNavList.bind(this) },
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    ),
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    ),
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'icons' },
                    React.createElement(
                        'div',
                        { className: 'user-icon-search' },
                        ' '
                    ),
                    React.createElement(
                        'div',
                        { className: 'user-icon-like' },
                        ' '
                    ),
                    React.createElement(
                        'div',
                        { className: 'user-icon-bag' },
                        ' '
                    ),
                    React.createElement(
                        'div',
                        { className: 'user-icon-login', onClick: this.toggleSignIn.bind(this) },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'header' },
                    React.createElement(
                        'div',
                        { className: 'top-header' },
                        React.createElement(
                            'div',
                            { className: 'top-header__contain ' },
                            React.createElement(
                                'div',
                                { className: 'top-header__left' },
                                'Currency'
                            ),
                            React.createElement(
                                'div',
                                { className: 'top-header__right ' },
                                React.createElement(
                                    'div',
                                    { className: 'header-form' },
                                    React.createElement(
                                        'div',
                                        { className: 'register-form', onClick: this.toggleRegister.bind(this) },
                                        'Register'
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'signIn', onClick: this.toggleSignIn.bind(this) },
                                        'Sign in'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'cart-counter' },
                                    React.createElement('div', { className: 'cart-img' }),
                                    React.createElement(
                                        'div',
                                        null,
                                        'empty'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'main-header__content' },
                        React.createElement(
                            'h3',
                            { className: 'header__left' },
                            'AVENUE FASHION'
                        ),
                        React.createElement(
                            'div',
                            { className: 'header__right' },
                            React.createElement(
                                'ul',
                                { className: 'nav-list' },
                                React.createElement(
                                    'li',
                                    null,
                                    'MEN',
                                    React.createElement(
                                        'div',
                                        { className: 'arrow' },
                                        '\u02C5'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'WOMEN',
                                    React.createElement(
                                        'div',
                                        { className: 'arrow' },
                                        '\u02C5'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'THE BRAND'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'LOCAL STORAGE',
                                    React.createElement(
                                        'div',
                                        { className: 'arrow' },
                                        '\u02C5'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'LOOK BOOK',
                                    React.createElement(
                                        'div',
                                        { className: 'arrow' },
                                        '\u02C5'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'search-form' },
                                React.createElement('input', { type: 'text', placeholder: 'Search', className: 'search-form__content' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'header-image' },
                        React.createElement(
                            'div',
                            { className: 'background-image' },
                            ' '
                        ),
                        React.createElement(
                            'div',
                            { className: 'background-title' },
                            React.createElement(
                                'h1',
                                null,
                                'OUR LOOKBOOK'
                            ),
                            React.createElement(
                                'h2',
                                null,
                                'LATEST POSTS - MEN&WOMEN'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HeaderComponent;
}(React.Component);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

var _ProductOption = __webpack_require__(39);

var _ProductDescription = __webpack_require__(41);

__webpack_require__(44);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductView = exports.ProductView = function (_React$Component) {
    _inherits(ProductView, _React$Component);

    function ProductView() {
        _classCallCheck(this, ProductView);

        return _possibleConstructorReturn(this, (ProductView.__proto__ || Object.getPrototypeOf(ProductView)).apply(this, arguments));
    }

    _createClass(ProductView, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: 'content-product' },
                React.createElement(_ProductOption.ProductOption, null),
                React.createElement(_ProductDescription.ProductDescription, null)
            );
        }
    }]);

    return ProductView;
}(React.Component);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _App = __webpack_require__(24);

var _ProductView = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// render(
//     <Router>
//         <div>
//             <Route exact path={'/main'} component={App}/>
//             <Route path={'/product'} component={ProductView}/>
//         </div>
//     </Router>,
//     document.getElementById('root')
// );

(0, _reactDom.render)(React.createElement(_App.App, null), document.getElementById('root'));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

var _HeaderComponent = __webpack_require__(1);

var _FooterComponent = __webpack_require__(30);

var _ContentComponent = __webpack_require__(32);

var _ProductView = __webpack_require__(3);

__webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: 'content-wrapper__page' },
                React.createElement(_HeaderComponent.HeaderComponent, null),
                React.createElement(_ProductView.ProductView, null),
                React.createElement(_FooterComponent.FooterComponent, null)
            );
        }
    }]);

    return App;
}(React.Component);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../../final-project/assets/images/bag.png' in 'D:\\Frontend\\wa_0303_E.Sydorenko-master\\src\\final-project\\components\\HeaderComponent'\n    at factoryCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3874:9\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:1048:13)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:958:16\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegistrationForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationForm = exports.RegistrationForm = function (_React$Component) {
    _inherits(RegistrationForm, _React$Component);

    function RegistrationForm() {
        _classCallCheck(this, RegistrationForm);

        return _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).apply(this, arguments));
    }

    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'form',
                { className: 'form overlay' },
                React.createElement('input', { type: 'text', name: 'firstname', placeholder: 'First Name' }),
                React.createElement('input', { type: 'text', name: 'secondname', placeholder: 'Last Name' }),
                React.createElement('input', { type: 'text', name: 'email', placeholder: 'Email' }),
                React.createElement('input', { type: 'password', name: 'password', placeholder: 'Password' }),
                React.createElement('input', { type: 'password', name: 'password', placeholder: 'Repeat password' }),
                React.createElement(
                    'div',
                    { className: 'btn-form' },
                    React.createElement(
                        'button',
                        null,
                        'Sign in'
                    )
                )
            );
        }
    }]);

    return RegistrationForm;
}(React.Component);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignInForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInForm = exports.SignInForm = function (_React$Component) {
    _inherits(SignInForm, _React$Component);

    function SignInForm() {
        _classCallCheck(this, SignInForm);

        return _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).apply(this, arguments));
    }

    _createClass(SignInForm, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'form',
                { className: 'form overlay mob' },
                React.createElement('input', { type: 'text', name: 'email', placeholder: 'Email' }),
                React.createElement('input', { type: 'password', name: 'password', placeholder: 'Password' }),
                React.createElement(
                    'div',
                    { className: 'btn-form' },
                    React.createElement(
                        'button',
                        null,
                        'Sign in'
                    )
                )
            );
        }
    }]);

    return SignInForm;
}(React.Component);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MobNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(29);

var _HeaderComponent = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobNav = exports.MobNav = function (_React$Component) {
    _inherits(MobNav, _React$Component);

    function MobNav(props) {
        _classCallCheck(this, MobNav);

        var _this = _possibleConstructorReturn(this, (MobNav.__proto__ || Object.getPrototypeOf(MobNav)).call(this, props));

        _this.state = {
            navList: false
        };
        return _this;
    }

    _createClass(MobNav, [{
        key: 'mobNavList',
        value: function mobNavList() {
            this.setState(function (state) {
                state.navList = !state.navList;
                return state;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.navList) {
                return React.createElement(_HeaderComponent.HeaderComponent, null);
            }

            return React.createElement(
                'div',
                { className: 'mob-nav' },
                React.createElement(
                    'button',
                    { className: "btn-toggle", onClick: this.mobNavList.bind(this) },
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    ),
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    ),
                    React.createElement(
                        'span',
                        { className: 'btn-toggle__line' },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'nav-container' },
                    React.createElement(
                        'ul',
                        { className: 'nav-list' },
                        React.createElement(
                            'li',
                            null,
                            'MEN'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'WOMEN'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'THE BRAND'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'LOCAL STORAGE'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'LOOK BOOK'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'search-form' },
                        React.createElement('input', { type: 'text', placeholder: 'Search', className: 'search-form__content' })
                    )
                )
            );
        }
    }]);

    return MobNav;
}(React.Component);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FooterComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(31);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterComponent = exports.FooterComponent = function (_React$Component) {
    _inherits(FooterComponent, _React$Component);

    function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        return _possibleConstructorReturn(this, (FooterComponent.__proto__ || Object.getPrototypeOf(FooterComponent)).apply(this, arguments));
    }

    _createClass(FooterComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'footer' },
                React.createElement(
                    'div',
                    { className: 'footer-content' },
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            'INFORMATION'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'The brand'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Local stores'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Customer service'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Privacy&cookies'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Site map'
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            'WHY BUY FROM US'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Shipping and returns'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Secure shopping'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Testimonials'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Award winning'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Ethical trading'
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            'YOUR ACCOUNT'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Sign in'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Register'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'View cart'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'View your lookbook'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Track an order'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Update information'
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            'LOOKBOOK'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Latest posts'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Men\'s lookbook'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Women\'s lookbook'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Lookbook RSS feed'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'View your lookbook'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Delete your lookbook'
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            'CONTACT DETAILS'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Head Office Avenue Fashion',
                                React.createElement(
                                    'pre',
                                    null,
                                    '180-182 Regent Street London'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Telephone: 0123-456-789'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Email: support@yourwebsite.com'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'footer-block' },
                    React.createElement(
                        'div',
                        { className: 'footer-block__info' },
                        React.createElement(
                            'h1',
                            null,
                            'AWARD WINNER'
                        ),
                        React.createElement(
                            'h2',
                            null,
                            'FASHION AWARDS 20016'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'footer-social' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                React.createElement('img', { className: 'social-facebook', alt: '' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                React.createElement('img', { className: 'social-twitter', alt: '' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                React.createElement('img', { className: 'social-instagram', alt: '' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                React.createElement('img', { className: 'social-pinterest', alt: '' })
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'mobile-footer__info disactive' },
                        React.createElement(
                            'li',
                            null,
                            'INFORMATION'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'WHY BUY FROM US'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'YOUR ACCOUNT'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'LOOKBOOK'
                        ),
                        React.createElement(
                            'li',
                            null,
                            'CONTACT DETAILS'
                        )
                    )
                )
            );
        }
    }]);

    return FooterComponent;
}(React.Component);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './../../assets/images/iconmonstr-facebook-1-240.png' in 'D:\\Frontend\\wa_0303_E.Sydorenko-master\\src\\final-project\\components\\FooterComponent'\n    at factoryCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3874:9\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:1048:13)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:958:16\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

var _ContentList = __webpack_require__(33);

var _ContentProducts = __webpack_require__(35);

var _ImageSlider = __webpack_require__(37);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentComponent = exports.ContentComponent = function (_React$Component) {
    _inherits(ContentComponent, _React$Component);

    function ContentComponent() {
        _classCallCheck(this, ContentComponent);

        return _possibleConstructorReturn(this, (ContentComponent.__proto__ || Object.getPrototypeOf(ContentComponent)).apply(this, arguments));
    }

    _createClass(ContentComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: 'content-wrapper' },
                    React.createElement(_ContentList.ContentList, null),
                    React.createElement(_ContentProducts.ContentProducts, null)
                ),
                React.createElement(_ImageSlider.ImageSlider, null)
            );
        }
    }]);

    return ContentComponent;
}(React.Component);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(34);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentList = exports.ContentList = function (_React$Component) {
    _inherits(ContentList, _React$Component);

    function ContentList() {
        _classCallCheck(this, ContentList);

        return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));
    }

    _createClass(ContentList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { className: 'content-menu__list' },
                    React.createElement(
                        'li',
                        null,
                        'LATEST'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'MOST LIKED'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'BEST SELLERS'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'PRICE LOW TO HIGH'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'PRICE HIGH TO LOW'
                    )
                )
            );
        }
    }]);

    return ContentList;
}(React.Component);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentProducts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(36);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentProducts = exports.ContentProducts = function (_React$Component) {
    _inherits(ContentProducts, _React$Component);

    function ContentProducts() {
        _classCallCheck(this, ContentProducts);

        return _possibleConstructorReturn(this, (ContentProducts.__proto__ || Object.getPrototypeOf(ContentProducts)).apply(this, arguments));
    }

    _createClass(ContentProducts, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box1 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box2 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-2' },
                    React.createElement(
                        'div',
                        { className: "box3 block-content" },
                        React.createElement(
                            'div',
                            { className: 'text-content' },
                            React.createElement(
                                'h2',
                                null,
                                'JANE\'S LOOKBOOK'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'GET THE LOOK FOR UNDER 200$!'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Tempora ullam voluptatem! At dolores enim in ut voluptatibus. Numquam, odit!'
                            )
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn' },
                            'VIEW NOW'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box4 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box5 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box6 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box7 block-content" },
                        ' '
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-3' },
                    React.createElement(
                        'div',
                        { className: "box8 block-content" },
                        React.createElement(
                            'div',
                            { className: 'text-content' },
                            React.createElement(
                                'h2',
                                null,
                                'WIN A NEW LOOK'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'ADD LOOKS OR ITEMS TO YOUR LOOKBOOR FOR A CHANCE OF WINNING'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Tempora ullam voluptatem! At dolores enim in ut voluptatibus. Numquam, odit!'
                            )
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn' },
                            'SHOP NOW'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'block-1' },
                    React.createElement(
                        'div',
                        { className: "box9 block-content" },
                        ' '
                    )
                )
            );
        }
    }]);

    return ContentProducts;
}(React.Component);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../../../assets/images/item-1.png' in 'D:\\Frontend\\wa_0303_E.Sydorenko-master\\src\\final-project\\components\\HomePage\\ContentComponent\\ContentProducts'\n    at factoryCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3874:9\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:1048:13)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:958:16\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(38);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageSlider = exports.ImageSlider = function (_React$Component) {
    _inherits(ImageSlider, _React$Component);

    function ImageSlider() {
        _classCallCheck(this, ImageSlider);

        return _possibleConstructorReturn(this, (ImageSlider.__proto__ || Object.getPrototypeOf(ImageSlider)).apply(this, arguments));
    }

    _createClass(ImageSlider, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'template-content' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'template-1 container-content' },
                        React.createElement(
                            'div',
                            { className: 'text-content' },
                            React.createElement(
                                'h1',
                                null,
                                'JANE\'S LOOKBOOK'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'VIEW NOW'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'template-2 container-content' },
                        React.createElement(
                            'div',
                            { className: 'text-content' },
                            React.createElement(
                                'h1',
                                null,
                                'WOMEN LOOKBOOK'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'VIEW NOW'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'template-3 container-content' },
                        React.createElement(
                            'div',
                            { className: 'text-content' },
                            React.createElement(
                                'h1',
                                null,
                                'YOUR LOOKBOOK'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn' },
                                'VIEW NOW'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ImageSlider;
}(React.Component);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../../../../../assets/images/lookbook-1.png' in 'D:\\Frontend\\wa_0303_E.Sydorenko-master\\src\\final-project\\components\\HomePage\\ContentComponent\\ImageSlider'\n    at factoryCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3874:9\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:1048:13)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:958:16\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductOption = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(40);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductOption = exports.ProductOption = function (_React$Component) {
    _inherits(ProductOption, _React$Component);

    function ProductOption() {
        _classCallCheck(this, ProductOption);

        return _possibleConstructorReturn(this, (ProductOption.__proto__ || Object.getPrototypeOf(ProductOption)).apply(this, arguments));
    }

    _createClass(ProductOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'product-block-1' },
                React.createElement(
                    'div',
                    { className: 'box1-product' },
                    React.createElement(
                        'div',
                        { className: 'box1-content' },
                        React.createElement(
                            'div',
                            { className: 'box1-content__element' },
                            React.createElement(
                                'span',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'arrow' },
                                    '\u02C2'
                                )
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'arrow' },
                                    '\u02C3'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'box2-product' },
                    React.createElement(
                        'h3',
                        null,
                        'AVE CLASSIC SWEATSHIRT'
                    ),
                    React.createElement(
                        'div',
                        { className: 'product-card__info' },
                        React.createElement(
                            'ul',
                            { className: 'reviews' },
                            React.createElement(
                                'li',
                                null,
                                '\u2606'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u2606'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u2606'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u2606'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u2606'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Review(s)'
                            )
                        ),
                        React.createElement(
                            'span',
                            null,
                            'Add a Review'
                        ),
                        React.createElement(
                            'ul',
                            { className: 'social-share' },
                            React.createElement(
                                'li',
                                null,
                                'Share:'
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img1' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img2' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img3' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img4' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img5' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('img', { className: 'img6' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'price' },
                        React.createElement(
                            'span',
                            null,
                            '\xA3107'
                        ),
                        React.createElement(
                            'span',
                            null,
                            '\xA389.99'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'product-tab' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                { className: 'product-tab-title' },
                                React.createElement(
                                    'h4',
                                    null,
                                    'AVAILABILITY:'
                                ),
                                React.createElement(
                                    'span',
                                    null,
                                    'In stock'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'product-tab-title' },
                                React.createElement(
                                    'h4',
                                    null,
                                    'PRODUCT CODE:'
                                ),
                                React.createElement(
                                    'span',
                                    null,
                                    '#499577'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'product-tab-title' },
                                React.createElement(
                                    'h4',
                                    null,
                                    'TAGS:'
                                ),
                                React.createElement(
                                    'span',
                                    { className: 'text-color' },
                                    'Classic, Casual, V-neck, Loose'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'product-description' },
                            React.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur debitis dolorem dolorum ea, expedita, laboriosam maiores, minima mollitia officiis perferendis ratione sequi sit voluptatum. Adipisci aliquam maxime vel!'
                            ),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    'Elasticated cuffs'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Casual fit'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    '100% Cotton'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Free shipping with 4 days delivery'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'group-product__select' },
                                React.createElement(
                                    'div',
                                    { className: 'product__select' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'COLOR'
                                    ),
                                    React.createElement(
                                        'select',
                                        { className: 'options' },
                                        React.createElement(
                                            'option',
                                            null,
                                            'Select Color'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'Black'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'Red'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'Green'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'product__select' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'SIZE'
                                    ),
                                    React.createElement(
                                        'select',
                                        { className: 'options' },
                                        React.createElement(
                                            'option',
                                            null,
                                            'Select Size'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'XS'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'S'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'M'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'L'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            'XL'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'product__select' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'QTY'
                                    ),
                                    React.createElement(
                                        'select',
                                        { className: 'options' },
                                        React.createElement(
                                            'option',
                                            null,
                                            '1'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            '2'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            '3'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            '4'
                                        ),
                                        React.createElement(
                                            'option',
                                            null,
                                            '5'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'btn' },
                                React.createElement(
                                    'button',
                                    { className: 'btn-type small' },
                                    '\uD83D\uDED2 ADD TO CART'
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'btn-type large' },
                                    '\u2661 ADD TO LOOKBOOK'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'element' },
                                '\u2B82 ADD TO COMPARE'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ProductOption;
}(React.Component);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../../assets/images/default.png' in 'D:\\Frontend\\wa_0303_E.Sydorenko-master\\src\\final-project\\components\\SecondPage\\ProductOption'\n    at factoryCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:237:20)\n    at resolver (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3874:9\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:1048:13)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:958:16\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at innerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:144:11)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\Resolver.js:168:10)\n    at loggingCallbackWrapper (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (D:\\Frontend\\wa_0303_E.Sydorenko-master\\node_modules\\tapable\\lib\\Tapable.js:252:11)");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductDescription = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(42);

__webpack_require__(43);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDescription = exports.ProductDescription = function (_React$Component) {
    _inherits(ProductDescription, _React$Component);

    function ProductDescription() {
        _classCallCheck(this, ProductDescription);

        return _possibleConstructorReturn(this, (ProductDescription.__proto__ || Object.getPrototypeOf(ProductDescription)).call(this));
    }

    _createClass(ProductDescription, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'description' },
                React.createElement(
                    'ul',
                    { className: 'description-list' },
                    React.createElement(
                        'li',
                        { className: 'description-list__item' },
                        'DESCRIPTION'
                    ),
                    React.createElement(
                        'li',
                        { className: 'description-list__item' },
                        'VIDEO'
                    ),
                    React.createElement(
                        'li',
                        { className: 'description-list__item' },
                        'SIZES&SPECS'
                    ),
                    React.createElement(
                        'li',
                        { className: 'description-list__item' },
                        'DELIVERY&RETURNS'
                    ),
                    React.createElement(
                        'li',
                        { className: 'description-list__item' },
                        'REVIEWS'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'description-text' },
                    React.createElement(
                        'h4',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.props.array
                    )
                )
            );
        }
    }]);

    return ProductDescription;
}(React.Component);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DynamicText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = _interopRequireWildcard(_react);

__webpack_require__(0);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./DynamicText.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicText = exports.DynamicText = function (_React$Component) {
    _inherits(DynamicText, _React$Component);

    function DynamicText(props) {
        _classCallCheck(this, DynamicText);

        var _this = _possibleConstructorReturn(this, (DynamicText.__proto__ || Object.getPrototypeOf(DynamicText)).call(this, props));

        _this.state = {
            array: [{
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.'
            }, {
                id: 2,
                text: 'Video'
            }, {
                id: 3,
                text: 'Some Text'
            }, {
                id: 4,
                text: 'Delivery'
            }, {
                id: 5,
                text: 'Review'
            }]
        };
        return _this;
    }

    _createClass(DynamicText, [{
        key: 'render',
        value: function render() {}
    }]);

    return DynamicText;
}(React.Component);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);