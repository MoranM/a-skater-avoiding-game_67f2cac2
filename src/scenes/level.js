import Player from '../entities/player.js';
import setupControls from '../components/controls.js';

export default class Level {
  constructor() {
    this.player = new Player();
    setupControls(this.player);
  }

  update() {
    this.player.update();
  }

  render(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    this.player.render(context);
  }
}
