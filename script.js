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
var block1

function setup() {
  createCanvas(640, 500);
  

  block1 = new Block(260,470,99,5)

  
  for(row = 0; row < 3; row++){
    for(i = 0; i < 8; i++){
      blocks.push(new Block((80 * i) + 10, (50 * row) +10,60,30))
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

block1.draw();

  if(keyIsDown(37)){
    block1.x -= 5;
  }
  if(keyIsDown(39)){
    block1.x += 5;
  }

}

