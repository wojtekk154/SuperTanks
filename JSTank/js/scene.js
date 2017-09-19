/**
 * Created by wokustrzyk on 05.09.2017.
 */

define((require) => {
    let Hero = require('./hero');
    let Monster = require('./monster');
    let Bullet = require('./bullet');
    let Blocks = require('./blocks');
    let BattaleField = require('./battaleField');




    function Scene(width, height) {
        let blocksData = Blocks();
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.background.src = 'assets/background.png';
        this.hero = new Hero({direction: 1, speed: 250, x: 500, y: 400}, 'assets/hero.png', this.canvas, 800, 600);
        this.monsters.push(new Monster(1, {
            direction: 3,
            speed: 250,
            x: 400,
            y: 0
        }, 'assets/monster.png', this.canvas));
        this.monsters.push(new Monster(2, {
            direction: 3,
            speed: 250,
            x: 500,
            y: 0
        }, 'assets/monster.png', this.canvas));
        this.monsters.push(new Monster(3, {
            direction: 3,
            speed: 250,
            x: 600,
            y: 0
        }, 'assets/monster.png', this.canvas));
        this.monsters.push(new Monster(4, {
            direction: 3,
            speed: 450,
            x: 700,
            y: 0
        }, 'assets/monster.png', this.canvas));
        this.monsters.push(new Monster(5, {
            direction: 3,
            speed: 350,
            x: 600,
            y: 0
        }, 'assets/monster.png', this.canvas));
        blocksData.map(b =>{
            console.log(b);
//           this.blocks.push(new BattaleField(this.canvas, ))
        });
//         mapblock.map(m=>{console.log(m);
// //            this.blocks.push(new BattaleField(this.canvas, map.))
//         })
        this.background.onload = function () {
            this.bgReady = true;
        };
    }

    Scene.prototype = {
        width: 800,
        height: 600,
        keysDown: {},
        bgReady: false,
        then: Date.now(),
        hero: null,
        blocks: [],
        monsters: [],
        background: new Image(),
        canvas: null,
        context: null,
        bullets: [],
        create: function () {
            let event = new Event('background');
            this.canvas.id = "CursorLayer";
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.zIndex = 1;
            this.canvas.style.position = "absolute";
            this.canvas.style.border = "1px solid blue";
            document.body.appendChild(this.canvas);

            this.keysDown = {};

            this.context.fillStyle = 'rgb(120, 100, 200)';

        },
        drawBackground: function () {
            this.context.drawImage(this.background, 0, 0);
        },
        keyboardInit: function () {
            addEventListener('keydown', (e) => {
                this.keysDown = {};
                this.keysDown[e.keyCode] = true;
            }, false);

            addEventListener('keyup', (e) => {
                delete this.keysDown[e.keyCode];
            }, false);
        },
        initScene: function () {

            this.create();
            this.keyboardInit();
            for (let i = 0; i < this.monsters.length; i++) {
                this.monsters[i].init();
            }
            this.hero.init();
        },
        shoot: function () {
            if (32 in this.keysDown) {
                this.bullets.push(new Bullet(this.hero.position, this.hero.position.direction, this.canvas));
            }
        },
        update: function (modyfier) {
            let collision = [];
            this.shoot();
            this.bullets.map(bullet => {
                bullet.movement(modyfier);
            });

            this.monsters.map((monster, index) => {
                collision[this.blocks.length - 1 + monster.index] = this.hero.collisionsCheck(monster.position, 32);
                monster.movement(modyfier);
                this.bullets.map((bullet, i) => {
                    if (bullet.collisionsCheck(monster.position, 32)) {
                        this.bullets.splice(i, 1);
                        this.monsters.splice(index, 1);
                    }
                });
                if (monster.collisionsCheck(this.hero.position, 32) || monster.directionCount === 60 || this.hero.collisionsCheck(monster.position, 32)) {
                    monster.assignDirection();
                    monster.directionCount = 0;
                    this.hero.keysDown = {};
                }
                this.monsters.map(m => {
                    if ((monster.index !== m.index) && monster.collisionsCheck(m.position, 32)) {
                        monster.assignDirection();
                    }
                });
            });
            this.bullets.map((bullet, index) => {
                if (bullet.startPosition.x >= this.canvas.width || bullet.startPosition.x <= 0 ||
                    bullet.startPosition.y >= this.canvas.height || bullet.startPosition.y < 0) {
                    this.bullets.splice(index, 1);
                }
            });


            this.blocks.map((object, index) => {
                this.monsters.map(monster => {
                    if (monster.collisionsCheck(object, object.size)) {
                        monster.assignDirection();
                    }
                });
                this.bullets.map((bullet, index) => {
                    if (bullet.collisionsCheck(object, object.size)) {
                        this.bullets.splice(index, 1);
                    }
                });
                if (this.hero.collisionsCheck(object, object.size)) {
                    collision[index] = this.hero.collisionsCheck(object, object.size, 32);
                    this.hero.keysDown = {};
                }
            });

            this.hero.movement(this.keysDown, collision, modyfier);
        },
        render: function () {
            this.drawBackground();
            for (let i = 0; i < this.monsters.length; i++) {
                this.monsters[i].draw();
            }
            this.hero.draw();
            this.blocks.map(l => {
                this.context.fillRect(l.x, l.y, l.size, l.size);
            });
            this.bullets.map(bullet => {
                bullet.draw();
            });
        },
        main: function () {
            let now = Date.now();
            let delta = now - this.then;
            this.update(delta / 1000);
            this.render();
            this.then = now;
            requestAnimationFrame(this.main.bind(this));
        }
    };
    return Scene;
});