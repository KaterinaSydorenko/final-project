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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(81);

var accordionElement = document.querySelectorAll('.accordion');
function accordion(AccordionContainer) {
    var menu = AccordionContainer.querySelector('.accordion-menu');
    var isOpened = AccordionContainer.classList.contains('active');

    function open() {
        AccordionContainer.classList.add('active');
        isOpened = true;
        document.addEventListener('click', close);
    }
    function close() {
        AccordionContainer.classList.remove('active');
        isOpened = false;
        document.removeEventListener('click', close);
    }
    function accordionToggle() {
        if (isOpened) {
            close();
        } else {
            open();
        }
    }

    menu.addEventListener('click', function (objectPressed) {
        console.log(objectPressed);
        objectPressed.stopPropagation();
        accordionToggle();
    });

    menu.addEventListener('keypress', function (objectPressed) {
        console.log(objectPressed);
        if (objectPressed.keyCode === 13) {
            accordionToggle();
        }
    });
}

accordionElement.forEach(function (el) {
    accordion(el);
});

var btn = document.querySelector('.accordion-menu-list');
var btnLine = document.querySelector('.accordion-menu-list__line');

btn.addEventListener('click', function () {
    btnLine.classList.toggle('active');
});

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });