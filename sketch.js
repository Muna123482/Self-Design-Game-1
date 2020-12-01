var Aaron, backgroundImage, background1;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5;

function preload(){
  backgroundImage = loadImage("Kingdom.jpg");
  enemy1 = loadImage("enemy1.png");
  enemy2 = loadImage("enemy2.png");
  enemy3 = loadImage("enemy3.png");
  enemy4 = loadImage("enemy4.png");
  enemy5 = loadImage("enemy5.png");
}

function setup() {
  createCanvas(displayWidth-60,displayHeight-60);
  Aaron = createSprite(0, displayHeight-10, 50, 50);
  if(keyDown(RIGHT_ARROW)){
    Aaron.velocityX = 3;
  }
  background1 = createSprite(0, 0, 1200, 400);
  background1.addImage(backgroundImage);
  background1.scale = 2.7;
  background1.x = background1.width/2;
}

function draw() {
  background1.velocityX = -1;
  if(background1.x < 0){
    background1.x = background1.width/2;
  }
  spawnEnemies();  
  drawSprites();
}

function spawnEnemies(){
  if(frameCount%60 === 0){
    enemy = createSprite(displayWidth,displayHeight-40,50,50);
    enemy.velocityX = -4;
    enemy.y = Math.round(random(0, displayHeight));
    var rand = Math.round(random(1,5));
    switch(rand){
      case 1: enemy.addImage("enemy", enemy1);
      break;
      case 2: enemy.addImage("enemy", enemy2);
      break;
      case 3: enemy.addImage("enemy", enemy3);
      break;
      case 4: enemy.addImage("enemy", enemy4);
      break;
      case 5: enemy.addImage("enemy", enemy5);
      break;
      default: break;
    }
    enemy.scale = 0.5;
  }
}
