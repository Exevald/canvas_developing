var FIELD = {
    width: 1000,
    height: 650,
    canvasContext: null,
    background: null,
}


function _init() { //Главная функция
    var canvas = document.getElementById("canvas");
    var background = new Image();

    background.src = 'source/background/1GrassFarm.png';

    background.onload = function () {
        FIELD.background = background;
    }

    _initCanvas(canvas);
    _main();
}

function _initCanvas(canvas) {
    FIELD.canvasContext = canvas.getContext("2d");
    canvas.width = FIELD.width;
    canvas.height = FIELD.height;
}

function _main() {
    _draw()
    requestAnimationFrame(_main);
}

function _draw() {
    FIELD.canvasContext.clearRect(0, 0, FIELD.width, FIELD.height);
    _drawBackground();
}

function _drawBackground() { //Рисуем фон
    if (FIELD.background)
        FIELD.canvasContext.drawImage(FIELD.background, 0, 0);
}