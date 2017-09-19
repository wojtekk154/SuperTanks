/**
 * Created by wokustrzyk on 14.09.2017.
 */

export default class Bullet {
    constructor(startPosition, direction, canvas) {
        this.direction = direction;
        this.position = this.setStartPosition(startPosition);
        this.context = canvas.getContext('2d');
        this.speed = 450;
        this.active = true;
    }

    setStartPosition(position) {
        let p = {x: 0, y: 0};
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
        return !(this.position.x + 5 < object.x || object.x + size < this.position.x ||
            this.position.y + 5 < object.y || object.y + size < this.position.y);
    }

    draw() {
        this.context.save();
        this.context.fillStyle = 'rgb(225, 140, 139)';
        this.context.fillRect(this.position.x, this.position.y, 3, 3);
        this.context.restore();
    }


}