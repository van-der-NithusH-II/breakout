class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill("#66ccff")
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