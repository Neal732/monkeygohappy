var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,600);
  monkey =createSprite(50,530,10,10);
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale=0.11;
  
  foodGroup=createGroup();
  
  ground=createSprite(300,580,width,40);
}


function draw() {
  background("skyblue");
  text(score,500,200);
  
  monkey.collide(ground);
  ground.velocityX=-3;
  
  if(ground.x<290){
    ground.x=300;
  }
  
  if(keyDown("space") && (monkey.y>526)){
    monkey.velocityY=-10;
  }
  console.log(monkey.y);
  monkey.velocityY= monkey.velocityY+0.5;
  
  if(foodGroup.isTouching(monkey)){
    score++;
  }
  
  food();
  obstacle1();
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(600,470,10,10)
    banana.addImage("bbab", bananaImage)
    banana.scale=0.075;
    banana.velocityX=-3;
    foodGroup.add(banana);
  }  
}

function obstacle1(){
  if(frameCount%150===0){
    obstacle=createSprite(600,540,10,10)
  obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
    obstacle.addImage("ddddd", obstacleImage)
    obstacle.scale=0.1;
    obstacle.velocityX=-6; 
    obstacle.collide(ground);
  }
}






