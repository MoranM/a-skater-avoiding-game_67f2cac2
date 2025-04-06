export default class Controls {
  constructor(player) {
    this.player = player;
    this.initControls();
  }

  initControls() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.moveRight();
          break;
        case 'Space':
          this.player.jump();
          break;
        default:
          break;
      }
    });
  }
}