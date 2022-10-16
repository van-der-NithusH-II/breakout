var blocks = [];
var player, ball;
var px = 260, py = 450, pw = 100;
var gameState = 0;
var audio = new Audio('Spazzmatica-Polka.mp3');
var audio1 = new Audio('cowbell_os_1-89685.mp3');
var audio2 = new Audio('man-is-he-mega-glbml-22045.mp3');

//The images for the game
function preload() {
  	homescreen = loadImage('Intro-page-replit.jpg');
	 bg = loadImage('Schermopname%20(14).png');
	 winscreen = loadImage('Gamestate3.jpg');
	 deathscreen = loadImage('gamestate2!.jpg');
}
 
function setup() {
    createCanvas(640, 500);
 
  	player = new Player(px, py, pw, 5);
  	ball = new Ball();
  	console.log(ball);
  	for (row = 0; row < 3; row++) {
    	for (i = 0; i < 8; i++) {
      		blocks.push(new Block((80 * i) + 10, (50 * row) + 10, 78, 48));
    	}
  	}
}
 
 //The gameStates
function draw() {
  	background(bg);
  	if (gameState == 0) {
    	menu();
  	} else if (gameState == 1) {
        audio.pause();
		game();
	} else if(gameState == 2) {
        audio2.pause();
    	lose();
  	} else if (gameState == 3) {
        audio2.pause();
		win();
	}
}
 
function menu() {
    audio.play();
	image(homescreen, 0, 0, 640, 500);
}
 
// play the game
function game(){
    audio2.play();
   	blocks.forEach(b => {
      	b.draw();
      	b.hit();
    })
 
    ball.draw();
    player.draw();
    //check if we hit the ball
    player.hit();
 
  	// the keys to play
    if (keyIsDown(37)) {
      	player.x -= 5;
    }
 
    if (keyIsDown(39)) {
      	player.x += 5;
    }
 
    if(player.x + player.w > 640) {
       	player.x = 640 - player.w;
    } 
 
    if(player.x < 0) {
       	player.x = 0;
    }
 
	if (ball.y > 490) {
		gameState = 2;
	}
 
    if (blocks.length == 0) {
      	gameState = 3;
    }
}
 
function lose() {
	image(deathscreen, 0, 0, 640, 500);
}
 
function win() {
	image(winscreen, 0, 0, 640, 500);
}
 
// If player clicks enter gameState switches
function keyPressed(){
  	if(keyCode === ENTER) {
		if (gameState == 0) {
			gameState = 1;
		} else if (gameState == 2) {
			player = null;
			ball = null;
			blocks = [];
			setup();
			gameState = 1;
		} else if (gameState == 3) {
			player = null;
			ball = null;
			setup();
			gameState = 1;
		}
  	}
}