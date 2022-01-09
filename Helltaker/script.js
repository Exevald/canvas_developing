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
    steps0: 30,
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
    x: 570,
    y: 240,
    chest: null,
    size: 62,
}

var BORDERS = [{

}]

var Advice = 0;

function _init() { //Главная функция

    var canvas = document.getElementById("canvas");

    // var audio = new Audio(); // Создаём новый элемент Audio
    // audio.src = 'music/Vitality.mp3'; // Указываем путь к звуку "клика"
    // audio.play // Автоматически запускаем

    var background = new Image(),
        hero = new Image(),
        block = new Image(),
        chest = new Image();

    background.src = 'img/bg.png';
    hero.src = 'img/hero.png';
    block.src = 'img/block.png';
    chest.src = 'img/chest.png';

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
    soundBackground();
    _draw()
    _update();
    requestAnimationFrame(_main);
}

function _draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    _drawBackground();
    _drawBlock();
    _drawHero();
    _drawChest();
    _drawText();

    if (Advice === 1)
        _drawAdvice()
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
    sleep(80)
}

function _drawBlock() { //Рисуем блоки
    if (BOX.block)
        GAME.canvasContext.drawImage(BOX.block, BOX.x, BOX.y, 45, 45);
}

function _drawChest() { //Рисуем сундук
    if (GOLD.chest)
        GAME.canvasContext.drawImage(GOLD.chest, GOLD.x, GOLD.y);
}

function _drawText() { //Выводим текст

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.font = '20px Crimson Pro';
    context.fillStyle = "white";

    context.fillText("• LIFE ADVICE [BUTTON H] •", 270, 650);
    context.fillText("• RESTART [BUTTON R] •", 540, 650);

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

}

function _update() {
}

function _initEventsListeners() {
    window.addEventListener("keydown", _onCanvasKeyDown);
}
function _boxCollision() {
    var boxCollisionDown = PLAYER.y + 30 <= BOX.y + BOX.size,
        boxCollisionUp = PLAYER.y + PLAYER.size >= BOX.y,
        boxCollisionRight = PLAYER.x + PLAYER.size <= BOX.x + BOX.size,
        boxCollisionLeft = PLAYER.x + PLAYER.size >= BOX.x;
    if (boxCollisionDown && boxCollisionUp && boxCollisionRight && boxCollisionLeft) {
        console.log("Collision!");
        _boxCollision = true;
    }

    return _boxCollision;
}

//   function _playMusic() {
//         var BGMusic = document.getElementById("bg-music");
//         BGMusic.play();
//}

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
    audio.play // Автоматически запускаем
  }

function _onCanvasKeyDown(event) {
    switch (event.code) {
        case "KeyW": //UP
            PLAYER.y -= PLAYER.speedy;
            PLAYER.steps -= 1;
            break;
        case "KeyA": //LEFT
            PLAYER.x -= PLAYER.speedx;
            PLAYER.steps -= 1;
            break;
        case "KeyS": //DOWN
            PLAYER.y += PLAYER.speedy;
            PLAYER.steps -= 1;

            break;
        case "KeyD": //RIGHT
            PLAYER.x += PLAYER.speedx;
            PLAYER.steps -= 1;
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
}