var monkey , monkey_running, monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground,bkground,bkgroundImg;
var stone,stoneImg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage = loadImage("sprite_0.png");
  bkgroundImg= loadImage("bg_1.jpg");
  stoneImg=loadImage("stone.png");
}



function setup() {
  createCanvas(400,400);
  
  ground=createSprite(400,400,800,10);
  bkground= createSprite(0,0,400,400);
  bkground.addImage(bkgroundImg);
  bkground.scale=2.10;
  
  bkground.velocityX=-3;
  
  monkey=createSprite(40,370,20,20);
  //monkey.addImage(monkeyImage);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  stone= createSprite(300,380,50,50);
  stone.addImage(stoneImg);
  
  FoodGroup= new Group();

}

if(monkey.isTouching(FoodGroup)){
      monkey.scale=monkey.scale+2;
 }
if(monkey.isTouching(obstacleGroup)){
      monkey.scale=monkey.scale-1;
 }

function draw(){
  background("white");
  
  if(keyDown("space")&& monkey.y>=250){
     monkey.velocityY=-10;
   }
   
  monkey.velocityY=monkey.velocityY+1;

  if(bkground.x<0){
     bkground.x=400;
  }
   
  if(FoodGroup.isTouching(monkey)){
    
    //var dead = spawnBananas();
    FoodGroup.destroyEach();
    score= score+1;
    
    //banana.destroy();
  }
  
  
  spawnBananas();
  monkey.collide(ground);
  drawSprites();
  fill("black");
  textSize(20);
  text(" Survial Time :"+score,100,50);
}

function spawnBananas(){
  if(frameCount % 120 === 0){
   var banana=createSprite(400,200,20,20);
   banana.y=Math.round(random(200,300))
   banana.addImage(bananaImage);
   banana.scale=0.05;
   banana.velocityX=-3;
   FoodGroup.add(banana);
    
   
   }
}






