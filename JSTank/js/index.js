/**
 * Created by wokustrzyk on 31.08.2017.
 */

requirejs.config({
    baseUrl: 'js',
    paths: {
        js: '../js'
    }
});

requirejs(['js/main']);


// let hero = require('./hero.js');
//
// let bgReady = false;
// let bgImage = new Image();
//
// let heroReady = false;
// let heroImage = new Image();
//
// let monsterReady = false;
// let monsterImage = new Image();
// let context = null;
// let heroContext, monsterContext = null;
//
// let canvas = null;
//
// let then = Date.now();
// let hero = {
//     direction: 1,
//     speed: 256,
//     x: 0,
//     y: 0
// };
//
//
//
// let keysDown = {};
// let monstersCaught = 0;
// let obstructions = [];
// initApp();
// createMap();
// setBackground();
//
// reset();
// main();
//
// function initApp() {
//     canvas = document.createElement('canvas');
//     canvas.id = "CursorLayer";
//     canvas.width = 800;
//     canvas.height = 600;
//     canvas.style.zIndex = 8;
//     canvas.style.position = "absolute";
//     canvas.style.border = "1px solid";
//
//     document.body.appendChild(canvas);
//     addEventListener('keydown', function (e) {
//         keysDown[e.keyCode] = true;
//     }, false);
//
//     addEventListener('keyup', function (e) {
//         delete keysDown[e.keyCode];
//     }, false);
// }
//
//
// function setBackground() {
//     bgImage.onload = function () {
//         bgReady = true;
//     };
//     bgImage.src = 'assets/background.png';
//
//     heroImage.onload = function () {
//         heroReady = true;
//     };
//     heroImage.src = 'assets/hero.png';
// }
//
//
//
// function update(modyfier) {
//
//
//     monsterMovement(monster.direction, modyfier);
//
//     if (hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y < (hero.y + 32)) {
//         ++monstersCaught;
//         reset();
//     }
//

//
//     obstructions.map((object) => {
//         checkCollisions(object, hero, 'HERO');
//         checkCollisions(object, monster, 'MONSTER');
//     });
//     monsterMovement(monster.direction, modyfier);
//
//
//
// }
//

//
// function setMap() {
//     for (var object in obstructions) {
//         if (obstructions.hasOwnProperty(object)) {
//             context.fillStyle = obstructions[object].color;
//             context.fillRect(obstructions[object].x, obstructions[object].y, 50, 50);
//         }
//     }
// }
//
//
//
// function createMap() {
//     obstructions = generateMapCoordinates();
//     // obstructions = [
//     //     {x: 100, y: 100, color: "rgb(67,71,5)"},
//     //     {x: 200, y: 150, color: "rgb(17,78,195)"},
//     //     {x: 350, y: 200, color: "rgb(233,164,242)"},
//     //     {x: 750, y: 350, color: "rgb(1,188,230)"},
//     //     {x: 750, y: 600, color: "rgb(224,36,45)"},
//     //     {x: 300, y: 100, color: "rgb(122,130,79)"},
//     //     {x: 550, y: 300, color: "rgb(7,106,78)"},
//     //     {x: 600, y: 50, color: "rgb(145,179,201)"},
//     //     {x: 750, y: 350, color: "rgb(219,147,134)"},
//     //     {x: 450, y: 150, color: "rgb(177,51,207)"},
//     //     {x: 300, y: 600, color: "rgb(115,50,35)"},
//     //     {x: 150, y: 400, color: "rgb(230,177,22)"},
//     //     {x: 250, y: 350, color: "rgb(178,231,128)"},
//     //     {x: 700, y: 100, color: "rgb(31,101,158)"},
//     //     {x: 250, y: 0, color: "rgb(92,59,75)"}
//     // ];
// }
//
//
// function checkCollisions(object, character, type) {
//     if (
//         ((character.x < object.x && (character.x + 32) > object.x) ||
//         (character.x < (object.x + 50) && (character.x + 32) > (object.x + 50)) ||
//         (character.x >= object.x && character.x <= (object.x + 50) &&
//         (character.x + 32) >= object.x && (character.x + 32) <= (object.x + 50))) &&
//         (character.y + 32) > object.y && (character.y + 32) < (object.y + 10)
//     ) {
//         if (type === 'HERO') {
//             character.y = object.y - 32;
//         } else {
//             character.y = object.y - 32;
//             character.direction = Math.floor((Math.random() * 4) + 1);
//         }
//
//     }
//     if (
//         ((character.x < object.x && (character.x + 32) > object.x) ||
//         (character.x < (object.x + 50) && (character.x + 32) > (object.x + 50)) ||
//         (character.x >= object.x && character.x <= (object.x + 50) &&
//         (character.x + 32) >= object.x && (character.x + 32) <= (object.x + 50))) &&
//         character.y < (object.y + 50) && character.y > (object.y + 40)
//     ) {
//         if (type === 'HERO') {
//             character.y = object.y + 50;
//         } else {
//             character.x = object.x + 50;
//             character.direction = Math.floor((Math.random() * 4) + 1);
//         }
//     }
//     if (
//         ((character.y < object.y && (character.y + 32) > object.y) ||
//         (character.y < (object.y + 50) && (character.y + 32) > (object.y + 50)) ||
//         (character.y >= object.y && character.y <= (object.y + 50)) &&
//         ((character.y + 32) >= object.y && (character.y + 32) <= (object.y + 50))) &&
//         (character.x + 32) > object.x && (character.x + 32) < (object.x + 10)
//     ) {
//         if (type === 'HERO') {
//             character.x = object.x - 32;
//         } else {
//             character.x = object.x + 50;
//             character.direction = Math.floor((Math.random() * 4) + 1);
//         }
//     }
//     if (
//         ((character.y < object.y && (character.y + 32) > object.y) ||
//         (character.y < (object.y + 50) && (character.y + 32) > (object.y + 50)) ||
//         (character.y >= object.y && character.y <= (object.y + 50)) &&
//         ((character.y + 32) >= object.y && (character.y + 32) <= (object.y + 50))) &&
//         character.x < (object.x + 50) && character.x > (object.x + 40)
//     ) {
//         if (type === 'HERO') {
//             character.x = object.x + 50;
//         } else {
//             character.x = object.x + 50;
//             character.direction = Math.floor((Math.random() * 4) + 1);
//         }
//     }
// }
//
// // monster.x = 32 + (Math.random() * (canvas.width - 64));
// // monster.y = 32 + (Math.random() * (canvas.height - 64));
//
// function generateMap() {
//     var mapa = new Array(16);
//     for (var k = 0; k < 16; k++) {
//         mapa[k] = new Array(12);
//     }
//     for (var i = 0; i < 16; i++) {
//         for (var j = 0; j < 12; j++) {
//             mapa[i][j] = Math.floor((Math.random() * 2) + 1);
//             ;
//         }
//     }
//     return mapa;
// }
//
// function generateMapCoordinates() {
//     var newMap = [];
//     var oldmap = generateMap();
//
//     for (var i = 0; i < 16; i++) {
//         for (var j = 0; j < 12; j++) {
//             if (oldmap[i][j] === 2 && newMap.length < 50) {
//                 newMap.push({x: i * 50, y: j * 50, color: 'rgb(125, 200, 50)'});
//             }
//         }
//     }
//     return newMap;
//}