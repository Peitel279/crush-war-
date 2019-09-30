
const boxes = [
    {
        x: Math.floor(Math.random()* 500),
        y: Math.floor(Math.random()* 400),
        w: Math.floor(Math.random()* 150) + 100,
        h: Math.floor(Math.random()* 100) + 50,
    },
    {
        x: Math.floor(Math.random()* 500),
        y: Math.floor(Math.random()* 400),
        w: Math.floor(Math.random()* 150) + 100,
        h: Math.floor(Math.random()* 100) + 50,
    },
]

function processBox() {
    for(let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        rect(box.x - box.w / 2, box.y - box.h / 2, box.w, box.h);
    }
    for (let i =0; i < playerBullets.length; i++) {
        let bullets = playerBullets[i];
        for (let j = 0; j < boxes.length; j++) {
            let box = boxes[j];
            if (overlap(bullets, box)) {
                playerBullets.splice(i, 1);
            }
        }
    }
}