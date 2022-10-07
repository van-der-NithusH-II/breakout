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
        console.log(this.x+this.w/2 - ball.x); 
        ball.vx = ((this.x+this.w/2 - ball.x)/8)*-1;
        ball.vy *= -1;
      }
    }
  }
}