/**
 * Created by wokustrzyk on 05.09.2017.
 */
Math.seed = 6;
Math.seedRandom = function (min, max) {
    max = max || 1;
    min = min || 0;

    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
    return min + rnd * (max - min);
}

function get2DArray(size1, size2) {
    let map = [];
    for (var i = 0; i < size1; i++) {
        map.push([]);
        for (var j = 0; j < size2; j++) {
            map[i].push(0);
        }
    }
    return map;
}

var size1 = 16;
var size2 = 12;


function createMap(size1, size2) {
    var map = get2DArray(size1, size2);
    for (var i = 0; i < size1; i++) {
        for (var j = 0; j < size2; j++) {
            map[i][j] = ~~Math.seedRandom(2, 0);
        }
    }
    return map;
}


function fillTheMapCave(size1, size2){
    var smootness = 3;

    for(var i=0; i < smootness; i++) {
        var new_map = get2DArray(size1, size2);
        for(var x=0; x <size1; x++){
            for(var y=0; y < size2; y++){
                var x_range = {low: Math.max(0, x-1), high: Math(min(size1 - 1, x+1))};
                var y_range = {low: Math.max(0, y-1), high: Math(min(size2 - 1, y+1))};

                var wall_count = 0;

                for(var a = x_range.low; a <= x_range.high; a++){
                    for(var b= y_range.low; b <= y_range.high; b++){
                        if((a===x) && (b===y))
                            continue;

                        wall_count += 1 -map[a][b];
                    }
                }

                if(((map[x][y]===0) && (wall_count >= 4)) ||
                    ((map[x][y] === 1) && (wall_count >= 5)) ||
                    ((x===0) || (y===0) ||(x === size1-1) || (y === size2 -1))
                ){
                  new_map[x][y] = 1;
                } else {
                    new_map[x][y] = 0;
                }
            }
        }
    }
    return new_map;
}