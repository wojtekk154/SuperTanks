define((require) => {
    let Character = require('./character');

    function Hero(position, image, canvas) {
        Character.call(this);
        this.position = position;
        this.image.src = image;
        this.context = canvas.getContext('2d');
    }

    Hero.prototype = Object.create(Character.prototype);
    Hero.prototype.constructor = Hero;
    Hero.prototype.sprite = {1: 0, 2: 64, 3: 96, 4: 32};
    Hero.prototype.controls = {
        87: true,
        83: true,
        65: true,
        68: true
    };
    Hero.prototype.image = new Image();
    Hero.prototype.imageReady = false;
    Hero.prototype.movement = function (keysDown, collision, modyfier) {
        this.controls = this.allowControl(keysDown, collision, this.controls);
        if (87 in keysDown && this.controls[87]) {
            this.position.y -= this.position.speed * modyfier;
            this.position.direction = 1;
        }
        if (83 in keysDown && this.controls[83]) {
            this.position.y += this.position.speed * modyfier;
            this.position.direction = 2;
        }
        if (65 in keysDown && this.controls[65]) {
            this.position.x -= this.position.speed * modyfier;
            this.position.direction = 3;
        }
        if (68 in keysDown && this.controls[68]) {
            this.position.x += this.position.speed * modyfier;
            this.position.direction = 4;
        }

        if (this.position.x >= (this.canvas.width - 32)) this.position.x = this.canvas.width - 32;
        if (this.position.x <= 0) this.position.x = 0;
        if (this.position.y >= (this.canvas.height - 32)) this.position.y = this.canvas.height - 32;
        if (this.position.y < 0) this.position.y = 0;
    };
    Hero.prototype.allowControl = function (keysDown, collision, oldAllow) {
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
    };
    Hero.prototype.collisionsCheck = function (object, size) {
        return !(this.position.x + 32 < object.x || object.x + size < this.position.x ||
        this.position.y + 32 < object.y || object.y + size < this.position.y);
    };

    return Hero;
});