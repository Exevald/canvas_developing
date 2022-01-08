var GAME = {
    width: 1000,
    height: 680,
    canvasContext: null,
    background: null,
}

var PLAYER = {
    x: 500,
    y: 450,
    hero: null,
}

var BOX = {
    x: 500,
    y: 500,
    block: null,
}

var GOLD = {
    x: 470,
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
    _main();
}

function _initCanvas(canvas) {
    GAME.canvasContext = canvas.getContext("2d");
    canvas.width = GAME.width;
    canvas.height = GAME.height;
}

function _draw() {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    _drawBackground();
    _drawHero();
    _drawBlock();
    _drawChest();
    _drawText();    
}

function _drawBackground() {
    if (GAME.background)
        GAME.canvasContext.drawImage(GAME.background, 0, 0);
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

    context.fillText("• LIFE ADVICE [BUTTON H] •", 270, 650);
    context.fillText("• RESTART [BUTTON R] •", 540, 650);
}

function _update() {

}

function _main() {
    _draw()
    _update();
    requestAnimationFrame(_main);
}