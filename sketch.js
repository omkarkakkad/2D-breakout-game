var leftEdge,rightEdge,topEdge,bottomEdge;

var player,ball;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;

var score = 0;

var life = 2;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ball_Image;

var hit_Sound;
var die_Sound;
var score_Sound;
var player_Sound;

function preload(){

  ball_Image = loadImage("ball.png");

  hit_Sound = loadSound("hit_Sound.mp3");
  die_Sound = loadSound("die_Sound.mp3");
  score_Sound = loadSound("score_Sound.mp3");
  player_Sound = loadSound("player_Sound.mp3");
}

function setup() {
  createCanvas(750,565);

  leftEdge = createSprite(1,300,5,600);
  leftEdge.shapeColor = "gray";
  leftEdge.visible = false;

  rightEdge = createSprite(748,300,5,600);
  rightEdge.shapeColor = "gray";
  rightEdge.visible = false;

  topEdge = createSprite(375,3,750,5);
  topEdge.shapeColor = "gray";
  topEdge.visible = false;

  bottomEdge = createSprite(375,565,750,5);
  bottomEdge.shapeColor = "gray";
  bottomEdge.visible = false;

  box1 = createSprite(100,75,120,33);
	box1.shapeColor=color(0,135,255);

  box2 = createSprite(240,75,120,33);
	box2.shapeColor=color(0,135,255);

  box3 = createSprite(380,75,120,33);
	box3.shapeColor=color(0,135,255);

  box4 = createSprite(520,75,120,33);
	box4.shapeColor=color(0,135,255);

  box5 = createSprite(660,75,120,33);
	box5.shapeColor=color(0,135,255);
  
  box6 = createSprite(100,125,120,33);
	box6.shapeColor=color(0,135,255);

  box7 = createSprite(240,125,120,33);
	box7.shapeColor=color(0,135,255);

  box8 = createSprite(380,125,120,33);
	box8.shapeColor=color(0,135,255);

  box9 = createSprite(520,125,120,33);
	box9.shapeColor=color(0,135,255);

  box10 = createSprite(660,125,120,33);
	box10.shapeColor=color(0,135,255);

  box11 = createSprite(100,175,120,33);
	box11.shapeColor=color(0,135,255);

  box12 = createSprite(240,175,120,33);
	box12.shapeColor=color(0,135,255);

  box13 = createSprite(380,175,120,33);
	box13.shapeColor=color(0,135,255);

  box14 = createSprite(520,175,120,33);
	box14.shapeColor=color(0,135,255);

  box15 = createSprite(660,175,120,33);
	box15.shapeColor=color(0,135,255);

  player = createSprite(350,550,120,16);
  player.shapeColor=color(0,135,255);

  ball = createSprite(350,540,20,20);
  ball.addImage("circle",ball_Image);
  ball.scale = 0.08;
  ball.velocityY = -13;

  ball.velocityX = +5;

}

function draw() {

  background(235,235,235); 

    strokeWeight(2);
    stroke("white");
    textSize(35);
    fill("black");
    text("Score: "+score,25,35);

    strokeWeight(2);
    stroke("white");
    textSize(35);
    fill("black");
    text("Life: "+life,620,35);

    if (gameState === PLAY){

      if(keyDown("left_arrow")){
        player.x = player.x-18;
      }
    
      if(keyDown("right_arrow")){
        player.x = player.x+18;
      }
    
      player.collide(leftEdge);
      player.collide(rightEdge);
        
      if(ball.isTouching(box1)){
        ball.bounceOff(box1);
        box1.destroy();

        score_Sound.play();
        
        score = score + 2;
      }
    
      if(ball.isTouching(box2)){
        ball.bounceOff(box2);
        box2.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box3)){
        ball.bounceOff(box3);
        box3.destroy();

        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box4)){
        ball.bounceOff(box4);
        box4.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box5)){
        ball.bounceOff(box5);
        box5.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box6)){
        ball.bounceOff(box6);
        box6.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box7)){
        ball.bounceOff(box7);
        box7.destroy();
        score_Sound.play();

        score = score + 2;
      }
      
      if(ball.isTouching(box8)){
        ball.bounceOff(box8);
        box8.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box9)){
        ball.bounceOff(box9);
        box9.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box10)){
        ball.bounceOff(box10);
        box10.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box11)){
        ball.bounceOff(box11);
        box11.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box12)){
        ball.bounceOff(box12);
        box12.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box13)){
        ball.bounceOff(box13);
        box13.destroy();
        score_Sound.play();

        score = score + 2;
      } 
    
      if(ball.isTouching(box14)){
        ball.bounceOff(box14);
        box14.destroy();
        score_Sound.play();

        score = score + 2;
      }
    
      if(ball.isTouching(box15)){
        ball.bounceOff(box15);
        box15.destroy();
        score_Sound.play();

        score = score + 2;
      }

      if(ball.isTouching(bottomEdge)){

        life = life - 1;
        ball.bounceOff(bottomEdge);

        die_Sound.play();
        
      }

      if(ball.isTouching(topEdge)){

        ball.bounceOff(topEdge);

        hit_Sound.play();
        
      }

      if(ball.isTouching(leftEdge)){

        ball.bounceOff(leftEdge);

        hit_Sound.play();
        
      }

      if(ball.isTouching(rightEdge)){

        ball.bounceOff(rightEdge);

        hit_Sound.play();
        
      }

      if(ball.isTouching(player)){
        player_Sound.play();
        ball.bounceOff(player);
        
      }

      if(score === 30){
        
      ball.velocityX = 0;
      ball.velocityY = 0;

        strokeWeight(8);
        stroke("black");
        textSize(45);
        fill("white");
        text("YOU WIN",270,250);

        strokeWeight(8);
        stroke("black");
        textSize(45);
        fill("white");
        text("press F5 to play again",150,350);

        player.destroy();
        ball.destroy();


      }

      if(life === 0 ){
        
        gameState = END;
          
        }
        
    }

    else if(gameState === END){

      ball.velocityX = 0;
      ball.velocityY = 0;

      player.velocityX = 0;


      strokeWeight(8);
       stroke("black");
       textSize(45);
       fill("white");
       text("YOU LOSE",230,300);

       strokeWeight(8);
       stroke("black");
       textSize(45);
       fill("white");
       text("press F5 to play again",150,400);

    
  }

  drawSprites();

}