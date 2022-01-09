var GAME = {
    width: 1200,
    height: 680,
    canvasContext: null,
    background: null,
}

var PLAYER = {
    x0: 400,
    y0: 450,
    x: 400,
    y: 450,
    hero: null,
    steps: 0,
}

var BOX = {
    x: 525,
    y: 380,
    block: null,
}

var GOLD = {
    x: 570,
    y: 240,
    chest: null,
}

function _init() { //Главная функция

    var canvas = document.getElementById("canvas");

    var background = new Image(),
        hero = new Image(),
        block = new Image(),
        chest = new Image();

    background.src = 'img/bg.png';
    hero.src = 'img/hero.png';
    block.src = 'img/block.png';
    chest.src = 'img/chest.png';

    background.onload = function() {
        GAME.background = background;
    }
    hero.onload = function() {
        PLAYER.hero = hero;
    }
    block.onload = function() {
        BOX.block = block;
    }
    chest.onload = function() {
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
    _draw()
    _update();
    requestAnimationFrame(_main);
}

function _draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    _drawBackground();
    _drawHero();
    _drawBlock();
    _drawChest();
    _drawText();    
}

function _drawBackground() {
    if (GAME.background)
        GAME.canvasContext.drawImage(GAME.background, 100, 0);
}

function _drawHero() {
    if (PLAYER.hero)
        GAME.canvasContext.drawImage(PLAYER.hero, 0, 0, 105, 130, PLAYER.x, PLAYER.y, 100, 100);
}

function _drawBlock() {
    if (BOX.block)
        GAME.canvasContext.drawImage(BOX.block, BOX.x, BOX.y);
}

function _drawChest() {
    if (GOLD.chest)
        GAME.canvasContext.drawImage(GOLD.chest, GOLD.x, GOLD.y);
}

function _drawText() {
    
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.font = '20px Crimson Pro';
    context.fillStyle = "white";

    context.fillText("• LIFE ADVICE [BUTTON H] •", 370, 650);
    context.fillText("• RESTART [BUTTON R] •", 640, 650);
}

function _update() {

}

function _initEventsListeners() {
    window.addEventListener("keydown", _onCanvasKeyDown);
}

function _onCanvasKeyDown(event) {
    switch(event.code) {
        case "KeyW": //UP
            //console.log("W");
            PLAYER.y -= 50;
            break;
        case "KeyA": //LEFT
            //console.log("A");
            PLAYER.x -= 50;
            break;
        case "KeyS": //DOWN
            //console.log("S");
            PLAYER.y += 50;
            break;
        case "KeyD": //RIGHT
            //console.log("D");
            PLAYER.x += 50;
            break;
        case "KeyR": //RESTART
            console.log("RESTART");
            console.clear();
            //ОБНУЛЕНИЕ КООРДИНАТ УРОВНЯ
            PLAYER.x = PLAYER.x0;
            PLAYER.y = PLAYER.y0;

            break;
        case "KeyH": //HELP
            console.log("HELP");
            break;
    }
}