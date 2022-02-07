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
    for (let i = 0; i < BOXES.length; i++) {
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
    return !((fieldx === 1 && fieldy === 7) || (fieldx === 9 && fieldy === 7) ||
        (fieldx === 1 && fieldy === 4) || (fieldx === 1 && fieldy === 3) ||
        (fieldx === 4 && fieldy === 1) || (fieldx === 6 && fieldy === 1) ||
        (fieldx === 9 && fieldy === 4) || (fieldx === 9 && fieldy === 3) ||
        (fieldx === 3 && fieldy === 2) || (fieldx === 7 && fieldy === 2) ||
        (fieldx === 3 && fieldy === 4) || (fieldx === 3 && fieldy === 3) ||
        (fieldx === 2 && fieldy === 2) || (fieldx === 8 && fieldy === 2) ||
        (fieldx === 7 && fieldy === 4) || (fieldx === 7 && fieldy === 3) ||
        (fieldx === 5 && fieldy === 0));

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
function sleep(millis) {
    let t = (new Date()).getTime();
    let j = 0;
    while (((new Date()).getTime() - t) < millis) {
        j++;
    }
}

function _boxCollisionDown(i, plr) {
    return plr.fy === BOXES[i].fy + 1 && plr.fx === BOXES[i].fx;
}

function _boxCollisionUp(i, plr) {
    return plr.fy === BOXES[i].fy - 1 && plr.fx === BOXES[i].fx;
}

function _boxCollisionLeft(i, plr) {
    return plr.fy === BOXES[i].fy && plr.fx === BOXES[i].fx - 1;
}

function _boxCollisionRight(i, plr) {
    return plr.fy === BOXES[i].fy && plr.fx === BOXES[i].fx + 1;
}
function _boxCollisionD(PLAYER) {
    let boxCollisionDown =
        _boxCollisionDown(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionDown = boxCollisionDown || _boxCollisionDown(i, PLAYER);
    }

    return !!boxCollisionDown;
}

function _boxCollisionR(PLAYER) {
    let boxCollisionRight =
        _boxCollisionRight(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionRight = boxCollisionRight || _boxCollisionRight(i, PLAYER);
    }

    return !!boxCollisionRight;
}

function _boxCollisionU(PLAYER) {
    let boxCollisionUp =
        _boxCollisionUp(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionUp = boxCollisionUp || _boxCollisionUp(i, PLAYER);
    }

    return !!boxCollisionUp;
}

function _boxCollisionL(PLAYER) {
    let boxCollisionLeft =
        _boxCollisionLeft(0, PLAYER);

    for (let i = 1; i < BOXES.length; i++) {
        boxCollisionLeft = boxCollisionLeft || _boxCollisionLeft(i, PLAYER);
    }

    return !!boxCollisionLeft;
}


function _onCanvasKeyDown(event) {
    let boxCollisionDown = _boxCollisionD(PLAYER),
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
    for (let i = 0; i < BOXES.length; i++) {
        BOXES[i].x = BOXES[i].x0;
        BOXES[i].y = BOXES[i].y0;
        BOXES[i].fx = BOXES[i].fx0;
        BOXES[i].fy = BOXES[i].fy0;
    }
}