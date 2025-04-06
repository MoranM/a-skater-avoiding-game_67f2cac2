import Player from '../entities/player.js';
import Controls from '../components/controls.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d');
    this.player = new Player(this.context, 100, 250);
    this.controls = new Controls(this.player);
    this.loop();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loop() {
    this.clearCanvas();
    this.player.update();
    this.player.draw();
    requestAnimationFrame(() => this.loop());
  }
}

window.onload = () => {
  new Game();
};