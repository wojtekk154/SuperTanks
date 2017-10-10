/**
 * Created by wokustrzyk on 13.09.2017.
 */

export default class Character {
    constructor(canvas, position, image) {
        this.position = position;
        this.size = 29;
        this.speed = 6 * this.size;
        this.image = new Image();
        this.image.src = image;
        this.context = canvas.getContext('2d');
        this.sprite = {1: 0, 2: 2 * this.size, 3: 3 * this.size, 4: this.size};
    }

    init() {
    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.sprite[this.position.direction], 0, this.size, this.size, this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }

    collisionElement(object, size) {
        return !(this.position.x + this.size < object.x || object.x + size < this.position.x || this.position.y + this.size < object.y || object.y + size < this.position.y);
    }

    colisionScreen(w, h) {
        if (this.position.x > w - this.size ||
            this.position.x < 0 ||
            this.position.y > h - this.size ||
            this.position.y < 0) {
            return true;
        } else {
            return false;
        }
    }

    checkPosition(keycode) {
        if (keycode === 87 || keycode === 83) {
            if (this.position.y % 30 < 5) {
                this.position.y = this.position.y - (this.position.y % 30);
                return true
            }
        } else {
            if (this.position.x % 30 < 5) {
                this.position.x = this.position.x - (this.position.x % 30);
                return true
            }
        }
        return false;
    }
}