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
        getData().enemies.map((enemy, index) => this.enemies.push(new Enemy(index, this._canvas, enemy.position, enemy.image)));

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

    colisionBlock(player, object, monster) {
        if (MovementDirection.DOWN === player.position.direction &&
            this.colisionDirection(player.position.x, object.position.x, 30) &&
            this.colisionSide(object.position.y + 30, object.position.y)
        ) {

            return {
                direction: player.position.direction,
                x: player.position.x,
                y: (object.position.y - 30) - (object.position.y - 30) % 30
            };

        } else if (
            MovementDirection.UP === player.position.direction &&
            this.colisionDirection(player.position.x, object.position.x, 30) &&
            this.colisionSide(object.position.y + 30, player.position.y)
        ) {
            return {
                direction: player.position.direction,
                x: player.position.x,
                y: (object.position.y + 30) - (object.position.y + 30) % 30
            };
        } else if (
            MovementDirection.RIGHT === player.position.direction &&
            this.colisionDirection(player.position.y, object.position.y, 30) &&
            this.colisionSide(player.position.x + 30, object.position.x)
        ) {
            return {
                direction: player.position.direction,
                x: (object.position.x - 30) - (object.position.x - 30) % 30,
                y: player.position.y
            };
        } else if (
            MovementDirection.LEFT === player.position.direction &&
            this.colisionDirection(player.position.y, object.position.y, 30) &&
            this.colisionSide(object.position.x + 30, player.position.x)
        ) {
            return {
                direction: player.position.direction,
                x: (object.position.x + 30) - (object.position.x + 30) % 30,
                y: player.position.y
            };
        } else {
            return {
                direction: player.position.direction,
                x: player.position.x,
                y: player.position.y
            };
        }
    }

    init() {
        this.keyboardInit();
        this.canvasCreate();
        this._canvas.addEventListener('blockcolision', (e) => {
            this.hero.position = this.colisionBlock(e.detail.hero, e.detail.object);
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
            delete this.keysDown[e.keyCode];
        }, false);
    }

    update(modyfier) {
        this.shootToEnemy();
        this.enemies.map((enemy, index) => {
            /* Enemy block collisions */
            this.blocks.map(block => {
                if(enemy.collisionElement(block.position, 30)){
                    enemy.position = this.colisionBlock(enemy, block);

                }
            });
            /* enemies collissions */
            // this.enemies.forEach((en, key) => {
            //     if ((en.index !== enemy.index) && enemy.collisionsCheck(en.position, 32)) {
            //         en.setMovementAllow(false);
            //         enemy.setMovementAllow(false);
            //     }
            // });


            // if (enemy.collisionsCheck(this.hero.position, 32)) {
            //     enemy.setMovementAllow(false);
            // }

            // if (this.heroBullet) {
            //     if (this.heroBullet.collisionsCheck(enemy.position, 32)) {
            //         this.enemies[index]._active = false;
            //         this.heroBullet = null;
            //     }
            // }

            enemy.movement(modyfier);
            enemy.colisionsScreen();
        });

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