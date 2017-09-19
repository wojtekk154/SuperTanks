/**
 * Created by wokustrzyk on 14.09.2017.
 */

import Character from "./character";

export default class Enemy extends Character {
    constructor(index, canvas, position, image) {
        super(canvas, position, image);
        this.position = position;
        this.index = index;
        this.framesDirections = 0;
        this.sprite = {1: 0, 2: 64, 3: 96, 4: 32};
        this.active = true;
    }

    movement(modyfier) {
        if (this.position.direction === 1) {
            this.position.y -= this.speed * modyfier;
        }
        if (this.position.direction === 2) {
            this.position.y += this.speed * modyfier;
        }
        if (this.position.direction === 3) {
            this.position.x -= this.speed * modyfier;
        }
        if (this.position.direction === 4) {
            this.position.x += this.speed * modyfier;
        }
        if (this.colisionsScreen() || this.framesDirections > 60) {
            this.resetDirection();
        }
        this.framesDirections++;
    }

    resetDirection() {
        this.assignDirection();
        this.framesDirections = 0;
    }

    assignDirection() {
        let temp = {
            1: {1: 2, 2: 3, 3: 4},
            2: {1: 1, 2: 3, 3: 4},
            3: {1: 1, 2: 2, 3: 4},
            4: {1: 1, 2: 2, 3: 3}
        };
        switch (this.position.direction) {
            case 1:
                this.position.direction = temp[1][Math.floor((Math.random() * 3) + 1)];
                break;
            case 2:
                this.position.direction = temp[2][Math.floor((Math.random() * 3) + 1)];
                break;
            case 3:
                this.position.direction = temp[3][Math.floor((Math.random() * 3) + 1)];
                break;
            case 4:
                this.position.direction = temp[4][Math.floor((Math.random() * 3) + 1)];
                break;
        }
    }

    collisionsCheck(object, size) {
        if (this.collisionElement(object, size)) {
            switch (this.position.direction) {
                case 1:
                    this.position.y = object.y + size + 2;
                    break;
                case 2:
                    this.position.y = object.y - 34;
                    break;
                case 3:
                    this.position.x = object.x + size + 2;
                    break;
                case 4:
                    this.position.x = object.x - 34;
                    break;
            }
            return true;
        }
        return false;
    }

}
