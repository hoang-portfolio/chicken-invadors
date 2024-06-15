const game = new Game();
const player = new Player();
const $container = document.querySelector(".game");
const laserIncrease = new LaserIncrease(Math.random() * 1400, 50);
let isLaserIncreaseExist = false;

game.init();

function update(e) {
  const currentTime = Date.now();
  const dt = (currentTime - game.lastTime) / 1000.0;

  if (game.gameOver) {
    document.querySelector(".game-over").style.display = "block";
    document.getElementsByClassName("score_modal")[2].innerHTML =
      "Your score: " + SCORE;

    return;
  }

  // won -> next level
  if (player.won()) {
    laserIncrease.create($container);
    levels++;
    isLaserIncreaseExist = true;
    laserIncrease.x = Math.random() * 1400;
    laserIncrease.y = 50;

    ENEMIES_PER_ROW += 3;
    if(ENEMY_COOLDOWN >= 6)ENEMY_COOLDOWN -= 2;
    if(levels === 3 || levels === 5 || levels === 7) ENEMIES_PER_COLUNM += 1;

    const enemySpacing =
      (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);

    for (let j = 0; j < ENEMIES_PER_COLUNM; j++) {
      const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
      for (let i = 0; i < ENEMIES_PER_ROW; i++) {
        const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
        const enemy = new Enemy(x, y);
        const src = "Images/chicken.png";
        enemy.create($container, src); //needs the Player Class
      }
    }
  }

  if(isLaserIncreaseExist) laserIncrease.update($container);
  player.update(dt, $container);
  updateLasers(dt, $container);
  updateEnemies(dt, $container);
  updateEnemyLasers(dt, $container);
  updatePresents(dt, $container);

  game.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

function getMousePosition(event) {
  return {
    x: event.clientX,
    y: event.clientY
  };
}

document.addEventListener("mousemove", function (event) {
  const mousePos = getMousePosition(event);
  game.playerX = mousePos.x;
  game.playerY = mousePos.y;
});


document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    game.mousePressed = true;
  }
});

document.addEventListener("mouseup", function (event) {
  if (event.button === 0) {
    if (game.mousePressed) {
      game.mousePressed = false;
    }
  }
});

function onKeyUp(e) {
  if (e.key === "m" || e.key == "M") {
    mute_game();
  }
}

function mute_game() {
  AUDIO = !AUDIO;
  if (AUDIO) document.getElementById("mute_icon").style.display = "none";
  else document.getElementById("mute_icon").style.display = "block";
}

window.addEventListener("keyup", onKeyUp);
document.getElementById("mute").addEventListener("click", mute_game);
document.getElementById("mute_icon").addEventListener("click", function () {
  AUDIO = !AUDIO;
  document.getElementById("mute_icon").style.display = "none";
});
window.requestAnimationFrame(update);
