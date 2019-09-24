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
    processBullets();
    processEnemy();
}

let i = 0;

let player = {
    x: 400,
    y: 400,
    w: 27,
    h: 27,
};

let map = {
    w: 800,
    h: 600,
};

let atkDirection = {
    x: 1,
    y: 0,
};

let playerBullets = [];

let count_lock = 0;

let lock = false;

let count = 0;

let x = 0;

let enemies = [{
    x: Math.floor(Math.random() * 300) + 300,
    y: Math.floor(Math.random() * 300),
    w: 30,
    h: 30,
  },

  {
    x: Math.floor(Math.random() * 300) + 300,
    y: Math.floor(Math.random() * 0),
    w: 30,
    h: 30,
  },

  {
    x: Math.floor(Math.random() * 300) + 300,
    y: Math.floor(Math.random() * 0),
    w: 30,
    h: 30,
  }
];

let enemySpawnCount = 0;

let enemyMoveCount = 0;

function clamp(x, min, max) {
    if (x < min) return min;
    if (x > max) return max;
    return x;
}



function processBullets() {
    for(let i = 0 ; i < playerBullets.length; i++) {
        let bullet = playerBullets[i];
        square(bullet.x, bullet.y, bullet.w);
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    }
}

function normalize(v) {
    // v.x
    // v.y
    // calculate length
    // return new object with x: v.x / l, y: v.y / l
    let length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.x / length,
        y: v.y / length,
    };
}



function processPlayer() {
    if (keyIsDown(65)) {
        player.x -= 3;
    }
    
    if (keyIsDown(68)) {
        player.x += 3;
    }
    
    if (keyIsDown(87)) {
        player.y -= 3;
    }

    if (keyIsDown(83)) {
        player.y += 3;
    }

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
    
    for (let i = 0; i < playerBullets.length; i++) {
        let bullets = playerBullets[i];
        for (let j = 0; j < enemies.length; j++) {
            let enemy = enemies[j];
            if (overlap(bullets, enemy)) {
                console.log("hit");
                playerBullets.splice(i, 1);
                enemies.splice(j, 1)
            }
        }
    }
}



function processEnemy() {
    enemySpawnCount ++;
    if (enemySpawnCount == 2000) {
        enemySpawnCount = 0;
        let newEnemy = {
            x: Math.floor(Math.random() * 600) + 300,
            y: Math.floor(Math.random() * 0) + 600,
            width: 30,
            height: 30,
        };
        enemies.push(newEnemy);
        // let length = Math.sqrt(v.x * v.x + v.y * v.y);
        
    }

    

    for(let i = 0; i < enemies.length; i++) {
        // let enemy = enemies[i];
        rect(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h);
        
    }

    if (enemyMoveCount == 27) {
        for (let i = 0; i < enemies.length; i++) {
            let move = {
                x: Math.floor(Math.random() * 10),
                y: 15,    
            };
        
            let ran = Math.floor(Math.random() * 2);
                if (ran == 1) {
                    enemies[i].x += move.x;
                } else {
                    enemies[i].y += move.y;
                }    
            enemyMoveCount = 0;
        }
    }
    console.log(enemyMoveCount);
    enemyMoveCount++;
    
}


