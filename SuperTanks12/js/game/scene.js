/**
 * Created by wokustrzyk on 13.09.2017.
 */

import getData from './dataSources';
import Hero from "./hero";
import Enemy from "./monster";
import Block from "./blocks";
import Bullet from "./bullet";

export default class Scene {
    constructor() {
        this._width = 800;
        this._height = 600;
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
        this.hero = new Hero(this._canvas, getData().hero.position, getData().hero.image);
        getData().blocks.map(block => {
            this.blocks.push(new Block(block, this._canvas));
        });
        getData().enemies.map((enemy, index) => {
            this.enemies.push(new Enemy(index, this._canvas, enemy.position, enemy.image));
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
        addEventListener('keydown', (e) => {
            this.keysDown = {};
            this.keysDown[e.keyCode] = true;
        }, false);

        addEventListener('keyup', (e) => {
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
                if (enemy.collisionsCheck(block.position, 50)) {
                    enemy.setMovementAllow(false);
                }
            });

            /* enemies collissions */
            this.enemies.forEach((en, key) => {
                if ((en.index !== enemy.index) && enemy.collisionsCheck(en.position, 32)) {
                    en.setMovementAllow(false);
                    enemy.setMovementAllow(false);
                }
            });

            if(enemy.collisionsCheck(this.hero.position, 32)){
                enemy.setMovementAllow(false);
            }

            if (this.heroBullet) {
                if (this.heroBullet.collisionsCheck(enemy.position, 32)) {
                    this.enemies[index]._active = false;
                    this.heroBullet = null;
                }
            }

            if (enemy.movementAllow) {
                enemy.movement(modyfier);
            } else {
                enemy.resetDirection();
                enemy.setMovementAllow(true);
            }

            enemy.colisionsScreen();

        });

        this.blocks.map((block, index) => {
            collisions[index] = this.hero.collisionsCheck(block.position, 50);
            if (this.heroBullet) {
                if (this.heroBullet.collisionsCheck(block.position, block.size) || this.heroBullet.colisionsScreen()) {
                    this.heroBullet = null;
                }
            }
        });

        if (this.heroBullet) this.heroBullet.movement(modyfier);

        if (this.heroBullet === null) this.heroReloading = false;

        this.hero.movement(this.keysDown, collisions, modyfier);

        this.removeEnemies();
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