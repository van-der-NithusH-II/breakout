var blocks = []
var player, ball;
var px = 260, py = 450, pw = 100;
var gameState = 0;
let homeScreen;
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
  if(gameState == 0){
    image(homeScreen, 0,0,640, 500)
  }
  if(gameState == 1){
    blocks.forEach(b => {
      b.draw();
      b.hit();
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
  
    if(player.x + player.w > 640){
       player.x = 640 - player.w;
    } 
  
    if(player.x < 0){
       player.x = 0 
    }
  }
}
function preload(params) {
  homeScreen = loadImage('fotobehang-kleurmijninterieur-animals-3638-ve-m-gr.jpg')
}
function keyPressed(){
  if(keyCode === ENTER){
    gameState = 1
  }
}


