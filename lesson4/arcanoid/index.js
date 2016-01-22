
// All styles are fixed-size.
// FIXME: Figure out how anchor ball to parent div's coordinate (with its 'margin'='auto')

var Y_BOTTOM = 465;
var Y_TOP = 0;
var X_LEFT = 450;
var X_RIGHT = 815;
var X_SPEED = 1;
var Y_SPEED = 2;

var TOP_VALUE = Y_BOTTOM;
var LEFT_VALUE = X_LEFT+1;

var BRICK_WIDTH = 50;
var BRICK_HEIGHT = 30;

var CENTER_X;
var CENTER_Y;
var BRICKS = [];
var RADIUS = 15;
var TIMER;
var STATE = 1; // 1 - Running, 0 - paused

function change_coords() {
    // 'ball' should be an element with 'position' = 'absolute'
    if ((TOP_VALUE >= Y_BOTTOM) || (TOP_VALUE <= Y_TOP)) {
        Y_SPEED = -Y_SPEED;
    }
    if ((LEFT_VALUE >= X_RIGHT) || (LEFT_VALUE <= X_LEFT)) {
        X_SPEED = -X_SPEED;
    }
    for (var i=0; i<BRICKS.length; i++) {
        //if (TOP_VALUE < 60) {
        //    debugger;
        //}

        var brick = BRICKS[i];
        if ((LEFT_VALUE >= brick.left) && (LEFT_VALUE <= brick.right) && (TOP_VALUE >= brick.top) && (TOP_VALUE <= brick.bottom)) {
            Y_SPEED = -Y_SPEED;
            // TODO Destroy brick
            document.getElementById('id_container').removeChild(brick.element);
            BRICKS.splice(i, 1);
            break;
        }
    }

    TOP_VALUE += Y_SPEED;
    LEFT_VALUE += X_SPEED;
    CENTER_X = LEFT_VALUE + RADIUS;
    CENTER_Y = TOP_VALUE + RADIUS;
    BALL.style.top = TOP_VALUE + 'px';
    BALL.style.left = LEFT_VALUE + 'px';
}

function create_brick(top, left) {
    var brick = document.createElement('div');
    brick.className = 'brick';
    brick.style.top = top + 'px';
    brick.style.left = left + 'px';
    document.getElementById('id_container').appendChild(brick);
    return {
        element: brick,
        top: top,
        left: left+400,
        right: left + BRICK_WIDTH+400,
        bottom: top + BRICK_HEIGHT
    }
}

function fill_bricks() {
    for (var i=0; i<3; i++) {
        for (var j=0; j<8; j++) {
            var brick = create_brick(i*30, j*50);
            BRICKS.push(brick);
        }
    }
}

window.onload = function() {
    window.BALL = document.getElementById('id_ball');
    BALL.style.top = Y_BOTTOM + 'px';
    BALL.style.left = X_LEFT + 'px';
    fill_bricks();
    TIMER = setInterval(change_coords, 1);
};

window.onclick = function() {
    if (STATE==1) {
        clearInterval(TIMER);
        STATE = 0;
    } else {
        TIMER = setInterval(change_coords, 1);
        STATE = 1;
    }

};