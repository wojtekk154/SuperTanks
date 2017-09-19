/**
 * Created by wokustrzyk on 05.09.2017.
 */

define(() => {
    function Bullet(position, direction, canvas) {
        this.direction = direction;
        this.calculateStartPosition(position);
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'rgb(200, 200, 200)';
    }

    Bullet.prototype = {
        startPosition: {
            x: 0,
            y: 0
        },
        speed: 500,
        canvas: null,
        context: null,
        direction: 1,
        calculateStartPosition: function (position) {
            switch (this.direction) {
                case 1:
                    this.startPosition.x = position.x + 32 / 2;
                    this.startPosition.y = position.y;
                    break;
                case 2:
                    this.startPosition.x = position.x + 32 / 2;
                    this.startPosition.y = position.y + 32;
                    break;
                case 3:
                    this.startPosition.x = position.x;
                    this.startPosition.y = position.y + 32 / 2;
                    break;
                case 4:
                    this.startPosition.x = position.x + 32;
                    this.startPosition.y = position.y + 32 / 2;
                    break;
            }
        },
        movement: function (modyfier) {
            switch (this.direction) {
                case 1:
                    this.startPosition.y -= this.speed * modyfier;
                    break;
                case 2:
                    this.startPosition.y += this.speed * modyfier;
                    break;
                case 3:
                    this.startPosition.x -= this.speed * modyfier;
                    break;
                case 4:
                    this.startPosition.x += this.speed * modyfier;
                    break;
            }
        },
        collisionsCheck: function (object, size) {
            return !(this.startPosition.x + 32 < object.x || object.x + size < this.startPosition.x ||
                this.startPosition.y + 32 < object.y || object.y + size < this.startPosition.y);
        },
        draw: function () {
            this.context.save();
            this.context.fillRect(this.startPosition.x, this.startPosition.y, 5, 5);
            this.context.restore();
        }
    };

    return Bullet;
});

