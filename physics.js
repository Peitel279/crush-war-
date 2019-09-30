function sides(rect) {
  return {
    left: rect.x - rect.w / 2,
    right: rect.x + rect.w / 2,
    top: rect.y - rect.h / 2,
    bot: rect.y + rect.h / 2,
  };
}

function overlap(rect1, rect2, log) {
  const {
    left: left1,
    right: right1,
    top: top1,
    bot: bot1,
  } = sides(rect1);

  const {
    left: left2,
    right: right2,
    top: top2,
    bot: bot2,
  } = sides(rect2);

  if (log) {
    console.log(rect1);
    console.log(rect2);
  }

  const xOverlap = right1 >= left2 && left1 <= right2;
  const yOverlap = bot1 >= top2 && top1 <= bot2;
  
  return xOverlap && yOverlap;
}