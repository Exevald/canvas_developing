let GAME = {
    width: 1000,
    height: 650,
    canvasContext: null,
    background: null,
    win: false,
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
    keyTaken: false,
    strike: false,
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
        x: 475, //1
        y: 397,
        x0: 475,
        y0: 397,
        fx: 5,
        fx0: 5,
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
        x: 575, //10
        y: 397,
        x0: 575,
        y0: 397,
        fx: 7,
        fx0: 7,
        fy: 5,
        fy0: 5,
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

let GOLD = {
    x: 475,
    y: 247,
    fx: 5,
    fy: 2,
    chest: null,
    size: 50,
    open: false,
    draw: true,
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
let STATUS_IMG = {
    x: 250,
    y: 0,
}

let WIN = {
    width0: 950,
    height0: 695,
    width: 570,
    height: 395,
}

let Advice = 0;

let KEY = {
    x: 625,
    y: 347,
    fx: 8,
    fy: 4,
    goldy: null,
    size: 50,
    taken: false,
    draw: true,
}

let END = {
    fx: 5,
    fy: 1,
}