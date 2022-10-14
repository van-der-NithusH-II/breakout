var blocks = []
var player, ball;
var px = 260, py = 450, pw = 100;
var gameState = 0;
let homeScreen;
var audio = new Audio('Spazzmatica-Polka.mp3');
var audio1 = new Audio('cowbell_os_1-89685.mp3')
var audio2 = new Audio('man-is-he-mega-glbml-22045.mp3')
let Gamescreen;
var highscore;
var prevscore;
var score;



function setup() {
  bg = loadImage('Schermopname%20(14).png');
  createCanvas(640, 500);

  player = new Player(px, py, pw, 5)
  ball = new Ball()
  console.log(ball)

  for (row = 0; row < 3; row++) {
    for (i = 0; i < 8; i++) {
      blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 78, 48))
    }
  }

}

var timer = 0;

function draw() {
  background(bg);
  
  textSize(10);
  text(`${timer} s`, 600, height/2);
  
  if(gameState == 0){
   timer = 0;
    image(homeScreen, 0,0,640, 500);
  }
  
  if(gameState == 1){
     if(frameCount % 60 == 0){
      timer++;
    }

  if(gameState == 2){
    console.log(highscore, 100, 100)
    console.log(prevscore,100, 150)
    console.log(score, 100, 150)
    
    loadImage(imageheheheha, 0,0);
    
  }
   playGame();
  }
}


function playGame(){
   blocks.forEach(b => {
      b.draw();
      b.hit();
    })
  
    ball.draw();
  
    player.draw();
    //check if we hit the ball
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
    if (blocks.length == 0){
      console.log("you won");
      
      score = timer
      if(prevscore > score){
        highscore = prevscore
      }
    
      
    console.log(prevscore,100, 150)
    console.log(score, 100, 150)
    console.log(highscore, 100, 100)

      gameState = 2;
      this.x = 300;
      this.y = 400;
      this.w = 20;
      this.h = 20;
      this.vx = 5;
      this.vy = -5;
      ball.y = 400;
      ball.x = 400;
      ball.vy = ball.vy * -1
      ball.vx = ball.vx * -1
      for (row = 0; row < 3; row++) {
        for (i = 0; i < 8; i++) {
          blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 78, 48))
        }
      }
    }
}

function preload() {
  homeScreen = loadImage('Intro%20page%20replit.jpg')
  imageheheheha = loadImage('gamestate2.jpg');
  audio.play('Spazzmatica-Polka.mp3');
}


function keyPressed(){
  if(keyCode === ENTER){
    gameState = 1;
    audio.pause();
    audio.currentTime = 0;
    prevscore = score
  }
}
function keyPressed(){
  if(keyCode === ENTER){
    gameState = 1;
    audio.pause();
    audio.currentTime = 0;
        prevscore = score

    audio2.play('man-is-he-mega-glbml-22045.mp3')
    audio2.loop = true;
  }
}

















