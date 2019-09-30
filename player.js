let atkDirection = {
    x: 1,
    y: 0,
};


let player = {
    x: 400,
    y: 400,
    w: 40,
    h: 40,
    hp: 100,
};

let playerBullets = [];

let count_lock = 0;

let lock = false;

let count = 0;

let x = 0;

function processPlayer() {
    const v = {
        x: 0,
        y: 0,
    };

    if (keyIsDown(65)) {
        v.x = -3;
        // player.x -= 3;
    }
    
    if (keyIsDown(68)) {
        v.x = 3;
        // player.x += 3;
    }
    
    if (keyIsDown(87)) {
        v.y = -3;
        // player.y -= 3;
    }

    if (keyIsDown(83)) {
        v.y = 3;
        // player.y += 3;
    }



    const newX = player.x + v.x;
    const newY = player.y + v.y;

    const newRectX = {
        x: newX,
        y: player.y,
        w: player.w,
        h: player.h,
    }

    const newRectY = {
        x: player.x,
        y: newY,
        w: player.w,
        h: player.h,
    }

    let dontMoveX = false;
    let dontMoveY = false;

    for(let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        if (overlap(box, newRectX)) {
            dontMoveX = true;
        }
    }

    for (let i =0; i < boxes.length; i++) {
        const box = boxes[i];
        if (overlap(box, newRectY)) {
            dontMoveY = true;
        }
    }
    if (!dontMoveX) {
        player.x += v.x;
    }
    
    if (!dontMoveY) {
        player.y += v.y;
    }

    fill("blue");
    square(player.x - player.w / 2, player.y - player.w / 2, player.w);
    
    player.x = clamp(player.x, player.w / 2, map.w - player.w / 2);
    player.y = clamp(player.y, player.h / 2, map.h - player.w / 2);

    atkDirection = normalize({
        x: mouseX - player.x,
        y: mouseY - player.y,
    });

    if (mouseIsPressed) {
        if (!lock) {
            let newBullet = {
                x: player.x,
                y: player.y,
                w: 7,
                h: 7,
                r: 5,
                vx: atkDirection.x * 5,
                vy: atkDirection.y * 5,
            }
            playerBullets.push(newBullet);
            lock = true;
            count_lock = 0;
        }
    }
    if (lock) {
        count_lock++;
        if (count_lock == 30) {
          lock = false;
        }
      }
    

    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (overlap(player, enemy)) {
            console.log("hit");
            console.log('Ouch');
            enemies.splice(i, 1)
            player.hp -= 20;
            console.log(player.hp);
            
            if (player.hp == 0) {
                console.log("Game over");
            }
        }
    }

    for (let i = 0; i < enemyBullets.length; i++) {
        let enemybullet = enemyBullets[i];
            if (overlap(player, enemybullet, false)) {
                player.hp -= 20;
                enemyBullets.splice(i, 1);
                console.log(player.hp);
            }
        }
    
}
