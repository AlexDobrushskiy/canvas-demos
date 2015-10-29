function set_circle() {
    document.getElementById('id_list').className = 'circle';
}

function set_square() {
    document.getElementById('id_list').className = 'square';
}

function set_upper_roman() {
    document.getElementById('id_list').className = 'upper_roman';
}

function set_lower_greek() {
    document.getElementById('id_list').className = 'lower_greek';
}

function add_list_element() {
    var li = document.createElement('li');
    var t = document.createTextNode('New list element');
    li.appendChild(t);
    document.getElementById('id_list').appendChild(li);
}