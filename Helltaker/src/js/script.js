let GAME = {
    width: 1000,
    height: 650,
    canvasContext: null,
    background: null,
}

let PLAYER = {
    x0: 315,
    y0: 470,
    x: 315,
    y: 470,
    fx: 2,
    fy: 7,
    size: 50,
    hero: null,
    sprite: 1,
    steps0: 33,
    steps: 33,
    speedx: 50,
    speedy: 50,
}

let BOXES = [{
        x: 325, //0
        y: 447,
        x0: 325,
        y0: 447,
        fx: 2,
        fx0: 2,
        fy: 6,
        fy0: 6,
        block: null,
        size: 50,
    },
    {
        x: 425, //1
        y: 397,
        x0: 425,
        y0: 397,
        fx: 4,
        fx0: 4,
        fy: 5,
        fy0: 5,
        block: null,
        size: 50,
    },
    {
        x: 375, //2
        y: 447,
        x0: 375,
        y0: 447,
        fx: 3,
        fx0: 3,
        fy: 6,
        fy0: 6,
        block: null,
        size: 50,
    },
    {
        x: 425, //3
        y: 447,
        x0: 425,
        y0: 447,
        fx: 4,
        fx0: 4,
        fy: 6,
        fy0: 6,
        block: null,
        size: 50,
    },
    {
        x: 325, //4
        y: 297,
        x0: 325,
        y0: 297,
        fx: 2,
        fx0: 2,
        fy: 3,
        fy0: 3,
        block: null,
        size: 50,
    },
    {
        x: 275, //5
        y: 397,
        x0: 275,
        y0: 397,
        fx: 1,
        fx0: 1,
        fy: 5,
        fy0: 5,
        block: null,
        size: 50,
    },
    {
        x: 425, //6
        y: 247,
        x0: 425,
        y0: 247,
        fx: 4,
        fx0: 4,
        fy: 2,
        fy0: 2,
        block: null,
        size: 50,
    },
    {
        x: 530, //7
        y: 247,
        x0: 530,
        y0: 247,
        fx: 6,
        fx0: 6,
        fy: 2,
        fy0: 2,
        block: null,
        size: 50,
    },
    {
        x: 425, //8
        y: 297,
        x0: 425,
        y0: 297,
        fx: 4,
        fx0: 4,
        fy: 3,
        fy0: 3,
        block: null,
        size: 50,
    },
    {
        x: 425, //9
        y: 347,
        x0: 425,
        y0: 347,
        fx: 4,
        fx0: 4,
        fy: 4,
        fy0: 4,
        block: null,
        size: 50,
    },
    {
        x: 475, //10
        y: 347,
        x0: 475,
        y0: 347,
        fx: 5,
        fx0: 5,
        fy: 4,
        fy0: 4,
        block: null,
        size: 50,
    },
    {
        x: 525, //11
        y: 347,
        x0: 525,
        y0: 347,
        fx: 6,
        fx0: 6,
        fy: 4,
        fy0: 4,
        block: null,
        size: 50,
    },
    {
        x: 575, //12
        y: 447,
        x0: 575,
        y0: 447,
        fx: 7,
        fx0: 7,
        fy: 6,
        fy0: 6,
        block: null,
        size: 50,
    },
    {
        x: 625, //13
        y: 447,
        x0: 625,
        y0: 447,
        fx: 8,
        fx0: 8,
        fy: 6,
        fy0: 6,
        block: null,
        size: 50,
    },
    {
        x: 575, //14
        y: 497,
        x0: 575,
        y0: 497,
        fx: 7,
        fx0: 7,
        fy: 7,
        fy0: 7,
        block: null,
        size: 50,
    },
    {
        x: 425, //15
        y: 497,
        x0: 425,
        y0: 497,
        fx: 4,
        fx0: 4,
        fy: 7,
        fy0: 7,
        block: null,
        size: 50,
    },
]

var GOLD = {
    x: 475,
    y: 247,
    chest: null,
    size: 50,
}

let ADVICE = {
    x: 200,
    y: 0,
    width0: 970,
    height0: 695,
    width: 570,
    height: 395,
    cerberus: null,
}
let LOSE = {
    x: 250,
    y: 0,
}

