var fixedRect, movingRect;

var ball , ball1;

function setup(){
  createCanvas(400,400);

  fixedRect = createSprite(380,200,30,300);
  movingRect = createSprite(200,200,100,30);
  ball = createSprite(50,200,20,20);
  ball1 = createSprite(50,150,20,20);

  //movingRect.debug = true;
  //fixedRect.debug = true;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";
  ball.shapeColor = "yellow";
  ball.velocityX = 2;
  ball1.shapeColor = "purple";
  ball1.velocityX = 2;
}

function draw() {
  
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  console.log(movingRect.x - fixedRect.x);
  
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "blue";
  }

  //making the ball bounce
  if(ball.x - fixedRect.x <= ball.width/2 + fixedRect.width/2
    && fixedRect.x - ball.x <= ball.width/2 + fixedRect.width/2
    && ball.y - fixedRect.y <= ball.height/2 + fixedRect.height/2
    && fixedRect.y - ball.y <= ball.height/2 + fixedRect.height/2){
      ball.velocityX = ball.velocityX * (-1);
      ball.velocityY = ball.velocityY * (-1);
    }

   //making the ball collide
  if(ball1.x - fixedRect.x <= ball1.width/2 + fixedRect.width/2
    && fixedRect.x - ball1.x <= ball1.width/2 + fixedRect.width/2
    && ball1.y - fixedRect.y <= ball1.height/2 + fixedRect.height/2
    && fixedRect.y - ball1.y <= ball1.height/2 + fixedRect.height/2){
      ball1.velocityX = 0;
      ball1.velocityY = 0;
    }
  
  drawSprites()
}
