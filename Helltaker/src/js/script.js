function _init() { //Главная функция

    let canvas = document.getElementById("canvas");

    let background = new Image(),
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
        for (let i = 0; i < BOXES.length; i++)
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