let Advice = 0;

let i = 0;

function _init() { //Главная функция

    var canvas = document.getElementById("canvas");

    var background = new Image(),
        hero = new Image(),
        block = new Image(),
        chest = new Image(),
        cerberus = new Image();

    background.src = 'src/img/bg.png';
    hero.src = 'src/img/hero.png';
    block.src = 'src/img/block.png';
    chest.src = 'src/img/chest.png';
    cerberus.src = 'src/img/Cerberus.png';

    background.onload = function() {
        GAME.background = background;
    }
    hero.onload = function() {
        PLAYER.hero = hero;
    }
    block.onload = function() {
        for (i = 0; i < BOXES.length; i++)
            BOXES[i].block = block;

    }
    chest.onload = function() {
        GOLD.chest = chest;
    }
    cerberus.onload = function() {
        ADVICE.cerberus = cerberus;
    }

    _initCanvas(canvas);
    _initEventsListeners();
    _main();
}

function _initCanvas(canvas) {
    GAME.canvasContext = canvas.getContext("2d");
    canvas.width = GAME.width;
    canvas.height = GAME.height;
}

function _main() {
    _draw()
    requestAnimationFrame(_main);
}

function _draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    _drawBackground();
    for (i = 0; i < BOXES.length; i++) {
        _drawBlock(i);
    }
    _drawChest();
    _drawHero();
    _drawText();
    if (Advice === 1)
        _drawAdvice();
    if (PLAYER.steps === 0) {
        _lose();

    }
}

function _drawBackground() { //Рисуем фон
    if (GAME.background)
        GAME.canvasContext.drawImage(GAME.background, 0, 0);
}

function _drawHero() { //Рисуем игрока
    if (PLAYER.hero)
        GAME.canvasContext.drawImage(PLAYER.hero, PLAYER.sprite * 100, 0, 100, 130, PLAYER.x, PLAYER.y, PLAYER.size + 10, PLAYER.size + 20);
    if (PLAYER.sprite < 11) {
        PLAYER.sprite++
    } else {
        PLAYER.sprite = 1
    }
    sleep(75);
}

function _drawBlock(num) { //Рисуем блоки

    if (BOXES[num].block) {
        GAME.canvasContext.drawImage(BOXES[num].block, BOXES[num].x, BOXES[num].y, 45, 45);
    }
    //console.log("Рисуем блок", i);
}

function _drawChest() { //Рисуем сундук
    if (GOLD.chest)
        GAME.canvasContext.drawImage(GOLD.chest, GOLD.x, GOLD.y, GOLD.size, GOLD.size);
}

function _drawText() { //Выводим текст

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.font = '20px Crimson Pro';
    context.fillStyle = "white";

    context.fillText("• LIFE ADVICE [BUTTON H] •", 270, 630);
    context.fillText("• RESTART [BUTTON R] •", 540, 630);

    context.font = '40px Crimson Pro';
    context.fillText("STEPS:", 60, 430);

    context.font = '80px Crimson Pro';
    context.fillText(PLAYER.steps, 80, 530);
}

function _drawAdvice() {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = "rgba(2, 2, 27, 1)";
    context.fillRect(ADVICE.x, 0, ADVICE.width, 650);

    if (ADVICE.cerberus)
        GAME.canvasContext.drawImage(ADVICE.cerberus, 0, 0, ADVICE.width0, ADVICE.height0, ADVICE.x, ADVICE.y, ADVICE.width, ADVICE.height);

    context.fillStyle = "rgba(169, 52, 63, 1)";
    context.font = '21px Crimson Pro Bold';
    context.fillText("• Cerberus, the Triple Demon •", 350, 430);

    context.fillStyle = "white";
    context.font = '20px Crimson Pro Bold';
    context.fillText("Go through the whole map, moving boxes and opening chests.", 240, 490);
    context.fillText("GOOD LUCK!", 420, 520);

}

