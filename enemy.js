let enemies = [{
    x: 700,
    y: 300,
    w: 30,
    h: 30,
    vx: 0,
    vy: 0,
    bulletCounter: Math.floor(Math.random() * 200),
  },

  {
    x: 200,
    y: 100,
    w: 30,
    h: 30,
    vx: 0,
    vy: 0,
    bulletCounter: Math.floor(Math.random() * 200),
  },

  {
    x: 400,
    y: 500,
    w: 30,
    h: 30,
    vx: 0,
    vy: 0,
    bulletCounter: Math.floor(Math.random() * 200),
  }
];

let enemySpawnCount = 0;

let enemyMoveCount = 0;

function processEnemy() {
    enemySpawnCount ++;
    if (enemySpawnCount == 2000) {
        enemySpawnCount = 0;
        let newEnemy = {
            x: Math.floor(Math.random() * 600) + 300,
            y: Math.floor(Math.random() * 0) + 600,
            width: 30,
            height: 30,
            vx: 0,
            vy: 0,
        };

        enemies.push(newEnemy);
        
        // let length = Math.sqrt(v.x * v.x + v.y * v.y);
        
        rect(200, 300, 100, 50);        
        stroke("white");
    }

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        for (let j = 0; j < enemies.length; j++) {
            let enemy = enemies[j];
            if (overlap(box, enemy)) {
                
            }
        }
    }

    for(let i = 0; i < enemies.length; i++) {
        // let enemy = enemies[i];
        fill("grey");
        rect(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h);

        const enemy = enemies[i];
        
        enemies[i].x += enemies[i].vx;
        enemies[i].y += enemies[i].vy;
        enemies[i].x = clamp(enemies[i].x, enemies[i].w / 2, map.w - enemies[i].w / 2);
        enemies[i].y = clamp(enemies[i].y, enemies[i].h / 2, map.h - enemies[i].h / 2);

        enemy.bulletCounter++;
        if (enemy.bulletCounter >= 100) {
            enemy.bulletCounter = 0;
            createEnemyBullet(enemies[i], player);
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

    

    if (enemyMoveCount == 27) {
        for (let i = 0; i < enemies.length; i++) {
            let move = {
                x: Math.floor(Math.random() * 7) - 3,
                y: Math.floor(Math.random() * 7) -  3,
            };
                let ran = Math.floor(Math.random() * 2);
                if (ran == 1) {
                    enemies[i].vx = move.x;
                    enemies[i].vy = 0;
                } else {
                    enemies[i].vx = 0;
                    enemies[i].vy = move.y;
                }    
            enemyMoveCount = 0;
        }
    }

    
    enemyMoveCount++;
    
}

