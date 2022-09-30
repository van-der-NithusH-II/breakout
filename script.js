class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill("blue")
    rect(this.x, this.y, this.w, this.h);
  }

  hit() {
    if (this.y < ball.y + (ball.h / 2)){
      if(this.x < ball.x + ball.w && this.x + this.w > ball.x){
        ball.vy *= -1;      
      }      
    }
  }
}

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
    
    fill("red");
    
    ellipse(this.x, this.y, this.w, this.h);

    if (this.x - this.w / 2 < 0 || this.x + this.w / 2 > width) {
      this.vx *= -1
    }
    if (this.y - this.h / 2 < 0 || this.y + this.h / 2 > height) {
      this.vy *= -1
    }

    this.x += this.vx;
    this.y += this.vy;

  }

}


class Block {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill("green")
    rect(this.x, this.y, this.w, this.h);
  }
}

var blocks = []
var player, ball;
var px = 260, py = 450, pw = 100;

function setup() {
  createCanvas(640, 500);


  player = new Player(px, py, pw, 5)
  ball = new Ball();
  console.log(ball)

  for (row = 0; row < 3; row++) {
    for (i = 0; i < 8; i++) {
      blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 60, 30))
    }
  }

}

function draw() {
  background(0, 0, 0);

  blocks.forEach(b => {
    b.draw();
  })

  ball.draw();

  player.draw();
  // check if we hit the ball
  player.hit();

  if (keyIsDown(37)) {
    player.x -= 5;
  }
  if (keyIsDown(39)) {
    player.x += 5;
  }


}


