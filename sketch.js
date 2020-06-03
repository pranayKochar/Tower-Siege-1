const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, canvasGround, box1, box2, box3, box4, box5, box6, cannon, slingshot;

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,370,250,20);
  canvasGround = new Ground(600,480,1200,20);

  box1 = new Box(620,360,40,40);
  box2 = new Box(640,360,40,40);
  box3 = new Box(570,360,40,40);

  box4 = new Box(630,340,40,40);
  box5 = new Box(590,300,40,40);

  box6 = new Box(610,200,40,40);

  cannon = new Cannon(100,100,30,30);

  
  slingshot = new SlingShot(cannon.body,{x:200, y:100});


}
function draw() {
  background("white");  
  Engine.update(engine);
 
  ground.display();
  canvasGround.display();
 
  box1.display();
  box2.display();
  box3.display();
 
  box4.display();
  box5.display();
  
  box6.display();
  
  cannon.display();
  slingshot.display();
  
  
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(cannon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){
slingshot. attach(cannon.body);
  }
}