class Player {
  create($container, img) {
    game.playerX = GAME_WIDTH / 2;
    game.playerY = GAME_HEIGHT - 50;
    const $player = document.createElement("img");
    $player.src = img; //"Images/player-blue-1.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, game.playerX, game.playerY);
  }
  update(dt, $container) {
    game.playerX = this.clamp(
      game.playerX,
      PLAYER_WIDTH,
      GAME_WIDTH - PLAYER_WIDTH
    );
    game.playerY = this.clamp(
      game.playerY,
      PLAYER_HEIGHT - 40,
      GAME_HEIGHT - PLAYER_HEIGHT
    );

    if (game.mousePressed && game.playerCooldown <= 0 && !PAUSE) {
      const laser = new Laser(game.playerX, game.playerY);
      laser.create($container);
      game.playerCooldown = LASER_COOLDOWN;
    }
    if (game.playerCooldown > 0) {
      game.playerCooldown -= dt;
    }

    const player = document.querySelector(".player");

    setPosition(player, game.playerX, game.playerY);
  }

  // here just checking if te player reached the boundries of the screen
  clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
  }

  destroy(container, player) {
    container.removeChild(player);

    const audio = new Audio("sound/chicken-sound.mp3");
    audio.play();
  }

  won() {
    return game.enemies.length === 0;
  }
}
