const enemyBullets = [];

function processEnemyBullets() {
    for (let i = 0; i < enemyBullets.length; i++) {
        let enemybullet = enemyBullets[i];

        // console.log('haha')
        
        enemybullet.x += enemybullet.vx;
        enemybullet.y += enemybullet.vy;
        

        square(enemybullet.x - 5, enemybullet.y - 5, 10);
    }


}

function createEnemyBullet(enemy, player) {
    const enemyX = enemy.x;
    const enemyY = enemy.y;

    const playerX = player.x;
    const playerY = player.y;

    const distance = {
        x: playerX - enemyX,
        y: playerY - enemyY,
        w: 10,
        h: 10,
    };

    const atkPlayer = normalize(distance);

    const newEnemyBullet = {
        x: enemyX,
        y: enemyY,
        vx: atkPlayer.x * 5,
        vy: atkPlayer.y * 5,
    };

    enemyBullets.push(newEnemyBullet);
}