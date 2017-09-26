import Character from './character';
import {MovementDirection} from "./dataSources";

export default class Hero extends Character {
    constructor(canvas, position, image) {
        super(canvas, image);
        this.position = position;
        this.image.src = image;
        this.controls = {87: true, 83: true, 65: true, 68: true};
    }

    movement(keysDown, modyfier) {
        if (87 in keysDown && this.controls[87]) {
            this.position.y -= this.speed * modyfier;
            this.position.direction = 1;
        }
        if (83 in keysDown && this.controls[83]) {
            this.position.y += this.speed * modyfier;
            this.position.direction = 2;
        }
        if (65 in keysDown && this.controls[65]) {
            this.position.x -= this.speed * modyfier;
            this.position.direction = 3;
        }
        if (68 in keysDown && this.controls[68]) {
            this.position.x += this.speed * modyfier;
            this.position.direction = 4;
        }
    }

    collisionsCheck(object, size) {
        if (this.collisionElement(object, size) || this.colisionScreen(900, 900)) {
            switch (this.position.direction) {
                case MovementDirection.UP:
                    this.controls[87] = false;
                    break;
                case MovementDirection.DOWN:
                    this.controls[83] = false;
                    break;
                case MovementDirection.LEFT:
                    this.controls[65] = false;
                    break;
                case MovementDirection.RIGHT:
                    this.controls[68] = false;
                    break;
            }
        } else {
            this.controls = {87: true, 83: true, 65: true, 68: true};
        }

    }
}