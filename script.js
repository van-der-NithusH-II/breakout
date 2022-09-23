class Block {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }
}

var blocks = []

function setup() {
  createCanvas(600, 500);

  
  for(row = 0; row < 3; row++){
    for(i = 0; i < 7; i++){
      blocks.push(new Block((80 * i) + 10, (50 * row) + 10,70,30))
    }  
  }

}

function draw() {
  background(225);

  ellipse(310, 450, 20, 20)

  fill("black");
  
  blocks.forEach(b=> {
    b.draw();
  })

  


}

function keyPressed() {
  if (keyCode == 37) {
    block.x -= 5;
  }
  if (keyCode == 39) {
    block.x += 5;
  }
}