var GAME = {
    width: 600,
    height: 600,
    canvasContext: null,
}

function _init() { //Главная функция
    var canvas = document.getElementById("canvas");
    _initCanvas(canvas);
    _main();
}

function _initCanvas(canvas) {
    GAME.canvasContext = canvas.getContext("2d");
    canvas.width = GAME.width;
    canvas.height = GAME.height;
}

function _main() {
}