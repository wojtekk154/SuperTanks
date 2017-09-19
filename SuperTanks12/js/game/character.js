/**
 * Created by wokustrzyk on 13.09.2017.
 */

export default class Character {
    constructor(canvas, position, image) {
        this.position = position;
        this.speed = 256;
        this.image = new Image();
        this.image.src = image;
        this.context = canvas.getContext('2d');
        this.sprite = {1: 0, 2: 64, 3: 96, 4: 32};
    }

    init() {
        this.image.onload = () => {

        };
    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.sprite[this.position.direction], 0, 32, 32, this.position.x, this.position.y, 32, 32);
        this.context.restore();
    }

    collisionElement(object, size) {
        return !(this.position.x + 32 < object.x || object.x + size < this.position.x || this.position.y + 32 < object.y || object.y + size < this.position.y);
    }

    colisionsScreen(){
        if (this.position.x >= (800 - 32)) this.position.x = 800 - 32;
        if (this.position.x <= 0) this.position.x = 0;
        if (this.position.y >= (600 - 32)) this.position.y = 600 - 32;
        if (this.position.y < 0) this.position.y = 0;
    }

}