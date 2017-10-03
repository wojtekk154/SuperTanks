import Character from './character';
import {MovementDirection} from "./dataSources";

export default class Hero extends Character {
    constructor(canvas, position, image) {
        super(canvas, image);
        this.position = position;
        this.image.src = image;
        this.controls = {87: true, 83: true, 65: true, 68: true};
        this.keyUp = false;
    }

    movement(keysDown, modyfier) {
        if (87 in keysDown && this.controls[87]) {
            this.position.y -= 5;
            this.position.direction = 1;
        }
        if (83 in keysDown && this.controls[83]) {
            if(this.speed * modyfier )
            this.position.y += 5;
            this.position.direction = 2;
        }
        if (65 in keysDown && this.controls[65]) {
            this.position.x -= 5;
            this.position.direction = 3;
        }
        if (68 in keysDown && this.controls[68]) {
            this.position.x += 5;
            this.position.direction = 4;
        }
    }

    collisionsCheck(object, size, index) {
        if (this.collisionElement(object, size)) {
            let e = new CustomEvent('blockcolision', {
                detail: {
                    hero: {position: this.position, size: this.size},
                    object: {position: object, size: size}
                },
                bubbles: true,
                cancelable: true
            });
            document.querySelector('canvas').dispatchEvent(e);
        } else if (this.colisionScreen(900, 900)) {
            if (this.position.y <= 0) {
                this.controls[87] = false;
            } else if (this.position.y >= 900 - 30) {
                this.controls[83] = false;
            } else if (this.position.x <= 0) {
                this.controls[65] = false;
            } else if (this.position.x >= 900 - 30) {
                this.controls[68] = false;
            }
        } else {
            this.controls = {87: true, 83: true, 65: true, 68: true};
        }
    }
}