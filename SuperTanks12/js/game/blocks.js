/**
 * Created by wokustrzyk on 14.09.2017.
 */


export default class Block {
    constructor(x, y, index, canvas) {
        this.size = 30;
        this.position = {
            x: x * this.size,
            y: y * this.size
        }
        this.context = canvas.getContext('2d');
        this.index = index;
        this.indexList = {1: 'first1.png', 2: 'first.png', 3: 'third.png'};
        this.image = new Image();
        this.image.src = 'assets/' + this.indexList[index];
    }

    draw() {
        this.context.save();
        this.context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
        this.context.restore();
    }
}