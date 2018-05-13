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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(87);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WRAPPER_CONTAINER = 'wrapper';
var TOGGLE_LAMP = 'toggle__lamp';
var BTN_ADD = 'add__toggle';

var TOGGLE = '\n<div class="box">\n    <div class="' + TOGGLE_LAMP + '">OFF</div>\n</div>\n';

var ToggleLamp = function () {
    function ToggleLamp(rootElement) {
        _classCallCheck(this, ToggleLamp);

        this.rootElement = rootElement;

        this.render();
    }

    _createClass(ToggleLamp, [{
        key: 'render',
        value: function render() {
            this.rootElement.classList.add(WRAPPER_CONTAINER);

            this.btnToggle();
        }
    }, {
        key: 'btnToggle',
        value: function btnToggle() {
            var _this = this;

            this.btn = document.createElement('div');
            this.btn.classList.add(BTN_ADD);
            this.btn.textContent = 'Click';
            this.rootElement.appendChild(this.btn);

            this.btn.addEventListener('click', function () {
                _this.toggleCreate();
            });
        }
    }, {
        key: 'toggleCreate',
        value: function toggleCreate() {
            this.toggle = document.createElement('div');
            this.rootElement.classList.add(TOGGLE_LAMP);
            this.toggle.innerHTML = TOGGLE;
            this.rootElement.appendChild(this.toggle);

            this.toggleON();
        }
    }, {
        key: 'toggleON',
        value: function toggleON() {
            var _this2 = this;

            this.toggle.addEventListener('click', function () {
                _this2.isEnableToggle();
            });
        }
    }, {
        key: 'isEnableToggle',
        value: function isEnableToggle() {
            var changeToggle = this.toggle.querySelector('.' + TOGGLE_LAMP);
            var isEnabled = changeToggle.classList.contains('active');
            changeToggle.classList.toggle('active');
            if (isEnabled === false) {
                changeToggle.textContent = 'ON';
                changeToggle.classList.add(TOGGLE_LAMP + '_active');
            } else {
                changeToggle.textContent = 'OFF';
                changeToggle.classList.remove(TOGGLE_LAMP + '_active');
            }
        }
    }]);

    return ToggleLamp;
}();

var toggleLamp = new ToggleLamp(document.querySelector('#appLampContainer'));

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });