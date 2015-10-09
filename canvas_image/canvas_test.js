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
    var image = new Image();
    var x = 1;
    var y = 0;
    var vx = 1;
    image.addEventListener('load', function(){
        setInterval(function(){
            ctx.clearRect(x-1, y-1, image.width+2, image.height+2);
            if (x>=(canvas.width - image.width) || x<=0){
                vx = -vx;
            }
            x+=vx;
            ctx.drawImage(image, x,y);
        }, 1);
    });
    image.src = "img/donatello.png";

};

