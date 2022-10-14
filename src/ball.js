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

    //the ball
    ellipse(this.x, this.y, this.w, this.h);
    
    if (this.x - this.w / 2 < 0 || this.x + this.w / 2 > width) {
      this.vx *= -1
    }
    if (this.y - this.h / 2 < 0 || this.y + this.h / 2 > height) {
      this.vy *= -1;
    }

    //if you lose
    if (this.y >= 480) {
      image(imageheheheha, 0,0)
      console.log("DIE!");
      score = timer
      prevscore = score
      if (prevscore > score) {
        highscore = prevscore
      }

      console.log(highscore, 100, 100)
      console.log(prevscore, 100, 150)
      console.log(score, 100, 150)
      blocks = []


      gameState = 2;

      this.x = 300;
      this.y = 400;
      this.w = 20;
      this.h = 20;
      this.vx = 5;
      this.vy = -5;
      ball.y = 400;
      ball.x = 400;
      ball.vy = ball.vy * 1
      ball.vx = ball.vx * 1
      for (row = 0; row < 3; row++) {
        for (i = 0; i < 8; i++) {
          blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 78,
            48))
          }
        }
      }
    

    this.x += this.vx;
    this.y += this.vy;

  }
 
}
