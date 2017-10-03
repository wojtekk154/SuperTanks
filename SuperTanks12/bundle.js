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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getData;
function getData() {
    let data = {
        enemies: [{
            position: {
                direction: 3,
                x: 400,
                y: 100
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 2,
                x: 500,
                y: 150
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 2,
                x: 400,
                y: 200
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 1,
                x: 750,
                y: 100
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 3,
                x: 400,
                y: 500
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 2,
                x: 350,
                y: 250
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 4,
                x: 20,
                y: 200
            },
            image: 'assets/monster.png'
        }],

        blocks: [{
            x: 0,
            y: 0
        }, {
            x: 50,
            y: 0
        }, {
            x: 100,
            y: 0
        }, {
            x: 150,
            y: 300
        }, {
            x: 200,
            y: 600
        }, {
            x: 250,
            y: 0
        }, {
            x: 250,
            y: 0
        }, {
            x: 250,
            y: 400
        }, {
            x: 250,
            y: 400
        }, {
            x: 250,
            y: 400
        }, {
            x: 250,
            y: 100
        }, {
            x: 250,
            y: 200
        }, {
            x: 20,
            y: 200
        }, {
            x: 350,
            y: 200
        }, {
            x: 550,
            y: 200
        }, {
            x: 10,
            y: 400
        }, {
            x: 750,
            y: 400
        }, {
            x: 750,
            y: 100
        }, {
            x: 250,
            y: 500
        }, {
            x: 10,
            y: 10
        }, {
            x: 750,
            y: 550
        }, {
            x: 10,
            y: 500
        }],
        hero: {
            position: {
                direction: 1,
                x: 400,
                y: 400
            },
            image: 'assets/hero.png'
        }
    };
    return data;
}

const MovementDirection = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};
/* harmony export (immutable) */ __webpack_exports__["b"] = MovementDirection;


const Map1data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 1, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
/* unused harmony export Map1data */


const Map4data = [[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
/* unused harmony export Map4data */


const Map2data = [[0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 0, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2]];
/* harmony export (immutable) */ __webpack_exports__["a"] = Map2data;

const Map3data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 3, 2, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 2, 2, 0, 0, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 3, 2, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0], [0, 3, 3, 2, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 3, 0, 0], [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 3, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 2, 3, 3, 3, 0, 3, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]];
/* unused harmony export Map3data */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by wokustrzyk on 13.09.2017.
 */

class Character {
    constructor(canvas, position, image) {
        this.position = position;
        this.size = 29;
        this.speed = 6 * this.size;
        this.image = new Image();
        this.image.src = image;
        this.context = canvas.getContext('2d');
        this.sprite = { 1: 0, 2: 2 * this.size, 3: 3 * this.size, 4: this.size };
    }