function _fieldCollision(fieldx, fieldy) {
    if ((fieldx === 1 && fieldy === 7) || (fieldx === 9 && fieldy === 7) ||
        (fieldx === 1 && fieldy === 4) || (fieldx === 1 && fieldy === 3) ||
        (fieldx === 4 && fieldy === 1) || (fieldx === 6 && fieldy === 1) ||
        (fieldx === 9 && fieldy === 4) || (fieldx === 9 && fieldy === 3) ||
        (fieldx === 3 && fieldy === 2) || (fieldx === 7 && fieldy === 2) ||
        (fieldx === 3 && fieldy === 4) || (fieldx === 3 && fieldy === 3) ||
        (fieldx === 2 && fieldy === 2) || (fieldx === 8 && fieldy === 2) ||
        (fieldx === 7 && fieldy === 4) || (fieldx === 7 && fieldy === 3) ||
        (fieldx === 5 && fieldy === 0)) {
        return false;

    } else return true

}

function _lose() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = "rgba(2, 2, 27, 1)";
    context.fillRect(ADVICE.x, 0, ADVICE.width, 650);

    if (ADVICE.cerberus)
        GAME.canvasContext.drawImage(ADVICE.cerberus, ADVICE.width0 * 2, 0, ADVICE.width0, ADVICE.height0, LOSE.x, LOSE.y, ADVICE.width, ADVICE.height);

    context.fillStyle = "white";
    context.font = '30px Crimson Pro';
    context.fillText("YOU LOSE! TRY AGAIN", 350, 450);
    context.fillText("PRESS R TO RESTART", 361, 487);

}

function _initEventsListeners() {
    window.addEventListener("keydown", _onCanvasKeyDown);
}

var checkCollision = 0;


function sleep(millis) {
    var t = (new Date()).getTime();
    var j = 0;
    while (((new Date()).getTime() - t) < millis) {
        j++;
    }
}

function _boxCollisionDown(i, plr) {
    if (plr.fy === BOXES[i].fy + 1 && plr.fx === BOXES[i].fx) {
        return true
    } else return false
}

function _boxCollisionUp(i, plr) {
    if (plr.fy === BOXES[i].fy - 1 && plr.fx === BOXES[i].fx) {
        return true
    } else return false
}

function _boxCollisionLeft(i, plr) {
    if (plr.fy === BOXES[i].fy && plr.fx === BOXES[i].fx - 1) {
        return true
    } else return false
}

function _boxCollisionRight(i, plr) {
    if (plr.fy === BOXES[i].fy && plr.fx === BOXES[i].fx + 1) {
        return true
    } else return false
}

function _Collision(a, b) {

}

function _boxCollisionD(PLAYER) {
    var boxCollisionDown =
        _boxCollisionDown(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionDown = boxCollisionDown || _boxCollisionDown(i, PLAYER);
    }

    if (boxCollisionDown) {
        return true
    } else return false
}

function _boxCollisionR(PLAYER) {
    var boxCollisionRight =
        _boxCollisionRight(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionRight = boxCollisionRight || _boxCollisionRight(i, PLAYER);
    }

    if (boxCollisionRight) {
        return true
    } else return false
}

function _boxCollisionU(PLAYER) {
    var boxCollisionUp =
        _boxCollisionUp(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionUp = boxCollisionUp || _boxCollisionUp(i, PLAYER);
    }

    if (boxCollisionUp) {
        return true
    } else return false
}

function _boxCollisionL(PLAYER) {
    var boxCollisionLeft =
        _boxCollisionLeft(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionLeft = boxCollisionLeft || _boxCollisionLeft(i, PLAYER);
    }

    if (boxCollisionLeft) {
        return true
    } else return false
}


