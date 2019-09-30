let poopImage;

function preload() {
    poopImage = loadImage('poop.png');
}

function setup () {
    createCanvas(map.w, map.h);
}

function draw () {
    clear();
    background("#FFFFFF");
    stroke('brown');
    fill('"#FFFFFF"');
    rect(0, 0, map.w, map.h);
    stroke("white");
    fill('white');
    processPlayer();
    player_bullet();
    processEnemyBullets();
    processEnemy();
    processBox();
}

let i = 0;

let map = {
    w: 800,
    h: 600,
};










