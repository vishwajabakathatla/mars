var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

rover_height = 100;
rover_width = 90;

canvas_image = "mars.jpg";

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {
    can_img = new Image();
    can_img.onload = uploadCanvasBackground;
    can_img.src = canvas_image;
    rov_img = new Image();
    rov_img.onload = uploadRover;
    rov_img.src = rover_image;
}

function uploadCanvasBackground() {
    ctx.drawImage(can_img, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(rov_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", keypressfunc);

function keypressfunc(e) {
    var keycode = e.keyCode;
    if (keycode == '38') {
        console.log("up");
        up();
    }
    if (keycode == '40') {
        console.log("down");
        down();
    }
    if (keycode == '37') {
        console.log("left");
        left();
    }
    if (keycode == '39') {
        console.log("right");
        right();
    }
}
function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 5;
        uploadCanvasBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y < 500) {
        rover_y = rover_y + 5;
        uploadCanvasBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x > 0) {
        rover_x = rover_x - 5;
        uploadCanvasBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x < 700) {
        rover_x = rover_x + 5;
        uploadCanvasBackground();
        uploadRover();
    }
    }