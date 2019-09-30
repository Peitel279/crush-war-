function player_bullet() {
    fill("yellow");

    // player
    for (let i = 0; i < playerBullets.length; i++) {
        let bullet = playerBullets[i];
        // square(bullet.x, bullet.y, bullet.w);
        image(poopImage, bullet.x, bullet.y);
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    }
}