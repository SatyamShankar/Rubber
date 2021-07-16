
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rubber,hammer,ground,sand1,sand2,sand3,sand4,sand5,sand6,stone,iron

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
  rubber = new Rubber(400,400,100);

stone = new Stone(300,500)
	
  hammer = new Hammer(600,500)

  ground = new Ground(350,height,800,30)

  sand1 = new Sand(400,500,5)
  sand2 = new Sand(400,510,5)
  sand3 = new Sand(400,520,5)
  sand4 = new Sand(400,530,5)
  sand5 = new Sand(400,540,5)
  sand6 = new Sand(400,550,5)

  iron = new Iron(600,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
 createEdgeSprites();
 Engine.update(engine)

stone.display()

  rubber.display();

 hammer.display();

  ground.display()
  
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()

iron.display()

  drawSprites();
 
}



