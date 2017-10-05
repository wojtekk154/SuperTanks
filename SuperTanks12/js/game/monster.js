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
    }

    set active(value) {
        this._active = value;
    }

    get active() {
        return this._active;
    }

    setDirectionChange(){
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
        if (this.position.x >= (900 - 30))
            this.position.x = 900 - 30;
        if (this.position.x <= 0)
            this.position.x = 0;
        if (this.position.y >= (900 - 30))
            this.position.y = 900 - 30;
        if (this.position.y <= 0)
            this.position.y = 0;
    }

    // invokeDirection() {
    //     if (this.framesDirections > 60) {
    //         this.resetDirection();
    //     }
    // }
    //
    // resetDirection() {
    //     this.assignDirection();
    //     this.framesDirections = 0;
    // }
    //
    // assignDirection() {
    //     let temp = {
    //         1: {1: 'DOWN', 2: 'RIGHT', 3: 'LEFT'},
    //         2: {1: 'UP', 2: 'LEFT', 3: 'RIGHT'},
    //         3: {1: 'RIGHT', 2: 'UP', 3: 'DOWN'},
    //         4: {1: 'LEFT', 2: 'DOWN', 3: 'UP'}
    //     };
    //     switch (this.position.direction) {
    //         case MovementDirection.UP:
    //             this.position.direction = MovementDirection[temp[1][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.DOWN:
    //             this.position.direction = MovementDirection[temp[2][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.LEFT:
    //             this.position.direction = MovementDirection[temp[3][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //         case  MovementDirection.RIGHT:
    //             this.position.direction = MovementDirection[temp[4][Math.floor((Math.random() * 3) + 1)]];
    //             break;
    //     }
    // }
    //
    collisionsCheck(object, size) {
        if (this.collisionElement(object, size)) {
            switch (this.position.direction) {
                case MovementDirection.UP:
                    this.position.y = object.y + size;
                    break;
                case MovementDirection.DOWN:
                    this.position.y = object.y - 50;
                    break;
                case MovementDirection.LEFT:
                    this.position.x = object.x + size;
                    break;
                case MovementDirection.RIGHT:
                    this.position.x = object.x - 50;
                    break;
            }
            return true;
        }
        return false;
    }


    //
    // screenDirection() {
    //     if (this.colisionsScreen()) {
    //         switch (this.position.direction) {
    //             case MovementDirection.UP:
    //                 this.position.y += 5;
    //                 this.position.direction = MovementDirection.DOWN;
    //                 break;
    //             case MovementDirection.DOWN:
    //                 this.position.y -= 5;
    //                 this.position.direction = MovementDirection.UP;
    //                 break;
    //             case MovementDirection.LEFT:
    //                 this.position.x += 5;
    //                 this.position.direction = MovementDirection.RIGHT;
    //                 break;
    //             case MovementDirection.RIGHT:
    //                 this.position.x -= 5;
    //                 this.position.direction = MovementDirection.LEFT;
    //                 break;
    //         }
    //     }
    // }
}
