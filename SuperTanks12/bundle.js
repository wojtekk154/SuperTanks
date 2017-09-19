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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by wokustrzyk on 13.09.2017.
 */

class Character {
    constructor(canvas, position, image) {
        this.position = position;
        this.speed = 256;
        this.image = new Image();
        this.image.src = image;
        this.context = canvas.getContext('2d');
        this.sprite = { 1: 0, 2: 64, 3: 96, 4: 32 };
    }

    init() {
        this.image.onload = () => {};
    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.sprite[this.position.direction], 0, 32, 32, this.position.x, this.position.y, 32, 32);
        this.context.restore();
    }

    collisionElement(object, size) {
        return !(this.position.x + 32 < object.x || object.x + size < this.position.x || this.position.y + 32 < object.y || object.y + size < this.position.y);
    }

    colisionsScreen() {
        if (this.position.x >= 800 - 32) this.position.x = 800 - 32;
        if (this.position.x <= 0) this.position.x = 0;
        if (this.position.y >= 600 - 32) this.position.y = 600 - 32;
        if (this.position.y < 0) this.position.y = 0;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_scene__ = __webpack_require__(2);


let scene = new __WEBPACK_IMPORTED_MODULE_0__game_scene__["a" /* default */]();
scene.init();
scene.main();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataSources__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bullet__ = __webpack_require__(7);
/**
 * Created by wokustrzyk on 13.09.2017.
 */







class Scene {
    constructor() {
        this._width = 800;
        this._height = 600;
        this._canvas = document.createElement('canvas');
        this.context = this._canvas.getContext('2d');
        this._background = new Image();
        this._then = Date.now();
        this.enemies = [];
        this.blocks = [];
        this.heroBullets = [];
        this.enemiesBullets = [];
        this._background.src = 'assets/background.png';
        this.hero = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* default */](this._canvas, Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* default */])().hero.position, Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* default */])().hero.image);
        Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* default */])().enemies.map((enemy, index) => {
            this.enemies.push(new __WEBPACK_IMPORTED_MODULE_2__monster__["a" /* default */](index, this._canvas, enemy.position, enemy.image));
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__dataSources__["a" /* default */])().blocks.map(block => {
            this.blocks.push(new __WEBPACK_IMPORTED_MODULE_3__blocks__["a" /* default */](block, this._canvas));
        });
        this.keysDown = {};
    }

    init() {
        this.keyboardInit();
        this.canvasCreate();
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
        let collisions = [];
        this.shootToEnemy();
        this.enemies.map((enemy, index) => {
            collisions[this.blocks.length + enemy.index] = this.hero.collisionsCheck(enemy.position, 32);

            /* Enemy block collisions */
            this.blocks.map(block => {
                if (enemy.collisionsCheck(block.position, block.size)) {
                    enemy.assignDirection();
                }
            });

            /* enemies collissions */
            this.enemies.forEach((en, key) => {
                if (en.index !== enemy.index && enemy.collisionsCheck(en.position, 32)) {
                    enemy.assignDirection();
                    en.assignDirection();
                }
            });

            this.heroBullets = this.heroBullets.filter(bullet => {
                if (!bullet.collisionsCheck(enemy.position, 32)) {
                    return bullet;
                }
            });

            if (enemy.collisionsCheck(this.hero.position, 32)) {
                enemy.assignDirection();
            } else {
                enemy.movement(modyfier);
            }
        });

        this.blocks.map((block, index) => {
            collisions[index] = this.hero.collisionsCheck(block.position, 50);
            this.heroBullets = this.heroBullets.filter(bullet => {
                if (!bullet.collisionsCheck(block.position, block.size)) {
                    return bullet;
                }
            });
        });
        this.heroBullets.map(bullet => {
            bullet.movement(modyfier);
        });

        this.hero.movement(this.keysDown, collisions, modyfier);
        this.removeEnemies();
    }

    removeBullets() {

        this.heroBullets = this.heroBullets.filter(bullet => {
            return bullet.active;
        });
    }

    removeEnemies() {
        this.enemies.map((enemy, key) => {
            if (!enemy.active) {
                delete this.enemies[key];
            }
        });
    }

    render() {
        this.backgroundInit();
        this.hero.draw();
        this.enemies.map((enemy, key) => enemy.draw());
        this.blocks.map(block => block.draw());
        this.heroBullets.map(bullet => bullet.draw());
    }

    shootToEnemy() {
        if (32 in this.keysDown) {
            this.heroBullets.push(new __WEBPACK_IMPORTED_MODULE_4__bullet__["a" /* default */](this.hero.position, this.hero.position.direction, this._canvas));
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getData;
function getData() {
    let data = {
        enemies: [{
            position: {
                direction: 3,
                x: 400,
                y: 0
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 2,
                x: 500,
                y: 0
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 2,
                x: 400,
                y: 0
            },
            image: 'assets/monster.png'
        }, {
            position: {
                direction: 1,
                x: 750,
                y: 0
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
                x: 450,
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
            x: 450,
            y: 200
        }, {
            x: 350,
            y: 200
        }, {
            x: 550,
            y: 200
        }, {
            x: 650,
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
            x: 650,
            y: 650
        }, {
            x: 750,
            y: 550
        }, {
            x: 650,
            y: 500
        }],
        hero: {
            position: {
                direction: 1,
                x: 500,
                y: 400
            },
            image: 'assets/hero.png'
        }
    };
    return data;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(0);


class Hero extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(canvas, position, image) {
        super(canvas, image);
        this.position = position;
        this.image.src = image;
        this.sprite = { 1: 0, 2: 64, 3: 96, 4: 32 };
        this.controls = { 87: true, 83: true, 65: true, 68: true };
    }

    movement(keysDown, collision, modyfier) {
        this.controls = this.allowControl(keysDown, collision, this.controls);
        if (87 in keysDown && this.controls[87]) {
            this.position.y -= this.speed * modyfier;
            this.position.direction = 1;
        }
        if (83 in keysDown && this.controls[83]) {
            this.position.y += this.speed * modyfier;
            this.position.direction = 2;
        }
        if (65 in keysDown && this.controls[65]) {
            this.position.x -= this.speed * modyfier;
            this.position.direction = 3;
        }
        if (68 in keysDown && this.controls[68]) {
            this.position.x += this.speed * modyfier;
            this.position.direction = 4;
        }

        this.colisionsScreen();
    }

    allowControl(keysDown, collision, oldAllow) {
        let allow = {
            87: true,
            83: true,
            65: true,
            68: true
        };

        if ((!oldAllow[87] || !oldAllow[83] || !oldAllow[65] || !oldAllow[68]) && collision.indexOf(true, 0) >= 0) {
            return oldAllow;
        } else {
            if (87 in keysDown && collision.indexOf(true, 0) >= 0) {
                allow[87] = false;
            }
            if (83 in keysDown && collision.indexOf(true, 0) >= 0) {
                allow[83] = false;
            }
            if (65 in keysDown && collision.indexOf(true, 0) >= 0) {
                allow[65] = false;
            }
            if (68 in keysDown && collision.indexOf(true, 0) >= 0) {
                allow[68] = false;
            }
            return allow;
        }
    }

    collisionsCheck(object, size) {
        return !(this.position.x + 32 < object.x || object.x + size < this.position.x || this.position.y + 32 < object.y || object.y + size < this.position.y);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character__ = __webpack_require__(0);
/**
 * Created by wokustrzyk on 14.09.2017.
 */



class Enemy extends __WEBPACK_IMPORTED_MODULE_0__character__["a" /* default */] {
    constructor(index, canvas, position, image) {
        super(canvas, position, image);
        this.position = position;
        this.index = index;
        this.framesDirections = 0;
        this.sprite = { 1: 0, 2: 64, 3: 96, 4: 32 };
        this.active = true;
    }

    movement(modyfier) {
        if (this.position.direction === 1) {
            this.position.y -= this.speed * modyfier;
        }
        if (this.position.direction === 2) {
            this.position.y += this.speed * modyfier;
        }
        if (this.position.direction === 3) {
            this.position.x -= this.speed * modyfier;
        }
        if (this.position.direction === 4) {
            this.position.x += this.speed * modyfier;
        }
        if (this.colisionsScreen() || this.framesDirections > 60) {
            this.resetDirection();
        }
        this.framesDirections++;
    }

    resetDirection() {
        this.assignDirection();
        this.framesDirections = 0;
    }

    assignDirection() {
        let temp = {
            1: { 1: 2, 2: 3, 3: 4 },
            2: { 1: 1, 2: 3, 3: 4 },
            3: { 1: 1, 2: 2, 3: 4 },
            4: { 1: 1, 2: 2, 3: 3 }
        };
        switch (this.position.direction) {
            case 1:
                this.position.direction = temp[1][Math.floor(Math.random() * 3 + 1)];
                break;
            case 2:
                this.position.direction = temp[2][Math.floor(Math.random() * 3 + 1)];
                break;
            case 3:
                this.position.direction = temp[3][Math.floor(Math.random() * 3 + 1)];
                break;
            case 4:
                this.position.direction = temp[4][Math.floor(Math.random() * 3 + 1)];
                break;
        }
    }

    collisionsCheck(object, size) {
        if (this.collisionElement(object, size)) {
            switch (this.position.direction) {
                case 1:
                    this.position.y = object.y + size + 2;
                    break;
                case 2:
                    this.position.y = object.y - 34;
                    break;
                case 3:
                    this.position.x = object.x + size + 2;
                    break;
                case 4:
                    this.position.x = object.x - 34;
                    break;
            }
            return true;
        }
        return false;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by wokustrzyk on 14.09.2017.
 */

class Block {
    constructor(position, canvas) {
        this.position = position;
        this.context = canvas.getContext('2d');
        this.color = 'rgb(120, 240, 200)';
        this.size = 50;
    }

    draw() {
        this.context.save();
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Block;


/***/ }),
/* 7 */
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
                p.x = position.x + 32 / 2;
                p.y = position.y;
                break;
            case 2:
                p.x = position.x + 32 / 2;
                p.y = position.y + 32;
                break;
            case 3:
                p.x = position.x;
                p.y = position.y + 32 / 2;
                break;
            case 4:
                p.x = position.x + 32;
                p.y = position.y + 32 / 2;
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
        this.context.fillStyle = 'rgb(225, 140, 139)';
        this.context.fillRect(this.position.x, this.position.y, 3, 3);
        this.context.restore();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bullet;


/***/ })
/******/ ]);