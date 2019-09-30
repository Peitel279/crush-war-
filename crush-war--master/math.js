
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


function clamp(x, min, max) {
    if (x < min) return min;
    if (x > max) return max;
    return x;
}
