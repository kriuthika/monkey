
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
survivaltime = 0;
var  obstacle
var message,paintImage,gameover,gameoverImage;

PLAY = 1;
END = 0;
var gameState = PLAY

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
paintImage = loadImage("paint.png");
  gameoverImage = loadImage("gameover.png");
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(100,510,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground =createSprite(600,580,1200,20);
  
  gameover = createSprite(300,300,10,10);
  gameover.addImage(gameoverImage);
  gameover.scale = 0.5;
     ground.x = ground.width/2;
  ground.velocityX = -4;
 
 FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("pink");
  gameover.visible = false;
  if(gameState === PLAY){
    
    
    if(ground.x<0){
  ground.x = ground.width/2;
}
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,200,20);
    console.log(monkey.y);
  
  
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY = -10;
  }

monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnBananas();
  spawnObstacle();  
    
  }
if(monkey.isTouching(obstacleGroup)){
  
  gameStae = END;
    gameover.visible = true;
}
  
  
  if(gameState === END){
    monkey.velocityY = 0;
  obstacleGroup.setVelocityEach(0);
  FoodGroup.setVelocityEach(0);

  
    
  }
drawSprites();

}


function spawnBananas(){
 
 
  
  
  
  if(frameCount%100===0){
     var banana = createSprite(600,50,20,20);
   
    banana.addImage(bananaImage);
  banana.scale = 0.1;
banana.velocityX = -6;
      if(banana.x>=0){
    banana.x = 400;  
    FoodGroup.add(banana)
FoodGroup.setLifetimeEach(50);
  
  }
  }
  
  
  

}


function spawnObstacle(){

  if(frameCount%300===0){
      var obstacle = createSprite(600,600,50,50);
    obstacle.y = Math.round(random(1,100))
  obstacle.addImage(obstacleImage);
      obstacle.velocityX = obstacle.velocityX-5;
  obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle);
    if(obstacle.x>=0){
      obstacle.y  = 560;
    }
obstacleGroup.setLifetimeEach(80);
  }

}

