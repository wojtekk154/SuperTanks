/**
 * Created by wokustrzyk on 14.09.2017.
 */

export default class Block {
    constructor(position, canvas) {
        this.position = position;
        this.context = canvas.getContext('2d');
        this.color = 'rgb(120, 240, 200)';
        this.size = 50;
    }

    draw(){
        this.context.save();
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }
}