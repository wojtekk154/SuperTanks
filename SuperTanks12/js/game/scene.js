/**
 * Created by wokustrzyk on 13.09.2017.
 */

import {Map2data, MovementDirection} from './dataSources';
import getData from './dataSources';
import Hero from "./hero";
import Enemy from "./monster";
import Bullet from "./bullet";
import Block from "./blocks";

export default class Scene {
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
        this.hero = new Hero(this._canvas, getData().hero.position, getData().hero.image);
        for (let i = 0; i < Map2data.length; i++) {
            for (let j = 0; j < Map2data[i].length; j++) {
                if (Map2data[i][j] !== 0) {
                    this.blocks.push(new Block(j, i, Map2data[i][j], this._canvas));
                }
            }
        }

        this.keysDown = {};
    }

    colisionDirection(player, object, size) {
        return ((player < object && player + size > object) ||
        (player < object + size && player + size > object + size) ||
        (player === object && player + size === object + size));

    }

    colisionSide(palyer, object) {
        return (palyer > object);
    }

    init() {
        this.keyboardInit();
        this.canvasCreate();
        this._canvas.addEventListener('blockcolision', (e) => {
            if (MovementDirection.DOWN === e.detail.hero.position.direction &&
                this.colisionDirection(e.detail.hero.position.x, e.detail.object.position.x, 30) &&
                this.colisionSide(e.detail.hero.position.y + 30, e.detail.object.position.y)
            ) {
                this.hero.position.y = (e.detail.object.position.y - 30) - (e.detail.object.position.y - 30) % 30;
            } else if (
                MovementDirection.UP === e.detail.hero.position.direction &&
                this.colisionDirection(e.detail.hero.position.x, e.detail.object.position.x, 30) &&
                this.colisionSide(e.detail.object.position.y + 30, e.detail.hero.position.y)
            ) {
                this.hero.position.y = (e.detail.object.position.y + 30) + (e.detail.object.position.y + 30) % 30;
            } else if (
                MovementDirection.RIGHT === e.detail.hero.position.direction &&
                this.colisionDirection(e.detail.hero.position.y, e.detail.object.position.y, 30) &&
                this.colisionSide(e.detail.hero.position.x + 30, e.detail.object.position.x)
            ) {
                this.hero.position.x = (e.detail.object.position.x - 30) - (e.detail.object.position.x - 30) % 30;
            } else if (
                MovementDirection.LEFT === e.detail.hero.position.direction &&
                this.colisionDirection(e.detail.hero.position.y, e.detail.object.position.y, 30) &&
                this.colisionSide(e.detail.object.position.x + 30, e.detail.hero.position.x)
            ) {
                this.hero.position.x = (e.detail.object.position.x + 30) + (e.detail.object.position.x + 30) % 30;
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
        addEventListener('keydown', (e) => {
            this.keysDown = {};
            this.keysDown[e.keyCode] = true;
        }, false);

        addEventListener('keyup', (e) => {
            if (this.hero.checkPosition(e.keyCode))
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
            this.heroBullet = new Bullet(this.hero.position, this.hero.position.direction, this._canvas);
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