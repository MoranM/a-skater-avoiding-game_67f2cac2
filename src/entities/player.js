export default class Player {
  constructor(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = 'blue';
    this.speed = 5;
    this.jumpHeight = 100;
    this.isJumping = false;
    this.verticalVelocity = 0;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.isJumping) {
      this.y -= this.verticalVelocity;
      this.verticalVelocity -= 2;
      if (this.y >= 250) { // Ground level
        this.y = 250;
        this.isJumping = false;
        this.verticalVelocity = 0;
      }
    }
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.verticalVelocity = this.jumpHeight;
    }
  }
}