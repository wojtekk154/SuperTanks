define((require) => {
    let Character = require('./character');

    function Monster(index, position, image, canvas) {
        Character.call(this);
        this.index = index;
        this.position = position;
        this.canvas = canvas;
        this.image.src = image;
        this.context = canvas.getContext('2d');
    }

    Monster.prototype = Object.create(Character.prototype);
    Monster.prototype.constructor = Monster;
    Monster.prototype.index = null;
    Monster.prototype.image = new Image();
    Monster.prototype.imageReady= false;
    Monster.prototype.sprite = {1: 0, 2: 64, 3: 96, 4: 32};
    Monster.prototype.directionCount = 0;
    Monster.prototype.move = true;
    Monster.prototype.movement = function (modyfier) {

    };
    Monster.prototype.assignDirection = function () {
        let temp={};
        switch (this.position.direction) {
            case 1:
                temp[1] = 2;
                temp[2] = 3;
                temp[3] = 4;
                this.position.direction = temp[Math.floor((Math.random() * 3) + 1)];
                break;
            case 2:
                temp[1] = 1;
                temp[2] = 3;
                temp[3] = 4;
                this.position.direction = temp[Math.floor((Math.random() * 3) + 1)];
                break;
            case 3:
                temp[1] = 1;
                temp[2] = 2;
                temp[3] = 4;
                this.position.direction = temp[Math.floor((Math.random() * 3) + 1)];
                break;
            case 4:
                temp[1] = 1;
                temp[2] = 2;
                temp[3] = 3;
                this.position.direction = temp[Math.floor((Math.random() * 3) + 1)];
                break;
        }
    };
    Monster.prototype.collisionsCheck = function (object, size) {
        if (this.collisionAppear(object, size)) {
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
    };
    Monster.prototype.collisionAppear = function (object, size) {
        return !(this.position.x + 32 < object.x || object.x + size < this.position.x ||
        this.position.y + 32 < object.y || object.y + size < this.position.y);
    };

    return Monster;
});
