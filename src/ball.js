class Ball {
  constructor() {
    this.x = 300;
    this.y = 400;
    this.w = 20;
    this.h = 20;
    this.vx = 5;
    this.vy = -5;
  }
  draw() {

    fill("#66ccff");

    ellipse(this.x, this.y, this.w, this.h);

    if (this.x - this.w / 2 < 0 || this.x + this.w / 2 > width) {
      this.vx *= -1
    }
    if (this.y - this.h / 2 < 0 || this.y + this.h / 2 > height) {
      this.vy *= -1;
    }
    if (this.y >= 480) {
      console.log("DIE!");
      gameState = 0;
      this.x = 300;
      this.y = 400;
      this.w = 20;
      this.h = 20;
      this.vx = 5;
      this.vy = -5;
      ball.xy = 10;
      for (row = 0; row < 3; row++) {
        for (i = 0; i < 8; i++) {
          blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 83,
            50))
        }
      }
    }

    this.x += this.vx;
    this.y += this.vy;

  }

}
