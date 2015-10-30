var ID = 1;
var SCORE = 0;

function remove_concrete_target(target_id){
    var parent = document.getElementById('id_container');
    var target = document.getElementById(target_id);
    parent.removeChild(target);
}

function remove_target(event) {
    var target_id = event.target.id;
    remove_concrete_target(target_id);
}

function hit(event) {
    remove_target(event);
    SCORE = SCORE + 1;
    document.getElementById('id_score').innerHTML = ''+SCORE;
}

function create_target(x, y, id) {
    var target = document.createElement('div');
    target.className = 'target';
    target.style.left = x+'px';
    target.style.top = y+'px';
    target.onclick = hit;
    target.id = id;
    document.getElementById('id_container').appendChild(target);
    setTimeout(remove_concrete_target, 1000, id);
}

function create_random_target() {
    var x = Math.floor(Math.random()*400)+200;
    var y = Math.floor(Math.random()*400)+1;
    var local_id = 'id_target_' + ID;
    ID = ID+1;
    create_target(x, y, local_id);
}

window.onload = function() {
    setInterval(create_random_target, 1000);
};