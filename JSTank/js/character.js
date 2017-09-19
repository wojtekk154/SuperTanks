/**
 * Created by wokustrzyk on 06.09.2017.
 */

define(() => {
    function Character() {
    }

    Character.prototype = {
        position: {
            direction: 1,
            speed: 250,
            x: 0,
            y: 0
        },
        sprite: {1: 0, 2: 64, 3: 96, 4: 32},
        canvas: {
            width: 800,
            height: 600
        },
        context: null,

        init: function () {
            this.image.onload = () => {
                this.imageReady = true;
            };
        },
        draw: function () {
                this.context.save();
                this.context.drawImage(this.image, this.sprite[this.position.direction], 0, 32, 32, this.position.x, this.position.y, 32, 32);
                this.context.restore();
        }

    };

    return Character;
});