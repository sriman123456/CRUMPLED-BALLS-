
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperObject = createSprite(50,655,30,30);
	paperObject.shapeColor="blue";

	dustbin1 = createSprite(750,600,15,150);
	dustbin1.shapeColor="cyan";
	dustbin2 = createSprite(619,663,250,15);
	dustbin2.shapeColor="cyan";
	dustbin3 = createSprite(500,600,15,150);
	dustbin3.shapeColor="cyan";

    ground = createSprite(780,680,2000,20);
    ground.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		 
    Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});

	}
}

