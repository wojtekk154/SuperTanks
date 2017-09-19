/**
 * Created by wokustrzyk on 05.09.2017.
 */
define(() => {
    function BattaleField(canvas, position) {
        this.context = canvas.getContext('2d');
        this.position = position;

    }

    BattaleField.prototype = {
        position: {
            x: 0,
            y: 0
        },
        size: 50,
        context: null,
        init: function () {

        },
        draw: function () {
            this.context.fillStyle = 'rgb(120, 100, 200)';
            this.context.fillRect(this.position.x, this.position.y, this.size, this.size);

        }
    };

    return BattaleField;
});