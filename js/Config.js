// const game = document.querySelector('.game');
// const width = game.offsetWidth;
// console.log(width);
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 50;
let PLAYER_MAX_SPEED = 500;

let LASER_LEVELS = 1;
let LASER_MAX_SPEED = 800.0;
let LASER_ENEMY_MAX_SPEED = 300.0;
let LASER_COOLDOWN = 0.1;


let ENEMIES_PER_ROW = 5;
let ENEMIES_PER_COLUNM = 2;
let ENEMY_HORIZONTAL_PADDING = 80;
let ENEMY_VERTICAL_PADDING = 70;
let ENEMY_VERTICAL_SPACING = 80;
let ENEMY_COOLDOWN = 20;

let KEY_CODE_LEFT = 37;
let KEY_CODE_RIGHT = 39;
let KEY_CODE_UP = 38;
let KEY_CODE_DOWN = 40;
let KEY_CODE_SPACE = 32;
let GAME_HEIGHT = window.innerHeight -20;
let GAME_WIDTH = window.innerWidth - 10;
let ENEMY_X = 70;
let ENEMY_Y = 50;
let PAUSE = false;
let SCORE = 0;
let lives = 5;
let levels = 1;
let AUDIO = true
let PLAYERS_KEY = "players"
let PLAYER_NAME = "player"