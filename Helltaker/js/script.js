var GAME = {
    width: 1000,
    height: 650,
    canvasContext: null,
    background: null,
}

var PLAYER = {
    x0: 315,
    y0: 470,
    x: 315,
    y: 470,
    size: 50,
    hero: null,
    sprite: 1,
    steps0: 33,
    steps: 33,
    speedx: 50,
    speedy: 50,
}

var BOX = {
    x: 425,
    y: 397,
    block: null,
    size: 50,
}

var GOLD = {
    x: 475,
    y: 247,
    chest: null,
    size: 50,
}

var ADVICE = {
    x: 200,
    y: 300,
    width0: 970,
    height0: 695,
    width: 570,
    height: 395,
    cerberus: null,
}

var BORDERS = [{

}]

var Advice = 0;

function _init() { //Главная функция

    var canvas = document.getElementById("canvas");

    var background = new Image(),
        hero = new Image(),
        block = new Image(),
        chest = new Image(),
        cerberus = new Image();

    background.src = 'img/bg.png';
    hero.src = 'img/hero.png';
    block.src = 'img/block.png';
    chest.src = 'img/chest.png';
    cerberus.src = 'img/Cerberus.png';

    background.onload = function () {
        GAME.background = background;
    }
    hero.onload = function () {
        PLAYER.hero = hero;
    }
    block.onload = function () {
        BOX.block = block;
    }
    chest.onload = function () {
        GOLD.chest = chest;
    }
    cerberus.onload = function () {
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
    _update();
    requestAnimationFrame(_main);
}

function _draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    _drawBackground();
    _drawBlock();
    _drawChest();
    _drawHero();

    if (Advice === 1)
        _drawAdvice();

    _drawText();
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

function _drawBlock() { //Рисуем блоки
    if (BOX.block)
        GAME.canvasContext.drawImage(BOX.block, BOX.x, BOX.y, 45, 45);
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

    context.fillStyle = "white";
    context.font = '20px Crimson Pro';
    context.fillText("LIFE ADVICE", 800, 100);

    if (ADVICE.cerberus)
        GAME.canvasContext.drawImage(ADVICE.cerberus, 0, 0, ADVICE.width0, ADVICE.height0, ADVICE.x, ADVICE.y, ADVICE.width, ADVICE.height);

}

function _update() {
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

function soundBackground() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'music/Vitality.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay // Автоматически запускаем
  }

function _onCanvasKeyDown(event) {

    var boxCollisionDown = PLAYER.y + 27 === BOX.y + BOX.size && PLAYER.x + 10 === BOX.x,
        boxCollisionUp = PLAYER.y + PLAYER.size + 27 === BOX.y && PLAYER.x + 10 === BOX.x,
        boxCollisionRight = PLAYER.x + 10 === BOX.x + BOX.size && PLAYER.y === BOX.y - 27,
        boxCollisionLeft = PLAYER.x + PLAYER.size + 10 === BOX.x && PLAYER.y === BOX.y - 27;

    switch (event.code) {
        case "KeyW": //UP
            if (!boxCollisionDown) {
                PLAYER.y -= PLAYER.speedy;
                PLAYER.steps -= 1;
                console.log("PLAYER.x: ", PLAYER.x);
                console.log("PLAYER.y: ", PLAYER.y);
                console.log("BRUH ^з^: ", BOX.y + BOX.size);
                console.log("BOX.x: ", BOX.x);
                //console.log("Collision w");
            }
            break;
        case "KeyA": //LEFT
            if (!boxCollisionRight) {
                PLAYER.x -= PLAYER.speedx;
                PLAYER.steps -= 1;
                console.log("PLAYER.x: ", PLAYER.x);
                console.log("PLAYER.y: ", PLAYER.y);
                console.log("BRUH ^з^: ", BOX.y + BOX.size);
                console.log("BOX.x: ", BOX.x);
                //console.log("Collision a");
            }
            break;
        case "KeyS": //DOWN
            if (!boxCollisionUp) {
                PLAYER.y += PLAYER.speedy;
                PLAYER.steps -= 1;
                console.log("PLAYER.x: ", PLAYER.x);
                console.log("PLAYER.y: ", PLAYER.y);
                console.log("BRUH ^з^: ", BOX.y + BOX.size);
                console.log("BOX.x: ", BOX.x);
                //console.log("Collision s");
            }
            break;
        case "KeyD": //RIGHT
            if (!boxCollisionLeft) {
                PLAYER.x += PLAYER.speedx;
                PLAYER.steps -= 1;
                console.log("PLAYER.x: ", PLAYER.x);
                console.log("PLAYER.y: ", PLAYER.y);
                console.log("BRUH ^з^: ", BOX.y + BOX.size);
                console.log("BOX.x: ", BOX.x);
                //console.log("Collision d");
            }
            break;
        case "KeyR": //RESTART
            console.log("RESTART");
            console.clear();

            //ОБНУЛЕНИЕ КООРДИНАТ И ШАГОВ
            PLAYER.x = PLAYER.x0;
            PLAYER.y = PLAYER.y0;
            PLAYER.steps = PLAYER.steps0;

            break;
        case "KeyH": //HELP
            console.log("HELP");
            if (Advice === 0)
                Advice = 1;
            else
                Advice = 0;
            break;
    }
    // _boxCollision();
}