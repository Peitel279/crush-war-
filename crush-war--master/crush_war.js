function setup () {
    createCanvas(map.w, map.h);
}

function draw () {
    clear();
    background("#000000");
    stroke('brown');
    fill('black');
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










