import Level from './scenes/level.js';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const level = new Level();

function gameLoop() {
  level.update();
  level.render(context);
  requestAnimationFrame(gameLoop);
}

gameLoop();
