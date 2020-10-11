var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bucket1;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	 World.add(world, ground);
	 
	 bucket1= new Bucket(480,620,10,80);
	 bucket2= new Bucket(320,620,10,80);
	 bucket3= new Bucket(400,655,150,10);
  

	 Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  bucket1.display();
  bucket2.display();
  bucket3.display();

  drawSprites();
 
}