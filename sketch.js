
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var paper
 var ground 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,100,60,60)
	ground = new Ground( 200,350,400,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
 ground.display()
}

function keyPressed(){
 if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body.position,{x:85 , y : -85})
 }

}



