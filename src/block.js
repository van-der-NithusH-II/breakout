class Block {
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

if (this.y < ball.y + ball.h && this.y + this.h > ball.y){
      if(this.x < ball.x + ball.w && this.x + this.w > ball.x){
        ball.vy *= -1;
        let idx = blocks.indexOf(this); 
        blocks.splice(idx,+1)
        console.log("remove block number [" + idx +"] from the list of balls");
        console.log(blocks.length)
          audio1.play('mixkit-system-break-2942.wav');
          audio1.play('cowbell_os_1-89685.mp3');
            }
          }
        }

     
}
    


