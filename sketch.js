
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	
	createCanvas(840, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(420,150,450,50)

	bobObject1 = new bob(260,350,80,80)
	bobObject2 = new bob(340,350,80,80)
	bobObject3 = new bob(420,350,80,80)
	bobObject4 = new bob(500,350,80,80)
	bobObject5 = new bob(580,350,80,80)

	rope1 = new Rope(bobObject1.body, roof.body, -160, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -80, 0)
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0)
	rope4 = new Rope(bobObject4.body, roof.body, +80, 0)
	rope5 = new Rope(bobObject5.body, roof.body, +160, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



