/**
 * Created by wokustrzyk on 14.09.2017.
 */


export default class Block {
    constructor(x, y, index, canvas) {
        this.position = {
            x: x*30,
            y: y*30
        };
        this.context = canvas.getContext('2d');
        this.index = index;
        this.size = 30;
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