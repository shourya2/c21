var fixedRect, movingRect;
var rec1,rec2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rec1 = createSprite(200,200,20,20)
  rec2 = createSprite(200,300,20,20)
  rec1.shapeColor = "red";
  rec2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(myisTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(myisTouching(movingRect,rec1)){
    movingRect.shapeColor = "yellow";
    rec1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    rec1.shapeColor = "green";
  }


  
  drawSprites();
}
function myisTouching(ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 +ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {

  return true;
}
else {
  return false;
}

}