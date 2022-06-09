let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let space = [];
initArray();
function initArray() {
    for (var i = 0; i < 100; i++) {
        space.push([]);
    }
    for (var i = 0; i < 80; i++) {
        for (var x = space[i].length; x < 100; x++) {
            space[i].push(0);
        }
    }

}
draw();
function draw() {
    ctx.clearRect(0, 0, 500, 500);
    for (let y = 0; y < space[0].length; y++) {
        for (let x = 0; x < space[0].length; x++) {
            if (space[y][x] == 0) {
                ctx.fillStyle = "lightblue"
                ctx.fillRect(x * 5, y * 5, 5, 5);
            } else {
                ctx.fillStyle = "palegoldenrod"
                ctx.fillRect(x * 5, y * 5, 5, 5);
            }

        }
    }
}
function checkBelow(y, x) {
    if (y < 99 && space[y + 1][x] == 0) {
        return true;
    } else {
        return false;
    }
}
function checkOn(y, x) {
    if (y < 99 && space[y + 1][x] == 1) {
        return true;
    } else {
        return false;
    }
}
function checkBelowLeft(y, x) {
    if (space[y + 1][x - 1] == 0) {
        return true;
    } else {
        return false;
    }
}
function checkBelowRight(y, x) {
    if (space[y + 1][x + 1] == 0) {
        return true;
    } else {
        return false;
    }
}
function fall() {
    for (let y = space[0].length - 1; y > 0; y--) {
        for (let x = 0; x < space[0].length; x++) {
            if (space[y][x] == 1) {
                if (checkBelow(y, x)) {
                    space[y + 1][x] = 1;
                    space[y][x] = 0;
                } else {
                    if (checkOn(y, x)) {
                        if (checkBelowLeft(y, x)) {
                            space[y + 1][x - 1] = 1;
                            space[y][x] = 0;

                        } else {
                            if (checkBelowRight(y, x)) {

                                space[y + 1][x + 1] = 1;
                                space[y][x] = 0;
                            }
                        }

                    }
                }
            }

        }

    }

}
let p = 0;
setInterval(() => {
    p++;
    if (p % 3 == 0) {
        space[1][3] = 1;
        space[2][35] = 1;

    }
    fall();
    draw();
}, 10);