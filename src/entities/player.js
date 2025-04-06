export default class Player {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
  }

  moveLeft() {
    this.velocity.x = -5;
  }

  moveRight() {
    this.velocity.x = 5;
  }

  jump() {
    this.velocity.y = -10;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y += 0.5; // Gravity effect
  }

  render(context) {
    context.fillStyle = 'blue';
    context.fillRect(this.position.x, this.position.y, 50, 50);
  }
}
