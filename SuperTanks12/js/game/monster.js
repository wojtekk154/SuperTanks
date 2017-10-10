/**
 * Created by wokustrzyk on 14.09.2017.
 */

import Character from "./character";
import {MovementDirection} from "./dataSources";
let _ = require('lodash');

export default class Enemy extends Character {
    constructor(index, canvas, position, image) {
        super(canvas, position, image);
        this.position = position;
        this.index = index;
        this.framesDirections = 0;
        this._active = true;
        this._movementAllow = true;
        this.changeDirection = false;
        this.direct = {
            [MovementDirection.UP]: true,
            [MovementDirection.DOWN]: true,
            [MovementDirection.LEFT]: true,
            [MovementDirection.RIGHT]: true
        }
    }

    set active(value) {
        this._active = value;
    }

    get active() {
        return this._active;
    }

    setDirectionChange() {
        this.changeDirection = true;
    }

    movement(modyfier) {
        switch (this.position.direction) {
            case MovementDirection.UP:
                this.position.y -= this.speed * modyfier;
                break;
            case MovementDirection.DOWN:
                this.position.y += this.speed * modyfier;
                break;
            case MovementDirection.LEFT:
                this.position.x -= this.speed * modyfier;
                break;
            case MovementDirection.RIGHT:
                this.position.x += this.speed * modyfier;
                break;
        }
        this.framesDirections++;
    }

    colisionsScreen() {
        let screen = false;
        if (this.position.x >= (900 - 30)) {
            screen = true;
            this.position.x = 900 - 30;
        }
        if (this.position.x <= 0) {
            this.position.x = 0;
            screen = true;
        }
        if (this.position.y >= (900 - 30)) {
            this.position.y = 900 - 30;
            screen = true;
        }
        if (this.position.y <= 0) {
            this.position.y = 0;
            screen = true;
        }

        if (screen) this.setDirection();
    }

    setDirection() {
        this.position.direction = Math.floor((Math.random() * 4) + 1);
    }
}