    init() {}

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.sprite[this.position.direction], 0, this.size, this.size, this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }

    collisionElement(object, size) {
        return !(this.position.x + this.size < object.x || object.x + size < this.position.x || this.position.y + this.size < object.y || object.y + size < this.position.y);
    }

    colisionScreen(w, h) {
        if (this.position.x > w - this.size || this.position.x < 0 || this.position.y > h - this.size || this.position.y < 0) {
            return true;
        } else {
            return false;
        }
    }

    checkPosition(keycode) {
        w;
        if (keycode === 87 || keycode === 83) {
            if (this.position.y % 30 < 5) {
                this.position.y = this.position.y - this.position.y % 30;
                return true;
            }
        } else {
            if (this.position.x % 30 < 5) {
                this.position.x = this.position.x - this.position.x % 30;
                return true;
            }
        }
        return false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_scene__ = __webpack_require__(3);


let scene = new __WEBPACK_IMPORTED_MODULE_0__game_scene__["a" /* default */]();
scene.init();
scene.main();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataSources__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bullet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks__ = __webpack_require__(10);
/**
 * Created by wokustrzyk on 13.09.2017.
 */








class Scene {
    constructor() {
        this._width = 900;
        this._height = 900;
        this._canvas = document.createElement('canvas');
        this.context = this._canvas.getContext('2d');
        this._background = new Image();
        this._then = Date.now();
        this.enemies = [];
        this.blocks = [];
        this.heroBullet = null;
        this.heroReloading = false;
        this.enemiesBullets = [];
        this._background.src = 'assets/background.png';
        this.movementAllow = {
            1: true,
            2: true,
            3: true,
            4: true
        };
        this.hero = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* default */](this._canvas, Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["c" /* default */])().hero.position, Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["c" /* default */])().hero.image);
        for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* Map2data */].length; i++) {
            for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* Map2data */][i].length; j++) {
                if (__WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* Map2data */][i][j] !== 0) {
                    this.blocks.push(new __WEBPACK_IMPORTED_MODULE_4__blocks__["a" /* default */](j, i, __WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* Map2data */][i][j], this._canvas));
                }
            }
        }

        this.keysDown = {};
    }

    colisionDirection(player, object, size) {
        return player < object && player + size > object || player < object + size && player + size > object + size || player === object && player + size === object + size;
    }

    colisionSide(palyer, object) {
        return palyer > object;
    }

    init() {
        this.keyboardInit();
        this.canvasCreate();
        this._canvas.addEventListener('blockcolision', e => {
            if (__WEBPACK_IMPORTED_MODULE_0__dataSources__["b" /* MovementDirection */].DOWN === e.detail.hero.position.direction && this.colisionDirection(e.detail.hero.position.x, e.detail.object.position.x, 30) && this.colisionSide(e.detail.hero.position.y + 30, e.detail.object.position.y)) {
                this.hero.position.y = e.detail.object.position.y - 30 - (e.detail.object.position.y - 30) % 30;
            } else if (__WEBPACK_IMPORTED_MODULE_0__dataSources__["b" /* MovementDirection */].UP === e.detail.hero.position.direction && this.colisionDirection(e.detail.hero.position.x, e.detail.object.position.x, 30) && this.colisionSide(e.detail.object.position.y + 30, e.detail.hero.position.y)) {
                this.hero.position.y = e.detail.object.position.y + 30 + (e.detail.object.position.y + 30) % 30;
            } else if (__WEBPACK_IMPORTED_MODULE_0__dataSources__["b" /* MovementDirection */].RIGHT === e.detail.hero.position.direction && this.colisionDirection(e.detail.hero.position.y, e.detail.object.position.y, 30) && this.colisionSide(e.detail.hero.position.x + 30, e.detail.object.position.x)) {
                this.hero.position.x = e.detail.object.position.x - 30 - (e.detail.object.position.x - 30) % 30;
            } else if (__WEBPACK_IMPORTED_MODULE_0__dataSources__["b" /* MovementDirection */].LEFT === e.detail.hero.position.direction && this.colisionDirection(e.detail.hero.position.y, e.detail.object.position.y, 30) && this.colisionSide(e.detail.object.position.x + 30, e.detail.hero.position.x)) {
                this.hero.position.x = e.detail.object.position.x + 30 + (e.detail.object.position.x + 30) % 30;
            }
        }, false);
    }

    canvasCreate() {
        this._canvas.id = "CursorLayer";
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._canvas.style.zIndex = 1;
        this._canvas.style.position = "absolute";
        this._canvas.style.border = "1px solid blue";
        document.body.appendChild(this._canvas);
    }

    backgroundInit() {
        this.context.drawImage(this._background, 0, 0);
    }

    keyboardInit() {
        addEventListener('keydown', e => {
            this.keysDown = {};
            this.keysDown[e.keyCode] = true;
        }, false);

        addEventListener('keyup', e => {
            delete this.keysDown[e.keyCode];
        }, false);
    }

    update(modyfier) {
        this.shootToEnemy();
        // this.enemies.map((enemy, index) => {
        //
        //
        //     // collisions[this.blocks.length + enemy.index] = this.hero.collisionsCheck(enemy.position, 32);
        //
        //     /* Enemy block collisions */
        //     // this.blocks.map(block => {
        //     //     if (enemy.collisionsCheck(block.position, 50)) {
        //     //         enemy.setMovementAllow(false);
        //     //     }
        //     // });
        //     //
        //     /* enemies collissions */
        //     // this.enemies.forEach((en, key) => {
        //     //     if ((en.index !== enemy.index) && enemy.collisionsCheck(en.position, 32)) {
        //     //         en.setMovementAllow(false);
        //     //         enemy.setMovementAllow(false);
        //     //     }
        //     // });
        //
        //     // if (enemy.collisionsCheck(this.hero.position, 32)) {
        //     //     enemy.setMovementAllow(false);
        //     // }
        //
        //     // if (this.heroBullet) {
        //     //     if (this.heroBullet.collisionsCheck(enemy.position, 32)) {
        //     //         this.enemies[index]._active = false;
        //     //         this.heroBullet = null;
        //     //     }
        //     // }
        //
        //     // if (enemy.movementAllow) {
        //     enemy.movement(modyfier);
        //     // } else {
        //     //     enemy.resetDirection();
        //     //     enemy.setMovementAllow(true);
        //     // }
        //     //
        //     // enemy.colisionsScreen();
        //
        // });

        this.blocks.map((block, index) => {
            this.hero.collisionsCheck(block.position, block.size);

            if (this.heroBullet) {
                if (this.heroBullet.collisionsCheck(block.position, block.size) || this.heroBullet.colisionsScreen()) {
                    this.heroBullet = null;
                    this.heroReloading = false;
                }
            }
        });
        if (this.heroBullet) this.heroBullet.movement(modyfier);
        this.hero.movement(this.keysDown, modyfier);

        this.enemies.forEach(enemy => {});
    }

    removeEnemies() {
        this.enemies = this.enemies.filter(enemy => {
            if (enemy.active) {
                return enemy;
            }
        });
    }

    render() {
        this.backgroundInit();
        this.hero.draw();
        this.enemies.map((enemy, key) => enemy.draw());
        this.blocks.map(block => block.draw());
        if (this.heroBullet) this.heroBullet.draw();
    }

    shootToEnemy() {
        if (32 in this.keysDown && !this.heroReloading) {
            this.heroBullet = new __WEBPACK_IMPORTED_MODULE_3__bullet__["a" /* default */](this.hero.position, this.hero.position.direction, this._canvas);
            this.heroReloading = true;
        }
    }

    main() {
        let now = Date.now();
        let delta = now - this._then;
        this.update(delta / 1000);
        this.render();
        this._then = now;
        requestAnimationFrame(this.main.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataSources__ = __webpack_require__(0);



class Hero extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(canvas, position, image) {
        super(canvas, image);
        this.position = position;
        this.image.src = image;
        this.controls = { 87: true, 83: true, 65: true, 68: true };
        this.keyUp = false;
    }

    movement(keysDown, modyfier) {
        if (87 in keysDown && this.controls[87]) {
            this.position.y -= 5;
            this.position.direction = 1;
        }
        if (83 in keysDown && this.controls[83]) {
            if (this.speed * modyfier) this.position.y += 5;
            this.position.direction = 2;
        }
        if (65 in keysDown && this.controls[65]) {
            this.position.x -= 5;
            this.position.direction = 3;
        }
        if (68 in keysDown && this.controls[68]) {
            this.position.x += 5;
            this.position.direction = 4;
        }
    }

    collisionsCheck(object, size, index) {
        if (this.collisionElement(object, size)) {
            let e = new CustomEvent('blockcolision', {
                detail: {
                    hero: { position: this.position, size: this.size },
                    object: { position: object, size: size }
                },
                bubbles: true,
                cancelable: true
            });
            document.querySelector('canvas').dispatchEvent(e);
        } else if (this.colisionScreen(900, 900)) {
            if (this.position.y <= 0) {
                this.controls[87] = false;
            } else if (this.position.y >= 900 - 30) {
                this.controls[83] = false;
            } else if (this.position.x <= 0) {
                this.controls[65] = false;
            } else if (this.position.x >= 900 - 30) {
                this.controls[68] = false;
            }
        } else {
            this.controls = { 87: true, 83: true, 65: true, 68: true };
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataSources__ = __webpack_require__(0);
/**
 * Created by wokustrzyk on 14.09.2017.
 */



let _ = __webpack_require__(6);

class Enemy extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(index, canvas, position, image) {
        super(canvas, position, image);
        this.position = position;
        this.index = index;
        this.framesDirections = 0;
        this._active = true;
        this._movementAllow = true;
    }

    set active(value) {
        this._active = value;
    }

    get active() {
        return this._active;
    }

    get movementAllow() {
        return this._movementAllow;
    }

    setMovementAllow(value) {
        this._movementAllow = value;
    }

    movement(modyfier) {
        switch (this.position.direction) {
            case __WEBPACK_IMPORTED_MODULE_1__dataSources__["b" /* MovementDirection */].UP:
                this.position.y -= this.speed * modyfier;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__dataSources__["b" /* MovementDirection */].DOWN:
                this.position.y += this.speed * modyfier;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__dataSources__["b" /* MovementDirection */].LEFT:
                this.position.x -= this.speed * modyfier;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__dataSources__["b" /* MovementDirection */].RIGHT:
                this.position.x += this.speed * modyfier;
                break;
        }
        this.framesDirections++;
    }

    // invokeDirection() {
    //     if (this.framesDirections > 60) {
    //         this.resetDirection();
    //     }
    // }
    //
    // resetDirection() {
    //     this.assignDirection();
    //     this.framesDirections = 0;
    // }
    //
    // assignDirection() {
    //     let temp = {
    //         1: {1: 'DOWN', 2: 'RIGHT', 3: 'LEFT'},
    //         2: {1: 'UP', 2: 'LEFT', 3: 'RIGHT'},
    //         3: {1: 'RIGHT', 2: 'UP', 3: 'DOWN'},
    //         4: {1: 'LEFT', 2: 'DOWN', 3: 'UP'}
    //     };
    //     switch (this.position.direction) {
    //         case MovementDirection.UP:
    //             this.position.direction = MovementDirection[temp[1][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.DOWN:
    //             this.position.direction = MovementDirection[temp[2][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.LEFT:
    //             this.position.direction = MovementDirection[temp[3][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.RIGHT:
    //             this.position.direction = MovementDirection[temp[4][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //     }
    // }
    //
    // collisionsCheck(object, size) {
    //     if (this.collisionElement(object, size)) {
    //         switch (this.position.direction) {
    //             case MovementDirection.UP:
    //                 this.position.y = object.y + size;
    //                 break;
    //             case MovementDirection.DOWN:
    //                 this.position.y = object.y - 50;
    //                 break;
    //             case MovementDirection.LEFT:
    //                 this.position.x = object.x + size;
    //                 break;
    //             case MovementDirection.RIGHT:
    //                 this.position.x = object.x - 50;
    //                 break;
    //         }
    //         return true;
    //     }
    //     return false;
    // }
    //
    // colisionsScreen() {
    //     return (this.position.x >= (1000 - 50) || this.position.x <= 0 || this.position.y >= (1000- 50) || this.position.y < 0);
    // }
    //
    // screenDirection() {
    //     if (this.colisionsScreen()) {
    //         switch (this.position.direction) {
    //             case MovementDirection.UP:
    //                 this.position.y += 5;
    //                 this.position.direction = MovementDirection.DOWN;
    //                 break;
    //             case MovementDirection.DOWN:
    //                 this.position.y -= 5;
    //                 this.position.direction = MovementDirection.UP;
    //                 break;
    //             case MovementDirection.LEFT:
    //                 this.position.x += 5;
    //                 this.position.direction = MovementDirection.RIGHT;
    //                 break;
    //             case MovementDirection.RIGHT:
    //                 this.position.x -= 5;
    //                 this.position.direction = MovementDirection.LEFT;
    //                 break;
    //         }
    //     }
    // }
}
/* unused harmony export default */


/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\wokustrzyk\\Documents\\SuperTanks\\SuperTanks12\\node_modules\\lodash\\lodash.js'\n    at Error (native)");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by wokustrzyk on 14.09.2017.
 */

class Bullet {
    constructor(startPosition, direction, canvas) {
        this.direction = direction;
        this.position = this.setStartPosition(startPosition);
        this.context = canvas.getContext('2d');
        this.speed = 450;
        this.active = true;
    }

    setStartPosition(position) {
        let p = { x: 0, y: 0 };
        switch (this.direction) {
            case 1:
                p.x = position.x + 30 / 2;
                p.y = position.y;
                break;
            case 2:
                p.x = position.x + 30 / 2;
                p.y = position.y + 30;
                break;
            case 3:
                p.x = position.x;
                p.y = position.y + 30 / 2;
                break;
            case 4:
                p.x = position.x + 30;
                p.y = position.y + 30 / 2;
                break;
        }
        return p;
    }

    movement(modyfier) {
        switch (this.direction) {
            case 1:
                this.position.y -= this.speed * modyfier;
                break;
            case 2:
                this.position.y += this.speed * modyfier;
                break;
            case 3:
                this.position.x -= this.speed * modyfier;
                break;
            case 4:
                this.position.x += this.speed * modyfier;
                break;
        }
    }

    collisionsCheck(object, size) {
        return !(this.position.x + 5 < object.x || object.x + size < this.position.x || this.position.y + 5 < object.y || object.y + size < this.position.y);
    }

    draw() {
        this.context.save();
        this.context.fillStyle = 'rgb(225, 240, 239)';
        this.context.fillRect(this.position.x, this.position.y, 3, 3);
        this.context.restore();
    }

    colisionsScreen() {
        if (this.position.x >= 900 || this.position.x <= 0 || this.position.y >= 900 || this.position.y < 0) {
            return true;
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bullet;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by wokustrzyk on 14.09.2017.
 */

class Block {
    constructor(x, y, index, canvas) {
        this.size = 30;
        this.position = {
            x: x * this.size,
            y: y * this.size
        };
        this.context = canvas.getContext('2d');
        this.index = index;
        this.indexList = { 1: 'first1.png', 2: 'first.png', 3: 'third.png' };
        this.image = new Image();
        this.image.src = 'assets/' + this.indexList[index];
    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Block;


/***/ })
/******/ ]);