function _onCanvasKeyDown(event) {
    var boxCollisionDown = _boxCollisionD(PLAYER),
        boxCollisionUp = _boxCollisionU(PLAYER),
        boxCollisionLeft = _boxCollisionL(PLAYER),
        boxCollisionRight = _boxCollisionR(PLAYER);

    if (PLAYER.steps > 0) {
        switch (event.code) {
            case "KeyW": //UP
                if (!boxCollisionDown && PLAYER.fy > 1 && _fieldCollision(PLAYER.fx, PLAYER.fy - 1)) {
                    PLAYER.y -= PLAYER.speedy;
                    PLAYER.steps -= 1;
                    PLAYER.fy -= 1;
                } else
                    for (let i = 0; i < BOXES.length; i++) {
                        if (BOXES[i].fx === PLAYER.fx && BOXES[i].fy === PLAYER.fy - 1 && _fieldCollision(BOXES[i].fx, BOXES[i].fy - 1) && !_boxCollisionD(BOXES[i])) {
                            BOXES[i].y -= 50;
                            BOXES[i].fy -= 1;
                            PLAYER.steps -= 1;
                        }
                    }
                break;
            case "KeyA": //LEFT
                if (!boxCollisionRight && PLAYER.fx > 1 && _fieldCollision(PLAYER.fx - 1, PLAYER.fy)) {
                    PLAYER.x -= PLAYER.speedx;
                    PLAYER.steps -= 1;
                    PLAYER.fx -= 1;
                } else
                    for (let i = 0; i < BOXES.length; i++) {
                        if (BOXES[i].fx === PLAYER.fx - 1 && BOXES[i].fy === PLAYER.fy && _fieldCollision(BOXES[i].fx - 1, BOXES[i].fy) && BOXES[i].fx > 1 && !_boxCollisionR(BOXES[i])) {
                            BOXES[i].x -= 50;
                            BOXES[i].fx -= 1;
                            PLAYER.steps -= 1;
                        }
                    }
                break;
            case "KeyS": //DOWN
                if (!boxCollisionUp && PLAYER.fy < 7 && _fieldCollision(PLAYER.fx, PLAYER.fy + 1)) {
                    PLAYER.y += PLAYER.speedy;
                    PLAYER.steps -= 1;
                    PLAYER.fy += 1;
                } else
                    for (let i = 0; i < BOXES.length; i++) {
                        if (BOXES[i].fx === PLAYER.fx && BOXES[i].fy === PLAYER.fy + 1 && _fieldCollision(BOXES[i].fx, BOXES[i].fy + 1) && BOXES[i].fy < 7 && !_boxCollisionU(BOXES[i])) {
                            BOXES[i].y += 50;
                            BOXES[i].fy += 1;
                            PLAYER.steps -= 1;
                        }
                    }
                break;
            case "KeyD": //RIGHT
                if (!boxCollisionLeft && PLAYER.fx < 9 && _fieldCollision(PLAYER.fx + 1, PLAYER.fy)) {
                    PLAYER.x += PLAYER.speedx;
                    PLAYER.steps -= 1;
                    PLAYER.fx += 1;
                } else
                    for (let i = 0; i < BOXES.length; i++) {
                        if (BOXES[i].fx === PLAYER.fx + 1 && BOXES[i].fy === PLAYER.fy && _fieldCollision(BOXES[i].fx + 1, BOXES[i].fy) && BOXES[i].fx < 9 && !_boxCollisionL(BOXES[i])) {
                            BOXES[i].x += 50;
                            BOXES[i].fx += 1;
                            PLAYER.steps -= 1;
                        }
                    }
                break;
            case "KeyR": //RESTART
                console.log("RESTART");
                console.clear();

                //ОБНУЛЕНИЕ КООРДИНАТ И ШАГОВ
                _restart();

                break;
            case "KeyH": //HELP
                console.log("HELP");
                if (Advice === 0)
                    Advice = 1;
                else
                    Advice = 0;
                break;
        }
    } else {
        if (event.code === "KeyR") {
            _restart();
        }
    }
}
if (PLAYER.steps === 0) {
    _draw();
}

function _restart() {

    PLAYER.x = PLAYER.x0;
    PLAYER.y = PLAYER.y0;
    PLAYER.steps = PLAYER.steps0;
    PLAYER.fx = 2;
    PLAYER.fy = 7;
    for (i = 0; i < BOXES.length; i++) {
        BOXES[i].x = BOXES[i].x0;
        BOXES[i].y = BOXES[i].y0;
        BOXES[i].fx = BOXES[i].fx0;
        BOXES[i].fy = BOXES[i].fy0;
    }
}