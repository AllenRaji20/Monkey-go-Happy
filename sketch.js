var player;
var player_running;
var bananaImage;
var obstacleImage, obstaclesGroup;
var bakground; 
var count=0;

function preload(){
    backImage=loadImage("jungle.jpg");
  player_running =       loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  bakground = createSprite(200,200,200,200);
  bakground.addImage("jungle.jpg",backImage);
  bakground.velocityX = -4;

  player = createSprite(50,350,20,50)
  player.addAnimation("running",player_running);
  player.scale = 0.15;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
}

function draw(){ 
  background(220)
  
  
  count = count + Math.round(getFrameRate()/60);
  
   if (bakground.x < 0){
      bakground.x = bakground.width/2;
  }
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text( "Score: " + count, 500, 500);
}

function spawnobstacles(){
    if(frameCount % 300 === 0) {
    var obstacle = createSprite(50,350,50,50);
        
    obstacle.velocityX = -(6 + 3 * Math.round(count/ 100) ) ;
    Math.round(count / 100);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 16;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}