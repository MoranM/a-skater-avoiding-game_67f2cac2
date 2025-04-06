export default function setupControls(player) {
  window.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'ArrowLeft':
        player.moveLeft();
        break;
      case 'ArrowRight':
        player.moveRight();
        break;
      case 'Space':
        player.jump();
        break;
    }
  });
}
