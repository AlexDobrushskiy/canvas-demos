var RADIUS = 30;
var CANVAS_W;
var CANVAS_H;

window.onload = function() {
    CANVAS_W = document.getElementById('id_canvas').width;
    CANVAS_H = document.getElementById('id_canvas').height;

    var canvas = document.getElementById('id_canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }

    ctx.circle = function(x, y) {
        ctx.beginPath();
        this.strokeStyle = '#000000';
        this.arc(x, y, RADIUS, 0, Math.PI*2);
        this.stroke();
    };

    ctx.clear = function(x, y) {
        this.clearRect(x-RADIUS-3, y-RADIUS-3, 2*RADIUS+6, 2*RADIUS+6)
    };

    var x = 50;
    var y = 50;
    var vx = 1;
    var vy = 2;

    var update_speed = function() {
        if (x<=RADIUS || x>=CANVAS_W-RADIUS){
            vx = -vx;
        }
        if (y<=RADIUS || y>=CANVAS_H-RADIUS){
            vy = -vy;
        }
    };

    var updateXY = function() {
        update_speed();
        x+=vx;
        y+=vy;
    };

    var draw = function() {
        ctx.clear(x, y);
        updateXY();
        ctx.circle(x, y);
    };


    setInterval(function(){
        draw();
    }, 1);

};