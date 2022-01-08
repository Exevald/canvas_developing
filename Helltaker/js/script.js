var GAME = {
    width: 1000,
    height: 650,
    canvasContext: null,
}

function _init() { //Главная функция
    var canvas = document.getElementById("canvas");

    var image = new Image();
    image.src = 'img/bg.png';

    image.onload = function() {
        GAME.image = image;
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

    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    if (GAME.image)
        GAME.canvasContext.drawImage(GAME.image, 0, 0);
}

function _update() {

}

function _main() {
    _draw()
    _update();
    requestAnimationFrame(_main);
}